WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/events.js' */
define('applinks/common/events', [
    'applinks/lib/jquery',
    'applinks/lib/lodash',
    'applinks/lib/window',
    'applinks/common/preconditions'
], function(
    $,
    _,
    window,
    Preconditions
) {
    var PREFIX = 'applinks.event.';

    function applinksEvent(eventId) {
        return PREFIX + Preconditions.nonEmptyString(eventId, 'eventId');
    }

    /**
     * Provides common Applinks event IDs and a simple event system facade API. This is a preferred way to subscribe to
     * and raise Applinks-specific events as it does not depend on a specific event bus or event target (such as
     * `document`), as well as facilitates unit testing.
     */
    return {
        PREREADY: applinksEvent('preready'),
        READY: applinksEvent('ready'),

        /**
         * Raised when applinks list is first loaded
         */
        APPLINKS_LOADED: applinksEvent('loaded'),
        /**
         * Raised when applinks list is updated
         */
        APPLINKS_UPDATED: applinksEvent('updated'),

        /**
         * This event is only raised when linking to Atlassian applications
         * Can be consumed by other plugins
         */
        NEW_APPLINK_CREATED: applinksEvent('created'),

        // legacy events
        Legacy: {
            MESSAGE_BOX_DISPLAYED: applinksEvent('message-box-displayed')
        },

        applinksEvent: applinksEvent,

        on: function(events, handler, context) {
            var handlerWithContext = context ? _.bind(handler, context) : handler;
            $(window.document).on(events, handlerWithContext);
        },

        off: function(events, handler) {
            $(window.document).off(events, handler);
        },

        trigger: function(event, data) {
            $(window.document).trigger(event, data);
        }
    }
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/i18n.js' */
define('applinks/common/i18n', [
    'applinks/lib/lodash',
    'applinks/lib/jquery',
    'applinks/lib/wrm',
    'applinks/common/modules',
    'applinks/common/preconditions',
    'applinks/common/products'
], function(
    _,
    $,
    WRM,
    ApplinksModules,
    Preconditions,
    ApplinksProducts
) {
    var getAllEntityTypes = _.memoize(function() {
        var val = WRM.data.claim(ApplinksModules.dataFqn(ApplinksModules.COMMON_EXPORTED, 'entity-types'));
        return Preconditions.hasValue(val, 'entity-types', 'Entity Types data not found');
    });

    var getAllAuthTypes = _.memoize(function() {
        var val = WRM.data.claim(ApplinksModules.dataFqn(ApplinksModules.COMMON_EXPORTED, 'authentication-types'));
        return Preconditions.hasValue(val, 'authentication-types', 'Authentication Types data not found');
    });

    return {
        
        /**
         * @param typeId ID of the application type to resolve
         * @returns {string} resolved i18n-ed type name, or the original `typeId` if there is no mapping
         */
        getApplicationTypeName: function(typeId) {
            return ApplinksProducts.getTypeName(typeId);
        },

        /**
         * @param typeId ID of the entity type to resolve
         * @returns {string} resolved i18n-ed singular entity type name, or the original `typeId` if there is no mapping
         */
        getEntityTypeName: function(typeId) {
            return getAllEntityTypes().singular[typeId] || typeId;
        },

        /**
         * @param typeId ID of the entity type to resolve
         * @returns {string} resolved i18n-ed plural entity type name, or the original `typeId` if there is no mapping
         */
        getPluralizedEntityTypeName: function(typeId) {
            return getAllEntityTypes().plural[typeId] || typeId;
        },

        /**
         * @param type ID of the authentication type to resolve (usually in a form of full class name)
         * @returns {string} resolved i18n-ed authentication type name, or the original `type` if there is no mapping
         */
        getAuthenticationTypeName: function(type) {
            return getAllAuthTypes()[type] || type;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/modules.js' */
/**
 * Applinks plugin modules core constants and definitions.
 */
define('applinks/common/modules', function() {
    return {
        /**
         * Applinks plugin key
         */
        PLUGIN_KEY: 'com.atlassian.applinks.applinks-plugin',

        // key web resource keys
        COMMON_EXPORTED: 'applinks-common-exported',
        COMMON: 'applinks-common',

        /**
         * Fully qualifies a module name using the plugin key.
         *
         * @param {string} moduleName module name to qualify
         * @returns {string} fully qualified name
         */
        fqn: function(moduleName) {
            return this.PLUGIN_KEY + ':' + moduleName;
        },

        /**
         * Fully qualifies web-resource data using module name and data key.
         *
         * @param {string} moduleName module name
         * @param {string} dataKey key of the data element
         * @returns {string} fully qualified name
         */
        dataFqn: function(moduleName, dataKey) {
            return this.fqn(moduleName) + '.' + dataKey;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/preconditions.js' */
define('applinks/common/preconditions', [
    'applinks/lib/lodash'
], function(
    _
) {
    function nonEmptyString(value, varName, customMessage) {
        return _checkArgument(
            _.isString(value) && !_.isEmpty(value),
            customMessage,
            _withVarName(varName, ': expected a non-empty string, was: <' + value + '>'),
            value
        );
    }

    function isFunction(value, varName, customMessage) {
        return _checkArgument(
            _.isFunction(value),
            customMessage,
            _withVarName(varName, ': expected a function, was: ' + value),
            value
        );
    }

    function isArray(value, varName, customMessage) {
        return _checkArgument(
            _.isArray(value),
            customMessage,
            _withVarName(varName, ': expected an array, was: ' + value),
            value
        );
    }

    function hasValue(value, varName, customMessage) {
        return _checkArgument(
            value,
            customMessage,
            _withVarName(varName, ': expected a value'),
            value
        );
    }

    function _checkArgument(test, message, defaultMessage, actualValue) {
        var actualMessage = message ? message : defaultMessage;
        if (!test) {
            throw new Error(actualMessage)
        }
        return actualValue || test;
    }

    function _withVarName(varName, msg) {
        return (varName || '[unspecified]') + msg;
    }

    return {
        checkArgument: _.partial(_checkArgument, _, _, '', _),
        nonEmptyString: nonEmptyString,
        isArray: isArray,
        isFunction: isFunction,
        hasValue: hasValue
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/products.js' */
define('applinks/common/products', [
    'applinks/lib/lodash',
    'applinks/lib/wrm',
    'applinks/common/modules',
    'applinks/common/preconditions'
], function(
    _,
    WRM,
    ApplinksModules,
    Preconditions
) {
    var getAllTypes = _.memoize(function() {
        var val = WRM.data.claim(ApplinksModules.dataFqn(ApplinksModules.COMMON_EXPORTED, 'applinks-types'));
        return Preconditions.hasValue(val, 'types', 'Application Types data not found');
    });

    /**
     * @param typeId ID of the application type to resolve
     * @returns {string} resolved i18n-ed type name, or the original `typeId` if there is no mapping
     */
    function getTypeName(typeId) {
        return getAllTypes()[typeId] || typeId;
    }

    /**
     * Map of Atlassian product keys to application type IDs
     */
    return {
        BAMBOO: 'bamboo',
        BITBUCKET: 'stash', // special case, see java class com.atlassian.applinks.application.bitbucket.BitbucketApplicationTypeImpl.TYPE_ID
        CONFLUENCE: 'confluence',
        FECRU: 'fecru',
        JIRA: 'jira',
        REFAPP: 'refapp',
        STASH: 'stash',
        getTypeName: getTypeName
    };
});
}catch(e){WRMCB(e)};
