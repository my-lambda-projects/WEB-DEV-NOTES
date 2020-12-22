"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrappable$$$toLines = Wrappable$$$toLines;
exports.oldSplitUp = oldSplitUp;
exports.commentBlock = commentBlock;
exports.textBlock = textBlock;
exports.ignoreBlock = ignoreBlock;
exports.splitUp = void 0;

var _Nonempty = require("./Nonempty");

var _Line = require("./Line");

var _String = require("./fable-library.2.10.1/String");

var _Prelude = require("./Prelude");

var _List = require("./fable-library.2.10.1/List");

var _Option = require("./fable-library.2.10.1/Option");

var _Types = require("./fable-library.2.10.1/Types");

var _Util = require("./fable-library.2.10.1/Util");

function Wrappable$$$toLines(_arg1, lines) {
  let arg10$0040$$1;
  arg10$0040$$1 = (0, _Nonempty.mapHead)(function fn(y) {
    return _arg1[0] + y;
  }, lines);
  return (0, _Nonempty.mapTail)(function fn$$1(y$$1) {
    return _arg1[1] + y$$1;
  }, arg10$0040$$1);
}

const splitUp = (() => {
  const prependPrefixTrimEndOfBlankLine = function prependPrefixTrimEndOfBlankLine(p, s) {
    if ((0, _Line.isBlank)(s)) {
      return (0, _String.trimEnd)(p);
    } else {
      return p + s;
    }
  };

  return function (makeDefPrefix) {
    return function (parser) {
      return function (tupledArg$$3) {
        return (0, _Nonempty.unfold)(function prependPrefixes(tupledArg$$2) {
          var x$$5, b$$2, f, x$$7, _arg1$$2;

          let patternInput$$1;
          const patternInput = (0, _Nonempty.splitAt)((0, _Prelude.Block$$$size$$60E56076)(new _Prelude.HasSize(0, "HasSize"), tupledArg$$2[1].fields[0]), tupledArg$$2[0]);
          let pRest;
          let b$$1;
          let x$$2;
          const x$$1 = (0, _List.tryLast)(patternInput[0].fields[1]);
          x$$2 = (0, _Option.defaultArg)(x$$1, patternInput[0].fields[0]);
          const xs = new _Types.List();
          b$$1 = new _Prelude.Nonempty$00601(0, "Nonempty", x$$2, xs);
          pRest = (0, _Option.defaultArg)(patternInput[1], b$$1);
          patternInput$$1 = [patternInput[0].fields[0], (x$$5 = (0, _List.tryHead)(patternInput[0].fields[1]), (b$$2 = makeDefPrefix(patternInput[0].fields[0]), (0, _Option.defaultArg)(x$$5, b$$2))), pRest];
          let block$0027;

          if (tupledArg$$2[1].fields[0].tag === 1) {
            block$0027 = new _Prelude.Block(1, "Wrap", (f = function f(tupledArg$$1) {
              return [patternInput$$1[0] + tupledArg$$1[0], patternInput$$1[1] + tupledArg$$1[1]];
            }, [f(tupledArg$$2[1].fields[0].fields[0][0]), tupledArg$$2[1].fields[0].fields[0][1]]));
          } else if (tupledArg$$2[1].fields[0].tag === 2) {
            let arg0;
            let arg10$0040$$4;
            const fn$$2 = (0, _Util.partialApply)(1, prependPrefixTrimEndOfBlankLine, [patternInput$$1[0]]);
            arg10$0040$$4 = (0, _Nonempty.mapHead)(fn$$2, tupledArg$$2[1].fields[0].fields[0]);
            const fn$$3 = (0, _Util.partialApply)(1, prependPrefixTrimEndOfBlankLine, [patternInput$$1[1]]);
            arg0 = (0, _Nonempty.mapTail)(fn$$3, arg10$0040$$4);
            block$0027 = new _Prelude.Block(2, "NoWrap", arg0);
          } else {
            block$0027 = tupledArg$$2[1].fields[0];
          }

          return [block$0027, (x$$7 = (0, _Nonempty.fromList)(tupledArg$$2[1].fields[1]), (_arg1$$2 = new _Prelude.Functor(0, "Functor"), (0, _Option.map)(function f$$3(b$$5) {
            return [patternInput$$1[2], b$$5];
          }, x$$7)))];
        })([tupledArg$$3[0], parser(tupledArg$$3[1])]);
      };
    };
  };
})();

exports.splitUp = splitUp;

function oldSplitUp(parser$$1, _arg1$$3, lines$$2) {
  return splitUp(function (a$$3) {
    return _arg1$$3[1];
  })(parser$$1)([new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$3[0], new _Types.List(_arg1$$3[1], new _Types.List())), lines$$2]);
}

function commentBlock(parser$$2, wrappable_0, wrappable_1) {
  return new _Prelude.Block(0, "Comment", oldSplitUp(parser$$2, wrappable_0, wrappable_1));
}

function textBlock(arg0_0, arg0_1) {
  return new _Prelude.Block(1, "Wrap", [arg0_0, arg0_1]);
}

function ignoreBlock(arg0$$2) {
  return new _Prelude.Block(2, "NoWrap", arg0$$2);
}