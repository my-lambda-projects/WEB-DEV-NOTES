WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:mouse', location = 'includes/js/api/mouse.js' */
define("confluence/api/mouse",["jquery","window"],function(d,e){var b={MotionDetector:function(){this.reset()}};b.MotionDetector.prototype.reset=function(){this._y=this._x=this._handler=null;this.moved=!1};b.MotionDetector.prototype.wait=function(b){var a=this;a._handler||(this.reset(),d(e.top.document).bind("mousemove",a._handler=function(c){if(!a._x&&!a._y)a._x=c.pageX,a._y=c.pageY;else if(c.pageX!==a._x||c.pageY!==a._y)a.unbind(),a.moved=!0,b&&b.call(this,c)}))};b.MotionDetector.prototype.unbind=
function(){this._handler&&(d(e.top.document).unbind("mousemove",this._handler),this.reset())};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/api/mouse","AJS.Mouse");
}catch(e){WRMCB(e)};