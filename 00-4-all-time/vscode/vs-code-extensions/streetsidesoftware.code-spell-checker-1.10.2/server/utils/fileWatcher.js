"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWatcher = void 0;
const node_watch_1 = require("node-watch");
class FileWatcher {
    constructor() {
        this.watchedFile = new Map();
        this.listeners = new Set();
        this.dispose = () => {
            this.clear();
        };
        this.trigger = (eventType, filename) => {
            this.notifyListeners(eventType, filename);
        };
    }
    listen(fn) {
        this.listeners.add(fn);
        return {
            dispose: () => {
                this.listeners.delete(fn);
            },
        };
    }
    addFile(filename) {
        if (!this.watchedFile.has(filename)) {
            this.watchedFile.set(filename, node_watch_1.default(filename, { persistent: false }, this.trigger));
        }
    }
    clearFile(filename) {
        var _a;
        (_a = this.watchedFile.get(filename)) === null || _a === void 0 ? void 0 : _a.close();
        this.watchedFile.delete(filename);
    }
    clear() {
        for (const w of this.watchedFile.values()) {
            w.close();
        }
        this.watchedFile.clear();
    }
    notifyListeners(eventType, filename) {
        for (const listener of this.listeners) {
            listener(eventType, filename);
        }
    }
}
exports.FileWatcher = FileWatcher;
//# sourceMappingURL=fileWatcher.js.map