WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more.js' */
define("confluence-advanced-macros/get-more",["ajs","jquery","skate","confluence-advanced-macros/get-more-helper"],function(b,e,a,c){return{init:function(){(!window.__skate||!window.__skate.registry||!window.__skate.registry["results-container"])&&a("results-container",{type:a.types.CLASS,events:{"click .more-link":function(b,a,d){c.moreLinkClickHandler(d,a)}}})}}});require("confluence/module-exporter").safeRequire("confluence-advanced-macros/get-more",function(b){b.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:get-more', location = 'com/atlassian/confluence/plugins/macros/advanced/js/filter-control.js' */
define("confluence-advanced-macros/filter-control",["ajs","jquery","skate","confluence-advanced-macros/get-more-helper"],function(b,a,e,f){return{init:function(){(!window.__skate||!window.__skate.registry||!window.__skate.registry["content-filter"])&&e("content-filter",{type:e.types.CLASS,attached:function(c){c=a(c);"select"===c.prop("tagName").toLowerCase()&&c.change(function(){a(".filter-control .waiting-image").removeClass("hidden");var c=a(this);a.get(b.params.changesUrl,{contentType:a(this).val()},
function(d){var d=a(d),b=c.parent();b.parent().siblings(".results-container").children("ul").html(d);a(".waiting-image",b).addClass("hidden");a(".more-link",d).click(function(a){f.moreLinkClickHandler(this,a)})})})}})}}});require("confluence/module-exporter").safeRequire("confluence-advanced-macros/filter-control",function(b){b.init()});
}catch(e){WRMCB(e)};