WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:raphael', location = 'includes/js/third-party/raphael-spinner.js' */
var Raphael=Raphael||{};Raphael.spinner=function(d,a,e){var b=30*a/60;a={color:e||"#fff",width:13*a/60,radius:b,length:a-b,top:0,left:0,zIndex:0,speed:1.042};var c=$(d);c.spin(a);return function(){c.spinStop()}};Raphael.spinner=AJS.deprecate.fn(Raphael.spinner,"Raphael spinner",{alternativeName:"aui-spinner"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:raphael', location = 'includes/js/amd/shim/raphael-amd.js' */
define("raphael",function(){return Raphael});
}catch(e){WRMCB(e)};