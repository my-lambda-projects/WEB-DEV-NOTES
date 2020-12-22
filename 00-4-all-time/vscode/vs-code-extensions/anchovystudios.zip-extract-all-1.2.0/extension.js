const vscode = require('vscode');
const { extract } = require('@anchovy_studios/extract-all-zip');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('zip-extract-all extensions activated...');

	let extractCommand = vscode.commands.registerCommand('zip-extract-all.extract', async function () {
		const start = new Date().getTime();
		
		try {
			const folder_path = vscode.workspace.workspaceFolders[0].uri.fsPath;
			vscode.window.showInformationMessage('Scanning and unzipping files... ');
			let files = await extract(folder_path);
			const end = new Date().getTime();
			vscode.window.showInformationMessage('Finish unzipping ' + files.length + ' file(s) in ' + (end-start) + ' ms');
		} catch(err) {
			vscode.window.showErrorMessage(err);
		}
	});

	context.subscriptions.push(extractCommand);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
