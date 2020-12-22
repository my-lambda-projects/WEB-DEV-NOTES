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
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const command_1 = require("./command");
const controller_1 = require("./controller");
function handleError(err) {
    if (err && err.message) {
        vscode.window.showErrorMessage(err.message);
    }
    return err;
}
function register(context, command, commandName) {
    const proxy = (...args) => command.execute(...args).catch(handleError);
    const disposable = vscode.commands.registerCommand(`fileutils.${commandName}`, proxy);
    context.subscriptions.push(disposable);
}
function activate(context) {
    const moveFileController = new controller_1.MoveFileController(context);
    const newFileController = new controller_1.NewFileController(context);
    const duplicateFileController = new controller_1.DuplicateFileController(context);
    const removeFileController = new controller_1.RemoveFileController(context);
    const copyFileNameController = new controller_1.CopyFileNameController(context);
    register(context, new command_1.MoveFileCommand(moveFileController), "moveFile");
    register(context, new command_1.RenameFileCommand(moveFileController), "renameFile");
    register(context, new command_1.DuplicateFileCommand(duplicateFileController), "duplicateFile");
    register(context, new command_1.RemoveFileCommand(removeFileController), "removeFile");
    register(context, new command_1.NewFileCommand(newFileController), "newFile");
    register(context, new command_1.NewFileCommand(newFileController, { relativeToRoot: true }), "newFileAtRoot");
    register(context, new command_1.NewFolderCommand(newFileController), "newFolder");
    register(context, new command_1.NewFolderCommand(newFileController, { relativeToRoot: true }), "newFolderAtRoot");
    register(context, new command_1.CopyFileNameCommand(copyFileNameController), "copyFileName");
}
exports.activate = activate;
