WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:infinite-list', location = 'com/atlassian/confluence/extra/calendar3/components/infinite-list/infinitelist.js' */
define("tc/infinite-list",["jquery","underscore","tc-backbone","exports"],function(d,b,e,a){function c(p){var h=p.$el;var o=p.load;var n=p.$container||d(window);var i=p.body||document.body;var g=p.scrollMargin||300;var k=p.isLoadMoreItems||false;var j=h.data("page-size");var l=j;function f(){o(l,j);l+=j}function m(){var r=k==true?k:h.children().length>=j;var q=i.scrollHeight-n.scrollTop()-g<=n.height();if(r&&q){f()}}n.bind("scroll.list",b.debounce(m,100));m();this.destroy=function(){n.off("scroll.list")}}b.extend(c.prototype,e.Events);a.init=function(f){return new c(f)}});
}catch(e){WRMCB(e)};