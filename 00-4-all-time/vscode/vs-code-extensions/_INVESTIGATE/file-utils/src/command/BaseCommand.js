"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
class BaseCommand {
    constructor(controller, options) {
        this.controller = controller;
        this.options = options;
    }
    async executeController(fileItem, options) {
        if (fileItem) {
            const result = await this.controller.execute({ fileItem });
            if (options === null || options === void 0 ? void 0 : options.openFileInEditor) {
                await this.controller.openFileInEditor(result);
            }
        }
    }
}
exports.BaseCommand = BaseCommand;
