WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:space-page-picker-shim', location = 'js/space-page-picker-shim.js' */
define("confluence-inline-tasks/space-page-picker-shim",[],function(){function c(d){var f=d.space;var g=d.page;var e=[];if(f){e=e.concat(_.map(f.split(","),function(h){return"space:"+h}))}if(g){e=e.concat(_.map(g.split(","),function(h){return"page:"+h}))}return e.join(",")}function b(e){var d={page:[],space:[]};if(!e){return d}var f=e.split(",");f.forEach(function(g){var j=g.split(":");var i=j[0];var h=j[1];d[i].push(h)});return d}function a(d){return b(d.val())}return{build:function(d){return Confluence.UI.Components.SpacePagePicker.build(d)},setValue:function(e,d){return Confluence.UI.Components.SpacePagePicker.setValue(e,d)},splitStringToMap:b,combineMapToString:c,getValueAsMap:a}});
}catch(e){WRMCB(e)};