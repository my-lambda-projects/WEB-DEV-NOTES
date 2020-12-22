"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Functor$reflection = Functor$reflection;
exports.HasSize$reflection = HasSize$reflection;
exports.Nonempty$00601$reflection = Nonempty$00601$reflection;
exports.Nonempty$00601$$$op_Addition$$Z6CA0D220 = Nonempty$00601$$$op_Addition$$Z6CA0D220;
exports.Nonempty$00601$$$size$$1F9B86C2 = Nonempty$00601$$$size$$1F9B86C2;
exports.These$00602$reflection = These$00602$reflection;
exports.These$00602$$$maybeThis = These$00602$$$maybeThis;
exports.These$00602$$$maybeThat = These$00602$$$maybeThat;
exports.These$00602$$$mapThis = These$00602$$$mapThis;
exports.OptionBuilder$reflection = OptionBuilder$reflection;
exports.OptionBuilder$$$$002Ector = OptionBuilder$$$$002Ector;
exports.OptionBuilder$$Bind$$Z424BC9ED = OptionBuilder$$Bind$$Z424BC9ED;
exports.OptionBuilder$$Return$$1505 = OptionBuilder$$Return$$1505;
exports.OptionBuilder$$ReturnFrom$$1505 = OptionBuilder$$ReturnFrom$$1505;
exports.List$$$tryTail = List$$$tryTail;
exports.List$$$tryInit = List$$$tryInit;
exports.List$$$safeSkip = List$$$safeSkip;
exports.List$$$span = List$$$span;
exports.List$$$spanMaybes = List$$$spanMaybes;
exports.List$$$safeSplitAt = List$$$safeSplitAt;
exports.List$$$minWith = List$$$minWith;
exports.String$$$dropStart = String$$$dropStart;
exports.String$$$takeStart = String$$$takeStart;
exports.Block$reflection = Block$reflection;
exports.Block$$$size$$60E56076 = Block$$$size$$60E56076;
exports.Block = exports.option = exports.OptionBuilder = exports.These$00602 = exports.Nonempty$00601 = exports.HasSize = exports.Functor = void 0;

var _Types = require("./fable-library.2.10.1/Types");

var _Reflection = require("./fable-library.2.10.1/Reflection");

var _List = require("./fable-library.2.10.1/List");

var _Seq = require("./fable-library.2.10.1/Seq");

var _Option = require("./fable-library.2.10.1/Option");

var _Util = require("./fable-library.2.10.1/Util");

var _String = require("./fable-library.2.10.1/String");

const Functor = (0, _Types.declare)(function Prelude_Functor(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.Functor = Functor;

function Functor$reflection() {
  return (0, _Reflection.union_type)("Prelude.Functor", [], Functor, () => ["Functor"]);
}

const HasSize = (0, _Types.declare)(function Prelude_HasSize(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.HasSize = HasSize;

function HasSize$reflection() {
  return (0, _Reflection.union_type)("Prelude.HasSize", [], HasSize, () => ["HasSize"]);
}

const Nonempty$00601 = (0, _Types.declare)(function Prelude_Nonempty(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.Nonempty$00601 = Nonempty$00601;

function Nonempty$00601$reflection($gen$$12) {
  return (0, _Reflection.union_type)("Prelude.Nonempty`1", [$gen$$12], Nonempty$00601, () => [["Nonempty", [["Item1", $gen$$12], ["Item2", (0, _Reflection.list_type)($gen$$12)]]]]);
}

function Nonempty$00601$$$op_Addition$$Z6CA0D220(_arg1, _arg2) {
  return new Nonempty$00601(0, "Nonempty", _arg1.fields[0], (0, _List.append)(_arg1.fields[1], new _Types.List(_arg2.fields[0], _arg2.fields[1])));
}

function Nonempty$00601$$$size$$1F9B86C2(_arg5, _arg6) {
  return (0, _List.length)(_arg6.fields[1]) + 1;
}

Nonempty$00601.prototype[Symbol.iterator] = function () {
  var source;
  const self$ = this;
  return (0, _Seq.toIterator)((0, _Seq.getEnumerator)((source = new _Types.List(self$.fields[0], self$.fields[1]), (source))));
};

const These$00602 = (0, _Types.declare)(function Prelude_These(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.These$00602 = These$00602;

function These$00602$reflection($gen$$17, $gen$$18) {
  return (0, _Reflection.union_type)("Prelude.These`2", [$gen$$17, $gen$$18], These$00602, () => [["This", [["Item", $gen$$17]]], ["That", [["Item", $gen$$18]]], ["These", [["Item1", $gen$$17], ["Item2", $gen$$18]]]]);
}

function These$00602$$$maybeThis(maybeA, b) {
  if (maybeA == null) {
    return new These$00602(1, "That", b);
  } else {
    const a = (0, _Option.value)(maybeA);
    return new These$00602(2, "These", a, b);
  }
}

function These$00602$$$maybeThat(a$$1, maybeB) {
  if (maybeB == null) {
    return new These$00602(0, "This", a$$1);
  } else {
    const b$$1 = (0, _Option.value)(maybeB);
    return new These$00602(2, "These", a$$1, b$$1);
  }
}

function These$00602$$$mapThis(f, these) {
  switch (these.tag) {
    case 1:
      {
        return new These$00602(1, "That", these.fields[0]);
      }

    case 2:
      {
        return new These$00602(2, "These", f(these.fields[0]), these.fields[1]);
      }

    default:
      {
        return new These$00602(0, "This", f(these.fields[0]));
      }
  }
}

const OptionBuilder = (0, _Types.declare)(function Prelude_OptionBuilder() {
  void null;
});
exports.OptionBuilder = OptionBuilder;

function OptionBuilder$reflection() {
  return (0, _Reflection.class_type)("Prelude.OptionBuilder", undefined, OptionBuilder);
}

function OptionBuilder$$$$002Ector() {
  return this instanceof OptionBuilder ? OptionBuilder.call(this) : new OptionBuilder();
}

function OptionBuilder$$Bind$$Z424BC9ED(_, x, f$$1) {
  if (x != null) {
    const a$$4 = (0, _Option.value)(x);
    return f$$1(a$$4);
  } else {
    return undefined;
  }
}

function OptionBuilder$$Return$$1505(_$$1, x$$1) {
  return (0, _Option.some)(x$$1);
}

function OptionBuilder$$ReturnFrom$$1505(_$$2, x$$2) {
  return x$$2;
}

const option = OptionBuilder$$$$002Ector();
exports.option = option;

function List$$$tryTail(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    return _arg1$$1.tail;
  } else {
    return undefined;
  }
}

function List$$$tryInit(list) {
  let x$$3;

  let _arg1$$2;

  _arg1$$2 = (0, _List.reverse)(list);
  x$$3 = List$$$tryTail(_arg1$$2);

  const _arg1$$3 = new Functor(0, "Functor");

  return (0, _Option.map)(_List.reverse, x$$3);
}

function List$$$safeSkip(n, list$$3) {
  if (n === 0) {
    return list$$3;
  } else {
    const x$$6 = List$$$tryTail(list$$3);
    const b$$4 = new _Types.List();
    let f$$5;
    const n$$1 = n - 1 | 0;

    f$$5 = function (list$$4) {
      return List$$$safeSkip(n$$1, list$$4);
    };

    let x$$10;

    const _arg1$$4 = new Functor(0, "Functor");

    x$$10 = (0, _Option.map)(f$$5, x$$6);
    return (0, _Option.defaultArg)(x$$10, b$$4);
  }
}

function List$$$span(predicate) {
  const loop = function loop($output$$37, $remaining$$38) {
    loop: while (true) {
      const output = $output$$37,
            remaining = $remaining$$38;

      if (remaining.tail != null) {
        if (predicate(remaining.head)) {
          $output$$37 = new _Types.List(remaining.head, output);
          $remaining$$38 = remaining.tail;
          continue loop;
        } else {
          return [(0, _List.reverse)(output), remaining];
        }
      } else {
        return [(0, _List.reverse)(output), new _Types.List()];
      }

      break;
    }
  };

  return (0, _Util.partialApply)(1, loop, [new _Types.List()]);
}

function List$$$spanMaybes(fn) {
  const loop$$1 = function loop$$1($acc$$40, $_arg1$$5$$41) {
    loop$$1: while (true) {
      const acc = $acc$$40,
            _arg1$$5 = $_arg1$$5$$41;

      if (_arg1$$5.tail == null) {
        return [(0, _List.reverse)(acc), new _Types.List()];
      } else {
        const matchValue = fn(_arg1$$5.head);

        if (matchValue == null) {
          return [(0, _List.reverse)(acc), new _Types.List(_arg1$$5.head, _arg1$$5.tail)];
        } else {
          const x$$11 = (0, _Option.value)(matchValue);
          $acc$$40 = new _Types.List(x$$11, acc);
          $_arg1$$5$$41 = _arg1$$5.tail;
          continue loop$$1;
        }
      }

      break;
    }
  };

  return (0, _Util.partialApply)(1, loop$$1, [new _Types.List()]);
}

function List$$$safeSplitAt(n$$2, list$$5) {
  return [(0, _List.truncate)(n$$2, list$$5), List$$$safeSkip(n$$2, list$$5)];
}

function List$$$minWith(def, _arg1$$6) {
  if (_arg1$$6.tail == null) {
    return def;
  } else {
    return (0, _Util.min)(_Util.compare, def, (0, _List.min)(_arg1$$6, {
      Compare: _Util.compare
    }));
  }
}

function String$$$dropStart(n$$3, str) {
  if (n$$3 > str.length) {
    return "";
  } else {
    return (0, _String.substring)(str, (0, _Util.max)(_Util.comparePrimitives, n$$3, 0));
  }
}

function String$$$takeStart(n$$4, str$$1) {
  if (n$$4 > str$$1.length) {
    return str$$1;
  } else {
    return (0, _String.substring)(str$$1, 0, (0, _Util.max)(_Util.comparePrimitives, n$$4, 0));
  }
}

const Block = (0, _Types.declare)(function Prelude_Block(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.Block = Block;

function Block$reflection() {
  return (0, _Reflection.union_type)("Prelude.Block", [], Block, () => [["Comment", [["Item", Nonempty$00601$reflection(Block$reflection())]]], ["Wrap", [["Item", (0, _Reflection.tuple_type)((0, _Reflection.tuple_type)(_Reflection.string_type, _Reflection.string_type), Nonempty$00601$reflection(_Reflection.string_type))]]], ["NoWrap", [["Item", Nonempty$00601$reflection(_Reflection.string_type)]]]]);
}

function Block$$$size$$60E56076(_arg1$$7, b$$7) {
  switch (b$$7.tag) {
    case 2:
      {
        return Nonempty$00601$$$size$$1F9B86C2(new HasSize(0, "HasSize"), b$$7.fields[0]) | 0;
      }

    case 1:
      {
        return Nonempty$00601$$$size$$1F9B86C2(new HasSize(0, "HasSize"), b$$7.fields[0][1]) | 0;
      }

    default:
      {
        return (0, _Seq.sumBy)(function projection(b$$8) {
          return Block$$$size$$60E56076(new HasSize(0, "HasSize"), b$$8);
        }, b$$7.fields[0], {
          GetZero() {
            return 0;
          },

          Add($x$$10, $y$$11) {
            return $x$$10 + $y$$11;
          }

        }) | 0;
      }
  }
}