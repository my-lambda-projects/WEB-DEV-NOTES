"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractWrappable = extractWrappable;
exports.tabsToSpacesContent = tabsToSpacesContent;
exports.LineType$reflection = LineType$reflection;
exports.CommentFormat$reflection = CommentFormat$reflection;
exports.lineComment = lineComment;
exports.blockComment = blockComment;
exports.CommentFormat = exports.LineType = void 0;

var _RegExp = require("./fable-library.2.10.1/RegExp");

var _Nonempty = require("./Nonempty");

var _Line = require("./Line");

var _List = require("./fable-library.2.10.1/List");

var _Option = require("./fable-library.2.10.1/Option");

var _String = require("./fable-library.2.10.1/String");

var _Prelude = require("./Prelude");

var _Array = require("./fable-library.2.10.1/Array");

var _Types = require("./fable-library.2.10.1/Types");

var _Reflection = require("./fable-library.2.10.1/Reflection");

var _Int = require("./fable-library.2.10.1/Int32");

var _Block = require("./Block");

var _Util = require("./fable-library.2.10.1/Util");

var _Parsing = require("./Parsing.Core");

var _Seq = require("./fable-library.2.10.1/Seq");

function extractWrappable(marker, eraseIndentedMarker, reformatPrefix, settings, lines) {
  var stripLine, _arg3, _arg2;

  const regex = (0, _RegExp.create)("^(\\s*)" + marker + "\\s*");
  let patternInput;
  const lines$$1 = (0, _Nonempty.toList)(lines);
  let p;
  let option$$2;
  let option$$1;
  const option = (0, _List.tryFind)(_Line.containsText, lines$$1);
  const ifNone = (0, _List.tryHead)(lines$$1);
  option$$1 = (0, _Option.defaultArg)(option, ifNone);
  option$$2 = (0, _Option.map)(function mapping($arg$$1) {
    let tuple;
    tuple = (0, _Line.split)(regex, $arg$$1);
    return tuple[0];
  }, option$$1);
  p = (0, _Option.defaultArg)(option$$2, "");
  patternInput = [p, (0, _Line.tabsToSpaces)(settings.tabWidth, p).length];
  const newPrefix = settings.reformat ? reformatPrefix(patternInput[0]) : patternInput[0];
  return [[newPrefix, newPrefix], (stripLine = function stripLine($arg$$4) {
    var str$$1;
    let tupledArg$$1;
    let tupledArg;
    let line$$2;
    line$$2 = (0, _Line.tabsToSpaces)(settings.tabWidth, $arg$$4);
    tupledArg = (0, _Line.split)(regex, line$$2);
    tupledArg$$1 = [(eraseIndentedMarker ? (str$$1 = (0, _String.replicate)(tupledArg[0].length, " "), ((0, _Prelude.String$$$dropStart)(patternInput[1], str$$1))) : (0, _Prelude.String$$$dropStart)(patternInput[1], tupledArg[0])), tupledArg[1]];
    return tupledArg$$1[0] + tupledArg$$1[1];
  }, _arg3 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", stripLine(lines.fields[0]), (_arg2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(stripLine, lines.fields[1]))))];
}

function maybeReformat(settings$$1, prefix$$1) {
  if (!settings$$1.reformat) {
    return prefix$$1;
  } else {
    const p$$1 = (0, _String.trimEnd)(prefix$$1);

    if (p$$1 === "") {
      return p$$1;
    } else {
      return p$$1 + " ";
    }
  }
}

function tabsToSpacesContent(tabSize) {
  return function (line$$3) {
    var initWidth;
    return (0, _Line.Line$$$get_mapRight)()((initWidth = (0, _Line.strWidth)(tabSize)((0, _Line.Line$$get_prefix)(line$$3)) | 0, function (str$$2) {
      let option$$3;
      let tuple$$1;
      const array = str$$2.split("\t");
      const state = [undefined, initWidth];
      tuple$$1 = (0, _Array.fold)(function step(tupledArg$$2, s) {
        const accWidth$0027 = tupledArg$$2[1] + (0, _Line.strWidth)(tabSize)(s) | 0;

        if (tupledArg$$2[0] != null) {
          const accStr = tupledArg$$2[0];
          const spcCount = tabSize - tupledArg$$2[1] % tabSize | 0;
          return [accStr + (0, _String.replicate)(spcCount, " ") + s, accWidth$0027 + spcCount];
        } else {
          return [s, accWidth$0027];
        }
      }, state, array);
      option$$3 = tuple$$1[0];
      return option$$3;
    }))(line$$3);
  };
}

const LineType = (0, _Types.declare)(function Parsing_Comments_LineType(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.LineType = LineType;

function LineType$reflection() {
  return (0, _Reflection.union_type)("Parsing.Comments.LineType", [], LineType, () => ["Decoration", "Normal"]);
}

function splitAtWidth(tabWidth$$2, leftWidth, extraWidth, line$$4) {
  const spaces = function spaces(n) {
    return (0, _String.replicate)(n, " ");
  };

  const loop = function loop($accWidth$$1$$27, $p$$2$$28) {
    loop: while (true) {
      const accWidth$$1 = $accWidth$$1$$27,
            p$$2 = $p$$2$$28;

      if (p$$2 >= (0, _Line.Line$$get_content)(line$$4).length) {
        return (0, _Line.Line$$$$002Ector$$Z384F8060)((0, _Line.Line$$get_prefix)(line$$4) + (0, _Line.Line$$get_content)(line$$4), "");
      } else {
        const cc = (0, _Line.Line$$get_content)(line$$4)[p$$2].charCodeAt(0);
        const ccWidth = (0, _Line.charWidth)(tabWidth$$2, leftWidth + accWidth$$1, cc) | 0;
        const diff = extraWidth - accWidth$$1 - ccWidth | 0;

        if (diff === 0) {
          return (0, _Line.Line$$$get_adjustSplit)()(p$$2 + 1)(line$$4);
        } else if (diff > 0) {
          $accWidth$$1$$27 = accWidth$$1 + ccWidth;
          $p$$2$$28 = p$$2 + 1;
          continue loop;
        } else {
          const line$$5 = (0, _Line.Line$$$get_adjustSplit)()(p$$2)(line$$4);
          return (0, _Line.Line$$$$002Ector$$Z384F8060)((0, _Line.Line$$get_prefix)(line$$5) + spaces(diff + ccWidth), spaces((0, _Int.op_UnaryNegation_Int32)(diff)) + (0, _String.substring)((0, _Line.Line$$get_content)(line$$5), 1));
        }
      }

      break;
    }
  };

  return tabsToSpacesContent(tabWidth$$2)(extraWidth < 1 ? line$$4 : loop(0, 0));
}

function processContent(settings$$2, contentParser, prefix$$2) {
  const partialParser = (0, _Parsing.takeUntil)(function decorationLine(_arg1) {
    var x$$6, x$$4, xs, xs$$1;

    if (_arg1.fields[0][0].tag === 1) {
      return undefined;
    } else {
      return [(x$$6 = new _Prelude.Block(2, "NoWrap", (x$$4 = (0, _Line.Line$$$get_toString)()(_arg1.fields[0][1]), (xs = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x$$4, xs)))), (xs$$1 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x$$6, xs$$1))), (0, _Nonempty.fromList)(_arg1.fields[1])];
    }
  }, function ($arg$$5) {
    var _arg2$$3, f$$6, _arg3$$1, _arg2$$1, f$$11, _arg3$$2, _arg2$$2;

    let lines$$3;

    const f$$16 = function f$$16(tuple$$2) {
      return tuple$$2[1];
    };

    const _arg3$$3 = new _Prelude.Functor(0, "Functor");

    lines$$3 = new _Prelude.Nonempty$00601(0, "Nonempty", f$$16($arg$$5.fields[0]), (_arg2$$3 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$16, $arg$$5.fields[1])));
    const prefix$$3 = maybeReformat(settings$$2, prefix$$2);
    return (0, _Block.splitUp)(function (a$$2) {
      return prefix$$3;
    })((0, _Util.partialApply)(1, contentParser, [settings$$2]))([(f$$6 = function f$$6(l) {
      return (0, _Line.Line$$get_prefix)(l);
    }, _arg3$$1 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", f$$6(lines$$3.fields[0]), (_arg2$$1 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$6, lines$$3.fields[1])))), (f$$11 = function f$$11(l$$1) {
      return (0, _Line.Line$$get_content)(l$$1);
    }, _arg3$$2 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", f$$11(lines$$3.fields[0]), (_arg2$$2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$11, lines$$3.fields[1]))))]);
  });
  return (0, _Parsing.repeatToEnd)(partialParser);
}

const wsRegex = (0, _RegExp.create)("^\\s*");
const CommentFormat = (0, _Types.declare)(function Parsing_Comments_CommentFormat(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.CommentFormat = CommentFormat;

function CommentFormat$reflection() {
  return (0, _Reflection.union_type)("Parsing.Comments.CommentFormat", [], CommentFormat, () => [["LineFmt", [["Item1", (0, _Prelude.Nonempty$00601$reflection)((0, _Line.Line$reflection)())], ["Item2", _Reflection.int32_type]]], ["MultiLineBlockFmt", [["Item1", (0, _Reflection.tuple_type)(LineType$reflection(), (0, _Line.Line$reflection)())], ["Item2", (0, _Reflection.list_type)((0, _Line.Line$reflection)())], ["Item3", (0, _Reflection.option_type)((0, _Line.Line$reflection)())], ["Item4", _Reflection.string_type]]], ["SingleLineBlockFmt", [["Item1", (0, _Reflection.tuple_type)(LineType$reflection(), (0, _Line.Line$reflection)())], ["Item2", _Reflection.string_type]]]]);
}

function inspectAndProcessContent(fmt, contentParser$$1, settings$$3) {
  var xs$$2, xs$$3;
  let patternInput$$1;

  switch (fmt.tag) {
    case 1:
      {
        const bm = fmt.fields[3] !== "" ? "[" + fmt.fields[3] + "]?\\s*" : "";
        patternInput$$1 = [fmt.fields[1], (0, _RegExp.create)("^\\s*" + bm), 0];
        break;
      }

    case 2:
      {
        patternInput$$1 = [(0, _Seq.empty)(), wsRegex, 0];
        break;
      }

    default:
      {
        patternInput$$1 = [fmt.fields[0], wsRegex, fmt.fields[1]];
      }
  }

  const strWidth = function strWidth(str$$3) {
    return (0, _Line.strWidth$0027)(patternInput$$1[2], settings$$3.tabWidth, str$$3);
  };

  let patternInput$$3;
  patternInput$$3 = (0, _Seq.mapFold)(function mapping$$1(minIndent, line$$8) {
    let patternInput$$2;
    const line$$7 = line$$8;
    const m = (0, _RegExp.match)(patternInput$$1[1], (0, _Line.Line$$get_content)(line$$7));
    patternInput$$2 = (0, _Line.Line$$get_content)(line$$7).length === m[0].length ? [new LineType(1, "Normal"), 2147483647] : (0, _Line.containsText)((0, _Line.Line$$get_content)(line$$7)) ? [new LineType(1, "Normal"), strWidth(m[0])] : [new LineType(0, "Decoration"), 2147483647];
    return [[patternInput$$2[0], line$$8], (0, _Util.min)(_Util.comparePrimitives, minIndent, patternInput$$2[1])];
  }, 2147483647, patternInput$$1[0]);
  let patternInput$$5;

  const adjust = function adjust($tupledArg$$3$$42) {
    adjust: while (true) {
      const tupledArg$$3 = $tupledArg$$3$$42;

      if (tupledArg$$3[0].tag === 1) {
        const line$$10 = splitAtWidth(settings$$3.tabWidth, patternInput$$1[2], patternInput$$3[1], tupledArg$$3[1]);
        const line$$11 = (0, _Line.Line$$$get_mapLeft)()(function (prefix$$4) {
          return maybeReformat(settings$$3, prefix$$4);
        })(tabsToSpacesContent(settings$$3.tabWidth)(line$$10));
        return [[tupledArg$$3[0], line$$11], (0, _String.isNullOrWhiteSpace)((0, _Line.Line$$get_content)(line$$11)) ? undefined : (0, _Line.Line$$get_prefix)(line$$11)];
      } else {
        const m$$1 = (0, _RegExp.match)(patternInput$$1[1], (0, _Line.Line$$get_content)(tupledArg$$3[1]));

        if (strWidth(m$$1[0]) >= patternInput$$3[1]) {
          $tupledArg$$3$$42 = [new LineType(1, "Normal"), tupledArg$$3[1]];
          continue adjust;
        } else {
          return [[tupledArg$$3[0], tupledArg$$3[1]], undefined];
        }
      }

      break;
    }
  };

  const state$$2 = undefined;
  patternInput$$5 = (0, _Seq.mapFold)(function mapping$$3(maybePrefix, line$$12) {
    const patternInput$$4 = adjust(line$$12);
    return [patternInput$$4[0], ((0, _Option.defaultArg)(maybePrefix, patternInput$$4[1]))];
  }, state$$2, patternInput$$3[0]);
  let patternInput$$6;

  switch (fmt.tag) {
    case 1:
      {
        let last;
        const b$$5 = (0, _Seq.empty)();
        let x$$23;

        const _arg1$$1 = new _Prelude.Functor(0, "Functor");

        x$$23 = (0, _Option.map)(function f$$21($arg$$8) {
          let value;
          const a$$4 = new LineType(0, "Decoration");
          value = [a$$4, $arg$$8];
          return (0, _Seq.singleton)(value);
        }, fmt.fields[2]);
        last = (0, _Option.defaultArg)(x$$23, b$$5);
        patternInput$$6 = [(xs$$2 = (0, _List.ofSeq)((0, _Seq.append)(patternInput$$5[0], last)), new _Prelude.Nonempty$00601(0, "Nonempty", fmt.fields[0], xs$$2)), ""];
        break;
      }

    case 2:
      {
        patternInput$$6 = [(xs$$3 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", fmt.fields[0], xs$$3)), fmt.fields[1]];
        break;
      }

    default:
      {
        patternInput$$6 = [(0, _Nonempty.fromSeqUnsafe)(patternInput$$5[0]), ""];
      }
  }

  const bodyPrefix = (0, _Option.defaultArg)(patternInput$$5[1], patternInput$$6[1]);
  const x$$28 = new _Prelude.Block(0, "Comment", processContent(settings$$3, contentParser$$1, bodyPrefix)(patternInput$$6[0]));
  const xs$$4 = new _Types.List();
  return new _Prelude.Nonempty$00601(0, "Nonempty", x$$28, xs$$4);
}

function lineComment(contentParser$$2, marker$$1, settings$$4) {
  const prefixRegex$$3 = (0, _RegExp.create)("^(\\s*)" + marker$$1);

  const strWidth$$1 = function strWidth$$1(str$$4) {
    return (0, _Line.strWidth$0027)(0, settings$$4.tabWidth, str$$4);
  };

  const tryMatchPrefix = function tryMatchPrefix(str$$5) {
    const m$$2 = (0, _RegExp.match)(prefixRegex$$3, str$$5);

    if (m$$2 != null) {
      return (0, _Line.Line$$$$002Ector$$Z18115A39)(str$$5, m$$2[0].length);
    } else {
      return undefined;
    }
  };

  return function (_arg1$$2) {
    return (0, _Prelude.OptionBuilder$$Bind$$Z424BC9ED)(_Prelude.option, tryMatchPrefix(_arg1$$2.fields[0]), function (_arg1$$3) {
      const indent$$1 = strWidth$$1((0, _Line.Line$$get_prefix)(_arg1$$3)) | 0;
      const patternInput$$7 = (0, _Prelude.List$$$spanMaybes)(function matchesFirst($arg$$9) {
        const option$$5 = tryMatchPrefix($arg$$9);
        return (0, _Option.filter)(function predicate(l$$2) {
          return strWidth$$1((0, _Line.Line$$get_prefix)(l$$2)) === indent$$1;
        }, option$$5);
      })(_arg1$$2.fields[1]);
      const fmt$$1 = new CommentFormat(0, "LineFmt", new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$3, patternInput$$7[0]), indent$$1);
      return (0, _Prelude.OptionBuilder$$Return$$1505)(_Prelude.option, [inspectAndProcessContent(fmt$$1, contentParser$$2, settings$$4), (0, _Nonempty.fromList)(patternInput$$7[1])]);
    });
  };
}

function blockComment(contentParser$$3, bodyMarkers$$1, defaultBodyMarker, startMarker, endMarker, settings$$5) {
  const patternInput$$8 = [(0, _RegExp.create)("^\\s*" + startMarker + "\\s*"), (0, _RegExp.create)(endMarker)];

  const findEnd = function findEnd($acc$$59, $_arg1$$4$$60) {
    var p$$3;

    findEnd: while (true) {
      const acc = $acc$$59,
            _arg1$$4 = $_arg1$$4$$60;

      if (_arg1$$4.tail != null) {
        const m$$3 = (0, _RegExp.match)(patternInput$$8[1], _arg1$$4.head);

        if (m$$3 != null) {
          const patternInput$$9 = (p$$3 = m$$3.index | 0, ((0, _Line.containsText)((0, _String.substring)(_arg1$$4.head, 0, p$$3)))) ? [new _Types.List(((0, _Line.Line$$$$002Ector$$Z384F8060)("", _arg1$$4.head)), acc), undefined] : [acc, ((0, _Line.Line$$$$002Ector$$Z384F8060)("", _arg1$$4.head))];
          return [(0, _List.reverse)(patternInput$$9[0]), patternInput$$9[1], _arg1$$4.tail];
        } else {
          $acc$$59 = new _Types.List(((0, _Line.Line$$$$002Ector$$Z384F8060)("", _arg1$$4.head)), acc);
          $_arg1$$4$$60 = _arg1$$4.tail;
          continue findEnd;
        }
      } else {
        return [(0, _List.reverse)(acc), undefined, new _Types.List()];
      }

      break;
    }
  };

  return function (_arg1$$5) {
    const mStart = (0, _RegExp.match)(patternInput$$8[0], _arg1$$5.fields[0]);

    if (!(mStart != null)) {
      return (0, _Prelude.OptionBuilder$$ReturnFrom$$1505)(_Prelude.option, undefined);
    } else {
      const hLine = (0, _Line.Line$$$$002Ector$$Z18115A39)(_arg1$$5.fields[0], mStart[0].length);

      const mkFirstLine = function mkFirstLine(p$$4) {
        var str$$8;

        if (!(str$$8 = (0, _Line.Line$$get_content)(hLine), ((0, _Line.containsText)((0, _String.substring)(str$$8, 0, p$$4))))) {
          return [new LineType(0, "Decoration"), hLine];
        } else {
          const hLine$$1 = tabsToSpacesContent(settings$$5.tabWidth)(hLine);
          return [new LineType(1, "Normal"), (0, _Line.Line$$$get_mapLeft)()(function (prefix$$5) {
            return maybeReformat(settings$$5, prefix$$5);
          })(hLine$$1)];
        }
      };

      let patternInput$$11;
      const mEnd = (0, _RegExp.match)(patternInput$$8[1], (0, _Line.Line$$get_content)(hLine));

      if (mEnd != null) {
        const addedLinesPrefix = (0, _Line.leadingWhitespace)((0, _Line.Line$$get_prefix)(hLine)) + defaultBodyMarker;
        patternInput$$11 = [new CommentFormat(2, "SingleLineBlockFmt", mkFirstLine(mEnd.index), addedLinesPrefix), _arg1$$5.fields[1]];
      } else {
        const patternInput$$10 = findEnd(new _Types.List(), _arg1$$5.fields[1]);
        const fl = mkFirstLine((0, _Line.Line$$get_content)(hLine).length);
        patternInput$$11 = [new CommentFormat(1, "MultiLineBlockFmt", fl, patternInput$$10[0], patternInput$$10[1], bodyMarkers$$1), patternInput$$10[2]];
      }

      return (0, _Prelude.OptionBuilder$$Return$$1505)(_Prelude.option, [inspectAndProcessContent(patternInput$$11[0], contentParser$$3, settings$$5), (0, _Nonempty.fromList)(patternInput$$11[1])]);
    }
  };
}