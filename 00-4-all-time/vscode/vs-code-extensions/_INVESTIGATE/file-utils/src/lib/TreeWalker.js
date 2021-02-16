"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeWalker = void 0;
const path = __importStar(require("path"));
const vscode_1 = require("vscode");
class TreeWalker {
    async directories(sourcePath) {
        try {
            this.ensureFailSafeFileLookup();
            const pattern = new vscode_1.RelativePattern(sourcePath, "**");
            const files = await vscode_1.workspace.findFiles(pattern, undefined, Number.MAX_VALUE);
            const directories = files.reduce(this.directoryReducer(sourcePath), new Set());
            return this.toSortedArray(directories);
        }
        catch (err) {
            throw new Error(`Unable to list subdirectories for directory "${sourcePath}". Details: (${err.message})`);
        }
    }
    ensureFailSafeFileLookup() {
        process.noAsar = true;
    }
    directoryReducer(sourcePath) {
        return (accumulator, file) => {
            const directory = path.dirname(file.fsPath).replace(sourcePath, "");
            if (directory) {
                accumulator.add(directory);
            }
            return accumulator;
        };
    }
    toSortedArray(directories) {
        return Array.from(directories).sort();
    }
}
exports.TreeWalker = TreeWalker;
