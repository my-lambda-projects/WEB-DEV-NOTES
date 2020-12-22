"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCJK = isCJK;
exports.CanBreak$reflection = CanBreak$reflection;
exports.canBreak = canBreak;
exports.canBreakBetweenChars = canBreakBetweenChars;
exports.wrap = wrap;
exports.CanBreak = void 0;

var _Line = require("./Line");

var _Types = require("./fable-library.2.10.1/Types");

var _Reflection = require("./fable-library.2.10.1/Reflection");

var _Array = require("./fable-library.2.10.1/Array");

var _Util = require("./fable-library.2.10.1/Util");

var _Nonempty = require("./Nonempty");

var _List = require("./fable-library.2.10.1/List");

var _String = require("./fable-library.2.10.1/String");

var _Prelude = require("./Prelude");

var _RegExp = require("./fable-library.2.10.1/RegExp");

function charWidth(charCode) {
  return (0, _Line.charWidth)(1, 0, charCode);
}

function isWhitespace(cc) {
  if (cc !== 0 ? cc <= 32 : false) {
    return true;
  } else {
    return cc === 12288;
  }
}

function isCJK(charCode$$1) {
  if ((charCode$$1 >= 12352 ? charCode$$1 <= 12543 : false) ? true : charCode$$1 >= 13312 ? charCode$$1 <= 19903 : false) {
    return true;
  } else if (charCode$$1 >= 19968) {
    return charCode$$1 <= 40959;
  } else {
    return false;
  }
}

const CanBreak = (0, _Types.declare)(function Wrapping_CanBreak(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types.Union);
exports.CanBreak = CanBreak;

function CanBreak$reflection() {
  return (0, _Reflection.union_type)("Wrapping.CanBreak", [], CanBreak, () => ["Always", "Sometimes", "Never"]);
}

const specialChars = (() => {
  const array$$1 = [[[new CanBreak(2, "Never"), new CanBreak(1, "Sometimes")], "})]?,;¢°′″‰℃"], [[new CanBreak(2, "Never"), new CanBreak(0, "Always")], "、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣"], [[new CanBreak(1, "Sometimes"), new CanBreak(2, "Never")], "([{"], [[new CanBreak(0, "Always"), new CanBreak(2, "Never")], "‘“〈《「『【〔（［｛｢£¥＄￡￥＋"]];
  return (0, _Array.map)(function mapping$$1(tupledArg) {
    var array;
    return [tupledArg[0], (array = tupledArg[1].split(""), (0, _Array.map)(function mapping(value) {
      return value.charCodeAt(0);
    }, array, Uint16Array))];
  }, array$$1, Array);
})();

function canBreak(charCode$$2) {
  if (isWhitespace(charCode$$2)) {
    return [new CanBreak(0, "Always"), new CanBreak(0, "Always")];
  } else {
    const matchValue = (0, _Array.tryFind)(function ($arg$$3) {
      let array$$2;
      array$$2 = $arg$$3[1];
      return (0, _Array.contains)(charCode$$2, array$$2, {
        Equals($x$$1, $y$$2) {
          return $x$$1 === $y$$2;
        },

        GetHashCode: _Util.structuralHash
      });
    }, specialChars);

    if (matchValue == null) {
      if (isCJK(charCode$$2)) {
        return [new CanBreak(0, "Always"), new CanBreak(0, "Always")];
      } else {
        return [new CanBreak(1, "Sometimes"), new CanBreak(1, "Sometimes")];
      }
    } else {
      const res = matchValue[0];
      return res;
    }
  }
}

function canBreakBefore($arg$$4) {
  let tuple$$1;
  tuple$$1 = canBreak($arg$$4);
  return tuple$$1[0];
}

function canBreakAfter($arg$$5) {
  let tuple$$2;
  tuple$$2 = canBreak($arg$$5);
  return tuple$$2[1];
}

function canBreakBetweenChars(c1, c2) {
  const matchValue$$1 = [canBreakAfter(c1), canBreakBefore(c2)];
  var $target$$14;

  if (matchValue$$1[0].tag === 1) {
    if (matchValue$$1[1].tag === 1) {
      $target$$14 = 0;
    } else if (matchValue$$1[1].tag === 2) {
      $target$$14 = 2;
    } else {
      $target$$14 = 3;
    }
  } else if (matchValue$$1[0].tag === 2) {
    $target$$14 = 1;
  } else if (matchValue$$1[1].tag === 2) {
    $target$$14 = 2;
  } else {
    $target$$14 = 3;
  }

  switch ($target$$14) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        return false;
      }

    case 2:
      {
        return false;
      }

    case 3:
      {
        return true;
      }
  }
}

function wrapLines(headWidth, tailWidth, lines) {
  let str;
  let strings;
  const list = (0, _List.fold)(function addEolSpacesWhereNeeded(ls, l) {
    if (ls.tail != null) {
      const matchValue$$2 = [canBreakAfter(ls.head[ls.head.length - 1].charCodeAt(0)), canBreakBefore(l[0].charCodeAt(0))];
      var $target$$20;

      if (matchValue$$2[0].tag === 1) {
        if (matchValue$$2[1].tag === 1) {
          $target$$20 = 0;
        } else {
          $target$$20 = 1;
        }
      } else {
        $target$$20 = 1;
      }

      switch ($target$$20) {
        case 0:
          {
            return new _Types.List(l, new _Types.List(" ", ls));
          }

        case 1:
          {
            return new _Types.List(l, ls);
          }
      }
    } else {
      return new _Types.List(l, new _Types.List());
    }
  }, new _Types.List(), (0, _Nonempty.toList)(lines));
  strings = (0, _List.reverse)(list);
  str = (0, _String.join)("", strings);

  const findBreakPos = function findBreakPos($min$$21, $p$$22) {
    findBreakPos: while (true) {
      const min = $min$$21,
            p = $p$$22;

      if (p === min) {
        return min | 0;
      } else if (canBreakBetweenChars(str[p - 1].charCodeAt(0), str[p].charCodeAt(0))) {
        return p | 0;
      } else {
        $min$$21 = min;
        $p$$22 = p - 1;
        continue findBreakPos;
      }

      break;
    }
  };

  const loop = function loop($acc$$23, $mw$$24, $s$$1$$25, $p$$1$$26, $w$$27) {
    loop: while (true) {
      const acc = $acc$$23,
            mw = $mw$$24,
            s$$1 = $s$$1$$25,
            p$$1 = $p$$1$$26,
            w = $w$$27;

      if (p$$1 >= str.length) {
        return new _Prelude.Nonempty$00601(0, "Nonempty", (0, _String.substring)(str, s$$1), acc);
      } else {
        const cc$$1 = str[p$$1].charCodeAt(0);

        if (p$$1 === s$$1 ? isWhitespace(cc$$1) : false) {
          $acc$$23 = acc;
          $mw$$24 = mw;
          $s$$1$$25 = s$$1 + 1;
          $p$$1$$26 = p$$1 + 1;
          $w$$27 = w;
          continue loop;
        } else {
          const w$0027 = w + charWidth(cc$$1) | 0;

          if (w$0027 <= mw) {
            $acc$$23 = acc;
            $mw$$24 = mw;
            $s$$1$$25 = s$$1;
            $p$$1$$26 = p$$1 + 1;
            $w$$27 = w$0027;
            continue loop;
          } else {
            const bP = findBreakPos(s$$1, p$$1) | 0;

            if (bP === s$$1) {
              $acc$$23 = acc;
              $mw$$24 = mw;
              $s$$1$$25 = s$$1;
              $p$$1$$26 = p$$1 + 1;
              $w$$27 = w$0027;
              continue loop;
            } else {
              const line = (0, _String.trimEnd)((0, _String.substring)(str, s$$1, bP - s$$1));
              $acc$$23 = new _Types.List(line, acc);
              $mw$$24 = tailWidth;
              $s$$1$$25 = bP;
              $p$$1$$26 = bP;
              $w$$27 = 0;
              continue loop;
            }
          }
        }
      }

      break;
    }
  };

  const list$$1 = loop(new _Types.List(), headWidth, 0, 0, 0);
  return (0, _Nonempty.rev)(list$$1);
}

const inlineTagRegex = (0, _RegExp.create)("{@[a-z]+.*?[^\\\\]}", 1);

function addPrefixes(prefixes_0, prefixes_1) {
  return function ($arg$$6) {
    let arg10$0040$$1;
    arg10$0040$$1 = (0, _Nonempty.mapHead)(function fn(y) {
      return prefixes_0 + y;
    }, $arg$$6);
    return (0, _Nonempty.mapTail)(function fn$$1(y$$1) {
      return prefixes_1 + y$$1;
    }, arg10$0040$$1);
  };
}

function wrap(settings, prefixes$$1, lines$$1) {
  var x$$9, lines$$2, x$$5, _arg3$$1, _arg2, _arg3$$2, _arg2$$1;

  const addDoubleSpaces = (0, _Nonempty.mapInit)(function (s$$2) {
    const t = (0, _String.trimEnd)(s$$2);
    return (settings.doubleSentenceSpacing ? [".", "?", "!"].some(function (c) {
      return (0, _String.endsWith)(t, c);
    }) : false) ? t + "  " : t;
  });

  const freezeInlineTags = function freezeInlineTags(str$$1) {
    return (0, _RegExp.replace)(inlineTagRegex, str$$1, function (m) {
      return (0, _String.replace)(m[0], " ", "\u0000");
    });
  };

  const unfreezeInlineTags = function unfreezeInlineTags(str$$2) {
    return (0, _String.replace)(str$$2, "\u0000", " ");
  };

  const column$$1 = (settings.column < 1 ? 2147483647 : settings.column) | 0;
  let lineWidths;

  const f$$2 = function f$$2(s$$3) {
    return column$$1 - (0, _Line.tabsToSpaces)(settings.tabWidth, s$$3).length;
  };

  const _arg3 = new _Prelude.Functor(0, "Functor");

  lineWidths = [f$$2(prefixes$$1[0]), f$$2(prefixes$$1[1])];
  return addPrefixes(prefixes$$1[0], prefixes$$1[1])((x$$9 = (lines$$2 = (x$$5 = addDoubleSpaces(lines$$1), (_arg3$$1 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", freezeInlineTags(x$$5.fields[0]), (_arg2 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(freezeInlineTags, x$$5.fields[1]))))), (wrapLines(lineWidths[0], lineWidths[1], lines$$2))), (_arg3$$2 = new _Prelude.Functor(0, "Functor"), new _Prelude.Nonempty$00601(0, "Nonempty", unfreezeInlineTags(x$$9.fields[0]), (_arg2$$1 = new _Prelude.Functor(0, "Functor"), (0, _List.map)(unfreezeInlineTags, x$$9.fields[1]))))));
}