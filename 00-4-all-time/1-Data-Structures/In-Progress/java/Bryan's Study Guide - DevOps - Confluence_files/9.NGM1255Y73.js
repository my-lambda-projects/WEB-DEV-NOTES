/*! License: FQ7fG5UvNu.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/ysP":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=".3s"},"1dWH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M8.595 19.522C7.162 20.364 6 19.702 6 18.04V5.963C6 4.3 7.158 3.635 8.595 4.479l11.083 6.51c.951.559.958 1.46 0 2.023l-11.083 6.51z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};s.displayName="VidPlayIcon";var c=s;t.default=c},"2TTf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M17 10.005V19H7V5h5.99v2.49a1.5 1.5 0 0 0 1.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8.995h-2z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};s.displayName="DocumentIcon";var c=s;t.default=c},"4ugo":function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),i=n("bs5R"),o=n.n(i);const s=n("KsTJ").default.div`
  display: flex;
  color: #ff991f;
`;n.d(t,"a",(function(){return c}));class c extends r.Component{render(){const{size:e}=this.props;return a.a.createElement(s,null,a.a.createElement(o.a,{label:"Error",size:e}))}}c.defaultProps={size:"small"}},"5DpX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M19 6.673V15.2a2.8 2.8 0 0 1-2.8 2.8h-.4a2.8 2.8 0 0 1-2.8-2.8v-.4a2.8 2.8 0 0 1 2.8-2.8h.4c.278 0 .547.04.8.116V8.242l-6 .621V16.2A2.8 2.8 0 0 1 8.2 19h-.4A2.8 2.8 0 0 1 5 16.2v-.4A2.8 2.8 0 0 1 7.8 13h.4c.278 0 .547.04.8.116V6.654c0-.38.31-.721.72-.764l8.56-.886c.398-.041.72.235.72.615v1.054z" fill="currentColor"/></svg>'},e))};s.displayName="AudioIcon";var c=s;t.default=c},"69dh":function(e){e.exports=JSON.parse('{"a":"@atlaskit/media-card","b":"70.1.0"}')},"7+7H":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("Ag3T"),a=n("lEOu"),i=n("Jl7S");const o=({selected:e})=>`\n    ${a.b}\n\n    &::after {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      box-sizing: border-box;\n      pointer-events: none;\n      ${r.b}\n      ${e?Object(a.a)([i.a.Border]):""}\n    }\n  `},"7pVy":function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),i=n("7nmT"),o=n.n(i);const s=n("KsTJ").default.img`
  position: absolute;
  left: 50%;
  top: 50%;
  object-fit: contain;
  image-orientation: none;
`;var c=n("COIo");n.d(t,"a",(function(){return l}));class l extends r.Component{constructor(e){super(e),this.onImageLoad=e=>{if(!this.imageRef||!this.imageRef.current)return;const{onImageLoad:t}=this.props;this.setState({isImageLoaded:!0,imgWidth:this.imageRef.current.naturalWidth,imgHeight:this.imageRef.current.naturalHeight}),t&&t(e.currentTarget)},this.imageRef=a.a.createRef(),this.state={isImageLoaded:!1,imgWidth:0,imgHeight:0,parentWidth:1/0,parentHeight:1/0}}componentDidMount(){const e=o.a.findDOMNode(this).parentElement;if(!e)return;const{width:t,height:n}=e.getBoundingClientRect();this.setState({parentWidth:t,parentHeight:n})}render(){const{crop:e,stretch:t,dataURI:n,previewOrientation:r,crossOrigin:i,onImageError:o,alt:l}=this.props,{parentWidth:u,parentHeight:d,imgWidth:f,imgHeight:p,isImageLoaded:h}=this.state,m=u/d;let b=f/p,g="100%";const v=e,y=!e,w=Object(c.b)(r||1);w&&(b=1/b,g=Math.ceil(100*b)+"%");const E=b>m;w&&(y&&E||v&&!E)&&(g=Math.ceil(1/b*100)+"%");const O=h||y&&!w,x={transform:"translate(-50%, -50%)"};if(t?y&&E?x.width=g:y&&!E||v&&E?x.height=g:v&&!E&&(x.width=g):y?(x.maxWidth=g,x.maxHeight=g):v&&E?x.maxHeight=g:v&&!E&&(x.maxWidth=g),O||(x.display="none"),r&&r>1){const e=Object(c.a)(r);x.transform+=" "+e}return a.a.createElement(s,{"data-testid":"media-image",draggable:!1,alt:l,style:x,onLoad:this.onImageLoad,onError:o,innerRef:this.imageRef,src:n,crossOrigin:i})}}l.defaultProps={crop:!0,stretch:!1}},"94QT":function(e,t,n){"use strict";n.d(t,"m",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"o",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"k",(function(){return m})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"j",(function(){return v})),n.d(t,"h",(function(){return y})),n.d(t,"e",(function(){return w})),n.d(t,"n",(function(){return E})),n.d(t,"l",(function(){return O})),n.d(t,"g",(function(){return x}));var r=n("KsTJ"),a=n("jVp3"),i=n("Zvdo"),o=n("Ag3T"),s=n("w301"),c=n("3IV/");const l=r.default.div`
  ${Object(o.f)(14)} ${Object(a.d)()} background-color: ${Object(a.c)("#ffffff",.5)};
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 20px;
  color: #798599; /* TODO FIL-3884: Align color with new design */
  display: flex;
  opacity: 0;

  &.selected {
    opacity: 1;
    color: white;
    background-color: #0052cc; /* TODO FIL-3884: Align with tickbox icons */
  }

  /* Enforce dimensions of "tick" icon */
  svg {
    position: absolute;
    width: 14px;
  }
`,u=r.default.div`
  ${Object(o.f)()} ${Object(o.a)()} ${o.b} display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: transparent;
  transition: 0.3s background ${i.a}, 0.3s border-color;
  padding: 16px;

  ${({hasError:e,noHover:t})=>e||t?"\n        cursor: default;\n\n        &:hover {\n          background: transparent;\n        }\n      ":""} &:not(.persistent):hover, &.active {
    .top-row {
      .title {
        color: ${c.B400};
      }
    }

    .bottom-row {
      .delete-btn {
        display: flex;
      }
    }
  }

  &.noHover:hover {
    .top-row {
      .title {
        color: ${c.N800};
      }
    }
  }

  .file-type-icon {
    display: block;
  }

  &:not(.persistent) {
    &:not(.error, .noHover):hover {
      background-color: ${Object(a.c)(c.N900,.06)};
    }

    &.selectable {
      &.selected {
        background-color: ${c.B200};

        &:hover {
          /* TODO FIL-3884 add new overlay with rgba(colors.N900, 0.16) */
        }

        .title,
        .bottom-row,
        .file-size,
        .more-btn {
          color: ${c.N0};
        }
      }
    }
  }

  &.persistent {
    &:not(.active) {
      overflow: hidden;
    }

    .top-row {
      .title {
        transition: opacity 0.3s;
        opacity: 0;
        color: white;
        visibility: hidden;
      }
    }

    .bottom-row {
      opacity: 0;
      transition: transform 0.2s, opacity 0.5s;
      /* This is the height of the overlay footer, needs to be present now since the parent uses flex and 100% doesn't look right anymore */
      transform: translateY(35px);

      .file-type-icon {
        display: none;
      }

      .file-size {
        color: white;
        display: none;
      }

      .more-btn {
        color: ${c.N0};
        display: none;

        &:hover {
          background-color: rgba(9, 30, 66, 0.2);
        }
      }

      .delete-btn {
        display: none;

        &:hover {
          background-color: rgba(9, 30, 66, 0.2);
        }
      }
    }

    &:hover,
    &.active {
      background-color: ${Object(a.c)(c.N900,.5)};

      .title {
        opacity: 1;
        visibility: visible;
      }

      .file-type-icon,
      .file-size {
        display: block;
      }

      .more-btn {
        ${a.b} color: ${c.N0};
      }

      .delete-btn {
        display: flex;
      }

      .bottom-row {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Selectable */
    &.selectable {
      &:hover {
        .tickbox {
          opacity: 1;
        }
      }

      &.selected {
        .tickbox {
          background-color: ${c.B200} !important;
          border-color: ${c.B200} !important;
          color: white;
        }
      }
    }
  }

  &.error {
    .top-row {
      overflow: visible;
    }
    &:hover,
    &.active {
      .top-row {
        .title {
          color: ${c.N800};
        }
      }
    }
  }
`,d=r.default.div`
  height: 24px;
  display: flex;
  align-items: center;
`,f=r.default.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
`,p=r.default.div``,h=r.default.div`
  display: flex;
  align-items: center;
  height: 16px;
`,m=r.default.div``,b=r.default.div`
  ${a.a} display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  color: ${c.N70};
  font-size: 12px;
  line-height: 15px;
  overflow: hidden;
  max-width: ~'calc(100% - 24px)';
  text-overflow: ellipsis;
  white-space: nowrap;
`,g=Object(r.default)(b)`
  font-weight: normal;
`,v=r.default.div`
  user-select: none;
  ${a.a} box-sizing: border-box;
  margin-left: 5px;
  font-weight: bold;
  color: ${c.B400};
  font-size: 12px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${c.B300};
  }
`,y=r.default.a`
  user-select: none;
  cursor: pointer;
`,w=r.default.div`
  display: flex;
`,E=r.default.div`
  box-sizing: border-box;
  word-wrap: break-word;
  color: ${Object(s.a)({light:c.N800,dark:c.DN900})};
  font-size: 12px;
  line-height: 18px;
`,O=r.default.div`
  ${Object(o.d)("100px")} font-size: 12px;
  color: #5e6c84;
`,x=r.default.div`
  display: flex;
  align-items: center;
`},"9xOT":function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Jl7S:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.Border=0]="Border",e[e.BoxShadow=1]="BoxShadow",e[e.Background=2]="Background",e[e.Blanket=3]="Blanket",e[e.ResetBorder=4]="ResetBorder",e[e.ResetOpacity=5]="ResetOpacity"}(r||(r={}))},NpkN:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n("KsTJ"),a=n("3IV/"),i=n("Ag3T"),o=n("z+31");const s=Object(r.default)(o.a)`
  display: flex;
  position: relative;
  line-height: 0;
`;var c;!function(e){e.default="default",e.filled="filled"}(c||(c={}));const l=r.default.div`
  ${({variant:e})=>`\n    ${i.c} ${i.b} ${Object(i.f)(26)} color: ${a.N500};\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    ${(e=>"filled"===e?`\n    background: ${a.N0};\n    margin-right: 8px;\n    opacity: 0.8;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:hover {\n      opacity: 0.6;\n    }\n  `:"\n    &:hover {\n      background-color: rgba(9, 30, 66, 0.06);\n    }\n  ")(e)}\n  `}
`},TcjM:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ERkP"),a=n.n(r),i=n("fuoD");function o(e={}){const t=a.a.useRef(),n=a.a.useRef(),[r,o]=a.a.useState({inView:!1,entry:void 0,target:void 0}),{threshold:s,root:c,rootMargin:l}=e,u=a.a.useCallback(e=>{const{supportsIntersectionObserver:r}=i.a;if(!r)return o({inView:!0,entry:void 0,target:e}),null;n.current=new IntersectionObserver(t=>{if(t&&t.length){const n=t[0],{isIntersecting:r,intersectionRatio:a}=n;if(a>=0){let t=a>=(s||0);void 0!==r&&(t=t&&r),o({inView:t,entry:n,target:e})}}},{threshold:s,root:c,rootMargin:l}),t.current&&n.current.unobserve(t.current),e&&n.current.observe(e),t.current=e},[s,c,l]);return a.a.useEffect(()=>()=>{n.current&&t.current&&n.current.unobserve(t.current)},[]),[u,r.inView,r.target,r.entry]}},VEAB:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return m}));var r=n("Czhu"),a=n("69dh"),i=n("Cmaw"),o=n("mU6V");function s(e="mediaCard"){return{packageVersion:a.b,packageName:a.a,componentName:e,component:e}}const c=(e,t)=>({fileSource:"mediaCard",fileMediatype:e&&e.mediaType,fileMimetype:e&&e.mimeType,fileId:e&&e.id,fileSize:e&&e.size,fileStatus:t});function l(e,t,n){return{fileAttributes:c(e,t&&t.status),featureFlags:n}}function u(e,t){if(t){t(e).fire(o.ANALYTICS_MEDIA_CHANNEL)}}const d=e=>Object(i.a)(o.ANALYTICS_MEDIA_CHANNEL)(e),f=({cardStatus:e,metadata:t,fileState:n,dataURI:r,error:a})=>{if(!r&&["error","failed-processing"].includes(e)){const e="failed";if(a){return{action:e,failReason:"media-client-error",error:a instanceof Error?a.message:a}}const r=n&&"message"in n&&n.message;return r?{action:e,failReason:"file-status-error",error:r}:t.name?{action:e,failReason:"file-status-error",error:"unknown error"}:{action:e,failReason:"file-status-error",error:"Does not have minimal metadata (filename and filesize) OR metadata/media-type is undefined"}}if(!r&&"complete"===e)return{action:"succeeded"}},p=(e,t)=>{const n={eventType:"ui",action:"copied",actionSubject:"file",actionSubjectId:"file"===e.mediaItemType?e.id:e.mediaItemType};return t&&(n.attributes={featureFlags:t}),n},h=(e,t)=>{const n={eventType:"operational",action:"commenced",actionSubject:"mediaCardRender",actionSubjectId:e};return t&&(n.attributes={featureFlags:t}),n},m=({action:e,actionSubjectId:t,fileAttributes:n,failReason:a,error:i,featureFlags:o})=>{const s={eventType:"operational",action:e,actionSubject:"mediaCardRender",actionSubjectId:t};return n&&(s.attributes=Object(r.a)(Object(r.a)({},s.attributes),{},{fileAttributes:n})),o&&(s.attributes=Object(r.a)(Object(r.a)({},s.attributes),{},{featureFlags:o})),a&&(s.attributes=Object(r.a)(Object(r.a)({},s.attributes),{},{failReason:a})),i&&(s.attributes=Object(r.a)(Object(r.a)({},s.attributes),{},{error:i})),s}},Zvdo:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="cubic-bezier(0.215, 0.61, 0.355, 1)"},a22k:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return w}));var r=n("ERkP"),a=n.n(r),i=n("TcjM"),o=n("fuoD");const s=()=>()=>{},{Consumer:c,Provider:l}=a.a.createContext({subscribe:null});function u(e){const{onResize:t}=e,n=Object(r.useRef)(null);return Object(r.useEffect)(()=>{if(!n||!n.current)return;const{current:e}=n;if(!e.contentDocument||!e.contentDocument.defaultView)return;const r=e.contentDocument.defaultView;return r.addEventListener("resize",t),()=>{r.removeEventListener("resize",t)}},[n,t]),a.a.createElement("object",{ref:n,data:"about:blank",type:"text/html",style:{position:"absolute",height:"0",width:"100%"},"aria-hidden":!0,tabIndex:-1})}function d(e){const{onResize:t}=e,n=Object(r.useRef)(null),i=a.a.useCallback(()=>{if(!n||!n.current)return;const{current:e}=n;if(!e.contentDocument||!e.contentDocument.defaultView)return;e.contentDocument.defaultView.addEventListener("resize",t)},[t]);return a.a.createElement("iframe",{ref:n,src:"about:blank",frameBorder:"0",style:{position:"absolute",height:"0",width:"100%"},onLoad:i,"aria-hidden":!0,tabIndex:-1})}function f(e){return 11===Object(o.b)()?a.a.createElement(d,Object.assign({},e)):a.a.createElement(u,Object.assign({},e))}const p=({children:e})=>a.a.createElement("div",{style:{position:"absolute",height:"0",width:"100%"}},e),h=()=>()=>{},m=a.a.memo(({subscribe:e,setWidth:t})=>{const n=a.a.useRef(null);return Object(r.useEffect)(()=>{if(n&&n.current){const{current:e}=n,r=e.offsetWidth;t(r)}return e(()=>{if(n&&n.current){const{current:e}=n,r=e.offsetWidth;t(r)}})},[n,e,t]),a.a.createElement("div",{ref:n})}),b=a.a.memo(({subscribe:e,setWidth:t})=>{const[n,o,s,c]=Object(i.a)({threshold:0});return Object(r.useEffect)(()=>{if(o&&c&&c.target instanceof HTMLElement){const{boundingClientRect:e}=c,n=e.width;t(n)}return e(()=>{if(o&&s instanceof HTMLElement){const e=s.offsetWidth;t(e)}})},[o,c,t,e,s]),a.a.createElement("div",{style:{position:"absolute",height:"0",width:"100%"},ref:n})});const g=a.a.memo(e=>{const[t]=Object(r.useState)(new Map),n=a.a.useCallback(e=>(t.set(e,null),()=>{t.delete(e)}),[t]),i=a.a.useCallback(()=>{t.forEach((e,t)=>t())},[t]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null,a.a.createElement(f,{onResize:i})),a.a.createElement(l,{value:{subscribe:n}},e.children))}),v=a.a.memo(e=>a.a.createElement(l,{value:{subscribe:s}},e.children)),y=a.a.memo(({setWidth:e,useIntersectionObserver:t})=>{const n=function(e){return e?b:m}(t);return a.a.createElement(c,null,({subscribe:t})=>a.a.createElement(n,{setWidth:e,subscribe:t||h}))}),w=a.a.memo(e=>{const{supportsResizeObserver:t,supportsIntersectionObserver:n}=o.a;return t&&n?a.a.createElement(v,null,e.children):a.a.createElement(g,null,e.children)})},amcu:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g}));var r=n("ERkP"),a=n.n(r),i=n("VEAB"),o=n("lbXe"),s=n("94QT"),c=n("L21V"),l=n("QxUR"),u=n("m4VZ"),d=n("hGBm"),f=n.n(d);const p=Object(o.a)({onClick:Object(i.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:"mediaCardRetry"})}),h=p(e=>a.a.createElement(s.j,Object.assign({"data-testid":"media-card-retry-button"},e))),m=({onClick:e})=>a.a.createElement(h,{onClick:Object(u.b)(e)},a.a.createElement(c.b,Object.assign({},l.a.retry))),b=p(e=>a.a.createElement(s.h,Object.assign({"data-testid":"media-card-retry-button"},e),a.a.createElement(f.a,{label:"Retry",size:"small"}))),g=({onClick:e})=>a.a.createElement(b,{onClick:Object(u.b)(e)},a.a.createElement(c.b,Object.assign({},l.a.retry)))},asyg:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),i=n("7pVy"),o=n("nVfX"),s=n("1dWH"),c=n.n(s),l=n("9xOT"),u=n.n(l),d=n("STeY"),f=n.n(d),p=n("CRB6"),h=n.n(p),m=n("5DpX"),b=n.n(m),g=n("NhJz"),v=n.n(g),y=n("c1da"),w=n.n(y),E=n("2TTf"),O=n.n(E),x=n("xLy2"),j=n.n(x),k=n("KsTJ"),C=n("3IV/");const R={image:C.Y200,audio:C.P200,video:"#ff7143",doc:C.B300,unknown:"#3dc7dc",archive:""},N=k.default.div`
  display: inline-flex;
  color: ${({type:e})=>R[e]||R.unknown};
`,T={image:h.a,audio:b.a,video:w.a,doc:O.a,unknown:j.a,archive:v.a};class I extends a.a.Component{render(){const{type:e,size:t="small",className:n}=this.props,r=e&&T[e]||T.unknown;return a.a.createElement(N,{type:e||"unknown"},a.a.createElement(r,{label:"media-type",size:t,className:n}))}}var $=n("Ag3T");const z=k.default.div`
  float: left;
  margin-right: 6px;
  position: relative;
  top: 1px;
  img {
    ${Object($.f)("12px !important")};
  }
`;class B extends r.Component{render(){const{mediaType:e,iconUrl:t,style:n}=this.props,r=e||"unknown",i=a.a.createElement(I,{type:e,size:"small",className:"file-type-icon"}),o=t?a.a.createElement("img",{src:t,className:"custom-icon",alt:r}):i;return a.a.createElement(z,{style:n,className:"file-type-icon"},o)}}var S=n("4ugo"),A=n("lT4H"),M=n("amcu"),P=n("94QT");class L extends r.Component{constructor(e){super(e),this.onMenuToggle=e=>{this.setState({isMenuExpanded:e.isOpen})},this.state={isMenuExpanded:!1}}get wrapperClassNames(){const{error:e,noHover:t,selectable:n,selected:r,mediaType:a,persistent:i}=this.props,{isMenuExpanded:o}=this.state;return e?u()("overlay",{error:e,active:o}):u()("overlay",a,{active:o,selectable:n,selected:r,persistent:!i,noHover:t})}render(){const{cardStatus:e,error:t,noHover:n,mediaName:r,persistent:i,selected:s,actions:c}=this.props,l=((e,t,n,r)=>n||!t||"uploading"===e&&!r?"":t)(e,r,t,s),u=i?void 0:"white";return a.a.createElement(P.i,{hasError:!!t,noHover:n,className:this.wrapperClassNames},a.a.createElement(P.o,{className:"top-row"},this.errorLine(),a.a.createElement(P.n,{className:"title"},l?a.a.createElement(o.a,{testId:"media-card-file-name",text:l,lines:2}):null),this.tickBox()),a.a.createElement(P.b,{className:"bottom-row"},a.a.createElement(P.f,null,this.bottomLeftColumn()),a.a.createElement(P.k,null,c?a.a.createElement(A.a,{actions:c,onToggle:this.onMenuToggle,triggerColor:u}):null)))}errorLine(){const{error:e,alt:t}=this.props;return e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(P.c,null,a.a.createElement(P.d,null,e)),t&&a.a.createElement(P.c,null,a.a.createElement(P.a,null,t)))}tickBox(){const{selected:e,selectable:t}=this.props,n=a.a.createElement(f.a,{label:"tick"}),r=u()("tickbox",{selected:e});return t&&a.a.createElement(P.m,{className:r}," ",n," ")}bottomLeftColumn(){const{error:e,onRetry:t}=this.props;if(e)return t?a.a.createElement(P.e,null,a.a.createElement(S.a,null),a.a.createElement(M.b,{onClick:t})):a.a.createElement(S.a,null);{const{mediaType:e,subtitle:t,icon:n}=this.props,r=u()("metadata"),i=e||n?a.a.createElement(B,{mediaType:e,iconUrl:n}):null,o=t?a.a.createElement(P.l,{className:"file-size"},t):null;return a.a.createElement("div",null,a.a.createElement(P.g,{className:r},i,o))}}removeBtnClick(e){return t=>{t.preventDefault(),t.stopPropagation(),e()}}}L.defaultProps={actions:[],mediaName:""};var D=n("w301"),V=n("z+31"),H=n("7+7H");const _=Object(k.default)(V.a)`
  ${e=>{const{disableOverlay:t}=e;return t?"":V.b}}
  ${$.b}
  ${e=>{const{mediaType:t}=e;return`background: ${"image"===t?"transparent":Object(D.a)({light:C.N20,dark:C.DN50})(e)};`}}

  line-height: normal;
  position: relative;

  ${H.a}

  ${Object($.f)()} .wrapper {
    ${$.b};
    display: block;
    height: inherit;
    position: relative;

    .img-wrapper {
      position: relative;
      width: inherit;
      height: inherit;
      overflow: hidden;
      display: block;
      ${$.b}
    }
  }
`,F=k.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  /* we want to override default icon size and hover state */
  &:hover > * {
    width: 64px;
    height: 64px;
  }

  > * {
    background: rgba(23, 43, 77, 0.7);
    width: 56px;
    height: 56px;
    border-radius: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s;
  }
`,W=k.default.div`
  position: absolute;
  height: 100%;
  width: 100%;
`,U=k.default.div`
  ${Object($.a)()}
  ${Object($.f)()}
  border-radius: inherit;
  background-color: rgba(9, 30, 66, 0.5);
`,J=k.default.div`
  ${Object($.a)()} width: 100%;
  padding: 8px;
  color: ${C.N0};
  font-size: 12px;
  line-height: 18px;
  word-wrap: break-word;
`,K=k.default.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px;
  color: ${C.N0};
`,G=k.default.div`
  flex-grow: 1;

  /*
    force the height to always be 20px (the height of the cancel icon),
    so that the height of the progress bar doesn't jump when cards with
    and without a cancel icon are rendered side-by-side.
  */
  height: ${26}px;

  /*
    vertically center the progress bar within the 20px, keeping the progress bar full width
  */
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Y=k.default.div`
  margin-left: 4px;
  /*
    button must appear above overlay
   */
  z-index: 2;
`;var X=n("lb6e"),q=n("2uSk");const Z=(e,t,n,r,a)=>!("doc"===r||!a&&"file"===t)&&(!!n&&("external-image"===t||a&&Object(q.d)(a)||"complete"===e)),Q=k.default.div`
  ${$.b} z-index: 30;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);

  .progressBar {
    width: 0%;
    height: 3px;
    transition: width 0.25s ease-in;
    background-color: white;
  }
`;class ee extends r.Component{render(){if("number"!=typeof this.props.progress)return null;const e={width:100*Math.min(1,Math.max(0,this.props.progress))+"%"};return a.a.createElement(Q,null,a.a.createElement("div",{className:"progressBar",style:e}))}}var te=n("lbXe"),ne=n("VEAB");n.d(t,"b",(function(){return re})),n.d(t,"a",(function(){return ie}));const re="media-file-card-view";class ae extends r.Component{constructor(){super(...arguments),this.wasThumbnailDisplayed=!1,this.renderCardContents=()=>{const{status:e,mediaType:t}=this.props;return"error"===e?this.renderErrorContents():"failed-processing"===e?this.renderFailedContents():"video"===t||this.isFileCardImageReadyForDisplay?this.renderSuccessCardContents():this.renderLoadingContents()},this.renderLoadingContents=()=>a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"img-wrapper"},a.a.createElement(X.a,null))),this.renderErrorContents=()=>{const{status:e,error:t,alt:n,mediaName:r,mediaType:i,onRetry:o,actions:s,fileSize:c}=this.props;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"wrapper"}),a.a.createElement(L,{cardStatus:e,error:t,persistent:!0,mediaName:r,mediaType:i,alt:n,onRetry:o,subtitle:c,actions:s}))},this.renderFailedContents=()=>{const{status:e,mediaName:t,mediaType:n,actions:r,fileSize:i}=this.props;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"wrapper"}),a.a.createElement(L,{cardStatus:e,noHover:!0,persistent:!0,mediaName:t,mediaType:n,subtitle:i,actions:r}))},this.renderUploadingCardOverlay=()=>{const{status:e,mediaName:t,mediaType:n,dataURI:r,selectable:i,selected:o}=this.props,s="doc"===n||!r;return a.a.createElement(L,{cardStatus:e,persistent:s,mediaName:t,selectable:i,selected:o})},this.renderPlayButton=()=>{const{status:e,mediaItemType:t,mediaType:n,mimeType:r,selectable:i,dataURI:o}=this.props;return"video"!==n||i&&!Z(e,t,o,n,r)?null:a.a.createElement(F,null,a.a.createElement(c.a,{label:"play",size:"large"}))},this.onImageLoad=()=>{this.fireLoadingStatusAnalyticsEvent("succeeded")},this.onImageError=()=>{this.fireLoadingStatusAnalyticsEvent("failed")},this.renderMediaImage=()=>{const{status:e,mediaItemType:t,dataURI:n,mediaType:r,mimeType:o,previewOrientation:s,onDisplayImage:c,alt:l}=this.props;return Z(e,t,n,r,o)?(!this.wasThumbnailDisplayed&&c&&"image"===r&&(c(),this.wasThumbnailDisplayed=!0),a.a.createElement(i.a,{dataURI:n,alt:l,crop:this.isCropped,stretch:this.isStretched,previewOrientation:s,onImageLoad:this.onImageLoad,onImageError:this.onImageError})):null},this.shouldFireLoadingStatusAnalyticsEvent=e=>!this.lastAnalyticsAction||this.lastAnalyticsAction!==e,this.fireLoadingStatusAnalyticsEvent=e=>{const{createAnalyticsEvent:t}=this.props;this.shouldFireLoadingStatusAnalyticsEvent(e)&&(this.lastAnalyticsAction=e,"failed"===e?Object(ne.a)(Object(ne.g)({action:e,error:"unknown error",failReason:"file-uri-error"}),t):Object(ne.a)(Object(ne.g)({action:e}),t))},this.renderProgressBar=()=>{const{mediaName:e,progress:t,actions:n,status:r}=this.props;return"uploading"!==r?null:a.a.createElement(W,null,a.a.createElement(U,null,a.a.createElement(J,null,a.a.createElement(o.a,{testId:"media-card-file-name",text:e||"",lines:2})),a.a.createElement(K,null,a.a.createElement(G,null,a.a.createElement(ee,{progress:t})),a.a.createElement(Y,null,n?a.a.createElement(A.a,{actions:n,triggerColor:"white"}):null))))},this.renderSuccessCardContents=()=>{const{disableOverlay:e,selectable:t,status:n}=this.props;let r=null;return e||("uploading"===n?t&&(r=this.renderUploadingCardOverlay()):r=this.renderSuccessCardOverlay()),a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"img-wrapper"},this.renderMediaImage(),this.renderProgressBar(),this.renderPlayButton()),r)},this.renderSuccessCardOverlay=()=>{const{status:e,mediaName:t,mediaType:n,fileSize:r,dataURI:i,selectable:o,selected:s,actions:c}=this.props,l="doc"===n||!i;return a.a.createElement(L,{cardStatus:e,persistent:l,mediaName:t,mediaType:n,selectable:o,selected:s,subtitle:r,actions:c})}}render(){const{disableOverlay:e,selectable:t,selected:n,mediaType:r,progress:i,status:o,mediaName:s}=this.props;return a.a.createElement(_,{"data-testid":"media-file-card-view","data-test-media-name":s,"data-test-status":o,"data-test-progress":i,"data-test-selected":!!n||void 0,disableOverlay:e,selectable:t,selected:n,mediaType:r,className:re},this.renderCardContents())}get isFileCardImageReadyForDisplay(){const{dataURI:e,status:t}=this.props;return!!e||!["loading","processing"].includes(t)}get isCropped(){const{resizeMode:e}=this.props;return"crop"===e}get isStretched(){const{resizeMode:e}=this.props;return"stretchy-fit"===e}}ae.defaultProps={resizeMode:"crop",disableOverlay:!1};const ie=Object(te.a)()(ae)},bs5R:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M13.31 5.343l7.359 13.17A1 1 0 0 1 19.796 20H4.204a1 1 0 0 1-.873-1.488l7.36-13.169a1.5 1.5 0 0 1 2.618 0zM12 8.5a1.091 1.091 0 0 0-1.081 1.239l.513 3.766a.573.573 0 0 0 1.136 0l.513-3.766A1.091 1.091 0 0 0 12 8.5zm0 8.63a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};s.displayName="EditorWarningIcon";var c=s;t.default=c},clDp:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),i=n("fuoD"),o=n("a22k"),s=n("TcjM");const c=a.a.memo(({setWidth:e,offscreen:t})=>{const{supportsResizeObserver:n}=i.a,[r,o,c]=Object(s.a)({threshold:0}),l=a.a.useRef(()=>"undefined"!=typeof window&&n?new ResizeObserver(t=>{if(!Array.isArray(t)||!t.length)return;const{width:n}=t[0].contentRect;e(Math.round(n))}):null);return a.a.useEffect(()=>{const{current:e}=l,n=e();if(null!==n)return c&&(o||t?n.observe(c):n.unobserve(c)),()=>{n.disconnect()}},[c,o,t]),a.a.createElement("div",{style:{display:"block",width:"100%",position:"absolute"},ref:r})});n.d(t,"a",(function(){return l}));const l=a.a.memo(e=>{const{supportsResizeObserver:t,supportsIntersectionObserver:n}=i.a;return t?a.a.createElement(c,{setWidth:e.setWidth,offscreen:e.offscreen}):a.a.createElement(o.a,{setWidth:e.setWidth,useIntersectionObserver:n})})},fuoD:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));const r={supportsIntersectionObserver:!1,supportsResizeObserver:!1};function a(){const e=/Edge\/(\d+)/.exec(navigator.userAgent),t=/MSIE \d/.test(navigator.userAgent),n=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);return t?document.documentMode||6:n?+n[1]:e?+e[1]:null}"undefined"!=typeof navigator&&(r.supportsIntersectionObserver="undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,r.supportsResizeObserver="undefined"!=typeof window&&"ResizeObserver"in window&&"ResizeObserverEntry"in window);const i=r},hGBm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M6 10h2.954a1 1 0 0 1 0 2H5.099A1.1 1.1 0 0 1 4 10.9V7a1 1 0 1 1 2 0v3z" fill-rule="nonzero"/><path d="M7.39 10.09H5.3a8 8 0 1 1 .818 6H7.84v-1.02a6 6 0 1 0-.45-4.98z" fill-rule="nonzero"/><circle cx="7" cy="15.61" r="1"/></g></svg>'},e))};s.displayName="RetryIcon";var c=s;t.default=c},jVp3:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return c}));var r=n("BMbf"),a=n("/ysP");const i="\n  display: flex;\n  justify-content: center;\n",o="\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n",s=(Object(r.c)(),Object(r.c)(),(e="all")=>`\n  transition: ${e} ${a.a};\n`),c=(e,t)=>`rgba(${(e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)},${parseInt(t[2],16)},${parseInt(t[3],16)}`:null})(e)}, ${t})`},lEOu:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n("qPpp"),a=n("Jl7S");const i=e=>e.map(e=>s(e)).concat(o).join("\n"),o="\n  ::selection,*::selection {\n    background-color: transparent;\n  }\n  ::-moz-selection,*::-moz-selection {\n    background-color: transparent;\n  }\n",s=e=>{switch(e){case a.a.Border:return`border: ${r.C};`;case a.a.BoxShadow:return`\n        box-shadow: ${r.G};\n        border-color: transparent;`;case a.a.Background:return`background-color: ${r.z};`;case a.a.Blanket:return`\n        position: relative;\n\n        // Fixes ED-9263, where emoji or inline card in panel makes selection go outside the panel\n        // in Safari. Looks like it's caused by user-select: all in the emoji element\n        -webkit-user-select: text;\n\n        ::after {\n          position: absolute;\n          content: '';\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          opacity: ${r.B};\n          pointer-events: none;\n          background-color: ${r.A}\n        }`;case a.a.ResetBorder:return" border: none;";case a.a.ResetOpacity:return`opacity: ${r.B};`;default:return""}}},lT4H:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),i=n("NpkN");class o extends r.Component{constructor(){super(...arguments),this.onMouseDown=e=>{e.preventDefault()}}render(){const{icon:e,triggerColor:t,onClick:n,variant:r}=this.props;return a.a.createElement(i.a,{"data-testid":"media-card-primary-action",onClick:n,onMouseDown:this.onMouseDown,style:{color:t},variant:r},e)}}var s=n("lyMi"),c=n.n(s),l=n("Fqgi"),u=n("seTC"),d=n("VOzU"),f=n("lbXe"),p=n("VEAB");const h=Object(f.a)({onClick:Object(p.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:"mediaCardDropDownMenu"})})(e=>a.a.createElement(i.a,Object.assign({},e))),m=e=>a.a.createElement(l.a,Object.assign({"data-testid":"media-card-actions-menu-item"},e)),b=(e,t)=>{const{label:n,handler:r}=e,i=Object(f.a)({onClick:Object(p.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:"mediaCardDropDownMenuItem",attributes:{label:n}})})(m);return a.a.createElement(i,{key:t,onClick:r},n)};class g extends r.Component{render(){const{actions:e,triggerColor:t,onOpenChange:n,triggerVariant:r}=this.props;return e.length>0?a.a.createElement(u.a,{"data-testid":"media-card-actions-menu",onOpenChange:n,trigger:a.a.createElement(h,{variant:r,style:{color:t}},a.a.createElement(c.a,{label:"more"}))},a.a.createElement(d.a,null,e.map(b))):null}}var v=n("m4VZ");n.d(t,"a",(function(){return w}));const y=e=>a.a.createElement(o,Object.assign({},e));class w extends r.Component{render(){const{actions:e}=this.props;if(!e.length)return null;const t=e.find(E),n=e.filter(O(t));return a.a.createElement(v.a,null,a.a.createElement(i.c,null,t?this.renderActionIconButton(t,!0):null,this.renderOtherActionButtons(n)))}renderActionIconButton(e,t){const{triggerColor:n,variant:r}=this.props,{icon:i,handler:o,label:s}=e,c=Object(f.a)({onClick:Object(p.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:t?"mediaCardPrimaryActionButton":"mediaCardSecondaryActionButton",attributes:{label:s}})})(y);return a.a.createElement(c,{icon:i,triggerColor:n,onClick:()=>o(),variant:r})}renderOtherActionButtons(e){if(0===e.length)return null;{const{triggerColor:t,onToggle:n,variant:r}=this.props,i=e.find(E),o=e.filter(O(i));return i&&0===o.length?this.renderActionIconButton(i,!1):a.a.createElement(g,{actions:e,triggerColor:t,onOpenChange:n,triggerVariant:r})}}}function E(e){return!!e.icon}function O(e){return t=>t!==e}},m4VZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n("ERkP"),a=n.n(r);function i({children:e}){return a.a.createElement("span",{onClick:e=>{e.stopPropagation(),e.preventDefault()}},e)}const o=e=>t=>{t.stopPropagation(),t.preventDefault(),e()}},mU6V:function(e,t,n){"use strict";n.r(t),n.d(t,"ANALYTICS_MEDIA_CHANNEL",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n("ERkP"),a=n.n(r),i=n("YqJL");const o="media";class s extends a.a.Component{render(){const{data:e={},children:t}=this.props;return a.a.createElement(i.a,{channel:o,data:e},t)}}s.displayName="MediaCardAnalyticsErrorBoundary"},nVfX:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("KsTJ"),o=n("uPah");const s=i.default.div`
  ${({inline:e})=>e?"display: inline;":""};
`;s.displayName="Ellipsify";const c=({text:e,lines:t,endLength:n,inline:r,testId:i})=>a.a.createElement(s,{className:"ellipsed-text",innerRef:l({lines:t,endLength:n}),"aria-label":e,inline:r,"data-testid":i},e),l=e=>t=>{if(!t)return;const n=e.lines,r=t.getBoundingClientRect().height,a=t.textContent;t.textContent="a";const i=t.getBoundingClientRect().height,o=r/i,s=i*n;if(o<=n)return void(t.textContent=a);let c=a;const l="number"==typeof e.endLength&&e.endLength>=0?e.endLength:8,d=a.substr(0,a.length*n/o-l),f=a.substr(a.length-l,l);t.textContent=c=`${d}...${f}`;if(t.getBoundingClientRect().height>s){const e=d.substr(0,d.length-d.length/n*.25);c=`${e}...${f}`}u(()=>t.textContent=c)},u=o.canUseDOM&&window.requestAnimationFrame?window.requestAnimationFrame:e=>setTimeout(e,1)},qPpp:function(e,t,n){"use strict";n.d(t,"o",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"L",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"E",(function(){return h})),n.d(t,"z",(function(){return m})),n.d(t,"A",(function(){return b})),n.d(t,"F",(function(){return g})),n.d(t,"C",(function(){return v})),n.d(t,"G",(function(){return y})),n.d(t,"D",(function(){return w})),n.d(t,"B",(function(){return E})),n.d(t,"W",(function(){return O})),n.d(t,"I",(function(){return x})),n.d(t,"K",(function(){return j})),n.d(t,"J",(function(){return k})),n.d(t,"r",(function(){return C})),n.d(t,"w",(function(){return R})),n.d(t,"n",(function(){return N})),n.d(t,"l",(function(){return T})),n.d(t,"m",(function(){return I})),n.d(t,"U",(function(){return $})),n.d(t,"N",(function(){return z})),n.d(t,"O",(function(){return B})),n.d(t,"S",(function(){return S})),n.d(t,"T",(function(){return A})),n.d(t,"p",(function(){return M})),n.d(t,"g",(function(){return P})),n.d(t,"X",(function(){return L})),n.d(t,"q",(function(){return D})),n.d(t,"R",(function(){return V})),n.d(t,"d",(function(){return H})),n.d(t,"s",(function(){return _})),n.d(t,"x",(function(){return F})),n.d(t,"P",(function(){return W})),n.d(t,"Q",(function(){return U})),n.d(t,"v",(function(){return J})),n.d(t,"u",(function(){return K})),n.d(t,"M",(function(){return G})),n.d(t,"eb",(function(){return Y})),n.d(t,"bb",(function(){return X})),n.d(t,"Z",(function(){return q})),n.d(t,"Y",(function(){return Z})),n.d(t,"t",(function(){return Q})),n.d(t,"V",(function(){return ee})),n.d(t,"ab",(function(){return te})),n.d(t,"b",(function(){return ne})),n.d(t,"a",(function(){return re})),n.d(t,"H",(function(){return ae})),n.d(t,"cb",(function(){return ie})),n.d(t,"fb",(function(){return oe})),n.d(t,"db",(function(){return se})),n.d(t,"y",(function(){return ce}));var r=n("L48P"),a=n("HIRw");const i=16,o=Object(a.d)(),s=(r.N500,r.B100,r.N40),c=(r.N500,r.N0,r.N40),l=(r.N900,r.N700,r.B50,r.B400,r.N20,"12px"),u=r.R50,d=(r.R50,"rgba(255, 189, 173, 0.5)"),f=r.R300,p=r.R400,h=r.B300,m=r.B50,b=r.B75,g=1,v=`${g}px solid ${h}`,y=`0 0 0 ${g}px ${h}`,w=(r.B400,2),E=.3,O=1,x=2,j=11,k=j+1,C=9999,R=a.h.blanket(),N=a.h.layer(),T=N+10,I=N+5,$=(r.N100,11),z=r.N50,B=r.DN70,S=r.N20,A=r.DN50,M=(r.N20,r.B75,r.B100,r.B300,r.R50,r.R300,r.R75,680),P=760,L=960,D=1800,V=42,H=96,_=32,F=720,W=48,U=128,J=12,K=4,G="cubic-bezier(0.15, 1, 0.3, 1)",Y=1024,X=1.33,q=99*O,Z=1.5*Object(a.g)(),Q=1.714,ee=(r.N30,2),te="1.143rem",ne=680,re=480,ae="ak-editor-selected-node",ie=({theme:e})=>e&&e.baseFontSize?e.baseFontSize:Object(a.f)(),oe=e=>({theme:t})=>ie({theme:t})*e,se=(e=!1)=>e?M:P,ce=768},xLy2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><rect x="8" y="6" width="8" height="2" rx="1"/><rect x="8" y="9" width="8" height="2" rx="1"/><rect x="8" y="12" width="4" height="2" rx="1"/><path d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 0 1 5 20.01V3.99z" fill-rule="nonzero"/></g></svg>'},e))};s.displayName="PageIcon";var c=s;t.default=c},"z+31":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n("KsTJ"),a=n("BMbf"),i=n("Ag3T");const o=r.default.div`
  box-sizing: border-box;
  font-family: ${Object(a.e)()};

  * {
    box-sizing: border-box;
  }
`,s="\n  box-shadow: 0 1px 1px rgba(9, 30, 66, 0.2), 0 0 1px 0 rgba(9, 30, 66, 0.24);\n";r.default.div`
  ${i.e};
`}}]);
//# sourceMappingURL=9.NGM1255Y73.js.map