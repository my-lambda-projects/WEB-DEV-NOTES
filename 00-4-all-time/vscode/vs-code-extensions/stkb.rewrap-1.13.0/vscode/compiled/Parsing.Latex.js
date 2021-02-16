"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.latex = latex;

var _RegExp = require("./fable-library.2.10.1/RegExp");

var _Array = require("./fable-library.2.10.1/Array");

var _Nonempty = require("./Nonempty");

var _Types = require("./fable-library.2.10.1/Types");

var _Prelude = require("./Prelude");

var _String = require("./fable-library.2.10.1/String");

var _List = require("./fable-library.2.10.1/List");

var _Util = require("./fable-library.2.10.1/Util");

var _Parsing = require("./Parsing.Core");

var _Parsing2 = require("./Parsing.Markdown");

var _Parsing3 = require("./Parsing.Comments");

const newlineRegex = (0, _RegExp.create)("(\\\\(\\\\\\*?|hline|newline|break|linebreak)(\\[.*?\\])?(\\{.*?\\})?\\s*$)|  $|([^\\\\]%)");
const blockCommands = ["[", "begin", "item"];

const preserveEnvironments = (() => {
  const array = ["align", "alltt", "displaymath", "equation", "gather", "listing", "lstlisting", "math", "multline", "verbatim"];
  return (0, _Array.collect)(function mapping(x) {
    return [x, x + "*"];
  }, array, Array);
})();

const preserveShortcuts = ["\\(", "\\[", "$", "$$"];

function takeFrom2ndLineUntil(otherParser, parser, _arg1) {
  var xs;

  const bufferToBlocks = function bufferToBlocks($arg$$1) {
    return parser(((0, _Nonempty.rev)($arg$$1)));
  };

  const loopFrom2ndLine = function loopFrom2ndLine($buffer$$15, $lines$$16) {
    loopFrom2ndLine: while (true) {
      const buffer = $buffer$$15,
            lines = $lines$$16;
      const matchValue = (0, _Nonempty.fromList)(lines);

      if (matchValue != null) {
        const tail = matchValue.fields[1];
        const neLines = matchValue;
        const head = matchValue.fields[0];
        const matchValue$$1 = otherParser(neLines);

        if (matchValue$$1 != null) {
          const result = matchValue$$1;
          let f;
          const arg00$0040 = bufferToBlocks(buffer);

          f = function (b) {
            return (0, _Nonempty.append)(arg00$0040, b);
          };

          return [f(result[0]), result[1]];
        } else {
          $buffer$$15 = (0, _Nonempty.cons)(head, buffer);
          $lines$$16 = tail;
          continue loopFrom2ndLine;
        }
      } else {
        return [bufferToBlocks(buffer), undefined];
      }

      break;
    }
  };

  return loopFrom2ndLine((xs = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", _arg1.fields[0], xs)), _arg1.fields[1]);
}

const commandRegex = (0, _RegExp.create)("^\\\\(\\[|[a-z]+)\\*?\\s*(?:(?:\\[.*?\\]|\\{(.*?)\\})\\s*)*");

function findPreserveSection(beginMarker) {
  const endMarker = (beginMarker === "$" ? true : beginMarker === "$$") ? beginMarker : beginMarker === "\\(" ? "\\)" : beginMarker === "\\[" ? "\\]" : "\\end{" + beginMarker + "}";

  const checkLine = function checkLine($line$$18, $offset$$19) {
    checkLine: while (true) {
      const line = $line$$18,
            offset = $offset$$19;
      const p = line.indexOf(endMarker, offset) | 0;

      if (p < 0) {
        return false;
      } else if (p === 0 ? true : (0, _String.getCharAtIndex)(line, p - 1) !== "\\") {
        return true;
      } else {
        $line$$18 = line;
        $offset$$19 = p + 1;
        continue checkLine;
      }

      break;
    }
  };

  const loop = function loop($acc$$20, $lines$$1$$21) {
    loop: while (true) {
      const acc = $acc$$20,
            lines$$1 = $lines$$1$$21;

      if (lines$$1.tail != null) {
        if (checkLine(lines$$1.head, 0)) {
          return [(0, _List.reverse)(new _Types.List(lines$$1.head, acc)), lines$$1.tail];
        } else {
          $acc$$20 = new _Types.List(lines$$1.head, acc);
          $lines$$1$$21 = lines$$1.tail;
          continue loop;
        }
      } else {
        return [(0, _List.reverse)(acc), new _Types.List()];
      }

      break;
    }
  };

  return function (_arg1$$1) {
    var x$$3, xs$$1;
    const patternInput = loop(new _Types.List(), _arg1$$1.fields[1]);
    return [(x$$3 = new _Prelude.Block(2, "NoWrap", new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$1.fields[0], patternInput[0])), (xs$$1 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x$$3, xs$$1))), (0, _Nonempty.fromList)(patternInput[1])];
  };
}

function latex(settings) {
  const command = function command(_arg1$$2) {
    var x$$5, xs$$2;
    let trimmedLine;
    trimmedLine = _arg1$$2.fields[0].trim();
    const cmdMatch = (0, _RegExp.match)(commandRegex, trimmedLine);
    const patternInput$$1 = cmdMatch != null ? [cmdMatch[1] || "", cmdMatch[2] || "", cmdMatch[0].length === trimmedLine.length] : ["", "", false];

    if ((0, _Array.contains)(trimmedLine, preserveShortcuts, {
      Equals($x$$2, $y$$3) {
        return $x$$2 === $y$$3;
      },

      GetHashCode: _Util.structuralHash
    })) {
      return findPreserveSection(trimmedLine)(_arg1$$2);
    } else if (patternInput$$1[0] === "begin" ? (0, _Array.contains)(patternInput$$1[1], preserveEnvironments, {
      Equals($x$$4, $y$$5) {
        return $x$$4 === $y$$5;
      },

      GetHashCode: _Util.structuralHash
    }) : false) {
      return findPreserveSection(patternInput$$1[1])(_arg1$$2);
    } else if (patternInput$$1[2]) {
      return [(x$$5 = new _Prelude.Block(2, "NoWrap", new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$2.fields[0], new _Types.List())), (xs$$2 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x$$5, xs$$2))), (0, _Nonempty.fromList)(_arg1$$2.fields[1])];
    } else if (trimmedLine.indexOf("$$") === 0 ? true : (0, _Array.contains)(patternInput$$1[0], blockCommands, {
      Equals($x$$6, $y$$7) {
        return $x$$6 === $y$$7;
      },

      GetHashCode: _Util.structuralHash
    })) {
      return takeFrom2ndLineUntil(otherParsers, plainText, _arg1$$2);
    } else {
      return undefined;
    }
  };

  let plainText;

  const processChunk = function processChunk($arg$$8) {
    let arg10$0040$$1;
    arg10$0040$$1 = (0, _Nonempty.mapTail)(function freezeAnyEOLComment(str$$2) {
      const m = (0, _RegExp.match)((0, _RegExp.create)("[^\\\\]%"), str$$2);

      if (!(m != null)) {
        return str$$2;
      } else {
        const p$$1 = m.index + 2 | 0;
        return (0, _String.substring)(str$$2, 0, p$$1) + (0, _String.replace)((0, _String.substring)(str$$2, p$$1), " ", "\u0000");
      }
    }, $arg$$8);
    return (0, _Parsing.firstLineIndentParagraphBlock)(settings.reformat, arg10$0040$$1);
  };

  plainText = function ($arg$$9) {
    var _arg2;

    const x$$7 = (0, _Parsing.splitIntoChunks)((0, _Parsing.afterRegex)(newlineRegex))($arg$$9);

    const _arg3 = new _Prelude.Functor(0, "Functor");

    return new _Prelude.Nonempty$00601(0, "Nonempty", processChunk(x$$7.fields[0]), (_arg2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(processChunk, x$$7.fields[1])));
  };

  let otherParsers;
  const parsers = (0, _List.ofArray)([_Parsing.blankLines, (0, _Parsing3.lineComment)((0, _Util.uncurry)(2, _Parsing2.markdown), "%", settings), command]);

  otherParsers = function (lines$$3) {
    return (0, _Parsing.tryMany)(parsers, lines$$3);
  };

  const partialParser = (0, _Parsing.takeUntil)(otherParsers, plainText);
  return (0, _Parsing.repeatToEnd)(partialParser);
}