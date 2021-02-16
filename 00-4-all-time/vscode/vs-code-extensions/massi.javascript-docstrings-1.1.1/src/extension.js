/**
 * @file This belongs to the JavaScript Docstrings vscode extension. The JavaScript Docstrings provides JSDocs standard documentation for functions, variables, classes and etc.
 * @author Massi Faqiri <faqima01@luther.edu>
 * @copyright Massi Faqiri 2020
 * @license MIT
 */

// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

/**
 * This function modularizes insertion of the relevant comments for each command type
 * @param {String} commandType - command type like, class, function, etc.
 */
function commandFunction(commandType) {
  // Variables to get the location of the cursor
  var editor = vscode.window.activeTextEditor;
  var selection = editor.selection;
  var selectionAnchor = selection.anchor;
  var line = selectionAnchor.line;
  var char = selectionAnchor.character;

  // // Handling first line error
  // if (line == 0) {
  //   vscode.window.showErrorMessage(
  //     'Please make sure your selection or cursor is not at the first line.'
  //   );
  //   return;
  // }

  // The desired position
  var desiredPos;
  if (line === 0) {
    desiredPos = new vscode.Position(0, char);
  } else {
    desiredPos = new vscode.Position(line - 1, char);
  }

  let commentStr;

  switch (commandType) {
    case 'class':
      commentStr = `/**
* Brief description of the class here
* @extends ParentClassNameHereIfAny
*/`;
      break;
    case 'function':
      commentStr = `/** 
* Brief description of the function here.
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {ReturnValueDataTypeHere} Brief description of the returning value here.
*/`;
      break;
    case 'author':
      commentStr = `/**
* @author FirstName LastName <optionalEmail@example.com>
*/`;
      break;
    case 'constant variable':
      commentStr = `/** @constant {constantDataTypeHere} */`;
      break;
    case 'header':
      commentStr = `/**
* @file Brief description of the file here
* @author FirstName LastName <optionalEmail@example.com>
* @copyright FirstName LastName Year
* @license LicenseHereIfApplicable
*/`;
      break;
    case 'deprecated notation':
      commentStr = `/**
* @deprecated brief or no comment here
*/`;
      break;
    case 'generator function':
      commentStr = `/**
* Brief description of the function here.
* @generator
* @function functionNameHere
* @yields {yieldDataType} Brief description of yielded items here.
*/`;
      break;
    case 'global variable':
      commentStr = `/** @global */`;
      break;
    case 'ReadOnly':
      commentStr = `/**
* Brief description here.
* @readonly
*/`;
      break;
    case 'this keyword':
      commentStr = `/** @this itsReferenceNameHere */`;
      break;
    case 'todo':
      commentStr = `/**
* @todo Brief description of the todo here.
*/`;
      break;
    case 'DataTypes':
      commentStr = `/**
* {DataTypeHere} - Note: used for usual data type declaration.
* {(OneDataType|AnotherDataType)} - Note: used for cases where data type could be either of the two.
* {DataType[]} - Note: used for an array of DataType instances.
* {?DataTypeHere} - Note: used for data types which could be the data type mentioned or null.
* {DataTypeHere} [parameterNameHere] - Note: used for optional parameters.
* {Object.<KeyDataType, ValueDataType>} - Note: used for an object with KeyDataType keys and ValueDataType values
*/`;
      break;
    case 'Object':
      commentStr = `/**
* Brief description of the object here.
* @property {DataTypeHere} KeyNameHere - Brief description of the key here.
* @property {DataTypeHere} [OptionalKeyHereIfAny] - Brief description of the optional key here, if applicable.
* @property {DataTypeHere} ParentKeyName.NameOfAnotherKeyInsideIt - Brief description of the key here. Use this for keys inside other keys.
*/`;
      break;
    case 'Version':
      commentStr = `/** @version versionNumberHere */`;
      break;
    case 'Link':
      commentStr = `/** Your note here, if you want: {@link https://www.yourLink.com} */`;
      break;
  }

  // Insert the docstring in the desired position.
  editor.edit(editBuilder => {
    editBuilder.insert(desiredPos, commentStr);
  });
}

/**
 * This method is called when the extension is activated, i.e. when the command is executed
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // These commands have been defined in the package.json file

  // This is for JSDocs: Class command.
  let extClass = vscode.commands.registerCommand('extension.class', () =>
    commandFunction('class')
  );

  // This is for JSDocs: Function command.
  let extFunction = vscode.commands.registerCommand('extension.function', () =>
    commandFunction('function')
  );

  // This is for JSDocs: Author command.
  let extAuthor = vscode.commands.registerCommand('extension.author', () =>
    commandFunction('author')
  );

  // This is for JSDocs: Constant Variable command.
  let extConstant = vscode.commands.registerCommand(
    'extension.constantVariable',
    () => commandFunction('constant variable')
  );

  // This is for JSDocs: Header command.
  let extHeader = vscode.commands.registerCommand('extension.header', () =>
    commandFunction('header')
  );

  // This is for JSDocs: Deprecated Notation command.
  let extDeprecated = vscode.commands.registerCommand(
    'extension.deprecated',
    () => commandFunction('deprecated notation')
  );

  // This is for JSDocs: Generator Function command.
  let extGenerator = vscode.commands.registerCommand(
    'extension.generator',
    () => commandFunction('generator function')
  );

  // This is for JSDocs: Global Variable command.
  let extGlobal = vscode.commands.registerCommand(
    'extension.globalVariable',
    () => commandFunction('global variable')
  );

  // This is for JSDocs: ReadOnly command.
  let extReadOnly = vscode.commands.registerCommand('extension.readOnly', () =>
    commandFunction('ReadOnly')
  );

  // This is for JSDocs: this Keyword command.
  let extThisKeyword = vscode.commands.registerCommand(
    'extension.thisKeyword',
    () => commandFunction('this keyword')
  );

  // This is for JSDocs: Todo command.
  let extToDo = vscode.commands.registerCommand('extension.toDo', () =>
    commandFunction('todo')
  );

  // This is for JSDocs: Constant Variable command.
  let extDataTypes = vscode.commands.registerCommand(
    'extension.dataTypes',
    () => commandFunction('DataTypes')
  );

  // This is for JSDocs: Constant Variable command.
  let extObject = vscode.commands.registerCommand('extension.object', () =>
    commandFunction('Object')
  );

  // This is for JSDocs: Version command.
  let extVersion = vscode.commands.registerCommand('extension.version', () =>
    commandFunction('Version')
  );

  // This is for JSDocs: Link command.
  let extLink = vscode.commands.registerCommand('extension.link', () =>
    commandFunction('Link')
  );

  context.subscriptions.push(extClass);
  context.subscriptions.push(extFunction);
  context.subscriptions.push(extAuthor);
  context.subscriptions.push(extConstant);
  context.subscriptions.push(extHeader);
  context.subscriptions.push(extDeprecated);
  context.subscriptions.push(extGenerator);
  context.subscriptions.push(extGlobal);
  context.subscriptions.push(extReadOnly);
  context.subscriptions.push(extThisKeyword);
  context.subscriptions.push(extToDo);
  context.subscriptions.push(extDataTypes);
  context.subscriptions.push(extObject);
  context.subscriptions.push(extVersion);
  context.subscriptions.push(extLink);
}
exports.activate = activate;

module.exports = {
  activate,
};
