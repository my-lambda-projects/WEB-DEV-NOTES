WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:editinoffice', location = 'templates/extra/editinword/editInOffice.js' */
require([
    'jquery',
    'skate',
    'confluence/legacy',
], function (
    $,
    skate,
    Confluence
) {

    var skateComponentAlreadyDefined = function(componentName) {
        if (!__skate || !__skate.registry) {
            return false;
        }

        return __skate.registry[componentName] !== undefined;
    }

    var clickHanderOfficeLink = function(el, event) {
        var $link = $(el);
        if (!$link.is('a')) {
            return;
        }

        event.preventDefault();

        var contextPath = AJS.Data.get('context-path');
        var usePathAuth = $link.attr('data-use-path-auth');

        if (typeof(usePathAuth) == 'undefined') {
            usePathAuth = ($link.attr('id') == 'edit-in-word-pathauth' || $link.hasClass('office-editable-pathauth'));
        } else {
            usePathAuth = (usePathAuth === 'true');
        }

        var webDavUrl = $link.attr('href');
        var progId = $link.attr('data-prog-id');

        if (typeof(progId) == 'undefined') {
            progId = getProgID(webDavUrl);
        }

        Confluence.OfficeConnector.Analytics.editOfficeDocument({programId : progId});

        return doEditInOffice(contextPath, webDavUrl, progId, usePathAuth);
    };

    // in Single Page App, we don't reply on DOM ready event anymore.
    // We use skate to start initialization.
    if (!skateComponentAlreadyDefined('office-editable')) {
        skate('office-editable', {
            type: skate.types.CLASS,
            events: {
                'click': clickHanderOfficeLink
            }
        });
    }

    if (!skateComponentAlreadyDefined('office-editable-pathauth')) {
        skate('office-editable-pathauth', {
            type: skate.types.CLASS,
            events: {
                'click': clickHanderOfficeLink
            }
        });
    }
});


function getProgID(fileName) {
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    switch (ext) {
        case "ppt":
        case "pptx":
        case "ppsx":
        case "pot":
        case "potx":
        case "pptm":
            return "PowerPoint.Show";
        case "doc":
        case "docx":
        case "dot":
        case "dotx":
            return "Word.Document";
        case "xls":
        case "xlt":
        case "xlsx":
        case "xlst":
        case "xlsm":
        case "xltx":
            return "Excel.Sheet";
        default:
            return ''
    }
}

function filterPath(urlPath, success, onerror)
{
    AJS.$.ajax({
        url: contextPath + '/rest/office/1.0/authtoken',
        success: function(data){
                     if (data.token){
                         var splitPath = urlPath.split('/');
                         var newPath = '';
                         for (var i = 0; i < splitPath.length - 1; i++){
                            
                            if (splitPath[i].length){
                                newPath = newPath + '/' + splitPath[i];
                            }            
                         }
                        newPath = newPath + '/ocauth/' + data.token + '/' + splitPath[splitPath.length - 1];
                        success(newPath);
                     }
                     else{
                         onerror('Unable to retrieve a temporary auth token. Check your server logs.');
                     }
                 },
        error: function(jqXhr, textStatus, errorThrown){
                    onerror('Ajax error retrieving token: ' + textStatus + ", error from server: " + errorThrown); 
               },
        statusCode: {403: function(){onerror('The current configuration requires you to be logged in to use the Office Connector.');
                          }
                    }
    });
}

function getCookie(check_name) {
    // first we'll split this cookie up into name/value pairs
    // note: document.cookie only returns name=value, not the other components
    var a_all_cookies = document.cookie.split(';');
    var a_temp_cookie = '';
    var cookie_name = '';
    var cookie_value = '';

    for (var i = 0; i < a_all_cookies.length; i++) {
        // now we'll split apart each name=value pair
        a_temp_cookie = a_all_cookies[i].split('=');

        // and trim left/right whitespace while we're at it
        cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

        // if the extracted name matches passed check_name
        if (cookie_name == check_name) {
            // we need to handle case where cookie has no value but exists (no = sign, that is):
            if (a_temp_cookie.length > 1) {
                cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
            }
            // note that in cases where cookie is initialized but no value, null is returned
            return cookie_value;
        }
        a_temp_cookie = null;
        cookie_name = '';
    }

    return null;
}

function getBaseUrl() {
	return location.protocol + "//" + location.host;	
}

function handleTokenError(msg){
    alert(msg);
}

function doEditInOffice(contextPath, webDavUrl, progID, usePathAuth)
{
        var baseUrl = getBaseUrl();
        var isFirefox = typeof window.InstallTrigger !== 'undefined';
        if (window.ActiveXObject !== undefined) { // IE
            var ed;
    		try
    		{
    			ed = new ActiveXObject('SharePoint.OpenDocuments.1');
    		}
    		catch(err)
    		{
    			window.alert('Unable to create an ActiveX object to open the document. This is most likely because of the security settings for your browser.');
    			return false;
    		}
    		if (ed)
    		{
    			if (usePathAuth)
    			{
    				filterPath(webDavUrl, function(newUrl){
    				                        ed.EditDocument(baseUrl + newUrl, progID);
    				                      }, handleTokenError);
    			}
    			else{
    			    ed.EditDocument(baseUrl + webDavUrl, progID);
    			}
    			return false;
    		}
    		else
    		{
    			window.alert('Cannot instantiate the required ActiveX control to open the document. This is most likely because you do not have Office installed or you have an older version of Office.');
    			return false;
    		}
    	} else if (!isFirefox) { //all browsers except for IE and Firefox.
            editWithMicrosoftOffice(usePathAuth, webDavUrl);
        } else { //Firefox
            if (window.URLLauncher) {// this means the OC firefox plugin is installed
                if (isMicrosoftOffice(webDavUrl)) {
                    editWithMicrosoftOffice(usePathAuth, webDavUrl);
                } else {
                    editWithNonMicrosoftOffice(usePathAuth, webDavUrl);
                }
            } else {
                //Even the customer could edit the document without installing the Firefox addon, however,
                //We still need to ask the customer to install it because we need to support other office softwares,
                //such as OpenOffice, and we are not able to detect whether the customer has Microsoft Office installed,
                //so we have to depend on the Firefox addon to check. If we support the Microsoft Office only,
                //then we don't need this addon at all.
                if(window.confirm('A plugin is required to use this feature. Would you like to download it?')) {
                    InstallTrigger.install({'WebDAV Launcher': 'https://update.atlassian.com/office-connector/URLLauncher/latest/webdavloader.xpi'});
                }
            }
        }
        return false;
}

function editWithMicrosoftOffice(usePathAuth, webDavUrl) {
    // Always launch Microsoft Office with token regardless of whether the token is enabled.
    // Alternatively, we need to ask the customer to enable the authentication via Basic Auth by updating
    // the registry, please see the details at https://support.microsoft.com/en-us/kb/2123563
    filterPath(webDavUrl, launchWithOFE, handleTokenError);
}

function isMicrosoftOffice(url) {
    var extension = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    return new URLLauncher().isMicrosoftOfficeInstalled(extension);
}

function launchWithFF(url) {
    try {
        var wdFile = new URLLauncher();
        // check and see if they have the function we want.
        if (wdFile.open2)
        {
            //grok the webdav root path and the remaining path after the root
            var regex = new RegExp(contextPath + '/plugins/servlet/[^\/]+/');
            var rootPath = url.match(regex);
            var remainingPath = url.substring(rootPath[0].length);

            wdFile.open2(encodeURI(rootPath[0]), encodeURI(remainingPath));
        }
        else
        {
            wdFile.open(url);
        }
    } catch (anError) {
        window.alert("Unable to open your Office file. Have you installed MS Office yet?. Read more detail at https://confluence.atlassian.com/display/DOC/Installing+the+Firefox+Add-On+for+the+Office+Connector");
    }
}

function editWithNonMicrosoftOffice(usePathAuth, webDavUrl) {
    var isMac = navigator.appVersion.indexOf("Mac") != -1;

    if (usePathAuth && !isMac) {
        webDavUrl = filterPath(webDavUrl, launchWithFF, handleTokenError);
    } else {
        launchWithFF(webDavUrl);
    }
}
/**
 * The protocol used for the Microsoft Office document.
 * @param href - the URI of the office resource
 * @returns the protocol name.
 */
function getMicrosoftProtocol(href) {
    var ext = href.substring(href.lastIndexOf('.') + 1).toLowerCase();

    switch (ext) {
        case "ppt":
        case "pptx":
        case "ppsx":
        case "pot":
        case "potx":
        case "pptm":
            return "ms-powerpoint";
        case "doc":
        case "docx":
        case "dot":
        case "dotx":
            return "ms-word";
        case "xls":
        case "xlt":
        case "xlsx":
        case "xlst":
        case "xlsm":
        case "xltx":
            return "ms-excel";
        default:
            return '';
    }
}

/**
 * Launches the Microsoft Office to edit the specified document.
 * Finds the details of Office URI at https://msdn.microsoft.com/en-us/library/office/dn906146.aspx.
 *
 * @param url - the location of document
 */
function launchWithOFE(url) {
    try {
        var officeUrl = getMicrosoftProtocol(url) + ':ofe|u|' + getBaseUrl() + url;
        window.location = officeUrl;
    } catch (anError) {
        window.alert('Unable to open your Office file. Have you installed MS Office yet?. Read more detail at'
                + ' https://confluence.atlassian.com/display/DOC/Installing+the+Firefox+Add-On+for+the+Office+Connector');
    }
}

function enableEdit(node) {
	node.style.cursor='pointer';
	node.style.backgroundColor='#cccccc';
	node.style.color='';
}

function disableEdit(node) {
    node.style.cursor='';
	node.style.backgroundColor='#ffffff';
	node.style.color='#ffffff';
}

// The AMD check and shim are done to preserve backwards compatibility
// (as other things may be dependent on these functions being global).
if (typeof define !== "undefined") {
    define('office-connector/edit-in-office', [], function () {
        return  {
            getProgID: getProgID,
            doEditInOffice: doEditInOffice
        };
    });
}
}catch(e){WRMCB(e)};