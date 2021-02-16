(window.webpackJsonp=window.webpackJsonp||[]).push([["@atlaskit-internal-renderer-node_CodeBlock~0740671c"],{aKkx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("ERkP")),n=r(a("4KTy"));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var c=function(e){return o.default.createElement(n.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor"><path d="M10 19h8V8h-8v11zM8 7.992C8 6.892 8.902 6 10.009 6h7.982C19.101 6 20 6.893 20 7.992v11.016c0 1.1-.902 1.992-2.009 1.992H10.01A2.001 2.001 0 0 1 8 19.008V7.992z"/><path d="M5 16V4.992C5 3.892 5.902 3 7.009 3H15v13H5zm2 0h8V5H7v11z"/></g></svg>'},e))};c.displayName="CopyIcon";var s=c;t.default=s},rgwU:function(e,t,a){"use strict";a.r(t);var o=a("ERkP"),n=a.n(o),r=a("lfjn"),l=a("DFGU"),c=a("YRwa"),s=a("KsTJ"),i=a("a8dO"),p=a("zJ/j"),d=a("aKkx"),u=a.n(d),f=a("3IV/"),b=a("/9fE"),g=a("s8Z6");const h=s.default.span`
  display: flex;
  position: sticky;
  justify-content: flex-end;
  top: 0;

  button {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 32px;
    width: 32px;
    right: 6px;
    top: 6px;
    padding: 2px;
    opacity: 0;
    transition: opacity 0.2s ease 0s;
    border: 2px solid #ffffff;
    border-radius: 4px;
    background-color: ${f.N20};
    color: rgb(66, 82, 110);
  }

  button:hover {
    background-color: ${f.N30};
  }

  button.clicked {
    background-color: ${f.N700};
    color: #ffffff !important;
  }
`;var y=Object(c.g)(({content:e,intl:t})=>{const[a,r]=Object(o.useState)(t.formatMessage(g.a.copyCodeToClipboard)),[l,c]=Object(o.useState)("copy-to-clipboard"),s=()=>{r(t.formatMessage(g.a.copyCodeToClipboard)),c("copy-to-clipboard")};return n.a.createElement(b.a,null,({copyTextToClipboard:o})=>n.a.createElement(h,null,n.a.createElement(i.a,{content:a,hideTooltipOnClick:!1,position:"top"},n.a.createElement("div",{onMouseLeave:s},n.a.createElement(p.a,{className:l,"aria-label":a,spacing:"compact",appearance:"subtle","aria-haspopup":!0,iconBefore:n.a.createElement(u.a,{label:a}),onClick:()=>{o(e),r(t.formatMessage(g.a.copiedCodeToClipboard)),c("copy-to-clipboard clicked")}})))))});class v extends o.PureComponent{render(){const{text:e,language:t,handleRef:a,shadowClassNames:o,allowCopyToClipboard:l=!1}=this.props,c={language:t,text:e};return n.a.createElement("div",{className:"code-block "+o,ref:a},l?n.a.createElement(y,{content:c.text}):null,n.a.createElement(r.a,Object.assign({},c)))}}t.default=Object(l.a)(v,{overflowSelector:"span",scrollableSelector:"code"})}}]);
//# sourceMappingURL=@atlaskit-internal-renderer-node_CodeBlock~0740671c.65gJXVvhGh.js.map