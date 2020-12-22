const vscode = require('vscode');
const os = require("os");
const path = require("path");
const fs = require("fs");

let vsCodeUserSettingsPath;
let isInsiders = /insiders/i.test(process.argv0);
let isCodium = /codium/i.test(process.argv0);                                  
let isOSS = /vscode-oss/i.test(__dirname);
let CodeDir = isInsiders?'Code - Insiders':isCodium?'VSCodium':isOSS?'Code - OSS':'Code';
let isPortable = process.env.VSCODE_PORTABLE ? true : false;
if (isPortable) {
    vsCodeUserSettingsPath = process.env.VSCODE_PORTABLE + `/user-data/User/`;
} else {
    switch (os.type()) {
        case "Darwin":
            vsCodeUserSettingsPath = process.env.HOME + `/Library/Application Support/${CodeDir}/User/`;
            break;
        case "Linux":
            vsCodeUserSettingsPath = process.env.HOME + `/.config/${CodeDir}/User/`;
            break;
        case "Windows_NT":
            vsCodeUserSettingsPath = process.env.APPDATA + `\\${CodeDir}\\User\\`;
            break;
        default:
            vsCodeUserSettingsPath = process.env.HOME + `/.config/${CodeDir}/User/`;
            break;
    }    
}
let vsCodeSnippetsPath = path.join(vsCodeUserSettingsPath, 'snippets');
let json_caches = {};

const utils = {
    clearCaches() {
        json_caches = {};
    },
    readJson(filename) {
        let cache = json_caches[filename] || {};
        let stat = fs.statSync(filename);
        if (cache && cache.t >= stat.mtime.getTime())
            return cache.data;
        let text = fs.readFileSync(filename, "utf8");
        cache.data = new Function('return ' + text)();
        cache.t = stat.mtime.getTime();
        json_caches[filename] = cache;
        return cache.data;
    },
    getSelectedText() {
        let editer = vscode.window.activeTextEditor;
        let content = editer.document.getText(editer.selection);
        return content;
    },
    insertContent(content) {
        let editer = vscode.window.activeTextEditor;
        let snippet = {
            "${1:snippet name}": {
                prefix: "${2:$1}",
                body: content.split("\n"),
                description: "${3:$1}"
            }
        };
        let s = JSON.stringify(snippet, null, 4);
        editer.insertSnippet(new vscode.SnippetString(s), editer.selection);
    },
    endSelection(document) {
        let maxLine = document.lineCount - 1;
        let endChar = document.lineAt(maxLine).range.end.character;
        let position = new vscode.Position(maxLine, endChar);
        return new vscode.Selection(position, position);
    },
    selectAllRange(document) {
        let maxLine = document.lineCount - 1;
        let endChar = document.lineAt(maxLine).range.end.character;
        return new vscode.Range(0, 0, maxLine, endChar);
    },
    getLanguageConfig(languageId) {
        // reference https://github.com/Microsoft/vscode/issues/2871#issuecomment-338364014
        var langConfigFilepath = null;
        for (const _ext of vscode.extensions.all) {
            if (
                _ext.packageJSON.contributes &&
                _ext.packageJSON.contributes.languages
            ) {
                // Find language data from "packageJSON.contributes.languages" for the languageId
                const packageLangData = _ext.packageJSON.contributes.languages.find(
                    _packageLangData => (_packageLangData.id === languageId)
                );
                // If found, get the absolute config file path
                if (packageLangData && packageLangData.configuration) {
                    langConfigFilepath = path.join(
                        _ext.extensionPath,
                        packageLangData.configuration
                    );
                    break;
                }
            }
        }
        // Validate config file existance
        if (!!langConfigFilepath && fs.existsSync(langConfigFilepath)) {
            return utils.readJson(langConfigFilepath);
        }
    },
    /**
     * 获取指定lang的行内注释
     * @param {string} languageId 
     * @param {string} [def] 
     */
    getLineComment(languageId, def = '//') {
        let config = this.getLanguageConfig(languageId);
        if (!config) return def;
        return config.comments.lineComment || def;
    },
    vsCodeUserSettingsPath,
    vsCodeSnippetsPath,
    async pickLanguage() {
		let languages = await vscode.languages.getLanguages();
		let currentLanguage = vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.languageId;
		let items = languages.map(x => {
			let description;
			let label = x;
			if (x === currentLanguage) description = 'current language';
			return { label, description };
		});
		if (currentLanguage) items.sort((a, b) => {
			if (a.description) return -1;
			if (b.description) return 1;
			return a.label > b.label ? -1 : 1;
		});
        let item = await vscode.window.showQuickPick(items, { placeHolder: currentLanguage });
        return item && item.label;
    }
};

module.exports = utils;
