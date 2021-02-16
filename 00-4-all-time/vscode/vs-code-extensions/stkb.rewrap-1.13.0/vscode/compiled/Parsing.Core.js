"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionParser = optionParser;
exports.ignoreParser = ignoreParser;
exports.tryMany = tryMany;
exports.takeUntil = takeUntil;
exports.repeatToEnd = repeatToEnd;
exports.splitIntoChunks = splitIntoChunks;
exports.splitBefore = splitBefore;
exports.beforeRegex = beforeRegex;
exports.afterRegex = afterRegex;
exports.onIndent = onIndent;
exports.firstLineIndentParagraphBlock = firstLineIndentParagraphBlock;
exports.ignoreFirstLine = ignoreFirstLine;
exports.indentSeparatedParagraphBlock = indentSeparatedParagraphBlock;
exports.takeLinesBetweenMarkers = takeLinesBetweenMarkers;
exports.blankLines = void 0;

var _Option = require("./fable-library.2.10.1/Option");

var _Block = require("./Block");

var _Types = require("./fable-library.2.10.1/Types");

var _Prelude = require("./Prelude");

var _Nonempty = require("./Nonempty");

var _List = require("./fable-library.2.10.1/List");

var _Util = require("./fable-library.2.10.1/Util");

var _Line = require("./Line");

var _String = require("./fable-library.2.10.1/String");

function optionParser(splitter, totalParser) {
  return function ($arg$$1) {
    const option = splitter($arg$$1);
    return (0, _Option.map)(function mapping(tupledArg) {
      return [totalParser(tupledArg[0]), tupledArg[1]];
    }, option);
  };
}

function ignoreParser(splitter$$1) {
  return function ($arg$$3) {
    const option$$1 = splitter$$1($arg$$3);
    return (0, _Option.map)(function mapping$$1(tupledArg$$1) {
      var x, xs;
      return [(x = ((0, _Block.ignoreBlock)(tupledArg$$1[0])), xs = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x, xs)), tupledArg$$1[1]];
    }, option$$1);
  };
}

function tryMany($parsers$$14, $lines$$15) {
  tryMany: while (true) {
    const parsers = $parsers$$14,
          lines = $lines$$15;

    if (parsers.tail != null) {
      const matchValue = parsers.head(lines);

      if (matchValue == null) {
        $parsers$$14 = parsers.tail;
        $lines$$15 = lines;
        continue tryMany;
      } else {
        return matchValue;
      }
    } else {
      return undefined;
    }

    break;
  }
}

function takeUntil(otherParser, totalParser$$1) {
  const loop = function loop($buffer$$18, $_arg1$$19) {
    var list;

    loop: while (true) {
      const buffer = $buffer$$18,
            _arg1 = $_arg1$$19;
      const matchValue$$1 = otherParser(_arg1);

      if (matchValue$$1 == null) {
        const matchValue$$3 = (0, _Nonempty.fromList)(_arg1.fields[1]);

        if (matchValue$$3 == null) {
          return [totalParser$$1((list = new _Prelude.Nonempty$00601(0, "Nonempty", _arg1.fields[0], buffer), ((0, _Nonempty.rev)(list)))), undefined];
        } else {
          const neLines = matchValue$$3;
          $buffer$$18 = new _Types.List(_arg1.fields[0], buffer);
          $_arg1$$19 = neLines;
          continue loop;
        }
      } else {
        const remainingLines = matchValue$$1[1];
        const blocks = matchValue$$1[0];
        const matchValue$$2 = (0, _Nonempty.fromList)((0, _List.reverse)(buffer));

        if (matchValue$$2 == null) {
          return [blocks, remainingLines];
        } else {
          const bufferLines = matchValue$$2;
          return [(0, _Nonempty.append)(totalParser$$1(bufferLines), blocks), remainingLines];
        }
      }

      break;
    }
  };

  return (0, _Util.partialApply)(1, loop, [new _Types.List()]);
}

function repeatToEnd(partialParser) {
  const loop$$1 = function loop$$1($blocks$$1$$21, $lines$$2$$22) {
    loop$$1: while (true) {
      const blocks$$1 = $blocks$$1$$21,
            lines$$2 = $lines$$2$$22;
      const matchValue$$4 = partialParser(lines$$2);

      if (matchValue$$4[1] == null) {
        return (0, _Nonempty.appendToList)(blocks$$1, matchValue$$4[0]);
      } else {
        const remainingLines$$1 = matchValue$$4[1];
        $blocks$$1$$21 = (0, _List.append)(blocks$$1, (0, _Nonempty.toList)(matchValue$$4[0]));
        $lines$$2$$22 = remainingLines$$1;
        continue loop$$1;
      }

      break;
    }
  };

  return (0, _Util.partialApply)(1, loop$$1, [new _Types.List()]);
}

function splitIntoChunks(splitFn) {
  return (0, _Nonempty.unfold)(splitFn);
}

function splitBefore(predicate, _arg1$$1) {
  const matchValue$$5 = (0, _Nonempty.span)(function ($arg$$4) {
    const value = predicate($arg$$4);
    return !value;
  })(_arg1$$1);

  if (matchValue$$5 == null) {
    let tupledArg$$3;
    const tupledArg$$2 = (0, _Prelude.List$$$span)(function ($arg$$5) {
      const value$$1 = predicate($arg$$5);
      return !value$$1;
    })(_arg1$$1.fields[1]);
    tupledArg$$3 = [(new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$1.fields[0], tupledArg$$2[0])), tupledArg$$2[1]];
    return [tupledArg$$3[0], ((0, _Nonempty.fromList)(tupledArg$$3[1]))];
  } else {
    const res = matchValue$$5;
    return res;
  }
}

function beforeRegex(regex) {
  return function (arg10$0040) {
    return splitBefore(function predicate$$1(line) {
      return (0, _Line.contains)(regex, line);
    }, arg10$0040);
  };
}

function afterRegex(regex$$1) {
  return (0, _Nonempty.splitAfter)(function (line$$1) {
    return (0, _Line.contains)(regex$$1, line$$1);
  });
}

function onIndent(tabWidth, _arg1$$3) {
  const indentSize = function indentSize($arg$$7) {
    let str$$1;
    let str;
    str = (0, _Line.leadingWhitespace)($arg$$7);
    str$$1 = (0, _Line.tabsToSpaces)(tabWidth, str);
    return str$$1.length | 0;
  };

  const firstLineIndentSize = indentSize(_arg1$$3.fields[0]) | 0;
  let tupledArg$$5;
  const tupledArg$$4 = (0, _Prelude.List$$$span)(function (line$$3) {
    return Math.abs(indentSize(line$$3) - firstLineIndentSize) < 2;
  })(_arg1$$3.fields[1]);
  tupledArg$$5 = [(new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$3.fields[0], tupledArg$$4[0])), tupledArg$$4[1]];
  return [tupledArg$$5[0], ((0, _Nonempty.fromList)(tupledArg$$5[1]))];
}

function firstLineIndentParagraphBlock(reformat, _arg1$$5) {
  var line$$4, option$$2, f$$11, _arg3, _arg2;

  const prefixes = reformat ? ["", ""] : [(0, _Line.leadingWhitespace)(_arg1$$5.fields[0]), (line$$4 = (option$$2 = (0, _List.tryHead)(_arg1$$5.fields[1]), ((0, _Option.defaultArg)(option$$2, _arg1$$5.fields[0]))), ((0, _Line.leadingWhitespace)(line$$4)))];
  return (0, _Block.textBlock)(prefixes, (f$$11 = function f$$11(str$$2) {
    return (0, _String.trimStart)(str$$2);
  }, _arg3 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", f$$11(_arg1$$5.fields[0]), (_arg2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$11, _arg1$$5.fields[1])))));
}

function ignoreFirstLine(otherParser$$1, settings, _arg1$$6) {
  var xs$$1;
  const headBlock = (0, _Block.ignoreBlock)((xs$$1 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$6.fields[0], xs$$1)));
  let option$$4;
  const option$$3 = (0, _Nonempty.fromList)(_arg1$$6.fields[1]);
  option$$4 = (0, _Option.map)(function mapping$$2($arg$$8) {
    const neList = otherParser$$1(settings, $arg$$8);
    return (0, _Nonempty.cons)(headBlock, neList);
  }, option$$3);
  let value$$2;
  const xs$$2 = new _Types.List();
  value$$2 = new _Prelude.Nonempty$00601(0, "Nonempty", headBlock, xs$$2);
  return (0, _Option.defaultArg)(option$$4, value$$2);
}

function indentSeparatedParagraphBlock(textType, lines$$5) {
  var f$$15, _arg3$$1, _arg2$$1;

  const prefix = (0, _Line.leadingWhitespace)((0, _Nonempty.head)(lines$$5));
  return textType([[prefix, prefix], (f$$15 = function f$$15(str$$4) {
    return (0, _String.trimStart)(str$$4);
  }, _arg3$$1 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", f$$15(lines$$5.fields[0]), (_arg2$$1 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$15, lines$$5.fields[1]))))]);
}

function takeLinesBetweenMarkers(startRegex, endRegex, _arg1$$7) {
  let option$$5;
  option$$5 = (0, _Line.tryMatch)(startRegex, _arg1$$7.fields[0]);
  return (0, _Option.map)(function takeUntilEndMarker(prefix$$1) {
    var fn, n;
    const tupledArg$$6 = afterRegex(endRegex)((fn = (n = prefix$$1.length | 0, function (str$$6) {
      return (0, _Prelude.String$$$dropStart)(n, str$$6);
    }), (0, _Nonempty.mapHead)(fn, _arg1$$7)));
    const f$$19 = (0, _Nonempty.replaceHead)(_arg1$$7.fields[0]);
    return [f$$19(tupledArg$$6[0]), tupledArg$$6[1]];
  }, option$$5);
}

const blankLines = ignoreParser((0, _Nonempty.span)(_Line.isBlank));
exports.blankLines = blankLines;