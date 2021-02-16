(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/bVj":function(e){e.exports=JSON.parse('{"a":"@atlaskit/dynamic-table","b":"14.1.4"}')},ALU8:function(e,t,n){"use strict";var s=n("ERkP"),i=n.n(s),a=n("Cmaw"),r=n("ORIB"),o=n("lbXe");const l="ASC";var c=n("Wxgo"),d=n("KsTJ"),p=n("BMbf"),h=n("ZgvQ");const g=d.default.table`
  ${({isFixedSize:e})=>e&&d.css`
      table-layout: fixed;
    `};
  border-collapse: collapse;
  width: 100%;
`,u=d.default.caption`
  font-size: 1.42857143em;
  /* there is a bug in Safari: if element which creates a new stacking context
     is a child of a table, table caption re-renders in bad wrong position
     https://stackoverflow.com/questions/44009186/safari-bug-translating-table-row-group-using-gsap-make-caption-jump-to-bottom
  */
  will-change: transform;
  font-style: inherit;
  font-weight: 500;
  letter-spacing: -0.008em;
  line-height: 1.2;
  margin-bottom: ${p.h}px;
  margin-top: ${Object(h.multiply)(p.h,3.5)}px;
  text-align: left;
`,b=d.default.div`
  display: flex;
  justify-content: center;
`,f=d.default.div`
  height: ${Object(h.multiply)(p.h,18)}px;
`,m=d.default.div`
  margin: auto;
  padding: 10px;
  text-align: center;
  width: 50%;
`;var y=n("/bVj"),k=n("HbGN"),x=n("Czhu");function v(e){return class extends i.a.Component{constructor(){super(...arguments),this.state={pageRows:[]}}static getDerivedStateFromProps(e,t){const{rows:n,head:s,sortKey:i,sortOrder:a,page:r,rowsPerPage:o}=e;Object(c.e)(i,s);const d=((e,t,n,s)=>{if(!n||!e)return t;if(!t)return[];const i=t=>{for(let s=0;s<t.length;s++)if(e.cells[s]&&e.cells[s].key===n)return t[s].key};return Array.from(t).sort((e,t)=>{const n=i(e.cells),a=i(t.cells),r=s===l?1:-1;if(void 0===n||void 0===a)return r;if(typeof n!=typeof a){if("number"==typeof n)return-1;if("number"==typeof a)return 1;if("string"==typeof n)return-1;if("string"==typeof a)return 1}return"string"==typeof n&&"string"==typeof a?r*n.localeCompare(a,void 0,{sensitivity:"accent",numeric:!0}):!n&&0!==n||n<a?-r:!a&&0!==a||n>a?r:n===a?0:1})})(s,n,i,a)||[],p=Object(c.b)(d,r,o);return Object(x.a)(Object(x.a)({},t),{},{pageRows:p})}componentDidMount(){this.props.onPageRowsUpdate&&this.props.onPageRowsUpdate(this.state.pageRows)}componentDidUpdate(e,t){this.props.onPageRowsUpdate&&this.state.pageRows!==t.pageRows&&this.props.onPageRowsUpdate(this.state.pageRows)}render(){const t=this.props,{rows:n,head:s,sortKey:a,sortOrder:r,rowsPerPage:o,page:l}=t,c=Object(k.a)(t,["rows","head","sortKey","sortOrder","rowsPerPage","page"]);return i.a.createElement(e,Object.assign({pageRows:this.state.pageRows,head:s},c))}}}var S=n("3IV/"),R=n("w301");const O={defaultColor:Object(R.a)({light:S.N40,dark:S.DN40}),selectedColor:Object(R.a)({light:S.N300,dark:S.DN300}),hoverColor:Object(R.a)({light:S.N60,dark:S.DN60})},w=Object(R.a)({light:S.B100,dark:S.B100}),E=Object(R.a)({light:S.N20,dark:S.DN50}),j=Object(R.a)({light:S.N10,dark:S.DN40}),C=Object(R.a)({light:S.N30,dark:S.DN60}),P=Object(R.a)({light:S.N40,dark:S.DN50}),N=Object(R.a)({light:S.N300,dark:S.DN300}),I=({width:e,isFixedSize:t,shouldTruncate:n})=>d.css`
  ${e?d.css`
        width: ${e}%;
      `:""} ${t?d.css`
        overflow: hidden;
      `:""};
  ${t&&n?d.css`
        text-overflow: ellipsis;
        white-space: nowrap;
      `:""};
`,$=d.css`
  border: none;
  padding: ${Object(h.divide)(p.h,2)}px ${p.h}px;
  text-align: left;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`,D=d.default.td`
  ${e=>I(e)} ${$};
`,z=d.default.tr`
  ${({isHighlighted:e})=>e&&d.css`
      background-color: ${E};
    `}

  &:hover {
    ${({isHighlighted:e})=>d.css`
        background-color: ${e?C:j};
      `}
  }

  &:focus {
    outline: ${"2px"} solid ${w};
    outline-offset: -${"2px"};
  }
`;var L=({row:e,head:t,testId:n,isFixedSize:s,isHighlighted:a})=>{const{cells:r}=e,o=Object(k.a)(e,["cells"]);return i.a.createElement(z,Object.assign({},o,{isHighlighted:a,"data-testid":n&&`${n}--row-${o.key}`}),r.map((e,a)=>{const{content:r}=e,o=Object(k.a)(e,["content"]),{shouldTruncate:l,width:c}=(t||{cells:[]}).cells[a]||{};return i.a.createElement(D,Object.assign({"data-testid":n&&`${n}--cell-${a}`},o,{isFixedSize:s,key:a,shouldTruncate:l,width:c}),r)}))};class F extends i.a.Component{render(){const{pageRows:e,head:t,isFixedSize:n,highlightedRowIndex:s,testId:a}=this.props;return i.a.createElement("tbody",{"data-testid":a&&a+"--body"},e.map((e,r)=>i.a.createElement(L,{head:t,isFixedSize:n,key:e.key||r,row:e,isHighlighted:s===r,testId:a})))}}var T=v(F),K=n("lRcl");const B=d.default.div`
  position: relative;
`,A=d.default.div`
  pointer-events: none;
  opacity: ${e=>e.contentsOpacity};
`,H=d.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;class V extends i.a.Component{render(){const{children:e,isLoading:t,spinnerSize:n,contentsOpacity:s,testId:a}=this.props;return i.a.createElement(B,null,t?i.a.createElement(A,{contentsOpacity:s},e):e,t&&i.a.createElement(H,null,i.a.createElement(K.a,{size:n,testId:a&&a+"--loadingSpinner"})))}}V.defaultProps={isLoading:!0,spinnerSize:"large",contentsOpacity:.22};var W=n("7nmT");const U=d.default.div`
  margin-bottom: ${3*Object(p.h)()}px;
  position: relative;
`,M=d.default.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,_=d.default.div`
  position: relative;
  top: 0;
`,J=e=>{try{return Object(W.findDOMNode)(e)}catch(t){return null}};class G extends i.a.Component{constructor(){super(...arguments),this.componentDidMount=()=>{this.props.isLoading&&this.hasTargetNode()&&(this.attachListeners(),this.updateTargetAppearance(),this.updateSpinnerPosition())},this.UNSAFE_componentWillReceiveProps=e=>{e.isLoading&&this.hasTargetNode(e)?this.props.isLoading||this.attachListeners():this.detachListeners()},this.componentDidUpdate=()=>{this.hasTargetNode()&&(this.updateTargetAppearance(),this.props.isLoading&&this.updateSpinnerPosition())},this.componentWillUnmount=()=>{this.detachListeners()},this.getTargetNode=(e=this.props)=>{const{targetRef:t}=e,n=t?t():this.children;return J(n)},this.getThisNode=()=>J(this),this.getSpinnerNode=()=>J(this.spinner),this.hasTargetNode=e=>!!this.getTargetNode(e),this.isVerticallyVisible=(e,t)=>{const{top:n,bottom:s}=e;return!(s<=0)&&n<t},this.isFullyVerticallyVisible=(e,t)=>{const{top:n,bottom:s}=e;return n>=0&&s<=t},this.handleResize=()=>{this.updateSpinnerPosition()},this.handleScroll=()=>{this.updateSpinnerPosition()},this.translateSpinner=(e,t,n)=>{e.style.position=n?"fixed":"",e.style.transform=0!==t?`translate3d(0, ${t}px, 0)`:""},this.updateTargetAppearance=()=>{const e=this.getTargetNode(),{isLoading:t,contentsOpacity:n}=this.props;e&&e.style&&"object"==typeof e.style&&(e.style.pointerEvents=t?"none":"",e.style.opacity=t?n.toString():"")}}attachListeners(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)}detachListeners(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)}updateSpinnerPosition(){const e=window.innerHeight,t=this.getTargetNode(),n=this.getSpinnerNode();if(!t||!n)return;const s=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=i.height,r=this.isVerticallyVisible(s,e),{top:o,bottom:l,height:c}=s;if(r){if(c>=3*a&&!this.isFullyVerticallyVisible(s,e)){if(o>=0){const t=e-o,s=t/2+o-a/2,i=t<3*a?o+a:s;this.translateSpinner(n,i,!0)}else if(o<0&&l>e){const t=e/2-a/2;this.translateSpinner(n,t,!0)}else{const e=l/2-a/2,t=e<a?e-(a-e):e;this.translateSpinner(n,t,!0)}return}}else if(!this.isVerticallyVisible(i,e))return;const d=this.getThisNode();if(d&&"function"==typeof d.getBoundingClientRect){const e=(o-d.getBoundingClientRect().top)/2;this.translateSpinner(n,e,!1)}}render(){const{children:e,isLoading:t,spinnerSize:n,testId:s}=this.props;return i.a.createElement(U,null,i.a.cloneElement(e,{ref:e=>{this.children=e}}),t&&i.a.createElement(M,null,i.a.createElement(_,{innerRef:e=>{this.spinner=e}},i.a.createElement(K.a,{size:n,testId:s&&s+"--loadingSpinner"}))))}}G.defaultProps={isLoading:!0,spinnerSize:"large",contentsOpacity:.22};var Y=n("MCLT"),q=n("rs7y"),Q=n("0ygh");var X=n("nLOI"),Z=n("YEM6"),ee=n.n(Z),te=n("osBk"),ne=n("HIRw");var se=e=>i.a.createElement(te.a,Object.assign({},e,{appearance:"subtle",spacing:"none",theme:(e,t)=>{const n=e(t),{buttonStyles:s}=n,i=Object(k.a)(n,["buttonStyles"]),a=Object(ne.g)()/2;return Object(x.a)({buttonStyles:Object(x.a)(Object(x.a)({},s),{},{paddingLeft:a+"px",paddingRight:a+"px","html[dir=rtl] &":{transform:"rotate(180deg)"}})},i)}}));class ie extends s.Component{render(){return i.a.createElement(se,Object.assign({},this.props))}}ie.defaultProps={"aria-label":"previous",iconBefore:i.a.createElement(ee.a,{label:""}),isDisabled:!1};var ae=n("oSUa"),re=n.n(ae);class oe extends s.Component{render(){return i.a.createElement(se,Object.assign({},this.props))}}oe.defaultProps={"aria-label":"next",iconBefore:i.a.createElement(re.a,{label:""}),isDisabled:!1};class le extends s.Component{render(){return i.a.createElement(te.a,Object.assign({},this.props,{appearance:"subtle"}))}}const ce=d.default.span`
  display: inline-flex;
  text-align: center;
  align-items: center;
  padding: 0 8px;
`;class de extends s.Component{constructor(){super(...arguments),this.state={selectedIndex:this.props.defaultSelectedIndex||0},this.createAndFireEventOnAtlaskit=Object(Y.a)("atlaskit"),this.onChangeAnalyticsCaller=()=>{const{createAnalyticsEvent:e}=this.props;if(e)return this.createAndFireEventOnAtlaskit({action:"changed",actionSubject:"pageNumber",attributes:{componentName:"pagination",packageName:X.a,packageVersion:X.b}})(e)},this.onChange=(e,t)=>{void 0===this.props.selectedIndex&&this.setState({selectedIndex:t});const n=this.onChangeAnalyticsCaller();this.props.onChange&&this.props.onChange(e,this.props.pages[t],n)},this.pagesToComponents=e=>{const{selectedIndex:t}=this.state,{components:n,getPageLabel:s}=this.props;return e.map((e,a)=>i.a.createElement(le,{key:"page-"+(s?s(e,a):a),component:n.Page,onClick:e=>this.onChange(e,a),isSelected:t===a,page:e},s?s(e,a):e))},this.renderPages=()=>{const{selectedIndex:e}=this.state,{pages:t,max:n,collapseRange:s,renderEllipsis:i}=this.props;return s(this.pagesToComponents(t),e,{max:n,ellipsis:i})},this.renderLeftNavigator=()=>{const{components:e,pages:t,i18n:n}=this.props,{selectedIndex:s}=this.state,a={"aria-label":n.prev,pages:t};return i.a.createElement(ie,Object.assign({key:"left-navigator",component:e.Previous,onClick:e=>this.onChange(e,s-1),isDisabled:0===s},a))},this.renderRightNavigator=()=>{const{components:e,pages:t,i18n:n}=this.props,{selectedIndex:s}=this.state,a={"aria-label":n.next,pages:t};return i.a.createElement(oe,Object.assign({key:"right-navigator",component:e.Next,onClick:e=>this.onChange(e,s+1),isDisabled:s===t.length-1},a))}}static getDerivedStateFromProps(e){return null!=e.selectedIndex?{selectedIndex:e.selectedIndex}:null}render(){const{innerStyles:e}=this.props;return i.a.createElement("div",{style:Object(x.a)({display:"flex"},e)},i.a.createElement(s.Fragment,null,this.renderLeftNavigator(),this.renderPages(),this.renderRightNavigator()))}}de.defaultProps={collapseRange:function(e,t,{max:n,ellipsis:s}){const i=e.length,a=i>n,r=a&&n-4<t,o=a&&t<i-n+4;if(!a)return e;if(r&&!o){const t=n-2;return[e[0],s({key:"elipses-1"}),...e.slice(i-t)]}if(!r&&o){const t=n-2;return[...e.slice(0,t),s({key:"elipses-1"}),e[i-1]]}const l=n-4;return[e[0],s({key:"elipses-1"}),...e.slice(t-Math.floor(l/2),t+l-1),s({key:"elipses-2"}),e[i-1]]},components:{},defaultSelectedIndex:0,i18n:{prev:"previous",next:"next"},innerStyles:{},max:7,onChange:()=>{},renderEllipsis:function({key:e}){return i.a.createElement(ce,{key:e},"...")}};var pe=Object(q.a)({componentName:"pagination",packageName:X.a,packageVersion:X.b})(Object(Q.a)()(de));class he extends i.a.Component{constructor(){super(...arguments),this.onChange=(e,t,n)=>{this.props.onChange(t,n)}}render(){const{total:e,value:t=1,i18n:n}=this.props,s=[...Array(e)].map((e,t)=>t+1),a=t-1;return i.a.createElement(pe,{selectedIndex:a,i18n:n,onChange:this.onChange,pages:s})}}var ge=n("sKpK");function ue(e){return class extends i.a.Component{constructor(){super(...arguments),this.state={refWidth:0,refHeight:0},this.innerRef=e=>{e&&!this.props.isRanking&&(this.ref=e)},this.updateDimensions=()=>{if(!this.ref)return;const e=this.ref.getBoundingClientRect(),{width:t}=e,{height:n}=e;t===this.state.refWidth&&n===this.state.refHeight||this.setState({refWidth:t,refHeight:n})}}UNSAFE_componentWillReceiveProps(e){const t=this.props.isRanking;e.isRanking&&!t&&this.updateDimensions()}render(){const{refWidth:t,refHeight:n}=this.state;return i.a.createElement(e,Object.assign({refWidth:t,refHeight:n,innerRef:this.innerRef},this.props))}}}var be=n("bg0W");const fe=d.css`
  display: block;
`,me=d.css`
  background-color: ${S.N20};
  ${Object(be.e500)()} border-radius: 2px;
`,ye=Object(d.default)(z)`
  ${({isRanking:e,isRankingItem:t})=>d.css`
  ${e&&fe} ${t&&me} &:focus {
    outline-style: solid;
    outline-color: ${S.B100};
    outline-width: 2px;
  }
`};
`,ke=d.css`
  box-sizing: border-box;
`,xe=Object(d.default)(D)`
  ${({isRanking:e})=>e&&ke};
`;class ve extends i.a.Component{render(){const{cell:e,head:t,isFixedSize:n,isRanking:s,innerRef:a,refWidth:r}=this.props,{content:o}=e,l=Object(k.a)(e,["content"]),{shouldTruncate:d,width:p}=t||{},h=Object(c.c)(s,r);return i.a.createElement(xe,Object.assign({},l,{isFixedSize:n,shouldTruncate:d,width:p,isRanking:s,style:h,innerRef:a,onKeyDown:e=>e.stopPropagation()}),o)}}var Se=ue(ve);class Re extends i.a.Component{constructor(){super(...arguments),this.innerRef=e=>t=>{e(t),this.props.innerRef&&this.props.innerRef(t)}}render(){const{row:e,head:t,isFixedSize:n,isRanking:s,refWidth:a,rowIndex:r,isRankingDisabled:o,isHighlighted:l,testId:d}=this.props,{cells:p,key:h}=e,g=Object(k.a)(e,["cells","key"]),u=Object(c.c)(s,a);if("string"!=typeof h&&!o)throw new Error("dynamic-table: ranking is not possible because table row does not have a key. Add the key to the row or disable ranking.");return i.a.createElement(ge.b,{draggableId:h||""+r,index:r,isDragDisabled:o},(e,a)=>i.a.createElement(ye,Object.assign({},g,e.dragHandleProps,e.draggableProps,{innerRef:this.innerRef(e.innerRef),style:Object(x.a)(Object(x.a)({},e.draggableProps.style),u),isHighlighted:l,isRanking:s,isRankingItem:a.isDragging}),p.map((e,a)=>{const r=(t||{cells:[]}).cells[a];return i.a.createElement(Se,{head:r,cell:e,isRanking:s,key:e.key||a,isFixedSize:n,testId:d})})))}}var Oe=ue(Re);class we extends i.a.Component{constructor(){super(...arguments),this.onBeforeDragStart=e=>{const{draggableId:t,source:{index:n}}=e,s={index:n,key:t};this.props.onRankStart(s)},this.onDragEnd=e=>{const{pageRows:t,onRankEnd:n}=this.props,{draggableId:s,source:{index:i}}=e;n({sourceIndex:i,sourceKey:s,destination:((e,t)=>{const{source:{index:n},destination:s}=e;if(s){const{index:e}=s,i=e<n?e-1:e,a=-1===i?0:i+1;return{index:e,afterKey:-1!==i?t[i].key:void 0,beforeKey:a<t.length?t[a].key:void 0}}})(e,t)})}}render(){const{highlightedRowIndex:e,pageRows:t,head:n,isFixedSize:s,isRanking:a,isRankingDisabled:r,testId:o}=this.props;return i.a.createElement(ge.a,{onBeforeDragStart:this.onBeforeDragStart,onDragEnd:this.onDragEnd},i.a.createElement(ge.c,{droppableId:"dynamic-table-droppable",isDropDisabled:r},l=>i.a.createElement("tbody",Object.assign({"data-testid":o,ref:l.innerRef},l.droppableProps),t.map((t,o)=>i.a.createElement(Oe,{head:n,isRanking:a,isFixedSize:s,key:t.key,rowIndex:o,row:t,isRankingDisabled:r,isHighlighted:e===o})),l.placeholder)))}}var Ee=v(we);const je=d.css`
  display: block;
`,Ce=d.default.thead`
  border-bottom: 2px solid ${P};
  ${({isRanking:e})=>e&&je};
`,Pe=d.default.th`
  ${({onClick:e})=>(({onClick:e})=>e&&d.css`
    &:hover {
      cursor: pointer;
      background-color: ${S.N30A};
    }
  `)({onClick:Boolean(e)})}
  ${e=>I(e)} 
  ${e=>(e=>{const{isSortable:t,sortOrder:n}=e;if(!t)return"";const s=d.css`
    border: 3px solid transparent;
    display: block;
    height: 0;
    position: absolute;
    right: -${p.h}px;
    width: 0;
  `;return d.css`
    & > span {
      position: relative;
      &::before {
        ${s};
        border-bottom: 3px solid
          ${n===l?O.selectedColor(e):O.defaultColor(e)};
        bottom: 8px;
        content: ' ';
      }
      &::after {
        ${s};
        border-top: 3px solid
          ${"DESC"===n?O.selectedColor(e):O.defaultColor(e)};
        bottom: 0;
        content: ' ';
      }
    }

    &:hover > span {
      &::before {
        border-bottom: 3px solid
          ${n===l?O.selectedColor(e):O.hoverColor(e)};
      }
      &::after {
        border-top: 3px solid
          ${"DESC"===n?O.selectedColor(e):O.hoverColor(e)};
      }
    }
  `})(e)} 
  ${$} 
  border: none;
  color: ${N};
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 600;
  position: relative;
  text-align: left;
  vertical-align: top;
  &:focus {
    outline: solid 2px ${S.B100};
  }
`;class Ne extends i.a.Component{render(){const e=this.props,{content:t,inlineStyles:n,testId:s}=e,a=Object(k.a)(e,["content","inlineStyles","testId"]);return i.a.createElement(Pe,Object.assign({style:n,"data-testid":s&&s+"--head--cell"},a,{tabIndex:a.isSortable?0:void 0}),i.a.createElement("span",null,t))}}Ne.defaultProps={innerRef:()=>{},inlineStyles:{}};var Ie=Ne;class $e extends i.a.Component{render(){const e=this.props,{isRanking:t,refHeight:n,refWidth:s,innerRef:a}=e,r=Object(k.a)(e,["isRanking","refHeight","refWidth","innerRef"]),o=Object(c.c)(t,s);return i.a.createElement(Ie,Object.assign({inlineStyles:o,innerRef:a},r))}}var De=ue($e);class ze extends i.a.Component{constructor(){super(...arguments),this.canSortOnEnterPressed=(e,t)=>t&&"Enter"===e.key}UNSAFE_componentWillMount(){Object(c.e)(this.props.sortKey,this.props.head)}UNSAFE_componentWillReceiveProps(e){this.props.sortKey===e.sortKey&&this.props.head===e.head||Object(c.e)(e.sortKey,e.head)}render(){const{head:e,sortKey:t,sortOrder:n,isFixedSize:s,onSort:a,isRanking:r,isRankable:o,testId:l}=this.props;if(!e)return null;const c=o?De:Ie,{cells:d}=e,p=Object(k.a)(e,["cells"]);return i.a.createElement(Ce,Object.assign({},p,{isRanking:r,"data-testid":l&&l+"--head"}),i.a.createElement("tr",null,d.map((e,o)=>{const{isSortable:d,key:p}=e,h=Object(k.a)(e,["isSortable","key"]);return i.a.createElement(c,Object.assign({isFixedSize:s,isSortable:!!d,isRanking:r,key:p||o,onClick:d?a(e):void 0,onKeyDown:t=>this.canSortOnEnterPressed(t,d)?a(e)():void 0,testId:l,sortOrder:p===t?n:void 0},h))})))}}var Le=ze;class Fe extends i.a.Component{constructor(){super(...arguments),this.state={isRanking:!1},this.onSort=e=>()=>{const{sortKey:t,sortOrder:n,onSort:s,isRankable:i}=this.props,{key:a}=e;if(!a)return;if(s&&i&&a===t&&"DESC"===n)return void s({key:null,sortOrder:null,item:e});const r=a!==t?l:function(e){switch(e){case"DESC":return l;case l:return"DESC";default:return e}}(n);s&&s({key:a,item:e,sortOrder:r})},this.onSetPage=(e,t)=>{const{onSetPage:n}=this.props;n&&n(e,t)},this.onRankStart=e=>{this.setState({isRanking:!0}),this.props.onRankStart&&this.props.onRankStart(e)},this.onRankEnd=e=>{this.setState({isRanking:!1}),this.props.onRankEnd&&this.props.onRankEnd(e)},this.getSpinnerSize=()=>{const{page:e,rows:t,rowsPerPage:n,loadingSpinnerSize:s}=this.props;return s||(Object(c.b)(t||[],e,n).length>2?"large":"small")},this.renderEmptyBody=()=>{const{emptyView:e,isLoading:t}=this.props;return t?i.a.createElement(f,null):e&&i.a.createElement(m,null,e)}}UNSAFE_componentWillMount(){Object(c.e)(this.props.sortKey,this.props.head),Object(c.a)(this.props.head)}UNSAFE_componentWillReceiveProps(e){this.props.sortKey===e.sortKey&&this.props.head===e.head||Object(c.e)(e.sortKey,e.head),this.props.head!==e.head&&Object(c.a)(e.head)}render(){const{caption:e,head:t,highlightedRowIndex:n,isFixedSize:s,page:a,rows:r,rowsPerPage:o,sortKey:l,sortOrder:c,isLoading:d,isRankable:p,isRankingDisabled:h,paginationi18n:f,onPageRowsUpdate:m,testId:y}=this.props,k=r&&r.length,x={highlightedRowIndex:n,rows:r,head:t,sortKey:l,sortOrder:c,rowsPerPage:o,page:a,isFixedSize:s||!1,onPageRowsUpdate:m,ref:e=>{this.tableBody=e},testId:y},v=k&&o?Math.ceil(k/o):0,S=!!k,R=this.getSpinnerSize(),O=this.renderEmptyBody(),w=p&&!l;return i.a.createElement(i.a.Fragment,null,i.a.createElement(G,{isLoading:d&&S,spinnerSize:R,targetRef:()=>this.tableBody,testId:y},i.a.createElement(g,{isFixedSize:s,"data-testid":y&&y+"--table"},!!e&&i.a.createElement(u,null,e),t&&i.a.createElement(Le,{head:t,onSort:this.onSort,sortKey:l,sortOrder:c,isRanking:this.state.isRanking,isRankable:w,testId:y}),S&&(w?i.a.createElement(Ee,Object.assign({},x,{isRanking:this.state.isRanking,onRankStart:this.onRankStart,onRankEnd:this.onRankEnd,isRankingDisabled:h||d||!1})):i.a.createElement(T,Object.assign({},x))))),v?i.a.createElement(b,null,i.a.createElement(he,{value:a,onChange:this.onSetPage,total:v,i18n:f})):null,!S&&O&&i.a.createElement(V,{isLoading:d,spinnerSize:"large",testId:y},O))}}Fe.defaultProps={isLoading:!1,isFixedSize:!1,rowsPerPage:1/0,onSetPage:()=>{},onSort:()=>{},page:1,isRankable:!1,isRankingDisabled:!1,onRankStart:()=>{},onRankEnd:()=>{},paginationi18n:{prev:"Prev",next:"Next"}};const Te=Object(a.a)("atlaskit");t.a=Object(r.a)({componentName:"dynamicTable",packageName:y.a,packageVersion:y.b})(Object(o.a)({onSort:Te({action:"sorted",actionSubject:"dynamicTable",attributes:{componentName:"dynamicTable",packageName:y.a,packageVersion:y.b}}),onRankEnd:Te({action:"ranked",actionSubject:"dynamicTable",attributes:{componentName:"dynamicTable",packageName:y.a,packageVersion:y.b}})})(Fe))},Wxgo:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return l}));const s=(e,t,n)=>t&&n&&e.length?e.slice((t-1)*n,t*n):[],i=e=>{e&&e.cells&&e.cells.forEach(e=>{if(e.isSortable&&!e.key)try{throw Error("isSortable can't be set to true, if the 'key' prop is missing.")}catch(t){console.error(t)}})},a=(e,t)=>{if(!e)return;if(!(t&&t.cells.map(e=>e.key).includes(e)))try{throw Error(`Cell with ${e} key not found in head.`)}catch(n){console.error(n)}},r=(e,t,n)=>e?n?{width:t,height:n}:{width:t}:{},o=(e,t,n)=>e+(n&&isFinite(n)?(t-1)*n:0),l=(e,t,n=1,s)=>{const{destination:i,sourceIndex:a}=e;if(!i)return t;const r=o(a,n,s),l=o(i.index,n,s),c=t.slice(),[d]=c.splice(r,1);return c.splice(l,0,d),c}},YEM6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n("ERkP")),i=a(n("4KTy"));function a(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var o=function(e){return s.default.createElement(i.default,r({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="currentColor" fill-rule="evenodd" d="M9.005 10.995l4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4L9.005 12.41a1 1 0 0 1 0-1.414z"/></svg>'},e))};o.displayName="ChevronLeftLargeIcon";var l=o;t.default=l},nLOI:function(e){e.exports=JSON.parse('{"a":"@atlaskit/pagination","b":"13.0.4"}')},oSUa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n("ERkP")),i=a(n("4KTy"));function a(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var o=function(e){return s.default.createElement(i.default,r({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="currentColor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4l4.593 4.593z"/></svg>'},e))};o.displayName="ChevronRightLargeIcon";var l=o;t.default=l}}]);
//# sourceMappingURL=34.VSNXyjtxVy.js.map
