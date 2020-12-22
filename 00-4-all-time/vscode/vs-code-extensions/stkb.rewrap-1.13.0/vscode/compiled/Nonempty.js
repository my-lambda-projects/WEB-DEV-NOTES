"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toList = toList;
exports.fromList = fromList;
exports.fromSeqUnsafe = fromSeqUnsafe;
exports.cons = cons;
exports.snoc = snoc;
exports.append = append;
exports.appendToList = appendToList;
exports.head = head;
exports.tail = tail;
exports.last = last;
exports.tryFind = tryFind;
exports.rev = rev;
exports.mapHead = mapHead;
exports.mapTail = mapTail;
exports.mapInit = mapInit;
exports.mapLast = mapLast;
exports.mapFold = mapFold;
exports.replaceHead = replaceHead;
exports.concatMap = concatMap;
exports.splitAt = splitAt;
exports.span = span;
exports.spanMaybes = spanMaybes;
exports.splitAfter = splitAfter;
exports.unfold = unfold;

var _Types = require("./fable-library.2.10.1/Types");

var _Prelude = require("./Prelude");

var _Seq = require("./fable-library.2.10.1/Seq");

var _List = require("./fable-library.2.10.1/List");

var _Option = require("./fable-library.2.10.1/Option");

function toList(_arg1) {
  return new _Types.List(_arg1.fields[0], _arg1.fields[1]);
}

function fromList(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    return new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$1.head, _arg1$$1.tail);
  } else {
    return undefined;
  }
}

function fromSeqUnsafe(xs$$2) {
  const x$$2 = (0, _Seq.head)(xs$$2);
  const xs$$3 = (0, _List.ofSeq)((0, _Seq.tail)(xs$$2));
  return new _Prelude.Nonempty$00601(0, "Nonempty", x$$2, xs$$3);
}

function cons(h$$1, neList) {
  const xs$$4 = toList(neList);
  return new _Prelude.Nonempty$00601(0, "Nonempty", h$$1, xs$$4);
}

function snoc(last$$1, _arg1$$2) {
  const xs$$5 = (0, _List.append)(_arg1$$2.fields[1], new _Types.List(last$$1, new _Types.List()));
  return new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$2.fields[0], xs$$5);
}

function append(_arg1$$3, b) {
  const xs$$6 = (0, _List.append)(_arg1$$3.fields[1], toList(b));
  return new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$3.fields[0], xs$$6);
}

function appendToList(listA, neListB) {
  const matchValue = fromList(listA);

  if (matchValue == null) {
    return neListB;
  } else {
    const neListA = matchValue;
    return append(neListA, neListB);
  }
}

function head(_arg1$$4) {
  return _arg1$$4.fields[0];
}

function tail(_arg1$$5) {
  return _arg1$$5.fields[1];
}

function last(_arg1$$6) {
  const x$$6 = (0, _List.tryLast)(_arg1$$6.fields[1]);
  return (0, _Option.defaultArg)(x$$6, _arg1$$6.fields[0]);
}

function tryFind(predicate) {
  return function ($arg$$1) {
    let list;
    list = toList($arg$$1);
    return (0, _List.tryFind)(predicate, list);
  };
}

function rev(list$$1) {
  let xs$$7;
  let list$$2;
  list$$2 = toList(list$$1);
  xs$$7 = (0, _List.reverse)(list$$2);
  return fromSeqUnsafe(xs$$7);
}

function mapHead(fn, _arg1$$7) {
  const x$$7 = fn(_arg1$$7.fields[0]);
  return new _Prelude.Nonempty$00601(0, "Nonempty", x$$7, _arg1$$7.fields[1]);
}

function mapTail(fn$$1, _arg1$$8) {
  const xs$$9 = (0, _List.map)(fn$$1, _arg1$$8.fields[1]);
  return new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$8.fields[0], xs$$9);
}

function mapInit(fn$$2) {
  return function ($arg$$3) {
    let list$$4;
    let arg10$0040;
    arg10$0040 = rev($arg$$3);
    list$$4 = mapTail(fn$$2, arg10$0040);
    return rev(list$$4);
  };
}

function mapLast(fn$$3) {
  return function ($arg$$5) {
    let list$$6;
    let arg10$0040$$1;
    arg10$0040$$1 = rev($arg$$5);
    list$$6 = mapHead(fn$$3, arg10$0040$$1);
    return rev(list$$6);
  };
}

function mapFold(fn$$4, s, _arg1$$9) {
  const patternInput = fn$$4(s, _arg1$$9.fields[0]);
  const tupledArg = (0, _List.mapFold)(fn$$4, patternInput[1], _arg1$$9.fields[1]);
  return [(new _Prelude.Nonempty$00601(0, "Nonempty", patternInput[0], tupledArg[0])), tupledArg[1]];
}

function replaceHead(h$$9) {
  return function (arg10$0040$$2) {
    return mapHead(function fn$$5(_arg1$$10) {
      return h$$9;
    }, arg10$0040$$2);
  };
}

function concatMap(fn$$6, neList$$1) {
  const loop = function loop($output$$39, $_arg1$$11$$40) {
    loop: while (true) {
      const output = $output$$39,
            _arg1$$11 = $_arg1$$11$$40;

      if (_arg1$$11.tail != null) {
        $output$$39 = append(fn$$6(_arg1$$11.head), output);
        $_arg1$$11$$40 = _arg1$$11.tail;
        continue loop;
      } else {
        return output;
      }

      break;
    }
  };

  const _arg1$$12 = rev(neList$$1);

  return loop(fn$$6(_arg1$$12.fields[0]), _arg1$$12.fields[1]);
}

function splitAt(n, _arg1$$13) {
  var xs$$14;

  const loop$$1 = function loop$$1($count$$43, $leftAcc$$44, $maybeRightAcc$$45) {
    loop$$1: while (true) {
      const count = $count$$43,
            leftAcc = $leftAcc$$44,
            maybeRightAcc = $maybeRightAcc$$45;

      if (maybeRightAcc != null) {
        const xs$$13 = maybeRightAcc.fields[1];
        const x$$11 = maybeRightAcc.fields[0];

        if (count < 1) {
          return [leftAcc, maybeRightAcc];
        } else {
          $count$$43 = count - 1;
          $leftAcc$$44 = cons(x$$11, leftAcc);
          $maybeRightAcc$$45 = fromList(xs$$13);
          continue loop$$1;
        }
      } else {
        return [leftAcc, undefined];
      }

      break;
    }
  };

  const tupledArg$$1 = loop$$1(n - 1, (xs$$14 = new _Types.List(), new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$13.fields[0], xs$$14)), fromList(_arg1$$13.fields[1]));
  return [(rev(tupledArg$$1[0])), tupledArg$$1[1]];
}

function span(predicate$$1) {
  const loop$$2 = function loop$$2($output$$1$$47, $maybeRemaining$$48) {
    var t$$8, h$$10;

    loop$$2: while (true) {
      const output$$1 = $output$$1$$47,
            maybeRemaining = $maybeRemaining$$48;
      var $target$$49, h$$11, t$$9;

      if (maybeRemaining != null) {
        if (t$$8 = maybeRemaining.fields[1], (h$$10 = maybeRemaining.fields[0], predicate$$1(h$$10))) {
          $target$$49 = 0;
          h$$11 = maybeRemaining.fields[0];
          t$$9 = maybeRemaining.fields[1];
        } else {
          $target$$49 = 1;
        }
      } else {
        $target$$49 = 1;
      }

      switch ($target$$49) {
        case 0:
          {
            $output$$1$$47 = new _Types.List(h$$11, output$$1);
            $maybeRemaining$$48 = fromList(t$$9);
            continue loop$$2;
          }

        case 1:
          {
            const x$$14 = fromList((0, _List.reverse)(output$$1));

            const _arg1$$14 = new _Prelude.Functor(0, "Functor");

            return (0, _Option.map)(function f$$4(o) {
              return [o, maybeRemaining];
            }, x$$14);
          }
      }

      break;
    }
  };

  return function ($arg$$6) {
    return loop$$2(new _Types.List(), ($arg$$6));
  };
}

function spanMaybes(fn$$7) {
  const loop$$3 = function loop$$3($output$$2$$52, $maybeRemaining$$1$$53) {
    loop$$3: while (true) {
      const output$$2 = $output$$2$$52,
            maybeRemaining$$1 = $maybeRemaining$$1$$53;

      if (maybeRemaining$$1 != null) {
        const t$$10 = maybeRemaining$$1.fields[1];
        const h$$12 = maybeRemaining$$1.fields[0];
        const matchValue$$1 = fn$$7(h$$12);

        if (matchValue$$1 == null) {
          const x$$18 = fromList((0, _List.reverse)(output$$2));

          const _arg1$$15 = new _Prelude.Functor(0, "Functor");

          return (0, _Option.map)(function f$$7(o$$1) {
            return [o$$1, maybeRemaining$$1];
          }, x$$18);
        } else {
          const x$$17 = (0, _Option.value)(matchValue$$1);
          $output$$2$$52 = new _Types.List(x$$17, output$$2);
          $maybeRemaining$$1$$53 = fromList(t$$10);
          continue loop$$3;
        }
      } else {
        const x$$21 = fromList((0, _List.reverse)(output$$2));

        const _arg1$$16 = new _Prelude.Functor(0, "Functor");

        return (0, _Option.map)(function f$$10(o$$2) {
          return [o$$2, maybeRemaining$$1];
        }, x$$21);
      }

      break;
    }
  };

  return function ($arg$$7) {
    return loop$$3(new _Types.List(), ($arg$$7));
  };
}

function splitAfter(predicate$$2) {
  const loop$$4 = function loop$$4($output$$3$$57, $_arg1$$17$$58) {
    var nextList;

    loop$$4: while (true) {
      const output$$3 = $output$$3$$57,
            _arg1$$17 = $_arg1$$17$$58;
      const matchValue$$2 = fromList(_arg1$$17.fields[1]);
      var $target$$59, nextList$$1;

      if (matchValue$$2 != null) {
        if (nextList = matchValue$$2, !predicate$$2(_arg1$$17.fields[0])) {
          $target$$59 = 0;
          nextList$$1 = matchValue$$2;
        } else {
          $target$$59 = 1;
        }
      } else {
        $target$$59 = 1;
      }

      switch ($target$$59) {
        case 0:
          {
            $output$$3$$57 = new _Types.List(_arg1$$17.fields[0], output$$3);
            $_arg1$$17$$58 = nextList$$1;
            continue loop$$4;
          }

        case 1:
          {
            return [new _Prelude.Nonempty$00601(0, "Nonempty", _arg1$$17.fields[0], output$$3), matchValue$$2];
          }
      }

      break;
    }
  };

  return function ($arg$$8) {
    const tupledArg$$2 = loop$$4(new _Types.List(), $arg$$8);
    return [(rev(tupledArg$$2[0])), tupledArg$$2[1]];
  };
}

function unfold(fn$$8) {
  const loop$$5 = function loop$$5($output$$4$$61, $input$$62) {
    loop$$5: while (true) {
      const output$$4 = $output$$4$$61,
            input = $input$$62;
      const matchValue$$3 = fn$$8(input);

      if (matchValue$$3[1] == null) {
        return new _Prelude.Nonempty$00601(0, "Nonempty", matchValue$$3[0], output$$4);
      } else {
        const nextInput = (0, _Option.value)(matchValue$$3[1]);
        $output$$4$$61 = new _Types.List(matchValue$$3[0], output$$4);
        $input$$62 = nextInput;
        continue loop$$5;
      }

      break;
    }
  };

  return function ($arg$$9) {
    const list$$9 = loop$$5(new _Types.List(), $arg$$9);
    return rev(list$$9);
  };
}