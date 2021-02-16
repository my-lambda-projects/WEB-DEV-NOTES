"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryWatcher = void 0;
const fileWatcher_1 = require("../utils/fileWatcher");
class DictionaryWatcher {
    constructor() {
        this.fileWatcher = new fileWatcher_1.FileWatcher();
        this.dispose = () => {
            this.clear();
            this.fileWatcher.dispose();
        };
    }
    processSettings(finalizedSettings) {
        var _a, _b;
        // Only watch used dictionaries.
        const defs = new Map((_a = finalizedSettings.dictionaryDefinitions) === null || _a === void 0 ? void 0 : _a.map((def) => [def.name, def.path]));
        (_b = finalizedSettings.dictionaries) === null || _b === void 0 ? void 0 : _b.map((name) => defs.get(name)).filter((s) => !!s).forEach((file) => this.fileWatcher.addFile(file));
    }
    clear() {
        this.fileWatcher.clear();
    }
    listen(fn) {
        return this.fileWatcher.listen(fn);
    }
}
exports.DictionaryWatcher = DictionaryWatcher;
//# sourceMappingURL=dictionaryWatcher.js.map