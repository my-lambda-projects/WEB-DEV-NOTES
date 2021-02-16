WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = 'includes/js/third-party/jquery.floatingScrollbar.js' */
(function(f){function k(){a&&b.scrollLeft(a.scrollLeft())}function c(){e=a;a=null;d.each(function(){var b=f(this),c=b.offset().top,d=c+b.height(),e=g.scrollTop()+g.height();if(c+30<e&&d>e)return a=b,!1});if(a){var c=a.scrollLeft(),h=a.scrollLeft(90019001).scrollLeft(),l=a.innerWidth(),h=l+h;a.scrollLeft(c);h<=l?b.toggle(!1):(b.toggle(!0),e&&e[0]===a[0]||(e&&e.unbind("scroll",k),a.scroll(k).after(b)),b.css({left:a.offset().left-g.scrollLeft(),width:l}).scrollLeft(c),m.width(h))}else b.toggle(!1)}var g=
f(this);f("html");var d=f([]),a,e,b=f('\x3cdiv id\x3d"floating-scrollbar"\x3e\x3cdiv/\x3e\x3c/div\x3e'),m=b.children();b.css({display:"none",position:"fixed",bottom:0,height:"30px",overflowX:"auto",overflowY:"hidden"}).scroll(function(){a&&a.scrollLeft(b.scrollLeft())});m.css({border:"1px solid #fff",opacity:.01});f.fn.floatingScrollbar=function(a){!1===a?(d=d.not(this),this.unbind("scroll",k),d.length||(b.detach(),g.unbind("resize scroll",c))):this.length&&(d.length||g.resize(c).scroll(c),d=d.add(this));
c();return this};f.floatingScrollbarUpdate=c})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:floating-scrollbar', location = 'includes/js/table-floating-scrollbar.js' */
define("confluence/table-floating-scrollbar",["jquery"],function(a){return{initialize:function(){var b=a(".wiki-content").find(".table-wrap");b.length&&b.floatingScrollbar()}}});require("confluence/module-exporter").safeRequire("confluence/table-floating-scrollbar",function(a){require("ajs").toInit(a.initialize)});
}catch(e){WRMCB(e)};