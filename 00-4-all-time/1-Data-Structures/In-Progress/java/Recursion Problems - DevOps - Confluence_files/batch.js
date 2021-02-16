WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:almond', location = 'includes/js/amd/almond-noconflict-pre.js' */
window.__require=window.require;window.__requirejs=window.requirejs;window.__define=window.define;
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:almond', location = 'includes/js/amd/almond/almond.js' */
var requirejs,require,define;
(function(m){function q(a,b){var c,d,e,f,w,k,n,l,p=b&&b.split("/"),m=h.map,g=m&&m["*"]||{};if(a&&"."===a.charAt(0))if(b){p=p.slice(0,p.length-1);a=p.concat(a.split("/"));for(b=0;b<a.length;b+=1)if(c=a[b],"."===c)a.splice(b,1),--b;else if(".."===c)if(1!==b||".."!==a[2]&&".."!==a[0])0<b&&(a.splice(b-1,2),b-=2);else break;a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((p||g)&&m){c=a.split("/");for(b=c.length;0<b;--b){d=c.slice(0,b).join("/");if(p)for(l=p.length;0<l;--l)if(e=m[p.slice(0,
l).join("/")])if(e=e[d]){f=e;w=b;break}if(f)break;!k&&g&&g[d]&&(k=g[d],n=b)}!f&&k&&(f=k,w=n);f&&(c.splice(0,w,f),a=c.join("/"))}return a}function z(a,b){return function(){return g.apply(m,B.call(arguments,0).concat([a,b]))}}function C(a){return function(b){return q(b,a)}}function D(a){return function(b){e[a]=b}}function u(a){if(l.call(r,a)){var b=r[a];delete r[a];x[a]=!0;v.apply(m,b)}if(!l.call(e,a)&&!l.call(x,a))throw Error("No "+a);return e[a]}function A(a){var b,c=a?a.indexOf("!"):-1;-1<c&&(b=
a.substring(0,c),a=a.substring(c+1,a.length));return[b,a]}function E(a){return function(){return h&&h.config&&h.config[a]||{}}}var v,g,y,t,e={},r={},h={},x={},l=Object.prototype.hasOwnProperty,B=[].slice;y=function(a,b){var c;a=A(a);var d=a[0];a=a[1];d&&(d=q(d,b),c=u(d));d?a=c&&c.normalize?c.normalize(a,C(b)):q(a,b):(a=q(a,b),a=A(a),d=a[0],a=a[1],d&&(c=u(d)));return{f:d?d+"!"+a:a,n:a,pr:d,p:c}};t={require:function(a){return z(a)},exports:function(a){var b=e[a];return"undefined"!==typeof b?b:e[a]=
{}},module:function(a){return{id:a,uri:"",exports:e[a],config:E(a)}}};v=function(a,b,c,d){var g,f,h,k,n=[],q;d=d||a;if("function"===typeof c){b=!b.length&&c.length?["require","exports","module"]:b;for(k=0;k<b.length;k+=1)if(h=y(b[k],d),f=h.f,"require"===f)n[k]=t.require(a);else if("exports"===f)n[k]=t.exports(a),q=!0;else if("module"===f)g=n[k]=t.module(a);else if(l.call(e,f)||l.call(r,f)||l.call(x,f))n[k]=u(f);else if(h.p)h.p.load(h.n,z(d,!0),D(f),{}),n[k]=e[f];else throw Error(a+" missing "+f);
b=c.apply(e[a],n);a&&(g&&g.exports!==m&&g.exports!==e[a]?e[a]=g.exports:b===m&&q||(e[a]=b))}else a&&(e[a]=c)};requirejs=require=g=function(a,b,c,d,e){if("string"===typeof a)return t[a]?t[a](b):u(y(a,b).f);a.splice||(h=a,b.splice?(a=b,b=c,c=null):a=m);b=b||function(){};"function"===typeof c&&(c=d,d=e);d?v(m,a,b,c):setTimeout(function(){v(m,a,b,c)},4);return g};g.config=function(a){h=a;h.deps&&g(h.deps,h.callback);return g};define=function(a,b,c){b.splice||(c=b,b=[]);l.call(e,a)||l.call(r,a)||(r[a]=
[a,b,c])};define.amd={jQuery:!0}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:almond', location = 'includes/js/amd/almond-noconflict-post.js' */
window.__require?(window.require=window.__require,window.requirejs=window.__requirejs,window.define=window.__define):delete window.define.amd;(function(){try{delete window.__require}catch(a){window.__require=void 0}try{delete window.__requirejs}catch(a){window.__requirejs=void 0}try{delete window.__define}catch(a){window.__define=void 0}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:module-exporter', location = 'includes/js/module-exporter.js' */
define("confluence/module-exporter",[],function(){var f={namespace:function(c,e,a){var b=c.split(".");a=a||window;for(var d=0,f=b.length-1;d<f;d++){var g=a[b[d]];a=null!=g?g:a[b[d]]={}}a[b[d]]&&window.console&&window.console.warn&&window.__DEBUG__&&window.console.warn('Value of "'+c+'" was overridden');a[b[d]]=e||a[b[d]]||{};return a[b[d]]},safeRequire:function(c,e){define&&void 0===define.amd&&(c=require(c),e&&e(c))},exportModuleAsGlobal:function(c,e,a){f.safeRequire(c,function(b){f.namespace(e,
b);a&&a(b)})}};return f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:data', location = 'js/data/data.js' */
window.WRM=window.WRM||{};window.WRM._createDataImpl=function(i){i._unparsedData=i._unparsedData||{};i._unparsedErrors=i._unparsedErrors||{};i._claimedData=i._claimedData||{};function g(k){if(!k){return k}return JSON.parse(k)}function j(l,k){return Object.prototype.hasOwnProperty.call(l,k)}var b={};var c={};function h(l,k,m){if(!k){return}if(j(m,l)){return}m[l]=k}function d(m,l,k){var p=l[m];try{var n=g(p);delete l[m];k[m]=true;return n}catch(o){console&&console.log&&console.log("JSON Error parsing data with key "+m+": "+o);return undefined}}function a(n,m,k){var l=function(){try{n(m)}catch(o){console&&console.log&&console.log("Excpetion calling bigpipe callback for "+k+": "+o)}};setTimeout(l,0)}function f(m,q,o,n){for(var l in m){if(j(m,l)){if(j(o,l)){var r=o[l];var p=d(l,m,q);if(typeof p==="undefined"){r=n[l]}delete o[l];delete n[l];if(r){a(r,p,l)}}}}}i._dataArrived=function(){f(i._unparsedData,i._claimedData,b,c);f(i._unparsedData,i._claimedData,c,c)};var e={};e.claim=function(l,k,m){if(!k&&!m){if(j(i._claimedData,l)){console&&console.error&&console.error("Data with key "+l+" has already been claimed")}if(i._unparsedData&&j(i._unparsedData,l)){return d(l,i._unparsedData,i._claimedData)}}else{h(l,k,b);h(l,m,c);i._dataArrived()}};return e};WRM.data=WRM._createDataImpl(WRM);if(typeof define==="function"){define("wrm/data",[],function(){return WRM.data})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path', location = 'js/data/context-path.js' */
(function(){var a=null;(window.AJS||(window.AJS={}));AJS.contextPath=function(){if(a===null){a=WRM.data.claim("com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path.context-path")}if(!a){var b=document.querySelector("meta[name=ajs-context-path]");if(b){a=b.getAttribute("content")}}return a};AJS.contextPath._reset=function(){a=null};if(typeof define==="function"){define("wrm/context-path",[],function(){return AJS.contextPath})}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/curl-config.js' */
(function(){if(!window.WRM){window.WRM={}}window.curl={apiContext:WRM,defineContext:WRM,useCrossOriginAttribute:WRM.data.claim("com.atlassian.plugins.atlassian-plugins-webresource-rest:curl.cross-origin-resources")}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/lib/curl-0.7.3.js' */
(function(a){var P="0.7.3",u="curl",p="define",G,v,g,d=a.document,l=d&&(d.head||d.getElementsByTagName("head")[0]),V=l&&l.getElementsByTagName("base")[0]||null,i={},N={},c={},A="addEventListener" in a?{}:{loaded:1,complete:1},m={},b=m.toString,y,k={},f={},h=false,O,t=/\?|\.js\b/,e=/^\/|^[^:]+:\/\//,L=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,E=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,C=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,M,x;function Q(){}function D(X,W){return b.call(X).indexOf("[object "+W)==0}function B(X){var W;X.path=J(X.path||X.location||"");W=X.main||"./main";if(!n(W)){W="./"+W}X.main=s(W,X.name+"/");X.config=X.config;return X}function n(W){return W.charAt(0)=="."}function j(W){return e.test(W)}function o(X,W){return J(X)+"/"+W}function J(W){return W&&W.charAt(W.length-1)=="/"?W.substr(0,W.length-1):W}function s(ab,X){var ac,W,Z,Y,aa;ac=1;W=ab;if(n(W)){Y=true;W=W.replace(L,function(ad,ae,af,ag){if(af){ac++}return ag||""})}if(Y){Z=X.split("/");aa=Z.length-ac;if(aa<0){return ab}Z.splice(aa,ac);return Z.concat(W||[]).join("/")}else{return W}}function S(X){var W=X.indexOf("!");return{resourceId:X.substr(W+1),pluginId:W>=0&&X.substr(0,W)}}function U(){}function z(X,W){U.prototype=X||m;var Z=new U();U.prototype=m;for(var Y in W){Z[Y]=W[Y]}return Z}function F(){var X,aa,W;X=this;aa=[];function ab(ac,ad,ae){aa.push([ac,ad,ae])}function Y(ag,ad){var af,ac,ae=0;while((af=aa[ae++])){ac=af[ag];if(ac){ac(ad)}}}W=function Z(ad,ac){ab=ad?function(ae,af){ae&&ae(ac)}:function(ae,af){af&&af(ac)};W=Q;Y(ad?0:1,ac);Y=Q;aa=y};this.then=function(ac,ad,ae){ab(ac,ad,ae);return X};this.resolve=function(ac){X.resolved=ac;W(true,ac)};this.reject=function(ac){X.rejected=ac;W(false,ac)};this.progress=function(ac){Y(2,ac)}}function r(W){return W instanceof F}function H(W,Z,X,Y){if(r(W)){return W.then(Z,X,Y)}else{return Z(W)}}function q(Y,X,Z){var W;return function(){if(--Y>=0&&X){W=X.apply(y,arguments)}if(Y==0&&Z){Z(W)}return W}}x={toAbsId:function(ab,aa,W){var Y,X,Z;Y=s(ab,aa);if(n(Y)){return Y}Z=S(Y);X=Z.pluginId;Y=X||Z.resourceId;if(Y in W.pathMap){Y=W.pathMap[Y].main||Y}if(X){if(X.indexOf("/")<0&&!(X in W.pathMap)){Y=o(W.pluginPath,X)}Y=Y+"!"+Z.resourceId}return Y},createContext:function(W,X,ab,aa){var Z;Z=new F();Z.id=X||"";Z.isPreload=aa;Z.depNames=ab;Z.config=W;function ad(ae){return x.toAbsId(ae,Z.id,W)}function ac(ae){return x.resolvePathInfo(ad(ae),W).url}function Y(ag,ak,af){var ae,aj,ai,ah;ae=ak&&function(){ak.apply(y,arguments[0])};if(D(ag,"String")){if(ae){throw new Error("require(id, callback) not allowed")}aj=ad(ag);ai=k[aj];if(!(aj in k)){throw new Error("Module not resolved: "+aj)}ah=r(ai)&&ai.exports;return ah||ai}else{H(x.getDeps(x.createContext(W,Z.id,ag,aa)),ae,af)}}Z.require=Y;Y.toUrl=ac;Z.toAbsId=ad;return Z},createResourceDef:function(W,ad,ab){var aa,X,Z;aa=x.createContext(W,ad,y,ab);X=aa.resolve;Z=q(1,function(af){aa.deps=af;try{return x.executeDefFunc(aa)}catch(ae){aa.reject(ae)}});aa.resolve=function Y(ae){H(ab||h,function(){X((k[aa.id]=f[aa.url]=Z(ae)))})};aa.exportsReady=function ac(ae){H(ab||h,function(){if(aa.exports){Z(ae);aa.progress(N)}})};return aa},createPluginDef:function(W,aa,Z,Y){var X;X=x.createContext(W,Z,y,Y);return X},getCjsRequire:function(W){return W.require},getCjsExports:function(W){return W.exports||(W.exports={})},getCjsModule:function(X){var W=X.module;if(!W){W=X.module={id:X.id,uri:x.getDefUrl(X),exports:x.getCjsExports(X),config:function(){return X.config}};W.exports=W.exports}return W},getDefUrl:function(W){return W.url||(W.url=x.checkToAddJsExt(W.require.toUrl(W.id),W.config))},setApi:function(W){var Y,Z,X,aa,ab,ac;Y=u;Z=p;X=aa=a;ab=" already exists";if(W){ac=W.overwriteApi||W.overwriteApi;Y=W.apiName||W.apiName||Y;X=W.apiContext||W.apiContext||X;Z=W.defineName||W.defineName||Z;aa=W.defineContext||W.defineContext||aa;if(v&&D(v,"Function")){a[u]=v}v=null;if(g&&D(g,"Function")){a[p]=g}g=null;if(!ac){if(X[Y]&&X[Y]!=K){throw new Error(Y+ab)}if(aa[Z]&&aa[Z]!=I){throw new Error(Z+ab)}}}X[Y]=K;aa[Z]=I},config:function(aa){var ab,Z,W,X;if("baseUrl" in aa){aa.baseUrl=aa.baseUrl}if("main" in aa){aa.main=aa.main}if("preloads" in aa){aa.preloads=aa.preloads}if("pluginPath" in aa){aa.pluginPath=aa.pluginPath}if("dontAddFileExt" in aa||aa.dontAddFileExt){aa.dontAddFileExt=new RegExp(aa.dontAddFileExt||aa.dontAddFileExt)}ab=G;Z=z(ab,aa);Z.pathMap=z(ab.pathMap);W=aa.plugins||{};Z.plugins=z(ab.plugins);Z.paths=z(ab.paths,aa.paths);Z.packages=z(ab.packages,aa.packages);Z.pathList=[];function ac(af,am){var ah,aj,al,ak,an,ai;for(var ag in af){al=af[ag];if(D(al,"String")){al={path:af[ag]}}al.name=al.name||ag;an=Z;ak=S(J(al.name));ah=ak.resourceId;aj=ak.pluginId;if(aj){an=W[aj];if(!an){an=W[aj]=z(Z);an.pathMap=z(Z.pathMap);an.pathList=[]}delete af[ag]}if(am){ai=B(al);if(ai.config){ai.config=z(Z,ai.config)}}else{ai={path:J(al.path)}}ai.specificity=ah.split("/").length;if(ah){an.pathMap[ah]=ai;an.pathList.push(ah)}else{an.baseUrl=x.resolveUrl(al.path,Z)}}}function ad(af){var ag=af.pathMap;af.pathRx=new RegExp("^("+af.pathList.sort(function(ai,ah){return ag[ah].specificity-ag[ai].specificity}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete af.pathList}ac(aa.packages,true);ac(aa.paths,false);for(X in W){var Y=x.toAbsId(X+"!","",Z);Z.plugins[Y.substr(0,Y.length-1)]=W[X]}W=Z.plugins;for(X in W){W[X]=z(Z,W[X]);var ae=W[X].pathList;if(ae){W[X].pathList=ae.concat(Z.pathList);ad(W[X])}}for(X in ab.pathMap){if(!Z.pathMap.hasOwnProperty(X)){Z.pathList.push(X)}}ad(Z);return Z},checkPreloads:function(W){var X;X=W&&W.preloads;if(X&&X.length>0){H(h,function(){h=x.getDeps(x.createContext(G,y,X,true))})}},resolvePathInfo:function(Z,X){var Y,ab,aa,W;Y=X.pathMap;if(!j(Z)){aa=Z.replace(X.pathRx,function(ac){ab=Y[ac]||{};W=ab.config;return ab.path||""})}else{aa=Z}return{config:W||G,url:x.resolveUrl(aa,X)}},resolveUrl:function(Y,W){var X=W.baseUrl;return X&&!j(Y)?o(X,Y):Y},checkToAddJsExt:function(X,W){return X+((W||G).dontAddFileExt.test(X)?"":".js")},loadScript:function(Z,ab,X){var Y=d.createElement("script");if(G.useCrossOriginAttribute){var ac;if(typeof window.URL==="function"){ac=new window.URL(Z.url,document.location)}else{ac=document.createElement("a");ac.href=Z.url;ac.href=ac.href}if(ac.protocol!==document.location.protocol||ac.hostname!==document.location.hostname||ac.port!==document.location.port){Y.crossorigin="anonymous"}}function aa(ad){ad=ad||a.event;if(ad.type=="load"||A[Y.readyState]){delete c[Z.id];Y.onload=Y.onreadystatechange=Y.onerror="";ab()}}function W(ad){X(new Error("Syntax or http error: "+Z.url))}Y.onload=Y.onreadystatechange=aa;Y.onerror=W;Y.type=Z.mimetype||"text/javascript";Y.charset="utf-8";Y.async=!Z.order;Y.src=Z.url;c[Z.id]=Y;l.insertBefore(Y,V);return Y},extractCjsDeps:function(X){var Y,W=[],Z;Y=typeof X=="string"?X:X.toSource?X.toSource():X.toString();Y.replace(E,"").replace(C,function(aa,ac,ab){if(ab){Z=Z==ab?y:Z}else{if(!Z){W.push(ac)}}return""});return W},fixArgs:function(X){var ac,aa,Y,ab,W,Z;W=X.length;Y=X[W-1];ab=D(Y,"Function")?Y.length:-1;if(W==2){if(D(X[0],"Array")){aa=X[0]}else{ac=X[0]}}else{if(W==3){ac=X[0];aa=X[1]}}if(!aa&&ab>0){Z=true;aa=["require","exports","module"].slice(0,ab).concat(x.extractCjsDeps(Y))}return{id:ac,deps:aa||[],res:ab>=0?Y:function(){return Y},cjs:Z}},executeDefFunc:function(Y){var X,W;W=Y.cjs?Y.exports:y;X=Y.res.apply(W,Y.deps);if(X===y&&Y.exports){X=Y.module?(Y.exports=Y.module.exports):Y.exports}return X},defineResource:function(X,W){X.res=W.res;X.cjs=W.cjs;X.depNames=W.deps;x.getDeps(X)},getDeps:function(X){var ab,af,ai,ad,ag,aa,W,aj,ah;ai=[];af=X.depNames;ad=af.length;if(af.length==0){Y()}function ae(am,ak,al){ai[ak]=am;if(al){aj(am,ak)}}aj=q(ad,ae,ac);ah=q(ad,ae,Y);for(ab=0;ab<ad;ab++){W=af[ab];if(W in M){ah(M[W](X),ab,true);if(X.exports){X.progress(i)}}else{if(!W){ah(y,ab,true)}else{Z(W,ab)}}}return X;function Z(am,al){var an,ak,ap,ao;an=q(1,function(aq){ak(aq);ah(aq,al)});ak=q(1,function(aq){aj(aq,al)});ap=x.fetchDep(am,X);ao=r(ap)&&ap.exports;if(ao){ak(ao)}H(ap,an,X.reject,X.exports&&function(aq){if(ap.exports){if(aq==i){ak(ap.exports)}else{if(aq==N){an(ap.exports)}}}})}function Y(){X.resolve(ai)}function ac(){X.exportsReady&&X.exportsReady(ai)}},fetchResDef:function(W){x.getDefUrl(W);x.loadScript(W,function(){var X=O;O=y;if(W.useNet!==false){if(!X||X.ex){W.reject(new Error(((X&&X.ex)||"define() missing or duplicated: "+W.url)))}else{x.defineResource(W,X)}}},W.reject);return W},fetchDep:function(ai,X){var W,Z,ae,ab,ah,ad,aa,aj,af,Y,ac,ag;W=X.toAbsId;Z=X.isPreload;ae=X.config||G;ab=S(W(ai));aj=ab.resourceId;ah=ab.pluginId||aj;af=x.resolvePathInfo(ah,ae);if(ab.pluginId){ad=ah}else{ad=af.config.moduleLoader||af.config.moduleLoader;if(ad){aj=ah;ah=ad;af=x.resolvePathInfo(ad,ae)}}if(ah in k){Y=k[ah]}else{if(af.url in f){Y=k[ah]=f[af.url]}else{Y=x.createResourceDef(af.config,ah,Z);Y.url=x.checkToAddJsExt(af.url,af.config);k[ah]=f[af.url]=Y;x.fetchResDef(Y)}}if(ah==ad){ac=new F();ag=ae.plugins[ad]||ae;H(Y,function(am){var ao,ak,an;an=am.dynamic;if("normalize" in am){aj=am.normalize(aj,W,Y.config)||""}else{aj=W(aj)}ak=ad+"!"+aj;ao=k[ak];if(!(ak in k)){ao=x.createPluginDef(ag,ak,aj,Z);if(!an){k[ak]=ao}var al=function(ap){ao.resolve(ap);if(!an){k[ak]=ap}};al.resolve=al;al.reject=al.error=ao.reject;am.load(aj,ao.require,al,ag)}if(ac!=ao){H(ao,ac.resolve,ac.reject,ac.progress)}},ac.reject)}return ac||Y},getCurrentDefName:function(){var W;if(!D(a.opera,"Opera")){for(var X in c){if(c[X].readyState=="interactive"){W=X;break}}}return W}};M={require:x.getCjsRequire,exports:x.getCjsExports,module:x.getCjsModule};function K(){var X=[].slice.call(arguments),W;if(D(X[0],"Object")){W=X.shift();R(W)}return new w(X[0],X[1],X[2])}function R(W){if(W){x.setApi(W);G=x.config(W);x.checkPreloads(W);if("main" in W){setTimeout(function(){var X;X=x.createContext(G,y,[].concat(W.main));x.getDeps(X)},0)}}}function w(Y,ab,X,aa){var Z,W;W=x.createContext(G,y,[].concat(Y));this["then"]=Z=function(ac,ad){H(W,function(ae){if(ac){ac.apply(y,ae)}},function(ae){if(ad){ad(ae)}else{throw ae}});return this};this["next"]=function(ae,ac,ad){return new w(ae,ac,ad,W)};this["config"]=R;if(ab||X){Z(ab,X)}H(aa,function(){x.getDeps(W)})}K.version=P;K.config=R;function T(W){var Z,X,Y;Z=W.id;if(Z==y){if(O!==y){O={ex:"Multiple anonymous defines in url"}}else{if(!(Z=x.getCurrentDefName())){O=W}}}if(Z!=y){X=k[Z];if(!(Z in k)){Y=x.resolvePathInfo(Z,G);X=x.createResourceDef(Y.config,Z);k[Z]=X}if(!r(X)){throw new Error("duplicate define: "+Z)}X.useNet=false;x.defineResource(X,W)}}function I(){var W=x.fixArgs(arguments);T(W)}I.amd={plugins:true,jQuery:true,curl:P};G={baseUrl:"",pluginPath:"curl/plugin",dontAddFileExt:t,paths:{},packages:{},plugins:{},pathMap:{},pathRx:/$^/};v=a[u];g=a[p];if(!v||D(v,"Function")){x.setApi()}else{a[u]=y;R(v)}k[u]=K;k["curl/_privileged"]={core:x,cache:k,config:function(){return G},_define:T,_curl:K,Promise:F}}(this.window||(typeof global!="undefined"&&global)||this));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/lib/curl-css-0.7.3.js' */
(function(B){var z="createElement",s="parentNode",f=B.setTimeout,H=B.document,k,x=H&&H.createStyleSheet&&!(H.documentMode>=10),v=[],u=[],C=[],i=12,F,g="HTTP or network error.",l={};if(H){k=H.head||H.getElementsByTagName("head")[0];if(x){F=c}else{F=t}}function q(J,I){l[J]=l[J]||I}function y(){var I;I=H[z]("link");I.rel="stylesheet";I.type="text/css";return I}function r(J,I){J.onload=function(){q("load",true);I()}}function n(J,I){J.onerror=function(){q("error",true);I()}}function c(K,I,M){var L;C.push({url:K,cb:I,eb:function J(){M(new Error(g))}});L=h();if(L){m(L)}}function m(K){var J,I;J=C.shift();I=K.styleSheet;if(J){K.onload=function(){J.cb(J.ss);m(K)};K.onerror=function(){J.eb();m(K)};J.ss=I.imports[I.addImport(J.url)]}else{e(K);G(K)}}function G(I){u.push(I)}function h(){var I;I=u.shift();if(!I&&v.length<i){I=H.createElement("style");v.push(I);k.appendChild(I)}return I}function b(L){var K,J,M;if(!L.href||!o()){return false}K=false;try{J=L.sheet;if(J){M=J.cssRules;K=M===null;if(!K&&M){J.insertRule("-curl-css-test {}",0);J.deleteRule(0);K=true}}}catch(I){K=Object.prototype.toString.call(window.opera)!="[object Opera]"&&/security|denied/i.test(I.message)}return K}function e(I){I.onload=I.onerror=j}function w(I){return I.onload==j||!I.onload}function E(J,K,I){if(l.load){return}if(b(J)){I(J.sheet)}else{if(!w(J)){f(function(){E(J,K,I)},K)}}}function A(J,K,I){if(l.error){return}}function p(J,L,I){function K(){if(w(J)){return}e(J);I(J.sheet)}r(J,K);E(J,L,K)}function D(K,L,I){function J(){if(w(K)){return}e(K);I(new Error(g))}n(K,J);A(K,L,J)}function t(K,J,L,N){var M;M=y();p(M,N,J);D(M,N,L);M.href=K;var I=H.getElementById("__wrm_injection_point")||k;I.appendChild(M)}function d(I){function J(){if(o()){I()}else{f(J,10)}}J()}function o(){return !H.readyState||H.readyState=="complete"}function a(I,J){return I.lastIndexOf(".")<=I.lastIndexOf("/")?I+"."+J:I}function j(){}WRM.define("curl/plugin/css",{normalize:function(N,J){var L,M;if(!N){return N}L=[N];M=[];for(var K=0,I=L.length;K<I;K++){M.push(J(L[K]))}return M.join(",")},load:function(R,L,U,K){var Q,J,V,S,M,O;Q=[];J=[R||""];V=K.cssWatchPeriod||50;S=K.cssNoWait;M=J.length;function N(W){if(J.length>1){Q.push(W)}if(--M==0){U(J.length==1?W:Q)}}function P(X){var W;W=U.reject||function(Y){throw Y};W(X)}for(O=0;O<J.length;O++){R=J[O];var I,T;I=a(L.toUrl(R),"css");if(S){T=y();T.href=I;k.appendChild(T);N(T.sheet||T.styleSheet)}else{F(I,N,P,V)}}},"plugin-builder":"./builder/css",pluginBuilder:"./builder/css"})})(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:curl', location = 'js/wrm/lib/curl-js-0.7.3.js' */
(function(b,c,a){WRM.define("curl/plugin/js",["curl/_privileged"],function(m){var f={},j=[],h=c&&c.createElement("script").async==true,l,k,g;l=m.Promise;function i(n,o){return n.lastIndexOf(".")<=n.lastIndexOf("/")?n+"."+o:n}function e(o,u,q){var v,s,p;v=new Date().valueOf()+(o.timeoutMsec||300000);function n(){s=true;if(o.exports){o.resolved=a(o.exports)}if(!o.exports||o.resolved){u(p)}else{q()}}function r(w){s=true;q(w)}function t(){if(!s){if(v<new Date()){q()}else{setTimeout(t,10)}}}if(q&&o.exports){setTimeout(t,10)}p=m.core.loadScript(o,n,r)}function d(n,o){e(n,function(){var p=j.shift();k=j.length>0;if(p){d.apply(null,p)}o.resolve(n.resolved||true)},function(p){o.reject(p)})}return{dynamic:true,normalize:function(q,p,o){var n=q.indexOf("!");return n>=0?p(q.substr(0,n))+q.substr(n):p(q)},load:function(o,r,w,q){var s,t,u,v,n,p,y;s=o.indexOf("!order")>0;t=o.indexOf("!exports=");u=t>0&&o.substr(t+9);v="prefetch" in q?q.prefetch:true;o=s||t>0?o.substr(0,o.indexOf("!")):o;n=i(r.toUrl(o),"js");function x(z){(w.error||function(A){throw A})(z)}if(n in f){if(f[n] instanceof l){f[n].then(w,x)}else{w(f[n])}}else{p={name:o,url:n,order:s,exports:u,timeoutMsec:q.timeout};f[n]=y=new l();y.then(function(z){f[n]=z;w(z)},x);if(s&&!h&&k){j.push([p,y]);if(v){p.mimetype="text/cache";e(p,function(z){z&&z.parentNode.removeChild(z)},function(){});p.mimetype=""}}else{k=k||s;d(p,y)}}}}})}(this,this.document,function(){try{return eval(arguments[0])}catch(ex){return}}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/jquery.js' */
WRM.define("wrm/jquery",function(){if(typeof AJS!=="undefined"&&typeof AJS.$!=="undefined"){return AJS.$}if(typeof $!=="undefined"){return $}if(typeof jQuery!=="undefined"){return jQuery}console.error("Could not find AJS.$, $ or jQuery, which is required by WRM")});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/underscore.js' */
WRM.define("wrm/_",function(){var a={filter:function(f,d){var b=[];for(var c=0;c<f.length;++c){var e=f[c];if(d(e)){b.push(e)}}return b},map:function(d,c){var e=[];for(var b=0;b<d.length;++b){e.push(c(d[b]))}return e},each:function(d,c){if(d.length===+d.length){for(var b=0;b<d.length;++b){c(d[b])}}else{for(var e in d){if(d.hasOwnProperty(e)){c(d[e],e)}}}},bind:function(c,b){return function(){c.apply(b,Array.prototype.slice.call(arguments))}},isArray:function(b){return Object.prototype.toString.call(b)=="[object Array]"},isUndefined:function(b){return b===void 0},isNull:function(b){return b===null}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/builder.js' */
WRM.define("wrm/builder",function(){var a=function(){this.wrmKeyAttribute="data-wrm-key";this.wrmBatchTypeAttribute="data-wrm-batch-type"};a.prototype={initialize:function(c){var b=c.querySelectorAll("script[data-wrm-key][data-wrm-batch-type]"),d=c.querySelectorAll("link[data-wrm-key][data-wrm-batch-type]"),e={modules:[],contexts:[]};this._inspectTagArray(b,e);this._inspectTagArray(d,e);return e},_inspectTagArray:function(e,b){for(var d=0;d<e.length;d++){var c=e[d];this.addResource(c.getAttribute(this.wrmKeyAttribute),c.getAttribute(this.wrmBatchTypeAttribute),b)}},addResource:function(g,e,b){var f=g.split(",");for(var d=0;d<f.length;d++){var c=f[d];if(c[0]==="-"){continue}if(e==="resource"){this._addToLoadedList(b.modules,c)}else{if(e==="context"){this._addToLoadedList(b.contexts,c)}else{console.warn("Unknown batch type: "+e)}}}},_addToLoadedList:function(c,b){if(c.indexOf(b)!==-1){return}c.push(b)}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/ie-only-filter.js' */
WRM.define("wrm/ie-only-filter",["wrm/jquery","wrm/_"],function(c,a){function b(d){var e=c.browser.msie;return a.filter(d,function(f){return f.ieOnly?e:true})}return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/conditional-comment-filter.js' */
WRM.define("wrm/conditional-comment-filter",["wrm/jquery","wrm/_"],function(c,a){function b(e){var f=c.browser.msie;var d=c.browser.version;return a.filter(e,function(h){var g=h.conditionalComment;if(!g){return true}if(!f||d>9){return false}g=g.toLowerCase();switch(g){case"ie":return true;case"lt ie 9":return d<9;case"lte ie 9":return d<=9;case"ie 9":return d==9;case"gt ie 9":return d>9;case"gte ie 9":return d>=9;case"lt ie 8":return d<8;case"lte ie 8":return d<=8;case"ie 8":return d==8;case"gt ie 8":return d>8;case"gte ie 8":return d>=8;default:console.warn("Cannot parse conditional comment "+g);return false}})}return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/require-handler.js' */
WRM.define("wrm/require-handler",["wrm/jquery","wrm/_","wrm/builder","wrm/conditional-comment-filter","wrm/ie-only-filter"],function(d,h,i,g,a){var e=/^wr!(.*)$/,c=/^wrc!(.*)$/,f=/^.+!/;var b=function(){this._requireCache={};this._requestedResources={contexts:[],webResources:[],excludedContexts:[],excludedWebResources:[]};this._requestInFlight=false;this._requestWaiting=false};b.prototype={require:function(n,j){if(!h.isArray(n)){n=[n]}if(!this._requireCache.hasOwnProperty(n)){var k=d.Deferred();function l(){this._resolveAsync(n).then(k.resolve,k.reject)}var m=window.WRM&&window.WRM.InOrderLoader;if(m!==undefined){m.registerAllResolvedCallback(l.bind(this))}else{l.call(this)}this._requireCache[n]=k.promise()}var o=this._requireCache[n];if(j){o.done(function(){j.apply(this,arguments)})}return o},forceRequire:function(o,l,j){if(!h.isArray(o)){o=[o]}var k=d.Deferred();function m(){this._resolveAsync(o,l).then(k.resolve,k.reject)}var n=window.WRM&&window.WRM.InOrderLoader;if(n!==undefined){n.registerAllResolvedCallback(m.bind(this))}else{m.call(this)}var p=k.promise();if(j){p.done(function(){j.apply(this,arguments)})}return p},_resolveAsync:function(m,k){this._addToRequestedResources(m,k);var j=d.Deferred();var l=this;if(this._requestInFlight===false){this._requestInFlight=this._getScriptsForResources().done(this._processResourceResponse.bind(this,j,m))}else{if(this._requestWaiting===false){this._requestWaiting=j;this._requestInFlight.done(function(){l._requestInFlight=l._getScriptsForResources().done(l._processResourceResponse.bind(l,j,m));l._requestWaiting=false})}else{return this._requestWaiting.promise()}}return j.promise()},_processResourceResponse:function(s,k,n){this._requestInFlight=false;var q=this;if(n.unparsedData){window.WRM._unparsedData||(window.WRM._unparsedData={});h.each(n.unparsedData,function(u,t){window.WRM._unparsedData[t]=u});window.WRM._dataArrived()}if(n.unparsedErrors){window.WRM._unparsedErrors||(window.WRM._unparsedErrors={});h.each(n.unparsedErrors,function(u,t){window.WRM._unparsedErrors[t]=u});window.WRM._dataArrived()}var l=[];var o=[];var r=this._filter(n.resources);for(var p=0;p<r.length;++p){var m=r[p];var j=m.url;if(!this._isDarkFeatureEnabled("wrm.disable.duplicate.resource.download.fix")){this._builder.addResource(m.key,m.batchType,this._loadedResources)}if(m.resourceType==="JAVASCRIPT"){if(!this._isJSInInitLoad(j)){l.push("js!"+j+"!order")}}else{if(m.resourceType==="CSS"){if(!this._isCSSInInitLoad(j)){if(m.media&&"all"!==m.media){o.push(m)}else{l.push("css!"+j)}}}else{console.warn("Unknown resource type required: "+j)}}}WRM.curl(l,function(){h.each(o,function(u){q._loadCssImmediate(u)});var t=h.map(k,function(){return window});s.resolveWith(q,t)},function(){s.rejectWith(q,arguments)})},_loadCssImmediate:function(k){console.warn("Asynchronously loading a CSS resource containing a media query: "+k.url);var j='<link rel="stylesheet" type="text/css" href="'+k.url+'" media="'+k.media+'" />';d(j).appendTo("head")},_getScriptsForResources:function(){if(!this._builder){this._builder=new i();this._loadedResources=this._builder.initialize(document)}else{this._updateLoadedResourcesFromDom()}var m=this;var l=this._loadedResources.contexts.filter(function(n){return m._requestedResources.excludedContexts.indexOf(n)<0});var k=this._loadedResources.modules.filter(function(n){return m._requestedResources.excludedWebResources.indexOf(n)<0&&m._requestedResources.webResources.indexOf(n)<0});var j=d.Deferred();d.ajax({url:AJS.contextPath()+"/rest/webResources/1.0/resources",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({r:this._requestedResources.webResources,c:this._requestedResources.contexts,xc:l,xr:k}),success:j.resolve,error:j.reject});this._requestedResources.webResources=[];this._requestedResources.contexts=[];this._requestedResources.excludedWebResources=[];this._requestedResources.excludedContexts=[];return j.promise()},_updateLoadedResourcesFromDom:function(){function k(l,m){h.each(l,function(n){if(m.indexOf(n)===-1){m.push(n)}})}var j=this._builder.initialize(document);k(j.modules,this._loadedResources.modules);k(j.contexts,this._loadedResources.contexts)},_addToRequestedResources:function(l,j){var k=this;j=j||{};h.each(l,function(n){var m;if(m=n.match(e)){k._requestedResources.webResources.push(m[1])}else{if(m=n.match(c)){k._requestedResources.contexts.push(m[1])}else{k._requestedResources.webResources.push(n.replace(f,""))}}});this._requestedResources.excludedWebResources=j.webResources||[];this._requestedResources.excludedContexts=j.contexts||[]},_isJSInInitLoad:function(j){return d("script[src='"+j+"']").length>0},_isCSSInInitLoad:function(j){return d("link[href='"+j+"']").length>0},_filter:function(k){if(!this._filters){this._filters=[g,a]}var j=k;h.each(this._filters,function(l){j=l(j)});return j},_isDarkFeatureEnabled:function(l){if(typeof AJS!=="undefined"&&typeof AJS.DarkFeatures!=="undefined"&&typeof AJS.DarkFeatures.isEnabled!=="undefined"){return AJS.DarkFeatures.isEnabled(l)}else{var k=document.querySelector("meta[name=ajs-enabled-dark-features]");var j;if(!k){return false}else{j=k.content?k.content.split(","):[]}return d.inArray(l,j)!==-1}}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager', location = 'js/wrm/index.js' */
WRM.curl(["wrm/require-handler"],function(b){var a;WRM.require=function(d,c){if(!a){a=new b()}return a.require(d,c)};WRM.forceRequire=function(e,d,c){if(!a){a=new b()}return a.forceRequire(e,d,c)};if(typeof define==="function"){define("wrm/require",[],function(){return WRM.require})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:jquery-compatibility', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-compatibility.js' */
jQuery.noConflict();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-polyfills-console', location = 'node_modules/@atlassian/aui/src/js/aui/polyfills/console.js' */
("undefined"===typeof window?global:window).__a461efa39b15087f73e08d16fa950b75=function(){"use strict";"undefined"===typeof window.console?window.console={messages:[],log:function(a){this.messages.push(a)},show:function(){alert(this.messages.join("\n"));this.messages=[]}}:window.console.show=function(){};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-jquery', location = 'node_modules/@atlassian/aui/src/js/aui/jquery.js' */
("undefined"===typeof window?global:window).__02fa0d2334b5d2f9701871403ba9d89a=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=window.jQuery||window.Zepto;return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-create-element', location = 'node_modules/@atlassian/aui/src/js/aui/create-element.js' */
("undefined"===typeof window?global:window).__01db7ce34e68627374f5aab9301b195d=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=__02fa0d2334b5d2f9701871403ba9d89a,c=b&&b.__esModule?b:{"default":b};a.default=function(){var a=null;arguments.length&&"string"===typeof arguments[0]&&(a=(0,c.default)(document.createElement(arguments[0])),2===arguments.length&&a.html(arguments[1]));"undefined"!==typeof console&&console.warn&&console.warn("AJS's create element functionality has been deprecated since 5.9.0.\nNo alternative will be provided.\nUse document.createElement() or jQuery.parseHTML(), or preferably use a templating library.");
return a};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-object-assign-4.0.1-index', location = 'node_modules/object-assign/index.js' */
("undefined"===typeof window?global:window).__ce3c81d18ca8862f1035a60e94d5acdc=function(){var h={},i=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;return h=Object.assign||function(e,h){var a,d;if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");d=Object(e);for(var b,f=1;f<arguments.length;f++){a=Object(arguments[f]);for(var g in a)i.call(a,g)&&(d[g]=a[g]);if(Object.getOwnPropertySymbols){b=Object.getOwnPropertySymbols(a);for(var c=
0;c<b.length;c++)j.call(a,b[c])&&(d[b[c]]=a[b[c]])}}return d}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-globalize', location = 'node_modules/@atlassian/aui/src/js/aui/internal/globalize.js' */
("undefined"===typeof window?global:window).__fb27ffae84b96c14bf339e62cefcf116=function(){function d(){return e.default.apply(void 0,arguments)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.default=function(a,b){window[c]!==d&&(window[c]=(0,f.default)(d,window[c]));return window[c][a]=b};var a=__01db7ce34e68627374f5aab9301b195d,e=a&&a.__esModule?a:{"default":a},f=(a=__ce3c81d18ca8862f1035a60e94d5acdc)&&a.__esModule?a:{"default":a},c="AJS";return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-deprecation', location = 'node_modules/@atlassian/aui/src/js/aui/internal/deprecation.js' */
("undefined"===typeof window?global:window).__9ea35e3451360b72ebe8cb8006239936=function(){function k(){"undefined"!==typeof console&&console.warn&&Function.prototype.apply.call(console.warn,console,arguments)}function h(c,b){if("function"===typeof c)return c;var a=!1,b=b||{};return function(d){var d=d?d:1,f=Error();(f=(f=f.stack||f.stacktrace)&&f.replace(/^Error\n/,"")||"")?(f=f.split("\n"),d=f[d+2]):d=f;d=d||"";if(!a||-1===n.indexOf(d)){n.push(d);a=!0;var f="DEPRECATED "+(b.deprecationType+" "||
"")+"- ",e;e=c;e=(e+="")?e.charAt(0).toUpperCase()+e.substring(1):"";f=f+e+" has been deprecated"+(b.sinceVersion?" since "+b.sinceVersion:"")+" and will be removed in "+(b.removeInVersion||"a future release")+".";b.alternativeName&&(f+=" Use "+b.alternativeName+" instead. ");b.extraInfo&&(f+=" "+b.extraInfo);d=""===d?" \n No stack trace of the deprecated usage is available in your current browser.":" \n "+d;b.extraObject?k(f+"\n",b.extraObject,d):k(f,d)}}}function o(c,b){var a=c.options.displayName,
a=a?" ("+a+")":"",d=l.default.extend({deprecationType:"CSS",extraObject:b},c.options);h("'"+c.selector+"' pattern"+a,d)()}function i(c,b,a){a=a||{};a.deprecationType=a.deprecationType||"JS";var d=h(b||c.name||"this function",a);return function(){d();return c.apply(this,arguments)}}function p(c,b,a){a=a||{};a.deprecationType=a.deprecationType||"JS";b=i(c,b,a);b.prototype=c.prototype;l.default.extend(b,c);return b}function m(c,b,a){if("function"===typeof c[b])a=a||{},a.deprecationType=a.deprecationType||
"JS",c[b]=i(c[b],a.displayName||b,a);else if(j){var d=c[b],a=a||{};a.deprecationType=a.deprecationType||"JS";var e=h(a.displayName||b,a);Object.defineProperty(c,b,{get:function(){e();return d},set:function(a){d=a;e();return a}})}}function q(c,b,a){var a=a||{},d;for(d in c)t.call(c,d)&&(a.deprecationType=a.deprecationType||"JS",a.displayName=b+d,a.alternativeName=a.alternativeNamePrefix&&a.alternativeNamePrefix+d,m(c,d,l.default.extend({},a)))}function u(c){return function(b){var a={selector:b,options:c||
{}};r.push(a);for(var b=document.querySelectorAll(b),d=0;d<b.length;d++)o(a,b[d])}}function s(c,b){window.MutationObserver?("string"===typeof c&&(c=[c]),c.forEach(u(b))):k("CSS could not be deprecated as Mutation Observer was not found.")}function v(c){return function(b){(c.matches||c.msMatchesSelector||c.webkitMatchesSelector||c.mozMatchesSelector||c.oMatchesSelector).call(c,b.selector)&&o(b,c)}}var e={};"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getMessageLogger=e.propertyDeprecationSupported=
e.obj=e.prop=e.css=e.construct=e.fn=void 0;var g=__02fa0d2334b5d2f9701871403ba9d89a,l=g&&g.__esModule?g:{"default":g},g=(g=__fb27ffae84b96c14bf339e62cefcf116)&&g.__esModule?g:{"default":g},t=Object.prototype.hasOwnProperty,n=[],r=[],j=!1;try{Object.defineProperty&&(Object.defineProperty({},"blam",{get:function(){},set:function(){}}),e.propertyDeprecationSupported=j=!0)}catch(x){}window.MutationObserver&&(new MutationObserver(function(c){c.forEach(function(b){for(var b=b.addedNodes,a=0;a<b.length;a++){var c=
b[a];1===c.nodeType&&r.forEach(v(c))}})})).observe(document,{childList:!0,subtree:!0});var w={fn:i,construct:p,css:s,prop:m,obj:q,propertyDeprecationSupported:j,getMessageLogger:h};(0,g.default)("deprecate",w);e.fn=i;e.construct=p;e.css=s;e.prop=m;e.obj=q;e.propertyDeprecationSupported=j;e.getMessageLogger=h;return e}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-polyfills-custom-event', location = 'node_modules/@atlassian/aui/src/js/aui/polyfills/custom-event.js' */
("undefined"===typeof window?global:window).__2e94b36d616dffee0a6f911bf22a83ae=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=void 0;a:{if(window.CustomEvent)try{var c=new window.CustomEvent("name",{bubbles:!1,cancelable:!0,detail:{x:"y"}});c.preventDefault();if(!0!==c.defaultPrevented)throw Error("Could not prevent default");if("name"!==c.type)throw Error("Could not set custom name");if("y"!==c.detail.x)throw Error("Could not set detail");a=window.CustomEvent;
break a}catch(e){}a=function(b,d){var d=d||{bubbles:!1,cancelable:!1,detail:void 0},a=document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,d.detail);var c=a.preventDefault;a.preventDefault=function(){c.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(a){this.defaultPrevented=!0}};return a};a.prototype=window.Event.prototype}b.default=a;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-constants', location = 'node_modules/skatejs/lib/constants.js' */
("undefined"===typeof window?global:window).__cd984629a8bd8a7cc9535b6f28b473c3=function(){var d={exports:{}},e=d.exports,i={module:d,exports:e},a;a=function(f,a,g){var c=("undefined"===typeof window?global:window).define,b,h,g=[g,a,f].filter(function(a){return"function"===typeof a})[0],a=[a,f,[]].filter(Array.isArray)[0];b=g.apply(null,a.map(function(a){return i[a]}));h=typeof b;"function"===typeof c&&c("string"===typeof f?f:"__cd984629a8bd8a7cc9535b6f28b473c3",a,g);"string"===h?b=String(b):"number"===
h?b=Number(b):"boolean"===h&&(b=Boolean(b));void 0!==b&&(e=d.exports=b)};a.amd=!0;var c=function(a){Object.defineProperty(a,"__esModule",{value:!0});a.ATTR_IGNORE="data-skate-ignore";a.TYPE_ATTRIBUTE="a";a.TYPE_CLASSNAME="c";a.TYPE_ELEMENT="t"};"function"===typeof a&&a.amd?a(["exports"],c):"undefined"!==typeof e&&c(e);return d.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-version', location = 'node_modules/skatejs/lib/version.js' */
("undefined"===typeof window?global:window).__df4a18515ffe51f8d082b078c23957f4=function(){var d={exports:{}},f=d.exports,i={module:d,exports:f},a;a=function(a,c,g){var e=("undefined"===typeof window?global:window).define,b,h,g=[g,c,a].filter(function(a){return"function"===typeof a})[0],c=[c,a,[]].filter(Array.isArray)[0];b=g.apply(null,c.map(function(a){return i[a]}));h=typeof b;"function"===typeof e&&e("string"===typeof a?a:"__df4a18515ffe51f8d082b078c23957f4",c,g);"string"===h?b=String(b):"number"===
h?b=Number(b):"boolean"===h&&(b=Boolean(b));void 0!==b&&(f=d.exports=b)};a.amd=!0;var e=function(a,c){c.exports="0.13.17"};"function"===typeof a&&a.amd?a(["exports","module"],e):"undefined"!==typeof f&&"undefined"!==typeof d&&e(f,d);return d.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-globals', location = 'node_modules/skatejs/lib/globals.js' */
("undefined"===typeof window?global:window).__4e3862ca87d80ad21f7e7f777cfa16a8=function(){var e={exports:{}},g=e.exports,j={module:e,exports:g,"./version":__df4a18515ffe51f8d082b078c23957f4,"./version":__df4a18515ffe51f8d082b078c23957f4},b;b=function(c,f,d){var b=("undefined"===typeof window?global:window).define,a,h,d=[d,f,c].filter(function(a){return"function"===typeof a})[0],f=[f,c,[]].filter(Array.isArray)[0];a=d.apply(null,f.map(function(a){return j[a]}));h=typeof a;"function"===typeof b&&b("string"===
typeof c?c:"__4e3862ca87d80ad21f7e7f777cfa16a8",f,d);"string"===h?a=String(a):"number"===h?a=Number(a):"boolean"===h&&(a=Boolean(a));void 0!==a&&(g=e.exports=a)};b.amd=!0;var i=function(c,b,d){c="__skate_"+(d&&d.__esModule?d["default"]:d).replace(/[^\w]/g,"_");window[c]||(window[c]={observer:void 0,registry:{}});b.exports=window[c]};"function"===typeof b&&b.amd?b(["exports","module","./version"],i):"undefined"!==typeof g&&"undefined"!==typeof e&&i(g,e,__df4a18515ffe51f8d082b078c23957f4);return e.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-data', location = 'node_modules/skatejs/lib/data.js' */
("undefined"===typeof window?global:window).__a65e6309cc99661b88cf12496f184a7c=function(){var e={exports:{}},f=e.exports,j={module:e,exports:f},b;b=function(b,c,g){var h=("undefined"===typeof window?global:window).define,a,d,g=[g,c,b].filter(function(a){return"function"===typeof a})[0],c=[c,b,[]].filter(Array.isArray)[0];a=g.apply(null,c.map(function(a){return j[a]}));d=typeof a;"function"===typeof h&&h("string"===typeof b?b:"__a65e6309cc99661b88cf12496f184a7c",c,g);"string"===d?a=String(a):"number"===
d?a=Number(a):"boolean"===d&&(a=Boolean(a));void 0!==a&&(f=e.exports=a)};b.amd=!0;var i=function(b,c){c.exports=function(b,c){var a=void 0===c?"":c,d=b.__SKATE_DATA||(b.__SKATE_DATA={});return a&&(d[a]||(d[a]={}))||d}};"function"===typeof b&&b.amd?b(["exports","module"],i):"undefined"!==typeof f&&"undefined"!==typeof e&&i(f,e);return e.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-mutation-observer', location = 'node_modules/skatejs/lib/mutation-observer.js' */
/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
("undefined"===typeof window?global:window).__d8895783893d728fc8e560ccd007ebbd=function(){var k={exports:{}},n=k.exports,t={module:k,exports:n},i;i=function(g,o,p){var f=("undefined"===typeof window?global:window).define,d,l,p=[p,o,g].filter(function(d){return"function"===typeof d})[0],o=[o,g,[]].filter(Array.isArray)[0];d=p.apply(null,o.map(function(d){return t[d]}));l=typeof d;"function"===typeof f&&f("string"===typeof g?g:"__d8895783893d728fc8e560ccd007ebbd",o,p);"string"===l?d=String(d):"number"===
l?d=Number(d):"boolean"===l&&(d=Boolean(d));void 0!==d&&(n=k.exports=d)};i.amd=!0;var q=function(){var g=window;if("undefined"===typeof WeakMap){var o=Object.defineProperty,p=Date.now()%1E9,f=function(){this.name="__st"+(1E9*Math.random()>>>0)+(p++ +"__")};f.prototype={set:function(a,b){var c=a[this.name];c&&c[0]===a?c[1]=b:o(a,this.name,{value:[a,b],writable:!0});return this},get:function(a){var b;return(b=a[this.name])&&b[0]===a?b[1]:void 0},"delete":function(a){var b=a[this.name];if(!b||b[0]!==
a)return!1;b[0]=b[1]=void 0;return!0},has:function(a){var b=a[this.name];return!b?!1:b[0]===a}};window.WeakMap=f}var d=function(){u=!1;var a=v;v=[];a.sort(function(b,a){return b.uid_-a.uid_});var b=!1;a.forEach(function(a){var e=a.takeRecords();a.nodes_.forEach(function(b){(b=m.get(b))&&b.forEach(function(b){b.observer===a&&b.removeTransientObservers()})});e.length&&(a.callback_(e,a),b=!0)});b&&d()},l=function(a,b){for(var c=a;c;c=c.parentNode){var e=m.get(c);if(e)for(var w=0;w<e.length;w++){var d=
e[w],h=d.options;if(c===a||h.subtree)(h=b(h))&&d.enqueue(h)}}},f=function(a){this.callback_=a;this.nodes_=[];this.records_=[];this.uid_=++t},i=function(a,b){this.type=a;this.target=b;this.addedNodes=[];this.removedNodes=[];this.oldValue=this.attributeNamespace=this.attributeName=this.nextSibling=this.previousSibling=null},k=function(a,b){return r=new i(a,b)},n=function(a){if(j)return j;var b=r,c=new i(b.type,b.target);c.addedNodes=b.addedNodes.slice();c.removedNodes=b.removedNodes.slice();c.previousSibling=
b.previousSibling;c.nextSibling=b.nextSibling;c.attributeName=b.attributeName;c.attributeNamespace=b.attributeNamespace;c.oldValue=b.oldValue;j=c;j.oldValue=a;return j},q=function(a,b,c){this.observer=a;this.target=b;this.options=c;this.transientObservedNodes=[]};if(!g.JsMutationObserver){var m=new WeakMap,s;if(/Trident|Edge/.test(navigator.userAgent))s=setTimeout;else if(window.setImmediate)s=window.setImmediate;else{var x=[],y=String(Math.random());window.addEventListener("message",function(a){a.data===
y&&(a=x,x=[],a.forEach(function(b){b()}))});s=function(a){x.push(a);window.postMessage(y,"*")}}var u=!1,v=[],t=0;f.prototype={observe:function(a,b){a=window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(a)||a;if(!b.childList&&!b.attributes&&!b.characterData||b.attributeOldValue&&!b.attributes||b.attributeFilter&&b.attributeFilter.length&&!b.attributes||b.characterDataOldValue&&!b.characterData)throw new SyntaxError;var c=m.get(a);c||m.set(a,c=[]);for(var e,d=0;d<c.length;d++)if(c[d].observer===
this){e=c[d];e.removeListeners();e.options=b;break}e||(e=new q(this,a,b),c.push(e),this.nodes_.push(a));e.addListeners()},disconnect:function(){this.nodes_.forEach(function(a){for(var a=m.get(a),b=0;b<a.length;b++){var c=a[b];if(c.observer===this){c.removeListeners();a.splice(b,1);break}}},this);this.records_=[]},takeRecords:function(){var a=this.records_;this.records_=[];return a}};var r,j;q.prototype={enqueue:function(a){var b=this.observer.records_,c=b.length;if(0<b.length){var e=b[c-1]===a?b[c-
1]:j&&(b[c-1]===j||b[c-1]===r)?j:null;if(e){b[c-1]=e;return}}else v.push(this.observer),u||(u=!0,s(d));b[c]=a},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(a){var b=this.options;b.attributes&&a.addEventListener("DOMAttrModified",this,!0);b.characterData&&a.addEventListener("DOMCharacterDataModified",this,!0);b.childList&&a.addEventListener("DOMNodeInserted",this,!0);(b.childList||b.subtree)&&a.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},
removeListeners_:function(a){var b=this.options;b.attributes&&a.removeEventListener("DOMAttrModified",this,!0);b.characterData&&a.removeEventListener("DOMCharacterDataModified",this,!0);b.childList&&a.removeEventListener("DOMNodeInserted",this,!0);(b.childList||b.subtree)&&a.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(a){if(a!==this.target){this.addListeners_(a);this.transientObservedNodes.push(a);var b=m.get(a);b||m.set(a,b=[]);b.push(this)}},removeTransientObservers:function(){var a=
this.transientObservedNodes;this.transientObservedNodes=[];a.forEach(function(b){this.removeListeners_(b);for(var b=m.get(b),a=0;a<b.length;a++)if(b[a]===this){b.splice(a,1);break}},this)},handleEvent:function(a){a.stopImmediatePropagation();switch(a.type){case "DOMAttrModified":var b=a.attrName,c=a.relatedNode.namespaceURI,e=a.target,d=new k("attributes",e);d.attributeName=b;d.attributeNamespace=c;var f=a.attrChange===MutationEvent.ADDITION?null:a.prevValue;l(e,function(a){if(a.attributes&&(!a.attributeFilter||
!a.attributeFilter.length||!(-1===a.attributeFilter.indexOf(b)&&-1===a.attributeFilter.indexOf(c))))return a.attributeOldValue?n(f):d});break;case "DOMCharacterDataModified":e=a.target;d=k("characterData",e);f=a.prevValue;l(e,function(a){if(a.characterData)return a.characterDataOldValue?n(f):d});break;case "DOMNodeRemoved":this.addTransientObserver(a.target);case "DOMNodeInserted":var h=a.target,g;"DOMNodeInserted"===a.type?(e=[h],g=[]):(e=[],g=[h]);var i=h.previousSibling,h=h.nextSibling,d=k("childList",
a.target.parentNode);d.addedNodes=e;d.removedNodes=g;d.previousSibling=i;d.nextSibling=h;l(a.relatedNode,function(a){if(a.childList)return d})}r=j=void 0}};g.JsMutationObserver=f;g.MutationObserver||(g.MutationObserver=f,f._isPolyfilled=!0)}};"function"===typeof i&&i.amd?i(["exports"],q):"undefined"!==typeof n&&q(n);return k.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-utils', location = 'node_modules/skatejs/lib/utils.js' */
("undefined"===typeof window?global:window).__ff116c36053831d9f16663a874fcf352=function(){var f={exports:{}},j=f.exports,l={module:f,exports:j,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3},d;d=function(b,i,g){var d=("undefined"===typeof window?global:window).define,c,e,g=[g,i,b].filter(function(a){return"function"===typeof a})[0],i=[i,b,[]].filter(Array.isArray)[0];c=g.apply(null,i.map(function(a){return l[a]}));e=typeof c;"function"===typeof d&&
d("string"===typeof b?b:"__ff116c36053831d9f16663a874fcf352",i,g);"string"===e?c=String(c):"number"===e?c=Number(c):"boolean"===e&&(c=Boolean(c));void 0!==c&&(j=f.exports=c)};d.amd=!0;var k=function(b,d){function g(a,m){return Object.prototype.hasOwnProperty.call(a,m)}b.hasOwn=g;b.camelCase=function(a){return a.split(/-/g).map(function(a,b){return 0===b?a:a[0].toUpperCase()+a.substring(1)}).join("")};b.elementContains=function(a,b){return a===document&&!a.contains?document.head.contains(b)||document.body.contains(b):
a.contains?a.contains(b):e.call(a,b)};b.debounce=function(a){var b=!1;return function(){b||(b=!0,setTimeout(function(){b=!1;a()},1))}};b.getClosestIgnoredElement=function(a){for(;a instanceof Element;){if(a.hasAttribute(f))return a;a=a.parentNode}};b.inherit=function(a,b,c){for(var d=Object.getOwnPropertyNames(b),g=d.length,f=0;f<g;f++){var e=d[f];if(c||void 0===a[e]){var h=Object.getOwnPropertyDescriptor(b,e);h.get||h.set||!h.writable||!h.enumerable||!h.configurable?Object.defineProperty(a,e,h):
a[e]=b[e]}}return a};b.objEach=function(a,b){for(var c in a)g(a,c)&&b(a[c],c)};b.supportsNativeCustomElements=function(){return"function"===typeof document.registerElement};b.isValidNativeCustomElementName=function(a){return 0<a.indexOf("-")};Object.defineProperty(b,"__esModule",{value:!0});var f=d.ATTR_IGNORE,c=window.HTMLElement.prototype;b.elementPrototype=c;var e=c.contains};"function"===typeof d&&d.amd?d(["exports","./constants"],k):"undefined"!==typeof j&&k(j,__cd984629a8bd8a7cc9535b6f28b473c3);
return f.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-registry', location = 'node_modules/skatejs/lib/registry.js' */
("undefined"===typeof window?global:window).__70f2348b2499ca3a69f2e8b52e9d5d61=function(){var h={exports:{}},l=h.exports,o={module:h,exports:l,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3,"./globals":__4e3862ca87d80ad21f7e7f777cfa16a8,"./utils":__ff116c36053831d9f16663a874fcf352,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3,"./globals":__4e3862ca87d80ad21f7e7f777cfa16a8,"./utils":__ff116c36053831d9f16663a874fcf352},b;b=function(b,d,f){var k=("undefined"===typeof window?global:window).define,
a,n,f=[f,d,b].filter(function(a){return"function"===typeof a})[0],d=[d,b,[]].filter(Array.isArray)[0];a=f.apply(null,d.map(function(a){return o[a]}));n=typeof a;"function"===typeof k&&k("string"===typeof b?b:"__70f2348b2499ca3a69f2e8b52e9d5d61",d,f);"string"===n?a=String(a):"number"===n?a=Number(a):"boolean"===n&&(a=Boolean(a));void 0!==a&&(l=h.exports=a)};b.amd=!0;var m=function(b,d,f,k,a){var h=f.TYPE_ATTRIBUTE,l=f.TYPE_CLASSNAME,m=f.TYPE_ELEMENT,i=k&&k.__esModule?k["default"]:k,p=a.hasOwn,o=a.isValidNativeCustomElementName,
q=a.supportsNativeCustomElements;d.exports={clear:function(){i.registry={};return this},get:function(e){return p(i.registry,e)&&i.registry[e]},getForElement:function(e){var a=e.attributes,b=a.length,f=[],j=a.is,d=j&&(j.value||j.nodeValue),j=(e.tagName||e.localName).toLowerCase(),c=d||j,g;this.isType(c,m)&&(c=i.registry[c],g=c["extends"],d?j===g&&f.push(c):g||f.push(c));for(d=0;d<b;d++)c=a[d].nodeName,this.isType(c,h)&&(c=i.registry[c],g=c["extends"],(!g||j===g)&&f.push(c));(a=e.classList)?e=a:(e=
e.attributes,e=e["class"]&&e["class"].nodeValue.split(/\s+/)||[]);a=e.length;for(b=0;b<a;b++)c=e[b],this.isType(c,l)&&(c=i.registry[c],g=c["extends"],(!g||j===g)&&f.push(c));return f},isType:function(a,b){var d=this.get(a);return d&&d.type===b},isNativeCustomElement:function(a){return q()&&this.isType(a,m)&&o(a)},set:function(a,b){if(p(i.registry,a))throw Error('A component definition of type "'+b.type+'" with the ID of "'+a+'" already exists.');i.registry[a]=b;return this}}};"function"===typeof b&&
b.amd?b(["exports","module","./constants","./globals","./utils"],m):"undefined"!==typeof l&&"undefined"!==typeof h&&m(l,h,__cd984629a8bd8a7cc9535b6f28b473c3,__4e3862ca87d80ad21f7e7f777cfa16a8,__ff116c36053831d9f16663a874fcf352);return h.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-lifecycle', location = 'node_modules/skatejs/lib/lifecycle.js' */
("undefined"===typeof window?global:window).__f6f6f42d3d4cf18c89b7bc2921d77ed4=function(){var o={exports:{}},m=o.exports,s={module:o,exports:m,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3,"./data":__a65e6309cc99661b88cf12496f184a7c,"./mutation-observer":__d8895783893d728fc8e560ccd007ebbd,"./registry":__70f2348b2499ca3a69f2e8b52e9d5d61,"./utils":__ff116c36053831d9f16663a874fcf352,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3,"./data":__a65e6309cc99661b88cf12496f184a7c,"./mutation-observer":__d8895783893d728fc8e560ccd007ebbd,
"./registry":__70f2348b2499ca3a69f2e8b52e9d5d61,"./utils":__ff116c36053831d9f16663a874fcf352},k;k=function(i,f,l){var k=("undefined"===typeof window?global:window).define,d,j,l=[l,f,i].filter(function(d){return"function"===typeof d})[0],f=[f,i,[]].filter(Array.isArray)[0];d=l.apply(null,f.map(function(d){return s[d]}));j=typeof d;"function"===typeof k&&k("string"===typeof i?i:"__f6f6f42d3d4cf18c89b7bc2921d77ed4",f,l);"string"===j?d=String(d):"number"===j?d=Number(d):"boolean"===j&&(d=Boolean(d));
void 0!==d&&(m=o.exports=d)};k.amd=!0;var q=function(i,f,l,k,d,j){function o(e,b,a){Object.defineProperty(e,a,{get:function(){return this.getAttribute(b)},set:function(a){void 0===a?this.removeAttribute(b):this.setAttribute(b,a)}})}function m(e,b,a){var d,f,c=a.name,h=a.newValue,g;t&&(g=r(e,"cachedAttributeOldValues"));var a=t&&p(g,c)?g[c]:a.oldValue,i="string"===typeof h,u="string"===typeof a,n=(b=b.attributes)&&b[c];!u&&i?f="created":u&&i?f="updated":u&&!i&&(f="removed");t&&("removed"===f?delete g[c]:
g[c]=h);n&&"function"===typeof n[f]?d=n[f]:n&&"function"===typeof n.fallback?d=n.fallback:"function"===typeof n?d=n:"function"===typeof b&&(d=b);d&&d(e,{type:f,name:c,newValue:void 0===h?null:h,oldValue:void 0===a?null:a})}function q(e,b){var a=r(e,b.id);if(!a.created){a.created=!0;C(e,b.prototype,!0);b.template&&!e.hasAttribute(b.resolvedAttribute)&&b.template(e);e.removeAttribute(b.unresolvedAttribute);e.setAttribute(b.resolvedAttribute,"");var d=function(a,b){return function(d){if(!b)return a(e,
d,e);for(var c=d.target;c&&c!==document&&c!==e.parentNode;){var f;var g=c;f=b;D&&(g=g.cloneNode(),document.createElement("div").appendChild(g));f=w.call(g,f);if(f)return a(e,d,c);c=c.parentNode}}};"object"===typeof b.events&&E(b.events,function(a,b){var c,f;f=b.split(" ");c=f.shift();f=f.join(" ");e.addEventListener(c,d(a,f),!!f&&("blur"===c||"focus"===c))});var f=e.attributes;b.attributes&&!v.isNativeCustomElement(b.id)&&(new window.MutationObserver(function(a){a.forEach(function(a){var c=a.attributeName,
d=f[c];m(e,b,{name:c,newValue:d&&(d.value||d.nodeValue),oldValue:a.oldValue})})})).observe(e,{attributes:!0,attributeOldValue:!0});a=b.attributes;if("object"===typeof a)for(var c in a){var h=F(c);p(a,c)&&!p(e,h)&&o(e,c,h)}c=b.attributes;if("object"===typeof c)for(var g in c)p(c,g)&&(p(c[g],"value")&&!e.hasAttribute(g))&&(a=c[g].value,a="function"===typeof a?a(e):a,e.setAttribute(g,a));h=e.attributes;c=[];a=h.length;for(g=0;g<a;g++)c.push(h[g]);for(g=0;g<a;g++)h=c[g],m(e,b,{name:h.nodeName,newValue:h.value||
h.nodeValue});b.created&&b.created(e)}}function x(e,b){var a=r(e,b.id);!a.attached&&G(document,e)&&(a.attached=!0,b.attached&&b.attached(e),a.detached=!1)}function y(e,b){var a=r(e,b.id);a.detached||(a.detached=!0,b.detached&&b.detached(e),a.attached=!1)}function z(e){for(var b=0;b<e.length;b++){var a=e[b];if(!(a.nodeType!==A.ELEMENT_NODE||a.attributes[s])){for(var d=v.getForElement(a),f=d.length,c=0;c<f;c++){var h=a,g=d[c];q(h,g);x(h,g)}a=a.childNodes||[];a.length&&z(a)}}}function B(e){for(var b=
0;b<e.length;b++){var a=e[b];if(a.nodeType===A.ELEMENT_NODE){B(a.childNodes);for(var d=v.getForElement(a),f=d.length,c=0;c<f;c++)y(a,d[c])}}}Object.defineProperty(i,"__esModule",{value:!0});var s=f.ATTR_IGNORE,r=l&&l.__esModule?l["default"]:l,v=d&&d.__esModule?d["default"]:d,F=j.camelCase,G=j.elementContains,p=j.hasOwn,C=j.inherit,E=j.objEach,A=window.Node,f=window.HTMLElement.prototype,w=f.matches||f.msMatchesSelector||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector,D=!w.call(document.createElement("div"),
"div"),t=/Edge/.test(navigator.userAgent);i.initElements=z;i.removeElements=B;i.triggerAttached=x;i.triggerAttributeChanged=m;i.triggerCreated=q;i.triggerDetached=y};"function"===typeof k&&k.amd?k("exports ./constants ./data ./mutation-observer ./registry ./utils".split(" "),q):"undefined"!==typeof m&&q(m,__cd984629a8bd8a7cc9535b6f28b473c3,__a65e6309cc99661b88cf12496f184a7c,__d8895783893d728fc8e560ccd007ebbd,__70f2348b2499ca3a69f2e8b52e9d5d61,__ff116c36053831d9f16663a874fcf352);return o.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-fix-ie-innerhtml', location = 'node_modules/skatejs/lib/fix-ie-innerhtml.js' */
("undefined"===typeof window?global:window).__5551fa8e4adda8d20d1c375c56d1ec4a=function(){var f={exports:{}},h=f.exports,k={module:f,exports:h},d;d=function(g,c,b){var e=("undefined"===typeof window?global:window).define,a,i,b=[b,c,g].filter(function(a){return"function"===typeof a})[0],c=[c,g,[]].filter(Array.isArray)[0];a=b.apply(null,c.map(function(a){return k[a]}));i=typeof a;"function"===typeof e&&e("string"===typeof g?g:"__5551fa8e4adda8d20d1c375c56d1ec4a",c,b);"string"===i?a=String(a):"number"===
i?a=Number(a):"boolean"===i&&(a=Boolean(a));void 0!==a&&(h=f.exports=a)};d.amd=!0;var j=function(){function g(a,c){var b=a.childNodes;if(b)for(var e=b.length,d=0;d<e;d++){var f=b[d];c(f,a);g(f,c)}}var c=/MSIE/.test(navigator.userAgent),b=/Trident/.test(navigator.userAgent),e=window.HTMLElement.prototype;if(c||b)if(c=Object.getOwnPropertyDescriptor(e,"innerHTML"),!c||!c.get._hasBeenEnhanced){b&&(window.MutationObserver=window.JsMutationObserver||window.MutationObserver);var a=Object.getOwnPropertyDescriptor(e,
"innerHTML"),b=function(){return a.get.call(this)};b._hasBeenEnhanced=!0;Object.defineProperty(e,"innerHTML",{get:b,set:function(b){g(this,function(a,b){var c=document.createEvent("MutationEvent");c.initMutationEvent("DOMNodeRemoved",true,false,b,null,null,null,null);a.dispatchEvent(c)});a.set.call(this,b)}})}};"function"===typeof d&&d.amd?d(["exports"],j):"undefined"!==typeof h&&j(h);return f.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-document-observer', location = 'node_modules/skatejs/lib/document-observer.js' */
("undefined"===typeof window?global:window).__9655477c2207b947a677bccb050c4958=function(){var c={exports:{}},f=c.exports,j={module:c,exports:f,"./globals":__4e3862ca87d80ad21f7e7f777cfa16a8,"./lifecycle":__f6f6f42d3d4cf18c89b7bc2921d77ed4,"./mutation-observer":__d8895783893d728fc8e560ccd007ebbd,"./fix-ie-innerhtml":__5551fa8e4adda8d20d1c375c56d1ec4a,"./utils":__ff116c36053831d9f16663a874fcf352,"./globals":__4e3862ca87d80ad21f7e7f777cfa16a8,"./lifecycle":__f6f6f42d3d4cf18c89b7bc2921d77ed4,"./mutation-observer":__d8895783893d728fc8e560ccd007ebbd,
"./fix-ie-innerhtml":__5551fa8e4adda8d20d1c375c56d1ec4a,"./utils":__ff116c36053831d9f16663a874fcf352},d;d=function(d,e,b){var k=("undefined"===typeof window?global:window).define,a,g,b=[b,e,d].filter(function(a){return"function"===typeof a})[0],e=[e,d,[]].filter(Array.isArray)[0];a=b.apply(null,e.map(function(a){return j[a]}));g=typeof a;"function"===typeof k&&k("string"===typeof d?d:"__9655477c2207b947a677bccb050c4958",e,b);"string"===g?a=String(a):"number"===g?a=Number(a):"boolean"===g&&(a=Boolean(a));
void 0!==a&&(f=c.exports=a)};d.amd=!0;var i=function(d,e,b,c,a,g,f){function i(a){for(var d=a.length,c=0;c<d;c++){var b=a[c],e=b.addedNodes,b=b.removedNodes;e&&(e.length&&!l(e[0].parentNode))&&j(e);b&&b.length&&m(b)}}var h=b&&b.__esModule?b["default"]:b,j=c.initElements,m=c.removeElements,l=f.getClosestIgnoredElement;e.exports={register:function(a){a&&this.unregister();h.observer||(a=new window.MutationObserver(i),a.observe(document,{childList:!0,subtree:!0}),h.observer=a);return this},unregister:function(){h.observer&&
(h.observer.disconnect(),h.observer=void 0);return this}}};"function"===typeof d&&d.amd?d("exports module ./globals ./lifecycle ./mutation-observer ./fix-ie-innerhtml ./utils".split(" "),i):"undefined"!==typeof f&&"undefined"!==typeof c&&i(f,c,__4e3862ca87d80ad21f7e7f777cfa16a8,__f6f6f42d3d4cf18c89b7bc2921d77ed4,__d8895783893d728fc8e560ccd007ebbd,__5551fa8e4adda8d20d1c375c56d1ec4a,__ff116c36053831d9f16663a874fcf352);return c.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-0.13.17-lib-skate', location = 'node_modules/skatejs/lib/skate.js' */
("undefined"===typeof window?global:window).__78f27bfa54305705263504b974e1c18c=function(){var g={exports:{}},e=g.exports,n={module:g,exports:e,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3,"./document-observer":__9655477c2207b947a677bccb050c4958,"./lifecycle":__f6f6f42d3d4cf18c89b7bc2921d77ed4,"./registry":__70f2348b2499ca3a69f2e8b52e9d5d61,"./utils":__ff116c36053831d9f16663a874fcf352,"./version":__df4a18515ffe51f8d082b078c23957f4,"./constants":__cd984629a8bd8a7cc9535b6f28b473c3,"./document-observer":__9655477c2207b947a677bccb050c4958,
"./lifecycle":__f6f6f42d3d4cf18c89b7bc2921d77ed4,"./registry":__70f2348b2499ca3a69f2e8b52e9d5d61,"./utils":__ff116c36053831d9f16663a874fcf352,"./version":__df4a18515ffe51f8d082b078c23957f4},c;c=function(k,h,d){var c=("undefined"===typeof window?global:window).define,a,j,d=[d,h,k].filter(function(a){return"function"===typeof a})[0],h=[h,k,[]].filter(Array.isArray)[0];a=d.apply(null,h.map(function(a){return n[a]}));j=typeof a;"function"===typeof c&&c("string"===typeof k?k:"__78f27bfa54305705263504b974e1c18c",
h,d);"string"===j?a=String(a):"number"===j?a=Number(a):"boolean"===j&&(a=Boolean(a));void 0!==a&&(e=g.exports=a)};c.amd=!0;var m=function(c,h,d,g,a,j,e,m){function f(i,b){b=l({},b);b=l(b,f.defaults);b.id=i;o.set(i,b);if(o.isNativeCustomElement(i)){var a=b["extends"]?document.createElement(b["extends"]).constructor.prototype:r.prototype;a.isPrototypeOf(b.prototype)||(b.prototype=l(Object.create(a),b.prototype,!0));a={prototype:l(b.prototype,{createdCallback:function(){s(this,b)},attachedCallback:function(){v(this,
b)},detachedCallback:function(){w(this,b)},attributeChangedCallback:function(a,i,c){x(this,b,{name:a,oldValue:i,newValue:c})}})};b["extends"]&&(a["extends"]=b["extends"]);return document.registerElement(i,a)}y();z.register(!!b.detached);if(o.isType(i,p)){var c=b,d=function(){var a;a=c["extends"];var b=c.id;a?(a=document.createElement(a),a.setAttribute("is",b)):a=document.createElement(b);c.prototype=d.prototype;s(a,c);return a};d.prototype=c.prototype;return d}}var q=function(a){return a&&a.__esModule?
a["default"]:a},c=d.TYPE_ATTRIBUTE,n=d.TYPE_CLASSNAME,p=d.TYPE_ELEMENT,z=q(g),s=a.triggerCreated,v=a.triggerAttached,w=a.triggerDetached,x=a.triggerAttributeChanged,t=a.initElements,o=q(j),d=e.debounce,l=e.inherit,e=q(m),r=window.HTMLElement,u=!!document.attachEvent,y=d(function(){var a=function(){t(document.documentElement.childNodes)},b;b=u?"complete"===document.readyState:"interactive"===document.readyState||"complete"===document.readyState;b?a():u?window.addEventListener("load",a):document.addEventListener("DOMContentLoaded",
a)});f.init=function(a){var b=a;if(!a)return a;"string"===typeof a?b=a=document.querySelectorAll(a):a instanceof r&&(b=[a]);t(b);return a};f.type={ATTRIBUTE:c,CLASSNAME:n,ELEMENT:p};f.version=e;f.defaults={attributes:void 0,events:void 0,"extends":void 0,id:"",prototype:{},resolvedAttribute:"resolved",template:void 0,type:p,unresolvedAttribute:"unresolved"};var A=window.skate;f.noConflict=function(){window.skate=A;return f};window.skate=f;h.exports=f};"function"===typeof c&&c.amd?c("exports module ./constants ./document-observer ./lifecycle ./registry ./utils ./version".split(" "),
m):"undefined"!==typeof e&&"undefined"!==typeof g&&m(e,g,__cd984629a8bd8a7cc9535b6f28b473c3,__9655477c2207b947a677bccb050c4958,__f6f6f42d3d4cf18c89b7bc2921d77ed4,__70f2348b2499ca3a69f2e8b52e9d5d61,__ff116c36053831d9f16663a874fcf352,__df4a18515ffe51f8d082b078c23957f4);return g.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-tether-0.6.5-tether', location = 'node_modules/tether/tether.js' */
("undefined"===typeof window?global:window).__f22e83964d93e163aaa1176b0fbf22b4=function(){var I={exports:{}},W=I.exports,X={module:I,exports:W},P;P=function(w,p,x){var B=("undefined"===typeof window?global:window).define,l,v,x=[x,p,w].filter(function(l){return"function"===typeof l})[0],p=[p,w,[]].filter(Array.isArray)[0];l=x.apply(null,p.map(function(l){return X[l]}));v=typeof l;"function"===typeof B&&B("string"===typeof w?w:"__f22e83964d93e163aaa1176b0fbf22b4",p,x);"string"===v?l=String(l):"number"===
v?l=Number(l):"boolean"===v&&(l=Boolean(l));void 0!==l&&(W=I.exports=l)};P.amd=!0;(function(w){var p,x,B,l,v,Q,R,Y,C,X={}.hasOwnProperty,ya=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},za=[].slice;null==this.Tether&&(this.Tether={modules:[]});var oa;oa=0;Y=function(){return oa++};C={};v=function(a){var b,c,d;d=a._tetherZeroElement;if(d==null){d=a.createElement("div");d.setAttribute("data-tether-id",Y());l(d.style,{top:0,left:0,position:"absolute"});
a.body.appendChild(d);a._tetherZeroElement=d}b=d.getAttribute("data-tether-id");if(C[b]==null){C[b]={};d=d.getBoundingClientRect();for(c in d){a=d[c];C[b][c]=a}x(function(){return C[b]=void 0})}return C[b]};l=function(a){var b,c,d,e,h,f;a==null&&(a={});b=[];Array.prototype.push.apply(b,arguments);f=b.slice(1);e=0;for(h=f.length;e<h;e++)if(b=f[e])for(c in b)if(X.call(b,c)){d=b[c];a[c]=d}return a};R=function(a,b){var c,d,e,h,f;if(a.classList!=null){h=b.split(" ");f=[];d=0;for(e=h.length;d<e;d++){c=
h[d];c.trim()&&f.push(a.classList.remove(c))}return f}return a.className=a.className.replace(RegExp("(^| )"+b.split(" ").join("|")+"( |$)","gi")," ")};p=function(a,b){var c,d,e,h,f;if(a.classList!=null){h=b.split(" ");f=[];d=0;for(e=h.length;d<e;d++){c=h[d];c.trim()&&f.push(a.classList.add(c))}return f}R(a,b);return a.className=a.className+(" "+b)};Q=function(a,b){return a.classList!=null?a.classList.contains(b):RegExp("(^| )"+b+"( |$)","gi").test(a.className)};B=[];x=function(a){return B.push(a)};
var g=function(){};g.prototype.on=function(a,b,c,d){var e;d==null&&(d=false);if(this.bindings==null)this.bindings={};if((e=this.bindings)[a]==null)e[a]=[];return this.bindings[a].push({handler:b,ctx:c,once:d})};g.prototype.once=function(a,b,c){return this.on(a,b,c,true)};g.prototype.off=function(a,b){var c,d;if(((c=this.bindings)!=null?c[a]:void 0)!=null){if(b==null)return delete this.bindings[a];c=0;for(d=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?d.push(this.bindings[a].splice(c,
1)):d.push(c++);return d}};g.prototype.trigger=function(){var a,b,c,d,e,h,f;c=arguments[0];a=2<=arguments.length?za.call(arguments,1):[];if((b=this.bindings)!=null&&b[c]){e=0;for(f=[];e<this.bindings[c].length;){h=this.bindings[c][e];d=h.handler;b=h.ctx;h=h.once;d.apply(b!=null?b:this,a);h?f.push(this.bindings[c].splice(e,1)):f.push(e++)}return f}};this.Tether.Utils={getScrollParent:function(a){var b,c,d;b=getComputedStyle(a).position;if(b==="fixed")return a;for(;a=a.parentNode;){try{c=getComputedStyle(a)}catch(e){}if(c==
null||/(auto|scroll)/.test(c.overflow+c["overflow-y"]+c["overflow-x"])&&(b!=="absolute"||(d=c.position)==="relative"||d==="absolute"||d==="fixed"))return a}return document.body},getBounds:function(a){var b,c,d,e,h;if(a===document){c=document;a=document.documentElement}else c=a.ownerDocument;d=c.documentElement;b={};h=a.getBoundingClientRect();for(e in h){a=h[e];b[e]=a}e=v(c);b.top=b.top-e.top;b.left=b.left-e.left;if(b.width==null)b.width=document.body.scrollWidth-b.left-b.right;if(b.height==null)b.height=
document.body.scrollHeight-b.top-b.bottom;b.top=b.top-d.clientTop;b.left=b.left-d.clientLeft;b.right=c.body.clientWidth-b.width-b.left;b.bottom=c.body.clientHeight-b.height-b.top;return b},getOffsetParent:function(a){return a.offsetParent||document.documentElement},extend:l,addClass:p,removeClass:R,hasClass:Q,updateClasses:function(a,b,c){var d,e,h;e=0;for(h=c.length;e<h;e++){d=c[e];ya.call(b,d)<0&&Q(a,d)&&R(a,d)}h=[];c=0;for(e=b.length;c<e;c++){d=b[c];Q(a,d)?h.push(void 0):h.push(p(a,d))}return h},
defer:x,flush:function(){var a,b;for(b=[];a=B.pop();)b.push(a());return b},uniqueId:Y,Evented:g,getScrollBarSize:function(){var a,b,c;a=document.createElement("div");a.style.width="100%";a.style.height="200px";b=document.createElement("div");l(b.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"});b.appendChild(a);document.body.appendChild(b);c=a.offsetWidth;b.style.overflow="scroll";a=a.offsetWidth;if(c===a)a=b.clientWidth;
document.body.removeChild(b);b=c-a;return{width:b,height:b}}};var pa,qa,Z,D,J,$,aa,ra,S,T,ba,E,U,ca,sa,V,K,da,ea,fa,ga,z,F,ha,ta,Aa=[].slice;if(null==this.Tether)throw Error("You must include the utils.js file before tether.js");D=this.Tether;g=D.Utils;sa=g.getScrollParent;E=g.getBounds;U=g.getOffsetParent;T=g.extend;J=g.addClass;ga=g.removeClass;ha=g.updateClasses;S=g.defer;ba=g.flush;ca=g.getScrollBarSize;ta=function(a,b,c){c==null&&(c=1);return a+c>=b&&b>=a-c};a:{var A,G,L,M,g=document.createElement("div");
M=["transform","webkitTransform","OTransform","MozTransform","msTransform"];G=0;for(L=M.length;G<L;G++)if(A=M[G],void 0!==g.style[A]){F=A;break a}F=void 0}z=[];fa=function(){var a,b,c;b=0;for(c=z.length;b<c;b++){a=z[b];a.position(false)}return ba()};V=function(){var a;return(a=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?a:+new Date};var N,H,O,ia;O=H=N=null;ia=function(){if(H!=null&&H>16){H=Math.min(H-16,250);O=setTimeout(ia,
250)}else if(!(N!=null&&V()-N<10)){if(O!=null){clearTimeout(O);O=null}N=V();fa();return H=V()-N}};L=["resize","scroll","touchmove"];M=[];A=0;for(G=L.length;A<G;A++)g=L[A],M.push(window.addEventListener(g,ia));pa={center:"center",left:"right",right:"left"};qa={middle:"middle",top:"bottom",bottom:"top"};Z={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"};ra=function(a,b){var c,d;c=a.left;d=a.top;c==="auto"&&(c=pa[b.left]);d==="auto"&&(d=qa[b.top]);return{left:c,top:d}};aa=function(a){var b,
c;return{left:(b=Z[a.left])!=null?b:a.left,top:(c=Z[a.top])!=null?c:a.top}};$=function(){var a,b,c,d,e,h;b=1<=arguments.length?Aa.call(arguments,0):[];c={top:0,left:0};e=0;for(h=b.length;e<h;e++){a=b[e];d=a.top;a=a.left;typeof d==="string"&&(d=parseFloat(d,10));typeof a==="string"&&(a=parseFloat(a,10));c.top=c.top+d;c.left=c.left+a}return c};K=function(a,b){if(typeof a.left==="string"&&a.left.indexOf("%")!==-1)a.left=parseFloat(a.left,10)/100*b.width;if(typeof a.top==="string"&&a.top.indexOf("%")!==
-1)a.top=parseFloat(a.top,10)/100*b.height;return a};da=ea=function(a){a=a.split(" ");return{top:a[0],left:a[1]}};g=function(a){var b=this.position,c=this;this.position=function(){return b.apply(c,arguments)};var d,e,h,f;z.push(this);this.history=[];this.setOptions(a,false);h=D.modules;d=0;for(e=h.length;d<e;d++){a=h[d];(f=a.initialize)!=null&&f.call(this)}this.position()};g.modules=[];g.prototype.getClass=function(a){var b,c;return(b=this.options.classes)!=null&&b[a]?this.options.classes[a]:((c=
this.options.classes)!=null?c[a]:void 0)!==false?this.options.classPrefix?""+this.options.classPrefix+"-"+a:a:""};g.prototype.setOptions=function(a,b){var c,d,e,h;this.options=a;b==null&&(b=true);c=this.options=T({offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},this.options);this.element=c.element;this.target=c.target;this.targetModifier=c.targetModifier;if(this.target==="viewport"){this.target=document.body;this.targetModifier="visible"}else if(this.target==="scroll-handle"){this.target=
document.body;this.targetModifier="scroll-handle"}h=["element","target"];d=0;for(e=h.length;d<e;d++){c=h[d];if(this[c]==null)throw Error("Tether Error: Both element and target must be defined");this[c].jquery!=null?this[c]=this[c][0]:typeof this[c]==="string"&&(this[c]=document.querySelector(this[c]))}J(this.element,this.getClass("element"));J(this.target,this.getClass("target"));if(!this.options.attachment)throw Error("Tether Error: You must provide an attachment");this.targetAttachment=da(this.options.targetAttachment);
this.attachment=da(this.options.attachment);this.offset=ea(this.options.offset);this.targetOffset=ea(this.options.targetOffset);this.scrollParent!=null&&this.disable();this.scrollParent=this.targetModifier==="scroll-handle"?this.target:sa(this.target);if(this.options.enabled!==false)return this.enable(b)};g.prototype.getTargetBounds=function(){var a,b,c,d,e,h;if(this.targetModifier!=null)switch(this.targetModifier){case "visible":if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,
height:innerHeight,width:innerWidth};a=E(this.target);d={height:a.height,width:a.width,top:a.top,left:a.left};d.height=Math.min(d.height,a.height-(pageYOffset-a.top));d.height=Math.min(d.height,a.height-(a.top+a.height-(pageYOffset+innerHeight)));d.height=Math.min(innerHeight,d.height);d.height=d.height-2;d.width=Math.min(d.width,a.width-(pageXOffset-a.left));d.width=Math.min(d.width,a.width-(a.left+a.width-(pageXOffset+innerWidth)));d.width=Math.min(innerWidth,d.width);d.width=d.width-2;if(d.top<
pageYOffset)d.top=pageYOffset;if(d.left<pageXOffset)d.left=pageXOffset;return d;case "scroll-handle":e=this.target;if(e===document.body){e=document.documentElement;a={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}}else a=E(e);h=getComputedStyle(e);b=e.scrollWidth>e.clientWidth||"scroll"===[h.overflow,h.overflowX]||this.target!==document.body;c=0;b&&(c=15);c=a.height-parseFloat(h.borderTopWidth)-parseFloat(h.borderBottomWidth)-c;d={width:15,height:c*0.975*(c/e.scrollHeight),
left:a.left+a.width-parseFloat(h.borderLeftWidth)-15};b=0;c<408&&this.target===document.body&&(b=-1.1E-4*Math.pow(c,2)-0.00727*c+22.58);if(this.target!==document.body)d.height=Math.max(d.height,24);e=this.target.scrollTop/(e.scrollHeight-c);d.top=e*(c-d.height-b)+a.top+parseFloat(h.borderTopWidth);if(this.target===document.body)d.height=Math.max(d.height,24);return d}else return E(this.target)};g.prototype.clearCache=function(){return this._cache={}};g.prototype.cache=function(a,b){if(this._cache==
null)this._cache={};this._cache[a]==null&&(this._cache[a]=b.call(this));return this._cache[a]};g.prototype.enable=function(a){a==null&&(a=true);J(this.target,this.getClass("enabled"));J(this.element,this.getClass("enabled"));this.enabled=true;this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position);if(a)return this.position()};g.prototype.disable=function(){ga(this.target,this.getClass("enabled"));ga(this.element,this.getClass("enabled"));this.enabled=false;if(this.scrollParent!=
null)return this.scrollParent.removeEventListener("scroll",this.position)};g.prototype.destroy=function(){var a,b,c,d,e;this.disable();e=[];a=c=0;for(d=z.length;c<d;a=++c){b=z[a];if(b===this){z.splice(a,1);break}else e.push(void 0)}return e};g.prototype.updateAttachClasses=function(a,b){var c,d,e,h,f,t=this;if(a==null)a=this.attachment;if(b==null)b=this.targetAttachment;e=["left","top","bottom","right","middle","center"];(c=this._addAttachClasses)!=null&&c.length&&this._addAttachClasses.splice(0,
this._addAttachClasses.length);c=this._addAttachClasses!=null?this._addAttachClasses:this._addAttachClasses=[];a.top&&c.push(""+this.getClass("element-attached")+"-"+a.top);a.left&&c.push(""+this.getClass("element-attached")+"-"+a.left);b.top&&c.push(""+this.getClass("target-attached")+"-"+b.top);b.left&&c.push(""+this.getClass("target-attached")+"-"+b.left);d=[];h=0;for(f=e.length;h<f;h++){c=e[h];d.push(""+this.getClass("element-attached")+"-"+c)}h=0;for(f=e.length;h<f;h++){c=e[h];d.push(""+this.getClass("target-attached")+
"-"+c)}return S(function(){if(t._addAttachClasses!=null){ha(t.element,t._addAttachClasses,d);ha(t.target,t._addAttachClasses,d);return t._addAttachClasses=void 0}})};g.prototype.position=function(a){var b,c,d,e,h,f,t,m,j,k,g,o,i,n,q,l,y,r,s,p,u=this;a==null&&(a=true);if(this.enabled){this.clearCache();i=ra(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,i);b=this.cache("element-bounds",function(){return E(u.element)});g=b.width;c=b.height;if(g===0&&c===0&&this.lastSize!=
null){c=this.lastSize;g=c.width;c=c.height}else this.lastSize={width:g,height:c};d=q=this.cache("target-bounds",function(){return u.getTargetBounds()});t=K(aa(this.attachment),{width:g,height:c});n=K(aa(i),d);e=K(this.offset,{width:g,height:c});h=K(this.targetOffset,d);t=$(t,e);n=$(n,h);d=q.left+n.left-t.left;l=q.top+n.top-t.top;p=D.modules;y=0;for(s=p.length;y<s;y++){f=p[y];f=f.position.call(this,{left:d,top:l,targetAttachment:i,targetPos:q,attachment:this.attachment,elementPos:b,offset:t,targetOffset:n,
manualOffset:e,manualTargetOffset:h,scrollbarSize:m});if(!(f==null||typeof f!=="object")){if(f===false)return false;l=f.top;d=f.left}}b={page:{top:l,left:d},viewport:{top:l-pageYOffset,bottom:pageYOffset-l-c+innerHeight,left:d-pageXOffset,right:pageXOffset-d-g+innerWidth}};if(document.body.scrollWidth>window.innerWidth){m=this.cache("scrollbar-size",ca);b.viewport.bottom=b.viewport.bottom-m.height}if(document.body.scrollHeight>window.innerHeight){m=this.cache("scrollbar-size",ca);b.viewport.right=
b.viewport.right-m.width}if((k=document.body.style.position)!==""&&k!=="static"||(o=document.body.parentElement.style.position)!==""&&o!=="static"){b.page.bottom=document.body.scrollHeight-l-c;b.page.right=document.body.scrollWidth-d-g}if(((r=this.options.optimizations)!=null?r.moveElement:void 0)!==false&&this.targetModifier==null){j=this.cache("target-offsetparent",function(){return U(u.target)});g=this.cache("target-offsetparent-bounds",function(){return E(j)});k=getComputedStyle(j);getComputedStyle(this.element);
m={};i=["Top","Left","Bottom","Right"];r=0;for(c=i.length;r<c;r++){o=i[r];m[o.toLowerCase()]=parseFloat(k["border"+o+"Width"])}g.right=document.body.scrollWidth-g.left-g.width+m.right;g.bottom=document.body.scrollHeight-g.top-g.height+m.bottom;if(b.page.top>=g.top+m.top&&b.page.bottom>=g.bottom&&b.page.left>=g.left+m.left&&b.page.right>=g.right){o=j.scrollTop;k=j.scrollLeft;b.offset={top:b.page.top-g.top+o-m.top,left:b.page.left-g.left+k-m.left}}}this.move(b);this.history.unshift(b);this.history.length>
3&&this.history.pop();a&&ba();return true}};g.prototype.move=function(a){var b,c,d,e,h,f,g,m,j,k,l,o,i=this;if(this.element.parentNode!=null){f={};for(g in a){f[g]={};for(d in a[g]){c=false;l=this.history;j=0;for(k=l.length;j<k;j++){h=l[j];if(!ta((o=h[g])!=null?o[d]:void 0,a[g][d])){c=true;break}}c||(f[g][d]=true)}}b={top:"",left:"",right:"",bottom:""};h=function(a,c){var d,e;if(((d=i.options.optimizations)!=null?d.gpu:void 0)!==false){if(a.top){b.top=0;e=c.top}else{b.bottom=0;e=-c.bottom}if(a.left){b.left=
0;d=c.left}else{b.right=0;d=-c.right}b[F]="translateX("+Math.round(d)+"px) translateY("+Math.round(e)+"px)";if(F!=="msTransform")return b[F]=b[F]+" translateZ(0)"}else{a.top?b.top=""+c.top+"px":b.bottom=""+c.bottom+"px";return a.left?b.left=""+c.left+"px":b.right=""+c.right+"px"}};c=false;if((f.page.top||f.page.bottom)&&(f.page.left||f.page.right)){b.position="absolute";h(f.page,a.page)}else if((f.viewport.top||f.viewport.bottom)&&(f.viewport.left||f.viewport.right)){b.position="fixed";h(f.viewport,
a.viewport)}else if(f.offset!=null&&f.offset.top&&f.offset.left){b.position="absolute";e=this.cache("target-offsetparent",function(){return U(i.target)});U(this.element)!==e&&S(function(){i.element.parentNode.removeChild(i.element);return e.appendChild(i.element)});h(f.offset,a.offset);c=true}else{b.position="absolute";h({top:true,left:true},a.page)}if(!c&&this.element.parentNode.tagName!=="BODY"){this.element.parentNode.removeChild(this.element);document.body.appendChild(this.element)}m={};c=false;
for(d in b){f=b[d];a=this.element.style[d];if(a!==""&&f!==""&&(d==="top"||d==="left"||d==="bottom"||d==="right")){a=parseFloat(a);f=parseFloat(f)}if(a!==f){c=true;m[d]=b[d]}}if(c)return S(function(){return T(i.element.style,m)})}};D.position=fa;this.Tether=T(g,D);var ja,ua,ka,va,la,ma,u=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},g=this.Tether.Utils;la=g.getBounds;ka=g.extend;ma=g.updateClasses;ua=g.defer;ja=["left","top","right","bottom"];
va=function(a,b){var c,d,e,h,f;b==="scrollParent"?b=a.scrollParent:b==="window"&&(b=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]);if(b===document)b=b.documentElement;if(b.nodeType!=null){c=d=la(b);e=getComputedStyle(b);b=[c.left,c.top,d.width+c.left,d.height+c.top];c=h=0;for(f=ja.length;h<f;c=++h){d=ja[c];d=d[0].toUpperCase()+d.substr(1);b[c]=d==="Top"||d==="Left"?b[c]+parseFloat(e["border"+d+"Width"]):b[c]-parseFloat(e["border"+d+"Width"])}}return b};this.Tether.modules.push({position:function(a){var b,
c,d,e,h,f,g,m,j,k,l,o,i,n,q,p,y,r,s,w,x,v=this;i=a.top;j=a.left;a=a.targetAttachment;if(!this.options.constraints)return true;n=this.cache("element-bounds",function(){return la(v.element)});m=n.height;n=n.width;if(n===0&&m===0&&this.lastSize!=null){m=this.lastSize;n=m.width;m=m.height}o=this.cache("target-bounds",function(){return v.getTargetBounds()});l=o.height;o=o.width;k={};f={};c=[this.getClass("pinned"),this.getClass("out-of-bounds")];q=this.options.constraints;f=0;for(k=q.length;f<k;f++){g=
q[f];g.outOfBoundsClass&&c.push(g.outOfBoundsClass);g.pinnedClass&&c.push(g.pinnedClass)}k=0;for(p=c.length;k<p;k++){f=c[k];e=["left","top","right","bottom"];q=0;for(y=e.length;q<y;q++){g=e[q];c.push(""+f+"-"+g)}}b=[];k=ka({},a);f=ka({},this.attachment);y=this.options.constraints;q=0;for(p=y.length;q<p;q++){g=y[q];e=g.to;d=g.attachment;g=g.pin;d==null&&(d="");if(u.call(d," ")>=0){h=d.split(" ");d=h[0];h=h[1]}else h=d;e=va(this,e);if(d==="target"||d==="both"){if(i<e[1]&&k.top==="top"){i=i+l;k.top=
"bottom"}if(i+m>e[3]&&k.top==="bottom"){i=i-l;k.top="top"}}if(d==="together"){if(i<e[1]&&k.top==="top")if(f.top==="bottom"){i=i+l;k.top="bottom";i=i+m;f.top="top"}else if(f.top==="top"){i=i+l;k.top="bottom";i=i-m;f.top="bottom"}if(i+m>e[3]&&k.top==="bottom")if(f.top==="top"){i=i-l;k.top="top";i=i-m;f.top="bottom"}else if(f.top==="bottom"){i=i-l;k.top="top";i=i+m;f.top="top"}if(k.top==="middle")if(i+m>e[3]&&f.top==="top"){i=i-m;f.top="bottom"}else if(i<e[1]&&f.top==="bottom"){i=i+m;f.top="top"}}if(h===
"target"||h==="both"){if(j<e[0]&&k.left==="left"){j=j+o;k.left="right"}if(j+n>e[2]&&k.left==="right"){j=j-o;k.left="left"}}if(h==="together")if(j<e[0]&&k.left==="left")if(f.left==="right"){j=j+o;k.left="right";j=j+n;f.left="left"}else{if(f.left==="left"){j=j+o;k.left="right";j=j-n;f.left="right"}}else if(j+n>e[2]&&k.left==="right")if(f.left==="left"){j=j-o;k.left="left";j=j-n;f.left="right"}else{if(f.left==="right"){j=j-o;k.left="left";j=j+n;f.left="left"}}else if(k.left==="center")if(j+n>e[2]&&f.left===
"left"){j=j-n;f.left="right"}else if(j<e[0]&&f.left==="right"){j=j+n;f.left="left"}if(d==="element"||d==="both"){if(i<e[1]&&f.top==="bottom"){i=i+m;f.top="top"}if(i+m>e[3]&&f.top==="top"){i=i-m;f.top="bottom"}}if(h==="element"||h==="both"){if(j<e[0]&&f.left==="right"){j=j+n;f.left="left"}if(j+n>e[2]&&f.left==="left"){j=j-n;f.left="right"}}if(typeof g==="string"){s=r=h=d=void 0;r=g.split(",");s=[];h=0;for(d=r.length;h<d;h++){g=r[h];s.push(g.trim())}g=s}else g===true&&(g=["top","left","right","bottom"]);
g||(g=[]);h=[];d=[];if(i<e[1])if(u.call(g,"top")>=0){i=e[1];h.push("top")}else d.push("top");if(i+m>e[3])if(u.call(g,"bottom")>=0){i=e[3]-m;h.push("bottom")}else d.push("bottom");if(j<e[0])if(u.call(g,"left")>=0){j=e[0];h.push("left")}else d.push("left");if(j+n>e[2])if(u.call(g,"right")>=0){j=e[2]-n;h.push("right")}else d.push("right");if(h.length){e=(w=this.options.pinnedClass)!=null?w:this.getClass("pinned");b.push(e);s=0;for(r=h.length;s<r;s++){g=h[s];b.push(""+e+"-"+g)}}if(d.length){e=(x=this.options.outOfBoundsClass)!=
null?x:this.getClass("out-of-bounds");b.push(e);s=0;for(r=d.length;s<r;s++){g=d[s];b.push(""+e+"-"+g)}}if(u.call(h,"left")>=0||u.call(h,"right")>=0)f.left=k.left=false;if(u.call(h,"top")>=0||u.call(h,"bottom")>=0)f.top=k.top=false;(k.top!==a.top||k.left!==a.left||f.top!==this.attachment.top||f.left!==this.attachment.left)&&this.updateAttachClasses(f,k)}ua(function(){ma(v.target,b,c);return ma(v.element,b,c)});return{top:i,left:j}}});var wa,xa,na,g=this.Tether.Utils;xa=g.getBounds;na=g.updateClasses;
wa=g.defer;this.Tether.modules.push({position:function(a){var b,c,d,e,h,f,g,m,j,k,l,o,i,n=this;g=a.top;e=a.left;f=this.cache("element-bounds",function(){return xa(n.element)});a=f.height;f=f.width;m=this.getTargetBounds();d=g+a;h=e+f;a=[];if(g<=m.bottom&&d>=m.top){i=["left","right"];j=0;for(o=i.length;j<o;j++){f=i[j];((k=m[f])===e||k===h)&&a.push(f)}}if(e<=m.right&&h>=m.left){h=["top","bottom"];k=0;for(e=h.length;k<e;k++){f=h[k];((l=m[f])===g||l===d)&&a.push(f)}}c=[];b=[];g=["left","top","right",
"bottom"];c.push(this.getClass("abutted"));l=0;for(m=g.length;l<m;l++){f=g[l];c.push(""+this.getClass("abutted")+"-"+f)}a.length&&b.push(this.getClass("abutted"));g=0;for(l=a.length;g<l;g++){f=a[g];b.push(""+this.getClass("abutted")+"-"+f)}wa(function(){na(n.target,b,c);return na(n.element,b,c)});return true}});this.Tether.modules.push({position:function(a){var b,c,d;d=a.top;b=a.left;if(this.options.shift){a=function(a){return typeof a==="function"?a.call(this,{top:d,left:b}):a};c=a(this.options.shift);
if(typeof c==="string"){c=c.split(" ");c[1]||(c[1]=c[0]);a=c[0];c=c[1];a=parseFloat(a,10);c=parseFloat(c,10)}else{c=[c.top,c.left];a=c[0];c=c[1]}d=d+a;b=b+c;return{top:d,left:b}}}});w.Tether=this.Tether;"function"===typeof P?P([],function(){return w.Tether}):"object"===typeof W&&(I.exports=w.Tether)})(this);return I.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-version', location = 'node_modules/@atlassian/aui/src/js/aui/version.js' */
("undefined"===typeof window?global:window).__39f8945cccde47cedf5249502f843de0=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a};(0,a.default)("version","6.1.0");b.default="6.1.0";return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-prevent-default', location = 'node_modules/@atlassian/aui/src/js/aui/prevent-default.js' */
("undefined"===typeof window?global:window).__5fb4792de9b1adcb6304d9195adb5974=function(){function c(a){a.preventDefault()}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a};(0,a.default)("preventDefault",c);b.default=c;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-stop-event', location = 'node_modules/@atlassian/aui/src/js/aui/stop-event.js' */
("undefined"===typeof window?global:window).__7adec24be365f968d585ea8eba465c31=function(){function b(a){a.stopPropagation();return!1}var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=__9ea35e3451360b72ebe8cb8006239936,a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a},b=(0,d.fn)(b,"stopEvent",{alternativeName:"preventDefault()",sinceVersion:"5.8.0"});(0,a.default)("stopEvent",b);c.default=b;return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-index-of', location = 'node_modules/@atlassian/aui/src/js/aui/index-of.js' */
("undefined"===typeof window?global:window).__c3d11c15bb3880bc0755a5d7821a3af5=function(){function d(b,c,a){var d=b.length;for(a?0>a&&(a=Math.max(0,d+a)):a=0;a<d;a++)if(b[a]===c)return a;return-1}var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b};(0,b.default)("indexOf",d);c.default=d;return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-contains', location = 'node_modules/@atlassian/aui/src/js/aui/contains.js' */
("undefined"===typeof window?global:window).__75d2de1459719287e147a417e6db02f0=function(){function d(a,b){return-1<(0,e.default)(a,b)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a},c=__c3d11c15bb3880bc0755a5d7821a3af5,e=c&&c.__esModule?c:{"default":c};(0,a.default)("contains",d);b.default=d;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-include', location = 'node_modules/@atlassian/aui/src/js/aui/include.js' */
("undefined"===typeof window?global:window).__551d4064ae698081c92e44fa2336f478=function(){function d(a){return a&&a.__esModule?a:{"default":a}}function b(a){if(!(0,f.default)(e,a)){e.push(a);var b=document.createElement("script");b.src=a;(0,g.default)("body").append(b)}}var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var g=d(__02fa0d2334b5d2f9701871403ba9d89a),h=__9ea35e3451360b72ebe8cb8006239936,f=d(__75d2de1459719287e147a417e6db02f0),i=d(__fb27ffae84b96c14bf339e62cefcf116),
e=[],b=(0,h.fn)(b,"include",{sinceVersion:"5.9.0",extraInfo:"No alternative will be provided. Use a proper module loader instead."});(0,i.default)("include",b);c.default=b;return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-toggle-class-name', location = 'node_modules/@atlassian/aui/src/js/aui/toggle-class-name.js' */
("undefined"===typeof window?global:window).__266f7d333323b39eab9ef2fbbc59e8e4=function(){function c(a,b){(a=(0,e.default)(a))&&a.toggleClass(b)}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,e=a&&a.__esModule?a:{"default":a},a=__9ea35e3451360b72ebe8cb8006239936,b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b},c=(0,a.fn)(c,"toggleClassName",{sinceVersion:"5.8.0"});(0,b.default)("toggleClassName",c);d.default=c;
return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-set-visible', location = 'node_modules/@atlassian/aui/src/js/aui/set-visible.js' */
("undefined"===typeof window?global:window).__5b37caaef4455f13804ce03eeb1acdfb=function(){function d(a,b){if(a=(0,c.default)(a))(0,c.default)(a).each(function(){var a=(0,c.default)(this).hasClass("hidden");a&&b?(0,c.default)(this).removeClass("hidden"):!a&&!b&&(0,c.default)(this).addClass("hidden")})}var e={};"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,c=a&&a.__esModule?a:{"default":a},a=__9ea35e3451360b72ebe8cb8006239936,b=__fb27ffae84b96c14bf339e62cefcf116,
b=b&&b.__esModule?b:{"default":b},d=(0,a.fn)(d,"setVisible",{sinceVersion:"5.9.0",extraInfo:"No alternative will be provided. Use jQuery.addClass() / removeClass() instead."});(0,b.default)("setVisible",d);e.default=d;return e=e["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-set-current', location = 'node_modules/@atlassian/aui/src/js/aui/set-current.js' */
("undefined"===typeof window?global:window).__90410956c138ffc3da4de964b13db4d4=function(){function c(a,b){if(a=(0,e.default)(a))b?a.addClass("current"):a.removeClass("current")}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,e=a&&a.__esModule?a:{"default":a},a=__9ea35e3451360b72ebe8cb8006239936,b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b},c=(0,a.fn)(c,"setCurrent",{sinceVersion:"5.9.0",extraInfo:"No alternative will be provided. Use jQuery.addClass() / removeClass() instead."});
(0,b.default)("setCurrent",c);d.default=c;return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-is-visible', location = 'node_modules/@atlassian/aui/src/js/aui/is-visible.js' */
("undefined"===typeof window?global:window).__d5cef268c81c2b010d1e816ec50f738c=function(){function c(a){return!(0,e.default)(a).hasClass("hidden")}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,e=a&&a.__esModule?a:{"default":a},a=__9ea35e3451360b72ebe8cb8006239936,b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b},c=(0,a.fn)(c,"isVisible",{sinceVersion:"5.9.0",extraInfo:"No alternative will be provided. Use jQuery.hasClass() instead."});
(0,b.default)("isVisible",c);d.default=c;return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-is-clipped', location = 'node_modules/@atlassian/aui/src/js/aui/is-clipped.js' */
("undefined"===typeof window?global:window).__fedda106ce31ba969f0eb1a2ff2110ec=function(){function c(a){a=(0,d.default)(a);return a.prop("scrollWidth")>a.prop("clientWidth")}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,d=a&&a.__esModule?a:{"default":a},a=(a=__fb27ffae84b96c14bf339e62cefcf116)&&a.__esModule?a:{"default":a};(0,a.default)("isClipped",c);b.default=c;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-params', location = 'node_modules/@atlassian/aui/src/js/aui/params.js' */
("undefined"===typeof window?global:window).__8bf6d58fb8fb6f15c80b8f1dfdf2059a=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a};b.default=(0,a.default)("params",{});return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-populate-parameters', location = 'node_modules/@atlassian/aui/src/js/aui/populate-parameters.js' */
("undefined"===typeof window?global:window).__b45bbf448b8303b7b77a6e9c9a824105=function(){function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){a||(a=g.default);(0,f.default)(".parameters input").each(function(){var c=this.value,b=this.title||this.id;(0,f.default)(this).hasClass("list")?a[b]?a[b].push(c):a[b]=[c]:a[b]=c.match(/^(tru|fals)e$/i)?c.toLowerCase()==="true":c})}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var f=d(__02fa0d2334b5d2f9701871403ba9d89a),
h=d(__fb27ffae84b96c14bf339e62cefcf116),g=d(__8bf6d58fb8fb6f15c80b8f1dfdf2059a);(0,h.default)("populateParameters",e);b.default=e;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-log', location = 'node_modules/@atlassian/aui/src/js/aui/internal/log.js' */
("undefined"===typeof window?global:window).__8139e9a1368a0224fc430963d21930c8=function(){function c(a){return function(){"undefined"!==typeof console&&console[a]&&Function.prototype.apply.call(console[a],console,arguments)}}var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.error=a.warn=a.log=void 0;var b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b},d=c("log"),e=c("warn"),f=c("error");(0,b.default)("error",f);(0,b.default)("log",d);(0,b.default)("warn",
e);a.log=d;a.warn=e;a.error=f;return a}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-to-init', location = 'node_modules/@atlassian/aui/src/js/aui/to-init.js' */
("undefined"===typeof window?global:window).__6a9d8cd430986b1a9bed21be83f30bf0=function(){function f(a){(0,g.default)(function(){try{a.apply(this,arguments)}catch(b){d.log("Failed to run init function: "+b+"\n"+a.toString())}});return this}var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,g=a&&a.__esModule?a:{"default":a},d;if((a=__8139e9a1368a0224fc430963d21930c8)&&a.__esModule)d=a;else{var e={};if(null!=a)for(var b in a)Object.prototype.hasOwnProperty.call(a,
b)&&(e[b]=a[b]);e.default=a;d=e}b=(b=__fb27ffae84b96c14bf339e62cefcf116)&&b.__esModule?b:{"default":b};(0,b.default)("toInit",f);c.default=f;return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-firebug', location = 'node_modules/@atlassian/aui/src/js/aui/firebug.js' */
("undefined"===typeof window?global:window).__63f0009c2499555deddcaa4155461b2d=function(){function e(){}function d(){var a=(0,g.default)(document.createElement("script"));a.attr("src","https://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js");(0,g.default)("head").append(a);window.firebug?d.init():setTimeout(d,0)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.warnAboutFirebug=b.firebug=void 0;var a=__02fa0d2334b5d2f9701871403ba9d89a,g=a&&a.__esModule?a:{"default":a},
c;if((a=__9ea35e3451360b72ebe8cb8006239936)&&a.__esModule)c=a;else{var f={};if(null!=a)for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(f[c]=a[c]);f.default=a;c=f}a=(a=__fb27ffae84b96c14bf339e62cefcf116)&&a.__esModule?a:{"default":a};b.firebug=d=c.fn(d,"firebug",{sinceVersion:"5.1.0"});b.warnAboutFirebug=e=c.fn(e,"warnAboutFirebug",{sinceVersion:"5.8.0"});(0,a.default)("firebug",d);(0,a.default)("warnAboutFirebug",e);b.firebug=d;b.warnAboutFirebug=e;return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-clone', location = 'node_modules/@atlassian/aui/src/js/aui/clone.js' */
("undefined"===typeof window?global:window).__8a777f37cbfa8f7456cf8bf6fd300c3f=function(){function c(a){return(0,d.default)(a).clone().removeAttr("id")}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,d=a&&a.__esModule?a:{"default":a},a=(a=__fb27ffae84b96c14bf339e62cefcf116)&&a.__esModule?a:{"default":a};(0,a.default)("clone",c);b.default=c;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-alphanum', location = 'node_modules/@atlassian/aui/src/js/aui/alphanum.js' */
("undefined"===typeof window?global:window).__e5798bc5fc3ddfedef0b3c8f4c21c596=function(){function h(c,d){for(var c=(c+"").toLowerCase(),d=(d+"").toLowerCase(),b=/(\d+|\D+)/g,e=c.match(b),b=d.match(b),h=Math.max(e.length,b.length),a=0;a<h;a++){if(a===e.length)return-1;if(a===b.length)return 1;var f=parseInt(e[a],10)+"",g=parseInt(b[a],10)+"";if(f===e[a]&&g===b[a]&&f!==g)return(f-g)/Math.abs(f-g);if((f!==e[a]||g!==b[a])&&e[a]!==b[a])return e[a]<b[a]?-1:1}return 0}var d={};"use strict";Object.defineProperty(d,
"__esModule",{value:!0});var c=__fb27ffae84b96c14bf339e62cefcf116,c=c&&c.__esModule?c:{"default":c};(0,c.default)("alphanum",h);d.default=h;return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-on-text-resize', location = 'node_modules/@atlassian/aui/src/js/aui/on-text-resize.js' */
("undefined"===typeof window?global:window).__650ce0eca642a6f4ad07e0fb4c6eaa0e=function(){function c(a){if("function"===typeof a)if(c["on-text-resize"])c["on-text-resize"].push(function(b){a(b)});else{var b=(0,e.default)("<div></div>");b.css({width:"1em",height:"1em",position:"absolute",top:"-9999em",left:"-9999em"});(0,e.default)("body").append(b);b.size=b.width();setInterval(function(){if(b.size!==b.width()){b.size=b.width();for(var a=0,d=c["on-text-resize"].length;a<d;a++)c["on-text-resize"][a](b.size)}},
0);c.em=b;c["on-text-resize"]=[function(b){a(b)}]}}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var a=__02fa0d2334b5d2f9701871403ba9d89a,e=a&&a.__esModule?a:{"default":a},a=(a=__fb27ffae84b96c14bf339e62cefcf116)&&a.__esModule?a:{"default":a};(0,a.default)("onTextResize",c);d.default=c;return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-unbind-text-resize', location = 'node_modules/@atlassian/aui/src/js/aui/unbind-text-resize.js' */
("undefined"===typeof window?global:window).__3a32f754d5f1a3c818cbc3a207dd23ef=function(){function e(b){for(var a=0,c=d.default["on-text-resize"].length;a<c;a++)if(d.default["on-text-resize"][a]===b)return d.default["on-text-resize"].splice(a,1)}var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b},c=__650ce0eca642a6f4ad07e0fb4c6eaa0e,d=c&&c.__esModule?c:{"default":c};(0,b.default)("unbindTextResize",e);a.default=
e;return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-escape', location = 'node_modules/@atlassian/aui/src/js/aui/escape.js' */
("undefined"===typeof window?global:window).__cf5ccbce0a6fa789a774886ae7dae074=function(){function c(a){return d(a).replace(/%u\w{4}/gi,function(a){return unescape(a)})}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a},d=window.escape;(0,a.default)("escape",c);b.default=c;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-escape-html', location = 'node_modules/@atlassian/aui/src/js/aui/escape-html.js' */
("undefined"===typeof window?global:window).__9429d2be869371d3ad2b23dcd7686108=function(){function c(a){return a.replace(/[&"'<>`]/g,function(a){var b={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;","`":"&#96;"};return"string"===typeof b[a]?b[a]:"&quot;"})}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a};(0,a.default)("escapeHtml",c);b.default=c;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-filter-by-search', location = 'node_modules/@atlassian/aui/src/js/aui/filter-by-search.js' */
("undefined"===typeof window?global:window).__2ba513595ad40ba5d7fbf9ae049143c4=function(){function c(b,c,a){if(!c)return[];var e=a&&a.keywordsField||"keywords",d=a&&a.ignoreForCamelCase?"i":"",h=a&&a.matchBoundary?"\\b":"",f=[];c.split(a&&a.splitRegex||/\s+/).forEach(function(a){a=[RegExp(h+a,"i")];if(/^([A-Z][a-z]*) {2,}$/.test(this)){var b=this.replace(/([A-Z][a-z]*)/g,"\\b$1[^,]*");a.push(RegExp(b,d))}f.push(a)});var g=[];b.forEach(function(a){for(var b=0;b<f.length;b++){for(var c=!1,d=0;d<f[b].length;d++)if(f[b][d].test(a[e])){c=
!0;break}if(!c)return}g.push(a)});return g}var e={};"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=__9ea35e3451360b72ebe8cb8006239936,b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b},c=(0,d.fn)(c,"filterBySearch",{sinceVersion:"5.9.0",extraInfo:"No alternative will be provided. If products require this function, this should be copied."});(0,b.default)("filterBySearch",c);e.default=c;return e=e["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-debounce', location = 'node_modules/@atlassian/aui/src/js/aui/debounce.js' */
("undefined"===typeof window?global:window).__ddc701dd1918eb1bc6ac99673accf4b9=function(){function g(a,b){var c,d;return function(){var e=arguments,f=this;clearTimeout(c);c=setTimeout(function(){d=a.apply(f,e);f=e=null},b);return d}}function h(a,b){var c=null,d;return function(){var e=this,f=arguments;null===c&&(d=a.apply(e,f));clearTimeout(c);c=setTimeout(function(){c=e=f=null},b);return d}}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.default=g;b.debounceImmediate=h;var a=
__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a};(0,a.default)("debounce",g);(0,a.default)("debounceImmediate",h);return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-unique-id', location = 'node_modules/@atlassian/aui/src/js/aui/unique-id.js' */
("undefined"===typeof window?global:window).__327dbe0b6617f3273ea9b3fc2d1dda83=function(){function e(a){d=f++ +"";b=a?a+d:"aui-uid-"+d;if(document.getElementById(b)&&(b=b+"-"+(new Date).getTime(),document.getElementById(b)))throw Error('Timestamped fallback ID "'+b+'" exists.');return b}var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a},d,b,f=0;(0,a.default)("id",e);c.default=e;return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-add-id', location = 'node_modules/@atlassian/aui/src/js/aui/internal/add-id.js' */
("undefined"===typeof window?global:window).__9b235f66ad20912472c8874c2abf23c1=function(){function c(a){return a&&a.__esModule?a:{"default":a}}function d(a,b){var c=(0,e.default)(a),d=b||!1;c.each(function(){var a=(0,e.default)(this);a.attr("id")||a.attr("id",(0,f.default)(d))})}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var e=c(__02fa0d2334b5d2f9701871403ba9d89a),g=c(__fb27ffae84b96c14bf339e62cefcf116),f=c(__327dbe0b6617f3273ea9b3fc2d1dda83);(0,g.default)("_addID",d);
b.default=d;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-forms', location = 'node_modules/@atlassian/aui/src/js/aui/forms.js' */
("undefined"===typeof window?global:window).__9e2abbac69b5ea1ee20e7e6213d7d18a=function(){function c(a,b){var c=(0,d.default)(a);"undefined"===typeof b&&(b=!0);return c.each(function(){this.disabled=!b})}function e(){(0,d.default)(".icon-inline-help").click(function(){var a=(0,d.default)(this).siblings(".field-help");a.hasClass("hidden")?a.removeClass("hidden"):a.addClass("hidden")})}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.inlineHelp=b.enable=void 0;var a=__02fa0d2334b5d2f9701871403ba9d89a,
d=a&&a.__esModule?a:{"default":a},a=(a=__fb27ffae84b96c14bf339e62cefcf116)&&a.__esModule?a:{"default":a};(0,a.default)("enable",c);(0,a.default)("inlineHelp",e);b.enable=c;b.inlineHelp=e;return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-setup', location = 'node_modules/@atlassian/aui/src/js/aui/setup.js' */
("undefined"===typeof window?global:window).__d650e7bb504f9f1f52a09cf76ea24812=function(){function b(a){return a&&a.__esModule?a:{"default":a}}"use strict";var c=b(__02fa0d2334b5d2f9701871403ba9d89a),d=b(__fb27ffae84b96c14bf339e62cefcf116),e=b(__b45bbf448b8303b7b77a6e9c9a824105),f=b(__39f8945cccde47cedf5249502f843de0);(0,c.default)(function(){var a=(0,c.default)("body");a.data("auiVersion")||a.attr("data-aui-version",f.default);(0,e.default)()});c.default.ajaxSettings.traditional=!0;(0,d.default)("$",
c.default);return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-format', location = 'node_modules/@atlassian/aui/src/js/aui/format.js' */
("undefined"===typeof window?global:window).__0d2ce34ae8c23f21d43215f7cc5928d7=function(){function l(g){var i=/'(?!')/g,o=/^\d+$/,p=/^(\d+),number$/,q=/^(\d+)\,choice\,(.+)/,r=/^(\d+)([#<])(.+)/,m=function(c){for(var h=!1,e=-1,a=0,b=0;b<c.length;b++){var d=c.charAt(b);"'"==d&&(h=!h);if(!h)if("{"===d)0===a&&(e=b),a++;else if("}"===d&&0<a&&(a--,0===a))return h=[],h.push(c.substring(0,b+1)),h.push(c.substring(0,e)),h.push(c.substring(e+1,b)),h}return null};return function(c){var h=arguments,e="";if(!c)return e;
for(var a=m(c);a;){var c=c.substring(a[0].length),e=e+a[1].replace(i,""),b=a[2],a=h,d="",f=void 0;if(b.match(o))d=a.length>++b?a[b]:"";else if(f=b.match(p))d=a.length>++f[1]?a[f[1]]:"";else if(f=b.match(q))if(b=a.length>++f[1]?a[f[1]]:null,null!==b){for(var f=f[2].split("|"),g=null,k=0;k<f.length;k++){var j=f[k].match(r),n=parseInt(j[1],10);if(b<n){d=g?g:j[3];break}if(b==n&&"#"==j[2]){d=j[3];break}k==f.length-1&&(d=j[3]);g=j[3]}a=[d].concat(Array.prototype.slice.call(a,1));d=l.apply(null,a)}e+=d;
a=m(c)}return e+=c.replace(i,"")}.apply(null,arguments)}var i={};Object.defineProperty(i,"__esModule",{value:!0});var g=__fb27ffae84b96c14bf339e62cefcf116,g=g&&g.__esModule?g:{"default":g};(0,g.default)("format",l);i.default=l;return i=i["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-animation', location = 'node_modules/@atlassian/aui/src/js/aui/internal/animation.js' */
("undefined"===typeof window?global:window).__1e5eff515fb8ea62ccd80d65455e88cd=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.recomputeStyle=function(a){a=a.length?a[0]:a;window.getComputedStyle(a,null).getPropertyValue("left")};return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-blanket', location = 'node_modules/@atlassian/aui/src/js/aui/blanket.js' */
("undefined"===typeof window?global:window).__dec7139bfb210c49a7a16fe32dc7bd56=function(){function a(d,c){Array.prototype.forEach.call(document.body.children,function(a){!a.getAttribute("aria-hidden")&&!a.className.match(/\baui-layer\b/)&&(a.setAttribute("aria-hidden","true"),f.push(a))});b||(b=document.body);!0===d&&h();var e=!!a.$dim&&"false"===a.$dim.attr("aria-hidden");a.$dim&&(a.$dim.remove(),a.$dim=null);a.$dim=(0,i.default)("<div></div>").addClass("aui-blanket");a.$dim.attr("tabindex","0");
a.$dim.appendTo(document.body);e||((0,j.recomputeStyle)(a.$dim),a.cachedOverflow={overflow:b.style.overflow,overflowX:b.style.overflowX,overflowY:b.style.overflowY},b.style.overflowX="hidden",b.style.overflowY="hidden",b.style.overflow="hidden");a.$dim.attr("aria-hidden","false");c&&a.$dim.css({zIndex:c});return a.$dim}function g(){f.forEach(function(a){a.removeAttribute("aria-hidden")});f=[];a.$dim&&(a.$dim.attr("aria-hidden","true"),b&&(b.style.overflow=a.cachedOverflow.overflow,b.style.overflowX=
a.cachedOverflow.overflowX,b.style.overflowY=a.cachedOverflow.overflowY))}var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.undim=c.dim=void 0;var e=__02fa0d2334b5d2f9701871403ba9d89a,i=e&&e.__esModule?e:{"default":e},e=__9ea35e3451360b72ebe8cb8006239936,j=__1e5eff515fb8ea62ccd80d65455e88cd,d=__fb27ffae84b96c14bf339e62cefcf116,d=d&&d.__esModule?d:{"default":d},b,f=[],h=(0,e.getMessageLogger)("useShim",{extraInfo:"useShim has no alternative as it is now calculated by dim()."});
(0,d.default)("dim",a);(0,d.default)("undim",g);c.dim=a;c.undim=g;return c}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-plugins-jquery-aop', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/plugins/jquery.aop.js' */
("undefined"===typeof window?global:window).__1e248b524e80bbfe22e4d8b950ee0e79=function(){for(var g=!0,h,i=Object.prototype.toString,j={},q={1:"element",3:"textnode",9:"document",11:"fragment"},k="Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" "),l=k.length;l--;){var m=k[l],n=window[m];if(n)try{j[i.call(new n)]=m.toLowerCase()}catch(r){}}h=function(a){return null==a&&(void 0===a?"undefined":"null")||
a.nodeType&&q[a.nodeType]||"number"==typeof a.length&&(a.callee&&"arguments"||a.alert&&"window"||a.item&&"nodelist")||j[i.call(a)]};var o=function(a,c,d){var f=a[c],b;1==d.type||2==d.type||3==d.type?b=function(){var a,b=null;try{a=f.apply(this,arguments)}catch(e){b=e}if(1==d.type)if(null==b)a=d.value.apply(this,[a,c]);else throw b;else 2==d.type&&null!=b?a=d.value.apply(this,[b,c]):3==d.type&&(a=d.value.apply(this,[a,b,c]));return a}:4==d.type?b=function(){d.value.apply(this,[arguments,c]);return f.apply(this,
arguments)}:6==d.type?b=function(){return d.value.apply(this,arguments)}:5==d.type&&(b=function(){var a=this,b=Array.prototype.slice.call(arguments);return d.value.apply(a,[{arguments:b,method:c,proceed:function(){return f.apply(a,b)}}])});b.unweave=function(){a[c]=f;pointcut=a=b=f=null};return a[c]=b},p=function(a,c,d){var f=[],b;for(b in a){var e=null;try{e=a[b]}catch(g){}null!=e&&(b.match(c.method)&&"function"==h(e))&&(f[f.length]={source:a,method:b,advice:d})}return f},e=function(a,c){var d="undefined"!=
typeof a.target.prototype?a.target.prototype:a.target,f=[];if(6!=c.type&&"undefined"==typeof d[a.method]){var b=p(a.target,a,c);0==b.length&&(b=p(d,a,c));for(var e in b)f[f.length]=o(b[e].source,b[e].method,b[e].advice)}else f[0]=o(d,a.method,c);return g?f:f[0]};jQuery.aop={after:function(a,c){return e(a,{type:1,value:c})},afterThrow:function(a,c){return e(a,{type:2,value:c})},afterFinally:function(a,c){return e(a,{type:3,value:c})},before:function(a,c){return e(a,{type:4,value:c})},around:function(a,
c){return e(a,{type:5,value:c})},introduction:function(a,c){return e(a,{type:6,value:c})},setup:function(a){g=a.regexMatch}};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-drop-down', location = 'node_modules/@atlassian/aui/src/js/aui/drop-down.js' */
("undefined"===typeof window?global:window).__ba86f2e4194e5fc8b0bbd4a992db49b9=function(){function r(a){if(a&&a.__esModule)return a;var d={};if(null!=a)for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(d[b]=a[b]);d.default=a;return d}function d(c,h){var b=null,s=[],o=!1,q=(0,a.default)(document),g={item:"li:has(a)",activeClass:"active",alignment:"right",displayHandler:function(a){return a.name},escapeHandler:function(){this.hide("escape");return!1},hideHandler:function(){},moveHandler:function(){},
useDisabled:!1};a.default.extend(g,h);g.alignment={left:"left",right:"right"}[g.alignment.toLowerCase()]||"left";if(c&&c.jquery)b=c;else if("string"===typeof c)b=(0,a.default)(c);else if(c&&c.constructor===Array){for(var b=(0,a.default)("<div></div>").addClass("aui-dropdown").toggleClass("hidden",!!g.isHiddenByDefault),t=0,x=c.length;t<x;t++){for(var i=(0,a.default)("<ol></ol>"),e=0,n=c[t].length;e<n;e++){var j=(0,a.default)("<li></li>"),k=c[t][e];k.href?(j.append((0,a.default)("<a></a>").html("<span>"+
g.displayHandler(k)+"</span>").attr({href:k.href}).addClass(k.className)),a.default.data((0,a.default)("a > span",j)[0],"properties",k)):j.html(k.html).addClass(k.className);k.icon&&j.prepend((0,a.default)("<img />").attr("src",k.icon));k.insideSpanIcon&&j.children("a").prepend((0,a.default)("<span></span>").attr("class","icon"));k.iconFontClass&&j.children("a").prepend((0,a.default)("<span></span>").addClass("aui-icon aui-icon-small aui-iconfont-"+k.iconFontClass));a.default.data(j[0],"properties",
k);i.append(j)}t===x-1&&i.addClass("last");b.append(i)}(0,a.default)("body").append(b)}else throw Error("dropDown function was called with illegal parameter. Should be $ object, $ selector or array.");var l=function(){p(1)},m=function(){p(-1)},p=function(b){var c=!o,f=d.current.$[0],e=d.current.links,h=f.focused;o=!0;if(0!==e.length){f.focused="number"===typeof h?h:-1;if(!d.current)return y.log("move - not current, aborting"),!0;f.focused+=b;0>f.focused?f.focused=e.length-1:f.focused>=e.length&&(f.focused=
0);g.moveHandler((0,a.default)(e[f.focused]),0>b?"up":"down");c&&e.length?((0,a.default)(e[f.focused]).addClass(g.activeClass),o=!1):e.length||(o=!1)}},u=function(b){if(!d.current)return!0;var e=b.which,f=d.current.$[0],c=d.current.links;d.current.cleanActive();switch(e){case 40:l();break;case 38:m();break;case 27:return g.escapeHandler.call(d.current,b);case 13:return 0<=f.focused?g.selectionHandler?g.selectionHandler.call(d.current,b,(0,a.default)(c[f.focused])):"a"!=(0,a.default)(c[f.focused]).attr("nodeName")?
(0,a.default)("a",c[f.focused]).trigger("focus"):(0,a.default)(c[f.focused]).trigger("focus"):!0;default:return c.length&&(0,a.default)(c[f.focused]).addClass(g.activeClass),!0}b.stopPropagation();b.preventDefault();return!1},v=function(a){a&&a.which&&3==a.which||a&&a.button&&2==a.button||d.current&&d.current.hide("click")},w=function(b){return function(){d.current&&(d.current.cleanFocus(),this.originalClass=this.className,(0,a.default)(this).addClass(g.activeClass),d.current.$[0].focused=b)}},r=
function(b){if(b.button||b.metaKey||b.ctrlKey||b.shiftKey)return!0;d.current&&g.selectionHandler&&g.selectionHandler.call(d.current,b,(0,a.default)(this))};b.each(function(){var b=this,c=(0,a.default)(this),f={},e={reset:function(){f=a.default.extend(f,{$:c,links:(0,a.default)(g.item||"li:has(a)",b),cleanActive:function(){b.focused+1&&f.links.length&&(0,a.default)(f.links[b.focused]).removeClass(g.activeClass)},cleanFocus:function(){f.cleanActive();b.focused=-1},moveDown:l,moveUp:m,moveFocus:u,getFocusIndex:function(){return"number"==
typeof b.focused?b.focused:-1}});f.links.each(function(b){var c=(0,a.default)(this),d=!1;c.data("events")&&a.default.each(c.data("events"),function(b,c){a.default.each(c,function(b,a){if(r===a)return d=!0,!1})});d||(c.hover(w(b),f.cleanFocus),c.click(r))})},appear:function(a){a?(c.removeClass("hidden"),c.addClass("aui-dropdown-"+g.alignment)):c.addClass("hidden")},fade:function(a){a?c.fadeIn("fast"):c.fadeOut("fast")},scroll:function(a){a?c.slideDown("fast"):c.slideUp("fast")}};f.reset=e.reset;f.reset();
f.addControlProcess=function(b,c){a.default.aop.around({target:this,method:b},c)};f.addCallback=function(b,c){return a.default.aop.after({target:this,method:b},c)};f.show=function(c){if(!g.useDisabled||!this.$.closest(".aui-dd-parent").hasClass("disabled"))this.alignment=g.alignment,v(),d.current=this,this.method=c||this.method||"appear",this.timer=setTimeout(function(){q.click(v)},0),q.keydown(u),g.firstSelected&&this.links[0]&&w(0).call(this.links[0]),(0,a.default)(b.offsetParent).css({zIndex:2E3}),
e[this.method](!0),(0,a.default)(document).trigger("showLayer",["dropdown",d.current])};f.hide=function(b){this.method=this.method||"appear";(0,a.default)(c.get(0).offsetParent).css({zIndex:""});this.cleanFocus();e[this.method](!1);q.unbind("click",v).unbind("keydown",u);(0,a.default)(document).trigger("hideLayer",["dropdown",d.current]);d.current=null;return b};f.addCallback("reset",function(){g.firstSelected&&this.links[0]&&w(0).call(this.links[0])});d.iframes||(d.iframes=[]);d.createShims=function z(){(0,
a.default)("iframe").each(function(){if(!this.shim){this.shim=(0,a.default)("<div />").addClass("shim hidden").appendTo("body");d.iframes.push(this)}});return z}();f.addCallback("show",function(){(0,a.default)(d.iframes).each(function(){var b=(0,a.default)(this);if(b.is(":visible")){var c=b.offset();c.height=b.height();c.width=b.width();this.shim.css({left:c.left+"px",top:c.top+"px",height:c.height+"px",width:c.width+"px"}).removeClass("hidden")}})});f.addCallback("hide",function(){(0,a.default)(d.iframes).each(function(){this.shim.addClass("hidden")});
g.hideHandler()});s.push(f)});return s}var p={};"use strict";Object.defineProperty(p,"__esModule",{value:!0});var l=__02fa0d2334b5d2f9701871403ba9d89a,a=l&&l.__esModule?l:{"default":l};__1e248b524e80bbfe22e4d8b950ee0e79;var l=r(__9ea35e3451360b72ebe8cb8006239936),y=r(__8139e9a1368a0224fc430963d21930c8),m=__fb27ffae84b96c14bf339e62cefcf116,m=m&&m.__esModule?m:{"default":m};d.getAdditionalPropertyValue=function(c,d){var b=c[0];(!b||"string"!==typeof b.tagName||"li"!==b.tagName.toLowerCase())&&y.log("dropDown.getAdditionalPropertyValue : item passed in should be an LI element wrapped by jQuery");
return(b=a.default.data(b,"properties"))?b[d]:null};d.removeAllAdditionalProperties=function(){};d.Standard=function(c){var h=[],b={selector:".aui-dd-parent",dropDown:".aui-dropdown",trigger:".aui-dd-trigger"};a.default.extend(b,c);var s=function(c,d,g,e){a.default.extend(e,{trigger:c});d.addClass("dd-allocated");g.addClass("hidden");!1==b.isHiddenByDefault&&e.show();e.addCallback("show",function(){d.addClass("active")});e.addCallback("hide",function(){d.removeClass("active")})},o=function(b,a,c,
e){e!=d.current&&(c.css({top:a.outerHeight()}),e.show(),b.stopImmediatePropagation());b.preventDefault()};if(b.useLiveEvents){var q=[],g=[];(0,a.default)(b.trigger).live("click",function(c){var h=(0,a.default)(this),i,e,n;if(0<=(i=a.default.inArray(this,q))){var j=g[i];e=j.dropdown;n=j.ddcontrol}else{i=h.closest(b.selector);e=i.find(b.dropDown);if(0===e.length)return;n=d(e,b)[0];if(!n)return;q.push(this);j={parent:i,dropdown:e,ddcontrol:n};s(h,i,e,n);g.push(j)}o(c,h,e,n)})}else c=this instanceof a.default?
this:(0,a.default)(b.selector),c=c.not(".dd-allocated").filter(":has("+b.dropDown+")").filter(":has("+b.trigger+")"),c.each(function(){var c=(0,a.default)(this),g=(0,a.default)(b.dropDown,this),i=(0,a.default)(b.trigger,this),e=d(g,b)[0];a.default.extend(e,{trigger:i});s(i,c,g,e);i.click(function(b){o(b,i,g,e)});h.push(e)});return h};d.Ajax=function(c){var h={cache:!0};a.default.extend(h,c||{});c=d.Standard.call(this,h);(0,a.default)(c).each(function(){var b=this;a.default.extend(b,{getAjaxOptions:function(c){var d=
function(a){h.formatResults&&(a=h.formatResults(a));h.cache&&b.cache.set(b.getAjaxOptions(),a);b.refreshSuccess(a)};return h.ajaxOptions?a.default.isFunction(h.ajaxOptions)?a.default.extend(h.ajaxOptions.call(b),{success:d}):a.default.extend(h.ajaxOptions,{success:d}):a.default.extend(c,{success:d})},refreshSuccess:function(b){this.$.html(b)},cache:function(){var b={};return{get:function(a){return b[(a.url+(a.data||"")).replace(/[\?\&]/gi,"")]},set:function(a,c){b[(a.url+(a.data||"")).replace(/[\?\&]/gi,
"")]=c},reset:function(){b={}}}}(),show:function(c){return function(){h.cache&&b.cache.get(b.getAjaxOptions())?(b.refreshSuccess(b.cache.get(b.getAjaxOptions())),c.call(b)):((0,a.default)(a.default.ajax(b.getAjaxOptions())).throbber({target:b.$,end:function(){b.reset()}}),c.call(b),b.iframeShim&&b.iframeShim.hide())}}(b.show),resetCache:function(){b.cache.reset()}});b.addCallback("refreshSuccess",function(){b.reset()})});return c};a.default.fn.dropDown=function(a,h){a=(a||"Standard").replace(/^([a-z])/,
function(a){return a.toUpperCase()});return d[a].call(this,h)};a.default.fn.dropDown=l.construct(a.default.fn.dropDown,"Dropdown constructor",{alternativeName:"Dropdown2"});(0,m.default)("dropDown",d);p.default=d;return p=p["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:dropdown', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/plugins/jquery.aop.js' */
("undefined"===typeof window?global:window).__1e248b524e80bbfe22e4d8b950ee0e79=function(){for(var g=!0,h,i=Object.prototype.toString,j={},q={1:"element",3:"textnode",9:"document",11:"fragment"},k="Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" "),l=k.length;l--;){var m=k[l],n=window[m];if(n)try{j[i.call(new n)]=m.toLowerCase()}catch(r){}}h=function(a){return null==a&&(void 0===a?"undefined":"null")||
a.nodeType&&q[a.nodeType]||"number"==typeof a.length&&(a.callee&&"arguments"||a.alert&&"window"||a.item&&"nodelist")||j[i.call(a)]};var o=function(a,c,d){var f=a[c],b;1==d.type||2==d.type||3==d.type?b=function(){var a,b=null;try{a=f.apply(this,arguments)}catch(e){b=e}if(1==d.type)if(null==b)a=d.value.apply(this,[a,c]);else throw b;else 2==d.type&&null!=b?a=d.value.apply(this,[b,c]):3==d.type&&(a=d.value.apply(this,[a,b,c]));return a}:4==d.type?b=function(){d.value.apply(this,[arguments,c]);return f.apply(this,
arguments)}:6==d.type?b=function(){return d.value.apply(this,arguments)}:5==d.type&&(b=function(){var a=this,b=Array.prototype.slice.call(arguments);return d.value.apply(a,[{arguments:b,method:c,proceed:function(){return f.apply(a,b)}}])});b.unweave=function(){a[c]=f;pointcut=a=b=f=null};return a[c]=b},p=function(a,c,d){var f=[],b;for(b in a){var e=null;try{e=a[b]}catch(g){}null!=e&&(b.match(c.method)&&"function"==h(e))&&(f[f.length]={source:a,method:b,advice:d})}return f},e=function(a,c){var d="undefined"!=
typeof a.target.prototype?a.target.prototype:a.target,f=[];if(6!=c.type&&"undefined"==typeof d[a.method]){var b=p(a.target,a,c);0==b.length&&(b=p(d,a,c));for(var e in b)f[f.length]=o(b[e].source,b[e].method,b[e].advice)}else f[0]=o(d,a.method,c);return g?f:f[0]};jQuery.aop={after:function(a,c){return e(a,{type:1,value:c})},afterThrow:function(a,c){return e(a,{type:2,value:c})},afterFinally:function(a,c){return e(a,{type:3,value:c})},before:function(a,c){return e(a,{type:4,value:c})},around:function(a,
c){return e(a,{type:5,value:c})},introduction:function(a,c){return e(a,{type:6,value:c})},setup:function(a){g=a.regexMatch}};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.soy.soy-template-plugin:soy-deps', location = 'soy-template-module/js/soyutils.js' */
/*!
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var goog=goog||{};goog.global=this;COMPILED=true;goog.global.CLOSURE_UNCOMPILED_DEFINES;goog.global.CLOSURE_DEFINES;goog.isDef=function(a){return a!==void 0};goog.exportPath_=function(c,a,f){var d=c.split(".");var e=f||goog.global;if(!(d[0] in e)&&e.execScript){e.execScript("var "+d[0])}for(var b;d.length&&(b=d.shift());){if(!d.length&&goog.isDef(a)){e[b]=a}else{if(e[b]){e=e[b]}else{e=e[b]={}}}}};goog.define=function(b,a){var c=a;if(!COMPILED){if(goog.global.CLOSURE_UNCOMPILED_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES,b)){c=goog.global.CLOSURE_UNCOMPILED_DEFINES[b]}else{if(goog.global.CLOSURE_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES,b)){c=goog.global.CLOSURE_DEFINES[b]}}}goog.exportPath_(b,c)};goog.DEBUG=true;goog.define("goog.LOCALE","en");goog.define("goog.TRUSTED_SITE",true);goog.define("goog.STRICT_MODE_COMPATIBLE",false);goog.define("goog.DISALLOW_TEST_ONLY_CODE",COMPILED&&!goog.DEBUG);goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a)){throw Error('Namespace "'+a+'" already declared.')}}goog.constructNamespace_(a)};goog.constructNamespace_=function(a,c){if(!COMPILED){delete goog.implicitNamespaces_[a];var b=a;while((b=b.substring(0,b.lastIndexOf(".")))){if(goog.getObjectByName(b)){break}goog.implicitNamespaces_[b]=true}}goog.exportPath_(a,c)};goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;goog.module=function(a){if(!goog.isString(a)||!a||a.search(goog.VALID_MODULE_RE_)==-1){throw Error("Invalid module identifier")}if(!goog.isInModuleLoader_()){throw Error("Module "+a+" has been loaded incorrectly.")}if(goog.moduleLoaderState_.moduleName){throw Error("goog.module may only be called once per module.")}goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a)){throw Error('Namespace "'+a+'" already declared.')}delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};goog.module.getInternal_=function(a){if(!COMPILED){if(goog.isProvided_(a)){return a in goog.loadedModules_?goog.loadedModules_[a]:goog.getObjectByName(a)}else{return null}}};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return goog.moduleLoaderState_!=null};goog.module.declareTestMethods=function(){if(!goog.isInModuleLoader_()){throw new Error("goog.module.declareTestMethods must be called from within a goog.module")}goog.moduleLoaderState_.declareTestMethods=true};goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInModuleLoader_()){throw new Error("goog.module.declareLegacyNamespace must be called from within a goog.module")}if(!COMPILED&&!goog.moduleLoaderState_.moduleName){throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.")}goog.moduleLoaderState_.declareLegacyNamespace=true};goog.setTestOnly=function(a){if(goog.DISALLOW_TEST_ONLY_CODE){a=a||"";throw Error("Importing test-only code into non-debug environment"+(a?": "+a:"."))}};goog.forwardDeclare=function(a){};if(!COMPILED){goog.isProvided_=function(a){return(a in goog.loadedModules_)||(!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a)))};goog.implicitNamespaces_={"goog.module":true}}goog.getObjectByName=function(b,c){var d=b.split(".");var e=c||goog.global;for(var a;a=d.shift();){if(goog.isDefAndNotNull(e[a])){e=e[a]}else{return null}}return e};goog.globalize=function(d,b){var c=b||goog.global;for(var a in d){c[a]=d[a]}};goog.addDependency=function(f,e,l,d){if(goog.DEPENDENCIES_ENABLED){var g,a;var k=f.replace(/\\/g,"/");var h=goog.dependencies_;for(var c=0;g=e[c];c++){h.nameToPath[g]=k;h.pathIsModule[k]=!!d}for(var b=0;a=l[b];b++){if(!(k in h.requires)){h.requires[k]={}}h.requires[k][a]=true}}};goog.define("goog.ENABLE_DEBUG_LOADER",true);goog.logToConsole_=function(a){if(goog.global.console){goog.global.console.error(a)}};goog.require=function(b){if(!COMPILED){if(goog.ENABLE_DEBUG_LOADER&&goog.IS_OLD_IE_){goog.maybeProcessDeferredDep_(b)}if(goog.isProvided_(b)){if(goog.isInModuleLoader_()){return goog.module.getInternal_(b)}else{return null}}if(goog.ENABLE_DEBUG_LOADER){var c=goog.getPathFromDeps_(b);if(c){goog.included_[c]=true;goog.writeScripts_();return null}}var a="goog.require could not find: "+b;goog.logToConsole_(a);throw Error(a)}};goog.basePath="";goog.global.CLOSURE_BASE_PATH;goog.global.CLOSURE_NO_DEPS;goog.global.CLOSURE_IMPORT_SCRIPT;goog.nullFunction=function(){};goog.identityFunction=function(b,a){return b};goog.abstractMethod=function(){throw Error("unimplemented abstract method")};goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_){return a.instance_}if(goog.DEBUG){goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a}return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.define("goog.LOAD_MODULE_USING_EVAL",true);goog.define("goog.SEAL_MODULE_EXPORTS",goog.DEBUG);goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;if(goog.DEPENDENCIES_ENABLED){goog.included_={};goog.dependencies_={pathIsModule:{},nameToPath:{},requires:{},visited:{},written:{},deferred:{}};goog.inHtmlDocument_=function(){var a=goog.global.document;return typeof a!="undefined"&&"write" in a};goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH){goog.basePath=goog.global.CLOSURE_BASE_PATH;return}else{if(!goog.inHtmlDocument_()){return}}var f=goog.global.document;var a=f.getElementsByTagName("script");for(var d=a.length-1;d>=0;--d){var c=(a[d]);var g=c.src;var e=g.lastIndexOf("?");var b=e==-1?g.length:e;if(g.substr(b-7,7)=="base.js"){goog.basePath=g.substr(0,b-7);return}}};goog.importScript_=function(c,a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;if(b(c,a)){goog.dependencies_.written[c]=true}};goog.IS_OLD_IE_=goog.global.document&&goog.global.document.all&&!goog.global.atob;goog.importModule_=function(b){var a='goog.retrieveAndExecModule_("'+b+'");';if(goog.importScript_("",a)){goog.dependencies_.written[b]=true}};goog.queuedModules_=[];goog.wrapModule_=function(b,a){if(!goog.LOAD_MODULE_USING_EVAL||!goog.isDef(goog.global.JSON)){return'goog.loadModule(function(exports) {"use strict";'+a+"\n;return exports});\n//# sourceURL="+b+"\n"}else{return"goog.loadModule("+goog.global.JSON.stringify(a+"\n//# sourceURL="+b+"\n")+");"}};goog.loadQueuedModules_=function(){var c=goog.queuedModules_.length;if(c>0){var a=goog.queuedModules_;goog.queuedModules_=[];for(var b=0;b<c;b++){var d=a[b];goog.maybeProcessDeferredPath_(d)}}};goog.maybeProcessDeferredDep_=function(a){if(goog.isDeferredModule_(a)&&goog.allDepsAreAvailable_(a)){var b=goog.getPathFromDeps_(a);goog.maybeProcessDeferredPath_(goog.basePath+b)}};goog.isDeferredModule_=function(a){var c=goog.getPathFromDeps_(a);if(c&&goog.dependencies_.pathIsModule[c]){var b=goog.basePath+c;return(b) in goog.dependencies_.deferred}return false};goog.allDepsAreAvailable_=function(a){var b=goog.getPathFromDeps_(a);if(b&&(b in goog.dependencies_.requires)){for(var c in goog.dependencies_.requires[b]){if(!goog.isProvided_(c)&&!goog.isDeferredModule_(c)){return false}}}return true};goog.maybeProcessDeferredPath_=function(a){if(a in goog.dependencies_.deferred){var b=goog.dependencies_.deferred[a];delete goog.dependencies_.deferred[a];goog.globalEval(b)}};goog.loadModule=function(d){var a=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:undefined,declareTestMethods:false};var b;if(goog.isFunction(d)){b=d.call(goog.global,{})}else{if(goog.isString(d)){b=goog.loadModuleFromSource_.call(goog.global,d)}else{throw Error("Invalid module definition")}}var c=goog.moduleLoaderState_.moduleName;if(!goog.isString(c)||!c){throw Error('Invalid module name "'+c+'"')}if(goog.moduleLoaderState_.declareLegacyNamespace){goog.constructNamespace_(c,b)}else{if(goog.SEAL_MODULE_EXPORTS&&Object.seal){Object.seal(b)}}goog.loadedModules_[c]=b;if(goog.moduleLoaderState_.declareTestMethods){for(var e in b){if(e.indexOf("test",0)===0||e=="tearDown"||e=="setUp"||e=="setUpPage"||e=="tearDownPage"){goog.global[e]=b[e]}}}}finally{goog.moduleLoaderState_=a}};goog.loadModuleFromSource_=function(source){var exports={};eval(arguments[0]);return exports};goog.writeScriptTag_=function(e,b){if(goog.inHtmlDocument_()){var c=goog.global.document;if(c.readyState=="complete"){var f=/\bdeps.js$/.test(e);if(f){return false}else{throw Error('Cannot write "'+e+'" after document load')}}var d=goog.IS_OLD_IE_;if(b===undefined){if(!d){c.write('<script type="text/javascript" src="'+e+'"><\/script>')}else{var a=" onreadystatechange='goog.onScriptLoad_(this, "+ ++goog.lastNonModuleScriptIndex_+")' ";c.write('<script type="text/javascript" src="'+e+'"'+a+"><\/script>")}}else{c.write('<script type="text/javascript">'+b+"<\/script>")}return true}else{return false}};goog.lastNonModuleScriptIndex_=0;goog.onScriptLoad_=function(a,b){if(a.readyState=="complete"&&goog.lastNonModuleScriptIndex_==b){goog.loadQueuedModules_()}return true};goog.writeScripts_=function(){var a=[];var b={};var g=goog.dependencies_;function e(i){if(i in g.written){return}if(i in g.visited){if(!(i in b)){b[i]=true;a.push(i)}return}g.visited[i]=true;if(i in g.requires){for(var j in g.requires[i]){if(!goog.isProvided_(j)){if(j in g.nameToPath){e(g.nameToPath[j])}else{throw Error("Undefined nameToPath for "+j)}}}}if(!(i in b)){b[i]=true;a.push(i)}}for(var d in goog.included_){if(!g.written[d]){e(d)}}for(var c=0;c<a.length;c++){var d=a[c];goog.dependencies_.written[d]=true}var h=goog.moduleLoaderState_;goog.moduleLoaderState_=null;var f=false;for(var c=0;c<a.length;c++){var d=a[c];if(d){if(!g.pathIsModule[d]){goog.importScript_(goog.basePath+d)}else{f=true;goog.importModule_(goog.basePath+d)}}else{goog.moduleLoaderState_=h;throw Error("Undefined script input")}}goog.moduleLoaderState_=h};goog.getPathFromDeps_=function(a){if(a in goog.dependencies_.nameToPath){return goog.dependencies_.nameToPath[a]}else{return null}};goog.findBasePath_();if(!goog.global.CLOSURE_NO_DEPS){goog.importScript_(goog.basePath+"deps.js")}}goog.normalizePath_=function(c){var b=c.split("/");var a=0;while(a<b.length){if(b[a]=="."){b.splice(a,1)}else{if(a&&b[a]==".."&&b[a-1]&&b[a-1]!=".."){b.splice(--a,2)}else{a++}}}return b.join("/")};goog.retrieveAndExecModule_=function(g){if(!COMPILED){var d=g;g=goog.normalizePath_(g);var c=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;var b=null;var f=new goog.global.XMLHttpRequest();f.onload=function(){b=this.responseText};f.open("get",g,false);f.send();b=f.responseText;if(b!=null){var a=goog.wrapModule_(g,b);var e=goog.IS_OLD_IE_;if(e){goog.dependencies_.deferred[d]=a;goog.queuedModules_.push(d)}else{c(g,a)}}else{throw new Error("load of "+g+"failed")}}};goog.typeOf=function(c){var b=typeof c;if(b=="object"){if(c){if(c instanceof Array){return"array"}else{if(c instanceof Object){return b}}var a=Object.prototype.toString.call((c));if(a=="[object Window]"){return"object"}if((a=="[object Array]"||typeof c.length=="number"&&typeof c.splice!="undefined"&&typeof c.propertyIsEnumerable!="undefined"&&!c.propertyIsEnumerable("splice"))){return"array"}if((a=="[object Function]"||typeof c.call!="undefined"&&typeof c.propertyIsEnumerable!="undefined"&&!c.propertyIsEnumerable("call"))){return"function"}}else{return"null"}}else{if(b=="function"&&typeof c.call=="undefined"){return"object"}}return b};goog.isNull=function(a){return a===null};goog.isDefAndNotNull=function(a){return a!=null};goog.isArray=function(a){return goog.typeOf(a)=="array"};goog.isArrayLike=function(b){var a=goog.typeOf(b);return a=="array"||a=="object"&&typeof b.length=="number"};goog.isDateLike=function(a){return goog.isObject(a)&&typeof a.getFullYear=="function"};goog.isString=function(a){return typeof a=="string"};goog.isBoolean=function(a){return typeof a=="boolean"};goog.isNumber=function(a){return typeof a=="number"};goog.isFunction=function(a){return goog.typeOf(a)=="function"};goog.isObject=function(b){var a=typeof b;return a=="object"&&b!=null||a=="function"};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return !!a[goog.UID_PROPERTY_]};goog.removeUid=function(b){if("removeAttribute" in b){b.removeAttribute(goog.UID_PROPERTY_)}try{delete b[goog.UID_PROPERTY_]}catch(a){}};goog.UID_PROPERTY_="closure_uid_"+((Math.random()*1000000000)>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(c){var b=goog.typeOf(c);if(b=="object"||b=="array"){if(c.clone){return c.clone()}var d=b=="array"?[]:{};for(var a in c){d[a]=goog.cloneObject(c[a])}return d}return c};goog.bindNative_=function(a,c,b){return(a.call.apply(a.bind,arguments))};goog.bindJs_=function(a,d,b){if(!a){throw new Error()}if(arguments.length>2){var c=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,c);return a.apply(d,e)}}else{return function(){return a.apply(d,arguments)}}};goog.bind=function(a,c,b){if(Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1){goog.bind=goog.bindNative_}else{goog.bind=goog.bindJs_}return goog.bind.apply(null,arguments)};goog.partial=function(b,c){var a=Array.prototype.slice.call(arguments,1);return function(){var d=a.slice();d.push.apply(d,arguments);return b.apply(this,d)}};goog.mixin=function(c,b){for(var a in b){c[a]=b[a]}};goog.now=(goog.TRUSTED_SITE&&Date.now)||(function(){return +new Date()});goog.globalEval=function(script){if(goog.global.execScript){goog.global.execScript(script,"JavaScript")}else{if(goog.global.eval){if(goog.evalWorksForGlobals_==null){goog.global.eval("var _et_ = 1;");if(typeof goog.global._et_!="undefined"){delete goog.global._et_;goog.evalWorksForGlobals_=true}else{goog.evalWorksForGlobals_=false}}if(goog.evalWorksForGlobals_){goog.global.eval(script)}else{var doc=goog.global.document;var scriptElt=doc.createElement("script");scriptElt.type="text/javascript";scriptElt.defer=false;scriptElt.appendChild(doc.createTextNode(script));doc.body.appendChild(scriptElt);doc.body.removeChild(scriptElt)}}else{throw Error("goog.globalEval not available")}}};goog.evalWorksForGlobals_=null;goog.cssNameMapping_;goog.cssNameMappingStyle_;goog.getCssName=function(e,c){var d=function(f){return goog.cssNameMapping_[f]||f};var b=function(j){var h=j.split("-");var f=[];for(var g=0;g<h.length;g++){f.push(d(h[g]))}return f.join("-")};var a;if(goog.cssNameMapping_){a=goog.cssNameMappingStyle_=="BY_WHOLE"?d:b}else{a=function(f){return f}}if(c){return e+"-"+a(c)}else{return a(e)}};goog.setCssNameMapping=function(b,a){goog.cssNameMapping_=b;goog.cssNameMappingStyle_=a};goog.global.CLOSURE_CSS_NAME_MAPPING;if(!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING){goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING}goog.getMsg=function(a,b){if(b){a=a.replace(/\{\$([^}]+)}/g,function(c,d){return d in b?b[d]:c})}return a};goog.getMsgWithFallback=function(d,c){return d};goog.exportSymbol=function(b,a,c){goog.exportPath_(b,a,c)};goog.exportProperty=function(b,a,c){b[a]=c};goog.inherits=function(b,a){function c(){}c.prototype=a.prototype;b.superClass_=a.prototype;b.prototype=new c();b.prototype.constructor=b;b.base=function(g,d,h){var e=new Array(arguments.length-2);for(var f=2;f<arguments.length;f++){e[f-2]=arguments[f]}return a.prototype[d].apply(g,e)}};goog.base=function(g,c,j){var a=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||(goog.DEBUG&&!a)){throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C")}if(a.superClass_){var b=new Array(arguments.length-1);for(var e=1;e<arguments.length;e++){b[e-1]=arguments[e]}return a.superClass_.constructor.apply(g,b)}var f=new Array(arguments.length-2);for(var e=2;e<arguments.length;e++){f[e-2]=arguments[e]}var d=false;for(var h=g.constructor;h;h=h.superClass_&&h.superClass_.constructor){if(h.prototype[c]===a){d=true}else{if(d){return h.prototype[c].apply(g,f)}}}if(g[c]===a){return g.constructor.prototype[c].apply(g,f)}else{throw Error("goog.base called from a method of one name to a method of a different name")}};goog.scope=function(a){a.call(goog.global)};if(!COMPILED){goog.global.COMPILED=COMPILED}goog.defineClass=function(c,d){var b=d.constructor;var e=d.statics;if(!b||b==Object.prototype.constructor){b=function(){throw Error("cannot instantiate an interface (no constructor defined).")}}var a=goog.defineClass.createSealingConstructor_(b,c);if(c){goog.inherits(a,c)}delete d.constructor;delete d.statics;goog.defineClass.applyProperties_(a.prototype,d);if(e!=null){if(e instanceof Function){e(a)}else{goog.defineClass.applyProperties_(a,e)}}return a};goog.defineClass.ClassDescriptor;goog.define("goog.defineClass.SEAL_CLASS_INSTANCES",goog.DEBUG);goog.defineClass.createSealingConstructor_=function(c,b){if(goog.defineClass.SEAL_CLASS_INSTANCES&&Object.seal instanceof Function){if(b&&b.prototype&&b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]){return c}var a=function(){var d=c.apply(this,arguments)||this;d[goog.UID_PROPERTY_]=d[goog.UID_PROPERTY_];if(this.constructor===a){Object.seal(d)}return d};return a}return c};goog.defineClass.OBJECT_PROTOTYPE_FIELDS_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];goog.defineClass.applyProperties_=function(d,c){var b;for(b in c){if(Object.prototype.hasOwnProperty.call(c,b)){d[b]=c[b]}}for(var a=0;a<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;a++){b=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[a];if(Object.prototype.hasOwnProperty.call(c,b)){d[b]=c[b]}}};goog.tagUnsealableClass=function(a){if(!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES){a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=true}};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";goog.DEBUG=false;goog.inherits=function(b,a){function c(){}c.prototype=a.prototype;b.superClass_=a.prototype;b.prototype=new c();b.prototype.constructor=b;b.base=function(f,d,g){var e=Array.prototype.slice.call(arguments,2);return a.prototype[d].apply(f,e)}};if(!goog.userAgent){goog.userAgent=(function(){var b="";if("undefined"!==typeof navigator&&navigator&&"string"==typeof navigator.userAgent){b=navigator.userAgent}var a=b.indexOf("Opera")==0;return{jscript:{HAS_JSCRIPT:"ScriptEngine" in this},OPERA:a,IE:!a&&b.indexOf("MSIE")!=-1,WEBKIT:!a&&b.indexOf("WebKit")!=-1}})()}if(!goog.asserts){goog.asserts={assert:function(a){if(!a){throw Error("Assertion error")}},fail:function(a){}}}if(!goog.dom){goog.dom={};goog.dom.DomHelper=function(a){this.document_=a||document};goog.dom.DomHelper.prototype.getDocument=function(){return this.document_};goog.dom.DomHelper.prototype.createElement=function(a){return this.document_.createElement(a)};goog.dom.DomHelper.prototype.createDocumentFragment=function(){return this.document_.createDocumentFragment()}}if(!goog.format){goog.format={insertWordBreaks:function(j,a){j=String(j);var f=[];var h=0;var b=false;var k=false;var g=0;var d=0;for(var e=0,c=j.length;e<c;++e){var l=j.charCodeAt(e);if(g>=a&&l!=32){f[h++]=j.substring(d,e);d=e;f[h++]=goog.format.WORD_BREAK;g=0}if(b){if(l==62){b=false}}else{if(k){switch(l){case 59:k=false;++g;break;case 60:k=false;b=true;break;case 32:k=false;g=0;break}}else{switch(l){case 60:b=true;break;case 38:k=true;break;case 32:g=0;break;default:++g;break}}}}f[h++]=j.substring(d);return f.join("")},WORD_BREAK:goog.userAgent.WEBKIT?"<wbr></wbr>":goog.userAgent.OPERA?"&shy;":goog.userAgent.IE?"&#8203;":"<wbr>"}}if(!goog.i18n){goog.i18n={bidi:{}}}goog.i18n.bidi.IS_RTL=false;goog.i18n.bidi.Dir={LTR:1,RTL:-1,NEUTRAL:0,UNKNOWN:0};goog.i18n.bidi.toDir=function(b,a){if(typeof b=="number"){return b>0?goog.i18n.bidi.Dir.LTR:b<0?goog.i18n.bidi.Dir.RTL:a?null:goog.i18n.bidi.Dir.NEUTRAL}else{if(b==null){return null}else{return b?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR}}};goog.i18n.bidi.estimateDirection=function(h,c){var d=0;var a=0;var b=false;var g=soyshim.$$bidiStripHtmlIfNecessary_(h,c).split(soyshim.$$bidiWordSeparatorRe_);for(var f=0;f<g.length;f++){var e=g[f];if(soyshim.$$bidiRtlDirCheckRe_.test(e)){d++;a++}else{if(soyshim.$$bidiIsRequiredLtrRe_.test(e)){b=true}else{if(soyshim.$$bidiLtrCharRe_.test(e)){a++}else{if(soyshim.$$bidiHasNumeralsRe_.test(e)){b=true}}}}}return a==0?(b?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.NEUTRAL):(d/a>soyshim.$$bidiRtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR)};goog.i18n.BidiFormatter=function(a){this.dir_=goog.i18n.bidi.toDir(a,true)};goog.i18n.BidiFormatter.prototype.getContextDir=function(){return this.dir_};goog.i18n.BidiFormatter.prototype.knownDirAttr=function(a){return !a||a==this.dir_?"":a<0?'dir="rtl"':'dir="ltr"'};goog.i18n.BidiFormatter.prototype.endEdge=function(){return this.dir_<0?"left":"right"};goog.i18n.BidiFormatter.prototype.mark=function(){return((this.dir_>0)?"\u200E":(this.dir_<0)?"\u200F":"")};goog.i18n.BidiFormatter.prototype.markAfterKnownDir=function(b,c,a){if(b==null){b=goog.i18n.bidi.estimateDirection(c,a)}return(this.dir_>0&&(b<0||soyshim.$$bidiIsRtlExitText_(c,a))?"\u200E":this.dir_<0&&(b>0||soyshim.$$bidiIsLtrExitText_(c,a))?"\u200F":"")};goog.i18n.BidiFormatter.prototype.spanWrapWithKnownDir=function(b,d,c){if(b==null){b=goog.i18n.bidi.estimateDirection(d,true)}var a=this.markAfterKnownDir(b,d,true);if(b>0&&this.dir_<=0){d='<span dir="ltr">'+d+"</span>"}else{if(b<0&&this.dir_>=0){d='<span dir="rtl">'+d+"</span>"}}return d+a};goog.i18n.BidiFormatter.prototype.startEdge=function(){return this.dir_<0?"right":"left"};goog.i18n.BidiFormatter.prototype.unicodeWrapWithKnownDir=function(c,d,a){if(c==null){c=goog.i18n.bidi.estimateDirection(d,a)}var b=this.markAfterKnownDir(c,d,a);if(c>0&&this.dir_<=0){d="\u202A"+d+"\u202C"}else{if(c<0&&this.dir_>=0){d="\u202B"+d+"\u202C"}}return d+b};if(!goog.string){goog.string={newLineToBr:function(b,a){b=String(b);if(!goog.string.NEWLINE_TO_BR_RE_.test(b)){return b}return b.replace(/(\r\n|\r|\n)/g,a?"<br />":"<br>")},urlEncode:encodeURIComponent,NEWLINE_TO_BR_RE_:/[\r\n]/}}goog.string.StringBuffer=function(a,b){this.buffer_=goog.userAgent.jscript.HAS_JSCRIPT?[]:"";if(a!=null){this.append.apply(this,arguments)}};goog.string.StringBuffer.prototype.bufferLength_=0;goog.string.StringBuffer.prototype.append=function(c,b,e){if(goog.userAgent.jscript.HAS_JSCRIPT){if(b==null){this.buffer_[this.bufferLength_++]=c}else{var a=(this.buffer_);a.push.apply(a,arguments);this.bufferLength_=this.buffer_.length}}else{this.buffer_+=c;if(b!=null){for(var d=1;d<arguments.length;d++){this.buffer_+=arguments[d]}}}return this};goog.string.StringBuffer.prototype.clear=function(){if(goog.userAgent.jscript.HAS_JSCRIPT){this.buffer_.length=0;this.bufferLength_=0}else{this.buffer_=""}};goog.string.StringBuffer.prototype.toString=function(){if(goog.userAgent.jscript.HAS_JSCRIPT){var a=this.buffer_.join("");this.clear();if(a){this.append(a)}return a}else{return(this.buffer_)}};if(!goog.soy){goog.soy={renderAsElement:function(c,a,b,d){return(soyshim.$$renderWithWrapper_(c,a,d,true,b))},renderAsFragment:function(c,a,b,d){return soyshim.$$renderWithWrapper_(c,a,d,false,b)},renderElement:function(c,d,a,b){c.innerHTML=d(a,null,b)},data:{}}}goog.soy.data.SanitizedContentKind={HTML:goog.DEBUG?{sanitizedContentKindHtml:true}:{},JS:goog.DEBUG?{sanitizedContentJsChars:true}:{},JS_STR_CHARS:goog.DEBUG?{sanitizedContentJsStrChars:true}:{},URI:goog.DEBUG?{sanitizedContentUri:true}:{},ATTRIBUTES:goog.DEBUG?{sanitizedContentHtmlAttribute:true}:{},CSS:goog.DEBUG?{sanitizedContentCss:true}:{},TEXT:goog.DEBUG?{sanitizedContentKindText:true}:{}};goog.soy.data.SanitizedContent=function(){throw Error("Do not instantiate directly")};goog.soy.data.SanitizedContent.prototype.contentKind;goog.soy.data.SanitizedContent.prototype.contentDir=null;goog.soy.data.SanitizedContent.prototype.content;goog.soy.data.SanitizedContent.prototype.toString=function(){return this.content};var soy={esc:{}};var soydata={};soydata.VERY_UNSAFE={};var soyshim={$$DEFAULT_TEMPLATE_DATA_:{}};soyshim.$$renderWithWrapper_=function(h,f,b,c,i){var d=b||document;var a=d.createElement("div");a.innerHTML=h(f||soyshim.$$DEFAULT_TEMPLATE_DATA_,undefined,i);if(a.childNodes.length==1){var g=a.firstChild;if(!c||g.nodeType==1){return(g)}}if(c){return a}var e=d.createDocumentFragment();while(a.firstChild){e.appendChild(a.firstChild)}return e};soyshim.$$bidiStripHtmlIfNecessary_=function(b,a){return a?b.replace(soyshim.$$BIDI_HTML_SKIP_RE_,""):b};soyshim.$$BIDI_HTML_SKIP_RE_=/<[^>]*>|&[^;]+;/g;soyshim.$$bidiLtrChars_="A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";soyshim.$$bidiRtlChars_="\u0591-\u07FF\u200F\uFB1D-\uFDFF\uFE70-\uFEFC";soyshim.$$bidiRtlDirCheckRe_=new RegExp("^[^"+soyshim.$$bidiLtrChars_+"]*["+soyshim.$$bidiRtlChars_+"]");soyshim.$$bidiLtrCharRe_=new RegExp("["+soyshim.$$bidiLtrChars_+"]");soyshim.$$bidiIsRequiredLtrRe_=/^http:\/\/.*/;soyshim.$$bidiHasNumeralsRe_=/\d/;soyshim.$$bidiWordSeparatorRe_=/\s+/;soyshim.$$bidiRtlDetectionThreshold_=0.4;soyshim.$$bidiLtrExitDirCheckRe_=new RegExp("["+soyshim.$$bidiLtrChars_+"][^"+soyshim.$$bidiRtlChars_+"]*$");soyshim.$$bidiRtlExitDirCheckRe_=new RegExp("["+soyshim.$$bidiRtlChars_+"][^"+soyshim.$$bidiLtrChars_+"]*$");soyshim.$$bidiIsLtrExitText_=function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiLtrExitDirCheckRe_.test(b)};soyshim.$$bidiIsRtlExitText_=function(b,a){b=soyshim.$$bidiStripHtmlIfNecessary_(b,a);return soyshim.$$bidiRtlExitDirCheckRe_.test(b)};soy.StringBuilder=goog.string.StringBuffer;soydata.SanitizedContentKind=goog.soy.data.SanitizedContentKind;soydata.isContentKind=function(a,b){return a!=null&&a.contentKind===b};soydata.getContentDir=function(a){if(a!=null){switch(a.contentDir){case goog.i18n.bidi.Dir.LTR:return goog.i18n.bidi.Dir.LTR;case goog.i18n.bidi.Dir.RTL:return goog.i18n.bidi.Dir.RTL;case goog.i18n.bidi.Dir.NEUTRAL:return goog.i18n.bidi.Dir.NEUTRAL}}return null};soydata.SanitizedHtml=function(){goog.soy.data.SanitizedContent.call(this)};goog.inherits(soydata.SanitizedHtml,goog.soy.data.SanitizedContent);soydata.SanitizedHtml.prototype.contentKind=soydata.SanitizedContentKind.HTML;soydata.SanitizedHtml.from=function(a){if(a!=null&&a.contentKind===soydata.SanitizedContentKind.HTML){goog.asserts.assert(a.constructor===soydata.SanitizedHtml);return(a)}return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.esc.$$escapeHtmlHelper(String(a)),soydata.getContentDir(a))};soydata.SanitizedJs=function(){goog.soy.data.SanitizedContent.call(this)};goog.inherits(soydata.SanitizedJs,goog.soy.data.SanitizedContent);soydata.SanitizedJs.prototype.contentKind=soydata.SanitizedContentKind.JS;soydata.SanitizedJs.prototype.contentDir=goog.i18n.bidi.Dir.LTR;soydata.SanitizedJsStrChars=function(){goog.soy.data.SanitizedContent.call(this)};goog.inherits(soydata.SanitizedJsStrChars,goog.soy.data.SanitizedContent);soydata.SanitizedJsStrChars.prototype.contentKind=soydata.SanitizedContentKind.JS_STR_CHARS;soydata.SanitizedUri=function(){goog.soy.data.SanitizedContent.call(this)};goog.inherits(soydata.SanitizedUri,goog.soy.data.SanitizedContent);soydata.SanitizedUri.prototype.contentKind=soydata.SanitizedContentKind.URI;soydata.SanitizedUri.prototype.contentDir=goog.i18n.bidi.Dir.LTR;soydata.SanitizedHtmlAttribute=function(){goog.soy.data.SanitizedContent.call(this)};goog.inherits(soydata.SanitizedHtmlAttribute,goog.soy.data.SanitizedContent);soydata.SanitizedHtmlAttribute.prototype.contentKind=soydata.SanitizedContentKind.ATTRIBUTES;soydata.SanitizedHtmlAttribute.prototype.contentDir=goog.i18n.bidi.Dir.LTR;soydata.SanitizedCss=function(){goog.soy.data.SanitizedContent.call(this)};goog.inherits(soydata.SanitizedCss,goog.soy.data.SanitizedContent);soydata.SanitizedCss.prototype.contentKind=soydata.SanitizedContentKind.CSS;soydata.SanitizedCss.prototype.contentDir=goog.i18n.bidi.Dir.LTR;soydata.UnsanitizedText=function(a,b){this.content=String(a);this.contentDir=b!=null?b:null};goog.inherits(soydata.UnsanitizedText,goog.soy.data.SanitizedContent);soydata.UnsanitizedText.prototype.contentKind=soydata.SanitizedContentKind.TEXT;soydata.$$EMPTY_STRING_={VALUE:""};soydata.$$makeSanitizedContentFactory_=function(b){function a(){}a.prototype=b.prototype;function c(e,f){var d=new a();d.content=String(e);if(f!==undefined){d.contentDir=f}return d}return c};soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_=function(b){function a(){}a.prototype=b.prototype;function c(e){var d=new a();d.content=String(e);return d}return c};soydata.markUnsanitizedText=function(a,b){return new soydata.UnsanitizedText(a,b)};soydata.VERY_UNSAFE.ordainSanitizedHtml=soydata.$$makeSanitizedContentFactory_(soydata.SanitizedHtml);soydata.VERY_UNSAFE.ordainSanitizedJs=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_(soydata.SanitizedJs);soydata.VERY_UNSAFE.ordainSanitizedJsStrChars=soydata.$$makeSanitizedContentFactory_(soydata.SanitizedJsStrChars);soydata.VERY_UNSAFE.ordainSanitizedUri=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_(soydata.SanitizedUri);soydata.VERY_UNSAFE.ordainSanitizedHtmlAttribute=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_(soydata.SanitizedHtmlAttribute);soydata.VERY_UNSAFE.ordainSanitizedCss=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_(soydata.SanitizedCss);soy.renderElement=goog.soy.renderElement;soy.renderAsFragment=function(d,b,a,c){return goog.soy.renderAsFragment(d,b,c,new goog.dom.DomHelper(a))};soy.renderAsElement=function(d,b,a,c){return goog.soy.renderAsElement(d,b,c,new goog.dom.DomHelper(a))};soy.$$IS_LOCALE_RTL=goog.i18n.bidi.IS_RTL;soy.$$augmentMap=function(a,d){function e(){}e.prototype=a;var b=new e();for(var c in d){b[c]=d[c]}return b};soy.$$checkMapKey=function(a){if((typeof a)!="string"){throw Error("Map literal's key expression must evaluate to string (encountered type \""+(typeof a)+'").')}return a};soy.$$getMapKeys=function(c){var b=[];for(var a in c){b.push(a)}return b};soy.$$getDelTemplateId=function(a){return a};soy.$$DELEGATE_REGISTRY_PRIORITIES_={};soy.$$DELEGATE_REGISTRY_FUNCTIONS_={};soy.$$registerDelegateFn=function(f,c,d,b){var e="key_"+f+":"+c;var a=soy.$$DELEGATE_REGISTRY_PRIORITIES_[e];if(a===undefined||d>a){soy.$$DELEGATE_REGISTRY_PRIORITIES_[e]=d;soy.$$DELEGATE_REGISTRY_FUNCTIONS_[e]=b}else{if(d==a){throw Error('Encountered two active delegates with the same priority ("'+f+":"+c+'").')}else{}}};soy.$$getDelegateFn=function(c,b,d){var a=soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_"+c+":"+b];if(!a&&b!=""){a=soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_"+c+":"]}if(a){return a}else{if(d){return soy.$$EMPTY_TEMPLATE_FN_}else{throw Error('Found no active impl for delegate call to "'+c+":"+b+'" (and not allowemptydefault="true").')}}};soy.$$EMPTY_TEMPLATE_FN_=function(a,c,b){return""};soydata.$$makeSanitizedContentFactoryForInternalBlocks_=function(b){function a(){}a.prototype=b.prototype;function c(e,f){var g=String(e);if(!g){return soydata.$$EMPTY_STRING_.VALUE}var d=new a();d.content=String(e);if(f!==undefined){d.contentDir=f}return d}return c};soydata.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_=function(b){function a(){}a.prototype=b.prototype;function c(e){var f=String(e);if(!f){return soydata.$$EMPTY_STRING_.VALUE}var d=new a();d.content=String(e);return d}return c};soydata.$$markUnsanitizedTextForInternalBlocks=function(a,b){var c=String(a);if(!c){return soydata.$$EMPTY_STRING_.VALUE}return new soydata.UnsanitizedText(c,b)};soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks=soydata.$$makeSanitizedContentFactoryForInternalBlocks_(soydata.SanitizedHtml);soydata.VERY_UNSAFE.$$ordainSanitizedJsForInternalBlocks=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(soydata.SanitizedJs);soydata.VERY_UNSAFE.$$ordainSanitizedUriForInternalBlocks=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(soydata.SanitizedUri);soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(soydata.SanitizedHtmlAttribute);soydata.VERY_UNSAFE.$$ordainSanitizedCssForInternalBlocks=soydata.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(soydata.SanitizedCss);soy.$$escapeHtml=function(a){return soydata.SanitizedHtml.from(a)};soy.$$cleanHtml=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.HTML)){goog.asserts.assert(a.constructor===soydata.SanitizedHtml);return(a)}return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$stripHtmlTags(a,soy.esc.$$SAFE_TAG_WHITELIST_),soydata.getContentDir(a))};soy.$$escapeHtmlRcdata=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.HTML)){goog.asserts.assert(a.constructor===soydata.SanitizedHtml);return soy.esc.$$normalizeHtmlHelper(a.content)}return soy.esc.$$escapeHtmlHelper(a)};soy.$$HTML5_VOID_ELEMENTS_=new RegExp("^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\\b");soy.$$stripHtmlTags=function(d,c){if(!c){return String(d).replace(soy.esc.$$HTML_TAG_REGEX_,"").replace(soy.esc.$$LT_REGEX_,"&lt;")}var b=String(d).replace(/\[/g,"&#91;");var a=[];b=b.replace(soy.esc.$$HTML_TAG_REGEX_,function(f,h){if(h){h=h.toLowerCase();if(c.hasOwnProperty(h)&&c[h]){var i=f.charAt(1)==="/"?"</":"<";var g=a.length;a[g]=i+h+">";return"["+g+"]"}}return""});b=soy.esc.$$normalizeHtmlHelper(b);var e=soy.$$balanceTags_(a);b=b.replace(/\[(\d+)\]/g,function(g,f){return a[f]});return b+e};soy.$$balanceTags_=function(c){var b=[];for(var d=0,f=c.length;d<f;++d){var a=c[d];if(a.charAt(1)==="/"){var e=b.length-1;while(e>=0&&b[e]!=a){e--}if(e<0){c[d]=""}else{c[d]=b.slice(e).reverse().join("");b.length=e}}else{if(!soy.$$HTML5_VOID_ELEMENTS_.test(a)){b.push("</"+a.substring(1))}}}return b.reverse().join("")};soy.$$escapeHtmlAttribute=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.HTML)){goog.asserts.assert(a.constructor===soydata.SanitizedHtml);return soy.esc.$$normalizeHtmlHelper(soy.$$stripHtmlTags(a.content))}return soy.esc.$$escapeHtmlHelper(a)};soy.$$escapeHtmlAttributeNospace=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.HTML)){goog.asserts.assert(a.constructor===soydata.SanitizedHtml);return soy.esc.$$normalizeHtmlNospaceHelper(soy.$$stripHtmlTags(a.content))}return soy.esc.$$escapeHtmlNospaceHelper(a)};soy.$$filterHtmlAttributes=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.ATTRIBUTES)){goog.asserts.assert(a.constructor===soydata.SanitizedHtmlAttribute);return a.content.replace(/([^"'\s])$/,"$1 ")}return soy.esc.$$filterHtmlAttributesHelper(a)};soy.$$filterHtmlElementName=function(a){return soy.esc.$$filterHtmlElementNameHelper(a)};soy.$$escapeJs=function(a){return soy.$$escapeJsString(a)};soy.$$escapeJsString=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.JS_STR_CHARS)){goog.asserts.assert(a.constructor===soydata.SanitizedJsStrChars);return a.content}return soy.esc.$$escapeJsStringHelper(a)};soy.$$escapeJsValue=function(a){if(a==null){return" null "}if(soydata.isContentKind(a,soydata.SanitizedContentKind.JS)){goog.asserts.assert(a.constructor===soydata.SanitizedJs);return a.content}switch(typeof a){case"boolean":case"number":return" "+a+" ";default:return"'"+soy.esc.$$escapeJsStringHelper(String(a))+"'"}};soy.$$escapeJsRegex=function(a){return soy.esc.$$escapeJsRegexHelper(a)};soy.$$problematicUriMarks_=/['()]/g;soy.$$pctEncode_=function(a){return"%"+a.charCodeAt(0).toString(16)};soy.$$escapeUri=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.URI)){goog.asserts.assert(a.constructor===soydata.SanitizedUri);return soy.$$normalizeUri(a)}var b=soy.esc.$$escapeUriHelper(a);soy.$$problematicUriMarks_.lastIndex=0;if(soy.$$problematicUriMarks_.test(b)){return b.replace(soy.$$problematicUriMarks_,soy.$$pctEncode_)}return b};soy.$$normalizeUri=function(a){return soy.esc.$$normalizeUriHelper(a)};soy.$$filterNormalizeUri=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.URI)){goog.asserts.assert(a.constructor===soydata.SanitizedUri);return soy.$$normalizeUri(a)}return soy.esc.$$filterNormalizeUriHelper(a)};soy.$$filterImageDataUri=function(a){return soydata.VERY_UNSAFE.ordainSanitizedUri(soy.esc.$$filterImageDataUriHelper(a))};soy.$$escapeCssString=function(a){return soy.esc.$$escapeCssStringHelper(a)};soy.$$filterCssValue=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.CSS)){goog.asserts.assert(a.constructor===soydata.SanitizedCss);return a.content}if(a==null){return""}return soy.esc.$$filterCssValueHelper(a)};soy.$$filterNoAutoescape=function(a){if(soydata.isContentKind(a,soydata.SanitizedContentKind.TEXT)){goog.asserts.fail("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`",[a.content]);return"zSoyz"}return a};soy.$$changeNewlineToBr=function(b){var a=goog.string.newLineToBr(String(b),false);if(soydata.isContentKind(b,soydata.SanitizedContentKind.HTML)){return soydata.VERY_UNSAFE.ordainSanitizedHtml(a,soydata.getContentDir(b))}return a};soy.$$insertWordBreaks=function(c,b){var a=goog.format.insertWordBreaks(String(c),b);if(soydata.isContentKind(c,soydata.SanitizedContentKind.HTML)){return soydata.VERY_UNSAFE.ordainSanitizedHtml(a,soydata.getContentDir(c))}return a};soy.$$truncate=function(c,a,b){c=String(c);if(c.length<=a){return c}if(b){if(a>3){a-=3}else{b=false}}if(soy.$$isHighSurrogate_(c.charAt(a-1))&&soy.$$isLowSurrogate_(c.charAt(a))){a-=1}c=c.substring(0,a);if(b){c+="..."}return c};soy.$$isHighSurrogate_=function(a){return 55296<=a&&a<=56319};soy.$$isLowSurrogate_=function(a){return 56320<=a&&a<=57343};soy.$$bidiFormatterCache_={};soy.$$getBidiFormatterInstance_=function(a){return soy.$$bidiFormatterCache_[a]||(soy.$$bidiFormatterCache_[a]=new goog.i18n.BidiFormatter(a))};soy.$$bidiTextDir=function(d,a){var c=soydata.getContentDir(d);if(c!=null){return c}var b=a||soydata.isContentKind(d,soydata.SanitizedContentKind.HTML);return goog.i18n.bidi.estimateDirection(d+"",b)};soy.$$bidiDirAttr=function(b,f,a){var c=soy.$$getBidiFormatterInstance_(b);var e=soydata.getContentDir(f);if(e==null){var d=a||soydata.isContentKind(f,soydata.SanitizedContentKind.HTML);e=goog.i18n.bidi.estimateDirection(f+"",d)}return soydata.VERY_UNSAFE.ordainSanitizedHtmlAttribute(c.knownDirAttr(e))};soy.$$bidiMarkAfter=function(b,e,a){var c=soy.$$getBidiFormatterInstance_(b);var d=a||soydata.isContentKind(e,soydata.SanitizedContentKind.HTML);return c.markAfterKnownDir(soydata.getContentDir(e),e+"",d)};soy.$$bidiSpanWrap=function(a,d){var c=soy.$$getBidiFormatterInstance_(a);var b=c.spanWrapWithKnownDir(soydata.getContentDir(d),d+"",true);return b};soy.$$bidiUnicodeWrap=function(a,f){var c=soy.$$getBidiFormatterInstance_(a);var d=soydata.isContentKind(f,soydata.SanitizedContentKind.HTML);var b=c.unicodeWrapWithKnownDir(soydata.getContentDir(f),f+"",d);var e=c.getContextDir();if(soydata.isContentKind(f,soydata.SanitizedContentKind.TEXT)){return new soydata.UnsanitizedText(b,e)}if(d){return soydata.VERY_UNSAFE.ordainSanitizedHtml(b,e)}if(soydata.isContentKind(f,soydata.SanitizedContentKind.JS_STR_CHARS)){return soydata.VERY_UNSAFE.ordainSanitizedJsStrChars(b,e)}return b};soy.esc.$$escapeUriHelper=function(a){return encodeURIComponent(String(a))};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_={"\x00":"\x26#0;","\x22":"\x26quot;","\x26":"\x26amp;","\x27":"\x26#39;","\x3c":"\x26lt;","\x3e":"\x26gt;","\x09":"\x26#9;","\x0a":"\x26#10;","\x0b":"\x26#11;","\x0c":"\x26#12;","\x0d":"\x26#13;"," ":"\x26#32;","-":"\x26#45;","/":"\x26#47;","\x3d":"\x26#61;","`":"\x26#96;","\x85":"\x26#133;","\xa0":"\x26#160;","\u2028":"\x26#8232;","\u2029":"\x26#8233;"};soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[a]};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_={"\x00":"\\x00","\x08":"\\x08","\x09":"\\t","\x0a":"\\n","\x0b":"\\x0b","\x0c":"\\f","\x0d":"\\r","\x22":"\\x22","\x26":"\\x26","\x27":"\\x27","/":"\\/","\x3c":"\\x3c","\x3d":"\\x3d","\x3e":"\\x3e","\\":"\\\\","\x85":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029","$":"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"};soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[a]};soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_={"\x00":"\\0 ","\x08":"\\8 ","\x09":"\\9 ","\x0a":"\\a ","\x0b":"\\b ","\x0c":"\\c ","\x0d":"\\d ","\x22":"\\22 ","\x26":"\\26 ","\x27":"\\27 ","(":"\\28 ",")":"\\29 ","*":"\\2a ","/":"\\2f ",":":"\\3a ",";":"\\3b ","\x3c":"\\3c ","\x3d":"\\3d ","\x3e":"\\3e ","@":"\\40 ","\\":"\\5c ","{":"\\7b ","}":"\\7d ","\x85":"\\85 ","\xa0":"\\a0 ","\u2028":"\\2028 ","\u2029":"\\2029 "};soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[a]};soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_={"\x00":"%00","\x01":"%01","\x02":"%02","\x03":"%03","\x04":"%04","\x05":"%05","\x06":"%06","\x07":"%07","\x08":"%08","\x09":"%09","\x0a":"%0A","\x0b":"%0B","\x0c":"%0C","\x0d":"%0D","\x0e":"%0E","\x0f":"%0F","\x10":"%10","\x11":"%11","\x12":"%12","\x13":"%13","\x14":"%14","\x15":"%15","\x16":"%16","\x17":"%17","\x18":"%18","\x19":"%19","\x1a":"%1A","\x1b":"%1B","\x1c":"%1C","\x1d":"%1D","\x1e":"%1E","\x1f":"%1F"," ":"%20","\x22":"%22","\x27":"%27","(":"%28",")":"%29","\x3c":"%3C","\x3e":"%3E","\\":"%5C","{":"%7B","}":"%7D","\x7f":"%7F","\x85":"%C2%85","\xa0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"};soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=function(a){return soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[a]};soy.esc.$$MATCHER_FOR_ESCAPE_HTML_=/[\x00\x22\x26\x27\x3c\x3e]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_=/[\x00\x22\x27\x3c\x3e]/g;soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_=/[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_=/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;soy.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_=/^data:image\/(?:bmp|gif|jpe?g|png|tiff|webp);base64,[a-z0-9+\/]+=*$/i;soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i;soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_=/^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i;soy.esc.$$escapeHtmlHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$normalizeHtmlHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$escapeHtmlNospaceHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$normalizeHtmlNospaceHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_,soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)};soy.esc.$$escapeJsStringHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)};soy.esc.$$escapeJsRegexHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_,soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)};soy.esc.$$escapeCssStringHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_,soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)};soy.esc.$$filterCssValueHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(b)){return"zSoyz"}return b};soy.esc.$$normalizeUriHelper=function(a){var b=String(a);return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)};soy.esc.$$filterNormalizeUriHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(b)){return"#zSoyz"}return b.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_,soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)};soy.esc.$$filterImageDataUriHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_.test(b)){return"data:image/gif;base64,zSoyz"}return b};soy.esc.$$filterHtmlAttributesHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_.test(b)){return"zSoyz"}return b};soy.esc.$$filterHtmlElementNameHelper=function(a){var b=String(a);if(!soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(b)){return"zSoyz"}return b};soy.esc.$$HTML_TAG_REGEX_=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;soy.esc.$$LT_REGEX_=/</g;soy.esc.$$SAFE_TAG_WHITELIST_={b:1,br:1,em:1,i:1,s:1,sub:1,sup:1,u:1};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.soy.soy-template-plugin:soy-deps', location = 'soy-template-module/js/atlassian-deps.js' */
window.atl_soy=window.atl_soy||{};atl_soy.concat=function(d,c){if(d.concat){return d.concat(c)}var e={};for(var f in d){if(d.hasOwnProperty(f)){e[f]=d[f]}}for(var f in c){if(c.hasOwnProperty(f)){e[f]=c[f]}}return e};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-widget', location = 'node_modules/@atlassian/aui/src/js/aui/internal/widget.js' */
("undefined"===typeof window?global:window).__ecaadce486e7be7002d8453fc51f9873=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(a,d){var e="_aui-widget-"+a;return function(a,g){var b,c;f.default.isPlainObject(a)?c=a:(b=a,c=g);b=b&&(0,f.default)(b);!b||!b.data(e)?(c=new d(b,c||{}),b=c.$el,b.data(e,c)):c=b.data(e);return c}};var d=__02fa0d2334b5d2f9701871403ba9d89a,f=d&&d.__esModule?d:{"default":d};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-i18n-aui', location = 'node_modules/@atlassian/aui/src/js/aui/internal/i18n/aui.js' */
("undefined"===typeof window?global:window).__a29ef453c3f6bfbde4ee8fcb2237a63b=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={"aui.dropdown.async.error":"Error loading dropdown","aui.dropdown.async.loading":"Loading dropdown","aui.words.add":"Add","aui.words.update":"Update","aui.words.delete":"Delete","aui.words.remove":"Remove","aui.words.cancel":"Cancel","aui.words.loading":"Loading","aui.words.close":"Close","aui.enter.value":"Enter value","aui.words.more":"More",
"aui.words.moreitem":"More\u2026","aui.keyboard.shortcut.type.x":"Type ''{0}''","aui.keyboard.shortcut.then.x":"then ''{0}''","aui.keyboard.shortcut.or.x":"OR ''{0}''","aui.sidebar.expand.tooltip":"Expand sidebar ( [ )","aui.sidebar.collapse.tooltip":"Collapse sidebar ( [ )","aui.validation.message.maxlength":"Must be fewer than or equal to {0} characters","aui.validation.message.minlength":"Must be greater than or equal to {0} characters","aui.validation.message.exactlength":"Must be exactly {0} characters",
"aui.validation.message.matchingfield":"{0} and {1} do not match.","aui.validation.message.matchingfield-novalue":"These fields do not match.","aui.validation.message.doesnotcontain":"Do not include the phrase {0} in this field","aui.validation.message.pattern":"This field does not match the required format","aui.validation.message.required":"This is a required field","aui.validation.message.validnumber":"Please enter a valid number","aui.validation.message.min":"Enter a value greater than {0}","aui.validation.message.max":"Enter a value less than {0}",
"aui.validation.message.dateformat":"Enter a valid date","aui.validation.message.minchecked":"Tick at least {0,choice,0#0 checkboxes|1#1 checkbox|1<{0,number} checkboxes}.","aui.validation.message.maxchecked":"Tick at most {0,choice,0#0 checkboxes|1#1 checkbox|1<{0,number} checkboxes}.","aui.checkboxmultiselect.clear.selected":"Clear selected items","aui.select.no.suggestions":"No suggestions","aui.select.new.suggestions":"New suggestions added. Please use the up and down arrows to select.","aui.select.new.value":"new value",
"aui.toggle.on":"On","aui.toggle.off":"Off","ajs.datepicker.localisations.day-names.sunday":"Sunday","ajs.datepicker.localisations.day-names.monday":"Monday","ajs.datepicker.localisations.day-names.tuesday":"Tuesday","ajs.datepicker.localisations.day-names.wednesday":"Wednesday","ajs.datepicker.localisations.day-names.thursday":"Thursday","ajs.datepicker.localisations.day-names.friday":"Friday","ajs.datepicker.localisations.day-names.saturday":"Saturday","ajs.datepicker.localisations.day-names-min.sunday":"Sun",
"ajs.datepicker.localisations.day-names-min.monday":"Mon","ajs.datepicker.localisations.day-names-min.tuesday":"Tue","ajs.datepicker.localisations.day-names-min.wednesday":"Wed","ajs.datepicker.localisations.day-names-min.thursday":"Thu","ajs.datepicker.localisations.day-names-min.friday":"Fri","ajs.datepicker.localisations.day-names-min.saturday":"Sat","ajs.datepicker.localisations.first-day":0,"ajs.datepicker.localisations.is-RTL":!1,"ajs.datepicker.localisations.month-names.january":"January",
"ajs.datepicker.localisations.month-names.february":"February","ajs.datepicker.localisations.month-names.march":"March","ajs.datepicker.localisations.month-names.april":"April","ajs.datepicker.localisations.month-names.may":"May","ajs.datepicker.localisations.month-names.june":"June","ajs.datepicker.localisations.month-names.july":"July","ajs.datepicker.localisations.month-names.august":"August","ajs.datepicker.localisations.month-names.september":"September","ajs.datepicker.localisations.month-names.october":"October",
"ajs.datepicker.localisations.month-names.november":"November","ajs.datepicker.localisations.month-names.december":"December","ajs.datepicker.localisations.show-month-after-year":!1,"ajs.datepicker.localisations.year-suffix":null};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-i18n', location = 'node_modules/@atlassian/aui/src/js/aui/i18n.js' */
("undefined"===typeof window?global:window).__ff21a71b857b101095156bf4ff8b27ac=function(){function c(a){return a&&a.__esModule?a:{"default":a}}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var e=c(__0d2ce34ae8c23f21d43215f7cc5928d7),f=c(__fb27ffae84b96c14bf339e62cefcf116),d={keys:c(__a29ef453c3f6bfbde4ee8fcb2237a63b).default,getText:function(a){var b=Array.prototype.slice.call(arguments,1);return Object.prototype.hasOwnProperty.call(this.keys,a)?e.default.apply(null,[this.keys[a]].concat(b)):
a}};(0,f.default)("I18n",d);b.default=d;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-skate', location = 'node_modules/@atlassian/aui/src/js/aui/internal/skate.js' */
("undefined"===typeof window?global:window).__da172e72afc5a7088e3034df761062a6=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__78f27bfa54305705263504b974e1c18c,a=(a&&a.__esModule?a:{"default":a}).default.noConflict();b.default=a;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-navigation', location = 'node_modules/@atlassian/aui/src/js/aui/navigation.js' */
("undefined"===typeof window?global:window).__612c8dab81663bed366c6b4b10af31bf=function(){function c(a){return a&&a.__esModule?a:{"default":a}}function b(a){this.$el=(0,d.default)(a).closest(".aui-nav");if(1<this.$el.length)return this.$el.map(function(a,d){return new b(d)})[0];if(this.$el.data("aui-navigation"))return this.$el.data("aui-navigation");this.$el.data("aui-navigation",this);this.$treeParent=this.$el.parent("li[aria-expanded]");this.$subtreeToggleIcon=this.$treeParent.children(".aui-nav-subtree-toggle").children("span.aui-icon");
this.hideMoreItems();this.$el.children("li:has(.aui-nav-selected)").addClass("aui-nav-child-selected");a=this.$el.children(".aui-nav-selected");a.parents(".aui-nav > [aria-expanded=false]").add(a.filter("[aria-expanded=false]")).each(function(){e((0,d.default)(this).children(".aui-nav")).expand()});this.$el.find("> li[aria-expanded] > .aui-nav-subtree-toggle").on("click",function(){e((0,d.default)(this).siblings(".aui-nav")).toggle()});return this}var f={};"use strict";Object.defineProperty(f,"__esModule",
{value:!0});__ff21a71b857b101095156bf4ff8b27ac;var d=c(__02fa0d2334b5d2f9701871403ba9d89a),g=c(__da172e72afc5a7088e3034df761062a6),h=c(__fb27ffae84b96c14bf339e62cefcf116),i=c(__ecaadce486e7be7002d8453fc51f9873);b.prototype.isNested=function(){return 1===this.$treeParent.length};b.prototype.isCollapsed=function(){return"false"===this.$treeParent.attr("aria-expanded")};b.prototype.expand=function(){this.$treeParent.attr("aria-expanded","true");this.$subtreeToggleIcon.removeClass("aui-iconfont-collapsed").addClass("aui-iconfont-expanded");
this.hideMoreItems();return this};b.prototype.collapse=function(){this.$treeParent.attr("aria-expanded","false");this.$subtreeToggleIcon.removeClass("aui-iconfont-expanded").addClass("aui-iconfont-collapsed");return this};b.prototype.toggle=function(){this.isCollapsed()?this.expand():this.collapse();return this};b.prototype.hideMoreItems=function(){if(this.$el.is(".aui-nav:not([aria-expanded=false]) [data-more]")){var a=this.$el.attr("data-more")||"More\u2026",b=Math.abs(parseInt(this.$el.attr("data-more-limit")))||
5,c=this.$el.children("li"),e=c.length<=b+1,f=c.filter(".aui-nav-selected").length,g=c.filter(".aui-nav-more").length;if(e||f||g)return this;(0,d.default)("<li>",{"class":"aui-nav-more","aria-hidden":"true"}).append((0,d.default)("<a>",{href:"#","class":"aui-nav-item",text:a,click:function(a){a.preventDefault();(0,d.default)(this).parent().remove()}})).insertAfter(c.eq(b-1))}return this};var e=(0,i.default)("navigation",b);(0,g.default)("aui-nav",{type:g.default.type.CLASSNAME,attached:function(a){new b(a)},
detached:function(a){(0,d.default)(a).removeData()}});(0,h.default)("navigation",e);f.default=e;return f=f["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-navigation', location = 'src/soy/navigation.soy' */
// This file was automatically generated from navigation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.navigation.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.navigation == 'undefined') { aui.navigation = {}; }


aui.navigation.item = function(opt_data, opt_ignored) {
  return '<li class="' + ((opt_data.isSelected || opt_data.key && opt_data.selectedItemKey == opt_data.key) ? 'aui-nav-selected' : '') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.isCollapsible && opt_data.children && opt_data.children.length > 0) ? 'aria-expanded="' + ((opt_data.isCollapsed) ? 'false' : 'true') + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.children && opt_data.children.length > 0 && opt_data.isCollapsible) ? '<a href="#" class="aui-nav-subtree-toggle">' + aui.icons.icon({icon: opt_data.isCollapsed ? 'collapsed' : 'expanded', size: 'small', useIconFont: true}) + '</a>' : '') + '<a class="aui-nav-item" href="' + soy.$$escapeHtml(opt_data.href) + '">' + ((opt_data.iconClass && ! opt_data.isChild) ? aui.icons.icon({icon: opt_data.iconClass, size: 'small', useIconFont: true}) : '') + ((opt_data.count == 0 || opt_data.count) ? '<span class="aui-badge">' + soy.$$escapeHtml(opt_data.count) + '</span>' : '') + '<span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a>' + ((opt_data.children && opt_data.children.length > 0) ? aui.navigation.nav({items: opt_data.children, selectedItemKey: opt_data.selectedItemKey, isChild: true}) : '') + '</li>';
};
if (goog.DEBUG) {
  aui.navigation.item.soyTemplateName = 'aui.navigation.item';
}


aui.navigation.nav = function(opt_data, opt_ignored) {
  var output = '<ul class="aui-nav' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>';
  var itemList58 = opt_data.items;
  var itemListLen58 = itemList58.length;
  for (var itemIndex58 = 0; itemIndex58 < itemListLen58; itemIndex58++) {
    var itemData58 = itemList58[itemIndex58];
    output += aui.navigation.item(soy.$$augmentMap(itemData58, {isChild: opt_data.isChild, selectedItemKey: opt_data.selectedItemKey}));
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  aui.navigation.nav.soyTemplateName = 'aui.navigation.nav';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-skatejs-template-html-0.0.0-dist-template-html', location = 'node_modules/skatejs-template-html/dist/template-html.js' */
("undefined"===typeof window?global:window).__19c740e7a69d815ecec16b8dd69f0e00=function(){var i={exports:{}},u=i.exports,A={module:i,exports:u},l;l=function(a,b,f){var g=("undefined"===typeof window?global:window).define,e,c,f=[f,b,a].filter(function(d){return"function"===typeof d})[0],b=[b,a,[]].filter(Array.isArray)[0];e=f.apply(null,b.map(function(d){return A[d]}));c=typeof e;"function"===typeof g&&g("string"===typeof a?a:"__19c740e7a69d815ecec16b8dd69f0e00",b,f);"string"===c?e=String(e):"number"===
c?e=Number(e):"boolean"===c&&(e=Boolean(e));void 0!==e&&(u=i.exports=e)};l.amd=!0;var v=function(a,b,f){a.__SKATE_TEMPLATE_HTML_DATA||(a.__SKATE_TEMPLATE_HTML_DATA={});a.__SKATE_TEMPLATE_HTML_DATA[b]=f;return a},q=function(a){var b={caption:"table",dd:"dl",dt:"dl",li:"ul",tbody:"table",td:"tr",thead:"table",tr:"tbody"},f=a.match(/\s*<([^\s>]+)/),b=document.createElement(f&&b[f[1]]||"div");b.innerHTML=a;return w(b.childNodes)},w=function(a){for(var b=document.createDocumentFragment();a&&a.length;)b.appendChild(a[0]);
return b},r=function(a,b){for(var f=[],g=a.nextSibling;g!==b;)f.push(g),g=g.nextSibling;return f},s=function(a){for(var b=a.defaultNodes,f=b.length,g=0;g<f;g++)a.container.insertBefore(b[g],a.endNode);a.isDefault=!0},t=function(a){for(var b=a.defaultNodes,f=b.length,g=0;g<f;g++){var e=b[g];e.parentNode.removeChild(e)}a.isDefault=!1},B=function(a,b){return{get:function(){var f=a[b];return"function"===typeof f?f.bind(a):f},set:function(f){a[b]=f}}},x=function(a){for(var b=a.childNodes,f=b.length,g=
[],e,a=0;a<f;a++){var c=b[a];if(8===c.nodeType){var d;d=c;var j=void 0,h=d.textContent.match(/^ (\/?)content (.*)/i);if(h){if(h[2])try{j=JSON.parse(h[2])}catch(p){throw Error('Unable to parse content comment data: "'+p+'" in "<\!--'+d.textContent+'--\>".');}d={data:j||{defaultContent:void 0,isDefault:void 0,selector:void 0},type:h[1]?"close":"open"}}else d=void 0;if(d)if("open"===d.type){if(e)throw Error('Cannot have an opening content placeholder after another content placeholder at the same level in the DOM tree: "'+
c.textContent+'" in "'+c.parentNode.innerHTML+'".');e={container:c.parentNode,contentNode:c,defaultNodes:d.data.defaultContent&&q(d.data.defaultContent).childNodes||[],isDefault:d.data.isDefault,selector:d.data.selector,startNode:c}}else if("close"===d.type){if(!e)throw Error('Unmatched closing content placeholder: "'+c.textContent+'" in "'+c.parentNode.innerHTML+'".');e.endNode=c;g.push(e);e=void 0}}else g=g.concat(x(c))}return g},k=function(){var a=[].slice.call(arguments).join("");return function(b){var f=
w(b.childNodes);b.innerHTML=a;var g=b.getElementsByTagName("content");if(g&&g.length){for(var e=[];g.length;){var c=g[0],d=c.parentNode,j=c.getAttribute("select"),h=document.createComment(" content "),p=document.createComment(" /content ");e.push({container:d,contentNode:c,defaultNodes:[].slice.call(c.childNodes),endNode:p,isDefault:!0,selector:j,startNode:h});d.replaceChild(p,c);d.insertBefore(h,p);h.textContent+=JSON.stringify({defaultContent:c.innerHTML,selector:j})+" "}v(b,"content",e)}f.childNodes.length&&
k.wrap(b).appendChild(f)}},y=window.DocumentFragment,m=window.HTMLElement.prototype,z=m.matches||m.msMatchesSelector||m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector;k.wrap=function(a){var b;b=a.__SKATE_TEMPLATE_HTML_DATA?a.__SKATE_TEMPLATE_HTML_DATA.content:void 0;b||v(a,"content",x(a));var f;f=a.__SKATE_TEMPLATE_HTML_DATA?a.__SKATE_TEMPLATE_HTML_DATA.content:void 0;var g=f.length;b={childNodes:{get:function(){for(var d=[],j=0;j<g;j++){var h=f[j];h.isDefault||(d=d.concat(r(h.startNode,
h.endNode)))}return d}},firstChild:{get:function(){var d=this.childNodes;return d.length&&d[0]||null}},innerHTML:{get:function(){for(var d="",j=this.childNodes,h=j.length,a=0;a<h;a++)var b=j[a],d=d+(b.outerHTML||b.textContent);return d},set:function(d){for(var d=q(d),a=0;a<g;a++){for(var h=f[a],b=r(h.startNode,h.endNode),c=0;c<b.length;c++){var e=b[c];e.parentNode.removeChild(e)}b=d;if(c=h.selector){for(var c=b.querySelectorAll(c),e=c.length,i=[],n=0;n<e;n++){var o=c[n];o.parentNode===b&&i.push(o)}b=
i}else b=[].slice.call(b.childNodes)||[];for(c=0;c<b.length;c++)h.container.insertBefore(b[c],h.endNode);b.length?t(h):s(h)}}},lastChild:{get:function(){for(var d=g-1;-1<d;d--)if(!f[d].isDefault)return d=this.childNodes,d[d.length-1];return null}},outerHTML:{get:function(){var d=this.tagName.toLowerCase(),a="<"+d,b=this.attributes;if(b)for(var c=b.length,f=0;f<c;f++)var g=b[f],a=a+(" "+g.nodeName+'="'+g.nodeValue+'"');a=a+">"+this.innerHTML;return a+("</"+d+">")}},textContent:{get:function(){for(var d=
"",a=this.childNodes,b=this.childNodes.length,c=0;c<b;c++)d+=a[c].textContent;return d},set:function(d){var a;this.innerHTML="";for(var b=0;b<g;b++){var c=f[b];if(!c.selector){a=c;break}}a&&(d?(t(a),a.container.insertBefore(document.createTextNode(d),a.endNode)):s(a))}},appendChild:{value:function(d){if(d instanceof y)return[].slice.call(d.childNodes).forEach(function(a){this.appendChild(a)}.bind(this)),this;for(var a=0;a<g;a++){var b=f[a],c=b.selector;if(!c||d instanceof window.HTMLElement&&z.call(d,
c)){t(b);b.endNode.parentNode.insertBefore(d,b.endNode);break}}return this}},insertAdjacentHTML:{value:function(d,b){"afterbegin"===d?this.insertBefore(q(b),this.childNodes[0]):"beforeend"===d?this.appendChild(q(b)):a.insertAdjacentHTML(d,b);return this}},insertBefore:{value:function(a,b){if(!b)return this.appendChild(a);if(a instanceof y){var c=a.childNodes;if(c)for(var e=c.length,i=0;i<e;i++)this.insertBefore(c[i],b);return this}c=!1;e=0;a:for(;e<g;e++)for(var i=f[e],k=r(i.startNode,i.endNode),
m=k.length,n=0;n<m;n++){var o=k[n];o===b&&(c=!0);if(c){var l=i.selector;if(!l||z.call(a,l)){o.parentNode.insertBefore(a,o);break a}}}if(!c)throw Error("DOMException 8: The node before which the new node is to be inserted is not a child of this node.");return a}},removeChild:{value:function(a){for(var b=!1,c=0;c<g;c++){var e=f[c];if(e.container===a.parentNode){e.container.removeChild(a);b=!0;break}e.startNode.nextSibling===e.endNode&&s(e)}if(!b)throw Error("DOMException 8: The node in which you are trying to remove is not a child of this node.");
return a}},replaceChild:{value:function(a,b){for(var c=0;c<g;c++){var e=f[c];if(e.container===b.parentNode){e.container.replaceChild(a,b);break}}return this}}};var e={},c;for(c in a)c in b?Object.defineProperty(e,c,b[c]):Object.defineProperty(e,c,B(a,c));return e};window.skateTemplateHtml=k;"function"===typeof l&&l(function(){return k});"object"===typeof i&&(i.exports=k);return i.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-header-create-header', location = 'node_modules/@atlassian/aui/src/js/aui/internal/header/create-header.js' */
("undefined"===typeof window?global:window).__75cae523f4ec02598abff52e61f818c0=function(){function d(a){return a&&a.__esModule?a:{"default":a}}function k(a){this.element=a;this.$element=(0,f.default)(a);this.index=(0,f.default)("aui-header, .aui-header").index(a);this.$secondaryNav=this.$element.find(".aui-header-secondary .aui-nav").first();this.menuItems=[];this.totalWidth=0;this.rightMostNavItemIndex=this.$moreMenu=void 0;this.$applicationLogo=this.$element.find("#logo");this.primaryButtonsWidth=
this.moreMenuWidth=0;var b=(0,f.default)(this.$element[0].querySelector(".aui-header-primary"));this.$headerFind=function(a){return b.find(a)}}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var f=d(__02fa0d2334b5d2f9701871403ba9d89a),n=d(__2e94b36d616dffee0a6f911bf22a83ae),o=d(__ddc701dd1918eb1bc6ac99673accf4b9),p=d(__ff21a71b857b101095156bf4ff8b27ac),j=d(__da172e72afc5a7088e3034df761062a6),l=d(__19c740e7a69d815ecec16b8dd69f0e00),m=(0,f.default)(window);k.prototype={init:function(){var a=
this;this.element.setAttribute("data-aui-responsive","true");this.$headerFind(".aui-button").parent().each(function(){a.primaryButtonsWidth+=(0,f.default)(this).outerWidth(!0)});this.$headerFind(".aui-nav > li > a:not(.aui-button)").each(function(){var b=(0,f.default)(this).parent(),g=b.outerWidth(!0);a.totalWidth+=g;a.menuItems.push({$element:b,outerWidth:g})});this.rightMostNavItemIndex=this.menuItems.length-1;m.on("resize",this._resizeHandler=(0,o.default)(function(){a.constructResponsiveDropdown()},
100));var b=this.$applicationLogo.find("img");0!==b.length&&(b.attr("data-aui-responsive-header-index",this.index),b.on("load",function(){a.constructResponsiveDropdown()}));this.constructResponsiveDropdown();this.$headerFind(".aui-nav").css("width","auto")},destroy:function(){m.off("resize",this._resizeHandler)},calculateAvailableWidth:function(){var a=this.$secondaryNav.is(":visible")?this.$secondaryNav.offset().left:this.$element.outerWidth(),b=this.$applicationLogo.offset().left+this.$applicationLogo.outerWidth(!0)+
this.primaryButtonsWidth;return a-b},showResponsiveDropdown:function(){void 0===this.$moreMenu&&(this.$moreMenu=this.createResponsiveDropdownTrigger());this.$moreMenu.css("display","")},hideResponsiveDropdown:function(){void 0!==this.$moreMenu&&this.$moreMenu.css("display","none")},constructResponsiveDropdown:function(){if(this.menuItems.length){var a;a=this.calculateAvailableWidth(this.$element,this.primaryButtonsWidth);if(a>this.totalWidth)this.showAll();else{this.showResponsiveDropdown();a-=this.moreMenuWidth;
for(var b=-1;0<=a-this.menuItems[b+1].outerWidth;)a-=this.menuItems[b+1].outerWidth,b++;b<this.rightMostNavItemIndex?this.moveToResponsiveDropdown(this.rightMostNavItemIndex-b):this.rightMostNavItemIndex<b&&this.moveOutOfResponsiveDropdown(b-this.rightMostNavItemIndex)}}},createResponsiveDropdownTrigger:function(){var a=document.createElement("li"),b=document.createElement("aui-dropdown-menu");b.id="aui-responsive-header-dropdown-"+this.index;j.default.init(b);var c=document.createElement("aui-section");
c.id="aui-responsive-header-dropdown-list-"+this.index;j.default.init(c);l.default.wrap(b).appendChild(c);c=document.createElement("a");c.setAttribute("class","aui-dropdown2-trigger");c.setAttribute("href","#");c.id=b.id+"-trigger";c.setAttribute("aria-controls",b.id);c.innerHTML=p.default.getText("aui.words.more");a.appendChild(c);a.appendChild(b);0===this.primaryButtonsWidth?this.$headerFind(".aui-nav").append(a):this.$headerFind(".aui-nav > li > .aui-button:first").parent().before(a);this.moreMenuWidth=
(0,f.default)(a).outerWidth(!0);return(0,f.default)(a)},moveOutOfResponsiveDropdown:function(a){if(!(0>=a)){for(var b=(0,f.default)("#aui-responsive-header-dropdown-"+this.index),c=this.rightMostNavItemIndex+a,g=this.rightMostNavItemIndex+1;g<=c;g++){var i=this.menuItems[g].$element,e=i.children("a");e.attr("aria-controls")&&(e=(0,f.default)(document.getElementById(e.attr("aria-controls"))),e.removeClass("aui-dropdown2-sub-menu"),i.append(e));b.find("aui-item-link:first").remove();i.insertBefore(this.$moreMenu)}this.rightMostNavItemIndex+=
a}},moveToResponsiveDropdown:function(a){if(!(0>=a)){for(var b=l.default.wrap(this.$moreMenu[0].querySelector("aui-section")),c=this.rightMostNavItemIndex-a+1,g=this.rightMostNavItemIndex;g>=c;g--){var i=this.menuItems[g].$element,e=i.children("a");j.default.init(e);var d=document.createElement("aui-item-link");d.setAttribute("href",e.attr("href"));if(e.attr("aria-controls")){var h=(0,f.default)(document.getElementById(e.attr("aria-controls")));d.setAttribute("for",e.attr("aria-controls"));h.addClass("aui-dropdown2-sub-menu");
h.appendTo("body")}j.default.init(d);l.default.wrap(d).textContent=e.text();i.detach();b.insertBefore(d,b.firstChild);this.element.dispatchEvent(new n.default("aui-responsive-menu-item-created",{bubbles:!0,detail:{originalItem:i[0],newItem:d}}))}this.rightMostNavItemIndex-=a}},showAll:function(){this.moveOutOfResponsiveDropdown(this.menuItems.length-1-this.rightMostNavItemIndex);this.hideResponsiveDropdown()}};h.default=function(a){var b=a._header;b instanceof k||(b=new k(a),b.init(),a._header=b);
return b};return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-header', location = 'node_modules/@atlassian/aui/src/js/aui/header.js' */
("undefined"===typeof window?global:window).__f6e26ade175986120d83fd2d9d505770=function(){function e(a){return a&&a.__esModule?a:{"default":a}}function f(){(0,g.default)(".aui-header").each(function(){(0,h.default)(this)})}var d={};"use strict";Object.defineProperty(d,"__esModule",{value:!0});var g=e(__02fa0d2334b5d2f9701871403ba9d89a),h=e(__75cae523f4ec02598abff52e61f818c0),b;var a=__9ea35e3451360b72ebe8cb8006239936;if(a&&a.__esModule)b=a;else{var c={};if(null!=a)for(b in a)Object.prototype.hasOwnProperty.call(a,
b)&&(c[b]=a[b]);c.default=a;b=c}a=e(__fb27ffae84b96c14bf339e62cefcf116);(0,g.default)(f);c={};c.setup=b.fn(f,"responsiveheader.setup",{removeInVersion:"8.0.0",sinceVersion:"5.8.0",extraInfo:"No need to manually initialise anymore as this is now a web component."});(0,a.default)("responsiveheader",c);d.default=c;return d=d["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-focus-manager', location = 'node_modules/@atlassian/aui/src/js/aui/focus-manager.js' */
("undefined"===typeof window?global:window).__faba759748a0387db6389bfcb164786f=function(){function c(){this._focusTrapStack=[];(0,d.default)(document).on("focusout",{focusTrapStack:this._focusTrapStack},j)}function j(a){var e=a.data.focusTrapStack;if(a.relatedTarget&&0!==e.length){var e=e[e.length-1],g=a.target,a=a.relatedTarget,b=e.find(":aui-tabbable"),c=(0,d.default)(b.first()),b=(0,d.default)(b.last());0===e.has(a).length&&a&&(c.is(g)?b.focus():b.is(g)&&c.focus())}}var f={};"use strict";Object.defineProperty(f,
"__esModule",{value:!0});var b=__02fa0d2334b5d2f9701871403ba9d89a,d=b&&b.__esModule?b:{"default":b},b=(b=__fb27ffae84b96c14bf339e62cefcf116)&&b.__esModule?b:{"default":b},h=function(a){return"visible"===d.default.css(a,"visibility")},i=function(a,e){var b=a.nodeName.toLowerCase();if("aui-select"===b)return!0;if("area"===b){var b=a.parentNode,c=b.name,f=(0,d.default)("img[usemap=#"+c+"]").get();return!a.href||!c||"map"!==b.nodeName.toLowerCase()?!1:f&&h(f)}c=/input|select|textarea|button|object/.test(b);
f=a.href||e;return(c?!a.disabled:"a"===b?f:e)&&h(a)};d.default.extend(d.default.expr[":"],{"aui-focusable":function(a){return i(a,!isNaN(d.default.attr(a,"tabindex")))},"aui-tabbable":function(a){var b=d.default.attr(a,"tabindex"),c=isNaN(b);return(c||0<=b)&&i(a,!c)}});c.defaultFocusSelector=":aui-tabbable";c.prototype.enter=function(a){a.data("_aui-focus-restore",(0,d.default)(document.activeElement));if("false"!==a.attr("data-aui-focus")){var b=a.attr("data-aui-focus-selector")||c.defaultFocusSelector;
(a.is(b)?a:a.find(b)).first().focus()}a.is(".aui-dialog2")&&this._focusTrapStack.push(a)};c.prototype.exit=function(a){a.is(".aui-dialog2")&&this._focusTrapStack.pop();var b=document.activeElement;if(a[0]===b||a.has(b).length)(0,d.default)(b).blur();if((b=a.data("_aui-focus-restore"))&&b.length)a.removeData("_aui-focus-restore"),b.focus()};c.global=new c;(0,b.default)("FocusManager",c);f.default=c;return f=f["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-key-code', location = 'node_modules/@atlassian/aui/src/js/aui/key-code.js' */
("undefined"===typeof window?global:window).__d92d89c196b4703777e79d25a9f94b7f=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__fb27ffae84b96c14bf339e62cefcf116,a=a&&a.__esModule?a:{"default":a},c={ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,LEFT_SQUARE_BRACKET:91,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91};(0,a.default)("keyCode",c);b.default=c;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-layer', location = 'node_modules/@atlassian/aui/src/js/aui/layer.js' */
("undefined"===typeof window?global:window).__b16464bbf0aa314bacb753553ada098e=function(){function i(a){return a&&a.__esModule?a:{"default":a}}function p(a,b,c){var e=f.default.Event(j+b),b=f.default.Event(k+b),d=new r.default(x+c,{bubbles:!0,cancelable:!0}),c=new r.default(y+c,{bubbles:!0,cancelable:!0});a.trigger(e);a.trigger(b,[a]);a[0].dispatchEvent(d);a[0].dispatchEvent(c);return!e.isDefaultPrevented()&&!b.isDefaultPrevented()&&!d.defaultPrevented&&!c.defaultPrevented}function s(a){this.$el=
(0,f.default)(a||'<div class="aui-layer" aria-hidden="true"></div>');this.$el.addClass("aui-layer")}function t(a){return(0,f.default)('[aria-controls="'+a.attr("id")+'"]')}function u(a,b){for(var c=a.length;c--;)if(b(a[c]))return c;return-1}function g(a,b){return u(a,function(a){return a[0]===b[0]})}function l(a){return u(a,function(a){return e(a).isBlanketed()})}function n(a,b){var c=l(a);b!==c&&(-1<c?(0,q.dim)(!1,a[c].css("z-index")-20):(0,q.undim)())}function h(a,b,c){if(!(0>b))for(var d=a.length-
1;d>=b;d--){var f=e(a[d]);if(c||!f.isPersistent())f._hideLayer(!0),a.splice(d,1)}}function d(){this._stack=[]}function v(a){if(!a.length)return!1;a=document.getElementById(a.attr("aria-controls"));return-1<d.global.indexOf(a)}var o={};"use strict";Object.defineProperty(o,"__esModule",{value:!0});var f=i(__02fa0d2334b5d2f9701871403ba9d89a),q=__dec7139bfb210c49a7a16fe32dc7bd56,w=i(__faba759748a0387db6389bfcb164786f),z=i(__fb27ffae84b96c14bf339e62cefcf116),A=i(__d92d89c196b4703777e79d25a9f94b7f),B=i(__ecaadce486e7be7002d8453fc51f9873),
r=i(__2e94b36d616dffee0a6f911bf22a83ae),j="_aui-internal-layer-",k="_aui-internal-layer-global-",x="aui-layer-",y="aui-",m=(0,f.default)(document);s.prototype={below:function(){return d.global.item(d.global.indexOf(this.$el)-1)},above:function(){return d.global.item(d.global.indexOf(this.$el)+1)},changeSize:function(a,b){this.$el.css("width",a);this.$el.css("height","content"===b?"":b);return this},on:function(a,b){this.$el.on(j+a,b);return this},off:function(a,b){this.$el.off(j+a,b);return this},
show:function(){if(this.isVisible())return this.$el.attr("aria-hidden","false"),this;if(!p(this.$el,"beforeShow","show"))return this;"none"===this.$el.css("display")&&this.$el.css("display","");d.global.push(this.$el);return this},hide:function(){if(!this.isVisible())return this.$el.attr("aria-hidden","true"),this;if(!p(this.$el,"beforeHide","hide"))return this;var a=this,b=this.$el.get(0),c=function(){a.isVisible()||(this.style.display="none")},e=function(a){"opacity"===a.propertyName&&(c.call(b),
b.removeEventListener("transitionend",e))},f=window.getComputedStyle(b).transitionProperty;f&&-1<f.indexOf("opacity")?b.addEventListener("transitionend",e):c.call(b);d.global.popUntil(this.$el);return this},isVisible:function(){return"false"===this.$el.attr("aria-hidden")},remove:function(){this.hide();this.$el.remove();this.$el=null},isBlanketed:function(){return"true"===this.$el.attr("data-aui-blanketed")},isPersistent:function(){var a=this.$el.attr("modal")||this.$el.attr("data-aui-modal"),b=this.$el[0].hasAttribute("persistent");
return"true"===a||b},_hideLayer:function(a){(this.isPersistent()||this.isBlanketed())&&w.default.global.exit(this.$el);a&&p(this.$el,"beforeHide","hide");this.$el.attr("aria-hidden","true");this.$el.css("z-index",this.$el.data("_aui-layer-cached-z-index")||"");this.$el.data("_aui-layer-cached-z-index","");this.$el.trigger(j+"hide");this.$el.trigger(k+"hide",[this.$el])},_showLayer:function(a){this.$el.parent().is("body")||this.$el.appendTo(document.body);this.$el.data("_aui-layer-cached-z-index",
this.$el.css("z-index"));this.$el.css("z-index",a);this.$el.attr("aria-hidden","false");(this.isPersistent()||this.isBlanketed())&&w.default.global.enter(this.$el);this.$el.trigger(j+"show");this.$el.trigger(k+"show",[this.$el])}};var e=(0,B.default)("layer",s);e.on=function(a,b,c){m.on(k+a,b,c);return this};e.off=function(a,b,c){m.off(k+a,b,c);return this};d.prototype={push:function(a){a=a instanceof f.default?a:(0,f.default)(a);if(0<=g(this._stack,a))throw Error("The given element is already an active layer.");
this.popLayersBeside(a);var b=e(a),c;c=this._stack;c.length?(c=parseInt(c[c.length-1].css("z-index"),10),c=(isNaN(c)?0:c)+100):c=0;c=Math.max(3E3,c);b._showLayer(c);b.isBlanketed()&&(0,q.dim)(!1,c-20);this._stack.push(a);return this},popLayersBeside:function(a){a=a instanceof f.default?a:(0,f.default)(a);0<t(a).length?(a=t(a),a=0<a.length?a.closest(".aui-layer"):void 0,a?(a=this.indexOf(a),h(this._stack,++a,!1)):h(this._stack,0,!1)):(a=l(this._stack),h(this._stack,++a,!1))},indexOf:function(a){return g(this._stack,
(0,f.default)(a))},item:function(a){return this._stack[a]},hideAll:function(){this._stack.reverse().forEach(function(a){a=e(a);!a.isBlanketed()&&!a.isPersistent()&&a.hide()});return this},getNextLowerNonPersistentOrBlanketedLayer:function(a){a=a instanceof f.default?a:(0,f.default)(a);a=g(this._stack,a);if(0>a)return null;var b;for(a--;0<=a;){b=this._stack[a];var c=e(b);if(!c.isPersistent()||c.isBlanketed())return b;a--}return null},getNextHigherNonPeristentAndNonBlanketedLayer:function(a){a=a instanceof
f.default?a:(0,f.default)(a);a=g(this._stack,a);if(0>a)return null;var b;for(a++;a<this._stack.length;){b=this._stack[a];var c=e(b);if(!c.isPersistent()&&!c.isBlanketed())return b;a++}return null},popUntil:function(a){var a=a instanceof f.default?a:(0,f.default)(a),b=g(this._stack,a);if(-1===b)return null;var c=l(this._stack);h(this._stack,b+1,e(a).isBlanketed());e(a)._hideLayer();this._stack.splice(b,1);n(this._stack,c);return a},getTopLayer:function(){return!this._stack.length?null:this._stack[this._stack.length-
1]},popTopIfNonPersistent:function(){var a=this.getTopLayer(),b=e(a);return!a||b.isPersistent()?null:this.popUntil(a)},popUntilTopBlanketed:function(){var a=l(this._stack);if(0>a)return null;var b=this._stack[a];if(e(b).isPersistent())return(a=this.getNextHigherNonPeristentAndNonBlanketedLayer(b))?(b=g(this._stack,a),h(this._stack,b,!0),a):null;h(this._stack,a,!0);n(this._stack,a);return b},popUntilTopPersistent:function(){var a=d.global.getTopLayer();if(a){var b=l(this._stack),c=e(a);c.isPersistent()?
c.isBlanketed()||(a=d.global.getNextLowerNonPersistentOrBlanketedLayer(a),c=e(a),a&&!c.isPersistent()&&(a=g(this._stack,a),h(this._stack,a,!0),n(this._stack,b))):(a=g(this._stack,a),h(this._stack,a,!0),n(this._stack,b))}}};m.on("keydown",function(a){a.keyCode===A.default.ESCAPE&&(d.global.popUntilTopPersistent(),a.preventDefault())});m.on("click",".aui-blanket",function(a){d.global.popUntilTopBlanketed()&&a.preventDefault()});m.on("click",function(a){var b=(0,f.default)(a.target);b.closest(".aui-blanket").length||
(a=b.closest("[aria-controls]"),b=b.closest(".aui-layer"),!b.length&&!v(a)?d.global.hideAll():!v(a)&&b.length&&(a=d.global.getNextHigherNonPeristentAndNonBlanketedLayer(b))&&e(a).hide())});d.global=new d;e.Manager=d;(0,z.default)("layer",e);o.default=e;return o=o["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-layer-manager', location = 'node_modules/@atlassian/aui/src/js/aui/layer-manager.js' */
("undefined"===typeof window?global:window).__a67ad40e39cc43727b60df4f1cbe0d16=function(){var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=__fb27ffae84b96c14bf339e62cefcf116,b=b&&b.__esModule?b:{"default":b},a=__b16464bbf0aa314bacb753553ada098e,a=a&&a.__esModule?a:{"default":a};(0,b.default)("LayerManager",a.default.Manager);c.default=a.default.Manager;return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-alignment', location = 'node_modules/@atlassian/aui/src/js/aui/internal/alignment.js' */
("undefined"===typeof window?global:window).__670509c3f39577904eaf81675f28b1a5=function(){function j(a,h){var b,c,e;b=a.getAttribute(k)||a.getAttribute("data-aui-"+k)||window;"string"===typeof b&&(b=document.querySelector(b));e=b;b=(a.getAttribute(l)||a.getAttribute("data-aui-"+l)||m).split(" ");c=n(b,2);b=c[0];c=c[1];if(!c||"auto"===c){var d=e;c="left";if(!d||d===window||d===document)d=document.documentElement;d&&(d.nodeType&&d.nodeType===Node.ELEMENT_NODE)&&(d=d.getBoundingClientRect(),h.getBoundingClientRect().left>
d.right/2&&(c="right"))}var d=o[b+" "+c]||o[m],i=a.hasAttribute(p)||a.hasAttribute("data-aui-"+p);e=new q.default({enabled:!1,element:a,target:h,attachment:d.el,targetAttachment:d.target,classPrefix:r,constraints:[{to:e===window?"window":e,attachment:!0===i?"none":"together"}]});b=s+b;c=t+c;-1===(" "+a.className+" ").indexOf(" "+b+" ")&&(a.className+=" "+b);-1===(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className+=" "+c);this._auiTether=e}var f={};"use strict";Object.defineProperty(f,"__esModule",
{value:!0});var n;n=function(a,h){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){var b=[],c=!0,e=!1,d=void 0;try{for(var i=a[Symbol.iterator](),f;!(c=(f=i.next()).done)&&!(b.push(f.value),h&&b.length===h);c=!0);}catch(g){e=!0,d=g}finally{try{if(!c&&i["return"])i["return"]()}finally{if(e)throw d;}}return b}throw new TypeError("Invalid attempt to destructure non-iterable instance");};var g=__f22e83964d93e163aaa1176b0fbf22b4,q=g&&g.__esModule?g:{"default":g},l="alignment",p="alignment-static",
k="alignment-container",r="aui-alignment",s="aui-alignment-side-",t="aui-alignment-snap-",m="right middle",o={"top left":{el:"bottom left",target:"top left"},"top center":{el:"bottom center",target:"top center"},"top right":{el:"bottom right",target:"top right"},"right top":{el:"top left",target:"top right"},"right middle":{el:"middle left",target:"middle right"},"right bottom":{el:"bottom left",target:"bottom right"},"bottom left":{el:"top left",target:"bottom left"},"bottom center":{el:"top center",
target:"bottom center"},"bottom right":{el:"top right",target:"bottom right"},"left top":{el:"top right",target:"top left"},"left middle":{el:"middle right",target:"middle left"},"left bottom":{el:"bottom right",target:"bottom left"},"submenu left":{el:"top left",target:"top right"},"submenu right":{el:"top right",target:"top left"}};j.prototype={destroy:function(){this._auiTether.destroy();return this},disable:function(){this._auiTether.disable();return this},enable:function(){this._auiTether.enable();
return this}};f.default=j;return f=f["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-browser', location = 'node_modules/@atlassian/aui/src/js/aui/internal/browser.js' */
("undefined"===typeof window?global:window).__5e83f2691a9745a1c96cce360720d675=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.needsLayeringShim=function(){return e&&(f||g||h)};a.supportsCalc=function(){if("undefined"===typeof c){var a=document.createElement("div");a.style.cssText="height: -webkit-calc(20px + 0); height: calc(20px);";c=0<a.style.cssText.length}return c};a.supportsRequestAnimationFrame=function(){return!!window.requestAnimationFrame};a.supportsVoiceOver=
function(){return i};a.supportsDateField=function(){if("undefined"===typeof d){var a=document.createElement("input");a.setAttribute("type","date");d="date"===a.type}return d};a.supportsNewMouseEvent=function(){try{new MouseEvent("click")}catch(a){return!1}return!0};var b=navigator.userAgent.toLowerCase(),e=/msie/.test(b),f=/windows nt 5.1/.test(b),g=/windows nt 6.0/.test(b),h=/windows nt 6.1/.test(b),i=/mac os x/.test(b),c,d;return a}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-state', location = 'node_modules/@atlassian/aui/src/js/aui/internal/state.js' */
("undefined"===typeof window?global:window).__ed9b9aac7079f8ce29349f1a2c1b9701=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(b){return{set:function(a,c){void 0===b._state&&(b._state={});b._state[a]=c},get:function(a){if(b._state)return b._state[a]}}};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dropdown2', location = 'node_modules/@atlassian/aui/src/js/aui/dropdown2.js' */
("undefined"===typeof window?global:window).__71933b3476b0bdf1f1eaaf188014d1aa=function(){function v(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(b[e]=a[e]);b.default=a;return b}function i(a){return a&&a.__esModule?a:{"default":a}}function w(a){return(0,c.default)(a).is('.checked, .aui-dropdown2-checked, [aria-checked="true"]')}function m(a,b){var e=a._triggeringElement||document.querySelector('[aria-controls="'+a.id+'"]');e&&b(e)}function r(a,
b){var e=(0,c.default)(a);b?(e.attr("aria-expanded","true"),e.addClass("active aui-dropdown2-active")):(e.attr("aria-expanded","false"),e.removeClass("active aui-dropdown2-active"))}function x(a){(0,g.default)(a).set("loading-state",y);(0,g.default)(a).set("hasErrorBeenShown",a.isVisible());j.default.wrap(a).innerHTML='\n        <div class="aui-message aui-message-error aui-dropdown-error">\n            <p>'+"Error loading dropdown"+"</p>\n        </div>\n    "}function z(a){if(a.src&&
(0,g.default)(a).get("loading-state")!==A)(0,g.default)(a).set("loading-state",A),(0,g.default)(a).set("hasErrorBeenShown",!1),m(a,function(a){a.setAttribute("aria-busy","true")}),j.default.wrap(a).innerHTML='\n        <div class="aui-dropdown-loading">\n            <span class="spinner"></span> '+"Loading dropdown"+"\n        </div>\n    ",(0,c.default)(a).find(".spinner").spin(),c.default.ajax(a.src).done(function(b,e,h){200===h.status?((0,g.default)(a).set("loading-state",
F),j.default.wrap(a).innerHTML=b.map(function(a){var b=a.items.map(function(a){function b(e){return a[e]?e+' ="true"':""}var e="aui-item-"+a.type;return"\n                <"+e+" "+(a["for"]?'for="'+a["for"]+'"':"")+" "+(a.href?'href="'+a.href+'"':"")+" "+b("interactive")+"\n                    "+b("checked")+" "+b("disabled")+" "+b("hidden")+">\n                    "+a.content+"\n                </"+e+">"}).join("");return"\n            <aui-section "+(a.label?'label="'+a.label+'"':"")+">\n                "+
b+"\n            </aui-section>"}).join("\n"),d.default.init(a)):x(a)}).fail(function(){x(a)}).always(function(){m(a,function(a){a.setAttribute("aria-busy","false")})})}function B(a,b){return(0,c.default)(a).find('> ul > li, > .aui-dropdown2-section > ul > li, > div[role] > .aui-dropdown2-section > div[role="group"] > ul[role] > li[role], aui-item-link, aui-item-checkbox, aui-item-radio').filter(b).children('a, button, [role="checkbox"], [role="menuitemcheckbox"], [role="radio"], [role="menuitemradio"]')}
function q(a){return B(a,function(){return-1===this.className.indexOf("hidden")&&!this.hasAttribute("hidden")})}function C(a){var b=(0,c.default)(a);b.addClass("aui-dropdown2");(0,s.supportsVoiceOver)()&&b.find('> div[role="application"]').attr("role","presentation");a.hasAttribute("data-container")&&(b.attr("data-aui-alignment-container",b.attr("data-container")),b.removeAttr("data-container"));(0,k.default)(a);a.addEventListener("aui-layer-show",function(){(0,c.default)(a).trigger("aui-dropdown2-show");
var b=(0,c.default)(a),h=b.find(".hidden").addClass("aui-dropdown2-hidden"),l=b.find(".disabled").addClass("aui-dropdown2-disabled"),d=b.find(".interactive").addClass("aui-dropdown2-interactive");a._syncClasses=function(){h.removeClass("aui-dropdown2-hidden");l.removeClass("aui-dropdown2-disabled");d.removeClass("aui-dropdown2-interactive")};B(this,function(){return true}).each(function(){var a=(0,c.default)(this);a.attr("tabindex","-1");(a.hasClass("aui-dropdown2-disabled")||a.parent().hasClass("aui-dropdown2-hidden"))&&
a.attr("aria-disabled",true)});m(a,function(b){r(b,true);b=b.getAttribute("data-dropdown2-hide-location");b=document.getElementById(b)||a.parentNode;a._returnTo=b})});a.addEventListener("aui-layer-hide",function(){(0,c.default)(a).trigger("aui-dropdown2-hide");if(a._syncClasses){a._syncClasses();delete a._syncClasses}if(a._auiAlignment){a._auiAlignment.disable();a._auiAlignment.destroy()}a._returnTo&&a.parentNode&&a.parentNode!==a._returnTo&&a._returnTo.appendChild(a);(0,c.default)(a).removeClass("aui-dropdown2-in-buttons");
q(a).removeClass("active aui-dropdown2-active");m(a,function(a){var b=n===true;n=false;if(b){a.focus();r(a,a.hasSubmenu&&a.hasSubmenu())}else r(a,false)});delete a.isSubmenu;a._triggeringElement=null});b=(0,c.default)(a);b.on("keydown",function(b){if(b.keyCode===f.default.DOWN){a.focusNext();b.preventDefault()}else if(b.keyCode===f.default.UP){a.focusPrevious();b.preventDefault()}else if(b.keyCode===f.default.LEFT){if(a.isSubmenu){n=true;a.hide(b);b.preventDefault()}}else if(b.keyCode===f.default.ESCAPE)n=
true;else if(b.keyCode===f.default.TAB){n=true;a.hide(b)}});b.on("click keydown",'a, button, [role="menuitem"], [role="menuitemcheckbox"], [role="checkbox"], [role="menuitemradio"], [role="radio"]',function(b){var h=b.currentTarget,h=(0,c.default)(h),l=b.keyCode,d=l===f.default.ENTER,l=l===f.default.SPACE;if((!d||!h.is("a[href], button"))&&(b.type==="click"||d||l)){h=(0,c.default)(b.currentTarget);if(h.attr("aria-disabled")==="true")b.preventDefault();else if((!b.currentTarget.hasSubmenu||!b.currentTarget.hasSubmenu())&&
!h.is(".aui-dropdown2-interactive")){h=a;do{d=(0,k.default)(h);h=(0,k.default)(h).below();d.$el.is(".aui-dropdown2")&&d.hide(b)}while(h)}}});b.on("mouseenter",'a, button, [role="menuitem"], [role="menuitemcheckbox"], [role="checkbox"], [role="menuitemradio"], [role="radio"]',function(b){var c=b.currentTarget,c=c.hasSubmenu&&c.hasSubmenu();if(!b.isDefaultPrevented()&&!c)(b=(0,k.default)(a).above())&&(0,k.default)(b).hide()});a.hide();(0,c.default)(a).delegate(".aui-dropdown2-checkbox:not(.disabled):not(.aui-dropdown2-disabled)",
"click keydown",function(a){if((a.type==="click"||a.keyCode===f.default.ENTER||a.keyCode===f.default.SPACE)&&!a.isDefaultPrevented()){this.isInteractive()&&a.preventDefault();this.isEnabled()&&(this.isChecked()?this.uncheck():this.check())}});(0,c.default)(a).delegate(".aui-dropdown2-radio:not(.checked):not(.aui-dropdown2-checked):not(.disabled):not(.aui-dropdown2-disabled)","click keydown",function(a){if((a.type==="click"||a.keyCode===f.default.ENTER||a.keyCode===f.default.SPACE)&&!a.isDefaultPrevented()){this.isInteractive()&&
a.preventDefault();a=(0,c.default)(this);if(this.isEnabled()&&this.isChecked()===false){a.closest("ul,[role=group]").find(".aui-dropdown2-checked").not(this).each(function(){this.uncheck()});this.check()}}})}"use strict";__ff21a71b857b101095156bf4ff8b27ac;var c=i(__02fa0d2334b5d2f9701871403ba9d89a),j=i(__19c740e7a69d815ecec16b8dd69f0e00),G=v(__9ea35e3451360b72ebe8cb8006239936),H=v(__8139e9a1368a0224fc430963d21930c8),o=__ddc701dd1918eb1bc6ac99673accf4b9,s=__5e83f2691a9745a1c96cce360720d675,I=i(__670509c3f39577904eaf81675f28b1a5),
D=i(__2e94b36d616dffee0a6f911bf22a83ae),f=i(__d92d89c196b4703777e79d25a9f94b7f),k=i(__b16464bbf0aa314bacb753553ada098e),g=i(__ed9b9aac7079f8ce29349f1a2c1b9701),d=i(__da172e72afc5a7088e3034df761062a6),A="loading",y="error",F="success";(0,d.default)("aui-dropdown2-trigger",{type:d.default.type.CLASSNAME,created:function(a){function b(b){b.preventDefault();if(a.isEnabled()){var d=document.getElementById(e),f=(0,c.default)(a);f.parent().hasClass("aui-buttons")&&d.classList.add("aui-dropdown2-in-buttons");
f.parents().hasClass("aui-header")&&d.classList.add("aui-dropdown2-in-header");d.toggle(b);d.isSubmenu=a.hasSubmenu();return d}}var e=a.getAttribute("aria-controls");e||((e=a.getAttribute("aria-owns"))?(a.removeAttribute("aria-owns"),a.setAttribute("aria-controls",e)):H.error('Dropdown triggers need either a "aria-owns" or "aria-controls" attribute'));a.setAttribute("aria-haspopup",!0);a.setAttribute("aria-expanded",!1);"A"===a.nodeName&&!a.href&&a.setAttribute("href","#"+e);(0,c.default)(a).on("aui-button-invoke",
b).on("click",b).on("keydown",function(c){var e=c.keyCode===f.default.ENTER||c.keyCode===f.default.SPACE,d=c.keyCode===f.default.RIGHT&&a.hasSubmenu(),g=(c.keyCode===f.default.UP||c.keyCode===f.default.DOWN)&&!a.hasSubmenu();if(e||d||g)(c=b(c))&&c.focusItem(0)}).on("mouseenter",function(b){b.preventDefault();if(a.isEnabled()){var c=document.getElementById(e),d=(0,g.default)(c).get("loading-state")==="unloaded",f=(0,g.default)(c).get("hasErrorBeenShown");(d||f&&!c.isVisible())&&z(c);if(a.hasSubmenu()){c.show(b);
c.isSubmenu=a.hasSubmenu()}return c}})},prototype:{disable:function(){this.setAttribute("aria-disabled","true")},enable:function(){this.setAttribute("aria-disabled","false")},isEnabled:function(){return"true"!==this.getAttribute("aria-disabled")},hasSubmenu:function(){return-1!==(this.className||"").split(/\s+/).indexOf("aui-dropdown2-sub-trigger")}}});(0,c.default)(document).on("mousedown",".aui-dropdown2-trigger",function(){this.hasAttribute("resolved")||(d.default.init(this),G.getMessageLogger("Dropdown2 lazy initialisation",
{removeInVersion:"8.0.0",alternativeName:"initialisation on DOM insertion",sinceVersion:"5.8.0",extraInfo:"Dropdown2 triggers should have all necessary attributes on DOM insertion",deprecationType:"JS"})())});(0,d.default)("aui-dropdown2-sub-trigger",{type:d.default.type.CLASSNAME,created:function(a){a.className+=" aui-dropdown2-trigger";d.default.init(a)}});(0,c.default)(document).on("mouseenter",".aui-dropdown2-trigger-group a, .aui-dropdown2-trigger-group button",function(a){var b=(0,c.default)(a.currentTarget);
if(!b.is(".aui-dropdown2-active")&&!b.closest(".aui-dropdown2").length){var d=b.closest(".aui-dropdown2-trigger-group"),h=d.find(".aui-dropdown2-active");h.length&&b.is(".aui-dropdown2-trigger")&&(h.blur(),b.trigger("aui-button-invoke"),a.preventDefault());a=d.find(":focus");a.length&&b.is(".aui-dropdown2-trigger")&&a.blur()}});var n=!1;(0,c.default)(window).on("resize",(0,o.debounceImmediate)(function(){(0,c.default)(".aui-dropdown2").each(function(a,b){d.default.init(b);b.isVisible()&&b.hide()})},
1E3));var o={toggle:function(a){this.isVisible()?this.hide(a):this.show(a)},show:function(a){a&&(a.currentTarget&&a.currentTarget.classList.contains("aui-dropdown2-trigger"))&&(this._triggeringElement=a.currentTarget);(0,k.default)(this).show();var b=this;m(b,function(a){var d=a&&a.hasSubmenu&&a.hasSubmenu(),f=b.getAttribute("data-aui-alignment")==="submenu auto";if(!d&&f){var g=(0,c.default)(b),i=g.data("previous-data-aui-alignment");i?b.setAttribute("data-aui-alignment",i):b.removeAttribute("data-aui-alignment");
g.removeData("previous-data-aui-alignment");g.data("had-data-aui-alignment-static")||b.removeAttribute("data-aui-alignment-static");g.removeData("had-data-aui-alignment-static")}g=b.hasAttribute("data-aui-alignment");if(d&&!f){d=(0,c.default)(b);b.hasAttribute("data-aui-alignment")&&d.data("previous-data-aui-alignment",b.getAttribute("data-aui-alignment"));d.data("had-data-aui-alignment-static",b.hasAttribute("data-aui-alignment-static"));b.setAttribute("data-aui-alignment","submenu auto");b.setAttribute("data-aui-alignment-static",
true)}else if(!g){b.setAttribute("data-aui-alignment","bottom auto");b.setAttribute("data-aui-alignment-static",true)}b._auiAlignment&&b._auiAlignment.destroy();b._auiAlignment=new I.default(b,a);b._auiAlignment.enable()});return this},hide:function(){(0,k.default)(this).hide();return this},focusNext:function(){var a=q(this),b=document.activeElement;a.last()[0]!==b&&(b=a.toArray().indexOf(b),this.focusItem(a.get(b+1)))},focusPrevious:function(){var a=q(this),b=document.activeElement;a.first()[0]!==
b&&(b=a.toArray().indexOf(b),this.focusItem(a.get(b-1)))},focusItem:function(a){var b=q(this);"number"===typeof a&&(a=b.get(a));a=(0,c.default)(a);a.focus();b.removeClass("active aui-dropdown2-active");a.addClass("active aui-dropdown2-active")},isVisible:function(){return(0,k.default)(this).isVisible()}},p={created:function(a){a=a.children[0];a.setAttribute("aria-disabled","true");a.className+=" aui-dropdown2-disabled"},removed:function(a){a=a.children[0];a.setAttribute("aria-disabled","false");(0,
c.default)(a).removeClass("aui-dropdown2-disabled")}},t={created:function(a){a.children[0].className+=" aui-dropdown2-interactive"},removed:function(a){a=a.children[0];(0,c.default)(a).removeClass("aui-dropdown2-interactive")}},E={created:function(a){var b=a.children[0];(0,c.default)(b).addClass("checked aui-dropdown2-checked");b.setAttribute("aria-checked",!0);a.dispatchEvent(new D.default("change",{bubbles:!0}))},removed:function(a){var b=a.children[0];(0,c.default)(b).removeClass("checked aui-dropdown2-checked");
b.setAttribute("aria-checked",!1);a.dispatchEvent(new D.default("change",{bubbles:!0}))}},u={created:function(a){p.created(a)},removed:function(a){p.removed(a)}};(0,d.default)("aui-item-link",{template:(0,j.default)('<a role="menuitem" tabindex="-1"><content></content></a>'),attributes:{disabled:p,interactive:t,hidden:u,href:{created:function(a,b){a.children[0].setAttribute("href",b.newValue)},updated:function(a,b){a.children[0].setAttribute("href",b.newValue)},removed:function(a){a.children[0].removeAttribute("href")}},
"for":{created:function(a){var b=a.children[0];b.setAttribute("aria-controls",a.getAttribute("for"));(0,c.default)(b).addClass("aui-dropdown2-sub-trigger")},updated:function(a){a.children[0].setAttribute("aria-controls",a.getAttribute("for"))},removed:function(a){a=a.children[0];a.removeAttribute("aria-controls");(0,c.default)(a).removeClass("aui-dropdown2-sub-trigger")}}}});(0,d.default)("aui-item-checkbox",{template:(0,j.default)('<span role="checkbox" class="aui-dropdown2-checkbox" tabindex="-1"><content></content></span>'),
attributes:{disabled:p,interactive:t,checked:E,hidden:u}});(0,d.default)("aui-item-radio",{template:(0,j.default)('<span role="radio" class="aui-dropdown2-radio" tabindex="-1"><content></content></span>'),attributes:{disabled:p,interactive:t,checked:E,hidden:u}});(0,d.default)("aui-section",{template:(0,j.default)('\n        <strong aria-role="presentation" class="aui-dropdown2-heading"></strong>\n        <div role="group">\n            <content></content>\n        </div>\n    '),attributes:{label:function(a,
b){var c=a.children[1];a.children[0].textContent=b.newValue;c.setAttribute("aria-label",b.newValue)}},created:function(a){a.className+=" aui-dropdown2-section";a.setAttribute("role","presentation")}});(0,d.default)("aui-dropdown-menu",{template:(0,j.default)('\n        <div role="application">\n            <content></content>\n        </div>\n    '),created:function(a){a.setAttribute("role","menu");a.className="aui-dropdown2 aui-style-default aui-layer";(0,g.default)(a).set("loading-state","unloaded");
d.default.init(a)},attributes:{src:{}},prototype:o,events:{"aui-layer-show":function(a){var b="unloaded"===(0,g.default)(a).get("loading-state"),c=(0,g.default)(a).get("hasErrorBeenShown");(b||c)&&z(a);if((0,g.default)(a).get("loading-state")===y)(0,g.default)(a).set("hasErrorBeenShown",!0)}}});(0,d.default)("aui-dropdown2",{type:d.default.type.CLASSNAME,created:C,prototype:o});(0,d.default)("data-aui-dropdown2",{type:d.default.type.ATTRIBUTE,created:C,prototype:o});(0,d.default)("aui-dropdown2-checkbox",
{type:d.default.type.CLASSNAME,created:function(a){var b=w(a);b&&(0,c.default)(a).addClass("checked aui-dropdown2-checked");a.setAttribute("aria-checked",b);a.setAttribute("tabindex","0");(0,s.supportsVoiceOver)()&&a.setAttribute("role","checkbox")},prototype:{isEnabled:function(){return!(null!==this.getAttribute("aria-disabled")&&"true"===this.getAttribute("aria-disabled"))},isChecked:function(){return null!==this.getAttribute("aria-checked")&&"true"===this.getAttribute("aria-checked")},isInteractive:function(){return(0,
c.default)(this).hasClass("aui-dropdown2-interactive")},uncheck:function(){"aui-item-checkbox"===this.parentNode.tagName.toLowerCase()&&this.parentNode.removeAttribute("checked");this.setAttribute("aria-checked","false");(0,c.default)(this).removeClass("checked aui-dropdown2-checked");(0,c.default)(this).trigger("aui-dropdown2-item-uncheck")},check:function(){"aui-item-checkbox"===this.parentNode.tagName.toLowerCase()&&this.parentNode.setAttribute("checked","");this.setAttribute("aria-checked","true");
(0,c.default)(this).addClass("checked aui-dropdown2-checked");(0,c.default)(this).trigger("aui-dropdown2-item-check")}}});(0,d.default)("aui-dropdown2-radio",{type:d.default.type.CLASSNAME,created:function(a){var b=w(a);b&&(0,c.default)(a).addClass("checked aui-dropdown2-checked");a.setAttribute("aria-checked",b);a.setAttribute("tabindex","0");(0,s.supportsVoiceOver)()&&a.setAttribute("role","radio")},prototype:{isEnabled:function(){return!(null!==this.getAttribute("aria-disabled")&&"true"===this.getAttribute("aria-disabled"))},
isChecked:function(){return null!==this.getAttribute("aria-checked")&&"true"===this.getAttribute("aria-checked")},isInteractive:function(){return(0,c.default)(this).hasClass("aui-dropdown2-interactive")},uncheck:function(){"aui-item-radio"===this.parentNode.tagName.toLowerCase()&&this.parentNode.removeAttribute("checked");this.setAttribute("aria-checked","false");(0,c.default)(this).removeClass("checked aui-dropdown2-checked");(0,c.default)(this).trigger("aui-dropdown2-item-uncheck")},check:function(){"aui-item-radio"===
this.parentNode.tagName.toLowerCase()&&this.parentNode.setAttribute("checked","");this.setAttribute("aria-checked","true");(0,c.default)(this).addClass("checked aui-dropdown2-checked");(0,c.default)(this).trigger("aui-dropdown2-item-check")}}});return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-fancy-file-input-2.0.1-dist-fancy-file-input', location = 'node_modules/fancy-file-input/dist/fancy-file-input.js' */
("undefined"===typeof window?global:window).__607568f0801f736e736cc7c17253d80c=function(){var f={exports:{}},g=f.exports,m={module:f,exports:g,jquery:__02fa0d2334b5d2f9701871403ba9d89a,jquery:__02fa0d2334b5d2f9701871403ba9d89a},d;d=function(b,a,j){var d=("undefined"===typeof window?global:window).define,c,e,j=[j,a,b].filter(function(a){return"function"===typeof a})[0],a=[a,b,[]].filter(Array.isArray)[0];c=j.apply(null,a.map(function(a){return m[a]}));e=typeof c;"function"===typeof d&&d("string"===
typeof b?b:"__607568f0801f736e736cc7c17253d80c",a,j);"string"===e?c=String(c):"number"===e?c=Number(c):"boolean"===e&&(c=Boolean(c));void 0!==c&&(g=f.exports=c)};d.amd=!0;var l=this,i=function(b){function a(k,h){var c=b(k).data("FancyFileInput");if(c)return c;h=b.extend({},a.defaults,h);this.el=k;this.$el=b(k);this.$label=this.createLabel(h.buttonText);this._addLabelText();this.$clearButton=b("<button>",{text:this.$label.attr("data-ffi-clearButtonText")||h.clearButtonText,"class":"ffi-clear",type:"button",
tabindex:"-1"});this.multipleFileTextPattern=this.$label.attr("data-ffi-multipleFileTextPattern")||h.multipleFileTextPattern;this._eventNamespace=".ffi";this.CLASSES={disabled:"is-disabled",focused:"is-focused",active:"is-active",valid:"is-valid",invalid:"is-invalid"};this[this.isDisabled()?"disable":"enable"]();this.isFocused=!1}var d=/^.*[\\\/]/,f=/\{0\}/gi,c,e=3,g=document.createElement("div"),i=g.getElementsByTagName("i");do g.innerHTML="<\!--[if gt IE "+ ++e+"]><i></i><![endif]--\>";while(i[0]);
c=4<e?e:document.documentMode;a.defaults={buttonText:"Browse\u2026",clearButtonText:"Clear",multipleFileTextPattern:"{0} files"};a.prototype._addLabelText=function(){var a=b('label[for="'+this.el.id+'"]');a.length&&this.$el.attr("aria-label",a.text())};a.prototype.createLabel=function(a){var c=this.$el.parent(".ffi[data-ffi-button-text]");c.length||(c=this.$el.wrap(b("<label>",{"class":"ffi","data-ffi-button-text":a})).parent());return c};a.prototype.isDisabled=function(){return this.$el.is(":disabled")};
a.prototype.formatMultipleFileText=function(a){return this.multipleFileTextPattern.replace(f,a)};a.prototype.bindEvents=function(){this.$el.on("invalid"+this._eventNamespace,b.proxy(this.checkValidity,this)).on("change"+this._eventNamespace,b.proxy(this.change,this)).on("keydown"+this._eventNamespace,b.proxy(this.keydown,this)).on("mousedown"+this._eventNamespace,b.proxy(this.mousedown,this)).on("mouseup"+this._eventNamespace,b.proxy(this.mouseup,this)).on("focus"+this._eventNamespace,b.proxy(this.focus,
this)).on("blur"+this._eventNamespace,b.proxy(this.blur,this));this.$clearButton.on("click"+this._eventNamespace,b.proxy(this.clear,this))};a.prototype.unbindEvents=function(){this.$el.off(this._eventNamespace);this.$clearButton.off(this._eventNamespace)};a.prototype.fireEvent=function(a){this.$el.trigger(a+this._eventNamespace)};a.prototype.enable=function(){this.bindEvents();this.$el.prop("disabled",!1);this.$label.removeClass(this.CLASSES.disabled)};a.prototype.disable=function(){this.unbindEvents();
this.$el.prop("disabled",!0);this.$label.addClass(this.CLASSES.disabled)};a.prototype.clear=function(){this.$el.wrap("<form>").closest("form").get(0).reset();this.$el.unwrap();this.el.value="";this.change();return!1};a.prototype.focus=function(){var a=this;this.$label.addClass(this.CLASSES.focused);c&&!this.isFocused&&(this.isFocused=!0,setTimeout(function(){a.$el.blur();a.$el.focus()},0))};a.prototype.blur=function(){if(!c||!this.isFocused)this.$label.removeClass(this.CLASSES.focused),this.isFocused=
!1};a.prototype.mousedown=function(){this.$label.addClass(this.CLASSES.active)};a.prototype.mouseup=function(){this.$label.removeClass(this.CLASSES.active)};a.prototype.keydown=function(a){var b=a.which;if(8===b||46===b)this.clear(),a.preventDefault();if(c&&9===b){var d=this;this.isFocused=!1;this.$el.prop("disabled",!0);setTimeout(function(){d.$el.prop("disabled",!1).blur()},0)}};a.prototype.checkValidity=function(){if(this.el.required){var a=this.$el.is(":invalid");this.$label.toggleClass(this.CLASSES.invalid,
a).toggleClass(this.CLASSES.valid,!a)}};a.prototype.change=function(){var a,b="";this.checkValidity();a=this.el.multiple&&1<this.el.files.length?this.formatMultipleFileText(this.el.files.length):this.el.value;a.length?(b=a.replace(d,""),this.$clearButton.appendTo(this.$label)):this.$clearButton.detach();this.$el.focus();this.setFieldText(b);this.fireEvent("value-changed")};a.prototype.setFieldText=function(a){a.length?(this.$label.attr("data-ffi-value",a),this.fireEvent("value-added")):(this.$label.removeAttr("data-ffi-value"),
this.fireEvent("value-cleared"))};b.fn.fancyFileInput=function(c){return this.each(function(){var d=new a(this,c);b(this).data("FancyFileInput",d)})};return a};"function"===typeof d&&d.amd?d(["jquery"],function(b){return l.FancyFileInput=i(b)}):"object"===typeof g?f.exports=i(__02fa0d2334b5d2f9701871403ba9d89a):l.FancyFileInput=i(jQuery);return f.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-src-js-aui-fancy-file-input', location = 'src/js/aui/fancy-file-input.js' */
("undefined"===typeof window?global:window).__8e18d5e9dbddaf2ab15c8e1981729622=function(){var a={};Object.defineProperty(a,"__esModule",{value:!0});var b=__607568f0801f736e736cc7c17253d80c;a.default=(b&&b.__esModule?b:{"default":b}).default;return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:hotkeys', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.hotkeys.js' */
("undefined"===typeof window?global:window).__74696de6601b4e489802e1f686e0cc7e=function(){var a=jQuery,c=function(a){this.num=0;this.timer=0<a?a:!1},k=function(h){if(a.isPlainObject(h.data)||a.isArray(h.data)||"string"===typeof h.data){var i=h.handler,g={timer:700,combo:[]},b=h.data;"string"===typeof b?g.combo=[b]:a.isArray(b)?g.combo=b:a.extend(g,b);g.combo=a.map(g.combo,function(a){return a.toLowerCase()});h.index=new c(g.timer);h.handler=function(d){if(!(this!==d.target&&(/textarea|select|input/i.test(d.target.nodeName)||
"true"===a(d.target).prop("contenteditable")))){var e="keypress"!==d.type?a.hotkeys.specialKeys[d.which]:null,b=String.fromCharCode(d.which).toLowerCase(),f="",c={};d.altKey&&"alt"!==e&&(f+="alt+");d.ctrlKey&&"ctrl"!==e&&(f+="ctrl+");d.metaKey&&(!d.ctrlKey&&"meta"!==e)&&(f+="meta+");d.shiftKey&&"shift"!==e&&(f+="shift+");d.metaKey&&"["===b&&(b=null);e&&(c[f+e]=!0);b&&(c[f+b]=!0);/shift+/.test(f)&&(c[f.replace("shift+","")+a.hotkeys.shiftNums[e||b]]=!0);e=h.index;b=g.combo;if(j(b[e.val()],c)){if(e.val()===
b.length-1)return e.reset(),i.apply(this,arguments);e.inc()}else e.reset(),j(b[0],c)&&e.inc()}}}},j=function(a,c){for(var g=a.split(" "),b=0,d=g.length;b<d;b++)if(c[g[b]])return!0;return!1};a.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",91:"meta",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",
103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta",219:"[",221:"]"},keypressKeys:["<",">","?"],shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"}};a.each(a.hotkeys.keypressKeys,function(c,i){a.hotkeys.shiftNums[i]=i});c.prototype.val=
function(){return this.num};c.prototype.inc=function(){this.timer&&(clearTimeout(this.timeout),this.timeout=setTimeout(a.proxy(c.prototype.reset,this),this.timer));this.num++};c.prototype.reset=function(){this.timer&&clearTimeout(this.timeout);this.num=0};a.each(["keydown","keyup","keypress"],function(){a.event.special[this]={add:k}});return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-event', location = 'node_modules/@atlassian/aui/src/js/aui/event.js' */
("undefined"===typeof window?global:window).__7c671a926722d3fc57b38c647ef5910c=function(){function g(a,b,c){try{return"function"===typeof c?(0,f.default)(window).bind(a,b,c):(0,f.default)(window).bind(a,b)}catch(e){d.log("error while binding: "+e.message)}}function h(a,b){try{return(0,f.default)(window).unbind(a,b)}catch(c){d.log("error while unbinding: "+c.message)}}function i(a,b){try{return(0,f.default)(window).trigger(a,b)}catch(c){d.log("error while triggering: "+c.message)}}var c={};"use strict";
Object.defineProperty(c,"__esModule",{value:!0});c.trigger=c.unbind=c.bind=void 0;var a=__02fa0d2334b5d2f9701871403ba9d89a,f=a&&a.__esModule?a:{"default":a},d;if((a=__8139e9a1368a0224fc430963d21930c8)&&a.__esModule)d=a;else{var e={};if(null!=a)for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b]);e.default=a;d=e}b=(b=__fb27ffae84b96c14bf339e62cefcf116)&&b.__esModule?b:{"default":b};(0,b.default)("bind",g);(0,b.default)("trigger",i);(0,b.default)("unbind",h);c.bind=g;c.unbind=h;c.trigger=
i;return c}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog', location = 'node_modules/@atlassian/aui/src/js/aui/dialog.js' */
("undefined"===typeof window?global:window).__8c25237a63a4b0e116ea899da18a16d3=function(){function s(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);b.default=a;return b}function q(a){return a&&a.__esModule?a:{"default":a}}function o(a,b,c,g){if("object"!=("undefined"===typeof a?"undefined":x(a)))a={width:a,height:b,id:c},a=d.default.extend({},a,g);var a=d.default.extend({},{width:800,height:600,closeOnOutsideClick:!1,keypressListener:function(a){a.keyCode===
y.default.ESCAPE&&h.is(":visible")&&f.hide()}},a),h=(0,d.default)("<div></div>").addClass("aui-popup");a.id&&h.attr("id",a.id);var j=3E3;(0,d.default)(".aui-dialog").each(function(){var a=(0,d.default)(this);j=a.css("z-index")>j?a.css("z-index"):j});var z=function i(b,c){a.width=b=b||a.width;a.height=c=c||a.height;h.css({marginTop:-Math.round(c/2)+"px",marginLeft:-Math.round(b/2)+"px",width:b,height:c,"z-index":parseInt(j,10)+2});return i}(a.width,a.height);(0,d.default)("body").append(h);h.hide();
(0,A.enable)(h);var e=(0,d.default)(".aui-blanket"),p=function(a,b){var c=(0,d.default)(a,b);return c.length?(c.focus(),!0):!1},f={changeSize:function(b,c){(b&&b!=a.width||c&&c!=a.height)&&z(b,c);this.show()},show:function(){var b=function(){(0,d.default)(document).off("keydown",a.keypressListener).on("keydown",a.keypressListener);(0,t.dim)();e=(0,d.default)(".aui-blanket");0!==e.length&&a.closeOnOutsideClick&&e.click(function(){h.is(":visible")&&f.hide()});h.show();o.current=this;var b=h;if(0===
(0,d.default)(".dialog-page-body",b).find(":focus").length)if(a.focusSelector)p(a.focusSelector,b);else if(!p(":input:visible:enabled:first",(0,d.default)(".dialog-page-body",b)))if(!p(":input:visible:enabled:first",(0,d.default)(".dialog-button-panel",b)))p(":input:visible:enabled:first",(0,d.default)(".dialog-page-menu",b));(0,d.default)(document).trigger("showLayer",["popup",this])};b.call(this);this.show=b},hide:function(){(0,d.default)(document).unbind("keydown",a.keypressListener);e.unbind();
this.element.hide();if(0===(0,d.default)(".aui-dialog:visible").length)(0,t.undim)();var b=document.activeElement;this.element.has(b).length&&b.blur();(0,d.default)(document).trigger("hideLayer",["popup",this]);o.current=null;this.enable()},element:h,remove:function(){h.remove();this.element=null},disable:function(){this.disabled||(this.popupBlanket=(0,d.default)("<div class='dialog-blanket'> </div>").css({height:h.height(),width:h.width()}),h.append(this.popupBlanket),this.disabled=!0)},enable:function(){this.disabled&&
(this.disabled=!1,this.popupBlanket.remove(),this.popupBlanket=null)}};return f}var k={};"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.popup=k.Dialog=void 0;var x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d=q(__02fa0d2334b5d2f9701871403ba9d89a),y=q(__d92d89c196b4703777e79d25a9f94b7f),B=s(__8139e9a1368a0224fc430963d21930c8),
u=s(__9ea35e3451360b72ebe8cb8006239936),r=__7c671a926722d3fc57b38c647ef5910c,t=__dec7139bfb210c49a7a16fe32dc7bd56,A=__9e2abbac69b5ea1ee20e7e6213d7d18a,v=q(__fb27ffae84b96c14bf339e62cefcf116),m,n=function(a,b,c,g){a.buttonpanel||a.addButtonPanel();this.page=a;this.onclick=c;this._onclick=function(b){return!0===c.call(this,a.dialog,a,b)};this.item=(0,d.default)("<button></button>").html(b).addClass("button-panel-button");g&&this.item.addClass(g);"function"==typeof c&&this.item.click(this._onclick);
a.buttonpanel.append(this.item);this.id=a.button.length;a.button[this.id]=this},C=function(a,b,c,g,h){a.buttonpanel||a.addButtonPanel();h||(h="#");this.page=a;this.onclick=c;this._onclick=function(b){return!0===c.call(this,a.dialog,a,b)};this.item=(0,d.default)("<a></a>").html(b).attr("href",h).addClass("button-panel-link");g&&this.item.addClass(g);"function"==typeof c&&this.item.click(this._onclick);a.buttonpanel.append(this.item);this.id=a.button.length;a.button[this.id]=this};m=function(a,b){var c=
"left"==a?-1:1;return function(a){var d=this.page[b];if(this.id!=(1==c?d.length-1:0)){c*=a||1;d[this.id+c].item[0>c?"before":"after"](this.item);d.splice(this.id,1);d.splice(this.id+c,0,this);for(var a=0,j=d.length;a<j;a++)"panel"==b&&this.page.curtab==d[a].id&&(this.page.curtab=a),d[a].id=a}return this}};var w=function(a){return function(){this.page[a].splice(this.id,1);for(var b=0,c=this.page[a].length;b<c;b++)this.page[a][b].id=b;this.item.remove()}},e=function(a,b,c){var g={};+a||(g=Object(a),
a=g.width,b=g.height,c=g.id);this.height=b||480;this.width=a||640;this.id=c;g=d.default.extend({},g,{width:this.width,height:this.height,id:this.id});this.popup=o(g);this.popup.element.addClass("aui-dialog");this.page=[];this.curpage=0;new f(this)};n.prototype.moveUp=n.prototype.moveLeft=m("left","button");n.prototype.moveDown=n.prototype.moveRight=m("right","button");n.prototype.remove=w("button");n.prototype.html=function(a){return this.item.html(a)};n.prototype.onclick=function(a){if("undefined"==
typeof a)return this.onclick;this.item.unbind("click",this._onclick);this._onclick=function(b){return!0===a.call(this,page.dialog,page,b)};"function"==typeof a&&this.item.click(this._onclick)};var l=function(a,b,c,g,e){c instanceof d.default||(c=(0,d.default)(c));this.dialog=a.dialog;this.page=a;this.id=a.panel.length;this.button=(0,d.default)("<button></button>").html(b).addClass("item-button");e&&(this.button[0].id=e);this.item=(0,d.default)("<li></li>").append(this.button).addClass("page-menu-item");
this.body=(0,d.default)("<div></div>").append(c).addClass("dialog-panel-body").css("height",a.dialog.height+"px");this.padding=20;g&&this.body.addClass(g);var b=a.panel.length,j=this;a.menu.append(this.item);a.body.append(this.body);a.panel[b]=this;c=function(){var b;if(a.curtab+1){b=a.panel[a.curtab];b.body.hide();b.item.removeClass("selected");typeof b.onblur=="function"&&b.onblur()}a.curtab=j.id;j.body.show();j.item.addClass("selected");typeof j.onselect=="function"&&j.onselect();typeof a.ontabchange==
"function"&&a.ontabchange(j,b)};this.button.click?this.button.click(c):(B.log("atlassian-dialog:Panel:constructor - this.button.click false"),this.button.onclick=c);c();0==b?a.menu.css("display","none"):a.menu.show()};l.prototype.select=function(){this.button.click()};l.prototype.moveUp=l.prototype.moveLeft=m("left","panel");l.prototype.moveDown=l.prototype.moveRight=m("right","panel");l.prototype.remove=w("panel");l.prototype.html=function(a){return a?(this.body.html(a),this):this.body.html()};l.prototype.setPadding=
function(a){isNaN(+a)||(this.body.css("padding",+a),this.padding=+a,this.page.recalcSize());return this};var f=function(a,b){this.dialog=a;this.id=a.page.length;this.element=(0,d.default)("<div></div>").addClass("dialog-components");this.body=(0,d.default)("<div></div>").addClass("dialog-page-body");this.menu=(0,d.default)("<ul></ul>").addClass("dialog-page-menu").css("height",a.height+"px");this.body.append(this.menu);this.curtab;this.panel=[];this.button=[];b&&this.body.addClass(b);a.popup.element.append(this.element.append(this.menu).append(this.body));
a.page[a.page.length]=this};f.prototype.recalcSize=function(){for(var a=this.header?56:0,b=this.buttonpanel?51:0,c=this.panel.length;c--;){var d=this.dialog.height-a-b;this.panel[c].body.css("height",d);this.menu.css("height",d)}};f.prototype.addButtonPanel=function(){this.buttonpanel=(0,d.default)("<div></div>").addClass("dialog-button-panel");this.element.append(this.buttonpanel)};f.prototype.addPanel=function(a,b,c,d){new l(this,a,b,c,d);this.recalcSize();return this};f.prototype.addHeader=function(a,
b){this.header&&this.header.remove();this.header=(0,d.default)("<h2></h2>").text(a||"").addClass("dialog-title");b&&this.header.addClass(b);this.element.prepend(this.header);this.recalcSize();return this};f.prototype.addButton=function(a,b,c){new n(this,a,b,c);this.recalcSize();return this};f.prototype.addLink=function(a,b,c,d){new C(this,a,b,c,d);this.recalcSize();return this};f.prototype.gotoPanel=function(a){this.panel[a.id||a].select()};f.prototype.getCurrentPanel=function(){return this.panel[this.curtab]};
f.prototype.hide=function(){this.element.hide()};f.prototype.show=function(){this.element.show()};f.prototype.remove=function(){this.element.remove()};e.prototype.addHeader=function(a,b){this.page[this.curpage].addHeader(a,b);return this};e.prototype.addButton=function(a,b,c){this.page[this.curpage].addButton(a,b,c);return this};e.prototype.addLink=function(a,b,c,d){this.page[this.curpage].addLink(a,b,c,d);return this};e.prototype.addSubmit=function(a,b){this.page[this.curpage].addButton(a,b,"button-panel-submit-button");
return this};e.prototype.addCancel=function(a,b){this.page[this.curpage].addLink(a,b,"button-panel-cancel-link");return this};e.prototype.addButtonPanel=function(){this.page[this.curpage].addButtonPanel();return this};e.prototype.addPanel=function(a,b,c,d){this.page[this.curpage].addPanel(a,b,c,d);return this};e.prototype.addPage=function(a){new f(this,a);this.page[this.curpage].hide();this.curpage=this.page.length-1;return this};e.prototype.nextPage=function(){this.page[this.curpage++].hide();this.curpage>=
this.page.length&&(this.curpage=0);this.page[this.curpage].show();return this};e.prototype.prevPage=function(){this.page[this.curpage--].hide();0>this.curpage&&(this.curpage=this.page.length-1);this.page[this.curpage].show();return this};e.prototype.gotoPage=function(a){this.page[this.curpage].hide();this.curpage=a;0>this.curpage?this.curpage=this.page.length-1:this.curpage>=this.page.length&&(this.curpage=0);this.page[this.curpage].show();return this};e.prototype.getPanel=function(a,b){var c=null==
b?this.curpage:a;null==b&&(b=a);return this.page[c].panel[b]};e.prototype.getPage=function(a){return this.page[a]};e.prototype.getCurrentPanel=function(){return this.page[this.curpage].getCurrentPanel()};e.prototype.gotoPanel=function(a,b){null!=b&&this.gotoPage(a.id||a);this.page[this.curpage].gotoPanel("undefined"==typeof b?a:b)};e.prototype.show=function(){this.popup.show();(0,r.trigger)("show.dialog",{dialog:this});return this};e.prototype.hide=function(){this.popup.hide();(0,r.trigger)("hide.dialog",
{dialog:this});return this};e.prototype.remove=function(){this.popup.hide();this.popup.remove();(0,r.trigger)("remove.dialog",{dialog:this})};e.prototype.disable=function(){this.popup.disable();return this};e.prototype.enable=function(){this.popup.enable();return this};e.prototype.get=function(a){var b=[],c=this;(a+"").replace(RegExp('(?:^|,)\\s*(?:(page|panel|button|header)(?:#([^"][^ ]*|"[^"]*")|:(\\d+))?|#([^"][^ ]*|"[^"]*"))(?:\\s+(?:(page|panel|button|header)(?:#([^"][^ ]*|"[^"]*")|:(\\d+))?|#([^"][^ ]*|"[^"]*")))?\\s*(?=,|$)',
"ig"),function(a,d,e,g,h,f,i,l,k){d=d&&d.toLowerCase();a=[];"page"==d&&c.page[g]?(a.push(c.page[g]),d=(d=f)&&d.toLowerCase(),e=i,g=l,h=k):a=c.page;e=e&&(e+"").replace(/"/g,"");i&&(i+"").replace(/"/g,"");h=h&&(h+"").replace(/"/g,"");k&&(k+"").replace(/"/g,"");if(d||h)for(f=a.length;f--;){if(h||"panel"==d&&(e||!e&&null==g))for(i=a[f].panel.length;i--;)(a[f].panel[i].button.html()==h||a[f].panel[i].button.html()==e||"panel"==d&&!e&&null==g)&&b.push(a[f].panel[i]);if(h||"button"==d&&(e||!e&&null==g))for(i=
a[f].button.length;i--;)(a[f].button[i].item.html()==h||a[f].button[i].item.html()==e||"button"==d&&!e&&null==g)&&b.push(a[f].button[i]);a[f][d]&&a[f][d][g]&&b.push(a[f][d][g]);"header"==d&&a[f].header&&b.push(a[f].header)}else b=b.concat(a)});for(var d={length:b.length},a=b.length;a--;){d[a]=b[a];for(var e in b[a])e in d||function(a){d[a]=function(){for(var b=this.length;b--;)"function"==typeof this[b][a]&&this[b][a].apply(this[b],arguments)}}(e)}return d};e.prototype.updateHeight=function(){for(var a=
0,b=(0,d.default)(window).height()-56-51-100,c=0;this.getPanel(c);c++)this.getPanel(c).body.css({height:"auto",display:"block"}).outerHeight()>a&&(a=Math.min(b,this.getPanel(c).body.outerHeight())),c!==this.page[this.curpage].curtab&&this.getPanel(c).body.css({display:"none"});for(c=0;this.getPanel(c);c++)this.getPanel(c).body.css({height:a||this.height});this.page[0].menu.height(a);this.height=a+56+51+1;this.popup.changeSize(void 0,this.height)};e.prototype.isMaximised=function(){return this.popup.element.outerHeight()>=
(0,d.default)(window).height()-100};e.prototype.getCurPanel=function(){return this.getPanel(this.page[this.curpage].curtab)};e.prototype.getCurPanelButton=function(){return this.getCurPanel().button};k.Dialog=m=u.construct(e,"Dialog constructor",{alternativeName:"Dialog2"});k.popup=o=u.construct(o,"Dialog popup constructor",{alternatveName:"Dialog2"});(0,v.default)("Dialog",m);(0,v.default)("popup",o);k.Dialog=m;k.popup=o;return k}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-css.escape-1.5.0-css-escape', location = 'node_modules/css.escape/css.escape.js' */
("undefined"===typeof window?global:window).__7c5c9a64bb3f53554c652dea9ceab243=function(){var f={exports:{}},i=f.exports,k={module:f,exports:i},c;c=function(d,g,e){var c=("undefined"===typeof window?global:window).define,b,a,e=[e,g,d].filter(function(a){return"function"===typeof a})[0],g=[g,d,[]].filter(Array.isArray)[0];b=e.apply(null,g.map(function(a){return k[a]}));a=typeof b;"function"===typeof c&&c("string"===typeof d?d:"__7c5c9a64bb3f53554c652dea9ceab243",g,e);"string"===a?b=String(b):"number"===
a?b=Number(b):"boolean"===a&&(b=Boolean(b));void 0!==b&&(i=f.exports=b)};c.amd=!0;var h="undefined"!=typeof global?global:this,j=function(d){if(d.CSS&&d.CSS.escape)return d.CSS.escape;var c=function(e){for(var e=String(e),d=e.length,b=-1,a,c="",f=e.charCodeAt(0);++b<d;)a=e.charCodeAt(b),c=0==a?c+"\ufffd":1<=a&&31>=a||127==a||0==b&&48<=a&&57>=a||1==b&&48<=a&&57>=a&&45==f?c+("\\"+a.toString(16)+" "):0==b&&1==d&&45==a?c+("\\"+e.charAt(b)):128<=a||45==a||95==a||48<=a&&57>=a||65<=a&&90>=a||97<=a&&122>=
a?c+e.charAt(b):c+("\\"+e.charAt(b));return c};d.CSS||(d.CSS={});return d.CSS.escape=c};"object"==typeof i?f.exports=j(h):"function"==typeof c&&c.amd?c([],j.bind(h,h)):j(h);return f.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-inline-dialog', location = 'node_modules/@atlassian/aui/src/js/aui/inline-dialog.js' */
("undefined"===typeof window?global:window).__c1cf6dc594e57ddb907bd3313fe8b424=function(){function B(b){if(b&&b.__esModule)return b;var c={};if(null!=b)for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&(c[d]=b[d]);c.default=b;return c}function u(b){return b&&b.__esModule?b:{"default":b}}function w(b,c,l,a){a=a||[];a.hasOwnProperty("onTop")&&(E(),a.onTop&&void 0===a.gravity&&(a.gravity="s"));if("undefined"===typeof c&&(c=String(Math.random()).replace(".",""),(0,d.default)("#inline-dialog-"+
c+", #arrow-"+c+", #inline-dialog-shim-"+c).length))throw"GENERATED_IDENTIFIER_NOT_UNIQUE";var g=(0,F.default)(c),e=d.default.extend(!1,w.opts,a);"w"===e.gravity&&(e.offsetX=void 0===a.offsetX?10:a.offsetX,e.offsetY=void 0===a.offsetY?0:a.offsetY);var i,j,h,k=!1,o=!1,q=!1,m,t,f=(0,d.default)('<div id="inline-dialog-'+c+'" class="aui-inline-dialog"><div class="aui-inline-dialog-contents contents"></div><div id="arrow-'+c+'" class="aui-inline-dialog-arrow arrow aui-css-arrow"></div></div>'),n=(0,d.default)("#arrow-"+
g,f),p=f.find(".contents");e.displayShadow||p.addClass("aui-inline-dialog-no-shadow");e.autoWidth?p.addClass("aui-inline-dialog-auto-width"):p.width(e.width);p.on({mouseenter:function(){clearTimeout(j);f.unbind("mouseenter")},mouseleave:function(){r()}});var s=function(){i||(i={popup:f,hide:function(){r(0)},id:c,show:function(){x()},persistent:e.persistent?true:false,reset:function(){var a=(0,d.default)(window).height(),a=Math.round(a*0.75);f.children(".aui-inline-dialog-contents").css("max-height",
a);a=e.calculatePositions(f,t,m,e);if(a.hasOwnProperty("displayAbove")){G();a.gravity=a.displayAbove?"s":"n"}f.css(a.popupCss);n.removeClass("aui-bottom-arrow aui-left-arrow aui-right-arrow");a.gravity==="s"&&!n.hasClass("aui-bottom-arrow")?n.addClass("aui-bottom-arrow"):a.gravity==="w"?n.addClass("aui-left-arrow"):a.gravity==="e"&&n.addClass("aui-right-arrow");n.css(a.arrowCss);f.fadeIn(e.fadeTime,function(){});if((0,H.needsLayeringShim)()){a=(0,d.default)("#inline-dialog-shim-"+g);a.length||(0,
d.default)(f).prepend((0,d.default)('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+c+'" frameBorder="0" src="javascript:false;"></iframe>'));a.css({width:p.outerWidth(),height:p.outerHeight()})}}});return i},x=function(){f.is(":visible")||(h=setTimeout(function(){if(q&&o){e.addActiveClass&&(0,d.default)(b).addClass("active");k=true;if(!e.persistent){if(!v){(0,d.default)("body").bind("click."+A,function(a){(0,d.default)(a.target).closest("#inline-dialog-"+g+" .contents").length===0&&
r(0)});v=true}(0,d.default)(document).on("keydown",B)}w.current=s();(0,d.default)(document).trigger("showLayer",["inlineDialog",s()]);s().reset()}},e.showDelay))},r=function(a){if(!(typeof a==="undefined"&&e.persistent)&&typeof f.get(0)._datePickerPopup==="undefined"){o=false;if(k&&e.preHideCallback.call(f[0].popup)){a=a==null?e.hideDelay:a;clearTimeout(j);clearTimeout(h);a!=null&&(j=setTimeout(function(){v&&(0,d.default)("body").unbind("click."+A);v=false;(0,d.default)(document).off("keydown",B);
e.addActiveClass&&(0,d.default)(b).removeClass("active");f.fadeOut(e.fadeTime,function(){e.hideCallback.call(f[0].popup)});o=k=false;(0,d.default)(document).trigger("hideLayer",["inlineDialog",s()]);w.current=null;if(!e.cacheContent)u=q=false},a))}}},z=function(a,b){var g=(0,d.default)(b);e.upfrontCallback.call({popup:f,hide:function(){r(0)},id:c,show:function(){x()}});f.each(function(){typeof this.popup!=="undefined"&&this.popup.hide()});e.closeOthers&&(0,d.default)(".aui-inline-dialog").each(function(){!this.popup.persistent&&
this.popup.hide()});t={target:g};m=a?{x:a.pageX,y:a.pageY}:{x:g.offset().left,y:g.offset().top};k||clearTimeout(h);o=true;g=function(){u=false;q=true;e.initCallback.call({popup:f,hide:function(){r(0)},id:c,show:function(){x()}});x()};if(!u){u=true;d.default.isFunction(l)?l(p,b,g):d.default.get(l,function(a,b,d){p.html(e.responseHandler(a,b,d));q=true;e.initCallback.call({popup:f,hide:function(){r(0)},id:c,show:function(){x()}});x()})}clearTimeout(j);k||x();return false};f[0].popup=s();var u=!1,y=
!1,C=function(){if(!y){(0,d.default)(e.container).append(f);y=true}},a=(0,d.default)(b);if(e.onHover)if(e.useLiveEvents)if(a.selector)(0,d.default)(document).on("mouseenter",a.selector,function(a){C();z(a,this)}).on("mouseleave",a.selector,function(){r()});else D.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.");else a.on({mouseenter:function(a){C();z(a,this)},mouseleave:function(){r()}});else if(!e.noBind)if(e.useLiveEvents)if(a.selector)(0,
d.default)(document).on("click",a.selector,function(a){C();k&&e.closeOnTriggerClick?f.hide():z(a,this);return false}).on("mouseleave",a.selector,function(){r()});else D.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.");else a.on("click",function(a){C();k&&e.closeOnTriggerClick?f.hide():z(a,this);return false}).on("mouseleave",function(){r()});var v=!1,A=c+".inline-dialog-check",B=function(a){a.keyCode===I.default.ESCAPE&&r(0)};f.show=
function(a,c){a&&a.stopPropagation();C();e.noBind&&(!b||!b.length)?z(a,c===void 0?a.target:c):z(a,b)};f.hide=function(){r(0)};f.refresh=function(){k&&s().reset()};f.getOptions=function(){return e};return f}function y(b){var b=(0,d.default)(b),c=d.default.extend({left:0,top:0},b.offset());return{left:c.left,top:c.top,width:b.outerWidth(),height:b.outerHeight()}}function J(b,c,l,a){var g,e,i,j,h,k,o,q,m=d.default.isFunction(a.offsetX)?a.offsetX(b,c,l,a):a.offsetX,t=d.default.isFunction(a.offsetY)?a.offsetY(b,
c,l,a):a.offsetY;d.default.isFunction(a.arrowOffsetX)&&a.arrowOffsetX(b,c,l,a);l=d.default.isFunction(a.arrowOffsetY)?a.arrowOffsetY(b,c,l,a):a.arrowOffsetY;h="body"!==a.container.toLowerCase();i=(0,d.default)(a.container);a=h?(0,d.default)(a.container).parent():(0,d.default)(window);j=h?i.offset():{left:0,top:0};h&&a.offset();g=c.target;h=g.offset();e=g[0].getBBox&&g[0].getBBox();c=a.scrollTop();q=a.scrollLeft();a.width();a=a.height();o=i.width();i.height();i=h.top-j.top;j=h.left-j.left;h=e?e.width:
g.outerWidth();k=e?e.height:g.outerHeight();g=b.width();e=b.height();var f=10,n=b.find(".arrow").outerHeight(),p=i-c,s=j-q,b=Math.floor(k/2);q=Math.floor(e/2);k=Math.floor(n/2);o=!(o-s-h-m-f>=g)&&s-m-f>=g?"e":"w";s=p+b-k;n=a-s-n;f=Math.min(f,s-5);f=Math.min(f,n-5);n=p+b;p=Math.max(n-f,0);n=Math.max(a-n-f,0);q-t>p?(m={top:c+f,left:"w"===o?j+h+m:j-g-m},t={top:i+b-(m.top+k)}):q+t>n?(m={top:c+a-e-f,left:"w"===o?j+h+m:j-g-m},t={top:i+b-(m.top+k)}):(m={top:i+b-q+t,left:"w"===o?j+h+m:j-g-m},t={top:q-k+l});
return{gravity:o,popupCss:m,arrowCss:t}}function K(b,c,l,a){var g=d.default.isFunction(a.offsetX)?a.offsetX(b,c,l,a):a.offsetX,e=d.default.isFunction(a.offsetY)?a.offsetY(b,c,l,a):a.offsetY,i=d.default.isFunction(a.arrowOffsetX)?a.arrowOffsetX(b,c,l,a):a.arrowOffsetX,j=y(window),h=y(c.target),c=y(b),b=y(b.find(".aui-inline-dialog-arrow")),k=h.left+h.width/2,o=(window.pageYOffset||document.documentElement.scrollTop)+j.height;c.top=h.top+h.height+~~e;c.left=h.left+~~g;g=j.width-(c.left+c.width+10);
b.left=k-c.left+~~i;b.top=-(b.height/2);i=h.top>c.height;if(i=!(c.top+c.height<o)&&i||i&&"s"===a.gravity)c.top=h.top-c.height-b.height/2,b.top=c.height;a.isRelativeToMouse?0>g?(c.right=10,c.left="auto",b.left=l.x-(j.width-c.width)):(c.left=l.x-20,b.left=l.x-c.left):0>g?(c.right=10,c.left="auto",l=j.width-c.right-c.width,b.right="auto",b.left=k-l-b.width/2):c.width<=h.width/2&&(b.left=c.width/2,c.left=k-c.width/2);return{gravity:i?"s":"n",displayAbove:i,popupCss:{left:c.left,top:c.top,right:c.right},
arrowCss:{left:b.left,top:b.top,right:b.right}}}var v={};Object.defineProperty(v,"__esModule",{value:!0});var d=u(__02fa0d2334b5d2f9701871403ba9d89a),H=__5e83f2691a9745a1c96cce360720d675,A=B(__9ea35e3451360b72ebe8cb8006239936),D=B(__8139e9a1368a0224fc430963d21930c8),L=u(__fb27ffae84b96c14bf339e62cefcf116),I=u(__d92d89c196b4703777e79d25a9f94b7f),F=u(__7c5c9a64bb3f53554c652dea9ceab243);w.opts={onTop:!1,responseHandler:function(b){return b},closeOthers:!0,isRelativeToMouse:!1,addActiveClass:!0,onHover:!1,
useLiveEvents:!1,noBind:!1,fadeTime:100,persistent:!1,hideDelay:1E4,showDelay:0,width:300,offsetX:0,offsetY:10,arrowOffsetX:0,arrowOffsetY:0,container:"body",cacheContent:!0,displayShadow:!0,autoWidth:!1,gravity:"n",closeOnTriggerClick:!1,preHideCallback:function(){return!0},hideCallback:function(){},initCallback:function(){},upfrontCallback:function(){},calculatePositions:function(b,c,d,a){a=a||{};return("w"===a.gravity?J:K)(b,c,d,a)}};var w=A.construct(w,"Inline dialog constructor",{alternativeName:"inline dialog 2"}),
G=A.getMessageLogger("displayAbove","[remove version]",{alternativeName:"gravity",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2197."}),E=A.getMessageLogger("onTop","[remove version]",{alternativeName:"gravity",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2197."});(0,L.default)("InlineDialog",w);v.default=w;return v=v["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-template', location = 'node_modules/@atlassian/aui/src/js/aui/template.js' */
("undefined"===typeof window?global:window).__c33b5453d0277383a3121d7d42efa93d=function(){function i(b){return b&&b.__esModule?b:{"default":b}}var e={};"use strict";Object.defineProperty(e,"__esModule",{value:!0});var f=i(__02fa0d2334b5d2f9701871403ba9d89a),m=i(__9429d2be869371d3ad2b23dcd7686108),n=i(__fb27ffae84b96c14bf339e62cefcf116),o=f.default,k=/\{([^\}]+)\}/g,p=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,l=function(b,a,d,e){var c=d;a.replace(p,function(b,a,d,f,g){a=a||f;c&&(a+
":html"in c?(c=c[a+":html"],e=!0):a in c&&(c=c[a]),g&&"function"===typeof c&&(c=c()))});if(null==c||c===d)c=b;c=String(c);e||(c=g.escape(c));return c},q=function(b){this.template=this.template.replace(k,function(a,d){return l(a,d,b,!0)});return this},r=function(b){this.template=this.template.replace(k,function(a,d){return l(a,d,b)});return this},s=function(){return this.template},g=function(b){function a(){return a.template}a.template=String(b);a.toString=a.valueOf=s;a.fill=r;a.fillHtml=q;return a},
h={},j=[];g.load=function(b){b=String(b);if(!h.hasOwnProperty(b)){1E3<=j.length&&delete h[j.shift()];j.push(b);var a=b,d,e=b;d=o("script").filter(function(){return this.getAttribute("title")===e});h[a]=d[0].text}return this(h[b])};g.escape=m.default;f=g;(0,n.default)("template",f);e.default=f;return e=e["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-messages', location = 'node_modules/@atlassian/aui/src/js/aui/messages.js' */
("undefined"===typeof window?global:window).__90738312f3cfac7af75d195a6e4c4764=function(){function n(a){if(a&&a.__esModule)return a;var d={};if(null!=a)for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(d[b]=a[b]);d.default=a;return d}function i(a){return a&&a.__esModule?a:{"default":a}}function f(a){e[a]=function(d,b){b||(b=d,d="#aui-message-bar");b.closeable=null!==b.closeable&&!1!==b.closeable;b.shadowed=null!==b.shadowed&&!1!==b.shadowed;var h=(b.title||"").toString().trim()?this.template:
this.templateAlt,c=b,h=(0,g.default)((0,q.default)(h).fill({type:a,closeable:c.closeable?"closeable":"",shadowed:c.shadowed?"shadowed":"",fadeout:c.fadeout?"fadeout":"",title:c.title||"","body:html":c.body||""}).toString());c.id&&(/[#\'\"\.\s]/g.test(c.id)?r.warn("Messages error: ID rejected, must not include spaces, hashes, dots or quotes."):h.attr("id",c.id));c=d;"prepend"===b.insert?h.prependTo(c):h.appendTo(c);b.closeable&&k(h);b.fadeout&&l(h,b.delay,b.duration);return h}}function k(a){(0,g.default)(a||
"div.aui-message.closeable").each(function(){var a=(0,g.default)(this),b=a.find(".aui-icon.icon-close"),b=0<b.length?b.first():(0,g.default)('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');a.addClass("closeable");a.append(b);a.on("click",".aui-icon.icon-close",function(a){(0,g.default)(a.target).closest(".aui-message").closeMessage()}).on("keydown",".aui-icon.icon-close",function(a){if(a.which===o.default.ENTER||a.which===o.default.SPACE)(0,g.default)(a.target).closest(".aui-message").closeMessage(),
a.preventDefault()})})}function l(a,d,b){d="undefined"!==typeof d?d:s;b="undefined"!==typeof b?b:t;(0,g.default)(a||"div.aui-message.fadeout").each(function(){function a(){c.stop(!0,!1).delay(d).fadeOut(b,function(){c.closeMessage()})}var c=(0,g.default)(this),e=!1,f=!1;c.focusin(function(){e=!0;c.stop(!0,!1).fadeTo(p,1)}).focusout(function(){e=!1;!e&&!f&&a()}).hover(function(){f=!0;c.stop(!0,!1).fadeTo(p,1)},function(){f=!1;!e&&!f&&a()});a()})}var j={};"use strict";Object.defineProperty(j,"__esModule",
{value:!0});var g=i(__02fa0d2334b5d2f9701871403ba9d89a),m=n(__9ea35e3451360b72ebe8cb8006239936),r=n(__8139e9a1368a0224fc430963d21930c8),u=i(__fb27ffae84b96c14bf339e62cefcf116),o=i(__d92d89c196b4703777e79d25a9f94b7f),v=i(__da172e72afc5a7088e3034df761062a6),q=i(__c33b5453d0277383a3121d7d42efa93d),t=500,s=5E3,p=100,e={setup:function(){k();l()},makeCloseable:k,makeFadeout:l,template:'<div class="aui-message aui-message-{type} {closeable} {shadowed} {fadeout}"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div>',
templateAlt:'<div class="aui-message aui-message-{type} {closeable} {shadowed} {fadeout}">{body}<\!-- .aui-message --\></div>',createMessage:f};g.default.fn.closeMessage=function(){var a=(0,g.default)(this);a.hasClass("aui-message")&&a.hasClass("closeable")&&(a.stop(!0),a.trigger("messageClose",[this]).remove(),(0,g.default)(document).trigger("aui-message-close",[this]))};f("generic");f("error");f("warning");f("info");f("success");f("hint");(0,v.default)("aui-message",{created:function(a){var d=a.innerHTML,
b=a.getAttribute("type")||"info";a.innerHTML="";e[b](a,{body:d,closeable:a.getAttribute("closeable"),delay:a.getAttribute("delay"),duration:a.getAttribute("duration"),fadeout:a.getAttribute("fadeout"),title:a.getAttribute("title")})}});(0,g.default)(function(){e.setup()});m.prop(e,"makeCloseable",{extraInfo:'Use the "closeable" option in the constructor instead. Docs: https://docs.atlassian.com/aui/latest/docs/messages.html'});m.prop(e,"createMessage",{extraInfo:"Use the provided convenience methods instead e.g. messages.generic(). Docs: https://docs.atlassian.com/aui/latest/docs/messages.html"});
m.prop(e,"makeFadeout",{extraInfo:'Use the "fadeout" option in the constructor instead. Docs: https://docs.atlassian.com/aui/latest/docs/messages.html'});(0,u.default)("messages",e);j.default=e;return j=j["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-tabs', location = 'node_modules/@atlassian/aui/src/js/aui/tabs.js' */
("undefined"===typeof window?global:window).__e016582a8b697880990cb51003d4a7e2=function(){function j(a){return a&&a.__esModule?a:{"default":a}}function u(a){a=(0,e.default)(a);if(!a.hasClass("aui-tabs-responsive-trigger")){var b=(0,e.default)(a.attr("href").match(A)[0]);b.addClass("active-pane").attr("aria-hidden","false").siblings(".tabs-pane").removeClass("active-pane").attr("aria-hidden","true");var c=a.parents(".aui-tabs").find(".aui-tabs-responsive-trigger-item a").attr("aria-controls"),c=(0,
e.default)(document).find("#"+c);c.find("li a").attr("aria-checked",!1).removeClass("checked aui-dropdown2-checked");c.find("li").removeClass("active-tab");a.parent("li.menu-item").addClass("active-tab").siblings(".menu-item").removeClass("active-tab");a.hasClass("aui-tabs-responsive-item")&&(c=b.parent(".aui-tabs").find("li.menu-item:not(.aui-tabs-responsive-trigger-item)"),c.removeClass("active-tab"),c.find("a").removeClass("checked").removeAttr("aria-checked"));a.hasClass("aui-tabs-responsive-item")&&
b.parent(".aui-tabs").find("li.menu-item.aui-tabs-responsive-trigger-item").addClass("active-tab");a.closest(".tabs-menu").find("a").attr("aria-selected","false");a.attr("aria-selected","true");a.trigger("tabSelect",{tab:a,pane:b})}}function v(a){return void 0!==a.attr("data-aui-persist")&&"false"!==a.attr("data-aui-persist")}function w(a){var b=a.attr("id"),a=a.attr("data-aui-persist");return B+(b?b:"")+(a&&"true"!==a?"-"+a:"")}function x(a){m.change((0,e.default)(a.target).closest("a"));a&&a.preventDefault()}
function y(a){a.forEach(function(a,c){var d=(0,e.default)(a),g=d.find(".tabs-menu").first(),f=g.find("li:not(.aui-tabs-responsive-trigger-item)"),h=g.find(".aui-tabs-responsive-trigger").parent(),o=h.find("a"),k=o.attr("aria-controls"),k=(0,e.default)(document).find("#"+k).attr("aria-checked",!1),i=0<k.length,j=l.totalTabsWidth(f,k)>d.outerWidth();!i&&j&&(h=l.createResponsiveDropdownTrigger(g,c),k=l.createResponsiveDropdown(d,c));o.attr("aria-controls","aui-tabs-responsive-dropdown-"+c);o.attr("id",
"aui-tabs-responsive-trigger-"+c);o.attr("href","aui-tabs-responsive-trigger-"+c);k.attr("id","aui-tabs-responsive-dropdown-"+c);j&&(f=l.moveVisibleTabs(f.toArray(),d,h),f=l.totalVisibleTabWidth(f),d=d.outerWidth()-f-h.outerWidth(!0),0<d&&(f=k.find("li"),l.moveInvisibleTabs(f.toArray(),d,h)),k.on("click","a",x),g.is(":visible")&&g.hide().show());i&&!j&&(k.find("li").each(function(){l.moveTabOutOfDropdown((0,e.default)(this),h)}),l.removeResponsiveDropdown(k,h))})}function z(a){var b=(0,e.default)(a);
a.setAttribute("role","application");if(!b.data("aui-tab-events-bound")){var c=b.children("ul.tabs-menu");c.attr("role","tablist");c.children("li").attr("role","presentation");c.find("> .menu-item a").each(function(){var a=(0,e.default)(this),b=a.attr("href");(0,C.default)(a);a.attr("role","tab");(0,e.default)(b).attr("aria-labelledby",a.attr("id"));a.parent().hasClass("active-tab")?a.attr("aria-selected","true"):a.attr("aria-selected","false")});c.on("click","a",x);b.data("aui-tab-events-bound",
!0);[].slice.call(a.querySelectorAll(".tabs-pane")).forEach(D)}}function D(a){a.setAttribute("role","tabpanel");a.setAttribute("aria-hidden",(0,e.default)(a).hasClass("active-pane")?"false":"true")}var p={};"use strict";Object.defineProperty(p,"__esModule",{value:!0});__19c740e7a69d815ecec16b8dd69f0e00;var q;var i=__8139e9a1368a0224fc430963d21930c8;if(i&&i.__esModule)q=i;else{var t={};if(null!=i)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);t.default=i;q=t}var E=j(__ddc701dd1918eb1bc6ac99673accf4b9),
e=j(__02fa0d2334b5d2f9701871403ba9d89a),C=j(__9b235f66ad20912472c8874c2abf23c1);n=j(__fb27ffae84b96c14bf339e62cefcf116);var F=j(__fedda106ce31ba969f0eb1a2ff2110ec),r=j(__da172e72afc5a7088e3034df761062a6),s=window.skateTemplateHtml,A=/#.*/,B="_internal-aui-tabs-",l={totalTabsWidth:function(a,b){var c=this.totalVisibleTabWidth(a),d=0;b.find("li").each(function(a,b){d+=parseInt(b.getAttribute("data-aui-tab-width"))});return c+d},totalVisibleTabWidth:function(a){var b=0;a.each(function(a,d){b+=(0,e.default)(d).outerWidth()});
return b},removeResponsiveDropdown:function(a,b){a.remove();b.remove()},createResponsiveDropdownTrigger:function(a,b){a.append('<li class="menu-item aui-tabs-responsive-trigger-item"><a class="aui-dropdown2-trigger aui-tabs-responsive-trigger aui-dropdown2-trigger-arrowless" id="aui-tabs-responsive-trigger-'+b+'" aria-haspopup="true" aria-controls="aui-tabs-responsive-dropdown-'+b+'" href="aui-tabs-responsive-dropdown-'+b+'">...</a></li>');return a.find(".aui-tabs-responsive-trigger-item")},createResponsiveDropdown:function(a,
b){a.append('<div class="aui-dropdown2 aui-style-default aui-tabs-responsive-dropdown" id="aui-tabs-responsive-dropdown-'+b+'"><ul></ul></div>');return a.find("#aui-tabs-responsive-dropdown-"+b)},findNewVisibleTabs:function(a,b,c){for(var d=0,g=0;d+c<=b&&g<a.length;g++)var f=(0,e.default)(a[g]).outerWidth(!0),d=d+f;return a.slice(0,g-1)},moveVisibleTabs:function(a,b,c){for(var d=c.find("a").attr("aria-controls"),d=(0,e.default)("#"+d),b=this.findNewVisibleTabs(a,b.outerWidth(),c.parent().outerWidth(!0)),
g=b.length-1,f=a.length-1;f>=g;f--){var h=(0,e.default)(a[f]);this.moveTabToResponsiveDropdown(h,d,c)}return(0,e.default)(b)},moveTabToResponsiveDropdown:function(a,b,c){var d=a.find("a");a.attr("data-aui-tab-width",a.outerWidth(!0));d.addClass("aui-dropdown2-radio aui-tabs-responsive-item");a.hasClass("active-tab")&&(d.addClass("aui-dropdown2-checked"),c.addClass("active-tab"));b.find("ul").prepend(a)},moveInvisibleTabs:function(a,b,c){for(var d=0;0<b&&d<a.length;d++){var g=(0,e.default)(a[d]),f=
parseInt(g.attr("data-aui-tab-width"),10);f<b&&this.moveTabOutOfDropdown(g,c);b-=f}},moveTabOutOfDropdown:function(a,b){a.find("a").hasClass("aui-dropdown2-checked")&&(a.addClass("active-tab"),b.removeClass("active-tab"));a.children("a").removeClass("aui-dropdown2-radio aui-tabs-responsive-item aui-dropdown2-checked");b.before(a)}},m={setup:function(){var a=(0,E.default)(y,200),b=(0,e.default)('.aui-tabs.horizontal-tabs[data-aui-responsive]:not([data-aui-responsive="false"]), aui-tabs[responsive]:not([responsive="false"])').toArray();
y(b);(0,e.default)(window).resize(function(){a(b)});var c=(0,e.default)(".aui-tabs:not(.aui-tabs-disabled)");c.each(function(){z(this)});for(var d=0,g=c.length;d<g;d++){var f=c.eq(d),h=c.get(d);if(v(f)&&window.localStorage)if(f.attr("id")){if(f=window.localStorage.getItem(w(f)))(h=h.querySelector('a[href$="'+f+'"]'))&&u(h)}else q.warn("A tab group must specify an id attribute if it specifies data-aui-persist.")}(0,e.default)(".aui-tabs.vertical-tabs").find("a").each(function(){var a=(0,e.default)(this);
a.attr("title")||(0,F.default)(a)&&a.attr("title",a.text())})},change:function(a){var a=(0,e.default)(a),b=a.closest(".aui-tabs");u(a);v(b)&&window.localStorage&&(b=a.closest(".aui-tabs"),b.attr("id")?(a=a.attr("href"))&&window.localStorage.setItem(w(b),a):q.warn("A tab group must specify an id attribute if it specifies data-aui-persist."))}};(0,e.default)(m.setup);(0,r.default)("aui-tabs",{created:function(a){(0,e.default)(a).addClass("aui-tabs horizontal-tabs");r.default.init(a);z(a)},template:s('<ul class="tabs-menu">',
'<content select="li[is=aui-tabs-tab]"></content>',"</ul>",'<content select="aui-tabs-pane"></content>'),prototype:{select:function(a){a=(0,e.default)(this.querySelectorAll("aui-tabs-pane")).index(a);-1<a&&m.change(this.querySelectorAll("li[is=aui-tabs-tab]")[a].children[0]);return this}}});var G=(0,r.default)("aui-tabs-tab",{"extends":"li",created:function(a){(0,e.default)(a).addClass("menu-item")},template:s('<a href="#">',"<strong>","<content></content>","</strong>","</a>")});(0,r.default)("aui-tabs-pane",
{attached:function(a){var b=(0,e.default)((0,e.default)(a).closest("aui-tabs").get(0)),c=(0,e.default)(a),b=b.find("aui-tabs-pane").index(c),d=new G,g=(0,e.default)(d);c.addClass("tabs-pane");d.firstChild.setAttribute("href","#"+a.id);s.wrap(d).textContent=c.attr("title");0===b&&c.addClass("active-pane");c.hasClass("active-pane")&&g.addClass("active-tab");c.siblings("ul").append(d)},template:s("<content></content>")});(0,n.default)("tabs",m);p.default=m;return p=p["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-partial', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.core.js' */
(function(b){function h(a,c){var d=a.nodeName.toLowerCase();if("area"===d){var d=a.parentNode,e=d.name;if(!a.href||!e||"map"!==d.nodeName.toLowerCase())return!1;d=b("img[usemap=#"+e+"]")[0];return!!d&&i(d)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||c:c)&&i(a)}function i(a){return!b(a).parents().andSelf().filter(function(){return"hidden"===b.curCSS(this,"visibility")||b.expr.filters.hidden(this)}).length}b.ui=b.ui||{};b.ui.version||(b.extend(b.ui,{version:"1.8.24",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),b.fn.extend({propAttr:b.fn.prop||b.fn.attr,_focus:b.fn.focus,focus:function(a,c){return"number"===typeof a?this.each(function(){var d=
this;setTimeout(function(){b(d).focus();c&&c.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,
"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?b(document):a},zIndex:function(a){if(void 0!==a)return this.css("zIndex",a);if(this.length)for(var a=b(this[0]),c;a.length&&a[0]!==document;){c=a.css("position");if("absolute"===c||"relative"===c||"fixed"===c)if(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c)return c;a=a.parent()}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),"1.7"===b.fn.jquery.substring(0,3)&&b.each(["Width","Height"],function(a,c){function d(a,c,d,f){b.each(e,function(){c-=parseFloat(b.curCSS(a,"padding"+this,!0))||0;d&&(c-=parseFloat(b.curCSS(a,"border"+this+"Width",!0))||0);f&&(c-=parseFloat(b.curCSS(a,"margin"+this,!0))||0)});return c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g=
{innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+c]=function(a){return void 0===a?g["inner"+c].call(this):this.each(function(){b(this).css(f,d(this,a)+"px")})};b.fn["outer"+c]=function(a,e){return"number"!==typeof a?g["outer"+c].call(this,a):this.each(function(){b(this).css(f,d(this,a,!0,e)+"px")})}}),b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(a){return function(c){return!!b.data(c,a)}}):
function(a,c,d){return!!b.data(a,d[3])},focusable:function(a){return h(a,!isNaN(b.attr(a,"tabindex")))},tabbable:function(a){var c=b.attr(a,"tabindex"),d=isNaN(c);return(d||0<=c)&&h(a,!d)}}),b(function(){var a=document.body,c=a.appendChild(c=document.createElement("div"));c.offsetHeight;b.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=100===c.offsetHeight;b.support.selectstart="onselectstart"in c;a.removeChild(c).style.display="none"}),b.curCSS||(b.curCSS=
b.css),b.extend(b.ui,{plugin:{add:function(a,c,d){var a=b.ui[a].prototype,e;for(e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([c,d[e]])}},call:function(a,c,b){if((c=a.plugins[c])&&a.element[0].parentNode)for(var e=0;e<c.length;e++)a.options[c[e][0]]&&c[e][1].apply(a.element,b)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,c){if(b(a).css("overflow")==="hidden")return false;var d=c&&c==="left"?"scrollLeft":
"scrollTop",e=false;if(a[d]>0)return true;a[d]=1;e=a[d]>0;a[d]=0;return e},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,c,d,e,f,g){return b.ui.isOverAxis(a,d,f)&&b.ui.isOverAxis(c,e,g)}}))})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-partial', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.widget.js' */
(function(c){if(c.cleanData){var h=c.cleanData;c.cleanData=function(a){for(var b=0,d;null!=(d=a[b]);b++)try{c(d).triggerHandler("remove")}catch(e){}h(a)}}else{var i=c.fn.remove;c.fn.remove=function(a,b){return this.each(function(){b||(!a||c.filter(a,[this]).length)&&c("*",this).add([this]).each(function(){try{c(this).triggerHandler("remove")}catch(a){}});return i.call(c(this),a,b)})}}c.widget=function(a,b,d){var e=a.split(".")[0],f,a=a.split(".")[1];f=e+"-"+a;d||(d=b,b=c.Widget);c.expr[":"][f]=function(b){return!!c.data(b,
a)};c[e]=c[e]||{};c[e][a]=function(a,b){arguments.length&&this._createWidget(a,b)};b=new b;b.options=c.extend(!0,{},b.options);c[e][a].prototype=c.extend(!0,b,{namespace:e,widgetName:a,widgetEventPrefix:c[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);c.widget.bridge(a,c[e][a])};c.widget.bridge=function(a,b){c.fn[a]=function(d){var e="string"===typeof d,f=Array.prototype.slice.call(arguments,1),g=this,d=!e&&f.length?c.extend.apply(null,[!0,d].concat(f)):d;if(e&&"_"===d.charAt(0))return g;
e?this.each(function(){var b=c.data(this,a),e=b&&c.isFunction(b[d])?b[d].apply(b,f):b;if(e!==b&&void 0!==e)return g=e,!1}):this.each(function(){var e=c.data(this,a);e?e.option(d||{})._init():c.data(this,a,new b(d,this))});return g}};c.Widget=function(a,b){arguments.length&&this._createWidget(a,b)};c.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(a,b){c.data(b,this.widgetName,this);this.element=c(b);this.options=c.extend(!0,{},this.options,this._getCreateOptions(),
a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return c.metadata&&c.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},
option:function(a,b){var d=a;if(0===arguments.length)return c.extend({},this.options);if("string"===typeof a){if(void 0===b)return this.options[a];d={};d[a]=b}this._setOptions(d);return this},_setOptions:function(a){var b=this;c.each(a,function(a,c){b._setOption(a,c)});return this},_setOption:function(a,b){this.options[a]=b;"disabled"===a&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",
!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(a,b,d){var e,f=this.options[a],d=d||{},b=c.Event(b);b.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();b.target=this.element[0];if(a=b.originalEvent)for(e in a)e in b||(b[e]=a[e]);this.element.trigger(b,d);return!(c.isFunction(f)&&!1===f.call(this.element[0],b,d)||b.isDefaultPrevented())}}})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-partial', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.mouse.js' */
(function(b){var d=!1;b(document).mouseup(function(){d=!1});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(c){if(!0===b.data(c.target,a.widgetName+".preventClickEvent"))return b.removeData(c.target,a.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1});this.started=!1},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName);this._mouseMoveDelegate&&b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=1==a.which,f="string"==typeof this.options.cancel&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(a))return!0;this.mouseDelayMet=!this.options.delay;this.mouseDelayMet||(this._mouseDelayTimer=
setTimeout(function(){c.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=!1!==this._mouseStart(a),!this._mouseStarted))return a.preventDefault(),!0;!0===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(a){return c._mouseMove(a)};this._mouseUpDelegate=function(a){return c._mouseUp(a)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+
this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=!0}},_mouseMove:function(a){if(this._mouseMoved&&(b.ui.ie&&(!document.documentMode||9>document.documentMode)&&!a.button||!a.which))return this._mouseUp(a);if(a.which||a.button)this._mouseMoved=!0;if(this._mouseStarted)return this._mouseDrag(a),a.preventDefault();this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&((this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,a))?this._mouseDrag(a):this._mouseUp(a));return!this._mouseStarted},
_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);this._mouseStarted&&(this._mouseStarted=!1,a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-partial', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.draggable.js' */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){"original"==this.options.helper&&!/^(?:r|a|f)/.test(this.element.css("position"))&&
(this.element[0].style.position="relative");this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable"))return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(a){var c=this.options;if(this.helper||c.disabled||d(a.target).is(".ui-resizable-handle"))return!1;
this.handle=this._getHandle(a);if(!this.handle)return!1;c.iframeFix&&d(!0===c.iframeFix?"iframe":c.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return!0},_mouseStart:function(a){var c=this.options;this.helper=this._createHelper(a);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();
d.ui.ddmanager&&(d.ui.ddmanager.current=this);this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);
this.originalPageX=a.pageX;this.originalPageY=a.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);c.containment&&this._setContainment();if(!1===this._trigger("start",a))return this._clear(),!1;this._cacheHelperProportions();d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this._mouseDrag(a,!0);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return!0},_mouseDrag:function(a,c){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");
if(!c){var b=this._uiHash();if(!1===this._trigger("drag",a,b))return this._mouseUp({}),!1;this.position=b.position}if(!this.options.axis||"y"!=this.options.axis)this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||"x"!=this.options.axis)this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return!1},_mouseStop:function(a){var c=!1;d.ui.ddmanager&&!this.options.dropBehaviour&&(c=d.ui.ddmanager.drop(this,a));this.dropped&&(c=this.dropped,this.dropped=
!1);for(var b=this.element[0],f=!1;b&&(b=b.parentNode);)b==document&&(f=!0);if(!f&&"original"===this.options.helper)return!1;if("invalid"==this.options.revert&&!c||"valid"==this.options.revert&&c||!0===this.options.revert||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var e=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){e._trigger("stop",a)!==false&&e._clear()})}else!1!==this._trigger("stop",a)&&this._clear();return!1},
_mouseUp:function(a){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var c=!this.options.handle||!d(this.options.handle,this.element).length?!0:!1;d(this.options.handle,this.element).find("*").andSelf().each(function(){this==a.target&&(c=!0)});
return c},_createHelper:function(a){var c=this.options,a=d.isFunction(c.helper)?d(c.helper.apply(this.element[0],[a])):"clone"==c.helper?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo("parent"==c.appendTo?this.element[0].parentNode:c.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" "));d.isArray(a)&&(a={left:+a[0],top:+a[1]||
0});"left"in a&&(this.offset.click.left=a.left+this.margins.left);"right"in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left);"top"in a&&(this.offset.click.top=a.top+this.margins.top);"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();"absolute"==this.cssPosition&&(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;"parent"==a.containment&&(a.containment=this.helper[0].parentNode);if("document"==a.containment||"window"==a.containment)this.containment=["document"==a.containment?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"==a.containment?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"==a.containment?0:d(window).scrollLeft())+d("document"==a.containment?document:
window).width()-this.helperProportions.width-this.margins.left,("document"==a.containment?0:d(window).scrollTop())+(d("document"==a.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var a=d(a.containment),c=a[0];if(c){a.offset();var b="hidden"!=d(c).css("overflow");this.containment=[(parseInt(d(c).css("borderLeftWidth"),10)||0)+(parseInt(d(c).css("paddingLeft"),
10)||0),(parseInt(d(c).css("borderTopWidth"),10)||0)+(parseInt(d(c).css("paddingTop"),10)||0),(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(d(c).css("borderLeftWidth"),10)||0)-(parseInt(d(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(d(c).css("borderTopWidth"),10)||0)-(parseInt(d(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=a}}else a.containment.constructor==Array&&(this.containment=a.containment)},_convertPositionTo:function(a,c){c||(c=this.position);var b="absolute"==a?1:-1,f="absolute"==this.cssPosition&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*b+this.offset.parent.top*b-(d.browser.safari&&526>d.browser.version&&"fixed"==this.cssPosition?
0:("fixed"==this.cssPosition?-this.scrollParent.scrollTop():e?0:f.scrollTop())*b),left:c.left+this.offset.relative.left*b+this.offset.parent.left*b-(d.browser.safari&&526>d.browser.version&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():e?0:f.scrollLeft())*b)}},_generatePosition:function(a){var c=this.options,b="absolute"==this.cssPosition&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,
f=/(html|body)/i.test(b[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;this.containment&&(this.relative_container?(g=this.relative_container.offset(),g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]):g=this.containment,a.pageX-this.offset.click.left<g[0]&&(e=g[0]+this.offset.click.left),a.pageY-this.offset.click.top<g[1]&&(h=g[1]+this.offset.click.top),a.pageX-this.offset.click.left>g[2]&&(e=g[2]+this.offset.click.left),
a.pageY-this.offset.click.top>g[3]&&(h=g[3]+this.offset.click.top));c.grid&&(h=c.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY,h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-c.grid[1]:h+c.grid[1]:h,e=c.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX,e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<
g[0])?e-c.grid[0]:e+c.grid[0]:e)}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&526>d.browser.version&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollTop():f?0:b.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&526>d.browser.version&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollLeft():f?0:b.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=!1},_trigger:function(a,c,b){b=b||this._uiHash();d.ui.plugin.call(this,a,[c,b]);"drag"==a&&(this.positionAbs=this._convertPositionTo("absolute"));return d.Widget.prototype._trigger.call(this,a,c,b)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.24"});
d.ui.plugin.add("draggable","connectToSortable",{start:function(a,c){var b=d(this).data("draggable"),f=b.options,e=d.extend({},c,{item:b.element});b.sortables=[];d(f.connectToSortable).each(function(){var c=d.data(this,"sortable");c&&!c.options.disabled&&(b.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",a,e))})},stop:function(a,c){var b=d(this).data("draggable"),f=d.extend({},c,{item:b.element});d.each(b.sortables,function(){this.instance.isOver?
(this.instance.isOver=0,b.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(a),this.instance.options.helper=this.instance.options._helper,"original"==b.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",a,f))})},drag:function(a,c){var b=d(this).data("draggable"),f=this;d.each(b.sortables,function(){this.instance.positionAbs=
b.positionAbs;this.instance.helperProportions=b.helperProportions;this.instance.offset.click=b.offset.click;this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},a.target=this.instance.currentItem[0],this.instance._mouseCapture(a,
!0),this.instance._mouseStart(a,!0,!0),this.instance.offset.click.top=b.offset.click.top,this.instance.offset.click.left=b.offset.click.left,this.instance.offset.parent.left-=b.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=b.offset.parent.top-this.instance.offset.parent.top,b._trigger("toSortable",a),b.dropped=this.instance.element,b.currentItem=b.element,this.instance.fromOutside=b),this.instance.currentItem&&this.instance._mouseDrag(a)):this.instance.isOver&&
(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",a,this.instance._uiHash(this.instance)),this.instance._mouseStop(a,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),b._trigger("fromSortable",a),b.dropped=!1)})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),c=d(this).data("draggable").options;
a.css("cursor")&&(c._cursor=a.css("cursor"));a.css("cursor",c.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,c){var b=d(c.helper),f=d(this).data("draggable").options;b.css("opacity")&&(f._opacity=b.css("opacity"));b.css("opacity",f.opacity)},stop:function(a,c){var b=d(this).data("draggable").options;b._opacity&&d(c.helper).css("opacity",b._opacity)}});d.ui.plugin.add("draggable",
"scroll",{start:function(){var a=d(this).data("draggable");a.scrollParent[0]!=document&&"HTML"!=a.scrollParent[0].tagName&&(a.overflowOffset=a.scrollParent.offset())},drag:function(a){var c=d(this).data("draggable"),b=c.options,f=!1;if(c.scrollParent[0]!=document&&"HTML"!=c.scrollParent[0].tagName){if(!b.axis||"x"!=b.axis)c.overflowOffset.top+c.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity?c.scrollParent[0].scrollTop=f=c.scrollParent[0].scrollTop+b.scrollSpeed:a.pageY-c.overflowOffset.top<
b.scrollSensitivity&&(c.scrollParent[0].scrollTop=f=c.scrollParent[0].scrollTop-b.scrollSpeed);if(!b.axis||"y"!=b.axis)c.overflowOffset.left+c.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity?c.scrollParent[0].scrollLeft=f=c.scrollParent[0].scrollLeft+b.scrollSpeed:a.pageX-c.overflowOffset.left<b.scrollSensitivity&&(c.scrollParent[0].scrollLeft=f=c.scrollParent[0].scrollLeft-b.scrollSpeed)}else{if(!b.axis||"x"!=b.axis)a.pageY-d(document).scrollTop()<b.scrollSensitivity?f=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed):d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity&&(f=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed));if(!b.axis||"y"!=b.axis)a.pageX-d(document).scrollLeft()<b.scrollSensitivity?f=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed):d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity&&(f=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed))}!1!==f&&(d.ui.ddmanager&&!b.dropBehaviour)&&d.ui.ddmanager.prepareOffsets(c,
a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),c=a.options;a.snapElements=[];d(c.snap.constructor!=String?c.snap.items||":data(draggable)":c.snap).each(function(){var b=d(this),c=b.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(a,c){for(var b=d(this).data("draggable"),f=b.options,e=f.snapTolerance,h=c.offset.left,g=h+b.helperProportions.width,n=c.offset.top,
o=n+b.helperProportions.height,i=b.snapElements.length-1;0<=i;i--){var j=b.snapElements[i].left,l=j+b.snapElements[i].width,k=b.snapElements[i].top,m=k+b.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&o<m+e){if("inner"!=f.snapMode){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;p&&(c.position.top=b._convertPositionTo("relative",{top:k-b.helperProportions.height,left:0}).top-b.margins.top);
q&&(c.position.top=b._convertPositionTo("relative",{top:m,left:0}).top-b.margins.top);r&&(c.position.left=b._convertPositionTo("relative",{top:0,left:j-b.helperProportions.width}).left-b.margins.left);s&&(c.position.left=b._convertPositionTo("relative",{top:0,left:l}).left-b.margins.left)}var t=p||q||r||s;if("outer"!=f.snapMode&&(p=Math.abs(k-n)<=e,q=Math.abs(m-o)<=e,r=Math.abs(j-h)<=e,s=Math.abs(l-g)<=e,p&&(c.position.top=b._convertPositionTo("relative",{top:k,left:0}).top-b.margins.top),q&&(c.position.top=
b._convertPositionTo("relative",{top:m-b.helperProportions.height,left:0}).top-b.margins.top),r&&(c.position.left=b._convertPositionTo("relative",{top:0,left:j}).left-b.margins.left),s))c.position.left=b._convertPositionTo("relative",{top:0,left:l-b.helperProportions.width}).left-b.margins.left;!b.snapElements[i].snapping&&(p||q||r||s||t)&&b.options.snap.snap&&b.options.snap.snap.call(b.element,a,d.extend(b._uiHash(),{snapItem:b.snapElements[i].item}));b.snapElements[i].snapping=p||q||r||s||t}else b.snapElements[i].snapping&&
b.options.snap.release&&b.options.snap.release.call(b.element,a,d.extend(b._uiHash(),{snapItem:b.snapElements[i].item})),b.snapElements[i].snapping=!1}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options,a=d.makeArray(d(a.stack)).sort(function(a,c){return(parseInt(d(a).css("zIndex"),10)||0)-(parseInt(d(c).css("zIndex"),10)||0)});if(a.length){var c=parseInt(a[0].style.zIndex)||0;d(a).each(function(a){this.style.zIndex=c+a});this[0].style.zIndex=c+a.length}}});
d.ui.plugin.add("draggable","zIndex",{start:function(a,c){var b=d(c.helper),f=d(this).data("draggable").options;b.css("zIndex")&&(f._zIndex=b.css("zIndex"));b.css("zIndex",f.zIndex)},stop:function(a,c){var b=d(this).data("draggable").options;b._zIndex&&d(c.helper).css("zIndex",b._zIndex)}})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-jquery-ui-partial', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery-ui/jquery.ui.sortable.js' */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var a=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?"x"===a.axis||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1;this.offset=this.element.offset();this._mouseInit();this.ready=!0},destroy:function(){d.Widget.prototype.destroy.call(this);this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var a=this.items.length-1;0<=a;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_setOption:function(a,
b){"disabled"===a?(this.options[a]=b,this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")):d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){var c=this;if(this.reverting||this.options.disabled||"static"==this.options.type)return!1;this._refreshItems(a);var e=null,f=this;d(a.target).parents().each(function(){if(d.data(this,c.widgetName+"-item")==f)return e=d(this),!1});d.data(a.target,c.widgetName+"-item")==f&&(e=d(a.target));if(!e)return!1;if(this.options.handle&&
!b){var g=!1;d(this.options.handle,e).find("*").andSelf().each(function(){this==a.target&&(g=!0)});if(!g)return!1}this.currentItem=e;this._removeCurrentsFromItems();return!0},_mouseStart:function(a,b,c){b=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-
this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();b.cursor&&(d("body").css("cursor")&&(this._storedCursor=d("body").css("cursor")),d("body").css("cursor",b.cursor));b.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",b.opacity));b.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",b.zIndex));this.scrollParent[0]!=
document&&"HTML"!=this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset());this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;0<=c;c--)this.containers[c]._trigger("activate",a,this._uiHash(this));d.ui.ddmanager&&(d.ui.ddmanager.current=this);d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=!0;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return!0},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var b=this.options,c=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity?this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed:a.pageY-this.overflowOffset.top<
b.scrollSensitivity&&(this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)?this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed:a.pageX-this.overflowOffset.left<b.scrollSensitivity&&(this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed):(a.pageY-d(document).scrollTop()<b.scrollSensitivity?c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed):d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity&&(c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed)),a.pageX-d(document).scrollLeft()<b.scrollSensitivity?c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed):d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity&&(c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)));!1!==c&&(d.ui.ddmanager&&!b.dropBehaviour)&&d.ui.ddmanager.prepareOffsets(this,a)}this.positionAbs=
this._convertPositionTo("absolute");if(!this.options.axis||"y"!=this.options.axis)this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||"x"!=this.options.axis)this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;0<=b;b--){var c=this.items[b],e=c.item[0],f=this._intersectsWithPointer(c);if(f&&c.instance===this.currentContainer&&e!=this.currentItem[0]&&this.placeholder[1==f?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&("semi-dynamic"==this.options.type?
!d.ui.contains(this.element[0],e):1)){this.direction=1==f?"down":"up";if("pointer"==this.options.tolerance||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return!1},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=
this,e=c.placeholder.offset();c.reverting=!0;d(this.helper).animate({left:e.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null});"original"==this.options.helper?
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var a=this.containers.length-1;0<=a;a--)this.containers[a]._trigger("deactivate",null,this._uiHash(this)),this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",null,this._uiHash(this)),this.containers[a].containerCache.over=0)}this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!=this.options.helper&&(this.helper&&
this.helper[0].parentNode)&&this.helper.remove(),d.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem));return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[],a=a||{};d(b).each(function(){var b=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);b&&c.push((a.key||b[1]+"[]")+"="+(a.key&&a.expression?
b[1]:b[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[],a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,f=d+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,j=i+a.height,k=this.offset.click.top,l=this.offset.click.left;return"pointer"==this.options.tolerance||
this.options.forcePointerForContainers||"pointer"!=this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?d+k>i&&d+k<j&&b+l>g&&b+l<h:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<d+this.helperProportions.height/2&&f-this.helperProportions.height/2<j},_intersectsWithPointer:function(a){var b="x"===this.options.axis||d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),a="y"===this.options.axis||
d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),b=b&&a,a=this._getDragVerticalDirection(),c=this._getDragHorizontalDirection();return!b?!1:this.floating?c&&"right"==c||"down"==a?2:1:a&&("down"==a?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();
return this.floating&&e?"right"==e&&a||"left"==e&&!a:c&&("down"==c&&b||"up"==c&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!=a&&(0<a?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!=a&&(0<a?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:
a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();if(e&&a)for(a=e.length-1;0<=a;a--)for(var f=d(e[a]),g=f.length-1;0<=g;g--){var h=d.data(f[g],this.widgetName);h&&(h!=this&&!h.options.disabled)&&c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):
d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(a=c.length-1;0<=a;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data("+this.widgetName+"-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?
this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),this]],e=this._connectWith();if(e&&this.ready)for(var f=e.length-1;0<=f;f--)for(var g=d(e[f]),h=g.length-1;0<=h;h--){var i=d.data(g[h],this.widgetName);i&&(i!=this&&!i.options.disabled)&&(c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]),this.containers.push(i))}for(f=c.length-1;0<=f;f--){a=c[f][1];e=c[f][0];h=0;for(g=
e.length;h<g;h++)i=d(e[h]),i.data(this.widgetName+"-item",a),b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}},refreshPositions:function(a){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var b=this.items.length-1;0<=b;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;a||(c.width=e.outerWidth(),c.height=
e.outerHeight());e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=this.containers.length-1;0<=b;b--)e=this.containers[b].element.offset(),this.containers[b].containerCache.left=e.left,this.containers[b].containerCache.top=e.top,this.containers[b].containerCache.width=this.containers[b].element.outerWidth(),this.containers[b].containerCache.height=this.containers[b].element.outerHeight();
return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var a=d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];e||(a.style.visibility="hidden");return a},update:function(a,d){if(!e||c.forcePlaceholderSize)d.height()||d.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||
0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),d.width()||d.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;0<=e;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!b||
!d.ui.contains(this.containers[e].element[0],b.element[0]))b=this.containers[e],c=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",a,this._uiHash(this)),this.containers[e].containerCache.over=0);if(b)if(1===this.containers.length)this.containers[c]._trigger("over",a,this._uiHash(this)),this.containers[c].containerCache.over=1;else if(this.currentContainer!=this.containers[c]){for(var b=1E4,e=null,f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-
1;0<=g;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.containers[c].floating?this.items[g].item.offset().left:this.items[g].item.offset().top;Math.abs(h-f)<b&&(b=Math.abs(h-f),e=this.items[g],this.direction=0<h-f?"down":"up")}if(e||this.options.dropOnEmpty)this.currentContainer=this.containers[c],e?this._rearrange(a,e,null,!0):this._rearrange(a,null,this.containers[c].element,!0),this._trigger("change",a,this._uiHash()),this.containers[c]._trigger("change",a,
this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[c]._trigger("over",a,this._uiHash(this)),this.containers[c].containerCache.over=1}},_createHelper:function(a){var b=this.options,a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):"clone"==b.helper?this.currentItem.clone():this.currentItem;a.parents("body").length||d("parent"!=b.appendTo?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);a[0]==this.currentItem[0]&&
(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")});(""==a[0].style.width||b.forceHelperSize)&&a.width(this.currentItem.width());(""==a[0].style.height||b.forceHelperSize)&&a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" "));d.isArray(a)&&(a={left:+a[0],top:+a[1]||0});"left"in a&&
(this.offset.click.left=a.left+this.margins.left);"right"in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left);"top"in a&&(this.offset.click.top=a.top+this.margins.top);"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();"absolute"==this.cssPosition&&(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))&&
(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),
10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;"parent"==a.containment&&(a.containment=
this.helper[0].parentNode);if("document"==a.containment||"window"==a.containment)this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d("document"==a.containment?document:window).width()-this.helperProportions.width-this.margins.left,(d("document"==a.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=
d(a.containment)[0],a=d(a.containment).offset(),c="hidden"!=d(b).css("overflow");this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-
this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"==a?1:-1,e="absolute"==this.cssPosition&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(e[0].tagName);return{top:b.top+
this.offset.relative.top*c+this.offset.parent.top*c-(d.browser.safari&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*c),left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-(d.browser.safari&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*c)}},_generatePosition:function(a){var b=this.options,c="absolute"==this.cssPosition&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);"relative"==this.cssPosition&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=a.pageX,g=a.pageY;if(this.originalPosition&&(this.containment&&(a.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),a.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),
a.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),a.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),b.grid))g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1],g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g,f=this.originalPageX+Math.round((f-
this.originalPageX)/b.grid[0])*b.grid[0],f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f;return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+
(d.browser.safari&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"==this.direction?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!d)},0)},_clear:function(a,b){this.reverting=!1;var c=[];!this._noFinalSort&&
this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if("auto"==this._storedCSS[e]||"static"==this._storedCSS[e])this._storedCSS[e]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))});(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||
this.domPosition.parent!=this.currentItem.parent()[0])&&!b&&c.push(function(a){this._trigger("update",a,this._uiHash())});this!==this.currentContainer&&!b&&(c.push(function(a){this._trigger("remove",a,this._uiHash())}),c.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),c.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)));for(e=this.containers.length-1;0<=e;e--)b||c.push(function(a){return function(b){a._trigger("deactivate",
b,this._uiHash(this))}}.call(this,this.containers[e])),this.containers[e].containerCache.over&&(c.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[e])),this.containers[e].containerCache.over=0);this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);this._storedZIndex&&this.helper.css("zIndex","auto"==this._storedZIndex?"":this._storedZIndex);this.dragging=!1;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=!1;return!0},_trigger:function(){!1===d.Widget.prototype._trigger.apply(this,arguments)&&
this.cancel()},_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.24"})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-jquery-jquery-hotkeys', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.hotkeys.js' */
("undefined"===typeof window?global:window).__74696de6601b4e489802e1f686e0cc7e=function(){var a=jQuery,c=function(a){this.num=0;this.timer=0<a?a:!1},k=function(h){if(a.isPlainObject(h.data)||a.isArray(h.data)||"string"===typeof h.data){var i=h.handler,g={timer:700,combo:[]},b=h.data;"string"===typeof b?g.combo=[b]:a.isArray(b)?g.combo=b:a.extend(g,b);g.combo=a.map(g.combo,function(a){return a.toLowerCase()});h.index=new c(g.timer);h.handler=function(d){if(!(this!==d.target&&(/textarea|select|input/i.test(d.target.nodeName)||
"true"===a(d.target).prop("contenteditable")))){var e="keypress"!==d.type?a.hotkeys.specialKeys[d.which]:null,b=String.fromCharCode(d.which).toLowerCase(),f="",c={};d.altKey&&"alt"!==e&&(f+="alt+");d.ctrlKey&&"ctrl"!==e&&(f+="ctrl+");d.metaKey&&(!d.ctrlKey&&"meta"!==e)&&(f+="meta+");d.shiftKey&&"shift"!==e&&(f+="shift+");d.metaKey&&"["===b&&(b=null);e&&(c[f+e]=!0);b&&(c[f+b]=!0);/shift+/.test(f)&&(c[f.replace("shift+","")+a.hotkeys.shiftNums[e||b]]=!0);e=h.index;b=g.combo;if(j(b[e.val()],c)){if(e.val()===
b.length-1)return e.reset(),i.apply(this,arguments);e.inc()}else e.reset(),j(b[0],c)&&e.inc()}}}},j=function(a,c){for(var g=a.split(" "),b=0,d=g.length;b<d;b++)if(c[g[b]])return!0;return!1};a.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",91:"meta",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",
103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta",219:"[",221:"]"},keypressKeys:["<",">","?"],shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"}};a.each(a.hotkeys.keypressKeys,function(c,i){a.hotkeys.shiftNums[i]=i});c.prototype.val=
function(){return this.num};c.prototype.inc=function(){this.timer&&(clearTimeout(this.timeout),this.timeout=setTimeout(a.proxy(c.prototype.reset,this),this.timer));this.num++};c.prototype.reset=function(){this.timer&&clearTimeout(this.timeout);this.num=0};a.each(["keydown","keyup","keypress"],function(){a.event.special[this]={add:k}});return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-jquery-jquery-moveto', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.moveto.js' */
("undefined"===typeof window?global:window).__ec2c1b5c3fe34a0658d03ce3068353dd=function(){jQuery.fn.moveTo=function(a){var a=jQuery.extend({transition:!1,scrollOffset:35},a),c=this,b=c.offset().top;if((jQuery(window).scrollTop()+jQuery(window).height()-this.outerHeight()<b||jQuery(window).scrollTop()+a.scrollOffset>b)&&jQuery(window).height()>a.scrollOffset){b=jQuery(window).scrollTop()+a.scrollOffset>b?b-(jQuery(window).height()-this.outerHeight())+a.scrollOffset:b-a.scrollOffset;if(!jQuery.fn.moveTo.animating&&
a.transition)return jQuery(document).trigger("moveToStarted",this),jQuery.fn.moveTo.animating=!0,jQuery("html,body").animate({scrollTop:b},1E3,function(){jQuery(document).trigger("moveToFinished",c);delete jQuery.fn.moveTo.animating}),this;a=jQuery("html, body");a.is(":animated")&&(a.stop(),delete jQuery.fn.moveTo.animating);jQuery(document).trigger("moveToStarted");jQuery(window).scrollTop(b);setTimeout(function(){jQuery(document).trigger("moveToFinished",c)},100);return this}jQuery(document).trigger("moveToFinished",
this);return this};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-underscorejs-underscore', location = 'node_modules/@atlassian/aui/src/js-vendor/underscorejs/underscore.js' */
("undefined"===typeof window?global:window).__309cc7b5b5b5e38c9aaa43f19c161b66=function(){var p={exports:{}},r=p.exports,x={module:p,exports:r},s;s=function(n,q,m){var k=("undefined"===typeof window?global:window).define,l,o,m=[m,q,n].filter(function(i){return"function"===typeof i})[0],q=[q,n,[]].filter(Array.isArray)[0];l=m.apply(null,q.map(function(i){return x[i]}));o=typeof l;"function"===typeof k&&k("string"===typeof n?n:"__309cc7b5b5b5e38c9aaa43f19c161b66",q,m);"string"===o?l=String(l):"number"===
o?l=Number(l):"boolean"===o&&(l=Boolean(l));void 0!==l&&(r=p.exports=l)};s.amd=!0;(function(){var n=this,q=n._,m={},k=Array.prototype,l=Object.prototype,o=k.push,i=k.slice,v=k.concat,t=l.toString,s=l.hasOwnProperty,E=k.forEach,F=k.map,G=k.reduce,H=k.reduceRight,I=k.filter,J=k.every,K=k.some,w=k.indexOf,L=k.lastIndexOf,l=Array.isArray,x=Object.keys,y=Function.prototype.bind,b=function(a){if(a instanceof b)return a;if(!(this instanceof b))return new b(a);this._wrapped=a};"undefined"!==typeof r?("undefined"!==
typeof p&&p.exports&&(r=p.exports=b),r._=b):n._=b;b.VERSION="1.5.2";var j=b.each=b.forEach=function(a,c,d){if(a!=null)if(E&&a.forEach===E)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(c.call(d,a[e],e,a)===m)break}else for(var g=b.keys(a),e=0,f=g.length;e<f;e++)if(c.call(d,a[g[e]],g[e],a)===m)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(F&&a.map===F)return a.map(c,b);j(a,function(a,g,h){e.push(c.call(b,a,g,h))});return e};b.reduce=b.foldl=
b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(G&&a.reduce===G){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,O){if(f)d=c.call(e,d,a,b,O);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(H&&a.reduceRight===H){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=a.length;if(g!==+g)var h=b.keys(a),g=
h.length;j(a,function(b,i,k){i=h?h[--g]:--g;if(f)d=c.call(e,d,a[i],i,k);else{d=a[i];f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.find=b.detect=function(a,c,b){var e;M(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(I&&a.filter===I)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&e.push(a)});return e};b.reject=function(a,c,d){return b.filter(a,function(a,b,
g){return!c.call(d,a,b,g)},d)};b.every=b.all=function(a,c,d){c||(c=b.identity);var e=true;if(a==null)return e;if(J&&a.every===J)return a.every(c,d);j(a,function(a,b,h){if(!(e=e&&c.call(d,a,b,h)))return m});return!!e};var M=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(K&&a.some===K)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return m});return!!e};b.contains=b.include=function(a,c){return a==null?false:w&&a.indexOf===w?a.indexOf(c)!=-1:M(a,function(a){return a===
c})};b.invoke=function(a,c){var d=i.call(arguments,2),e=b.isFunction(c);return b.map(a,function(a){return(e?c:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.where=function(a,c,d){return b.isEmpty(c)?d?void 0:[]:b[d?"find":"filter"](a,function(a){for(var b in c)if(c[b]!==a[b])return false;return true})};b.findWhere=function(a,c){return b.where(a,c,true)};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!c&&
b.isEmpty(a))return-Infinity;var e={computed:-Infinity,value:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity,value:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var c,d=0,e=[];j(a,function(a){c=
b.random(d++);e[d-1]=e[c];e[c]=a});return e};b.sample=function(a,c,d){return arguments.length<2||d?a[b.random(a.length-1)]:b.shuffle(a).slice(0,Math.max(0,c))};var z=function(a){return b.isFunction(a)?a:function(c){return c[a]}};b.sortBy=function(a,c,d){var e=z(c);return b.pluck(b.map(a,function(a,c,b){return{value:a,index:c,criteria:e.call(d,a,c,b)}}).sort(function(a,c){var b=a.criteria,d=c.criteria;if(b!==d){if(b>d||b===void 0)return 1;if(b<d||d===void 0)return-1}return a.index-c.index}),"value")};
var A=function(a){return function(c,d,e){var f={},g=d==null?b.identity:z(d);j(c,function(b,d){var i=g.call(e,b,d,c);a(f,i,b)});return f}};b.groupBy=A(function(a,c,d){(b.has(a,c)?a[c]:a[c]=[]).push(d)});b.indexBy=A(function(a,c,b){a[c]=b});b.countBy=A(function(a,c){b.has(a,c)?a[c]++:a[c]=1});b.sortedIndex=function(a,c,d,e){for(var d=d==null?b.identity:z(d),c=d.call(e,c),f=0,g=a.length;f<g;){var h=f+g>>>1;d.call(e,a[h])<c?f=h+1:g=h}return f};b.toArray=function(a){return!a?[]:b.isArray(a)?i.call(a):
a.length===+a.length?b.map(a,b.identity):b.values(a)};b.size=function(a){return a==null?0:a.length===+a.length?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,c,b){return a==null?void 0:c==null||b?a[0]:i.call(a,0,c)};b.initial=function(a,c,b){return i.call(a,0,a.length-(c==null||b?1:c))};b.last=function(a,c,b){return a==null?void 0:c==null||b?a[a.length-1]:i.call(a,Math.max(a.length-c,0))};b.rest=b.tail=b.drop=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,
b.identity)};var N=function(a,c,d){if(c&&b.every(a,b.isArray))return v.apply(d,a);j(a,function(a){b.isArray(a)||b.isArguments(a)?c?o.apply(d,a):N(a,c,d):d.push(a)});return d};b.flatten=function(a,b){return N(a,b,[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d,e){if(b.isFunction(c)){e=d;d=c;c=false}var d=d?b.map(a,d,e):a,f=[],g=[];j(d,function(d,e){if(c?!e||g[g.length-1]!==d:!b.contains(g,d)){g.push(d);f.push(a[e])}});return f};b.union=function(){return b.uniq(b.flatten(arguments,
true))};b.intersection=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=v.apply(k,i.call(arguments,1));return b.filter(a,function(a){return!b.contains(c,a)})};b.zip=function(){for(var a=b.max(b.pluck(arguments,"length").concat(0)),c=Array(a),d=0;d<a;d++)c[d]=b.pluck(arguments,""+d);return c};b.object=function(a,b){if(a==null)return{};for(var d={},e=0,f=a.length;e<f;e++)b?d[a[e]]=b[e]:
d[a[e][0]]=a[e][1];return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e=0,f=a.length;if(d)if(typeof d=="number")e=d<0?Math.max(0,f+d):d;else{e=b.sortedIndex(a,c);return a[e]===c?e:-1}if(w&&a.indexOf===w)return a.indexOf(c,d);for(;e<f;e++)if(a[e]===c)return e;return-1};b.lastIndexOf=function(a,b,d){if(a==null)return-1;var e=d!=null;if(L&&a.lastIndexOf===L)return e?a.lastIndexOf(b,d):a.lastIndexOf(b);for(d=e?d:a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var B=function(){};b.bind=function(a,c){var d,e;if(y&&a.bind===y)return y.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;d=i.call(arguments,2);return e=function(){if(!(this instanceof e))return a.apply(c,d.concat(i.call(arguments)));B.prototype=a.prototype;var b=new B;B.prototype=null;var g=a.apply(b,d.concat(i.call(arguments)));return Object(g)===g?g:b}};b.partial=
function(a){var b=i.call(arguments,1);return function(){return a.apply(this,b.concat(i.call(arguments)))}};b.bindAll=function(a){var c=i.call(arguments,1);if(c.length===0)throw Error("bindAll must be passed function names");j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,
d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,b,d){var e,f,g,h=null,i=0;d||(d={});var k=function(){i=d.leading===false?0:new Date;h=null;g=a.apply(e,f)};return function(){var j=new Date;!i&&d.leading===false&&(i=j);var l=b-(j-i);e=this;f=arguments;if(l<=0){clearTimeout(h);h=null;i=j;g=a.apply(e,f)}else!h&&d.trailing!==false&&(h=setTimeout(k,l));return g}};b.debounce=function(a,b,d){var e,f,g,h,i;return function(){g=this;f=arguments;h=
new Date;var k=function(){var j=new Date-h;if(j<b)e=setTimeout(k,b-j);else{e=null;d||(i=a.apply(g,f))}},j=d&&!e;e||(e=setTimeout(k,b));j&&(i=a.apply(g,f));return i}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;d=a.apply(this,arguments);a=null;return d}};b.wrap=function(a,b){return function(){var d=[a];o.apply(d,arguments);return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};
b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=x||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&c.push(d);return c};b.values=function(a){for(var c=b.keys(a),d=c.length,e=Array(d),f=0;f<d;f++)e[f]=a[c[f]];return e};b.pairs=function(a){for(var c=b.keys(a),d=c.length,e=Array(d),f=0;f<d;f++)e[f]=[c[f],a[c[f]]];return e};b.invert=function(a){for(var c={},d=b.keys(a),e=0,f=d.length;e<f;e++)c[a[d[e]]]=d[e];return c};
b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){if(b)for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var b={},d=v.apply(k,i.call(arguments,1));j(d,function(d){d in a&&(b[d]=a[d])});return b};b.omit=function(a){var c={},d=v.apply(k,i.call(arguments,1)),e;for(e in a)b.contains(d,e)||(c[e]=a[e]);return c};b.defaults=function(a){j(i.call(arguments,1),function(b){if(b)for(var d in b)a[d]===
void 0&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};var C=function(a,c,d,e){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a instanceof b)a=a._wrapped;if(c instanceof b)c=c._wrapped;var f=t.call(a);if(f!=t.call(c))return false;switch(f){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==
+c;case "[object RegExp]":return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var g=d.length;g--;)if(d[g]==a)return e[g]==c;var g=a.constructor,h=c.constructor;if(g!==h&&(!b.isFunction(g)||!(g instanceof g&&b.isFunction(h)&&h instanceof h)))return false;d.push(a);e.push(c);g=0;h=true;if(f=="[object Array]"){g=a.length;if(h=g==c.length)for(;g--;)if(!(h=C(a[g],c[g],d,e)))break}else{for(var i in a)if(b.has(a,
i)){g++;if(!(h=b.has(c,i)&&C(a[i],c[i],d,e)))break}if(h){for(i in c)if(b.has(c,i)&&!g--)break;h=!g}}d.pop();e.pop();return h};b.isEqual=function(a,b){return C(a,b,[],[])};b.isEmpty=function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType===1)};b.isArray=l||function(a){return t.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};j("Arguments Function String Number Date RegExp".split(" "),
function(a){b["is"+a]=function(b){return t.call(b)=="[object "+a+"]"}});b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});"function"!==typeof/./&&(b.isFunction=function(a){return typeof a==="function"});b.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};b.isNaN=function(a){return b.isNumber(a)&&a!=+a};b.isBoolean=function(a){return a===true||a===false||t.call(a)=="[object Boolean]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===
void 0};b.has=function(a,b){return s.call(a,b)};b.noConflict=function(){n._=q;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=Array(Math.max(0,a)),f=0;f<a;f++)e[f]=b.call(d,f);return e};b.random=function(a,b){if(b==null){b=a;a=0}return a+Math.floor(Math.random()*(b-a+1))};var u={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};u.unescape=b.invert(u.escape);var P={escape:RegExp("["+b.keys(u.escape).join("")+"]","g"),unescape:RegExp("("+b.keys(u.unescape).join("|")+
")","g")};b.each(["escape","unescape"],function(a){b[a]=function(b){return b==null?"":(""+b).replace(P[a],function(b){return u[a][b]})}});b.result=function(a,c){if(a!=null){var d=a[c];return b.isFunction(d)?d.call(a):d}};b.mixin=function(a){j(b.functions(a),function(c){var d=b[c]=a[c];b.prototype[c]=function(){var a=[this._wrapped];o.apply(a,arguments);a=d.apply(b,a);return this._chain?b(a).chain():a}})};var Q=0;b.uniqueId=function(a){var b=++Q+"";return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},S=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(a,c,d){var e,d=b.defaults({},d,b.templateSettings),f=RegExp([(d.escape||D).source,(d.interpolate||D).source,(d.evaluate||D).source].join("|")+"|$","g"),g=0,h="__p+='";a.replace(f,function(b,c,d,e,f){h=h+a.slice(g,f).replace(S,function(a){return"\\"+R[a]});c&&(h=h+("'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"));
d&&(h=h+("'+\n((__t=("+d+"))==null?'':__t)+\n'"));e&&(h=h+("';\n"+e+"\n__p+='"));g=f+b.length;return b});h=h+"';\n";d.variable||(h="with(obj||{}){\n"+h+"}\n");h="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+h+"return __p;\n";try{e=new Function(d.variable||"obj","_",h)}catch(i){i.source=h;throw i;}if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+h+"}";return c};b.chain=function(a){return b(a).chain()};
b.mixin(b);j("pop push reverse shift sort splice unshift".split(" "),function(a){var c=k[a];b.prototype[a]=function(){var d=this._wrapped;c.apply(d,arguments);(a=="shift"||a=="splice")&&d.length===0&&delete d[0];return this._chain?b(d).chain():d}});j(["concat","join","slice"],function(a){var c=k[a];b.prototype[a]=function(){var a=c.apply(this._wrapped,arguments);return this._chain?b(a).chain():a}});b.extend(b.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this);
"function"===typeof window.define&&s("underscore",[],function(){return window._});return p.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-underscore', location = 'node_modules/@atlassian/aui/src/js/aui/underscore.js' */
("undefined"===typeof window?global:window).__17253d01a5dbb7811399698870024390=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__309cc7b5b5b5e38c9aaa43f19c161b66,a=a&&a.__esModule?a:{"default":a};window._||(window._=a.default);b.default=window._;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-when-i-type', location = 'node_modules/@atlassian/aui/src/js/aui/when-i-type.js' */
("undefined"===typeof window?global:window).__cc949f41b05459e9c30805ac27130d85=function(){function o(c){return c&&c.__esModule?c:{"default":c}}function m(c){function i(a){!u.popup.current&&h&&h.fire(a)}function e(a){a.preventDefault()}function g(a){(a&&a.split?f.default.trim(a).split(" "):[a]).forEach(function(d){if(!(d instanceof Array)){for(var d=d.toString(),b=[],l="";d.length;){var a=d.match(/^(ctrl|meta|shift|alt)\+/i),c=d.match(v);a?(l+=a[0],d=d.substring(a[0].length)):(c?(b.push(l+c[0]),d=
d.substring(c[0].length)):(b.push(l+d[0]),d=d.substring(1)),l="")}d=b}a:{for(b=d.length;b--;)if(1<d[b].length&&"space"!==d[b]){b=!0;break a}b=!1}b=b?"keydown":"keypress";k.push(d);(0,f.default)(document).bind(b,d,i);(0,f.default)(document).bind(b+" keyup",d,e)})}function j(a,d,b){b?d+=" ("+AJS.format("Type \'\'{0}\'\'",a.shift()):(d=d.replace(/\)$/,""),d+=AJS.format("OR \'\'{0}\'\'",a.shift()));a.forEach(function(b){d=d+(" "+AJS.format("then \'\'{0}\'\'",
b))});return d+=")"}var k=[],h=f.default.Callbacks();g(c);return m.makeShortcut({executor:h,bindKeys:g,addShortcutsToTitle:function(a){for(var a=(0,f.default)(a),d=a.attr("title")||"",b=k.slice(),l=a.data("boundKeyCombos")||[],c=a.data("kbShortcutAppended")||"",e=!c,d=e?d:d.substring(0,d.length-c.length);b.length;){var i=b.shift();l.some(function(b){return w.default.isEqual(i,b)})||(c=j(i.slice(),c,e),e=!1)}s&&(c=c.replace(/Meta/ig,"\u2318").replace(/Shift/ig,"\u21e7"));a.attr("title",d+c);a.data("kbShortcutAppended",
c);a.data("boundKeyCombos",l.concat(k))},removeShortcutsFromTitle:function(a){var a=(0,f.default)(a),d=a.data("kbShortcutAppended");if(d){var b=a.attr("title");a.attr("title",b.replace(d,""));a.removeData("kbShortcutAppended");a.removeData("boundKeyCombos")}},keypressHandler:i,defaultPreventionHandler:e})}var p={};"use strict";Object.defineProperty(p,"__esModule",{value:!0});var f=o(__02fa0d2334b5d2f9701871403ba9d89a);__74696de6601b4e489802e1f686e0cc7e;__ec2c1b5c3fe34a0658d03ce3068353dd;var q;var g=
__8139e9a1368a0224fc430963d21930c8;if(g&&g.__esModule)q=g;else{var r={};if(null!=g)for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(r[n]=g[n]);r.default=g;q=r}var u=__8c25237a63a4b0e116ea899da18a16d3;n=o(__fb27ffae84b96c14bf339e62cefcf116);var x=__5e83f2691a9745a1c96cce360720d675,y=o(__d92d89c196b4703777e79d25a9f94b7f),w=o(__17253d01a5dbb7811399698870024390),s=-1!==navigator.platform.indexOf("Mac"),z=-1!==navigator.userAgent.indexOf("Safari"),v=/^(backspace|tab|r(ight|eturn)|s(hift|pace|croll)|c(trl|apslock)|alt|pa(use|ge(up|down))|e(sc|nd)|home|left|up|d(el|own)|insert|f\d\d?|numlock|meta)/i,
t=function(c){var f=c[0];f&&"MouseEvent"in window?(c=void 0,(0,x.supportsNewMouseEvent)()?c=new MouseEvent("click",{bubbles:!0,cancelable:!0}):(c=document.createEvent("MouseEvent"),c.initEvent("click",!0,!0)),f.dispatchEvent(c)):c.trigger("click")};m.makeShortcut=function(c){function i(b){return function(d,a){var a=a||{},c=a.focusedClass||"focused",i=a.hasOwnProperty("wrapAround")?a.wrapAround:!0,g=a.hasOwnProperty("escToCancel")?a.escToCancel:!0;e.add(function(){var a=(0,f.default)(d),e=a.filter("."+
c),h=0===e.length?void 0:{transition:!0};if(g)(0,f.default)(document).one("keydown",function(b){b.keyCode===y.default.ESCAPE&&e&&e.removeClass(c)});e.length&&e.removeClass(c);if((e=b(e,a,i))&&0<e.length)e.addClass(c),e.moveTo(h),e.is("a")?e.focus():e.find("a:first").focus()});return this}}var e=c.executor,g=c.bindKeys,j=c.addShortcutsToTitle,k=c.removeShortcutsFromTitle,h=c.keypressHandler,a=c.defaultPreventionHandler,d=[];return{moveToNextItem:i(function(b,a,d){var c;if(d&&0===b.length)return a.eq(0);
c=f.default.inArray(b.get(0),a);return c<a.length-1?a.eq(c+1):d?a.eq(0):b}),moveToPrevItem:i(function(b,a,d){var c;if(d&&0===b.length)return a.filter(":last");c=f.default.inArray(b.get(0),a);return 0<c?a.eq(c-1):d?a.filter(":last"):b}),click:function(b){d.push(b);j(b);e.add(function(){var a=(0,f.default)(b);t(a)});return this},goTo:function(b){e.add(function(){window.location.href=b});return this},followLink:function(b){d.push(b);j(b);e.add(function(){var a=(0,f.default)(b)[0];a&&{a:!0,link:!0}[a.nodeName.toLowerCase()]&&
(window.location.href=a.href)});return this},execute:function(b){var a=this;e.add(function(){b.apply(a,arguments)});return this},evaluate:function(b){b.call(this)},moveToAndClick:function(b){d.push(b);j(b);e.add(function(){var a=(0,f.default)(b);0<a.length&&(t(a),a.moveTo())});return this},moveToAndFocus:function(a){d.push(a);j(a);e.add(function(d){var c=(0,f.default)(a);0<c.length&&(c.focus(),c.moveTo&&c.moveTo(),c.is(":input")&&d.preventDefault())});return this},or:function(a){g(a);return this},
unbind:function(){(0,f.default)(document).unbind("keydown keypress",h).unbind("keydown keypress keyup",a);for(var b=0,c=d.length;b<c;b++)k(d[b]);d=[]}}};m.fromJSON=function(c,g){var e=[];c&&f.default.each(c,function(c,j){var k=j.op,h=j.param,a=void 0;if("execute"===k||"evaluate"===k)a=[new Function(h)];else if(/^\[[^\]\[]*,[^\]\[]*\]$/.test(h)){try{a=JSON.parse(h)}catch(d){q.error("When using a parameter array, array must be in strict JSON format: "+h)}f.default.isArray(a)||q.error("Badly formatted shortcut parameter. String or JSON Array of parameters required: "+
h)}else a=[h];f.default.each(j.keys,function(){var b=this;g&&s&&(b=f.default.map(b,function(a){return a.replace(/ctrl/i,"meta")}));b=m(b);b[k].apply(b,a);e.push(b)})});return e};(0,f.default)(document).bind("iframeAppended",function(c,g){(0,f.default)(g).load(function(){(0,f.default)(g).contents().bind("keyup keydown keypress",function(c){z&&"keypress"===c.type||(0,f.default)(c.target).is(":input")||f.default.event.trigger(c,arguments,document,!0)})})});(0,n.default)("whenIType",m);p.default=m;return p=
p["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-cookie', location = 'node_modules/@atlassian/aui/src/js/aui/cookie.js' */
("undefined"===typeof window?global:window).__df04a1d1665a28f19c7f99f04aae4528=function(){function l(a){a=RegExp("\\b"+a.replace(i,"\\$&")+"=((?:[^\\\\;]+|\\\\.)*)(?:;|$)");return(a=document.cookie.match(a))&&a[1].replace(o,"")}function j(a,f,c){var d=l(k),b=RegExp("(\\s|\\|)*\\b"+a.replace(i,"\\$&")+"=[^|]*[|]*"),d=(d||"").replace(b,"|");""!==f&&(a=a+"="+f,4020>d.length+a.length&&(d+="|"+a));d=d.replace(p,"|");a=k;c=c||365;f="";d='"'+d.replace(q,'\\"')+'"';c&&(f=new Date,f.setTime(+f+864E5*c),f=
"; expires="+f.toGMTString());document.cookie=a+"="+d+f+";path=/"}function m(a,b){var c;c=(c=l(k))||"";var d=RegExp(a.replace(i,"\\$&")+"=([^|]+)");c=(c=c.match(d))&&c[1];return null!=c?c:b}function n(a){j(a,"")}var g={};"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.save=g.read=g.erase=void 0;var b;b=__9ea35e3451360b72ebe8cb8006239936;if(!b||!b.__esModule){var e={};if(null!=b)for(var h in b)Object.prototype.hasOwnProperty.call(b,h)&&(e[h]=b[h]);e.default=b;b=e}var e=(e=__fb27ffae84b96c14bf339e62cefcf116)&&
e.__esModule?e:{"default":e},k="AJS.conglomerate.cookie",o=/(\\|^"|"$)/g,p=/\|\|+/g,q=/"/g,i=/[.*+?|^$()[\]{\\]/g;h={erase:n,read:m,save:j};(0,e.default)("cookie",h);(0,e.default)("Cookie",h);b.prop(AJS,"Cookie",{alternativeName:"cookie",sinceVersion:"5.8.0"});g.erase=n;g.read=m;g.save=j;return g}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.os.js' */
("undefined"===typeof window?global:window).__db0816b9bc36dd8265a87a08f7c538c6=function(){jQuery.os={};var a=navigator.platform.toLowerCase();jQuery.os.windows=-1!=a.indexOf("win");jQuery.os.mac=-1!=a.indexOf("mac");jQuery.os.linux=-1!=a.indexOf("linux");return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/plugins/jquery.form.js' */
(function(b){function m(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function f(){function d(){var a=j.attr("target"),k=j.attr("action");c.setAttribute("target",f);"POST"!=c.getAttribute("method")&&c.setAttribute("method","POST");c.getAttribute("action")!=e.url&&c.setAttribute("action",e.url);e.skipEncodingOverride||
j.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&setTimeout(function(){s=!0;g()},e.timeout);var l=[];try{if(e.extraData)for(var m in e.extraData)l.push(b('<input type="hidden" name="'+m+'" value="'+e.extraData[m]+'" />').appendTo(c)[0]);i.appendTo("body");h.attachEvent?h.attachEvent("onload",g):h.addEventListener("load",g,!1);c.submit()}finally{c.setAttribute("action",k),a?c.setAttribute("target",a):j.removeAttr("target"),b(l).remove()}}function g(){if(!k.aborted){var a=
h.contentWindow?h.contentWindow.document:h.contentDocument?h.contentDocument:h.document;if(a&&a.location.href!=e.iframeSrc){h.detachEvent?h.detachEvent("onload",g):h.removeEventListener("load",g,!1);var d=!0;try{if(s)throw"timeout";var c="xml"==e.dataType||a.XMLDocument||b.isXMLDoc(a);m("isXml="+c);if(!c&&(window.opera&&(null==a.body||""==a.body.innerHTML))&&--w){m("requeing onLoad callback, DOM not available");setTimeout(g,250);return}k.responseText=a.body?a.body.innerHTML:a.documentElement?a.documentElement.innerHTML:
null;k.responseXML=a.XMLDocument?a.XMLDocument:a;k.getResponseHeader=function(a){return{"content-type":e.dataType}[a]};var f=/(json|script)/.test(e.dataType);if(f||e.textarea){var j=a.getElementsByTagName("textarea")[0];if(j)k.responseText=j.value;else if(f){var o=a.getElementsByTagName("pre")[0],q=a.getElementsByTagName("body")[0];o?k.responseText=o.textContent:q&&(k.responseText=q.innerHTML)}}else"xml"==e.dataType&&(!k.responseXML&&null!=k.responseText)&&(k.responseXML=x(k.responseText));var a=
k,p=e.dataType,c=e,t=a.getResponseHeader("content-type")||"",u="xml"===p||!p&&0<=t.indexOf("xml"),n=u?a.responseXML:a.responseText;u&&"parsererror"===n.documentElement.nodeName&&b.error&&b.error("parsererror");c&&c.dataFilter&&(n=c.dataFilter(n,p));"string"===typeof n&&("json"===p||!p&&0<=t.indexOf("json")?n=y(n):("script"===p||!p&&0<=t.indexOf("javascript"))&&b.globalEval(n));v=n}catch(r){m("error caught:",r),d=!1,k.error=r,e.error&&e.error.call(e.context,k,"error",r),l&&b.event.trigger("ajaxError",
[k,e,r])}k.aborted&&(m("upload aborted"),d=!1);d&&(e.success&&e.success.call(e.context,v,"success",k),l&&b.event.trigger("ajaxSuccess",[k,e]));l&&b.event.trigger("ajaxComplete",[k,e]);l&&!--b.active&&b.event.trigger("ajaxStop");e.complete&&e.complete.call(e.context,k,d?"success":"error");setTimeout(function(){i.removeData("form-plugin-onload");i.remove();k.responseXML=null},100)}}}var c=j[0];if(b(":input[name=submit],:input[id=submit]",c).length)alert('Error: Form elements must not have name or id of "submit".');
else{var e=b.extend(!0,{},b.ajaxSettings,a);e.context=e.context||e;var f="jqFormIO"+(new Date).getTime(),i=b('<iframe id="'+f+'" name="'+f+'" src="'+e.iframeSrc+'" />'),h=i[0];i.css({position:"absolute",top:"-1000px",left:"-1000px"});var k={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){m("aborting upload...");this.aborted=1;i.attr("src",e.iframeSrc);k.error="aborted";
e.error&&e.error.call(e.context,k,"error","aborted");l&&b.event.trigger("ajaxError",[k,e,"aborted"]);e.complete&&e.complete.call(e.context,k,"error")}},l=e.global;l&&!b.active++&&b.event.trigger("ajaxStart");l&&b.event.trigger("ajaxSend",[k,e]);if(e.beforeSend&&!1===e.beforeSend.call(e.context,k,e))e.global&&b.active--;else if(!k.aborted){var s=0,o=c.clk;if(o){var q=o.name;q&&!o.disabled&&(e.extraData=e.extraData||{},e.extraData[q]=o.value,"image"==o.type&&(e.extraData[q+".x"]=c.clk_x,e.extraData[q+
".y"]=c.clk_y))}e.forceSync?d():setTimeout(d,10);var v,w=50,x=b.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},y=b.parseJSON||function(a){return window.eval("("+a+")")}}}}if(!this.length)return m("ajaxSubmit: skipping submit process - no element selected"),this;"function"==typeof a&&(a={success:a});var c=
this.attr("action");(c="string"===typeof c?b.trim(c):"")&&(c=(c.match(/^([^#]+)/)||[])[1]);c=c||window.location.href||"";a=b.extend(!0,{url:c,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);c={};this.trigger("form-pre-serialize",[this,a,c]);if(c.veto)return m("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return m("ajaxSubmit: submit aborted via beforeSerialize callback"),
this;var d,g,i=this.formToArray(a.semantic);if(a.data)for(d in a.extraData=a.data,a.data)if(a.data[d]instanceof Array)for(var h in a.data[d])i.push({name:d,value:a.data[d][h]});else g=a.data[d],g=b.isFunction(g)?g():g,i.push({name:d,value:g});if(a.beforeSubmit&&!1===a.beforeSubmit(i,this,a))return m("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[i,this,a,c]);if(c.veto)return m("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;d=b.param(i);
"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+d,a.data=null):a.data=d;var j=this,l=[];a.resetForm&&l.push(function(){j.resetForm()});a.clearForm&&l.push(function(){j.clearForm()});if(!a.dataType&&a.target){var s=a.success||function(){};l.push(function(d){var c=a.replaceTarget?"replaceWith":"html";b(a.target)[c](d).each(s,arguments)})}else a.success&&l.push(a.success);a.success=function(b,d,c){for(var e=a.context||a,g=0,f=l.length;g<f;g++)l[g].apply(e,[b,d,c||j,j])};d=0<b("input:file",
this).length;h="multipart/form-data"==j.attr("enctype")||"multipart/form-data"==j.attr("encoding");!1!==a.iframe&&(d||a.iframe||h)?a.closeKeepAlive?b.get(a.closeKeepAlive,f):f():b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){if(0===this.length){var f=this.selector,c=this.context;if(!b.isReady&&f)return m("DOM not ready, queuing ajaxForm"),b(function(){b(f,c).ajaxForm(a)}),this;m("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));
return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){d.isDefaultPrevented()||(d.preventDefault(),b(this).ajaxSubmit(a))}).bind("click.form-plugin",function(a){var c=a.target,f=b(c);if(!f.is(":submit,input:image")){c=f.closest(":submit");if(0==c.length)return;c=c[0]}var h=this;h.clk=c;"image"==c.type&&(void 0!=a.offsetX?(h.clk_x=a.offsetX,h.clk_y=a.offsetY):"function"==typeof b.fn.offset?(f=f.offset(),h.clk_x=a.pageX-f.left,h.clk_y=a.pageY-f.top):(h.clk_x=a.pageX-c.offsetLeft,
h.clk_y=a.pageY-c.offsetTop));setTimeout(function(){h.clk=h.clk_x=h.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var f=[];if(0===this.length)return f;var c=this[0],d=a?c.getElementsByTagName("*"):c.elements;if(!d)return f;var g,i,h,j,l,m;g=0;for(l=d.length;g<l;g++)if(i=d[g],h=i.name)if(a&&c.clk&&"image"==i.type)!i.disabled&&c.clk==i&&(f.push({name:h,value:b(i).val()}),f.push({name:h+".x",value:c.clk_x},
{name:h+".y",value:c.clk_y}));else if((j=b.fieldValue(i,!0))&&j.constructor==Array){i=0;for(m=j.length;i<m;i++)f.push({name:h,value:j[i]})}else null!==j&&"undefined"!=typeof j&&f.push({name:h,value:j});if(!a&&c.clk&&(a=b(c.clk),d=a[0],(h=d.name)&&!d.disabled&&"image"==d.type))f.push({name:h,value:a.val()}),f.push({name:h+".x",value:c.clk_x},{name:h+".y",value:c.clk_y});return f};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var f=[];this.each(function(){var c=
this.name;if(c){var d=b.fieldValue(this,a);if(d&&d.constructor==Array)for(var g=0,i=d.length;g<i;g++)f.push({name:c,value:d[g]});else null!==d&&"undefined"!=typeof d&&f.push({name:this.name,value:d})}});return b.param(f)};b.fn.fieldValue=function(a){for(var f=[],c=0,d=this.length;c<d;c++){var g=b.fieldValue(this[c],a);null===g||("undefined"==typeof g||g.constructor==Array&&!g.length)||(g.constructor==Array?b.merge(f,g):f.push(g))}return f};b.fieldValue=function(a,f){var c=a.name,d=a.type,g=a.tagName.toLowerCase();
void 0===f&&(f=!0);if(f&&(!c||a.disabled||"reset"==d||"button"==d||("checkbox"==d||"radio"==d)&&!a.checked||("submit"==d||"image"==d)&&a.form&&a.form.clk!=a||"select"==g&&-1==a.selectedIndex))return null;if("select"==g){var i=a.selectedIndex;if(0>i)return null;for(var c=[],g=a.options,h=(d="select-one"==d)?i+1:g.length,i=d?i:0;i<h;i++){var j=g[i];if(j.selected){var l=j.value;l||(l=j.attributes&&j.attributes.value&&!j.attributes.value.specified?j.text:j.value);if(d)return l;c.push(l)}}return c}return b(a).val()};
b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,b=this.tagName.toLowerCase();"text"==a||"password"==a||"textarea"==b?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==b&&(this.selectedIndex=-1)})};b.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};
b.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var f=this.type;"checkbox"==f||"radio"==f?this.checked=a:"option"==this.tagName.toLowerCase()&&(f=b(this).parent("select"),a&&(f[0]&&"select-one"==f[0].type)&&f.find("option").selected(!1),this.selected=a)})}})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.is-dirty.js' */
jQuery.fn.isDirty=function(){var b,d=[];window.onbeforeunload=function(){var a=window.onbeforeunload;!1!==b&&jQuery.each(d,function(){if(this.initVal!==$(this).val())return b=!0,!1});if(b)return window.onbeforeunload=null,window.setTimeout(function(){jQuery(document).bind("mousemove",function(){window.onbeforeunload=a;jQuery(document).unbind("mousemove",arguments.callee)})},1E3),b=void 0,AJS.params.dirtyMessage||""};return function(a){function c(b){var a=jQuery(this);jQuery.fn.isDirty.fieldInFocus=
a;-1===jQuery.inArray(this,d)&&(this.initVal=a.val(),d.push(this),a.die(b.type,c))}if(0!==this.length)return jQuery(":not(:input)").live("click",function(){delete jQuery.fn.isDirty.fieldInFocus}),jQuery(":input[type != hidden]",this.selector).bind("keydown",c).bind("keypress",c).bind("click",c),jQuery(a.ignoreUnloadFromElems).live("mousedown",function(){b=!1}),this.each(function(){var a=this.onsubmit;this.onsubmit=function(){b=!1;if(a)return a.apply(this,arguments)};$(this).submit(function(){b=!1})}),
this}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.progressbar.js' */
(function(a){a.fn.progressBar=function(e,h){var f=a.extend({height:"1em",showPercentage:!0},h),b=this.attr("id")+"-incomplete-bar",c=this.attr("id")+"-complete-bar",g=this.attr("id")+"-percent-complete-text";if(0==a("#"+b).length){var d=a(document.createElement("div"));d.attr("id",b);d.css({width:"90%",border:"solid 1px #ccc","float":"left","margin-right":"0.5em"});d.addClass("progress-background-color");b=a(document.createElement("div"));b.attr("id",c);b.addClass("progress-fill-color");b.css({height:f.height,
width:e+"%"});c=a(document.createElement("span"));c.attr("id",g);c.addClass("percent-complete-text");c.html(e+"%");d.append(b);this.append(d);f.showPercentage&&this.append(c)}else a("#"+c).css("width",e+"%"),a("#"+g).html(e+"%")}})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.selection.js' */
(function(e){document.selection?(e.fn.selection=function(d){var a=this[0];this.focus();if(!a)return!1;if(null==d)return document.selection.createRange().text;var c=a.scrollTop,b=document.selection.createRange();b.text=d;b.select();a.focus();a.scrollTop=c},e.fn.selectionRange=function(d,a){var c=this[0];this.focus();var b=document.selection.createRange();if(null==d){var e=this.val(),g=e.length,f=b.duplicate();f.moveToElementText(c);f.setEndPoint("StartToEnd",b);c=g-f.text.replace(/\u000D/g,"").length;
f.setEndPoint("StartToStart",b);b=g-f.text.replace(/\u000D/g,"").length;c!=b&&"\n"==e.charAt(c+1)&&(c+=1);return{end:c,start:b,text:e.substring(b,c),textBefore:e.substring(0,b),textAfter:e.substring(c)}}b.moveToElementText(c);b.collapse(!0);b.moveStart("character",d);b.moveEnd("character",a-d);b.select()}):(e.fn.selection=function(d){var a=this[0];if(!a)return!1;if(null==d)return a.setSelectionRange?a.value.substring(a.selectionStart,a.selectionEnd):!1;var c=a.scrollTop;if(a.setSelectionRange){var b=
a.selectionStart;a.value=a.value.substring(0,b)+d+a.value.substring(a.selectionEnd);a.selectionStart=b;a.selectionEnd=b+d.length}a.focus();a.scrollTop=c},e.fn.selectionRange=function(d,a){if(null==d){var c={start:this[0].selectionStart,end:this[0].selectionEnd},b=this.val();c.text=b.substring(c.start,c.end);c.textBefore=b.substring(0,c.start);c.textAfter=b.substring(c.end);return c}this[0].selectionStart=d;this[0].selectionEnd=a});e.fn.wrapSelection=function(d,a){this.selection(d+this.selection()+
(a||""))}})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-ajs-no-context-path', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.throbber.js' */
jQuery.fn.throbber=function(d){var e=[],g={isLatentThreshold:100,minThrobberDisplay:200,loadingClass:"loading"};d(document).ajaxComplete(function(a,b){d(e).each(function(a){b===this.get(0)&&(this.hideThrobber(),e.splice(a,1))})});return function(a){var b,f,c=function(a,b){c.t=setTimeout(function(){clearTimeout(c.t);c.t=void 0;a()},b)},a=d.extend(g,a||{});if(!a.target)return this;f=jQuery(a.target);e.push(d.extend(this,{showThrobber:function(){c(function(){b||(f.addClass(a.loadingClass),c(function(){b&&
b()},a.minThrobberDisplay))},a.isLatentThreshold)},hideThrobber:function(){b=function(){f.removeClass(a.loadingClass);a.end&&a.end()};c.t||b()}}));this.showThrobber();return this}}(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-backbone-backbone', location = 'node_modules/@atlassian/aui/src/js-vendor/backbone/backbone.js' */
("undefined"===typeof window?global:window).__7f5160581b44ef9ed6fba14191814689=function(){var o={exports:{}},m=o.exports,v={module:o,exports:m,underscore:__309cc7b5b5b5e38c9aaa43f19c161b66,jquery:__02fa0d2334b5d2f9701871403ba9d89a,underscore:__309cc7b5b5b5e38c9aaa43f19c161b66,jquery:__02fa0d2334b5d2f9701871403ba9d89a},i;i=function(h,f,d){var i=("undefined"===typeof window?global:window).define,j,k,d=[d,f,h].filter(function(d){return"function"===typeof d})[0],f=[f,h,[]].filter(Array.isArray)[0];j=
d.apply(null,f.map(function(d){return v[d]}));k=typeof j;"function"===typeof i&&i("string"===typeof h?h:"__7f5160581b44ef9ed6fba14191814689",f,d);"string"===k?j=String(j):"number"===k?j=Number(j):"boolean"===k&&(j=Boolean(j));void 0!==j&&(m=o.exports=j)};i.amd=!0;var h=this,q=function(h,f,d,i){var h=this,j=h.Backbone,k=[],o=k.push,m=k.slice,q=k.splice;f.VERSION="1.0.0";f.$=i;f.noConflict=function(){h.Backbone=j;return this};f.emulateHTTP=!1;f.emulateJSON=!1;var l=f.Events={on:function(a,b,c){if(!s(this,
"on",a,[b,c])||!b)return this;this._events||(this._events={});(this._events[a]||(this._events[a]=[])).push({callback:b,context:c,ctx:c||this});return this},once:function(a,b,c){if(!s(this,"once",a,[b,c])||!b)return this;var e=this,g=d.once(function(){e.off(a,g);b.apply(this,arguments)});g._callback=b;return this.on(a,g,c)},off:function(a,b,c){var e,g,w,f,h,i,j,k;if(!this._events||!s(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;f=a?[a]:d.keys(this._events);h=0;for(i=f.length;h<
i;h++)if(a=f[h],w=this._events[a]){this._events[a]=e=[];if(b||c){j=0;for(k=w.length;j<k;j++)g=w[j],(b&&b!==g.callback&&b!==g.callback._callback||c&&c!==g.context)&&e.push(g)}e.length||delete this._events[a]}return this},trigger:function(a){if(!this._events)return this;var b=m.call(arguments,1);if(!s(this,"trigger",a,b))return this;var c=this._events[a],e=this._events.all;c&&x(c,b);e&&x(e,arguments);return this},stopListening:function(a,b,c){var e=this._listeners;if(!e)return this;var d=!b&&!c;"object"===
typeof b&&(c=this);a&&((e={})[a._listenerId]=a);for(var f in e)e[f].off(b,c,this),d&&delete this._listeners[f];return this}},r=/\s+/,s=function(a,b,c,e){if(!c)return!0;if("object"===typeof c){for(var d in c)a[b].apply(a,[d,c[d]].concat(e));return!1}if(r.test(c)){c=c.split(r);d=0;for(var f=c.length;d<f;d++)a[b].apply(a,[c[d]].concat(e));return!1}return!0},x=function(a,b){var c,e=-1,d=a.length,f=b[0],h=b[1],i=b[2];switch(b.length){case 0:for(;++e<d;)(c=a[e]).callback.call(c.ctx);break;case 1:for(;++e<
d;)(c=a[e]).callback.call(c.ctx,f);break;case 2:for(;++e<d;)(c=a[e]).callback.call(c.ctx,f,h);break;case 3:for(;++e<d;)(c=a[e]).callback.call(c.ctx,f,h,i);break;default:for(;++e<d;)(c=a[e]).callback.apply(c.ctx,b)}};d.each({listenTo:"on",listenToOnce:"once"},function(a,b){l[b]=function(b,e,g){var f=this._listeners||(this._listeners={}),h=b._listenerId||(b._listenerId=d.uniqueId("l"));f[h]=b;"object"===typeof e&&(g=this);b[a](e,g,this);return this}});l.bind=l.on;l.unbind=l.off;d.extend(f,l);var p=
f.Model=function(a,b){var c,e=a||{};b||(b={});this.cid=d.uniqueId("c");this.attributes={};d.extend(this,d.pick(b,v));b.parse&&(e=this.parse(e,b)||{});if(c=d.result(this,"defaults"))e=d.defaults({},e,c);this.set(e,b);this.changed={};this.initialize.apply(this,arguments)},v=["url","urlRoot","collection"];d.extend(p.prototype,l,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return d.clone(this.attributes)},sync:function(){return f.sync.apply(this,arguments)},
get:function(a){return this.attributes[a]},escape:function(a){return d.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var e,g,f,h,i,j,k;if(null==a)return this;"object"===typeof a?(g=a,c=b):(g={})[a]=b;c||(c={});if(!this._validate(g,c))return!1;f=c.unset;h=c.silent;a=[];i=this._changing;this._changing=!0;i||(this._previousAttributes=d.clone(this.attributes),this.changed={});k=this.attributes;j=this._previousAttributes;this.idAttribute in g&&(this.id=g[this.idAttribute]);
for(e in g)b=g[e],d.isEqual(k[e],b)||a.push(e),d.isEqual(j[e],b)?delete this.changed[e]:this.changed[e]=b,f?delete k[e]:k[e]=b;if(!h){a.length&&(this._pending=!0);b=0;for(e=a.length;b<e;b++)this.trigger("change:"+a[b],this,k[a[b]],c)}if(i)return this;if(!h)for(;this._pending;)this._pending=!1,this.trigger("change",this,c);this._changing=this._pending=!1;return this},unset:function(a,b){return this.set(a,void 0,d.extend({},b,{unset:!0}))},clear:function(a){var b={},c;for(c in this.attributes)b[c]=
void 0;return this.set(b,d.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!d.isEmpty(this.changed):d.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?d.clone(this.changed):!1;var b,c=!1,e=this._changing?this._previousAttributes:this.attributes,g;for(g in a)if(!d.isEqual(e[g],b=a[g]))(c||(c={}))[g]=b;return c},previous:function(a){return null==a||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return d.clone(this._previousAttributes)},
fetch:function(a){a=a?d.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(e){if(!b.set(b.parse(e,a),a))return false;c&&c(b,e,a);b.trigger("sync",b,e,a)};t(this,a);return this.sync("read",this,a)},save:function(a,b,c){var e,g=this.attributes;null==a||"object"===typeof a?(e=a,c=b):(e={})[a]=b;if(e&&(!c||!c.wait)&&!this.set(e,c))return!1;c=d.extend({validate:!0},c);if(!this._validate(e,c))return!1;e&&c.wait&&(this.attributes=d.extend({},g,e));void 0===c.parse&&(c.parse=
!0);var f=this,h=c.success;c.success=function(a){f.attributes=g;var b=f.parse(a,c);c.wait&&(b=d.extend(e||{},b));if(d.isObject(b)&&!f.set(b,c))return false;h&&h(f,a,c);f.trigger("sync",f,a,c)};t(this,c);a=this.isNew()?"create":c.patch?"patch":"update";"patch"===a&&(c.attrs=e);a=this.sync(a,this,c);e&&c.wait&&(this.attributes=g);return a},destroy:function(a){var a=a?d.clone(a):{},b=this,c=a.success,e=function(){b.trigger("destroy",b,b.collection,a)};a.success=function(d){(a.wait||b.isNew())&&e();c&&
c(b,d,a);b.isNew()||b.trigger("sync",b,d,a)};if(this.isNew())return a.success(),!1;t(this,a);var g=this.sync("delete",this,a);a.wait||e();return g},url:function(){var a=d.result(this,"urlRoot")||d.result(this.collection,"url")||y();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(a){return this._validate({},d.extend(a||
{},{validate:!0}))},_validate:function(a,b){if(!b.validate||!this.validate)return!0;var a=d.extend({},this.attributes,a),c=this.validationError=this.validate(a,b)||null;if(!c)return!0;this.trigger("invalid",this,c,d.extend(b||{},{validationError:c}));return!1}});d.each("keys values pairs invert pick omit".split(" "),function(a){p.prototype[a]=function(){var b=m.call(arguments);b.unshift(this.attributes);return d[a].apply(d,b)}});var u=f.Collection=function(a,b){b||(b={});b.url&&(this.url=b.url);b.model&&
(this.model=b.model);void 0!==b.comparator&&(this.comparator=b.comparator);this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,d.extend({silent:!0},b))},A={add:!0,remove:!0,merge:!0},B={add:!0,merge:!1,remove:!1};d.extend(u.prototype,l,{model:p,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return f.sync.apply(this,arguments)},add:function(a,b){return this.set(a,d.defaults(b||{},B))},remove:function(a,b){a=d.isArray(a)?
a.slice():[a];b||(b={});var c,e,g,f;c=0;for(e=a.length;c<e;c++)if(f=this.get(a[c]))delete this._byId[f.id],delete this._byId[f.cid],g=this.indexOf(f),this.models.splice(g,1),this.length--,b.silent||(b.index=g,f.trigger("remove",f,this,b)),this._removeReference(f);return this},set:function(a,b){b=d.defaults(b||{},A);b.parse&&(a=this.parse(a,b));d.isArray(a)||(a=a?[a]:[]);var c,e,g,f,h,i=b.at,j=this.comparator&&null==i&&!1!==b.sort,k=d.isString(this.comparator)?this.comparator:null,l=[],m=[],n={};c=
0;for(e=a.length;c<e;c++)if(g=this._prepareModel(a[c],b))(f=this.get(g))?(b.remove&&(n[f.cid]=!0),b.merge&&(f.set(g.attributes,b),j&&(!h&&f.hasChanged(k))&&(h=!0))):b.add&&(l.push(g),g.on("all",this._onModelEvent,this),this._byId[g.cid]=g,null!=g.id&&(this._byId[g.id]=g));if(b.remove){c=0;for(e=this.length;c<e;++c)n[(g=this.models[c]).cid]||m.push(g);m.length&&this.remove(m,b)}l.length&&(j&&(h=!0),this.length+=l.length,null!=i?q.apply(this.models,[i,0].concat(l)):o.apply(this.models,l));h&&this.sort({silent:!0});
if(b.silent)return this;c=0;for(e=l.length;c<e;c++)(g=l[c]).trigger("add",g,this,b);h&&this.trigger("sort",this,b);return this},reset:function(a,b){b||(b={});for(var c=0,e=this.models.length;c<e;c++)this._removeReference(this.models[c]);b.previousModels=this.models;this._reset();this.add(a,d.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,d.extend({at:this.length},b));return a},pop:function(a){var b=this.at(this.length-
1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,d.extend({at:0},b));return a},shift:function(a){var b=this.at(0);this.remove(b,a);return b},slice:function(a,b){return this.models.slice(a,b)},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a.cid||a]},at:function(a){return this.models[a]},where:function(a,b){return d.isEmpty(a)?b?void 0:[]:this[b?"find":"filter"](function(b){for(var e in a)if(a[e]!==b.get(e))return!1;return!0})},findWhere:function(a){return this.where(a,
!0)},sort:function(a){if(!this.comparator)throw Error("Cannot sort a set without a comparator");a||(a={});d.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(d.bind(this.comparator,this));a.silent||this.trigger("sort",this,a);return this},sortedIndex:function(a,b,c){b||(b=this.comparator);var e=d.isFunction(b)?b:function(a){return a.get(b)};return d.sortedIndex(this.models,a,e,c)},pluck:function(a){return d.invoke(this.models,"get",
a)},fetch:function(a){a=a?d.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=a.success,c=this;a.success=function(e){c[a.reset?"reset":"set"](e,a);b&&b(c,e,a);c.trigger("sync",c,e,a)};t(this,a);return this.sync("read",this,a)},create:function(a,b){b=b?d.clone(b):{};if(!(a=this._prepareModel(a,b)))return!1;b.wait||this.add(a,b);var c=this,e=b.success;b.success=function(a,b,d){d.wait&&c.add(a,d);e&&e(a,b,d)};a.save(null,b);return a},parse:function(a){return a},clone:function(){return new this.constructor(this.models)},
_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(a,b){if(a instanceof p)return a.collection||(a.collection=this),a;b||(b={});b.collection=this;var c=new this.model(a,b);return!c._validate(a,b)?(this.trigger("invalid",this,a,b),!1):c},_removeReference:function(a){this===a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,e){("add"===a||"remove"===a)&&c!==this||("destroy"===a&&this.remove(b,e),b&&a==="change:"+b.idAttribute&&
(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});d.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "),function(a){u.prototype[a]=function(){var b=m.call(arguments);b.unshift(this.models);return d[a].apply(d,b)}});
d.each(["groupBy","countBy","sortBy"],function(a){u.prototype[a]=function(b,c){var e=d.isFunction(b)?b:function(a){return a.get(b)};return d[a](this.models,e,c)}});var i=f.View=function(a){this.cid=d.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},C=/^(\S+)\s*(.*)$/,D="model collection el id attributes className tagName events".split(" ");d.extend(i.prototype,l,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},
render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof f.$?a:f.$(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(!a&&!(a=d.result(this,"events")))return this;this.undelegateEvents();for(var b in a){var c=a[b];d.isFunction(c)||(c=this[a[b]]);if(c){var e=b.match(C),g=e[1],e=e[2],c=d.bind(c,this),g=g+(".delegateEvents"+this.cid);
if(""===e)this.$el.on(g,c);else this.$el.on(g,e,c)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(a){this.options&&(a=d.extend({},d.result(this,"options"),a));d.extend(this,d.pick(a,D));this.options=a},_ensureElement:function(){if(this.el)this.setElement(d.result(this,"el"),!1);else{var a=d.extend({},d.result(this,"attributes"));this.id&&(a.id=d.result(this,"id"));this.className&&(a["class"]=d.result(this,"className"));a=f.$("<"+
d.result(this,"tagName")+">").attr(a);this.setElement(a,!1)}}});f.sync=function(a,b,c){var e=E[a];d.defaults(c||(c={}),{emulateHTTP:f.emulateHTTP,emulateJSON:f.emulateJSON});var g={type:e,dataType:"json"};c.url||(g.url=d.result(b,"url")||y());if(null==c.data&&b&&("create"===a||"update"===a||"patch"===a))g.contentType="application/json",g.data=JSON.stringify(c.attrs||b.toJSON(c));c.emulateJSON&&(g.contentType="application/x-www-form-urlencoded",g.data=g.data?{model:g.data}:{});if(c.emulateHTTP&&("PUT"===
e||"DELETE"===e||"PATCH"===e)){g.type="POST";c.emulateJSON&&(g.data._method=e);var h=c.beforeSend;c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",e);if(h)return h.apply(this,arguments)}}"GET"!==g.type&&!c.emulateJSON&&(g.processData=!1);if("PATCH"===g.type&&window.ActiveXObject&&(!window.external||!window.external.msActiveXFilteringEnabled))g.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")};a=c.xhr=f.ajax(d.extend(g,c));b.trigger("request",b,a,c);return a};var E=
{create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};f.ajax=function(){return f.$.ajax.apply(f.$,arguments)};var k=f.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},F=/\((.*?)\)/g,G=/(\(\?)?:\w+/g,H=/\*\w+/g,I=/[\-{}\[\]+?.,\\\^$|#\s]/g;d.extend(k.prototype,l,{initialize:function(){},route:function(a,b,c){d.isRegExp(a)||(a=this._routeToRegExp(a));d.isFunction(b)&&(c=b,b="");c||(c=this[b]);var e=this;f.history.route(a,
function(d){d=e._extractParameters(a,d);c&&c.apply(e,d);e.trigger.apply(e,["route:"+b].concat(d));e.trigger("route",b,d);f.history.trigger("route",e,b,d)});return this},navigate:function(a,b){f.history.navigate(a,b);return this},_bindRoutes:function(){if(this.routes){this.routes=d.result(this,"routes");for(var a,b=d.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])}},_routeToRegExp:function(a){a=a.replace(I,"\\$&").replace(F,"(?:$1)?").replace(G,function(a,c){return c?a:"([^/]+)"}).replace(H,
"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){var c=a.exec(b).slice(1);return d.map(c,function(a){return a?decodeURIComponent(a):null})}});var n=f.History=function(){this.handlers=[];d.bindAll(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},z=/^[#\/]|\s+$/g,J=/^\/+|\/+$/g,K=/msie [\w.]+/,L=/\/$/;n.started=!1;d.extend(n.prototype,l,{interval:50,getHash:function(a){return(a=(a||this).location.href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){var a=this.location.pathname,c=this.root.replace(L,"");a.indexOf(c)||(a=a.substr(c.length))}else a=this.getHash();return a.replace(z,"")},start:function(a){if(n.started)throw Error("Backbone.history has already been started");n.started=!0;this.options=d.extend({},{root:"/"},this.options,a);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;
this._hasPushState=!(!this.options.pushState||!this.history||!this.history.pushState);var a=this.getFragment(),b=document.documentMode,b=K.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b);this.root=("/"+this.root+"/").replace(J,"/");b&&this._wantsHashChange&&(this.iframe=f.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a));if(this._hasPushState)f.$(window).on("popstate",this.checkUrl);else if(this._wantsHashChange&&"onhashchange"in window&&
!b)f.$(window).on("hashchange",this.checkUrl);else this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;a=this.location;b=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&(this._hasPushState&&b&&a.hash)&&(this.fragment=this.getHash().replace(z,
""),this.history.replaceState({},document.title,this.root+this.fragment+a.search));if(!this.options.silent)return this.loadUrl()},stop:function(){f.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);n.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a===this.fragment)return!1;this.iframe&&
this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return d.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!n.started)return!1;if(!b||!0===b)b={trigger:b};a=this.getFragment(a||"");if(this.fragment!==a){this.fragment=a;var c=this.root+a;if(this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else if(this._wantsHashChange)this._updateHash(this.location,
a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace));else return this.location.assign(c);b.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){c?(c=a.href.replace(/(javascript:|#).*$/,""),a.replace(c+"#"+b)):a.hash="#"+b}});f.history=new n;p.extend=u.extend=k.extend=i.extend=n.extend=function(a,b){var c=this,e;e=a&&d.has(a,"constructor")?a.constructor:function(){return c.apply(this,
arguments)};d.extend(e,c,b);var f=function(){this.constructor=e};f.prototype=c.prototype;e.prototype=new f;a&&d.extend(e.prototype,a);e.__super__=c.prototype;return e};var y=function(){throw Error('A "url" property or function must be specified');},t=function(a,b){var c=b.error;b.error=function(d){c&&c(a,d,b);a.trigger("error",a,d,b)}};return f};if("function"===typeof i&&i.amd)i(["underscore","jquery","exports"],function(i,f,d){h.Backbone=q(h,d,i,f)});else if("undefined"!==typeof m){i=__309cc7b5b5b5e38c9aaa43f19c161b66;
var r;try{r=__02fa0d2334b5d2f9701871403ba9d89a}catch(M){}q(h,m,i,r)}else h.Backbone=q(h,{},h._,h.jQuery||h.Zepto||h.ender||h.$);return o.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-backbone', location = 'node_modules/@atlassian/aui/src/js/aui/backbone.js' */
("undefined"===typeof window?global:window).__a0f8accf3e15b29165e7a143e435af91=function(){var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});var a=__7f5160581b44ef9ed6fba14191814689,a=a&&a.__esModule?a:{"default":a};window.Backbone||(window.Backbone=a.default);b.default=window.Backbone;return b=b["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/aui.soy' */
// This file was automatically generated from aui.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.
 */

if (typeof aui == 'undefined') { var aui = {}; }


aui.renderExtraAttributes = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.extraAttributes) {
    if (Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]') {
      var attrList7 = soy.$$getMapKeys(opt_data.extraAttributes);
      var attrListLen7 = attrList7.length;
      for (var attrIndex7 = 0; attrIndex7 < attrListLen7; attrIndex7++) {
        var attrData7 = attrList7[attrIndex7];
        output += ' ' + soy.$$escapeHtml(attrData7) + '="' + soy.$$escapeHtml(opt_data.extraAttributes[attrData7]) + '"';
      }
    } else {
      output += ' ' + soy.$$filterNoAutoescape(opt_data.extraAttributes);
    }
  }
  return output;
};
if (goog.DEBUG) {
  aui.renderExtraAttributes.soyTemplateName = 'aui.renderExtraAttributes';
}


aui.renderExtraClasses = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.extraClasses) {
    if ((opt_data.extraClasses) instanceof Array) {
      var classList23 = opt_data.extraClasses;
      var classListLen23 = classList23.length;
      for (var classIndex23 = 0; classIndex23 < classListLen23; classIndex23++) {
        var classData23 = classList23[classIndex23];
        output += ' ' + soy.$$escapeHtml(classData23);
      }
    } else {
      output += ' ' + soy.$$escapeHtml(opt_data.extraClasses);
    }
  }
  return output;
};
if (goog.DEBUG) {
  aui.renderExtraClasses.soyTemplateName = 'aui.renderExtraClasses';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/badges.soy' */
// This file was automatically generated from badges.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.badges.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.badges == 'undefined') { aui.badges = {}; }


aui.badges.badge = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-badge' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$escapeHtml(opt_data.text) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + '>';
};
if (goog.DEBUG) {
  aui.badges.badge.soyTemplateName = 'aui.badges.badge';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/buttons.soy' */
// This file was automatically generated from buttons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.buttons.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.buttons == 'undefined') { aui.buttons = {}; }


aui.buttons.button = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.href || opt_data.href == '') {
    output += '<a href="' + soy.$$escapeHtml(opt_data.href) + '"' + aui.buttons.buttonAttributes(soy.$$augmentMap(opt_data, {tagName: 'a'})) + '>' + aui.buttons.buttonIcon(opt_data) + ((opt_data.hasLabel) ? '<span class="aui-button-label">' : '') + soy.$$escapeHtml(opt_data.text) + ((opt_data.hasLabel) ? '</span>' : '') + '</a>';
  } else if (opt_data.tagName == 'input') {
    output += '<input type="' + soy.$$escapeHtml(opt_data.inputType ? opt_data.inputType : 'button') + '" ' + aui.buttons.buttonAttributes(opt_data) + ' value="' + soy.$$escapeHtml(opt_data.text) + '" />';
  } else {
    var theTagName__soy29 = opt_data.tagName ? opt_data.tagName : 'button';
    output += '<' + soy.$$escapeHtml(theTagName__soy29) + aui.buttons.buttonAttributes(soy.$$augmentMap(opt_data, {tagName: theTagName__soy29})) + '>' + aui.buttons.buttonIcon(opt_data) + ((opt_data.hasLabel) ? '<span class="aui-button-label">' : '') + soy.$$escapeHtml(opt_data.text) + ((opt_data.hasLabel) ? '</span>' : '') + '</' + soy.$$escapeHtml(theTagName__soy29) + '>';
  }
  return output;
};
if (goog.DEBUG) {
  aui.buttons.button.soyTemplateName = 'aui.buttons.button';
}


aui.buttons.buttons = function(opt_data, opt_ignored) {
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-buttons' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  aui.buttons.buttons.soyTemplateName = 'aui.buttons.buttons';
}


aui.buttons.buttonAttributes = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-button' + ((opt_data.splitButtonType == 'main') ? ' aui-button-split-main' : '') + ((opt_data.dropdown2Target) ? ' aui-dropdown2-trigger' + ((opt_data.splitButtonType == 'more') ? ' aui-button-split-more' : '') : '');
  switch (opt_data.type) {
    case 'primary':
      output += ' aui-button-primary';
      break;
    case 'link':
      output += ' aui-button-link';
      break;
    case 'subtle':
      output += ' aui-button-subtle';
      break;
    case 'text':
      output += ' aui-button-text';
      break;
  }
  output += aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + ((opt_data.isPressed) ? ' aria-pressed="' + soy.$$escapeHtml(opt_data.isPressed) + '"' : '') + ((opt_data.isDisabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.isDisabled) + '"' + ((opt_data.isDisabled == true) ? (opt_data.tagName == 'button' || opt_data.tagName == 'input') ? ' disabled="disabled" ' : '' : '') : '') + ((opt_data.dropdown2Target) ? ' aria-owns="' + soy.$$escapeHtml(opt_data.dropdown2Target) + '" aria-haspopup="true"' : '') + ((opt_data.tagName == 'a') ? ' tabindex="0"' : '');
  return output;
};
if (goog.DEBUG) {
  aui.buttons.buttonAttributes.soyTemplateName = 'aui.buttons.buttonAttributes';
}


aui.buttons.buttonIcon = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.iconType) ? '<span class="' + ((opt_data.iconType == 'aui') ? 'aui-icon' : '') + ((opt_data.iconClass) ? ' ' + soy.$$escapeHtml(opt_data.iconClass) : '') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) + ' ' : '') + '</span>' : '');
};
if (goog.DEBUG) {
  aui.buttons.buttonIcon.soyTemplateName = 'aui.buttons.buttonIcon';
}


aui.buttons.splitButton = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button(soy.$$augmentMap(opt_data.splitButtonMain, {splitButtonType: 'main'})) + aui.buttons.button(soy.$$augmentMap(opt_data.splitButtonMore, {splitButtonType: 'more'}));
};
if (goog.DEBUG) {
  aui.buttons.splitButton.soyTemplateName = 'aui.buttons.splitButton';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/dropdown.soy' */
// This file was automatically generated from dropdown.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dropdown.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown == 'undefined') { aui.dropdown = {}; }


aui.dropdown.trigger = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<a' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dd-trigger' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><span class="dropdown-text">' + ((opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '') + '</span>' + ((! (opt_data.showIcon == false)) ? '<span class="icon icon-dropdown"></span>' : '') + '</a>';
};
if (goog.DEBUG) {
  aui.dropdown.trigger.soyTemplateName = 'aui.dropdown.trigger';
}


aui.dropdown.menu = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dropdown hidden' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'ul') + '>';
};
if (goog.DEBUG) {
  aui.dropdown.menu.soyTemplateName = 'aui.dropdown.menu';
}


aui.dropdown.parent = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dd-parent' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.dropdown.parent.soyTemplateName = 'aui.dropdown.parent';
}


aui.dropdown.item = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="dropdown-item' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><a href="' + soy.$$escapeHtml(opt_data.url ? opt_data.url : '#') + '">' + soy.$$escapeHtml(opt_data.text) + '</a></' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'li') + '>';
};
if (goog.DEBUG) {
  aui.dropdown.item.soyTemplateName = 'aui.dropdown.item';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/dropdown2.soy' */
// This file was automatically generated from dropdown2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dropdown2.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dropdown2 == 'undefined') { aui.dropdown2 = {}; }


aui.dropdown2.dropdown2 = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger(soy.$$augmentMap(opt_data.trigger, {menu: opt_data.menu})) + aui.dropdown2.contents(opt_data.menu);
};
if (goog.DEBUG) {
  aui.dropdown2.dropdown2.soyTemplateName = 'aui.dropdown2.dropdown2';
}


aui.dropdown2.trigger = function(opt_data, opt_ignored) {
  return '' + aui.trigger.trigger(soy.$$augmentMap(opt_data, {extraClasses: 'aui-dropdown2-trigger' + aui.renderExtraClasses(opt_data)}));
};
if (goog.DEBUG) {
  aui.dropdown2.trigger.soyTemplateName = 'aui.dropdown2.trigger';
}


aui.dropdown2.contents = function(opt_data, opt_ignored) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="aui-dropdown2' + aui.renderExtraClasses(opt_data) + '" role="menu" aria-hidden="true"' + aui.renderExtraAttributes(opt_data) + '><div role="application">' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div></div>';
};
if (goog.DEBUG) {
  aui.dropdown2.contents.soyTemplateName = 'aui.dropdown2.contents';
}


aui.dropdown2.section = function(opt_data, opt_ignored) {
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dropdown2-section' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.label) ? '<strong role="presentation" class="aui-dropdown2-heading">' + soy.$$escapeHtml(opt_data.label) + '</strong>' : '') + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  aui.dropdown2.section.soyTemplateName = 'aui.dropdown2.section';
}


aui.dropdown2.itemGroup = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div ' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' role="presentation" class="aui-dropdown2-section' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.label) ? '<strong role="presentation" class="aui-dropdown2-heading">' + soy.$$escapeHtml(opt_data.label) + '</strong>' : '') + '<div role="group"' + ((opt_data.label) ? ' aria-label="' + soy.$$escapeHtml(opt_data.label) + '"' : '') + '>' + aui.dropdown2.itemList(opt_data) + '</div></div>';
};
if (goog.DEBUG) {
  aui.dropdown2.itemGroup.soyTemplateName = 'aui.dropdown2.itemGroup';
}


aui.dropdown2.itemList = function(opt_data, opt_ignored) {
  var output = '<ul' + ((opt_data.isTruncated) ? ' class="aui-list-truncate"' : '') + ' role="presentation">';
  var itemList76 = opt_data.items;
  var itemListLen76 = itemList76.length;
  for (var itemIndex76 = 0; itemIndex76 < itemListLen76; itemIndex76++) {
    var itemData76 = itemList76[itemIndex76];
    output += '<li ' + ((itemData76.isHidden) ? 'class="aui-dropdown2-hidden" aria-hidden="true"' : '') + ' role="presentation">';
    switch (itemData76.itemType) {
      case 'checkbox':
        output += aui.dropdown2.menuCheckbox(itemData76);
        break;
      case 'radio':
        output += aui.dropdown2.menuRadio(itemData76);
        break;
      default:
        output += aui.dropdown2.menuLink(itemData76);
    }
    output += '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  aui.dropdown2.itemList.soyTemplateName = 'aui.dropdown2.itemList';
}


aui.dropdown2.menuLink = function(opt_data, opt_ignored) {
  return '<a role="menuitem" tabindex="-1" class="' + aui.renderExtraClasses(opt_data) + ((opt_data.submenuTarget) ? ' aui-dropdown2-sub-trigger' : '') + ((opt_data.isDisabled) ? ' aui-dropdown2-disabled' : '') + '"' + ((opt_data.href) ? ' href="' + soy.$$escapeHtml(opt_data.href) + '"' : '') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.isDisabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.isDisabled) + '"' : '') + ((opt_data.submenuTarget) ? ' aria-controls="' + soy.$$escapeHtml(opt_data.submenuTarget) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + soy.$$escapeHtml(opt_data.text) + '</a>';
};
if (goog.DEBUG) {
  aui.dropdown2.menuLink.soyTemplateName = 'aui.dropdown2.menuLink';
}


aui.dropdown2.menuCheckbox = function(opt_data, opt_ignored) {
  return '<span role="menuitemcheckbox" tabindex="-1" class="aui-dropdown2-checkbox' + ((opt_data.isInteractive) ? ' aui-dropdown2-interactive' : '') + ((opt_data.isDisabled) ? ' aui-dropdown2-disabled' : '') + ((opt_data.isChecked) ? ' aui-dropdown2-checked' : '') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.isChecked) ? ' aria-checked="' + soy.$$escapeHtml(opt_data.isChecked) + '"' : ' aria-checked="false"') + ((opt_data.isDisabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.isDisabled) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + soy.$$escapeHtml(opt_data.text) + '</span>';
};
if (goog.DEBUG) {
  aui.dropdown2.menuCheckbox.soyTemplateName = 'aui.dropdown2.menuCheckbox';
}


aui.dropdown2.menuRadio = function(opt_data, opt_ignored) {
  return '<span role="menuitemradio" tabindex="-1" class="aui-dropdown2-radio' + ((opt_data.isInteractive) ? ' aui-dropdown2-interactive' : '') + ((opt_data.isDisabled) ? ' aui-dropdown2-disabled' : '') + ((opt_data.isChecked) ? ' aui-dropdown2-checked' : '') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.isChecked) ? ' aria-checked="' + soy.$$escapeHtml(opt_data.isChecked) + '"' : ' aria-checked="false"') + ((opt_data.isDisabled) ? ' aria-disabled="' + soy.$$escapeHtml(opt_data.isDisabled) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + soy.$$escapeHtml(opt_data.text) + '</span>';
};
if (goog.DEBUG) {
  aui.dropdown2.menuRadio.soyTemplateName = 'aui.dropdown2.menuRadio';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/form.soy' */
// This file was automatically generated from form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.form.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.form == 'undefined') { aui.form = {}; }


aui.form.form = function(opt_data, opt_ignored) {
  return '<form' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui' + ((opt_data.isUnsectioned) ? ' unsectioned' : '') + ((opt_data.isLongLabels) ? ' long-label' : '') + ((opt_data.isTopLabels) ? ' top-label' : '') + aui.renderExtraClasses(opt_data) + '" action="' + soy.$$escapeHtml(opt_data.action) + '" method="' + soy.$$escapeHtml(opt_data.method ? opt_data.method : 'post') + '"' + ((opt_data.enctype) ? ' enctype="' + soy.$$escapeHtml(opt_data.enctype) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</form>';
};
if (goog.DEBUG) {
  aui.form.form.soyTemplateName = 'aui.form.form';
}


aui.form.formDescription = function(opt_data, opt_ignored) {
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="field-group' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  aui.form.formDescription.soyTemplateName = 'aui.form.formDescription';
}


aui.form.fieldset = function(opt_data, opt_ignored) {
  var output = '';
  var hasClass__soy51 = opt_data.isInline || opt_data.isDateSelect || opt_data.isGroup || opt_data.extraClasses;
  output += '<fieldset' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((hasClass__soy51) ? ' class="' + soy.$$escapeHtml(opt_data.isInline ? 'inline' : opt_data.isDateSelect ? 'date-select' : opt_data.isGroup ? 'group' : '') + aui.renderExtraClasses(opt_data) + '"' : '') + aui.renderExtraAttributes(opt_data) + '><legend><span>' + soy.$$filterNoAutoescape(opt_data.legendContent) + '</span></legend>' + soy.$$filterNoAutoescape(opt_data.content) + '</fieldset>';
  return output;
};
if (goog.DEBUG) {
  aui.form.fieldset.soyTemplateName = 'aui.form.fieldset';
}


aui.form.fieldGroup = function(opt_data, opt_ignored) {
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="field-group' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  aui.form.fieldGroup.soyTemplateName = 'aui.form.fieldGroup';
}


aui.form.buttons = function(opt_data, opt_ignored) {
  return '<div class="buttons-container' + ((opt_data.alignment) ? ' ' + soy.$$escapeHtml(opt_data.alignment) : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><div class="buttons">' + soy.$$filterNoAutoescape(opt_data.content) + '</div></div>';
};
if (goog.DEBUG) {
  aui.form.buttons.soyTemplateName = 'aui.form.buttons';
}


aui.form.label = function(opt_data, opt_ignored) {
  return '<label' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.forField) ? ' for="' + soy.$$escapeHtml(opt_data.forField) + '"' : '') + ((opt_data.extraClasses) ? ' class="' + aui.renderExtraClasses(opt_data) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label>';
};
if (goog.DEBUG) {
  aui.form.label.soyTemplateName = 'aui.form.label';
}


aui.form.input = function(opt_data, opt_ignored) {
  var output = '';
  var baseType__soy126 = '';
  switch (opt_data.type) {
    case 'password':
    case 'email':
    case 'url':
    case 'tel':
    case 'search':
      baseType__soy126 += 'text';
      break;
    case 'submit':
    case 'reset':
      baseType__soy126 += 'button';
      break;
    default:
      baseType__soy126 += soy.$$escapeHtml(opt_data.type);
  }
  output += '<input class="' + soy.$$escapeHtml(baseType__soy126) + aui.renderExtraClasses(opt_data) + ((opt_data.icon && baseType__soy126 == 'text') ? ' aui-field-has-icon' : '') + '" type="' + soy.$$escapeHtml(opt_data.type) + '" name="' + ((opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id)) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.value) ? ' value="' + soy.$$escapeHtml(opt_data.value) + '"' : '') + (((opt_data.type == 'checkbox' || opt_data.type == 'radio') && opt_data.isChecked) ? ' checked="checked"' : '') + ((baseType__soy126 == 'text' && opt_data.type != 'password' && opt_data.maxLength) ? ' maxlength="' + soy.$$escapeHtml(opt_data.maxLength) + '"' : '') + ((baseType__soy126 == 'text' && opt_data.type != 'password' && opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '') + ((baseType__soy126 == 'text' && opt_data.placeholderText) ? ' placeholder="' + soy.$$escapeHtml(opt_data.placeholderText) + '"' : '') + ((baseType__soy126 == 'text' && opt_data.autocomplete) ? ' autocomplete="' + soy.$$escapeHtml(opt_data.autocomplete) + '"' : '') + ((opt_data.isDisabled) ? ' disabled' : '') + ((opt_data.isAutofocus) ? ' autofocus' : '') + aui.renderExtraAttributes(opt_data) + aui.form.renderValidationArguments(opt_data) + aui.form.renderInfoMessage(opt_data) + aui.form.renderFieldComponentAttribute(opt_data) + aui.form.renderTooltipArguments(opt_data) + '/>' + ((opt_data.icon && baseType__soy126 == 'text') ? aui.icons.icon({icon: opt_data.icon, useIconFont: true, size: 'small'}) : '');
  return output;
};
if (goog.DEBUG) {
  aui.form.input.soyTemplateName = 'aui.form.input';
}


aui.form.renderValidationArguments = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.validationArguments) {
    var argumentList203 = soy.$$getMapKeys(opt_data.validationArguments);
    var argumentListLen203 = argumentList203.length;
    for (var argumentIndex203 = 0; argumentIndex203 < argumentListLen203; argumentIndex203++) {
      var argumentData203 = argumentList203[argumentIndex203];
      output += (argumentData203 == 'required' || argumentData203 == 'pattern' || argumentData203 == 'min' || argumentData203 == 'max' || argumentData203 == 'minlength' || argumentData203 == 'maxlength') ? ' ' + soy.$$escapeHtml(argumentData203) + '="' + soy.$$escapeHtml(opt_data.validationArguments[argumentData203]) + '"' : ' ' + soy.$$escapeHtml('data-aui-validation-' + argumentData203) + '="' + soy.$$escapeHtml(opt_data.validationArguments[argumentData203]) + '"';
    }
  }
  return output;
};
if (goog.DEBUG) {
  aui.form.renderValidationArguments.soyTemplateName = 'aui.form.renderValidationArguments';
}


aui.form.renderTooltipArguments = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.tooltipArguments) {
    var argumentList221 = soy.$$getMapKeys(opt_data.tooltipArguments);
    var argumentListLen221 = argumentList221.length;
    for (var argumentIndex221 = 0; argumentIndex221 < argumentListLen221; argumentIndex221++) {
      var argumentData221 = argumentList221[argumentIndex221];
      output += ' ' + soy.$$escapeHtml('data-aui-notification-' + argumentData221) + '="' + soy.$$escapeHtml(opt_data.tooltipArguments[argumentData221]) + '"';
    }
  }
  return output;
};
if (goog.DEBUG) {
  aui.form.renderTooltipArguments.soyTemplateName = 'aui.form.renderTooltipArguments';
}


aui.form.renderInfoMessage = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.infoMessage) ? ' data-aui-notification-info="' + soy.$$escapeHtml(opt_data.infoMessage) + '"' : '');
};
if (goog.DEBUG) {
  aui.form.renderInfoMessage.soyTemplateName = 'aui.form.renderInfoMessage';
}


aui.form.renderFieldComponentAttribute = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.infoMessage) ? ' data-aui-notification-field' : '') + ((opt_data.validationArguments) ? ' data-aui-validation-field' : '');
};
if (goog.DEBUG) {
  aui.form.renderFieldComponentAttribute.soyTemplateName = 'aui.form.renderFieldComponentAttribute';
}


aui.form.submit = function(opt_data, opt_ignored) {
  return '' + aui.form.button(soy.$$augmentMap(opt_data, {tagName: 'input', inputType: 'submit'}));
};
if (goog.DEBUG) {
  aui.form.submit.soyTemplateName = 'aui.form.submit';
}


aui.form.button = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button(soy.$$augmentMap(opt_data, {extraClasses: opt_data.extraClasses, extraAttributes: '' + ((opt_data.name) ? 'name="' + soy.$$escapeHtml(opt_data.name) + '"' : '') + aui.renderExtraAttributes(opt_data)}));
};
if (goog.DEBUG) {
  aui.form.button.soyTemplateName = 'aui.form.button';
}


aui.form.linkButton = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button(soy.$$augmentMap(opt_data, {tagName: 'a', type: 'link', href: opt_data.href ? opt_data.href : opt_data.url, extraClasses: 'cancel' + aui.renderExtraClasses(opt_data), extraAttributes: '' + ((opt_data.name) ? 'name="' + soy.$$escapeHtml(opt_data.name) + '"' : '') + aui.renderExtraAttributes(opt_data)}));
};
if (goog.DEBUG) {
  aui.form.linkButton.soyTemplateName = 'aui.form.linkButton';
}


aui.form.textarea = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<textarea name="' + ((opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id)) + '" class="textarea' + aui.renderExtraClasses(opt_data) + ' ' + ((opt_data.icon) ? 'aui-field-has-icon' : '') + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.rows) ? ' rows="' + soy.$$escapeHtml(opt_data.rows) + '"' : '') + ((opt_data.cols) ? ' cols="' + soy.$$escapeHtml(opt_data.cols) + '"' : '') + ((opt_data.autocomplete) ? ' autocomplete="' + soy.$$escapeHtml(opt_data.autocomplete) + '"' : '') + ((opt_data.isDisabled) ? ' disabled' : '') + ((opt_data.isAutofocus) ? ' autofocus' : '') + ((opt_data.placeholderText) ? ' placeholder="' + soy.$$escapeHtml(opt_data.placeholderText) + '"' : '') + aui.renderExtraAttributes(opt_data) + aui.form.renderValidationArguments(opt_data) + aui.form.renderInfoMessage(opt_data) + aui.form.renderFieldComponentAttribute(opt_data) + aui.form.renderTooltipArguments(opt_data) + '>' + ((opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '') + '</textarea>' + ((opt_data.icon) ? aui.icons.icon({icon: opt_data.icon, useIconFont: true, size: 'small'}) : '');
};
if (goog.DEBUG) {
  aui.form.textarea.soyTemplateName = 'aui.form.textarea';
}


aui.form.select = function(opt_data, opt_ignored) {
  var output = '<select' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' name="' + ((opt_data.name) ? soy.$$escapeHtml(opt_data.name) : soy.$$escapeHtml(opt_data.id)) + '" class="' + soy.$$escapeHtml(opt_data.isMultiple ? 'multi-select' : 'select') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.size) ? ' size="' + soy.$$escapeHtml(opt_data.size) + '"' : '') + ((opt_data.isDisabled) ? ' disabled' : '') + ((opt_data.isAutofocus) ? ' autofocus' : '') + ((opt_data.isMultiple) ? ' multiple' : '') + aui.renderExtraAttributes(opt_data) + aui.form.renderValidationArguments(opt_data) + aui.form.renderInfoMessage(opt_data) + aui.form.renderFieldComponentAttribute(opt_data) + aui.form.renderTooltipArguments(opt_data) + '>';
  var optionList375 = opt_data.options;
  var optionListLen375 = optionList375.length;
  for (var optionIndex375 = 0; optionIndex375 < optionListLen375; optionIndex375++) {
    var optionData375 = optionList375[optionIndex375];
    output += aui.form.optionOrOptgroup(soy.$$augmentMap(optionData375, {defaultValue: opt_data.value}));
  }
  output += '</select>';
  return output;
};
if (goog.DEBUG) {
  aui.form.select.soyTemplateName = 'aui.form.select';
}


aui.form.optionOrOptgroup = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.options) {
    output += '<optgroup label="' + soy.$$escapeHtml(opt_data.text) + '"' + ((opt_data.disabled) ? ' disabled' : '') + '>';
    var optionList390 = opt_data.options;
    var optionListLen390 = optionList390.length;
    for (var optionIndex390 = 0; optionIndex390 < optionListLen390; optionIndex390++) {
      var optionData390 = optionList390[optionIndex390];
      output += aui.form.optionOrOptgroup(soy.$$augmentMap(optionData390, {defaultValue: opt_data.defaultValue}));
    }
    output += '</optgroup>';
  } else {
    output += '<option value="' + soy.$$escapeHtml(opt_data.value) + '"' + ((opt_data.selected || opt_data.defaultValue == opt_data.value) ? ' selected' : '') + ((opt_data.disabled) ? ' disabled' : '') + '>' + soy.$$escapeHtml(opt_data.text) + '</option>';
  }
  return output;
};
if (goog.DEBUG) {
  aui.form.optionOrOptgroup.soyTemplateName = 'aui.form.optionOrOptgroup';
}


aui.form.value = function(opt_data, opt_ignored) {
  return '<span' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="field-value' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</span>';
};
if (goog.DEBUG) {
  aui.form.value.soyTemplateName = 'aui.form.value';
}


aui.form.field = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  var isCheckboxOrRadio__soy424 = opt_data.type == 'checkbox' || opt_data.type == 'radio';
  var fieldWidthClass__soy425 = opt_data.fieldWidth ? opt_data.fieldWidth + '-field ' : '';
  var fieldClasses__soy426 = fieldWidthClass__soy425 + (opt_data.extraFieldClasses ? opt_data.extraFieldClasses : '');
  output += '<div class="' + ((isCheckboxOrRadio__soy424) ? soy.$$escapeHtml(opt_data.type) : 'field-group') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.labelContent && ! isCheckboxOrRadio__soy424) ? aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}) : '');
  switch (opt_data.type) {
    case 'textarea':
      output += aui.form.textarea({id: opt_data.id, name: opt_data.name, value: opt_data.value, rows: opt_data.rows, cols: opt_data.cols, autocomplete: opt_data.autocomplete, placeholderText: opt_data.placeholderText, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldClasses__soy426, icon: opt_data.icon, validationArguments: opt_data.validationArguments, infoMessage: opt_data.infoMessage, tooltipArguments: opt_data.tooltipArguments});
      break;
    case 'select':
      output += aui.form.select({id: opt_data.id, name: opt_data.name, value: opt_data.value, options: opt_data.options, isMultiple: opt_data.isMultiple, size: opt_data.size, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldClasses__soy426, validationArguments: opt_data.validationArguments, infoMessage: opt_data.infoMessage, tooltipArguments: opt_data.tooltipArguments});
      break;
    case 'value':
      output += aui.form.value({id: opt_data.id, content: '' + soy.$$escapeHtml(opt_data.value), extraClasses: fieldClasses__soy426});
      break;
    case 'text':
    case 'password':
    case 'email':
    case 'url':
    case 'tel':
    case 'search':
    case 'file':
    case 'radio':
    case 'checkbox':
    case 'button':
    case 'submit':
    case 'reset':
      output += aui.form.input({id: opt_data.id, name: opt_data.name, type: opt_data.type, value: opt_data.value, maxLength: opt_data.maxLength, size: opt_data.size, autocomplete: opt_data.autocomplete, placeholderText: opt_data.placeholderText, isChecked: opt_data.isChecked, isDisabled: opt_data.isDisabled ? true : false, isAutofocus: opt_data.isAutofocus, extraClasses: fieldClasses__soy426, icon: opt_data.icon, validationArguments: opt_data.validationArguments, infoMessage: opt_data.infoMessage, tooltipArguments: opt_data.tooltipArguments});
      break;
  }
  output += ((opt_data.labelContent && isCheckboxOrRadio__soy424) ? aui.form.label({forField: opt_data.id, isRequired: opt_data.isRequired, content: opt_data.labelContent}) : '') + ((opt_data.descriptionText || opt_data.descriptionContent) ? aui.form.fieldDescription({text: opt_data.descriptionText, content: opt_data.descriptionContent}) : '');
  if (opt_data.errorTexts) {
    var errorList512 = opt_data.errorTexts;
    var errorListLen512 = errorList512.length;
    for (var errorIndex512 = 0; errorIndex512 < errorListLen512; errorIndex512++) {
      var errorData512 = errorList512[errorIndex512];
      output += aui.form.fieldError({message: errorData512});
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  aui.form.field.soyTemplateName = 'aui.form.field';
}


aui.form.fieldError = function(opt_data, opt_ignored) {
  return '<div class="error' + aui.renderExtraClasses(opt_data) + '">' + soy.$$escapeHtml(opt_data.message) + '</div>';
};
if (goog.DEBUG) {
  aui.form.fieldError.soyTemplateName = 'aui.form.fieldError';
}


aui.form.fieldDescription = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="description' + aui.renderExtraClasses(opt_data) + '">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : (opt_data.message) ? soy.$$escapeHtml(opt_data.message) : soy.$$filterNoAutoescape(opt_data.content)) + '</div>';
};
if (goog.DEBUG) {
  aui.form.fieldDescription.soyTemplateName = 'aui.form.fieldDescription';
}


aui.form.textField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'text'}));
};
if (goog.DEBUG) {
  aui.form.textField.soyTemplateName = 'aui.form.textField';
}


aui.form.textareaField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'textarea'}));
};
if (goog.DEBUG) {
  aui.form.textareaField.soyTemplateName = 'aui.form.textareaField';
}


aui.form.passwordField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'password'}));
};
if (goog.DEBUG) {
  aui.form.passwordField.soyTemplateName = 'aui.form.passwordField';
}


aui.form.fileField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'file'}));
};
if (goog.DEBUG) {
  aui.form.fileField.soyTemplateName = 'aui.form.fileField';
}


aui.form.selectField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'select'}));
};
if (goog.DEBUG) {
  aui.form.selectField.soyTemplateName = 'aui.form.selectField';
}


aui.form.checkboxField = function(opt_data, opt_ignored) {
  var param557 = '' + ((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList561 = opt_data.fields;
  var fieldListLen561 = fieldList561.length;
  for (var fieldIndex561 = 0; fieldIndex561 < fieldListLen561; fieldIndex561++) {
    var fieldData561 = fieldList561[fieldIndex561];
    param557 += aui.form.field(soy.$$augmentMap(fieldData561, {type: 'checkbox', labelContent: '' + soy.$$escapeHtml(fieldData561.labelText), extraFieldClasses: opt_data.extraFieldClasses}));
  }
  param557 += ((opt_data.isMatrix) ? '</div>' : '') + ((opt_data.descriptionText || opt_data.descriptionContent || opt_data.errorTexts && opt_data.errorTexts.length) ? aui.form.field({descriptionText: opt_data.descriptionText, descriptionContent: opt_data.descriptionContent, errorTexts: opt_data.errorTexts, isDisabled: false}) : '');
  var output = '' + aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param557});
  return output;
};
if (goog.DEBUG) {
  aui.form.checkboxField.soyTemplateName = 'aui.form.checkboxField';
}


aui.form.radioField = function(opt_data, opt_ignored) {
  var param585 = '' + ((opt_data.isMatrix) ? '<div class="matrix">' : '');
  var fieldList589 = opt_data.fields;
  var fieldListLen589 = fieldList589.length;
  for (var fieldIndex589 = 0; fieldIndex589 < fieldListLen589; fieldIndex589++) {
    var fieldData589 = fieldList589[fieldIndex589];
    param585 += aui.form.field(soy.$$augmentMap(fieldData589, {type: 'radio', name: opt_data.name ? opt_data.name : opt_data.id, labelContent: '' + soy.$$escapeHtml(fieldData589.labelText), extraFieldClasses: opt_data.extraFieldClasses}));
  }
  param585 += ((opt_data.isMatrix) ? '</div>' : '') + ((opt_data.descriptionText || opt_data.descriptionContent || opt_data.errorTexts && opt_data.errorTexts.length) ? aui.form.field({descriptionText: opt_data.descriptionText, descriptionContent: opt_data.descriptionContent, errorTexts: opt_data.errorTexts, isDisabled: false}) : '');
  var output = '' + aui.form.fieldset({legendContent: opt_data.legendContent + (opt_data.isRequired ? '<span class="aui-icon icon-required"></span>' : ''), isGroup: true, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param585});
  return output;
};
if (goog.DEBUG) {
  aui.form.radioField.soyTemplateName = 'aui.form.radioField';
}


aui.form.valueField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'value'}));
};
if (goog.DEBUG) {
  aui.form.valueField.soyTemplateName = 'aui.form.valueField';
}


aui.form.emailField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'email'}));
};
if (goog.DEBUG) {
  aui.form.emailField.soyTemplateName = 'aui.form.emailField';
}


aui.form.urlField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'url'}));
};
if (goog.DEBUG) {
  aui.form.urlField.soyTemplateName = 'aui.form.urlField';
}


aui.form.telephoneField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'tel'}));
};
if (goog.DEBUG) {
  aui.form.telephoneField.soyTemplateName = 'aui.form.telephoneField';
}


aui.form.searchField = function(opt_data, opt_ignored) {
  return '' + aui.form.field(soy.$$augmentMap(opt_data, {type: 'search'}));
};
if (goog.DEBUG) {
  aui.form.searchField.soyTemplateName = 'aui.form.searchField';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/group.soy' */
// This file was automatically generated from group.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.group.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.group == 'undefined') { aui.group = {}; }


aui.group.group = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-group' + ((opt_data.isSplit) ? ' aui-group-split' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.group.group.soyTemplateName = 'aui.group.group';
}


aui.group.item = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-item' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.group.item.soyTemplateName = 'aui.group.item';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/labels.soy' */
// This file was automatically generated from labels.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.labels.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.labels == 'undefined') { aui.labels = {}; }


aui.labels.label = function(opt_data, opt_ignored) {
  return '' + ((opt_data.url && opt_data.isCloseable == true) ? '<span' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-label aui-label-closeable aui-label-split' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><a class="aui-label-split-main" href="' + soy.$$escapeHtml(opt_data.url) + '">' + soy.$$escapeHtml(opt_data.text) + '</a><span class="aui-label-split-close" >' + aui.labels.closeIcon(opt_data) + '</span></span>' : '<' + soy.$$escapeHtml(opt_data.url ? 'a' : 'span') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-label' + ((opt_data.isCloseable) ? ' aui-label-closeable' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + ((opt_data.url) ? ' href="' + soy.$$escapeHtml(opt_data.url) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.text) + ((opt_data.isCloseable) ? aui.labels.closeIcon(opt_data) : '') + '</' + soy.$$escapeHtml(opt_data.url ? 'a' : 'span') + '>');
};
if (goog.DEBUG) {
  aui.labels.label.soyTemplateName = 'aui.labels.label';
}


aui.labels.closeIcon = function(opt_data, opt_ignored) {
  return '<span tabindex="0" class="aui-icon aui-icon-close"' + ((opt_data.hasTitle != false) ? ' title="' + aui.labels.closeIconText(opt_data) + '"' : '') + '>' + aui.labels.closeIconText(opt_data) + '</span>';
};
if (goog.DEBUG) {
  aui.labels.closeIcon.soyTemplateName = 'aui.labels.closeIcon';
}


aui.labels.closeIconText = function(opt_data, opt_ignored) {
  return '' + ((opt_data.closeIconText) ? soy.$$escapeHtml(opt_data.closeIconText) : '(' + soy.$$escapeHtml('Remove') + ' ' + soy.$$escapeHtml(opt_data.text) + ')');
};
if (goog.DEBUG) {
  aui.labels.closeIconText.soyTemplateName = 'aui.labels.closeIconText';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/message.soy' */
// This file was automatically generated from message.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.message.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.message == 'undefined') { aui.message = {}; }


aui.message.info = function(opt_data, opt_ignored) {
  return '' + aui.message.message(soy.$$augmentMap(opt_data, {type: 'info'}));
};
if (goog.DEBUG) {
  aui.message.info.soyTemplateName = 'aui.message.info';
}


aui.message.warning = function(opt_data, opt_ignored) {
  return '' + aui.message.message(soy.$$augmentMap(opt_data, {type: 'warning'}));
};
if (goog.DEBUG) {
  aui.message.warning.soyTemplateName = 'aui.message.warning';
}


aui.message.error = function(opt_data, opt_ignored) {
  return '' + aui.message.message(soy.$$augmentMap(opt_data, {type: 'error'}));
};
if (goog.DEBUG) {
  aui.message.error.soyTemplateName = 'aui.message.error';
}


aui.message.success = function(opt_data, opt_ignored) {
  return '' + aui.message.message(soy.$$augmentMap(opt_data, {type: 'success'}));
};
if (goog.DEBUG) {
  aui.message.success.soyTemplateName = 'aui.message.success';
}


aui.message.hint = function(opt_data, opt_ignored) {
  return '' + aui.message.message(soy.$$augmentMap(opt_data, {type: 'hint'}));
};
if (goog.DEBUG) {
  aui.message.hint.soyTemplateName = 'aui.message.hint';
}


aui.message.generic = function(opt_data, opt_ignored) {
  return '' + aui.message.message(soy.$$augmentMap(opt_data, {type: 'generic'}));
};
if (goog.DEBUG) {
  aui.message.generic.soyTemplateName = 'aui.message.generic';
}


aui.message.message = function(opt_data, opt_ignored) {
  var output = '';
  var theTagName__soy21 = opt_data.tagName ? opt_data.tagName : 'div';
  var theType__soy22 = opt_data.type ? opt_data.type : 'generic';
  output += '<' + soy.$$escapeHtml(theTagName__soy21) + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-message aui-message-' + soy.$$escapeHtml(theType__soy22) + ' ' + soy.$$escapeHtml(theType__soy22) + ((opt_data.isCloseable) ? ' closeable' : '') + ((opt_data.isShadowed) ? ' shadowed' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.titleContent) ? '<p class="title"><strong>' + soy.$$filterNoAutoescape(opt_data.titleContent) + '</strong></p>' : '') + soy.$$filterNoAutoescape(opt_data.content) + ((opt_data.isCloseable) ? '<span class="aui-icon icon-close" role="button" tabindex="0"></span>' : '') + '</' + soy.$$escapeHtml(theTagName__soy21) + '>';
  return output;
};
if (goog.DEBUG) {
  aui.message.message.soyTemplateName = 'aui.message.message';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/page.soy' */
// This file was automatically generated from page.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.page.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.page == 'undefined') { aui.page = {}; }


aui.page.document = function(opt_data, opt_ignored, opt_ijData) {
  return '<!DOCTYPE html><html lang="' + soy.$$escapeHtml(opt_ijData.language ? opt_ijData.language : 'en') + '">' + aui.page.documentHTMLContent(opt_data, null, opt_ijData) + '</html>';
};
if (goog.DEBUG) {
  aui.page.document.soyTemplateName = 'aui.page.document';
}


aui.page.documentHTMLContent = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var thePageSize__soy9 = opt_data.pageSize ? opt_data.pageSize : opt_data.focusedPageSize ? opt_data.focusedPageSize : 'xlarge';
  output += '<head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>' + soy.$$escapeHtml(opt_data.windowTitle) + '</title>' + ((opt_data.headContent) ? soy.$$filterNoAutoescape(opt_data.headContent) : '') + '</head><body' + ((opt_data.pageType) ? (opt_data.pageType == 'generic') ? (opt_data.extraClasses) ? ' class="' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' : '' : (opt_data.pageType == 'focused') ? ' class="aui-page-focused aui-page-focused-' + soy.$$escapeHtml(thePageSize__soy9) + ' aui-page-size-' + soy.$$escapeHtml(thePageSize__soy9) + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' : (opt_data.pageType == 'notification') ? ' class="aui-page-notification aui-page-size-' + soy.$$escapeHtml(thePageSize__soy9) + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' : (opt_data.pageType == 'sidebar') ? ' class="aui-page-sidebar' + soy.$$escapeHtml(opt_data.sidebarState ? ' aui-sidebar-' + opt_data.sidebarState : '') + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' : ' class="aui-page-' + soy.$$escapeHtml(opt_data.pageType) + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' : ' class="' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</body>';
  return output;
};
if (goog.DEBUG) {
  aui.page.documentHTMLContent.soyTemplateName = 'aui.page.documentHTMLContent';
}


aui.page.page = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="page"><header id="header" role="banner">' + soy.$$filterNoAutoescape(opt_data.headerContent) + '</header><!-- #header --><section id="content" role="main">' + soy.$$filterNoAutoescape(opt_data.contentContent) + '</section><!-- #content --><footer id="footer" role="contentinfo">' + soy.$$filterNoAutoescape(opt_data.footerContent) + '</footer><!-- #footer --></div><!-- #page -->';
};
if (goog.DEBUG) {
  aui.page.page.soyTemplateName = 'aui.page.page';
}


aui.page.header = function(opt_data, opt_ignored, opt_ijData) {
  return ((opt_data.bannerContent) ? '<div class="aui-banner aui-banner-error" role="banner">' + soy.$$filterNoAutoescape(opt_data.bannerContent) + '</div>' : '') + '<nav' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-header aui-dropdown2-trigger-group' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + aui.renderExtraAttributes(opt_data, null, opt_ijData) + ' role="navigation"><div class="aui-header-inner">' + ((opt_data.headerBeforeContent) ? '<div class="aui-header-before">' + soy.$$filterNoAutoescape(opt_data.headerBeforeContent) + '</div>' : '') + '<div class="aui-header-primary"><h1 id="logo" class="aui-header-logo' + ((opt_data.headerLogoImageUrl) ? ' aui-header-logo-custom' : (opt_data.logo) ? ' aui-header-logo-' + soy.$$escapeHtml(opt_data.logo) : '') + '"><a href="' + soy.$$escapeHtml(opt_data.headerLink ? opt_data.headerLink : '/') + '">' + ((opt_data.headerLogoImageUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.headerLogoImageUrl) + '" alt="' + soy.$$escapeHtml(opt_data.headerLogoText) + '" />' : '<span class="aui-header-logo-device">' + soy.$$escapeHtml(opt_data.headerLogoText ? opt_data.headerLogoText : '') + '</span>') + ((opt_data.headerText) ? '<span class="aui-header-logo-text">' + soy.$$escapeHtml(opt_data.headerText) + '</span>' : '') + '</a></h1>' + ((opt_data.primaryNavContent) ? soy.$$filterNoAutoescape(opt_data.primaryNavContent) : '') + '</div>' + ((opt_data.secondaryNavContent) ? '<div class="aui-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryNavContent) + '</div>' : '') + ((opt_data.headerAfterContent) ? '<div class="aui-header-after">' + soy.$$filterNoAutoescape(opt_data.headerAfterContent) + '</div>' : '') + '</div><!-- .aui-header-inner--></nav><!-- .aui-header -->';
};
if (goog.DEBUG) {
  aui.page.header.soyTemplateName = 'aui.page.header';
}


aui.page.pagePanel = function(opt_data, opt_ignored, opt_ijData) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ' class="aui-page-panel' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '><div class="aui-page-panel-inner">' + soy.$$filterNoAutoescape(opt_data.content) + '</div><!-- .aui-page-panel-inner --></' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '><!-- .aui-page-panel -->';
};
if (goog.DEBUG) {
  aui.page.pagePanel.soyTemplateName = 'aui.page.pagePanel';
}


aui.page.pagePanelNav = function(opt_data, opt_ignored, opt_ijData) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ' class="aui-page-panel-nav' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '><!-- .aui-page-panel-nav -->';
};
if (goog.DEBUG) {
  aui.page.pagePanelNav.soyTemplateName = 'aui.page.pagePanelNav';
}


aui.page.pagePanelContent = function(opt_data, opt_ignored, opt_ijData) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ' class="aui-page-panel-content' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '><!-- .aui-page-panel-content -->';
};
if (goog.DEBUG) {
  aui.page.pagePanelContent.soyTemplateName = 'aui.page.pagePanelContent';
}


aui.page.pagePanelSidebar = function(opt_data, opt_ignored, opt_ijData) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside') + ' class="aui-page-panel-sidebar' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'aside') + '><!-- .aui-page-panel-sidebar -->';
};
if (goog.DEBUG) {
  aui.page.pagePanelSidebar.soyTemplateName = 'aui.page.pagePanelSidebar';
}


aui.page.pagePanelItem = function(opt_data, opt_ignored, opt_ijData) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ' class="aui-page-panel-item' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '><!-- .aui-page-panel-item -->';
};
if (goog.DEBUG) {
  aui.page.pagePanelItem.soyTemplateName = 'aui.page.pagePanelItem';
}


aui.page.pageHeader = function(opt_data, opt_ignored, opt_ijData) {
  return '<header class="aui-page-header' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '><div class="aui-page-header-inner">' + soy.$$filterNoAutoescape(opt_data.content) + '</div><!-- .aui-page-header-inner --></header><!-- .aui-page-header -->';
};
if (goog.DEBUG) {
  aui.page.pageHeader.soyTemplateName = 'aui.page.pageHeader';
}


aui.page.pageHeaderImage = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="aui-page-header-image' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div><!-- .aui-page-header-image -->';
};
if (goog.DEBUG) {
  aui.page.pageHeaderImage.soyTemplateName = 'aui.page.pageHeaderImage';
}


aui.page.pageHeaderMain = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="aui-page-header-main' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div><!-- .aui-page-header-main -->';
};
if (goog.DEBUG) {
  aui.page.pageHeaderMain.soyTemplateName = 'aui.page.pageHeaderMain';
}


aui.page.pageHeaderActions = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="aui-page-header-actions' + aui.renderExtraClasses(opt_data, null, opt_ijData) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + aui.renderExtraAttributes(opt_data, null, opt_ijData) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div><!-- .aui-page-header-actions -->';
};
if (goog.DEBUG) {
  aui.page.pageHeaderActions.soyTemplateName = 'aui.page.pageHeaderActions';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/panel.soy' */
// This file was automatically generated from panel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.
 */

if (typeof aui == 'undefined') { var aui = {}; }


aui.panel = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-panel' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.panel.soyTemplateName = 'aui.panel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/table.soy' */
// This file was automatically generated from table.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.
 */

if (typeof aui == 'undefined') { var aui = {}; }


aui.table = function(opt_data, opt_ignored) {
  return '<table' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.columnsContent) ? soy.$$filterNoAutoescape(opt_data.columnsContent) : '') + ((opt_data.captionContent) ? '<caption>' + soy.$$filterNoAutoescape(opt_data.captionContent) + '</caption>' : '') + ((opt_data.theadContent) ? '<thead>' + soy.$$filterNoAutoescape(opt_data.theadContent) + '</thead>' : '') + ((opt_data.tfootContent) ? '<tfoot>' + soy.$$filterNoAutoescape(opt_data.tfootContent) + '</tfoot>' : '') + ((! opt_data.contentIncludesTbody) ? '<tbody>' : '') + soy.$$filterNoAutoescape(opt_data.content) + ((! opt_data.contentIncludesTbody) ? '</tbody>' : '') + '</table>';
};
if (goog.DEBUG) {
  aui.table.soyTemplateName = 'aui.table';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/tabs.soy' */
// This file was automatically generated from tabs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.
 */

if (typeof aui == 'undefined') { var aui = {}; }


aui.tabs = function(opt_data, opt_ignored) {
  var output = '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-tabs ' + soy.$$escapeHtml(opt_data.isVertical ? 'vertical-tabs' : 'horizontal-tabs') + ((opt_data.isDisabled) ? ' aui-tabs-disabled' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><ul class="tabs-menu">';
  var itemList19 = opt_data.menuItems;
  var itemListLen19 = itemList19.length;
  for (var itemIndex19 = 0; itemIndex19 < itemListLen19; itemIndex19++) {
    var itemData19 = itemList19[itemIndex19];
    output += aui.tabMenuItem(itemData19);
  }
  output += '</ul>' + soy.$$filterNoAutoescape(opt_data.paneContent) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
  return output;
};
if (goog.DEBUG) {
  aui.tabs.soyTemplateName = 'aui.tabs';
}


aui.tabMenuItem = function(opt_data, opt_ignored) {
  return '<li' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="menu-item' + ((opt_data.isActive) ? ' active-tab' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><a href="' + soy.$$escapeHtml(opt_data.url) + '">' + soy.$$escapeHtml(opt_data.text) + '</a></li>';
};
if (goog.DEBUG) {
  aui.tabMenuItem.soyTemplateName = 'aui.tabMenuItem';
}


aui.tabPane = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="tabs-pane' + ((opt_data.isActive) ? ' active-pane' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.tabPane.soyTemplateName = 'aui.tabPane';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/trigger.soy' */
// This file was automatically generated from trigger.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.trigger.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.trigger == 'undefined') { aui.trigger = {}; }


aui.trigger.trigger = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '" ' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '" aria-controls="' + soy.$$escapeHtml(opt_data.menu.id) + '" aria-haspopup="true" role="button"' + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '') + (((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex || (! opt_data.extraAttributes.href || ! opt_data.extraAttributes.tabindex))) ? ' tabindex="0"' : '') + ' data-aui-trigger' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + ((! (opt_data.showIcon == false)) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClasses ? opt_data.iconClasses : 'aui-icon-dropdown') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) : '') + '</span>' : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a') + '>';
};
if (goog.DEBUG) {
  aui.trigger.trigger.soyTemplateName = 'aui.trigger.trigger';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/toolbar.soy' */
// This file was automatically generated from toolbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.toolbar.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar == 'undefined') { aui.toolbar = {}; }


aui.toolbar.toolbar = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-toolbar' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.toolbar.toolbar.soyTemplateName = 'aui.toolbar.toolbar';
}


aui.toolbar.split = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="toolbar-split toolbar-split-' + soy.$$escapeHtml(opt_data.split) + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.toolbar.split.soyTemplateName = 'aui.toolbar.split';
}


aui.toolbar.group = function(opt_data, opt_ignored) {
  return '<ul' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="toolbar-group' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</ul>';
};
if (goog.DEBUG) {
  aui.toolbar.group.soyTemplateName = 'aui.toolbar.group';
}


aui.toolbar.item = function(opt_data, opt_ignored) {
  return '<li ' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="toolbar-item' + ((opt_data.isPrimary) ? ' primary' : '') + ((opt_data.isActive) ? ' active' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</li>';
};
if (goog.DEBUG) {
  aui.toolbar.item.soyTemplateName = 'aui.toolbar.item';
}


aui.toolbar.trigger = function(opt_data, opt_ignored) {
  return '<a' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="toolbar-trigger' + aui.renderExtraClasses(opt_data) + '" href="' + soy.$$escapeHtml(opt_data.url ? opt_data.url : '#') + '"' + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</a>';
};
if (goog.DEBUG) {
  aui.toolbar.trigger.soyTemplateName = 'aui.toolbar.trigger';
}


aui.toolbar.button = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.toolbar.item({isActive: opt_data.isActive, isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.toolbar.trigger({url: opt_data.url, title: opt_data.title, content: '' + ((opt_data.iconClass) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span>' : '') + ((opt_data.text) ? '<span class="trigger-text">' + soy.$$escapeHtml(opt_data.text) + '</span>' : '')})});
};
if (goog.DEBUG) {
  aui.toolbar.button.soyTemplateName = 'aui.toolbar.button';
}


aui.toolbar.link = function(opt_data, opt_ignored) {
  return '' + aui.toolbar.item({id: opt_data.id, extraClasses: 'toolbar-item-link' + aui.renderExtraClasses(opt_data), extraAttributes: opt_data.extraAttributes, content: '' + aui.toolbar.trigger({url: opt_data.url, content: '' + soy.$$escapeHtml(opt_data.text)})});
};
if (goog.DEBUG) {
  aui.toolbar.link.soyTemplateName = 'aui.toolbar.link';
}


aui.toolbar.dropdownInternal = function(opt_data, opt_ignored) {
  return '' + aui.toolbar.item({isPrimary: opt_data.isPrimary, id: opt_data.id, extraClasses: '' + soy.$$filterNoAutoescape(opt_data.itemClass) + aui.renderExtraClasses(opt_data), extraAttributes: opt_data.extraAttributes, content: '' + ((opt_data.splitButtonContent) ? soy.$$filterNoAutoescape(opt_data.splitButtonContent) : '') + aui.dropdown.parent({content: '' + aui.dropdown.trigger({extraClasses: 'toolbar-trigger', accessibilityText: opt_data.text}) + aui.dropdown.menu({content: opt_data.dropdownItemsContent})})});
};
if (goog.DEBUG) {
  aui.toolbar.dropdownInternal.soyTemplateName = 'aui.toolbar.dropdownInternal';
}


aui.toolbar.dropdown = function(opt_data, opt_ignored) {
  return '' + aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-dropdown', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, text: opt_data.text, dropdownItemsContent: opt_data.dropdownItemsContent});
};
if (goog.DEBUG) {
  aui.toolbar.dropdown.soyTemplateName = 'aui.toolbar.dropdown';
}


aui.toolbar.splitButton = function(opt_data, opt_ignored) {
  return '' + aui.toolbar.dropdownInternal({isPrimary: opt_data.isPrimary, id: opt_data.id, itemClass: 'toolbar-splitbutton', extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, dropdownItemsContent: opt_data.dropdownItemsContent, splitButtonContent: '' + aui.toolbar.trigger({url: opt_data.url, content: '' + soy.$$escapeHtml(opt_data.text)})});
};
if (goog.DEBUG) {
  aui.toolbar.splitButton.soyTemplateName = 'aui.toolbar.splitButton';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/toolbar2.soy' */
// This file was automatically generated from toolbar2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.toolbar2.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.toolbar2 == 'undefined') { aui.toolbar2 = {}; }


aui.toolbar2.toolbar2 = function(opt_data, opt_ignored) {
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-toolbar2' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + ' role="toolbar"><div class="aui-toolbar2-inner">' + soy.$$filterNoAutoescape(opt_data.content) + '</div></div>';
};
if (goog.DEBUG) {
  aui.toolbar2.toolbar2.soyTemplateName = 'aui.toolbar2.toolbar2';
}


aui.toolbar2.item = function(opt_data, opt_ignored) {
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-toolbar2-' + soy.$$escapeHtml(opt_data.item) + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  aui.toolbar2.item.soyTemplateName = 'aui.toolbar2.item';
}


aui.toolbar2.group = function(opt_data, opt_ignored) {
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-toolbar2-group' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div>';
};
if (goog.DEBUG) {
  aui.toolbar2.group.soyTemplateName = 'aui.toolbar2.group';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/progress-tracker.soy' */
// This file was automatically generated from progress-tracker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.progressTracker.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.progressTracker == 'undefined') { aui.progressTracker = {}; }


aui.progressTracker.progressTracker = function(opt_data, opt_ignored) {
  var output = '<ol' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-progress-tracker' + ((opt_data.isInverted) ? ' aui-progress-tracker-inverted' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>';
  var param18 = '';
  var currentStepList19 = opt_data.steps;
  var currentStepListLen19 = currentStepList19.length;
  for (var currentStepIndex19 = 0; currentStepIndex19 < currentStepListLen19; currentStepIndex19++) {
    var currentStepData19 = currentStepList19[currentStepIndex19];
    if (currentStepData19['isCurrent']) {
      var stepList22 = opt_data.steps;
      var stepListLen22 = stepList22.length;
      for (var stepIndex22 = 0; stepIndex22 < stepListLen22; stepIndex22++) {
        var stepData22 = stepList22[stepIndex22];
        param18 += aui.progressTracker.step(soy.$$augmentMap(stepData22, {width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: stepIndex22 < currentStepIndex19 ? stepData22['href'] : null}));
      }
    }
  }
  output += aui.progressTracker.content({steps: opt_data.steps, content: param18});
  output += '</ol>';
  return output;
};
if (goog.DEBUG) {
  aui.progressTracker.progressTracker.soyTemplateName = 'aui.progressTracker.progressTracker';
}


aui.progressTracker.content = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.content != '') {
    output += soy.$$filterNoAutoescape(opt_data.content);
  } else {
    var stepList36 = opt_data.steps;
    var stepListLen36 = stepList36.length;
    for (var stepIndex36 = 0; stepIndex36 < stepListLen36; stepIndex36++) {
      var stepData36 = stepList36[stepIndex36];
      output += aui.progressTracker.step(soy.$$augmentMap(stepData36, {isCurrent: stepIndex36 == 0, width: Math.round(100 / opt_data.steps.length * 10000) / 10000, href: null}));
    }
  }
  return output;
};
if (goog.DEBUG) {
  aui.progressTracker.content.soyTemplateName = 'aui.progressTracker.content';
}


aui.progressTracker.step = function(opt_data, opt_ignored) {
  return '<li' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-progress-tracker-step' + ((opt_data.isCurrent) ? ' aui-progress-tracker-step-current' : '') + aui.renderExtraClasses(opt_data) + '" style="width: ' + soy.$$escapeHtml(opt_data.width) + '%;"' + aui.renderExtraAttributes(opt_data) + '><' + soy.$$escapeHtml(opt_data.href ? 'a' : 'span') + ((opt_data.href) ? ' href="' + soy.$$escapeHtml(opt_data.href) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.text) + '</' + soy.$$escapeHtml(opt_data.href ? 'a' : 'span') + '></li>';
};
if (goog.DEBUG) {
  aui.progressTracker.step.soyTemplateName = 'aui.progressTracker.step';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/expander.soy' */
// This file was automatically generated from expander.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.expander.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.expander == 'undefined') { aui.expander = {}; }


aui.expander.content = function(opt_data, opt_ignored) {
  return '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="aui-expander-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + ((opt_data.initiallyExpanded) ? ' aria-expanded="' + soy.$$escapeHtml(opt_data.initiallyExpanded) + '"' : '') + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.expander.content.soyTemplateName = 'aui.expander.content';
}


aui.expander.trigger = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tag ? opt_data.tag : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.replaceText) ? ' data-replace-text="' + soy.$$escapeHtml(opt_data.replaceText) + '"' : '') + ((opt_data.replaceSelector) ? ' data-replace-selector="' + soy.$$escapeHtml(opt_data.replaceSelector) + '"' : '') + ' class="aui-expander-trigger' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + ' aria-controls="' + soy.$$escapeHtml(opt_data.contentId) + '"' + ((opt_data.collapsible) ? ' data-collapsible="' + soy.$$escapeHtml(opt_data.collapsible) + '"' : '') + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tag ? opt_data.tag : 'div') + '>';
};
if (goog.DEBUG) {
  aui.expander.trigger.soyTemplateName = 'aui.expander.trigger';
}


aui.expander.revealText = function(opt_data, opt_ignored) {
  return '' + aui.expander.content({id: opt_data.contentId, content: '' + soy.$$escapeHtml(opt_data.contentContent) + aui.expander.trigger({id: opt_data.triggerId, contentId: opt_data.contentId, tag: 'a', content: '<span class=\'reveal-text-trigger-text\'>Show more</span>', replaceSelector: '.reveal-text-trigger-text', replaceText: 'Show less', extraAttributes: opt_data.triggerExtraAttributes, extraClasses: ((opt_data.triggerExtraClasses) ? soy.$$escapeHtml(opt_data.triggerExtraClasses) + '  ' : '') + ' aui-expander-reveal-text'}), extraAttributes: opt_data.contentExtraAttributes, extraClasses: opt_data.contentExtraClasses});
};
if (goog.DEBUG) {
  aui.expander.revealText.soyTemplateName = 'aui.expander.revealText';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/avatar.soy' */
// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.avatar.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.avatar == 'undefined') { aui.avatar = {}; }


aui.avatar.avatar = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-avatar aui-avatar-' + soy.$$escapeHtml(opt_data.size) + soy.$$escapeHtml(opt_data.isProject ? ' aui-avatar-project' : '') + soy.$$escapeHtml(opt_data.badgeContent ? ' aui-avatar-badged' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><span class="aui-avatar-inner"><img src="' + soy.$$escapeHtml(opt_data.avatarImageUrl) + '"' + ((opt_data.accessibilityText) ? ' alt="' + soy.$$escapeHtml(opt_data.accessibilityText) + '"' : '') + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.imageClasses) ? ' class="' + soy.$$escapeHtml(opt_data.imageClasses) + '"' : '') + ' /></span>' + ((opt_data.badgeContent) ? soy.$$filterNoAutoescape(opt_data.badgeContent) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + '>';
};
if (goog.DEBUG) {
  aui.avatar.avatar.soyTemplateName = 'aui.avatar.avatar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.icons.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.icons == 'undefined') { aui.icons = {}; }


aui.icons.icon = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-icon' + ((opt_data.useIconFont) ? ' aui-icon-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'small') : '') + ' aui' + soy.$$escapeHtml(opt_data.useIconFont ? '-iconfont' : '-icon') + soy.$$escapeHtml(opt_data.iconFontSet ? '-' + opt_data.iconFontSet : '') + '-' + soy.$$escapeHtml(opt_data.icon) + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.accessibilityText) ? soy.$$escapeHtml(opt_data.accessibilityText) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + '>';
};
if (goog.DEBUG) {
  aui.icons.icon.soyTemplateName = 'aui.icons.icon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/lozenges.soy' */
// This file was automatically generated from lozenges.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.lozenges.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.lozenges == 'undefined') { aui.lozenges = {}; }


aui.lozenges.lozenge = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ' class="aui-lozenge' + soy.$$escapeHtml(opt_data.type ? ' aui-lozenge-' + opt_data.type : '') + soy.$$escapeHtml(opt_data.isSubtle ? ' aui-lozenge-subtle' : '') + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.maxLength) ? soy.$$truncate(soy.$$escapeHtml(opt_data.text), opt_data.maxLength, true) : soy.$$escapeHtml(opt_data.text)) + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'span') + '>';
};
if (goog.DEBUG) {
  aui.lozenges.lozenge.soyTemplateName = 'aui.lozenges.lozenge';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-soy-templates', location = 'src/soy/sidebar.soy' */
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.sidebar.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.sidebar == 'undefined') { aui.sidebar = {}; }


aui.sidebar.sidebar = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.state) ? ' aria-expanded="' + ((opt_data.state == 'collapsed') ? 'false' : 'true') + '"' : '') + ' class="aui-sidebar ' + ((opt_data.isAnimated) ? 'aui-is-animated' : '') + aui.renderExtraClasses(opt_data) + '" ' + ((opt_data.isResponsive == false) ? 'data-aui-responsive="false"' : '') + aui.renderExtraAttributes(opt_data) + '><div class="aui-sidebar-wrapper"><div class="aui-sidebar-body">' + soy.$$filterNoAutoescape(opt_data.headerContent) + soy.$$filterNoAutoescape(opt_data.content) + '</div><div class="aui-sidebar-footer">' + ((opt_data.footerContent) ? soy.$$filterNoAutoescape(opt_data.footerContent) : (opt_data.settingsButtonUrl && opt_data.settingsText) ? '<a href="' + soy.$$escapeHtml(opt_data.settingsButtonUrl) + '" class="aui-button aui-button-subtle aui-sidebar-settings-button' + ((opt_data.isSettingsButtonSelected) ? ' aui-sidebar-settings-selected' : '') + '" data-tooltip="' + soy.$$escapeHtml(opt_data.settingsTooltip ? opt_data.settingsTooltip : opt_data.settingsText) + '"><span class="aui-icon aui-icon-small aui-iconfont-configure"></span><span class="aui-button-label">' + soy.$$escapeHtml(opt_data.settingsText) + '</span></a>' : '') + '<a class="aui-button aui-button-subtle aui-sidebar-toggle aui-sidebar-footer-tipsy" data-tooltip="' + soy.$$escapeHtml('Expand sidebar ( [ )') + '" href="#"><span class="aui-icon aui-icon-small"></span></a></div>' + ((opt_data.isResizable) ? '<div class="aui-sidebar-handle"></div>' : '') + '</div></' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'div') + '>';
};
if (goog.DEBUG) {
  aui.sidebar.sidebar.soyTemplateName = 'aui.sidebar.sidebar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-class-names', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/class-names.js' */
("undefined"===typeof window?global:window).__6cb6ba98d240ad8a464e632755835025=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={NO_VALUE:"aui-restfultable-editable-no-value",NO_ENTRIES:"aui-restfultable-no-entires",RESTFUL_TABLE:"aui-restfultable",ROW:"aui-restfultable-row",READ_ONLY:"aui-restfultable-readonly",ACTIVE:"aui-restfultable-active",ALLOW_HOVER:"aui-restfultable-allowhover",FOCUSED:"aui-restfultable-focused",MOVEABLE:"aui-restfultable-movable",
DISABLED:"aui-restfultable-disabled",SUBMIT:"aui-restfultable-submit",CANCEL:"aui-restfultable-cancel",EDIT_ROW:"aui-restfultable-editrow",CREATE:"aui-restfultable-create",DRAG_HANDLE:"aui-restfultable-draghandle",ORDER:"aui-restfultable-order",EDITABLE:"aui-restfultable-editable",ERROR:"error",DELETE:"aui-restfultable-delete",LOADING:"loading"};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-custom-create-view', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/custom-create-view.js' */
("undefined"===typeof window?global:window).__32dbabf183ece2a8f2812e96fdcf2494=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=__a0f8accf3e15b29165e7a143e435af91;a.default=(b&&b.__esModule?b:{"default":b}).default.View;return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-custom-edit-view', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/custom-edit-view.js' */
("undefined"===typeof window?global:window).__1c6e1281c2c05202a8e43057ade05a58=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=__a0f8accf3e15b29165e7a143e435af91;a.default=(b&&b.__esModule?b:{"default":b}).default.View;return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-custom-read-view', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/custom-read-view.js' */
("undefined"===typeof window?global:window).__5034e307049b45a668379b8f49ea940f=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=__a0f8accf3e15b29165e7a143e435af91;a.default=(b&&b.__esModule?b:{"default":b}).default.View;return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-data-keys', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/data-keys.js' */
("undefined"===typeof window?global:window).__92c78d58c645de42693045d4d3a79c1c=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={ENABLED_SUBMIT:"enabledSubmit",ROW_VIEW:"RestfulTable_Row_View"};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-serializetoobject', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/serializetoobject.js' */
("undefined"===typeof window?global:window).__19de5a4e8be2c6def66eba17e3819f1c=function(){jQuery.fn.serializeObject=function(){var a={};this.find(":input:not(:button):not(:submit):not(:radio):not('select[multiple]')").each(function(){""!==this.name&&(null===this.value&&(this.value=""),a[this.name]=this.value.match(/^(tru|fals)e$/i)?"true"==this.value.toLowerCase():this.value)});this.find("input:radio:checked").each(function(){a[this.name]=this.value});this.find("select[multiple]").each(function(){var c=
jQuery(this),b=c.val();a[this.name]=c.data("aui-ss")?b?b[0]:"":null!==b?b:[]});return a};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-events', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/events.js' */
("undefined"===typeof window?global:window).__a8a27edcadbb3291524b9ea43b8af4ce=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={REORDER_SUCCESS:"RestfulTable.reorderSuccess",ROW_ADDED:"RestfulTable.rowAdded",ROW_REMOVED:"RestfulTable.rowRemoved",EDIT_ROW:"RestfulTable.switchedToEditMode",SERVER_ERROR:"RestfulTable.serverError",CREATED:"created",UPDATED:"updated",FOCUS:"focus",BLUR:"blur",SUBMIT:"submit",SAVE:"save",MODAL:"modal",MODELESS:"modeless",CANCEL:"cancel",
CONTENT_REFRESHED:"contentRefreshed",RENDER:"render",FINISHED_EDITING:"finishedEditing",VALIDATION_ERROR:"validationError",SUBMIT_STARTED:"submitStarted",SUBMIT_FINISHED:"submitFinished",INITIALIZED:"initialized",ROW_INITIALIZED:"rowInitialized",ROW_EDIT:"editRow"};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-throbber', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/throbber.js' */
("undefined"===typeof window?global:window).__efbadfd39f308c3a3e14a83c069d73fd=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(){return'<span class="aui-restfultable-throbber"></span>'};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-edit-row', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/edit-row.js' */
("undefined"===typeof window?global:window).__6f6f93a6db384de956b5a3dcf20cd8cf=function(){function f(a){return a&&a.__esModule?a:{"default":a}}var g={};"use strict";Object.defineProperty(g,"__esModule",{value:!0});var k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},c=f(__02fa0d2334b5d2f9701871403ba9d89a);__19de5a4e8be2c6def66eba17e3819f1c;var l=
f(__a0f8accf3e15b29165e7a143e435af91),m=f(__6cb6ba98d240ad8a464e632755835025),n=f(__92c78d58c645de42693045d4d3a79c1c),o=f(__a8a27edcadbb3291524b9ea43b8af4ce);f(__ff21a71b857b101095156bf4ff8b27ac);var p=f(__efbadfd39f308c3a3e14a83c069d73fd),j=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");g.default=l.default.View.extend({tagName:"tr",events:{focusin:"_focus",click:"_focus",keyup:"_handleKeyUpEvent"},initialize:function(a){this.$el=(0,c.default)(this.el);this._event=o.default;this.classNames=
m.default;this.dataKeys=n.default;this.columns=a.columns;this.isCreateRow=a.isCreateRow;this.allowReorder=a.allowReorder;this.events["click ."+this.classNames.CANCEL]="_cancel";this.delegateEvents();a.isUpdateMode?this.isUpdateMode=!0:(this._modelClass=a.model,this.model=new this._modelClass);this.fieldFocusSelector=a.fieldFocusSelector;this.bind(this._event.CANCEL,function(){this.disabled=true}).bind(this._event.SAVE,function(a){this.disabled||this.submit(a)}).bind(this._event.FOCUS,function(a){this.focus(a)}).bind(this._event.BLUR,
function(){this.$el.removeClass(this.classNames.FOCUSED);this.disable()}).bind(this._event.SUBMIT_STARTED,function(){this._submitStarted()}).bind(this._event.SUBMIT_FINISHED,function(){this._submitFinished()})},defaultColumnRenderer:function(a){if(!1!==a.allowEdit)return(0,c.default)("<input type='text' />").addClass("text").attr({name:a.name,value:a.value});if(a.value)return document.createTextNode(a.value)},renderDragHandle:function(){return'<span class="'+this.classNames.DRAG_HANDLE+'"></span></td>'},
_handleKeyUpEvent:function(a){27===a.keyCode&&this.trigger(this._event.CANCEL)},_cancel:function(a){this.trigger(this._event.CANCEL);a.preventDefault();return this},_submitStarted:function(){this.submitting=!0;this.showLoading().disable().delegateEvents({});return this},_submitFinished:function(){this.submitting=!1;this.hideLoading().enable().delegateEvents(this.events);return this},_focus:function(a){this.hasFocus()||this.trigger(this._event.FOCUS,a.target.name);return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},
focus:function(a){this.enable();a?a=this.$el.find(this.fieldFocusSelector(a)):(a=this.$el.find(this.classNames.ERROR+":first"),a=0===a.length?this.$el.find(":input:text:first"):a.parent().find(":input"));this.$el.addClass(this.classNames.FOCUSED);a.focus().trigger("select");return this},disable:function(){var a,b;j&&(b=this.$el.find(":submit"),b.length&&(a=(0,c.default)("<input type='submit' class='"+this.classNames.SUBMIT+"' />").addClass(b.attr("class")).val(b.val()).data(this.dataKeys.ENABLED_SUBMIT,
b),b.replaceWith(a)));this.$el.addClass(this.classNames.DISABLED).find(":submit").attr("disabled","disabled");return this},enable:function(){var a,b;j&&(a=this.$el.find(this.classNames.SUBMIT),(b=a.data(this.dataKeys.ENABLED_SUBMIT))&&a.length&&a.replaceWith(b));this.$el.removeClass(this.classNames.DISABLED).find(":submit").removeAttr("disabled");return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);
return this},hasUpdates:function(){return!!this.mapSubmitParams(this.serializeObject())},serializeObject:function(){var a=this.$el;return a.serializeObject?a.serializeObject():a.serialize()},mapSubmitParams:function(a){return this.model.changedAttributes(a)},submit:function(a){var b=this,h;document.activeElement!==window&&(0,c.default)(document.activeElement).blur();if(this.isUpdateMode){if(h=this.mapSubmitParams(this.serializeObject()),!h)return b.trigger(b._event.CANCEL)}else this.model.clear(),
h=this.mapSubmitParams(this.serializeObject());this.trigger(this._event.SUBMIT_STARTED);this.model.save(h,{success:function(){b.isUpdateMode?b.trigger(b._event.UPDATED,b.model,a):(b.trigger(b._event.CREATED,b.model.toJSON()),b.model=new b._modelClass,b.render({errors:{},values:{}}),b.trigger(b._event.FOCUS));b.trigger(b._event.SUBMIT_FINISHED)},error:function(a,c,h){400===h.status&&(b.renderErrors(c.errors),b.trigger(b._event.VALIDATION_ERROR,c.errors));b.trigger(b._event.SUBMIT_FINISHED)},silent:!0});
return this},renderError:function(a,b){return(0,c.default)("<div />").attr("data-field",a).addClass(this.classNames.ERROR).text(b)},renderErrors:function(a){var b=this;this.$("."+this.classNames.ERROR).remove();a&&c.default.each(a,function(a,c){b.$el.find("[name='"+a+"']").closest("td").append(b.renderError(a,c))});return this},render:function(a){var b=this;this.$el.empty();this.allowReorder&&(0,c.default)('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(b.$el);
c.default.each(this.columns,function(f,d){var e,i;e=a.values[d.id];var g=[{name:d.id,value:e,allowEdit:d.allowEdit},a.values,b.model];e&&b.$el.attr("data-"+d.id,e);e=b.isCreateRow&&d.createView?(new d.createView({model:b.model})).render(g[0]):d.editView?(new d.editView({model:b.model})).render(g[0]):b.defaultColumnRenderer.apply(b,g);i=(0,c.default)("<td />");"object"===("undefined"===typeof e?"undefined":k(e))&&e.done?e.done(function(a){i.append(a)}):i.append(e);d.styleClass&&i.addClass(d.styleClass);
i.appendTo(b.$el)});this.$el.append(this.renderOperations(a.update,a.values)).addClass(this.classNames.ROW+" "+this.classNames.EDIT_ROW);this.trigger(this._event.RENDER,this.$el,a.values);this.$el.trigger(this._event.CONTENT_REFRESHED,[this.$el]);return this},renderOperations:function(a){var b=(0,c.default)('<td class="aui-restfultable-operations" />');a?b.append((0,c.default)('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Update"})).append((0,
c.default)('<a class="aui-button aui-button-link" href="#" />').addClass(this.classNames.CANCEL).text("Cancel").attr({accesskey:this.cancelAccessKey})):b.append((0,c.default)('<input class="aui-button" type="submit" />').attr({accesskey:this.submitAccessKey,value:"Add"}));return b.add((0,c.default)('<td class="aui-restfultable-status" />').append((0,p.default)()))}});return g=g["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-events', location = 'node_modules/@atlassian/aui/src/js/aui/events.js' */
("undefined"===typeof window?global:window).__bb9149f2450e3877631316cdb451280f=function(){function d(a,b){h.trigger(a,b)}function f(a,b){h.bind(a,b)}function g(a,b,c){(0,i.default)(b).trigger(a,c);d(a,c);b.id&&d(b.id+"-"+a,c)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.triggerEvtForInst=b.triggerEvt=b.bindEvt=void 0;var a=__02fa0d2334b5d2f9701871403ba9d89a,i=a&&a.__esModule?a:{"default":a},c;if((a=__9ea35e3451360b72ebe8cb8006239936)&&a.__esModule)c=a;else{var e={};if(null!=
a)for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);e.default=a;c=e}var a=(a=__fb27ffae84b96c14bf339e62cefcf116)&&a.__esModule?a:{"default":a},e=document||{},h=(0,i.default)(e);b.bindEvt=f=c.fn(f,"bindEvt",{sinceVersion:"5.8.0"});b.triggerEvt=d=c.fn(d,"triggerEvt",{sinceVersion:"5.8.0"});b.triggerEvtForInst=g=c.fn(g,"triggerEvtForInst",{sinceVersion:"5.8.0"});(0,a.default)("bindEvt",f);(0,a.default)("triggerEvt",d);(0,a.default)("triggerEvtForInst",g);b.bindEvt=f;b.triggerEvt=d;b.triggerEvtForInst=
g;return b}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-entry-model', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/entry-model.js' */
("undefined"===typeof window?global:window).__a957adf541e8046f4ec7d811fa0eec56=function(){function f(a){return a&&a.__esModule?a:{"default":a}}var i={};"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g=f(__02fa0d2334b5d2f9701871403ba9d89a),m=__bb9149f2450e3877631316cdb451280f,
j=f(__17253d01a5dbb7811399698870024390),h=f(__a0f8accf3e15b29165e7a143e435af91),n=f(__a8a27edcadbb3291524b9ea43b8af4ce),k=h.default.Model.extend({sync:function(a,b,d){var e=this,c=d.error;d.error=function(a){e._serverErrorHandler(a,this);c&&c.apply(this,arguments)};return h.default.sync.apply(h.default,arguments)},save:function(a,b){var b=b||{},d=this,e,c=b.error,f=b.success;b.error=function(a,b){var e=g.default.parseJSON(b.responseText||b.data);c&&c.call(d,d,e,b)};this.isNew()?h.default.Model.prototype.save.call(this,
a,b):a&&(e=k.extend({url:this.url()}),e=new e({id:this.id}),e.save=h.default.Model.prototype.save,b.success=function(a,b){d.clear().set(a.toJSON());f&&f.call(d,d,b)},e.save(a,b))},destroy:function(a){var a=a||{},b=this,d=this.url(),e;a.data&&(e=g.default.param(a.data));""!==e&&(d=d+"?"+e);g.default.ajax({url:d,type:"DELETE",dataType:"json",contentType:"application/json",success:function(c){b.collection&&b.collection.remove(b);a.success&&a.success.call(b,c)},error:function(c){b._serverErrorHandler(c,
this);a.error&&a.error.call(b,c)}});return this},changedAttributes:function(a){var b={},d=this.toJSON();g.default.each(a,function(a,c){d[a]?d[a]&&d[a]!==c&&("object"===("undefined"===typeof c?"undefined":l(c))?j.default.isEqual(c,d[a])||(b[a]=c):b[a]=c):"string"===typeof c?""!==g.default.trim(c)&&(b[a]=c):g.default.isArray(c)?0!==c.length&&(b[a]=c):b[a]=c});if(!j.default.isEmpty(b))return this.addExpand(b),b},addExpand:function(){},_serverErrorHandler:function(a,b){var d;400!==a.status&&(d=g.default.parseJSON(a.responseText||
a.data),(0,m.triggerEvtForInst)(n.default.SERVER_ERROR,this,[d,a,b]))},fetch:function(a){a=a||{};this.clear();h.default.Model.prototype.fetch.call(this,a)}});i.default=k;return i=i["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table-row', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table/row.js' */
("undefined"===typeof window?global:window).__12a7ed474d5246bbe7870b97be386295=function(){function e(a){return a&&a.__esModule?a:{"default":a}}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var b=e(__02fa0d2334b5d2f9701871403ba9d89a),j;var c=__8c25237a63a4b0e116ea899da18a16d3;if(c&&c.__esModule)j=c;else{var k={};if(null!=c)for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(k[d]=c[d]);k.default=c;j=k}d=e(__a0f8accf3e15b29165e7a143e435af91);var l=e(__6cb6ba98d240ad8a464e632755835025),
m=e(__92c78d58c645de42693045d4d3a79c1c),n=e(__a8a27edcadbb3291524b9ea43b8af4ce);e(__ff21a71b857b101095156bf4ff8b27ac);var o=e(__efbadfd39f308c3a3e14a83c069d73fd);h.default=d.default.View.extend({tagName:"tr",events:{"click .aui-restfultable-editable":"edit"},initialize:function(a){a=a||{};this._event=n.default;this.classNames=l.default;this.dataKeys=m.default;this.columns=a.columns;this.allowEdit=a.allowEdit;this.allowDelete=a.allowDelete;if(!this.events["click .aui-restfultable-editable"])throw Error("It appears you have overridden the events property. To add events you will need to usea work around. https://github.com/documentcloud/backbone/issues/244");
this.index=a.index||0;this.deleteConfirmation=a.deleteConfirmation;this.allowReorder=a.allowReorder;this.$el=(0,b.default)(this.el);this.bind(this._event.CANCEL,function(){this.disabled=!0}).bind(this._event.FOCUS,function(a){this.focus(a)}).bind(this._event.BLUR,function(){this.unfocus()}).bind(this._event.MODAL,function(){this.$el.addClass(this.classNames.ACTIVE)}).bind(this._event.MODELESS,function(){this.$el.removeClass(this.classNames.ACTIVE)})},renderDragHandle:function(){return'<span class="'+
this.classNames.DRAG_HANDLE+'"></span></td>'},defaultColumnRenderer:function(a){if(a.value)return document.createTextNode(a.value.toString())},sync:function(a){var b=this;this.model.addExpand(a);this.showLoading();this.model.save(a,{success:function(){b.hideLoading().render();b.trigger(b._event.UPDATED)},error:function(){b.hideLoading()}});return this},refresh:function(a,b){var c=this;this.showLoading();this.model.fetch({success:function(){c.hideLoading().render();a&&a.apply(this,arguments)},error:function(){c.hideLoading();
b&&b.apply(this,arguments)}});return this},hasFocus:function(){return this.$el.hasClass(this.classNames.FOCUSED)},focus:function(){(0,b.default)(this.el).addClass(this.classNames.FOCUSED);return this},unfocus:function(){(0,b.default)(this.el).removeClass(this.classNames.FOCUSED);return this},showLoading:function(){this.$el.addClass(this.classNames.LOADING);return this},hideLoading:function(){this.$el.removeClass(this.classNames.LOADING);return this},edit:function(a){a=(0,b.default)(a.target).is("."+
this.classNames.EDITABLE)?(0,b.default)(a.target).attr("data-field-name"):(0,b.default)(a.target).closest("."+this.classNames.EDITABLE).attr("data-field-name");this.trigger(this._event.ROW_EDIT,a);return this},renderOperations:function(){var a=this;if(!1!==this.allowDelete)return(0,b.default)("<a href='#' class='aui-button' />").addClass(this.classNames.DELETE).text("Delete").click(function(b){b.preventDefault();a.destroy()})},destroy:function(){if(this.deleteConfirmation){var a=
j.popup(400,200,"delete-entity-"+this.model.get("id"));a.element.html(this.deleteConfirmation(this.model.toJSON()));a.show();a.element.find(".cancel").click(function(){a.hide()});a.element.find("form").submit(function(b){a.hide();this.model.destroy();b.preventDefault()}.bind(this))}else this.model.destroy()},render:function(){var a=this,c=this.model.toJSON(),e=(0,b.default)("<td class='aui-restfultable-operations' />").append(this.renderOperations({},c)),d=(0,b.default)("<td class='aui-restfultable-status' />").append((0,
o.default)());this.$el.removeClass(this.classNames.DISABLED+" "+this.classNames.FOCUSED+" "+this.classNames.LOADING+" "+this.classNames.EDIT_ROW).addClass(this.classNames.READ_ONLY).empty();this.allowReorder&&(0,b.default)('<td  class="'+this.classNames.ORDER+'" />').append(this.renderDragHandle()).appendTo(a.$el);this.$el.attr("data-id",this.model.id);b.default.each(this.columns,function(e,f){var g,d=(0,b.default)("<td />");g=c[f.id];var i=f.fieldName||f.id,h=[{name:i,value:g,allowEdit:f.allowEdit},
c,a.model];g&&a.$el.attr("data-"+f.id,g);g=f.readView?(new f.readView({model:a.model})).render(h[0]):a.defaultColumnRenderer.apply(a,h);if(!1!==a.allowEdit&&!1!==f.allowEdit){if(i=(0,b.default)("<span />").addClass(a.classNames.EDITABLE).append('<span class="aui-icon aui-icon-small aui-iconfont-edit"></span>').append(g).attr("data-field-name",i),d=(0,b.default)("<td />").append(i).appendTo(a.$el),!g||""==b.default.trim(g))d.addClass(a.classNames.NO_VALUE),i.html((0,b.default)("<em />").text(this.emptyText||
"Enter value"))}else d.append(g);f.styleClass&&d.addClass(f.styleClass);d.appendTo(a.$el)});this.$el.append(e).append(d).addClass(this.classNames.ROW+" "+this.classNames.READ_ONLY);this.trigger(this._event.RENDER,this.$el,c);this.$el.trigger(this._event.CONTENT_REFRESHED,[this.$el]);return this}});return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-restful-table', location = 'node_modules/@atlassian/aui/src/js/aui/restful-table.js' */
("undefined"===typeof window?global:window).__c5e3bf15f76fa7bfc2443017a9e6dfb3=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function j(a,b,c){(0,e.default)(b).trigger(a,c);(0,e.default)(document).trigger(a,c);b.id&&(a=b.id+"_"+a,(0,e.default)(document).trigger(a,c))}var m={};"use strict";Object.defineProperty(m,"__esModule",{value:!0});var e=f(__02fa0d2334b5d2f9701871403ba9d89a),n;var h=__8139e9a1368a0224fc430963d21930c8;if(h&&h.__esModule)n=h;else{var k={};if(null!=h)for(var l in h)Object.prototype.hasOwnProperty.call(h,
l)&&(k[l]=h[l]);k.default=h;n=k}var o=f(__a0f8accf3e15b29165e7a143e435af91),r=f(__6cb6ba98d240ad8a464e632755835025);l=f(__32dbabf183ece2a8f2812e96fdcf2494);var h=f(__1c6e1281c2c05202a8e43057ade05a58),k=f(__5034e307049b45a668379b8f49ea940f),s=f(__92c78d58c645de42693045d4d3a79c1c),t=f(__6f6f93a6db384de956b5a3dcf20cd8cf),p=f(__a957adf541e8046f4ec7d811fa0eec56),u=f(__a8a27edcadbb3291524b9ea43b8af4ce),w=f(__fb27ffae84b96c14bf339e62cefcf116);f(__ff21a71b857b101095156bf4ff8b27ac);var q=f(__12a7ed474d5246bbe7870b97be386295),
v=f(__efbadfd39f308c3a3e14a83c069d73fd),g=o.default.View.extend({initialize:function(a){var b=this;b.options=e.default.extend(!0,b._getDefaultOptions(a),a);b.id=this.options.id;b._event=u.default;b.classNames=r.default;b.dataKeys=s.default;this.$table=(0,e.default)(a.el).addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(b.classNames.LOADING);this.$table.wrapAll("<form class='aui' action='#' />");this.$thead=(0,e.default)("<thead/>");this.$theadRow=
(0,e.default)("<tr />").appendTo(this.$thead);this.$tbody=(0,e.default)("<tbody/>");if(!this.$table.length)throw Error("RestfulTable: Init failed! The table you have specified ["+this.$table.selector+"] cannot be found.");if(!this.options.columns)throw Error("RestfulTable: Init failed! You haven't provided any columns to render.");this.showGlobalLoading();this.options.columns.forEach(function(a){var d=e.default.isFunction(a.header)?a.header():a.header;"undefined"===typeof d&&(n.warn("You have not specified [header] for column ["+
a.id+"]. Using id for now..."),d=a.id);b.$theadRow.append("<th>"+d+"</th>")});b.$theadRow.append("<th></th><th></th>");this._models=this._createCollection();this._rowClass=this.options.views.row;this.editRows=[];this.$table.closest("form").submit(function(a){b.focusedRow&&b.focusedRow.trigger(b._event.SAVE);a.preventDefault()});this.options.allowReorder&&(this.$theadRow.prepend("<th />"),this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(a,d){var i=(0,e.default)("<div/>").attr("class",
d.attr("class")).addClass(b.classNames.MOVEABLE);d.children().each(function(){var a=(0,e.default)(this),b=parseInt(0+a.css("border-left-width"),10),c=parseInt(0+a.css("border-right-width"),10),b=a[0].clientWidth+b+c;i.append((0,e.default)("<div/>").html(a.html()).attr("class",a.attr("class")).width(b))});i=(0,e.default)("<div class='aui-restfultable-readonly'/>").append(i);i.css({left:d.offset().left});i.appendTo(document.body);return i},start:function(a,d){var i=d.helper[0].clientHeight,f=d.placeholder.find("td");
d.item.addClass(b.classNames.MOVEABLE).children().each(function(a){(0,e.default)(this).width(f.eq(a).width())});var g='<td colspan="'+b.getColumnCount()+'">&nbsp;</td>';d.placeholder.html(g).css({height:i,visibility:"visible"});b.getRowFromElement(d.item[0]).trigger(b._event.MODAL)},stop:function(a,d){if((0,e.default)(d.item[0]).is(":visible"))d.item.removeClass(b.classNames.MOVEABLE).children().attr("style",""),d.placeholder.removeClass(b.classNames.ROW),b.getRowFromElement(d.item[0]).trigger(b._event.MODELESS)},
update:function(a,d){var e={row:b.getRowFromElement(d.item[0]),item:d.item,nextItem:d.item.next(),prevItem:d.item.prev()};b.move(e)},axis:"y",delay:0,containment:"document",cursor:"move",scroll:!0,zIndex:8E3}),this.$tbody.bind("selectstart mousedown",function(a){return!(0,e.default)(a.target).is("."+b.classNames.DRAG_HANDLE)}));!1!==this.options.allowCreate&&(this._createRow=(new this.options.views.editRow({columns:this.options.columns,isCreateRow:!0,model:this.options.model.extend({url:function(){return b.options.resources.self}}),
cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey,allowReorder:this.options.allowReorder,fieldFocusSelector:this.options.fieldFocusSelector})).bind(this._event.CREATED,function(a){b.options.addPosition==void 0&&b.options.createPosition==="bottom"||b.options.addPosition==="bottom"?b.addRow(a):b.addRow(a,0)}).bind(this._event.VALIDATION_ERROR,function(){this.trigger(b._event.FOCUS)}).render({errors:{},values:{}}),this.$create=(0,e.default)('<tbody class="'+this.classNames.CREATE+
'" />').append(this._createRow.el),this._applyFocusCoordinator(this._createRow),this._createRow.trigger(this._event.FOCUS));this._models.bind("remove",function(a){b.getRows().forEach(function(d){if(d.model===a){d.hasFocus()&&b._createRow&&b._createRow.trigger(b._event.FOCUS);b.removeRow(d)}})});this.fetchInitialResources()},fetchInitialResources:function(){var a=this;e.default.isFunction(this.options.resources.all)?this.options.resources.all(function(b){a.populate(b)}):e.default.get(this.options.resources.all,
function(b){a.populate(b)})},move:function(a){var b=this,c=function(a){return a.length?{after:b.getRowFromElement(a).model.url()}:{position:"First"}};a.row&&(c=b.options.reverseOrder?c(a.nextItem):c(a.prevItem),e.default.ajax({url:a.row.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(c),complete:function(){a.row.hideLoading()},success:function(a){j(b._event.REORDER_SUCCESS,b,[a])},error:function(a){var c=e.default.parseJSON(a.responseText||a.data);
j(b._event.SERVER_ERROR,b,[c,a,this])}}),a.row.showLoading())},_createCollection:function(){var a=this;return new (this.options.Collection.extend({sort:function(b){b||(b={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");this.tableRows=a.getRows();this.models=this.sortBy(this.comparator);this.tableRows=void 0;b.silent||this.trigger("refresh",this,b);return this},remove:function(b,c){this.tableRows=a.getRows();o.default.Collection.prototype.remove.apply(this,arguments);this.tableRows=
void 0;return this}}))([],{comparator:function(b){var c;(void 0!==this.tableRows?this.tableRows:a.getRows()).some(function(a,e){if(a.model.id===b.id)return c=e,!0});return c}})},populate:function(a){this.options.reverseOrder&&a.reverse();this.hideGlobalLoading();a&&a.length?(this._models.reset([],{silent:!0}),this.renderRows(a),this.isEmpty()&&this.showNoEntriesMsg()):this.showNoEntriesMsg();this.$table.append(this.$thead);"bottom"===this.options.createPosition?this.$table.append(this.$tbody).append(this.$create):
this.$table.append(this.$create).append(this.$tbody);this.$table.removeClass(this.classNames.LOADING).trigger(this._event.INITIALIZED,[this]);j(this._event.INITIALIZED,this,[this]);this.options.autoFocus&&this.$table.find(":input:text:first").focus()},showGlobalLoading:function(){this.$loading||(this.$loading=(0,e.default)('<div class="aui-restfultable-init">'+(0,v.default)()+'<span class="aui-restfultable-loading">'+this.options.loadingMsg+"</span></div>"));this.$loading.is(":visible")||this.$loading.insertAfter(this.$table);
return this},hideGlobalLoading:function(){this.$loading&&this.$loading.remove();return this},addRow:function(a,b){var c,d;if(!a.id)throw Error("RestfulTable.addRow: to add a row values object must contain an id. Maybe you are not returning it from your restend point?Recieved:"+JSON.stringify(a));d=new this.options.model(a);c=this._renderRow(d,b);this._models.add(d);this.removeNoEntriesMsg();j(this._event.ROW_ADDED,this,[c,this]);return this},removeRow:function(a){this._models.remove(a.model);a.remove();
this.isEmpty()&&this.showNoEntriesMsg();j(this._event.ROW_REMOVED,this,[a,this])},isEmpty:function(){return 0===this._models.length},getModels:function(){return this._models},getTable:function(){return this.$table},getTableBody:function(){return this.$tbody},getCreateRow:function(){return this._createRow},getColumnCount:function(){var a=2;this.allowReorder&&++a;return this.options.columns.length+a},getRowFromElement:function(a){return(0,e.default)(a).data(this.dataKeys.ROW_VIEW)},showNoEntriesMsg:function(){this.$noEntries&&
this.$noEntries.remove();this.$noEntries=(0,e.default)("<tr>").addClass(this.classNames.NO_ENTRIES).append((0,e.default)("<td>").attr("colspan",this.getColumnCount()).text(this.options.noEntriesMsg)).appendTo(this.$tbody);return this},removeNoEntriesMsg:function(){this.$noEntries&&0<this._models.length&&this.$noEntries.remove();return this},getRows:function(){var a=this,b=[];this.$tbody.find("."+this.classNames.READ_ONLY).each(function(){var c=(0,e.default)(this).data(a.dataKeys.ROW_VIEW);c&&b.push(c)});
return b},_renderRow:function(a,b){var c=this,d=this.$tbody.find("."+this.classNames.READ_ONLY),e,f;f=new this._rowClass({model:a,columns:this.options.columns,allowEdit:this.options.allowEdit,allowDelete:this.options.allowDelete,allowReorder:this.options.allowReorder,deleteConfirmation:this.options.deleteConfirmation});this.removeNoEntriesMsg();f.bind(this._event.ROW_EDIT,function(a){j(this._event.EDIT_ROW,{},[this,c]);c.edit(this,a)});e=f.render().$el;-1!==b&&("number"===typeof b&&0!==d.length?e.insertBefore(d[b]):
this.$tbody.append(e));e.data(this.dataKeys.ROW_VIEW,f);f.bind(this._event.MODAL,function(){c.$table.removeClass(c.classNames.ALLOW_HOVER);c.$tbody.sortable("disable");c.getRows().forEach(function(a){c.isRowBeingEdited(a)||a.delegateEvents({})})});f.bind(this._event.MODELESS,function(){c.$table.addClass(c.classNames.ALLOW_HOVER);c.$tbody.sortable("enable");c.getRows().forEach(function(a){c.isRowBeingEdited(a)||a.delegateEvents()})});this._applyFocusCoordinator(f);this.trigger(this._event.ROW_INITIALIZED,
f);return f},isRowBeingEdited:function(a){var b=!1;this.editRows.some(function(c){if(c.el===a.el)return b=!0});return b},_applyFocusCoordinator:function(a){var b=this;a.hasFocusBound||(a.hasFocusBound=!0,a.bind(this._event.FOCUS,function(){b.focusedRow&&b.focusedRow!==a&&b.focusedRow.trigger(b._event.BLUR);b.focusedRow=a;a instanceof q.default&&b._createRow&&b._createRow.enable()}));return this},_removeEditRow:function(a){a=e.default.inArray(a,this.editRows);this.editRows.splice(a,1);return this},
_shiftFocusAfterEdit:function(){0<this.editRows.length?this.editRows[this.editRows.length-1].trigger(this._event.FOCUS):this._createRow&&this._createRow.trigger(this._event.FOCUS);return this},_saveEditRowOnBlur:function(){return 1>=this.editRows.length},dismissEditRows:function(){this.editRows.forEach(function(a){a.hasUpdates()||a.trigger(this._event.FINISHED_EDITING)},this)},edit:function(a,b){var c=this,d=new this.options.views.editRow({el:a.el,columns:this.options.columns,isUpdateMode:!0,allowReorder:this.options.allowReorder,
fieldFocusSelector:this.options.fieldFocusSelector,model:a.model,cancelAccessKey:this.options.cancelAccessKey,submitAccessKey:this.options.submitAccessKey}),e=a.model.toJSON();e.update=!0;d.render({errors:{},update:!0,values:e}).bind(c._event.UPDATED,function(b,d){c._removeEditRow(this);this.unbind();a.render().delegateEvents();a.trigger(c._event.UPDATED);!1!==d&&c._shiftFocusAfterEdit()}).bind(c._event.VALIDATION_ERROR,function(){this.trigger(c._event.FOCUS)}).bind(c._event.FINISHED_EDITING,function(){c._removeEditRow(this);
a.render().delegateEvents();this.unbind()}).bind(c._event.CANCEL,function(){c._removeEditRow(this);this.unbind();a.render().delegateEvents();c._shiftFocusAfterEdit()}).bind(c._event.BLUR,function(){c.dismissEditRows();c._saveEditRowOnBlur()&&this.trigger(c._event.SAVE,!1)});this._applyFocusCoordinator(d);d.trigger(c._event.FOCUS,b);c._createRow&&c._createRow.disable();this.editRows.push(d);return d},renderRows:function(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],c=this._models.comparator,
d=[];this._models.comparator=void 0;b=b.map(function(b){b=new a.options.model(b);d.push(a._renderRow(b,-1).el);return b});this._models.add(b,{silent:!0});this._models.comparator=c;this.removeNoEntriesMsg();this.$tbody.append(d);return this},_getDefaultOptions:function(a){return{model:a.model||p.default,allowEdit:!0,views:{editRow:t.default,row:q.default},Collection:o.default.Collection.extend({url:a.resources.self,model:a.model||p.default}),allowReorder:!1,fieldFocusSelector:function(a){return":input[name="+
a+"], #"+a},loadingMsg:a.loadingMsg||"Loading"}}});g.ClassNames=r.default;g.CustomCreateView=l.default;g.CustomEditView=h.default;g.CustomReadView=k.default;g.DataKeys=s.default;g.EditRow=t.default;g.EntryModel=p.default;g.Events=u.default;g.Row=q.default;g.Throbber=v.default;(0,w.default)("RestfulTable",g);m.default=g;return m=m["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-tipsy', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.tipsy.js' */
("undefined"===typeof window?global:window).__cc64a0d7c308ad5954e00f06c2bcc6ed=function(){var b=jQuery,i=function(a){for(;a=a.parentNode;)if(a==document)return!0;return!1},j=function(a,c){this.$element=b(a);this.options=c;this.enabled=!0;this.fixTitle()},k=0;j.prototype={show:function(){if(i(this.$element[0])){var a=this.getTitle();if(a&&this.enabled){var c=this.tip();c.find(".tipsy-inner")[this.options.html?"html":"text"](a);c[0].className="tipsy";c.remove().css({top:0,left:0,visibility:"hidden",
display:"block"}).appendTo(document.body);var d=this;this.options.hoverable&&c.hover(function(){d.hoverTooltip=!0},function(){"in"!=d.hoverState&&(d.hoverTooltip=!1,"manual"!=d.options.trigger&&d.$element.trigger("hover"==d.options.trigger?"mouseleave.tipsy":"blur.tipsy"))});this.options.className&&c.addClass("function"==typeof this.options.className?this.options.className.call(this.$element[0]):this.options.className);var a=b.extend({},this.$element.offset(),{width:this.$element[0].getBoundingClientRect().width,
height:this.$element[0].getBoundingClientRect().height}),e={},f=c[0].offsetWidth,h=c[0].offsetHeight,g="function"==typeof this.options.gravity?this.options.gravity.call(this.$element[0]):this.options.gravity;2===g.length&&(e.left="w"===g.charAt(1)?a.left+a.width/2-15:a.left+a.width/2-f+15);switch(g.charAt(0)){case "n":"undefined"===typeof e.left&&(e.left=a.left+a.width/2-f/2);e.top=a.top+a.height+this.options.offset;break;case "s":"undefined"===typeof e.left&&(e.left=a.left+a.width/2-f/2,c.css(e),
h=c[0].offsetHeight);e.top=a.top-h-this.options.offset;break;case "e":e.left=a.left-f-this.options.offset;e.top=a.top+a.height/2-h/2;break;case "w":e.left=a.left+a.width+this.options.offset,e.top=a.top+a.height/2-h/2}c.css(e).addClass("tipsy-"+g);c.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+g.charAt(0);this.options.fade?c.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):c.css({visibility:"visible",opacity:this.options.opacity});
this.options.aria&&(a="tipsyuid"+k++,c.attr("id",a),this.$element.attr("aria-describedby",a))}}},destroy:function(){this.$element.removeData("tipsy");this.unbindHandlers();this.hide()},unbindHandlers:function(){this.options.live?b(this.$element.context).off(".tipsy"):this.$element.unbind(".tipsy")},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){b(this).remove()}):this.tip().remove();this.options.aria&&this.$element.removeAttr("aria-describedby")},fixTitle:function(){var a=
this.$element;if(a.attr("title")||"string"!=typeof a.attr("original-title"))a.attr("original-title",a.attr("title")||"").removeAttr("title")},getTitle:function(){var a,b=this.$element,d=this.options;this.fixTitle();d=this.options;"string"==typeof d.title?a=b.attr("title"==d.title?"original-title":d.title):"function"==typeof d.title&&(a=d.title.call(b[0]));return(a=(""+a).replace(/(^\s*|\s*$)/,""))||d.fallback},tip:function(){this.$tip||(this.$tip=b('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>').attr("role",
"tooltip"),this.$tip.data("tipsy-pointee",this.$element[0]));return this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.options=this.$element=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}};b.fn.tipsy=function(a){function c(c){var d=b.data(c,"tipsy");d||(d=new j(c,b.fn.tipsy.elementOptions(c,a)),b.data(c,"tipsy",d));return d}function d(){var b=c(this);b.hoverState="in";0==a.delayIn?b.show():
(b.fixTitle(),setTimeout(function(){"in"==b.hoverState&&b.show()},a.delayIn))}function e(){var b=c(this);b.hoverState="out";0==a.delayOut?b.hide():setTimeout(function(){"out"==b.hoverState&&!b.hoverTooltip&&b.hide()},a.delayOut)}if(!0===a)return this.data("tipsy");if("string"==typeof a){var f=this.data("tipsy");if(f)f[a]();return this}a=b.extend({},b.fn.tipsy.defaults,a);a.hoverable&&(a.delayOut=a.delayOut||20);a.live||this.each(function(){c(this)});if("manual"!=a.trigger){var f="hover"==a.trigger?
"mouseenter.tipsy focus.tipsy":"focus.tipsy",h="hover"==a.trigger?"mouseleave.tipsy blur.tipsy":"blur.tipsy";if(a.live)b(this.context).on(f,this.selector,d).on(h,this.selector,e);else this.bind(f,d).bind(h,e)}return this};b.fn.tipsy.defaults={aria:!1,className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,hoverable:!1,offset:0,opacity:0.8,title:"title",trigger:"hover"};b.fn.tipsy.revalidate=function(){b(".tipsy").each(function(){var a=b.data(this,"tipsy-pointee");(!a||
!i(a))&&b(this).remove()})};b.fn.tipsy.elementOptions=function(a,c){return b.metadata?b.extend({},c,b(a).metadata()):c};b.fn.tipsy.autoNS=function(){return b(this).offset().top>b(document).scrollTop()+b(window).height()/2?"s":"n"};b.fn.tipsy.autoWE=function(){return b(this).offset().left>b(document).scrollLeft()+b(window).width()/2?"e":"w"};b.fn.tipsy.autoBounds=function(a,c){return function(){var d=c[0],e=1<c.length?c[1]:!1,f=b(document).scrollTop()+a,h=b(document).scrollLeft()+a,g=b(this);g.offset().top<
f&&(d="n");g.offset().left<h&&(e="w");b(window).width()+b(document).scrollLeft()-g.offset().left<a&&(e="e");b(window).height()+b(document).scrollTop()-g.offset().top<a&&(d="s");return d+(e?e:"")}};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-tipsy', location = 'node_modules/@atlassian/aui/src/js/aui/tipsy.js' */
("undefined"===typeof window?global:window).__d14f0f297335aefa47f50a724842247b=function(){"use strict";__cc64a0d7c308ad5954e00f06c2bcc6ed;return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-tooltip', location = 'node_modules/@atlassian/aui/src/js/aui/tooltip.js' */
("undefined"===typeof window?global:window).__65bf2e9d62756879a7805c63dea11935=function(){function f(a,b,c){a.tipsy(c);"destroy"===c&&(b.live?(0,d.default)(a.context).off(".tipsy",a.selector):a.unbind(".tipsy"));return a}function g(a,b){a.tipsy(b);if(b&&b.hideOnClick&&("hover"===b.trigger||!b.trigger&&"hover"===a.tipsy.defaults.trigger)){var c=function(){(0,d.default)(this).tipsy("hide")};if(b.live)(0,d.default)(a.context).on("click.tipsy",a.selector,c);else a.bind("click.tipsy",c)}return a}"use strict";
var e=__02fa0d2334b5d2f9701871403ba9d89a,d=e&&e.__esModule?e:{"default":e};__cc64a0d7c308ad5954e00f06c2bcc6ed;d.default.fn.tooltip=function(a){var b=d.default.extend({},d.default.fn.tooltip.defaults,a);return b.live?("string"===typeof a?f(this,b,a):g(this,b),this):this.each(function(){var c=(0,d.default)(this);"string"===typeof a?f(c,b,a):g(c,b);return c})};d.default.fn.tooltip.defaults={opacity:1,offset:1,delayIn:500,hoverable:!0,hideOnClick:!0,aria:!0};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:window', location = 'includes/js/amd/shim/window-amd.js' */
define("window",function(){return window});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:document', location = 'includes/js/amd/shim/document-amd.js' */
define("document",["window"],function(a){return a.document});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:document-register-element-polyfill', location = 'includes/js/amd/shim/document-register-element-polyfill.js' */
(function(){function Ja(){var c=F.splice(0,F.length);for(G=0;c.length;)c.shift().call(null,c.shift())}function U(c,a){for(var b=0,d=c.length;b<d;b++)V(c[b],a)}function W(c){return function(a){Ka(a)&&(V(a,c),k.length&&U(a.querySelectorAll(k),c))}}function X(c){var a=H.call(c,"is");c=c.nodeName.toUpperCase();var b=m.call(q,a?"\x3d"+a.toUpperCase():"\x3c"+c);return a&&-1<b&&!(-1<k.indexOf(c+'[is\x3d"'+a+'"]'))?-1:b}function ma(c){var a=c.currentTarget,b=c.attrChange,d=c.attrName,e=c.target,f=c.ADDITION||
2,g=c.REMOVAL||3;!I||e&&e!==a||!a.attributeChangedCallback||"style"===d||c.prevValue===c.newValue&&(""!==c.newValue||b!==f&&b!==g)||a.attributeChangedCallback(d,b===f?null:c.prevValue,b===g?null:c.newValue)}function na(c){var a=W(c);return function(b){F.push(a,b.target);G&&clearTimeout(G);G=setTimeout(Ja,1)}}function Y(c){oa&&(oa=!1,c.currentTarget.removeEventListener("DOMContentLoaded",Y));k.length&&U((c.target||document).querySelectorAll(k),"detached"===c.detail?"detached":"attached");if(w)for(var a=
0,b=z.length;a<b;a++)c=z[a],x.contains(c)||(b--,z.splice(a--,1),V(c,"detached"))}function La(c,a){pa.call(this,c,a);Z.call(this,{target:this})}function qa(c,a,b){c=a.apply(c,b);a=X(c);-1<a&&A(c,B[a]);if(b.pop()&&k.length){b=c.querySelectorAll(k);a=0;for(var d=b.length,e;a<d;a++)e=b[a],A(e,B[X(e)])}return c}function aa(c,a){Ma(c,a);J?J.observe(c,Na):(K&&(c.setAttribute=La,c[n]=ba(c),c.addEventListener("DOMSubtreeModified",Z)),c.addEventListener("DOMAttrModified",ma));c.createdCallback&&I&&(c.created=
!0,c.createdCallback(),c.created=!1)}function ra(c){throw Error("A "+c+" type is already registered");}function V(c,a){var b,d=X(c),e;-1<d&&!Oa.call(c,"TEMPLATE")&&(ca(c,B[d]),d=0,"attached"!==a||c.attached?"detached"!==a||c.detached||(c.attached=!1,c.detached=!0,e="disconnected",d=1):(c.detached=!1,c.attached=!0,e="connected",d=1,w&&0>m.call(z,c)&&z.push(c)),d&&(b=c[a+"Callback"]||c[e+"Callback"])&&b.call(c))}function L(){}function sa(c,a,b){b=b&&b["extends"]||"";var d=a.prototype,e=da(d),f=a.observedAttributes||
ea,g={prototype:e};M(e,"createdCallback",{value:function(){if(N)N=!1;else if(!this.__dreCEv1){this.__dreCEv1=!0;new a(this);d.createdCallback&&d.createdCallback.call(this);var b=C[O.get(a)];(!D||1<b.create.length)&&ta(this)}}});M(e,"attributeChangedCallback",{value:function(a){-1<m.call(f,a)&&d.attributeChangedCallback&&d.attributeChangedCallback.apply(this,arguments)}});d.connectedCallback&&M(e,"attachedCallback",{value:d.connectedCallback});d.disconnectedCallback&&M(e,"detachedCallback",{value:d.disconnectedCallback});
b&&(g["extends"]=b);c=c.toUpperCase();C[c]={constructor:a,create:b?[b,P(c)]:[c]};O.set(a,c);document.registerElement(c.toLowerCase(),g);fa(c);y[c].r()}function ua(c){return(c=C[c.toUpperCase()])&&c.constructor}function va(c){return"string"===typeof c?c:c&&c.is||""}function ta(c){for(var a=c.attributeChangedCallback,b=a?c.attributes:ea,d=b.length,e;d--;)e=b[d],a.call(c,e.name||e.nodeName,null,e.value||e.nodeValue)}function fa(c){c=c.toUpperCase();c in y||(y[c]={},y[c].p=new wa(function(a){y[c].r=a}));
return y[c].p}function xa(){p&&delete window.customElements;r(window,"customElements",{configurable:!0,value:new L});r(window,"CustomElementRegistry",{configurable:!0,value:L});for(var c=function(a){var b=window[a];if(b){window[a]=function(a){var c;a||(a=this);a.__dreCEv1||(N=!0,a=C[O.get(a.constructor)],a=(c=D&&1===a.create.length)?Reflect.construct(b,ea,a.constructor):document.createElement.apply(document,a.create),a.__dreCEv1=!0,N=!1,c||ta(a));return a};window[a].prototype=b.prototype;try{b.prototype.constructor=
window[a]}catch(f){r(b,"__dreCEv1",{value:window[a]})}}},a=htmlClass.get(/^HTML[A-Z]*[a-z]/),b=a.length;b--;c(a[b]));document.createElement=function(a,b){return(b=va(b))?ga.call(this,a,P(b)):ga.call(this,a)};ya||(ha=!0,document.registerElement(""))}var E={type:"auto"},za=1E5*Math.random()>>0,n="__registerElement"+za,Pa=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,Qa="ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH".split(" "),q=[],B=[],k="",x=
document.documentElement,m=q.indexOf||function(c){for(var a=this.length;a--&&this[a]!==c;);return a},ia=Object.prototype,ja=ia.hasOwnProperty,Q=ia.isPrototypeOf,r=Object.defineProperty,ea=[],R=Object.getOwnPropertyDescriptor,Aa=Object.getOwnPropertyNames,Ra=Object.getPrototypeOf,Ba=Object.setPrototypeOf,Ca=!!Object.__proto__,p=window.customElements,D=!/^force/.test(E.type)&&!!(p&&p.define&&p.get&&p.whenDefined),Da=Object.create||Object,Sa=window.Map||function(){var c=[],a=[],b;return{get:function(b){return a[m.call(c,
b)]},set:function(d,e){b=m.call(c,d);0>b?a[c.push(d)-1]=e:a[b]=e}}},wa=window.Promise||function(c){function a(a){for(d=!0;b.length;)b.shift()(a)}var b=[],d=!1,e={"catch":function(){return e},then:function(c){b.push(c);d&&setTimeout(a,1);return e}};c(a);return e},N=!1,C=Da(null),y=Da(null),O=new Sa,P=function(c){return c.toLowerCase()},da=Object.create||function a(b){return b?(a.prototype=b,new a):this},Ma=Ba||(Ca?function(a,b){a.__proto__=b;return a}:Aa&&R?function(){return function(a,b){do for(var d=
a,e=b,f,g=Aa(e),l=0,t=g.length;l<t;l++)f=g[l],ja.call(d,f)||r(d,f,R(e,f));while((b=Ra(b))&&!Q.call(b,a));return a}}():function(a,b){for(var d in b)a[d]=b[d];return a}),u=window.MutationObserver||window.WebKitMutationObserver,Ea=window.HTMLAnchorElement,h=(window.HTMLElement||window.Element||window.Node).prototype,w=!Q.call(h,x),M=w?function(a,b,d){a[b]=d.value;return a}:r,Ka=w?function(a){return 1===a.nodeType}:function(a){return Q.call(h,a)},z=w&&[],Fa=h.attachShadow,Ga=h.cloneNode,Oa=h.closest||
function(a){for(var b=this;b&&b.nodeName!==a;)b=b.parentNode;return b},ka=h.dispatchEvent,H=h.getAttribute,Ta=h.hasAttribute,Ua=h.removeAttribute,pa=h.setAttribute,S=document.createElement,Va=document.importNode,ga=S,Na=u&&{attributes:!0,characterData:!0,attributeOldValue:!0},Ha=u||function(a){K=!1;x.removeEventListener("DOMAttrModified",Ha)},F,G=0,ya="registerElement"in document&&!/^force-all/.test(E.type),Ia=!0,ha=!1,K=!0,oa=!0,I=!0,Z,T,ba,J,la,ca,A,v;u&&(v=document.createElement("div"),v.innerHTML=
"\x3cdiv\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e",(new u(function(a,b){if(a[0]&&"childList"==a[0].type&&!a[0].removedNodes[0].childNodes.length){var d=(v=R(h,"innerHTML"))&&v.set;d&&r(h,"innerHTML",{set:function(a){for(;this.lastChild;)this.removeChild(this.lastChild);d.call(this,a)}})}b.disconnect();v=null})).observe(v,{childList:!0,subtree:!0}),v.innerHTML="");ya||(Ba||Ca?(ca=function(a,b){Q.call(b,a)||aa(a,b)},A=aa):A=ca=function(a,b){a[n]||(a[n]=Object(!0),aa(a,b))},w?(K=!1,function(){var a=R(h,
"addEventListener"),b=a.value,d=function(a){var b=new CustomEvent("DOMAttrModified",{bubbles:!0});b.attrName=a;b.prevValue=H.call(this,a);b.newValue=null;b.REMOVAL=b.attrChange=2;Ua.call(this,a);ka.call(this,b)},e=function(a,b){var d=Ta.call(this,a),e=d&&H.call(this,a),g=new CustomEvent("DOMAttrModified",{bubbles:!0});pa.call(this,a,b);g.attrName=a;g.prevValue=d?e:null;g.newValue=b;d?g.MODIFICATION=g.attrChange=1:g.ADDITION=g.attrChange=0;ka.call(this,g)},f=function(a){var b=a.currentTarget,d=b[n];
a=a.propertyName;var e;d.hasOwnProperty(a)&&(d=d[a],e=new CustomEvent("DOMAttrModified",{bubbles:!0}),e.attrName=d.name,e.prevValue=d.value||null,e.newValue=d.value=b[a]||null,null==e.prevValue?e.ADDITION=e.attrChange=0:e.MODIFICATION=e.attrChange=1,ka.call(b,e))};a.value=function(a,h,t){"DOMAttrModified"===a&&this.attributeChangedCallback&&this.setAttribute!==e&&(this[n]={className:{name:"class",value:this.className}},this.setAttribute=e,this.removeAttribute=d,b.call(this,"propertychange",f));b.call(this,
a,h,t)};r(h,"addEventListener",a)}()):u||(x.addEventListener("DOMAttrModified",Ha),x.setAttribute(n,1),x.removeAttribute(n),K&&(Z=function(a){var b,d;if(this===a.target){a=this[n];this[n]=b=ba(this);for(d in b){if(!(d in a))return T(0,this,d,a[d],b[d],"ADDITION");if(b[d]!==a[d])return T(1,this,d,a[d],b[d],"MODIFICATION")}for(d in a)if(!(d in b))return T(2,this,d,a[d],b[d],"REMOVAL")}},T=function(a,b,d,e,f,g){b={attrChange:a,currentTarget:b,attrName:d,prevValue:e,newValue:f};b[g]=a;ma(b)},ba=function(a){for(var b,
d={},e=a.attributes,f=0,g=e.length;f<g;f++)a=e[f],b=a.name,"setAttribute"!==b&&(d[b]=a.value);return d})),document.registerElement=function(a,b){l=a.toUpperCase();Ia&&(Ia=!1,u?(J=function(a,b){function d(a,b){for(var d=0,e=a.length;d<e;b(a[d++]));}return new u(function(e){for(var f,g,h,t=0,k=e.length;t<k;t++)f=e[t],"childList"===f.type?(d(f.addedNodes,a),d(f.removedNodes,b)):(g=f.target,I&&g.attributeChangedCallback&&"style"!==f.attributeName&&(h=H.call(g,f.attributeName),h!==f.oldValue&&g.attributeChangedCallback(f.attributeName,
f.oldValue,h)))})}(W("attached"),W("detached")),la=function(a){J.observe(a,{childList:!0,subtree:!0});return a},la(document),Fa&&(h.attachShadow=function(){return la(Fa.apply(this,arguments))})):(F=[],document.addEventListener("DOMNodeInserted",na("attached")),document.addEventListener("DOMNodeRemoved",na("detached"))),document.addEventListener("DOMContentLoaded",Y),document.addEventListener("readystatechange",Y),document.importNode=function(a,b){switch(a.nodeType){case 1:return qa(document,Va,[a,
!!b]);case 11:var d=document.createDocumentFragment();a=a.childNodes;for(var e=a.length,f=0;f<e;f++)d.appendChild(document.importNode(a[f],!!b));return d;default:return Ga.call(a,!!b)}},h.cloneNode=function(a){return qa(this,Ga,[!!a])});if(ha)return ha=!1;-2<m.call(q,"\x3d"+l)+m.call(q,"\x3c"+l)&&ra(a);if(!Pa.test(l)||-1<m.call(Qa,l))throw Error("The type "+a+" is invalid");var d=function(){return f?document.createElement(g,l):document.createElement(g)},e=b||ia,f=ja.call(e,"extends"),g=f?b["extends"].toUpperCase():
l,l;f&&-1<m.call(q,"\x3c"+g)&&ra(g);b=q.push((f?"\x3d":"\x3c")+l)-1;k=k.concat(k.length?",":"",f?g+'[is\x3d"'+a.toLowerCase()+'"]':g);d.prototype=B[b]=ja.call(e,"prototype")?e.prototype:da(h);k.length&&U(document.querySelectorAll(k),"attached");return d},document.createElement=ga=function(a,b){var d=(b=va(b))?S.call(document,a,P(b)):S.call(document,a),e=""+a;a=m.call(q,(b?"\x3d":"\x3c")+(b||e).toUpperCase());var f=-1<a;b&&(d.setAttribute("is",b=b.toLowerCase()),f&&(e=e.toUpperCase(),f=-1<k.indexOf(e+
'[is\x3d"'+b+'"]')));I=!document.createElement.innerHTMLHelper;f&&A(d,B[a]);return d});addEventListener("beforeunload",function(){delete document.createElement;delete document.importNode;delete document.registerElement},!1);L.prototype={constructor:L,define:D?function(a,b,d){d?sa(a,b,d):(d=a.toUpperCase(),C[d]={constructor:b,create:[d]},O.set(b,d),p.define(a,b))}:sa,get:D?function(a){return p.get(a)||ua(a)}:ua,whenDefined:D?function(a){return wa.race([p.whenDefined(a),fa(a)])}:fa};if(!p||/^force/.test(E.type))xa();
else if(!E.noBuiltIn)try{(function(a,b,d){var e=new RegExp("^\x3ca\\s+is\x3d('|\")"+d+"\\1\x3e\x3c/a\x3e$");b["extends"]="a";a.prototype=da(Ea.prototype);a.prototype.constructor=a;window.customElements.define(d,a,b);if(!e.test(document.createElement("a",{is:d}).outerHTML)||!e.test((new a).outerHTML))throw b;})(function b(){return Reflect.construct(Ea,[],b)},{},"document-register-element-a"+za)}catch(a){xa()}if(!E.noBuiltIn)try{if(0>S.call(document,"a","a").outerHTML.indexOf("is"))throw{};}catch(a){P=
function(a){return{is:a.toLowerCase()}}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/confluence-amd.js' */
define("confluence/legacy",function(){return Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/confluence-mobile-amd.js' */
define("confluence-mobile/legacy",function(){return ConfluenceMobile});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/confluence-templates-amd.js' */
define("confluence/templates",[],function(){"undefined"===typeof Confluence&&(Confluence={});"undefined"===typeof Confluence.Templates&&(Confluence.Templates={});return Confluence.Templates});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/ajs-amd.js' */
define("ajs",function(){return AJS});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/jquery-amd.js' */
define("jquery",function(){return"undefined"!==typeof jQuery?jQuery:Zepto});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/memoir-amd.js' */
define("memoir",function(){return memoir});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/underscore-amd.js' */
define("underscore",function(){return _});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/backbone-amd.js' */
define("backbone",["underscore","jquery"],function(){return Backbone});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/aui-templates-amd.js' */
define("aui/templates",function(){return aui});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/skate-amd.js' */
define("skate",["atlassian/libs/skate-0.12.6"],function(a){return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/tinymce-amd.js' */
define("tinymce",function(){return tinymce});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/tinymce-popup-amd.js' */
define("tinymce/popup",function(){return"undefined"===typeof tinyMCEPopup?{}:tinyMCEPopup});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:amd', location = 'includes/js/amd/shim/wrm-amd.js' */
define("wrm",function(){return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jquery', location = 'includes/js/amd/shim/jquery-amd.js' */
define("jquery",function(){return"undefined"!==typeof jQuery?jQuery:Zepto});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-links', location = 'includes/js/page-links.js' */
define("confluence/page-links",["jquery"],function(a){return{canonical:function(){return a('head link[rel\x3d"canonical"]').attr("href")},shortlink:function(){return a('head link[rel\x3d"shortlink"]').attr("href")}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-links","AJS.Meta.Links");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:type-helpers', location = 'includes/js/api/type-helpers.js' */
define("confluence/api/type-helpers",[],function(){return{asBooleanOrString:function(a){var b=a?a.toLowerCase():"";return"true"===b?!0:"false"===b?!1:a}}});require("confluence/module-exporter").safeRequire("confluence/api/type-helpers",function(a){require("confluence/module-exporter").namespace("AJS.asBooleanOrString",a.asBooleanOrString)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:meta', location = 'includes/js/meta.js' */
define("confluence/meta",["jquery","confluence/api/type-helpers"],function(b,d){var c={};return{set:function(a,b){c[a]=b},get:function(a){if("undefined"!==typeof c[a])return c[a];a=b("meta[name\x3d'ajs-"+a+"']");if(a.length)return a=a.attr("content"),d.asBooleanOrString(a)},getBoolean:function(a){return!0===this.get(a)},getNumber:function(a){return+this.get(a)},getAllAsMap:function(){var a={};b("meta[name^\x3dajs-]").each(function(){a[this.name.substring(4)]=this.content});return b.extend(a,c)}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/meta","AJS.Meta");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:regexes', location = 'includes/js/api/regexes.js' */
define("confluence/api/regexes",[],function(){return{EMAIL:/^((([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
URL:/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:aui-draft', location = 'includes/js/aui-draft.js' */
define("confluence/aui-draft","jquery ajs confluence/meta window document confluence/api/regexes".split(" "),function(c,b,g,l,n,m){var e={};c.ajaxSetup({traditional:!0});e.defaultIfUndefined=function(a,d){var b=null,c=l;if("undefined"!==typeof d&&("object"===typeof d.defaultValue&&(b=d.defaultValue),"undefined"!==typeof d.rootObject))if("object"===typeof d.rootObject&&d.rootObject)c=d.rootObject;else return b;if("string"!==typeof a)return b;a=a.split(".");for(d=0;d<a.length;d++){if(!Object.prototype.hasOwnProperty.call(c,
a[d]))return b;c=c[a[d]]}return c};var h=function(){var a=!1;return function(b){var c=!!l.localStorage;if("boolean"!==typeof b)return c?"true"==localStorage["debug-switch-enabled"]:a;c?localStorage.setItem("debug-switch-enabled",b):a=b}}();e.debug=function(){if(h()){var a=Array.prototype.slice.call(arguments);a.splice(0,0,"DEBUG: "+(new Date).toLocaleTimeString());b.log.apply(b,a)}};e.debugEnabled=function(a){if("boolean"!==typeof a)return h();h(a);b.log("STICKY FLAG DEBUG ENABLED: "+a)};e.logError=
function(a,d){var f=[];if(c.browser.webkit)f.push(d);else for(var e in d)f.push(e+": "+d[e]);b.log(a+f.join(", "))};if(g.getBoolean("log-rendered")){var p=b.log,k=c('\x3cdiv id\x3d"ajs-log" class\x3d"log"\x3e\x3ch3\x3eAJS Log\x3c/h3\x3e\n\x3c/div\x3e'),q=c("head");k.toggleClass("hidden",!g.getBoolean("log-visible"));b.log=function(a){var d="undefined"===typeof a?"undefined":a,f=n.createElement("script");f.type="text/x-log";f.text=d;q.append(f);k.append(c("\x3cp\x3e\x3c/p\x3e").text("\n"+d));p.apply(b,
arguments)};b.toInit(function(){c("body").append(k)})}e.getJSONWrap=function(a){var d=b.contextPath(),f=a.url;0!==f.indexOf(d)&&0!==f.indexOf("http")&&(f=d+f);a.loadingElement&&b.setVisible(a.loadingElement,!0);var e=a.messageHandler;e.clearMessages();c.ajax({type:"GET",url:f,dataType:"json",data:a.data,error:function(){a.loadingElement&&b.setVisible(a.loadingElement,!1);e.displayMessages(a.errorMessage||"There was an error communicating with the server, please try again later.");a.errorCallback&&a.errorCallback()},success:function(c){a.loadingElement&&
b.setVisible(a.loadingElement,!1);e.handleResponseErrors(c)?a.errorCallback&&a.errorCallback():a.successCallback&&a.successCallback(c)}})};e.Validate=c.extend(function(){return{email:function(a){return m.EMAIL.test(a)},url:function(a){return m.URL.test(a)}}}(),b.Validate);e.Meta=b.Data||g;return e});
require("confluence/module-exporter").safeRequire("confluence/aui-draft",function(c){var b=require("ajs");"function"!==typeof b.defaultIfUndefined&&(b.defaultIfUndefined=c.defaultIfUndefined);b.debug=c.debug;b.debugEnabled=c.debugEnabled;b.logError=c.logError;b.getJSONWrap=c.getJSONWrap;b.Validate=c.Validate;b.Data=c.Meta});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:message-handler', location = 'includes/js/message-handler.js' */
define("confluence/message-handler",["jquery","ajs"],function(f,h){var l=function(a){var c,b;c=function(){return a.baseElement};b=function(a){var e=f("ul",a);e.length||(e=h("ul").appendTo(a));return e};return{getMessageContainer:c,clearMessages:function(){c().addClass("hidden").empty()},displayMessages:function(a){if(a&&a.length){f.isArray(a)||(a=[a]);for(var e=c(),k=b(e),d=0,g=a.length;d<g;d++)h("li").text(a[d]).appendTo(k);e.removeClass("hidden")}},handleResponseErrors:function(a,c){a=[].concat(a.validationErrors||
[]).concat(a.actionErrors||[]).concat(a.errorMessage||[]);return a.length?(this.displayMessages(c||a),!0):!1}}},b=function(a,c){a=f.extend(l(a),c&&c(a));a.getMessageContainer().addClass("message-handler");a.clearMessages();return a},d=!1,g;b.closeOnNew=function(a){if("undefined"!==typeof a)d=a;else return d};b.message=function(a,c,b){b=b||"success";d&&a.empty();h.messages[b](a,{body:c,closeable:!0,shadowed:!0})};b.error=function(a,c){b.message(a,c,"error")};b.actionMessage=function(a,c){g=g||f("#action-messages");
b.message(g,a,c)};b.loading=function(a){b.actionMessage(a,"info")};b.flag=function(a){require("aui/flag")(f.extend({},{type:"success",close:"manual"},a))};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/message-handler","AJS.MessageHandler");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:logger', location = 'includes/js/api/logger.js' */
define("confluence/api/logger",["ajs"],function(a){return{debug:function(){a.debug.apply(this,arguments)},log:function(){a.log.apply(this,arguments)},logError:function(){a.logError.apply(this,arguments)},error:function(){a.error.apply(this,arguments)},warn:function(){a.warn.apply(this,arguments)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:storage-manager', location = 'js/storage-manager.js' */
define("confluence/storage-manager",["confluence/meta","confluence/api/logger","window"],function(m,l,b){var n=function(){var d;for(d=0;d<b.localStorage.length;d++){var e=b.localStorage.key(d);if(e&&"nps-"===e.substring(0,4))try{b.localStorage.removeItem(e)}catch(f){}}};return function(d,e){var f=!1;try{f="localStorage"in b&&null!==b.localStorage}catch(a){l.log("Browser does not support localStorage: the 'confluence/confluence-storage-manager' module will not work.")}n();var p=m.get("atlassian-account-id")||
"anonymous",h=d+"."+p+"."+e,q=/\d+#/,k=function(a){if(!f)return null;var g,c=b.localStorage.getItem(h+"."+a);if(g=q.exec(c))if(c=c.replace(g[0],""),+new Date>g[0].replace("#",""))return b.localStorage.removeItem(h+"."+a),null;return c};return{getItem:k,doesContain:function(a){return!!k(a)},getItemAsBoolean:function(a){a=k(a);return"false"==a?!1:"true"==a?!0:!!a},setItem:function(a,g,c){f&&(c=(c=1E3*(c||0))?+new Date+c+"#":"",b.localStorage.setItem(h+"."+a,c+g))},setItemQuietly:function(a,b,c){try{this.setItem(a,
b,c)}catch(r){l.debug("Unable to write to localStorage. key: ",a,", value: ",b,", cause: ",r)}},removeItem:function(a){f&&b.localStorage.removeItem(h+"."+a)}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/storage-manager","AJS.storageManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:confluence-storage-manager', location = 'includes/js/confluence-storage-manager.js' */
define("confluence/confluence-storage-manager",["confluence/storage-manager"],function(a){return function(b){return a("confluence",b)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dialog', location = 'includes/js/dialog.js' */
define("confluence/dialog",["ajs","confluence/confluence-storage-manager","document","jquery"],function(b,k,g,f){return{component:function(c){var d;c=c||{};c=f.extend({},{keypressListener:function(a){if(27===a.keyCode){if(b.debug("dialog.js: escape keydown caught"),!f(".aui-dropdown",d.popup.element).is(":visible"))if("function"===typeof c.onCancel)c.onCancel();else d.hide()}else 13===a.keyCode&&(b.debug("dialog.js: enter keydown caught"),f(".aui-dropdown",d.popup.element).is(":visible")||"textarea"!=
(a.target.nodeName&&a.target.nodeName.toLowerCase())&&"function"==typeof c.onSubmit&&setTimeout(c.onSubmit))},width:865,height:530},c);d=new b.Dialog(c);f(g).bind("hideLayer",function(a,b,e){if("popup"==b&&e==d&&"function"===typeof c.onCancel)c.onCancel()});return d},initialiser:function(c){b.bind("show.dialog",function(a,c){var e=b.Meta.get("page-id"),h=b.Meta.get("space-key"),d=b.Meta.get("editor-mode"),f=b.Meta.get("new-page");b.EventQueue=b.EventQueue||[];b.EventQueue.push({name:c.dialog.id,properties:function(){var a=
{};e&&(a.pageid=e);h&&(a.spacekey=h);d&&(a.editormode=d);f&&(a.newpage=f);return a}()})});var d=function(a){a=c(a);var b;if(!a.attr("data-lasttab-override")){a.attr("data-tab-default")&&(b=a.attr("data-tab-default"));require("confluence/legacy");var e=k(a.attr("id")),d=e.getItem("last-tab");(b=null!=d?d:b)&&c(".page-menu-item:visible:eq("+b+") button",a).click();a.attr("data-lasttab-bound")||(c(".page-menu-item",a).each(function(a,b){c(b).click(function(){e.setItem("last-tab",a)})}),a.attr("data-lasttab-bound",
"true"))}};c(g).bind("showLayer",function(a,b,c){require("confluence/legacy").runBinderComponents();"popup"==b&&c&&d(c.element)});b.Dialog.prototype.overrideLastTab=function(){c(this.popup.element).attr("data-lasttab-override","true")};b.Dialog.prototype.addHelpText=function(a,d){if(a){var e=a;d&&(e=b.template(a).fill(d).toString());a=this.page[this.curpage];a.buttonpanel||a.addButtonPanel();e=c("\x3cdiv class\x3d'dialog-tip'\x3e\x3c/div\x3e").html(e);a.buttonpanel.append(e);c("a",e).click(function(){window.open(this.href,
"_blank").focus();return!1})}};b.Dialog.prototype.getTitle=function(){return c("#"+this.id+" .dialog-components:visible h2").text()};b.Dialog.prototype.isVisible=function(){return c("#"+this.id).is(":visible")}}}});require("confluence/module-exporter").safeRequire("confluence/dialog",function(b){AJS.ConfluenceDialog=b.component;AJS.toInit(b.initialiser)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:browser', location = 'includes/js/api/browser.js' */
define("confluence/api/browser",[],function(){return function(a){function c(){return-1!==a.indexOf("Firefox/")}function b(){return-1!==a.indexOf("Edge/")}function d(){return-1!==a.indexOf("MSIE")||-1!==a.indexOf("Trident/")||b()}function e(){return-1!==a.indexOf("Chrome/")}function f(){return-1!==a.indexOf("Safari/")&&-1===a.indexOf("Chrome/")}function g(){return-1!==a.indexOf("PhantomJS")}return{isFirefox:c,notFirefox:function(){return!c()},isMSEdge:b,notMSEdge:function(){return!b()},isIE:d,notIE:function(){return!d()},
isChrome:e,notChrome:function(){return!e()},isSafari:f,notSafari:function(){return!f()},isPhantom:g,notPhantom:function(){return!g()},version:function(){if(d()){var b=a.match(/MSIE\s([\d.]+)/)||a.match(/rv:([\d.]+)/)||a.match(/Edge\/([\d.]+)/);return parseInt(b[1])}if(e())return parseInt(a.match(/Chrome\/([\d.]+)/)[1]);if(f())return parseInt(a.match(/Version\/([\d.]+)/)[1]);if(c())return parseInt(a.match(/Firefox\/([\d.]+)/)[1])},friendlyName:function(){if(b())return"MSEdge";if(d())return"IE";if(e())return"Chrome";
if(f())return"Safari";if(c())return"Firefox"}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-amdify', location = 'node_modules/@atlassian/aui/src/js/aui/internal/amdify.js' */
("undefined"===typeof window?global:window).__8f23956215d754ca94df621efa6b0438=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(a,b){if(window.define){var c=window.define;c(a,[],function(){return b})}return b};return a=a["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-flag', location = 'node_modules/@atlassian/aui/src/js/aui/flag.js' */
("undefined"===typeof window?global:window).__b50249c6901293cd03d256e40a6d0941=function(){function d(a){return a&&a.__esModule?a:{"default":a}}function g(a){var a=c.default.extend({},l,a),b,e=a,e=(0,m.default)('<div class="aui-flag"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div></div>').fill({"body:html":e.body||"",closeable:"never"===e.close?"":"closeable",title:e.title||"",type:e.type}).toString();
b=(0,c.default)(e);b[0].close=function(){h(b)};"auto"===a.close?(j(b),b.find(".aui-message").addClass("aui-will-close"),setTimeout(function(){b[0].close()},n)):"manual"===a.close&&j(b);(0,c.default)("#"+i).find(".aui-flag").get().forEach(function(a){a.getAttribute("aria-hidden")==="true"&&(0,c.default)(a).remove()});a=(0,c.default)("#"+i);a.length||(a=(0,c.default)('<div id="'+i+'"></div>'),(0,c.default)("body").prepend(a));b.appendTo(a);(0,o.recomputeStyle)(b);return b.attr("aria-hidden","false")[0]}
function j(a){var b=(0,c.default)('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');b.click(function(){h(a)});b.keypress(function(b){if(b.which===k.default.ENTER||b.which===k.default.SPACE)h(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function h(a){a=a.get(0);a.setAttribute("aria-hidden","true");a.dispatchEvent(new p.default("aui-flag-close",{bubbles:!0}));return a}var f={};"use strict";Object.defineProperty(f,"__esModule",{value:!0});var c=d(__02fa0d2334b5d2f9701871403ba9d89a),
o=__1e5eff515fb8ea62ccd80d65455e88cd,q=d(__8f23956215d754ca94df621efa6b0438),r=d(__fb27ffae84b96c14bf339e62cefcf116),k=d(__d92d89c196b4703777e79d25a9f94b7f),m=d(__c33b5453d0277383a3121d7d42efa93d),p=d(__2e94b36d616dffee0a6f911bf22a83ae),n=5E3,i="aui-flag-container",l={body:"",close:"manual",title:"",type:"info"};(0,q.default)("aui/flag",g);(0,r.default)("flag",g);f.default=g;return f=f["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-message', location = 'editor/page-editor-message.js' */
define("confluence-editor/editor/page-editor-message",["jquery","ajs","aui/flag","document","underscore"],function(f,i,g,h,d){var b=Object.create(null),e=Object.create(null);h.addEventListener("aui-flag-close",function(a){a&&a.target&&(b=d.filter(Object.keys(b),function(c){return!f(a.target).find("span").hasClass(c)}))});return{handleMessage:function(a,c,d){b[a]||(e[a]?delete e[a]:c&&(b[a]=g({title:c.title?c.title:"",type:c.type,close:c.close?c.close:"manual",persistent:!1,body:"<span class='"+a+
"'>"+c.message+"</span>"}),d&&d()))},closeMessages:function(a){d.each(a,function(a){b[a]&&(b[a].close(),delete b[a])})},isDisplayed:function(a){return a in b},displayedErrors:function(){return Object.keys(b)},suppressMessage:function(a){e[a]={}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-message', location = 'includes/js/page-message.js' */
define("confluence/page-message",["ajs","confluence/meta","window","confluence/api/browser","confluence-editor/editor/page-editor-message"],function(a,e,b,f,g){var c={},d=new f(b.navigator.userAgent);c._getQueryString=function(){return b.location.search};c.displayPageMessage=function(){if(!document.getElementById("confluence-ui")){var b=c._getQueryString();-1!==b.indexOf("editingFailed")?a.MessageHandler.flag({type:"info",title:"Unable to edit",body:"Editing is unavailable right now. Try again in a few minutes.",
close:"manual"}):-1!==b.indexOf("userLimitReached")&&(g.handleMessage("collab.edit.user.limit.reached",{type:"warning",title:"You can\'t edit this page right now",message:"\u003cp\u003eThis page is so popular, you\'ve reached the maximum number of simultaneous editors.\u003c/p\u003e\u003cp\u003eTry again when it\'s not so busy.\u003c/p\u003e",close:"manual"}),a.Confluence.Analytics.publish("collab.edit.user.limit.reached",{browser:d.friendlyName()+"-"+d.version(),pageId:e.get("page-id"),editMode:"slow"}))}};return c});require("confluence/module-exporter").safeRequire("confluence/page-message",function(a){require("ajs").toInit(a.displayPageMessage)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:aui-overrides', location = 'includes/js/aui-overrides.js' */
define("confluence/aui-overrides",["window","ajs","jquery","confluence/api/type-helpers"],function(e,f,c,h){function g(){c("meta[name^\x3dajs-]").each(function(){var d=this.name,a=this.content,d=d.substring(4).replace(/(-\w)/g,function(a){return a.charAt(1).toUpperCase()});"undefined"===typeof f.params[d]&&(f.params[d]=h.asBooleanOrString(a))})}e.$=c;"undefined"!==typeof f&&g();return{enable:function(d){return this.each(function(){var a=c(this);a.is("a")&&a.css("pointer-events","");var b=a.attr("disabled",
!1).attr("aria-disabled",!1).removeClass("disabled").attr("id");b&&c("label[for\x3d"+b+"]",a.parent()).removeClass("disabled")})},disable:function(d){return this.each(function(){var a=c(this);a.is("a")&&a.css("pointer-events","none");var b=a.prop("disabled",!0).attr("aria-disabled",!0).addClass("disabled").attr("id");b&&c("label[for\x3d"+b+"]",a.parent()).addClass("disabled")})},debounce:function(d,a){var b;return function(){var c=this,e=arguments;b&&(clearTimeout(b),b=void 0);b=setTimeout(function(){d.apply(c,
e);b=void 0},a)}},metaToParams:g}});require("confluence/module-exporter").safeRequire("confluence/aui-overrides",function(e){require("confluence/module-exporter").namespace("AJS.$.debounce",e.debounce);require("confluence/module-exporter").namespace("AJS.$.fn.enable",e.enable);require("confluence/module-exporter").namespace("AJS.$.fn.disable",e.disable)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:dark-features', location = 'js/dark-features.js' */
define("confluence/dark-features",["confluence/meta","jquery"],function(c,e){var d=(c=c.get("enabled-dark-features"))?c.split(","):[],b={};e.each(d,function(){b[this]=!0});return{isEnabled:function(a){return!!b[a]&&!b[a+".disable"]},enable:function(a){a&&(b[a]=!0,b[a+".disable"]&&delete b[a+".disable"])},disable:function(a){a&&(void 0!==b[a]&&delete b[a],void 0!==b[a+".disable"]&&delete b[a+".disable"])},getAllEnabled:function(){return d}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/dark-features","AJS.DarkFeatures");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:defaults', location = 'includes/js/defaults.js' */
define("confluence/defaults",[],function(){return{maxResults:50}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:underscore', location = 'includes/js/amd/shim/underscore-amd.js' */
define("underscore",function(){return _});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:highlighter', location = 'includes/js/highlighter.js' */
define("confluence/highlighter",["ajs","underscore"],function(g,l){return function(b,m){var d,e;if(b&&b.length&&b[0]){for(var h=[],f=0,n=b.length;f<n;f++){var k=b[f];k&&h.push(k.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"))}d=new RegExp("("+h.join("|")+")","gi");e=g.template(m||"\x3cstrong\x3e{highlight}\x3c/strong\x3e").fill({highlight:"$1"}).toString()}return{highlight:function(a,c){if(!a)return a;c||(a=g.template.escape(a));return d?a.replace(d,e):a},safeHighlight:function(a){if(!a)return a;if(d&&
e){var c=e.split("$1"),b=c[0],c=c[1];a=a.replace(d,"@@@hl@@@$1@@@endhl@@@")}return l.escape(a).replace(/@@@hl@@@/gi,b).replace(/@@@endhl@@@/gi,c)}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:position', location = 'includes/js/position.js' */
define("confluence/position",["jquery"],function(e){return{spaceAboveBelow:function(a,c){var d=c.position().top,b;c=c.outerHeight(!0);"IFRAME"===a.nodeName?(b=a.contentWindow||a.contentDocument,a=e(a).height(),b=e(b.document||b),d-=b.scrollTop()):(b=e(a),a=b.height(),d-=b.position().top);return{above:Math.round(d),below:Math.round(a-d-c)}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/position","AJS.Position");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:object-cache', location = 'includes/js/object-cache.js' */
define("confluence/object-cache",[],function(){var a=function(c){if(!(this instanceof a))return new a(c);this.cache={};this.cacheStack=[];this.cacheSize=c||30};a.prototype.get=function(c){var b=this.cache[c];if(b){var a=this.cacheStack[this.cacheStack.length-1][0]+1;b.weight=a;this.cacheStack.push([a,c]);return b.value}};a.prototype.put=function(c,b){var a=this.cacheStack.length?this.cacheStack[this.cacheStack.length-1][0]+1:0;this.cache[c]={weight:a,value:b};for(this.cacheStack.push([a,c]);this.cacheStack.length>
this.cacheSize;)b=this.cacheStack.shift(),c=b[0],b=b[1],c===this.cache[b].weight&&delete this.cache[b]};a.prototype.clear=function(){this.cache={};this.cacheStack=[]};return a});require("confluence/module-exporter").exportModuleAsGlobal("confluence/object-cache","AJS.Confluence.cacheManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:input-driven-dropdown', location = 'includes/js/input-driven-dropdown.js' */
define("confluence/input-driven-dropdown","ajs jquery confluence/highlighter window document confluence/object-cache".split(" "),function(g,e,p,h,q,r){function f(b,d){this._effect="appear";this._timer=null;this.id=b;this.options=d;this.busy=this.inactive=!1;this.cacheManager=r()}var t=function(b){var d=b.$.closest(".aui-dd-parent").width();d||(b.$.width("25em"),d=b.$.width());e("a span:not(.icon)",b.$).each(function(){var c=e(this),a=g("var","\x26#8230;"),b=a.width(),n=!1;c.wrapInner(e("\x3cem\x3e"));
e("em",c).each(function(){var a=e(this);a.show();if(this.offsetLeft+this.offsetWidth+b>d-20){for(var c=this.childNodes,g=!1,f=c.length-1;0<=f;f--){var k=c[f],h=1,l=3===k.nodeType?"nodeValue":"innerHTML",m=k[l];do if(h<=m.length)k[l]=m.substr(0,m.length-h++);else break;while(this.offsetLeft+this.offsetWidth+b>d-20);if(h<=m.length){g=!0;break}}g?n=!0:a.hide()}});n&&(c.append(a),this.elpss=a)})},u=function(b){e("a span:not(.icon)",b.$).each(function(){var b=e(this),c;try{var a=b.data("properties");c=
a?a.spaceName:null}catch(k){g.logError("Problem getting space name: "+k.message)}a=b.text();c&&(a+=" ("+g("i").html(c).text()+")");b.attr("title",a)})},l=function(b,d){var c=b.options,a=b.dd;a&&(a.hide(),a.$.remove());c.ajsDropDownOptions=c.ajsDropDownOptions||{};c.ajsDropDownOptions&&!c.ajsDropDownOptions.alignment&&(c.ajsDropDownOptions.alignment="left");c.ajsDropDownOptions.selectionHandler=c.ajsDropDownOptions.selectionHandler||function(a,b){if("click"!=a.type){b=e("a",b).first();var c=b.attr("href");
"keydown"===a.type&&(a.metaKey||a.ctrlKey)&&13===a.which?h.open(c,"_blank"):(b.click(),q.location=c);a.preventDefault()}};a=b.dd=g.dropDown(d.matrix,c.ajsDropDownOptions)[0];c.ajsDropDownOptions&&c.ajsDropDownOptions.className&&a.$.addClass(c.ajsDropDownOptions.className);c.dropdownPlacement?c.dropdownPlacement(a.$):(g.log("No dropdownPlacement function specified. Appending dropdown to the body."),e("body").append(a.$));var f=new p(d.queryTokens||[d.query]);e("li a:not(.dropdown-prevent-highlight) span",
a.$).each(function(){var a=e(this);a.html(f.safeHighlight(a.text()))});t(a);u(a);c.dropdownPostprocess&&c.dropdownPostprocess(a.$);a.show(b._effect);"function"===typeof c.onShow&&c.onShow.call(a,a.$);return a};f.prototype.clearCache=function(){this.cacheManager.clear()};f.prototype.change=function(b,d,c){var a=this;if(b!=a._value){a._value=b;a.busy=!1;h.clearTimeout(a._timer);var e=new RegExp("\\S{"+(a.options.minLengthForGetData||2)+",}");if(d||e.test(b))if(d=a.cacheManager.get(b))l(a,d);else{a.busy=
!0;var f=function(){a.options.getDataAndRunCallback.call(a,b,function(){a.show.apply(this,arguments);c&&c(b)})};0===a.options.dropDownDelay?f():a._timer=h.setTimeout(function(){f()},a.options.dropDownDelay||200)}else a.dd&&a.dd.hide(),c&&c(b)}};f.prototype.hide=function(){this.dd&&this.dd.hide()};f.prototype.remove=function(){var b=this.dd;b&&(this.hide(),b.$.remove());this.inactive=!0;this.options.onDeath&&this.options.onDeath()};f.prototype.show=function(b,d,c){this.inactive?g.log("Quick search abandoned before server response received, ignoring. "+
this):(b={matrix:b,query:d,queryTokens:c},this.cacheManager.put(d,b),l(this,b),this.busy=!1)};return f});require("confluence/module-exporter").safeRequire("confluence/input-driven-dropdown",function(g){require("confluence/module-exporter").namespace("AJS.inputDrivenDropdown",function(e){return new g("inputdriven-dropdown",e)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:constants', location = 'includes/js/api/constants.js' */
define("confluence/api/constants",["ajs"],function(a){var b={};b.CONTEXT_PATH=a.contextPath();a=document.getElementById("confluence-base-url");b.BASE_URL=a&&a.getAttribute("content")?a.getAttribute("content"):"";return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:get-content-id', location = 'includes/js/get-content-id.js' */
define("confluence/get-content-id",["confluence/meta"],function(b){return function(){var a=b.get("content-id");+a||(a=b.get("page-id"));+a||(a="0");return a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:get-xsrf-token', location = 'includes/js/get-xsrf-token.js' */
define("confluence/get-xsrf-token",["confluence/meta"],function(a){return function(){return a.get("atl-token")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:hint-manager', location = 'includes/js/hint-manager.js' */
define("confluence/hint-manager",["jquery"],function(b){return function(a){if(!b.isArray(a))throw Error("Hints passed in must be an array of strings");var c=Math.floor(Math.random()*a.length);return{getNextHint:function(){var b=a[c];c=(c+1)%a.length;return b}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:place-focus', location = 'includes/js/place-focus.js' */
define("confluence/place-focus",["jquery"],function(b){return function(){var a,c=-1;b("input[data-focus]").each(function(){var d=b(this),e=d.attr("data-focus");e>c&&(c=e,a=d)});a&&a.focus()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:unescape-entities', location = 'includes/js/unescape-entities.js' */
define("confluence/unescape-entities",[],function(){return function(a){var b={amp:"\x26",lt:"\x3c",gt:"\x3e","#39":"'",quot:'"'};return null==a?a:(""+a).replace(/&[#\d\w]+;/g,function(a){var c=a.substring(1,a.length-1);return b[c]||a})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.restplugin:confluence-rest', location = 'js/confluence-rest.js' */
define("confluence-rest/confluence-rest",["ajs","jquery"],function(e,f){var d={safeHTML:function(a){return a.replace(/[<>&"']/g,function(a){return"\x26#"+a.charCodeAt()+";"})}},k=function(a){if(!a)return e.log("REST result is null"),null;if(!a.link||!f.isArray(a.link))return e.log("No link for result with title: "+a.title),null;if(!a.title)return e.log("No title for result with id: "+a.id),null;var c={href:encodeURI(d.REST.findLink(a.link)),name:d.safeHTML(a.title),spaceName:d.safeHTML(d.REST.findSpaceName(a)),
restObj:a};a.thumbnailLink?c.icon=a.thumbnailLink.href+(a.version?"?version\x3d"+a.version+"\x26modificationDate\x3d":""):c.className=a.iconClass||"content-type-"+a.type+("space"==a.type?"desc":"");return c};d.REST={getBaseUrl:function(){return"/rest/prototype/1/"},makeUrl:function(a){return e.contextPath()+"/rest/prototype/1/"+a},findLink:function(a,c,b){c||(c="text/html");b||(b="alternate");if(f.isArray(a))for(var h=0,e=a.length;h<e;h++){var g=a[h];if(g.type==c&&g.rel==b)return g.href}return"#"},
findSpaceName:function(a){return a.space?a.space.name:""},convertFromRest:function(a){for(var c=[],b,e,d=0,g=a.length;d<g;d++){b=[];for(var f=0,l=a[d].length;f<l;f++)(e=k(a[d][f]))&&b.push(e);b.length&&c.push(b)}return c},wikiLink:function(a){var c=a.title,b=a.wikiLink&&a.wikiLink.slice(1,-1);b&&"attachment"==a.type&&a.space&&a.space.key==e.Meta.get("space-key")&&a.ownerId==e.params.attachmentSourceContentId&&(b=b.substring(b.indexOf("^")));var d=b&&(c!=b?c+"|":"")+b;e.log("AJS.Editor.Autocompleter.Manager.makeLinkDetails \x3d\x3e"+
d);return{alias:c,destination:b,href:this.findLink(a.link),wikiMarkup:d}},makeRestMatrixFromData:function(a,c){var b=[];(a=a[c])&&a.length&&b.push(a);return b},makeRestMatrixFromSearchData:function(a,c){var b=[];if(c=a[c||"group"]){a={content:[],attachment:[],userinfo:[],spacedesc:[],page:[],blogpost:[],comment:[],personalspacedesc:[],mail:[]};for(var d=0,f=c.length;d<f;d++){var g=c[d];a[g.name]&&a[g.name].push(g.result)}b=b.concat(a.content,a.attachment,a.userinfo,a.spacedesc,a.page,a.blogpost,a.comment,
a.personalspacedesc,a.mail)}else e.log("makeRestMatrixFromData","WARNING: Unknown rest object",a);return b}};return d});require("confluence/module-exporter").safeRequire("confluence-rest/confluence-rest",function(e){var f=require("ajs");f.safeHTML=e.safeHTML;f.REST=e.REST});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:userlink', location = 'includes/js/content-hover.js' */
define("confluence/content-hover",["jquery","ajs"],function(h,u){var n={fadeTime:100,hideDelay:500,showDelay:700,loadDelay:50,width:300,mouseMoveThreshold:10,container:"body"};return function(p,e,q,r,t){var d=h.extend(!1,n,t),f,g,k=function(){var b=h("#content-hover-"+e);b.length?f=b.find(".contents"):(h(d.container).append(h('\x3cdiv id\x3d"content-hover-'+e+'" class\x3d"ajs-content-hover aui-box-shadow"\x3e\x3cdiv class\x3d"contents"\x3e\x3c/div\x3e\x3c/div\x3e')),b=h("#content-hover-"+e),f=b.find(".contents"),
f.css("width",d.width+"px").mouseover(function(){var c=k()[0];clearTimeout(c.hideDelayTimer);b.unbind("mouseover")}).mouseout(function(){l()}),f.click(function(b){b.stopPropagation()}));return b},m=function(){var b=k(),c=b[0];b.is(":visible")||(c.showTimer=setTimeout(function(){if(c.contentLoaded&&c.shouldShow){c.beingShown=!0;var a=h(window),f=g.x-3,e=g.y+15;f+d.width+30>a.width()?b.css({right:"20px",left:"auto"}):b.css({left:f+"px",right:"auto"});a=(window.pageYOffset||document.documentElement.scrollTop)+
a.height();e+b.height()>a&&(e=a-b.height()-5,b.mouseover(function(){var a=k()[0];clearTimeout(a.hideDelayTimer)}).mouseout(function(){l()}));b.css({top:e+"px"});b.fadeIn(d.fadeTime,function(){c.beingShown=!1})}},d.showDelay))},l=function(){var b=k(),c=b[0];c.beingShown=!1;c.shouldShow=!1;clearTimeout(c.hideDelayTimer);clearTimeout(c.showTimer);clearTimeout(c.loadTimer);c.contentLoading=!1;c.shouldLoadContent=!1;c.hideDelayTimer=setTimeout(function(){b.fadeOut(d.fadeTime)},d.hideDelay)};p.mousemove(function(b){g=
{x:b.pageX,y:b.pageY};var c=k(),a=c[0];a.beingShown||clearTimeout(a.showTimer);a.shouldShow=!0;if(!a.contentLoaded)if(a.contentLoading){if(a.shouldLoadContent&&(g.x-a.initialMousePosition.x)*(g.x-a.initialMousePosition.x)+(g.y-a.initialMousePosition.y)*(g.y-a.initialMousePosition.y)>d.mouseMoveThreshold*d.mouseMoveThreshold){a.contentLoading=!1;a.shouldLoadContent=!1;clearTimeout(a.loadTimer);return}}else a.initialMousePosition=g,a.shouldLoadContent=!0,a.contentLoading=!0,a.loadTimer=setTimeout(function(){a.shouldLoadContent&&
f.load(q,function(){a.contentLoaded=!0;a.contentLoading=!1;r.call(c,e);m()})},d.loadDelay);clearTimeout(a.hideDelayTimer);a.beingShown||m()}).mouseout(function(){l()});h("body").click(function(){var b=k(),c=b[0];c.beingShown=!1;clearTimeout(c.hideDelayTimer);clearTimeout(c.showTimer);b.hide()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/root.js' */
define("confluence/root","ajs jquery window confluence-rest/confluence-rest confluence/api/constants confluence/get-content-id confluence/get-xsrf-token confluence/unescape-entities confluence/hint-manager confluence/place-focus".split(" "),function(c,e,g,h,f,k,l,m,n,p){var a={getContextPath:function(){return f.CONTEXT_PATH},getBaseUrl:function(){return f.BASE_URL},getBuildNumber:function(){return c.Meta.get("build-number")}};a.getContentId=k;a.getXsrfToken=l;a.runBinderComponents=function(){for(var b in a.Binder)if(a.Binder.hasOwnProperty(b))try{a.Binder[b]()}catch(d){c.logError("Exception in initialising of component '"+
b+"': "+d.message)}};a.unescapeEntities=m;a.sessionCheck=function(a,d){var b=c.Meta.get("atlassian-account-id");if(b){var f=this.getContextPath()+h.REST.getBaseUrl()+"session/check/"+b,g=this;return e.getJSON(f).done(function(){c.debug("SESSION CHECK - OK - "+b)}).fail(function(){c.log("SESSION CHECK - FAIL - "+b);g.sessionFail(a,d)})}};a.sessionFail=function(a,d){if(!a){var b=e(".aui-dialog:visible");if(b.length)a=b.find(".dialog-panel-body").empty(),b.find(".aui-button").attr("disabled","disabled");
else throw Error("sessionFail method really expected a visible dialog about now :/");}d||(d=c.format("Your session has expired. Please {0}reload{1} the page to try again.",'\x3ca class\x3d"reload" href\x3d""\x3e',"\x3c/a\x3e"),a.on("click","a.reload",function(){g.location.reload()}));c.messages.warning(a,{body:d,closeable:!1,shadowed:!0})};a.Binder={placeFocus:p};a.hintManager=n;return a});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/root","Confluence",function(c){var e=require("ajs");e.toInit(function(){c.runBinderComponents()});e.Confluence=c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/localstorage-cache.js' */
define("confluence/localstorage-cache",["confluence/object-cache","jquery","window"],function(g,h,b){var c=function(a,d){this.cache={};this.cacheStack=[];this.cacheSize=d||30;if(b.localStorage&&!("string"!==typeof a&&0<a.length)){a="Confluence."+a;var c=a+".cache",e=a+".cacheStack";a=b.localStorage.getItem(c);d=b.localStorage.getItem(e);var f=this;if(a&&d)try{this.cache=JSON.parse(a),this.cacheStack=JSON.parse(d)}catch(k){this.cache={},this.cacheStack={}}h(b).unload(function(){b.localStorage[c]=JSON.stringify(f.cache);
b.localStorage[e]=JSON.stringify(f.cacheStack)})}};c.prototype=new g;return c});require("confluence/module-exporter").exportModuleAsGlobal("confluence/localstorage-cache","AJS.Confluence.localStorageCacheManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/quicksearchdropdown.js' */
define("confluence/quicksearchdropdown","jquery ajs window document confluence/input-driven-dropdown confluence-rest/confluence-rest".split(" "),function(e,t,n,p,u,v){return function(c,q,a){q&&(a.onShow=q);a.makeParams=a.makeParams||function(b){return{query:b}};var r=function(b){b.statusMessage?b=[[{html:b.statusMessage,className:"error"}]]:a.makeRestMatrixFromData?(b=a.makeRestMatrixFromData(b),b=v.REST.convertFromRest(b),a.addDropdownData&&(b=a.addDropdownData(b))):b=b.contentNameMatches;return b},
k,l;"function"===typeof c?(l=c(),k=function(b){var a=c();a!=l&&(l=a,b.clearCache());return a}):k=function(){return c};a.getDataAndRunCallback=a.getDataAndRunCallback||function(b,m){var f=this,h=k(f,b);if(void 0==a.includeUrlPrefix||a.includeUrlPrefix)h=(t.Meta.get("context-path")||"")+h;var c=e.data(f,"lastRequest");c&&c.abort();c=e.ajax({type:"GET",dataType:"json",url:h,xhrFields:{withCredentials:!0},data:a.makeParams(b),success:function(a,c){e(n).trigger("quicksearch.ajax-success",{url:h,json:a,
resultStatus:c});p.activeElement==d[0]&&(c=r(a),a.results&&0<a.results.length?m.call(f,c,b,a.queryTokens):m.call(f,c))},global:!1,timeout:5E3,error:function(a,c,g){e(n).trigger("quicksearch.ajax-error",{url:h,xmlHttpRequest:a,resultStatus:c,errorThrown:g});p.activeElement==d[0]&&"timeout"==c&&(a=r({statusMessage:"Timeout",query:b}),m.call(f,a,null))},complete:function(){e.removeData(f,"lastRequest");d.trigger("quick-search-loading-stop")}});e.data(f,"lastRequest",c);d.trigger("quick-search-loading-start")};
var g=new u("inputdriven-dropdown",a),d=e(this);d.keyup(function(a){13!==a.which&&9!==a.which&&!d.hasClass("placeholded")&&g.change(this.value,!1,function(a){d.attr("data-last-search",a)})});d.quickSearchControl=g;d.bind("clearCache.autocomplete",function(){g.clearCache()});d.bind("hide.autocomplete",function(){g.hide()});return d}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/quicksearchdropdown","AJS.$.fn.quicksearch");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/placeholder.js' */
define("confluence/placeholder",["jquery","document"],function(b,f){return function(e){e=e||f.body;var g=["autocomplete-multiuser","select2-input"];"placeholder"in f.createElement("input")||b('textarea[placeholder][data-placeholder-bound!\x3d"true"],input[placeholder][data-placeholder-bound!\x3d"true"],input.default-text[data-placeholder-bound!\x3d"true"]',e).each(function(){for(var a=b(this).attr("data-placeholder-bound","true"),c=0,d=g.length;c<d;++c)if(a.hasClass(g[c]))return;a.bind("reset.placeholder",
function(a,b){b.element.closest("form").bind("submit",function(){b.element.hasClass("placeholded")&&b.element.val("")})});c=function(){if(!b.trim(a.val()).length){var c=a.attr("placeholder")||a.attr("data-default-text");a.val(c).addClass("placeholded").trigger("reset.placeholder",{element:a,defaultText:c});a.trigger("reset.default-text")}};d=function(){a.hasClass("placeholded")&&(a.val(""),a.removeClass("placeholded"))};c();a.blur(c).focus(d).mousedown(d)})}});
require("confluence/module-exporter").safeRequire("confluence/placeholder",function(b){AJS.Confluence.Binder.placeholder=b;Confluence.Binder.inputDefaultText=b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/inserter.js' */
define("confluence/inserter",["jquery","ajs"],function(a,k){return function(){a('.insert-on-event[data-inserter-bound!\x3d"true"]').each(function(){var b=a(this).attr("data-inserter-bound","true"),f=a(b.attr("data-target"))[0],c=b.attr("data-event"),d=b.attr("data-insert-position"),g=b.attr("data-insert-unique-key");f&&c&&d&&a(self).bind(c,function(c,e){if(f==e.target){if(g){c=e.content[g];var h={};a(".key-holder",d).each(function(){h[a(this).attr("data-key")]=!0});if(c in h)return}a(d).append(k.template(b.text()).fill(e.content))}})})}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/inserter","AJS.Confluence.Binder.insertOnEvent");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/components/binders/autocomplete-user.js' */
define("confluence/autocomplete-user",["jquery","ajs","document","confluence-rest/confluence-rest","confluence/api/constants"],function(c,k,l,p,q){return function(f){f=f||l.body;var r=function(d){if(!d||!d.result)throw Error("Invalid JSON format");c.each(d.result,function(a,c){c.key=c.username||c.name;"group"===c.type&&(c.title=c.name,c.link=[],c.thumbnailLink={href:k.contextPath()+"/images/icons/avatar_group_48.png"})});var g=[];g.push(d.result);return g};c.each(["user","group","user-or-group"],
function(d,g){c("input.autocomplete-"+g+'[data-autocomplete-user-or-group-bound!\x3d"true"]',f).each(function(){var a=c(this).attr("data-autocomplete-user-or-group-bound","true").attr("autocomplete","off"),d=a.attr("data-max")||10,f=a.attr("data-alignment")||"left",m=a.attr("data-dropdown-target"),e=null,n=a.attr("data-target"),k=a.attr("data-show-unlicensed"),l=a.attr("data-search-external"),t=a.attr("data-search-internal"),h=n&&c(n);m?e=c(m):(e=c("\x3cdiv\x3e\x3c/div\x3e"),a.after(e));a.attr("data-resize-to-input")&&
(e.width(a.outerWidth()),e.addClass("resize-to-input"));e.addClass("aui-dd-parent autocomplete");"user"===g?a.quicksearch("/rest/api/search",function(){a.trigger("open.autocomplete-user-or-group");a.trigger("open.autocomplete-user")},{makeParams:function(a){return{limit:d,cql:'user.fullname~"'+a+'"'}},dropdownPlacement:function(a){e.append(a)},makeRestMatrixFromData:function(a){if(!a||!a.results)throw Error("Invalid JSON format");c.each(a.results,function(a,b){b.key=b.user.accountId;b.username=b.user.username;
b.title=b.user.displayName;b.thumbnailLink={href:b.user.profilePicture.path||q.CONTEXT_PATH+"/images/icons/profilepics/default.png"};b.link=[{href:"/people/"+b.user.accountId,type:"text/html",rel:"alternate"}]});var b=[];b.push(a.results);return b},addDropdownData:function(c){if(!c.length){var b=a.attr("data-none-message");b&&c.push([{name:b,className:"no-results",href:"#"}])}return c},ajsDropDownOptions:{alignment:f,displayHandler:function(a){return a.name},selectionHandler:function(u,b){b.find(".search-for").length?
(a.trigger("selected.autocomplete-user-or-group",{searchFor:a.val()}),a.trigger("selected.autocomplete-user",{searchFor:a.val()})):(b.find(".no-results").length||(b=c("span:eq(0)",b).data("properties"),h?(a.val(b.restObj.title),h.val(b.restObj.key)):a.val(b.restObj.key),a.trigger("selected.autocomplete-user-or-group",{content:b.restObj}),a.trigger("selected.autocomplete-user",{content:b.restObj})),this.hide(),u.preventDefault())}}}):a.quicksearch(p.REST.getBaseUrl()+"search/"+g+".json",function(){a.trigger("open.autocomplete-user-or-group")},
{makeParams:function(a){return{"max-results":d,query:a,"show-unlicensed":k,groupType:l?"externalCollaborator":t?"licensedUser":"all"}},dropdownPlacement:function(a){e.append(a)},makeRestMatrixFromData:r,addDropdownData:function(c){if(!c.length){var b=a.attr("data-none-message");b&&c.push([{name:b,className:"no-results",href:"#"}])}return c},ajsDropDownOptions:{alignment:f,displayHandler:function(a){return a.name},selectionHandler:function(d,b){b.find(".search-for").length?a.trigger("selected.autocomplete-user-or-group",
{searchFor:a.val()}):(b.find(".no-results").length||(b=c("span:eq(0)",b).data("properties"),h?(a.val(b.restObj.title),h.val(b.restObj.key)):a.val(b.restObj.key),a.trigger("selected.autocomplete-user-or-group",{content:b.restObj})),this.hide(),d.preventDefault())}}})})})}});require("confluence/module-exporter").safeRequire("confluence/autocomplete-user",function(c){Confluence.Binder.autocompleteUserOrGroup=c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/autocomplete-content.js' */
define("confluence/autocomplete-content",["jquery","document","ajs","confluence-rest/confluence-rest"],function(b,e,f,t){var u=function(a){if(!a||!a.group)throw Error("Invalid JSON format");for(var b=[],f=0,e=a.group.length;f<e;f++)b.push(a.group[f].result);return b},d=function(a,k,e,d){var c=b(a);if(!c.attr("data-autocomplete-content-bound")){"string"===typeof k&&(k=[k]);c.attr("data-autocomplete-content-bound","true").attr("autocomplete","off");var g=k.join(","),h=c.attr("data-max")||10;a=c.attr("data-alignment")||
"left";var m=c.attr("data-spacekey"),n=c.attr("data-none-message"),p=c.attr("data-search-link-message"),v=c.attr("data-template")||e,q=c.attr("data-target"),r=c.attr("data-dropdown-target"),l=null;r?l=b(r):(l=b("\x3cdiv\x3e\x3c/div\x3e"),c.after(l));l.addClass("aui-dd-parent autocomplete");c.focus(function(){m=c.attr("data-spacekey")});c.quicksearch(t.REST.getBaseUrl()+"search/name.json",null,{onShow:function(){c.trigger("open.autocomplete-content",{contentTypes:k})},makeParams:function(a){a={"max-results":h,
pageSize:h,type:g,query:a};m&&(a.spaceKey=m);return a},dropdownPlacement:function(a){l.append(a)},makeRestMatrixFromData:u,addDropdownData:function(a){a.length||n&&a.push([{name:n,className:"no-results",href:"#"}]);if(p){var b=f.escapeHtml(c.val()),b=f.format(p,b);a.push([{className:"search-for",name:b,href:"#"}])}return a},ajsDropDownOptions:{alignment:a,displayHandler:d,selectionHandler:function(a,d){f.debug("autocomplete-content: ajsDropDownOptions.selectionHandler");if(d.find(".search-for").length)c.trigger("selected.autocomplete-content",
{contentTypes:k,searchFor:c.val()});else{if(d.find(".no-results").length)f.debug("no results selected");else{var g=d.data("properties");c.val(f.template(v).fillHtml(g.restObj));if(q){var h=f.template(e).fillHtml(g.restObj);b(q).val(h)}c.trigger("selected.autocomplete-content",{contentTypes:k,content:g.restObj,selection:d})}this.hide();a.preventDefault()}}}})}},g={autocompleteSpace:function(a){a=a||e.body;b("input.autocomplete-space",a).each(function(){d(this,["spacedesc","personalspacedesc"],"{name}",
function(a){return a.name})})},autocompleteAttachment:function(a){a=a||e.body;b("input.autocomplete-attachment",a).each(function(){d(this,"attachment","{fileName}",function(a){return a.restObj&&a.restObj.fileName||a.name})})}},h=function(a){return a.restObj&&a.restObj.title&&f.escapeHtml(a.restObj.title)||a.name};g.autocompletePage=function(a){a=a||e.body;b("input.autocomplete-page",a).each(function(){d(this,"page","{title}",h)})};g.autocompleteBlogpost=function(a){a=a||e.body;b("input.autocomplete-blogpost",
a).each(function(){d(this,"blogpost","{title}",h)})};g.autocompleteConfluenceContent=function(a){a=a||e.body;b("input.autocomplete-confluence-content",a).each(function(){d(this,["page","blogpost"],"{title}",h)})};g.autocompleteSearch=function(a){a=a||e.body;b("input.autocomplete-search",a).each(function(){d(this,[],"{title}",h)})};return g});
require("confluence/module-exporter").safeRequire("confluence/autocomplete-content",function(b){Confluence.Binder.autocompleteSpace=b.autocompleteSpace;Confluence.Binder.autocompleteAttachment=b.autocompleteAttachment;Confluence.Binder.autocompletePage=b.autocompletePage;Confluence.Binder.autocompleteBlogpost=b.autocompleteBlogpost;Confluence.Binder.autocompleteConfluenceContent=b.autocompleteConfluenceContent;Confluence.Binder.autocompleteSearch=b.autocompleteSearch});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/attachment-uploader.js' */
define("confluence/attachment-uploader",["ajs","jquery"],function(b,d){var k=function(e,g){var a;return d.extend({getForm:function(){return d("form",e.baseElement)},getUploadingMessageElement:function(){return d(".upload-in-progress",e.baseElement)},pack:function(){},displayErrors:function(f){a.displayMessages(f);this.pack()},clearErrors:function(){a.clearMessages();this.pack()},setUploadInProgress:function(a,c){var h=this.getUploadingMessageElement();a&&h.html(c||this.getDefaultUploadingMessage());
b.setVisible(h,a);b.setVisible(this.getForm(),!a)},onUploadSuccess:function(){},getMessageHandler:function(){a||(a=b.MessageHandler({baseElement:d(".warning",e.baseElement)}));return a},getDefaultErrorMessage:function(){return "Could not upload the file to Confluence. The server may be unavailable."},getDefaultUploadingMessage:function(){return "File uploading\u2026"},getContentId:function(){return b.Meta.get("attachment-source-content-id")}},g&&g(e))};return function(e,d){var a,f,c;a=k(e,d);f=a.getMessageHandler();
c=a.getForm();b.Meta.getBoolean("can-attach-files")?(c.ajaxForm({dataType:"json",timeout:36E5,data:{contentId:a.getContentId(),responseFormat:"html"},resetForm:!0,beforeSubmit:function(){a.setUploadInProgress(!0);f.clearMessages()},success:function(b){a.setUploadInProgress(!1);if(!f.handleResponseErrors(b,a.getDefaultErrorMessage()))a.onUploadSuccess(b.attachmentsAdded||[])},error:function(c){a.setUploadInProgress(!1);f.displayMessages(a.getDefaultErrorMessage());b.logError("Response from server was: "+
c.responseText)}}),c.find("input:file").change(function(){c.submit()})):c.remove();return a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/components/binders/hover-user.js' */
define("confluence/hover-user",["jquery","confluence/dark-features","confluence/content-hover","ajs","confluence/meta"],function(b,k,l,f,g){var d=[],h=f.contextPath();if(g.get("remote-user")&&!g.get("remote-user-has-licensed-access"))return b.noop;var n=function(a){var c=d[a],e={username:c,target:this};b(self).trigger("hover-user.open",e);b(".ajs-menu-bar",this).ajsMenu();b(".follow, .unfollow",this).each(function(){var a=b(this).click(function(d){if(!a.hasClass("waiting")){var m=a.hasClass("unfollow")?
"/unfollowuser.action":"/followuser.action";a.addClass("waiting");f.safe.post(h+m+"?username\x3d"+encodeURIComponent(c)+"\x26mode\x3dblank",{},function(){a.removeClass("waiting");a.parent().toggleClass("follow-item").toggleClass("unfollow-item");b(self).trigger("hover-user.follow",e)});return f.stopEvent(d)}})});b("a.confluence-userlink,a.user-profile-link",this).each(function(){var a=this.href;a.includes("?src\x3d")||a.includes("\x26src\x3d")||(this.href=a.concat(a.includes("?")?"\x26":"?","src\x3dprofilecard"));
this.target||(this.target="_blank")})},p=k.isEnabled("show.business.group.in.user.hover");return function(){b("span.user-hover-trigger, a.confluence-userlink, img.confluence-userlink, a.userLogoLink").filter("[data-user-hover-bound!\x3d'true']").each(function(){var a=b(this),c=a.attr("data-username");if(c){a.attr("title","").attr("data-user-hover-bound","true");b("img",a).attr("title","");var e=b.inArray(c,d);-1===e&&(d.push(c),e=b.inArray(c,d));a.addClass("userlink-"+e)}});b.each(d,function(a){var c=
h+"/users/userinfopopup.action?username\x3d"+encodeURIComponent(d[a]);p&&(c+="\x26profileGroups\x3dbusiness");l(b(".userlink-"+a),a,c,n)})}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/hover-user","Confluence.Binder.userHover");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/favourites.js' */
define("confluence/favourites",["jquery","ajs"],function(a,d){var h=[],n=function(b,c,e){var a=e.hasClass("icon-remove-fav"),g=e.parent().find(".icon-wait"),f,k;"page"==c?(f=d.contextPath()+"/json/"+(a?"removefavourite.action":"addfavourite.action"),k={entityId:b}):"space"==c?(f=d.contextPath()+"/json/"+(a?"removespacefromfavourites.action":"addspacetofavourites.action"),k={key:b}):console.error("Unsupported type: "+c);e.addClass("hidden");g.removeClass("hidden");d.safe.ajax({url:f,type:"POST",data:k}).done(function(a){d.debug(a)}).fail(function(a,
b,c){d.debug("Error Toggling Favourite: "+b)}).always(function(){g.addClass("hidden");e.parent().find(a?".icon-add-fav":".icon-remove-fav").removeClass("hidden");delete h[b];d.trigger(a?"remove-fav-complete":"add-fav-complete")})},m=function(b,c){b.attr("data-favourites-bound")||(b.delegate(".icon-add-fav, .icon-remove-fav","click",function(e){e=a(e.target);var l=b.attr("data-entity-type"),g=b.attr("data-entity-scope"),f;f=c&&c.getEntityId&&"function"==typeof c.getEntityId?c.getEntityId(e):b.attr("data-entity-id");
if(h[f])d.log("Already busy toggling favourite for "+l+" '"+f+"'. Ignoring request.");else{if(g){var k=e.hasClass("icon-remove-fav")?"unfavourite":"favourite",g=["confluence",g,l,k,"click"].join(".");d.trigger("analytics",{name:g,data:{id:f}})}h[f]=!0;n(f,l,e);return!1}}),b.attr("data-favourites-bound",!0))};return{binder:function(){a(".entity-favourites").each(function(){a(this).attr("data-favourites-bound")||m(a(this),{})})},plugin:function(b){a(this).each(function(){var c=a(this);m(c,b)})}}});
require("confluence/module-exporter").safeRequire("confluence/favourites",function(a){var d=require("ajs"),h=require("jquery");d.Confluence.Binder.favourites=a.binder;h.fn.favourites=a.plugin});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/js/watches.js' */
define("confluence/watches",["ajs","jquery","confluence/api/constants"],function(g,e,f){var h=[],p=function(a){return a.hasClass("icon-stop-watching")||a.hasClass("link-stop-watching")},q=function(a,b,d){var c=p(d),e=d.hasClass("icon-stop-watching"),l=d.parent().find(".icon-wait"),k,m;"page"==b&&(k=c?f.CONTEXT_PATH+"/rest/api/user/watch/content/"+a:f.CONTEXT_PATH+"/users/addpagenotificationajax.action",m={pageId:a});"space"==b&&(k=c?f.CONTEXT_PATH+"/rest/api/user/watch/space/"+a:f.CONTEXT_PATH+"/users/addspacenotificationajax.action",
m={spaceKey:a});b=c?{"content-type":"application/json"}:{"content-type":"application/x-www-form-urlencoded; charset\x3dUTF-8"};d.addClass("hidden");l.removeClass("hidden");g.safe.ajax({url:k,type:c?"DELETE":"POST",data:m,headers:b,success:function(b){g.log(b);l.addClass("hidden");e?d.parent().find(c?".icon-start-watching":".icon-stop-watching").removeClass("hidden"):d.parent().find(c?".link-start-watching":".link-stop-watching").removeClass("hidden");delete h[a]},error:function(b,f,k){l.addClass("hidden");
e?d.parent().find(c?".icon-start-watching":".icon-stop-watching").removeClass("hidden"):d.parent().find(c?".link-start-watching":".link-stop-watching").removeClass("hidden");g.log("Error Toggling Watching: "+f);delete h[a]}})},n=function(a,b){a.attr("data-watching-bound")||(a.delegate(".icon-start-watching, .icon-stop-watching, .link-start-watching, .link-stop-watching","click",function(d){d=e(d.target);var c,f=a.attr("data-entity-type");c=b&&b.getEntityId&&"function"===typeof b.getEntityId?b.getEntityId(d):
a.attr("data-entity-id");if(h[c])g.log("Already busy toggling favourite for "+f+" '"+c+"'. Ignoring request.");else return h[c]=!0,q(c,f,d),!1}),a.attr("data-watching-bound",!0))};return{binder:function(){e(".entity-watching").each(function(){e(this).attr("data-watching-bound")||n(e(this),{})})},plugin:function(a){e(this).each(function(){var b=e(this);n(b,a)})}}});
require("confluence/module-exporter").safeRequire("confluence/watches",function(g){var e=require("ajs"),f=require("jquery");e.Confluence.Binder.watching=g.binder;f.fn.watching=g.plugin});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:core', location = 'includes/soy/dialog.soy' */
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.customHelpLink({href: opt_data.href, text: '' + soy.$$escapeHtml('Help')});
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.helpLink.soyTemplateName = 'Confluence.Templates.Dialog.helpLink';
}


Confluence.Templates.Dialog.customHelpLink = function(opt_data, opt_ignored) {
  return '<div class="dialog-help-link"><a href="' + soy.$$escapeHtml(opt_data.href) + '" target="_blank">' + soy.$$escapeHtml(opt_data.text) + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.customHelpLink.soyTemplateName = 'Confluence.Templates.Dialog.customHelpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:jquery-autocomplete-deprecated', location = 'node_modules/@atlassian/aui/src/js/jquery/jquery.autocomplete.js' */
(function(d){d.fn.autocomplete=function(n,g,j){function m(){f.hide();d(document).unbind("click",m)}function o(){var e=b.val();e.length>=g&&e!=b[0].lastQuery&&e!=b[0].lastSelectedValue?(d.getJSON(n+encodeURI(e),function(a){var b="";e=e.toLowerCase();for(var i=e.split(" "),c=0,g=a.length;c<g;c++){var j=!1;if(a[c].fullName&&a[c].username){for(var n=a[c].fullName+" ("+a[c].username+")",k=a[c].fullName.split(" "),l=0,o=k.length;l<o;l++)for(var h=0;h<i.length;h++)0==k[l].toLowerCase().indexOf(i[h])&&(k[l]=
"<strong>"+k[l].substring(0,i[h].length)+"</strong>"+k[l].substring(i[h].length),j=!0);if(!j)for(h=0;h<i.length;h++)a[c].username&&0==a[c].username.toLowerCase().indexOf(i[h])&&(a[c].username="<strong>"+a[c].username.substring(0,i[h].length)+"</strong>"+a[c].username.substring(i[h].length));a[c].fullName=k.join(" ");b+="<li><span>"+a[c].fullName+"</span> <span class='username-in-autocomplete-list'>("+a[c].username+")</span><i class='fullDetails'>"+n+"</i><i class='username'>"+a[c].username+"</i><i class='fullName'>"+
a[c].fullName+"</i></li>"}a[c].status&&(b+="<li>"+a[c].status+"</li>")}f.html(b);d("li",f).click(function(a){a.stopPropagation();a=d("i.fullDetails",this).html();p(a)}).hover(function(){d(".focused").removeClass("focused");d(this).addClass("focused")},function(){});d(document).click(m);f.show()}),b[0].lastQuery=e):e.length<g&&m()}function p(e){var a=b.val();e&&(b[0].lastSelectedValue=e,b.val(e),e={input:b,originalValue:a,value:e,fullName:d(".focused i.fullName").text(),username:d(".focused i.username").text()},
j(e),m())}var j="function"==typeof g?g:"function"==typeof j?j:function(){},g=!isNaN(Number(g))?g:3,b=this;b[0].lastSelectedValue=b.val();var f=d(document.createElement("ol"));b.offset();parseInt(d("body").css("border-left-width"));f.css({position:"absolute",width:b.outerWidth()-2+"px"});f.addClass("autocompleter");this.after(f);f.css({margin:Math.abs(this.offset().left-f.offset().left)>=Math.abs(this.offset().top-f.offset().top)?b.outerHeight()+"px 0 0 -"+b.outerWidth()+"px":"-1px 0 0 0"});f.hide();
b.keydown(function(b){var a=this;this.timer&&clearTimeout(this.timer);var g={40:function(){var a=d(".focused").removeClass("focused").next();a.length?a.addClass("focused"):d(".autocompleter li:first").addClass("focused")},38:function(){var a=d(".focused").removeClass("focused").prev();a.length?a.addClass("focused"):d("li:last",f).addClass("focused")},27:function(){m()},13:function(){var a=d(".focused i.fullDetails").html();p(a)},9:function(){this[13]();setTimeout(function(){a.focus()},0)}};"none"!=
f.css("display")&&b.keyCode in g&&(b.preventDefault(),g[b.keyCode]());this.timer=setTimeout(o,300)})};AJS.deprecate.prop(d.fn,"autocomplete",{displayName:"jquery.autocomplete.js",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-393."})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jquery-json', location = 'includes/js/third-party/jquery.json-2.3.js' */
(function(e){var k=/["\\\x00-\x1f\x7f-\x9f]/g,l={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};e.toJSON="object"===typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b=typeof a;if("undefined"!==b){if("number"===b||"boolean"===b)return""+a;if("string"===b)return e.quoteString(a);if("object"===b){if("function"===typeof a.toJSON)return e.toJSON(a.toJSON());if(a.constructor===Date){var d=a.getUTCMonth()+1,c=a.getUTCDate(),f=a.getUTCFullYear(),
b=a.getUTCHours(),g=a.getUTCMinutes(),h=a.getUTCSeconds();a=a.getUTCMilliseconds();10>d&&(d="0"+d);10>c&&(c="0"+c);10>b&&(b="0"+b);10>g&&(g="0"+g);10>h&&(h="0"+h);100>a&&(a="0"+a);10>a&&(a="0"+a);return'"'+f+"-"+d+"-"+c+"T"+b+":"+g+":"+h+"."+a+'Z"'}if(a.constructor===Array){d=[];for(c=0;c<a.length;c++)d.push(e.toJSON(a[c])||"null");return"["+d.join(",")+"]"}c=[];for(f in a){b=typeof f;if("number"===b)d='"'+f+'"';else if("string"===b)d=e.quoteString(f);else continue;b=typeof a[f];"function"!==b&&"undefined"!==
b&&(b=e.toJSON(a[f]),c.push(d+":"+b))}return"{"+c.join(",")+"}"}}};e.evalJSON="object"===typeof JSON&&JSON.parse?JSON.parse:function(a){return eval("("+a+")")};e.secureEvalJSON="object"===typeof JSON&&JSON.parse?JSON.parse:function(a){var b=a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(b))return eval("("+a+")");throw new SyntaxError("Error parsing JSON, source is not valid.");
};e.quoteString=function(a){return a.match(k)?'"'+a.replace(k,function(a){var b=l[a];if("string"===typeof b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)})+'"':'"'+a+'"'}})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:safe-ajax', location = 'includes/js/api/ajax.js' */
define("confluence/api/ajax",["jquery"],function(b){var a={},c=b.ajax;a.ajax=function(a){if(a.data&&"object"===typeof a.data)return a.data.atl_token=b("#atlassian-token").attr("content"),c(a)};a.get=function(e,d,f,g){b.ajax=a.ajax;try{return b.get.apply(b,arguments)}finally{b.ajax=c}};a.getScript=function(b,d){return a.get(b,null,d,"script")};a.getJSON=function(b,d,c){return a.get(b,d,c,"json")};a.post=function(e,d,f,g){b.ajax=a.ajax;try{return b.post.apply(b,arguments)}finally{b.ajax=c}};return a});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/api/ajax","AJS.safe",function(b){require("ajs").safeAjax=function(a){return b.ajax(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:effects', location = 'includes/js/effects.js' */
define("confluence/effects",["document"],function(b){return{setCookie:function(a,f,c,g,h,d,e,k){a=a+"\x3d"+escape(f);c&&(a+="; expires\x3d"+(new Date(c,g,h)).toGMTString());a=d?a+("; path\x3d"+escape(d)):a+"; path\x3d/";e&&(a+="; domain\x3d"+escape(e));k&&(a+="; secure");b.cookie=a},getCookie:function(a){return(a=b.cookie.match(a+"\x3d(.*?)(;|$)"))?unescape(a[1]):null},highlight:function(a){new Effect.Highlight(a,{endcolor:"#f0f0f0"})}}});
require("confluence/module-exporter").safeRequire("confluence/effects",function(b){window.setCookie=b.setCookie;window.getCookie=b.getCookie;window.highlight=b.highlight});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:master', location = 'includes/js/master.js' */
define("confluence/master",["confluence/effects","ajs","jquery"],function(b,c,e){return{init:function(c){c("#messageContainer .confluence-messages").each(function(){var a=this;b.getCookie(a.id)||(c(a).show(),c(".message-close-button",a).click(function(){c(a).slideUp();b.setCookie(a.id,!0)}))})},domready1:function(){var g={};c.I18n={keys:{},get:function(a,d,f){var b=!0,h=c.contextPath()+"/rest/prototype/1/i18n",k={locale:c.params.userLocale};if(e.isArray(a)){for(var l in a)g[l]||(b=!1);k.pluginKeys=
a}else b=g[a],h+="/"+a;b?"function"===typeof d&&d(c.I18n.keys):e.ajax({url:h,data:k,dataType:"json",success:function(b){c.I18n.load(b);g[a]=!0;"function"===typeof d&&d(b)},error:function(d,b){c.log("Error loading I18n for "+a+":"+b);"function"===typeof f&&f(b)}})},load:function(a){e.extend(c.I18n.keys,a)},getText:function(a,d){var b=c.params["i18n."+a]||c.I18n.keys[a]||a;if(!d)return b;2===arguments.length&&d instanceof Array?d.unshift(b):(d=Array.prototype.slice.call(arguments,0),d[0]=b);return c.format.apply(c,
d)}}},domready2:function(){var b=/^[\s\uFEFF]+/,a=/[\s\uFEFF]+$/;/\S/.test(" ")&&(b=/^[\s\uFEFF\xA0]+/,a=/[\s\uFEFF\xA0]+$/);c.trim=c.trim||function(c){return c?c.replace(b,"").replace(a,""):""}},selectableEffects:function(b,a,d){var f=e(this);d&&f.data("properties",d);f.click(function(d){var f=e(this);a&&a(this,f.data("properties"));b.find(".selected").removeClass("selected");f.addClass("selected");return c.stopEvent(d)});f.hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")})},
shortenUntil:function(b){for(var a=0;!b()&&a<this.length;){var c=e(this[a]).text();"…"==c?a++:e(this[a]).text(c.replace(/[^\u2026]\u2026?$/,"…"))}return this}}});require("confluence/module-exporter").safeRequire("confluence/master",function(b){var c=require("ajs"),e=require("jquery");c.toInit(b.init);b.domready1();b.domready2();e.fn.selectableEffects=b.selectableEffects;e.fn.shortenUntil=b.shortenUntil});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:template-renderer', location = 'includes/js/template-renderer.js' */
define("confluence/template-renderer",["jquery","ajs","confluence/meta"],function(b,d,n){function f(a){a=new String(a);a.isHtml=!0;return a}function g(a){a=a||document;b("script",a).each(function(){"text/x-template"===this.type&&(e[this.title]=f(this.text))})}function h(a){var c=e[a];c||(c=b('script[title\x3d"'+a+'"]',document),0===c.length?c=null:(e[a]=f(c[0].text),c=e[a]));return c}function k(a){return null==a?a:a.isHtml?""+a:(""+a).replace(/[&<>'"]/g,function(a){return p[a]||a})}function q(a){var c=
arguments;return a.replace(/\{(\d+)\}/g,function(a,b){b=c[parseInt(b,10)+1];return null!=b?b:a})}function m(a,c){var l=n.get("static-resource-url-prefix");0!==a.indexOf("http")&&0!==a.indexOf(l)&&(a=l+a);b.ajax({url:a,data:{locale:d.params.userLocale},dataType:"html",success:function(a){a=d("div").append(a);g(a);c&&c()}})}var e={},p={"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"};return{renderTemplate:function(a,c){if(!h(a))return"";b.isArray(c)||(c=Array.prototype.slice.call(arguments,
1));for(var d=[h(a).toString()],e=0;e<c.length;e++)d.push(k(c[e]));return q.apply(this,d)},loadTemplatesFromUrl:m,loadWebResourceTemplates:function(a,c,b){return m("/download/resources/"+a+"/"+c,b)},escapeEntities:k,getTemplate:h,loadTemplateScripts:g,html:f,init:function(){g()}}});
require("confluence/module-exporter").safeRequire("confluence/template-renderer",function(b){var d=require("ajs");d.renderTemplate=b.renderTemplate;d.loadTemplatesFromUrl=b.loadTemplatesFromUrl;d.loadWebResourceTemplates=b.loadWebResourceTemplates;d.escapeEntities=b.escapeEntities;d.getTemplate=b.getTemplate;d.loadTemplateScripts=b.loadTemplateScripts;d.html=b.html;d.toInit(b.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:menu', location = 'includes/js/menu.js' */
define("confluence/menu",["ajs","jquery","document","window"],function(e,b,f,h){var d={};e.menuShowCount=0;var k=function(a){b(a).closest(".ajs-menu-bar").find(".ajs-drop-down").each(function(b){this.hide()})},m=function(a){return b(a).closest(".ajs-menu-bar").hasClass("menu-bar-open")},n=function(a){b(a).closest(".ajs-menu-bar").addClass("menu-bar-open")},p=function(a){b(a).closest(".ajs-menu-bar").removeClass("menu-bar-open")};d.ajsMenu=function(a){a=a||{};b(".ajs-button",this).each(function(){b(this).mouseover(function(){var a=
this,g=m(a);k(a);if(g){var c=b(f),e=function(){p(a);return!1};c.unbind("click.menu");setTimeout(function(){c.one("click.menu",e)},1);n(a)}})});b(".ajs-menu-item",this).each(function(){b(this).ajsMenuItem(a)})};d.ajsMenuItem=function(a){a=a||{};var e=this,g=b(this),c=b(".ajs-drop-down",e);if(c.length){c=c[0];c.hidden=!0;c.focused=-1;c.hide=function(){if(!this.hidden){g.toggleClass("opened");0===b(e.parentNode).find(".opened").length&&p(e);var a=b("a",this);b(this).toggleClass("assistive");this.hidden=
!0;b(f).unbind("click",this.fhide).unbind("keydown",this.fmovefocus).unbind("keypress",this.blocker);this.focused+1&&b(a[this.focused]).removeClass("active");this.focused=-1}};c.show=function(){if("undefined"===typeof this.hidden||this.hidden){var c=this,d=b(this);d.toggleClass("assistive");g.toggleClass("opened");n(e);this.hidden=!1;this.timer=setTimeout(function(){b(f).click(c.fhide)},1);b(f).keydown(c.fmovefocus).keypress(c.blocker);var l=b("a",c);l.each(function(c){var a=this.parentNode.parentNode;
b(this).hover(function(e){a.focused+1&&b(l[a.focused].parentNode).removeClass("active");b(this.parentNode).addClass("active");a.focused=c},function(c){a.focused+1&&b(l[a.focused].parentNode).removeClass("active");a.focused=-1})});var q=h.pageYOffset||f.documentElement.scrollTop,r=q+b(h).height();d.removeClass("above");!a.isFixedPosition&&d.offset().top+d.height()>r&&(d.addClass("above"),d.offset().top<q&&d.removeClass("above"))}};c.isMenuBarOpened=function(){return m(c)};c.closeOthers=function(){k(c)};
c.fmovefocus=function(a){c.movefocus(a)};c.fhide=function(a){c.hide(a);return 0<b(a.target).closest(".ajs-drop-down").length};c.blocker=function(a){a=a.which;if(40===a||38===a)return!1};c.movefocus=function(a){var c=a.which,e=this.getElementsByTagName("a"),d=this.focused,g=9===c,f;do{switch(c){case 40:case 9:a.shiftKey?this.focused--:this.focused++;break;case 38:this.focused--;break;case 27:return this.hide(),!1;default:return!0}f=0>this.focused||this.focused>e.length-1}while(!f&&b(e[this.focused].parentNode).hasClass("assistive"));
if(g&&f)return-1!=d&&b(e[d].parentNode).removeClass("active"),this.focused=-1,this.hide(),!1;g||(0>this.focused?this.focused=e.length-1:this.focused>e.length-1&&(this.focused=0));0<=d&&b(e[d].parentNode).removeClass("active");e[this.focused].focus();b(e[this.focused].parentNode).addClass("active");a.stopPropagation();a.preventDefault();return!1};var d=b(".trigger",e);d.length&&(g.mouseover(function(){c.isMenuBarOpened()?c.hidden&&(k(c),c.show()):g.addClass("hover")}),g.mouseout(function(){c.isMenuBarOpened()||
g.removeClass("hover")}),d.click(function(){if(c.hidden){d.parent("li").removeClass("hover");var a=0<b(".ajs-menu-bar.menu-bar-open").length;c.show();return a}c.hide();d.parent("li").addClass("hover");return!1}))}};d.initialiser=function(a,b){a("#view-user-history-link").click(function(a){h.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width\x3d600, height\x3d400, scrollbars, resizable");a.preventDefault();return!1});var d=a("#action-menu-link");d.length&&d.next().addClass("most-right-menu-item");
a("#action-menu").on({"aui-dropdown2-show":function(){a(this).css({right:function(){return a(h).width()-d.offset().left-d.outerWidth(!0)-1},left:"auto"})}}).on({click:function(a){e.trigger("analyticsEvent",{name:"page-view-ellipsis-menu",data:{listItemClicked:a.target.id,pageId:e.Meta.get("page-id")}})}});a(".ajs-menu-bar").ajsMenu({isFixedPosition:!0})};d.ieHack=function(){b("#header-menu-bar .ajs-menu-item").each(function(){var a=b(this),d=b(".ajs-drop-down",this),a=a.width();a>d.width()&&(d.width(a.valueOf()+
50),e.log("Dropdown width override occurred"))});b("#user-menu-link-content .user-item").on("click",function(a){e.trigger("analyticsEvent",{name:"user-menu-item.clicked",data:{id:b(this).attr("id")}})});b("#user-menu-link-content").on({"aui-dropdown2-show":function(){e.trigger("analyticsEvent",{name:"confluence.user-menu.show"})},"aui-dropdown2-hide":function(a){e.trigger("analyticsEvent",{name:"confluence.user-menu.hide"})}})};return d});
require("confluence/module-exporter").safeRequire("confluence/menu",function(e){var b=require("jquery"),f=require("ajs");b.fn.ajsMenu=e.ajsMenu;b.fn.ajsMenuItem=e.ajsMenuItem;f.toInit(e.initialiser);f.toInit(e.ieHack)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jquery-simplescrollto', location = 'includes/js/third-party/jquery.simpleScrollTo-1.0.js' */
jQuery.fn.simpleScrollTo=function(a){var c=jQuery,b=c(this[0]),d=c(a).position().top;a=d+c(a).outerHeight()-b.outerHeight();0>d?b.scrollTop(b.scrollTop()+d):0<a&&b.scrollTop(b.scrollTop()+a);return this};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:websudo', location = 'includes/js/websudo.js' */
define("confluence/websudo",["jquery","ajs"],function(a,b){return function(){a("a#websudo-drop.drop-non-websudo").click(function(){a.getJSON(a(this).attr("href"),function(){a("li#confluence-message-websudo-message").slideUp(function(){b.trigger("confluence.header-resized")})});return!1})}});require("confluence/module-exporter").safeRequire("confluence/websudo",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jquery-cookie', location = 'includes/js/third-party/jquery.cookie.js' */
jQuery.cookie=function(d,c,a){if("undefined"!=typeof c){a=a||{};null===c&&(c="",a.expires=-1);var b="";a.expires&&("number"==typeof a.expires||a.expires.toUTCString)&&("number"==typeof a.expires?(b=new Date,b.setTime(b.getTime()+864E5*a.expires)):b=a.expires,b="; expires\x3d"+b.toUTCString());var e=a.path?"; path\x3d"+a.path:"",f=a.domain?"; domain\x3d"+a.domain:"";a=a.secure?"; secure":"";document.cookie=[d,"\x3d",encodeURIComponent(c),b,e,f,a].join("")}else{c=null;if(document.cookie&&""!=document.cookie)for(a=
document.cookie.split(";"),b=0;b<a.length;b++)if(e=jQuery.trim(a[b]),e.substring(0,d.length+1)==d+"\x3d"){c=decodeURIComponent(e.substring(d.length+1));break}return c}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugin.jslibs:skate-0.12.6', location = 'libs/skate/0.12.6/skate-0.12.6.js' */
(function e(g,c,j){function h(a,k){if(!c[a]){if(!g[a]){var d="function"==typeof require&&require;if(!k&&d)return d(a,!0);if(f)return f(a,!0);d=Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d;}d=c[a]={exports:{}};g[a][0].call(d.exports,function(c){var f=g[a][1][c];return h(f?f:c)},d,d.exports,e,g,c,j)}return c[a].exports}for(var f="function"==typeof require&&require,d=0;d<j.length;d++)h(j[d]);return h})({1:[function(b,g,c){Object.defineProperty(c,"__esModule",{value:!0});"use strict";
c.ATTR_IGNORE="data-skate-ignore";c.types={ANY:"act",ATTR:"a",CLASS:"c",NOATTR:"ct",NOCLASS:"at",NOTAG:"ac",TAG:"t"}},{}],2:[function(b,g){g.exports={get:function(c,b){if(c.__SKATE_DATA)return c.__SKATE_DATA[b]},set:function(c,b,h){c.__SKATE_DATA||(c.__SKATE_DATA={});c.__SKATE_DATA[b]=h;return c}}},{}],3:[function(b,g){function c(c){for(var f=c.length,b=0;b<f;b++){var i=c[b],o=i.addedNodes,i=i.removedNodes;o&&(o.length&&!p(o[0].parentNode))&&d(o);i&&i.length&&a(i)}}var j=function(c){return c&&c.__esModule?
c["default"]:c},h=j(b("./globals")),f=b("./lifecycle"),d=f.initElements,a=f.removeElements,k=j(b("./mutation-observer")),p=b("./utils").getClosestIgnoredElement;g.exports={register:function(a){a&&(k.fixIe(),this.unregister());h.observer||(a=new k(c),a.observe(document,{childList:!0,subtree:!0}),h.observer=a);return this},unregister:function(){h.observer&&(h.observer.disconnect(),h.observer=void 0);return this}}},{"./globals":4,"./lifecycle":5,"./mutation-observer":6,"./utils":9}],4:[function(b,g){window.__skate||
(window.__skate={observer:void 0,registry:{}});g.exports=window.__skate},{}],5:[function(b,g,c){function j(o,c,a){if(k.get(o,c.id+":lifecycle:"+a))return!0;k.set(o,c.id+":lifecycle:"+a,!0);return!1}function h(c,a){if(!j(c,a,"created")){m(c,a.prototype,!0);a.template&&a.template(c);var b=function(a,b){return function(f){if(!b)return a(c,f,c);for(var d=f.target;d&&d!==document&&d!==c.parentNode;){if(i.call(d,b))return a(c,f,d);d=d.parentNode}}};"object"===typeof a.events&&l(a.events,function(a,d){var f,
i;i=d.split(" ");f=i.shift();i=i.join(" ");c.addEventListener(f,b(a,i),!!i&&("blur"===f||"focus"===f))});var f=function(i,f,d,b){var k;a.attributes&&a.attributes[f]&&"function"===typeof a.attributes[f][i]?k=a.attributes[f][i]:a.attributes&&"function"===typeof a.attributes[f]?k=a.attributes[f]:"function"===typeof a.attributes&&(k=a.attributes);k&&k(c,{type:i,name:f,newValue:d,oldValue:b})},d,k=c.attributes,h=[],g=k.length;(new p(function(a){a.forEach(function(a){var c,i=a.attributeName,d=k[i];d&&null===
a.oldValue?c="created":d&&null!==a.oldValue?c="updated":d||(c="removed");f(c,i,d?d.value||d.nodeValue:void 0,a.oldValue)})})).observe(c,{attributes:!0,attributeOldValue:!0});for(d=0;d<g;d++)h.push(k[d]);for(d=0;d<g;d++){var n=h[d];f("created",n.nodeName,n.value||n.nodeValue)}a.created&&a.created(c)}}function f(c){for(var i=c.length,d=0;d<i;d++){var b=c[d];if(!(1!==b.nodeType||b.attributes[a])){for(var k=n.getForElement(b),g=k.length,m=0;m<g;m++){var l=b,p=k[m];h(l,p);j(l,p,"attached")||(l.removeAttribute(p.unresolvedAttribute),
l.setAttribute(p.resolvedAttribute,""),p.attached&&p.attached(l))}b=b.childNodes;b.length&&f(b)}}}function d(a){for(var c=a.length,i=0;i<c;i++){var f=a[i];if(1===f.nodeType){d(f.childNodes);for(var b=n.getForElement(f),g=b.length,j=0;j<g;j++){var h=f,m=b[j];m.detached&&m.detached(h);k.set(h,m.id+":lifecycle:attached",!1)}}}}g=function(a){return a&&a.__esModule?a["default"]:a};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var a=b("./constants").ATTR_IGNORE,k=g(b("./data")),p=g(b("./mutation-observer")),
n=g(b("./registry")),b=b("./utils"),m=b.inherit,l=b.objEach,b=window.HTMLElement.prototype,i=b.matches||b.msMatchesSelector||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector;c.triggerCreated=h;c.initElements=f;c.removeElements=d},{"./constants":1,"./data":2,"./mutation-observer":6,"./registry":7,"./utils":9}],6:[function(b,g){function c(a,c){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:a,
type:c||"childList"}}function j(a,c){var f=a.childNodes;if(f)for(var d=f.length,b=0;b<d;b++){var k=f[b];c(k);j(k,c)}}function h(a){if(n&&!m)return new n(a);this.callback=a;this.elements=[]}var f=b("./utils"),d=f.debounce,a=f.objEach,k=window.HTMLElement.prototype,p=window.HTMLElement.prototype.contains,n=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver,m=!1,l=-1<window.navigator.userAgent.indexOf("Trident");h.fixIe=function(){if(l&&!m){var a=Object.getOwnPropertyDescriptor(k,
"innerHTML");Object.defineProperty(k,"innerHTML",{get:function(){return a.get.call(this)},set:function(c){j(this,function(a){var c=document.createEvent("MutationEvent");c.initMutationEvent("DOMNodeRemoved",!0,!1,null,null,null,null,null);a.dispatchEvent(c)});a.set.call(this,c)}});m=!0}};Object.defineProperty(h,"isFixingIe",{get:function(){return m}});h.prototype={observe:function(a,f){function b(a){h.push(a);n()}var k=this,j,g,h=[],l=[],n=d(function(){for(var b=h.length,d=0;d<b;d++){var n=h[d],r=
n.target;if(r){var n=n.type,q=r.parentNode;if(f.childList&&(f.subtree||q===a)){var s=m&&"DOMNodeRemoved"===n,t=j&&(1!==j.nodeType?!1:j.contains?j.contains(r):p.call(j,r));if(s||!t){if(!g||g.target!==q)l.push(g=c(q));"DOMNodeInserted"===n?(g.addedNodes||(g.addedNodes=[]),g.addedNodes.push(r)):(g.removedNodes||(g.removedNodes=[]),g.removedNodes.push(r));j=r}}}}k.callback(l);h=[];l=[];g=j=void 0}),t={},q=[],u=d(function(){var a=q.length;k.callback(q);q.splice(0,a)}),s={target:a,options:f,insertHandler:b,
removeHandler:b,attributeHandler:function(d){var b=d.target;if(f.attributes&&(f.subtree||b===a)){var k=d.attrName,g=d.prevValue,d=d.newValue,b=c(b,"attributes");b.attributeName=k;f.attributeOldValue&&(b.oldValue=t[k]||g||null);q.push(b);f.attributeOldValue&&(t[k]=d);u()}}};this.elements.push(s);f.childList&&(a.addEventListener("DOMNodeInserted",s.insertHandler),a.addEventListener("DOMNodeRemoved",s.removeHandler));f.attributes&&a.addEventListener("DOMAttrModified",s.attributeHandler);return this},
disconnect:function(){a(this.elements,function(a){a.target.removeEventListener("DOMNodeInserted",a.insertHandler);a.target.removeEventListener("DOMNodeRemoved",a.removeHandler);a.target.removeEventListener("DOMAttrModified",a.attributeHandler)});this.elements=[];return this}};g.exports=h},{"./utils":9}],7:[function(b,g){function c(a,c){return d(j.registry,a)&&-1<j.registry[a].type.indexOf(c)}var j,h=b("./globals");j=h&&h.__esModule?h["default"]:h;var f=b("./constants.js").types,d=b("./utils").hasOwn;
g.exports={clear:function(){j.registry={};return this},getForElement:function(a){var d=a.attributes,b=d.length,g=[],h=d.is,l=h&&(h.value||h.nodeValue),h=a.tagName.toLowerCase(),i=l||h,o;c(i,f.TAG)&&(i=j.registry[i],o=i["extends"],l?h===o&&g.push(i):o||g.push(i));for(l=0;l<b;l++)i=d[l].nodeName,c(i,f.ATTR)&&(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));(d=a.classList)?a=d:(a=a.attributes,a=a["class"]&&a["class"].nodeValue.split(/\s+/)||[]);d=a.length;for(b=0;b<d;b++)i=a[b],c(i,f.CLASS)&&
(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));return g},has:function(a){return d(j.registry,a)},set:function(a,c){if(this.has(a))throw Error('A definition of type "'+c.type+'" with the ID of "'+a+'" already exists.');j.registry[a]=c;return this},remove:function(a){this.has(a)&&delete j.registry[a];return this}}},{"./constants.js":1,"./globals":4,"./utils":9}],8:[function(b,g){function c(a,b){b=n(b||{},c.defaults);b.id=a;if(k.has(b.id))throw Error('A definition of type "'+b.type+'" with the ID of "'+
a+'" already exists.');k.set(b.id,b);i();h.register(b.remove);if(-1<b.type.indexOf(m.TAG)){var f=b,g=function(){var a;a=f["extends"];var b=f.id;a?(a=document.createElement(a),a.setAttribute("is",b)):a=document.createElement(b);f.prototype=g.prototype;d(a,f);return a};g.prototype=f.prototype;return g}}var j=function(a){return a&&a.__esModule?a["default"]:a},h=j(b("./document-observer")),f=b("./lifecycle"),d=f.triggerCreated,a=f.initElements,k=j(b("./registry")),p=b("./utils"),f=p.debounce,n=p.inherit,
j=j(b("./version")),m=b("./constants").types,l=!!document.attachEvent,i=f(function(){var b=function(){a(document.getElementsByTagName("html"))},c;c=l?"complete"===document.readyState:"interactive"===document.readyState||"complete"===document.readyState;c?b():l?window.addEventListener("load",b):document.addEventListener("DOMContentLoaded",b)});c.init=function(b){if(b)return"string"===typeof b&&(b=document.querySelectorAll(b)),a("undefined"===typeof b.length?[b]:b),b};c.types=m;c.version=j;c.defaults=
{attributes:void 0,events:void 0,"extends":"",id:"",prototype:{},resolvedAttribute:"resolved",template:void 0,type:m.ANY,unresolvedAttribute:"unresolved"};var o=window.skate;c.noConflict=function(){window.skate=o;return this};window.skate=c;g.exports=c},{"./constants":1,"./document-observer":3,"./lifecycle":5,"./registry":7,"./utils":9,"./version":10}],9:[function(b,g,c){function j(b,c){return Object.prototype.hasOwnProperty.call(b,c)}c.hasOwn=j;c.debounce=function(b){var c=!1;return function(){c||
(c=!0,setTimeout(function(){c=!1;b()},1))}};c.getClosestIgnoredElement=function(b){for(;b&&b!==document&&!(b instanceof DocumentFragment);){if(b.hasAttribute(h))return b;b=b.parentNode}};c.inherit=function(b,c,a){for(var g=Object.getOwnPropertyNames(c),h=g.length,j=0;j<h;j++){var m=g[j];if(a||void 0===b[m]){var l=Object.getOwnPropertyDescriptor(c,m);l.get||l.set||!l.writable||!l.enumerable||!l.configurable?Object.defineProperty(b,m,l):b[m]=c[m]}}return b};c.objEach=function(b,c){for(var a in b)j(b,
a)&&c(b[a],a)};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var h=b("./constants").ATTR_IGNORE},{"./constants":1}],10:[function(b,g){g.exports="0.12.6"},{}]},{},[8]);(function(b){var g=b.skate.noConflict();define("atlassian/libs/skate-0.12.6",[],function(){return g})})(window);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:skate', location = 'includes/js/amd/shim/skate-amd.js' */
define("skate",["atlassian/libs/skate-0.12.6"],function(a){return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:viewpage-webitems', location = 'includes/js/save-for-later.js' */
define("confluence/save-for-later",["ajs","jquery","confluence/api/ajax","skate"],function(a,d,l,f){var k=function(b){0<(d("#action-messages").html()||"").indexOf(b)||a.messages.error("#action-messages",{body:b})},g=function(b){var c=d(b),f=c.find(".aui-icon"),g="Remove",h="Save for later",m="f",n=a.format("Saved {0}f{1}or later","\x3cu\x3e","\x3c/u\x3e"),p=a.format("Save {0}f{1}or later",
"\x3cu\x3e","\x3c/u\x3e"),q="You are not permitted to perform this operation.",r="Server error while updating favourite";c.on("click",function(b){var e=c.hasClass("selected");if(c.hasClass("waiting"))return a.stopEvent(b);c.addClass("waiting");var d=a.contextPath()+"/rest/experimental/relation/user/current/favourite/toContent/"+(c.attr("data-page-id")||a.params.pageId);l.ajax({url:d,type:e?"DELETE":"PUT",contentType:"application/json",data:{},success:function(){c.toggleClass("selected ie-page-favourite-selected",
!e);var b=e?h:g,b=b+(" ("+m+")"),d=e?p:n;c.children("span").empty().append(f).append(" "+d);c.attr("title",b);f.toggleClass("aui-iconfont-unstar",e).toggleClass("aui-iconfont-star",!e);a.trigger("analytics",{name:"confluence.page.page-menu."+(e?"unfavourite":"favourite")})},error:function(a){403===a.status?k(q):k(r)},complete:function(){c.removeClass("waiting");c.blur()}});return a.stopEvent(b)})},h=function(a){d(a).off("click")};return{attached:g,detached:h,init:function(){f("action-page-favourite",
{type:f.types.CLASS,attached:g,detached:h})}}});require("confluence/module-exporter").safeRequire("confluence/save-for-later",function(a){a.init()});
}catch(e){WRMCB(e)};