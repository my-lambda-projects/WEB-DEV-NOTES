"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegExp = exports.toRegExp = exports.isRegExpMatchTimeout = exports.isRegExpMatch = exports.PatternMatcher = void 0;
const regexp_worker_1 = require("regexp-worker");
class PatternMatcher {
    constructor(timeoutMs = 2000) {
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        this.dispose = () => this.worker.dispose();
        this.worker = new regexp_worker_1.RegExpWorker(timeoutMs);
    }
    async matchPatternsInText(patterns, text, settings) {
        const resolvedPatterns = resolvePatterns(patterns, settings);
        const uniqueRegExpArray = extractUniqueRegExps(resolvedPatterns);
        return execMatchArray(this.worker, text, uniqueRegExpArray).then((r) => pairWithPatterns(r, resolvedPatterns));
    }
}
exports.PatternMatcher = PatternMatcher;
function pairWithPatterns(execResults, patterns) {
    const byRegExp = new Map(execResults.map((r) => [r.regexp.toString(), r]));
    function mapRegExp(r) {
        return byRegExp.get(r.toString()) || { regexp: r, message: 'not found', elapsedTimeMs: 0 };
    }
    const results = patterns.map((p) => ({ name: p.name, matches: p.regexp.map(mapRegExp) }));
    return results;
}
function isRegExpMatch(m) {
    return Array.isArray(m.ranges);
}
exports.isRegExpMatch = isRegExpMatch;
function isRegExpMatchTimeout(m) {
    return !isRegExpMatch(m);
}
exports.isRegExpMatchTimeout = isRegExpMatchTimeout;
function execMatchArray(worker, text, regexpArray) {
    return execMatchRegExpArray(worker, text, regexpArray).catch((e) => {
        if (!isTimeoutError(e)) {
            return Promise.reject(e);
        }
        return execMatchRegExpArrayOneByOne(worker, text, regexpArray);
    });
}
function execMatchRegExpArray(worker, text, regexpArray) {
    return worker
        .matchRegExpArray(text, regexpArray)
        .then((r) => r.results.map((result, index) => toExecMatchRegExpArrayResult(result, regexpArray[index])));
}
function execMatchRegExpArrayOneByOne(worker, text, regexpArray) {
    const results = regexpArray.map((regexp) => execMatch(worker, text, regexp));
    return Promise.all(results);
}
function toExecMatchRegExpArrayResult(result, regexp) {
    return {
        regexp,
        ranges: [...result.ranges],
        elapsedTimeMs: result.elapsedTimeMs,
    };
}
function execMatch(worker, text, regexp) {
    return worker
        .matchRegExp(text, regexp)
        .then((r) => toExecMatchRegExpArrayResult(r, regexp))
        .catch((e) => toExecMatchRegExpResultTimeout(regexp, e));
}
function toExecMatchRegExpResultTimeout(regexp, error) {
    if (!isTimeoutError(error))
        return Promise.reject(error);
    return {
        ...error,
        regexp,
    };
}
function isTimeoutError(e) {
    return typeof e === 'object' && typeof e.message === 'string' && typeof e.elapsedTimeMs === 'number';
}
function resolvePatterns(patterns, settings) {
    const knownPatterns = extractPatternsFromSettings(settings);
    const matchingPatterns = patterns.map((pat) => resolvePattern(pat, knownPatterns));
    return matchingPatterns;
}
function resolvePattern(pat, knownPatterns) {
    if (isNamedPattern(pat)) {
        return namedPatternToMultiPattern(pat);
    }
    return knownPatterns.get(pat) || knownPatterns.get(pat.toLowerCase()) || { name: pat, regexp: [toRegExp(pat, 'g')] };
}
function isNamedPattern(pattern) {
    return typeof pattern !== 'string';
}
function namedPatternToMultiPattern(pat) {
    const { name, pattern } = pat;
    const regexp = typeof pattern === 'string' ? [toRegExp(pattern)] : pattern.map((p) => toRegExp(p));
    return { name, regexp };
}
function extractPatternsFromSettings(settings) {
    var _a;
    const patterns = ((_a = settings.patterns) === null || _a === void 0 ? void 0 : _a.map(mapDef)) || [];
    const knownPatterns = patterns.map((pat) => [pat.name.toLowerCase(), pat]);
    const knownRegexp = patterns.map((pat) => [pat.regexp.map((r) => r.toString()).join(','), pat]);
    return new Map(knownPatterns.concat(knownRegexp));
}
function mapDef(pat) {
    const { name, pattern } = pat;
    const patterns = Array.isArray(pattern) ? pattern.map((r) => toRegExp(r)) : [toRegExp(pattern)];
    // ) => ({ name, patterns: toRegExp(pattern) })
    return { name, regexp: patterns };
}
function toRegExp(r, defaultFlags) {
    if (isRegExp(r))
        return r;
    const match = r.match(/^\/(.*)\/([gimsuy]*)$/);
    if (match) {
        return new RegExp(match[1], match[2] || undefined);
    }
    return new RegExp(r, defaultFlags);
}
exports.toRegExp = toRegExp;
function isRegExp(r) {
    return r instanceof RegExp;
}
exports.isRegExp = isRegExp;
function* flatten(a) {
    for (const r of a) {
        yield* r;
    }
}
function extractUniqueRegExps(patterns) {
    const nested = patterns.map((p) => p.regexp.map((r) => [r.toString(), r]));
    const collection = new Map(flatten(nested));
    return [...collection.values()];
}
//# sourceMappingURL=PatternMatcher.js.map