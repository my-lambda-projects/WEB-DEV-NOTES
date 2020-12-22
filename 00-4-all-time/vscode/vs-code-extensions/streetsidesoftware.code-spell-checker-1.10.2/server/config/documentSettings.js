"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugExports = exports.stringifyPatterns = exports.correctBadSettings = exports.doesUriMatchAnyScheme = exports.isUriBlackListed = exports.isUriAllowed = exports.DocumentSettings = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// cSpell:ignore pycache
const vscode_config_1 = require("./vscode.config");
const path = require("path");
const fs = require("fs-extra");
const CSpell = require("cspell-lib");
const vscode_uri_1 = require("vscode-uri");
const log_1 = require("../utils/log");
const utils_1 = require("../utils");
const autoLoad_1 = require("../utils/autoLoad");
const cspell_glob_1 = require("cspell-glob");
const os = require("os");
const WorkspacePathResolver_1 = require("./WorkspacePathResolver");
const gensequence_1 = require("gensequence");
const cSpellSection = 'cSpell';
const defaultExclude = [
    '**/*.rendered',
    '**/*.*.rendered',
    '__pycache__/**',
];
const defaultAllowedSchemes = ['gist', 'file', 'sftp', 'untitled'];
const schemeBlackList = ['git', 'output', 'debug', 'vscode'];
const defaultRootUri = vscode_uri_1.URI.file('').toString();
class DocumentSettings {
    constructor(connection, defaultSettings) {
        this.connection = connection;
        this.defaultSettings = defaultSettings;
        // Cache per folder settings
        this.cachedValues = [];
        this.getUriSettings = this.createCache((key = '') => this._getUriSettings(key));
        this.fetchSettingsForUri = this.createCache((key) => this._fetchSettingsForUri(key));
        this._cspellFileSettingsByFolderCache = this.createCache(_readSettingsForFolderUri);
        this.fetchVSCodeConfiguration = this.createCache((key) => this._fetchVSCodeConfiguration(key));
        this._folders = this.createLazy(() => this.fetchFolders());
        this.configsToImport = new Set();
        this.importedSettings = this.createLazy(() => this._importSettings());
        this._version = 0;
    }
    async getSettings(document) {
        return this.getUriSettings(document.uri);
    }
    _getUriSettings(uri) {
        log_1.log('getUriSettings:', uri);
        return this.fetchUriSettings(uri || '');
    }
    async isExcluded(uri) {
        const settings = await this.fetchSettingsForUri(uri);
        return settings.globMatcher.match(vscode_uri_1.URI.parse(uri).path);
    }
    async calcExcludedBy(uri, withSettings) {
        const extSettings = { ...(await this.fetchUriSettingsEx(uri)) };
        extSettings.settings = withSettings || extSettings.settings;
        return calcExcludedBy(uri, extSettings);
    }
    resetSettings() {
        log_1.log('resetSettings');
        CSpell.clearCachedSettings();
        this.cachedValues.forEach((cache) => cache.clear());
        this._version += 1;
    }
    get folders() {
        return this._folders();
    }
    _importSettings() {
        log_1.log('importSettings');
        const importPaths = [...this.configsToImport.keys()].sort();
        return readSettingsFiles(importPaths);
    }
    get version() {
        return this._version;
    }
    registerConfigurationFile(path) {
        log_1.log('registerConfigurationFile:', path);
        this.configsToImport.add(path);
        this.importedSettings.clear();
        this.resetSettings();
    }
    async fetchUriSettings(uri) {
        log_1.log('Start fetchUriSettings:', uri);
        const exSettings = await this.fetchUriSettingsEx(uri);
        log_1.log('Finish fetchUriSettings:', uri);
        return exSettings.settings;
    }
    async fetchUriSettingsEx(uri) {
        log_1.log('Start fetchUriSettingsEx:', uri);
        const folderSettings = await this.fetchSettingsForUri(uri);
        const importedSettings = this.importedSettings();
        const mergedSettings = CSpell.mergeSettings(this.defaultSettings, importedSettings, folderSettings.settings);
        const enabledFiletypes = extractEnableFiletypes(this.defaultSettings, importedSettings, folderSettings.settings);
        const spellSettings = applyEnableFiletypes(enabledFiletypes, mergedSettings);
        const fileUri = vscode_uri_1.URI.parse(uri);
        const fileSettings = CSpell.calcOverrideSettings(spellSettings, fileUri.fsPath);
        log_1.log('Finish fetchUriSettingsEx:', uri);
        return { ...folderSettings, settings: fileSettings };
    }
    async findMatchingFolder(docUri) {
        const root = vscode_uri_1.URI.parse(docUri || defaultRootUri).with({ path: '' });
        return (await this.matchingFoldersForUri(docUri))[0] || { uri: root.toString(), name: 'root' };
    }
    async fetchFolders() {
        return (await vscode_config_1.getWorkspaceFolders(this.connection)) || [];
    }
    async _fetchVSCodeConfiguration(uri) {
        return (await vscode_config_1.getConfiguration(this.connection, [{ scopeUri: uri || undefined, section: cSpellSection }, { section: 'search' }])).map((v) => v || {});
    }
    async fetchSettingsFromVSCode(uri) {
        const configs = await this.fetchVSCodeConfiguration(uri || '');
        const [cSpell, search] = configs;
        const { exclude = {} } = search;
        const { ignorePaths = [] } = cSpell;
        const cSpellConfigSettings = {
            ...cSpell,
            id: 'VSCode-Config',
            ignorePaths: ignorePaths.concat(CSpell.ExclusionHelper.extractGlobsFromExcludeFilesGlobMap(exclude)),
        };
        return cSpellConfigSettings;
    }
    async _fetchSettingsForUri(docUri) {
        log_1.log(`fetchFolderSettings: URI ${docUri}`);
        const cSpellConfigSettingsRel = await this.fetchSettingsFromVSCode(docUri);
        const cSpellConfigSettings = await this.resolveWorkspacePaths(cSpellConfigSettingsRel, docUri);
        const workspaceSettings = await this.loadWorkspaceSettings(cSpellConfigSettings.workspaceRootPath);
        const folder = await this.findMatchingFolder(docUri);
        const cSpellFolderSettings = resolveConfigImports(cSpellConfigSettings, folder.uri);
        const settings = this.readSettingsForFolderUri(folder.uri);
        // cspell.json file settings take precedence over the vscode settings.
        const mergedSettings = CSpell.mergeSettings(workspaceSettings, cSpellFolderSettings, settings);
        const { ignorePaths = [] } = mergedSettings;
        const globs = defaultExclude.concat(ignorePaths);
        const root = vscode_uri_1.URI.parse(folder.uri).path;
        const globMatcher = new cspell_glob_1.GlobMatcher(globs, root);
        const ext = {
            uri: docUri,
            vscodeSettings: { cSpell: cSpellConfigSettings },
            settings: mergedSettings,
            globMatcher,
        };
        return ext;
    }
    async loadWorkspaceSettings(workspaceRoot) {
        if (!workspaceRoot) {
            const rootFolder = (await this.folders)[0];
            if (!rootFolder)
                return {};
            return this.readSettingsForFolderUri(rootFolder.uri);
        }
        return this.readSettingsForFolderUri(vscode_uri_1.URI.file(workspaceRoot).toString());
    }
    async resolveWorkspacePaths(settings, docUri) {
        const folders = await this.folders;
        const folder = await this.findMatchingFolder(docUri);
        const resolver = WorkspacePathResolver_1.createWorkspaceNamesResolver(folder, folders, settings.workspaceRootPath);
        return WorkspacePathResolver_1.resolveSettings(settings, resolver);
    }
    async matchingFoldersForUri(docUri) {
        const folders = await this.folders;
        return folders
            .filter(({ uri }) => uri === docUri.slice(0, uri.length))
            .sort((a, b) => a.uri.length - b.uri.length)
            .reverse();
    }
    createCache(loader) {
        const cache = autoLoad_1.createAutoLoadCache(loader);
        this.cachedValues.push(cache);
        return cache;
    }
    createLazy(loader) {
        const lazy = autoLoad_1.createLazyValue(loader);
        this.cachedValues.push(lazy);
        return lazy;
    }
    readSettingsForFolderUri(folderUri) {
        return this._cspellFileSettingsByFolderCache.get(folderUri);
    }
}
exports.DocumentSettings = DocumentSettings;
function configPathsForRoot(workspaceRootUri) {
    const workspaceRoot = workspaceRootUri ? vscode_uri_1.URI.parse(workspaceRootUri).fsPath : '';
    const paths = workspaceRoot
        ? [
            path.join(workspaceRoot, '.vscode', CSpell.defaultSettingsFilename.toLowerCase()),
            path.join(workspaceRoot, '.vscode', CSpell.defaultSettingsFilename),
            path.join(workspaceRoot, '.' + CSpell.defaultSettingsFilename.toLowerCase()),
            path.join(workspaceRoot, CSpell.defaultSettingsFilename.toLowerCase()),
            path.join(workspaceRoot, CSpell.defaultSettingsFilename),
        ]
        : [];
    return paths;
}
function resolveConfigImports(config, folderUri) {
    log_1.log('resolveConfigImports:', folderUri);
    const uriFsPath = vscode_uri_1.URI.parse(folderUri).fsPath;
    const imports = typeof config.import === 'string' ? [config.import] : config.import || [];
    const importAbsPath = imports.map((file) => resolvePath(uriFsPath, file));
    log_1.log(`resolvingConfigImports: [\n${imports.join('\n')}]`);
    log_1.log(`resolvingConfigImports ABS: [\n${importAbsPath.join('\n')}]`);
    const { import: _import, ...result } = importAbsPath.length
        ? CSpell.mergeSettings(readSettingsFiles([...importAbsPath]), config)
        : config;
    return result;
}
function _readSettingsForFolderUri(folderUri) {
    return folderUri ? readSettingsFiles(configPathsForRoot(folderUri)) : {};
}
function readSettingsFiles(paths) {
    // log('readSettingsFiles:', paths);
    const existingPaths = paths.filter((filename) => exists(filename));
    log_1.log('readSettingsFiles:', existingPaths);
    return existingPaths.length ? CSpell.readSettingsFiles(existingPaths) : {};
}
function exists(file) {
    try {
        const s = fs.statSync(file);
        return s.isFile();
    }
    catch (e) { }
    return false;
}
function resolvePath(...parts) {
    const normalizedParts = parts.map((part) => (part[0] === '~' ? os.homedir() + part.slice(1) : part));
    return path.resolve(...normalizedParts);
}
function isUriAllowed(uri, schemes) {
    schemes = schemes || defaultAllowedSchemes;
    return doesUriMatchAnyScheme(uri, schemes);
}
exports.isUriAllowed = isUriAllowed;
function isUriBlackListed(uri, schemes = schemeBlackList) {
    return doesUriMatchAnyScheme(uri, schemes);
}
exports.isUriBlackListed = isUriBlackListed;
function doesUriMatchAnyScheme(uri, schemes) {
    const schema = vscode_uri_1.URI.parse(uri).scheme;
    return schemes.findIndex((v) => v === schema) >= 0;
}
exports.doesUriMatchAnyScheme = doesUriMatchAnyScheme;
function extractEnableFiletypes(...settings) {
    return settings.map(({ enableFiletypes = [] }) => enableFiletypes).reduce((acc, next) => acc.concat(next), []);
}
function applyEnableFiletypes(enableFiletypes, settings) {
    const { enableFiletypes: _, enabledLanguageIds = [], ...rest } = settings;
    const enabled = new Set(enabledLanguageIds);
    enableFiletypes
        .filter((a) => !!a)
        .map((a) => a.toLowerCase())
        .forEach((lang) => {
        if (lang[0] === '!') {
            enabled.delete(lang.slice(1));
        }
        else {
            enabled.add(lang);
        }
    });
    return enabled.size || settings.enabledLanguageIds !== undefined ? { ...rest, enabledLanguageIds: [...enabled] } : { ...rest };
}
const correctRegExMap = new Map([
    ['/"""(.*?\\n?)+?"""/g', '/(""")[^\\1]*?\\1/g'],
    ["/'''(.*?\\n?)+?'''/g", "/(''')[^\\1]*?\\1/g"],
]);
function fixRegEx(pat) {
    if (typeof pat != 'string') {
        return pat;
    }
    return correctRegExMap.get(pat) || pat;
}
function fixRegPattern(pat) {
    if (Array.isArray(pat)) {
        return pat.map(fixRegEx);
    }
    return fixRegEx(pat);
}
function fixPattern(pat) {
    const pattern = fixRegPattern(pat.pattern);
    if (pattern === pat.pattern) {
        return pat;
    }
    return { ...pat, pattern };
}
function correctBadSettings(settings) {
    var _a, _b, _c;
    const newSettings = { ...settings };
    // Fix patterns
    newSettings.patterns = (_a = newSettings === null || newSettings === void 0 ? void 0 : newSettings.patterns) === null || _a === void 0 ? void 0 : _a.map(fixPattern);
    newSettings.ignoreRegExpList = (_b = newSettings === null || newSettings === void 0 ? void 0 : newSettings.ignoreRegExpList) === null || _b === void 0 ? void 0 : _b.map(fixRegEx);
    newSettings.includeRegExpList = (_c = newSettings === null || newSettings === void 0 ? void 0 : newSettings.includeRegExpList) === null || _c === void 0 ? void 0 : _c.map(fixRegEx);
    return newSettings;
}
exports.correctBadSettings = correctBadSettings;
function stringifyPatterns(settings) {
    var _a;
    if (!settings)
        return settings;
    const patterns = (_a = settings.patterns) === null || _a === void 0 ? void 0 : _a.map((pat) => ({ ...pat, pattern: pat.pattern.toString() }));
    return { ...settings, patterns };
}
exports.stringifyPatterns = stringifyPatterns;
exports.debugExports = {
    fixRegEx: fixRegPattern,
    fixPattern,
    resolvePath,
};
function calcExcludedBy(uri, extSettings) {
    const triedGlobs = new Map();
    function isExcluded(ex) {
        const v = triedGlobs.get(ex.glob);
        if (v !== undefined)
            return v;
        const matcher = new cspell_glob_1.GlobMatcher(ex.glob, extSettings.globMatcher.root);
        const isMatch = matcher.match(uri);
        triedGlobs.set(ex.glob, isMatch);
        return isMatch;
    }
    function keep(cfg) {
        var _a, _b;
        return !((_b = (_a = cfg.source) === null || _a === void 0 ? void 0 : _a.sources) === null || _b === void 0 ? void 0 : _b.length);
    }
    function id(ex) {
        var _a, _b;
        const settings = ex.settings;
        return [ex.glob, (_a = settings.source) === null || _a === void 0 ? void 0 : _a.name, (_b = settings.source) === null || _b === void 0 ? void 0 : _b.filename, settings.id, settings.name].join('|');
    }
    const matches = gensequence_1.genSequence(CSpell.getSources(extSettings.settings))
        // keep only leaf sources
        .filter(keep)
        .concatMap((settings) => { var _a; return ((_a = settings.ignorePaths) === null || _a === void 0 ? void 0 : _a.map((glob) => ({ glob, settings }))) || []; })
        .filter(isExcluded)
        .filter(utils_1.uniqueFilter(id))
        .toArray();
    return matches;
}
//# sourceMappingURL=documentSettings.js.map