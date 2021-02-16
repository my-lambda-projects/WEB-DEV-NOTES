WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-user-v5', location = 'v5/js/iframe/host/user.js' */
define("ac/user",function(){return{getUser:function(a){var b=a._context.extension.options.user,c="undefined"===typeof b.uid&&"undefined"===typeof b.ukey?null:AJS.Meta.get("remote-user-fullname")||AJS.Meta.get("current-user-fullname")||null;a({fullName:c,id:b.uid,key:b.ukey})},getCurrentUser:function(a){var b=AJS.Meta.get("atlassian-account-id")||null,c=AJS.Meta.get("account-type")||null;a({atlassianAccountId:b,accountType:c})},getTimeZone:function(a){a(a._context.extension.options.user.timeZone)},
getLocale:function(a){a(AJS.Meta.get("user-locale"))}}});
}catch(e){WRMCB(e)};