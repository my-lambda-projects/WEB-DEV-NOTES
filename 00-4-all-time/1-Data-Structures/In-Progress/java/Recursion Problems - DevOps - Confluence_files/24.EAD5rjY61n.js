(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/Xp5":function(e){e.exports=JSON.parse('{"a":"@atlaskit/onboarding","b":"10.1.8"}')},"7xCX":function(e,t,n){"use strict";var r=n("Czhu"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("kKv/"),s=n("3IV/"),d=n("KsTJ"),c=n("zJ/j"),h=n("8pvK"),u=n("BMbf"),p=n("ZgvQ"),g=n("WEdt"),f=n("rr2M");const m=d.default.div`
  ${({theme:e})=>e};
`,b=d.default.div`
  display: flex;
  flex-direction: column;
  padding: ${Object(p.multiply)(u.h,2)}px ${Object(p.multiply)(u.h,2.5)}px;
`,v=d.default.h4`
  ${g.h600};
  color: inherit;
`,k=d.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: ${u.h}px;
`,x=d.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${u.h}px;
`,E=Object(h.a)(()=>({container:{overflow:"auto",borderRadius:Object(u.c)()+"px",height:"fit-content",zIndex:""+(u.i.spotlight()+1)}})),N=({actions:e=[],actionsBeforeElement:t,children:n,components:r={},image:o,heading:l,headingAfterElement:s,theme:d,innerRef:h,testId:u})=>{const{Header:p=k,Footer:g=x}=r;return i.a.createElement(E.Provider,{value:d},i.a.createElement(E.Consumer,null,({container:r})=>i.a.createElement(m,{theme:r,innerRef:h,"data-testid":u},"string"==typeof o?i.a.createElement("img",{src:o,alt:""}):o,i.a.createElement(b,null,l||s?i.a.createElement(p,null,i.a.createElement(v,null,l),s||i.a.createElement("span",null)):null,n,e.length>0||t?i.a.createElement(g,null,t||i.a.createElement("span",null),i.a.createElement(f.b,null,e.map((e,t)=>{let{text:n,key:r}=e,o=Object(a.a)(e,["text","key"]);return i.a.createElement(f.a,{key:r||("string"==typeof n?n:""+t)},i.a.createElement(c.a,Object.assign({},o),n))}))):null))))};var O=i.a.forwardRef((e,t)=>i.a.createElement(N,Object.assign({},e,{innerRef:t}))),w=n("P/3O");class y extends i.a.Component{render(){const{actions:e,actionsBeforeElement:t,children:n,components:o,isFlat:d,heading:c,headingAfterElement:h,image:u,innerRef:p,theme:g,width:f,testId:m}=this.props;return i.a.createElement(l.a.Provider,{value:w.b},i.a.createElement(O,{testId:m,ref:p,heading:c,headingAfterElement:h,actions:e,actionsBeforeElement:t,components:o,image:u,theme:e=>{const t=e({}),{container:n}=t,o=Object(a.a)(t,["container"]);return g(()=>Object(r.a)(Object(r.a)({},o),{},{container:Object(r.a)({background:s.P300,color:s.N0,width:Math.min(Math.max(f,160),600)+"px",boxShadow:d?void 0:`0 4px 8px -2px ${s.N50A}, 0 0 1px ${s.N60A}`},n)}),{})}},n))}}y.defaultProps={width:400,isFlat:!1,components:{},theme:e=>e()};t.a=i.a.forwardRef((e,t)=>i.a.createElement(y,Object.assign({},e,{innerRef:t})))},"P/3O":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return c}));var r=n("Czhu"),a=n("HbGN"),o=n("3IV/");const i={default:{background:{default:{light:o.P400,dark:o.P400},hover:{light:o.P200,dark:o.P200},active:{light:o.P500,dark:o.P500},disabled:{light:o.P400,dark:o.P400},selected:{light:o.R500,dark:o.R500},focus:{light:o.P400,dark:o.P400}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},hover:{light:o.N0,dark:o.N0},active:{light:o.N0,dark:o.N0},disabled:{light:o.N0,dark:o.DN30},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}},outline:{focus:{light:"none",dark:"none"}}},subtle:{background:{default:{light:"none",dark:"none"},hover:{light:o.P200,dark:o.P200},active:{light:o.P500,dark:o.P500},disabled:{light:"none",dark:"none"},selected:{light:o.N700,dark:o.DN0},focusSelected:{light:o.N700,dark:o.DN0}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},hover:{light:o.N0,dark:o.N0},active:{light:o.N0,dark:o.N0},disabled:{light:o.N0,dark:o.N0},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}},outline:{focus:{light:"none",dark:"none"}}},"subtle-link":{textDecoration:{hover:{light:"underline "+o.P75,dark:"underline "+o.P75}},textDecorationLine:{active:{light:"none",dark:"none"}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},hover:{light:o.P75,dark:o.P75},active:{light:o.P100,dark:o.P100},disabled:{light:o.P500,dark:o.P500},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}}}},l={primary:{background:{default:{light:o.P400,dark:o.P400},hover:{light:o.P200,dark:o.P200},active:{light:o.P500,dark:o.P500},disabled:{light:o.N30,dark:o.DN70},selected:{light:o.R500,dark:o.R500},focus:{light:o.P400,dark:o.P400}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},disabled:{light:o.N0,dark:o.DN30},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}}}};function s(e,{mode:t,appearance:n,state:r}){if(!e[n])return;const a=e[n];return Object.keys(a).reduce((e,n)=>{let o=a;return[n,r,t].forEach(t=>{o[t]&&("object"==typeof o[t]?o=o[t]:e[n]=o[t])}),e},{})}const d=(e,t)=>{const n=e(t),{buttonStyles:o}=n,l=Object(a.a)(n,["buttonStyles"]);return Object(r.a)({buttonStyles:Object(r.a)(Object(r.a)({},o),s(i,t))},l)},c=(e,t)=>{const n=e(t),{buttonStyles:o}=n,i=Object(a.a)(n,["buttonStyles"]);return Object(r.a)({buttonStyles:Object(r.a)(Object(r.a)({},o),s(l,t))},i)}},mI8x:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return u}));var r=n("KsTJ"),a=n("3IV/"),o=n("BMbf");const i="0 0 0 2px "+a.P300,l=r.keyframes`
  0%, 33% { box-shadow: ${i}, 0 0 0 rgba(101, 84, 192, 1) }
  66%, 100% { box-shadow: ${i}, 0 0 0 10px rgba(101, 84, 192, 0.01) }
`,s=r.css`
  animation: ${l} 3000ms ${"cubic-bezier(0.55, 0.055, 0.675, 0.19)"} infinite;
`,d=r.default.div`
  z-index: ${o.i.spotlight()+1};

  ${e=>e.bgColor?`background-color: ${e.bgColor};`:null}
  ${e=>e.radius?`border-radius: ${e.radius}px;`:null}
`,c=Object(r.default)(d)`
  ${({pulse:e})=>e?s:null};
`,h=r.default.div`
  cursor: ${e=>e.onClick?"pointer":"auto"};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`,u=Object(r.default)(d)`
  position: absolute;
  ${s};
`},rr2M:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var r=n("KsTJ"),a=n("BMbf"),o=n("ZgvQ");r.default.div`
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: absolute;
  top: ${e=>e.scrollDistance}px;
  width: 100%;
`,r.default.div`
  flex: 1 1 auto;
  padding: ${Object(o.multiply)(a.h,2)}px ${Object(o.multiply)(a.h,3)}px ${a.h}px;

  p:last-child,
  ul:last-child,
  ol:last-child {
    margin-bottom: 0;
  }
`,r.default.h4`
  color: inherit;
  font-size: 20px;
  font-style: inherit;
  font-weight: 500;
  letter-spacing: -0.008em;
  line-height: 1.2;
  margin-bottom: ${a.h}px;
`;const i=r.default.img`
  height: auto;
  max-width: 100%;
`,l=(r.default.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${Object(o.multiply)(a.h,3)}px ${Object(o.multiply)(a.h,2)}px;
`,r.default.div`
  display: flex;
  margin: 0 -${Object(o.divide)(a.h,2)}px;
  /* When there is more than one action, place primary action visually on the
  right, but keep it's position as the first focusable element in the DOM */
  flex-direction: row-reverse;
`),s=r.default.div`
  margin: 0 ${Object(o.divide)(a.h,2)}px;
`},vEjt:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ERkP"),a=n.n(r);const o=Object(r.createContext)({isOpen:!0,onExited:()=>{}}),i=e=>a.a.Children.count(e)>0&&a.a.Children.map(e,e=>!!e).filter(Boolean).length>0;class l extends a.a.Component{constructor(){super(...arguments),this.state={currentChildren:void 0},this.onExited=()=>{this.setState({currentChildren:this.props.children})}}static getDerivedStateFromProps(e,t){const{currentChildren:n}=t;return{currentChildren:i(n)&&!i(e.children)?n:e.children}}render(){return a.a.createElement(o.Provider,{value:{onExited:this.onExited,isOpen:i(this.props.children)}},this.state.currentChildren)}}const s=o.Consumer;t.b=l},ymK7:function(e,t,n){"use strict";var r=n("HbGN"),a=n("ERkP"),o=n.n(a),i=n("Czhu"),l=n("uPah"),s=n("iJcn"),d=n.n(s),c=n("hnTD"),h=n.n(c);function u(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function p(e,t){return(!t||"hidden"!==e)&&("visible"!==e&&"clip"!==e)}function g(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return p(n.overflowY,t)||p(n.overflowX,t)}return!1}function f(e,t,n,r,a,o,i,l){return o<e&&i>t||o>e&&i<t?0:o<=e&&l<=n||i>=t&&l>=n?o-e-r:i>t&&l<n||o<e&&l>n?i-t+a:0}var m=function(e,t){var n=t.scrollMode,r=t.block,a=t.inline,o=t.boundary,i=t.skipOverflowHiddenElements,l="function"==typeof o?o:function(e){return e!==o};if(!u(e))throw new TypeError("Invalid target");for(var s=document.scrollingElement||document.documentElement,d=[],c=e;u(c)&&l(c);){if((c=c.parentNode)===s){d.push(c);break}c===document.body&&g(c)&&!g(document.documentElement)||g(c,i)&&d.push(c)}for(var h=window.visualViewport?visualViewport.width:innerWidth,p=window.visualViewport?visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,v=e.getBoundingClientRect(),k=v.height,x=v.width,E=v.top,N=v.right,O=v.bottom,w=v.left,y="start"===r||"nearest"===r?E:"end"===r?O:E+k/2,j="center"===a?w+x/2:"end"===a?N:w,P=[],C=0;C<d.length;C++){var I=d[C],$=I.getBoundingClientRect(),S=$.height,R=$.width,M=$.top,B=$.right,D=$.bottom,W=$.left;if("if-needed"===n&&E>=0&&w>=0&&O<=p&&N<=h&&E>=M&&O<=D&&w>=W&&N<=B)return P;var T=getComputedStyle(I),H=parseInt(T.borderLeftWidth,10),L=parseInt(T.borderTopWidth,10),z=parseInt(T.borderRightWidth,10),V=parseInt(T.borderBottomWidth,10),F=0,J=0,X="offsetWidth"in I?I.offsetWidth-I.clientWidth-H-z:0,A="offsetHeight"in I?I.offsetHeight-I.clientHeight-L-V:0;if(s===I)F="start"===r?y:"end"===r?y-p:"nearest"===r?f(b,b+p,p,L,V,b+y,b+y+k,k):y-p/2,J="start"===a?j:"center"===a?j-h/2:"end"===a?j-h:f(m,m+h,h,H,z,m+j,m+j+x,x),F=Math.max(0,F+b),J=Math.max(0,J+m);else{F="start"===r?y-M-L:"end"===r?y-D+V+A:"nearest"===r?f(M,D,S,L,V+A,y,y+k,k):y-(M+S/2)+A/2,J="start"===a?j-W-H:"center"===a?j-(W+R/2)+X/2:"end"===a?j-B+z+X:f(W,B,R,H,z+X,j,j+x,x);var K=I.scrollLeft,U=I.scrollTop;y+=U-(F=Math.max(0,Math.min(U+F,I.scrollHeight-S+A))),j+=K-(J=Math.max(0,Math.min(K+J,I.scrollWidth-R+X)))}P.push({el:I,top:F,left:J})}return P};function b(e){return e===Object(e)&&0!==Object.keys(e).length}var v=function(e,t){var n=!e.ownerDocument.documentElement.contains(e);if(b(t)&&"function"==typeof t.behavior)return t.behavior(n?[]:m(e,t));if(!n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:b(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,a=e.top,o=e.left;r.scroll&&n?r.scroll({top:a,left:o,behavior:t}):(r.scrollTop=a,r.scrollLeft=o)}))}(m(e,r),r.behavior)}},k=n("PEqI"),x=n("BMbf");const E=e=>{const{height:t,left:n,top:r,width:a}=e.getBoundingClientRect();return{height:t,left:n,top:r,width:a}},N=e=>{const t=(e=>{const[t,n]=Object(a.useState)({width:0,height:0,left:0,top:0});return Object(a.useLayoutEffect)(()=>{n(E(e))},[e]),Object(a.useEffect)(()=>{const t=()=>{requestAnimationFrame(()=>{n(E(e))})};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[e]),t})(e.element);return e.children(t)};var O=n("Z4hp"),w=n("mI8x");function y(e){const t=e.cloneNode(!0);return t.style.margin="0",t.style.position="static",t.style.transform="translate(0, 0) translate3d(0, 0, 0)",t}var j=e=>{const{pulse:t,style:n,target:r,targetBgColor:a,targetOnClick:i,targetNode:l,targetRadius:s,testId:d}=e;return o.a.createElement(w.b,{"data-testid":d,pulse:t,bgColor:a,radius:s,style:n},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:y(l).outerHTML},style:{pointerEvents:"none"}}),o.a.createElement(w.c,{onClick:i?e=>i({event:e,target:r}):void 0}))},P=n("Ddjg"),C=n("Cmaw"),I=n("ORIB"),$=n("lbXe"),S=n("bLpi"),R=n("rr2M"),M=n("/Xp5"),B=n("7xCX");class D extends o.a.Component{componentDidUpdate(e){e.value!==this.props.value&&this.props.onChange()}render(){return this.props.children}}class W extends a.Component{constructor(){super(...arguments),this.state={focusLockDisabled:!0}}componentDidMount(){this.focusLockTimeoutId=window.setTimeout(()=>{this.setState({focusLockDisabled:!1})},200)}componentWillUnmount(){window.clearTimeout(this.focusLockTimeoutId)}render(){const{actions:e,actionsBeforeElement:t,animationStyles:n,children:a,dialogPlacement:l,dialogWidth:s,footer:d,header:c,heading:h,image:u,targetNode:p,testId:g}=this.props,{focusLockDisabled:f}=this.state,m=l?{"top left":"top-start","top center":"top","top right":"top-end","right top":"right-start","right middle":"right","right bottom":"right-end","bottom left":"bottom-start","bottom center":"bottom","bottom right":"bottom-end","left top":"left-start","left middle":"left","left bottom":"left-end"}[l]:void 0;return o.a.createElement(S.a,{modifiers:[{name:"preventOverflow",options:{padding:5,rootBoundary:"document",altAxis:!0,tether:!1}}],referenceElement:p,placement:m},({ref:l,style:p,update:m})=>o.a.createElement(D,{value:s,onChange:m},o.a.createElement(P.a,{disabled:f,returnFocus:!1,autoFocus:!0},o.a.createElement(B.a,{ref:l,testId:g,theme:e=>{const t=e({}),{container:a}=t,o=Object(r.a)(t,["container"]);return Object(i.a)(Object(i.a)({},o),{},{container:Object(i.a)(Object(i.a)(Object(i.a)({},a),p),n)})},width:s,actions:e,actionsBeforeElement:t,image:u&&o.a.createElement(R.c,{alt:h,src:u}),components:{Header:c,Footer:d},heading:h},a))))}}const T=Object(C.a)("atlaskit");var H=Object(I.a)({componentName:"spotlight",packageName:M.a,packageVersion:M.b})(Object($.a)({targetOnClick:T({action:"clicked",actionSubject:"spotlight",attributes:{componentName:"spotlight",packageName:M.a,packageVersion:M.b}})})(W)),L=n("vEjt");class z extends o.a.Component{constructor(){super(...arguments),this.state={replacementElement:null},this.getTargetNodeStyle=e=>l.canUseDOM?Object(i.a)(Object(i.a)({},e),{},{position:"fixed"}):{}}componentDidUpdate(e){e.targetNode!==this.props.targetNode&&v(this.props.targetNode,{scrollMode:"if-needed"})}componentDidMount(){v(this.props.targetNode,{scrollMode:"if-needed"}),this.props.onOpened()}componentWillUnmount(){this.props.onClosed()}render(){const{pulse:e,target:t,targetNode:n,targetBgColor:r,targetOnClick:a,targetRadius:i,testId:l,targetReplacement:s}=this.props,{replacementElement:c}=this.state;return o.a.createElement(L.a,null,({isOpen:u,onExited:p})=>o.a.createElement(k.a,{zIndex:x.i.spotlight()+1},s?o.a.createElement(d.a,{innerRef:e=>this.setState({replacementElement:e})},o.a.createElement(N,{element:n},e=>o.a.createElement(s,Object.assign({"data-testid":l+"--target"},this.getTargetNodeStyle(e))))):o.a.createElement(N,{element:n},s=>o.a.createElement(j,{testId:l+"--target",pulse:e,target:t,style:this.getTargetNodeStyle(s),targetBgColor:r,targetNode:n,targetOnClick:a,targetRadius:i})),s&&!c?null:o.a.createElement(O.a,{in:u,onExited:p},e=>o.a.createElement(H,{testId:l+"--dialog",actions:this.props.actions,actionsBeforeElement:this.props.actionsBeforeElement,children:this.props.children,dialogPlacement:this.props.dialogPlacement,dialogWidth:this.props.dialogWidth,footer:this.props.footer,header:this.props.header,heading:this.props.heading,image:this.props.image,targetNode:c||n,animationStyles:e})),o.a.createElement(h.a,null)))}}z.defaultProps={dialogWidth:400,pulse:!0};var V=z,F=n("baYQ");class J extends o.a.Component{render(){const e=this.props,{targetNode:t,target:n,testId:a="spotlight"}=e,i=Object(r.a)(e,["targetNode","target","testId"]);return o.a.createElement(F.a,null,({opened:e,closed:r,targets:l})=>{const s=t||("string"==typeof n?l[n]:void 0);return s?o.a.createElement(V,Object.assign({},i,{targetNode:s,target:n,onOpened:e,onClosed:r,testId:a})):null})}}J.defaultProps={dialogWidth:400,pulse:!0};t.a=J}}]);
//# sourceMappingURL=24.EAD5rjY61n.js.map