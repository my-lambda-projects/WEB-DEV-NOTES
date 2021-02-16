WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:querystring', location = 'includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var d="",b;for(b in a)for(var c=0;c<a[b].length;c++)d+="\x26"+b,a[b][c]&&(d+="\x3d"+a[b][c]);return d.substring(1)},parse:function(a){var d={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));a=a.split("\x26");for(var b=0;b<a.length;b++){var c=a[b].split("\x3d");d[c[0]]||(d[c[0]]=[]);d[c[0]].push(a[b].substring(c[0].length+1))}}return d}}});
}catch(e){WRMCB(e)};