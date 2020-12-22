"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sgml = sgml;

var _RegExp = require("./fable-library.2.10.1/RegExp");

var _Parsing = require("./Parsing.Core");

var _Nonempty = require("./Nonempty");

var _List = require("./fable-library.2.10.1/List");

var _Types = require("./fable-library.2.10.1/Types");

var _Prelude = require("./Prelude");

var _Block = require("./Block");

var _Parsing2 = require("./Parsing.Markdown");

var _Util = require("./fable-library.2.10.1/Util");

var _Parsing3 = require("./Parsing.Comments");

var _Seq = require("./fable-library.2.10.1/Seq");

var _Line = require("./Line");

const scriptMarkers = [(0, _RegExp.create)("<script", 1), (0, _RegExp.create)("</script>", 1)];
const cssMarkers = [(0, _RegExp.create)("<style", 1), (0, _RegExp.create)("</style>", 1)];

function sgml(scriptParser, cssParser, blockTags, settings) {
  const embeddedScript = function embeddedScript(markers) {
    return function (contentParser) {
      return (0, _Parsing.optionParser)(function (arg10$0040) {
        return (0, _Parsing.takeLinesBetweenMarkers)(markers[0], markers[1], arg10$0040);
      }, function (arg20$0040) {
        return (0, _Parsing.ignoreFirstLine)(function afterFirstLine(_arg1, lines) {
          var x$$5, xs$$2, x, xs;
          const patternInput = (0, _Nonempty.rev)(lines);

          if ((0, _RegExp.isMatch)(markers[1], patternInput.fields[0])) {
            const matchValue = (0, _Nonempty.fromList)((0, _List.reverse)(patternInput.fields[1]));

            if (matchValue == null) {
              const x$$2 = (0, _Block.ignoreBlock)((x$$5 = (0, _Nonempty.last)(lines), (xs$$2 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x$$5, xs$$2))));
              const xs$$1 = new _Types.List();
              return new _Prelude.Nonempty$00601(0, "Nonempty", x$$2, xs$$1);
            } else {
              const middleLines = matchValue;
              return (0, _Nonempty.snoc)((0, _Block.ignoreBlock)((x = (0, _Nonempty.last)(lines), (xs = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x, xs)))), contentParser(settings, middleLines));
            }
          } else {
            return contentParser(settings, lines);
          }
        }, settings, arg20$0040);
      });
    };
  };

  let otherParsers;
  const parsers = (0, _List.ofArray)([_Parsing.blankLines, (0, _Parsing3.blockComment)((0, _Util.uncurry)(2, _Parsing2.markdown), "", "", "<!--", "-->", settings), embeddedScript(scriptMarkers)(scriptParser), embeddedScript(cssMarkers)(cssParser)]);

  otherParsers = function (lines$$1) {
    return (0, _Parsing.tryMany)(parsers, lines$$1);
  };

  const isBlockTag = function isBlockTag(pattern, line) {
    const m = (0, _RegExp.match)((0, _RegExp.create)(pattern, 1), line);

    if (m != null) {
      if ((0, _Seq.isEmpty)(blockTags)) {
        return true;
      } else {
        return (0, _Seq.contains)((m[1] || "").toLocaleLowerCase(), blockTags);
      }
    } else {
      return false;
    }
  };

  const beginsWithBlockStartTag = (0, _Util.partialApply)(1, isBlockTag, ["^\\s*<([\\w.-]+)"]);
  const justBlockEndTag = (0, _Util.partialApply)(1, isBlockTag, ["^\\s*</([\\w.-]+)\\s*>"]);
  const endsWithBlockTag = (0, _Util.partialApply)(1, isBlockTag, ["([\\w.-]+)>\\s*$"]);
  const partialParser = (0, _Parsing.takeUntil)(otherParsers, function paragraphBlocks($arg$$2) {
    var _arg2;

    let x$$7;
    const neList = (0, _Parsing.splitIntoChunks)(function (arg10$0040$$1) {
      return (0, _Parsing.splitBefore)(function breakBefore(line$$1) {
        if (justBlockEndTag(line$$1)) {
          return true;
        } else {
          return beginsWithBlockStartTag(line$$1);
        }
      }, arg10$0040$$1);
    })($arg$$2);
    const fn = (0, _Parsing.splitIntoChunks)((0, _Nonempty.splitAfter)(function breakAfter(line$$2) {
      if ((0, _Line.contains)((0, _RegExp.create)("([\"\\s]>\\s*|  )$", 1), line$$2)) {
        return true;
      } else {
        return endsWithBlockTag(line$$2);
      }
    }));
    x$$7 = (0, _Nonempty.concatMap)(fn, neList);

    const f = function f(lines$$2) {
      return (0, _Parsing.indentSeparatedParagraphBlock)(function (tupledArg) {
        return (0, _Block.textBlock)(tupledArg[0], tupledArg[1]);
      }, lines$$2);
    };

    const _arg3 = new _Prelude.Functor(0, "Functor");

    return new _Prelude.Nonempty$00601(0, "Nonempty", f(x$$7.fields[0]), (_arg2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f, x$$7.fields[1])));
  });
  return (0, _Parsing.repeatToEnd)(partialParser);
}