"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlank = isBlank;
exports.contains = contains;
exports.startsWith = startsWith;
exports.tryMatch = tryMatch;
exports.leadingWhitespace = leadingWhitespace;
exports.containsText = containsText;
exports.split = split;
exports.tabsToSpaces = tabsToSpaces;
exports.charWidth = charWidth;
exports.strWidth$0027 = strWidth$0027;
exports.strWidth = strWidth;
exports.Line$reflection = Line$reflection;
exports.Line$$$$002Ector$$Z384F8060 = Line$$$$002Ector$$Z384F8060;
exports.Line$$get_prefix = Line$$get_prefix;
exports.Line$$get_content = Line$$get_content;
exports.Line$$$$002Ector$$Z18115A39 = Line$$$$002Ector$$Z18115A39;
exports.Line$$$get_adjustSplit = Line$$$get_adjustSplit;
exports.Line$$$get_trimUpTo = Line$$$get_trimUpTo;
exports.Line$$$get_mapRight = Line$$$get_mapRight;
exports.Line$$$get_mapLeft = Line$$$get_mapLeft;
exports.Line$$$get_toString = Line$$$get_toString;
exports.Line = void 0;

var _String = require("./fable-library.2.10.1/String");

var _RegExp = require("./fable-library.2.10.1/RegExp");

var _Prelude = require("./Prelude");

var _Option = require("./fable-library.2.10.1/Option");

var _List = require("./fable-library.2.10.1/List");

var _Types = require("./fable-library.2.10.1/Types");

var _Util = require("./fable-library.2.10.1/Util");

var _Reflection = require("./fable-library.2.10.1/Reflection");

function isBlank(l) {
  return (0, _String.isNullOrWhiteSpace)(l);
}

function contains(regex, line) {
  return (0, _RegExp.isMatch)(regex, line);
}

function startsWith(marker, line$$1) {
  return (0, _RegExp.isMatch)((0, _RegExp.create)("^\\s*" + marker), line$$1);
}

function tryMatch(regex$$1, line$$2) {
  const m = (0, _RegExp.match)(regex$$1, line$$2);

  if (m != null) {
    return (0, _Prelude.String$$$takeStart)(m.index + m[0].length, line$$2);
  } else {
    return undefined;
  }
}

const leadingWhitespaceRegex = (0, _RegExp.create)("^\\s*");

function leadingWhitespace(line$$3) {
  return (0, _RegExp.match)(leadingWhitespaceRegex, line$$3)[0];
}

function containsText(line$$4) {
  if (contains((0, _RegExp.create)("[A-Za-z0-9À-￿]"), line$$4)) {
    return !contains((0, _RegExp.create)("^=(begin|end)\\s*$"), line$$4);
  } else {
    return false;
  }
}

function split(regex$$2, line$$5) {
  let prefix;
  const x = tryMatch(regex$$2, line$$5);
  prefix = (0, _Option.defaultArg)(x, "");
  return [prefix, (0, _Prelude.String$$$dropStart)(prefix.length, line$$5)];
}

function tabsToSpaces(tabSize, str) {
  let matchValue;
  let list;
  const array = str.split("\t");
  list = (0, _List.ofArray)(array);
  matchValue = (0, _List.reverse)(list);

  if (matchValue.tail != null) {
    let strings;
    let list$$2;
    let tail;
    tail = (0, _List.map)(function mapping(s) {
      return (0, _String.padRight)(s, (~~(s.length / tabSize) + 1) * tabSize);
    }, matchValue.tail);
    list$$2 = new _Types.List(matchValue.head, tail);
    strings = (0, _List.reverse)(list$$2);
    return (0, _String.join)("", strings);
  } else {
    return str;
  }
}

function charWidth(tabSize$$1, column, charCode) {
  if (charCode === 0) {
    return 1;
  } else if (charCode === 9) {
    return tabSize$$1 - column % tabSize$$1 | 0;
  } else if (charCode < 32) {
    return 0;
  } else {
    if (charCode < 11904) {
      return 1;
    } else if (charCode >= 11904 ? charCode <= 55215 : false) {
      return 2;
    } else if (charCode >= 63744 ? charCode <= 64255 : false) {
      return 2;
    } else if (charCode >= 65281 ? charCode <= 65374 : false) {
      return 2;
    } else {
      return 1;
    }
  }
}

function strWidth$0027(offset, tabWidth, str$$1) {
  const tabWidth$$1 = (0, _Util.max)(_Util.comparePrimitives, tabWidth, 1) | 0;

  const loop = function loop($acc$$26, $i$$27) {
    loop: while (true) {
      const acc = $acc$$26,
            i = $i$$27;

      if (i >= str$$1.length) {
        return acc - offset | 0;
      } else {
        $acc$$26 = acc + charWidth(tabWidth$$1, acc, str$$1[i].charCodeAt(0));
        $i$$27 = i + 1;
        continue loop;
      }

      break;
    }
  };

  return loop(offset, 0) | 0;
}

function strWidth(tabWidth$$2) {
  return function (str$$2) {
    return strWidth$0027(0, tabWidth$$2, str$$2);
  };
}

const Line = (0, _Types.declare)(function Line_Line(left, right) {
  const $this$$3 = this;
  $this$$3.left = left;
  $this$$3.right = right;
  void null;
});
exports.Line = Line;

function Line$reflection() {
  return (0, _Reflection.class_type)("Line.Line", undefined, Line);
}

function Line$$$$002Ector$$Z384F8060(left, right) {
  return this instanceof Line ? Line.call(this, left, right) : new Line(left, right);
}

function Line$$get_prefix(_) {
  return _.left;
}

function Line$$get_content(_$$1) {
  return _$$1.right;
}

function Line$$$$002Ector$$Z18115A39(str$$3, splitAt) {
  return Line$$$$002Ector$$Z384F8060.call(this, (0, _String.substring)(str$$3, 0, splitAt), (0, _String.substring)(str$$3, splitAt));
}

function Line$$$$002Ector$$4E535C37(line$$6, splitAt$$1) {
  return Line$$$$002Ector$$Z18115A39.call(this, Line$$get_prefix(line$$6) + Line$$get_content(line$$6), splitAt$$1);
}

function Line$$$get_adjustSplit() {
  return function (d) {
    return function (line$$7) {
      return Line$$get_content(line$$7) === "" ? line$$7 : Line$$$$002Ector$$4E535C37(line$$7, Line$$get_prefix(line$$7).length + d);
    };
  };
}

function Line$$$get_trimUpTo() {
  return function (indent) {
    return function (line$$8) {
      const trimmed = (0, _String.trimStart)(Line$$get_content(line$$8));
      const maxIndent = Line$$get_prefix(line$$8).length + Line$$get_content(line$$8).length - trimmed.length | 0;
      return Line$$$$002Ector$$4E535C37(line$$8, (0, _Util.min)(_Util.comparePrimitives, indent, maxIndent));
    };
  };
}

function Line$$$get_mapRight() {
  return function (fn) {
    return function (line$$9) {
      return Line$$$$002Ector$$Z384F8060(Line$$get_prefix(line$$9), fn(Line$$get_content(line$$9)));
    };
  };
}

function Line$$$get_mapLeft() {
  return function (fn$$1) {
    return function (line$$10) {
      return Line$$$$002Ector$$Z384F8060(fn$$1(Line$$get_prefix(line$$10)), Line$$get_content(line$$10));
    };
  };
}

Line.prototype.toString = function () {
  const this$ = this;
  return Line$$get_prefix(this$) + Line$$get_content(this$);
};

function Line$$$get_toString() {
  return String;
}