"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParseResult$reflection = ParseResult$reflection;
exports.wrapSelected = wrapSelected;
exports.ParseResult = void 0;

var _Types = require("./fable-library.2.10.1/Types");

var _Reflection = require("./fable-library.2.10.1/Reflection");

var _Util = require("./fable-library.2.10.1/Util");

var _List = require("./fable-library.2.10.1/List");

var _Prelude = require("./Prelude");

var _Nonempty = require("./Nonempty");

var _Wrapping = require("./Wrapping");

var _Option = require("./fable-library.2.10.1/Option");

var _Array = require("./fable-library.2.10.1/Array");

var _Types2 = require("./Types");

const LineRange = (0, _Types.declare)(function Selections_LineRange(s, e) {
  const $this$$1 = this;
  void null;
  $this$$1.s = s;
  $this$$1.e = e;
  void null;
}, _Types.Record);

function LineRange$reflection() {
  return (0, _Reflection.class_type)("Selections.LineRange", undefined, LineRange);
}

function LineRange$$$$002Ector$$Z37302880(s, e) {
  return this instanceof LineRange ? LineRange.call(this, s, e) : new LineRange(s, e);
}

function LineRange$$get_startLine(x) {
  return x.s;
}

function LineRange$$get_endLine(x$$1) {
  return x$$1.e;
}

function LineRange$$get_length(x$$2) {
  return (0, _Util.max)(_Util.comparePrimitives, LineRange$$get_endLine(x$$2) - LineRange$$get_startLine(x$$2) + 1, 0);
}

function LineRange$$get_isEmpty(x$$3) {
  return LineRange$$get_endLine(x$$3) < LineRange$$get_startLine(x$$3);
}

function LineRange$$$fromStartEnd(startLine, endLine) {
  return LineRange$$$$002Ector$$Z37302880(startLine, endLine);
}

function LineRange$$$fromStartLength(startLine$$1, length) {
  return LineRange$$$$002Ector$$Z37302880(startLine$$1, startLine$$1 + length - 1);
}

function LineRange$$$fromSelection$$209E7828(s$$1) {
  const startLine$$2 = (0, _Util.min)(_Util.comparePrimitives, s$$1.active.line, s$$1.anchor.line) | 0;
  const endLine$$1 = (0, _Util.max)(_Util.comparePrimitives, s$$1.active.line, s$$1.anchor.line) | 0;
  const isEmpty = startLine$$2 === endLine$$1 ? s$$1.anchor.character === s$$1.active.character : false;

  if (isEmpty) {
    return LineRange$$$$002Ector$$Z37302880(startLine$$2, startLine$$2 - 1);
  } else if (s$$1.active.line > s$$1.anchor.line ? s$$1.active.character === 0 : false) {
    return LineRange$$$$002Ector$$Z37302880(s$$1.anchor.line, s$$1.active.line - 1);
  } else if (s$$1.anchor.line > s$$1.active.line ? s$$1.anchor.character === 0 : false) {
    return LineRange$$$$002Ector$$Z37302880(s$$1.active.line, s$$1.anchor.line - 1);
  } else {
    return LineRange$$$$002Ector$$Z37302880(startLine$$2, endLine$$1);
  }
}

function LineRange$$get_shiftStartDown(x$$4) {
  if (LineRange$$get_endLine(x$$4) > LineRange$$get_startLine(x$$4)) {
    return LineRange$$$$002Ector$$Z37302880(LineRange$$get_startLine(x$$4) + 1, LineRange$$get_endLine(x$$4));
  } else {
    return undefined;
  }
}

function LineRange$$get_shiftEndUp(x$$5) {
  if (LineRange$$get_endLine(x$$5) > LineRange$$get_startLine(x$$5)) {
    return LineRange$$$$002Ector$$Z37302880(LineRange$$get_startLine(x$$5), LineRange$$get_endLine(x$$5) - 1);
  } else {
    return undefined;
  }
}

function intersects($r1$$26, $r2$$27) {
  intersects: while (true) {
    const r1 = $r1$$26,
          r2 = $r2$$27;

    if (LineRange$$get_isEmpty(r2)) {
      $r1$$26 = r2;
      $r2$$27 = r1;
      continue intersects;
    } else if (LineRange$$get_isEmpty(r1)) {
      if (LineRange$$get_startLine(r1) >= LineRange$$get_startLine(r2)) {
        return LineRange$$get_startLine(r1) <= LineRange$$get_endLine(r2);
      } else {
        return false;
      }
    } else {
      return (0, _Util.max)(_Util.comparePrimitives, LineRange$$get_startLine(r1), LineRange$$get_startLine(r2)) <= (0, _Util.min)(_Util.comparePrimitives, LineRange$$get_endLine(r1), LineRange$$get_endLine(r2));
    }

    break;
  }
}

const normalizeRanges = (() => {
  const loop = function loop($output$$28, $input$$29) {
    var arg00, arg10;

    loop: while (true) {
      const output = $output$$28,
            input = $input$$29;

      if (input.tail != null) {
        if (input.tail.tail != null) {
          if (LineRange$$get_endLine(input.head) === LineRange$$get_startLine(input.tail.head)) {
            if (LineRange$$get_isEmpty(input.head) ? LineRange$$get_isEmpty(input.tail.head) : false) {
              $output$$28 = output;
              $input$$29 = new _Types.List(input.tail.head, input.tail.tail);
              continue loop;
            } else if (LineRange$$get_isEmpty(input.head)) {
              const matchValue = LineRange$$get_shiftStartDown(input.tail.head);

              if (matchValue != null) {
                const second_ = matchValue;
                $output$$28 = new _Types.List(input.head, output);
                $input$$29 = new _Types.List(second_, input.tail.tail);
                continue loop;
              } else {
                $output$$28 = new _Types.List(input.head, output);
                $input$$29 = input.tail.tail;
                continue loop;
              }
            } else if (LineRange$$get_isEmpty(input.tail.head)) {
              const matchValue$$1 = LineRange$$get_shiftEndUp(input.head);

              if (matchValue$$1 != null) {
                const first_ = matchValue$$1;
                $output$$28 = new _Types.List(first_, output);
                $input$$29 = new _Types.List(input.tail.head, input.tail.tail);
                continue loop;
              } else {
                $output$$28 = output;
                $input$$29 = new _Types.List(input.tail.head, input.tail.tail);
                continue loop;
              }
            } else {
              $output$$28 = output;
              $input$$29 = new _Types.List((arg00 = LineRange$$get_startLine(input.head) | 0, arg10 = LineRange$$get_endLine(input.tail.head) | 0, (LineRange$$$fromStartEnd(arg00, arg10))), input.tail.tail);
              continue loop;
            }
          } else {
            $output$$28 = new _Types.List(input.head, output);
            $input$$29 = new _Types.List(input.tail.head, input.tail.tail);
            continue loop;
          }
        } else {
          return new _Types.List(input.head, output);
        }
      } else {
        return output;
      }

      break;
    }
  };

  return function ($arg$$12) {
    const list = loop(new _Types.List(), $arg$$12);
    return (0, _List.reverse)(list);
  };
})();

const ParseResult = (0, _Types.declare)(function Selections_ParseResult(startLine, originalLines, blocks) {
  this.startLine = startLine | 0;
  this.originalLines = originalLines;
  this.blocks = blocks;
}, _Types.Record);
exports.ParseResult = ParseResult;

function ParseResult$reflection() {
  return (0, _Reflection.record_type)("Selections.ParseResult", [], ParseResult, () => [["startLine", _Reflection.int32_type], ["originalLines", (0, _Prelude.Nonempty$00601$reflection)(_Reflection.string_type)], ["blocks", (0, _Prelude.Nonempty$00601$reflection)((0, _Prelude.Block$reflection)())]]);
}

function processBlocks(settings, selections, parseResult) {
  const processWholeBlock = function processWholeBlock(block$$1) {
    switch (block$$1.tag) {
      case 2:
        {
          return block$$1.fields[0];
        }

      case 0:
        {
          return (0, _Nonempty.concatMap)(processWholeBlock, block$$1.fields[0]);
        }

      default:
        {
          return (0, _Wrapping.wrap)(settings, block$$1.fields[0][0], block$$1.fields[0][1]);
        }
    }
  };

  const loop$$1 = function loop$$1($output$$1$$34, $sels$$35, $start$$36, $_arg1$$37, $origLines$$38) {
    loop$$1: while (true) {
      const output$$1 = $output$$1$$34,
            sels = $sels$$35,
            start = $start$$36,
            _arg1 = $_arg1$$37,
            origLines = $origLines$$38;
      const blockLength = (0, _Prelude.Block$$$size$$60E56076)(new _Prelude.HasSize(0, "HasSize"), _arg1.fields[0]) | 0;
      let selsTouching;
      selsTouching = (0, _List.filter)(function predicate(s$$2) {
        return LineRange$$get_startLine(s$$2) < start + blockLength;
      }, sels);
      let hasEmptySelection;
      hasEmptySelection = (0, _List.exists)(function predicate$$1(s$$3) {
        return LineRange$$get_isEmpty(s$$3);
      }, selsTouching);
      let patternInput$$1;
      const matchValue$$2 = (0, _List.tryHead)(selsTouching);

      if (matchValue$$2 != null) {
        const sel = matchValue$$2;
        var $target$$41;

        if (_arg1.fields[0].tag === 2) {
          $target$$41 = 0;
        } else if (_arg1.fields[0].tag === 0) {
          $target$$41 = 1;
        } else {
          $target$$41 = 0;
        }

        switch ($target$$41) {
          case 0:
            {
              if (hasEmptySelection) {
                patternInput$$1 = [processWholeBlock(_arg1.fields[0]), undefined];
              } else {
                const patternInput = LineRange$$get_startLine(sel) > start ? [LineRange$$get_startLine(sel) - start, function (_arg1$$1) {
                  return undefined;
                }] : [LineRange$$get_endLine(sel) - start + 1, function ($arg$$13) {
                  const arg0$$2 = processWholeBlock($arg$$13);
                  return arg0$$2;
                }];
                let tupledArg$$4;

                if (_arg1.fields[0].tag === 2) {
                  let tupledArg$$3;
                  const tupledArg$$2 = (0, _Nonempty.splitAt)(patternInput[0], _arg1.fields[0].fields[0]);
                  tupledArg$$3 = [(new _Prelude.Block(2, "NoWrap", tupledArg$$2[0])), tupledArg$$2[1]];
                  tupledArg$$4 = [tupledArg$$3[0], ((0, _Option.map)(function mapping$$1(arg0$$1) {
                    return new _Prelude.Block(2, "NoWrap", arg0$$1);
                  }, tupledArg$$3[1]))];
                } else if (_arg1.fields[0].tag === 0) {
                  throw new Error("Not going to split a comment");
                } else {
                  let tupledArg$$1;
                  const tupledArg = (0, _Nonempty.splitAt)(patternInput[0], _arg1.fields[0].fields[0][1]);
                  tupledArg$$1 = [(new _Prelude.Block(1, "Wrap", [[_arg1.fields[0].fields[0][0][0], _arg1.fields[0].fields[0][0][1]], tupledArg[0]])), tupledArg[1]];
                  tupledArg$$4 = [tupledArg$$1[0], ((0, _Option.map)(function mapping(ls$$1) {
                    return new _Prelude.Block(1, "Wrap", [[_arg1.fields[0].fields[0][0][1], _arg1.fields[0].fields[0][0][1]], ls$$1]);
                  }, tupledArg$$1[1]))];
                }

                patternInput$$1 = [patternInput[1](tupledArg$$4[0]), tupledArg$$4[1]];
              }

              break;
            }

          case 1:
            {
              patternInput$$1 = (hasEmptySelection ? settings.wholeComment : false) ? [processWholeBlock(_arg1.fields[0]), undefined] : [processBlocks(settings, sels, new ParseResult(start, origLines, _arg1.fields[0].fields[0])), undefined];
              break;
            }
        }
      } else {
        patternInput$$1 = [undefined, undefined];
      }

      let patternInput$$2;

      if (patternInput$$1[1] == null) {
        patternInput$$2 = [blockLength, _arg1.fields[1]];
      } else {
        const partialBlock = patternInput$$1[1];
        patternInput$$2 = [blockLength - (0, _Prelude.Block$$$size$$60E56076)(new _Prelude.HasSize(0, "HasSize"), partialBlock), new _Types.List(partialBlock, _arg1.fields[1])];
      }

      let patternInput$$3;
      const tupledArg$$5 = (0, _Nonempty.splitAt)(patternInput$$2[0], origLines);
      patternInput$$3 = [((0, _Option.defaultArg)(patternInput$$1[0], tupledArg$$5[0])), tupledArg$$5[1]];
      let nextOutput;

      const _arg2 = (0, _Nonempty.rev)(patternInput$$3[0]);

      nextOutput = new _Prelude.Nonempty$00601(0, "Nonempty", _arg2.fields[0], (0, _List.append)(_arg2.fields[1], output$$1));
      const matchValue$$3 = (0, _Nonempty.fromList)(patternInput$$2[1]);

      if (matchValue$$3 == null) {
        return (0, _Nonempty.rev)(nextOutput);
      } else {
        const neNextBlocks = matchValue$$3;
        const nextStart = start + patternInput$$2[0] | 0;
        let nextSels;
        nextSels = (0, _List.skipWhile)(function predicate$$2(s$$4) {
          if (LineRange$$get_endLine(s$$4) < nextStart) {
            return !(LineRange$$get_isEmpty(s$$4) ? LineRange$$get_startLine(s$$4) >= nextStart : false);
          } else {
            return false;
          }
        }, sels);
        $output$$1$$34 = (0, _Nonempty.toList)(nextOutput);
        $sels$$35 = nextSels;
        $start$$36 = nextStart;
        $_arg1$$37 = neNextBlocks;
        $origLines$$38 = patternInput$$3[1];
        continue loop$$1;
      }

      break;
    }
  };

  return loop$$1(new _Types.List(), selections, parseResult.startLine, parseResult.blocks, parseResult.originalLines);
}

function trimEdit(originalLines, edit) {
  var array$$1, count;

  const editNotZeroLength = function editNotZeroLength(x$$8) {
    if (edit.endLine - edit.startLine > x$$8) {
      return edit.lines.length > x$$8;
    } else {
      return false;
    }
  };

  let originalLinesArray;
  let list$$4;
  list$$4 = (0, _Nonempty.toList)(originalLines);
  originalLinesArray = (0, _Array.ofList)(list$$4, Array);
  let s$$5 = 0;

  while (editNotZeroLength(s$$5) ? originalLinesArray[edit.startLine + s$$5] === edit.lines[s$$5] : false) {
    s$$5 = s$$5 + 1;
  }

  let e$$1 = 0;

  while (editNotZeroLength(s$$5 + e$$1) ? originalLinesArray[edit.endLine - e$$1] === edit.lines[edit.lines.length - e$$1 - 1] : false) {
    e$$1 = e$$1 + 1;
  }

  return new _Types2.Edit(edit.startLine + s$$5, edit.endLine - e$$1, (array$$1 = ((0, _Array.skip)(s$$5, edit.lines, Array)), (count = edit.lines.length - s$$5 - e$$1 | 0, (0, _Array.truncate)(count, array$$1))), edit.selections);
}

function wrapSelected(originalLines$$1, selections$$1, settings$$1, blocks) {
  let selectionRanges;
  const $arg$$14 = (0, _Array.map)(LineRange$$$fromSelection$$209E7828, selections$$1, Array);
  selectionRanges = normalizeRanges(((0, _List.ofArray)($arg$$14)));
  const parseResult$$1 = new ParseResult(0, originalLines$$1, blocks);
  let newLines$$1;
  let list$$5;
  const arg00$0040$$1 = processBlocks(settings$$1, selectionRanges, parseResult$$1);
  list$$5 = (0, _Nonempty.toList)(arg00$0040$$1);
  newLines$$1 = (0, _Array.ofList)(list$$5, Array);
  const edit$$1 = new _Types2.Edit(0, (0, _Prelude.Nonempty$00601$$$size$$1F9B86C2)(new _Prelude.HasSize(0, "HasSize"), originalLines$$1) - 1, newLines$$1, selections$$1);
  return trimEdit(originalLines$$1, edit$$1);
}