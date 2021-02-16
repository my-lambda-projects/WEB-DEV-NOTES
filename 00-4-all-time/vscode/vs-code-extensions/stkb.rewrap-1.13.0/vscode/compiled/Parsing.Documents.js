"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plainText = plainText;
exports.languageForFile = languageForFile;
exports.select = select;
exports.languages = void 0;

var _Parsing = require("./Parsing.Core");

var _RegExp = require("./fable-library.2.10.1/RegExp");

var _Nonempty = require("./Nonempty");

var _Block = require("./Block");

var _Prelude = require("./Prelude");

var _List = require("./fable-library.2.10.1/List");

var _Parsing2 = require("./Parsing.SourceCode");

var _Types = require("./fable-library.2.10.1/Types");

var _Parsing3 = require("./Parsing.Language");

var _Util = require("./fable-library.2.10.1/Util");

var _Parsing4 = require("./Parsing.DocComments");

var _Parsing5 = require("./Parsing.Markdown");

var _Parsing6 = require("./Parsing.Latex");

var _Types2 = require("./Types");

var _Option = require("./fable-library.2.10.1/Option");

var _String = require("./fable-library.2.10.1/String");

var _Seq = require("./fable-library.2.10.1/Seq");

function plainText(settings) {
  const partialParser = (0, _Parsing.takeUntil)(_Parsing.blankLines, function paragraphs($arg$$2) {
    var _arg2;

    let x;
    const neList = (0, _Parsing.splitIntoChunks)(function (arg10$0040) {
      return (0, _Parsing.onIndent)(settings.tabWidth, arg10$0040);
    })($arg$$2);
    const fn = (0, _Parsing.splitIntoChunks)((0, _Parsing.afterRegex)((0, _RegExp.create)("  $")));
    x = (0, _Nonempty.concatMap)(fn, neList);

    const f = function f(lines) {
      return (0, _Parsing.indentSeparatedParagraphBlock)(function (tupledArg) {
        return (0, _Block.textBlock)(tupledArg[0], tupledArg[1]);
      }, lines);
    };

    const _arg3 = new _Prelude.Functor(0, "Functor");

    return new _Prelude.Nonempty$00601(0, "Nonempty", f(x.fields[0]), (_arg2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f, x.fields[1])));
  });
  return (0, _Parsing.repeatToEnd)(partialParser);
}

const configFile = (() => {
  const commentParsers = new _Types.List((0, _Parsing2.line)("#"), new _Types.List());
  return function (settings$$1) {
    return (0, _Parsing2.sourceCode)(commentParsers, settings$$1);
  };
})();

function lang(name, aliases, exts, parser) {
  return (0, _Parsing3.LanguageModule$$$create)(name, aliases, exts, parser);
}

const languages = (0, _Util.createAtom)((0, _List.ofArray)([lang("AsciiDoc", "", ".adoc|.asciidoc", (0, _Util.uncurry)(2, plainText)), lang("AutoHotkey", "ahk", ".ahk", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$1 = (0, _List.ofArray)([(0, _Parsing2.line)(";"), _Parsing2.cBlock]);
  return function (settings$$3) {
    return (0, _Parsing2.sourceCode)(commentParsers$$1, settings$$3);
  };
})())), lang("Basic", "vb", ".vb", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$2 = (0, _List.ofArray)([(0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.xmldoc))("'''"), (0, _Parsing2.line)("'")]);
  return function (settings$$4) {
    return (0, _Parsing2.sourceCode)(commentParsers$$2, settings$$4);
  };
})())), lang("Batch file", "bat", ".bat", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$3 = new _Types.List((0, _Parsing2.line)("(?:rem|::)"), new _Types.List());
  return function (settings$$5) {
    return (0, _Parsing2.sourceCode)(commentParsers$$3, settings$$5);
  };
})())), lang("Bikeshed", "", ".bs", (0, _Util.uncurry)(2, _Parsing5.markdown)), lang("C/C++", "c|c++|cpp", ".c|.cpp|.h", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$4 = (0, _List.ofArray)([(0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*", " * "])(_Parsing2.javadocMarkers), _Parsing2.cBlock, (0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.xmldoc))("///"), (0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.javadoc))("//!?"), _Parsing2.cLine]);
  return function (settings$$7) {
    return (0, _Parsing2.sourceCode)(commentParsers$$4, settings$$7);
  };
})())), lang("C#", "csharp", ".cs", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$5 = (0, _List.ofArray)([(0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.xmldoc))("///"), _Parsing2.cLine, (0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*", " * "])(_Parsing2.javadocMarkers), _Parsing2.cBlock]);
  return function (settings$$8) {
    return (0, _Parsing2.sourceCode)(commentParsers$$5, settings$$8);
  };
})())), lang("CMake", "", "CMakeLists.txt", (0, _Util.uncurry)(2, configFile)), lang("CoffeeScript", "", ".coffee", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$6 = (0, _List.ofArray)([(0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*#", " * "])(["###\\*", "###"]), (0, _Parsing2.block)(["###", "###"]), (0, _Parsing2.line)("#")]);
  return function (settings$$9) {
    return (0, _Parsing2.sourceCode)(commentParsers$$6, settings$$9);
  };
})())), lang("Configuration", "properties", ".conf|.gitconfig", (0, _Util.uncurry)(2, configFile)), lang("Crystal", "", ".cr", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$7 = new _Types.List((0, _Parsing2.line)("#"), new _Types.List());
  return function (settings$$10) {
    return (0, _Parsing2.sourceCode)(commentParsers$$7, settings$$10);
  };
})())), lang("CSS", "postcss", ".css|.pcss|.postcss", (0, _Util.uncurry)(2, _Parsing2.css)), lang("D", "", ".d", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$8 = (0, _List.ofArray)([(0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.ddoc))("///"), _Parsing2.cLine, (0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.ddoc))(["*", " * "])(_Parsing2.javadocMarkers), (0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.ddoc))(["+", " + "])(["/\\+\\+", "\\+/"]), _Parsing2.cBlock, (0, _Parsing2.block)(["/\\+", "\\+/"])]);
  return function (settings$$11) {
    return (0, _Parsing2.sourceCode)(commentParsers$$8, settings$$11);
  };
})())), lang("Dart", "", ".dart", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$9 = (0, _List.ofArray)([(0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.dartdoc))("///"), _Parsing2.cLine, (0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.dartdoc))(["*", " * "])(_Parsing2.javadocMarkers), _Parsing2.cBlock]);
  return function (settings$$12) {
    return (0, _Parsing2.sourceCode)(commentParsers$$9, settings$$12);
  };
})())), lang("Dockerfile", "docker", "dockerfile", (0, _Util.uncurry)(2, configFile)), lang("Elixir", "", ".ex|.exs", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$10 = (0, _List.ofArray)([(0, _Parsing2.line)("#"), (0, _Parsing2.block)(["@(module|type|)doc\\s+\"\"\"", "\"\"\""])]);
  return function (settings$$13) {
    return (0, _Parsing2.sourceCode)(commentParsers$$10, settings$$13);
  };
})())), lang("Elm", "", ".elm", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$11 = (0, _List.ofArray)([(0, _Parsing2.line)("--"), (0, _Parsing2.block)(["{-\\|?", "-}"])]);
  return function (settings$$14) {
    return (0, _Parsing2.sourceCode)(commentParsers$$11, settings$$14);
  };
})())), lang("F#", "fsharp", ".fs|.fsx", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$12 = (0, _List.ofArray)([(0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.xmldoc))("///"), _Parsing2.cLine, (0, _Parsing2.block)(["\\(\\*", "\\*\\)"])]);
  return function (settings$$15) {
    return (0, _Parsing2.sourceCode)(commentParsers$$12, settings$$15);
  };
})())), lang("Go", "", ".go", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$13 = (0, _List.ofArray)([(0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.godoc))(["", ""])(_Parsing2.javadocMarkers), _Parsing2.cBlock, (0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.godoc))("//"), _Parsing2.cLine]);
  return function (settings$$18) {
    return (0, _Parsing2.sourceCode)(commentParsers$$13, settings$$18);
  };
})())), lang("Git commit", "git-commit", "tag_editmsg", (0, _Util.uncurry)(2, _Parsing5.markdown)), lang("GraphQL", "", ".graphql|.gql", (0, _Util.uncurry)(2, configFile)), lang("Groovy", "", ".groovy", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Handlebars", "", ".handlebars|.hbs", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$14 = (0, _List.ofArray)([(0, _Parsing2.block)(["{{!--", "--}}"]), (0, _Parsing2.block)(["{{!", "}}"]), (0, _Parsing2.block)(["<!--", "-->"])]);
  return function (settings$$20) {
    return (0, _Parsing2.sourceCode)(commentParsers$$14, settings$$20);
  };
})())), lang("Haskell", "", ".hs", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$15 = (0, _List.ofArray)([(0, _Parsing2.line)("--"), (0, _Parsing2.block)(["{-\\s*\\|?", "-}"])]);
  return function (settings$$21) {
    return (0, _Parsing2.sourceCode)(commentParsers$$15, settings$$21);
  };
})())), lang("HCL", "terraform", ".hcl|.tf", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$16 = (0, _List.ofArray)([(0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*", " * "])(_Parsing2.javadocMarkers), _Parsing2.cBlock, (0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.javadoc))("//[/!]"), _Parsing2.cLine, (0, _Parsing2.line)("#")]);
  return function (settings$$22) {
    return (0, _Parsing2.sourceCode)(commentParsers$$16, settings$$22);
  };
})())), lang("HTML", "htmlx|vue", ".htm|.html|.vue", (0, _Util.uncurry)(2, _Parsing2.html)), lang("INI", "", ".ini", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$17 = new _Types.List((0, _Parsing2.line)("[#;]"), new _Types.List());
  return function (settings$$23) {
    return (0, _Parsing2.sourceCode)(commentParsers$$17, settings$$23);
  };
})())), lang("Java", "", ".java", (0, _Util.uncurry)(2, _Parsing2.java)), lang("JavaScript", "javascriptreact|js", ".js|.jsx", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Julia", "", ".jl", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$18 = (0, _List.ofArray)([(0, _Parsing2.line)("#"), (0, _Parsing2.block)([".*?\"\"\"", "\"\"\""])]);
  return function (settings$$24) {
    return (0, _Parsing2.sourceCode)(commentParsers$$18, settings$$24);
  };
})())), lang("JSON", "json5|jsonc", ".json|.json5|.jsonc", (0, _Util.uncurry)(2, _Parsing2.java)), lang("LaTeX", "tex", ".bbx|.cbx|.cls|.sty|.tex", (0, _Util.uncurry)(2, _Parsing6.latex)), lang("Lean", "", ".lean", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$19 = (0, _List.ofArray)([(0, _Parsing2.line)("--"), (0, _Parsing2.block)(["/-[-!]?", "-/"])]);
  return function (settings$$26) {
    return (0, _Parsing2.sourceCode)(commentParsers$$19, settings$$26);
  };
})())), lang("Less", "", ".less", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Lua", "", ".lua", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$20 = (0, _List.ofArray)([(0, _Parsing2.block)(["--\\[\\[", "\\]\\]"]), (0, _Parsing2.line)("--")]);
  return function (settings$$27) {
    return (0, _Parsing2.sourceCode)(commentParsers$$20, settings$$27);
  };
})())), lang("Makefile", "make", "makefile", (0, _Util.uncurry)(2, configFile)), lang("Markdown", "", ".md", (0, _Util.uncurry)(2, _Parsing5.markdown)), lang("MATLAB", "", "", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$21 = (0, _List.ofArray)([(0, _Parsing2.line)("%(?![%{}])"), (0, _Parsing2.block)(["%\\{", "%\\}"])]);
  return function (settings$$29) {
    return (0, _Parsing2.sourceCode)(commentParsers$$21, settings$$29);
  };
})())), lang("Objective-C", "", ".m|.mm", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Octave", "", "", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$22 = (0, _List.ofArray)([(0, _Parsing2.block)(["#\\{", "#\\}"]), (0, _Parsing2.block)(["%\\{", "%\\}"]), (0, _Parsing2.line)("##?"), (0, _Parsing2.line)("%[^!]")]);
  return function (settings$$30) {
    return (0, _Parsing2.sourceCode)(commentParsers$$22, settings$$30);
  };
})())), lang("Perl", "perl6", ".p6|.pl|.pl6|.pm|.pm6", (0, _Util.uncurry)(2, configFile)), lang("PHP", "", ".php", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$23 = (0, _List.ofArray)([(0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*", " * "])(_Parsing2.javadocMarkers), _Parsing2.cBlock, (0, _Parsing2.line)("(?://|#)")]);
  return function (settings$$31) {
    return (0, _Parsing2.sourceCode)(commentParsers$$23, settings$$31);
  };
})())), lang("PowerShell", "", ".ps1|.psd1|.psm1", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$24 = (0, _List.ofArray)([(0, _Parsing2.customLine)((0, _Util.uncurry)(2, _Parsing4.psdoc))("#"), (0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.psdoc))(["", ""])(["<#", "#>"])]);
  return function (settings$$32) {
    return (0, _Parsing2.sourceCode)(commentParsers$$24, settings$$32);
  };
})())), lang("Prolog", "", "", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$25 = (0, _List.ofArray)([(0, _Parsing2.customBlock)((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*", " * "])(_Parsing2.javadocMarkers), _Parsing2.cBlock, (0, _Parsing2.line)("%[%!]?")]);
  return function (settings$$33) {
    return (0, _Parsing2.sourceCode)(commentParsers$$25, settings$$33);
  };
})())), lang("Protobuf", "proto|proto3", ".proto", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$26 = new _Types.List(_Parsing2.cLine, new _Types.List());
  return function (settings$$34) {
    return (0, _Parsing2.sourceCode)(commentParsers$$26, settings$$34);
  };
})())), lang("Pug", "jade", ".jade|.pug", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$27 = new _Types.List(_Parsing2.cLine, new _Types.List());
  return function (settings$$35) {
    return (0, _Parsing2.sourceCode)(commentParsers$$27, settings$$35);
  };
})())), lang("PureScript", "", ".purs", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$28 = (0, _List.ofArray)([(0, _Parsing2.line)("--\\s*\\|"), (0, _Parsing2.line)("--"), (0, _Parsing2.block)(["{-\\s*\\|?", "-}"])]);
  return function (settings$$36) {
    return (0, _Parsing2.sourceCode)(commentParsers$$28, settings$$36);
  };
})())), lang("Python", "", ".py", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$29 = (0, _List.ofArray)([(0, _Parsing2.line)("#"), (0, _Parsing2.block)([".*?\"\"\"", "\"\"\""]), (0, _Parsing2.block)([".*?'''", "'''"])]);
  return function (settings$$37) {
    return (0, _Parsing2.sourceCode)(commentParsers$$29, settings$$37);
  };
})())), lang("R", "", ".r", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$30 = new _Types.List((0, _Parsing2.line)("#'?"), new _Types.List());
  return function (settings$$38) {
    return (0, _Parsing2.sourceCode)(commentParsers$$30, settings$$38);
  };
})())), lang("reStructuredText", "", ".rst|.rest", (0, _Util.uncurry)(2, plainText)), lang("Ruby", "", ".rb", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$31 = (0, _List.ofArray)([(0, _Parsing2.line)("#"), (0, _Parsing2.block)(["=begin", "=end"])]);
  return function (settings$$40) {
    return (0, _Parsing2.sourceCode)(commentParsers$$31, settings$$40);
  };
})())), lang("Rust", "", ".rs", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$32 = new _Types.List((0, _Parsing2.line)("\\/\\/(?:\\/|\\!)?"), new _Types.List());
  return function (settings$$41) {
    return (0, _Parsing2.sourceCode)(commentParsers$$32, settings$$41);
  };
})())), lang("SCSS", "", ".scss", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Scala", "", ".scala", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Shaderlab", "", ".shader", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Shell script", "shellscript", ".sh", (0, _Util.uncurry)(2, configFile)), lang("SQL", "", ".sql", (0, _Util.uncurry)(2, (() => {
  const commentParsers$$33 = (0, _List.ofArray)([(0, _Parsing2.line)("--"), _Parsing2.cBlock]);
  return function (settings$$42) {
    return (0, _Parsing2.sourceCode)(commentParsers$$33, settings$$42);
  };
})())), lang("Swift", "", ".swift", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Tcl", "", ".tcl", (0, _Util.uncurry)(2, configFile)), lang("TOML", "", ".toml", (0, _Util.uncurry)(2, configFile)), lang("TypeScript", "typescriptreact", ".ts|.tsx", (0, _Util.uncurry)(2, _Parsing2.java)), lang("Verilog/SystemVerilog", "systemverilog|verilog", ".sv|.svh|.v|.vh|.vl", (0, _Util.uncurry)(2, _Parsing2.java)), lang("XML", "xsl", ".xml|.xsl", (0, _Util.uncurry)(2, _Parsing2.html)), lang("YAML", "", ".yaml|.yml", (0, _Util.uncurry)(2, function (settings$$43) {
  const comments = (0, _Parsing2.line)("#{1,3}")(settings$$43);
  const partialParser$$1 = (0, _Parsing.takeUntil)(comments, plainText(settings$$43));
  return (0, _Parsing.repeatToEnd)(partialParser$$1);
}))]));
exports.languages = languages;

function addCustomLanguage(name$$1, markers) {
  var b, x$$14, _arg1$$2, b$$2, x$$18, _arg1$$3;

  const escape = _RegExp.escape;
  let maybeLine;
  const x$$4 = (0, _Types2.CustomMarkers$$get_line)(markers);

  const _arg1 = new _Prelude.Functor(0, "Functor");

  maybeLine = (0, _Option.map)(function f$$5($arg$$3) {
    return (0, _Parsing2.line)(escape($arg$$3));
  }, x$$4);
  let maybeBlock;
  const x$$9 = (0, _Types2.CustomMarkers$$get_block)(markers);

  const _arg1$$1 = new _Prelude.Functor(0, "Functor");

  maybeBlock = (0, _Option.map)(function f$$9($arg$$4) {
    var _arg3$$1;

    return (0, _Parsing2.block)((_arg3$$1 = new _Prelude.Functor(0, "Functor"), [escape($arg$$4[0]), escape($arg$$4[1])]));
  }, x$$9);
  const list = (0, _List.append)((b = new _Types.List(), (x$$14 = (_arg1$$2 = new _Prelude.Functor(0, "Functor"), (0, _Option.map)((0, _Util.mapCurriedArgs)(function f$$11(value) {
    return new _Types.List((0, _Util.curry)(2, value), new _Types.List());
  }, [[0, 2]]), maybeBlock)), (0, _Option.defaultArg)(x$$14, b))), (b$$2 = new _Types.List(), (x$$18 = (_arg1$$3 = new _Prelude.Functor(0, "Functor"), (0, _Option.map)((0, _Util.mapCurriedArgs)(function f$$14(value$$1) {
    return new _Types.List((0, _Util.curry)(2, value$$1), new _Types.List());
  }, [[0, 2]]), maybeLine)), (0, _Option.defaultArg)(x$$18, b$$2))));
  const cl = lang(name$$1, "", "", (0, _Util.uncurry)(2, function (settings$$44) {
    return (0, _Parsing2.sourceCode)(list, settings$$44);
  }));
  languages(new _Types.List(cl, languages()));
  return cl;
}

function languageForFile(file) {
  const l = file.language.toLocaleLowerCase();

  if (!((0, _String.isNullOrWhiteSpace)(l) ? true : l === "plaintext")) {
    return (0, _Seq.tryFind)(function (arg10$0040$$1) {
      return (0, _Parsing3.LanguageModule$$$matchesFileLanguage)(l, arg10$0040$$1);
    }, languages());
  } else {
    return (0, _Seq.tryFind)(function (arg10$0040$$2) {
      return (0, _Parsing3.LanguageModule$$$matchesFilePath)(file.path, arg10$0040$$2);
    }, languages());
  }
}

function select(file$$1) {
  let x$$20;
  const option = languageForFile(file$$1);
  x$$20 = (0, _Option.defaultArgWith)(option, function ifNoneThunk() {
    const matchValue = file$$1.getMarkers();

    if ((0, _Util.equals)(matchValue, null)) {
      return undefined;
    } else {
      return addCustomLanguage(file$$1.language, matchValue);
    }
  });
  let x$$24;

  const _arg1$$4 = new _Prelude.Functor(0, "Functor");

  x$$24 = (0, _Option.map)(_Parsing3.LanguageModule$$$parser, x$$20);
  return (0, _Option.defaultArg)(x$$24, plainText);
}