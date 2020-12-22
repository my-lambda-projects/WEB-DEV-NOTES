"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWrappingColumn = getWrappingColumn;
exports.maybeChangeWrappingColumn = maybeChangeWrappingColumn;
exports.saveDocState = saveDocState;

var _Types = require("./Types");

var _Array = require("./fable-library.2.10.1/Array");

var _Util = require("./fable-library.2.10.1/Util");

var _Option = require("./fable-library.2.10.1/Option");

var _Prelude = require("./Prelude");

let lastDocState = new _Types.DocState("", 0, []);
const docWrappingColumns = new Map([]);

function getWrappingColumn(filePath, rulers) {
  var option, x;

  const setAndReturn = function setAndReturn(column) {
    docWrappingColumns.set(filePath, column);
    return column | 0;
  };

  const firstRuler = (0, _Array.head)(rulers) | 0;

  if (!docWrappingColumns.has(filePath)) {
    return setAndReturn(firstRuler) | 0;
  } else {
    return setAndReturn((option = (0, _Array.tryFind)((x = (0, _Util.getItemFromDict)(docWrappingColumns, filePath) | 0, function (y) {
      return x === y;
    }), rulers), ((0, _Option.defaultArg)(option, firstRuler)))) | 0;
  }
}

function maybeChangeWrappingColumn(docState, rulers$$1) {
  var x$$1;

  if (!docWrappingColumns.has(docState.filePath)) {
    return getWrappingColumn(docState.filePath, rulers$$1) | 0;
  } else {
    let rulerIndex;
    const x$$2 = (0, _Array.tryFindIndex)((x$$1 = (0, _Util.getItemFromDict)(docWrappingColumns, docState.filePath) | 0, function (y$$1) {
      return x$$1 === y$$1;
    }), rulers$$1);
    let x$$6;

    const _arg1 = new _Prelude.Functor(0, "Functor");

    x$$6 = (0, _Option.map)(function shiftRulerIfDocStateUnchanged(i) {
      if ((0, _Util.equals)(docState, lastDocState)) {
        return (i + 1) % rulers$$1.length | 0;
      } else {
        return i | 0;
      }
    }, x$$2);
    rulerIndex = (0, _Option.defaultArg)(x$$6, 0);
    docWrappingColumns.set(docState.filePath, rulers$$1[rulerIndex]);
    return (0, _Util.getItemFromDict)(docWrappingColumns, docState.filePath) | 0;
  }
}

function saveDocState(docState$$1) {
  lastDocState = docState$$1;
}