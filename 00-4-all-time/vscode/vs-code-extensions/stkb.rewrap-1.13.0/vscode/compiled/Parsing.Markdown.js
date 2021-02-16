"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdown = markdown;

var _Types = require("./fable-library.2.10.1/Types");

var _Reflection = require("./fable-library.2.10.1/Reflection");

var _Line = require("./Line");

var _String = require("./fable-library.2.10.1/String");

var _Prelude = require("./Prelude");

var _Nonempty = require("./Nonempty");

var _List = require("./fable-library.2.10.1/List");

var _RegExp = require("./fable-library.2.10.1/RegExp");

var _Parsing = require("./Parsing.Core");

var _Option = require("./fable-library.2.10.1/Option");

var _Block = require("./Block");

var _Util = require("./fable-library.2.10.1/Util");

const MarkdownState = (0, _Types.declare)(function Parsing_Markdown_MarkdownState(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);

function MarkdownState$reflection() {
  return (0, _Reflection.union_type)("Parsing.Markdown.MarkdownState", [], MarkdownState, () => ["FencedCodeBlock", "Paragraph", "NonParagraph"]);
}

function markdown(settings) {
  var startRegex, endRegex, startRegex$$1, endRegex$$1, startRegex$$2, endRegex$$2, startRegex$$3, endRegex$$3, startRegex$$4, endRegex$$4, startRegex$$5, endRegex$$5, regex$$1;

  const fencedCodeBlock = function fencedCodeBlock(_arg1) {
    var x$$8, xs$$1;
    const patternInput$$2 = (0, _Line.split)(fencedCodeBlockRegex, _arg1.fields[0]);
    const hasStartMarker = patternInput$$2[0].length > 0;

    if (hasStartMarker) {
      const marker$$1 = (0, _String.trimStart)(patternInput$$2[0]);
      const markerChar = (0, _String.getCharAtIndex)(marker$$1, 0);

      if (patternInput$$2[1].indexOf(markerChar) >= 0) {
        return undefined;
      } else {
        let arg0$$1;
        let tupledArg;
        const startLineIndent = patternInput$$2[0].length - marker$$1.length | 0;
        const patternInput = (0, _Prelude.List$$$span)(function ($arg$$3) {
          const value = lineStartsWith(marker$$1)($arg$$3);
          return !value;
        })(_arg1.fields[1]);
        const patternInput$$1 = patternInput[1].tail != null ? [new _Types.List(patternInput[1].head, new _Types.List()), (0, _Nonempty.fromList)(patternInput[1].tail)] : [new _Types.List(), undefined];
        let outputLines;

        if (settings.reformat) {
          let contentIndentShift;

          let _arg1$$1;

          const _arg2$$1 = new _Prelude.Functor(0, "Functor");

          _arg1$$1 = (0, _List.map)(function indentLength(l) {
            return (0, _Line.leadingWhitespace)(l).length;
          }, patternInput[0]);
          contentIndentShift = (0, _Prelude.List$$$minWith)(startLineIndent, _arg1$$1);
          outputLines = new _Prelude.Nonempty$00601(0, "Nonempty", (0, _String.trimStart)(_arg1.fields[0]), (0, _List.append)((0, _List.map)(function (str$$2) {
            return (0, _Prelude.String$$$dropStart)(contentIndentShift, str$$2);
          }, patternInput[0]), (0, _List.map)(function (str$$3) {
            return (0, _String.trimStart)(str$$3);
          }, patternInput$$1[0])));
        } else {
          outputLines = new _Prelude.Nonempty$00601(0, "Nonempty", _arg1.fields[0], (0, _List.append)(patternInput[0], patternInput$$1[0]));
        }

        tupledArg = [outputLines, patternInput$$1[1]];
        arg0$$1 = [(x$$8 = (new _Prelude.Block(2, "NoWrap", tupledArg[0])), xs$$1 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", x$$8, xs$$1)), tupledArg[1]];
        return arg0$$1;
      }
    } else {
      return undefined;
    }
  };

  let htmlType1to6;
  let parsers;
  const list$$2 = (0, _List.ofArray)([(startRegex = mdMarker("<(script|pre|style)( |>|$)"), (endRegex = (0, _RegExp.create)("</(script|pre|style)>", 1), function (arg10$0040) {
    return (0, _Parsing.takeLinesBetweenMarkers)(startRegex, endRegex, arg10$0040);
  })), (startRegex$$1 = mdMarker("<!--"), (endRegex$$1 = (0, _RegExp.create)("-->"), function (arg10$0040$$1) {
    return (0, _Parsing.takeLinesBetweenMarkers)(startRegex$$1, endRegex$$1, arg10$0040$$1);
  })), (startRegex$$2 = mdMarker("<\\?"), (endRegex$$2 = (0, _RegExp.create)("\\?>"), function (arg10$0040$$2) {
    return (0, _Parsing.takeLinesBetweenMarkers)(startRegex$$2, endRegex$$2, arg10$0040$$2);
  })), (startRegex$$3 = mdMarker("<![A-Z]"), (endRegex$$3 = (0, _RegExp.create)(">"), function (arg10$0040$$3) {
    return (0, _Parsing.takeLinesBetweenMarkers)(startRegex$$3, endRegex$$3, arg10$0040$$3);
  })), (startRegex$$4 = mdMarker("<!\\[CDATA\\["), (endRegex$$4 = (0, _RegExp.create)("]]>"), function (arg10$0040$$4) {
    return (0, _Parsing.takeLinesBetweenMarkers)(startRegex$$4, endRegex$$4, arg10$0040$$4);
  })), (startRegex$$5 = mdMarker("</?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(\\s|/?>|$)"), (endRegex$$5 = (0, _RegExp.create)("^\\s*$"), function (arg10$0040$$5) {
    return (0, _Parsing.takeLinesBetweenMarkers)(startRegex$$5, endRegex$$5, arg10$0040$$5);
  }))]);
  parsers = (0, _List.map)(_Parsing.ignoreParser, list$$2);

  htmlType1to6 = function (lines$$2) {
    return (0, _Parsing.tryMany)(parsers, lines$$2);
  };

  let table;
  const cellsRowRegex = (0, _RegExp.create)("\\S\\s*\\|\\s*\\S");
  const dividerRowRegex = (0, _RegExp.create)(":?-+:?\\s*\\|\\s*:?-+:?");
  table = (0, _Parsing.ignoreParser)(function splitter$$1(lines$$3) {
    const matchValue = (0, _Nonempty.toList)(lines$$3);
    var $target$$16, firstLine, rest, secondLine;

    if (matchValue.tail != null) {
      if (matchValue.tail.tail != null) {
        $target$$16 = 0;
        firstLine = matchValue.head;
        rest = matchValue.tail.tail;
        secondLine = matchValue.tail.head;
      } else {
        $target$$16 = 1;
      }
    } else {
      $target$$16 = 1;
    }

    switch ($target$$16) {
      case 0:
        {
          if ((0, _Line.contains)(cellsRowRegex, firstLine) ? (0, _Line.contains)(dividerRowRegex, secondLine) : false) {
            let arg0$$2;
            let tupledArg$$2;
            const tupledArg$$1 = (0, _Prelude.List$$$span)(function (line) {
              return (0, _Line.contains)(cellsRowRegex, line);
            })(rest);
            tupledArg$$2 = [(new _Prelude.Nonempty$00601(0, "Nonempty", firstLine, new _Types.List(secondLine, tupledArg$$1[0]))), tupledArg$$1[1]];
            arg0$$2 = [tupledArg$$2[0], ((0, _Nonempty.fromList)(tupledArg$$2[1]))];
            return arg0$$2;
          } else {
            return undefined;
          }
        }

      case 1:
        {
          return undefined;
        }
    }
  });
  const nonText = (0, _Parsing.ignoreParser)((0, _Nonempty.span)(function (s$$1) {
    return !((0, _Line.containsText)(s$$1) ? true : (0, _Line.isBlank)(s$$1));
  }));
  const atxHeading = (0, _Parsing.ignoreParser)((0, _Nonempty.span)(lineStartsWith("#{1,6} ")));
  const blockQuote = (0, _Parsing.optionParser)(function splitter$$2(lines$$4) {
    let option$$1;
    const option = lines$$4;
    option$$1 = (0, _Option.filter)(function predicate($arg$$5) {
      return lineStartsWith(">")(((0, _Nonempty.head)($arg$$5)));
    }, option);
    const binder = (0, _Nonempty.span)(function (s$$2) {
      return !(0, _Line.isBlank)(s$$2);
    });
    return (0, _Option.bind)(binder, option$$1);
  }, function mapper(lines$$5) {
    var _arg2$$2, xs$$2, f$$18, _arg3$$2, _arg2$$3, f$$22, _arg3$$3, _arg2$$4;

    let splitLines;
    let f$$13;
    const regex = (0, _RegExp.create)(" {0,3}>? ?");

    f$$13 = function (line$$1) {
      return (0, _Line.split)(regex, line$$1);
    };

    const _arg3$$1 = new _Prelude.Functor(0, "Functor");

    splitLines = new _Prelude.Nonempty$00601(0, "Nonempty", f$$13(lines$$5.fields[0]), (_arg2$$2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$13, lines$$5.fields[1])));
    const patternInput$$3 = settings.reformat ? [(xs$$2 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", "> ", xs$$2)), function (a$$6) {
      return "> ";
    }] : [(f$$18 = function f$$18(tuple) {
      return tuple[0];
    }, (_arg3$$2 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", f$$18(splitLines.fields[0]), (_arg2$$3 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$18, splitLines.fields[1]))))), function (x$$20) {
      return x$$20;
    }];
    return (0, _Block.splitUp)(patternInput$$3[1])(markdown(settings))([patternInput$$3[0], (f$$22 = function f$$22(tuple$$1) {
      return tuple$$1[1];
    }, (_arg3$$3 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", f$$22(splitLines.fields[0]), (_arg2$$4 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$22, splitLines.fields[1])))))]);
  });
  let indentedCodeBlock;
  const takeLines = (0, _Nonempty.span)((regex$$1 = (0, _RegExp.create)("^(\\s{4}|\\t)"), function (line$$2) {
    return (0, _Line.contains)(regex$$1, line$$2);
  }));
  indentedCodeBlock = (0, _Parsing.optionParser)(takeLines, function toBlocks($arg$$7) {
    let x$$25;
    const arg0$$3 = (settings.reformat ? function (lines) {
      var _arg2;

      let minIndent;
      let list$$1;
      const list = (0, _Nonempty.toList)(lines);
      list$$1 = (0, _List.map)(function mapping(s) {
        return s.length - (0, _String.trimStart)(s).length;
      }, list);
      minIndent = (0, _List.min)(list$$1, {
        Compare: _Util.comparePrimitives
      });
      let f;
      const n$$1 = minIndent - 4 | 0;

      f = function (str) {
        return (0, _Prelude.String$$$dropStart)(n$$1, str);
      };

      const _arg3 = new _Prelude.Functor(0, "Functor");

      return new _Prelude.Nonempty$00601(0, "Nonempty", f(lines.fields[0]), (_arg2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f, lines.fields[1])));
    } : function (x$$24) {
      return x$$24;
    })($arg$$7);
    x$$25 = new _Prelude.Block(2, "NoWrap", arg0$$3);
    const xs$$3 = new _Types.List();
    return new _Prelude.Nonempty$00601(0, "Nonempty", x$$25, xs$$3);
  });

  const listItem = function listItem(_arg2$$5) {
    const option$$2 = (0, _Line.tryMatch)(listItemRegex, _arg2$$5.fields[0]);
    return (0, _Option.map)(function doStuff(listItemPrefix) {
      var tupledArg$$3, parser;
      const strippedFirstLine = (0, _Prelude.String$$$dropStart)(listItemPrefix.length, _arg2$$5.fields[0]);
      const prefixWithSpace = (0, _String.endsWith)(listItemPrefix, " ") ? listItemPrefix : listItemPrefix + " ";
      const indent = prefixWithSpace.length | 0;
      const patternInput$$4 = strippedFirstLine === "" ? findListItemEnd(indent)(new MarkdownState(2, "NonParagraph"))(_arg2$$5.fields[1]) : findListItemEnd(indent)(new MarkdownState(1, "Paragraph"))(_arg2$$5.fields[1]);
      const tailRegex = (0, _RegExp.create)("^ {0," + (0, _Util.int32ToString)(indent) + "}");
      const headPrefix = settings.reformat ? prefixWithSpace.trim() + " " : prefixWithSpace;
      return [(tupledArg$$3 = [[headPrefix, (0, _String.replicate)(headPrefix.length, " ")], new _Prelude.Nonempty$00601(0, "Nonempty", strippedFirstLine, (0, _List.map)(function ($arg$$8) {
        let tuple$$2;
        tuple$$2 = (0, _Line.split)(tailRegex, $arg$$8);
        return tuple$$2[1];
      }, patternInput$$4[0]))], (parser = markdown(settings), (0, _Block.oldSplitUp)(parser, tupledArg$$3[0], tupledArg$$3[1]))), patternInput$$4[1]];
    }, option$$2);
  };

  let paragraphTerminator;
  const parsers$$1 = (0, _List.ofArray)([_Parsing.blankLines, fencedCodeBlock, nonText, listItem, blockQuote, atxHeading, htmlType1to6]);

  paragraphTerminator = function (lines$$7) {
    return (0, _Parsing.tryMany)(parsers$$1, lines$$7);
  };

  return function ($arg$$10) {
    var f$$31, _arg3$$5, _arg2$$7;

    return (0, _Parsing.repeatToEnd)(function allParsers(lines$$8) {
      const option$$3 = (0, _Parsing.tryMany)((0, _List.ofArray)([_Parsing.blankLines, fencedCodeBlock, table, nonText, atxHeading, indentedCodeBlock, listItem, blockQuote]), lines$$8);
      return (0, _Option.defaultArgWith)(option$$3, function defThunk() {
        return (0, _Parsing.takeUntil)(paragraphTerminator, function paragraph($arg$$9) {
          var _arg2$$6;

          const x$$28 = (0, _Parsing.splitIntoChunks)((0, _Parsing.afterRegex)((0, _RegExp.create)("(\\\\|\\s{2})$")))($arg$$9);

          const f$$26 = function f$$26(arg10$0040$$7) {
            return (0, _Parsing.firstLineIndentParagraphBlock)(settings.reformat, arg10$0040$$7);
          };

          const _arg3$$4 = new _Prelude.Functor(0, "Functor");

          return new _Prelude.Nonempty$00601(0, "Nonempty", f$$26(x$$28.fields[0]), (_arg2$$6 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$26, x$$28.fields[1])));
        })(lines$$8);
      });
    })((f$$31 = function f$$31(str$$7) {
      return (0, _Line.tabsToSpaces)(settings.tabWidth, str$$7);
    }, _arg3$$5 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", f$$31($arg$$10.fields[0]), (_arg2$$7 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(f$$31, $arg$$10.fields[1])))));
  };
}

function mdMarker(marker$$2) {
  return (0, _RegExp.create)("^ {0,3}" + marker$$2, 1);
}

const listItemRegex = mdMarker("([-+*]|[0-9]+[.)])(\\s+|$)");
const blockQuoteRegex = mdMarker(">");
const fencedCodeBlockRegex = mdMarker("(`{3,}|~{3,})");

function lineStartsWith($arg$$11) {
  let regex$$2;
  regex$$2 = mdMarker($arg$$11);
  return function (line$$4) {
    return (0, _Line.contains)(regex$$2, line$$4);
  };
}

function findListItemEnd(indent$$1) {
  const loop = function loop(output, state$$1, lines$$9) {
    const exitLoop = function exitLoop() {
      return [(0, _List.reverse)(output), (0, _Nonempty.fromList)(lines$$9)];
    };

    if (lines$$9.tail == null) {
      return exitLoop();
    } else {
      let trimmedLine;
      let p = 0;

      while ((p < indent$$1 ? p < lines$$9.head.length : false) ? lines$$9.head[p] === " " : false) {
        p = p + 1;
      }

      trimmedLine = (0, _String.substring)(lines$$9.head, p);

      const continueLoop = function continueLoop() {
        return loop(new _Types.List(lines$$9.head, output), (state$$1.tag === 1 ? lineStartsWith("(```|~~~)")(trimmedLine) ? new MarkdownState(0, "FencedCodeBlock") : (!(0, _Line.containsText)(trimmedLine) ? true : lineStartsWith("#{1,6} ")(trimmedLine)) ? new MarkdownState(2, "NonParagraph") : new MarkdownState(1, "Paragraph") : state$$1.tag === 2 ? lineStartsWith("(```|~~~)")(trimmedLine) ? new MarkdownState(0, "FencedCodeBlock") : (!(0, _Line.containsText)(trimmedLine) ? true : lineStartsWith("#{1,6} ")(trimmedLine)) ? new MarkdownState(2, "NonParagraph") : (0, _Line.contains)((0, _RegExp.create)("^ {4,}"), trimmedLine) ? new MarkdownState(2, "NonParagraph") : new MarkdownState(1, "Paragraph") : lineStartsWith("(```|~~~)")(trimmedLine) ? new MarkdownState(2, "NonParagraph") : new MarkdownState(0, "FencedCodeBlock")), lines$$9.tail);
      };

      if ((0, _Line.isBlank)(lines$$9.head)) {
        return continueLoop();
      } else {
        const indentIsLess = lines$$9.head.length - trimmedLine.length < indent$$1;

        if (indentIsLess) {
          switch (state$$1.tag) {
            case 1:
              {
                if (((0, _Line.contains)(blockQuoteRegex, lines$$9.head) ? true : (0, _Line.contains)(listItemRegex, lines$$9.head)) ? true : (0, _Line.contains)(fencedCodeBlockRegex, lines$$9.head)) {
                  return exitLoop();
                } else {
                  return continueLoop();
                }
              }

            case 2:
              {
                return exitLoop();
              }

            default:
              {
                return continueLoop();
              }
          }
        } else {
          return continueLoop();
        }
      }
    }
  };

  return (0, _Util.partialApply)(2, loop, [new _Types.List()]);
}