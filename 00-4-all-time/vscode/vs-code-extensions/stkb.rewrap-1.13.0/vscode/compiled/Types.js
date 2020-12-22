"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomMarkers$reflection = CustomMarkers$reflection;
exports.CustomMarkers$$$$002Ector$$Z30D0F4C = CustomMarkers$$$$002Ector$$Z30D0F4C;
exports.CustomMarkers$$get_line = CustomMarkers$$get_line;
exports.CustomMarkers$$get_block = CustomMarkers$$get_block;
exports.File$reflection = File$reflection;
exports.Settings$reflection = Settings$reflection;
exports.Position$reflection = Position$reflection;
exports.Selection$reflection = Selection$reflection;
exports.Edit$reflection = Edit$reflection;
exports.DocState$reflection = DocState$reflection;
exports.DocState = exports.Edit = exports.Selection = exports.Position = exports.Settings = exports.File = exports.CustomMarkers = void 0;

var _Types = require("./fable-library.2.10.1/Types");

var _Reflection = require("./fable-library.2.10.1/Reflection");

const CustomMarkers = (0, _Types.declare)(function Rewrap_CustomMarkers(line, block) {
  const $this$$1 = this;
  $this$$1["line@6"] = line;
  $this$$1["block@6"] = block;
  void null;
});
exports.CustomMarkers = CustomMarkers;

function CustomMarkers$reflection() {
  return (0, _Reflection.class_type)("Rewrap.CustomMarkers", undefined, CustomMarkers);
}

function CustomMarkers$$$$002Ector$$Z30D0F4C(line, block) {
  return this instanceof CustomMarkers ? CustomMarkers.call(this, line, block) : new CustomMarkers(line, block);
}

function CustomMarkers$$get_line(this$) {
  return this$["line@6"];
}

function CustomMarkers$$get_block(this$$$1) {
  return this$$$1["block@6"];
}

const File = (0, _Types.declare)(function Rewrap_File(language, path, getMarkers) {
  this.language = language;
  this.path = path;
  this.getMarkers = getMarkers;
}, _Types.Record);
exports.File = File;

function File$reflection() {
  return (0, _Reflection.record_type)("Rewrap.File", [], File, () => [["language", _Reflection.string_type], ["path", _Reflection.string_type], ["getMarkers", (0, _Reflection.delegate_type)(CustomMarkers$reflection())]]);
}

const Settings = (0, _Types.declare)(function Rewrap_Settings(column, tabWidth, doubleSentenceSpacing, reformat, wholeComment) {
  this.column = column | 0;
  this.tabWidth = tabWidth | 0;
  this.doubleSentenceSpacing = doubleSentenceSpacing;
  this.reformat = reformat;
  this.wholeComment = wholeComment;
}, _Types.Record);
exports.Settings = Settings;

function Settings$reflection() {
  return (0, _Reflection.record_type)("Rewrap.Settings", [], Settings, () => [["column", _Reflection.int32_type], ["tabWidth", _Reflection.int32_type], ["doubleSentenceSpacing", _Reflection.bool_type], ["reformat", _Reflection.bool_type], ["wholeComment", _Reflection.bool_type]]);
}

const Position = (0, _Types.declare)(function Rewrap_Position(line, character) {
  this.line = line | 0;
  this.character = character | 0;
}, _Types.Record);
exports.Position = Position;

function Position$reflection() {
  return (0, _Reflection.record_type)("Rewrap.Position", [], Position, () => [["line", _Reflection.int32_type], ["character", _Reflection.int32_type]]);
}

const Selection = (0, _Types.declare)(function Rewrap_Selection(anchor, active) {
  this.anchor = anchor;
  this.active = active;
}, _Types.Record);
exports.Selection = Selection;

function Selection$reflection() {
  return (0, _Reflection.record_type)("Rewrap.Selection", [], Selection, () => [["anchor", Position$reflection()], ["active", Position$reflection()]]);
}

const Edit = (0, _Types.declare)(function Rewrap_Edit(startLine, endLine, lines, selections) {
  this.startLine = startLine | 0;
  this.endLine = endLine | 0;
  this.lines = lines;
  this.selections = selections;
}, _Types.Record);
exports.Edit = Edit;

function Edit$reflection() {
  return (0, _Reflection.record_type)("Rewrap.Edit", [], Edit, () => [["startLine", _Reflection.int32_type], ["endLine", _Reflection.int32_type], ["lines", (0, _Reflection.array_type)(_Reflection.string_type)], ["selections", (0, _Reflection.array_type)(Selection$reflection())]]);
}

const DocState = (0, _Types.declare)(function Rewrap_DocState(filePath, version, selections) {
  this.filePath = filePath;
  this.version = version | 0;
  this.selections = selections;
}, _Types.Record);
exports.DocState = DocState;

function DocState$reflection() {
  return (0, _Reflection.record_type)("Rewrap.DocState", [], DocState, () => [["filePath", _Reflection.string_type], ["version", _Reflection.int32_type], ["selections", (0, _Reflection.array_type)(Selection$reflection())]]);
}