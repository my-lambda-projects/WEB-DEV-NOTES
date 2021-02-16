WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:mediaviewer-core', location = '/mediaviewer/lib/mediaviewer.all.js' */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        function build(project) {
            return root.MediaViewer = factory(project);
        }
        define('MediaViewer', build);
        build();
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('MediaViewer'));
    } else {
        root.MediaViewer = factory(root.MediaViewer);
    }
}(this || window, function (project) {
    var MediaViewer = /******/
    function (modules) {
        // webpackBootstrap
        /******/
        // install a JSONP callback for chunk loading
        /******/
        var parentJsonpFunction = window['webpackJsonpMediaViewer'];
        /******/
        window['webpackJsonpMediaViewer'] = function webpackJsonpCallback(chunkIds, moreModules) {
            /******/
            // add "moreModules" to the modules object,
            /******/
            // then flag all "chunkIds" as loaded and fire callback
            /******/
            var moduleId, chunkId, i = 0, callbacks = [];
            /******/
            for (; i < chunkIds.length; i++) {
                /******/
                chunkId = chunkIds[i];
                /******/
                if (installedChunks[chunkId])
                    /******/
                    callbacks.push.apply(callbacks, installedChunks[chunkId]);
                /******/
                installedChunks[chunkId] = 0;    /******/
            }
            /******/
            for (moduleId in moreModules) {
                /******/
                if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                    /******/
                    modules[moduleId] = moreModules[moduleId];    /******/
                }    /******/
            }
            /******/
            if (parentJsonpFunction)
                parentJsonpFunction(chunkIds, moreModules);
            /******/
            while (callbacks.length)
                /******/
                callbacks.shift().call(null, __webpack_require__);    /******/
                                                                      /******/
        };
        /******/
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // object to store loaded and loading chunks
        /******/
        // "0" means "already loaded"
        /******/
        // Array means "loading", array contains callbacks
        /******/
        var installedChunks = {
            /******/
            0: 0    /******/
        };
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;
            /******/
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false    /******/
            };
            /******/
            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/
            // Flag the module as loaded
            /******/
            module.loaded = true;
            /******/
            /******/
            // Return the exports of the module
            /******/
            return module.exports;    /******/
        }
        /******/
        /******/
        // This file contains only the entry chunk.
        /******/
        // The chunk loading function for additional chunks
        /******/
        __webpack_require__.e = function requireEnsure(chunkId, callback) {
            /******/
            // "0" is the signal for "already loaded"
            /******/
            if (installedChunks[chunkId] === 0)
                /******/
                return callback.call(null, __webpack_require__);
            /******/
            /******/
            // an array means "currently loading".
            /******/
            if (installedChunks[chunkId] !== undefined) {
                /******/
                installedChunks[chunkId].push(callback);    /******/
            } else {
                /******/
                // start chunk loading
                /******/
                installedChunks[chunkId] = [callback];
                /******/
                var head = document.getElementsByTagName('head')[0];
                /******/
                var script = document.createElement('script');
                /******/
                script.type = 'text/javascript';
                /******/
                script.charset = 'utf-8';
                /******/
                script.async = true;
                /******/
                /******/
                script.src = __webpack_require__.p + 'mediaviewer-' + chunkId + '.js';
                /******/
                head.appendChild(script);    /******/
            }    /******/
        };
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = '';
        /******/
        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(0);    /******/
    }([
        function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(2);    /***/
        },
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(15),
                __webpack_require__(6),
                __webpack_require__(4),
                __webpack_require__(7),
                __webpack_require__(8),
                __webpack_require__(88),
                __webpack_require__(19),
                __webpack_require__(20),
                __webpack_require__(89),
                __webpack_require__(23),
                __webpack_require__(90),
                __webpack_require__(3),
                __webpack_require__(91),
                __webpack_require__(98),
                __webpack_require__(118),
                __webpack_require__(133),
                __webpack_require__(150),
                __webpack_require__(155),
                __webpack_require__(157),
                __webpack_require__(14)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, _, Backbone, assert, ConstantsDictionary, MainView, FileState, Files, File, ViewerRegistry, fileTypes, defaultConfig, Storage, imageViewProvider, pdfViewProvider, videoViewProvider, threeDViewProvider, unknownFileTypeViewProvider, Analytics, djb2, translator) {
                'use strict';
                /**
	   * Core API to integrate MediaViewer into a project.
	   *
	   * @class
	   * @alias MediaViewer
	   * @param {Object} config
	   * @throws {Error} if config is invalid
	   */
                var MediaViewer = function (config) {
                    config = _.defaults(config || {}, defaultConfig);
                    config.appendTo = config.appendTo || $('body');
                    MediaViewer._instanceCount += 1;
                    config.instanceId = MediaViewer._instanceCount;
                    if (true) {
                        // noinspection JSUnresolvedVariable,JSAnnotator,JSUndeclaredVariable
                        __webpack_require__.p = config.assets.basePath;    // eslint-disable-line
                    }
                    translator.setDictionary(config.i18n);
                    this._config = config;
                    this._properties = new Backbone.Model();
                    this._fileState = new FileState();
                    this._viewerRegistry = new ViewerRegistry();
                    this._analytics = new Analytics(config.analyticsBackend, this, djb2, 'files.fileviewer-web', MediaViewer.VERSION);
                    if (config.viewers.indexOf('image') !== -1) {
                        this._viewerRegistry.register(fileTypes.isImageBrowserSupported, imageViewProvider, 0);
                    }
                    if (config.viewers.indexOf('document') !== -1) {
                        this._viewerRegistry.register(fileTypes.isPDF, pdfViewProvider, 0);
                    }
                    if (config.viewers.indexOf('video') !== -1) {
                        this._viewerRegistry.register(fileTypes.isMultimediaBrowserSupported, videoViewProvider, 0);
                    }
                    if (config.viewers.indexOf('3d') !== -1) {
                        this._viewerRegistry.register(fileTypes.is3D, threeDViewProvider, 0);
                    }
                    // set fallback viewer
                    this._viewerRegistry.register(fileTypes.matchAll, unknownFileTypeViewProvider, 100);
                    this._files = new Files(config.files || [], { service: config.commentService });
                    this._fileState.setCollection(this._files);
                    this._view = new MainView({
                        model: new Backbone.Model({
                            mediaViewer: this,
                            instanceId: config.instanceId,
                            contained: config.contained,
                            embedded: config.embedded
                        })
                    });
                    this._isOpen = false;
                    this._storage = new Storage(this.getConfig().customStorage, 'mediaViewer.');
                    MediaViewer._plugins.list().map(function (definition) {
                        return definition.value;
                    }).forEach(function (plugin) {
                        plugin(this);
                    }, this);
                };
                // internal nondecreasing counter
                MediaViewer._instanceCount = 0;
                // privately expose available modules for debugging purposes
                // _modules is defined support/require.js
                /* eslint-disable no-undef */
                // FIXME get modules from Webpack's require
                // MediaViewer._modules = _modules;
                /* eslint-enable no-undef*/
                // keeps track of registered plugins
                MediaViewer._plugins = new ConstantsDictionary();
                /**
	   * Current version of this build.
	   *
	   * @type {String}
	   */
                MediaViewer.VERSION = '2.4.5';
                // replaced during build
                /**
	   * Register a new plugin for use with MediaViewer.
	   *
	   * @param {String} name
	   * @param {Function} plugin
	   * @throws {Error} if plugin is invalid or name already exists.
	   */
                MediaViewer.registerPlugin = function (name, plugin) {
                    assert(this.isPlugin(plugin), 'is a plugin');
                    this._plugins.define(name, plugin);
                };
                /**
	   * Returns if a plugin is enabled for use with MediaViewer.
	   *
	   * @param {String} name
	   */
                MediaViewer.isPluginEnabled = function (name) {
                    return this._plugins.isDefined(name);
                };
                /**
	   * Gets a plugin registered for use with MediaViewer.
	   *
	   * @param {String} name
	   * @throws {Error} if plugin is invalid or name does not already exists.
	   */
                MediaViewer.getPlugin = function (name) {
                    return this._plugins.lookup(name);
                };
                /**
	   * Checks if the given object is a valid plugin.
	   *
	   * @param {*} potentialPlugin
	   * @returns {Boolean}
	   */
                MediaViewer.isPlugin = function (potentialPlugin) {
                    return _.isFunction(potentialPlugin);
                };
                MediaViewer.require = function (moduleName) {
                    // Use webpack context to allow to require only those modules
                    // they are going to be a part of a main chunk/entry point
                    // only files that have one dot or no dots in their names are allowed
                    var r = __webpack_require__(158);
                    return r('./' + moduleName + '.js');
                };
                /**
	   * Support .on(), .off() and .trigger().
	   */
                _.extend(MediaViewer.prototype, Backbone.Events);
                /**
	   * Instance of the analytics module, use this to send analytics from your plugins.
	   */
                Object.defineProperty(MediaViewer.prototype, 'analytics', {
                    get: function () {
                        return this._analytics;
                    }
                });
                /**
	   * The instance of MediaViewer was opened.
	   *
	   * @event MediaViewer~'fv.open'
	   */
                /**
	   * Open this instance of MediaViewer by appending it to the configured element. This needs to be called
	   * before showing a file.
	   *
	   * When a fileQuery object is passed in, this file is shown and a special analytics event is triggered.
	   * When you want to record, where this interaction is comming from, pass in
	   * an additional analyticsSource
	   *
	   * @param {Object} [fileQuery]
	   * @param {String} [analyticsSource]
	   * @fires {MediaViewer~'fv.open'}
	   */
                MediaViewer.prototype.open = function (fileQuery, analyticsSource) {
                    this._view.render().show().$el.appendTo(this._config.appendTo);
                    this._view.delegateEvents();
                    this._isOpen = true;
                    this.trigger('fv.open');
                    var result = new $.Deferred();
                    var analytics = this.analytics;
                    if (fileQuery) {
                        this.showFileWithQuery(fileQuery).always(function () {
                            analytics.send('opened', { source: analyticsSource });
                            result.resolve();
                        });
                    } else {
                        result.resolve();
                    }
                    return result.promise();
                };
                /**
	   * The instance of MediaViewer was closed.
	   *
	   * @event MediaViewer~'fv.close'
	   */
                /**
	   * Shut down this instance of MediaViewer by removing it from the configured element. Reset current file.
	   *
	   * @fires {MediaViewer~'fv.close'}
	   */
                MediaViewer.prototype.close = function () {
                    this._view._currentFile = null;
                    this._view.undelegateEvents();
                    this._view.hide().$el.remove();
                    this._isOpen = false;
                    this.trigger('fv.close');
                };
                /**
	   * Check if MediaViewer is currently open.
	   *
	   * @returns {Boolean}
	   */
                MediaViewer.prototype.isOpen = function () {
                    return this._isOpen;
                };
                /**
	   * The current file was changed and is about to be shown.
	   *
	   * @event MediaViewer~'fv.changeFile'
	   */
                /**
	   * The current file has been rendered successfully.
	   *
	   * @event MediaViewer~'fv.showFile'
	   */
                /**
	   * The current file has **not** been rendered successfully.
	   *
	   * @event MediaViewer~'fv.showFileError'
	   */
                /**
	   * Show file that matches the given attribute query.
	   *
	   * A query is basically a set of values for certain keys that you want to match on. To match the file with id='a'
	   * and src='test'.
	   *
	   *     {
	   *     id: 'a',
	   *     src: 'test'
	   *     }
	   *
	   * @param {Object} query
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   */
                MediaViewer.prototype.showFileWithQuery = function (query) {
                    this._fileState.setCurrentWithQuery(query);
                    var file = this._fileState.getCurrent();
                    return this._showFile(file);
                };
                /**
	   * Show the next file in the collection.
	   *
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   */
                MediaViewer.prototype.showFileNext = function () {
                    if (this.isShowingLastFile() && !this.getConfig().enableListLoop) {
                        return $.when();
                    }
                    this._fileState.setNext();
                    return this._showFile(this._fileState.getCurrent());
                };
                /**
	   * Show the previous file in the collection.
	   *
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   */
                MediaViewer.prototype.showFilePrev = function () {
                    if (this.isShowingFirstFile() && !this.getConfig().enableListLoop) {
                        return $.when();
                    }
                    this._fileState.setPrev();
                    return this._showFile(this._fileState.getCurrent());
                };
                /**
	   * MediaViewer#setFiles() was called.
	   * @event MediaViewer~'fv.setFiles'
	   */
                /**
	   * Set both the list of files as well as the current file.
	   *
	   * Ensures that the updated current file is shown if the viewer is open. Viewer caching might prevent a full
	   * re-render.
	   *
	   * If no query is given or the query doesn't match a file in the collection, the current file is set to `null`,
	   * causing an error message to be shown if the viewer is open.
	   *
	   * @param {Array.<Object>} newFiles
	   * @param {Object} [nextFileQuery=null]
	   * @fires {MediaViewer~'fv.setFiles'}
	   */
                MediaViewer.prototype.setFiles = function (newFiles, nextFileQuery) {
                    var prevSelectedFile = this._fileState.getCurrent();
                    this._files.reset(newFiles);
                    this._fileState.setCurrentWithQuery(nextFileQuery);
                    this.trigger('fv.setFiles');
                    if (this.isOpen()) {
                        var currentFile = this._fileState.getCurrent();
                        var sameSelectedFile = prevSelectedFile && currentFile && prevSelectedFile.id === currentFile.id;
                        this._showFile(this._fileState.getCurrent(), sameSelectedFile);
                    }
                };
                /**
	   * Returns the file being shown in this viewer.
	   *
	   * @returns {Object} the file being shown
	   */
                MediaViewer.prototype.getCurrent = function () {
                    var currentFile = this._view.getCurrentFile();
                    return currentFile && currentFile.toJSON();
                };
                /**
	   * Returns the file being shown in this viewer as a backbone model.
	   *
	   * **Note**: This method is deprecated, because it exposes a backbone model. See #getCurrent() instead.
	   *
	   * @returns {File} the file being shown
	   * @deprecated
	   */
                MediaViewer.prototype.getCurrentFile = function () {
                    // eslint-disable-next-line no-console
                    console.warn('MediaViewer: #getCurrentFile() is deprecated use #getCurrent() instead.');
                    return this._view.getCurrentFile();
                };
                /**
	   * Returns the current files collection.
	   *
	   * @returns {Array.<Object>}
	   */
                MediaViewer.prototype.getFiles = function () {
                    return this._files.toJSON();
                };
                /**
	   * Check if current file is the first one in the files collection.
	   *
	   * @returns {Boolean}
	   */
                MediaViewer.prototype.isShowingFirstFile = function () {
                    return this._fileState.attributes.currentFileIndex === 0;
                };
                /**
	   * Check if current file is the last one in the files collection.
	   *
	   * @returns {Boolean}
	   */
                MediaViewer.prototype.isShowingLastFile = function () {
                    return this._fileState.collection.length === this._fileState.attributes.currentFileIndex + 1;
                };
                /**
	   * The view mode was changed.
	   *
	   * @event MediaViewer~'fv.changeMode'
	   */
                /**
	   * Change current view mode to the given mode.
	   *
	   * @param {String} mode - either 'BASE', 'PRESENTATION' or 'CONTAINED'
	   * @fires {MediaViewer~'fv.changeMode'}
	   */
                MediaViewer.prototype.changeMode = function (mode) {
                    this._view.setupMode(mode);
                    this.trigger('fv.changeMode', mode);
                };
                /**
	   * Return the current mode.
	   *
	   * @returns {String}
	   */
                MediaViewer.prototype.getMode = function () {
                    return this._view.getMode();
                };
                /**
	   * Check if MediaViewer is in the given mode.
	   *
	   * @param {String} mode - either 'BASE', 'PRESENTATION' or 'CONTAINED'
	   * @returns {Boolean}
	   */
                MediaViewer.prototype.isInMode = function (mode) {
                    return this._view.isInMode(mode);
                };
                /**
	   * A file action was called.
	   *
	   * @callback MediaViewer~fileActionCallback
	   * @param {File} file
	   */
                function generateCustomMenuName(name) {
                    return 'custommenu.' + name;
                }
                /**
	   * Add a file action to the viewer.
	   *
	   * Actions can be registered asynchronously, and are reset when the user navigates to a new file.
	   *
	   * Commonly, a plugin will listen to the change file event and register a file action
	   * conditionally for the displayed file. If a file action shares a key with a file
	   * action that currently exists, addFileAction will replace the old action with the
	   * new action.
	   *
	   * @param {Object} opts
	   * @param {String} opts.key - a unique identifier for the file action
	   * @param {String} opts.text - the text display in the menu item
	   * @param {MediaViewer~fileActionCallback} opts.callback - a callback to be called when the menu item is selected
	   * @throws Error if config is invalid or if no file is currently being viewed
	   */
                MediaViewer.prototype.addFileAction = function (opts) {
                    assert(opts.key, 'has key');
                    assert(opts.text, 'has text');
                    assert(opts.callback, 'has a callback');
                    var moreMenuName = opts.menu ? generateCustomMenuName(opts.menu) : 'moreButton';
                    this._view.fileControlsView.getLayerForName(moreMenuName).addFileAction(opts);
                };
                /**
	   * Remove a file action from the viewer based on the key sent in the parameter.
	   *
	   * @param {Object} opts
	   * @param {String} opts.key - a unique identifier for the file action you want to remove
	   * @throws {Error} if no key is provided or if no file is currently being viewed
	   */
                MediaViewer.prototype.removeFileAction = function (opts) {
                    assert(opts.key, 'has key');
                    var moreMenuName = opts.menu ? generateCustomMenuName(opts.menu) : 'moreButton';
                    this._view.fileControlsView.getLayerForName(moreMenuName).removeFileAction(opts);
                };
                /**
	   * Adds a new dropdown menu to the viewer
	   *
	   * @param {Object} opts
	   * @param {String} opts.name - a unique identifier for the menu you want to add
	   * @throws {Error} if no name is provided or if no file is currently being viewed
	   */
                MediaViewer.prototype.addCustomMoreMenu = function (opts) {
                    assert(opts.name, 'has name');
                    var moreMenuName = generateCustomMenuName(opts.name);
                    this._view.addCustomMoreMenu(moreMenuName);
                    if (opts.actions) {
                        for (var i = 0; i < opts.actions.length; i++) {
                            this.addFileAction(_.extend({}, opts.actions[i], { menu: opts.name }));
                        }
                    }
                    return this._view.fileControlsView.getLayerForName(moreMenuName);
                };
                /**
	   * Check if the MediaViewer supports native rendering of a given content type.
	   *
	   * @param {String} contentType the content type to check if supported
	   * @returns {Boolean}
	   */
                MediaViewer.prototype.supports = function (contentType) {
                    var previewer = this._viewerRegistry.get(contentType);
                    return previewer && previewer !== unknownFileTypeViewProvider;
                };
                /**
	   * Allows non-core code to get and set their own values on an instance of MediaViewer.
	   *
	   * @param {String} key
	   * @param {*} value
	   */
                MediaViewer.prototype.set = function (key, value) {
                    this._properties.set(key, value);
                };
                /**
	   * Access plugin level properties.
	   *
	   * @param {String} key
	   * @returns {*}
	   */
                MediaViewer.prototype.get = function (key) {
                    return this._properties.get(key);
                };
                /**
	   * Returns the specified config.
	   *
	   * @returns {Object}
	   */
                MediaViewer.prototype.getConfig = function () {
                    return this._config;
                };
                /**
	   * Returns the central view of MediaViewer.
	   *
	   * @returns {MainView}
	   */
                MediaViewer.prototype.getView = function () {
                    return this._view;
                };
                /**
	   * Returns key-value storage of MediaViewer.
	   *
	   * @returns {Object}
	   */
                MediaViewer.prototype.getStorage = function () {
                    return this._storage;
                };
                /**
	   * **DEPRECATED** Show the given file.
	   *
	   * **Carefull**: This method doesn't set the current file from the collection and thus allows to set a file that
	   * is not in the files array, thus causing buggy behaviour with next/prev file.
	   *
	   * Use #showFileWithQuery() instead.
	   *
	   * @param {File} file
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   * @deprecated
	   */
                MediaViewer.prototype.showFile = function (file) {
                    // eslint-disable-next-line no-console
                    console.warn('MediaViewer: #showFile() is deprecated use #showFileWithQuery() instead.');
                    return this._showFile(file);
                };
                /**
	   * **DEPRECATED** Show the file matching the given backbone object id.
	   *
	   * Use #showFileWithQuery() instead.
	   *
	   * @param {String} cid
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   * @deprecated
	   */
                MediaViewer.prototype.showFileWithCID = function (cid) {
                    // eslint-disable-next-line no-console
                    console.warn('MediaViewer: #showFileWithCID() is deprecated use #showFileWithQuery() instead.');
                    this._fileState.setCurrentWithCID(cid);
                    return this.showFile(this._fileState.getCurrent());
                };
                /**
	   * **DEPRECATED** Show the file matching the given id.
	   *
	   * Use #showFileWithQuery() instead.
	   *
	   * @param {String} id
	   * @param {String} [ownerId]
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   * @deprecated
	   */
                MediaViewer.prototype.showFileWithId = function (id, ownerId) {
                    // eslint-disable-next-line no-console
                    console.warn('MediaViewer: #showFileWithId() is deprecated and will be removed soon.');
                    var fileQuery = { id: id };
                    if (ownerId) {
                        fileQuery.ownerId = ownerId;
                    }
                    return this.showFileWithQuery(fileQuery);
                };
                /**
	   * **DEPRECATED** Show file with matching src.
	   *
	   * Use #showFileWithQuery() instead.
	   *
	   * @param {String} src
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   * @deprecated
	   */
                MediaViewer.prototype.showFileWithSrc = function (src) {
                    // eslint-disable-next-line no-console
                    console.warn('MediaViewer: #showFileWithSrc() is deprecated use #showFileWithQuery() instead.');
                    var fileQuery = { src: src };
                    return this.showFileWithQuery(fileQuery);
                };
                /**
	   * **DEPRECATED** Show the first file matching the given selector. If selector is falsy, the first file in the
	   * collection is shown.
	   *
	   * Use #showFileWithQuery() instead.
	   *
	   * @param {Object} selector
	   * @returns {Promise.<File>}
	   * @fires {MediaViewer~'fv.changeFile'}
	   * @fires {MediaViewer~'fv.showFile'}
	   * @fires {MediaViewer~'fv.showFileError'}
	   * @deprecated
	   */
                MediaViewer.prototype.showFileWhere = function (selector) {
                    // eslint-disable-next-line no-console
                    console.warn('MediaViewer: #showFileWhere() is deprecated use #showFileWithQuery() instead.');
                    this._fileState.selectWhere(selector);
                    return this.showFile(this._fileState.getCurrent());
                };
                /**
	   * **DEPRECATED** Maps a file to some value which is used for strict equality checks (`===`).
	   *
	   * @callback MediaViewer~updateFilesMapFn
	   * @param {Object} file
	   * @returns {*}
	   * @deprecated
	   */
                /**
	   * **DEPRECATED** MediaViewer#updateFiles() was called.
	   *
	   * @event MediaViewer~'fv.updateFiles'
	   * @deprecated
	   */
                /**
	   * **DEPRECATED** Update the files collection without updating the view state.
	   *
	   * **Carefull**: A call to `updateFiles()` neither changes the file currently shown nor causes a re-rendering. This
	   * can cause state and view to get out of sync and is likely to introduce bugs. Therefore, this method should no
	   * longer be used. See MediaViewer#setFiles() instead.
	   *
	   * This method operates in two modes based on it's input.
	   *
	   * When invoked with nothing but `files`, the existing file collection is simply replaced with the new one.
	   *
	   * When an optional `mapFn` function is given, the behaviour changes drastically. Each file in the given `files`
	   * array is compared with the already existing ones using `mapFn`.
	   *
	   * - If a file existed before, but isn't matched by a new file, it won't be updated, but stays in the collection.
	   * - If a file existed before and is matched by a new file, it is updated and stays in the collection.
	   * - If a file didn't exist before, it is appended to the collection
	   *
	   * @param {Array.<Object>} files
	   * @param {MediaViewer~updateFilesMapFn} [mapFn]
	   * @returns {Array.<Object>}
	   * @fires {MediaViewer~'fv.updateFiles'}
	   * @deprecated
	   */
                MediaViewer.prototype.updateFiles = function (files, mapFn) {
                    // eslint-disable-next-line no-console
                    console.warn('MediaViewer: #updateFiles() is deprecated use #setFiles() instead.');
                    if (!(mapFn && _.isFunction(mapFn))) {
                        this._files.reset(files);
                    } else {
                        var newModels = _.chain(files).map(function (file) {
                            var matchedModel = this._files.find(function (collectionModel) {
                                return mapFn(collectionModel.toJSON()) === mapFn(file);
                            });
                            if (matchedModel) {
                                matchedModel.set(file);
                            } else {
                                return new File(file);
                            }
                        }.bind(this)).compact().value();
                        this._files.add(newModels, { silent: true });
                        this._files.trigger('reset', this._files);
                    }
                    this.trigger('fv.updateFiles');
                    return this._files.toJSON();
                };
                // shows the given backbone file model, triggers an event and returns a promise
                // @todo should resolve with a json description of the passed-in file
                MediaViewer.prototype._showFile = function (file, preventChangeEvent) {
                    assert(this._isOpen, 'MediaViewer is open');
                    var triggerEvent = function (event) {
                        return function () {
                            this.trigger(event, file);
                        }.bind(this);
                    }.bind(this);
                    if (preventChangeEvent !== true) {
                        this.trigger('fv.changeFile', file);
                    }
                    return this._view.showFile(file).done(triggerEvent('fv.showFile')).fail(triggerEvent('fv.showFileError'));
                };
                return MediaViewer;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (assert) {
                'use strict';
                /**
	   * Universal key-value store using localStorage or
	   * optionally a `customStorage` object can be passed in.
	   * @constructor
	   * @param {Object} customStorage - Object with setItem, getItem, removeItem methods.
	   * @param {Function} customStorage.setItem - Custom set method
	   * @param {Function} customStorage.getItem - Custom get method
	   * @param {Function} customStorage.removeItem - Custom remove method
	   * @param {String} namespace - Namespace to prefix storage keys with
	   */
                var Storage = function (customStorage, namespace) {
                    this._namespace = namespace || '';
                    this._storage = this._getStorage(customStorage);
                };
                /**
	   * Return corresponding value to given key.
	   * - can store arbitrary json structs for certain values
	   *   (not any value, functions won't work for example)
	   * - for better performance, try to have more keys and less structs
	   *   (cause big structs are slow)
	   * @param  {String} key
	   * @return {*}
	   */
                Storage.prototype.getItem = function (key) {
                    var storageValue;
                    key = this._namespace + key.toString();
                    storageValue = new StorageValue();
                    storageValue.fromJSON(this._storage.getItem(key));
                    if (storageValue.isExpired()) {
                        this._storage.removeItem(key);
                        return;
                    }
                    return storageValue.value;
                };
                /**
	   * Store given value for with given key.
	   * @param {String} key
	   * @param {*}    value
	   * @param {Number} expiry - Expire n milliseconds from now
	   */
                Storage.prototype.setItem = function (key, value, expiry) {
                    key = this._namespace + key.toString();
                    this._storage.setItem(key, new StorageValue(value, expiry).toJSON());
                };
                /**
	   * Remove storage entry for key.
	   * @param {String} key
	   */
                Storage.prototype.removeItem = function (key) {
                    key = this._namespace + key.toString();
                    this._storage.removeItem(key);
                };
                // Check if window.localStorage is available.
                Storage.prototype._hasLocalStorage = function () {
                    var test = this._namespace + 'hasLocalStorage';
                    try {
                        localStorage.setItem(test, test);
                        localStorage.removeItem(test);
                        return true;
                    } catch (e) {
                        return false;
                    }
                };
                // Return the proper storage object.
                Storage.prototype._getStorage = function (customStorage) {
                    if (customStorage) {
                        assert(typeof customStorage.setItem === 'function', 'Storage custom.setItem is a function');
                        assert(typeof customStorage.getItem === 'function', 'Storage custom.getItem is a function');
                        assert(typeof customStorage.removeItem === 'function', 'Storage custom.removeItem is a function');
                        return customStorage;
                    } else if (this._hasLocalStorage()) {
                        return Storage.localStorage;
                    }
                    return Storage.noStorage;
                };
                Storage.noStorage = {
                    setItem: function () {
                    },
                    getItem: function () {
                    },
                    removeItem: function () {
                    }
                };
                Storage.localStorage = {
                    setItem: function (key, value) {
                        window.localStorage.setItem(key, value);
                    },
                    getItem: function (key) {
                        return window.localStorage.getItem(key);
                    },
                    removeItem: function (key) {
                        window.localStorage.removeItem(key);
                    }
                };
                /**
	   * StorageValue
	   * @param {*}    value
	   * @param {Number} expiry - Expire n milliseconds from now
	   */
                var StorageValue = Storage.StorageValue = function (value, expiry) {
                    this.value = value;
                    this._setExpiry(expiry);
                };
                StorageValue.prototype._setExpiry = function (expiry) {
                    if (parseInt(expiry)) {
                        this.expiry = Date.now() + expiry;
                    } else {
                        this.expiry = null;
                    }
                };
                /**
	   * Checks if the expiry time is in the past
	   * @return {Boolean}
	   */
                StorageValue.prototype.isExpired = function () {
                    return this.expiry && Date.now() > this.expiry;
                };
                /**
	   * Sets StorageValue properties from a JSON string.
	   * @param  {String} stringifiedJson
	   */
                StorageValue.prototype.fromJSON = function (stringifiedJson) {
                    var json;
                    stringifiedJson = stringifiedJson || '{}';
                    json = JSON.parse(stringifiedJson);
                    this.value = json.value;
                    this.expiry = json.expiry;
                };
                /**
	   * Return JSON string
	   * @return {String}
	   */
                StorageValue.prototype.toJSON = function () {
                    return JSON.stringify({
                        value: this.value,
                        expiry: this.expiry || undefined
                    });
                };
                return Storage;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                /**
	   * Throws an error if given predicate is falsy.
	   *
	   * @param {*} predicate
	   * @param {string} description Used for the error message.
	   */
                var assert = function (predicate, description) {
                    description = description || 'untruthy value';
                    if (!predicate) {
                        throw new Error('Assertion failed: ' + description);
                    }
                };
                return assert;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /* globals jQuery */
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return jQuery;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /* globals Backbone */
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return Backbone;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (assert) {
                'use strict';
                /**
	   * A constants dictionary is a dictionary where you can only define a
	   * given name once.
	   */
                var ConstantsDictionary = function () {
                    this._valuesByName = {};
                    this._names = [];
                };
                /**
	   * Define a name with the given value.
	   * @param {string} name The name that is being defined.
	   * @param {*} value Any value, even undefined.
	   * @throws Error if name is already defined.
	   */
                ConstantsDictionary.prototype.define = function (name, value) {
                    assert(!this.isDefined(name), 'name is unique');
                    this._valuesByName[name] = value;
                    this._names.push(name);
                };
                /**
	   * Lookup a name with the given value.
	   * @param {string} name The name to lookup.
	   * @throws Error if name is not yet defined.
	   */
                ConstantsDictionary.prototype.lookup = function (name) {
                    assert(this.isDefined(name), 'name is defined');
                    return this._valuesByName[name];
                };
                /**
	   * Check if a name is defined.
	   * @param {string} name The name to check.
	   * @return {boolean}
	   */
                ConstantsDictionary.prototype.isDefined = function (name) {
                    return name in this._valuesByName;
                };
                /**
	   * Lists all definitions in the order they were defined. Returns an array of objects
	   * with name and value properties.
	   * @return {Array}
	   */
                ConstantsDictionary.prototype.list = function () {
                    return this._names.map(function (name) {
                        return {
                            name: name,
                            value: this._valuesByName[name]
                        };
                    }, this);
                };
                return ConstantsDictionary;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(9);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(13),
                __webpack_require__(15),
                __webpack_require__(5),
                __webpack_require__(16),
                __webpack_require__(19),
                __webpack_require__(20),
                __webpack_require__(21),
                __webpack_require__(58),
                __webpack_require__(64),
                __webpack_require__(66),
                __webpack_require__(68),
                __webpack_require__(71),
                __webpack_require__(87),
                __webpack_require__(72),
                __webpack_require__(74),
                __webpack_require__(75),
                __webpack_require__(77),
                __webpack_require__(79),
                __webpack_require__(80),
                __webpack_require__(81),
                __webpack_require__(76),
                __webpack_require__(82),
                __webpack_require__(83),
                __webpack_require__(84),
                __webpack_require__(85),
                __webpack_require__(86)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (View, _, $, FocusManagerFactory, Files, File, TitleView, DownloadButton, CloseButton, createMoreButton, ViewerLayer, PanelContainerView, LayerContainerView, ErrorLayer, WaitingLayer, PasswordLayer, ArrowLayer, ToolbarLayer, SpinnerLayer, tpl, keyboard, analyticEvents, BaseMode, PresentationMode, ContainedMode, Commands) {
                'use strict';
                var rejectWithError = function (msg) {
                    return new $.Deferred().reject(new Error(msg)).promise();
                };
                /**
	     * Core view of MediaViewer.
	     * @constructor
	     * @param {Object} params
	     */
                var MainView = View.extend({
                    attributes: function () {
                        return {
                            'id': 'cp-container-' + this.model.get('instanceId'),
                            'class': 'cp-container',
                            'data-embedded': this.model.get('embedded'),
                            'data-contained': this.model.get('contained'),
                            'role': 'dialog',
                            'aria-labelledby': 'cp-title-container-id-' + this.model.get('instanceId')
                        };
                    },
                    initialize: function (params) {
                        View.prototype.initialize.apply(this, arguments);
                        var options = _.extend({}, params);
                        this._mediaViewer = options.model.get('mediaViewer');
                        this._currentFile = null;
                        this._viewState = null;
                        this._focusManager = new FocusManagerFactory(this.$el).create(this.model.get('embedded') || this.model.get('contained'));
                        this.fileTitleView = new PanelContainerView({
                            mediaViewer: this._mediaViewer,
                            id: 'cp-title-container-id-' + this.model.get('instanceId'),
                            className: 'cp-title-container cp-header-item'
                        });
                        this.fileControlsView = new LayerContainerView({
                            mediaViewer: this._mediaViewer,
                            className: 'cp-file-controls cp-header-item'
                        });
                        this.fileMetaView = new LayerContainerView({
                            mediaViewer: this._mediaViewer,
                            className: 'cp-meta'
                        });
                        this.fileSinkView = new PanelContainerView({
                            className: 'cp-sink',
                            collection: this._mediaViewer._fileState.collection,
                            mediaViewer: this._mediaViewer
                        });
                        this.fileSidebarView = new PanelContainerView({
                            className: 'cp-sidebar',
                            mediaViewer: this._mediaViewer,
                            collection: this._mediaViewer._fileState.collection
                        });
                        this.fileContentView = new LayerContainerView({
                            className: 'cp-file-body',
                            mediaViewer: this._mediaViewer
                        });
                        this.fileTitleView.addPanelView('title', TitleView);
                        this.fileControlsView.addLayerView('downloadButton', DownloadButton, {
                            weight: 10,
                            predicate: DownloadButton.isDownloadable
                        });
                        this.fileControlsView.addLayerView('moreButton', createMoreButton());
                        this.fileControlsView.addLayerView('closeButton', CloseButton);
                        this.fileContentView.addLayerView('content', ViewerLayer);
                        this.fileContentView.addLayerView('error', ErrorLayer);
                        this.fileContentView.addLayerView('password', PasswordLayer);
                        this.fileContentView.addLayerView('toolbar', ToolbarLayer);
                        this.fileContentView.addLayerView('waiting', WaitingLayer);
                        this.fileContentView.addLayerView('spinner', SpinnerLayer);
                        this.fileContentView.addLayerView('arrows', ArrowLayer);
                        this.listenTo(this.fileSidebarView, 'togglePanel', this._updateContentWidth);
                        this.listenTo(this.fileSinkView, 'togglePanel', this._updateContentHeight);
                        this._navigationKeyLockCount = 0;
                        this._showFileChain = $.when();
                        this._mode = this.model.get('contained') ? 'CONTAINED' : 'BASE';
                        this._modes = {
                            'BASE': new BaseMode(this),
                            'PRESENTATION': new PresentationMode(this),
                            'CONTAINED': new ContainedMode(this)
                        };
                    },
                    addCustomMoreMenu: function (name) {
                        this.fileControlsView.addLayerView(name, createMoreButton());
                        this.fileControlsView.initializeLayerSubset([name]);
                    },
                    /**
	       * Show.
	       * @return {MainView} this
	       */
                    show: function () {
                        this.$el.show();
                        $(this._mediaViewer._config.appendTo).addClass('no-scroll');
                        this.listen($(document), 'keydown.disableDefaultKeys', this._disableKeyboardShortcuts.bind(this));
                        this.listen($(document), 'keydown.navKeys', keyboard.createConditionalKeyHandler(this._handleNavigationKeys.bind(this)));
                        return this;
                    },
                    teardown: function () {
                        View.prototype.teardown.apply(this, arguments);
                        this._teardownModes();
                    },
                    _teardownModes: function () {
                        var self = this;
                        Object.keys(this._modes).forEach(function (mode) {
                            self._modes[mode].teardown();
                        });
                    },
                    /**
	       * Hide.
	       * @return {MainView} this
	       */
                    hide: function () {
                        this.$el.hide();
                        $(this._mediaViewer._config.appendTo).removeClass('no-scroll');
                        this.teardown();
                        this._teardownAll();
                        return this;
                    },
                    /**
	       * Render.
	       * @return {MainView} this
	       */
                    render: function () {
                        this.$el.empty().append(tpl.default(View.translate).fileView);
                        this.$header = this.$('.cp-header');
                        this.$body = this.$('.cp-body');
                        this.$footer = this.$('.cp-footer');
                        this.$title = this.fileTitleView.render().$el.appendTo(this.$header);
                        this.$controls = this.fileControlsView.render().$el.appendTo(this.$header);
                        this.$content = this.fileContentView.render().$el.appendTo(this.$body);
                        this.$sidebar = this.fileSidebarView.render().$el.appendTo(this.$body);
                        this.$meta = this.fileMetaView.render().$el.appendTo(this.$footer);
                        this.$sink = this.fileSinkView.render().$el.appendTo(this.$footer);
                        this.listen($('a[href="#"]', this.$el), 'click', function (e) {
                            e.preventDefault();
                        });
                        this._focusManager.trapFocus();
                        return this;
                    },
                    /**
	       * MainView is starting to show the content of a new file.
	       *
	       * If the file src and type didn't change, this event won't be triggered.
	       * If the file doesn't exist, this evemt won't be triggered as well.
	       *
	       * @event MainView~'fv.fileChange'
	       */
                    /**
	       * Internal event to allow people to stop what they are doing when
	       * the user already switched to the next file.
	       *
	       * @event MainView~'cancelShow'
	       */
                    /**
	       * Show the given file. If one of the following conditions is true
	       *
	       *   1. file is invalid
	       *   2. no viewer for that fileType is registered
	       *   3. the viewer code can't be loaded
	       *   4. the viewer couldn't be created
	       *
	       * then the returned promise is rejected. In that case, fileView changes
	       * state and displays the error internally.
	       *
	       * When the new file and the current file have the same src and type attributes,
	       * this method will not perform a re-rendering.
	       *
	       * @param {File} file
	       * @return {Promise.<File>} the given file
	       * @fires {MainView~'fv.fileChange'}
	       * @fires {MainView~'cancelShow'}
	       */
                    showFile: function (file) {
                        var needsToRerenderContent = !this.fileContentView.isLayerInitialized('content') || MainView._needsToRerenderContent(this._currentFile, file);
                        if (MainView._filesWillRenderTheSame(this._currentFile, file)) {
                            return MainView._skipRenderingOf(file);
                        }
                        var contentView, toolbarView, spinnerView, waitingView, errorView;
                        var fetchTokenCommand = new Commands.FetchToken(file, this._mediaViewer.getConfig().fetchToken);
                        var lookupViewerCommand = new Commands.LookupViewer(file, this._mediaViewer._viewerRegistry, View.translate);
                        // allow people to shut down themselves
                        this.trigger('cancelShow');
                        var fileViewed = new $.Deferred();
                        this._showFileChain.pipe(function () {
                            var fileHandled = new $.Deferred();
                            var p = $.when();
                            p = p.pipe(function validateFile() {
                                this._currentFile = file;
                                this._convertedFile = new File();
                                this._viewState = null;
                                var validationResult = file;
                                if (file) {
                                    if (needsToRerenderContent) {
                                        this.trigger('fv.fileChange', file);
                                        this._reinitializeAllSubviews();
                                    } else {
                                        this._reinitializeNonContentSubviews();
                                    }
                                    contentView = this.fileContentView.getLayerForName('content');
                                    toolbarView = this.fileContentView.getLayerForName('toolbar');
                                    spinnerView = this.fileContentView.getLayerForName('spinner');
                                    waitingView = this.fileContentView.getLayerForName('waiting');
                                } else {
                                    this._viewState = 'fileNotFound';
                                    this._reinitializeCoreSubviews();
                                    validationResult = rejectWithError(View.translate('cp.error.file.not.found'));
                                }
                                errorView = this.fileContentView.getLayerForName('error');
                                this._deactivateModeHook();
                                this._activateModeHook();
                                if (this && this._mediaViewer && this._mediaViewer.lastFocusId) {
                                    $('#' + this._mediaViewer.lastFocusId).focus();
                                }
                                return validationResult;
                            }.bind(this));
                            if (needsToRerenderContent) {
                                p = p.pipe(function () {
                                    return fetchTokenCommand.execute(fetchTokenCommand).fail(function (err) {
                                        this._viewState = 'fetchTokenError';
                                        return new $.Deferred().reject(err).promise();
                                    }.bind(this));
                                }.bind(this));
                                p = p.pipe(function getConverted(file) {
                                    var isPreviewGenerated = this._mediaViewer.getConfig().isPreviewGenerated;
                                    var generatePreview = this._mediaViewer.getConfig().generatePreview;
                                    spinnerView.startSpin();
                                    if (this._mediaViewer.supports(file.get('type'))) {
                                        return $.when(file.get('src'), file.get('type'));
                                    }
                                    if (!(isPreviewGenerated && generatePreview)) {
                                        return $.when(file.get('src'), file.get('type'));
                                    }
                                    return isPreviewGenerated(file).pipe(function (isGenerated, source, type, overwrites) {
                                        if (isGenerated) {
                                            return $.when(source, type, overwrites);
                                        }
                                        spinnerView.stopSpin();
                                        waitingView.showMessage(file, View.translate('cp.file.converting.message.header'), View.translate('cp.file.converting.message.text'));
                                        return generatePreview(file).always(function () {
                                            waitingView.clearMessage();
                                            spinnerView.startSpin();
                                        });
                                    });
                                }.bind(this)).pipe(lookupViewerCommand.execute.bind(lookupViewerCommand)).pipe(function createViewer(Viewer, previewSrc, convertedFile) {
                                    // To fix MSW-470 with minimal risk we decided to avoid changing as much as possible
                                    // how internal state in MV is managed by introducing a new internal property _convertedFile
                                    // instead of mutating _originalFile.
                                    // Unlike _originalFile, _convertedFile will expose the latest attributes (after conversion)
                                    // for the current file being displayed.
                                    this._convertedFile.set(convertedFile.attributes);
                                    var readyDeferred = new $.Deferred();
                                    var view = new Viewer({
                                        previewSrc: previewSrc,
                                        model: new File(convertedFile.toJSON()),
                                        mediaViewer: this._mediaViewer
                                    });
                                    view.once('viewerReady', function () {
                                        if (!this._mediaViewer.isOpen()) {
                                            readyDeferred.reject('cancelled');
                                            return;
                                        }
                                        this._viewState = 'success';
                                        toolbarView.setViewer(view);
                                        this.setupMode(this._mode);
                                        readyDeferred.resolve(file);
                                    }.bind(this));
                                    view.once('resourceTiming', function (measurement) {
                                        analyticEvents.sendResourceTiming(this._mediaViewer.analytics, measurement);
                                    }.bind(this));
                                    view.once('viewerFail', function (err) {
                                        if (!this._mediaViewer.isOpen()) {
                                            readyDeferred.reject('cancelled');
                                            return;
                                        }
                                        this._viewState = 'viewerError';
                                        readyDeferred.reject(err);
                                        this.setupMode(this._mode);
                                    }.bind(this));
                                    contentView.attachViewer(view);
                                    view.render();
                                    return readyDeferred.promise();
                                }.bind(this)).always(function () {
                                    spinnerView && spinnerView.stopSpin();
                                    waitingView && waitingView.clearMessage();
                                }.bind(this)).fail(function (err) {
                                    fileViewed.reject(err);
                                    if (err !== 'cancelled') {
                                        errorView.showErrorMessage(err, file);
                                    }
                                }.bind(this));
                            }
                            p.done(function () {
                                fileViewed.resolve(file);
                            }).always(function () {
                                fileHandled.resolve();
                            }.bind(this));
                            return fileHandled.promise();
                        }.bind(this));
                        return fileViewed.promise();
                    },
                    /**
	       * Return the currently shown file.
	       * @returns {null|File} the file being shown
	       */
                    getCurrentFile: function () {
                        return this._currentFile;
                    },
                    getConvertedFile: function () {
                        return this._convertedFile;
                    },
                    /**
	       * Return the current view state.
	       * Can be any of the following
	       * loading, fileNotFound, fetchTokenError, viewerError, success
	       * @returns {String}
	       */
                    getViewState: function () {
                        return this._viewState || 'loading';
                    },
                    _reinitializeAllSubviews: function () {
                        if (!this.fileTitleView.isAnyPanelInitialized()) {
                            this.fileTitleView.initializePanel();
                        }
                        this.fileTitleView.reinitializePanel();
                        this.fileControlsView.reinitializeLayers();
                        this.fileContentView.reinitializeLayers();
                        this.fileSidebarView.reinitializePanel();
                        this.fileMetaView.reinitializeLayers();
                        this.fileSinkView.reinitializePanel();
                        this._updateMetaBannerHeight();
                    },
                    _reinitializeNonContentSubviews: function () {
                        if (!this.fileTitleView.isAnyPanelInitialized()) {
                            this.fileTitleView.initializePanel();
                        }
                        this.fileTitleView.reinitializePanel();
                        this.fileControlsView.reinitializeLayers();
                        this.fileSidebarView.reinitializePanel();
                        this.fileMetaView.reinitializeLayers();
                        this.fileSinkView.reinitializePanel();
                        this._updateMetaBannerHeight();
                    },
                    _reinitializeCoreSubviews: function () {
                        this._teardownAll();
                        this.fileControlsView.initializeLayerSubset(['closeButton']);
                        this.fileContentView.initializeLayerSubset([
                            'arrows',
                            'error'
                        ]);
                    },
                    _teardownAll: function () {
                        this.fileTitleView.teardownPanel();
                        this.fileSidebarView.teardownPanel();
                        this.fileSinkView.teardownPanel();
                        this.fileMetaView.teardownLayers();
                        this.fileControlsView.teardownLayers();
                        this.fileContentView.teardownLayers();
                        this._focusManager.releaseFocus();
                    },
                    _handleNavigationKeys: function (e) {
                        var numFiles = this._mediaViewer._files.length;
                        var usedModifierKey = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || false;
                        if (e.which === keyboard.keys.ESCAPE && !this.isNavigationLocked()) {
                            e.preventDefault();
                            this._mediaViewer.analytics.send('closed', { actionType: 'hotkey' });
                            this._mediaViewer.close();
                        } else if (!usedModifierKey && !this.isNavigationLocked() && numFiles > 1 && e.which === keyboard.keys.ARROW_RIGHT) {
                            e.preventDefault();
                            this._mediaViewer.showFileNext().always(this._mediaViewer.analytics.fn('next', {
                                actionType: 'hotkey',
                                mode: this._mediaViewer.getMode()
                            }));
                        } else if (!usedModifierKey && !this.isNavigationLocked() && numFiles > 1 && e.which === keyboard.keys.ARROW_LEFT) {
                            e.preventDefault();
                            this._mediaViewer.showFilePrev().always(this._mediaViewer.analytics.fn('prev', {
                                actionType: 'hotkey',
                                mode: this._mediaViewer.getMode()
                            }));
                        }
                    },
                    /**
	       * Lock navigation keys. Navigation keys will be disabled until all
	       * locks are removed again with unlockNavigationKeys.
	       */
                    lockNavigationKeys: function () {
                        this._navigationKeyLockCount += 1;
                    },
                    /**
	       * Unlock navigation keys.
	       */
                    unlockNavigationKeys: function () {
                        if (this._navigationKeyLockCount >= 1) {
                            this._navigationKeyLockCount -= 1;
                        }
                    },
                    /**
	       * Checks if the navigation is locked.
	       */
                    isNavigationLocked: function () {
                        return this._navigationKeyLockCount !== 0;
                    },
                    _disableKeyboardShortcuts: function (e) {
                        if ((e.ctrlKey || e.metaKey) && !(this._mediaViewer.getConfig().embedded || this._mediaViewer.getConfig().contained)) {
                            switch (e.which) {
                            case keyboard.keys.F:
                            case keyboard.keys.G:
                                // disable search keyboard shortcut
                                e.preventDefault();
                                break;
                            case keyboard.keys.P:
                                // disable print keyboard shortcut
                                e.preventDefault();
                                break;
                            }
                        }
                    },
                    _onClickToBackground: function (e) {
                        // @TODO: Remove after cleaning modes setup, hooks etc.
                        var mode = this._mediaViewer._view._modes[this._mediaViewer._view._mode];
                        if (mode.disableClickBackgroundCloses) {
                            return;
                        }
                        var backgroundLayers = [
                            'cp-error-layer',
                            'cp-waiting-layer',
                            'cp-password-layer'
                        ];
                        if (backgroundLayers.indexOf(e.target.className) >= 0) {
                            this._mediaViewer.analytics.send('closed', { actionType: 'element' });
                            this._mediaViewer.close();
                        }
                    },
                    _updateContentWidth: function (panelId, isExpanded) {
                        this.$content && this.$content.toggleClass('narrow', isExpanded);
                        this._resizeActiveViewer();
                    },
                    _updateContentHeight: function (panelId, isExpanded) {
                        this.$content && this.$content.toggleClass('short', isExpanded);
                        this.$sidebar && this.$sidebar.toggleClass('short', isExpanded);
                        this._resizeActiveViewer();
                    },
                    _updateMetaBannerHeight: function () {
                        var hasMetaBar = this.fileMetaView.isLayerInitialized('metabar');
                        var hasMiniModeToggle = this.fileMetaView.isLayerInitialized('minimodeToggle');
                        this.fileContentView.$el.toggleClass('meta-minimode-toggle', hasMiniModeToggle);
                        this.fileSidebarView.$el.toggleClass('meta-minimode-toggle', hasMiniModeToggle);
                        this.fileContentView.$el.toggleClass('meta-infobar', hasMetaBar);
                        this.fileSidebarView.$el.toggleClass('meta-infobar', hasMetaBar);
                    },
                    _resizeActiveViewer: function () {
                        if (this.fileContentView.isLayerInitialized('content')) {
                            var contentView = this.fileContentView.getLayerForName('content');
                            var viewer = contentView.getAttachedViewer();
                            if (viewer) {
                                viewer.handleResize();
                                this._mediaViewer.trigger('fv.changeScale');
                            }
                        }
                    },
                    /**
	       * Return the current mode.
	       * @returns {string}
	       */
                    getMode: function () {
                        return this._mode || '';
                    },
                    /**
	       * Check if FileView is in the given mode.
	       * @param {string} mode either 'BASE', 'PRESENTATION' or 'CONTAINED'
	       * @returns {boolean}
	       */
                    isInMode: function (mode) {
                        return this._mode === mode;
                    },
                    /**
	       * Change current view mode to the given mode.
	       * @param {string} mode either 'BASE', 'PRESENTATION' or 'CONTAINED'
	       */
                    setupMode: function (mode) {
                        var toolbar = this.fileContentView.getLayerForName('toolbar');
                        var viewer = toolbar._viewer;
                        var $arrowLayer = this.fileContentView.getLayerForName('arrows').$el;
                        var lastMode = this._mode;
                        var isModeChanged = lastMode !== mode;
                        var modeObj = this._modes[mode];
                        var lastModeObj = this._modes[lastMode];
                        lastModeObj.teardown(viewer, isModeChanged);
                        modeObj.setup(viewer);
                        this._mode = mode;
                        // update arrow layer
                        $arrowLayer.toggle(modeObj.showsArrowLayer);
                        // update toolbar actions
                        toolbar.setActions(modeObj.toolbarActions);
                        toolbar.render();
                        // notify viewer
                        if (viewer && viewer.setupMode) {
                            viewer.setupMode(mode, isModeChanged);
                        }
                    },
                    _activateModeHook: function () {
                        var mode = this._modes[this._mode];
                        if (mode.activateHook) {
                            mode.activateHook();
                        }
                    },
                    _deactivateModeHook: function () {
                        var mode = this._modes[this._mode];
                        if (mode.deactivateHook) {
                            mode.deactivateHook();
                        }
                    },
                    updatePaginationButtons: function () {
                        if (this.isInMode('PRESENTATION')) {
                            var toolbar = this.fileContentView.getLayerForName('toolbar');
                            if (!toolbar._viewer) {
                                return;
                            }
                            var $toolbarPrevPage = toolbar.$el.find('.cp-toolbar-prev-page');
                            var $toolbarNextPage = toolbar.$el.find('.cp-toolbar-next-page');
                            $toolbarPrevPage.toggleClass('inactive', false);
                            $toolbarNextPage.toggleClass('inactive', false);
                            if (!toolbar._viewer.hasPreviousPage()) {
                                $toolbarPrevPage.toggleClass('inactive', true);
                            } else if (!toolbar._viewer.hasNextPage()) {
                                $toolbarNextPage.toggleClass('inactive', true);
                            }
                        }
                    }
                });
                MainView._filesWillRenderTheSame = function (fileA, fileB) {
                    if (!fileA || !fileB) {
                        return false;
                    }
                    return _.isEqual(fileA.attributes, fileB.attributes);
                };
                MainView._needsToRerenderContent = function (fileA, fileB) {
                    if (!fileA || !fileB) {
                        return true;
                    }
                    var didTypeChange = fileA.get('type') !== fileB.get('type');
                    var didSrcChange = fileA.get('src') !== fileB.get('src');
                    var didThumbChange = fileA.get('thumbnail') !== fileB.get('thumbnail');
                    return didTypeChange || didSrcChange || didThumbChange;
                };
                MainView._skipRenderingOf = function (file) {
                    return $.when(file);
                };
                return MainView;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            // style-loader: Adds some css to the DOM by adding a <style> tag
            // load the styles
            var content = __webpack_require__(10);
            if (typeof content === 'string')
                content = [[
                        module.id,
                        content,
                        ''
                    ]];
            // add the styles to the DOM
            var update = __webpack_require__(12)(content, {});
            if (content.locals)
                module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./main_view.less', function () {
                        var newContent = require('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./main_view.less');
                        if (typeof newContent === 'string')
                            newContent = [[
                                    module.id,
                                    newContent,
                                    ''
                                ]];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function () {
                    update();
                });
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(11)();
            // imports
            // module
            exports.push([
                module.id,
                '.tooltip {\n  text-indent: initial;\n  width: auto;\n  display: inline-block;\n  text-transform: none;\n  font-family: Arial, sans-serif;\n  font-size: 12px;\n  line-height: 20px;\n  border-radius: 3px;\n  background: rgba(51, 51, 51, 0.9);\n  color: #fff;\n  left: 50%;\n  white-space: nowrap;\n  margin-bottom: 15px;\n  opacity: 0;\n  padding: 5px 10px;\n  pointer-events: none;\n  position: absolute;\n  z-index: 999;\n  max-width: 200px;\n  -webkit-transition: all 0s 0.3s ease-out;\n  -moz-transition: all 0s 0.3s ease-out;\n  -ms-transition: all 0s 0.3s ease-out;\n  -o-transition: all 0s 0.3s ease-out;\n  transition: all 0s 0.3s ease-out;\n  /* This bridges the gap so you can mouse into the tooltip without it disappearing */\n  /* CSS Triangles */\n}\n.tooltip:before {\n  bottom: -20px;\n  content: " ";\n  display: block;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  width: 100%;\n}\n.tooltip:after {\n  border-left: solid transparent 4px;\n  border-right: solid transparent 4px;\n  content: " ";\n  height: 0;\n  left: 50%;\n  margin-left: -4px;\n  position: absolute;\n  width: 0;\n}\n.tooltip.tooltip-s {\n  bottom: 100%;\n  -webkit-transform: translateY(10px) translateX(-50%);\n  -moz-transform: translateY(10px) translateX(-50%);\n  -ms-transform: translateY(10px) translateX(-50%);\n  -o-transform: translateY(10px) translateX(-50%);\n  transform: translateY(10px) translateX(-50%);\n}\n.tooltip.tooltip-s:after {\n  border-top: solid rgba(51, 51, 51, 0.9) 4px;\n  bottom: -4px;\n}\n.tooltip.tooltip-n {\n  top: 100%;\n  -webkit-transform: translateY(0) translateX(-50%);\n  -moz-transform: translateY(0) translateX(-50%);\n  -ms-transform: translateY(0) translateX(-50%);\n  -o-transform: translateY(0) translateX(-50%);\n  transform: translateY(0) translateX(-50%);\n}\n.tooltip.tooltip-n:after {\n  border-bottom: solid rgba(51, 51, 51, 0.9) 4px;\n  top: -4px;\n}\n*:hover > .tooltip {\n  opacity: 1;\n  pointer-events: auto;\n}\n*:hover > .tooltip.tooltip-s {\n  -webkit-transform: translateY(0px) translateX(-50%);\n  -moz-transform: translateY(0px) translateX(-50%);\n  -ms-transform: translateY(0px) translateX(-50%);\n  -o-transform: translateY(0px) translateX(-50%);\n  transform: translateY(0px) translateX(-50%);\n}\n*:hover > .tooltip.tooltip-n {\n  -webkit-transform: translateY(10px) translateX(-50%);\n  -moz-transform: translateY(10px) translateX(-50%);\n  -ms-transform: translateY(10px) translateX(-50%);\n  -o-transform: translateY(10px) translateX(-50%);\n  transform: translateY(10px) translateX(-50%);\n}\n/*\n    Header\n */\n.cp-header {\n  position: relative;\n  z-index: 99;\n  background-color: #000000;\n  padding-left: 10px;\n}\n.cp-header.cp-header-group {\n  display: table;\n  box-sizing: border-box;\n  border-spacing: 0;\n  table-layout: fixed;\n  width: 100%;\n}\n.cp-header.cp-header-group .cp-header-item {\n  display: table-cell;\n  vertical-align: top;\n}\n.cp-header.cp-header-group > .cp-header-item {\n  margin: 0;\n  box-sizing: border-box;\n}\n.cp-title-container {\n  max-width: 70%;\n  display: block;\n  float: left;\n  height: 50px;\n}\n.cp-title-container div {\n  color: #fff;\n  line-height: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cp-title-container .cp-file-icon {\n  width: 45px;\n  height: 50px;\n  display: inline-block;\n  float: left;\n  background: no-repeat 10px center;\n}\n.cp-file-controls {\n  padding-left: 0;\n  text-align: right;\n  float: right;\n  max-width: 30%;\n  display: block;\n  height: 50px;\n}\n.cp-file-controls > span {\n  display: inline-block;\n}\n/*\n    Body\n */\n.cp-body {\n  height: 100%;\n  margin: 0;\n}\n.cp-error-message {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: middle;\n  min-width: 490px;\n  max-width: 640px;\n  padding: 35px 100px;\n  line-height: 2em;\n  border-radius: 5px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.cp-error-message .file-icon {\n  display: inline-block;\n  width: 96px;\n  height: 96px;\n  background: no-repeat center center;\n  background-size: contain;\n}\n.cp-error-message p {\n  margin: 10px 0;\n  color: #fff;\n  line-height: 1.4em;\n}\n.cp-error-message p.message {\n  margin: 10px 0 0 0;\n  word-wrap: break-word;\n}\n.cp-preview-password {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 35px 100px;\n  line-height: 2em;\n  border-radius: 5px;\n}\n.cp-preview-password .cp-password-lock-icon {\n  display: inline-block;\n  width: 96px;\n  height: 96px;\n  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4zLjEgKDEyMDA1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2NrZWQtaWNvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJsb2NrZWQtaWNvbiIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCwxMS41IEMyNS41LDExLjUgMjguNSwxMi40NDAwMDAyIDI4LjUsMTQuOTUwNzY5NCBMMjguNSwyMi41IEwxOS41LDIyLjUgTDE5LjUsMTQuOTUwNzY5NCBDMTkuNSwxMi40NDAwMDAyIDIyLjUsMTEuNSAyNCwxMS41IFogTTMxLjUsMTYuNSBDMzEuNSwxMS40NTM4NDYyIDI4LjUsOC41IDI0LDguNSBDMTkuMjI0MDAwNSw4LjUgMTYuNSwxMS40NTEzODQ2IDE2LjUsMTYuNSBMMTYuNSwyMi41IEMxNC4yOTIsMjIuNSAxMi41LDI0LjYxNTM4NTMgMTIuNSwyNi45NTYzMDg0IEwxMi41LDM4LjQ5NDcwMSBDMTIuNSwzOS4wNDk5MTIzIDEyLjkzODkxNzgsMzkuNSAxMy41MDMwNzA2LDM5LjUgTDM0LjQ5NjkyOTQsMzkuNSBDMzUuMDUwOTEsMzkuNSAzNS41LDM5LjA1MzU2MzQgMzUuNSwzOC40OTQ3MDEgTDM1LjUsMjYuOTU2MzA4NCBDMzUuNSwyNC42MTUzODUzIDMzLjcwOCwyMi41IDMxLjUsMjIuNSBMMzEuNSwxNi41IFoiIGlkPSJpMDEyMV9sb2NrZWQtMTYtY29weSIgc3Ryb2tlPSIjRkZGRkZGIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDQuMDA5ODkzMTggTDAsNDMuOTkwMTA2OCBDMCw0Ni4yMDQ3MDk3IDEuNzk0MDUyNDUsNDggNC4wMDk4OTMxOCw0OCBMNDMuOTkwMTA2OCw0OCBDNDYuMjA0NzA5Nyw0OCA0OCw0Ni4yMDU5NDc1IDQ4LDQzLjk5MDEwNjggTDQ4LDQuMDA5ODkzMTggQzQ4LDEuNzk1MjkwMzMgNDYuMjA1OTQ3NSwwIDQzLjk5MDEwNjgsMCBMNC4wMDk4OTMxOCwwIEMxLjc5NTI5MDMzLDAgMCwxLjc5NDA1MjQ1IDAsNC4wMDk4OTMxOCBaIE00My45OTAxMDY4LDAuOTc5MTY2NjY3IEM0NS42NTMxODc1LDAuOTc5MTY2NjY3IDQ3LDIuMzI3NDg2NTkgNDcsMy45OTE3ODYyIEw0Nyw0NC4wMDgyMTM4IEM0Nyw0NS42NzI4MDA5IDQ1LjY1MjkwMDMsNDcuMDIwODMzMyA0My45OTAxMDY4LDQ3LjAyMDgzMzMgTDQuMDA5ODkzMTgsNDcuMDIwODMzMyBDMi4zNDY4MTI0Nyw0Ny4wMjA4MzMzIDEsNDUuNjcyNTEzNCAxLDQ0LjAwODIxMzggTDEsMy45OTE3ODYyIEMxLDIuMzI3MTk5MDggMi4zNDcwOTk3MywwLjk3OTE2NjY2NyA0LjAwOTg5MzE4LDAuOTc5MTY2NjY3IEw0My45OTAxMDY4LDAuOTc5MTY2NjY3IFoiIGlkPSJpMDA0OV9maWxlLWdlbmVyaWMtNDgiIGZpbGw9IiNGRkZGRkYiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==") no-repeat center center;\n  background-size: contain;\n}\n.cp-preview-password p {\n  margin: 0;\n  color: #fff;\n}\n.cp-preview-password p.message {\n  line-height: 1.4em;\n  margin-top: 10px;\n}\n.cp-preview-password .cp-password-fullscreen {\n  display: none;\n}\n.cp-preview-password .cp-password-base .cp-password-input {\n  font-size: 14px;\n  text-align: left;\n  height: 28px;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  outline: none;\n  padding: 0 6px;\n  margin: 10px 10px 0 0;\n}\n.cp-preview-password .cp-password-base .cp-password-button:focus {\n  outline: none !important;\n}\n.cp-file-body .cp-baseline-extension {\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n}\n.cp-file-body.presentation {\n  background: #000;\n  top: 0 !important;\n  bottom: 0 !important;\n  right: 0 !important;\n  left: 0 !important;\n  height: 100% !important;\n  width: 100% !important;\n  z-index: 100;\n}\n.cp-container {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  background-color: rgba(51, 51, 51, 0.95);\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  /* CONFDEV-26487: z-index is greater than an AUI inline dialog, whose default is 100. */\n  z-index: 101;\n}\n.cp-container .hidden {\n  display: none;\n}\n.cp-container *[role=\'button\'] {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  /* webkit flicker fix */\n  -webkit-font-smoothing: antialiased;\n  /* webkit text rendering fix */\n}\n.cp-container .cp-icon {\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  height: 50px;\n  float: left;\n  text-align: left;\n  text-indent: -999em;\n  width: 50px;\n  border-radius: 0;\n}\n.cp-container a.cp-icon {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.cp-container a.cp-icon:hover {\n  background-color: #707070;\n}\n.cp-container a.cp-icon:focus {\n  outline: none;\n  background-color: #707070;\n}\n.cp-container button.cp-icon {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.cp-container button.cp-icon:hover {\n  background-color: #707070;\n}\n.cp-container button.cp-icon:focus {\n  outline: none;\n  background-color: #707070;\n}\n*[id^=\'cp-container-\'][data-embedded=\'true\'],\n*[id^=\'cp-container-\'][data-contained=\'true\'] {\n  position: relative;\n  background: none;\n  z-index: auto;\n}\n*[id^=\'cp-container-\'][data-embedded=\'true\'] .cp-body .cp-file-body,\n*[id^=\'cp-container-\'][data-contained=\'true\'] .cp-body .cp-file-body {\n  position: relative;\n  overflow: auto;\n  top: 0;\n}\n*[id^=\'cp-container-\'][data-embedded=\'true\'] .cp-footer,\n*[id^=\'cp-container-\'][data-contained=\'true\'] .cp-footer {\n  display: none;\n}\n*[id^=\'cp-container-\'][data-embedded=\'true\'] .cp-file-controls .fv-close-button,\n*[id^=\'cp-container-\'][data-contained=\'true\'] .cp-file-controls .fv-close-button {\n  display: none;\n}\n*[id^=\'cp-container-\'][data-contained=\'true\'] .cp-header {\n  display: none;\n}\n*[id^=\'cp-container-\'][data-contained=\'true\'] .cp-body .cp-file-body {\n  height: 100%;\n}\n.cp-small-icon {\n  background: no-repeat left center;\n  height: 20px;\n  float: left;\n  text-align: left;\n  text-indent: -999em;\n  width: 25px;\n}\n.cp-file-body {\n  bottom: 0;\n  box-sizing: border-box;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 50px;\n  vertical-align: middle;\n  height: calc(100% - 50px);\n}\n.cp-viewer-layer {\n  height: 100%;\n}\n.cp-file-body.narrow {\n  right: 350px;\n}\n.cp-file-body.short {\n  bottom: 160px;\n  /* to account for the thumbnail pane */\n  height: calc(100% - 210px);\n}\n.no-scroll {\n  overflow: hidden !important;\n}\n.cp-nav {\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent no-repeat center center;\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  margin-top: -50px;\n  width: 65px;\n  height: 100px;\n  text-indent: -999em;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: background-color 0.2s ease-in-out;\n  -moz-transition: background-color 0.2s ease-in-out;\n  -webkit-transition: background-color 0.2s ease-in-out;\n}\n.cp-nav:after {\n  content: \'\';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -0.25em;\n}\n.cp-nav:hover,\n.cp-nav:focus {\n  background-color: rgba(0, 0, 0, 0.8);\n  transition: background-color 0.1s ease-in-out;\n  -moz-transition: background-color 0.1s ease-in-out;\n  -webkit-transition: background-color 0.1s ease-in-out;\n}\n.cp-nav.disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.cp-nav.disabled:hover {\n  background-color: transparent;\n}\n.cp-nav-left {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  left: 0;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvcHJldmlvdXMtbGFyZ2U8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxwYXRoIGQ9Ik0xMCAyNC41MTR2LTEuMDI4TDI1LjMyMyA2Ljc0Yy4zNzQtLjQxLjk4NC0uNDI1IDEuMzczLS4wMjRsMS4xMDggMS4xNGMuMzg0LjM5NS4zOTMgMS4wMzguMDE2IDEuNDRMMTQgMjRsMTMuODIgMTQuNzA1Yy4zNzYuNC4zNzMgMS4wNC0uMDE2IDEuNDRsLTEuMTA4IDEuMTRjLS4zODQuMzk0LTEgLjM4LTEuMzczLS4wMjVMMTAgMjQuNTE0eiIgZmlsbD0iIzk5OSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");\n}\n.cp-nav-right {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  right: 0;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvbmV4dC1sYXJnZTwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PHBhdGggZD0iTTM4IDI0LjUxNHYtMS4wMjhMMjIuNjc3IDYuNzRjLS4zNzQtLjQxLS45ODQtLjQyNS0xLjM3My0uMDI0bC0xLjEwOCAxLjE0Yy0uMzg0LjM5NS0uMzkzIDEuMDM4LS4wMTYgMS40NEwzNCAyNCAyMC4xOCAzOC43MDVjLS4zNzYuNC0uMzczIDEuMDQuMDE2IDEuNDRsMS4xMDggMS4xNGMuMzg0LjM5NCAxIC4zOCAxLjM3My0uMDI1TDM4IDI0LjUxNHoiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");\n}\n.cp-error-layer,\n.cp-waiting-layer,\n.cp-password-layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n#inline-dialog-sharePreviewPopup {\n  z-index: 120;\n}\n.cp-share-dialog-spinner {\n  position: relative;\n  top: 12px;\n  left: 8px;\n}\n.cp-waiting-message {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 35px 100px;\n  line-height: 2em;\n  border-radius: 5px;\n}\n.cp-waiting-message .file-icon {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  background: no-repeat center center;\n  background-size: contain;\n}\n.cp-waiting-message p {\n  margin: 0;\n}\n/*\n    Sidebar\n */\n.cp-sidebar {\n  background-color: #fff;\n  height: calc(100% - 40px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  right: 0;\n  /* CONFDEV-30274: Delegate rendering of this element to the GPU to avoid painting issues in latest Chrome/Safari */\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.cp-sidebar.meta-infobar {\n  height: calc(100% - 100px);\n}\n.cp-sidebar.meta-minimode-toggle {\n  height: calc(100% - 90px);\n}\n.cp-sidebar.meta-minimode-toggle.short {\n  height: calc(100% - 250px);\n}\na.cp-button {\n  box-sizing: border-box;\n  background: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 3.01px;\n  color: #333;\n  cursor: pointer;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 14px;\n  font-variant: normal;\n  font-weight: 400;\n  height: 2.14285714em;\n  line-height: 1.42857143;\n  margin: 0;\n  padding: 4px 10px;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n  margin: 20px 10px 0 10px;\n}\na.cp-button:hover {\n  background: #e9e9e9;\n  border-color: #999;\n}\na.cp-button span.cp-button-icon {\n  background-position: 0 0;\n  border: none;\n  margin: 0;\n  padding: 0;\n  text-indent: -999em;\n  vertical-align: text-bottom;\n  display: inline-block;\n  text-align: left;\n  line-height: 0;\n  position: relative;\n  vertical-align: text-top;\n  height: 16px;\n  width: 16px;\n}\na.cp-button span.cp-button-icon.icon-download {\n  position: relative;\n  top: 3px;\n  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VW50aXRsZWQ8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxwYXRoIGQ9Ik0xIDEydi0xaDEwdjFIMXptNS4yLTNoLS4zOUwxIDQuMTZsMS4xMi0xLjEzTDUgNS45MlYxLjVDNS4wOS41IDUuNDUgMCA2IDBzLjg5LjM3IDEgMS41djQuNDFsMi45MS0yLjg1TDExIDQuMTYgNi4yIDl6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=") no-repeat 0 0;\n}\n/*\n    Footer\n */\n.cp-footer {\n  background-color: #000000;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n.cp-footer a {\n  color: #fff;\n  text-decoration: none;\n}\n.cp-file-body.meta-infobar {\n  bottom: 50px;\n  /* when no footer is present */\n  height: calc(100% - 100px);\n}\n.cp-file-body.meta-minimode-toggle {\n  bottom: 40px;\n  /* when no footer is present */\n  height: calc(100% - 90px);\n}\n.cp-file-body.meta-minimode-toggle.short {\n  bottom: 200px;\n  height: calc(100% - 250px);\n}\n.cp-sidebar.meta-minimode-toggle {\n  height: calc(100% - 90px);\n}\n.cp-sidebar.meta-minimode-toggle.short {\n  height: calc(100% - 250px);\n}\n',
                ''
            ]);    // exports
                   /***/
        },
        function (module, exports) {
            /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
            // css base code, injected by the css-loader
            module.exports = function () {
                var list = [];
                // return the list of modules as css string
                list.toString = function toString() {
                    var result = [];
                    for (var i = 0; i < this.length; i++) {
                        var item = this[i];
                        if (item[2]) {
                            result.push('@media ' + item[2] + '{' + item[1] + '}');
                        } else {
                            result.push(item[1]);
                        }
                    }
                    return result.join('');
                };
                // import a list of modules into the list
                list.i = function (modules, mediaQuery) {
                    if (typeof modules === 'string')
                        modules = [[
                                null,
                                modules,
                                ''
                            ]];
                    var alreadyImportedModules = {};
                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if (typeof id === 'number')
                            alreadyImportedModules[id] = true;
                    }
                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            } else if (mediaQuery) {
                                item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                            }
                            list.push(item);
                        }
                    }
                };
                return list;
            };    /***/
        },
        function (module, exports, __webpack_require__) {
            /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
            var stylesInDom = {}, memoize = function (fn) {
                    var memo;
                    return function () {
                        if (typeof memo === 'undefined')
                            memo = fn.apply(this, arguments);
                        return memo;
                    };
                }, isOldIE = memoize(function () {
                    return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
                }), getHeadElement = memoize(function () {
                    return document.head || document.getElementsByTagName('head')[0];
                }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [];
            module.exports = function (list, options) {
                if (false) {
                    if (typeof document !== 'object')
                        throw new Error('The style-loader cannot be used in a non-browser environment');
                }
                options = options || {};
                // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (typeof options.singleton === 'undefined')
                    options.singleton = isOldIE();
                // By default, add <style> tags to the bottom of <head>.
                if (typeof options.insertAt === 'undefined')
                    options.insertAt = 'bottom';
                var styles = listToStyles(list);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        domStyle.refs--;
                        mayRemove.push(domStyle);
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList);
                        addStylesToDom(newStyles, options);
                    }
                    for (var i = 0; i < mayRemove.length; i++) {
                        var domStyle = mayRemove[i];
                        if (domStyle.refs === 0) {
                            for (var j = 0; j < domStyle.parts.length; j++)
                                domStyle.parts[j]();
                            delete stylesInDom[domStyle.id];
                        }
                    }
                };
            };
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    if (domStyle) {
                        domStyle.refs++;
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    } else {
                        var parts = [];
                        for (var j = 0; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function listToStyles(list) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id])
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    else
                        newStyles[id].parts.push(part);
                }
                return styles;
            }
            function insertStyleElement(options, styleElement) {
                var head = getHeadElement();
                var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
                if (options.insertAt === 'top') {
                    if (!lastStyleElementInsertedAtTop) {
                        head.insertBefore(styleElement, head.firstChild);
                    } else if (lastStyleElementInsertedAtTop.nextSibling) {
                        head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
                    } else {
                        head.appendChild(styleElement);
                    }
                    styleElementsInsertedAtTop.push(styleElement);
                } else if (options.insertAt === 'bottom') {
                    head.appendChild(styleElement);
                } else {
                    throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
                }
            }
            function removeStyleElement(styleElement) {
                styleElement.parentNode.removeChild(styleElement);
                var idx = styleElementsInsertedAtTop.indexOf(styleElement);
                if (idx >= 0) {
                    styleElementsInsertedAtTop.splice(idx, 1);
                }
            }
            function createStyleElement(options) {
                var styleElement = document.createElement('style');
                styleElement.type = 'text/css';
                insertStyleElement(options, styleElement);
                return styleElement;
            }
            function createLinkElement(options) {
                var linkElement = document.createElement('link');
                linkElement.rel = 'stylesheet';
                insertStyleElement(options, linkElement);
                return linkElement;
            }
            function addStyle(obj, options) {
                var styleElement, update, remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    styleElement = singletonElement || (singletonElement = createStyleElement(options));
                    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
                } else if (obj.sourceMap && typeof URL === 'function' && typeof URL.createObjectURL === 'function' && typeof URL.revokeObjectURL === 'function' && typeof Blob === 'function' && typeof btoa === 'function') {
                    styleElement = createLinkElement(options);
                    update = updateLink.bind(null, styleElement);
                    remove = function () {
                        removeStyleElement(styleElement);
                        if (styleElement.href)
                            URL.revokeObjectURL(styleElement.href);
                    };
                } else {
                    styleElement = createStyleElement(options);
                    update = applyToTag.bind(null, styleElement);
                    remove = function () {
                        removeStyleElement(styleElement);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                            return;
                        update(obj = newObj);
                    } else {
                        remove();
                    }
                };
            }
            var replaceText = function () {
                var textStore = [];
                return function (index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(styleElement, index, remove, obj) {
                var css = remove ? '' : obj.css;
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = replaceText(index, css);
                } else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = styleElement.childNodes;
                    if (childNodes[index])
                        styleElement.removeChild(childNodes[index]);
                    if (childNodes.length) {
                        styleElement.insertBefore(cssNode, childNodes[index]);
                    } else {
                        styleElement.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(styleElement, obj) {
                var css = obj.css;
                var media = obj.media;
                if (media) {
                    styleElement.setAttribute('media', media);
                }
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = css;
                } else {
                    while (styleElement.firstChild) {
                        styleElement.removeChild(styleElement.firstChild);
                    }
                    styleElement.appendChild(document.createTextNode(css));
                }
            }
            function updateLink(linkElement, obj) {
                var css = obj.css;
                var sourceMap = obj.sourceMap;
                if (sourceMap) {
                    // http://stackoverflow.com/a/26603875
                    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
                }
                var blob = new Blob([css], { type: 'text/css' });
                var oldSrc = linkElement.href;
                linkElement.href = URL.createObjectURL(blob);
                if (oldSrc)
                    URL.revokeObjectURL(oldSrc);
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /**
	 * The intention of having a base class rather than utility function is to reduce dependency tree
	 * With fewer dependencies we'd be moving closer to an unopinionated component
	 * That way we eventually will be able to switch Backbone to something else more easily as well
	 */
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(6),
                __webpack_require__(5),
                __webpack_require__(14),
                __webpack_require__(15)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (Backbone, $, translator, _) {
                'use strict';
                var indices = function (collection, subcollection) {
                    return subcollection.map(function (s) {
                        var start = collection.indexOf(s);
                        return [
                            start,
                            start != -1 ? 1 : 0
                        ];
                    });
                };
                var isFunctionOrNonEmptyArray = function (argument) {
                    var isDefined = !!argument;
                    var isFunction = isDefined && argument.constructor === Function;
                    var isNonEmptyArray = isDefined && argument.constructor === Array && argument.length > 0;
                    return isFunction || isNonEmptyArray;
                };
                /**
	   * Base class for viewers.
	   * @constructor
	   */
                var View = Backbone.View.extend({
                    initialize: function () {
                        Backbone.View.prototype.initialize.apply(this, arguments);
                        this._subscriptions = [];
                    },
                    extendParentEvents: function (events) {
                        var parentEvents = this.constructor.__super__.events;
                        if (_.isFunction(parentEvents)) {
                            parentEvents = parentEvents();
                        }
                        return _.extend({}, parentEvents, events);
                    },
                    _remove: function (range) {
                        this._subscriptions.splice(range[0], range[1]).forEach(function (cb) {
                            cb();
                        });
                    },
                    listen: function (el, event, delegate) {
                        $(el).on(event, delegate);
                        var subscription = function () {
                            $(el).off(event, delegate);
                        };
                        this._subscriptions.unshift(subscription);
                        return subscription;
                    },
                    stopListen: function (subscription) {
                        var toRemove = [].concat(subscription).filter(Boolean), rangesToRemove = [];
                        if (!subscription) {
                            // if undefined then unsubscribe from everything
                            rangesToRemove = [[
                                    0,
                                    this._subscriptions.length
                                ]];
                        } else if (isFunctionOrNonEmptyArray(subscription)) {
                            // if is defined and is a function or non-empty array then unsubscribe from elements
                            rangesToRemove = indices(this._subscriptions, toRemove);
                        }
                        rangesToRemove.forEach(this._remove, this);
                        // return subscriptions that were not removed
                        return toRemove.filter(function (s, i) {
                            return rangesToRemove[i][0] === -1;
                        }).filter(Boolean);
                    },
                    teardown: function () {
                        this.stopListen();
                    }
                });
                View.translate = translator.translate;
                return View;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                var _dictionary = Object.create(null);
                var Translator = function () {
                };
                Translator.prototype.setDictionary = function (dictionary) {
                    _dictionary = dictionary;
                };
                Translator.prototype.translate = function (token) {
                    return _dictionary[token] || token;
                };
                return new Translator();
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /* globals _ */
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return _;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(4),
                __webpack_require__(17),
                __webpack_require__(18)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (assert, NoopFocusManager, FocusManager) {
                'use strict';
                /**
	     * Transparent wrapper around FocusManager API that conditionally switches implementations.
	     * @constructor
	     * @param {jQuery} $el - The outmost element within focus will be trapped
	     */
                var FocusManagerFactory = function ($el) {
                    this.__element = $el;
                };
                FocusManagerFactory.prototype.create = function (enabled) {
                    var ctor = enabled ? NoopFocusManager : FocusManager;
                    return new ctor(this.__element);
                };
                return FocusManagerFactory;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                'use strict';
                var noop = function () {
                };
                var NoopFocusManager = function ($el) {
                };
                NoopFocusManager.prototype.trapFocus = noop;
                NoopFocusManager.prototype.releaseFocus = noop;
                return NoopFocusManager;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (assert) {
                'use strict';
                var hasFocusOverride = function (element) {
                    if (!element || !element.hasAttribute) {
                        return false;
                    }
                    return element.hasAttribute('data-fv-allow-focus') || hasFocusOverride(element.parentElement);
                };
                /**
	   * Trap focus for overlays and dialogs to enable proper keyboard navigation.
	   * @constructor
	   * @param {jQuery} $el - The outmost element within focus will be trapped
	   */
                var FocusManager = function ($el) {
                    assert($el, 'the first parameter to new FocusManager is a jQuery element');
                    this.$container = $el;
                    this._handler = this._focusHandler.bind(this);
                };
                /**
	   * Trap element focus inside container element.
	   */
                FocusManager.prototype.trapFocus = function () {
                    this._unfocusParentPage();
                    document.addEventListener('focus', this._handler, true);
                };
                /**
	   * Stop trapping element focus inside container element.
	   */
                FocusManager.prototype.releaseFocus = function () {
                    document.removeEventListener('focus', this._handler, true);
                    this._restoreFocus();
                };
                // Focus event handler.
                // On focus instantly blur the element if it is not a child of container
                // and set focus back to the container element.
                FocusManager.prototype._focusHandler = function (event) {
                    if (!hasFocusOverride(event.target) && this.$container && !this.$container[0].contains(event.target)) {
                        event.stopPropagation();
                        document.activeElement.blur();
                        this.$container.attr('tabindex', 1);
                        this.$container.focus();
                    }
                };
                // Store active DOM element, unfocus it and then focus the container.
                FocusManager.prototype._unfocusParentPage = function () {
                    this._originalActiveElement = document.activeElement;
                    this._originalActiveElement.blur();
                    this.$container.attr('tabindex', 1);
                    this.$container.focus();
                };
                // Restore focus to the stored original active element.
                FocusManager.prototype._restoreFocus = function () {
                    if (this._originalActiveElement) {
                        this._originalActiveElement.focus();
                    }
                };
                return FocusManager;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(6),
                __webpack_require__(15),
                __webpack_require__(20)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (Backbone, _, File) {
                'use strict';
                var Files = Backbone.Collection.extend({
                    model: File,
                    getIndexWithCID: function (cid) {
                        return this.indexOf(this.get({ cid: cid }));
                    }
                });
                return Files;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Backbone) {
                'use strict';
                var File = Backbone.Model.extend({
                    defaults: {
                        src: '',
                        type: '',
                        thumbnail: '',
                        poster: '',
                        title: '',
                        downloadable: true
                    }
                });
                return File;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(13),
                __webpack_require__(22),
                __webpack_require__(26)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (View, iconUtils, tpl) {
                'use strict';
                return View.extend({
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._mediaViewer = options.mediaViewer;
                    },
                    render: function () {
                        View.prototype.render.apply(this, arguments);
                        var model = this._mediaViewer.getView().getCurrentFile();
                        if (!model) {
                            return;
                        }
                        this.$el.html(tpl.default(View.translate).titleContainer({
                            iconClass: iconUtils.getCssClass(model.get('type')),
                            title: model.get('title')
                        }));
                        return this;
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (fileTypes) {
                'use strict';
                var iconUtils = {
                    getCssClass: function (type) {
                        var iconClass = 'cp-unknown-file-type-icon';
                        if (fileTypes.isImage(type)) {
                            iconClass = 'cp-image-icon';
                        } else if (fileTypes.isPDF(type)) {
                            iconClass = 'cp-pdf-icon';
                        } else if (fileTypes.isWordProcessing(type)) {
                            iconClass = 'cp-document-icon';
                        } else if (fileTypes.isSpreadsheet(type)) {
                            iconClass = 'cp-spreadsheet-icon';
                        } else if (fileTypes.isPresentation(type)) {
                            iconClass = 'cp-presentation-icon';
                        } else if (fileTypes.isText(type)) {
                            iconClass = 'cp-text-icon';
                        } else if (fileTypes.isCode(type)) {
                            iconClass = 'cp-code-icon';
                        } else if (fileTypes.isMultimedia(type)) {
                            iconClass = 'cp-multimedia-icon';
                        } else if (fileTypes.isArchive(type)) {
                            iconClass = 'cp-archive-icon';
                        }
                        return iconClass;
                    }
                };
                return iconUtils;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(24);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                'use strict';
                var browserSupportedImageTypes = [
                    'image/gif',
                    'image/jpeg',
                    'image/png',
                    'image/svg+xml',
                    'image/web',
                    'image/bmp'
                ];
                var browserSupportedMultimediaTypes = [
                    'video/mp4',
                    'video/m4v',
                    'video/youtube',
                    'audio/mp3',
                    'audio/mpeg'
                ];
                var toLowerType = function (type) {
                    return type && type.toLowerCase() || '';
                };
                var fileTypes = {
                    isPDF: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'application/pdf';
                    },
                    isText: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'text/plain';
                    },
                    isCode: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'text/java' || lowerType === 'text/css' || lowerType === 'text/html' || lowerType === 'text/javascript' || lowerType === 'text/xml';
                    },
                    isMultimedia: function (type) {
                        var lowerType = toLowerType(type);
                        return /^video\/.*/i.test(type) || /^audio\/.*/i.test(type) || lowerType === 'application/x-shockwave-flash' || lowerType === 'application/vnd.rn-realmedia' || lowerType === 'application/x-oleobject';
                    },
                    isArchive: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'application/zip' || lowerType === 'application/java-archive';
                    },
                    isImage: function (type) {
                        return /^image\/.*/i.test(type);
                    },
                    isVideo: function (type) {
                        var lowerType = toLowerType(type);
                        return /^video\/.*/i.test(type) || lowerType === 'video';
                    },
                    isAudio: function (type) {
                        var lowerType = toLowerType(type);
                        return /^audio\/.*/i.test(type) || lowerType === 'audio';
                    },
                    isYoutube: function (type) {
                        var lowerType = toLowerType(type);
                        return 'video/youtube' === lowerType;
                    },
                    isImageBrowserSupported: function (type) {
                        return browserSupportedImageTypes.indexOf(type.toLowerCase()) !== -1;
                    },
                    isMultimediaBrowserSupported: function (type) {
                        return browserSupportedMultimediaTypes.indexOf(type.toLowerCase()) !== -1;
                    },
                    isWordProcessing: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'application/msword' || /^application\/vnd.ms-word.*/i.test(type) || /^application\/vnd.openxmlformats-officedocument.wordprocessingml.*/i.test(type);
                    },
                    isSpreadsheet: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'application/msexcel' || /^application\/vnd.ms-excel.*/i.test(type) || /^application\/vnd.openxmlformats-officedocument.spreadsheet.*/i.test(type);
                    },
                    isPresentation: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'application/mspowerpoint' || /^application\/vnd.ms-powerpoint.*/i.test(type) || /^application\/vnd.openxmlformats-officedocument.presentationml.*/i.test(type);
                    },
                    is3D: function (type) {
                        var lowerType = toLowerType(type);
                        return lowerType === 'application/x-sea';
                    },
                    matchAll: function () {
                        return true;
                    }
                };
                return fileTypes;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            // style-loader: Adds some css to the DOM by adding a <style> tag
            // load the styles
            var content = __webpack_require__(25);
            if (typeof content === 'string')
                content = [[
                        module.id,
                        content,
                        ''
                    ]];
            // add the styles to the DOM
            var update = __webpack_require__(12)(content, {});
            if (content.locals)
                module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept('!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!./file-types.less', function () {
                        var newContent = require('!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!./file-types.less');
                        if (typeof newContent === 'string')
                            newContent = [[
                                    module.id,
                                    newContent,
                                    ''
                                ]];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function () {
                    update();
                });
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(11)();
            // imports
            // module
            exports.push([
                module.id,
                '.cp-image-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDFfZmlsZS1pbWctbGFyZ2U8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTIxLjk5NSAwSDIuMDA1Qy44OTggMCAwIC44OTggMCAyLjAwNXYxOS45OUMwIDIzLjEwMi44OTcgMjQgMi4wMDUgMjRoMTkuOTlDMjMuMTAzIDI0IDI0IDIzLjEwMyAyNCAyMS45OTZWMi4wMDVDMjQgLjg5OCAyMy4xMDQgMCAyMS45OTUgMHpNMjMgMjEuOTk1QzIzIDIyLjU1IDIyLjU1IDIzIDIxLjk5NSAyM0gyLjAwNUMxLjQ1IDIzIDEgMjIuNTUgMSAyMS45OTZWMi4wMDVDMSAxLjQ1IDEuNDUgMSAyLjAwNSAxaDE5Ljk5QzIyLjU1IDEgMjMgMS40NSAyMyAyLjAwNXYxOS45OXpNMTcgMTNsLTMuNzMgMy43M0w4IDlsLTUgNSAuNSAxczMuMDA1LTIuNzggNC41LTQuNWMuNDUzLjU1MyA3IDEwLjUgNyAxMC41aDFsLTIuMTItMy4zNzggMy42Mi0zLjYyIDMgMyAuNS0xLTMtM2gtMXptLTQuMzU3LTQuMDdsLS4yIDIuOCAyLjAyNC0xLjkwNSAyLjAyNCAxLjkwNS0uMi0yLjggMi43MjYtLjQyMy0yLjI3NC0xLjU4NSAxLjM3My0yLjQzNC0yLjYzNi44MjMtMS4wMTMtMi42MS0xLjAxMyAyLjYxLTIuNjM2LS44MjIgMS4zNzQgMi40MzQtMi4yNzUgMS41ODUgMi43MjYuNDI0em0xLjgyNC0zLjM4N2MxLjAzIDAgMS44NjcuODUzIDEuODY3IDEuOTA3IDAgMS4wNTUtLjgzOCAxLjkwOC0xLjg2NyAxLjkwOC0xLjAzIDAtMS44NjctLjg1My0xLjg2Ny0xLjkwOCAwLTEuMDU0LjgzOC0xLjkwNyAxLjg2Ny0xLjkwN3oiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.cp-image-icon.size-48,\n.cp-image-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDBfZmlsZS1pbWFnZS14bDwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMCA0LjAxdjM5Ljk4QzAgNDYuMjA1IDEuNzk0IDQ4IDQuMDEgNDhoMzkuOThjMi4yMTUgMCA0LjAxLTEuNzk0IDQuMDEtNC4wMVY0LjAxQzQ4IDEuNzk1IDQ2LjIwNiAwIDQzLjk5IDBINC4wMUMxLjc5NSAwIDAgMS43OTQgMCA0LjAxek00My45OSAxQzQ1LjY1MyAxIDQ3IDIuMzQ3IDQ3IDQuMDF2MzkuOThjMCAxLjY2My0xLjM0NyAzLjAxLTMuMDEgMy4wMUg0LjAxQzIuMzQ3IDQ3IDEgNDUuNjUzIDEgNDMuOTlWNC4wMUMxIDIuMzQ3IDIuMzQ3IDEgNC4wMSAxaDM5Ljk4ek0yOS45IDE5LjU2bC0xLjY4IDMgLjQtMy40MTVjLS42NzQtLjMxMy0xLjI3Ny0uNzU0LTEuNzc2LTEuMjkzTDIzLjcyIDE5LjI5bDIuMzMyLTIuNTI2Yy0uMzU0LS42MzMtLjU5LTEuMzQtLjY4LTIuMDlMMjIgMTRsMy4zNzMtLjY3M2MuMDktLjc1Mi4zMjUtMS40NTguNjgtMi4wOUwyMy43MTggOC43MWwzLjEyNCAxLjQzOGMuNS0uNTQgMS4xMDItLjk4IDEuNzc3LTEuMjkzbC0uNC0zLjQxNSAxLjY4IDNjLjM1Ni0uMDcuNzI0LS4xMDcgMS4xLS4xMDcuMzc2IDAgLjc0NC4wMzcgMS4xLjEwN2wxLjY4LTMtLjQgMy40MTVjLjY3NC4zMTMgMS4yNzcuNzU0IDEuNzc2IDEuMjkzTDM4LjI4IDguNzFsLTIuMzMyIDIuNTI2Yy4zNTQuNjMzLjU5IDEuMzQuNjggMi4wOUw0MCAxNGwtMy4zNzMuNjczYy0uMDkuNzUyLS4zMjUgMS40NTgtLjY4IDIuMDlsMi4zMzQgMi41MjctMy4xMjQtMS40MzhjLS41LjU0LTEuMTAyLjk4LTEuNzc3IDEuMjkzbC40IDMuNDE1LTEuNjgtM2MtLjM1Ni4wNy0uNzI0LjEwNy0xLjEuMTA3LS4zNzYgMC0uNzQ0LS4wMzctMS4xLS4xMDd6TTI2LjMzNCAxNGMwLTIuNTc3IDIuMDktNC42NjcgNC42NjctNC42NjdzNC42NjcgMi4wOSA0LjY2NyA0LjY2Ny0yLjA5IDQuNjY3LTQuNjY3IDQuNjY3LTQuNjY3LTIuMDktNC42NjctNC42Njd6bTEuNDg0IDIwLjY4M0wzMyA0MmwtLjUgMUwxNiAxOS41IDUuNSAzMiA1IDMxbDExLTEzIDExLjE5NSAxNS44MDVMMzUgMjZsOCAxMC0uNSAxLTcuNS05LjUtNy4xODMgNy4xODN6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.cp-pdf-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDJfZmlsZS1wZGYtbGFyZ2U8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTIxLjk5NSAwSDIuMDA1Qy44OTggMCAwIC44OTggMCAyLjAwNXYxOS45OUMwIDIzLjEwMy44OTYgMjQgMi4wMDUgMjRoMTkuOTlDMjMuMTAyIDI0IDI0IDIzLjEwMyAyNCAyMS45OTVWMi4wMDVDMjQgLjg5OCAyMy4xMDQgMCAyMS45OTUgMHpNMSAyMS45OTVWOC45NkM1LjE3NSA4Ljc1OCA5LjQ0MyA3LjMxNyAxNSA1djE4SDIuMDA1QzEuNDUgMjMgMSAyMi41NSAxIDIxLjk5NXpNMTYgOWgydjE0aC0yVjl6bTcgMTIuOTk1QzIzIDIyLjU1IDIyLjU1IDIzIDIxLjk5NSAyM0gxOVY4aC0zVjMuNUMxMC40MzQgNS44MiA1LjMwNyA3LjY5IDEgNy45NTJWMi4wMDVDMSAxLjQ1IDEuNDUgMSAyLjAwNSAxaDE5Ljk5QzIyLjU1IDEgMjMgMS40NSAyMyAyLjAwNXYxOS45OXpNMTIgMTkuNXYtMWMtMyAxLTYgMi05IDIuNXYxYzMtLjUgNi0xLjUgOS0yLjV6TTMgMThjMy0uNSA2LTEuNSA5LTIuNXYtMWMtMyAxLTYgMi05IDIuNXYxem0wLTV2MWMzLS41IDYtMS41IDktMi41di0xYy0zIDEtNiAyLTkgMi41eiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-pdf-icon.size-48,\n.cp-pdf-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDFfZmlsZS1wZGYteGw8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTQzLjk5IDBINC4wMUMxLjc5NSAwIDAgMS43OTQgMCA0LjAxdjM5Ljk4QzAgNDYuMjA1IDEuNzk0IDQ4IDQuMDEgNDhoMzkuOThjMi4yMTUgMCA0LjAxLTEuNzk0IDQuMDEtNC4wMVY0LjAxQzQ4IDEuNzk1IDQ2LjIwNiAwIDQzLjk5IDB6TTQuMDEgNDdDMi4zNDcgNDcgMSA0NS42NTMgMSA0My45OVYxNC45ODVjOS4zODQtLjA3NyAxOS4xMzItMi4zMjUgMjktNi43MTJWNDdINC4wMXpNNDAgNDdoLTRWMTZoMy41MDJjLjI3NCAwIC40OTguMjIuNDk4LjQ5M1Y0N3ptLTUgMGgtNFYxMmgzLjUwMmMuMjc0IDAgLjQ5OC4yMjQuNDk4LjVWNDd6bTguOTkgMEg0MVYxNi40OTNDNDEgMTUuNjcgNDAuMzI4IDE1IDM5LjUwMiAxNUgzNnYtMi41YzAtLjgyNy0uNjcyLTEuNS0xLjQ5OC0xLjVIMzFWNi43MjRsLS43MDcuMzJjLTkuOTc4IDQuNTM3LTE5LjgzIDYuODYyLTI5LjI5MyA2Ljk0VjQuMDFDMSAyLjM0NyAyLjM0OCAxIDQuMDEgMWgzOS45OEM0NS42NTMgMSA0NyAyLjM0NyA0NyA0LjAxdjM5Ljk4YzAgMS42NjMtMS4zNDggMy4wMS0zLjAxIDMuMDF6TTUgMjRjOC41LS41IDEyLTEgMjAtNHYtMWMtOCAzLTEyIDMuNS0yMCA0djF6bTAgNmM4LjUtLjUgMTItMSAyMC00di0xYy04IDMtMTIgMy41LTIwIDR2MXptMCA2YzguNS0uNSAxMi0xIDIwLTR2LTFjLTggMy0xMiAzLjUtMjAgNHYxem0wIDZjOC41LS41IDEyLTEgMjAtNHYtMWMtOCAzLTEyIDMuNS0yMCA0djF6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.cp-text-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDNfZmlsZS10ZXh0LWxhcmdlPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0wIDIuMDA1djE5Ljk5QzAgMjMuMTAyLjg5NyAyNCAyLjAwNSAyNGgxOS45OUMyMy4xMDIgMjQgMjQgMjMuMTAzIDI0IDIxLjk5NVYyLjAwNUMyNCAuODk4IDIzLjEwMyAwIDIxLjk5NSAwSDIuMDA1Qy44OTggMCAwIC44OTcgMCAyLjAwNXpNMjEuOTk1IDFDMjIuNTUgMSAyMyAxLjQ1IDIzIDIuMDA1djE5Ljk5QzIzIDIyLjU1IDIyLjU1IDIzIDIxLjk5NSAyM0gyLjAwNUMxLjQ1IDIzIDEgMjIuNTUgMSAyMS45OTVWMi4wMDVDMSAxLjQ1IDEuNDUgMSAyLjAwNSAxaDE5Ljk5ek0zIDE0djFoMTh2LTFIM3ptMC04djFoMTVWNkgzem0wIDR2MWgxMXYtMUgzem0wIDh2MWgxM3YtMUgzeiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-text-icon.size-48,\n.cp-text-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDJfZmlsZS10ZXh0LXhsPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0wIDQuMDF2MzkuOThDMCA0Ni4yMDUgMS43OTQgNDggNC4wMSA0OGgzOS45OGMyLjIxNSAwIDQuMDEtMS43OTQgNC4wMS00LjAxVjQuMDFDNDggMS43OTUgNDYuMjA2IDAgNDMuOTkgMEg0LjAxQzEuNzk1IDAgMCAxLjc5NCAwIDQuMDF6TTQzLjk5IDFDNDUuNjUzIDEgNDcgMi4zNDcgNDcgNC4wMXYzOS45OGMwIDEuNjYzLTEuMzQ3IDMuMDEtMy4wMSAzLjAxSDQuMDFDMi4zNDcgNDcgMSA0NS42NTMgMSA0My45OVY0LjAxQzEgMi4zNDcgMi4zNDcgMSA0LjAxIDFoMzkuOTh6TTUgMzF2MWgzOHYtMUg1em0wLTE0djFoMzN2LTFINXptMC03djFoMjh2LTFINXptMCAxNHYxaDI0di0xSDV6bTAgMTR2MWgyOHYtMUg1eiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-document-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDRfZmlsZS1kb2N1bWVudC1sYXJnZTwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMjEuOTk1IDBIMi4wMDVDLjg5OCAwIDAgLjg5OCAwIDIuMDA1djE5Ljk5QzAgMjMuMTAzLjg5NiAyNCAyLjAwNSAyNGgxOS45OUMyMy4xMDIgMjQgMjQgMjMuMTAzIDI0IDIxLjk5NVYyLjAwNUMyNCAuODk4IDIzLjEwNCAwIDIxLjk5NSAwek0yMyAyMS45OTVDMjMgMjIuNTUgMjIuNTUgMjMgMjEuOTk1IDIzSDIuMDA1QzEuNDUgMjMgMSAyMi41NSAxIDIxLjk5NVYyLjAwNUMxIDEuNDUgMS40NSAxIDIuMDA1IDFoMTkuOTlDMjIuNTUgMSAyMyAxLjQ1IDIzIDIuMDA1djE5Ljk5ek0zIDEwaDd2MUgzdi0xem0wLTRoOXYxSDNWNnptMCA4aDE2djFIM3YtMXptMCA0aDE0djFIM3YtMXpNMTkuOTk3IDVoLTQuOTk0QzE0LjQ1IDUgMTQgNS40NSAxNCA1Ljk5djQuMDJjMCAuNTQ2LjQzNy45ODggMSAuOTloNC45OTdjLjU1NCAwIDEuMDAzLS40NSAxLjAwMy0uOTlWNS45OWMwLS41NDctLjQzOC0uOTktMS4wMDMtLjk5em0tNC4wMDcgNWwyLjQ3Ni0yLjUgMS41MzYuOTFjMCAuODUtLjAwMiAxLjYtLjAwMiAxLjYgMC0uMDEtMi41NTUtLjAxLTQuMDEtLjAxek0xNSA5LjU0M2MtLjAwNC0xLjA0OCAwLTMuNTUyIDAtMy41NTIgMCAuMDEyIDQuOTk3LjAxIDQuOTk3LjAxLjAwNCAwIC4wMDUuNjEyLjAwNSAxLjM1N2wtMS41MzYtLjk5MkwxNSA5LjU0M3oiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.cp-document-icon.size-48,\n.cp-document-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDNfZmlsZS1kb2N1bWVudC14bDwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMCA0LjAxdjM5Ljk4QzAgNDYuMjA1IDEuNzk0IDQ4IDQuMDEgNDhoMzkuOThjMi4yMTUgMCA0LjAxLTEuNzk0IDQuMDEtNC4wMVY0LjAxQzQ4IDEuNzk1IDQ2LjIwNiAwIDQzLjk5IDBINC4wMUMxLjc5NSAwIDAgMS43OTQgMCA0LjAxek00My45OSAxQzQ1LjY1MyAxIDQ3IDIuMzQ3IDQ3IDQuMDF2MzkuOThjMCAxLjY2NC0xLjM0OCAzLjAxLTMuMDEgMy4wMUg0LjAxQzIuMzQ3IDQ3IDEgNDUuNjU0IDEgNDMuOTlWNC4wMUMxIDIuMzQ3IDIuMzQ4IDEgNC4wMSAxaDM5Ljk4ek01IDM5aDI4di0xSDV2MXptMC03aDMydi0xSDV2MXptMC0yMWgxN3YtMUg1djF6bTAgN2gxNHYtMUg1djF6bTAgN2gxOXYtMUg1djF6bTM2LjAwOC0xNUgyOS45OTJjLTEuMSAwLTEuOTkyLjg5NC0xLjk5MiAxLjk5MnYxMS4wMTZjMCAxLjEuODk0IDEuOTkyIDEuOTkyIDEuOTkyaDExLjAxNmMxLjEgMCAxLjk5Mi0uODkzIDEuOTkyLTEuOTkyVjExLjk5MmMwLTEuMS0uODk0LTEuOTkyLTEuOTkyLTEuOTkyek0yOS45OTIgMjRjLS41NDcgMC0uOTkyLS40NDQtLjk5Mi0uOTkyVjIxbDMtMy41IDUgNi41aC03LjAwOHptMTEuMDE2IDBoLTIuODlsLTEuMS0xLjQzNSAyLjQ2Ni0yLjA2NSAyLjQzMyAyLjljLS4xNTMuMzUzLS41MDIuNi0uOTEuNnpNNDIgMjEuOTJMMzkuNDg0IDE5bC0zLjEzIDIuNjk1TDMyIDE2bC0zIDMuNXYtNy41MDhjMC0uNTQ3LjQ0NS0uOTkyLjk5Mi0uOTkyaDExLjAxNmMuNTQ3IDAgLjk5Mi40NDUuOTkyLjk5MnY5LjkyOHptLTEuNzY0LTkuMTAzbC0xLjk3Ni42MDYtLjc2LTEuOTIzLS43NiAxLjkyMy0xLjk3Ni0uNjA2IDEuMDMgMS43OTQtMS43MDYgMS4xNyAyLjA0NC4zMS0uMTUgMi4wNjRMMzcuNSAxNi43NWwxLjUyIDEuNDA0LS4xNTItMi4wNjMgMi4wNDQtLjMxLTEuNzA2LTEuMTcgMS4wMy0xLjc5M3pNMzcuNSAxNi4zYy0uNzE4IDAtMS4zLS41ODItMS4zLTEuMyAwLS43MTguNTgyLTEuMyAxLjMtMS4zLjcxOCAwIDEuMy41ODIgMS4zIDEuMyAwIC43MTgtLjU4MiAxLjMtMS4zIDEuM3oiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.cp-spreadsheet-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDVfZmlsZS1zcHJlYWRzaGVldC1sYXJnZTwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMCAyLjAwNXYxOS45OUMwIDIzLjEwMi44OTcgMjQgMi4wMDUgMjRoMTkuOTlDMjMuMTAyIDI0IDI0IDIzLjEwMyAyNCAyMS45OTVWMi4wMDVDMjQgLjg5OCAyMy4xMDMgMCAyMS45OTUgMEgyLjAwNUMuODk4IDAgMCAuODk3IDAgMi4wMDV6TTIxLjk5NSAxQzIyLjU1IDEgMjMgMS40NSAyMyAyLjAwNXYxOS45OUMyMyAyMi41NSAyMi41NSAyMyAyMS45OTUgMjNIMi4wMDVDMS40NSAyMyAxIDIyLjU1IDEgMjEuOTk1VjIuMDA1QzEgMS40NSAxLjQ1IDEgMi4wMDUgMWgxOS45OXpNMTYgMTh2LTRoN3YtMWgtN1Y5aDdWOEg4VjFIN3Y3SDF2MWg2djE0aDFWOWg3djRIOHYxaDd2NEg4djFoN3Y0aDF2LTRoN3YtMWgtN3oiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.cp-spreadsheet-icon.size-48,\n.cp-spreadsheet-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDRfZmlsZS1zcHJlYWRzaGVldC14bDwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMCA0LjAxdjM5Ljk4QzAgNDYuMjA1IDEuNzk0IDQ4IDQuMDEgNDhoMzkuOThjMi4yMTUgMCA0LjAxLTEuNzk0IDQuMDEtNC4wMVY0LjAxQzQ4IDEuNzk1IDQ2LjIwNiAwIDQzLjk5IDBINC4wMUMxLjc5NSAwIDAgMS43OTQgMCA0LjAxek00NyAxNlY0LjAxQzQ3IDIuMzQ3IDQ1LjY1MyAxIDQzLjk5IDFIMTZ2MTVoMzF6bTAgMXYxMEgzMlYxN2gxNXptMCAxMXYxMEgzMlYyOGgxNXptMCAxMXY0Ljk5YzAgMS42NjMtMS4zNDcgMy4wMS0zLjAxIDMuMDFIMzJ2LThoMTV6bS0xNiA4SDE2di04aDE1djh6bS0xNiAwSDQuMDFDMi4zNDcgNDcgMSA0NS42NTMgMSA0My45OVYxN2gxNHYzMHpNMSAxNlY0LjAxQzEgMi4zNDcgMi4zNDcgMSA0LjAxIDFIMTV2MTVIMXptMTUgMTJoMTV2MTBIMTZWMjh6bTAtMTFoMTV2MTBIMTZWMTd6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.cp-presentation-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDZfZmlsZS1wcmVzZW50YXRpb24tbGFyZ2U8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTAgMi4wMDV2MTkuOTlDMCAyMy4xMDIuODk3IDI0IDIuMDA1IDI0aDE5Ljk5QzIzLjEwMiAyNCAyNCAyMy4xMDMgMjQgMjEuOTk1VjIuMDA1QzI0IC44OTggMjMuMTAzIDAgMjEuOTk1IDBIMi4wMDVDLjg5OCAwIDAgLjg5NyAwIDIuMDA1ek0yMS45OTUgMUMyMi41NSAxIDIzIDEuNDUgMjMgMi4wMDV2MTkuOTlDMjMgMjIuNTUgMjIuNTUgMjMgMjEuOTk1IDIzSDIuMDA1QzEuNDUgMjMgMSAyMi41NSAxIDIxLjk5NVYyLjAwNUMxIDEuNDUgMS40NSAxIDIuMDA1IDFoMTkuOTl6TTE2IDd2MWg1VjdoLTV6bTAgM3YxaDV2LTFoLTV6bS0xIDN2MWg2di0xaC02ek0zIDE3djFoMTh2LTFIM3pNOC41IDQuNWMtMi43NiAwLTUgMi4yMzgtNSA1czIuMjQgNSA1IDUgNS0yLjIzOCA1LTUtMi4yNC01LTUtNXptLTQgNWMwLTIuMDQgMS41MjctMy43MjIgMy41LTMuOTd2My42MjNsLTMuMzkzIDEuMjczYy0uMDctLjI5Ny0uMTA3LS42MDgtLjEwNy0uOTI2em00IDRjLTEuNTM3IDAtMi44Ny0uODY3LTMuNTQtMi4xMzhsMy40MTQtMS4yOCAyLjU4IDIuNTc4Yy0uNjguNTI3LTEuNTMuODQtMi40NTQuODR6bTMuMTYtMS41NDdMOSA5LjI5M1Y1LjUzYzEuOTczLjI0OCAzLjUgMS45MyAzLjUgMy45NyAwIC45MjUtLjMxNCAxLjc3Ni0uODQgMi40NTN6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.cp-presentation-icon.size-48,\n.cp-presentation-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDVfZmlsZS1wcmVzZW50YXRpb24teGw8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTAgNC4wMXYzOS45OEMwIDQ2LjIwNSAxLjc5NCA0OCA0LjAxIDQ4aDM5Ljk4YzIuMjE1IDAgNC4wMS0xLjc5NCA0LjAxLTQuMDFWNC4wMUM0OCAxLjc5NSA0Ni4yMDYgMCA0My45OSAwSDQuMDFDMS43OTUgMCAwIDEuNzk0IDAgNC4wMXpNNDMuOTkgMUM0NS42NTMgMSA0NyAyLjM0NyA0NyA0LjAxdjM5Ljk4YzAgMS42NjMtMS4zNDcgMy4wMS0zLjAxIDMuMDFINC4wMUMyLjM0NyA0NyAxIDQ1LjY1MyAxIDQzLjk5VjQuMDFDMSAyLjM0NyAyLjM0NyAxIDQuMDEgMWgzOS45OHpNMjggMTJ2MWgxNXYtMUgyOHptMCA2djFoMTV2LTFIMjh6bS0yIDZ2MWgxN3YtMUgyNnpNNSAzOHYxaDM4di0xSDV6bTAtN3YxaDM4di0xSDV6bTAtMTQuNWMwIDUuMjQ3IDQuMjUzIDkuNSA5LjUgOS41czkuNS00LjI1MyA5LjUtOS41UzE5Ljc0NyA3IDE0LjUgNyA1IDExLjI1MyA1IDE2LjV6bTEgMGMwLTQuNTI2IDMuNTM4LTguMjI2IDgtOC40ODV2OC4xMzhsLTcuNjIzIDIuODZDNi4xMzIgMTguMjE3IDYgMTcuMzcyIDYgMTYuNXptOC41IDguNWMtMy40NjcgMC02LjQ1LTIuMDc1LTcuNzcyLTUuMDUybDcuNjQ2LTIuODY3IDUuNzczIDUuNzc0QzE4LjY0NSAyNC4xOSAxNi42NjcgMjUgMTQuNSAyNXptNi4zNTMtMi44NTNMMTUgMTYuMjkzVjguMDE1YzQuNDYyLjI2IDggMy45NiA4IDguNDg1IDAgMi4xNjctLjgxIDQuMTQ2LTIuMTQ3IDUuNjQ3eiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-code-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDdfZmlsZS1jb2RlLWxhcmdlPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0wIDIuMDA1djE5Ljk5QzAgMjMuMTAyLjg5NyAyNCAyLjAwNSAyNGgxOS45OUMyMy4xMDIgMjQgMjQgMjMuMTAzIDI0IDIxLjk5NVYyLjAwNUMyNCAuODk4IDIzLjEwMyAwIDIxLjk5NSAwSDIuMDA1Qy44OTggMCAwIC44OTcgMCAyLjAwNXpNMjEuOTk1IDFDMjIuNTUgMSAyMyAxLjQ1IDIzIDIuMDA1djE5Ljk5QzIzIDIyLjU1IDIyLjU1IDIzIDIxLjk5NSAyM0gyLjAwNUMxLjQ1IDIzIDEgMjIuNTUgMSAyMS45OTVWMi4wMDVDMSAxLjQ1IDEuNDUgMSAyLjAwNSAxaDE5Ljk5ek0yLjUgOS41bDUtNSAxIC41TDQgOS41IDguNSAxNGwtMSAuNS01LTV6bTE5IDVsLTUuMDUtNS0uOTUuNSA0LjUgNC41LTQuNSA0LjUuOTUuNSA1LjA1LTV6TTkgMjFoMWw1LTE4aC0xTDkgMjF6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.cp-code-icon.size-48,\n.cp-code-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwMzlfZmlsZS1jb2RlLXhsPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0wIDQuMDF2MzkuOThDMCA0Ni4yMDUgMS43OTQgNDggNC4wMSA0OGgzOS45OGMyLjIxNSAwIDQuMDEtMS43OTQgNC4wMS00LjAxVjQuMDFDNDggMS43OTUgNDYuMjA2IDAgNDMuOTkgMEg0LjAxQzEuNzk1IDAgMCAxLjc5NCAwIDQuMDF6TTQzLjk5IDFDNDUuNjUzIDEgNDcgMi4zNDcgNDcgNC4wMXYzOS45OGMwIDEuNjYzLTEuMzQ3IDMuMDEtMy4wMSAzLjAxSDQuMDFDMi4zNDcgNDcgMSA0NS42NTMgMSA0My45OVY0LjAxQzEgMi4zNDcgMi4zNDcgMSA0LjAxIDFoMzkuOTh6TTYgMTcuNWwxMC0xMCAuNSAxLTkgOSA5IDktLjUgMS0xMC0xMHptMzcgMTJsLTEwLTEwLS41IDEgOSA5LTkgOSAuNSAxIDEwLTEwek0xOCA0Mi45NjJoMUwzMCA2aC0xTDE4IDQyLjk2MnoiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.cp-multimedia-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMDhfZmlsZS12aWRlby1sYXJnZTwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMCAyLjAwNXYxOS45OUMwIDIzLjEwMi44OTcgMjQgMi4wMDUgMjRoMTkuOTlDMjMuMTAyIDI0IDI0IDIzLjEwMyAyNCAyMS45OTVWMi4wMDVDMjQgLjg5OCAyMy4xMDMgMCAyMS45OTUgMEgyLjAwNUMuODk4IDAgMCAuODk3IDAgMi4wMDV6TTguMjkzIDFsLTMgM0gxLjcwN2wzLTNoMy41ODZ6TTYuNzA3IDRoMy41ODZsMy0zSDkuNzA3bC0zIDN6bTgtM2wtMyAzaDMuNTg2bDMtM2gtMy41ODZ6bTguMTMuNDZDMjIuNjYgMS4xOCAyMi4zNSAxIDIxLjk5NiAxaC0yLjI4OGwtMyAzaDMuNTg2bDIuNTQ1LTIuNTR6TTMuMjk0IDFIMi4wMDVDMS40NSAxIDEgMS40NSAxIDIuMDA1djEuMjg4TDMuMjkzIDF6TTIzIDRoLTEuMjkzTDIzIDIuNzA3VjR6bTAgMXYxNi45OTVDMjMgMjIuNTUgMjIuNTUgMjMgMjEuOTk1IDIzSDIuMDA1QzEuNDUgMjMgMSAyMi41NSAxIDIxLjk5NVY1aDIyek05IDE5LjVsNy01LjUtNy01LjV2MTF6bTUuNS01LjQ3TDEwIDE3LjV2LTdsNC41IDMuNTN6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.cp-multimedia-icon.size-48,\n.cp-multimedia-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDZfZmlsZS12aWRlby14bDwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNNDMuOTkgMEg0LjAxQzEuNzk1IDAgMCAxLjc5NCAwIDQuMDF2MzkuOThDMCA0Ni4yMDUgMS43OTQgNDggNC4wMSA0OGgzOS45OGMyLjIxNSAwIDQuMDEtMS43OTQgNC4wMS00LjAxVjQuMDFDNDggMS43OTUgNDYuMjA2IDAgNDMuOTkgMHpNNDcgMTF2MzIuOTljMCAxLjY2My0xLjM0NyAzLjAxLTMuMDEgMy4wMUg0LjAxQzIuMzQ3IDQ3IDEgNDUuNjUzIDEgNDMuOTlMMS4wMyAxMUg0N3ptLTEyLjc5Mi0xaC01LjMzbDguODU1LTloNS4zM2wtOC44NTUgOXptLTcgMGgtNS4zM2w4Ljg1NS05aDUuMzNsLTguODU1IDl6bS03IDBoLTUuMzNsOC44NTUtOWg1LjMzbC04Ljg1NSA5em0tNyAwaC01LjMzbDguODU1LTloNS4zM2wtOC44NTUgOXptLTcgMEgxLjAzMnYtLjI1TDkuNzI2IDFoNS4zMzhsLTguODU2IDl6TTEgNC4wMUMxIDIuMzQ3IDIuMzQ3IDEgNC4wMSAxaDMuOTkzTDEgOC4wNDhWNC4wMXpNNDIuOTc0IDEwTDQ3IDUuOTMzVjEwaC00LjAyNnptLTcuMDk3IDBsOC43ODMtOC45MjVDNDYgMS4zOCA0NyAyLjU3NyA0NyA0LjEyNUw0MS4xODYgMTBoLTUuMzF6TTE5IDM5bDEyLTEwLjVMMTkgMTl2MjB6bTEtMThsOS41IDcuNUwyMCAzN1YyMXoiLz48L2c+PC9nPjwvc3ZnPg==");\n}\n.cp-archive-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMTBfZmlsZS1hcmNoaXZlLWxhcmdlPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xMCAxOGg0di02aC0ydi0xaC0ydjd6bTItN2gydi0xaC0ydjF6bTAtMmgyVjhoLTJ2MXptLTIgMWgyVjloLTJ2MXptMC0yaDJWN2gtMnYxem0yLTFoMlY2aC0ydjF6bS0yLTFoMlY1aC0ydjF6bTItMWgyVjRoLTJ2MXptLTItMWgyVjNoLTJ2MXptMi0xaDJWMmgtMnYxem0tMi0xaDJWMWgtMnYxem0xMS45OTUtMUMyMi41NSAxIDIzIDEuNDUgMjMgMi4wMDV2MTkuOTlDMjMgMjIuNTUgMjIuNTUgMjMgMjEuOTk1IDIzSDIuMDA1QzEuNDUgMjMgMSAyMi41NSAxIDIxLjk5NVYyLjAwNUMxIDEuNDUgMS40NSAxIDIuMDA1IDFoMTkuOTl6TTAgMi4wMDV2MTkuOTlDMCAyMy4xMDMuODk3IDI0IDIuMDA1IDI0aDE5Ljk5QzIzLjEwMiAyNCAyNCAyMy4xMDMgMjQgMjEuOTk1VjIuMDA1QzI0IC44OTggMjMuMTAzIDAgMjEuOTk1IDBIMi4wMDVDLjg5NyAwIDAgLjg5OCAwIDIuMDA1ek0xMiAxNWMtLjU1MiAwLTEgLjQ0Ny0xIDEgMCAuNTUzLjQ0OCAxIDEgMXMxLS40NDcgMS0xYzAtLjU1My0uNDQ4LTEtMS0xeiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-archive-icon.size-48,\n.cp-archive-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDhfZmlsZS1hcmNoaXZlLXhsPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0wIDQuMDF2MzkuOThDMCA0Ni4yMDUgMS43OTQgNDggNC4wMSA0OGgzOS45OGMyLjIxNSAwIDQuMDEtMS43OTQgNC4wMS00LjAxVjQuMDFDNDggMS43OTUgNDYuMjA2IDAgNDMuOTkgMEg0LjAxQzEuNzk1IDAgMCAxLjc5NCAwIDQuMDF6TTQzLjk5IDFDNDUuNjUzIDEgNDcgMi4zNDcgNDcgNC4wMXYzOS45OGMwIDEuNjYzLTEuMzQ3IDMuMDEtMy4wMSAzLjAxSDQuMDFDMi4zNDcgNDcgMSA0NS42NTMgMSA0My45OVY0LjAxQzEgMi4zNDcgMi4zNDcgMSA0LjAxIDFoMzkuOTh6TTIwIDMxLjAwMnY4Ljk5QzIwIDQxLjEgMjAuODg3IDQyIDIxLjk5OCA0Mmg0LjAwNEMyNy4xMDUgNDIgMjggNDEuMDk4IDI4IDM5Ljk5di04Ljk4OGMwLS41NTMtLjQ1My0xLjAwMi0uOTk3LTEuMDAyaC02LjAwNmMtLjU1IDAtLjk5Ny40NTYtLjk5NyAxLjAwMnpNMjcuMDAzIDMxYy0uMDA2IDAtLjAwMyA4Ljk5LS4wMDMgOC45OSAwIC41NTgtLjQ1IDEuMDEtLjk5OCAxLjAxaC00LjAwNGMtLjU1NSAwLS45OTgtLjQ0Ny0uOTk4LTEuMDF2LTguOTg4TDI3LjAwMyAzMXpNMjIgMzh2MWMwIC41NTMuNDQzIDEgMS4wMSAxaDEuOThjLjU1OCAwIDEuMDEtLjQ0MyAxLjAxLTF2LTFjMC0uNTUzLS40NDMtMS0xLjAxLTFoLTEuOThjLS41NTggMC0xLjAxLjQ0My0xLjAxIDF6bTIuOTkgMGMuMDEyIDAgLjAxLS4wMDIuMDEgMHYxaC0xLjk5Yy0uMDEyIDAtLjAxLjAwMi0uMDEgMHYtMWgxLjk5ek0yMCA2djFoNVY2aC01em0wLTR2MWg1VjJoLTV6bTMgNnYxaDVWOGgtNXptMC00djFoNVY0aC01em0tMyA2djFoNXYtMWgtNXptMyAydjFoNXYtMWgtNXptLTMgMnYxaDV2LTFoLTV6bTMgMnYxaDV2LTFoLTV6bS0zIDJ2MWg1di0xaC01em0wIDR2MWg1di0xaC01em0wIDR2MWg1di0xaC01em0zLTZ2MWg1di0xaC01em0wIDR2MWg1di0xaC01em0wIDR2MWg1di0xaC01eiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-unknown-file-type-icon.size-24 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaDAwMTFfZmlsZS1nZW5lcmljLWxhcmdlPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0wIDIuMDA1djE5Ljk5QzAgMjMuMTAyLjg5NyAyNCAyLjAwNSAyNGgxOS45OUMyMy4xMDIgMjQgMjQgMjMuMTAzIDI0IDIxLjk5NVYyLjAwNUMyNCAuODk4IDIzLjEwMyAwIDIxLjk5NSAwSDIuMDA1Qy44OTggMCAwIC44OTcgMCAyLjAwNXpNMjEuOTk1IDFDMjIuNTUgMSAyMyAxLjQ1IDIzIDIuMDA1djE5Ljk5QzIzIDIyLjU1IDIyLjU1IDIzIDIxLjk5NSAyM0gyLjAwNUMxLjQ1IDIzIDEgMjIuNTUgMSAyMS45OTVWMi4wMDVDMSAxLjQ1IDEuNDUgMSAyLjAwNSAxaDE5Ljk5ek0xMCAxNS40OGMwIDEuNTEgMSAyLjUyIDIuNSAyLjUyczIuNS0xLjAxIDIuNS0yLjUxNlY2Ljk5N0MxNSA0LjUgMTMgMyAxMSAzUzcgNC41IDcgNy4wMDJ2OC40OEM3IDE4LjUyIDkuNDY2IDIxIDEyLjUgMjFjMy4wMzcgMCA1LjUtMi40NjcgNS41LTUuNVY2aC0xdjkuNWMwIDIuNDgtMiA0LjUtNC41IDQuNVM4IDE3Ljk3IDggMTUuNDhWNy4wMDNDOCA1IDkuNSA0IDExIDRzMyAxIDMgMi45OTd2OC40ODdDMTQgMTYuNSAxMy41IDE3IDEyLjUgMTdzLTEuNS0uNS0xLjUtMS41MlYxMGgtMXY1LjQ4eiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-unknown-file-type-icon.size-48,\n.cp-unknown-file-type-icon.size-96 {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+NDgvaTAwNDlfZmlsZS1nZW5lcmljLXhsPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0wIDQuMDF2MzkuOThDMCA0Ni4yMDUgMS43OTQgNDggNC4wMSA0OGgzOS45OGMyLjIxNSAwIDQuMDEtMS43OTQgNC4wMS00LjAxVjQuMDFDNDggMS43OTUgNDYuMjA2IDAgNDMuOTkgMEg0LjAxQzEuNzk1IDAgMCAxLjc5NCAwIDQuMDF6TTQzLjk5Ljk4QzQ1LjY1My45OCA0NyAyLjMyNiA0NyAzLjk5djQwLjAxNmMwIDEuNjY1LTEuMzQ3IDMuMDEzLTMuMDEgMy4wMTNINC4wMUMyLjM0NyA0Ny4wMiAxIDQ1LjY3NCAxIDQ0LjAxVjMuOTkyQzEgMi4zMjcgMi4zNDcuOTggNC4wMS45OGgzOS45OHpNMTkgMzAuOTk1QzE5IDM0IDIxIDM2IDI0IDM2czUtMiA1LTVWMTMuOTg2QzI5IDEwIDI2IDYuOTkgMjEuOTk2IDYuOTlzLTcuMDA0IDMuMDEtNy4wMDQgN3YxOC4wMDVjMCA1LjAwNSA0IDkgOS4wMDQgOVMzMyAzNyAzMyAzMS45ODJWMTIuOTk0aC0xdjE4Ljk4OGMwIDQuNTE4LTMuNSA4LjAxMy04LjAwNCA4LjAxM3MtOC4wMDQtMy40OTUtOC4wMDQtOFYxMy45OWMwLTMuNDkgMi41LTYgNi4wMDQtNkMyNS41IDcuOTkgMjggMTAuNSAyOCAxMy45ODVWMzFjMCAyLjUtMiA0LTQgNHMtNC0xLjUtNC00LjAwNFYyMGgtMXYxMC45OTZ6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n',
                ''
            ]);    // exports
                   /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var tpl = handlebars_1.compile('\n  <span class="{{iconClass}} size-24 cp-file-icon"></span>\n  {{title}}\n');
                function template(translate) {
                    return {
                        /**
	             * The title container and all its elements
	             * @param title
	             * @param iconClass
	             */
                        titleContainer: function (_a) {
                            var iconClass = _a.iconClass, title = _a.title;
                            return tpl({
                                iconClass: iconClass,
                                title: title
                            });
                        }
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            // USAGE:
            // var handlebars = require('handlebars');
            /* eslint-disable no-var */
            // var local = handlebars.create();
            var handlebars = __webpack_require__(28)['default'];
            var printer = __webpack_require__(56);
            handlebars.PrintVisitor = printer.PrintVisitor;
            handlebars.print = printer.print;
            module.exports = handlebars;
            // Publish a Node.js require() handler for .handlebars and .hbs files
            function extension(module, filename) {
                var fs = __webpack_require__(57);
                var templateString = fs.readFileSync(filename, 'utf8');
                module.exports = handlebars.compile(templateString);
            }
            /* istanbul ignore else */
            if ('function' !== 'undefined' && void 0) {
                (void 0)['.handlebars'] = extension;
                (void 0)['.hbs'] = extension;
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _handlebarsRuntime = __webpack_require__(29);
            var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
            // Compiler imports
            var _handlebarsCompilerAst = __webpack_require__(47);
            var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
            var _handlebarsCompilerBase = __webpack_require__(48);
            var _handlebarsCompilerCompiler = __webpack_require__(53);
            var _handlebarsCompilerJavascriptCompiler = __webpack_require__(54);
            var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
            var _handlebarsCompilerVisitor = __webpack_require__(51);
            var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
            var _handlebarsNoConflict = __webpack_require__(46);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            var _create = _handlebarsRuntime2['default'].create;
            function create() {
                var hb = _create();
                hb.compile = function (input, options) {
                    return _handlebarsCompilerCompiler.compile(input, options, hb);
                };
                hb.precompile = function (input, options) {
                    return _handlebarsCompilerCompiler.precompile(input, options, hb);
                };
                hb.AST = _handlebarsCompilerAst2['default'];
                hb.Compiler = _handlebarsCompilerCompiler.Compiler;
                hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
                hb.Parser = _handlebarsCompilerBase.parser;
                hb.parse = _handlebarsCompilerBase.parse;
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2['default'](inst);
            inst.Visitor = _handlebarsCompilerVisitor2['default'];
            inst['default'] = inst;
            exports['default'] = inst;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            // istanbul ignore next
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key))
                                newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }
            var _handlebarsBase = __webpack_require__(30);
            var base = _interopRequireWildcard(_handlebarsBase);
            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)
            var _handlebarsSafeString = __webpack_require__(44);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(32);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(31);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(45);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(46);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2['default'];
                hb.Exception = _handlebarsException2['default'];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function (spec) {
                    return runtime.template(spec, hb);
                };
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2['default'](inst);
            inst['default'] = inst;
            exports['default'] = inst;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _utils = __webpack_require__(31);
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(33);
            var _decorators = __webpack_require__(41);
            var _logger = __webpack_require__(43);
            var _logger2 = _interopRequireDefault(_logger);
            var VERSION = '4.0.11';
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 7;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: '<= 1.0.rc.2',
                // 1.0.rc.2 is actually rev2 but doesn't report it
                2: '== 1.0.0-rc.3',
                3: '== 1.0.0-rc.4',
                4: '== 1.x.x',
                5: '== 2.0.0-alpha.x',
                6: '>= 2.0.0-beta.1',
                7: '>= 4.0.0'
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = '[object Object]';
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2['default'],
                log: _logger2['default'].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) {
                            throw new _exception2['default']('Arg not supported with multiple helpers');
                        }
                        _utils.extend(this.helpers, name);
                    } else {
                        this.helpers[name] = fn;
                    }
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) {
                        _utils.extend(this.partials, name);
                    } else {
                        if (typeof partial === 'undefined') {
                            throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
                        }
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) {
                            throw new _exception2['default']('Arg not supported with multiple decorators');
                        }
                        _utils.extend(this.decorators, name);
                    } else {
                        this.decorators[name] = fn;
                    }
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                }
            };
            var log = _logger2['default'].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2['default'];    /***/
        },
        function (module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                '\'': '&#x27;',
                '`': '&#x60;',
                '=': '&#x3D;'
            };
            var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj) {
                for (var i = 1; i < arguments.length; i++) {
                    for (var key in arguments[i]) {
                        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                            obj[key] = arguments[i][key];
                        }
                    }
                }
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */
            var isFunction = function isFunction(value) {
                return typeof value === 'function';
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */
            if (isFunction(/x/)) {
                exports.isFunction = isFunction = function (value) {
                    return typeof value === 'function' && toString.call(value) === '[object Function]';
                };
            }
            exports.isFunction = isFunction;
            /* eslint-enable func-style */
            /* istanbul ignore next */
            var isArray = Array.isArray || function (value) {
                return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
            };
            exports.isArray = isArray;
            // Older IE versions do not directly support indexOf so we must implement our own, sadly.
            function indexOf(array, value) {
                for (var i = 0, len = array.length; i < len; i++) {
                    if (array[i] === value) {
                        return i;
                    }
                }
                return -1;
            }
            function escapeExpression(string) {
                if (typeof string !== 'string') {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) {
                        return string.toHTML();
                    } else if (string == null) {
                        return '';
                    } else if (!string) {
                        return string + '';
                    }
                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = '' + string;
                }
                if (!possible.test(string)) {
                    return string;
                }
                return string.replace(badChars, escapeChar);
            }
            function isEmpty(value) {
                if (!value && value !== 0) {
                    return true;
                } else if (isArray(value) && value.length === 0) {
                    return true;
                } else {
                    return false;
                }
            }
            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }
            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }
            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + '.' : '') + id;
            }    /***/
        },
        function (module, exports) {
            'use strict';
            exports.__esModule = true;
            var errorProps = [
                'description',
                'fileName',
                'lineNumber',
                'message',
                'name',
                'number',
                'stack'
            ];
            function Exception(message, node) {
                var loc = node && node.loc, line = undefined, column = undefined;
                if (loc) {
                    line = loc.start.line;
                    column = loc.start.column;
                    message += ' - ' + line + ':' + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for (var idx = 0; idx < errorProps.length; idx++) {
                    this[errorProps[idx]] = tmp[errorProps[idx]];
                }
                /* istanbul ignore else */
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, Exception);
                }
                try {
                    if (loc) {
                        this.lineNumber = line;
                        // Work around issue under safari where we can't directly set the column value
                        /* istanbul ignore next */
                        if (Object.defineProperty) {
                            Object.defineProperty(this, 'column', {
                                value: column,
                                enumerable: true
                            });
                        } else {
                            this.column = column;
                        }
                    }
                } catch (nop) {
                }
            }
            Exception.prototype = new Error();
            exports['default'] = Exception;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _helpersBlockHelperMissing = __webpack_require__(34);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(35);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(36);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(37);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(38);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(39);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(40);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);
            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2['default'](instance);
                _helpersEach2['default'](instance);
                _helpersHelperMissing2['default'](instance);
                _helpersIf2['default'](instance);
                _helpersLog2['default'](instance);
                _helpersLookup2['default'](instance);
                _helpersWith2['default'](instance);
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(31);
            exports['default'] = function (instance) {
                instance.registerHelper('blockHelperMissing', function (context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (context === true) {
                        return fn(this);
                    } else if (context === false || context == null) {
                        return inverse(this);
                    } else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) {
                                options.ids = [options.name];
                            }
                            return instance.helpers.each(context, options);
                        } else {
                            return inverse(this);
                        }
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = { data: data };
                        }
                        return fn(context, options);
                    }
                });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _utils = __webpack_require__(31);
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            exports['default'] = function (instance) {
                instance.registerHelper('each', function (context, options) {
                    if (!options) {
                        throw new _exception2['default']('Must pass iterator to #each');
                    }
                    var fn = options.fn, inverse = options.inverse, i = 0, ret = '', data = undefined, contextPath = undefined;
                    if (options.data && options.ids) {
                        contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
                    }
                    if (_utils.isFunction(context)) {
                        context = context.call(this);
                    }
                    if (options.data) {
                        data = _utils.createFrame(options.data);
                    }
                    function execIteration(field, index, last) {
                        if (data) {
                            data.key = field;
                            data.index = index;
                            data.first = index === 0;
                            data.last = !!last;
                            if (contextPath) {
                                data.contextPath = contextPath + field;
                            }
                        }
                        ret = ret + fn(context[field], {
                            data: data,
                            blockParams: _utils.blockParams([
                                context[field],
                                field
                            ], [
                                contextPath + field,
                                null
                            ])
                        });
                    }
                    if (context && typeof context === 'object') {
                        if (_utils.isArray(context)) {
                            for (var j = context.length; i < j; i++) {
                                if (i in context) {
                                    execIteration(i, i, i === context.length - 1);
                                }
                            }
                        } else {
                            var priorKey = undefined;
                            for (var key in context) {
                                if (context.hasOwnProperty(key)) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) {
                                        execIteration(priorKey, i - 1);
                                    }
                                    priorKey = key;
                                    i++;
                                }
                            }
                            if (priorKey !== undefined) {
                                execIteration(priorKey, i - 1, true);
                            }
                        }
                    }
                    if (i === 0) {
                        ret = inverse(this);
                    }
                    return ret;
                });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            exports['default'] = function (instance) {
                instance.registerHelper('helperMissing', function ()
                    /* [args, ]options */
                    {
                        if (arguments.length === 1) {
                            // A missing field in a {{foo}} construct.
                            return undefined;
                        } else {
                            // Someone is actually trying to call something, blow up.
                            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                        }
                    });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(31);
            exports['default'] = function (instance) {
                instance.registerHelper('if', function (conditional, options) {
                    if (_utils.isFunction(conditional)) {
                        conditional = conditional.call(this);
                    }
                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
                        return options.inverse(this);
                    } else {
                        return options.fn(this);
                    }
                });
                instance.registerHelper('unless', function (conditional, options) {
                    return instance.helpers['if'].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports) {
            'use strict';
            exports.__esModule = true;
            exports['default'] = function (instance) {
                instance.registerHelper('log', function ()
                    /* message, options */
                    {
                        var args = [undefined], options = arguments[arguments.length - 1];
                        for (var i = 0; i < arguments.length - 1; i++) {
                            args.push(arguments[i]);
                        }
                        var level = 1;
                        if (options.hash.level != null) {
                            level = options.hash.level;
                        } else if (options.data && options.data.level != null) {
                            level = options.data.level;
                        }
                        args[0] = level;
                        instance.log.apply(instance, args);
                    });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports) {
            'use strict';
            exports.__esModule = true;
            exports['default'] = function (instance) {
                instance.registerHelper('lookup', function (obj, field) {
                    return obj && obj[field];
                });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(31);
            exports['default'] = function (instance) {
                instance.registerHelper('with', function (context, options) {
                    if (_utils.isFunction(context)) {
                        context = context.call(this);
                    }
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([context], [data && data.contextPath])
                        });
                    } else {
                        return options.inverse(this);
                    }
                });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _decoratorsInline = __webpack_require__(42);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
            function registerDefaultDecorators(instance) {
                _decoratorsInline2['default'](instance);
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(31);
            exports['default'] = function (instance) {
                instance.registerDecorator('inline', function (fn, props, container, options) {
                    var ret = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret = function (context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }
                    props.partials[options.args[0]] = options.fn;
                    return ret;
                });
            };
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(31);
            var logger = {
                methodMap: [
                    'debug',
                    'info',
                    'warn',
                    'error'
                ],
                level: 'info',
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === 'string') {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) {
                            level = levelMap;
                        } else {
                            level = parseInt(level, 10);
                        }
                    }
                    return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        if (!console[method]) {
                            // eslint-disable-line no-console
                            method = 'log';
                        }
                        for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            message[_key - 1] = arguments[_key];
                        }
                        console[method].apply(console, message);    // eslint-disable-line no-console
                    }
                }
            };
            exports['default'] = logger;
            module.exports = exports['default'];    /***/
        },
        function (module, exports) {
            // Build out our basic SafeString type
            'use strict';
            exports.__esModule = true;
            function SafeString(string) {
                this.string = string;
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
                return '' + this.string;
            };
            exports['default'] = SafeString;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            // istanbul ignore next
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key))
                                newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }
            var _utils = __webpack_require__(31);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(30);
            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision !== currentRevision) {
                    if (compilerRevision < currentRevision) {
                        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                        throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
                    } else {
                        // Use the embedded version info since the runtime doesn't know about this revision yet
                        throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
                    }
                }
            }
            function template(templateSpec, env) {
                /* istanbul ignore next */
                if (!env) {
                    throw new _exception2['default']('No environment passed to template');
                }
                if (!templateSpec || !templateSpec.main) {
                    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
                }
                templateSpec.main.decorator = templateSpec.main_d;
                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as psuedo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);
                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) {
                            options.ids[0] = true;
                        }
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var result = env.VM.invokePartial.call(this, partial, context, options);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, options);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split('\n');
                            for (var i = 0, l = lines.length; i < l; i++) {
                                if (!lines[i] && i + 1 === l) {
                                    break;
                                }
                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join('\n');
                        }
                        return result;
                    } else {
                        throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
                    }
                }
                // Just add water
                var container = {
                    strict: function strict(obj, name) {
                        if (!(name in obj)) {
                            throw new _exception2['default']('"' + name + '" not defined in ' + obj);
                        }
                        return obj[name];
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for (var i = 0; i < len; i++) {
                            if (depths[i] && depths[i][name] != null) {
                                return depths[i][name];
                            }
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === 'function' ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + '_d'];
                        return ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) {
                            programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        } else if (!programWrapper) {
                            programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        }
                        return programWrapper;
                    },
                    data: function data(value, depth) {
                        while (value && depth--) {
                            value = value._parent;
                        }
                        return value;
                    },
                    merge: function merge(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) {
                            obj = Utils.extend({}, common, param);
                        }
                        return obj;
                    },
                    // An empty object to use as replacement for null-contexts
                    nullContext: Object.seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret._setup(options);
                    if (!options.partial && templateSpec.useData) {
                        data = initData(context, data);
                    }
                    var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) {
                            depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
                        } else {
                            depths = [context];
                        }
                    }
                    function main(context) {
                        return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context, options);
                }
                ret.isTop = true;
                ret._setup = function (options) {
                    if (!options.partial) {
                        container.helpers = container.merge(options.helpers, env.helpers);
                        if (templateSpec.usePartial) {
                            container.partials = container.merge(options.partials, env.partials);
                        }
                        if (templateSpec.usePartial || templateSpec.useDecorators) {
                            container.decorators = container.merge(options.decorators, env.decorators);
                        }
                    } else {
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                    }
                };
                ret._child = function (i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) {
                        throw new _exception2['default']('must pass block params');
                    }
                    if (templateSpec.useDepths && !depths) {
                        throw new _exception2['default']('must pass parent depths');
                    }
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
            }
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
                        currentDepths = [context].concat(depths);
                    }
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }
            function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === '@partial-block') {
                        partial = options.data['partial-block'];
                    } else {
                        partial = options.partials[options.name];
                    }
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }
            function invokePartial(partial, context, options) {
                // Use the current closure context to save the partial-block if this partial
                var currentPartialBlock = options.data && options.data['partial-block'];
                options.partial = true;
                if (options.ids) {
                    options.data.contextPath = options.ids[0] || options.data.contextPath;
                }
                var partialBlock = undefined;
                if (options.fn && options.fn !== noop) {
                    (function () {
                        options.data = _base.createFrame(options.data);
                        // Wrapper function to get access to currentPartialBlock from the closure
                        var fn = options.fn;
                        partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
                            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                            // Restore the partial-block from the closure for the execution of the block
                            // i.e. the part inside the block of the partial call.
                            options.data = _base.createFrame(options.data);
                            options.data['partial-block'] = currentPartialBlock;
                            return fn(context, options);
                        };
                        if (fn.partials) {
                            options.partials = Utils.extend({}, options.partials, fn.partials);
                        }
                    }());
                }
                if (partial === undefined && partialBlock) {
                    partial = partialBlock;
                }
                if (partial === undefined) {
                    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
                } else if (partial instanceof Function) {
                    return partial(context, options);
                }
            }
            function noop() {
                return '';
            }
            function initData(context, data) {
                if (!data || !('root' in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }    /***/
        },
        function (module, exports) {
            /* WEBPACK VAR INJECTION */
            (function (global) {
                /* global window */
                'use strict';
                exports.__esModule = true;
                exports['default'] = function (Handlebars) {
                    /* istanbul ignore next */
                    var root = typeof global !== 'undefined' ? global : window, $Handlebars = root.Handlebars;
                    /* istanbul ignore next */
                    Handlebars.noConflict = function () {
                        if (root.Handlebars === Handlebars) {
                            root.Handlebars = $Handlebars;
                        }
                        return Handlebars;
                    };
                };
                module.exports = exports['default'];    /* WEBPACK VAR INJECTION */
            }.call(exports, function () {
                return this;
            }()));    /***/
        },
        function (module, exports) {
            'use strict';
            exports.__esModule = true;
            var AST = {
                // Public API used to evaluate derived attributes regarding AST nodes
                helpers: {
                    // a mustache is definitely a helper if:
                    // * it is an eligible helper, and
                    // * it has at least one parameter or hash segment
                    helperExpression: function helperExpression(node) {
                        return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
                    },
                    scopedId: function scopedId(path) {
                        return /^\.|this\b/.test(path.original);
                    },
                    // an ID is simple if it only has one part, and that part is not
                    // `..` or `this`.
                    simpleId: function simpleId(path) {
                        return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
                    }
                }
            };
            // Must be exported as an object rather than the root of the module as the jison lexer
            // must modify the object to operate properly.
            exports['default'] = AST;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            exports.parse = parse;
            // istanbul ignore next
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key))
                                newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _parser = __webpack_require__(49);
            var _parser2 = _interopRequireDefault(_parser);
            var _whitespaceControl = __webpack_require__(50);
            var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
            var _helpers = __webpack_require__(52);
            var Helpers = _interopRequireWildcard(_helpers);
            var _utils = __webpack_require__(31);
            exports.parser = _parser2['default'];
            var yy = {};
            _utils.extend(yy, Helpers);
            function parse(input, options) {
                // Just return if an already-compiled AST was passed in.
                if (input.type === 'Program') {
                    return input;
                }
                _parser2['default'].yy = yy;
                // Altering the shared object here, but this is ok as parser is a sync operation
                yy.locInfo = function (locInfo) {
                    return new yy.SourceLocation(options && options.srcName, locInfo);
                };
                var strip = new _whitespaceControl2['default'](options);
                return strip.accept(_parser2['default'].parse(input));
            }    /***/
        },
        function (module, exports) {
            // File ignored in coverage tests via setting in .istanbul.yml
            /* Jison generated parser */
            'use strict';
            exports.__esModule = true;
            var handlebars = function () {
                var parser = {
                    trace: function trace() {
                    },
                    yy: {},
                    symbols_: {
                        'error': 2,
                        'root': 3,
                        'program': 4,
                        'EOF': 5,
                        'program_repetition0': 6,
                        'statement': 7,
                        'mustache': 8,
                        'block': 9,
                        'rawBlock': 10,
                        'partial': 11,
                        'partialBlock': 12,
                        'content': 13,
                        'COMMENT': 14,
                        'CONTENT': 15,
                        'openRawBlock': 16,
                        'rawBlock_repetition_plus0': 17,
                        'END_RAW_BLOCK': 18,
                        'OPEN_RAW_BLOCK': 19,
                        'helperName': 20,
                        'openRawBlock_repetition0': 21,
                        'openRawBlock_option0': 22,
                        'CLOSE_RAW_BLOCK': 23,
                        'openBlock': 24,
                        'block_option0': 25,
                        'closeBlock': 26,
                        'openInverse': 27,
                        'block_option1': 28,
                        'OPEN_BLOCK': 29,
                        'openBlock_repetition0': 30,
                        'openBlock_option0': 31,
                        'openBlock_option1': 32,
                        'CLOSE': 33,
                        'OPEN_INVERSE': 34,
                        'openInverse_repetition0': 35,
                        'openInverse_option0': 36,
                        'openInverse_option1': 37,
                        'openInverseChain': 38,
                        'OPEN_INVERSE_CHAIN': 39,
                        'openInverseChain_repetition0': 40,
                        'openInverseChain_option0': 41,
                        'openInverseChain_option1': 42,
                        'inverseAndProgram': 43,
                        'INVERSE': 44,
                        'inverseChain': 45,
                        'inverseChain_option0': 46,
                        'OPEN_ENDBLOCK': 47,
                        'OPEN': 48,
                        'mustache_repetition0': 49,
                        'mustache_option0': 50,
                        'OPEN_UNESCAPED': 51,
                        'mustache_repetition1': 52,
                        'mustache_option1': 53,
                        'CLOSE_UNESCAPED': 54,
                        'OPEN_PARTIAL': 55,
                        'partialName': 56,
                        'partial_repetition0': 57,
                        'partial_option0': 58,
                        'openPartialBlock': 59,
                        'OPEN_PARTIAL_BLOCK': 60,
                        'openPartialBlock_repetition0': 61,
                        'openPartialBlock_option0': 62,
                        'param': 63,
                        'sexpr': 64,
                        'OPEN_SEXPR': 65,
                        'sexpr_repetition0': 66,
                        'sexpr_option0': 67,
                        'CLOSE_SEXPR': 68,
                        'hash': 69,
                        'hash_repetition_plus0': 70,
                        'hashSegment': 71,
                        'ID': 72,
                        'EQUALS': 73,
                        'blockParams': 74,
                        'OPEN_BLOCK_PARAMS': 75,
                        'blockParams_repetition_plus0': 76,
                        'CLOSE_BLOCK_PARAMS': 77,
                        'path': 78,
                        'dataName': 79,
                        'STRING': 80,
                        'NUMBER': 81,
                        'BOOLEAN': 82,
                        'UNDEFINED': 83,
                        'NULL': 84,
                        'DATA': 85,
                        'pathSegments': 86,
                        'SEP': 87,
                        '$accept': 0,
                        '$end': 1
                    },
                    terminals_: {
                        2: 'error',
                        5: 'EOF',
                        14: 'COMMENT',
                        15: 'CONTENT',
                        18: 'END_RAW_BLOCK',
                        19: 'OPEN_RAW_BLOCK',
                        23: 'CLOSE_RAW_BLOCK',
                        29: 'OPEN_BLOCK',
                        33: 'CLOSE',
                        34: 'OPEN_INVERSE',
                        39: 'OPEN_INVERSE_CHAIN',
                        44: 'INVERSE',
                        47: 'OPEN_ENDBLOCK',
                        48: 'OPEN',
                        51: 'OPEN_UNESCAPED',
                        54: 'CLOSE_UNESCAPED',
                        55: 'OPEN_PARTIAL',
                        60: 'OPEN_PARTIAL_BLOCK',
                        65: 'OPEN_SEXPR',
                        68: 'CLOSE_SEXPR',
                        72: 'ID',
                        73: 'EQUALS',
                        75: 'OPEN_BLOCK_PARAMS',
                        77: 'CLOSE_BLOCK_PARAMS',
                        80: 'STRING',
                        81: 'NUMBER',
                        82: 'BOOLEAN',
                        83: 'UNDEFINED',
                        84: 'NULL',
                        85: 'DATA',
                        87: 'SEP'
                    },
                    productions_: [
                        0,
                        [
                            3,
                            2
                        ],
                        [
                            4,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            13,
                            1
                        ],
                        [
                            10,
                            3
                        ],
                        [
                            16,
                            5
                        ],
                        [
                            9,
                            4
                        ],
                        [
                            9,
                            4
                        ],
                        [
                            24,
                            6
                        ],
                        [
                            27,
                            6
                        ],
                        [
                            38,
                            6
                        ],
                        [
                            43,
                            2
                        ],
                        [
                            45,
                            3
                        ],
                        [
                            45,
                            1
                        ],
                        [
                            26,
                            3
                        ],
                        [
                            8,
                            5
                        ],
                        [
                            8,
                            5
                        ],
                        [
                            11,
                            5
                        ],
                        [
                            12,
                            3
                        ],
                        [
                            59,
                            5
                        ],
                        [
                            63,
                            1
                        ],
                        [
                            63,
                            1
                        ],
                        [
                            64,
                            5
                        ],
                        [
                            69,
                            1
                        ],
                        [
                            71,
                            3
                        ],
                        [
                            74,
                            3
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            20,
                            1
                        ],
                        [
                            56,
                            1
                        ],
                        [
                            56,
                            1
                        ],
                        [
                            79,
                            2
                        ],
                        [
                            78,
                            1
                        ],
                        [
                            86,
                            3
                        ],
                        [
                            86,
                            1
                        ],
                        [
                            6,
                            0
                        ],
                        [
                            6,
                            2
                        ],
                        [
                            17,
                            1
                        ],
                        [
                            17,
                            2
                        ],
                        [
                            21,
                            0
                        ],
                        [
                            21,
                            2
                        ],
                        [
                            22,
                            0
                        ],
                        [
                            22,
                            1
                        ],
                        [
                            25,
                            0
                        ],
                        [
                            25,
                            1
                        ],
                        [
                            28,
                            0
                        ],
                        [
                            28,
                            1
                        ],
                        [
                            30,
                            0
                        ],
                        [
                            30,
                            2
                        ],
                        [
                            31,
                            0
                        ],
                        [
                            31,
                            1
                        ],
                        [
                            32,
                            0
                        ],
                        [
                            32,
                            1
                        ],
                        [
                            35,
                            0
                        ],
                        [
                            35,
                            2
                        ],
                        [
                            36,
                            0
                        ],
                        [
                            36,
                            1
                        ],
                        [
                            37,
                            0
                        ],
                        [
                            37,
                            1
                        ],
                        [
                            40,
                            0
                        ],
                        [
                            40,
                            2
                        ],
                        [
                            41,
                            0
                        ],
                        [
                            41,
                            1
                        ],
                        [
                            42,
                            0
                        ],
                        [
                            42,
                            1
                        ],
                        [
                            46,
                            0
                        ],
                        [
                            46,
                            1
                        ],
                        [
                            49,
                            0
                        ],
                        [
                            49,
                            2
                        ],
                        [
                            50,
                            0
                        ],
                        [
                            50,
                            1
                        ],
                        [
                            52,
                            0
                        ],
                        [
                            52,
                            2
                        ],
                        [
                            53,
                            0
                        ],
                        [
                            53,
                            1
                        ],
                        [
                            57,
                            0
                        ],
                        [
                            57,
                            2
                        ],
                        [
                            58,
                            0
                        ],
                        [
                            58,
                            1
                        ],
                        [
                            61,
                            0
                        ],
                        [
                            61,
                            2
                        ],
                        [
                            62,
                            0
                        ],
                        [
                            62,
                            1
                        ],
                        [
                            66,
                            0
                        ],
                        [
                            66,
                            2
                        ],
                        [
                            67,
                            0
                        ],
                        [
                            67,
                            1
                        ],
                        [
                            70,
                            1
                        ],
                        [
                            70,
                            2
                        ],
                        [
                            76,
                            1
                        ],
                        [
                            76,
                            2
                        ]
                    ],
                    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                        var $0 = $$.length - 1;
                        switch (yystate) {
                        case 1:
                            return $$[$0 - 1];
                            break;
                        case 2:
                            this.$ = yy.prepareProgram($$[$0]);
                            break;
                        case 3:
                            this.$ = $$[$0];
                            break;
                        case 4:
                            this.$ = $$[$0];
                            break;
                        case 5:
                            this.$ = $$[$0];
                            break;
                        case 6:
                            this.$ = $$[$0];
                            break;
                        case 7:
                            this.$ = $$[$0];
                            break;
                        case 8:
                            this.$ = $$[$0];
                            break;
                        case 9:
                            this.$ = {
                                type: 'CommentStatement',
                                value: yy.stripComment($$[$0]),
                                strip: yy.stripFlags($$[$0], $$[$0]),
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 10:
                            this.$ = {
                                type: 'ContentStatement',
                                original: $$[$0],
                                value: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 11:
                            this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                            break;
                        case 12:
                            this.$ = {
                                path: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1]
                            };
                            break;
                        case 13:
                            this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                            break;
                        case 14:
                            this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                            break;
                        case 15:
                            this.$ = {
                                open: $$[$0 - 5],
                                path: $$[$0 - 4],
                                params: $$[$0 - 3],
                                hash: $$[$0 - 2],
                                blockParams: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 5], $$[$0])
                            };
                            break;
                        case 16:
                            this.$ = {
                                path: $$[$0 - 4],
                                params: $$[$0 - 3],
                                hash: $$[$0 - 2],
                                blockParams: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 5], $$[$0])
                            };
                            break;
                        case 17:
                            this.$ = {
                                path: $$[$0 - 4],
                                params: $$[$0 - 3],
                                hash: $$[$0 - 2],
                                blockParams: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 5], $$[$0])
                            };
                            break;
                        case 18:
                            this.$ = {
                                strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                                program: $$[$0]
                            };
                            break;
                        case 19:
                            var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                            program.chained = true;
                            this.$ = {
                                strip: $$[$0 - 2].strip,
                                program: program,
                                chain: true
                            };
                            break;
                        case 20:
                            this.$ = $$[$0];
                            break;
                        case 21:
                            this.$ = {
                                path: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 2], $$[$0])
                            };
                            break;
                        case 22:
                            this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                            break;
                        case 23:
                            this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                            break;
                        case 24:
                            this.$ = {
                                type: 'PartialStatement',
                                name: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1],
                                indent: '',
                                strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 25:
                            this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                            break;
                        case 26:
                            this.$ = {
                                path: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 4], $$[$0])
                            };
                            break;
                        case 27:
                            this.$ = $$[$0];
                            break;
                        case 28:
                            this.$ = $$[$0];
                            break;
                        case 29:
                            this.$ = {
                                type: 'SubExpression',
                                path: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1],
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 30:
                            this.$ = {
                                type: 'Hash',
                                pairs: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 31:
                            this.$ = {
                                type: 'HashPair',
                                key: yy.id($$[$0 - 2]),
                                value: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 32:
                            this.$ = yy.id($$[$0 - 1]);
                            break;
                        case 33:
                            this.$ = $$[$0];
                            break;
                        case 34:
                            this.$ = $$[$0];
                            break;
                        case 35:
                            this.$ = {
                                type: 'StringLiteral',
                                value: $$[$0],
                                original: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 36:
                            this.$ = {
                                type: 'NumberLiteral',
                                value: Number($$[$0]),
                                original: Number($$[$0]),
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 37:
                            this.$ = {
                                type: 'BooleanLiteral',
                                value: $$[$0] === 'true',
                                original: $$[$0] === 'true',
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 38:
                            this.$ = {
                                type: 'UndefinedLiteral',
                                original: undefined,
                                value: undefined,
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 39:
                            this.$ = {
                                type: 'NullLiteral',
                                original: null,
                                value: null,
                                loc: yy.locInfo(this._$)
                            };
                            break;
                        case 40:
                            this.$ = $$[$0];
                            break;
                        case 41:
                            this.$ = $$[$0];
                            break;
                        case 42:
                            this.$ = yy.preparePath(true, $$[$0], this._$);
                            break;
                        case 43:
                            this.$ = yy.preparePath(false, $$[$0], this._$);
                            break;
                        case 44:
                            $$[$0 - 2].push({
                                part: yy.id($$[$0]),
                                original: $$[$0],
                                separator: $$[$0 - 1]
                            });
                            this.$ = $$[$0 - 2];
                            break;
                        case 45:
                            this.$ = [{
                                    part: yy.id($$[$0]),
                                    original: $$[$0]
                                }];
                            break;
                        case 46:
                            this.$ = [];
                            break;
                        case 47:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 48:
                            this.$ = [$$[$0]];
                            break;
                        case 49:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 50:
                            this.$ = [];
                            break;
                        case 51:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 58:
                            this.$ = [];
                            break;
                        case 59:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 64:
                            this.$ = [];
                            break;
                        case 65:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 70:
                            this.$ = [];
                            break;
                        case 71:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 78:
                            this.$ = [];
                            break;
                        case 79:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 82:
                            this.$ = [];
                            break;
                        case 83:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 86:
                            this.$ = [];
                            break;
                        case 87:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 90:
                            this.$ = [];
                            break;
                        case 91:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 94:
                            this.$ = [];
                            break;
                        case 95:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 98:
                            this.$ = [$$[$0]];
                            break;
                        case 99:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 100:
                            this.$ = [$$[$0]];
                            break;
                        case 101:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        }
                    },
                    table: [
                        {
                            3: 1,
                            4: 2,
                            5: [
                                2,
                                46
                            ],
                            6: 3,
                            14: [
                                2,
                                46
                            ],
                            15: [
                                2,
                                46
                            ],
                            19: [
                                2,
                                46
                            ],
                            29: [
                                2,
                                46
                            ],
                            34: [
                                2,
                                46
                            ],
                            48: [
                                2,
                                46
                            ],
                            51: [
                                2,
                                46
                            ],
                            55: [
                                2,
                                46
                            ],
                            60: [
                                2,
                                46
                            ]
                        },
                        { 1: [3] },
                        {
                            5: [
                                1,
                                4
                            ]
                        },
                        {
                            5: [
                                2,
                                2
                            ],
                            7: 5,
                            8: 6,
                            9: 7,
                            10: 8,
                            11: 9,
                            12: 10,
                            13: 11,
                            14: [
                                1,
                                12
                            ],
                            15: [
                                1,
                                20
                            ],
                            16: 17,
                            19: [
                                1,
                                23
                            ],
                            24: 15,
                            27: 16,
                            29: [
                                1,
                                21
                            ],
                            34: [
                                1,
                                22
                            ],
                            39: [
                                2,
                                2
                            ],
                            44: [
                                2,
                                2
                            ],
                            47: [
                                2,
                                2
                            ],
                            48: [
                                1,
                                13
                            ],
                            51: [
                                1,
                                14
                            ],
                            55: [
                                1,
                                18
                            ],
                            59: 19,
                            60: [
                                1,
                                24
                            ]
                        },
                        {
                            1: [
                                2,
                                1
                            ]
                        },
                        {
                            5: [
                                2,
                                47
                            ],
                            14: [
                                2,
                                47
                            ],
                            15: [
                                2,
                                47
                            ],
                            19: [
                                2,
                                47
                            ],
                            29: [
                                2,
                                47
                            ],
                            34: [
                                2,
                                47
                            ],
                            39: [
                                2,
                                47
                            ],
                            44: [
                                2,
                                47
                            ],
                            47: [
                                2,
                                47
                            ],
                            48: [
                                2,
                                47
                            ],
                            51: [
                                2,
                                47
                            ],
                            55: [
                                2,
                                47
                            ],
                            60: [
                                2,
                                47
                            ]
                        },
                        {
                            5: [
                                2,
                                3
                            ],
                            14: [
                                2,
                                3
                            ],
                            15: [
                                2,
                                3
                            ],
                            19: [
                                2,
                                3
                            ],
                            29: [
                                2,
                                3
                            ],
                            34: [
                                2,
                                3
                            ],
                            39: [
                                2,
                                3
                            ],
                            44: [
                                2,
                                3
                            ],
                            47: [
                                2,
                                3
                            ],
                            48: [
                                2,
                                3
                            ],
                            51: [
                                2,
                                3
                            ],
                            55: [
                                2,
                                3
                            ],
                            60: [
                                2,
                                3
                            ]
                        },
                        {
                            5: [
                                2,
                                4
                            ],
                            14: [
                                2,
                                4
                            ],
                            15: [
                                2,
                                4
                            ],
                            19: [
                                2,
                                4
                            ],
                            29: [
                                2,
                                4
                            ],
                            34: [
                                2,
                                4
                            ],
                            39: [
                                2,
                                4
                            ],
                            44: [
                                2,
                                4
                            ],
                            47: [
                                2,
                                4
                            ],
                            48: [
                                2,
                                4
                            ],
                            51: [
                                2,
                                4
                            ],
                            55: [
                                2,
                                4
                            ],
                            60: [
                                2,
                                4
                            ]
                        },
                        {
                            5: [
                                2,
                                5
                            ],
                            14: [
                                2,
                                5
                            ],
                            15: [
                                2,
                                5
                            ],
                            19: [
                                2,
                                5
                            ],
                            29: [
                                2,
                                5
                            ],
                            34: [
                                2,
                                5
                            ],
                            39: [
                                2,
                                5
                            ],
                            44: [
                                2,
                                5
                            ],
                            47: [
                                2,
                                5
                            ],
                            48: [
                                2,
                                5
                            ],
                            51: [
                                2,
                                5
                            ],
                            55: [
                                2,
                                5
                            ],
                            60: [
                                2,
                                5
                            ]
                        },
                        {
                            5: [
                                2,
                                6
                            ],
                            14: [
                                2,
                                6
                            ],
                            15: [
                                2,
                                6
                            ],
                            19: [
                                2,
                                6
                            ],
                            29: [
                                2,
                                6
                            ],
                            34: [
                                2,
                                6
                            ],
                            39: [
                                2,
                                6
                            ],
                            44: [
                                2,
                                6
                            ],
                            47: [
                                2,
                                6
                            ],
                            48: [
                                2,
                                6
                            ],
                            51: [
                                2,
                                6
                            ],
                            55: [
                                2,
                                6
                            ],
                            60: [
                                2,
                                6
                            ]
                        },
                        {
                            5: [
                                2,
                                7
                            ],
                            14: [
                                2,
                                7
                            ],
                            15: [
                                2,
                                7
                            ],
                            19: [
                                2,
                                7
                            ],
                            29: [
                                2,
                                7
                            ],
                            34: [
                                2,
                                7
                            ],
                            39: [
                                2,
                                7
                            ],
                            44: [
                                2,
                                7
                            ],
                            47: [
                                2,
                                7
                            ],
                            48: [
                                2,
                                7
                            ],
                            51: [
                                2,
                                7
                            ],
                            55: [
                                2,
                                7
                            ],
                            60: [
                                2,
                                7
                            ]
                        },
                        {
                            5: [
                                2,
                                8
                            ],
                            14: [
                                2,
                                8
                            ],
                            15: [
                                2,
                                8
                            ],
                            19: [
                                2,
                                8
                            ],
                            29: [
                                2,
                                8
                            ],
                            34: [
                                2,
                                8
                            ],
                            39: [
                                2,
                                8
                            ],
                            44: [
                                2,
                                8
                            ],
                            47: [
                                2,
                                8
                            ],
                            48: [
                                2,
                                8
                            ],
                            51: [
                                2,
                                8
                            ],
                            55: [
                                2,
                                8
                            ],
                            60: [
                                2,
                                8
                            ]
                        },
                        {
                            5: [
                                2,
                                9
                            ],
                            14: [
                                2,
                                9
                            ],
                            15: [
                                2,
                                9
                            ],
                            19: [
                                2,
                                9
                            ],
                            29: [
                                2,
                                9
                            ],
                            34: [
                                2,
                                9
                            ],
                            39: [
                                2,
                                9
                            ],
                            44: [
                                2,
                                9
                            ],
                            47: [
                                2,
                                9
                            ],
                            48: [
                                2,
                                9
                            ],
                            51: [
                                2,
                                9
                            ],
                            55: [
                                2,
                                9
                            ],
                            60: [
                                2,
                                9
                            ]
                        },
                        {
                            20: 25,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 36,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            4: 37,
                            6: 3,
                            14: [
                                2,
                                46
                            ],
                            15: [
                                2,
                                46
                            ],
                            19: [
                                2,
                                46
                            ],
                            29: [
                                2,
                                46
                            ],
                            34: [
                                2,
                                46
                            ],
                            39: [
                                2,
                                46
                            ],
                            44: [
                                2,
                                46
                            ],
                            47: [
                                2,
                                46
                            ],
                            48: [
                                2,
                                46
                            ],
                            51: [
                                2,
                                46
                            ],
                            55: [
                                2,
                                46
                            ],
                            60: [
                                2,
                                46
                            ]
                        },
                        {
                            4: 38,
                            6: 3,
                            14: [
                                2,
                                46
                            ],
                            15: [
                                2,
                                46
                            ],
                            19: [
                                2,
                                46
                            ],
                            29: [
                                2,
                                46
                            ],
                            34: [
                                2,
                                46
                            ],
                            44: [
                                2,
                                46
                            ],
                            47: [
                                2,
                                46
                            ],
                            48: [
                                2,
                                46
                            ],
                            51: [
                                2,
                                46
                            ],
                            55: [
                                2,
                                46
                            ],
                            60: [
                                2,
                                46
                            ]
                        },
                        {
                            13: 40,
                            15: [
                                1,
                                20
                            ],
                            17: 39
                        },
                        {
                            20: 42,
                            56: 41,
                            64: 43,
                            65: [
                                1,
                                44
                            ],
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            4: 45,
                            6: 3,
                            14: [
                                2,
                                46
                            ],
                            15: [
                                2,
                                46
                            ],
                            19: [
                                2,
                                46
                            ],
                            29: [
                                2,
                                46
                            ],
                            34: [
                                2,
                                46
                            ],
                            47: [
                                2,
                                46
                            ],
                            48: [
                                2,
                                46
                            ],
                            51: [
                                2,
                                46
                            ],
                            55: [
                                2,
                                46
                            ],
                            60: [
                                2,
                                46
                            ]
                        },
                        {
                            5: [
                                2,
                                10
                            ],
                            14: [
                                2,
                                10
                            ],
                            15: [
                                2,
                                10
                            ],
                            18: [
                                2,
                                10
                            ],
                            19: [
                                2,
                                10
                            ],
                            29: [
                                2,
                                10
                            ],
                            34: [
                                2,
                                10
                            ],
                            39: [
                                2,
                                10
                            ],
                            44: [
                                2,
                                10
                            ],
                            47: [
                                2,
                                10
                            ],
                            48: [
                                2,
                                10
                            ],
                            51: [
                                2,
                                10
                            ],
                            55: [
                                2,
                                10
                            ],
                            60: [
                                2,
                                10
                            ]
                        },
                        {
                            20: 46,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 47,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 48,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 42,
                            56: 49,
                            64: 43,
                            65: [
                                1,
                                44
                            ],
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            33: [
                                2,
                                78
                            ],
                            49: 50,
                            65: [
                                2,
                                78
                            ],
                            72: [
                                2,
                                78
                            ],
                            80: [
                                2,
                                78
                            ],
                            81: [
                                2,
                                78
                            ],
                            82: [
                                2,
                                78
                            ],
                            83: [
                                2,
                                78
                            ],
                            84: [
                                2,
                                78
                            ],
                            85: [
                                2,
                                78
                            ]
                        },
                        {
                            23: [
                                2,
                                33
                            ],
                            33: [
                                2,
                                33
                            ],
                            54: [
                                2,
                                33
                            ],
                            65: [
                                2,
                                33
                            ],
                            68: [
                                2,
                                33
                            ],
                            72: [
                                2,
                                33
                            ],
                            75: [
                                2,
                                33
                            ],
                            80: [
                                2,
                                33
                            ],
                            81: [
                                2,
                                33
                            ],
                            82: [
                                2,
                                33
                            ],
                            83: [
                                2,
                                33
                            ],
                            84: [
                                2,
                                33
                            ],
                            85: [
                                2,
                                33
                            ]
                        },
                        {
                            23: [
                                2,
                                34
                            ],
                            33: [
                                2,
                                34
                            ],
                            54: [
                                2,
                                34
                            ],
                            65: [
                                2,
                                34
                            ],
                            68: [
                                2,
                                34
                            ],
                            72: [
                                2,
                                34
                            ],
                            75: [
                                2,
                                34
                            ],
                            80: [
                                2,
                                34
                            ],
                            81: [
                                2,
                                34
                            ],
                            82: [
                                2,
                                34
                            ],
                            83: [
                                2,
                                34
                            ],
                            84: [
                                2,
                                34
                            ],
                            85: [
                                2,
                                34
                            ]
                        },
                        {
                            23: [
                                2,
                                35
                            ],
                            33: [
                                2,
                                35
                            ],
                            54: [
                                2,
                                35
                            ],
                            65: [
                                2,
                                35
                            ],
                            68: [
                                2,
                                35
                            ],
                            72: [
                                2,
                                35
                            ],
                            75: [
                                2,
                                35
                            ],
                            80: [
                                2,
                                35
                            ],
                            81: [
                                2,
                                35
                            ],
                            82: [
                                2,
                                35
                            ],
                            83: [
                                2,
                                35
                            ],
                            84: [
                                2,
                                35
                            ],
                            85: [
                                2,
                                35
                            ]
                        },
                        {
                            23: [
                                2,
                                36
                            ],
                            33: [
                                2,
                                36
                            ],
                            54: [
                                2,
                                36
                            ],
                            65: [
                                2,
                                36
                            ],
                            68: [
                                2,
                                36
                            ],
                            72: [
                                2,
                                36
                            ],
                            75: [
                                2,
                                36
                            ],
                            80: [
                                2,
                                36
                            ],
                            81: [
                                2,
                                36
                            ],
                            82: [
                                2,
                                36
                            ],
                            83: [
                                2,
                                36
                            ],
                            84: [
                                2,
                                36
                            ],
                            85: [
                                2,
                                36
                            ]
                        },
                        {
                            23: [
                                2,
                                37
                            ],
                            33: [
                                2,
                                37
                            ],
                            54: [
                                2,
                                37
                            ],
                            65: [
                                2,
                                37
                            ],
                            68: [
                                2,
                                37
                            ],
                            72: [
                                2,
                                37
                            ],
                            75: [
                                2,
                                37
                            ],
                            80: [
                                2,
                                37
                            ],
                            81: [
                                2,
                                37
                            ],
                            82: [
                                2,
                                37
                            ],
                            83: [
                                2,
                                37
                            ],
                            84: [
                                2,
                                37
                            ],
                            85: [
                                2,
                                37
                            ]
                        },
                        {
                            23: [
                                2,
                                38
                            ],
                            33: [
                                2,
                                38
                            ],
                            54: [
                                2,
                                38
                            ],
                            65: [
                                2,
                                38
                            ],
                            68: [
                                2,
                                38
                            ],
                            72: [
                                2,
                                38
                            ],
                            75: [
                                2,
                                38
                            ],
                            80: [
                                2,
                                38
                            ],
                            81: [
                                2,
                                38
                            ],
                            82: [
                                2,
                                38
                            ],
                            83: [
                                2,
                                38
                            ],
                            84: [
                                2,
                                38
                            ],
                            85: [
                                2,
                                38
                            ]
                        },
                        {
                            23: [
                                2,
                                39
                            ],
                            33: [
                                2,
                                39
                            ],
                            54: [
                                2,
                                39
                            ],
                            65: [
                                2,
                                39
                            ],
                            68: [
                                2,
                                39
                            ],
                            72: [
                                2,
                                39
                            ],
                            75: [
                                2,
                                39
                            ],
                            80: [
                                2,
                                39
                            ],
                            81: [
                                2,
                                39
                            ],
                            82: [
                                2,
                                39
                            ],
                            83: [
                                2,
                                39
                            ],
                            84: [
                                2,
                                39
                            ],
                            85: [
                                2,
                                39
                            ]
                        },
                        {
                            23: [
                                2,
                                43
                            ],
                            33: [
                                2,
                                43
                            ],
                            54: [
                                2,
                                43
                            ],
                            65: [
                                2,
                                43
                            ],
                            68: [
                                2,
                                43
                            ],
                            72: [
                                2,
                                43
                            ],
                            75: [
                                2,
                                43
                            ],
                            80: [
                                2,
                                43
                            ],
                            81: [
                                2,
                                43
                            ],
                            82: [
                                2,
                                43
                            ],
                            83: [
                                2,
                                43
                            ],
                            84: [
                                2,
                                43
                            ],
                            85: [
                                2,
                                43
                            ],
                            87: [
                                1,
                                51
                            ]
                        },
                        {
                            72: [
                                1,
                                35
                            ],
                            86: 52
                        },
                        {
                            23: [
                                2,
                                45
                            ],
                            33: [
                                2,
                                45
                            ],
                            54: [
                                2,
                                45
                            ],
                            65: [
                                2,
                                45
                            ],
                            68: [
                                2,
                                45
                            ],
                            72: [
                                2,
                                45
                            ],
                            75: [
                                2,
                                45
                            ],
                            80: [
                                2,
                                45
                            ],
                            81: [
                                2,
                                45
                            ],
                            82: [
                                2,
                                45
                            ],
                            83: [
                                2,
                                45
                            ],
                            84: [
                                2,
                                45
                            ],
                            85: [
                                2,
                                45
                            ],
                            87: [
                                2,
                                45
                            ]
                        },
                        {
                            52: 53,
                            54: [
                                2,
                                82
                            ],
                            65: [
                                2,
                                82
                            ],
                            72: [
                                2,
                                82
                            ],
                            80: [
                                2,
                                82
                            ],
                            81: [
                                2,
                                82
                            ],
                            82: [
                                2,
                                82
                            ],
                            83: [
                                2,
                                82
                            ],
                            84: [
                                2,
                                82
                            ],
                            85: [
                                2,
                                82
                            ]
                        },
                        {
                            25: 54,
                            38: 56,
                            39: [
                                1,
                                58
                            ],
                            43: 57,
                            44: [
                                1,
                                59
                            ],
                            45: 55,
                            47: [
                                2,
                                54
                            ]
                        },
                        {
                            28: 60,
                            43: 61,
                            44: [
                                1,
                                59
                            ],
                            47: [
                                2,
                                56
                            ]
                        },
                        {
                            13: 63,
                            15: [
                                1,
                                20
                            ],
                            18: [
                                1,
                                62
                            ]
                        },
                        {
                            15: [
                                2,
                                48
                            ],
                            18: [
                                2,
                                48
                            ]
                        },
                        {
                            33: [
                                2,
                                86
                            ],
                            57: 64,
                            65: [
                                2,
                                86
                            ],
                            72: [
                                2,
                                86
                            ],
                            80: [
                                2,
                                86
                            ],
                            81: [
                                2,
                                86
                            ],
                            82: [
                                2,
                                86
                            ],
                            83: [
                                2,
                                86
                            ],
                            84: [
                                2,
                                86
                            ],
                            85: [
                                2,
                                86
                            ]
                        },
                        {
                            33: [
                                2,
                                40
                            ],
                            65: [
                                2,
                                40
                            ],
                            72: [
                                2,
                                40
                            ],
                            80: [
                                2,
                                40
                            ],
                            81: [
                                2,
                                40
                            ],
                            82: [
                                2,
                                40
                            ],
                            83: [
                                2,
                                40
                            ],
                            84: [
                                2,
                                40
                            ],
                            85: [
                                2,
                                40
                            ]
                        },
                        {
                            33: [
                                2,
                                41
                            ],
                            65: [
                                2,
                                41
                            ],
                            72: [
                                2,
                                41
                            ],
                            80: [
                                2,
                                41
                            ],
                            81: [
                                2,
                                41
                            ],
                            82: [
                                2,
                                41
                            ],
                            83: [
                                2,
                                41
                            ],
                            84: [
                                2,
                                41
                            ],
                            85: [
                                2,
                                41
                            ]
                        },
                        {
                            20: 65,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            26: 66,
                            47: [
                                1,
                                67
                            ]
                        },
                        {
                            30: 68,
                            33: [
                                2,
                                58
                            ],
                            65: [
                                2,
                                58
                            ],
                            72: [
                                2,
                                58
                            ],
                            75: [
                                2,
                                58
                            ],
                            80: [
                                2,
                                58
                            ],
                            81: [
                                2,
                                58
                            ],
                            82: [
                                2,
                                58
                            ],
                            83: [
                                2,
                                58
                            ],
                            84: [
                                2,
                                58
                            ],
                            85: [
                                2,
                                58
                            ]
                        },
                        {
                            33: [
                                2,
                                64
                            ],
                            35: 69,
                            65: [
                                2,
                                64
                            ],
                            72: [
                                2,
                                64
                            ],
                            75: [
                                2,
                                64
                            ],
                            80: [
                                2,
                                64
                            ],
                            81: [
                                2,
                                64
                            ],
                            82: [
                                2,
                                64
                            ],
                            83: [
                                2,
                                64
                            ],
                            84: [
                                2,
                                64
                            ],
                            85: [
                                2,
                                64
                            ]
                        },
                        {
                            21: 70,
                            23: [
                                2,
                                50
                            ],
                            65: [
                                2,
                                50
                            ],
                            72: [
                                2,
                                50
                            ],
                            80: [
                                2,
                                50
                            ],
                            81: [
                                2,
                                50
                            ],
                            82: [
                                2,
                                50
                            ],
                            83: [
                                2,
                                50
                            ],
                            84: [
                                2,
                                50
                            ],
                            85: [
                                2,
                                50
                            ]
                        },
                        {
                            33: [
                                2,
                                90
                            ],
                            61: 71,
                            65: [
                                2,
                                90
                            ],
                            72: [
                                2,
                                90
                            ],
                            80: [
                                2,
                                90
                            ],
                            81: [
                                2,
                                90
                            ],
                            82: [
                                2,
                                90
                            ],
                            83: [
                                2,
                                90
                            ],
                            84: [
                                2,
                                90
                            ],
                            85: [
                                2,
                                90
                            ]
                        },
                        {
                            20: 75,
                            33: [
                                2,
                                80
                            ],
                            50: 72,
                            63: 73,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 74,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            72: [
                                1,
                                80
                            ]
                        },
                        {
                            23: [
                                2,
                                42
                            ],
                            33: [
                                2,
                                42
                            ],
                            54: [
                                2,
                                42
                            ],
                            65: [
                                2,
                                42
                            ],
                            68: [
                                2,
                                42
                            ],
                            72: [
                                2,
                                42
                            ],
                            75: [
                                2,
                                42
                            ],
                            80: [
                                2,
                                42
                            ],
                            81: [
                                2,
                                42
                            ],
                            82: [
                                2,
                                42
                            ],
                            83: [
                                2,
                                42
                            ],
                            84: [
                                2,
                                42
                            ],
                            85: [
                                2,
                                42
                            ],
                            87: [
                                1,
                                51
                            ]
                        },
                        {
                            20: 75,
                            53: 81,
                            54: [
                                2,
                                84
                            ],
                            63: 82,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 83,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            26: 84,
                            47: [
                                1,
                                67
                            ]
                        },
                        {
                            47: [
                                2,
                                55
                            ]
                        },
                        {
                            4: 85,
                            6: 3,
                            14: [
                                2,
                                46
                            ],
                            15: [
                                2,
                                46
                            ],
                            19: [
                                2,
                                46
                            ],
                            29: [
                                2,
                                46
                            ],
                            34: [
                                2,
                                46
                            ],
                            39: [
                                2,
                                46
                            ],
                            44: [
                                2,
                                46
                            ],
                            47: [
                                2,
                                46
                            ],
                            48: [
                                2,
                                46
                            ],
                            51: [
                                2,
                                46
                            ],
                            55: [
                                2,
                                46
                            ],
                            60: [
                                2,
                                46
                            ]
                        },
                        {
                            47: [
                                2,
                                20
                            ]
                        },
                        {
                            20: 86,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            4: 87,
                            6: 3,
                            14: [
                                2,
                                46
                            ],
                            15: [
                                2,
                                46
                            ],
                            19: [
                                2,
                                46
                            ],
                            29: [
                                2,
                                46
                            ],
                            34: [
                                2,
                                46
                            ],
                            47: [
                                2,
                                46
                            ],
                            48: [
                                2,
                                46
                            ],
                            51: [
                                2,
                                46
                            ],
                            55: [
                                2,
                                46
                            ],
                            60: [
                                2,
                                46
                            ]
                        },
                        {
                            26: 88,
                            47: [
                                1,
                                67
                            ]
                        },
                        {
                            47: [
                                2,
                                57
                            ]
                        },
                        {
                            5: [
                                2,
                                11
                            ],
                            14: [
                                2,
                                11
                            ],
                            15: [
                                2,
                                11
                            ],
                            19: [
                                2,
                                11
                            ],
                            29: [
                                2,
                                11
                            ],
                            34: [
                                2,
                                11
                            ],
                            39: [
                                2,
                                11
                            ],
                            44: [
                                2,
                                11
                            ],
                            47: [
                                2,
                                11
                            ],
                            48: [
                                2,
                                11
                            ],
                            51: [
                                2,
                                11
                            ],
                            55: [
                                2,
                                11
                            ],
                            60: [
                                2,
                                11
                            ]
                        },
                        {
                            15: [
                                2,
                                49
                            ],
                            18: [
                                2,
                                49
                            ]
                        },
                        {
                            20: 75,
                            33: [
                                2,
                                88
                            ],
                            58: 89,
                            63: 90,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 91,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            65: [
                                2,
                                94
                            ],
                            66: 92,
                            68: [
                                2,
                                94
                            ],
                            72: [
                                2,
                                94
                            ],
                            80: [
                                2,
                                94
                            ],
                            81: [
                                2,
                                94
                            ],
                            82: [
                                2,
                                94
                            ],
                            83: [
                                2,
                                94
                            ],
                            84: [
                                2,
                                94
                            ],
                            85: [
                                2,
                                94
                            ]
                        },
                        {
                            5: [
                                2,
                                25
                            ],
                            14: [
                                2,
                                25
                            ],
                            15: [
                                2,
                                25
                            ],
                            19: [
                                2,
                                25
                            ],
                            29: [
                                2,
                                25
                            ],
                            34: [
                                2,
                                25
                            ],
                            39: [
                                2,
                                25
                            ],
                            44: [
                                2,
                                25
                            ],
                            47: [
                                2,
                                25
                            ],
                            48: [
                                2,
                                25
                            ],
                            51: [
                                2,
                                25
                            ],
                            55: [
                                2,
                                25
                            ],
                            60: [
                                2,
                                25
                            ]
                        },
                        {
                            20: 93,
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 75,
                            31: 94,
                            33: [
                                2,
                                60
                            ],
                            63: 95,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 96,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            75: [
                                2,
                                60
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 75,
                            33: [
                                2,
                                66
                            ],
                            36: 97,
                            63: 98,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 99,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            75: [
                                2,
                                66
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 75,
                            22: 100,
                            23: [
                                2,
                                52
                            ],
                            63: 101,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 102,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            20: 75,
                            33: [
                                2,
                                92
                            ],
                            62: 103,
                            63: 104,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 105,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            33: [
                                1,
                                106
                            ]
                        },
                        {
                            33: [
                                2,
                                79
                            ],
                            65: [
                                2,
                                79
                            ],
                            72: [
                                2,
                                79
                            ],
                            80: [
                                2,
                                79
                            ],
                            81: [
                                2,
                                79
                            ],
                            82: [
                                2,
                                79
                            ],
                            83: [
                                2,
                                79
                            ],
                            84: [
                                2,
                                79
                            ],
                            85: [
                                2,
                                79
                            ]
                        },
                        {
                            33: [
                                2,
                                81
                            ]
                        },
                        {
                            23: [
                                2,
                                27
                            ],
                            33: [
                                2,
                                27
                            ],
                            54: [
                                2,
                                27
                            ],
                            65: [
                                2,
                                27
                            ],
                            68: [
                                2,
                                27
                            ],
                            72: [
                                2,
                                27
                            ],
                            75: [
                                2,
                                27
                            ],
                            80: [
                                2,
                                27
                            ],
                            81: [
                                2,
                                27
                            ],
                            82: [
                                2,
                                27
                            ],
                            83: [
                                2,
                                27
                            ],
                            84: [
                                2,
                                27
                            ],
                            85: [
                                2,
                                27
                            ]
                        },
                        {
                            23: [
                                2,
                                28
                            ],
                            33: [
                                2,
                                28
                            ],
                            54: [
                                2,
                                28
                            ],
                            65: [
                                2,
                                28
                            ],
                            68: [
                                2,
                                28
                            ],
                            72: [
                                2,
                                28
                            ],
                            75: [
                                2,
                                28
                            ],
                            80: [
                                2,
                                28
                            ],
                            81: [
                                2,
                                28
                            ],
                            82: [
                                2,
                                28
                            ],
                            83: [
                                2,
                                28
                            ],
                            84: [
                                2,
                                28
                            ],
                            85: [
                                2,
                                28
                            ]
                        },
                        {
                            23: [
                                2,
                                30
                            ],
                            33: [
                                2,
                                30
                            ],
                            54: [
                                2,
                                30
                            ],
                            68: [
                                2,
                                30
                            ],
                            71: 107,
                            72: [
                                1,
                                108
                            ],
                            75: [
                                2,
                                30
                            ]
                        },
                        {
                            23: [
                                2,
                                98
                            ],
                            33: [
                                2,
                                98
                            ],
                            54: [
                                2,
                                98
                            ],
                            68: [
                                2,
                                98
                            ],
                            72: [
                                2,
                                98
                            ],
                            75: [
                                2,
                                98
                            ]
                        },
                        {
                            23: [
                                2,
                                45
                            ],
                            33: [
                                2,
                                45
                            ],
                            54: [
                                2,
                                45
                            ],
                            65: [
                                2,
                                45
                            ],
                            68: [
                                2,
                                45
                            ],
                            72: [
                                2,
                                45
                            ],
                            73: [
                                1,
                                109
                            ],
                            75: [
                                2,
                                45
                            ],
                            80: [
                                2,
                                45
                            ],
                            81: [
                                2,
                                45
                            ],
                            82: [
                                2,
                                45
                            ],
                            83: [
                                2,
                                45
                            ],
                            84: [
                                2,
                                45
                            ],
                            85: [
                                2,
                                45
                            ],
                            87: [
                                2,
                                45
                            ]
                        },
                        {
                            23: [
                                2,
                                44
                            ],
                            33: [
                                2,
                                44
                            ],
                            54: [
                                2,
                                44
                            ],
                            65: [
                                2,
                                44
                            ],
                            68: [
                                2,
                                44
                            ],
                            72: [
                                2,
                                44
                            ],
                            75: [
                                2,
                                44
                            ],
                            80: [
                                2,
                                44
                            ],
                            81: [
                                2,
                                44
                            ],
                            82: [
                                2,
                                44
                            ],
                            83: [
                                2,
                                44
                            ],
                            84: [
                                2,
                                44
                            ],
                            85: [
                                2,
                                44
                            ],
                            87: [
                                2,
                                44
                            ]
                        },
                        {
                            54: [
                                1,
                                110
                            ]
                        },
                        {
                            54: [
                                2,
                                83
                            ],
                            65: [
                                2,
                                83
                            ],
                            72: [
                                2,
                                83
                            ],
                            80: [
                                2,
                                83
                            ],
                            81: [
                                2,
                                83
                            ],
                            82: [
                                2,
                                83
                            ],
                            83: [
                                2,
                                83
                            ],
                            84: [
                                2,
                                83
                            ],
                            85: [
                                2,
                                83
                            ]
                        },
                        {
                            54: [
                                2,
                                85
                            ]
                        },
                        {
                            5: [
                                2,
                                13
                            ],
                            14: [
                                2,
                                13
                            ],
                            15: [
                                2,
                                13
                            ],
                            19: [
                                2,
                                13
                            ],
                            29: [
                                2,
                                13
                            ],
                            34: [
                                2,
                                13
                            ],
                            39: [
                                2,
                                13
                            ],
                            44: [
                                2,
                                13
                            ],
                            47: [
                                2,
                                13
                            ],
                            48: [
                                2,
                                13
                            ],
                            51: [
                                2,
                                13
                            ],
                            55: [
                                2,
                                13
                            ],
                            60: [
                                2,
                                13
                            ]
                        },
                        {
                            38: 56,
                            39: [
                                1,
                                58
                            ],
                            43: 57,
                            44: [
                                1,
                                59
                            ],
                            45: 112,
                            46: 111,
                            47: [
                                2,
                                76
                            ]
                        },
                        {
                            33: [
                                2,
                                70
                            ],
                            40: 113,
                            65: [
                                2,
                                70
                            ],
                            72: [
                                2,
                                70
                            ],
                            75: [
                                2,
                                70
                            ],
                            80: [
                                2,
                                70
                            ],
                            81: [
                                2,
                                70
                            ],
                            82: [
                                2,
                                70
                            ],
                            83: [
                                2,
                                70
                            ],
                            84: [
                                2,
                                70
                            ],
                            85: [
                                2,
                                70
                            ]
                        },
                        {
                            47: [
                                2,
                                18
                            ]
                        },
                        {
                            5: [
                                2,
                                14
                            ],
                            14: [
                                2,
                                14
                            ],
                            15: [
                                2,
                                14
                            ],
                            19: [
                                2,
                                14
                            ],
                            29: [
                                2,
                                14
                            ],
                            34: [
                                2,
                                14
                            ],
                            39: [
                                2,
                                14
                            ],
                            44: [
                                2,
                                14
                            ],
                            47: [
                                2,
                                14
                            ],
                            48: [
                                2,
                                14
                            ],
                            51: [
                                2,
                                14
                            ],
                            55: [
                                2,
                                14
                            ],
                            60: [
                                2,
                                14
                            ]
                        },
                        {
                            33: [
                                1,
                                114
                            ]
                        },
                        {
                            33: [
                                2,
                                87
                            ],
                            65: [
                                2,
                                87
                            ],
                            72: [
                                2,
                                87
                            ],
                            80: [
                                2,
                                87
                            ],
                            81: [
                                2,
                                87
                            ],
                            82: [
                                2,
                                87
                            ],
                            83: [
                                2,
                                87
                            ],
                            84: [
                                2,
                                87
                            ],
                            85: [
                                2,
                                87
                            ]
                        },
                        {
                            33: [
                                2,
                                89
                            ]
                        },
                        {
                            20: 75,
                            63: 116,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            67: 115,
                            68: [
                                2,
                                96
                            ],
                            69: 117,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            33: [
                                1,
                                118
                            ]
                        },
                        {
                            32: 119,
                            33: [
                                2,
                                62
                            ],
                            74: 120,
                            75: [
                                1,
                                121
                            ]
                        },
                        {
                            33: [
                                2,
                                59
                            ],
                            65: [
                                2,
                                59
                            ],
                            72: [
                                2,
                                59
                            ],
                            75: [
                                2,
                                59
                            ],
                            80: [
                                2,
                                59
                            ],
                            81: [
                                2,
                                59
                            ],
                            82: [
                                2,
                                59
                            ],
                            83: [
                                2,
                                59
                            ],
                            84: [
                                2,
                                59
                            ],
                            85: [
                                2,
                                59
                            ]
                        },
                        {
                            33: [
                                2,
                                61
                            ],
                            75: [
                                2,
                                61
                            ]
                        },
                        {
                            33: [
                                2,
                                68
                            ],
                            37: 122,
                            74: 123,
                            75: [
                                1,
                                121
                            ]
                        },
                        {
                            33: [
                                2,
                                65
                            ],
                            65: [
                                2,
                                65
                            ],
                            72: [
                                2,
                                65
                            ],
                            75: [
                                2,
                                65
                            ],
                            80: [
                                2,
                                65
                            ],
                            81: [
                                2,
                                65
                            ],
                            82: [
                                2,
                                65
                            ],
                            83: [
                                2,
                                65
                            ],
                            84: [
                                2,
                                65
                            ],
                            85: [
                                2,
                                65
                            ]
                        },
                        {
                            33: [
                                2,
                                67
                            ],
                            75: [
                                2,
                                67
                            ]
                        },
                        {
                            23: [
                                1,
                                124
                            ]
                        },
                        {
                            23: [
                                2,
                                51
                            ],
                            65: [
                                2,
                                51
                            ],
                            72: [
                                2,
                                51
                            ],
                            80: [
                                2,
                                51
                            ],
                            81: [
                                2,
                                51
                            ],
                            82: [
                                2,
                                51
                            ],
                            83: [
                                2,
                                51
                            ],
                            84: [
                                2,
                                51
                            ],
                            85: [
                                2,
                                51
                            ]
                        },
                        {
                            23: [
                                2,
                                53
                            ]
                        },
                        {
                            33: [
                                1,
                                125
                            ]
                        },
                        {
                            33: [
                                2,
                                91
                            ],
                            65: [
                                2,
                                91
                            ],
                            72: [
                                2,
                                91
                            ],
                            80: [
                                2,
                                91
                            ],
                            81: [
                                2,
                                91
                            ],
                            82: [
                                2,
                                91
                            ],
                            83: [
                                2,
                                91
                            ],
                            84: [
                                2,
                                91
                            ],
                            85: [
                                2,
                                91
                            ]
                        },
                        {
                            33: [
                                2,
                                93
                            ]
                        },
                        {
                            5: [
                                2,
                                22
                            ],
                            14: [
                                2,
                                22
                            ],
                            15: [
                                2,
                                22
                            ],
                            19: [
                                2,
                                22
                            ],
                            29: [
                                2,
                                22
                            ],
                            34: [
                                2,
                                22
                            ],
                            39: [
                                2,
                                22
                            ],
                            44: [
                                2,
                                22
                            ],
                            47: [
                                2,
                                22
                            ],
                            48: [
                                2,
                                22
                            ],
                            51: [
                                2,
                                22
                            ],
                            55: [
                                2,
                                22
                            ],
                            60: [
                                2,
                                22
                            ]
                        },
                        {
                            23: [
                                2,
                                99
                            ],
                            33: [
                                2,
                                99
                            ],
                            54: [
                                2,
                                99
                            ],
                            68: [
                                2,
                                99
                            ],
                            72: [
                                2,
                                99
                            ],
                            75: [
                                2,
                                99
                            ]
                        },
                        {
                            73: [
                                1,
                                109
                            ]
                        },
                        {
                            20: 75,
                            63: 126,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            72: [
                                1,
                                35
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            5: [
                                2,
                                23
                            ],
                            14: [
                                2,
                                23
                            ],
                            15: [
                                2,
                                23
                            ],
                            19: [
                                2,
                                23
                            ],
                            29: [
                                2,
                                23
                            ],
                            34: [
                                2,
                                23
                            ],
                            39: [
                                2,
                                23
                            ],
                            44: [
                                2,
                                23
                            ],
                            47: [
                                2,
                                23
                            ],
                            48: [
                                2,
                                23
                            ],
                            51: [
                                2,
                                23
                            ],
                            55: [
                                2,
                                23
                            ],
                            60: [
                                2,
                                23
                            ]
                        },
                        {
                            47: [
                                2,
                                19
                            ]
                        },
                        {
                            47: [
                                2,
                                77
                            ]
                        },
                        {
                            20: 75,
                            33: [
                                2,
                                72
                            ],
                            41: 127,
                            63: 128,
                            64: 76,
                            65: [
                                1,
                                44
                            ],
                            69: 129,
                            70: 77,
                            71: 78,
                            72: [
                                1,
                                79
                            ],
                            75: [
                                2,
                                72
                            ],
                            78: 26,
                            79: 27,
                            80: [
                                1,
                                28
                            ],
                            81: [
                                1,
                                29
                            ],
                            82: [
                                1,
                                30
                            ],
                            83: [
                                1,
                                31
                            ],
                            84: [
                                1,
                                32
                            ],
                            85: [
                                1,
                                34
                            ],
                            86: 33
                        },
                        {
                            5: [
                                2,
                                24
                            ],
                            14: [
                                2,
                                24
                            ],
                            15: [
                                2,
                                24
                            ],
                            19: [
                                2,
                                24
                            ],
                            29: [
                                2,
                                24
                            ],
                            34: [
                                2,
                                24
                            ],
                            39: [
                                2,
                                24
                            ],
                            44: [
                                2,
                                24
                            ],
                            47: [
                                2,
                                24
                            ],
                            48: [
                                2,
                                24
                            ],
                            51: [
                                2,
                                24
                            ],
                            55: [
                                2,
                                24
                            ],
                            60: [
                                2,
                                24
                            ]
                        },
                        {
                            68: [
                                1,
                                130
                            ]
                        },
                        {
                            65: [
                                2,
                                95
                            ],
                            68: [
                                2,
                                95
                            ],
                            72: [
                                2,
                                95
                            ],
                            80: [
                                2,
                                95
                            ],
                            81: [
                                2,
                                95
                            ],
                            82: [
                                2,
                                95
                            ],
                            83: [
                                2,
                                95
                            ],
                            84: [
                                2,
                                95
                            ],
                            85: [
                                2,
                                95
                            ]
                        },
                        {
                            68: [
                                2,
                                97
                            ]
                        },
                        {
                            5: [
                                2,
                                21
                            ],
                            14: [
                                2,
                                21
                            ],
                            15: [
                                2,
                                21
                            ],
                            19: [
                                2,
                                21
                            ],
                            29: [
                                2,
                                21
                            ],
                            34: [
                                2,
                                21
                            ],
                            39: [
                                2,
                                21
                            ],
                            44: [
                                2,
                                21
                            ],
                            47: [
                                2,
                                21
                            ],
                            48: [
                                2,
                                21
                            ],
                            51: [
                                2,
                                21
                            ],
                            55: [
                                2,
                                21
                            ],
                            60: [
                                2,
                                21
                            ]
                        },
                        {
                            33: [
                                1,
                                131
                            ]
                        },
                        {
                            33: [
                                2,
                                63
                            ]
                        },
                        {
                            72: [
                                1,
                                133
                            ],
                            76: 132
                        },
                        {
                            33: [
                                1,
                                134
                            ]
                        },
                        {
                            33: [
                                2,
                                69
                            ]
                        },
                        {
                            15: [
                                2,
                                12
                            ]
                        },
                        {
                            14: [
                                2,
                                26
                            ],
                            15: [
                                2,
                                26
                            ],
                            19: [
                                2,
                                26
                            ],
                            29: [
                                2,
                                26
                            ],
                            34: [
                                2,
                                26
                            ],
                            47: [
                                2,
                                26
                            ],
                            48: [
                                2,
                                26
                            ],
                            51: [
                                2,
                                26
                            ],
                            55: [
                                2,
                                26
                            ],
                            60: [
                                2,
                                26
                            ]
                        },
                        {
                            23: [
                                2,
                                31
                            ],
                            33: [
                                2,
                                31
                            ],
                            54: [
                                2,
                                31
                            ],
                            68: [
                                2,
                                31
                            ],
                            72: [
                                2,
                                31
                            ],
                            75: [
                                2,
                                31
                            ]
                        },
                        {
                            33: [
                                2,
                                74
                            ],
                            42: 135,
                            74: 136,
                            75: [
                                1,
                                121
                            ]
                        },
                        {
                            33: [
                                2,
                                71
                            ],
                            65: [
                                2,
                                71
                            ],
                            72: [
                                2,
                                71
                            ],
                            75: [
                                2,
                                71
                            ],
                            80: [
                                2,
                                71
                            ],
                            81: [
                                2,
                                71
                            ],
                            82: [
                                2,
                                71
                            ],
                            83: [
                                2,
                                71
                            ],
                            84: [
                                2,
                                71
                            ],
                            85: [
                                2,
                                71
                            ]
                        },
                        {
                            33: [
                                2,
                                73
                            ],
                            75: [
                                2,
                                73
                            ]
                        },
                        {
                            23: [
                                2,
                                29
                            ],
                            33: [
                                2,
                                29
                            ],
                            54: [
                                2,
                                29
                            ],
                            65: [
                                2,
                                29
                            ],
                            68: [
                                2,
                                29
                            ],
                            72: [
                                2,
                                29
                            ],
                            75: [
                                2,
                                29
                            ],
                            80: [
                                2,
                                29
                            ],
                            81: [
                                2,
                                29
                            ],
                            82: [
                                2,
                                29
                            ],
                            83: [
                                2,
                                29
                            ],
                            84: [
                                2,
                                29
                            ],
                            85: [
                                2,
                                29
                            ]
                        },
                        {
                            14: [
                                2,
                                15
                            ],
                            15: [
                                2,
                                15
                            ],
                            19: [
                                2,
                                15
                            ],
                            29: [
                                2,
                                15
                            ],
                            34: [
                                2,
                                15
                            ],
                            39: [
                                2,
                                15
                            ],
                            44: [
                                2,
                                15
                            ],
                            47: [
                                2,
                                15
                            ],
                            48: [
                                2,
                                15
                            ],
                            51: [
                                2,
                                15
                            ],
                            55: [
                                2,
                                15
                            ],
                            60: [
                                2,
                                15
                            ]
                        },
                        {
                            72: [
                                1,
                                138
                            ],
                            77: [
                                1,
                                137
                            ]
                        },
                        {
                            72: [
                                2,
                                100
                            ],
                            77: [
                                2,
                                100
                            ]
                        },
                        {
                            14: [
                                2,
                                16
                            ],
                            15: [
                                2,
                                16
                            ],
                            19: [
                                2,
                                16
                            ],
                            29: [
                                2,
                                16
                            ],
                            34: [
                                2,
                                16
                            ],
                            44: [
                                2,
                                16
                            ],
                            47: [
                                2,
                                16
                            ],
                            48: [
                                2,
                                16
                            ],
                            51: [
                                2,
                                16
                            ],
                            55: [
                                2,
                                16
                            ],
                            60: [
                                2,
                                16
                            ]
                        },
                        {
                            33: [
                                1,
                                139
                            ]
                        },
                        {
                            33: [
                                2,
                                75
                            ]
                        },
                        {
                            33: [
                                2,
                                32
                            ]
                        },
                        {
                            72: [
                                2,
                                101
                            ],
                            77: [
                                2,
                                101
                            ]
                        },
                        {
                            14: [
                                2,
                                17
                            ],
                            15: [
                                2,
                                17
                            ],
                            19: [
                                2,
                                17
                            ],
                            29: [
                                2,
                                17
                            ],
                            34: [
                                2,
                                17
                            ],
                            39: [
                                2,
                                17
                            ],
                            44: [
                                2,
                                17
                            ],
                            47: [
                                2,
                                17
                            ],
                            48: [
                                2,
                                17
                            ],
                            51: [
                                2,
                                17
                            ],
                            55: [
                                2,
                                17
                            ],
                            60: [
                                2,
                                17
                            ]
                        }
                    ],
                    defaultActions: {
                        4: [
                            2,
                            1
                        ],
                        55: [
                            2,
                            55
                        ],
                        57: [
                            2,
                            20
                        ],
                        61: [
                            2,
                            57
                        ],
                        74: [
                            2,
                            81
                        ],
                        83: [
                            2,
                            85
                        ],
                        87: [
                            2,
                            18
                        ],
                        91: [
                            2,
                            89
                        ],
                        102: [
                            2,
                            53
                        ],
                        105: [
                            2,
                            93
                        ],
                        111: [
                            2,
                            19
                        ],
                        112: [
                            2,
                            77
                        ],
                        117: [
                            2,
                            97
                        ],
                        120: [
                            2,
                            63
                        ],
                        123: [
                            2,
                            69
                        ],
                        124: [
                            2,
                            12
                        ],
                        136: [
                            2,
                            75
                        ],
                        137: [
                            2,
                            32
                        ]
                    },
                    parseError: function parseError(str, hash) {
                        throw new Error(str);
                    },
                    parse: function parse(input) {
                        var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
                        this.lexer.setInput(input);
                        this.lexer.yy = this.yy;
                        this.yy.lexer = this.lexer;
                        this.yy.parser = this;
                        if (typeof this.lexer.yylloc == 'undefined')
                            this.lexer.yylloc = {};
                        var yyloc = this.lexer.yylloc;
                        lstack.push(yyloc);
                        var ranges = this.lexer.options && this.lexer.options.ranges;
                        if (typeof this.yy.parseError === 'function')
                            this.parseError = this.yy.parseError;
                        function popStack(n) {
                            stack.length = stack.length - 2 * n;
                            vstack.length = vstack.length - n;
                            lstack.length = lstack.length - n;
                        }
                        function lex() {
                            var token;
                            token = self.lexer.lex() || 1;
                            if (typeof token !== 'number') {
                                token = self.symbols_[token] || token;
                            }
                            return token;
                        }
                        var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
                        while (true) {
                            state = stack[stack.length - 1];
                            if (this.defaultActions[state]) {
                                action = this.defaultActions[state];
                            } else {
                                if (symbol === null || typeof symbol == 'undefined') {
                                    symbol = lex();
                                }
                                action = table[state] && table[state][symbol];
                            }
                            if (typeof action === 'undefined' || !action.length || !action[0]) {
                                var errStr = '';
                                if (!recovering) {
                                    expected = [];
                                    for (p in table[state])
                                        if (this.terminals_[p] && p > 2) {
                                            expected.push('\'' + this.terminals_[p] + '\'');
                                        }
                                    if (this.lexer.showPosition) {
                                        errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                                    } else {
                                        errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == 1 ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                                    }
                                    this.parseError(errStr, {
                                        text: this.lexer.match,
                                        token: this.terminals_[symbol] || symbol,
                                        line: this.lexer.yylineno,
                                        loc: yyloc,
                                        expected: expected
                                    });
                                }
                            }
                            if (action[0] instanceof Array && action.length > 1) {
                                throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                            }
                            switch (action[0]) {
                            case 1:
                                stack.push(symbol);
                                vstack.push(this.lexer.yytext);
                                lstack.push(this.lexer.yylloc);
                                stack.push(action[1]);
                                symbol = null;
                                if (!preErrorSymbol) {
                                    yyleng = this.lexer.yyleng;
                                    yytext = this.lexer.yytext;
                                    yylineno = this.lexer.yylineno;
                                    yyloc = this.lexer.yylloc;
                                    if (recovering > 0)
                                        recovering--;
                                } else {
                                    symbol = preErrorSymbol;
                                    preErrorSymbol = null;
                                }
                                break;
                            case 2:
                                len = this.productions_[action[1]][1];
                                yyval.$ = vstack[vstack.length - len];
                                yyval._$ = {
                                    first_line: lstack[lstack.length - (len || 1)].first_line,
                                    last_line: lstack[lstack.length - 1].last_line,
                                    first_column: lstack[lstack.length - (len || 1)].first_column,
                                    last_column: lstack[lstack.length - 1].last_column
                                };
                                if (ranges) {
                                    yyval._$.range = [
                                        lstack[lstack.length - (len || 1)].range[0],
                                        lstack[lstack.length - 1].range[1]
                                    ];
                                }
                                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                                if (typeof r !== 'undefined') {
                                    return r;
                                }
                                if (len) {
                                    stack = stack.slice(0, -1 * len * 2);
                                    vstack = vstack.slice(0, -1 * len);
                                    lstack = lstack.slice(0, -1 * len);
                                }
                                stack.push(this.productions_[action[1]][0]);
                                vstack.push(yyval.$);
                                lstack.push(yyval._$);
                                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                                stack.push(newState);
                                break;
                            case 3:
                                return true;
                            }
                        }
                        return true;
                    }
                };
                /* Jison generated lexer */
                var lexer = function () {
                    var lexer = {
                        EOF: 1,
                        parseError: function parseError(str, hash) {
                            if (this.yy.parser) {
                                this.yy.parser.parseError(str, hash);
                            } else {
                                throw new Error(str);
                            }
                        },
                        setInput: function setInput(input) {
                            this._input = input;
                            this._more = this._less = this.done = false;
                            this.yylineno = this.yyleng = 0;
                            this.yytext = this.matched = this.match = '';
                            this.conditionStack = ['INITIAL'];
                            this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            };
                            if (this.options.ranges)
                                this.yylloc.range = [
                                    0,
                                    0
                                ];
                            this.offset = 0;
                            return this;
                        },
                        input: function input() {
                            var ch = this._input[0];
                            this.yytext += ch;
                            this.yyleng++;
                            this.offset++;
                            this.match += ch;
                            this.matched += ch;
                            var lines = ch.match(/(?:\r\n?|\n).*/g);
                            if (lines) {
                                this.yylineno++;
                                this.yylloc.last_line++;
                            } else {
                                this.yylloc.last_column++;
                            }
                            if (this.options.ranges)
                                this.yylloc.range[1]++;
                            this._input = this._input.slice(1);
                            return ch;
                        },
                        unput: function unput(ch) {
                            var len = ch.length;
                            var lines = ch.split(/(?:\r\n?|\n)/g);
                            this._input = ch + this._input;
                            this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                            //this.yyleng -= len;
                            this.offset -= len;
                            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1);
                            this.matched = this.matched.substr(0, this.matched.length - 1);
                            if (lines.length - 1)
                                this.yylineno -= lines.length - 1;
                            var r = this.yylloc.range;
                            this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                            };
                            if (this.options.ranges) {
                                this.yylloc.range = [
                                    r[0],
                                    r[0] + this.yyleng - len
                                ];
                            }
                            return this;
                        },
                        more: function more() {
                            this._more = true;
                            return this;
                        },
                        less: function less(n) {
                            this.unput(this.match.slice(n));
                        },
                        pastInput: function pastInput() {
                            var past = this.matched.substr(0, this.matched.length - this.match.length);
                            return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, '');
                        },
                        upcomingInput: function upcomingInput() {
                            var next = this.match;
                            if (next.length < 20) {
                                next += this._input.substr(0, 20 - next.length);
                            }
                            return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, '');
                        },
                        showPosition: function showPosition() {
                            var pre = this.pastInput();
                            var c = new Array(pre.length + 1).join('-');
                            return pre + this.upcomingInput() + '\n' + c + '^';
                        },
                        next: function next() {
                            if (this.done) {
                                return this.EOF;
                            }
                            if (!this._input)
                                this.done = true;
                            var token, match, tempMatch, index, col, lines;
                            if (!this._more) {
                                this.yytext = '';
                                this.match = '';
                            }
                            var rules = this._currentRules();
                            for (var i = 0; i < rules.length; i++) {
                                tempMatch = this._input.match(this.rules[rules[i]]);
                                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                                    match = tempMatch;
                                    index = i;
                                    if (!this.options.flex)
                                        break;
                                }
                            }
                            if (match) {
                                lines = match[0].match(/(?:\r\n?|\n).*/g);
                                if (lines)
                                    this.yylineno += lines.length;
                                this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                                };
                                this.yytext += match[0];
                                this.match += match[0];
                                this.matches = match;
                                this.yyleng = this.yytext.length;
                                if (this.options.ranges) {
                                    this.yylloc.range = [
                                        this.offset,
                                        this.offset += this.yyleng
                                    ];
                                }
                                this._more = false;
                                this._input = this._input.slice(match[0].length);
                                this.matched += match[0];
                                token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                                if (this.done && this._input)
                                    this.done = false;
                                if (token)
                                    return token;
                                else
                                    return;
                            }
                            if (this._input === '') {
                                return this.EOF;
                            } else {
                                return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                                    text: '',
                                    token: null,
                                    line: this.yylineno
                                });
                            }
                        },
                        lex: function lex() {
                            var r = this.next();
                            if (typeof r !== 'undefined') {
                                return r;
                            } else {
                                return this.lex();
                            }
                        },
                        begin: function begin(condition) {
                            this.conditionStack.push(condition);
                        },
                        popState: function popState() {
                            return this.conditionStack.pop();
                        },
                        _currentRules: function _currentRules() {
                            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                        },
                        topState: function topState() {
                            return this.conditionStack[this.conditionStack.length - 2];
                        },
                        pushState: function begin(condition) {
                            this.begin(condition);
                        }
                    };
                    lexer.options = {};
                    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                        function strip(start, end) {
                            return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
                        }
                        var YYSTATE = YY_START;
                        switch ($avoiding_name_collisions) {
                        case 0:
                            if (yy_.yytext.slice(-2) === '\\\\') {
                                strip(0, 1);
                                this.begin('mu');
                            } else if (yy_.yytext.slice(-1) === '\\') {
                                strip(0, 1);
                                this.begin('emu');
                            } else {
                                this.begin('mu');
                            }
                            if (yy_.yytext)
                                return 15;
                            break;
                        case 1:
                            return 15;
                            break;
                        case 2:
                            this.popState();
                            return 15;
                            break;
                        case 3:
                            this.begin('raw');
                            return 15;
                            break;
                        case 4:
                            this.popState();
                            // Should be using `this.topState()` below, but it currently
                            // returns the second top instead of the first top. Opened an
                            // issue about it at https://github.com/zaach/jison/issues/291
                            if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
                                return 15;
                            } else {
                                yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                                return 'END_RAW_BLOCK';
                            }
                            break;
                        case 5:
                            return 15;
                            break;
                        case 6:
                            this.popState();
                            return 14;
                            break;
                        case 7:
                            return 65;
                            break;
                        case 8:
                            return 68;
                            break;
                        case 9:
                            return 19;
                            break;
                        case 10:
                            this.popState();
                            this.begin('raw');
                            return 23;
                            break;
                        case 11:
                            return 55;
                            break;
                        case 12:
                            return 60;
                            break;
                        case 13:
                            return 29;
                            break;
                        case 14:
                            return 47;
                            break;
                        case 15:
                            this.popState();
                            return 44;
                            break;
                        case 16:
                            this.popState();
                            return 44;
                            break;
                        case 17:
                            return 34;
                            break;
                        case 18:
                            return 39;
                            break;
                        case 19:
                            return 51;
                            break;
                        case 20:
                            return 48;
                            break;
                        case 21:
                            this.unput(yy_.yytext);
                            this.popState();
                            this.begin('com');
                            break;
                        case 22:
                            this.popState();
                            return 14;
                            break;
                        case 23:
                            return 48;
                            break;
                        case 24:
                            return 73;
                            break;
                        case 25:
                            return 72;
                            break;
                        case 26:
                            return 72;
                            break;
                        case 27:
                            return 87;
                            break;
                        case 28:
                            // ignore whitespace
                            break;
                        case 29:
                            this.popState();
                            return 54;
                            break;
                        case 30:
                            this.popState();
                            return 33;
                            break;
                        case 31:
                            yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                            return 80;
                            break;
                        case 32:
                            yy_.yytext = strip(1, 2).replace(/\\'/g, '\'');
                            return 80;
                            break;
                        case 33:
                            return 85;
                            break;
                        case 34:
                            return 82;
                            break;
                        case 35:
                            return 82;
                            break;
                        case 36:
                            return 83;
                            break;
                        case 37:
                            return 84;
                            break;
                        case 38:
                            return 81;
                            break;
                        case 39:
                            return 75;
                            break;
                        case 40:
                            return 77;
                            break;
                        case 41:
                            return 72;
                            break;
                        case 42:
                            yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
                            return 72;
                            break;
                        case 43:
                            return 'INVALID';
                            break;
                        case 44:
                            return 5;
                            break;
                        }
                    };
                    lexer.rules = [
                        /^(?:[^\x00]*?(?=(\{\{)))/,
                        /^(?:[^\x00]+)/,
                        /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
                        /^(?:\{\{\{\{(?=[^\/]))/,
                        /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
                        /^(?:[^\x00]*?(?=(\{\{\{\{)))/,
                        /^(?:[\s\S]*?--(~)?\}\})/,
                        /^(?:\()/,
                        /^(?:\))/,
                        /^(?:\{\{\{\{)/,
                        /^(?:\}\}\}\})/,
                        /^(?:\{\{(~)?>)/,
                        /^(?:\{\{(~)?#>)/,
                        /^(?:\{\{(~)?#\*?)/,
                        /^(?:\{\{(~)?\/)/,
                        /^(?:\{\{(~)?\^\s*(~)?\}\})/,
                        /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
                        /^(?:\{\{(~)?\^)/,
                        /^(?:\{\{(~)?\s*else\b)/,
                        /^(?:\{\{(~)?\{)/,
                        /^(?:\{\{(~)?&)/,
                        /^(?:\{\{(~)?!--)/,
                        /^(?:\{\{(~)?![\s\S]*?\}\})/,
                        /^(?:\{\{(~)?\*?)/,
                        /^(?:=)/,
                        /^(?:\.\.)/,
                        /^(?:\.(?=([=~}\s\/.)|])))/,
                        /^(?:[\/.])/,
                        /^(?:\s+)/,
                        /^(?:\}(~)?\}\})/,
                        /^(?:(~)?\}\})/,
                        /^(?:"(\\["]|[^"])*")/,
                        /^(?:'(\\[']|[^'])*')/,
                        /^(?:@)/,
                        /^(?:true(?=([~}\s)])))/,
                        /^(?:false(?=([~}\s)])))/,
                        /^(?:undefined(?=([~}\s)])))/,
                        /^(?:null(?=([~}\s)])))/,
                        /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
                        /^(?:as\s+\|)/,
                        /^(?:\|)/,
                        /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
                        /^(?:\[(\\\]|[^\]])*\])/,
                        /^(?:.)/,
                        /^(?:$)/
                    ];
                    lexer.conditions = {
                        'mu': {
                            'rules': [
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30,
                                31,
                                32,
                                33,
                                34,
                                35,
                                36,
                                37,
                                38,
                                39,
                                40,
                                41,
                                42,
                                43,
                                44
                            ],
                            'inclusive': false
                        },
                        'emu': {
                            'rules': [2],
                            'inclusive': false
                        },
                        'com': {
                            'rules': [6],
                            'inclusive': false
                        },
                        'raw': {
                            'rules': [
                                3,
                                4,
                                5
                            ],
                            'inclusive': false
                        },
                        'INITIAL': {
                            'rules': [
                                0,
                                1,
                                44
                            ],
                            'inclusive': true
                        }
                    };
                    return lexer;
                }();
                parser.lexer = lexer;
                function Parser() {
                    this.yy = {};
                }
                Parser.prototype = parser;
                parser.Parser = Parser;
                return new Parser();
            }();
            exports['default'] = handlebars;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _visitor = __webpack_require__(51);
            var _visitor2 = _interopRequireDefault(_visitor);
            function WhitespaceControl() {
                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                this.options = options;
            }
            WhitespaceControl.prototype = new _visitor2['default']();
            WhitespaceControl.prototype.Program = function (program) {
                var doStandalone = !this.options.ignoreStandalone;
                var isRoot = !this.isRootSeen;
                this.isRootSeen = true;
                var body = program.body;
                for (var i = 0, l = body.length; i < l; i++) {
                    var current = body[i], strip = this.accept(current);
                    if (!strip) {
                        continue;
                    }
                    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
                    if (strip.close) {
                        omitRight(body, i, true);
                    }
                    if (strip.open) {
                        omitLeft(body, i, true);
                    }
                    if (doStandalone && inlineStandalone) {
                        omitRight(body, i);
                        if (omitLeft(body, i)) {
                            // If we are on a standalone node, save the indent info for partials
                            if (current.type === 'PartialStatement') {
                                // Pull out the whitespace from the final line
                                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
                            }
                        }
                    }
                    if (doStandalone && openStandalone) {
                        omitRight((current.program || current.inverse).body);
                        // Strip out the previous content node if it's whitespace only
                        omitLeft(body, i);
                    }
                    if (doStandalone && closeStandalone) {
                        // Always strip the next node
                        omitRight(body, i);
                        omitLeft((current.inverse || current.program).body);
                    }
                }
                return program;
            };
            WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
                this.accept(block.program);
                this.accept(block.inverse);
                // Find the inverse program that is involed with whitespace stripping.
                var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
                if (inverse && inverse.chained) {
                    firstInverse = inverse.body[0].program;
                    // Walk the inverse chain to find the last inverse that is actually in the chain.
                    while (lastInverse.chained) {
                        lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
                    }
                }
                var strip = {
                    open: block.openStrip.open,
                    close: block.closeStrip.close,
                    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
                    // so our parent can determine if we actually are standalone
                    openStandalone: isNextWhitespace(program.body),
                    closeStandalone: isPrevWhitespace((firstInverse || program).body)
                };
                if (block.openStrip.close) {
                    omitRight(program.body, null, true);
                }
                if (inverse) {
                    var inverseStrip = block.inverseStrip;
                    if (inverseStrip.open) {
                        omitLeft(program.body, null, true);
                    }
                    if (inverseStrip.close) {
                        omitRight(firstInverse.body, null, true);
                    }
                    if (block.closeStrip.open) {
                        omitLeft(lastInverse.body, null, true);
                    }
                    // Find standalone else statments
                    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
                        omitLeft(program.body);
                        omitRight(firstInverse.body);
                    }
                } else if (block.closeStrip.open) {
                    omitLeft(program.body, null, true);
                }
                return strip;
            };
            WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
                return mustache.strip;
            };
            WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
                /* istanbul ignore next */
                var strip = node.strip || {};
                return {
                    inlineStandalone: true,
                    open: strip.open,
                    close: strip.close
                };
            };
            function isPrevWhitespace(body, i, isRoot) {
                if (i === undefined) {
                    i = body.length;
                }
                // Nodes that end with newlines are considered whitespace (but are special
                // cased for strip operations)
                var prev = body[i - 1], sibling = body[i - 2];
                if (!prev) {
                    return isRoot;
                }
                if (prev.type === 'ContentStatement') {
                    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
                }
            }
            function isNextWhitespace(body, i, isRoot) {
                if (i === undefined) {
                    i = -1;
                }
                var next = body[i + 1], sibling = body[i + 2];
                if (!next) {
                    return isRoot;
                }
                if (next.type === 'ContentStatement') {
                    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
                }
            }
            // Marks the node to the right of the position as omitted.
            // I.e. {{foo}}' ' will mark the ' ' node as omitted.
            //
            // If i is undefined, then the first child will be marked as such.
            //
            // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
            // content is met.
            function omitRight(body, i, multiple) {
                var current = body[i == null ? 0 : i + 1];
                if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
                    return;
                }
                var original = current.value;
                current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
                current.rightStripped = current.value !== original;
            }
            // Marks the node to the left of the position as omitted.
            // I.e. ' '{{foo}} will mark the ' ' node as omitted.
            //
            // If i is undefined then the last child will be marked as such.
            //
            // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
            // content is met.
            function omitLeft(body, i, multiple) {
                var current = body[i == null ? body.length - 1 : i - 1];
                if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
                    return;
                }
                // We omit the last node if it's whitespace only and not preceeded by a non-content node.
                var original = current.value;
                current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
                current.leftStripped = current.value !== original;
                return current.leftStripped;
            }
            exports['default'] = WhitespaceControl;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            function Visitor() {
                this.parents = [];
            }
            Visitor.prototype = {
                constructor: Visitor,
                mutating: false,
                // Visits a given value. If mutating, will replace the value if necessary.
                acceptKey: function acceptKey(node, name) {
                    var value = this.accept(node[name]);
                    if (this.mutating) {
                        // Hacky sanity check: This may have a few false positives for type for the helper
                        // methods but will generally do the right thing without a lot of overhead.
                        if (value && !Visitor.prototype[value.type]) {
                            throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
                        }
                        node[name] = value;
                    }
                },
                // Performs an accept operation with added sanity check to ensure
                // required keys are not removed.
                acceptRequired: function acceptRequired(node, name) {
                    this.acceptKey(node, name);
                    if (!node[name]) {
                        throw new _exception2['default'](node.type + ' requires ' + name);
                    }
                },
                // Traverses a given array. If mutating, empty respnses will be removed
                // for child elements.
                acceptArray: function acceptArray(array) {
                    for (var i = 0, l = array.length; i < l; i++) {
                        this.acceptKey(array, i);
                        if (!array[i]) {
                            array.splice(i, 1);
                            i--;
                            l--;
                        }
                    }
                },
                accept: function accept(object) {
                    if (!object) {
                        return;
                    }
                    /* istanbul ignore next: Sanity code */
                    if (!this[object.type]) {
                        throw new _exception2['default']('Unknown type: ' + object.type, object);
                    }
                    if (this.current) {
                        this.parents.unshift(this.current);
                    }
                    this.current = object;
                    var ret = this[object.type](object);
                    this.current = this.parents.shift();
                    if (!this.mutating || ret) {
                        return ret;
                    } else if (ret !== false) {
                        return object;
                    }
                },
                Program: function Program(program) {
                    this.acceptArray(program.body);
                },
                MustacheStatement: visitSubExpression,
                Decorator: visitSubExpression,
                BlockStatement: visitBlock,
                DecoratorBlock: visitBlock,
                PartialStatement: visitPartial,
                PartialBlockStatement: function PartialBlockStatement(partial) {
                    visitPartial.call(this, partial);
                    this.acceptKey(partial, 'program');
                },
                ContentStatement: function ContentStatement()
                    /* content */
                    {
                    },
                CommentStatement: function CommentStatement()
                    /* comment */
                    {
                    },
                SubExpression: visitSubExpression,
                PathExpression: function PathExpression()
                    /* path */
                    {
                    },
                StringLiteral: function StringLiteral()
                    /* string */
                    {
                    },
                NumberLiteral: function NumberLiteral()
                    /* number */
                    {
                    },
                BooleanLiteral: function BooleanLiteral()
                    /* bool */
                    {
                    },
                UndefinedLiteral: function UndefinedLiteral()
                    /* literal */
                    {
                    },
                NullLiteral: function NullLiteral()
                    /* literal */
                    {
                    },
                Hash: function Hash(hash) {
                    this.acceptArray(hash.pairs);
                },
                HashPair: function HashPair(pair) {
                    this.acceptRequired(pair, 'value');
                }
            };
            function visitSubExpression(mustache) {
                this.acceptRequired(mustache, 'path');
                this.acceptArray(mustache.params);
                this.acceptKey(mustache, 'hash');
            }
            function visitBlock(block) {
                visitSubExpression.call(this, block);
                this.acceptKey(block, 'program');
                this.acceptKey(block, 'inverse');
            }
            function visitPartial(partial) {
                this.acceptRequired(partial, 'name');
                this.acceptArray(partial.params);
                this.acceptKey(partial, 'hash');
            }
            exports['default'] = Visitor;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            exports.SourceLocation = SourceLocation;
            exports.id = id;
            exports.stripFlags = stripFlags;
            exports.stripComment = stripComment;
            exports.preparePath = preparePath;
            exports.prepareMustache = prepareMustache;
            exports.prepareRawBlock = prepareRawBlock;
            exports.prepareBlock = prepareBlock;
            exports.prepareProgram = prepareProgram;
            exports.preparePartialBlock = preparePartialBlock;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            function validateClose(open, close) {
                close = close.path ? close.path.original : close;
                if (open.path.original !== close) {
                    var errorNode = { loc: open.path.loc };
                    throw new _exception2['default'](open.path.original + ' doesn\'t match ' + close, errorNode);
                }
            }
            function SourceLocation(source, locInfo) {
                this.source = source;
                this.start = {
                    line: locInfo.first_line,
                    column: locInfo.first_column
                };
                this.end = {
                    line: locInfo.last_line,
                    column: locInfo.last_column
                };
            }
            function id(token) {
                if (/^\[.*\]$/.test(token)) {
                    return token.substr(1, token.length - 2);
                } else {
                    return token;
                }
            }
            function stripFlags(open, close) {
                return {
                    open: open.charAt(2) === '~',
                    close: close.charAt(close.length - 3) === '~'
                };
            }
            function stripComment(comment) {
                return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
            }
            function preparePath(data, parts, loc) {
                loc = this.locInfo(loc);
                var original = data ? '@' : '', dig = [], depth = 0, depthString = '';
                for (var i = 0, l = parts.length; i < l; i++) {
                    var part = parts[i].part,
                        // If we have [] syntax then we do not treat path references as operators,
                        // i.e. foo.[this] resolves to approximately context.foo['this']
                        isLiteral = parts[i].original !== part;
                    original += (parts[i].separator || '') + part;
                    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
                        if (dig.length > 0) {
                            throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
                        } else if (part === '..') {
                            depth++;
                            depthString += '../';
                        }
                    } else {
                        dig.push(part);
                    }
                }
                return {
                    type: 'PathExpression',
                    data: data,
                    depth: depth,
                    parts: dig,
                    original: original,
                    loc: loc
                };
            }
            function prepareMustache(path, params, hash, open, strip, locInfo) {
                // Must use charAt to support IE pre-10
                var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== '{' && escapeFlag !== '&';
                var decorator = /\*/.test(open);
                return {
                    type: decorator ? 'Decorator' : 'MustacheStatement',
                    path: path,
                    params: params,
                    hash: hash,
                    escaped: escaped,
                    strip: strip,
                    loc: this.locInfo(locInfo)
                };
            }
            function prepareRawBlock(openRawBlock, contents, close, locInfo) {
                validateClose(openRawBlock, close);
                locInfo = this.locInfo(locInfo);
                var program = {
                    type: 'Program',
                    body: contents,
                    strip: {},
                    loc: locInfo
                };
                return {
                    type: 'BlockStatement',
                    path: openRawBlock.path,
                    params: openRawBlock.params,
                    hash: openRawBlock.hash,
                    program: program,
                    openStrip: {},
                    inverseStrip: {},
                    closeStrip: {},
                    loc: locInfo
                };
            }
            function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
                if (close && close.path) {
                    validateClose(openBlock, close);
                }
                var decorator = /\*/.test(openBlock.open);
                program.blockParams = openBlock.blockParams;
                var inverse = undefined, inverseStrip = undefined;
                if (inverseAndProgram) {
                    if (decorator) {
                        throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
                    }
                    if (inverseAndProgram.chain) {
                        inverseAndProgram.program.body[0].closeStrip = close.strip;
                    }
                    inverseStrip = inverseAndProgram.strip;
                    inverse = inverseAndProgram.program;
                }
                if (inverted) {
                    inverted = inverse;
                    inverse = program;
                    program = inverted;
                }
                return {
                    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
                    path: openBlock.path,
                    params: openBlock.params,
                    hash: openBlock.hash,
                    program: program,
                    inverse: inverse,
                    openStrip: openBlock.strip,
                    inverseStrip: inverseStrip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                };
            }
            function prepareProgram(statements, loc) {
                if (!loc && statements.length) {
                    var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
                    /* istanbul ignore else */
                    if (firstLoc && lastLoc) {
                        loc = {
                            source: firstLoc.source,
                            start: {
                                line: firstLoc.start.line,
                                column: firstLoc.start.column
                            },
                            end: {
                                line: lastLoc.end.line,
                                column: lastLoc.end.column
                            }
                        };
                    }
                }
                return {
                    type: 'Program',
                    body: statements,
                    strip: {},
                    loc: loc
                };
            }
            function preparePartialBlock(open, program, close, locInfo) {
                validateClose(open, close);
                return {
                    type: 'PartialBlockStatement',
                    name: open.path,
                    params: open.params,
                    hash: open.hash,
                    program: program,
                    openStrip: open.strip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                };
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            /* eslint-disable new-cap */
            'use strict';
            exports.__esModule = true;
            exports.Compiler = Compiler;
            exports.precompile = precompile;
            exports.compile = compile;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            var _utils = __webpack_require__(31);
            var _ast = __webpack_require__(47);
            var _ast2 = _interopRequireDefault(_ast);
            var slice = [].slice;
            function Compiler() {
            }
            // the foundHelper register will disambiguate helper lookup from finding a
            // function in a context. This is necessary for mustache compatibility, which
            // requires that context functions in blocks are evaluated by blockHelperMissing,
            // and then proceed as if the resulting value was provided to blockHelperMissing.
            Compiler.prototype = {
                compiler: Compiler,
                equals: function equals(other) {
                    var len = this.opcodes.length;
                    if (other.opcodes.length !== len) {
                        return false;
                    }
                    for (var i = 0; i < len; i++) {
                        var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
                        if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
                            return false;
                        }
                    }
                    // We know that length is the same between the two arrays because they are directly tied
                    // to the opcode behavior above.
                    len = this.children.length;
                    for (var i = 0; i < len; i++) {
                        if (!this.children[i].equals(other.children[i])) {
                            return false;
                        }
                    }
                    return true;
                },
                guid: 0,
                compile: function compile(program, options) {
                    this.sourceNode = [];
                    this.opcodes = [];
                    this.children = [];
                    this.options = options;
                    this.stringParams = options.stringParams;
                    this.trackIds = options.trackIds;
                    options.blockParams = options.blockParams || [];
                    // These changes will propagate to the other compiler components
                    var knownHelpers = options.knownHelpers;
                    options.knownHelpers = {
                        'helperMissing': true,
                        'blockHelperMissing': true,
                        'each': true,
                        'if': true,
                        'unless': true,
                        'with': true,
                        'log': true,
                        'lookup': true
                    };
                    if (knownHelpers) {
                        for (var _name in knownHelpers) {
                            /* istanbul ignore else */
                            if (_name in knownHelpers) {
                                this.options.knownHelpers[_name] = knownHelpers[_name];
                            }
                        }
                    }
                    return this.accept(program);
                },
                compileProgram: function compileProgram(program) {
                    var childCompiler = new this.compiler(),
                        // eslint-disable-line new-cap
                        result = childCompiler.compile(program, this.options), guid = this.guid++;
                    this.usePartial = this.usePartial || result.usePartial;
                    this.children[guid] = result;
                    this.useDepths = this.useDepths || result.useDepths;
                    return guid;
                },
                accept: function accept(node) {
                    /* istanbul ignore next: Sanity code */
                    if (!this[node.type]) {
                        throw new _exception2['default']('Unknown type: ' + node.type, node);
                    }
                    this.sourceNode.unshift(node);
                    var ret = this[node.type](node);
                    this.sourceNode.shift();
                    return ret;
                },
                Program: function Program(program) {
                    this.options.blockParams.unshift(program.blockParams);
                    var body = program.body, bodyLength = body.length;
                    for (var i = 0; i < bodyLength; i++) {
                        this.accept(body[i]);
                    }
                    this.options.blockParams.shift();
                    this.isSimple = bodyLength === 1;
                    this.blockParams = program.blockParams ? program.blockParams.length : 0;
                    return this;
                },
                BlockStatement: function BlockStatement(block) {
                    transformLiteralToPath(block);
                    var program = block.program, inverse = block.inverse;
                    program = program && this.compileProgram(program);
                    inverse = inverse && this.compileProgram(inverse);
                    var type = this.classifySexpr(block);
                    if (type === 'helper') {
                        this.helperSexpr(block, program, inverse);
                    } else if (type === 'simple') {
                        this.simpleSexpr(block);
                        // now that the simple mustache is resolved, we need to
                        // evaluate it by executing `blockHelperMissing`
                        this.opcode('pushProgram', program);
                        this.opcode('pushProgram', inverse);
                        this.opcode('emptyHash');
                        this.opcode('blockValue', block.path.original);
                    } else {
                        this.ambiguousSexpr(block, program, inverse);
                        // now that the simple mustache is resolved, we need to
                        // evaluate it by executing `blockHelperMissing`
                        this.opcode('pushProgram', program);
                        this.opcode('pushProgram', inverse);
                        this.opcode('emptyHash');
                        this.opcode('ambiguousBlockValue');
                    }
                    this.opcode('append');
                },
                DecoratorBlock: function DecoratorBlock(decorator) {
                    var program = decorator.program && this.compileProgram(decorator.program);
                    var params = this.setupFullMustacheParams(decorator, program, undefined), path = decorator.path;
                    this.useDecorators = true;
                    this.opcode('registerDecorator', params.length, path.original);
                },
                PartialStatement: function PartialStatement(partial) {
                    this.usePartial = true;
                    var program = partial.program;
                    if (program) {
                        program = this.compileProgram(partial.program);
                    }
                    var params = partial.params;
                    if (params.length > 1) {
                        throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
                    } else if (!params.length) {
                        if (this.options.explicitPartialContext) {
                            this.opcode('pushLiteral', 'undefined');
                        } else {
                            params.push({
                                type: 'PathExpression',
                                parts: [],
                                depth: 0
                            });
                        }
                    }
                    var partialName = partial.name.original, isDynamic = partial.name.type === 'SubExpression';
                    if (isDynamic) {
                        this.accept(partial.name);
                    }
                    this.setupFullMustacheParams(partial, program, undefined, true);
                    var indent = partial.indent || '';
                    if (this.options.preventIndent && indent) {
                        this.opcode('appendContent', indent);
                        indent = '';
                    }
                    this.opcode('invokePartial', isDynamic, partialName, indent);
                    this.opcode('append');
                },
                PartialBlockStatement: function PartialBlockStatement(partialBlock) {
                    this.PartialStatement(partialBlock);
                },
                MustacheStatement: function MustacheStatement(mustache) {
                    this.SubExpression(mustache);
                    if (mustache.escaped && !this.options.noEscape) {
                        this.opcode('appendEscaped');
                    } else {
                        this.opcode('append');
                    }
                },
                Decorator: function Decorator(decorator) {
                    this.DecoratorBlock(decorator);
                },
                ContentStatement: function ContentStatement(content) {
                    if (content.value) {
                        this.opcode('appendContent', content.value);
                    }
                },
                CommentStatement: function CommentStatement() {
                },
                SubExpression: function SubExpression(sexpr) {
                    transformLiteralToPath(sexpr);
                    var type = this.classifySexpr(sexpr);
                    if (type === 'simple') {
                        this.simpleSexpr(sexpr);
                    } else if (type === 'helper') {
                        this.helperSexpr(sexpr);
                    } else {
                        this.ambiguousSexpr(sexpr);
                    }
                },
                ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
                    var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
                    this.opcode('getContext', path.depth);
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    path.strict = true;
                    this.accept(path);
                    this.opcode('invokeAmbiguous', name, isBlock);
                },
                simpleSexpr: function simpleSexpr(sexpr) {
                    var path = sexpr.path;
                    path.strict = true;
                    this.accept(path);
                    this.opcode('resolvePossibleLambda');
                },
                helperSexpr: function helperSexpr(sexpr, program, inverse) {
                    var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
                    if (this.options.knownHelpers[name]) {
                        this.opcode('invokeKnownHelper', params.length, name);
                    } else if (this.options.knownHelpersOnly) {
                        throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
                    } else {
                        path.strict = true;
                        path.falsy = true;
                        this.accept(path);
                        this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
                    }
                },
                PathExpression: function PathExpression(path) {
                    this.addDepth(path.depth);
                    this.opcode('getContext', path.depth);
                    var name = path.parts[0], scoped = _ast2['default'].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
                    if (blockParamId) {
                        this.opcode('lookupBlockParam', blockParamId, path.parts);
                    } else if (!name) {
                        // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
                        this.opcode('pushContext');
                    } else if (path.data) {
                        this.options.data = true;
                        this.opcode('lookupData', path.depth, path.parts, path.strict);
                    } else {
                        this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
                    }
                },
                StringLiteral: function StringLiteral(string) {
                    this.opcode('pushString', string.value);
                },
                NumberLiteral: function NumberLiteral(number) {
                    this.opcode('pushLiteral', number.value);
                },
                BooleanLiteral: function BooleanLiteral(bool) {
                    this.opcode('pushLiteral', bool.value);
                },
                UndefinedLiteral: function UndefinedLiteral() {
                    this.opcode('pushLiteral', 'undefined');
                },
                NullLiteral: function NullLiteral() {
                    this.opcode('pushLiteral', 'null');
                },
                Hash: function Hash(hash) {
                    var pairs = hash.pairs, i = 0, l = pairs.length;
                    this.opcode('pushHash');
                    for (; i < l; i++) {
                        this.pushParam(pairs[i].value);
                    }
                    while (i--) {
                        this.opcode('assignToHash', pairs[i].key);
                    }
                    this.opcode('popHash');
                },
                // HELPERS
                opcode: function opcode(name) {
                    this.opcodes.push({
                        opcode: name,
                        args: slice.call(arguments, 1),
                        loc: this.sourceNode[0].loc
                    });
                },
                addDepth: function addDepth(depth) {
                    if (!depth) {
                        return;
                    }
                    this.useDepths = true;
                },
                classifySexpr: function classifySexpr(sexpr) {
                    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);
                    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
                    // a mustache is an eligible helper if:
                    // * its id is simple (a single part, not `this` or `..`)
                    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);
                    // if a mustache is an eligible helper but not a definite
                    // helper, it is ambiguous, and will be resolved in a later
                    // pass or at runtime.
                    var isEligible = !isBlockParam && (isHelper || isSimple);
                    // if ambiguous, we can possibly resolve the ambiguity now
                    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
                    if (isEligible && !isHelper) {
                        var _name2 = sexpr.path.parts[0], options = this.options;
                        if (options.knownHelpers[_name2]) {
                            isHelper = true;
                        } else if (options.knownHelpersOnly) {
                            isEligible = false;
                        }
                    }
                    if (isHelper) {
                        return 'helper';
                    } else if (isEligible) {
                        return 'ambiguous';
                    } else {
                        return 'simple';
                    }
                },
                pushParams: function pushParams(params) {
                    for (var i = 0, l = params.length; i < l; i++) {
                        this.pushParam(params[i]);
                    }
                },
                pushParam: function pushParam(val) {
                    var value = val.value != null ? val.value : val.original || '';
                    if (this.stringParams) {
                        if (value.replace) {
                            value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
                        }
                        if (val.depth) {
                            this.addDepth(val.depth);
                        }
                        this.opcode('getContext', val.depth || 0);
                        this.opcode('pushStringParam', value, val.type);
                        if (val.type === 'SubExpression') {
                            // SubExpressions get evaluated and passed in
                            // in string params mode.
                            this.accept(val);
                        }
                    } else {
                        if (this.trackIds) {
                            var blockParamIndex = undefined;
                            if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
                                blockParamIndex = this.blockParamIndex(val.parts[0]);
                            }
                            if (blockParamIndex) {
                                var blockParamChild = val.parts.slice(1).join('.');
                                this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
                            } else {
                                value = val.original || value;
                                if (value.replace) {
                                    value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
                                }
                                this.opcode('pushId', val.type, value);
                            }
                        }
                        this.accept(val);
                    }
                },
                setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
                    var params = sexpr.params;
                    this.pushParams(params);
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    if (sexpr.hash) {
                        this.accept(sexpr.hash);
                    } else {
                        this.opcode('emptyHash', omitEmpty);
                    }
                    return params;
                },
                blockParamIndex: function blockParamIndex(name) {
                    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
                        var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
                        if (blockParams && param >= 0) {
                            return [
                                depth,
                                param
                            ];
                        }
                    }
                }
            };
            function precompile(input, options, env) {
                if (input == null || typeof input !== 'string' && input.type !== 'Program') {
                    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
                }
                options = options || {};
                if (!('data' in options)) {
                    options.data = true;
                }
                if (options.compat) {
                    options.useDepths = true;
                }
                var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
                return new env.JavaScriptCompiler().compile(environment, options);
            }
            function compile(input, options, env) {
                if (options === undefined)
                    options = {};
                if (input == null || typeof input !== 'string' && input.type !== 'Program') {
                    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
                }
                options = _utils.extend({}, options);
                if (!('data' in options)) {
                    options.data = true;
                }
                if (options.compat) {
                    options.useDepths = true;
                }
                var compiled = undefined;
                function compileInput() {
                    var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
                    return env.template(templateSpec);
                }
                // Template is only compiled on first use and cached after that point.
                function ret(context, execOptions) {
                    if (!compiled) {
                        compiled = compileInput();
                    }
                    return compiled.call(this, context, execOptions);
                }
                ret._setup = function (setupOptions) {
                    if (!compiled) {
                        compiled = compileInput();
                    }
                    return compiled._setup(setupOptions);
                };
                ret._child = function (i, data, blockParams, depths) {
                    if (!compiled) {
                        compiled = compileInput();
                    }
                    return compiled._child(i, data, blockParams, depths);
                };
                return ret;
            }
            function argEquals(a, b) {
                if (a === b) {
                    return true;
                }
                if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
                    for (var i = 0; i < a.length; i++) {
                        if (!argEquals(a[i], b[i])) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            function transformLiteralToPath(sexpr) {
                if (!sexpr.path.parts) {
                    var literal = sexpr.path;
                    // Casting to string here to make false and 0 literal values play nicely with the rest
                    // of the system.
                    sexpr.path = {
                        type: 'PathExpression',
                        data: false,
                        depth: 0,
                        parts: [literal.original + ''],
                        original: literal.original + '',
                        loc: literal.loc
                    };
                }
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _base = __webpack_require__(30);
            var _exception = __webpack_require__(32);
            var _exception2 = _interopRequireDefault(_exception);
            var _utils = __webpack_require__(31);
            var _codeGen = __webpack_require__(55);
            var _codeGen2 = _interopRequireDefault(_codeGen);
            function Literal(value) {
                this.value = value;
            }
            function JavaScriptCompiler() {
            }
            JavaScriptCompiler.prototype = {
                // PUBLIC API: You can override these methods in a subclass to provide
                // alternative compiled forms for name lookup and buffering semantics
                nameLookup: function nameLookup(parent, name) {
                    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
                        return [
                            parent,
                            '.',
                            name
                        ];
                    } else {
                        return [
                            parent,
                            '[',
                            JSON.stringify(name),
                            ']'
                        ];
                    }
                },
                depthedLookup: function depthedLookup(name) {
                    return [
                        this.aliasable('container.lookup'),
                        '(depths, "',
                        name,
                        '")'
                    ];
                },
                compilerInfo: function compilerInfo() {
                    var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
                    return [
                        revision,
                        versions
                    ];
                },
                appendToBuffer: function appendToBuffer(source, location, explicit) {
                    // Force a source as this simplifies the merge logic.
                    if (!_utils.isArray(source)) {
                        source = [source];
                    }
                    source = this.source.wrap(source, location);
                    if (this.environment.isSimple) {
                        return [
                            'return ',
                            source,
                            ';'
                        ];
                    } else if (explicit) {
                        // This is a case where the buffer operation occurs as a child of another
                        // construct, generally braces. We have to explicitly output these buffer
                        // operations to ensure that the emitted code goes in the correct location.
                        return [
                            'buffer += ',
                            source,
                            ';'
                        ];
                    } else {
                        source.appendToBuffer = true;
                        return source;
                    }
                },
                initializeBuffer: function initializeBuffer() {
                    return this.quotedString('');
                },
                // END PUBLIC API
                compile: function compile(environment, options, context, asObject) {
                    this.environment = environment;
                    this.options = options;
                    this.stringParams = this.options.stringParams;
                    this.trackIds = this.options.trackIds;
                    this.precompile = !asObject;
                    this.name = this.environment.name;
                    this.isChild = !!context;
                    this.context = context || {
                        decorators: [],
                        programs: [],
                        environments: []
                    };
                    this.preamble();
                    this.stackSlot = 0;
                    this.stackVars = [];
                    this.aliases = {};
                    this.registers = { list: [] };
                    this.hashes = [];
                    this.compileStack = [];
                    this.inlineStack = [];
                    this.blockParams = [];
                    this.compileChildren(environment, options);
                    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
                    this.useBlockParams = this.useBlockParams || environment.useBlockParams;
                    var opcodes = environment.opcodes, opcode = undefined, firstLoc = undefined, i = undefined, l = undefined;
                    for (i = 0, l = opcodes.length; i < l; i++) {
                        opcode = opcodes[i];
                        this.source.currentLocation = opcode.loc;
                        firstLoc = firstLoc || opcode.loc;
                        this[opcode.opcode].apply(this, opcode.args);
                    }
                    // Flush any trailing content that might be pending.
                    this.source.currentLocation = firstLoc;
                    this.pushSource('');
                    /* istanbul ignore next */
                    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
                        throw new _exception2['default']('Compile completed with content left on stack');
                    }
                    if (!this.decorators.isEmpty()) {
                        this.useDecorators = true;
                        this.decorators.prepend('var decorators = container.decorators;\n');
                        this.decorators.push('return fn;');
                        if (asObject) {
                            this.decorators = Function.apply(this, [
                                'fn',
                                'props',
                                'container',
                                'depth0',
                                'data',
                                'blockParams',
                                'depths',
                                this.decorators.merge()
                            ]);
                        } else {
                            this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
                            this.decorators.push('}\n');
                            this.decorators = this.decorators.merge();
                        }
                    } else {
                        this.decorators = undefined;
                    }
                    var fn = this.createFunctionContext(asObject);
                    if (!this.isChild) {
                        var ret = {
                            compiler: this.compilerInfo(),
                            main: fn
                        };
                        if (this.decorators) {
                            ret.main_d = this.decorators;
                            // eslint-disable-line camelcase
                            ret.useDecorators = true;
                        }
                        var _context = this.context;
                        var programs = _context.programs;
                        var decorators = _context.decorators;
                        for (i = 0, l = programs.length; i < l; i++) {
                            if (programs[i]) {
                                ret[i] = programs[i];
                                if (decorators[i]) {
                                    ret[i + '_d'] = decorators[i];
                                    ret.useDecorators = true;
                                }
                            }
                        }
                        if (this.environment.usePartial) {
                            ret.usePartial = true;
                        }
                        if (this.options.data) {
                            ret.useData = true;
                        }
                        if (this.useDepths) {
                            ret.useDepths = true;
                        }
                        if (this.useBlockParams) {
                            ret.useBlockParams = true;
                        }
                        if (this.options.compat) {
                            ret.compat = true;
                        }
                        if (!asObject) {
                            ret.compiler = JSON.stringify(ret.compiler);
                            this.source.currentLocation = {
                                start: {
                                    line: 1,
                                    column: 0
                                }
                            };
                            ret = this.objectLiteral(ret);
                            if (options.srcName) {
                                ret = ret.toStringWithSourceMap({ file: options.destName });
                                ret.map = ret.map && ret.map.toString();
                            } else {
                                ret = ret.toString();
                            }
                        } else {
                            ret.compilerOptions = this.options;
                        }
                        return ret;
                    } else {
                        return fn;
                    }
                },
                preamble: function preamble() {
                    // track the last context pushed into place to allow skipping the
                    // getContext opcode when it would be a noop
                    this.lastContext = 0;
                    this.source = new _codeGen2['default'](this.options.srcName);
                    this.decorators = new _codeGen2['default'](this.options.srcName);
                },
                createFunctionContext: function createFunctionContext(asObject) {
                    var varDeclarations = '';
                    var locals = this.stackVars.concat(this.registers.list);
                    if (locals.length > 0) {
                        varDeclarations += ', ' + locals.join(', ');
                    }
                    // Generate minimizer alias mappings
                    //
                    // When using true SourceNodes, this will update all references to the given alias
                    // as the source nodes are reused in situ. For the non-source node compilation mode,
                    // aliases will not be used, but this case is already being run on the client and
                    // we aren't concern about minimizing the template size.
                    var aliasCount = 0;
                    for (var alias in this.aliases) {
                        // eslint-disable-line guard-for-in
                        var node = this.aliases[alias];
                        if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
                            varDeclarations += ', alias' + ++aliasCount + '=' + alias;
                            node.children[0] = 'alias' + aliasCount;
                        }
                    }
                    var params = [
                        'container',
                        'depth0',
                        'helpers',
                        'partials',
                        'data'
                    ];
                    if (this.useBlockParams || this.useDepths) {
                        params.push('blockParams');
                    }
                    if (this.useDepths) {
                        params.push('depths');
                    }
                    // Perform a second pass over the output to merge content when possible
                    var source = this.mergeSource(varDeclarations);
                    if (asObject) {
                        params.push(source);
                        return Function.apply(this, params);
                    } else {
                        return this.source.wrap([
                            'function(',
                            params.join(','),
                            ') {\n  ',
                            source,
                            '}'
                        ]);
                    }
                },
                mergeSource: function mergeSource(varDeclarations) {
                    var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = undefined, sourceSeen = undefined, bufferStart = undefined, bufferEnd = undefined;
                    this.source.each(function (line) {
                        if (line.appendToBuffer) {
                            if (bufferStart) {
                                line.prepend('  + ');
                            } else {
                                bufferStart = line;
                            }
                            bufferEnd = line;
                        } else {
                            if (bufferStart) {
                                if (!sourceSeen) {
                                    appendFirst = true;
                                } else {
                                    bufferStart.prepend('buffer += ');
                                }
                                bufferEnd.add(';');
                                bufferStart = bufferEnd = undefined;
                            }
                            sourceSeen = true;
                            if (!isSimple) {
                                appendOnly = false;
                            }
                        }
                    });
                    if (appendOnly) {
                        if (bufferStart) {
                            bufferStart.prepend('return ');
                            bufferEnd.add(';');
                        } else if (!sourceSeen) {
                            this.source.push('return "";');
                        }
                    } else {
                        varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());
                        if (bufferStart) {
                            bufferStart.prepend('return buffer + ');
                            bufferEnd.add(';');
                        } else {
                            this.source.push('return buffer;');
                        }
                    }
                    if (varDeclarations) {
                        this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
                    }
                    return this.source.merge();
                },
                // [blockValue]
                //
                // On stack, before: hash, inverse, program, value
                // On stack, after: return value of blockHelperMissing
                //
                // The purpose of this opcode is to take a block of the form
                // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
                // replace it on the stack with the result of properly
                // invoking blockHelperMissing.
                blockValue: function blockValue(name) {
                    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'), params = [this.contextName(0)];
                    this.setupHelperArgs(name, 0, params);
                    var blockName = this.popStack();
                    params.splice(1, 0, blockName);
                    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
                },
                // [ambiguousBlockValue]
                //
                // On stack, before: hash, inverse, program, value
                // Compiler value, before: lastHelper=value of last found helper, if any
                // On stack, after, if no lastHelper: same as [blockValue]
                // On stack, after, if lastHelper: value
                ambiguousBlockValue: function ambiguousBlockValue() {
                    // We're being a bit cheeky and reusing the options value from the prior exec
                    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'), params = [this.contextName(0)];
                    this.setupHelperArgs('', 0, params, true);
                    this.flushInline();
                    var current = this.topStack();
                    params.splice(1, 0, current);
                    this.pushSource([
                        'if (!',
                        this.lastHelper,
                        ') { ',
                        current,
                        ' = ',
                        this.source.functionCall(blockHelperMissing, 'call', params),
                        '}'
                    ]);
                },
                // [appendContent]
                //
                // On stack, before: ...
                // On stack, after: ...
                //
                // Appends the string value of `content` to the current buffer
                appendContent: function appendContent(content) {
                    if (this.pendingContent) {
                        content = this.pendingContent + content;
                    } else {
                        this.pendingLocation = this.source.currentLocation;
                    }
                    this.pendingContent = content;
                },
                // [append]
                //
                // On stack, before: value, ...
                // On stack, after: ...
                //
                // Coerces `value` to a String and appends it to the current buffer.
                //
                // If `value` is truthy, or 0, it is coerced into a string and appended
                // Otherwise, the empty string is appended
                append: function append() {
                    if (this.isInline()) {
                        this.replaceStack(function (current) {
                            return [
                                ' != null ? ',
                                current,
                                ' : ""'
                            ];
                        });
                        this.pushSource(this.appendToBuffer(this.popStack()));
                    } else {
                        var local = this.popStack();
                        this.pushSource([
                            'if (',
                            local,
                            ' != null) { ',
                            this.appendToBuffer(local, undefined, true),
                            ' }'
                        ]);
                        if (this.environment.isSimple) {
                            this.pushSource([
                                'else { ',
                                this.appendToBuffer('\'\'', undefined, true),
                                ' }'
                            ]);
                        }
                    }
                },
                // [appendEscaped]
                //
                // On stack, before: value, ...
                // On stack, after: ...
                //
                // Escape `value` and append it to the buffer
                appendEscaped: function appendEscaped() {
                    this.pushSource(this.appendToBuffer([
                        this.aliasable('container.escapeExpression'),
                        '(',
                        this.popStack(),
                        ')'
                    ]));
                },
                // [getContext]
                //
                // On stack, before: ...
                // On stack, after: ...
                // Compiler value, after: lastContext=depth
                //
                // Set the value of the `lastContext` compiler value to the depth
                getContext: function getContext(depth) {
                    this.lastContext = depth;
                },
                // [pushContext]
                //
                // On stack, before: ...
                // On stack, after: currentContext, ...
                //
                // Pushes the value of the current context onto the stack.
                pushContext: function pushContext() {
                    this.pushStackLiteral(this.contextName(this.lastContext));
                },
                // [lookupOnContext]
                //
                // On stack, before: ...
                // On stack, after: currentContext[name], ...
                //
                // Looks up the value of `name` on the current context and pushes
                // it onto the stack.
                lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
                    var i = 0;
                    if (!scoped && this.options.compat && !this.lastContext) {
                        // The depthed query is expected to handle the undefined logic for the root level that
                        // is implemented below, so we evaluate that directly in compat mode
                        this.push(this.depthedLookup(parts[i++]));
                    } else {
                        this.pushContext();
                    }
                    this.resolvePath('context', parts, i, falsy, strict);
                },
                // [lookupBlockParam]
                //
                // On stack, before: ...
                // On stack, after: blockParam[name], ...
                //
                // Looks up the value of `parts` on the given block param and pushes
                // it onto the stack.
                lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
                    this.useBlockParams = true;
                    this.push([
                        'blockParams[',
                        blockParamId[0],
                        '][',
                        blockParamId[1],
                        ']'
                    ]);
                    this.resolvePath('context', parts, 1);
                },
                // [lookupData]
                //
                // On stack, before: ...
                // On stack, after: data, ...
                //
                // Push the data lookup operator
                lookupData: function lookupData(depth, parts, strict) {
                    if (!depth) {
                        this.pushStackLiteral('data');
                    } else {
                        this.pushStackLiteral('container.data(data, ' + depth + ')');
                    }
                    this.resolvePath('data', parts, 0, true, strict);
                },
                resolvePath: function resolvePath(type, parts, i, falsy, strict) {
                    // istanbul ignore next
                    var _this = this;
                    if (this.options.strict || this.options.assumeObjects) {
                        this.push(strictLookup(this.options.strict && strict, this, parts, type));
                        return;
                    }
                    var len = parts.length;
                    for (; i < len; i++) {
                        /* eslint-disable no-loop-func */
                        this.replaceStack(function (current) {
                            var lookup = _this.nameLookup(current, parts[i], type);
                            // We want to ensure that zero and false are handled properly if the context (falsy flag)
                            // needs to have the special handling for these values.
                            if (!falsy) {
                                return [
                                    ' != null ? ',
                                    lookup,
                                    ' : ',
                                    current
                                ];
                            } else {
                                // Otherwise we can use generic falsy handling
                                return [
                                    ' && ',
                                    lookup
                                ];
                            }
                        });    /* eslint-enable no-loop-func */
                    }
                },
                // [resolvePossibleLambda]
                //
                // On stack, before: value, ...
                // On stack, after: resolved value, ...
                //
                // If the `value` is a lambda, replace it on the stack by
                // the return value of the lambda
                resolvePossibleLambda: function resolvePossibleLambda() {
                    this.push([
                        this.aliasable('container.lambda'),
                        '(',
                        this.popStack(),
                        ', ',
                        this.contextName(0),
                        ')'
                    ]);
                },
                // [pushStringParam]
                //
                // On stack, before: ...
                // On stack, after: string, currentContext, ...
                //
                // This opcode is designed for use in string mode, which
                // provides the string value of a parameter along with its
                // depth rather than resolving it immediately.
                pushStringParam: function pushStringParam(string, type) {
                    this.pushContext();
                    this.pushString(type);
                    // If it's a subexpression, the string result
                    // will be pushed after this opcode.
                    if (type !== 'SubExpression') {
                        if (typeof string === 'string') {
                            this.pushString(string);
                        } else {
                            this.pushStackLiteral(string);
                        }
                    }
                },
                emptyHash: function emptyHash(omitEmpty) {
                    if (this.trackIds) {
                        this.push('{}');    // hashIds
                    }
                    if (this.stringParams) {
                        this.push('{}');
                        // hashContexts
                        this.push('{}');    // hashTypes
                    }
                    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
                },
                pushHash: function pushHash() {
                    if (this.hash) {
                        this.hashes.push(this.hash);
                    }
                    this.hash = {
                        values: [],
                        types: [],
                        contexts: [],
                        ids: []
                    };
                },
                popHash: function popHash() {
                    var hash = this.hash;
                    this.hash = this.hashes.pop();
                    if (this.trackIds) {
                        this.push(this.objectLiteral(hash.ids));
                    }
                    if (this.stringParams) {
                        this.push(this.objectLiteral(hash.contexts));
                        this.push(this.objectLiteral(hash.types));
                    }
                    this.push(this.objectLiteral(hash.values));
                },
                // [pushString]
                //
                // On stack, before: ...
                // On stack, after: quotedString(string), ...
                //
                // Push a quoted version of `string` onto the stack
                pushString: function pushString(string) {
                    this.pushStackLiteral(this.quotedString(string));
                },
                // [pushLiteral]
                //
                // On stack, before: ...
                // On stack, after: value, ...
                //
                // Pushes a value onto the stack. This operation prevents
                // the compiler from creating a temporary variable to hold
                // it.
                pushLiteral: function pushLiteral(value) {
                    this.pushStackLiteral(value);
                },
                // [pushProgram]
                //
                // On stack, before: ...
                // On stack, after: program(guid), ...
                //
                // Push a program expression onto the stack. This takes
                // a compile-time guid and converts it into a runtime-accessible
                // expression.
                pushProgram: function pushProgram(guid) {
                    if (guid != null) {
                        this.pushStackLiteral(this.programExpression(guid));
                    } else {
                        this.pushStackLiteral(null);
                    }
                },
                // [registerDecorator]
                //
                // On stack, before: hash, program, params..., ...
                // On stack, after: ...
                //
                // Pops off the decorator's parameters, invokes the decorator,
                // and inserts the decorator into the decorators list.
                registerDecorator: function registerDecorator(paramSize, name) {
                    var foundDecorator = this.nameLookup('decorators', name, 'decorator'), options = this.setupHelperArgs(name, paramSize);
                    this.decorators.push([
                        'fn = ',
                        this.decorators.functionCall(foundDecorator, '', [
                            'fn',
                            'props',
                            'container',
                            options
                        ]),
                        ' || fn;'
                    ]);
                },
                // [invokeHelper]
                //
                // On stack, before: hash, inverse, program, params..., ...
                // On stack, after: result of helper invocation
                //
                // Pops off the helper's parameters, invokes the helper,
                // and pushes the helper's return value onto the stack.
                //
                // If the helper is not found, `helperMissing` is called.
                invokeHelper: function invokeHelper(paramSize, name, isSimple) {
                    var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name), simple = isSimple ? [
                            helper.name,
                            ' || '
                        ] : '';
                    var lookup = ['('].concat(simple, nonHelper);
                    if (!this.options.strict) {
                        lookup.push(' || ', this.aliasable('helpers.helperMissing'));
                    }
                    lookup.push(')');
                    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
                },
                // [invokeKnownHelper]
                //
                // On stack, before: hash, inverse, program, params..., ...
                // On stack, after: result of helper invocation
                //
                // This operation is used when the helper is known to exist,
                // so a `helperMissing` fallback is not required.
                invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
                    var helper = this.setupHelper(paramSize, name);
                    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
                },
                // [invokeAmbiguous]
                //
                // On stack, before: hash, inverse, program, params..., ...
                // On stack, after: result of disambiguation
                //
                // This operation is used when an expression like `{{foo}}`
                // is provided, but we don't know at compile-time whether it
                // is a helper or a path.
                //
                // This operation emits more code than the other options,
                // and can be avoided by passing the `knownHelpers` and
                // `knownHelpersOnly` flags at compile-time.
                invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
                    this.useRegister('helper');
                    var nonHelper = this.popStack();
                    this.emptyHash();
                    var helper = this.setupHelper(0, name, helperCall);
                    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
                    var lookup = [
                        '(',
                        '(helper = ',
                        helperName,
                        ' || ',
                        nonHelper,
                        ')'
                    ];
                    if (!this.options.strict) {
                        lookup[0] = '(helper = ';
                        lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
                    }
                    this.push([
                        '(',
                        lookup,
                        helper.paramsInit ? [
                            '),(',
                            helper.paramsInit
                        ] : [],
                        '),',
                        '(typeof helper === ',
                        this.aliasable('"function"'),
                        ' ? ',
                        this.source.functionCall('helper', 'call', helper.callParams),
                        ' : helper))'
                    ]);
                },
                // [invokePartial]
                //
                // On stack, before: context, ...
                // On stack after: result of partial invocation
                //
                // This operation pops off a context, invokes a partial with that context,
                // and pushes the result of the invocation back.
                invokePartial: function invokePartial(isDynamic, name, indent) {
                    var params = [], options = this.setupParams(name, 1, params);
                    if (isDynamic) {
                        name = this.popStack();
                        delete options.name;
                    }
                    if (indent) {
                        options.indent = JSON.stringify(indent);
                    }
                    options.helpers = 'helpers';
                    options.partials = 'partials';
                    options.decorators = 'container.decorators';
                    if (!isDynamic) {
                        params.unshift(this.nameLookup('partials', name, 'partial'));
                    } else {
                        params.unshift(name);
                    }
                    if (this.options.compat) {
                        options.depths = 'depths';
                    }
                    options = this.objectLiteral(options);
                    params.push(options);
                    this.push(this.source.functionCall('container.invokePartial', '', params));
                },
                // [assignToHash]
                //
                // On stack, before: value, ..., hash, ...
                // On stack, after: ..., hash, ...
                //
                // Pops a value off the stack and assigns it to the current hash
                assignToHash: function assignToHash(key) {
                    var value = this.popStack(), context = undefined, type = undefined, id = undefined;
                    if (this.trackIds) {
                        id = this.popStack();
                    }
                    if (this.stringParams) {
                        type = this.popStack();
                        context = this.popStack();
                    }
                    var hash = this.hash;
                    if (context) {
                        hash.contexts[key] = context;
                    }
                    if (type) {
                        hash.types[key] = type;
                    }
                    if (id) {
                        hash.ids[key] = id;
                    }
                    hash.values[key] = value;
                },
                pushId: function pushId(type, name, child) {
                    if (type === 'BlockParam') {
                        this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
                    } else if (type === 'PathExpression') {
                        this.pushString(name);
                    } else if (type === 'SubExpression') {
                        this.pushStackLiteral('true');
                    } else {
                        this.pushStackLiteral('null');
                    }
                },
                // HELPERS
                compiler: JavaScriptCompiler,
                compileChildren: function compileChildren(environment, options) {
                    var children = environment.children, child = undefined, compiler = undefined;
                    for (var i = 0, l = children.length; i < l; i++) {
                        child = children[i];
                        compiler = new this.compiler();
                        // eslint-disable-line new-cap
                        var existing = this.matchExistingProgram(child);
                        if (existing == null) {
                            this.context.programs.push('');
                            // Placeholder to prevent name conflicts for nested children
                            var index = this.context.programs.length;
                            child.index = index;
                            child.name = 'program' + index;
                            this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                            this.context.decorators[index] = compiler.decorators;
                            this.context.environments[index] = child;
                            this.useDepths = this.useDepths || compiler.useDepths;
                            this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                            child.useDepths = this.useDepths;
                            child.useBlockParams = this.useBlockParams;
                        } else {
                            child.index = existing.index;
                            child.name = 'program' + existing.index;
                            this.useDepths = this.useDepths || existing.useDepths;
                            this.useBlockParams = this.useBlockParams || existing.useBlockParams;
                        }
                    }
                },
                matchExistingProgram: function matchExistingProgram(child) {
                    for (var i = 0, len = this.context.environments.length; i < len; i++) {
                        var environment = this.context.environments[i];
                        if (environment && environment.equals(child)) {
                            return environment;
                        }
                    }
                },
                programExpression: function programExpression(guid) {
                    var child = this.environment.children[guid], programParams = [
                            child.index,
                            'data',
                            child.blockParams
                        ];
                    if (this.useBlockParams || this.useDepths) {
                        programParams.push('blockParams');
                    }
                    if (this.useDepths) {
                        programParams.push('depths');
                    }
                    return 'container.program(' + programParams.join(', ') + ')';
                },
                useRegister: function useRegister(name) {
                    if (!this.registers[name]) {
                        this.registers[name] = true;
                        this.registers.list.push(name);
                    }
                },
                push: function push(expr) {
                    if (!(expr instanceof Literal)) {
                        expr = this.source.wrap(expr);
                    }
                    this.inlineStack.push(expr);
                    return expr;
                },
                pushStackLiteral: function pushStackLiteral(item) {
                    this.push(new Literal(item));
                },
                pushSource: function pushSource(source) {
                    if (this.pendingContent) {
                        this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
                        this.pendingContent = undefined;
                    }
                    if (source) {
                        this.source.push(source);
                    }
                },
                replaceStack: function replaceStack(callback) {
                    var prefix = ['('], stack = undefined, createdStack = undefined, usedLiteral = undefined;
                    /* istanbul ignore next */
                    if (!this.isInline()) {
                        throw new _exception2['default']('replaceStack on non-inline');
                    }
                    // We want to merge the inline statement into the replacement statement via ','
                    var top = this.popStack(true);
                    if (top instanceof Literal) {
                        // Literals do not need to be inlined
                        stack = [top.value];
                        prefix = [
                            '(',
                            stack
                        ];
                        usedLiteral = true;
                    } else {
                        // Get or create the current stack name for use by the inline
                        createdStack = true;
                        var _name = this.incrStack();
                        prefix = [
                            '((',
                            this.push(_name),
                            ' = ',
                            top,
                            ')'
                        ];
                        stack = this.topStack();
                    }
                    var item = callback.call(this, stack);
                    if (!usedLiteral) {
                        this.popStack();
                    }
                    if (createdStack) {
                        this.stackSlot--;
                    }
                    this.push(prefix.concat(item, ')'));
                },
                incrStack: function incrStack() {
                    this.stackSlot++;
                    if (this.stackSlot > this.stackVars.length) {
                        this.stackVars.push('stack' + this.stackSlot);
                    }
                    return this.topStackName();
                },
                topStackName: function topStackName() {
                    return 'stack' + this.stackSlot;
                },
                flushInline: function flushInline() {
                    var inlineStack = this.inlineStack;
                    this.inlineStack = [];
                    for (var i = 0, len = inlineStack.length; i < len; i++) {
                        var entry = inlineStack[i];
                        /* istanbul ignore if */
                        if (entry instanceof Literal) {
                            this.compileStack.push(entry);
                        } else {
                            var stack = this.incrStack();
                            this.pushSource([
                                stack,
                                ' = ',
                                entry,
                                ';'
                            ]);
                            this.compileStack.push(stack);
                        }
                    }
                },
                isInline: function isInline() {
                    return this.inlineStack.length;
                },
                popStack: function popStack(wrapped) {
                    var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
                    if (!wrapped && item instanceof Literal) {
                        return item.value;
                    } else {
                        if (!inline) {
                            /* istanbul ignore next */
                            if (!this.stackSlot) {
                                throw new _exception2['default']('Invalid stack pop');
                            }
                            this.stackSlot--;
                        }
                        return item;
                    }
                },
                topStack: function topStack() {
                    var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
                    /* istanbul ignore if */
                    if (item instanceof Literal) {
                        return item.value;
                    } else {
                        return item;
                    }
                },
                contextName: function contextName(context) {
                    if (this.useDepths && context) {
                        return 'depths[' + context + ']';
                    } else {
                        return 'depth' + context;
                    }
                },
                quotedString: function quotedString(str) {
                    return this.source.quotedString(str);
                },
                objectLiteral: function objectLiteral(obj) {
                    return this.source.objectLiteral(obj);
                },
                aliasable: function aliasable(name) {
                    var ret = this.aliases[name];
                    if (ret) {
                        ret.referenceCount++;
                        return ret;
                    }
                    ret = this.aliases[name] = this.source.wrap(name);
                    ret.aliasable = true;
                    ret.referenceCount = 1;
                    return ret;
                },
                setupHelper: function setupHelper(paramSize, name, blockHelper) {
                    var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
                    var foundHelper = this.nameLookup('helpers', name, 'helper'), callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');
                    return {
                        params: params,
                        paramsInit: paramsInit,
                        name: foundHelper,
                        callParams: [callContext].concat(params)
                    };
                },
                setupParams: function setupParams(helper, paramSize, params) {
                    var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = undefined;
                    if (objectArgs) {
                        params = [];
                    }
                    options.name = this.quotedString(helper);
                    options.hash = this.popStack();
                    if (this.trackIds) {
                        options.hashIds = this.popStack();
                    }
                    if (this.stringParams) {
                        options.hashTypes = this.popStack();
                        options.hashContexts = this.popStack();
                    }
                    var inverse = this.popStack(), program = this.popStack();
                    // Avoid setting fn and inverse if neither are set. This allows
                    // helpers to do a check for `if (options.fn)`
                    if (program || inverse) {
                        options.fn = program || 'container.noop';
                        options.inverse = inverse || 'container.noop';
                    }
                    // The parameters go on to the stack in order (making sure that they are evaluated in order)
                    // so we need to pop them off the stack in reverse order
                    var i = paramSize;
                    while (i--) {
                        param = this.popStack();
                        params[i] = param;
                        if (this.trackIds) {
                            ids[i] = this.popStack();
                        }
                        if (this.stringParams) {
                            types[i] = this.popStack();
                            contexts[i] = this.popStack();
                        }
                    }
                    if (objectArgs) {
                        options.args = this.source.generateArray(params);
                    }
                    if (this.trackIds) {
                        options.ids = this.source.generateArray(ids);
                    }
                    if (this.stringParams) {
                        options.types = this.source.generateArray(types);
                        options.contexts = this.source.generateArray(contexts);
                    }
                    if (this.options.data) {
                        options.data = 'data';
                    }
                    if (this.useBlockParams) {
                        options.blockParams = 'blockParams';
                    }
                    return options;
                },
                setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
                    var options = this.setupParams(helper, paramSize, params);
                    options = this.objectLiteral(options);
                    if (useRegister) {
                        this.useRegister('options');
                        params.push('options');
                        return [
                            'options=',
                            options
                        ];
                    } else if (params) {
                        params.push(options);
                        return '';
                    } else {
                        return options;
                    }
                }
            };
            (function () {
                var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');
                var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
                for (var i = 0, l = reservedWords.length; i < l; i++) {
                    compilerWords[reservedWords[i]] = true;
                }
            }());
            JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
                return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
            };
            function strictLookup(requireTerminal, compiler, parts, type) {
                var stack = compiler.popStack(), i = 0, len = parts.length;
                if (requireTerminal) {
                    len--;
                }
                for (; i < len; i++) {
                    stack = compiler.nameLookup(stack, parts[i], type);
                }
                if (requireTerminal) {
                    return [
                        compiler.aliasable('container.strict'),
                        '(',
                        stack,
                        ', ',
                        compiler.quotedString(parts[i]),
                        ')'
                    ];
                } else {
                    return stack;
                }
            }
            exports['default'] = JavaScriptCompiler;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            /* global define */
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(31);
            var SourceNode = undefined;
            try {
                /* istanbul ignore next */
                if (false) {
                    // We don't support this in AMD environments. For these environments, we asusme that
                    // they are running on the browser and thus have no need for the source-map library.
                    var SourceMap = require('source-map');
                    SourceNode = SourceMap.SourceNode;
                }
            } catch (err) {
            }
            /* NOP */
            /* istanbul ignore if: tested but not covered in istanbul due to dist build  */
            if (!SourceNode) {
                SourceNode = function (line, column, srcFile, chunks) {
                    this.src = '';
                    if (chunks) {
                        this.add(chunks);
                    }
                };
                /* istanbul ignore next */
                SourceNode.prototype = {
                    add: function add(chunks) {
                        if (_utils.isArray(chunks)) {
                            chunks = chunks.join('');
                        }
                        this.src += chunks;
                    },
                    prepend: function prepend(chunks) {
                        if (_utils.isArray(chunks)) {
                            chunks = chunks.join('');
                        }
                        this.src = chunks + this.src;
                    },
                    toStringWithSourceMap: function toStringWithSourceMap() {
                        return { code: this.toString() };
                    },
                    toString: function toString() {
                        return this.src;
                    }
                };
            }
            function castChunk(chunk, codeGen, loc) {
                if (_utils.isArray(chunk)) {
                    var ret = [];
                    for (var i = 0, len = chunk.length; i < len; i++) {
                        ret.push(codeGen.wrap(chunk[i], loc));
                    }
                    return ret;
                } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
                    // Handle primitives that the SourceNode will throw up on
                    return chunk + '';
                }
                return chunk;
            }
            function CodeGen(srcFile) {
                this.srcFile = srcFile;
                this.source = [];
            }
            CodeGen.prototype = {
                isEmpty: function isEmpty() {
                    return !this.source.length;
                },
                prepend: function prepend(source, loc) {
                    this.source.unshift(this.wrap(source, loc));
                },
                push: function push(source, loc) {
                    this.source.push(this.wrap(source, loc));
                },
                merge: function merge() {
                    var source = this.empty();
                    this.each(function (line) {
                        source.add([
                            '  ',
                            line,
                            '\n'
                        ]);
                    });
                    return source;
                },
                each: function each(iter) {
                    for (var i = 0, len = this.source.length; i < len; i++) {
                        iter(this.source[i]);
                    }
                },
                empty: function empty() {
                    var loc = this.currentLocation || { start: {} };
                    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
                },
                wrap: function wrap(chunk) {
                    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];
                    if (chunk instanceof SourceNode) {
                        return chunk;
                    }
                    chunk = castChunk(chunk, this, loc);
                    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
                },
                functionCall: function functionCall(fn, type, params) {
                    params = this.generateList(params);
                    return this.wrap([
                        fn,
                        type ? '.' + type + '(' : '(',
                        params,
                        ')'
                    ]);
                },
                quotedString: function quotedString(str) {
                    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028')    // Per Ecma-262 7.3 + 7.8.4
.replace(/\u2029/g, '\\u2029') + '"';
                },
                objectLiteral: function objectLiteral(obj) {
                    var pairs = [];
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            var value = castChunk(obj[key], this);
                            if (value !== 'undefined') {
                                pairs.push([
                                    this.quotedString(key),
                                    ':',
                                    value
                                ]);
                            }
                        }
                    }
                    var ret = this.generateList(pairs);
                    ret.prepend('{');
                    ret.add('}');
                    return ret;
                },
                generateList: function generateList(entries) {
                    var ret = this.empty();
                    for (var i = 0, len = entries.length; i < len; i++) {
                        if (i) {
                            ret.add(',');
                        }
                        ret.add(castChunk(entries[i], this));
                    }
                    return ret;
                },
                generateArray: function generateArray(entries) {
                    var ret = this.generateList(entries);
                    ret.prepend('[');
                    ret.add(']');
                    return ret;
                }
            };
            exports['default'] = CodeGen;
            module.exports = exports['default'];    /***/
        },
        function (module, exports, __webpack_require__) {
            /* eslint-disable new-cap */
            'use strict';
            exports.__esModule = true;
            exports.print = print;
            exports.PrintVisitor = PrintVisitor;
            // istanbul ignore next
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { 'default': obj };
            }
            var _visitor = __webpack_require__(51);
            var _visitor2 = _interopRequireDefault(_visitor);
            function print(ast) {
                return new PrintVisitor().accept(ast);
            }
            function PrintVisitor() {
                this.padding = 0;
            }
            PrintVisitor.prototype = new _visitor2['default']();
            PrintVisitor.prototype.pad = function (string) {
                var out = '';
                for (var i = 0, l = this.padding; i < l; i++) {
                    out += '  ';
                }
                out += string + '\n';
                return out;
            };
            PrintVisitor.prototype.Program = function (program) {
                var out = '', body = program.body, i = undefined, l = undefined;
                if (program.blockParams) {
                    var blockParams = 'BLOCK PARAMS: [';
                    for (i = 0, l = program.blockParams.length; i < l; i++) {
                        blockParams += ' ' + program.blockParams[i];
                    }
                    blockParams += ' ]';
                    out += this.pad(blockParams);
                }
                for (i = 0, l = body.length; i < l; i++) {
                    out += this.accept(body[i]);
                }
                this.padding--;
                return out;
            };
            PrintVisitor.prototype.MustacheStatement = function (mustache) {
                return this.pad('{{ ' + this.SubExpression(mustache) + ' }}');
            };
            PrintVisitor.prototype.Decorator = function (mustache) {
                return this.pad('{{ DIRECTIVE ' + this.SubExpression(mustache) + ' }}');
            };
            PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function (block) {
                var out = '';
                out += this.pad((block.type === 'DecoratorBlock' ? 'DIRECTIVE ' : '') + 'BLOCK:');
                this.padding++;
                out += this.pad(this.SubExpression(block));
                if (block.program) {
                    out += this.pad('PROGRAM:');
                    this.padding++;
                    out += this.accept(block.program);
                    this.padding--;
                }
                if (block.inverse) {
                    if (block.program) {
                        this.padding++;
                    }
                    out += this.pad('{{^}}');
                    this.padding++;
                    out += this.accept(block.inverse);
                    this.padding--;
                    if (block.program) {
                        this.padding--;
                    }
                }
                this.padding--;
                return out;
            };
            PrintVisitor.prototype.PartialStatement = function (partial) {
                var content = 'PARTIAL:' + partial.name.original;
                if (partial.params[0]) {
                    content += ' ' + this.accept(partial.params[0]);
                }
                if (partial.hash) {
                    content += ' ' + this.accept(partial.hash);
                }
                return this.pad('{{> ' + content + ' }}');
            };
            PrintVisitor.prototype.PartialBlockStatement = function (partial) {
                var content = 'PARTIAL BLOCK:' + partial.name.original;
                if (partial.params[0]) {
                    content += ' ' + this.accept(partial.params[0]);
                }
                if (partial.hash) {
                    content += ' ' + this.accept(partial.hash);
                }
                content += ' ' + this.pad('PROGRAM:');
                this.padding++;
                content += this.accept(partial.program);
                this.padding--;
                return this.pad('{{> ' + content + ' }}');
            };
            PrintVisitor.prototype.ContentStatement = function (content) {
                return this.pad('CONTENT[ \'' + content.value + '\' ]');
            };
            PrintVisitor.prototype.CommentStatement = function (comment) {
                return this.pad('{{! \'' + comment.value + '\' }}');
            };
            PrintVisitor.prototype.SubExpression = function (sexpr) {
                var params = sexpr.params, paramStrings = [], hash = undefined;
                for (var i = 0, l = params.length; i < l; i++) {
                    paramStrings.push(this.accept(params[i]));
                }
                params = '[' + paramStrings.join(', ') + ']';
                hash = sexpr.hash ? ' ' + this.accept(sexpr.hash) : '';
                return this.accept(sexpr.path) + ' ' + params + hash;
            };
            PrintVisitor.prototype.PathExpression = function (id) {
                var path = id.parts.join('/');
                return (id.data ? '@' : '') + 'PATH:' + path;
            };
            PrintVisitor.prototype.StringLiteral = function (string) {
                return '"' + string.value + '"';
            };
            PrintVisitor.prototype.NumberLiteral = function (number) {
                return 'NUMBER{' + number.value + '}';
            };
            PrintVisitor.prototype.BooleanLiteral = function (bool) {
                return 'BOOLEAN{' + bool.value + '}';
            };
            PrintVisitor.prototype.UndefinedLiteral = function () {
                return 'UNDEFINED';
            };
            PrintVisitor.prototype.NullLiteral = function () {
                return 'NULL';
            };
            PrintVisitor.prototype.Hash = function (hash) {
                var pairs = hash.pairs, joinedPairs = [];
                for (var i = 0, l = pairs.length; i < l; i++) {
                    joinedPairs.push(this.accept(pairs[i]));
                }
                return 'HASH{' + joinedPairs.join(', ') + '}';
            };
            PrintVisitor.prototype.HashPair = function (pair) {
                return pair.key + '=' + this.accept(pair.value);
            };    /* eslint-enable new-cap */
                  /***/
        },
        function (module, exports) {
            module.exports = fs;    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(59);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(61),
                __webpack_require__(62),
                __webpack_require__(15),
                __webpack_require__(63)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (featureDetection, ButtonView, _, tpl) {
                'use strict';
                return ButtonView.extend({
                    tagName: 'span',
                    events: function () {
                        return this.extendParentEvents({ 'click': '_triggerAnalytics' });
                    },
                    initialize: function (options) {
                        ButtonView.prototype.initialize.apply(this, arguments);
                        this._mediaViewer = options.mediaViewer;
                        this._model = this._mediaViewer.getView().getCurrentFile();
                        this._tokenFetcher = this._mediaViewer.getConfig().fetchToken;
                    },
                    render: function () {
                        this.fetchTokenAndRenderTemplate();
                        return this;
                    },
                    fetchTokenAndRenderTemplate: function () {
                        this._tokenFetcher(this._model).then(function (fileWithNewToken) {
                            var downloadUrl = fileWithNewToken.srcDownload || fileWithNewToken.src;
                            this.$el.html(tpl.default(ButtonView.translate, featureDetection).controlDownloadButton(downloadUrl));
                        }.bind(this));
                    },
                    _triggerAnalytics: function () {
                        this._mediaViewer.trigger('fv.download');
                        this._mediaViewer.analytics.send('file.download', { actionType: 'button' });
                    }
                }, {
                    isDownloadable: function (mediaViewer) {
                        var file = mediaViewer.getView().getCurrentFile();
                        return file && file.get('downloadable');
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            // style-loader: Adds some css to the DOM by adding a <style> tag
            // load the styles
            var content = __webpack_require__(60);
            if (typeof content === 'string')
                content = [[
                        module.id,
                        content,
                        ''
                    ]];
            // add the styles to the DOM
            var update = __webpack_require__(12)(content, {});
            if (content.locals)
                module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./buttons.less', function () {
                        var newContent = require('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./buttons.less');
                        if (typeof newContent === 'string')
                            newContent = [[
                                    module.id,
                                    newContent,
                                    ''
                                ]];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function () {
                    update();
                });
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(11)();
            // imports
            // module
            exports.push([
                module.id,
                '.cp-control-panel-close {\n  border-left: 1px solid #333;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+MTYvaTAwMjdfY2xvc2UtZGlhbG9nPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48cGF0aCBkPSJNOS42NCA4bDQuMDE2IDQuMDE2Yy4yMy4yMy4zNDQuNTAyLjM0NC44MiAwIC4zMTgtLjExNS41OS0uMzQ0LjgyLS4yMy4yMy0uNTAyLjM0NC0uODIuMzQ0LS4zMTggMC0uNTktLjExNS0uODItLjM0NEw4IDkuNjRsLTQuMDE2IDQuMDE2Yy0uMjMuMjMtLjUwMi4zNDQtLjgyLjM0NC0uMzE4IDAtLjU5LS4xMTUtLjgyLS4zNDQtLjIzLS4yMy0uMzQ0LS41MDItLjM0NC0uODIgMC0uMzE4LjExNS0uNTkuMzQ0LS44Mkw2LjM2IDggMi4zNzQgNC4wMTZjLS4yMy0uMjMtLjM0NC0uNTAzLS4zNDQtLjgyIDAtLjMxOC4xMTYtLjU4Ny4zNDUtLjgwNS4yMy0uMjMuNTAzLS4zNC44Mi0uMzQuMzE4IDAgLjU5LjExMy44Mi4zNDNMOCA2LjM3Nmw0LjAzLTQuMDNjLjIzLS4yMy41MDQtLjM0NS44MjItLjM0NS4zMTcgMCAuNTkuMTE3LjgyLjM0Ni4yMi4yMy4zMjguNTAyLjMyOC44MiAwIC4zMTgtLjExLjU4Ni0uMzI4LjgwNUw5LjY0MiA4eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");\n}\n.cp-control-panel-download,\n.cp-waiting-message-download {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+MTYvZG93bmxvYWQ8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxwYXRoIGQ9Ik0zIDE0di0xaDEwdjFIM3ptMTAtNy44NEw4LjIgMTFoLS4zOUwzIDYuMTZsMS4xMi0xLjEzTDcgNy45MlYzLjVjLjA5LTEgLjQ1LTEuNSAxLTEuNXMuODkuMzcgMSAxLjV2NC40MWwyLjkxLTIuODVMMTMgNi4xNnoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");\n}\n.cp-control-panel-more {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+MTYvaTAxMjdfbW9yZTwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PHBhdGggZD0iTTQgOGMwLS41NTItLjE5NS0xLjAyMy0uNTg2LTEuNDE0QzMuMDI0IDYuMTk2IDIuNTUyIDYgMiA2Yy0uNTUyIDAtMS4wMjMuMTk1LTEuNDE0LjU4NkMuMTk2IDYuOTc2IDAgNy40NDggMCA4YzAgLjU1Mi4xOTUgMS4wMjMuNTg2IDEuNDE0LjM5LjM5Ljg2Mi41ODYgMS40MTQuNTg2LjU1MiAwIDEuMDIzLS4xOTUgMS40MTQtLjU4NkMzLjgwNCA5LjAyNCA0IDguNTUyIDQgOHptNiAwYzAtLjU1Mi0uMTk1LTEuMDIzLS41ODYtMS40MTRDOS4wMjQgNi4xOTYgOC41NTIgNiA4IDZjLS41NTIgMC0xLjAyMy4xOTUtMS40MTQuNTg2QzYuMTk2IDYuOTc2IDYgNy40NDggNiA4YzAgLjU1Mi4xOTUgMS4wMjMuNTg2IDEuNDE0LjM5LjM5Ljg2Mi41ODYgMS40MTQuNTg2LjU1MiAwIDEuMDIzLS4xOTUgMS40MTQtLjU4Ni4zOS0uMzkuNTg2LS44NjIuNTg2LTEuNDE0em02IDBjMC0uNTUyLS4xOTUtMS4wMjMtLjU4Ni0xLjQxNEMxNS4wMjQgNi4xOTYgMTQuNTUyIDYgMTQgNmMtLjU1MiAwLTEuMDIzLjE5NS0xLjQxNC41ODYtLjM5LjM5LS41ODYuODYyLS41ODYgMS40MTQgMCAuNTUyLjE5NSAxLjAyMy41ODYgMS40MTQuMzkuMzkuODYyLjU4NiAxLjQxNC41ODYuNTUyIDAgMS4wMjMtLjE5NSAxLjQxNC0uNTg2LjM5LS4zOS41ODYtLjg2Mi41ODYtMS40MTR6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");\n  z-index: 201;\n}\n.cp-control-panel-more.cp-dropdown {\n  position: relative;\n  display: inline-block;\n  text-indent: 0;\n}\n.cp-control-panel-more.cp-dropdown .cp-dropdown-content {\n  pointer-events: auto;\n  display: block;\n  margin-top: 0;\n  padding: 0;\n  white-space: nowrap;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  z-index: 1;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease, visibility 0s ease 0.5s;\n}\n.cp-control-panel-more.cp-dropdown .cp-dropdown-content li {\n  font-size: 14px;\n  list-style: none;\n  padding: 0;\n  background-color: #333;\n}\n.cp-control-panel-more.cp-dropdown .cp-dropdown-content li:hover {\n  background-color: #707070;\n}\n.cp-control-panel-more.cp-dropdown .cp-dropdown-content li a {\n  display: block;\n  line-height: 2.25rem;\n  padding: 0 1.5rem 0 1rem;\n  color: #fff;\n  text-decoration: none;\n}\n.cp-control-panel-more.cp-dropdown:focus {\n  pointer-events: none;\n}\n.cp-control-panel-more.cp-dropdown:focus .cp-dropdown-content {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.25s ease, visibility 0s ease 0s;\n}\n.cp-control-panel-more.cp-dropdown:focus .tooltip {\n  display: none !important;\n}\n',
                ''
            ]);    // exports
                   /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return { adownload: !window.externalHost && document && document.createElement && 'download' in document.createElement('a') };
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (View, tpl) {
                'use strict';
                return View.extend({
                    className: 'fv-button',
                    events: {
                        'mouseup.unfocus': '_blur',
                        'mousedown.unfocus': '_blur'
                    },
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                    },
                    _blur: function (e) {
                        e.target.blur();
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var tpl = handlebars_1.compile('\n  <a role="button"\n     tabindex="55"\n     href="{{src}}"\n     aria-label="{{label}}"\n     class="cp-control-panel-download cp-icon"\n     {{#unless downloadAttributeSupported}}\n     target="_blank"\n     {{/unless}}\n     {{#if downloadAttributeSupported}}\n     download\n     {{/if}}>\n     <span class="tooltip tooltip-n">{{label}}</span>\n  </a>\n');
                function template(translate, features) {
                    return {
                        /**
	             * Downdload button in the top right corner.
	             * @param src A download URL for the file.
	             */
                        controlDownloadButton: function (src) {
                            // strip target attribute if download attribute is supported to fix CONFCLOUD-59429
                            return tpl({
                                src: src,
                                label: translate('cp.download.original'),
                                downloadAttributeSupported: features && features.adownload
                            });
                        }
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(59);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(62),
                __webpack_require__(15),
                __webpack_require__(65)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (ButtonView, _, tpl) {
                'use strict';
                return ButtonView.extend({
                    className: 'fv-close-button',
                    events: function () {
                        return this.extendParentEvents({ 'click': '_close' });
                    },
                    tagName: 'span',
                    initialize: function (options) {
                        ButtonView.prototype.initialize.apply(this, arguments);
                        this._mediaViewer = options.mediaViewer;
                    },
                    render: function () {
                        this.$el.html(tpl.default(ButtonView.translate).controlCloseButton);
                        return this;
                    },
                    _close: function (e) {
                        e.preventDefault();
                        this._mediaViewer.analytics.send('closed', { actionType: 'button' });
                        this._mediaViewer.close();
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var tpl = handlebars_1.compile('\n    <button role="button" tabindex="60" href="#" aria-label="{{label}}" class="cp-control-panel-close cp-icon">\n    <span class="tooltip tooltip-n">{{label}}</span>\n    </button>\n  ');
                function template(translate) {
                    return {
                        /**
	             * Close button in the top right corner.
	             */
                        controlCloseButton: tpl({ label: translate('cp.close') })
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(59);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(15),
                __webpack_require__(62),
                __webpack_require__(67)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, _, ButtonView, tpl) {
                'use strict';
                var template = tpl.default(ButtonView.translate);
                return function createMoreButton() {
                    return ButtonView.extend({
                        tagName: 'span',
                        initialize: function (options) {
                            ButtonView.prototype.initialize.apply(this, arguments);
                            this._mediaViewer = options.mediaViewer;
                            this._fileActions = [];
                        },
                        render: function () {
                            this.$el.html(template.moreButton(this._mediaViewer.getConfig().instanceId));
                            var $dropdown = this.$el.find('.cp-dropdown'), $menu = $dropdown.find('ul');
                            var currentFile = this._mediaViewer._fileState.getCurrent();
                            if (this._fileActions.length) {
                                this._fileActions.forEach(function (item) {
                                    var $item = $(template.moreMenuItem(item.text));
                                    $item.click(function (e) {
                                        e.preventDefault();
                                        item.callback(currentFile);
                                    });
                                    $menu.append($item);
                                });
                                this._show();
                            } else {
                                this._hide();
                            }
                            return this;
                        },
                        addFileAction: function (opts) {
                            var match = _.findWhere(this._fileActions, { key: opts.key });
                            if (match) {
                                // overwrite the properties of the old action with the new ones
                                _.extend(match, {
                                    key: opts.key,
                                    text: opts.text,
                                    callback: opts.callback
                                });
                            } else {
                                this._fileActions.push({
                                    key: opts.key,
                                    text: opts.text,
                                    callback: opts.callback
                                });
                            }
                            this.render();
                        },
                        removeFileAction: function (action) {
                            var index = _.indexOf(this._fileActions, action);
                            this._fileActions.splice(index, 1);
                            this.render();
                        },
                        _show: function () {
                            this.$el.css('display', 'inline');
                        },
                        _hide: function () {
                            this.$el.css('display', 'none');
                        }
                    });
                };
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var moreButtonTpl = handlebars_1.compile('\n  <a href="javascript:void(0)" role="button" tabindex="50" aria-owns="cp-more-menu-id-{{instanceId}}" aria-haspopup="true" class="cp-control-panel-more cp-icon cp-dropdown" aria-label="{{label}}">\n    <ul class="cp-dropdown-content"></ul>\n    <span class="tooltip tooltip-n">{{label}}</span>\n  </a>\n');
                var moreMenuItemTpl = handlebars_1.compile('<li><a href="#">{{text}}</a></li>');
                function template(translate) {
                    return {
                        /**
	             * More button in the top right corner.
	             * @param instanceId
	             */
                        moreButton: function (instanceId) {
                            return moreButtonTpl({
                                instanceId: instanceId,
                                label: translate('cp.show.more')
                            });
                        },
                        /**
	             * More menu item
	             * @param text the menu item text to render
	             */
                        moreMenuItem: function (text) {
                            return moreMenuItemTpl({ text: text });
                        }
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(69);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (View) {
                'use strict';
                return View.extend({
                    className: 'cp-viewer-layer',
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._viewer = null;
                    },
                    attachViewer: function (viewer) {
                        this._viewer = viewer;
                        this.$el.prepend(viewer.$el);
                    },
                    getAttachedViewer: function () {
                        return this._viewer;
                    },
                    teardown: function () {
                        View.prototype.teardown.apply(this, arguments);
                        if (this._viewer) {
                            if (this._viewer.teardown) {
                                this._viewer.teardown();
                            }
                            this._viewer.remove();
                        }
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            // style-loader: Adds some css to the DOM by adding a <style> tag
            // load the styles
            var content = __webpack_require__(70);
            if (typeof content === 'string')
                content = [[
                        module.id,
                        content,
                        ''
                    ]];
            // add the styles to the DOM
            var update = __webpack_require__(12)(content, {});
            if (content.locals)
                module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./layers.less', function () {
                        var newContent = require('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./layers.less');
                        if (typeof newContent === 'string')
                            newContent = [[
                                    module.id,
                                    newContent,
                                    ''
                                ]];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function () {
                    update();
                });
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(11)();
            // imports
            // module
            exports.push([
                module.id,
                '.cp-toolbar {\n  display: block;\n  opacity: 0;\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  background-color: #333333;\n  border-radius: 5px;\n  margin-left: -75px;\n  /* to center the div */\n}\n.cp-toolbar > * {\n  position: relative;\n}\n.cp-toolbar > *:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.cp-toolbar > *:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.cp-toolbar > *::before {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 1;\n}\n.cp-toolbar-prev-page::before {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+YXJyb3ctdXA8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTMgMTFsNS4wMS01TDEzIDExbC41LTEtNS40OS01LjVMMi41IDEwbC41IDF6Ii8+PC9nPjwvZz48L3N2Zz4=");\n}\n.cp-toolbar-next-page::before {\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+YXJyb3ctZG93bjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMyA1bDUuMDEgNUwxMyA1bC41IDEtNS40OSA1LjVMMi41IDYgMyA1eiIvPjwvZz48L2c+PC9zdmc+");\n}\n.cp-toolbar-fit::before {\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCBCZXRhIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y3AtdG9vbGJhci1maXQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaCBCZXRhLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXaGl0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImNwLXRvb2xiYXItZml0IiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi41MDAwMDAsIDIuNTAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xIiBwb2ludHM9IjAuOTk5OSAxMi4wMDAyIDAuOTk5OSA4Ljk5OTIgLTAuMDAwMSA4Ljk5OTIgLTAuMDAwMSAxNC4wMDAyIDUuMDAwOSAxNC4wMDAyIDUuMDAwOSAxMy4wMDAyIDEuOTk5OSAxMy4wMDAyIDUuMDAwOSAxMC4wMDAyIDMuOTk5OSA4Ljk5OTIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTIiIHBvaW50cz0iMCAtMC4wMDA0IDAgNC45OTk2IDEgNC45OTk2IDEgMi4wMDA2IDQgNC45OTk2IDUgNC4wMDA2IDIgMS4wMDA2IDUgMS4wMDA2IDUgLTAuMDAwNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTksLTAuMDAwNCBMOSwxLjAwMDYgTDEyLDEuMDAwNiBMOSw0LjAwMDYgTDEwLDQuOTk5NiBMMTMsMi4wMDA2IEwxMyw0Ljk5OTYgTDE0LDQuOTk5NiBMMTQsLTAuMDAwNCBMOSwtMC4wMDA0IFogTTEzLDguOTk5NiBMMTMsMTIuMDAwNiBMMTAsOC45OTk2IEw5LDEwLjAwMDYgTDEyLDEzLjAwMDYgTDksMTMuMDAwNiBMOSwxMy45OTk2IEwxNCwxMy45OTk2IEwxNCw4Ljk5OTYgTDEzLDguOTk5NiBaIiBpZD0iRmlsbC0zIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");\n}\n.cp-toolbar-minus::before {\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCBCZXRhIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y3AtdG9vbGJhci1taW51czwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoIEJldGEuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IldoaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY3AtdG9vbGJhci1taW51cyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMSIgcG9pbnRzPSI0LjEyNSA3LjgyNTUgMTAuMTI1IDcuODI1NSAxMC4xMjUgNi43OTU1IDQuMTI1IDYuNzk1NSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuMTI1LDEzLjM3MiBDMy44ODYsMTMuMzcyIDEuMjUsMTAuNjUzIDEuMjUsNy4zMTEgQzEuMjUsMy45NjkgMy44ODYsMS4yNSA3LjEyNSwxLjI1IEMxMC4zNjQsMS4yNSAxMywzLjk2OSAxMyw3LjMxMSBDMTMsMTAuNjUzIDEwLjM2NCwxMy4zNzIgNy4xMjUsMTMuMzcyIE0xNi43MTYsMTUuMTQ3IEwxMy4xOCwxMS42MTIgQzEzLjExOSwxMS41NTIgMTMuMDQ1LDExLjUxOCAxMi45NzQsMTEuNDc2IEMxMy43NzYsMTAuMjkzIDE0LjI1LDguODU4IDE0LjI1LDcuMzExIEMxNC4yNSwzLjI4IDExLjA1NCwwIDcuMTI1LDAgQzMuMTk2LDAgMCwzLjI4IDAsNy4zMTEgQzAsMTEuMzQzIDMuMTk2LDE0LjYyMiA3LjEyNSwxNC42MjIgQzguODQyLDE0LjYyMiAxMC40MTksMTMuOTk1IDExLjY1LDEyLjk1MyBDMTEuNjc5LDEyLjk5IDExLjY5MiwxMy4wMzMgMTEuNzI2LDEzLjA2NiBMMTUuMjYyLDE2LjYwMSBDMTUuNjUyLDE2Ljk5MiAxNi4yODUsMTYuOTkyIDE2LjY3NiwxNi42MDEgTDE2LjcxNiwxNi41NjIgQzE3LjEwNiwxNi4xNzIgMTcuMTA2LDE1LjUzOCAxNi43MTYsMTUuMTQ3IiBpZD0iRmlsbC0yIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");\n}\n.cp-toolbar-plus::before {\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCBCZXRhIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y3AtdG9vbGJhci1wbHVzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2ggQmV0YS48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iV2hpdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjcC10b29sYmFyLXBsdXMiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0idG9vbGJhci1wbHVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEiIHBvaW50cz0iNi42MjUgNC4yMjUxIDcuNjI1IDQuMjI1MSA3LjYyNSA2Ljc5NTEgMTAuMTI1IDYuNzk1MSAxMC4xMjUgNy44MjUxIDcuNjI1IDcuODI1MSA3LjYyNSAxMC4zOTQxIDYuNjI1IDEwLjM5NDEgNi42MjUgNy44MjUxIDQuMTI1IDcuODI1MSA0LjEyNSA2Ljc5NTEgNi42MjUgNi43OTUxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy4xMjUsMTMuMzcyIEMzLjg4NiwxMy4zNzIgMS4yNSwxMC42NTMgMS4yNSw3LjMxMSBDMS4yNSwzLjk2OSAzLjg4NiwxLjI1IDcuMTI1LDEuMjUgQzEwLjM2NCwxLjI1IDEzLDMuOTY5IDEzLDcuMzExIEMxMywxMC42NTMgMTAuMzY0LDEzLjM3MiA3LjEyNSwxMy4zNzIgTTE2LjcxNiwxNS4xNDcgTDEzLjE4LDExLjYxMiBDMTMuMTE5LDExLjU1MiAxMy4wNDUsMTEuNTE4IDEyLjk3NCwxMS40NzYgQzEzLjc3NiwxMC4yOTMgMTQuMjUsOC44NTggMTQuMjUsNy4zMTEgQzE0LjI1LDMuMjggMTEuMDU0LDAgNy4xMjUsMCBDMy4xOTYsMCAwLDMuMjggMCw3LjMxMSBDMCwxMS4zNDMgMy4xOTYsMTQuNjIyIDcuMTI1LDE0LjYyMiBDOC44NDIsMTQuNjIyIDEwLjQxOSwxMy45OTUgMTEuNjUsMTIuOTUzIEMxMS42NzksMTIuOTkgMTEuNjkyLDEzLjAzMyAxMS43MjYsMTMuMDY2IEwxNS4yNjIsMTYuNjAxIEMxNS42NTIsMTYuOTkyIDE2LjI4NSwxNi45OTIgMTYuNjc2LDE2LjYwMSBMMTYuNzE2LDE2LjU2MiBDMTcuMTA2LDE2LjE3MiAxNy4xMDYsMTUuNTM4IDE2LjcxNiwxNS4xNDciIGlkPSJGaWxsLTIiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");\n}\n.cp-toolbar-presentation::before {\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCBCZXRhIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y3AtdG9vbGJhci1wcmVzZW50YXRpb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaCBCZXRhLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXaGl0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImNwLXRvb2xiYXItcHJlc2VudGF0aW9uIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuOTI2ODAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LDExLjE2OTIgQzE0LDExLjM4ODIgMTMuODA5LDExLjU3MzIgMTMuNTYxLDExLjU3MzIgTDEuNDQsMTEuNTczMiBDMS4xOTMsMTEuNTczMiAxLDExLjM4ODIgMSwxMS4xNjkyIEwxLDIuOTc4MiBDMSwyLjc1ODIgMS4xOTIsMi41NzMyIDEuNDQsMi41NzMyIEwxMy41NjEsMi41NzMyIEMxMy44MDcsMi41NzMyIDE0LDIuNzU4MiAxNCwyLjk3ODIgTDE0LDExLjE2OTIgWiBNOCwxLjU3MzIgTDgsMC41NzMyIEw3LDAuNTczMiBMNywxLjU3MzIgTDEuNDQsMS41NzMyIEMwLjY0OCwxLjU3MzIgMCwyLjE5ODIgMCwyLjk3ODIgTDAsMTEuMTY5MiBDMCwxMS45NDkyIDAuNjUsMTIuNTczMiAxLjQ0LDEyLjU3MzIgTDcsMTIuNTczMiBMNywxMy41NzMyIEw2LDEzLjU3MzIgTDMsMTYuNTAwMiBMNC40MjcsMTYuNTAwMiBMNi41LDE0LjU3MzIgTDcsMTQuNTczMiBMNywxNS4wNzMyIEw4LDE1LjA3MzIgTDgsMTQuNTczMiBMOC41LDE0LjU3MzIgTDEwLjUsMTYuNTAwMiBMMTEuOTI3LDE2LjUwMDIgTDksMTMuNTczMiBMOCwxMy41NzMyIEw4LDEyLjU3MzIgTDEzLjU2MSwxMi41NzMyIEMxNC4zNTIsMTIuNTczMiAxNSwxMS45NDgyIDE1LDExLjE2OTIgTDE1LDIuOTc4MiBDMTUsMi4xOTcyIDE0LjM1LDEuNTczMiAxMy41NjEsMS41NzMyIEw4LDEuNTczMiBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC00IiBwb2ludHM9IjYgNS41IDEwIDggNiAxMC41Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");\n}\n.cp-toolbar-presentation-exit::before {\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCBCZXRhIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y3AtdG9vbGJhci1wcmVzZW50YXRpb24tZXhpdDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoIEJldGEuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IldoaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY3AtdG9vbGJhci1wcmVzZW50YXRpb24tZXhpdCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYWdlLTEiIHBvaW50cz0iMTQuNSAzLjUgOS41MDEgOC40OTkgNC41IDMuNSAzLjUgNC41IDguNTAxIDkuNDk5IDMuNSAxNC41IDQuNSAxNS41IDkuNTAxIDEwLjQ5OSAxNC41IDE1LjUgMTUuNSAxNC41IDEwLjUgOS40OTkgMTUuNSA0LjUiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");\n}\n.cp-toolbar button,\n.cp-toolbar a {\n  height: 40px !important;\n  width: 40px !important;\n  background-color: transparent;\n  cursor: pointer;\n}\n.cp-toolbar button.inactive,\n.cp-toolbar a.inactive {\n  pointer-events: none;\n  cursor: default;\n  opacity: 0.5;\n}\n.cp-waiting-message-spinner {\n  position: relative;\n}\n.cp-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin: 0;\n}\n.cp-spinner .cp-spinner-blades {\n  position: absolute;\n  top: -2px;\n  opacity: 0.25;\n}\n.cp-spinner .cp-spinner-blades div {\n  position: absolute;\n  width: 12px;\n  height: 4px;\n  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n  border-radius: 2px;\n  background: #ffffff;\n  -webkit-transform-origin: left center 0px;\n          transform-origin: left center 0px;\n}\n.cp-spinner .cp-spinner-blade-1 {\n  -webkit-animation: cp-spinner-anim-1-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-1-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-1 div {\n  -webkit-transform: rotate(0deg) translate(10px, 0px);\n          transform: rotate(0deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-2 {\n  -webkit-animation: cp-spinner-anim-2-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-2-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-2 div {\n  -webkit-transform: rotate(30deg) translate(10px, 0px);\n          transform: rotate(30deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-3 {\n  -webkit-animation: cp-spinner-anim-3-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-3-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-3 div {\n  -webkit-transform: rotate(60deg) translate(10px, 0px);\n          transform: rotate(60deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-4 {\n  -webkit-animation: cp-spinner-anim-4-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-4-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-4 div {\n  -webkit-transform: rotate(90deg) translate(10px, 0px);\n          transform: rotate(90deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-5 {\n  -webkit-animation: cp-spinner-anim-5-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-5-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-5 div {\n  -webkit-transform: rotate(120deg) translate(10px, 0px);\n          transform: rotate(120deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-6 {\n  -webkit-animation: cp-spinner-anim-6-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-6-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-6 div {\n  -webkit-transform: rotate(150deg) translate(10px, 0px);\n          transform: rotate(150deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-7 {\n  -webkit-animation: cp-spinner-anim-7-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-7-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-7 div {\n  -webkit-transform: rotate(180deg) translate(10px, 0px);\n          transform: rotate(180deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-8 {\n  -webkit-animation: cp-spinner-anim-8-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-8-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-8 div {\n  -webkit-transform: rotate(210deg) translate(10px, 0px);\n          transform: rotate(210deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-9 {\n  -webkit-animation: cp-spinner-anim-9-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-9-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-9 div {\n  -webkit-transform: rotate(240deg) translate(10px, 0px);\n          transform: rotate(240deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-10 {\n  -webkit-animation: cp-spinner-anim-10-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-10-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-10 div {\n  -webkit-transform: rotate(270deg) translate(10px, 0px);\n          transform: rotate(270deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-11 {\n  -webkit-animation: cp-spinner-anim-11-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-11-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-11 div {\n  -webkit-transform: rotate(300deg) translate(10px, 0px);\n          transform: rotate(300deg) translate(10px, 0px);\n}\n.cp-spinner .cp-spinner-blade-12 {\n  -webkit-animation: cp-spinner-anim-12-12 0.666667s linear infinite;\n          animation: cp-spinner-anim-12-12 0.666667s linear infinite;\n}\n.cp-spinner .cp-spinner-blade-12 div {\n  -webkit-transform: rotate(330deg) translate(10px, 0px);\n          transform: rotate(330deg) translate(10px, 0px);\n}\n@-webkit-keyframes cp-spinner-anim-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n  0.01% {\n    opacity: 0.25;\n  }\n  0.02% {\n    opacity: 1;\n  }\n  60.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@keyframes cp-spinner-anim-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n  0.01% {\n    opacity: 0.25;\n  }\n  0.02% {\n    opacity: 1;\n  }\n  60.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n  8.34333% {\n    opacity: 0.25;\n  }\n  8.35333% {\n    opacity: 1;\n  }\n  68.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@keyframes cp-spinner-anim-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n  8.34333% {\n    opacity: 0.25;\n  }\n  8.35333% {\n    opacity: 1;\n  }\n  68.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n  16.6767% {\n    opacity: 0.25;\n  }\n  16.6867% {\n    opacity: 1;\n  }\n  76.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@keyframes cp-spinner-anim-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n  16.6767% {\n    opacity: 0.25;\n  }\n  16.6867% {\n    opacity: 1;\n  }\n  76.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n  25.01% {\n    opacity: 0.25;\n  }\n  25.02% {\n    opacity: 1;\n  }\n  85.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@keyframes cp-spinner-anim-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n  25.01% {\n    opacity: 0.25;\n  }\n  25.02% {\n    opacity: 1;\n  }\n  85.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-5-12 {\n  0% {\n    opacity: 0.25;\n  }\n  33.3433% {\n    opacity: 0.25;\n  }\n  33.3533% {\n    opacity: 1;\n  }\n  93.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@keyframes cp-spinner-anim-5-12 {\n  0% {\n    opacity: 0.25;\n  }\n  33.3433% {\n    opacity: 0.25;\n  }\n  33.3533% {\n    opacity: 1;\n  }\n  93.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-6-12 {\n  0% {\n    opacity: 0.270958;\n  }\n  41.6767% {\n    opacity: 0.25;\n  }\n  41.6867% {\n    opacity: 1;\n  }\n  1.67667% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.270958;\n  }\n}\n@keyframes cp-spinner-anim-6-12 {\n  0% {\n    opacity: 0.270958;\n  }\n  41.6767% {\n    opacity: 0.25;\n  }\n  41.6867% {\n    opacity: 1;\n  }\n  1.67667% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.270958;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-7-12 {\n  0% {\n    opacity: 0.375125;\n  }\n  50.01% {\n    opacity: 0.25;\n  }\n  50.02% {\n    opacity: 1;\n  }\n  10.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.375125;\n  }\n}\n@keyframes cp-spinner-anim-7-12 {\n  0% {\n    opacity: 0.375125;\n  }\n  50.01% {\n    opacity: 0.25;\n  }\n  50.02% {\n    opacity: 1;\n  }\n  10.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.375125;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-8-12 {\n  0% {\n    opacity: 0.479292;\n  }\n  58.3433% {\n    opacity: 0.25;\n  }\n  58.3533% {\n    opacity: 1;\n  }\n  18.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.479292;\n  }\n}\n@keyframes cp-spinner-anim-8-12 {\n  0% {\n    opacity: 0.479292;\n  }\n  58.3433% {\n    opacity: 0.25;\n  }\n  58.3533% {\n    opacity: 1;\n  }\n  18.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.479292;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-9-12 {\n  0% {\n    opacity: 0.583458;\n  }\n  66.6767% {\n    opacity: 0.25;\n  }\n  66.6867% {\n    opacity: 1;\n  }\n  26.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.583458;\n  }\n}\n@keyframes cp-spinner-anim-9-12 {\n  0% {\n    opacity: 0.583458;\n  }\n  66.6767% {\n    opacity: 0.25;\n  }\n  66.6867% {\n    opacity: 1;\n  }\n  26.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.583458;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-10-12 {\n  0% {\n    opacity: 0.687625;\n  }\n  75.01% {\n    opacity: 0.25;\n  }\n  75.02% {\n    opacity: 1;\n  }\n  35.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.687625;\n  }\n}\n@keyframes cp-spinner-anim-10-12 {\n  0% {\n    opacity: 0.687625;\n  }\n  75.01% {\n    opacity: 0.25;\n  }\n  75.02% {\n    opacity: 1;\n  }\n  35.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.687625;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-11-12 {\n  0% {\n    opacity: 0.791792;\n  }\n  83.3433% {\n    opacity: 0.25;\n  }\n  83.3533% {\n    opacity: 1;\n  }\n  43.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.791792;\n  }\n}\n@keyframes cp-spinner-anim-11-12 {\n  0% {\n    opacity: 0.791792;\n  }\n  83.3433% {\n    opacity: 0.25;\n  }\n  83.3533% {\n    opacity: 1;\n  }\n  43.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.791792;\n  }\n}\n@-webkit-keyframes cp-spinner-anim-12-12 {\n  0% {\n    opacity: 0.895958;\n  }\n  91.6767% {\n    opacity: 0.25;\n  }\n  91.6867% {\n    opacity: 1;\n  }\n  51.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.895958;\n  }\n}\n@keyframes cp-spinner-anim-12-12 {\n  0% {\n    opacity: 0.895958;\n  }\n  91.6767% {\n    opacity: 0.25;\n  }\n  91.6867% {\n    opacity: 1;\n  }\n  51.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.895958;\n  }\n}\n',
                ''
            ]);    // exports
                   /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(13),
                __webpack_require__(4),
                __webpack_require__(7)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (View, assert, ConstantsDictionary) {
                'use strict';
                return View.extend({
                    className: 'panel-view',
                    /**
	       * @constructor
	       * @param {object} options
	       */
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._panelViewsByName = new ConstantsDictionary();
                        this._currentPanel = null;
                        this._currentPanelName = null;
                        this._lastAddedPanelName = null;
                        this._mediaViewer = options.mediaViewer;
                    },
                    /**
	       * Checks if a panel with the given name exists.
	       * @param {string} name
	       * @return {bool}
	       */
                    hasPanelView: function (name) {
                        return this._panelViewsByName.isDefined(name);
                    },
                    /**
	       * Adds a View as a panel with a certain, unique name.
	       * @param {string} name
	       * @param {Backbone.View} PanelView
	       * @throws Error if name is already used.
	       */
                    addPanelView: function (name, PanelView) {
                        this._panelViewsByName.define(name, PanelView);
                        this._lastAddedPanelName = name;
                    },
                    /**
	       * Checks wether any panel is currently initialized.
	       * @return {bool}
	       */
                    isAnyPanelInitialized: function () {
                        return this.$el.is('.expanded');
                    },
                    /**
	       * Checks wether a panel with the given name is currently initialized.
	       * @param {string} name
	       * @return {bool}
	       */
                    isPanelInitialized: function (name) {
                        return this._currentPanelName === name;
                    },
                    /**
	       * Initializes the panel with the given name. Then re-renders itself.
	       * @param name {String} name of the panel to be initialized. If empty, then use the last added (using addPanelView) panel.
	       * @fires initializePanel(panelName)
	       * @fires togglePanel(panelName, isInitialized)
	       * @throws Error if a panel is already initialized or the panel doesn't exist
	       */
                    initializePanel: function (name) {
                        name = name || this._lastAddedPanelName;
                        assert(this.isAnyPanelInitialized() === false, 'no panel is initialized');
                        assert(this.hasPanelView(name) === true, 'panel exists');
                        var PanelView = this._panelViewsByName.lookup(name);
                        this._currentPanelName = name;
                        this._currentPanel = new PanelView({
                            collection: this.collection,
                            mediaViewer: this._mediaViewer,
                            panelView: this
                        });
                        this.$el.toggleClass('expanded', true);
                        this.trigger('initializePanel', this._currentPanelName);
                        this.trigger('togglePanel', this._currentPanelName, true);
                        this.render();
                    },
                    /**
	       * Tears the initialized panel down and removes it. Then re-renders itself.
	       * Won't throw if there's no initialized panel.
	       * @fires togglePanel(panelName, isInitialized)
	       * @fires teardownPanel(panelName)
	       */
                    teardownPanel: function () {
                        if (this._currentPanel) {
                            if (this._currentPanel.teardown) {
                                this._currentPanel.teardown();
                            }
                            this._currentPanel.remove();
                        }
                        this.$el.toggleClass('expanded', false);
                        this.trigger('togglePanel', this._currentPanelName, false);
                        this.trigger('teardownPanel', this._currentPanelName);
                        this._currentPanelName = null;
                        this._currentPanel = null;
                        this.render();
                    },
                    /**
	       * Utility method. Recreates the current PanelView (if there is one).
	       */
                    reinitializePanel: function () {
                        if (!this.isAnyPanelInitialized()) {
                            return;
                        }
                        var previousPanel = this.getInitializedPanelName();
                        this.teardownPanel();
                        this.initializePanel(previousPanel);
                    },
                    /**
	       * Returns the name of the instanciated PanelView.
	       * @return {string} panelName
	       * @throws {Error} if no panel is initialized
	       */
                    getInitializedPanelName: function () {
                        assert(this.isAnyPanelInitialized(), 'a panel is initialized');
                        return this._currentPanelName;
                    },
                    /**
	       * Returns the instanciated PanelView.
	       * @return {PanelView}
	       * @throws {Error} if no panel is initialized
	       */
                    getInitializedPanel: function () {
                        return this._currentPanel;
                    },
                    /**
	       * Renders the initialized panel.
	       * Won't throw if no panel is initialized.
	       * @fires renderPanel(panelName)
	       */
                    render: function () {
                        this.$el.empty();
                        if (this.isAnyPanelInitialized()) {
                            this._currentPanel.render();
                            this._currentPanel.$el.appendTo(this.$el);
                        }
                        this.trigger('renderPanel', this._currentPanelName);
                        return this;
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(69);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(61),
                __webpack_require__(13),
                __webpack_require__(73)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (featureDetection, View, tpl) {
                'use strict';
                return View.extend({
                    className: 'cp-error-layer',
                    initialize: function () {
                        View.prototype.initialize.apply(this, arguments);
                        this.$el.hide();
                    },
                    showErrorMessage: function (err, file) {
                        this.$el.show().html(tpl.default(View.translate, featureDetection).displayError({
                            title: err.title || View.translate('cp.error.default.header'),
                            message: err.description || err.toString(),
                            icon: err.icon,
                            srcBrowser: err.browser ? file.get('src') : '',
                            srcDownload: err.download ? file.get('srcDownload') || file.get('src') : ''
                        }));
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var displayErrorTpl = handlebars_1.compile('\n<div class="cp-error-message">\n  <span class="file-icon size-96 {{icon}}"></span>\n  <p class="title">{{title}}</p>\n  <p class="message">{{message}}</p>\n  {{#if srcBrowser}}\n    <a class="cp-button" href="{{srcBrowser}}" target="_blank">\n      <span class="cp-button-icon icon-download"></span>\n      {{labelBrowser}}\n    </a>\n  {{/if}}\n  {{#if srcDownload}}\n  <a \n    class="cp-button"\n    href="{{srcDownload}}"\n    {{#unless downloadAttributeSupported}}\n    target="_blank"\n    {{/unless}}\n    {{#if downloadAttributeSupported}}\n    download\n    {{/if}}\n  >\n    <span class="cp-button-icon icon-download"></span>\n   {{labelDownload}}\n  </a>\n  {{/if}}\n</div><span class="cp-baseline-extension"></span>\n<!-- FIL-2388 - "cp-baseline-extension" inline elements must not have whitespace around it -->\n');
                var passwordLayerTpl = handlebars_1.compile('\n  <div class="cp-preview-password">\n      <span class="cp-password-lock-icon"></span>\n      <div class="cp-password-base">\n          <p class="title">{{promptMessage}}</p>\n          <input tabindex="5" type="password" name="password" class="cp-password-input" placeholder="{{labelPlaceholder}}" autocomplete="off">\n          <button tabindex="10" class="cp-button cp-password-button">{{labelButton}}</button>\n      </div>\n      <div class="cp-password-fullscreen">\n          <p class="title">{{labelTitle}}</p>\n          <p class="message">{{labelMessage}}</p>\n      </div>\n  </div><span class="cp-baseline-extension"></span>\n<!-- FIL-2388 - "cp-baseline-extension" inline elements must not have whitespace around it -->\n');
                var waitingMessageTpl = handlebars_1.compile('\n<div class="cp-waiting-message">\n    <span class="file-icon size-96 cp-waiting-message-spinner">\n      <div class="cp-spinner" role="progressbar">\n        <div class="cp-spinner-blades cp-spinner-blade-1"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-2"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-3"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-4"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-5"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-6"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-7"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-8"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-9"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-10"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-11"><div></div></div>\n        <div class="cp-spinner-blades cp-spinner-blade-12"><div></div></div>\n      </div>\n    </span>\n    <p class="title">{{header}}</p>\n    <p class="message">{{message}}</p>\n    <a\n      class="cp-button"\n      href="{{src}}"\n      {{#unless downloadAttributeSupported}}\n      target="_blank"\n      {{/unless}}\n      {{#if downloadAttributeSupported}}\n      download\n      {{/if}}\n    >\n      <span class="cp-button-icon icon-download"></span>\n      {{label}}\n    </a>\n</div><span class="cp-baseline-extension"></span>\n<!-- FIL-2388 - "cp-baseline-extension" inline elements must not have whitespace around it -->\n');
                var toolbarTpl = handlebars_1.compile('\n  <div class="cp-toolbar">\n  {{#each actions}}\n    <button tabindex="1{{@index}}" class="{{className}} cp-icon" aria-label="{{title}}">\n      <span class="tooltip tooltip-s">{{title}}</span>\n    </button>\n  {{/each}}\n  </div>\n');
                var spinnerTpl = handlebars_1.compile('<div class="cp-spinner" role="progressbar">\n  <div class="cp-spinner-blades cp-spinner-blade-1"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-2"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-3"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-4"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-5"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-6"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-7"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-8"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-9"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-10"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-11"><div></div></div>\n  <div class="cp-spinner-blades cp-spinner-blade-12"><div></div></div>\n</div>');
                function template(translate, features) {
                    return {
                        /**
	             * Error when displaying an pdf.
	             * @param title the title of the error
	             * @param message the error message
	             * @param icon the css class for the icon
	             * @param srcBrowser file.src
	             * @param srcDownload file.srcDownload || file.src
	             */
                        displayError: function (_a) {
                            var _b = _a.icon, icon = _b === void 0 ? 'cp-unknown-file-type-icon' : _b, _c = _a.title, title = _c === void 0 ? '' : _c, _d = _a.message, message = _d === void 0 ? '' : _d, _e = _a.srcBrowser, srcBrowser = _e === void 0 ? '' : _e, _f = _a.srcDownload, srcDownload = _f === void 0 ? '' : _f;
                            return displayErrorTpl({
                                icon: icon,
                                title: title,
                                message: message,
                                labelBrowser: translate('cp.error.button.browser'),
                                labelDownload: translate('cp.error.button.download'),
                                srcBrowser: srcBrowser,
                                srcDownload: srcDownload,
                                downloadAttributeSupported: features && features.adownload
                            });
                        },
                        /**
	             * Password input for protected files.
	             * @param promptMessage the prompt message of the input dialog
	             */
                        passwordLayer: function (_a) {
                            var _b = _a.promptMessage, promptMessage = _b === void 0 ? '' : _b;
                            return passwordLayerTpl({
                                promptMessage: promptMessage,
                                labelPlaceholder: translate('cp.password.input.placeholder'),
                                labelButton: translate('cp.password.button.ok'),
                                labelTitle: translate('cp.password.fullscreen.title'),
                                labelMessage: translate('cp.password.fullscreen.message')
                            });
                        },
                        /**
	             * Waiting message for previewer, used when preview will take a long time to load.
	             * @param header header message
	             * @param message message text
	             * @param src download URL src
	             */
                        waitingMessage: function (_a) {
                            var _b = _a.header, header = _b === void 0 ? '' : _b, _c = _a.message, message = _c === void 0 ? '' : _c, _d = _a.src, src = _d === void 0 ? '' : _d;
                            return waitingMessageTpl({
                                header: header,
                                message: message,
                                src: src,
                                label: translate('cp.download.original'),
                                downloadAttributeSupported: features && features.adownload
                            });
                        },
                        /**
	             * The toolbar layer.
	             * @param actions toolbar actions
	             */
                        toolbar: function (_a) {
                            var _b = _a.actions, actions = _b === void 0 ? [] : _b;
                            return toolbarTpl({ actions: actions });
                        },
                        /**
	             * Loading spinner for the main file preview body.
	             */
                        spinner: spinnerTpl({})
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(69);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(61),
                __webpack_require__(13),
                __webpack_require__(73)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (featureDetection, View, tpl) {
                'use strict';
                return View.extend({
                    className: 'cp-waiting-layer',
                    initialize: function () {
                        View.prototype.initialize.apply(this, arguments);
                        this.$el.hide();
                    },
                    showMessage: function (file, header, message) {
                        this.$el.show().html(tpl.default(View.translate, featureDetection).waitingMessage({
                            src: file.get('srcDownload') || file.get('src'),
                            header: header,
                            message: message
                        }));
                    },
                    clearMessage: function () {
                        this.$el.hide();
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(69);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(13),
                __webpack_require__(5),
                __webpack_require__(76),
                __webpack_require__(73)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (View, $, keyboard, tpl) {
                'use strict';
                var pdfjsPasswordResponses = {
                    NEED_PASSWORD: 1,
                    INCORRECT_PASSWORD: 2
                };
                var fullscreenEvents = [
                    'fullscreenchange',
                    'webkitfullscreenchange',
                    'mozfullscreenchange',
                    'MSFullscreenChange'
                ].join(' ');
                var isFullscreen = function () {
                    return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
                };
                return View.extend({
                    className: 'cp-password-layer',
                    events: {
                        'keydown .cp-password-input': '_handleKeyDown',
                        'click .cp-password-button': '_handleClick',
                        'focus .cp-password-input': '_lockNavigation',
                        'blur .cp-password-input': '_unlockNavigation'
                    },
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._mediaViewer = options.mediaViewer;
                        this.$el.hide();
                    },
                    /**
	     * Show the password input layer
	     * @param  {Number}   reason     Reason PDFJS why needs the password
	     * @param  {Callback} updatePassword
	     */
                    showPasswordInput: function (reason, updatePassword) {
                        this.listen($(document), fullscreenEvents, this.updatePasswordLayer.bind(this));
                        this.updatePassword = updatePassword;
                        this._mediaViewer._view.fileContentView.getLayerForName('spinner').stopSpin();
                        this.$el.show().html(tpl.default(View.translate).passwordLayer({ promptMessage: this._getPromptTitle(reason) }));
                        this.updatePasswordLayer();
                        this._showToolbar();
                    },
                    hidePasswordInput: function () {
                        this.stopListen();
                        this.$el.empty();
                        this.$el.hide();
                    },
                    /**
	     * Update the passwordLayer depending on fullsccren/no fullscreen
	     * Safari/Firefox can't handle keyboard inputs in fullscreen
	     */
                    updatePasswordLayer: function () {
                        if (isFullscreen()) {
                            this.$el.find('.cp-password-base').hide();
                            this.$el.find('.cp-password-fullscreen').show();
                        } else {
                            this.$el.find('.cp-password-fullscreen').hide();
                            this.$el.find('.cp-password-base').show();
                        }
                    },
                    /**
	     * Get i18n string for password prompt based on reason
	     * @param  {Number} reason Reason PDFJS why needs the password
	     * @return {String}
	     */
                    _getPromptTitle: function (reason) {
                        var title = View.translate('cp.password.needed');
                        if (reason === pdfjsPasswordResponses.INCORRECT_PASSWORD) {
                            title = View.translate('cp.password.incorrect');
                        }
                        return title;
                    },
                    /**
	     * Show passwordLayer and toolbar
	     */
                    _showToolbar: function () {
                        var view = this._mediaViewer._view;
                        var toolbar = view.fileContentView.getLayerForName('toolbar');
                        var mode = view._modes[view._mode];
                        toolbar.setActions(mode.toolbarActions);
                        toolbar.render();
                    },
                    /**
	     * Check if password was given and call `updatePassword()`
	     */
                    _updatePassword: function () {
                        var password = this.$el.find('.cp-password-input').val();
                        if (password && password.length > 0) {
                            this.hidePasswordInput();
                            this.updatePassword(password);
                        }
                    },
                    /**
	     * Lock navigation keys
	     */
                    _lockNavigation: function () {
                        this._mediaViewer._view._navigationKeyLockCount++;
                    },
                    /**
	     * Unlock navigation keys
	     */
                    _unlockNavigation: function () {
                        this._mediaViewer._view._navigationKeyLockCount--;
                    },
                    _handleClick: function (ev) {
                        ev.preventDefault();
                        this._updatePassword();
                    },
                    _handleKeyDown: function (ev) {
                        if (ev.which === keyboard.keys.RETURN) {
                            ev.preventDefault();
                            return this._updatePassword();
                        }
                        if (ev.which === keyboard.keys.ESCAPE) {
                            ev.preventDefault();
                            return this._mediaViewer.close();
                        }
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                var keys = {
                    F: 70,
                    G: 71,
                    P: 80,
                    RETURN: 13,
                    ESCAPE: 27,
                    ARROW_LEFT: 37,
                    ARROW_UP: 38,
                    ARROW_RIGHT: 39,
                    ARROW_DOWN: 40,
                    PLUS: 187,
                    MINUS: 189,
                    PLUS_NUMPAD: 107,
                    MINUS_NUMPAD: 109,
                    PLUS_FF: 61,
                    MINUS_FF: 173,
                    SPACE: 32,
                    ENTER: 13,
                    TAB: 9
                };
                var createConditionalKeyHandler = function (fn) {
                    return function (event) {
                        var targetTagName = event.target.tagName && event.target.tagName.toUpperCase();
                        // To not interfere with input elements we only invoke the
                        // event handling method if the event target is not INPUT or TEXTAREA
                        if (targetTagName !== 'INPUT' && targetTagName !== 'TEXTAREA') {
                            return fn.call(this, event);
                        }
                        // Pressing ESCAPE while in input fields blurs input fields
                        if (event.which === keys.ESCAPE) {
                            event.target.blur();
                        }
                    };
                };
                return {
                    keys: keys,
                    createConditionalKeyHandler: createConditionalKeyHandler
                };
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(69);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(13),
                __webpack_require__(78)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (View, tpl) {
                'use strict';
                /**
	   * Controls to switch between multiple files in a collection.
	   * @constructor
	   */
                return View.extend({
                    className: 'cp-arrow-layer',
                    events: {
                        'click .cp-nav-left:not(.disabled)': 'gotoPrevious',
                        'click .cp-nav-right:not(.disabled)': 'gotoNext'
                    },
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._mediaViewer = options.mediaViewer;
                        this.listenTo(this._mediaViewer._fileState.collection, 'add reset', this.checkAndHideNavigation);
                        this._visibleArrows = false;
                        this._updateElements();
                    },
                    render: function () {
                        this.$el.html(tpl.default(View.translate).fileBodyArrows).hide();
                        this._updateElements();
                        this.checkAndHideNavigation();
                        return this;
                    },
                    /**
	     * Show next file in collection.
	     */
                    gotoNext: function () {
                        this._mediaViewer.showFileNext().always(this._mediaViewer.analytics.fn('next', {
                            actionType: 'button',
                            mode: this._mediaViewer.getMode()
                        }));
                    },
                    /**
	     * Show previous file in collection.
	     */
                    gotoPrevious: function () {
                        this._mediaViewer.showFilePrev().always(this._mediaViewer.analytics.fn('prev', {
                            actionType: 'button',
                            mode: this._mediaViewer.getMode()
                        }));
                    },
                    /**
	     * Enable disabled navigation arrow again and remove tooltip
	     */
                    enableArrow: function ($arrow) {
                        $arrow.removeClass('disabled');
                        $arrow.removeAttr('original-title');
                    },
                    /**
	     * Disable navigation arrow and add tooltip
	     * @param  {Object} options
	     * @param  {Object} options.arrow
	     * @param  {String} options.tooltipText
	     * @param  {String} options.tooltipGravity
	     */
                    disableArrow: function (options) {
                        options.arrow.addClass('disabled');
                        options.arrow.attr('original-title', options.tooltipText);    // FIXME Thorsten, help!!!
                                                                                      // options.arrow.tooltip({ gravity: options.tooltipGravity });
                    },
                    /**
	     * Returns true if either the left or right navigation arrow is shown
	     * @return {Boolean}
	     */
                    showsArrow: function () {
                        return this._visibleArrows;
                    },
                    /**
	     * Check if controls should appear.
	     * If there's only a single file in the collection, we don't show them.
	     */
                    checkAndHideNavigation: function () {
                        if (this._mediaViewer._fileState.collection.length <= 1) {
                            this._visibleArrows = false;
                            return this.$arrows.hide();
                        }
                        this.$arrows.show();
                        this._visibleArrows = true;
                        if (this._mediaViewer.getConfig().enableListLoop) {
                            return;
                        }
                        if (this._mediaViewer.isShowingLastFile()) {
                            this.disableArrow({
                                arrow: this.$arrowRight,
                                tooltipText: View.translate('cp.arrow.right.disabled'),
                                tooltipGravity: 'e'
                            });
                        } else if (this._mediaViewer.isShowingFirstFile()) {
                            this.disableArrow({
                                arrow: this.$arrowLeft,
                                tooltipText: View.translate('cp.arrow.left.disabled'),
                                tooltipGravity: 'w'
                            });
                        }
                    },
                    _updateElements: function () {
                        this.$arrows = this.$el.find('.cp-nav');
                        this.$arrowLeft = this.$el.find('.cp-nav-left');
                        this.$arrowRight = this.$el.find('.cp-nav-right');
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var tpl = handlebars_1.compile('\n  <button class="cp-nav-left cp-nav" tabindex=20 disabled-title="{{labelLeftDisabled}}">\n    {{labelPrev}}\n  </button>\n  <button class="cp-nav-right cp-nav" tabindex=20 disabled-title="{{labelRightDisabled}}">\n    {{labelNext}}\n  </button>\n');
                function template(translate) {
                    return {
                        /**
	             * The arrows for the main file preview body.
	             */
                        fileBodyArrows: tpl({
                            labelNext: translate('cp.go.to.next'),
                            labelPrev: translate('cp.go.to.prev'),
                            labelLeftDisabled: translate('cp.arrow.left.disabled'),
                            labelRightDisabled: translate('cp.arrow.right.disabled')
                        })
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(69);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(15),
                __webpack_require__(13),
                __webpack_require__(73),
                __webpack_require__(76)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, _, View, tpl, keyboard) {
                'use strict';
                // Amount of time to wait before hiding the controls when the mouse stops moving (in ms).
                var HIDE_CONTROLS_TIMEOUT = 500;
                // Amount of time between checking if the mouse is still moving (in ms).
                // Should be smaller than HIDE_CONTROLS_TIMEOUT to prevent flickering (in ms).
                var THROTTLE_MOUSEMOVE = HIDE_CONTROLS_TIMEOUT - 100;
                // Toolbar animation durations (in ms).
                var HIDE_ANIMATION_DURATION = 400;
                var SHOW_ANIMATION_DURATION = 100;
                /**
	   * Showing a toolbar in the lower part of the viewer.
	   * @constructor
	   */
                return View.extend({
                    className: 'cp-toolbar-layer',
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._mediaViewer = options.mediaViewer;
                        this._viewer = null;
                        this._toggleControlsTimeout = null;
                        this._actions = [];
                        this.listen($('.cp-file-body', this._mediaViewer.getView().$el), 'mousemove.toolbarLayer', this._showControlsOnMove.bind(this));
                        this.listen($(document), 'keydown.tabToNavigate', this._tabToNavigate.bind(this));
                    },
                    render: function () {
                        var actions = this._actions.filter(function (action) {
                            return action.predicate ? action.predicate.call(this) : true;
                        }, this);
                        this.$el.html(tpl.default(View.translate).toolbar({ actions: actions }));
                        this.$toolbar = this.$('.cp-toolbar');
                        var listeners = {};
                        actions.forEach(function (action) {
                            listeners['click .' + action.className] = function (e) {
                                action.handler.call(this, e);
                                e.target.blur();
                            };
                        }, this);
                        this.delegateEvents(listeners);
                        this.$toolbar.css('margin-left', -this.$toolbar.width() / 2);
                        this.listen($('a[href=\'#\']', this.$toolbar), 'click', function (e) {
                            e.preventDefault();
                        });
                        return this;
                    },
                    setActions: function (actions) {
                        this._actions = actions;
                        this.render();
                    },
                    getActions: function () {
                        return this._actions;
                    },
                    setViewer: function (viewer) {
                        this._viewer = viewer;
                        this.render();
                    },
                    _tabToNavigate: function (event) {
                        if (event.which === keyboard.keys.TAB) {
                            this._showControlsOnMove.call(this);
                        }
                    },
                    // Show / hide controls based on mouse movements:
                    // - Show the controls when the mouse is moving over the content view.
                    // - Hide the controls after a short delay when the mouse stops moving.
                    // - Keep the controls open if the mouse is hovering over them.
                    _showControlsOnMove: _.throttle(function () {
                        if (!this.$toolbar) {
                            return;
                        }
                        this.$toolbar.fadeTo(SHOW_ANIMATION_DURATION, 1);
                        clearTimeout(this._toggleControlsTimeout);
                        this._toggleControlsTimeout = this._setHideTimer();
                    }, THROTTLE_MOUSEMOVE),
                    _setHideTimer: function () {
                        return setTimeout(function () {
                            if (this.$toolbar.is(':hover')) {
                                return;
                            }
                            if (this.$toolbar.has(':focus').length) {
                                return;
                            }
                            this.$toolbar.fadeTo(HIDE_ANIMATION_DURATION, 0);
                        }.bind(this), HIDE_CONTROLS_TIMEOUT);
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(69);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(13),
                __webpack_require__(73)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (View, tpl) {
                'use strict';
                // Spinner rendering
                // var SPINNER_SIZE = 'large';
                // var SPINNER_STYLE = {
                //   color: '#fff',
                //   zIndex: 'auto'
                // };
                /**
	   * Loading spinner in the middle of the file content.
	   * @constructor
	   */
                return View.extend({
                    className: 'cp-spinner-layer',
                    initialize: function () {
                        View.prototype.initialize.apply(this, arguments);
                        this._updateElements();
                    },
                    render: function () {
                        this.$el.html(tpl.default(View.translate).spinner);
                        this._updateElements();
                        return this;
                    },
                    /**
	     * Instruct the spinner to start.
	     */
                    startSpin: function () {
                        this.$spinner.show();
                    },
                    /**
	     * Instruct the spinner to stop.
	     */
                    stopSpin: function () {
                        this.$spinner.hide();
                    },
                    _updateElements: function () {
                        this.$spinner = this.$el.find('.cp-spinner');
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var fileViewTpl = handlebars_1.compile('\n    <div class="cp-header cp-header-group"></div>\n    <div class="cp-body"></div>\n    <div class="cp-footer"></div>\n');
                var fileCommentsTpl = handlebars_1.compile('<div class="cp-comments"/>');
                function template(translate) {
                    return {
                        /**
	             * The body for FileView.
	             */
                        fileView: fileViewTpl({}),
                        /**
	             * A container to hold all the user comments in.
	             */
                        fileComments: fileCommentsTpl({})
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
                'use strict';
                function sendResourceTiming(analytics, measurement) {
                    measurement.caseOf({
                        success: function (durations) {
                            analytics.send('file.resourceTiming.success', {
                                durationRedirect: durations.redirect,
                                durationAppCache: durations.appCache,
                                durationDns: durations.dns,
                                durationTcp: durations.tcp,
                                durationRequest: durations.request,
                                durationResponse: durations.response,
                                durationTotal: durations.total
                            });
                        },
                        failure: function (failure) {
                            analytics.send('file.resourceTiming.failure', { reason: failure });
                        }
                    });
                }
                exports.sendResourceTiming = sendResourceTiming;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(76)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, keyboard) {
                'use strict';
                var BaseMode = function (mainView) {
                    this.showsArrowLayer = true;
                    this.mainView = mainView;
                    this._hooks = [];
                    this._views = [];
                    this._mainViews = [];
                    var translate = this.mainView.constructor.translate;
                    this._toolbarActions = [
                        {
                            title: translate('cp.zoom.out'),
                            className: 'cp-toolbar-minus',
                            get predicate() {
                                return function () {
                                    return this._viewer && this._viewer.zoomOut;
                                };
                            },
                            get handler() {
                                return function () {
                                    if (this._viewer && this._viewer.zoomOut) {
                                        this._mediaViewer.analytics.send('file.zoomout', { actionType: 'button' });
                                        this._viewer.zoomOut();
                                        this._mediaViewer.trigger('fv.changeScale');
                                    }
                                };
                            }
                        },
                        {
                            title: translate('cp.zoom.in'),
                            className: 'cp-toolbar-plus',
                            get predicate() {
                                return function () {
                                    return this._viewer && this._viewer.zoomIn;
                                };
                            },
                            get handler() {
                                return function () {
                                    if (this._viewer && this._viewer.zoomIn) {
                                        this._mediaViewer.analytics.send('file.zoomin', { actionType: 'button' });
                                        this._viewer.zoomIn();
                                        this._mediaViewer.trigger('fv.changeScale');
                                    }
                                };
                            }
                        },
                        {
                            title: translate('cp.fit.to.page'),
                            className: 'cp-toolbar-fit',
                            get predicate() {
                                return function () {
                                    return this._viewer && this._viewer.zoomFit;
                                };
                            },
                            get handler() {
                                return function () {
                                    if (this._viewer && this._viewer.zoomFit) {
                                        this._mediaViewer.analytics.send('file.zoomfit', { actionType: 'button' });
                                        this._viewer.zoomFit();
                                        this._mediaViewer.trigger('fv.changeScale');
                                    }
                                };
                            }
                        },
                        {
                            title: translate('cp.enter.presentation.mode'),
                            className: 'cp-toolbar-presentation',
                            get predicate() {
                                return function () {
                                    return this._viewer && this._mediaViewer.getConfig().enablePresentationMode;
                                };
                            },
                            get handler() {
                                return function () {
                                    this._mediaViewer.analytics.send('presentation.enter');
                                    this._mediaViewer.changeMode('PRESENTATION');
                                };
                            }
                        }
                    ];
                };
                BaseMode.prototype = {
                    activateHook: function () {
                        this._hooks.push(this.mainView.listen($('.cp-file-body', this.mainView.$el), 'click', this.mainView._onClickToBackground.bind(this.mainView)));
                        var $arrowLayer = this.mainView.fileContentView.getLayerForName('arrows').$el;
                        $arrowLayer.toggle(this.showsArrowLayer);
                    },
                    deactivateHook: function () {
                        this._hooks = this.mainView.stopListen(this._hooks);
                    },
                    setup: function (viewer) {
                        if (viewer) {
                            this._views.push(viewer.listen(viewer.$el, 'click.contentView', viewer._clickedBackgroundToClose.bind(viewer)));
                        }
                        this._mainViews.push(this.mainView.listen($(document), 'keydown.modeKeys', this._handleKeys.bind(this.mainView)));
                        this.deactivateHook();
                        this.activateHook();
                    },
                    teardown: function (viewer) {
                        if (viewer) {
                            this._views = viewer.stopListen(this._views);
                        }
                        this._mainViews = this.mainView.stopListen(this._mainViews);
                        this._views.concat(this._mainViews).concat(this._hooks).forEach(this.invoke);
                        this._views.splice(0);
                        this._mainViews.splice(0);
                        this._hooks.splice(0);
                    },
                    invoke: function (cb) {
                        cb();
                    },
                    _handleKeys: function (e) {
                        var contentView, viewer;
                        if (this.fileContentView.isLayerInitialized('content')) {
                            contentView = this.fileContentView.getLayerForName('content');
                            viewer = contentView.getAttachedViewer();
                        }
                        if (!viewer || !(e.ctrlKey || e.metaKey)) {
                            return;
                        }
                        if (e.which === keyboard.keys.PLUS || e.which === keyboard.keys.PLUS_NUMPAD || e.which === keyboard.keys.PLUS_FF) {
                            if (viewer.zoomIn) {
                                this._mediaViewer.analytics.send('file.zoomin', { actionType: 'hotkey' });
                                viewer.zoomIn();
                                this._mediaViewer.trigger('fv.changeScale');
                            }
                            e.preventDefault();
                        }
                        if (e.which === keyboard.keys.MINUS || e.which === keyboard.keys.MINUS_NUMPAD || e.which === keyboard.keys.MINUS_FF) {
                            if (viewer.zoomOut) {
                                this._mediaViewer.analytics.send('file.zoomout', { actionType: 'hotkey' });
                                viewer.zoomOut();
                                this._mediaViewer.trigger('fv.changeScale');
                            }
                            e.preventDefault();
                        }
                    },
                    get toolbarActions() {
                        return this._toolbarActions;
                    }
                };
                return BaseMode;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(76)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, keyboard) {
                'use strict';
                var requestFullscreen = function (mainView) {
                    var fullscreenContainer = $('.cp-file-body', mainView.$el)[0];
                    if (fullscreenContainer.requestFullscreen) {
                        fullscreenContainer.requestFullscreen();
                    } else if (fullscreenContainer.mozRequestFullScreen) {
                        fullscreenContainer.mozRequestFullScreen();
                    } else if (fullscreenContainer.webkitRequestFullScreen) {
                        fullscreenContainer.webkitRequestFullScreen();
                    } else if (fullscreenContainer.msRequestFullscreen) {
                        fullscreenContainer.msRequestFullscreen();
                    }
                };
                var cancelFullscreen = function () {
                    if (document.cancelFullscreen) {
                        document.cancelFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                };
                var isFullscreen = function () {
                    return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
                };
                var onFullscreenChange = function (e) {
                    // if user click Esc to exit fullscreen instead of clicking 'exit presentation' button
                    // then change view mode to 'BASE'
                    if (!isFullscreen() && !this.isInMode('BASE')) {
                        this._mediaViewer.analytics.send('presentation.exit', { actionType: 'hotkey' });
                        this._mediaViewer.changeMode('BASE');
                    }
                };
                var PresentationMode = function (mainView) {
                    this.mainView = mainView;
                    this.disableClickBackgroundCloses = true;
                    this.showsArrowLayer = false;
                    this._hooks = [];
                    this._mainViews = [];
                    var translate = this.mainView.constructor.translate;
                    this._toolbarActions = [
                        {
                            title: translate('cp.go.to.prev.page'),
                            className: 'cp-toolbar-prev-page',
                            get predicate() {
                                return function () {
                                    return this._viewer && this._viewer.goToPreviousPage && (this._viewer.hasPreviousPage() || this._viewer.hasNextPage());
                                };
                            },
                            get handler() {
                                return function () {
                                    if (this._viewer && this._viewer.goToPreviousPage) {
                                        this._mediaViewer.analytics.send('presentation.pageprev', { actionType: 'button' });
                                        this._viewer.goToPreviousPage();
                                        this._mediaViewer.getView().updatePaginationButtons();
                                    }
                                };
                            }
                        },
                        {
                            title: translate('cp.exit.presentation.mode'),
                            className: 'cp-toolbar-presentation-exit',
                            get handler() {
                                return function () {
                                    this._mediaViewer.analytics.send('presentation.exit', { actionType: 'button' });
                                    this._mediaViewer.changeMode('BASE');
                                };
                            }
                        },
                        {
                            title: translate('cp.go.to.next.page'),
                            className: 'cp-toolbar-next-page',
                            get predicate() {
                                return function () {
                                    return this._viewer && this._viewer.goToNextPage && (this._viewer.hasPreviousPage() || this._viewer.hasNextPage());
                                };
                            },
                            get handler() {
                                return function () {
                                    if (this._viewer && this._viewer.goToNextPage) {
                                        this._mediaViewer.analytics.send('presentation.pagenext', { actionType: 'button' });
                                        this._viewer.goToNextPage();
                                        this._mediaViewer.getView().updatePaginationButtons();
                                    }
                                };
                            }
                        }
                    ];
                };
                PresentationMode.prototype = {
                    activateHook: function () {
                        this._hooks.push(this.mainView.listen($(document), 'fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', onFullscreenChange.bind(this.mainView)));
                        var $arrowLayer = this.mainView.fileContentView.getLayerForName('arrows').$el;
                        $arrowLayer.toggle(this.showsArrowLayer);
                    },
                    deactivateHook: function () {
                        this._hooks = this.mainView.stopListen(this._hooks);
                    },
                    setup: function (viewer) {
                        this._originalScrollTop = $('body').scrollTop();
                        $('.cp-file-body', this.mainView.$el).addClass('presentation');
                        this._mainViews.push(this.mainView.listen($(document), 'keydown.modeKeys', this._handleKeys.bind(this.mainView)));
                        this.deactivateHook();
                        this.activateHook();
                        if (!isFullscreen()) {
                            requestFullscreen(this.mainView);
                        }
                    },
                    teardown: function (viewer, isModeChanged) {
                        $('.cp-file-body', this.mainView.$el).removeClass('presentation');
                        this._mainViews = this.mainView.stopListen(this._mainViews);
                        this._mainViews.concat(this._hooks).forEach(this.invoke);
                        this._mainViews.splice(0);
                        this._hooks.splice(0);
                        if (isModeChanged && isFullscreen()) {
                            cancelFullscreen();
                        }
                        // this is to fix an issue on Chrome that
                        // when entering and exiting fullscreen mode, the document body got scrolled up
                        $('body').scrollTop(this._originalScrollTop);
                    },
                    invoke: function (cb) {
                        cb();
                    },
                    _handleKeys: function (e) {
                        e.preventDefault();
                        var contentView, viewer;
                        if (this.fileContentView.isLayerInitialized('content')) {
                            contentView = this.fileContentView.getLayerForName('content');
                            viewer = contentView.getAttachedViewer();
                        }
                        if (!viewer) {
                            return;
                        }
                        if (e.ctrlKey || e.metaKey) {
                            return;
                        }
                        switch (e.which) {
                        case keyboard.keys.ARROW_UP:
                            if (viewer.goToPreviousPage && viewer.hasPreviousPage()) {
                                this._mediaViewer.analytics.send('presentation.pageprev', { actionType: 'hotkey' });
                                viewer.goToPreviousPage();
                                this.updatePaginationButtons();
                            }
                            return;
                        case keyboard.keys.ARROW_DOWN:
                            if (viewer.goToNextPage && viewer.hasNextPage()) {
                                this._mediaViewer.analytics.send('presentation.pagenext', { actionType: 'hotkey' });
                                viewer.goToNextPage();
                                this.updatePaginationButtons();
                            }
                            return;
                        }
                    },
                    get toolbarActions() {
                        return this._toolbarActions;
                    }
                };
                return PresentationMode;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports) {
            function ContainedMode(mainView) {
                this._mainView = mainView;
                this.disableClickBackgroundCloses = true;
                var translate = this._mainView.constructor.translate;
                this.toolbarActions = [
                    {
                        title: translate('cp.zoom.out'),
                        className: 'cp-toolbar-minus',
                        get predicate() {
                            return function () {
                                return this._viewer && this._viewer.zoomOut;
                            };
                        },
                        get handler() {
                            return function () {
                                if (this._viewer && this._viewer.zoomOut) {
                                    this._mediaViewer.analytics.send('file.zoomout', { actionType: 'button' });
                                    this._viewer.zoomOut();
                                    this._mediaViewer.trigger('fv.changeScale');
                                }
                            };
                        }
                    },
                    {
                        title: translate('cp.zoom.in'),
                        className: 'cp-toolbar-plus',
                        get predicate() {
                            return function () {
                                return this._viewer && this._viewer.zoomIn;
                            };
                        },
                        get handler() {
                            return function () {
                                if (this._viewer && this._viewer.zoomIn) {
                                    this._mediaViewer.analytics.send('file.zoomin', { actionType: 'button' });
                                    this._viewer.zoomIn();
                                    this._mediaViewer.trigger('fv.changeScale');
                                }
                            };
                        }
                    },
                    {
                        title: translate('cp.fit.to.page'),
                        className: 'cp-toolbar-fit',
                        get predicate() {
                            return function () {
                                return this._viewer && this._viewer.zoomFit;
                            };
                        },
                        get handler() {
                            return function () {
                                if (this._viewer && this._viewer.zoomFit) {
                                    this._mediaViewer.analytics.send('file.zoomfit', { actionType: 'button' });
                                    this._viewer.zoomFit();
                                    this._mediaViewer.trigger('fv.changeScale');
                                }
                            };
                        }
                    }
                ];
            }
            ContainedMode.prototype.setup = function () {
                this._mainView.lockNavigationKeys();
            };
            ContainedMode.prototype.teardown = function () {
                this._mainView.unlockNavigationKeys();
            };
            // eslint-disable-next-line no-undef
            module.exports = ContainedMode;    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(20)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, File) {
                'use strict';
                // helper for $.reject()
                var rejectWithError = function (msg) {
                    return new $.Deferred().reject(new Error(msg)).promise();
                };
                /**
	   * A couple of commands used by the MainView.showFile() method. It's intend is to break
	   * up the long method into smaller, more testable pieces.
	   * @module
	   */
                var Commands = {};
                /**
	   * The handler is passed the original file object and is expected to resolve with an object
	   * of overwrites for the file.
	   * @callback Commands~fetchTokenHandler
	   * @param {File} originalFile
	   * @returns {Promise<Object>}
	   */
                /**
	   * A command that fetches a token to access a file via a handler.
	   * @constructor
	   * @param {File} originalFile
	   * @param {Commands~fetchTokenHandler} handler
	   */
                Commands.FetchToken = function (originalFile, handler) {
                    this._originalFile = originalFile;
                    this._handler = handler;
                };
                /**
	   * Execute this command.
	   * @returns {Promise<File>}
	   */
                Commands.FetchToken.prototype.execute = function () {
                    if (!this._originalFile) {
                        return $.when(null);
                    }
                    var promise = null;
                    try {
                        promise = this._handler(this._originalFile);
                    } catch (err) {
                        promise = new $.Deferred().reject(err).promise();
                    }
                    return promise.pipe(function (overwrites) {
                        this._originalFile.set(overwrites);
                        return this._originalFile;
                    }.bind(this));
                };
                /**
	   * A command that looks-up a viewer for a file.
	   * @constructor
	   * @param {File} originalFile
	   * @param {ViewerRegistry} viewerRegistry
	   */
                Commands.LookupViewer = function (originalFile, viewerRegistry, translate) {
                    this._originalFile = originalFile;
                    this._viewerRegistry = viewerRegistry;
                    this._translate = translate;
                };
                /**
	   * Execute this command.
	   * @param {string} previewSrc
	   * @param {string} previewType
	   * @param {object} overwrites
	   * @returns {Promise<Viewer, string, File>} promises the viewer to use, the previewSrc and the converted file.
	   */
                Commands.LookupViewer.prototype.execute = function (previewSrc, previewType, overwrites) {
                    var convertedFile = new File(this._originalFile.toJSON());
                    convertedFile.set(overwrites);
                    convertedFile.set('type', previewType);
                    convertedFile.set('src', previewSrc);
                    var loadViewer = this._viewerRegistry.get(previewType);
                    if (!loadViewer) {
                        return rejectWithError(this._translate('cp.error.file.no.viewer'));
                    }
                    var dfd = $.Deferred();
                    loadViewer().then(function (Viewer) {
                        dfd.resolve(Viewer, previewSrc, convertedFile);
                    }).fail(function () {
                        dfd.reject(arguments);
                    });
                    return dfd.promise();
                };
                return Commands;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(15),
                __webpack_require__(13),
                __webpack_require__(4),
                __webpack_require__(7)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, View, assert, ConstantsDictionary) {
                'use strict';
                // utility functions for working with layers
                var invoke = function (fn) {
                    return fn();
                };
                var pick = function (property, obj) {
                    return obj[property];
                };
                var pickBoundFn = function (property, obj) {
                    return _.isFunction(obj[property]) && obj[property].bind(obj);
                };
                /**
	   * This view manages a collection of views which can be registered with a
	   * given name. This view manages the lifecycle of its subviews.
	   *
	   * Subviews are always the View objects themselves, not instances of them.
	   *
	   * Subviews have two different states: ADDED and INITIALIZED. Whenever a
	   * view is registered, it starts in state ADDED and stays there until
	   * #initializeLayers() is called. Then it moves to INITIALIZED and stays
	   * there until #teardownLayers() is called.
	   *
	   * When #render() is called on the collection, only INITIALIZED subviews are
	   * rendered. Subviews can provide a teardown method that will be called
	   * once the view is removed.
	   *
	   * Optionally, you can register subviews with a predicate to tell which
	   * filetypes they support. It is invoked whenever the subviews are
	   * initialized.
	   */
                return View.extend({
                    /**
	     * @constructor
	     * @param {object} options
	     */
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._layerViewsByName = new ConstantsDictionary();
                        this._layerViewRegistrations = [];
                        this._layers = null;
                        this._mediaViewer = options.mediaViewer;
                    },
                    /**
	     * Checks if a layer with the given name exists.
	     * @param {string} name
	     * @return {bool}
	     */
                    hasLayerView: function (name) {
                        return this._layerViewsByName.isDefined(name);
                    },
                    /**
	     * Adds a view as a layer with a certain, unique name. Accepts an
	     * options object as third parameter.
	     *
	     * Keys in options:
	     *  - {function} [predicate] invoked at construction
	     *  - {int} [weight=0] sorts layers at construction
	     *
	     * @param {string} name
	     * @param {Backbone.View} LayerView
	     * @param {object} [options]
	     * @throws Error if name is already used.
	     */
                    addLayerView: function (name, LayerView, options) {
                        assert(!this.hasLayerView(name), 'name is unique');
                        options = _.extend({
                            predicate: function () {
                                return true;
                            },
                            weight: 0
                        }, options);
                        this._layerViewsByName.define(name, LayerView);
                        this._layerViewRegistrations.push({
                            LayerView: LayerView,
                            name: name,
                            predicate: options.predicate,
                            weight: options.weight
                        });
                    },
                    /**
	     * Checks wether layers are currently initialized.
	     * @return {bool}
	     */
                    areLayersInitialized: function (names) {
                        if (!names || !names.length) {
                            return this._layers !== null;
                        }
                        if (this._layers === null) {
                            return false;
                        }
                        return this._layers.some(function (layer) {
                            return names.indexOf(layer.name) !== -1;
                        });
                    },
                    /**
	     * Return the number of initialized layers (after applying the predicate)/
	     * @return {Integer}
	     */
                    countInitializedLayers: function () {
                        return (this._layers || []).length;
                    },
                    /**
	     * Initializes all currently registered layers.
	     * @fires initializeLayers
	     * @throws Error if layers are already initialized
	     */
                    initializeLayers: function () {
                        this.initializeLayerSubset(_.map(this._layerViewRegistrations, function (item) {
                            return item.name;
                        }));
                    },
                    /**
	     * Initializes the given registered layers.
	     * @param {Array} names
	     * @fires initializeLayers
	     * @throws Error if layers are already initialized
	     */
                    initializeLayerSubset: function (names) {
                        assert(!this.areLayersInitialized(names), 'layers are uninitialized');
                        this._layers = this._layerViewRegistrations.filter(function (registration) {
                            var isInSubset = names.indexOf(registration.name) !== -1;
                            return isInSubset && registration.predicate(this._mediaViewer);
                        }, this).map(function (registration) {
                            var view = new registration.LayerView({
                                contentLayerView: this,
                                mediaViewer: this._mediaViewer
                            });
                            return {
                                view: view,
                                name: registration.name,
                                weight: registration.weight
                            };
                        }, this).concat(this._layers || []);
                        // sort by weight using the stable _.sortBy function to keep
                        // registration order for same weights
                        this._layers = _.sortBy(this._layers, function (layer) {
                            return layer.weight * -1;
                        });
                        this.trigger('initializeLayers');
                        this.render();
                    },
                    /**
	     * Tears initialized layers down and removes them.
	     * Won't throw if layers are not initialized.
	     * @fires teardownLayers
	     */
                    teardownLayers: function () {
                        if (this.areLayersInitialized()) {
                            this._layers.map(_.partial(pick, 'view')).map(_.partial(pickBoundFn, 'teardown')).filter(_.isFunction).forEach(invoke);
                            this._layers.map(_.partial(pick, 'view')).map(_.partial(pickBoundFn, 'remove')).filter(_.isFunction).forEach(invoke);
                            this._layers = null;
                        }
                        this.trigger('teardownLayers');
                        this.render();
                    },
                    /**
	     * Utitily method. Calls teardownLayers() followed by initializeLayers().
	     */
                    reinitializeLayers: function () {
                        this.teardownLayers();
                        this.initializeLayers();
                    },
                    /**
	     * Checks wether a layer with the given name is currently initialized.
	     * @param {string} name
	     * @return {bool}
	     */
                    isLayerInitialized: function (name) {
                        if (!this.areLayersInitialized()) {
                            return false;
                        }
                        return _.find(this._layers, function (layer) {
                            return layer.name === name;
                        }) ? true : false;
                    },
                    /**
	     * Returns the instanciated LayerView object for the given name.
	     * @param {string} name Name of the registered LayerView.
	     * @return {layerView}
	     * @throws {Error} if layer is not initialized
	     */
                    getLayerForName: function (name) {
                        assert(this.areLayersInitialized(), 'layers are initialized');
                        assert(this.hasLayerView(name), 'layer is defined');
                        var layer = _.find(this._layers, function (layer) {
                            return layer.name === name;
                        });
                        assert(layer, 'layer is initialized');
                        return layer.view;
                    },
                    /**
	     * Renders initialized layers.
	     * Won't throw if layers are not initialized.
	     * @fires renderLayers
	     */
                    render: function () {
                        this.$el.empty();
                        if (this.areLayersInitialized()) {
                            this._layers.map(_.partial(pick, 'view')).map(_.partial(pickBoundFn, 'render')).forEach(invoke);
                            this._layers.map(_.partial(pick, 'view')).map(_.partial(pick, '$el')).forEach(function ($layer) {
                                this.$el.append($layer);
                            }, this);
                        }
                        this.trigger('renderLayers');
                        return this;
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Backbone) {
                'use strict';
                var FileState = Backbone.Model.extend({
                    defaults: {
                        currentFileIndex: -1,
                        isNewFileUploaded: false
                    },
                    setCollection: function (collection) {
                        this.collection = collection;
                    },
                    setNext: function () {
                        var currentFileIndex = this.get('currentFileIndex');
                        if (currentFileIndex < this.collection.length - 1) {
                            this.set({ currentFileIndex: this.get('currentFileIndex') + 1 });
                        } else {
                            this.set({ currentFileIndex: 0 });
                        }
                    },
                    setPrev: function () {
                        var currentFileIndex = this.get('currentFileIndex');
                        if (currentFileIndex > 0) {
                            this.set({ currentFileIndex: this.get('currentFileIndex') - 1 });
                        } else {
                            this.set({ currentFileIndex: this.collection.length - 1 });
                        }
                    },
                    setNoCurrent: function () {
                        this.set({ currentFileIndex: -1 });
                    },
                    setCurrentFileIndex: function (index) {
                        if (index > -1 && index < this.collection.length) {
                            return this.set({ currentFileIndex: index });
                        }
                    },
                    setCurrentWithCID: function (cid) {
                        return this.setCurrentFileIndex(this.collection.getIndexWithCID(cid));
                    },
                    getCurrent: function () {
                        var currentIndex = this.get('currentFileIndex');
                        return (currentIndex >= 0 ? this.collection.at(currentIndex) : null) || null;
                    },
                    selectWhere: function (selector) {
                        if (selector) {
                            var selected = this.collection.findWhere(selector);
                            if (selected) {
                                this.setCurrentWithCID(selected.cid);
                            }
                        } else if (this.collection.length >= 1) {
                            this.setCurrentFileIndex(0);
                        }
                    },
                    replaceCurrent: function (file) {
                        var idx = this.get('currentFileIndex');
                        this.collection.remove(this.collection.at(idx));
                        this.collection.add(file, { at: idx });
                    },
                    setCurrentWithQuery: function (query) {
                        query = query ? query : false;
                        var file = this.collection.findWhere(query);
                        if (file) {
                            this.setCurrentWithCID(file.cid);
                        } else {
                            this.setNoCurrent();
                        }
                    }
                });
                return FileState;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(15),
                __webpack_require__(4)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, assert) {
                'use strict';
                var createMatchFn = function (expected) {
                    return function (current) {
                        return current === expected;
                    };
                };
                /**
	   * ViewerRegistry is responsible for mapping file types to content viewers.
	   *
	   * When MediaViewer is asked to view a file, it uses the file's type and asks
	   * its ViewerRegistry for the proper viewer. In addition, ViewerRegistry is
	   * exposed to the outside world. Therefore viewers and plugins can register
	   * themself without touching FileViwer core.
	   *
	   * A viewer is a backbone view and is registered via a function that wraps this
	   * view into a promise.
	   *
	   * Multiple viewers for the same filetype are weighted and can thus be overriden.
	   * The default weight is 10 with a lower weight meaning higher priority.
	   */
                var ViewerRegistry = function () {
                    this._handlers = [];
                };
                /**
	   * Checks for a valid viewer (is a function).
	   *
	   * @param {*} previewer
	   * @return {boolean}
	   */
                ViewerRegistry.isValidPreviewer = function (previewer) {
                    return _.isFunction(previewer);
                };
                /**
	   * Checks for a valid weight (a number).
	   *
	   * @param {*} weight
	   * @return {boolean}
	   */
                ViewerRegistry.isValidWeight = function (weight) {
                    return typeof weight === 'number' && !isNaN(weight);
                };
                /**
	   * Register a new viewer for a given filetype with an optional weight.
	   *
	   * fileType can either be a string which is then directly matched or a
	   * predicate function that get's handed the current file type and then
	   * can return true / false.
	   *
	   * @param {string|function} fileType
	   * @param {function} previewer
	   * @param {integer} [weight=10]
	   * @thors {Error}
	   */
                ViewerRegistry.prototype.register = function (fileType, previewer, weight) {
                    var matchesFileType = typeof fileType === 'function' ? fileType : createMatchFn(fileType);
                    weight = weight || 10;
                    assert(ViewerRegistry.isValidPreviewer(previewer), 'previewer is valid');
                    assert(ViewerRegistry.isValidWeight(weight), 'weight is valid');
                    this._handlers.push({
                        matchesFileType: matchesFileType,
                        previewer: previewer,
                        weight: weight
                    });
                    this._updateWeighting();
                };
                /**
	   * Get the viewer with the lowest weight for the given fileType.
	   *
	   * Returns undefined if no viewer is found.
	   *
	   * @param {string} fileType
	   * @return {object} previewer
	   */
                ViewerRegistry.prototype.get = function (fileType) {
                    var handler = _.find(this._handlers, function (handler) {
                        return handler.matchesFileType(fileType);
                    });
                    return handler && handler.previewer;
                };
                ViewerRegistry.prototype._updateWeighting = function () {
                    // Sorts handlers by weight - needs to be called after a new handler is inserted.
                    this._handlers = _.sortBy(this._handlers, function (handler) {
                        return handler.weight;
                    });
                };
                return ViewerRegistry;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
                /**
	   * FileViwers configuration options:
	   *
	   * - appendTo {DOMNode} [$('body')] - DOM Element to append to
	   * - files {Array} - An array of file objects
	   * - commentService {Object} - Comments service
	   * - templateBackend {Function} - Provides templates for a given name
	   * - moduleBackend {Function} - Provides modules for a given name
	   * - pdfTransportFactory {Function} - cb(currentFile):Promise<PDFTransport>
	   * - enableListLoop {Boolean} [true] - Allow to navigate from end to start of file list and v.v.
	   * - enablePresentationMode {Boolean} [true] - Allow switching to presentation mode
	   * - preloadImagesAfterCurrent {Number} [2] - Files after current to preload if they are images.
	   * - preloadImagesBeforeCurrent {Number} [0] - Files before current to preload if they are images.
	   * - videoDefaultQualityHd {Boolean} [true] - By default play HD content if available
	   * - customStorage {Object} [null] - Custom storage object with setItem, getItem, removeItem methods
	   * - fetchToken {Function} - cb(currentFile):Promise<Object> this method is passed a file and expected to resolve with potential overwrites (e.g. an updated file src attribute).
	   *
	   * @exports defaultConfig
	   */
                return {
                    enableListLoop: true,
                    enablePresentationMode: true,
                    preloadImagesAfterCurrent: 2,
                    preloadImagesBeforeCurrent: 0,
                    videoDefaultQualityHd: true,
                    customStorage: null,
                    viewers: [
                        'image',
                        'document',
                        'video',
                        '3d'
                    ],
                    embedded: false,
                    contained: false,
                    i18n: Object.create(null),
                    fetchToken: function (originalFile) {
                        return $.when({});
                    }
                };
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
                'use strict';
                /**
	   * Returns an image viewer.
	   * @returns {Promise}
	   */
                var imageViewProvider = function () {
                    var instance = $.Deferred();
                    __webpack_require__.e(1, function (__webpack_require__) {
                        var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(92)];
                        (function (view) {
                            instance.resolve(view);
                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
                    });
                    return instance.promise();
                };
                return imageViewProvider;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        ,
        ,
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(15),
                __webpack_require__(13)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, _, View) {
                'use strict';
                /**
	   * Base class for viewers.
	   * @constructor
	   */
                return View.extend({
                    // Event listeners specific to this view namespaced to prevent collisions with its children.
                    events: {
                        'click.contentView': '_clickedBackgroundToClose',
                        'mousedown.contentView': '_mousedownContentView'
                    },
                    // Merge events with children's event object to bind all event handlers
                    initialize: function (options) {
                        View.prototype.initialize.apply(this, arguments);
                        this._mediaViewer = options.mediaViewer;
                        this._previewSrc = options.previewSrc;
                        this._mousedownBackground = null;
                    },
                    // Listen to clicks to the background and eventually close the mediaViewer.
                    //
                    // A viewer can specify getBackground if their background element isn't their contents
                    _mousedownContentView: function (e) {
                        var $background = this.getBackground ? this.getBackground() : this.$el;
                        this._mousedownBackground = $(e.target).is($background);
                    },
                    _clickedBackgroundToClose: function (e) {
                        // @TODO: Remove after cleaning modes setup, hooks etc.
                        var mode = this._mediaViewer._view._modes[this._mediaViewer._view._mode];
                        if (mode.disableClickBackgroundCloses) {
                            return;
                        }
                        var $background = this.getBackground ? this.getBackground() : this.$el;
                        if (this._mousedownBackground && $(e.target).is($background)) {
                            this._mediaViewer.analytics.send('closed', { actionType: 'element' });
                            this._mediaViewer.close();
                        }
                    },
                    // This function is called whenever the viewport of the viewer changes size,
                    // e.g. when a panel is opened or closed. Overwrite this function if you want
                    // custom behaviour.
                    handleResize: function () {
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
                'use strict';
                //
                // Internal state held by this module.
                //
                var performance = window.performance;
                var measurementsByUrl = {};
                /**
	     * Will attempt to measure loading durations for the resource with the provided url.
	     *
	     * This operation has side-effects and is not referentially transparent: calling it with the same argument
	     * might yield different results.
	     *
	     * **Important details**:
	     *
	     * - Calling this function before a resource has been fully fetched will result in a failed measurement.
	     *   Make sure to call the function after the resource has been loaded for sure (e.g. via the onload handler of <img>).
	     *
	     * - When given the same url, this function will only return a successful measurement once. After that first successful
	     *   measurement, the function will only return failed measurements for the same url. This limitation exists because
	     *   the resource timing api makes it really difficult to prevent the same measurement from being reported twice and
	     *   thus making reports on the data inaccurate.
	     *
	     * This function uses the Resource Timing API https://www.w3.org/TR/resource-timing/.
	     */
                function attemptMeasurement(url) {
                    return attemptMeasurementWithState(url, {
                        performance: performance,
                        measurementsByUrl: measurementsByUrl
                    });
                }
                exports.attemptMeasurement = attemptMeasurement;
                /**
	     * A measurement might have been a success or a failure. Using caseOf you can both outcomes:
	     * If successful, you can retrieve the durations, If failed, you can retrieve the reason,
	     */
                var Measurement = function () {
                    function Measurement(_durations, _reason) {
                        this._durations = _durations;
                        this._reason = _reason;
                        if (!_durations && !_reason) {
                            throw new Error('Can not create an instance of Measurement without both durations and reason');
                        }
                    }
                    Measurement.success = function (durations) {
                        return new Measurement(durations, null);
                    };
                    Measurement.failure = function (reason) {
                        return new Measurement(null, reason);
                    };
                    Measurement.prototype.caseOf = function (pattern) {
                        if (this._durations) {
                            return pattern.success(this._durations);
                        } else {
                            return pattern.failure(this._reason);
                        }
                    };
                    return Measurement;
                }();
                exports.Measurement = Measurement;
                /**
	     * This is an internal method that allows isolated tests.
	     */
                function attemptMeasurementWithState(url, state) {
                    if (!state.performance || !state.performance.getEntriesByName) {
                        return Measurement.failure('NotSupported');
                    }
                    var res = state.performance.getEntriesByName(url, 'resource');
                    if (res.length < 1) {
                        return Measurement.failure('NoData');
                    }
                    // We'll prevent returning measurements for the same url from appearing twice
                    if (state.measurementsByUrl[url]) {
                        return Measurement.failure('DuplicatedMeasurement');
                    }
                    var r = res[0];
                    state.measurementsByUrl[url] = r;
                    // compute fields of the durations object, set fields to null if data is missing.
                    var redirect = r.redirectEnd > 0 && r.redirectStart > 0 ? r.redirectEnd - r.redirectStart : null;
                    var appCache = r.domainLookupStart > 0 && r.fetchStart > 0 ? r.domainLookupStart - r.fetchStart : null;
                    var dns = r.domainLookupEnd > 0 && r.domainLookupStart > 0 ? r.domainLookupEnd - r.domainLookupStart : null;
                    var tcp = r.connectEnd > 0 && r.connectStart > 0 ? r.connectEnd - r.connectStart : null;
                    var request = r.responseStart > 0 && r.requestStart > 0 ? r.responseStart - r.requestStart : null;
                    var response = r.responseEnd > 0 && r.responseStart > 0 ? r.responseEnd - r.responseStart : null;
                    var total = r.duration > 0 ? r.duration : null;
                    return Measurement.success({
                        redirect: redirect,
                        appCache: appCache,
                        dns: dns,
                        tcp: tcp,
                        request: request,
                        response: response,
                        total: total
                    });
                }
                exports.attemptMeasurementWithState = attemptMeasurementWithState;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
                'use strict';
                /**
	   * Returns a pdf viewer.
	   * @returns {Promise}
	   */
                return function () {
                    var viewerInstance = $.Deferred();
                    __webpack_require__.e(2, function (__webpack_require__) {
                        var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(99)];
                        (function (PDFViewer) {
                            viewerInstance.resolve(PDFViewer);
                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
                    });
                    return viewerInstance.promise();
                };
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                'use strict';
                return {
                    /**
	     * Adds an objects keys and values as query parameters to an given URL.
	     * @param {string} [url]
	     * @param {object} [param]
	     * @return {string}
	     */
                    addQueryParamToUrl: function (url, param) {
                        param = param || {};
                        url = url.split('?');
                        var queryArray = url[1] && url[1].split('&');
                        queryArray = queryArray || [];
                        Object.keys(param).forEach(function (key, val) {
                            queryArray.push(key + '=' + param[key]);
                        });
                        if (queryArray.length === 0) {
                            return url[0];
                        }
                        return url[0] + '?' + queryArray.join('&');
                    },
                    parseQueryString: function (query) {
                        var parts = query.split('&');
                        var params = {};
                        for (var i = 0, ii = parts.length; i < ii; ++i) {
                            var param = parts[i].split('=');
                            var key = param[0].toLowerCase();
                            var value = param.length > 1 ? param[1] : null;
                            params[decodeURIComponent(key)] = decodeURIComponent(value);
                        }
                        return params;
                    }
                };
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        ,
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
                'use strict';
                /**
	   * Returns a video viewer.
	   * @returns {Promise}
	   */
                var videoViewProvider = function () {
                    var instance = $.Deferred();
                    var resolver = function (vjs) {
                        vjs.options.techOrder = [
                            'html5',
                            'youtube'
                        ];
                        __webpack_require__.e(4, function (__webpack_require__) {
                            var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(119)];
                            (function (view) {
                                instance.resolve(view);
                            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
                        });
                    };
                    __webpack_require__.e(5, function (__webpack_require__) {
                        var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(128)];
                        (function (vjs) {
                            if (vjs.getTech('Youtube')) {
                                resolver(vjs);
                            } else {
                                __webpack_require__.e(6, function (__webpack_require__) {
                                    var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(132)];
                                    (function () {
                                        resolver(vjs);
                                    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
                                });
                            }
                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
                    });
                    return instance.promise();
                };
                return videoViewProvider;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        ,
        ,
        ,
        ,
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
                'use strict';
                /**
	   * Ensures that there's only a single instance at the same time.
	   * Accepts a createFn that is invoked and whose return value is
	   * used as the instance.
	   * @constructor
	   * @param {Function} createFn
	   * @param {Function} destroyFn
	   */
                var InstanceManager = function (createFn, destroyFn) {
                    this._createFn = createFn;
                    this._destroyFn = destroyFn;
                    this._instance = null;
                    this._destroyDeferred = null;
                };
                /**
	   * Promise a new instance. Resolves as soon as the previous one
	   * is destroyed.
	   * @return {Promise<Object>}
	   */
                InstanceManager.prototype.create = function () {
                    var args = arguments;
                    var d = new $.Deferred();
                    var destroyPromise = this._destroyDeferred && this._destroyDeferred.promise() || $.when();
                    destroyPromise.then(function () {
                        this._destroyDeferred = new $.Deferred();
                        this._instance = this._createFn.apply(this._createFn, args);
                        d.resolve(this._instance);
                    }.bind(this));
                    return d.promise();
                };
                /**
	   * Destroy the current instance and unlock instance creation.
	   */
                InstanceManager.prototype.destroy = function () {
                    if (!this._destroyDeferred) {
                        return;
                    }
                    this._destroyFn(this._instance);
                    this._destroyDeferred.resolve();
                };
                return InstanceManager;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
                'use strict';
                /**
	   * Returns a video viewer.
	   * @returns {Promise}
	   */
                var threeDViewProvider = function () {
                    var instance = $.Deferred();
                    __webpack_require__.e(7, function (__webpack_require__) {
                        var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(134)];
                        (function (view) {
                            instance.resolve(view);
                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
                    });
                    return instance.promise();
                };
                return threeDViewProvider;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(5),
                __webpack_require__(151)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, view) {
                'use strict';
                var unknownFileTypeViewProvider = function () {
                    var instance = $.Deferred();
                    instance.resolve(view);
                    return instance.promise();
                };
                return unknownFileTypeViewProvider;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(152);
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(61),
                __webpack_require__(95),
                __webpack_require__(154),
                __webpack_require__(22),
                __webpack_require__(5)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (featureDetection, BaseViewer, tpl, iconUtils, $) {
                'use strict';
                return BaseViewer.extend({
                    className: 'cp-unknown-file-type-view-wrapper',
                    events: { 'click .download-button': '_handleDownloadButton' },
                    initialize: function () {
                        BaseViewer.prototype.initialize.apply(this, arguments);
                    },
                    teardown: function () {
                        BaseViewer.prototype.teardown.apply(this, arguments);
                        this.off();
                        this.remove();
                    },
                    render: function () {
                        BaseViewer.prototype.render.apply(this, arguments);
                        this.$el.html(tpl.default(BaseViewer.translate, featureDetection).unknownFileTypeViewer({
                            iconClass: iconUtils.getCssClass(this.model.get('type')),
                            src: this.model.get('srcDownload') || this.model.get('src')
                        }));
                        var fileView = this._mediaViewer.getView();
                        // kill sidebar view.
                        if (fileView.fileSidebarView.isAnyPanelInitialized()) {
                            fileView.fileSidebarView.teardownPanel();
                        }
                        this.trigger('viewerReady');
                        return this;
                    },
                    setupMode: function (mode) {
                        if (mode === 'BASE') {
                            $('.cp-toolbar-layer', this._mediaViewer.getView().$el).hide();
                        }
                    },
                    _handleDownloadButton: function () {
                        this._mediaViewer.trigger('fv.download');
                        this._triggerAnalytics();
                    },
                    _triggerAnalytics: function () {
                        this._mediaViewer.analytics.send('file.download', { actionType: 'cta' });
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            // style-loader: Adds some css to the DOM by adding a <style> tag
            // load the styles
            var content = __webpack_require__(153);
            if (typeof content === 'string')
                content = [[
                        module.id,
                        content,
                        ''
                    ]];
            // add the styles to the DOM
            var update = __webpack_require__(12)(content, {});
            if (content.locals)
                module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./unknown-file-type-view.less', function () {
                        var newContent = require('!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./unknown-file-type-view.less');
                        if (typeof newContent === 'string')
                            newContent = [[
                                    module.id,
                                    newContent,
                                    ''
                                ]];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function () {
                    update();
                });
            }    /***/
        },
        function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(11)();
            // imports
            // module
            exports.push([
                module.id,
                '.cp-unknown-file-type-view-wrapper {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n.cp-unknown-file-type-view {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: middle;\n  min-width: 490px;\n  padding: 35px 100px;\n  line-height: 2em;\n  border-radius: 5px;\n}\n.cp-unknown-file-type-view .file-icon {\n  display: inline-block;\n  width: 96px;\n  height: 96px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n}\n.cp-unknown-file-type-view p {\n  margin: 0;\n  color: #fff;\n}\n.cp-unknown-file-type-view a.download-button {\n  margin: 20px 0 0 0;\n}\n.cp-unknown-file-type-view a.download-button span.icon-download {\n  position: relative;\n  top: 3px;\n  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VW50aXRsZWQ8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxwYXRoIGQ9Ik0xIDEydi0xaDEwdjFIMXptNS4yLTNoLS4zOUwxIDQuMTZsMS4xMi0xLjEzTDUgNS45MlYxLjVDNS4wOS41IDUuNDUgMCA2IDBzLjg5LjM3IDEgMS41djQuNDFsMi45MS0yLjg1TDExIDQuMTYgNi4yIDl6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");\n  background-repeat: none;\n  background-position: 0 0;\n}\n',
                ''
            ]);    // exports
                   /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports,
                __webpack_require__(27)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, handlebars_1) {
                'use strict';
                var tpl = handlebars_1.compile('\n<div class="cp-unknown-file-type-view">\n    <span class="file-icon size-96 {{iconClass}}"></span>\n    <p class="title">\n      {{labelHeader}}\n      <br>\n      {{labelDescription}}\n    </p>\n    <a\n      class="cp-button download-button"\n      href="{{src}}"\n      {{#unless downloadAttributeSupported}}\n      target="_blank"\n      {{/unless}}\n      {{#if downloadAttributeSupported}}\n      download\n      {{/if}}\n    >\n      <span class="cp-button-icon icon-download"></span>\n      {{labelButton}}\n    </a>\n</div><span class="cp-baseline-extension"></span>\n<!-- FIL-2388 - "cp-baseline-extension" inline elements must not have whitespace around it -->\n');
                function template(translate, features) {
                    return {
                        /**
	             * View for unknown file type.
	             * @param iconClass icon class name.
	             * @param src the file url
	             */
                        unknownFileTypeViewer: function (_a) {
                            var iconClass = _a.iconClass, src = _a.src;
                            return tpl({
                                iconClass: iconClass,
                                src: src,
                                labelHeader: translate('cp.unknown.file.type.header'),
                                labelDescription: translate('cp.unknown.file.type.download.to.view'),
                                labelButton: translate('cp.unknown.file.type.downloadbutton'),
                                downloadAttributeSupported: features && features.adownload
                            });
                        }
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: true });
                exports.default = template;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(15),
                __webpack_require__(156)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, mediaApi) {
                'use strict';
                /**
	   * Augments data and forwards them to a configured analytics backend.
	   *
	   * An analytics backend is just a function that accepts a key and a data
	   * object. It is also responsible for filtering incoming data.
	   *
	   * For all data send, this module fetches current file and view state
	   * and adds them to the data. The added keys are
	   * - fileType
	   * - fileId (hashed version of the file src)
	   * - fileState (value of view state)
	   *
	   * @param backend
	   * @param mediaViewer
	   * @param hasher
	   * @param prefix custom product prefix that will appear in analytics
	   * @param mediaViewerVersion
	   * @returns {Analytics}
	   * @constructor
	   */
                var Analytics = function (backend, mediaViewer, hasher, prefix, mediaViewerVersion) {
                    this._backend = backend;
                    this._mediaViewer = mediaViewer;
                    this._hasher = hasher;
                    this._prefix = prefix ? prefix + '.' : '';
                    this._mediaViewerVersion = mediaViewerVersion;
                };
                /**
	   * Forwards an analytics event to the configured backend.
	   * @param {string} key
	   * @param {Object} data
	   */
                Analytics.prototype.send = function (key, data) {
                    if (!this._backend) {
                        return;
                    }
                    var file = this._mediaViewer.getView().getConvertedFile();
                    var attributes = file && file.attributes || {};
                    var augmentedData = _.extend({
                        fileType: attributes.type,
                        fileId: this._hasher(attributes.src || ''),
                        fileState: this._mediaViewer.getView().getViewState(),
                        libraryVersion: this._mediaViewerVersion,
                        fromMediaAPI: mediaApi.isMediaApiUrl(attributes.src)
                    }, data);
                    this._backend(this._prefix + key, augmentedData);
                };
                /**
	   * Returns a partially applied analytics function for use inside of
	   * promise handlers.
	   * @param {string} key
	   * @param {object} data
	   * @returns {function}
	   */
                Analytics.prototype.fn = function (key, data) {
                    return this.send.bind(this, key, data);
                };
                return Analytics;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__,
                exports
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
                'use strict';
                function isMediaApiUrl(url) {
                    return /media-api.atlassian.io/.test(url) || /media-api-internal.atlassian.io/.test(url) || /api.media.atlassian.com/.test(url);
                }
                exports.isMediaApiUrl = isMediaApiUrl;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                var toCharCode = function (str) {
                    return str.charCodeAt(0);
                };
                var updateHash = function (prev, curr) {
                    return (prev << 5) + prev + curr;
                };
                /**
	   * Create a djb2 hash from the given string.
	   * Based on this module https://github.com/wearefractal/djb2.
	   * @param {String} str
	   * @returns {Number}
	   */
                var djb2 = function (str) {
                    return str.split('').map(toCharCode).reduce(updateHash, 5381);
                };
                return djb2;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var map = {
                './core/base_viewer.js': 95,
                './core/buttons/button_view.js': 62,
                './core/buttons/close_button.js': 64,
                './core/buttons/download_button.js': 58,
                './core/buttons/more_button.js': 66,
                './core/file-state.js': 88,
                './core/file.js': 20,
                './core/files.js': 19,
                './core/layers/arrow_layer.js': 77,
                './core/layers/error_layer.js': 72,
                './core/layers/password_layer.js': 75,
                './core/layers/spinner_layer.js': 80,
                './core/layers/toolbar_layer.js': 79,
                './core/layers/viewer_layer.js': 68,
                './core/layers/waiting_layer.js': 74,
                './core/main-view/commands.js': 86,
                './core/main-view/main_view.js': 8,
                './core/modes/base.js': 83,
                './core/modes/contained.js': 85,
                './core/modes/presentation.js': 84,
                './core/title_view.js': 21,
                './core/view.js': 13,
                './file-types/file-types.js': 23,
                './util/analytics.js': 155,
                './util/assert.js': 4,
                './util/constants-dictionary.js': 7,
                './util/djb2.js': 157,
                './util/factories/focus-manager-factory.js': 16,
                './util/focus-manager-impl.js': 18,
                './util/focus-manager-noop.js': 17,
                './util/icon-utils.js': 22,
                './util/instance-manager.js': 124,
                './util/keyboard.js': 76,
                './util/layer-container-view.js': 87,
                './util/panel-container-view.js': 71,
                './util/storage.js': 3,
                './util/template-store.js': 159,
                './util/translator.js': 14,
                './util/url.js': 115,
                './util/viewer-registry.js': 89,
                './viewers/unknown-file-type-view/unknown-file-type-view.js': 151,
                './wrappers/ajs.js': 160,
                './wrappers/backbone.js': 6,
                './wrappers/jquery.js': 5,
                './wrappers/underscore.js': 15
            };
            function webpackContext(req) {
                return __webpack_require__(webpackContextResolve(req));
            }
            ;
            function webpackContextResolve(req) {
                return map[req] || function () {
                    throw new Error('Cannot find module \'' + req + '\'.');
                }();
            }
            ;
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = 158;    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(4),
                __webpack_require__(15)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (assert, _) {
                'use strict';
                /**
	   * Provides templates by asking a previously configured backend.
	   *
	   * A backend is a function that accepts a template path and returns the
	   * matched template. If no template is found, it returns undefined.
	   *
	   * @constructor
	   */
                var TemplateStore = function () {
                    this._backend = null;
                };
                /**
	   * Checks if backend is a valid backend.
	   * @param {*} backend
	   * @return {bool}
	   */
                TemplateStore.validBackend = function (backend) {
                    return _.isFunction(backend);
                };
                /**
	   * Asks its backend for the given templateUrl.
	   * @param {string} templateUrl
	   * @return {*}
	   * @throws {Error} if backend is invalid
	   */
                TemplateStore.prototype.get = function (templateUrl) {
                    assert(TemplateStore.validBackend(this._backend), 'backend is valid');
                    return this._backend(templateUrl);
                };
                /**
	   * Sets a backend for this template store.
	   * @param {function} backend
	   * @throws {Error} if backend is invalid
	   */
                TemplateStore.prototype.useBackend = function (backend) {
                    assert(TemplateStore.validBackend(backend), 'backend is valid');
                    this._backend = backend;
                };
                return TemplateStore;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /* globals AJS */
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return AJS;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        }
    ]);
    //# sourceMappingURL=mediaviewer.js.map
    /******/
    (function (modules) {
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;
            /******/
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false    /******/
            };
            /******/
            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/
            // Flag the module as loaded
            /******/
            module.loaded = true;
            /******/
            /******/
            // Return the exports of the module
            /******/
            return module.exports;    /******/
        }
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = '';
        /******/
        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(0);    /******/
    }([
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MediaViewer) {
                'use strict';
                MediaViewer.registerPlugin('autoplay-videos', function (mediaViewer) {
                    var totalFilesShown;
                    if (mediaViewer.getConfig().embedded) {
                        mediaViewer.set('videoViewerAutoplay', false);
                    } else {
                        mediaViewer.on('fv.open', function () {
                            totalFilesShown = 0;
                        });
                        mediaViewer.on('fv.changeFile', function () {
                            totalFilesShown++;
                            mediaViewer.set('videoViewerAutoplay', totalFilesShown === 1);
                        });
                    }
                });
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports) {
            module.exports = MediaViewer;    /***/
        }
    ]));
    /******/
    (function (modules) {
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;
            /******/
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false    /******/
            };
            /******/
            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/
            // Flag the module as loaded
            /******/
            module.loaded = true;
            /******/
            /******/
            // Return the exports of the module
            /******/
            return module.exports;    /******/
        }
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = '';
        /******/
        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(0);    /******/
    }([
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
                __webpack_require__(1),
                __webpack_require__(2)
            ], __WEBPACK_AMD_DEFINE_RESULT__ = function (MediaViewer, imagePreloaderPlugin) {
                'use strict';
                MediaViewer.registerPlugin('imagePreloader', imagePreloaderPlugin);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        },
        function (module, exports) {
            module.exports = MediaViewer;    /***/
        },
        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /* global Image */
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MediaViewer) {
                'use strict';
                var $ = MediaViewer.require('wrappers/jquery');
                var imagePreloaderPlugin = function (mediaViewer) {
                    var delayTimeOut, delay = 500, config = mediaViewer.getConfig(), numberNextImages = config.preloadImagesAfterCurrent, numberPrevImages = config.preloadImagesBeforeCurrent;
                    /**
	     * Check if given MimeType is an image MimeType
	     * @param  {String}  type - MimeType string
	     * @return {Boolean}
	     */
                    function isImage(type) {
                        return /^image\/.*/i.test(type);
                    }
                    /**
	     * Return an array of files next to the current one
	     * @param  {Number}   n  - Number of adjacent
	     * @param  {Function} fn - Function to calculate the adjacent direction
	     * @return {Array}
	     */
                    function getAdjacentImages(n, fn) {
                        var res = [], current = mediaViewer._fileState.get('currentFileIndex'), length = mediaViewer._fileState.collection.length, index;
                        // No adjacent images if `current` is not within `length`
                        if (current > length || current < 0) {
                            return [];
                        }
                        // Let n never be greater than collection length minus current file
                        n = Math.min(length - 1, n);
                        while (n > 0) {
                            index = fn(n, current, length);
                            res.push(mediaViewer._fileState.collection.at(index));
                            n -= 1;
                        }
                        return res.reverse();
                    }
                    /**
	     * Get adjacent `n` images to the right
	     * @param  {Number} n
	     * @return {Array}
	     */
                    function getNextImages(n) {
                        return getAdjacentImages(n, function (n, current, length) {
                            var newIndex = current + n;
                            return newIndex % length;
                        });
                    }
                    /**
	     * Get adjacent `n` images to the left
	     * @param  {Number} n
	     * @return {Array}
	     */
                    function getPrevImages(n) {
                        return getAdjacentImages(n, function (n, current, length) {
                            var newIndex = current - n;
                            if (newIndex < 0) {
                                newIndex = length - Math.abs(newIndex);
                            }
                            return newIndex;
                        });
                    }
                    /**
	     * Once the image is done loading the next image will be preloaded.
	     * @param  {jQuery} $el   - Image element triggering the handled event
	     * @param  {Array}  files
	     */
                    function handleImageEvent($el, files) {
                        preloadImages(files);
                        $el.off('load');
                        $el.off('error');
                    }
                    /**
	     * Create an image tag to preload first image from `files` array.
	     * @param  {Array} files
	     */
                    function preloadImages(files) {
                        var file = files.shift();
                        if (!file || !isImage(file.get('type'))) {
                            return;
                        }
                        var nextImage = new Image();
                        if (files.length) {
                            var $el = $(nextImage);
                            $el.on('load', handleImageEvent.bind(null, $el, files));
                            $el.on('error', handleImageEvent.bind(null, $el, files));
                        }
                        config.fetchToken(file).then(function (newfile) {
                            nextImage.src = newfile.src;
                        });
                    }
                    /**
	     * Start preloading images on `fv.changeFile` after `delay` ms
	     */
                    function startPreloading() {
                        clearTimeout(delayTimeOut);
                        delayTimeOut = setTimeout(function () {
                            preloadImages(getNextImages(numberNextImages));
                            preloadImages(getPrevImages(numberPrevImages));
                        }, delay);
                    }
                    // Start preloading once the current file is done
                    mediaViewer.on('fv.showFile', startPreloading);
                    mediaViewer.on('fv.showFileError', startPreloading);
                };
                return imagePreloaderPlugin;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));    /***/
        }
    ]));
    return MediaViewer;
}));
//# sourceMappingURL=mediaviewer.all.js.map

}catch(e){WRMCB(e)};