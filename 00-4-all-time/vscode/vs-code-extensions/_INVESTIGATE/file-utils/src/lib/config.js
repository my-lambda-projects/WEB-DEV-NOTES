"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfiguration = void 0;
const vscode_1 = require("vscode");
function getConfiguration(key) {
    return vscode_1.workspace.getConfiguration("fileutils", null).get(key);
}
exports.getConfiguration = getConfiguration;
