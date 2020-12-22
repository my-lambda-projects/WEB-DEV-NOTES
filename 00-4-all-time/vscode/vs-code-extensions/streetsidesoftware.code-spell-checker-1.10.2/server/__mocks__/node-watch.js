"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callbacks = new Map();
function getWatchedPaths() {
    return [...callbacks.keys()];
}
function addCallback(pathName, options, callback) {
    if (typeof options === 'function') {
        callback = options;
    }
    let isClosed = false;
    const watcher = {
        close: jest.fn(() => {
            isClosed = true;
        }),
        isClosed: () => isClosed,
        callback,
        getWatchedPaths,
        addListener: jest.fn(),
        on: jest.fn(),
        once: jest.fn(),
        prependListener: jest.fn(),
        prependOnceListener: jest.fn(),
        removeAllListeners: jest.fn(),
        removeListener: jest.fn(),
        setMaxListeners: jest.fn(),
        off: jest.fn(),
        getMaxListeners: jest.fn(),
        listenerCount: jest.fn(),
        listeners: jest.fn(),
        emit: jest.fn(),
        rawListeners: jest.fn(),
        eventNames: jest.fn(),
    };
    const cb = callbacks.get(pathName) || new Set();
    cb.add(watcher);
    callbacks.set(pathName, cb);
    return watcher;
}
function trigger(eventType, filename) {
    var _a;
    const cb = callbacks.get(filename);
    if (!cb) {
        throw new Error(`Untracked file ${filename}`);
    }
    for (const c of cb) {
        if (c && !c.isClosed()) {
            (_a = c.callback) === null || _a === void 0 ? void 0 : _a.call(c, eventType, filename);
        }
    }
}
function getWatchers(filename) {
    var _a;
    if (!filename) {
        return [...callbacks.keys()].map(getWatchers).reduce((acc, cur) => acc.concat(cur), []);
    }
    return [...(((_a = callbacks.get(filename)) === null || _a === void 0 ? void 0 : _a.values()) || [])];
}
function reset() {
    callbacks.clear();
}
const mock = jest
    .fn()
    .mockImplementation(addCallback);
const mockWatcher = mock;
mockWatcher.__trigger = trigger;
mockWatcher.__getWatchers = getWatchers;
mockWatcher.__reset = reset;
exports.default = mock;
//# sourceMappingURL=node-watch.js.map