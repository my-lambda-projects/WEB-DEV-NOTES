"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceCode = sourceCode;
exports.customLine = customLine;
exports.customBlock = customBlock;
exports.html = exports.css = exports.java = exports.javadocMarkers = exports.cBlock = exports.cLine = exports.block = exports.line = void 0;

var _Util = require("./fable-library.2.10.1/Util");

var _List = require("./fable-library.2.10.1/List");

var _Parsing = require("./Parsing.Core");

var _Block = require("./Block");

var _Types = require("./fable-library.2.10.1/Types");

var _Prelude = require("./Prelude");

var _Parsing2 = require("./Parsing.Comments");

var _Parsing3 = require("./Parsing.Markdown");

var _Parsing4 = require("./Parsing.DocComments");

var _Parsing5 = require("./Parsing.Sgml");

function sourceCode(commentParsers, settings) {
  let commentParsers$$1;
  const parsers = (0, _List.map)((0, _Util.mapCurriedArgs)(function (cp) {
    return (0, _Util.partialApply)(1, cp, [settings]);
  }, [[0, 2]]), commentParsers);

  commentParsers$$1 = function (lines) {
    return (0, _Parsing.tryMany)(parsers, lines);
  };

  const partialParser = (0, _Parsing.takeUntil)(commentParsers$$1, function codeParser($arg$$1) {
    let x;
    x = (0, _Block.ignoreBlock)($arg$$1);
    const xs = new _Types.List();
    return new _Prelude.Nonempty$00601(0, "Nonempty", x, xs);
  });
  return (0, _Parsing.repeatToEnd)(partialParser);
}

function customLine(contentParser) {
  return function (marker) {
    return function (settings$$1) {
      return (0, _Parsing2.lineComment)(contentParser, marker, settings$$1);
    };
  };
}

const line = customLine((0, _Util.uncurry)(2, _Parsing3.markdown));
exports.line = line;

function customBlock(contentParser$$1) {
  return function (tupledArg) {
    return function (tupledArg$$1) {
      return function (settings$$3) {
        return (0, _Parsing2.blockComment)(contentParser$$1, tupledArg[0], tupledArg[1], tupledArg$$1[0], tupledArg$$1[1], settings$$3);
      };
    };
  };
}

const block = customBlock((0, _Util.uncurry)(2, _Parsing3.markdown))(["", ""]);
exports.block = block;
const cLine = line("//");
exports.cLine = cLine;
const cBlock = customBlock((0, _Util.uncurry)(2, _Parsing3.markdown))(["*", ""])(["/\\*", "\\*/"]);
exports.cBlock = cBlock;
const javadocMarkers = ["/\\*[*!]", "\\*/"];
exports.javadocMarkers = javadocMarkers;

const java = (() => {
  const commentParsers$$2 = (0, _List.ofArray)([customBlock((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*", " * "])(javadocMarkers), cBlock, customLine((0, _Util.uncurry)(2, _Parsing4.javadoc))("//[/!]"), cLine]);
  return function (settings$$6) {
    return sourceCode(commentParsers$$2, settings$$6);
  };
})();

exports.java = java;

const css = (() => {
  const commentParsers$$3 = (0, _List.ofArray)([customBlock((0, _Util.uncurry)(2, _Parsing4.javadoc))(["*", " * "])(javadocMarkers), cBlock]);
  return function (settings$$7) {
    return sourceCode(commentParsers$$3, settings$$7);
  };
})();

exports.css = css;

const html = (() => {
  const blockTags = [];
  return function (settings$$8) {
    const clo4 = (0, _Parsing5.sgml)((0, _Util.uncurry)(2, java), (0, _Util.uncurry)(2, css), blockTags, settings$$8);
    return function (arg40) {
      return clo4(arg40);
    };
  };
})();

exports.html = html;