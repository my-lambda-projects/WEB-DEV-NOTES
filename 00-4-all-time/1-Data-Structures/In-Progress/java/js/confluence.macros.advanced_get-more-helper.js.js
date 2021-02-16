WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.macros.advanced:get-more-helper', location = 'com/atlassian/confluence/plugins/macros/advanced/js/get-more-helper.js' */
define("confluence-advanced-macros/get-more-helper",["ajs","jquery"],function(d,e){return{moreLinkClickHandler:function(f,g){var c=e(f),h=c.attr("href"),b=c.closest(".more-link-container");if(!b.length)throw Error("Could not find more link container when one was expected.");b.addClass("loading");e.get(h,function(a){var a=e(a).wrap("<div/>").parent(),c=a.children("ul").children("li");b.closest(".results-container").children("ul").append(c);a=a.find(".more-link-container");0===a.length?b.remove():b.replaceWith(a);
d.PageGadget&&d.PageGadget.contentsUpdated&&d.PageGadget.contentsUpdated()});g.preventDefault()}}});
}catch(e){WRMCB(e)};