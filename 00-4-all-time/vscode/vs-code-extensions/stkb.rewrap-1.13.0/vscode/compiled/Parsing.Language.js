"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Language$reflection = Language$reflection;
exports.LanguageModule$$$create = LanguageModule$$$create;
exports.LanguageModule$$$name = LanguageModule$$$name;
exports.LanguageModule$$$parser = LanguageModule$$$parser;
exports.LanguageModule$$$matchesFileLanguage = LanguageModule$$$matchesFileLanguage;
exports.LanguageModule$$$matchesFilePath = LanguageModule$$$matchesFilePath;
exports.Language = void 0;

var _Types = require("./fable-library.2.10.1/Types");

var _Reflection = require("./fable-library.2.10.1/Reflection");

var _Types2 = require("./Types");

var _Prelude = require("./Prelude");

var _String = require("./fable-library.2.10.1/String");

var _Array = require("./fable-library.2.10.1/Array");

var _Util = require("./fable-library.2.10.1/Util");

var _Seq = require("./fable-library.2.10.1/Seq");

const Language = (0, _Types.declare)(function Parsing_Language_Language(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.Language = Language;

function Language$reflection() {
  return (0, _Reflection.union_type)("Parsing.Language.Language", [], Language, () => [["Language", [["Item1", _Reflection.string_type], ["Item2", (0, _Reflection.array_type)(_Reflection.string_type)], ["Item3", (0, _Reflection.array_type)(_Reflection.string_type)], ["Item4", (0, _Reflection.lambda_type)((0, _Types2.Settings$reflection)(), (0, _Reflection.lambda_type)((0, _Prelude.Nonempty$00601$reflection)(_Reflection.string_type), (0, _Prelude.Nonempty$00601$reflection)((0, _Prelude.Block$reflection)())))]]]]);
}

function LanguageModule$$$create(name, aliases, exts, parser) {
  const split = function split(s) {
    return (0, _String.split)(s.toLocaleLowerCase(), ["|"], null, 1);
  };

  return new Language(0, "Language", name, (0, _Array.append)([name.toLocaleLowerCase()], split(aliases), Array), split(exts), parser);
}

function LanguageModule$$$name(_arg1) {
  return _arg1.fields[0];
}

function LanguageModule$$$parser(_arg1$$1) {
  return (0, _Util.curry)(2, _arg1$$1.fields[3]);
}

function LanguageModule$$$matchesFileLanguage(fileLang, _arg1$$2) {
  return (0, _Seq.contains)(fileLang.toLocaleLowerCase(), _arg1$$2.fields[1]);
}

function LanguageModule$$$matchesFilePath(path, _arg1$$3) {
  let fileName;
  const array = (0, _String.split)(path.toLocaleLowerCase(), ["\\", "/"]);
  fileName = (0, _Array.last)(array);
  return (0, _Seq.exists)(function tryMatch(_arg2) {
    if (_arg2.indexOf(".") === 0) {
      return (0, _String.endsWith)(fileName, _arg2);
    } else {
      return fileName === _arg2;
    }
  }, _arg1$$3.fields[2]);
}