const vscode = require('vscode');
const path = require("path");
const SnippetNodeProvider = require("./src/SnippetNodeProvider");
const utils = require("./common/utils");

/**
 * @param {vscode.ExtensionContext} context 
 */
function activate(context) {
    let provider = new SnippetNodeProvider();
    let explorer = vscode.window.createTreeView('snippetExplorer', { treeDataProvider: provider });
    provider.tree = explorer;
    context.subscriptions.push(
        // vscode.window.registerTreeDataProvider('snippetExplorer', provider),
        vscode.commands.registerCommand('snippetExplorer.refresh', provider.refresh.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.addGroup', provider.addGroup.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.addSnippet', provider.addSnippet.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.editGroup', provider.editGroup.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.deleteGroup', provider.deleteGroup.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.deleteSnippet', provider.deleteSnippet.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.editSnippet', provider.editSnippet.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.search',provider.search.bind(provider)),
        vscode.commands.registerCommand('snippetExplorer.open', function() {
            explorer.reveal(provider.getChildren()[0]);
        }),
        vscode.commands.registerCommand('easySnippet.run', async function() {
            let text = utils.getSelectedText();
            if (!text) return vscode.window.showWarningMessage("can't convert to snippet by select nothing");
            let label = vscode.window.activeTextEditor.document.languageId;
            provider.addSnippet({ label });
        }),
        vscode.workspace.onDidSaveTextDocument(function(e) {
            if (e.fileName.endsWith('.json') && e.fileName.startsWith(utils.vsCodeSnippetsPath))
                return provider.refresh();
            if (!e.fileName.endsWith('.snippet')) return;
            let name = path.basename(e.fileName, '.snippet');
            let ss = name.split('.');
            if (ss.length != 2) return;
            let key = Buffer.from(ss[0].replace(/-/g, '/'), 'base64').toString();
            let languageId = ss[1];
            provider.saveSnippet(languageId, key, e.getText());
            provider.refresh();
        }),
    );
}
exports.activate = activate;

function deactivate() {
    utils.clearCaches();
}
exports.deactivate = deactivate;