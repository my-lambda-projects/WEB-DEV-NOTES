(window.webpackJsonp=window.webpackJsonp||[]).push([["confluence-in-editor-templates-banner~b59ad437"],{AHwV:function(e,t,a){"use strict";a.r(t);var n=a("Czhu"),s=a("zjfJ"),r=a("ERkP"),i=a.n(r),o=a("KsTJ"),l=a("L21V"),c=a("lZoD"),u=a("cphC"),d=a("lPJD"),b=a("WWAs"),p=a("Q/D5"),h=a("3IV/"),f=a("WCbN"),m=a.n(f),g=a("JWHE"),j=a.n(g);const E="confluence-in-editor-templates-banner",v=Object(l.f)({message:{id:"template-panel.banner.message",defaultMessage:"{emoji}Now you can create a page with one click, and select a template directly in the editor.",description:"Text displayed in a banner at the top of the screen informing the user about new features"},linkText:{id:"template-panel.banner.link",defaultMessage:"Learn more",description:"Call to action after the primary text"},closeLabel:{id:"template-panel.banner.close",defaultMessage:"Close",description:"Accessibility label for close button"}}),O=o.default.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: ${50}px;
  background-image: url(${j.a});
  background-color: ${h.B50};
  color: ${h.N800};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`,C=o.default.a`
  color: ${h.B400};
`,w=o.default.div.attrs({role:"button"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  color: ${h.N600};
  &:hover {
    color: ${h.N90};
  }
`,y=o.default.span`
  &::after {
    display: inline;
    content: "\ud83c\udf89";
    margin-right: 5px;
  }
`;class x extends r.Component{constructor(...e){super(...e),Object(s.a)(this,"state",{isClosed:!1})}render(){const{coordinationClient:e}=this.props;return this.state.isClosed?null:i.a.createElement(p.a,{featureFlag:"confluence.frontend.in-editor-templates.banner"},i.a.createElement(d.a,{client:e,messageId:E},i.a.createElement(c.c,{to:[b.a]},t=>(t.show(E,50),i.a.createElement(O,null,i.a.createElement("div",null,i.a.createElement(l.b,Object(n.a)(Object(n.a)({},v.message),{},{values:{emoji:i.a.createElement(y,null)}}))," ",i.a.createElement(C,{href:"https://confluence.atlassian.com/display/ConfCloud/Create+a+page+from+a+template",target:"_blank"},i.a.createElement(l.b,Object(n.a)({},v.linkText)))),i.a.createElement(w,{onClick:()=>{this.setState({isClosed:!0}),e.stop(E),t.hide(E)}},i.a.createElement(l.b,Object(n.a)({},v.closeLabel),e=>i.a.createElement(m.a,{label:e}))))))))}}const N=Object(u.a)(x);a.d(t,"InEditorTemplatesBanner",(function(){return N}))},JWHE:function(e,t,a){e.exports=a.p+"owDEyai1fL.svg"},"Q/D5":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("ERkP"),s=a.n(n),r=(a("aWzz"),a("KIs4"));const i=({children:e,featureFlag:t,condition:a=(e=>e)})=>s.a.createElement(r.a,null,({featureFlags:r})=>a(r[t])?s.a.createElement(n.Fragment,null,e):null)},WCbN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("ERkP")),s=r(a("4KTy"));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(s.default,i({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M15.185 7.4l-3.184 3.185-3.186-3.186a.507.507 0 0 0-.712.003l-.7.701a.496.496 0 0 0-.004.712l3.185 3.184L7.4 15.185a.507.507 0 0 0 .004.712l.7.7c.206.207.516.2.712.004l3.186-3.185 3.184 3.185a.507.507 0 0 0 .712-.004l.701-.7a.496.496 0 0 0 .003-.712l-3.186-3.186 3.186-3.184a.507.507 0 0 0-.003-.712l-.7-.7a.508.508 0 0 0-.36-.153.5.5 0 0 0-.353.15z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};o.displayName="EditorCloseIcon";var l=o;t.default=l},WWAs:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a("Czhu"),s=a("zjfJ"),r=a("lZoD"),i=a("+FBq");const o=(e,t)=>t.indexOf(t.filter(t=>t.name===e)[0]);class l extends r.a{constructor(...e){super(...e),Object(s.a)(this,"state",{banners:[],isTopNavEnabled:!1}),Object(s.a)(this,"_updateServerRenderedBanners",e=>{0===e?this.hide("ServerRenderedBanners"):this.show("ServerRenderedBanners",e)}),Object(s.a)(this,"setTopNavEnabled",e=>{this.state.isTopNavEnabled!==e&&this.setState(t=>Object(n.a)(Object(n.a)({},t),{},{isTopNavEnabled:e}))}),Object(s.a)(this,"show",(e,t)=>{const a=o(e,this.state.banners);-1===a?this.setState(a=>{const s=[...a.banners];return s.push({name:e,height:t}),Object(n.a)(Object(n.a)({},a),{},{banners:s})}):this.state.banners[a].height!==t&&this.setState(e=>{const s=[...e.banners];return s[a].height=t,Object(n.a)(Object(n.a)({},e),{},{banners:s})})}),Object(s.a)(this,"hide",e=>{const t=o(e,this.state.banners);t>-1&&this.setState(e=>{const a=[...e.banners];return a.splice(t,1),Object(n.a)(Object(n.a)({},e),{},{banners:a})})}),Object(s.a)(this,"getTotalHeight",e=>{const t=this.state.isTopNavEnabled&&!1!==(e&&e.includeTopNav);return this.state.banners.reduce((e,t)=>e+t.height,t?i.c:0)})}}},cphC:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("Czhu"),s=a("zjfJ"),r=a("ERkP"),i=a.n(r),o=a("fYnN"),l=a.n(o),c=a("C+A9"),u=a("KIs4");const d=()=>{};function b(e){var t,a;return a=t=class extends r.Component{constructor(...e){super(...e),Object(s.a)(this,"isEngagementDisabledForTests",Boolean(l.a.get("confluence.disable-engagement-for-tests")))}render(){return i.a.createElement(u.a,null,({cloudId:t})=>{const a=this.isEngagementDisabledForTests?{start:d,stop:d}:new c.a(t,"/gateway/api");return i.a.createElement(e,Object(n.a)(Object(n.a)({},this.props),{},{coordinationClient:a}))})}},Object(s.a)(t,"displayName",`withCoordinationClient(${e.displayName||e.name})`),a}}}]);
//# sourceMappingURL=confluence-in-editor-templates-banner~b59ad437.RQ2PPepVcs.js.map