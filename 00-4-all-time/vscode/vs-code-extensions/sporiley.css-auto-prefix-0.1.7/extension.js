/**
 * @name CSS Auto Prefixer
 * @author Steven O'Riley
 * @desc Auto prefixes certain CSS attributes as you type
 */

var vscode = require('vscode');

// (default_converter -> webkit, moz, ms, o)
var tags = {};
var enabled = true;

function activate(context) {
    var prefixer = Prefixer();
    var config = vscode.workspace.getConfiguration("css-auto-prefix");
    var prefixes = config.get("prefixes");
    enabled = config.get("enabled");
    
    updatePrefixes();
    vscode.workspace.onDidChangeConfiguration(() => {
        tags = {};
        config = vscode.workspace.getConfiguration("css-auto-prefix");
        prefixes = config.get("prefixes");
        enabled = config.get("enabled");
        
        updatePrefixes();
    });
    function updatePrefixes() {
        if (prefixes)
            for (var i in prefixes)
                tags[i] = easy_make(i, prefixes[i]);
    }

    vscode.window.onDidChangeTextEditorSelection(prefixer.update, this);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

function Prefixer() {
    var item;
    var last = null, current;
    
    var update = function() {
        if (!item)
            item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        var editor = vscode.window.activeTextEditor;
        var document = editor.document;
        if (document.getText().length == 0)
            return;
        var selection = editor.selection;
        
        if (enabled && /^(css|scss)$/i.test(document.languageId)) {
            var currline = document.lineAt(editor.selection.start).text;
            var firstpart = currline.substring(0, selection.start.character).replace(/[ \t]+/g, "");
            
            if (last == null)
                last = firstpart.length == 0 ? "" : firstpart[firstpart.length - 1];
            current = firstpart.length == 0 ? "" : firstpart[firstpart.length - 1];
            
            if (selection.isEmpty) {
                // Don't activate if in comments
                var comment_between = in_between(selection, currline, "/*", "*/");
                
                if (!comment_between.after_start && !comment_between.before_end) {
                    var range = get_range(editor, selection, document);
                    
                    //editor.selection = new vscode.Selection(range.start.anchor, range.end.anchor);
                    
                    if (range) {
                        var tokens = tokenize(range.value);
                        
                        var curr = token_at_cursor(selection, document, current, last);
                        var offset_left = curr.end - selection.start.character;
                        
                        for (var i in tags) {
                            if (i == curr.name) {
                                var revised = tags[i](tokens.names, tokens.values, curr.name, curr.value);
                                if (!revised.changed)
                                    break;
                                var stuff = make_attributes(revised, range.same_line, curr.name, offset_left);
                                
                                editor.edit(function(editBuilder) {
                                    //editBuilder.delete(new vscode.Selection(range.start.start.line, range.start.start.character, range.end.start.line, range.end.start.character));
                                    editBuilder.replace(new vscode.Selection(range.start.start.line, range.start.start.character, range.end.start.line, range.end.start.character), stuff.value);
                                }).then(function() {
                                    if (!editor.selection.isEmpty)
                                        editor.selection = new vscode.Selection(selection.start.line, selection.start.character, selection.start.line, selection.start.character);
                                });
                                break;
                            }
                        }
                    }    
                }
                
                //editor.selection = new vscode.Selection(range.start.anchor, range.end.anchor);
            }
            else
                current = "";
            
            last = current;
            
        }
    };
    
    return {
        update: update
    };
}

function make_attributes(list, same_line, char_name, offset_left) {
    var names = list.names;
    var values = list.values;
    var sep = typeof same_line == "boolean" ? " " : "\n" + same_line;
    var finalsep = same_line == true ? " " : "\n";
    var incline = sep == "\n" + same_line;
    var line = 0;
    var r = "";
    var newleft = 0;
    var achieved = false;
    
    for (var i = 0; i < names.length; i++) {
        var add = sep + names[i] + ":" + values[i] + ";";
        if (!achieved) {
            line += incline ? 1 : 0;
            if (names[i] == char_name) {
                var line_value = add.replace(/\n/g, "");
                newleft = line_value.length - 1 - offset_left;
                achieved = true;
            }
        }
        r += add;
    }
    return {
        value: r + finalsep,
        left: newleft,
        top: line
    };
}

function token_at_cursor(selection, document, curr_last_node, last_last_node) {
    var s = document.lineAt(selection.start).text;
    var before = s.substring(0, selection.start.character);
    var after = s.substring(selection.start.character);
    
    var ind = Math.max(-1, Math.max(before.lastIndexOf(";"), Math.max(before.lastIndexOf("}"), before.lastIndexOf("{"))));
    var aind = after.length;
    aind = _min(after, aind, ";");
    aind = _min(after, aind, "{");
    aind = _min(after, aind, "}");
    aind = _min(after, aind, /[a-zA-Z\-_][a-zA-Z0-9\-_]*:/g);
    
    aind += selection.start.character;
    
    s = s.substring(ind + 1, aind);
    
    var name, value;
    if (s.indexOf(":") == -1) {
        name = s;
        value = "";
    }
    else {
        var tind = s.indexOf(":");
        name = replace_whitespace(s.substring(0, tind));
        value = s.substring(tind + 1);
    }
    
    if (curr_last_node == ":" && last_last_node != ":")
        value = "";
    
    return {
        name: name,
        value: value,
        begin: ind,
        end: aind
    };
}

function _min(v, a, b) {
    if (b instanceof RegExp) {
        var mat = v.match(b);
        if (typeof mat != "undefined" && mat != null)
            return Math.min(a, v.indexOf(mat[0]));
    }
    else if (v.indexOf(b) != -1)
        return Math.min(a, v.indexOf(b));
    return a;
}

function tokenize(s) {
    s = s.replace(/\".*?\"|\'.*?\'|[\n]+/g, function(m) {
        if (m.replace(/[\n]+/g, "") == "")
            return "";
        return m;
    });
    var sp = s.split(";");
    var names = [], values = [];
    
    for (var i = 0; i < sp.length; i++) {
        var t = sp[i];
        if (t.replace(/[ \t]+/g, "") == "")
            continue;
        var ind = t.indexOf(":");
        if (ind == -1) {
            names.push(t);
            values.push("");
        }
        else {
            if (ind != t.lastIndexOf(":")) {
                var mat = t.match(/[ \t]*([a-zA-Z\-_][a-zA-Z\-_0-9]*)?.*?:/g);
                if (typeof mat != "undefined" && mat != null && mat.length > 1) {
                    var second = mat[1];
                    var sind = (t.substring(mat[0].length).indexOf(second) + mat[0].length);
                    var f = t.substring(0, sind);
                    names.push(replace_whitespace(f.substring(0, ind)));
                    values.push(f.substring(ind + 1));
                    sp[i] = t.substring(sind);
                    --i;
                    continue;
                }
            }
            else {
                names.push(replace_whitespace(t.substring(0, ind)));
                values.push(t.substring(ind + 1));
            }
        }
    }
    return {
        names: names,
        values: values
    };
}

function get_range(editor, selection, document) {
    var pos = selection;
    var raw = "", newStuff = "";
    var fline = document.lineAt(pos.start);
    var first = in_between(pos, fline.text, "{", "}");
    
    var start = null, end = null;
    var no_beginning = false, no_end = false;
    
    if (first.after_start && first.before_end)
        return make_range( fline.text.substring(first.start + 1, first.end), new vscode.Selection(pos.start.line, first.start + 1, pos.start.line, first.start + 1), new vscode.Selection(pos.start.line, first.end, pos.start.line, first.end), true );
    
    var line = pos.start.line;
    var whitespace = "";
    
    while (line >= 0) {
        newStuff = document.lineAt(line).text;
        
        var end_brack = newStuff.lastIndexOf("{");
        var other = newStuff.lastIndexOf("}");
        
        if (end_brack > other) {
            start = new vscode.Selection(line, end_brack + 1, line, end_brack + 1);
            raw = newStuff.substring(end_brack + 1) + "\n" + raw;
            break;
        }
        else if (other != -1 && line != pos.start.line || other != -1 && line == pos.start.line && pos.start.character > other) {
            start = new vscode.Selection(line, other + 1, line, other + 1);
            raw = newStuff.substring(other + 1) + "\n" + raw;
            no_beginning = true;
            break;
        }
        else {
            raw = newStuff + "\n" + raw;
            if (whitespace == "")
                whitespace = newStuff.substring(0, document.lineAt(line).firstNonWhitespaceCharacterIndex);
        }        
        --line;
        
    }
    if (start == null)
        start = new vscode.Selection(0, 0, 0, 0);
    
    line = pos.start.line;
    while (line < document.lineCount) {
        newStuff = document.lineAt(line).text;
        
        var startind = newStuff.indexOf("{"), endind = newStuff.indexOf("}");
        var rev = endind == -1 && startind != -1 || startind != -1 && startind < endind;
        
        if (startind == -1 && endind != -1 || endind != -1 && endind < startind) {
            if (line == pos.start.line)
                raw = raw.substring(0, raw.length - newStuff.length) + newStuff.substring(0, endind);
            else
                raw += "\n" + newStuff.substring(0, endind);
            end = new vscode.Selection(line, endind, line, endind);
            break;
        }
        else if (rev && pos.start.line != line || rev && pos.start.line == line && pos.start.character < startind) {
            if (line == pos.start.line)
                raw = raw.substring(0, raw.length - newStuff.length) + newStuff.substring(0, startind);
            else
                raw += "\n" + newStuff.substring(0, startind);
            end = new vscode.Selection(line, startind, line, startind);
            no_end = true;
            break;
        }
        else if (line != pos.start.line)
            raw += "\n" + newStuff;
        ++line;
    }
    if (line == document.lineCount)
        end = new vscode.Selection(document.lineCount, document.lineAt(document.lineCount - 1).text.length);
    
    if (no_end && no_beginning)
        return false;
    
    return make_range( raw, start, end, whitespace );
}

function make_range(value, start, end, same_line) {
    same_line = same_line || false;
    return {
        value: value,
        start: start,
        end: end,
        same_line: same_line
    };
}

function easy_make(name, prefixes) {
    return make_default_converter(name, prefixes.indexOf("webkit") != -1 ? 1 : 0, prefixes.indexOf("moz") != -1 ? 1 : 0, prefixes.indexOf("ms") != -1 ? 1 : 0, prefixes.indexOf("o") != -1 ? 1 : 0);
}

function make_default_converter(type, webkit, moz, ms, o) {
    var list = [webkit, moz, ms, o];
    var inames = ["-webkit-", "-moz-", "-ms-", "-o-"];
    var revised_list = [];
    for (var i = 0; i < list.length; i++)
        if (list[i] != 0)
            revised_list.push(inames[i] + type);
    
    return function(names, values, actual_name, actual_value) {
        var changed = false;
        for (var i = 0; i < revised_list.length; i++) {
            if (names.indexOf(revised_list[i]) == -1) {
                names.push(revised_list[i]);
                values.push(actual_value);
                changed = true;
            }
            else {
                if (values[names.indexOf(revised_list[i])] != actual_value) {
                    values[names.indexOf(revised_list[i])] = actual_value;
                    changed = true;
                }
            }
        }
        
        return { names: names, values: values, changed: changed };
    };
}

function in_between(position, line, a, b) {
    var beginning = line.substring(0, position.start.character);
    var end = line.substring(position.start.character);
    
    var blind = beginning.lastIndexOf(a), blind2 = beginning.lastIndexOf(b);
    var bind = end.indexOf(b), bind2 = end.indexOf(a);
    
    var after_start = blind != -1 && (blind2 == -1 || blind2 < blind);
    var before_end = bind != -1 && (bind2 == -1 || bind < bind2);
    var start = after_start ? blind : ( blind2 == -1 ? 0 : blind2 );
    var end = (before_end ? bind : ( bind2 == -1 ? end.length : bind2 )) + position.start.character;
    
    return { 
        between: after_start || before_end,
        after_start: after_start,
        before_end: before_end,
        start: start,
        end: end
    };
}

function replace_whitespace(s) {
    return s.replace(/\".*?\"|\'.*?\'|[ \t\n;]+/g, function(m) {
        if (m.replace(/[ \t\n;]+/g, "") == "")
            return "";
        return m;
    });
}

exports.deactivate = deactivate;