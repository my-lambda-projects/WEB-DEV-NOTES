import * as vscode from 'vscode';
import { PDFEditorProvider} from  './PDFEditorProvider';

export function activate(context: vscode.ExtensionContext) {

	//
	// register custom editor provider:
	//
	context.subscriptions.push(PDFEditorProvider.register(context));

	//
	// register open custom editor command (not used):
	//
	context.subscriptions.push(vscode.commands.registerCommand("analyticsignal.preview-pdf-open", (uri: vscode.Uri) => {
		vscode.commands.executeCommand('vscode.open', uri, {preview: false});
	  }
	));
}

export function deactivate() {}