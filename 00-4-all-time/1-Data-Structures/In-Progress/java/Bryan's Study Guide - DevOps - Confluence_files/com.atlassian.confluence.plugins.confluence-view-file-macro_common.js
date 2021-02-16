WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/view-file-macro-utils.js' */
define("vfm/view-file-macro-utils",[],function(){return{DEFAULT_HEIGHT:"250",DEFAULT_HEIGHT_IN_COMMENT:"150",THUMBNAIL_STATUS_IN_PROGRESS:202,THUMBNAIL_STATUS_CONVERTED:200,THUMBNAIL_STATUS_ERROR:415,THUMBNAIL_STATUS_BUSY:429,THUMBNAIL_POLLING_PERIOD:1E3,THUMBNAIL_POLLING_BACKOFF_RATIO:1.25,MAP_NICE_TYPE_TO_TEXT:{"pdf document":"PDF","microsoft word document":"Document","microsoft excel spreadsheet":"Spreadsheet",
"microsoft powerpoint presentation":"Presentation","generic file":"File"},getFileNameFromUrl:function(a){if(!a)return"";var b=a.indexOf("#"),b=0<=b?b:a.length,a=a.substring(0,b),b=a.indexOf("?"),b=0<=b?b:a.length,a=a.substring(0,b),b=a.lastIndexOf("/"),a=a.substring(b+1,a.length);return decodeURIComponent(a)},isSupportPointerEvents:function(){var a=document.createElement("x");a.style.cssText="pointer-events:auto";return"auto"===
a.style.pointerEvents},getParameterByName:function(a,b){var c=a.indexOf("#");0<=c&&(a=a.substring(0,c));return(c=RegExp(b+"=([^&]*)","i").exec(a))?decodeURIComponent(c[1]):null},addParamsToUrl:function(a,b){for(var c="",c=-1===a.indexOf("?")?"?":"&",e=Object.keys(b),d=0;d<e.length;d++){var f=e[d],g=b[f];0<d&&(c+="&");c+=f+"="+g}return a+c},getFileTypeTextFromNiceType:function(a){a=a?a.toLowerCase():"";return this.MAP_NICE_TYPE_TO_TEXT[a]?this.MAP_NICE_TYPE_TO_TEXT[a]:a}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/services/conversion-service.js' */
define("vfm/services/conversion-service",["ajs","jquery"],function(d,e){return{postThumbnailConversionResults:function(b){var a=d.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/results",c=Object.keys(b),c=_.map(c,function(a){return{id:a,v:b[a].version}});return e.ajax({type:"POST",url:a,contentType:"application/json",data:JSON.stringify(c)})},getThumbnailUrl:function(b,a){return d.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/"+b+"/"+a}}});
}catch(e){WRMCB(e)};