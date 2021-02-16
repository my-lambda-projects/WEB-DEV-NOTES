WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/lib-version.js' */
// NOTE: this is in "lib" because it's required by aui-amd.js. This module _cannot_ have any dependencies on non-lib
// modules (like "common")
define('applinks/lib/version', [
    'applinks/lib/lodash'
], function(
    _
) {

    function checkIntValue(value, desc) {
        if (_.isUndefined(value)) {
            return 0;
        } else if (typeof value !== 'number' || isNaN(value)) {
            throw new Error(desc + ': expected a number, was: <' + value + '>');
        } else {
            return Math.floor(value);
        }
    }

    function checkVersionObject(object, desc) {
        if (!object || !(object instanceof Version)) {
            throw new Error(desc + ': expected a Version object, was: <' + object + '>');
        }
        return object;
    }

    function compareInt(intOne, intTwo) {
        return intOne > intTwo ? 1 : intOne == intTwo ? 0 : -1;
    }

    /**
     * Constructs a version object that contains version information and can be compared with other version objects.
     *
     * @param major major version component
     * @param minor minor version component
     * @param bugfix bugfix version component
     * @constructor
     */
    function Version(major, minor, bugfix) {
        this.major = checkIntValue(major, 'major');
        this.minor = checkIntValue(minor, 'minor');
        this.bugfix = checkIntValue(bugfix, 'bugfix');
    }

    /**
     * Constructs a Version by parsing a version string.
     *
     * @param versionString version string to parse, expected to be in the form of <major>.<minor>.<bugfix>
     * @param versionDesc what version does the `versionString` represent
     */
    Version.parse = function(versionString, versionDesc) {
        versionDesc = versionDesc || 'versionString';
        if (!versionString) {
            throw new Error(versionDesc + ': expected a non-empty string');
        }
        var versionSplit = versionString.split('.');
        if (versionSplit.length !== 3) {
            throw new Error(versionDesc + ': expected <major>.<minor>.<bugfix> string, was: <' + versionString + '>');
        }
        return new Version(parseInt(versionSplit[0]), parseInt(versionSplit[1]), parseInt(versionSplit[2]));
    };

    /**
     * Comparator function to sort Version objects.
     *
     * @param versionOne first version object
     * @param versionTwo second version object
     * @returns {Number} comparison result
     * @see Version.compareTo(that)
     */
    Version.comparator = function(versionOne, versionTwo) {
        return checkVersionObject(versionOne, 'versionOne').compareTo(checkVersionObject(versionTwo, 'versionTwo'));
    };

    /**
     * Return -1, 0 or 1 as this Version object represents a version less than, equal to, or greater than `that`.
     *
     * @param that the other version to compare to
     * @returns {Number} comparison result
     */
    Version.prototype.compareTo = function(that) {
        checkVersionObject(that, 'that');
        var majorResult = compareInt(this.major, that.major);
        if (majorResult != 0) {
            return majorResult;
        }
        var minorResult = compareInt(this.minor, that.minor);
        if (minorResult != 0) {
            return minorResult;
        }
        return compareInt(this.bugfix, that.bugfix);
    };

    Version.prototype.greaterThan = function(that) {
        return this.compareTo(that) > 0;
    };

    Version.prototype.greaterThanOrEqual = function(that) {
        return this.compareTo(that) >= 0;
    };

    Version.prototype.lessThan = function(that) {
        return this.compareTo(that) < 0;
    };

    Version.prototype.lessThanOrEqual = function(that) {
        return this.compareTo(that) <= 0;
    };

    Version.prototype.equals = function(that) {
        return this.compareTo(that) == 0;
    };

    Version.prototype.toMinor = function() {
        return new Version(this.major, this.minor);
    };

    Version.prototype.toMajor = function() {
        return new Version(this.major);
    };

    Version.prototype.toString = function() {
        return this.major + '.' + this.minor + '.' + this.bugfix;
    };

    return Version;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-version-details.js' */
define('applinks/lib/aui-version-details', [
    'applinks/lib/version'
], function(
    Version
) {
    // minimum 5.8.x and 5.9.x AUI versions - lower versions ship with bugs that break some of the Applinks functionality
    var MINIMUM_58_VERSION = new Version(5, 8, 15);
    var MINIMUM_59_VERSION = new Version(5, 9, 13);
    var VERSION_58 = new Version(5, 8);
    var VERSION_59 = new Version(5, 9);

    function checkVersion(version) {
        // must be >= the minimum required 5.8.x version
        if (version.lessThan(MINIMUM_58_VERSION)) {
            throw new Error('AUI version ' + version + ' is too low, you need to upgrade AUI to ' + MINIMUM_58_VERSION +
                ' or ' + MINIMUM_59_VERSION + ' for Applinks to work');
        }
        // if 5.9, must be >= the minimum required 5.9.x version
        if (version.greaterThanOrEqual(VERSION_59) && version.lessThan(MINIMUM_59_VERSION)) {
            throw new Error('AUI version ' + version + ' is too low, you need to upgrade AUI to ' + MINIMUM_59_VERSION +
                ' for Applinks to work');
        }
    }

    function addVersionDetails(AJS) {
        var ajsVersion = Version.parse(AJS.version, 'AUI version');
        checkVersion(ajsVersion);

        AJS.versionDetails = ajsVersion;
        AJS.versionDetails.is58 = ajsVersion.toMinor().equals(VERSION_58);
        AJS.versionDetails.is59 = ajsVersion.toMinor().equals(VERSION_59);

        return AJS;
    }

    return  {
        /**
         * Check AUI version for compatibility with Applinks and add `versionDetails` field.
         */
        addVersionDetails: addVersionDetails
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/console-amd.js' */
define('applinks/lib/console', function() {
    return window.console;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/jquery-amd.js' */
define('applinks/lib/jquery', function() {
   return window.jQuery;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-amd.js' */
define('applinks/lib/aui', [
    'applinks/lib/window',
    'applinks/lib/aui-version-details'
], function(
    window,
    VersionDetails
) {
    var AJS = window.AJS;
    if (!AJS) {
        throw new Error('window.AJS not defined, cannot load AUI');
    }

    return VersionDetails.addVersionDetails(AJS);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/wrm-amd.js' */
/**
 * Define Web resource manager as an AMD dependency. This should also be present in apps using Atlassian Plugins Web
 * Resources framework.
 */
define('applinks/lib/wrm', function() {
   return window.WRM;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/skate-amd.js' */
define('applinks/lib/skate', function() {
   // window.skate is not exposed as a global from AUI 5.9, this will return undefined with that version or later
   return window.skate;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/window-amd.js' */
/**
 * Define window as AMD module to facilitate unit testing of some modules
 */
define('applinks/lib/window', function() {
    return window;
});
}catch(e){WRMCB(e)};