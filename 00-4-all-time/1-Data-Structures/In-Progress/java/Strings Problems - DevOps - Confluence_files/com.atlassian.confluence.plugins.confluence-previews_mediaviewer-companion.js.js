WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:mediaviewer-companion', location = '/mediaviewer/dist/index.js' */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ADCClient = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var ConnectionLifecycleError = (function () {
    function ConnectionLifecycleError(message) {
        this.message = message;
    }
    return ConnectionLifecycleError;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConnectionLifecycleError;

},{}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Emitter = require("events");
var Transaction_1 = require("./Transaction");
var ConnectionLifecycleError_1 = require("./ConnectionLifecycleError");
var FetchCodeError_1 = require("./FetchCodeError");
var ConstructibleClient = (function (_super) {
    __extends(ConstructibleClient, _super);
    function ConstructibleClient(wsPath, PORTS, asapFetcher, codeFetcher, parentClient) {
        var _this = _super.call(this) || this;
        _this.wsPath = wsPath;
        _this.PORTS = PORTS;
        _this.asapFetcher = asapFetcher;
        _this.codeFetcher = codeFetcher;
        _this.parentClient = parentClient;
        _this.requestID = 1;
        return _this;
    }
    ConstructibleClient.prototype.authenticateWs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asapFetcher()];
                    case 1:
                        token = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var requestType;
                                var payload;
                                if (typeof token === 'string') {
                                    payload = {
                                        provider: 'jwt',
                                        payload: token,
                                    };
                                }
                                else {
                                    payload = token;
                                }
                                _this.send('authentication', payload, {}, function (response) { return __awaiter(_this, void 0, void 0, function () {
                                    var code, _a, _b, err_1, err_2;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                if (response.payload === 'ACCEPTED') {
                                                    return [2 /*return*/, resolve()];
                                                }
                                                if (!(response.type === 'BARRIER_RESPONSE' && response.payload === 'HAS_BARRIER')) return [3 /*break*/, 10];
                                                _c.label = 1;
                                            case 1:
                                                _c.trys.push([1, 9, , 10]);
                                                this.ws.close();
                                                delete this.ws;
                                                code = null;
                                                _c.label = 2;
                                            case 2:
                                                _c.trys.push([2, 4, , 5]);
                                                _a = parseInt;
                                                return [4 /*yield*/, this.codeFetcher()];
                                            case 3:
                                                code = _a.apply(void 0, [_c.sent(), 36]);
                                                return [3 /*break*/, 5];
                                            case 4:
                                                err_1 = _c.sent();
                                                return [3 /*break*/, 5];
                                            case 5:
                                                if (!code) return [3 /*break*/, 7];
                                                return [4 /*yield*/, this.connectToPort(code)];
                                            case 6:
                                                _c.sent();
                                                return [2 /*return*/, resolve()];
                                            case 7: return [2 /*return*/, reject(new FetchCodeError_1.default('Failed to get code from user'))];
                                            case 8: return [3 /*break*/, 10];
                                            case 9:
                                                err_2 = _c.sent();
                                                return [2 /*return*/, reject(err_2)];
                                            case 10:
                                                reject();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConstructibleClient.prototype.connectToPort = function (port) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var controller = _this._lastConnect;
            _this.ws = new WebSocket(_this.wsPath + ":" + port);
            var opened = false;
            _this.ws.onopen = function () { return __awaiter(_this, void 0, void 0, function () {
                var err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            opened = true;
                            this.parentClient.emit('authenticating');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.authenticateWs()];
                        case 2:
                            _a.sent();
                            this.parentClient.emit('authenticated');
                            resolve();
                            return [3 /*break*/, 4];
                        case 3:
                            err_3 = _a.sent();
                            if (err_3 instanceof FetchCodeError_1.default) {
                                controller.stop = true;
                            }
                            reject(err_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            _this.ws.onmessage = function (event) {
                var message = JSON.parse(event.data);
                if (!message.requestID) {
                    if (message.transactionID) {
                        _this.emit("transaction-" + message.transactionID, message);
                    }
                    return;
                }
                _this.emit("response-" + message.requestID, message);
            };
            _this.ws.onerror = function (event) {
                if (!opened) {
                    return reject();
                }
                _this.emit('error', event);
            };
            _this.ws.onclose = function (event) {
                if (!opened) {
                    return reject();
                }
                _this.parentClient.emit('close', event);
            };
        });
    };
    ConstructibleClient.prototype.connect = function (portsOverride) {
        return __awaiter(this, void 0, void 0, function () {
            var connected, resolver, rejecter, currentConnector, controller, _i, _a, port, err_4, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        connected = false;
                        if (!this._lastConnect) return [3 /*break*/, 3];
                        if (!(this._lastConnect.ports === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._lastConnect.awaiter];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        this._lastConnect.stop = true;
                        _b.label = 3;
                    case 3:
                        currentConnector = new Promise(function (resolve, reject) {
                            resolver = resolve;
                            rejecter = reject;
                        });
                        controller = { stop: false, awaiter: currentConnector, ports: 0 };
                        this._lastConnect = controller;
                        _i = 0, _a = portsOverride || this.PORTS;
                        _b.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 10];
                        port = _a[_i];
                        if (controller.stop) {
                            throw new ConnectionLifecycleError_1.default('Instructed to stop by connection lifecycle');
                        }
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.connectToPort(port)];
                    case 6:
                        _b.sent();
                        connected = true;
                        if (controller.stop) {
                            this.ws.close();
                            connected = false;
                        }
                        return [3 /*break*/, 10];
                    case 7:
                        err_4 = _b.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        controller.ports++;
                        _b.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 4];
                    case 10:
                        this.emit('connect-attempt-done');
                        this.parentClient.emit('connect-attempt-done');
                        delete this._lastConnect;
                        if (!connected) {
                            err = new Error('Failed to connect on any of the ADC ports');
                            rejecter(err);
                            throw err;
                        }
                        resolver();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConstructibleClient.prototype.disconnect = function () {
        if (this.ws) {
            this.ws.close();
        }
    };
    ConstructibleClient.prototype.isConnected = function () {
        return this.ws.readyState === this.ws.OPEN;
    };
    ConstructibleClient.prototype.startTransaction = function (type, resumeTransactionID) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transaction = new Transaction_1.default(this, type || 'null', resumeTransactionID);
                        return [4 /*yield*/, new Promise(function (resolve) { return transaction.on('ready', function () { return resolve(); }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, transaction];
                }
            });
        });
    };
    ConstructibleClient.prototype.send = function (type, payload, topLevelProps, cb) {
        if (typeof topLevelProps === 'function') {
            cb = topLevelProps;
            topLevelProps = {};
        }
        if (typeof cb !== 'function') {
            cb = function () { return null; };
        }
        if (!this.isConnected()) {
            throw new Error('Failed to send message, not connected');
        }
        this.ws.send(JSON.stringify(Object.assign({}, topLevelProps, {
            type: type,
            payload: payload,
            requestID: this.requestID,
        })));
        if (cb) {
            this.onResponse(this.requestID, cb);
        }
        this.requestID++;
    };
    ConstructibleClient.prototype.onResponse = function (requestID, cb) {
        this.on("response-" + requestID, cb);
    };
    return ConstructibleClient;
}(Emitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConstructibleClient;

},{"./ConnectionLifecycleError":1,"./FetchCodeError":3,"./Transaction":4,"events":8}],3:[function(require,module,exports){
"use strict";
var FetchCodeError = (function () {
    function FetchCodeError(message) {
        this.message = message;
    }
    return FetchCodeError;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FetchCodeError;

},{}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require("events");
var Transaction = (function (_super) {
    __extends(Transaction, _super);
    function Transaction(client, type, transactionID) {
        var _this = _super.call(this) || this;
        _this.client = client;
        _this.type = type;
        if (transactionID) {
            _this.id = transactionID;
        }
        _this.initialize();
        return _this;
    }
    Transaction.prototype.initialize = function () {
        var _this = this;
        this.client.send((this.getID() ? 'resume' : 'new') + "-transaction", { transactionType: this.type, transactionID: this.getID() }, function (_a) {
            var payload = _a.payload;
            _this.id = payload;
            _this.client.on("transaction-" + _this.getID(), function (message) {
                if (message.type === 'event') {
                    if (message.responseID) {
                        _this.emit(message.eventName, message.payload, function (response) {
                            _this.sendResponse(message.eventName, response, message.responseID, function () { return null; });
                        });
                    }
                    else {
                        _this.emit(message.eventName, message.payload);
                    }
                }
            });
            _this.emit('ready');
        });
    };
    Transaction.prototype.getID = function () {
        return this.id;
    };
    Transaction.prototype.send = function (type, payload, cb) {
        this.client.send(type, payload, { transactionID: this.getID() }, cb);
    };
    Transaction.prototype.sendResponse = function (type, payload, responseID, cb) {
        this.client.send(type, payload, { transactionID: this.getID(), responseID: responseID }, cb);
    };
    return Transaction;
}(events_1.EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Transaction;

},{"events":8}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require("events");
var LIST_APPS = 'list-apps';
var LAUNCH_FILE_IN_APP = 'launch-file-in-app';
var CANCEL_FILE_LAUNCH = 'cancel-launch-file-in-app';
var LaunchedFile = (function (_super) {
    __extends(LaunchedFile, _super);
    function LaunchedFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LaunchedFile;
}(events_1.EventEmitter));
exports.cancelFileLaunch = function (transaction, file) {
    if (file.fileID) {
        transaction.send(CANCEL_FILE_LAUNCH, {
            fileID: file.fileID,
        });
    }
    else {
        file.on('file-download-start', function () { return exports.cancelFileLaunch(transaction, file); });
    }
};
exports.getAppsList = function (transaction, mimeType, extension) {
    return new Promise(function (resolve) {
        transaction.send(LIST_APPS, {
            mimeType: mimeType,
            extension: extension,
        }, function (response) {
            resolve(response.payload);
        });
    });
};
exports.launchFileInApp = function (transaction, remoteURL, fileName, applicationID, submitChangesURL, autoUpload) {
    if (autoUpload === void 0) { autoUpload = true; }
    var file = new LaunchedFile();
    transaction.send(LAUNCH_FILE_IN_APP, {
        fileURL: remoteURL,
        applicationID: applicationID,
        fileName: fileName,
        submitChangesURL: submitChangesURL,
        autoUpload: autoUpload
    }, function (response) {
        file.emit('new-version', response.payload);
    });
    transaction.on('file-download-start', function (fileID) {
        file.fileID = fileID;
        file.emit('file-download-start');
    });
    transaction.on('file-download-progress', function (progress) { return file.emit('file-download-progress', progress); });
    transaction.on('file-downloaded', function () { return file.emit('file-downloaded'); });
    transaction.on('file-upload-start', function () { return file.emit('file-upload-start'); });
    transaction.on('file-upload-progress', function (progress) { return file.emit('file-upload-progress', progress); });
    transaction.on('file-uploaded', function (newFileInfo) { return file.emit('file-uploaded', newFileInfo); });
    transaction.on('file-deleted', function () { return file.emit('file-deleted'); });
    transaction.on('file-change-detected', function (fileID) { return file.emit('file-change-detected', fileID); });
    transaction.on('file-direct-upload-start', function (context) { return file.emit('file-direct-upload-start', context); });
    transaction.on('file-direct-upload-progress', function (context) { return file.emit('file-direct-upload-progress', context); });
    transaction.on('file-direct-upload-end', function (context) { return file.emit('file-direct-upload-end', context); });
    transaction.on('file-direct-upload-close', function (context) { return file.emit('file-direct-upload-close', context); });
    transaction.on('file-direct-upload-error', function (context) { return file.emit('file-direct-upload-error', context); });
    transaction.on('cancel-upload-file-in-app-start', function (context) { return file.emit('cancel-upload-file-in-app-start', context); });
    transaction.on('cancel-upload-file-in-app-cancel-in-progress', function (fileID) { return file.emit('cancel-upload-file-in-app-cancel-in-progress', fileID); });
    transaction.on('cancel-upload-file-in-app-end', function (context) { return file.emit('cancel-upload-file-in-app-end', context); });
    transaction.on('cancel-upload-file-in-app-no-active-upload', function (context) { return file.emit('cancel-upload-file-in-app-no-active-upload', context); });
    transaction.on('cancel-upload-file-in-app-error', function (context) { return file.emit('cancel-upload-file-in-app-error', context); });
    return file;
};

},{"events":8}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Emitter = require("events");
var ConnectionLifecycleError_1 = require("./ConnectionLifecycleError");
var ConstructibleClient_1 = require("./ConstructibleClient");
var FetchCodeError_1 = require("./FetchCodeError");
var DIRECT_TECHNIQUE = 'direct';
var DIRECT_PATH = 'ws://127.0.0.1';
var DIRECT_PORTS = [
    31459
];
var ADCClient = (function (_super) {
    __extends(ADCClient, _super);
    function ADCClient(asapFetcher, codeFetcher) {
        var _this = _super.call(this) || this;
        _this.activeClient = null;
        _this.directClient = new ConstructibleClient_1.default(DIRECT_PATH, DIRECT_PORTS, asapFetcher, codeFetcher, _this);
        return _this;
    }
    ADCClient.prototype.connect = function (portsOverride) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isConnected()) {
                            return [2 /*return*/];
                        }
                        this.activeClient = this.directClient;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.activeClient.connect(portsOverride)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        throw new FetchCodeError_1.default('Unable to connect directly to Companion');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ADCClient.prototype.disconnect = function () {
        if (this.isConnected()) {
            this.activeClient.disconnect();
        }
    };
    ADCClient.prototype.isConnected = function () {
        return this.activeClient && this.activeClient.isConnected();
    };
    ADCClient.prototype.startTransaction = function (type, resumeTransactionID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.isConnected()) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, this.activeClient.startTransaction(type, resumeTransactionID)];
            });
        });
    };
    ADCClient.prototype.send = function (type, payload, topLevelProps, cb) {
        if (!this.isConnected()) {
            return;
        }
        return this.activeClient.send(type, payload, topLevelProps, cb);
    };
    return ADCClient;
}(Emitter));
ADCClient.TRANSACTION_TYPES = {
    FILE: 'file',
    NULL: 'null',
};
ADCClient.ConnectionLifecycleError = ConnectionLifecycleError_1.default;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ADCClient;

},{"./ConnectionLifecycleError":1,"./ConstructibleClient":2,"./FetchCodeError":3,"events":8}],7:[function(require,module,exports){
"use strict";
var client_1 = require("./client");
exports.ADCClient = client_1.default;
var apps_1 = require("./apps");
exports.cancelFileLaunch = apps_1.cancelFileLaunch;
exports.getAppsList = apps_1.getAppsList;
exports.launchFileInApp = apps_1.launchFileInApp;

},{"./apps":5,"./client":6}],8:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}]},{},[7])(7)
});
}catch(e){WRMCB(e)};