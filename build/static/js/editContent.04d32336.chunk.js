(self.webpackChunkreact17_webpack5_cli=self.webpackChunkreact17_webpack5_cli||[]).push([[429],{3429:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h,$:()=>g});var n=a(7294),r=a(7835),l=a(4586);const c="carousel--3b9GF";var i=a(706),o=a(8207),s=e=>{var[t]=(0,o.i)(),[a,r]=(0,n.useState)("auto");return n.createElement(i.Z,{className:c,autoplay:!0},t.banners.map((e=>n.createElement("img",{key:e.src,src:e.src,onLoad:e=>{var{height:t}=e.target;t>a&&r(t)},alt:""}))))};s.defaultProps={banners:[{src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUowsiZ_AQw7gU46AI!900x900.jpg.webp"},{src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp"}]},s.editFields=["banner"];const d=s;function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(){var[{text:e="\u6309\u94ae",width:t,height:a}]=(0,o.i)();return n.createElement(Button,{style:{width:t,height:a},type:"primary"},e)}v.editFields=["width","height","text","link"],v.defaultProps={width:64,height:32};var f=()=>{var[{src:e,text:t,width:a,height:r}]=(0,o.i)();return n.createElement("div",{style:{width:a,height:r}},n.createElement("img",{style:{width:"100%"},src:e}),n.createElement("p",null,t))};f.defaultProps={src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp",text:"demo",width:"100%"},f.editFields=["width","height","text"];var g={ImageCom:f,ButtonDemo:v,Demo:function(){var[{background:e="black"},t]=(0,o.i)();return n.createElement("div",{className:css.test,style:{background:e}},"\u989c\u8272\u53ef\u7f16\u8f91\uff1a",n.createElement("input",{type:"text",onBlur:e=>t({background:e.target.value})}))},Carousel:d};const h=e=>{var{elementType:t,cardList:a,changeCardList:c,children:i,accept:s,containerType:d}=e,[m,u]=(0,o.i)(),v={type:s||"card",elementType:t,containerType:d||"normal",update:u},[,f]=(0,r.useDrag)({item:v,begin:e=>(a.find((e=>-1===e.id))||c([{bg:"aqua",category:"\u653e\u8fd9\u91cc",id:-1},...a]),v),end(e,t){var n=t.getDropResult(),r=a.findIndex((e=>-1===e.id)),i=[...a];if(n.update)return i.splice(r,1),n.update({children:[p(p({},t.getItem()),{},{id:(0,l.Z)()})]}),void c(i);t.didDrop()?i.splice(r,1,p(p({},t.getItem()),{},{id:(0,l.Z)()})):i.splice(r,1),c(i)}});return n.createElement("div",{ref:f,style:{cursor:"move"}},i)}},8526:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(3032),r="/api/getData",l="24f4e35b-8330-4982-a993-734a95c4fd2b";function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return n.Z.post(r,{id:e}).then((e=>{try{return JSON.parse(e.data.data)}catch(t){return null}}))}},4102:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>lt});var n=a(7294),r=a(6919),l=a(2633),c=a(5776),i=a(8207),o=a(7154),s=a.n(o),d=a(9713),m=a.n(d),p=a(6156),u=a(5061),v=a(6610),f=a(5991),g=a(5255),h=a(1907),y=a(4184),E=a.n(y),b=a(6774),C=a.n(b),x=a(344),k=a(444),w=a(8481),N=n.forwardRef((function(e,t){var a,r=e.prefixCls,l=e.forceRender,c=e.className,i=e.style,o=e.children,s=e.isActive,d=e.role,m=n.useState(s||l),u=(0,w.Z)(m,2),v=u[0],f=u[1];return n.useEffect((function(){(l||s)&&f(!0)}),[l,s]),v?n.createElement("div",{ref:t,className:E()("".concat(r,"-content"),(a={},(0,p.Z)(a,"".concat(r,"-content-active"),s),(0,p.Z)(a,"".concat(r,"-content-inactive"),!s),a),c),style:i,role:d},n.createElement("div",{className:"".concat(r,"-content-box")},o)):null}));N.displayName="PanelContent";const Z=N;var P=function(e){(0,g.Z)(a,e);var t=(0,h.Z)(a);function a(){var e;return(0,v.Z)(this,a),(e=t.apply(this,arguments)).handleItemClick=function(){var t=e.props,a=t.onItemClick,n=t.panelKey;"function"===typeof a&&a(n)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return(0,f.Z)(a,[{key:"shouldComponentUpdate",value:function(e){return!C()(this.props,e)}},{key:"render",value:function(){var e,t,a=this,r=this.props,l=r.className,c=r.id,i=r.style,o=r.prefixCls,s=r.header,d=r.headerClass,m=r.children,u=r.isActive,v=r.showArrow,f=r.destroyInactivePanel,g=r.accordion,h=r.forceRender,y=r.openMotion,b=r.expandIcon,C=r.extra,x=r.collapsible,w="disabled"===x,N=E()("".concat(o,"-header"),(e={},(0,p.Z)(e,d,d),(0,p.Z)(e,"".concat(o,"-header-collapsible-only"),"header"===x),e)),P=E()((t={},(0,p.Z)(t,"".concat(o,"-item"),!0),(0,p.Z)(t,"".concat(o,"-item-active"),u),(0,p.Z)(t,"".concat(o,"-item-disabled"),w),t),l),_=n.createElement("i",{className:"arrow"});return v&&"function"===typeof b&&(_=b(this.props)),n.createElement("div",{className:P,style:i,id:c},n.createElement("div",{className:N,onClick:function(){return"header"!==x&&a.handleItemClick()},role:g?"tab":"button",tabIndex:w?-1:0,"aria-expanded":u,onKeyPress:this.handleKeyPress},v&&_,"header"===x?n.createElement("span",{onClick:this.handleItemClick,className:"".concat(o,"-header-text")},s):s,C&&n.createElement("div",{className:"".concat(o,"-extra")},C)),n.createElement(k.Z,Object.assign({visible:u,leavedClassName:"".concat(o,"-content-hidden")},y,{forceRender:h,removeOnLeave:f}),(function(e,t){var a=e.className,r=e.style;return n.createElement(Z,{ref:t,prefixCls:o,className:a,style:r,isActive:u,forceRender:h,role:g?"tabpanel":null},m)})))}}]),a}(n.Component);P.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};const _=P;function I(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t.map((function(e){return String(e)}))}var O=function(e){(0,g.Z)(a,e);var t=(0,h.Z)(a);function a(e){var r;(0,v.Z)(this,a),(r=t.call(this,e)).onClickItem=function(e){var t=r.state.activeKey;if(r.props.accordion)t=t[0]===e?[]:[e];else{var a=(t=(0,u.Z)(t)).indexOf(e);a>-1?t.splice(a,1):t.push(e)}r.setActiveKey(t)},r.getNewChild=function(e,t){if(!e)return null;var a=r.state.activeKey,l=r.props,c=l.prefixCls,i=l.openMotion,o=l.accordion,s=l.destroyInactivePanel,d=l.expandIcon,m=l.collapsible,p=e.key||String(t),u=e.props,v=u.header,f=u.headerClass,g=u.destroyInactivePanel,h=u.collapsible,y=null!==h&&void 0!==h?h:m,E={key:p,panelKey:p,header:v,headerClass:f,isActive:o?a[0]===p:a.indexOf(p)>-1,prefixCls:c,destroyInactivePanel:null!==g&&void 0!==g?g:s,openMotion:i,accordion:o,children:e.props.children,onItemClick:"disabled"===y?null:r.onClickItem,expandIcon:d,collapsible:y};return"string"===typeof e.type?e:n.cloneElement(e,E)},r.getItems=function(){var e=r.props.children;return(0,x.Z)(e).map(r.getNewChild)},r.setActiveKey=function(e){"activeKey"in r.props||r.setState({activeKey:e}),r.props.onChange(r.props.accordion?e[0]:e)};var l=e.activeKey,c=e.defaultActiveKey;return"activeKey"in e&&(c=l),r.state={activeKey:I(c)},r}return(0,f.Z)(a,[{key:"shouldComponentUpdate",value:function(e,t){return!C()(this.props,e)||!C()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,r=t.className,l=t.style,c=t.accordion,i=E()((e={},(0,p.Z)(e,a,!0),(0,p.Z)(e,r,!!r),e));return n.createElement("div",{className:i,style:l,role:c?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=I(e.activeKey)),t}}]),a}(n.Component);O.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},O.Panel=_;const A=O;O.Panel;var D=a(7638),L=a.n(D),j=a(7435),S=a(5632),T=a(1687);const K=function(e){(0,T.Z)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var t=n.useContext(S.E_).getPrefixCls,a=e.prefixCls,r=e.className,l=void 0===r?"":r,c=e.showArrow,i=void 0===c||c,o=t("collapse",a),d=E()(m()({},"".concat(o,"-no-arrow"),!i),l);return n.createElement(A.Panel,s()({},e,{prefixCls:o,className:d}))};var R=a(3603),z=a(6159),F=function(e){var t,a=n.useContext(S.E_),r=a.getPrefixCls,l=a.direction,c=e.prefixCls,i=e.className,o=void 0===i?"":i,d=e.bordered,p=void 0===d||d,u=e.ghost,v=r("collapse",c),f=function(){var t=e.expandIconPosition;return void 0!==t?t:"rtl"===l?"right":"left"}(),g=E()((t={},m()(t,"".concat(v,"-borderless"),!p),m()(t,"".concat(v,"-icon-position-").concat(f),!0),m()(t,"".concat(v,"-rtl"),"rtl"===l),m()(t,"".concat(v,"-ghost"),!!u),t),o),h=s()(s()({},R.Z),{motionAppear:!1,leavedClassName:"".concat(v,"-content-hidden")});return n.createElement(A,s()({openMotion:h},e,{bordered:p,expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.expandIcon,r=a?a(t):n.createElement(L(),{rotate:t.isActive?90:void 0});return(0,z.Tm)(r,(function(){return{className:E()(r.props.className,"".concat(v,"-arrow"))}}))},prefixCls:v,className:g}),function(){var t=e.children;return(0,x.Z)(t).map((function(e,t){var a;if(null===(a=e.props)||void 0===a?void 0:a.disabled){var n=e.key||String(t),r=e.props,l=r.disabled,c=r.collapsible,i=s()(s()({},(0,j.Z)(e.props,"disabled")),{key:n,collapsible:null!==c&&void 0!==c?c:l?"disabled":void 0});return(0,z.Tm)(e,i)}return e}))}())};F.Panel=K;const M=F;var V=a(3038),B=a.n(V),U=a(2461),H=a.n(U),q=a(5105),$=a(1097),Y=a(1577),G=a(7827),Q=a(2051),J=a(5767),X=a(1643),W=void 0,ee=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},te=n.forwardRef((function(e,t){var a=n.useState(e.visible),r=B()(a,2),l=r[0],c=r[1];n.useEffect((function(){"visible"in e&&c(e.visible)}),[e.visible]),n.useEffect((function(){"defaultVisible"in e&&c(e.defaultVisible)}),[e.defaultVisible]);var i=function(t,a){"visible"in e||c(t),e.onVisibleChange&&e.onVisibleChange(t,a)},o=function(t){i(!1,t),e.onConfirm&&e.onConfirm.call(W,t)},d=function(t){i(!1,t),e.onCancel&&e.onCancel.call(W,t)},m=n.useContext(S.E_).getPrefixCls,p=e.prefixCls,u=e.placement,v=e.children,f=e.overlayClassName,g=ee(e,["prefixCls","placement","children","overlayClassName"]),h=m("popover",p),y=m("popconfirm",p),b=E()(y,f),C=n.createElement(Q.Z,{componentName:"Popconfirm",defaultLocale:J.Z.Popconfirm},(function(t){return function(t,a){var r=e.okButtonProps,l=e.cancelButtonProps,c=e.title,i=e.cancelText,m=e.okText,p=e.okType,u=e.icon;return n.createElement("div",{className:"".concat(t,"-inner-content")},n.createElement("div",{className:"".concat(t,"-message")},u,n.createElement("div",{className:"".concat(t,"-message-title")},(0,X.Z)(c))),n.createElement("div",{className:"".concat(t,"-buttons")},n.createElement(Y.Z,s()({onClick:d,size:"small"},l),i||a.cancelText),n.createElement(Y.Z,s()({onClick:o},(0,G.n)(p),{size:"small"},r),m||a.okText)))}(h,t)}));return n.createElement($.Z,s()({},g,{prefixCls:h,placement:u,onVisibleChange:function(t){e.disabled||i(t)},visible:l,overlay:C,overlayClassName:b,ref:t}),(0,z.Tm)(v,{onKeyDown:function(e){var t,a;n.isValidElement(v)&&(null===(a=null===v||void 0===v?void 0:(t=v.props).onKeyDown)||void 0===a||a.call(t,e)),function(e){e.keyCode===q.Z.ESC&&l&&i(!1,e)}(e)}}))}));te.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:n.createElement(H(),null),disabled:!1};const ae=te;var ne=a(9101);const re={flex:"flex--3EQvd","flex-center":"flex-center--1YcTy","flex-algin-center":"flex-algin-center--3odfE","lg-button-primary":"lg-button-primary--2gmH8","text-p":"text-p--Xqc2L","page-collapse":"page-collapse--2qwYn",title:"title--3IGbs"};var le=a(2977);const ce="collapseItem--vKvMx",ie="active--whrFE",oe="item--1QxlM";var se=a(4261),de=a(1606),me=a(5241);const pe="popMenu--26yC6",ue="select--uBhux";var ve=e=>{var{menus:t,handleClick:a}=e;return n.createElement(n.Fragment,null,t.map((e=>{var{id:t,label:r}=e;return n.createElement("div",{className:ue,onClick:()=>a(t)},n.createElement("span",null,r))})))};const fe=e=>{var{menus:t,handleClick:a,className:r,children:l,trigger:c="click"}=e;return n.createElement(me.Z,{overlayClassName:E()(pe,r),trigger:c,content:n.createElement(ve,{menus:t,handleClick:a}),title:null,placement:"bottom"},l)};var ge=a(5977),he=[{id:1,label:"\u5220\u9664\u9875\u9762"},{id:2,label:"\u4fee\u6539\u540d\u79f0"}];const ye=e=>{var{pageName:t,id:a}=e,[c,i]=(0,n.useState)(!1),o=(0,r.I0)(),s=((0,l.L)((e=>e[a])),(0,ge.$B)("/edit/:uid")),d=(0,ge.k6)(),m=(0,n.useCallback)((()=>{d.push("/edit/"+a)}),[]),p=()=>{o({type:"delete_page_data",key:a})};return n.createElement("div",{className:E()(ce,{[ie]:s.params.uid===a})},c?n.createElement(de.Z,{size:"small",defaultValue:t,onBlur:e=>{i(!1);var t="".concat(e.target.value).replace(/[ ]/g,"");o({type:"update_page_name",page:a,pageName:t||"\u9875\u9762"})}}):n.createElement("span",{onClick:m},t),n.createElement("div",{className:oe},n.createElement(fe,{menus:he,handleClick:e=>{switch(e){case 1:se.Z.confirm({title:"\u63d0\u793a",content:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u9875\u9762\u5417\uff0c\u5220\u9664\u540e\u5c06\u65e0\u6cd5\u6062\u590d\uff5e",onOk:()=>{p()},onCancel:()=>Promise.resolve()});break;case 2:i(!c)}},trigger:"hover"},n.createElement(le.Z,null))))};var Ee=a(4586),{Panel:be}=M,Ce=()=>{var e=(0,r.I0)(),t=(0,n.useCallback)((()=>{e({type:"create_page_data",key:(0,Ee.Z)(),data:{pageName:"\u9875\u9762",list:[]}})}),[]);return n.createElement("div",{className:re.title},n.createElement("span",null,"\u9875\u9762"),n.createElement("div",{className:re.tools},n.createElement(ae,{title:"\u60a8\u786e\u5b9a\u8981\u6dfb\u52a0\u9875\u9762\u5417?",onConfirm:t,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},n.createElement(ne.Z,null))))};const xe=e=>{var{pages:t}=e,a=(0,l.L)((e=>e)),r=Object.keys(a);return n.createElement("div",{className:re["page-collapse"]},n.createElement(M,{defaultActiveKey:["1"],bordered:!1,ghost:!0,expandIconPosition:"right"},n.createElement(be,{header:n.createElement(Ce,null),key:"1"},r.map((e=>n.createElement(ye,{pageName:a[e].pageName,id:e}))))))};var ke=a(3413),we=a(7835);const Ne=e=>{var{bg:t,handleSelect:a,index:r,moveCard:l,id:c,children:o,containerType:s,type:d}=e,m=(0,n.useRef)(null),[p,u]=(0,i.i)(),v=(0,n.useRef)(p);v.current=p;var[{isDragging:f},g,h]=(0,we.useDrag)({collect:e=>({isDragging:e.isDragging()}),item:{type:d||"card",index:r,update:u,state:v}}),[,y]=(0,we.useDrop)({accept:["card","item"],hover(e,t){if(m.current){var a=e.index,n=r,c=m.current.getBoundingClientRect(),i=(c.bottom-c.top)/2,o=t.getClientOffset(),d=o.y-c.top,p=o.y-c.bottom+20;a!==n&&("free"===s&&p<0&&d>0||a<n&&d<i||a>n&&d>i||(l(a,n),void 0!==e.index&&(e.index=n)))}}}),E=(0,n.useMemo)((()=>({position:"relative",background:t,opacity:-1===c?.4:f?.2:1,verticalAlign:40})),[t,c,f]);return h(y(m)),g(m),n.createElement("div",{ref:m,style:E,onClick:a},o)};var Ze=a(3429);const Pe="wrapper--m6xn_",_e="inline--1CorS";var Ie={backgroundColor:"white",border:"1px dashed gray",margin:"100px auto",minHeight:"300px",padding:"0 10px",textAlign:"center",width:300},Oe=(0,n.createContext)((e=>{}));const Ae=e=>{var{cardList:t,changeCardList:a,handleSelect:r}=e,[,l]=(0,we.useDrop)({accept:["card","item"]}),c=(0,n.useCallback)(((e,n)=>{var r=[...t];if(void 0===e){var l=t.findIndex((e=>-1===e.id));r.splice(l,1),r.splice(n,0,{bg:"aqua",category:"\u653e\u8fd9\u91cc",id:-1}),a(r)}else{var c=t[e];r.splice(e,1),r.splice(n,0,c),a(r)}}),[t]);return n.createElement(Oe.Provider,{value:r},n.createElement("div",{className:Pe},n.createElement("div",{className:_e,style:Ie,ref:l},t.length<=0?n.createElement("div",{style:{lineHeight:"60px"}},"\u653e\u5165\u7ec4\u4ef6"):t.map(((e,t)=>{return n.createElement(Ne,{index:t,key:e.id,handleSelect:()=>{r({id:e.id,editFields:Ze.$[e.elementType].editFields})},moveCard:c},Ze.$[e.elementType]&&(a=e.id,l=Ze.$[e.elementType],n.createElement(i.Z,{id:a,defaultProps:l.defaultProps,enable:l.enable},n.createElement(l,null))));var a,l})))))};var De=a(8526),Le=a(3032),je="/api/save",Se="24f4e35b-8330-4982-a993-734a95c4fd2b";const Te="leftWrapper--7IBN7",Ke="modal--3Etaa",Re={flex:"flex--2ivo8","flex-center":"flex-center--27KZU","flex-algin-center":"flex-algin-center--ndQEE","lg-button-primary":"lg-button-primary--3jZdp","text-p":"text-p--1nSAi",ComsPanel:"ComsPanel--3pw10",content:"content--QO5a8",header:"header--I998P",item:"item--cuz7M",logo:"logo--3UyEo",img:"img--2EXYo",text:"text--3FKfV"};function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Fe=n.createElement("defs",null,n.createElement("path",{d:"M7.692 0h24.616c2.675 0 3.645.278 4.623.801a5.452 5.452 0 012.268 2.268c.523.978.801 1.948.801 4.623v12.616c0 2.675-.278 3.645-.801 4.623a5.452 5.452 0 01-2.268 2.268c-.978.523-1.948.801-4.623.801H7.692c-2.675 0-3.645-.278-4.623-.801A5.452 5.452 0 01.801 24.93C.278 23.953 0 22.983 0 20.308V7.692c0-2.675.278-3.645.801-4.623A5.452 5.452 0 013.07.801C4.047.278 5.017 0 7.692 0z",id:"button_svg__a"})),Me=n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M10.256 0h27.488c3.567 0 4.86.371 6.163 1.069a7.27 7.27 0 013.024 3.024C47.63 5.396 48 6.689 48 10.256v27.488c0 3.567-.371 4.86-1.069 6.163a7.27 7.27 0 01-3.024 3.024C42.604 47.63 41.311 48 37.744 48H10.256c-3.567 0-4.86-.371-6.163-1.069a7.27 7.27 0 01-3.024-3.024C.37 42.604 0 41.311 0 37.744V10.256c0-3.567.371-4.86 1.069-6.163a7.27 7.27 0 013.024-3.024C5.396.37 6.689 0 10.256 0z"}),n.createElement("g",{transform:"translate(4 10)"},n.createElement("mask",{id:"button_svg__b",fill:"#fff"},n.createElement("use",{xlinkHref:"#button_svg__a"})),n.createElement("use",{fill:"#254EC3",xlinkHref:"#button_svg__a"}),n.createElement("text",{mask:"url(#button_svg__b)",fontFamily:"STYuanti-SC-Bold, Yuanti SC",fontSize:10,fontWeight:"bold",fill:"#FFF"},n.createElement("tspan",{x:5.3,y:18},"Button"))));const Ve=function(e){return n.createElement("svg",ze({width:48,height:48,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),Fe,Me)};function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Ue=n.createElement("defs",null,n.createElement("path",{d:"M14.692 7h18.616c2.675 0 3.645.278 4.623.801a5.452 5.452 0 012.268 2.268c.523.978.801 1.948.801 4.623v18.616c0 2.675-.278 3.645-.801 4.623a5.452 5.452 0 01-2.268 2.268c-.978.523-1.948.801-4.623.801H14.692c-2.675 0-3.645-.278-4.623-.801a5.452 5.452 0 01-2.268-2.268C7.278 36.953 7 35.983 7 33.308V14.692c0-2.675.278-3.645.801-4.623a5.452 5.452 0 012.268-2.268C11.047 7.278 12.017 7 14.692 7z",id:"container_svg__a"})),He=n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M10.256 0h27.488c3.567 0 4.86.371 6.163 1.069a7.27 7.27 0 013.024 3.024C47.63 5.396 48 6.689 48 10.256v27.488c0 3.567-.371 4.86-1.069 6.163a7.27 7.27 0 01-3.024 3.024C42.604 47.63 41.311 48 37.744 48H10.256c-3.567 0-4.86-.371-6.163-1.069a7.27 7.27 0 01-3.024-3.024C.37 42.604 0 41.311 0 37.744V10.256c0-3.567.371-4.86 1.069-6.163a7.27 7.27 0 013.024-3.024C5.396.37 6.689 0 10.256 0z"}),n.createElement("mask",{id:"container_svg__b",fill:"#fff"},n.createElement("use",{xlinkHref:"#container_svg__a"})),n.createElement("path",{stroke:"#D0D1DA",d:"M14.692 7.5h18.616c2.533 0 3.459.246 4.387.742a4.959 4.959 0 012.063 2.063c.496.928.742 1.854.742 4.387h0v18.616c0 2.533-.246 3.459-.742 4.387a4.959 4.959 0 01-2.063 2.063c-.928.496-1.854.742-4.387.742h0-18.616c-2.533 0-3.459-.246-4.387-.742a4.959 4.959 0 01-2.063-2.063c-.496-.928-.742-1.854-.742-4.387h0V14.692c0-2.533.246-3.459.742-4.387a4.959 4.959 0 012.063-2.063c.928-.496 1.854-.742 4.387-.742h0z"}),n.createElement("g",{mask:"url(#container_svg__b)",fillRule:"nonzero",stroke:"#D0D1DA"},n.createElement("g",{transform:"translate(12 18)"},n.createElement("rect",{width:12,height:8,rx:1}),n.createElement("rect",{y:12,width:8,height:7,rx:1}),n.createElement("rect",{transform:"matrix(-1 0 0 1 40 0)",x:16,width:8,height:8,rx:1}),n.createElement("rect",{transform:"matrix(-1 0 0 1 36 0)",x:12,y:12,width:12,height:7,rx:1}))),n.createElement("g",{mask:"url(#container_svg__b)",fill:"#254EC3",fillRule:"nonzero"},n.createElement("rect",{width:24,height:3,rx:1.5,transform:"translate(12 11)"})));const qe=function(e){return n.createElement("svg",Be({width:48,height:48,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),Ue,He)};var $e=e=>{var{Logo:t,text:a}=e;return n.createElement("div",{className:Re.item},n.createElement("div",{className:Re.logo},n.createElement(t,{className:Re.img})),n.createElement("p",{className:Re.text},a))},{Panel:Ye}=M,Ge={list:[]};const Qe=()=>{var[e,t]=(0,c.I)("page",Ge),a=(0,r.I0)(),i=(0,l.L)((e=>e[t])),o=i&&i.list||[],s=(0,n.useCallback)((e=>{a({type:"update_list",page:t,data:e})}),[a,t]);return n.createElement("div",{className:Re.ComsPanel},n.createElement("div",{className:Re.title},n.createElement("div",{className:Re.header},n.createElement("span",null,"\u7ec4\u4ef6")),n.createElement(M,{defaultActiveKey:["1"],ghost:!0},n.createElement(Ye,{header:"\u5bb9\u5668",key:"1"},n.createElement("div",{className:Re.content},n.createElement(Ze.Z,{elementType:"Demo",cardList:o,changeCardList:s},n.createElement($e,{Logo:qe,text:"\u81ea\u7531\u5bb9\u5668"})))),n.createElement(Ye,{header:"\u5e38\u7528\u7ec4\u4ef6",key:"2"},n.createElement("div",{className:Re.content},n.createElement(Ze.Z,{elementType:"ButtonDemo",cardList:o,changeCardList:s},n.createElement($e,{Logo:Ve,text:"\u6309\u94ae"})),n.createElement(Ze.Z,{elementType:"Carousel",cardList:o,changeCardList:s},n.createElement($e,{Logo:Ve,text:"\u8f6e\u64ad\u56fe"})),n.createElement(Ze.Z,{elementType:"ImageCom",cardList:o,changeCardList:s},n.createElement($e,{Logo:Ve,text:"\u56fe\u6587"})))))))};var Je=a(3039);const Xe="wrapper--3HIqv",We="inline--3LjIH";var et={backgroundColor:"white"};const tt=e=>{var{cardList:t}=e;return n.createElement("div",{className:Xe},n.createElement("div",{className:We,style:et},t.map(((e,t)=>{return Ze.$[e.elementType]&&(a=e.id,r=Ze.$[e.elementType],n.createElement(Je.Y2,{id:a,defaultProps:r.defaultProps,enable:r.enable,isEdit:!1},n.createElement(r,null)));var a,r}))))};var at=()=>{var[e,t]=(0,n.useState)({id:"",editFields:[]}),a=useParams();!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=(0,l.L)();(0,n.useEffect)((()=>{Le.Z.post(je,{id:e,data:JSON.stringify(t)}).then((e=>{}))}),[t])}();var[i,o]=(0,n.useState)(!1),[s,d]=(0,c.I)(a.uid),m=(0,r.I0)(),p=(0,l.L)((e=>e[d])),u=p&&p.list||[],v=(0,n.useCallback)((e=>{m({type:"update_list",page:d,data:e})}),[m,d]);return n.createElement(s,null,n.createElement("div",{className:Te},n.createElement(xe,null),n.createElement(Qe,null)),n.createElement(Ae,{cardList:u,changeCardList:v,handleSelect:t}),n.createElement(ke.Z,e),n.createElement(Y.Z,{onClick:()=>o(!0)},"\u9884\u89c8"),n.createElement(se.Z,{className:Ke,visible:i,footer:null,maskClosable:!0,onCancel:()=>o(!1)},n.createElement(tt,{cardList:u})))},nt=e=>{var{getData:t,children:a}=e,l=(0,ge.k6)(),c=t(),i=(0,r.I0)();return(0,n.useMemo)((()=>{if(!c){var e=(0,Ee.Z)();return l.replace("/edit/".concat(e)),void i({type:"reset_project_data",data:{[e]:{pageName:"\u9ed8\u8ba4\u9875\u9762",list:[]}}})}i({type:"reset_project_data",data:c})}),[]),a},rt=()=>{var[e]=(0,n.useState)(function(e){var t,a="pending",n=e.then((e=>{a="success",t=e}),(e=>{a="error",t=e}));return{read(){if("pending"===a)throw n;if("error"===a)throw t;if("success"===a)return t}}}((0,De.Z)(void 0)));return n.createElement(n.Suspense,{fallback:""},n.createElement(nt,{getData:e.read},n.createElement(at,null)))};const lt=(0,n.memo)(rt)},3032:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(9669),r=a.n(n),l=a(8086),c=r().create({headers:{"Content-Type":"application/json"},timeout:1e4,withCredentials:!0});c.interceptors.request.use((e=>(e.headers.token="token",e))),c.interceptors.response.use((e=>{var t=e.data;return 0===t.code?t:1e4===t.code?(l.ZP.warning(t.message),window.location.href="/login",t):t}),(()=>{l.ZP.error("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!")}));const i=c}}]);