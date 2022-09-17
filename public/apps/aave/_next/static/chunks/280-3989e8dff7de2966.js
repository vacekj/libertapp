"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{64283:function(e,n,t){t.d(n,{O:function(){return o}});var r=t(87357),i=t(53156),s=t(85893),o=function(e){var n=e.children;return(0,s.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,s.jsx)(i.Z,{children:n})})}},21489:function(e,n,t){t.d(n,{hu:function(){return w},gO:function(){return C},tF:function(){return E}});var r=t(59499),i=t(85169),s=t(61782),o=t(87357),a=t(34386),l=t(2734),c=t(98396),d=t(77931),x=t(53219),u=t(15861),p=t(33454),h=t(96420),m=t(18972),f=t(59334),j=t(67294),g=t(45555),b=t(2450),Z=t(85893);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k,w=function(e){var n=b.ei[e];return{market:n,network:b.m5[n.chainId]}},y=function(e){var n=["G\xf6rli","Ropsten","Mumbai","Fuji","Testnet","Kovan","Rinkeby"],t=e.split(" "),r=t.filter((function(e){return n.indexOf(e)>-1}));return{name:t.filter((function(e){return!r.includes(e)})).join(" "),testChainName:r[0]}},C=function(e){var n=e.size,t=e.logo,r=e.testChainName;return(0,Z.jsxs)(o.Z,{sx:{mr:2,width:n,height:n,position:"relative"},children:[(0,Z.jsx)("img",{src:t,alt:"",width:"100%",height:"100%"}),r&&(0,Z.jsx)(a.Z,{title:r,arrow:!0,children:(0,Z.jsx)(o.Z,{sx:{bgcolor:"#29B6F6",width:"16px",height:"16px",borderRadius:"50%",color:"common.white",fontSize:"12px",lineHeight:"16px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:"-2px",bottom:"-2px"},children:r.split("")[0]})})]})};!function(e){e[e.V2=0]="V2",e[e.V3=1]="V3"}(k||(k={}));var E=function(){var e=(0,g.f)(),n=e.currentMarket,t=e.setCurrentMarket,r=(0,j.useState)(k.V3),a=r[0],v=r[1],E=(0,l.Z)(),S=(0,c.Z)(E.breakpoints.up("lg")),O=(0,c.Z)(E.breakpoints.down("xsm")),_=b.z2.map((function(e){return w(e).market.v3})).some((function(e){return!!e}));return(0,Z.jsxs)(d.Z,{select:!0,"aria-label":"select market","data-cy":"marketSelector",value:n,onChange:function(e){return t(e.target.value)},sx:{mr:2,"& .MuiOutlinedInput-notchedOutline":{border:"none"}},SelectProps:{native:!1,className:"MarketSwitcher__select",IconComponent:function(e){return(0,Z.jsx)(x.Z,F(F({fontSize:"medium"},e),{},{children:(0,Z.jsx)(s.Z,{})}))},renderValue:function(e){var n=w(e),t=n.market,r=n.network;return(0,Z.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,Z.jsx)(C,{size:S?32:28,logo:r.networkLogoPath,testChainName:y(t.marketTitle).testChainName}),(0,Z.jsxs)(o.Z,{sx:{mr:1,display:"inline-flex",alignItems:"flex-start"},children:[(0,Z.jsxs)(u.Z,{variant:S?"display1":"h1",sx:{fontSize:O?"1.55rem":void 0,color:"common.white",mr:1},children:[y(t.marketTitle).name," ",t.isFork?"Fork":"",S&&" Market"]}),t.v3&&(0,Z.jsx)(o.Z,{sx:{color:"#fff",px:2,borderRadius:"12px",background:function(e){return e.palette.gradients.aaveGradient}},children:(0,Z.jsx)(u.Z,{variant:"subheader2",children:"Version 3"})})]})]})},sx:{"&.MarketSwitcher__select .MuiSelect-outlined":{p:0,backgroundColor:"transparent !important"},".MuiSelect-icon":{color:"#F1F1F3"}},MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"right"},PaperProps:{style:{minWidth:240},variant:"outlined",elevation:0}}},children:[(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(u.Z,{variant:"subheader2",color:"text.secondary",sx:{px:4,pt:2},children:(0,Z.jsx)(i.cC,{id:"{0}",values:{0:b.p8||b.aV?"Select Aave Testnet Market":"Select Aave Market"}})})}),_&&(0,Z.jsx)(o.Z,{sx:{mx:"18px",display:"flex",justifyContent:"center"},children:(0,Z.jsxs)(p.Z,{value:a,exclusive:!0,onChange:function(e,n){null!==n&&v(n)},sx:{width:"100%",height:"36px",background:E.palette.primary.main,border:"1px solid ".concat("dark"===E.palette.mode?"rgba(235, 235, 237, 0.12)":"#1B2030"),borderRadius:"6px",marginTop:"16px",marginBottom:"12px",padding:"2px"},children:[(0,Z.jsx)(h.Z,{value:k.V3,"data-cy":"markets_switch_button_v3",sx:{backgroundColor:"dark"===E.palette.mode?"#EAEBEF":"#383D51","&.Mui-selected, &.Mui-selected:hover":{backgroundColor:"dark"===E.palette.mode?"#292E41":"#FFFFFF",boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.05)"},borderRadius:"4px"},children:(0,Z.jsx)(u.Z,{variant:"buttonM",sx:a===k.V3?{backgroundImage:function(e){return e.palette.gradients.aaveGradient},backgroundClip:"text",color:"transparent"}:{color:"dark"===E.palette.mode?"#0F121D":"#FFFFFF"},children:(0,Z.jsx)(i.cC,{id:"Version 3"})})}),(0,Z.jsx)(h.Z,{value:k.V2,"data-cy":"markets_switch_button_v2",sx:{backgroundColor:"dark"===E.palette.mode?"#EAEBEF":"#383D51","&.Mui-selected, &.Mui-selected:hover":{backgroundColor:"dark"===E.palette.mode?"#292E41":"#FFFFFF",boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.05)"},borderRadius:"4px"},children:(0,Z.jsx)(u.Z,{variant:"buttonM",sx:a===k.V2?{backgroundImage:function(e){return e.palette.gradients.aaveGradient},backgroundClip:"text",color:"transparent"}:{color:"dark"===E.palette.mode?"#0F121D":"#FFFFFF"},children:(0,Z.jsx)(i.cC,{id:"Version 2"})})})]})}),b.z2.map((function(e){var n=w(e),t=n.market,r=n.network,i=y(t.marketTitle);return(0,Z.jsxs)(m.Z,{"data-cy":"marketSelector_".concat(e),value:e,sx:{".MuiListItemIcon-root":{minWidth:"unset"},display:t.v3&&a===k.V2||!t.v3&&a===k.V3?"none":"flex"},children:[(0,Z.jsx)(C,{size:32,logo:r.networkLogoPath,testChainName:i.testChainName}),(0,Z.jsxs)(f.Z,{sx:{mr:0},children:[i.name," ",t.isFork?"Fork":""]}),(0,Z.jsx)(f.Z,{sx:{textAlign:"right"},children:(0,Z.jsx)(u.Z,{color:"text.muted",variant:"description",children:i.testChainName})})]},e)}))]})}},3971:function(e,n,t){t.d(n,{V:function(){return c}});var r=t(2734),i=t(98396),s=t(87357),o=t(15861),a=t(21489),l=t(85893),c=function(e){var n=e.pageTitle,t=e.withMarketSwitcher,c=(0,r.Z)(),d=(0,i.Z)(c.breakpoints.up("lg")),x=(0,i.Z)(c.breakpoints.down("xsm"));return(0,l.jsxs)(s.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",xsm:"center"},mb:n?4:0,flexDirection:{xs:"column",xsm:"row"}},children:[n&&(x||!t)&&(0,l.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start"},children:(0,l.jsx)(o.Z,{variant:x?"h2":d?"display1":"h1",sx:{color:t?"text.muted":"text.white",mr:{xs:5,xsm:3},mb:{xs:1,xsm:0}},children:n})}),(0,l.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",mb:n?0:4},children:t&&(0,l.jsx)(a.tF,{})})]})}},33329:function(e,n,t){t.d(n,{f:function(){return a}});var r=t(87357),i=t(53156),s=t(3971),o=t(85893),a=function(e){var n=e.pageTitle,t=e.titleComponent,a=e.withMarketSwitcher,l=e.bridge,c=e.children;return(0,o.jsx)(r.Z,{sx:{bgcolor:"background.header",pt:{xs:10,md:12},pb:{xs:18,md:20,lg:"94px",xl:"92px",xxl:"96px"},color:"#F1F1F3"},children:(0,o.jsx)(i.Z,{sx:{pb:0},children:(0,o.jsxs)(r.Z,{sx:{px:{xs:4,xsm:6}},children:[!t&&(0,o.jsx)(s.V,{pageTitle:n,withMarketSwitcher:a,bridge:l}),t&&t,(0,o.jsx)(r.Z,{sx:{display:"flex",alignItems:"flex-start",gap:{xs:3,xsm:8},flexWrap:"wrap",width:"100%"},children:c})]})})})}},36920:function(e,n,t){t.d(n,{x:function(){return v}});var r,i=t(96183),s=t(15629),o=t(85169),a=t(83321),l=t(87357),c=t(21737),d=t(15861),x=t(23795),u=t(72005),p=t(68611),h=t(37096),m=t(77044),f=t(83929),j=t(30950),g=t(85893),b=function(e){var n=e.walletName,t=e.walletType,r=(0,u.Z)().connectWallet;return(0,g.jsx)(a.Z,{variant:"outlined",sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",mb:"8px"},size:"large",onClick:function(){return r(t)},endIcon:function(e){if(e===p.S.WALLET_CONNECT)return(0,g.jsx)("img",{src:"/apps/aave/icons/wallets/walletConnect.svg",width:"24px",height:"24px",alt:"browser wallet icon"})}(t),children:n})};!function(e){e[e.UNSUPORTED_CHAIN=0]="UNSUPORTED_CHAIN",e[e.USER_REJECTED_REQUEST=1]="USER_REJECTED_REQUEST",e[e.UNDETERMINED_ERROR=2]="UNDETERMINED_ERROR",e[e.NO_WALLET_DETECTED=3]="NO_WALLET_DETECTED"}(r||(r={}));var Z=function(){var e=(0,u.Z)().error,n=void 0;e&&(n=e instanceof m.UnsupportedChainIdError?r.UNSUPORTED_CHAIN:e instanceof f.ab?r.USER_REJECTED_REQUEST:e instanceof j.A5?r.NO_WALLET_DETECTED:r.UNDETERMINED_ERROR);return(0,g.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,g.jsx)(h.E,{title:"Connect a wallet"}),e&&(0,g.jsx)(c.Z,{severity:"error",sx:{mb:"24px"},children:function(){switch(n){case r.UNSUPORTED_CHAIN:return(0,g.jsx)(o.cC,{id:"Network not supported for this wallet"});case r.USER_REJECTED_REQUEST:return(0,g.jsx)(o.cC,{id:"Rejected connection request"});case r.NO_WALLET_DETECTED:return(0,g.jsx)(o.cC,{id:"Wallet not detected. Connect or install wallet and retry"});default:return console.log("Uncatched error: ",e),(0,g.jsx)(o.cC,{id:"Error connecting. Try refreshing the page."})}}()}),(0,g.jsx)(b,{walletName:"WalletConnect",walletType:p.S.WALLET_CONNECT},"walletconnect_wallet"),(0,g.jsx)(d.Z,{variant:"description",sx:{mt:"22px",mb:"30px",alignSelf:"center"},children:(0,g.jsx)(o.cC,{id:"Need help connecting a wallet? <0>Read our FAQ</0>",components:{0:(0,g.jsx)(x.Z,{href:"https://docs.aave.com/faq/troubleshooting",target:"_blank",rel:"noopener"})}})}),(0,g.jsx)(d.Z,{variant:"helperText",children:(0,g.jsx)(o.cC,{id:"Wallets are provided by External Providers and by selecting you agree to Terms of those Providers. Your access to the wallet might be reliant on the External Provider being operational."})})]})},v=function(){var e=(0,i.qr)(),n=e.isWalletModalOpen,t=e.setWalletModalOpen;return(0,g.jsx)(s.P,{open:n,setOpen:t,children:(0,g.jsx)(Z,{})})}},22034:function(e,n,t){t.d(n,{Z:function(){return Re}});var r,i=t(87357),s=t(67294),o=t(85169),a=t(38264),l=t(8298),c=t(54776),d=t(2734),x=t(98396),u=t(15861),p=t(83321),h=t(53219),m=t(63327),f=t(2450),j=t(38577),g="/apps/aave/aaveLogo.svg",b=t(78462),Z=t(70891),v=t(45555),F=t(94471),k=t(9014),w=t(80943);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}var C,E=function(e){return s.createElement("svg",y({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=s.createElement("path",{d:"M16.238 4.137a14.845 14.845 0 0 0-3.664-1.136.056.056 0 0 0-.059.028c-.158.281-.334.648-.456.937a13.703 13.703 0 0 0-4.115 0 9.483 9.483 0 0 0-.464-.937A.058.058 0 0 0 7.422 3c-1.286.221-2.516.61-3.664 1.136a.052.052 0 0 0-.024.021C1.4 7.644.76 11.045 1.074 14.403a.062.062 0 0 0 .024.042 14.926 14.926 0 0 0 4.494 2.273.058.058 0 0 0 .064-.021c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.831 9.831 0 0 1-1.404-.668.058.058 0 0 1-.006-.096 7.67 7.67 0 0 0 .279-.219.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .06.008 7.7 7.7 0 0 0 .279.219.058.058 0 0 1-.005.096 9.228 9.228 0 0 1-1.405.668.057.057 0 0 0-.03.08c.27.524.578 1.022.918 1.495.014.02.04.029.063.021a14.877 14.877 0 0 0 4.502-2.272.058.058 0 0 0 .023-.041c.376-3.883-.628-7.255-2.66-10.245a.046.046 0 0 0-.024-.022Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814S6.114 8.73 7.015 8.73c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"})))};function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},S.apply(this,arguments)}var O=function(e){return s.createElement("svg",S({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},e),C||(C=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 18 10c0-4.42-3.58-8-8-8Z"})))},_=t(85893),M=[{link:j.Z6.dashboard,title:F.ag._("Dashboard"),dataCy:"menuDashboard"},{link:j.Z6.markets,title:F.ag._("Markets"),dataCy:"menuMarkets"},{link:j.Z6.staking,title:F.ag._("Stake"),dataCy:"menuStake",isVisible:function(){return!f.p8}},{link:j.Z6.governance,title:F.ag._("Governance"),dataCy:"menuGovernance",isVisible:function(){return!f.p8}},{link:j.Z6.faucet,title:F.ag._("Faucet"),isVisible:function(){return f.p8}}],T=[{link:"https://docs.aave.com/faq/",title:F.ag._("FAQ"),icon:(0,_.jsx)(k.Z,{})},{link:"https://docs.aave.com/portal/",title:F.ag._("Developers"),icon:(0,_.jsx)(w.Z,{})},{link:"https://discord.gg/7kHKnkDEUf",title:F.ag._("Discord"),icon:(0,_.jsx)(E,{})},{link:"https://github.com/aave/interface",title:F.ag._("Github"),icon:(0,_.jsx)(O,{})}],D=[].concat(T,[]),R=([].concat(M,T,[]),t(17674)),I=t(80059),P=t(48885),N=t(59334),A=t(38333),V=t(18972);function W(){var e=(0,o.mV)().i18n,n=s.useState(null),t=(0,R.Z)(n,2),r=t[0],i=t[1],a=Boolean(r);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(p.Z,{"aria-label":"more",id:"more-button","aria-controls":a?"more-menu":void 0,"aria-expanded":a?"true":void 0,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},sx:{color:"#F1F1F3",minWidth:"unset",p:"6px 8px","&:hover":{bgcolor:"rgba(250, 251, 252, 0.08)"}},children:[(0,_.jsx)(o.cC,{id:"More"}),(0,_.jsx)(h.Z,{color:"inherit",sx:{ml:1},children:(0,_.jsx)(I.Z,{})})]}),(0,_.jsx)(A.Z,{id:"more-menu",MenuListProps:{"aria-labelledby":"more-button"},anchorEl:r,open:a,onClose:function(){i(null)},keepMounted:!0,children:D.map((function(n,t){return(0,_.jsxs)(V.Z,{component:j.rU,href:n.link,children:[(0,_.jsx)(P.Z,{children:(0,_.jsx)(h.Z,{sx:{fontSize:"20px"},children:n.icon})}),(0,_.jsx)(N.Z,{children:e._(n.title)})]},t)}))})]})}var U=function(e){var n=e.setOpen,t=(0,o.mV)().i18n,r=(0,v.f)().currentMarketData,i=(0,d.Z)().breakpoints,s=(0,x.Z)(i.down("md"));return(0,_.jsxs)(b.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",md:"center"},flexDirection:{xs:"column",md:"row"}},disablePadding:!0,children:[M.filter((function(e){return!e.isVisible||e.isVisible(r)})).map((function(e,r){return(0,_.jsx)(Z.ZP,{sx:{width:{xs:"100%",md:"unset"},mr:{xs:0,md:2}},"data-cy":e.dataCy,disablePadding:!0,children:s?(0,_.jsx)(u.Z,{component:j.rU,href:e.link,variant:"h2",color:"#F1F1F3",sx:{width:"100%",p:4},onClick:function(){return n?n(!1):void 0},children:t._(e.title)}):(0,_.jsx)(p.Z,{component:j.rU,href:e.link,sx:function(e){return{color:"#F1F1F3",p:"6px 8px",position:"relative",".active&:after, &:hover&:after":{transform:"scaleX(1)",transformOrigin:"bottom left"},"&:after":{content:"''",position:"absolute",width:"100%",transform:"scaleX(0)",height:"2px",bottom:"-6px",left:"0",background:e.palette.gradients.aaveGradient,transformOrigin:"bottom right",transition:"transform 0.25s ease-out"}}},children:t._(e.title)})},r)})),(0,_.jsx)(Z.ZP,{sx:{display:{xs:"none",md:"flex"},width:"unset"},disablePadding:!0,children:(0,_.jsx)(W,{})})]})},L=t(69065),z=t(67720),B=t(50480),H=t(45843),G=t(22497),Q=function(e){var n=e.component,t=void 0===n?Z.ZP:n,r=(0,d.Z)(),a=s.useContext(G.k);return(0,_.jsxs)(i.Z,{component:t,onClick:a.toggleColorMode,sx:{color:{xs:"#F1F1F3",md:"text.primary"},py:{xs:1.5,md:2}},children:[(0,_.jsx)(N.Z,{children:(0,_.jsx)(o.cC,{id:"Dark mode"})}),(0,_.jsx)(B.Z,{sx:{mr:0},value:"darkmode",control:(0,_.jsx)(H.Z,{disableRipple:!0,checked:"dark"===r.palette.mode,sx:{".MuiSwitch-track":{bgcolor:{xs:"#FFFFFF1F",md:"primary.light"}}}}),label:"dark"===r.palette.mode?"On":"Off",labelPlacement:"start"})]})},q=t(58826),J=function(e){var n=e.open,t=e.setOpen,r=e.children,i=e.headerHeight;return(0,_.jsx)(q.ZP,{anchor:"top",open:n,onClose:function(){return t(!1)},hideBackdrop:!0,sx:{top:"".concat(i,"px")},PaperProps:{sx:{background:"rgba(56, 61, 81, 0.88)",backdropFilter:"blur(20px)",boxShadow:"none",borderRadius:"unset",width:"100%",top:"".concat(i,"px"),pt:6,pb:15,minHeight:"100vh"}},children:r})},K=t(51183),X=t(94323),Y=t(58057),$=t(67307),ee={en:F.ag._("English"),es:F.ag._("Spanish"),fr:F.ag._("French"),el:F.ag._("Greek")},ne=function(e){var n=e.component,t=void 0===n?Z.ZP:n,r=e.onClick,s=(0,o.mV)().i18n;return(0,_.jsxs)(i.Z,{component:t,onClick:r,sx:{color:{xs:"#F1F1F3",md:"text.primary"}},children:[(0,_.jsx)(N.Z,{children:(0,_.jsx)(o.cC,{id:"Language"})}),(0,_.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[s._(ee[s.locale])," ",(0,_.jsx)(h.Z,{fontSize:"small",sx:{color:{xs:"#F1F1F3",md:"text.primary"},ml:1},children:(0,_.jsx)(K.Z,{})})]})]})},te=function(e){var n=e.component,t=void 0===n?Z.ZP:n,r=e.onClick,s=(0,o.mV)().i18n;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(i.Z,{component:t,sx:{color:{xs:"#F1F1F3",md:"text.primary"},mb:"4px"},onClick:r,children:[(0,_.jsx)(P.Z,{sx:{minWidth:"unset !important",mr:2,color:{xs:"#F1F1F3",md:"primary.light"}},children:(0,_.jsx)(h.Z,{fontSize:"small",children:(0,_.jsx)(X.Z,{})})}),(0,_.jsx)(N.Z,{disableTypography:!0,children:(0,_.jsx)(u.Z,{variant:"subheader2",children:(0,_.jsx)(o.cC,{id:"Select language"})})})]}),Object.keys(ee).map((function(e){return(0,_.jsxs)(i.Z,{component:t,onClick:function(){return(0,$.zl)(e)},sx:{color:{xs:"#F1F1F3",md:"text.primary"},".MuiListItemIcon-root":{minWidth:"unset"},".MuiMenuItemIcon-root":{minWidth:"unset"}},children:[(0,_.jsx)(P.Z,{sx:{mr:3,borderRadius:"2px",overflow:"hidden",width:20,height:14},children:(0,_.jsx)("img",{src:"/icons/flags/".concat(e,".svg"),width:"100%",height:"100%",alt:"".concat(e," icon")})}),(0,_.jsx)(N.Z,{children:s._(ee[e])}),e===s.locale&&(0,_.jsx)(P.Z,{sx:{m:0},children:(0,_.jsx)(h.Z,{fontSize:"small",sx:{color:{xs:"#F1F1F3",md:"text.primary"}},children:(0,_.jsx)(Y.Z,{})})})]},e)}))]})},re=t(5506),ie=t(93946),se=function(e){var n=e.setOpen;return(0,_.jsx)(ie.Z,{onClick:function(){return n(!1)},sx:{p:0,mr:{xs:-2,xsm:1}},children:(0,_.jsx)(h.Z,{sx:{color:"#F1F1F3",fontSize:"32px"},children:(0,_.jsx)(re.Z,{})})})},oe=function(e){var n=e.component,t=void 0===n?Z.ZP:n,r="testnetsEnabled",a="true"===localStorage.getItem(r)||!1,l=(0,s.useState)(a),c=l[0],d=l[1];return(0,_.jsxs)(i.Z,{component:t,onClick:function(){var e=!c;d(!c),localStorage.setItem(r,e?"true":"false"),window.location.href="/"},sx:{cursor:"pointer",color:{xs:"#F1F1F3",md:"text.primary"},py:{xs:1.5,md:2}},children:[(0,_.jsx)(N.Z,{children:(0,_.jsx)(o.cC,{id:"Testnet mode"})}),(0,_.jsx)(B.Z,{sx:{mr:0},value:"testnetsMode",control:(0,_.jsx)(H.Z,{disableRipple:!0,checked:c,sx:{".MuiSwitch-track":{bgcolor:{xs:"#FFFFFF1F",md:"primary.light"}}}}),label:c?"On":"Off",labelPlacement:"start"})]})},ae=function(e){var n=e.children,t=e.title;return(0,_.jsxs)(i.Z,{sx:{mb:6,"&:last-of-type":{mb:0,".MuiDivider-root":{display:"none"}}},children:[(0,_.jsxs)(i.Z,{sx:{px:2},children:[(0,_.jsx)(u.Z,{variant:"subheader2",sx:{color:"#A5A8B6",px:4,py:2},children:t}),n]}),(0,_.jsx)(z.Z,{sx:{borderColor:"#F2F3F729",mt:6}})]})},le=function(e){var n=e.open,t=e.setOpen,r=e.headerHeight,i=(0,o.mV)().i18n,a=(0,s.useState)(!1),l=a[0],c=a[1];return(0,s.useEffect)((function(){return c(!1)}),[n]),(0,_.jsxs)(_.Fragment,{children:[n?(0,_.jsx)(se,{setOpen:t}):(0,_.jsx)(p.Z,{variant:"surface",sx:{p:"7px 8px",minWidth:"unset",ml:2},onClick:function(){return t(!0)},children:(0,_.jsx)(h.Z,{sx:{color:"#F1F1F3"},fontSize:"small",children:(0,_.jsx)(L.Z,{})})}),(0,_.jsx)(J,{open:n,setOpen:t,headerHeight:r,children:l?(0,_.jsx)(b.Z,{sx:{px:2},children:(0,_.jsx)(te,{onClick:function(){return c(!1)}})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(ae,{title:(0,_.jsx)(o.cC,{id:"Menu"}),children:(0,_.jsx)(U,{setOpen:t})}),(0,_.jsx)(ae,{title:(0,_.jsx)(o.cC,{id:"Global settings"}),children:(0,_.jsxs)(b.Z,{children:[(0,_.jsx)(Q,{}),f.F3&&(0,_.jsx)(oe,{}),(0,_.jsx)(ne,{onClick:function(){return c(!0)}})]})}),(0,_.jsx)(ae,{title:(0,_.jsx)(o.cC,{id:"Links"}),children:(0,_.jsx)(b.Z,{children:D.map((function(e,n){return(0,_.jsxs)(Z.ZP,{component:j.rU,href:e.link,sx:{color:"#F1F1F3"},children:[(0,_.jsx)(P.Z,{sx:{minWidth:"unset",mr:3},children:(0,_.jsx)(h.Z,{sx:{fontSize:"20px",color:"#F1F1F3"},children:e.icon})}),(0,_.jsx)(N.Z,{children:i._(e.title)})]},n)}))})})]})})]})},ce=t(22659);function de(){var e=(0,s.useState)(!1),n=e[0],t=e[1],r=(0,s.useState)(!1),i=r[0],a=r[1],l=(0,s.useState)(null),c=l[0],d=l[1],x=function(){d(null),t(!1),a(!1)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p.Z,{variant:"surface","aria-label":"settings",id:"settings-button","aria-controls":n?"settings-menu":void 0,"aria-expanded":n?"true":void 0,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget),t(!0),a(!1)},sx:{p:"7px 8px",minWidth:"unset",ml:2},children:(0,_.jsx)(h.Z,{sx:{color:"#F1F1F3"},fontSize:"small",children:(0,_.jsx)(ce.Z,{})})}),(0,_.jsxs)(A.Z,{id:"settings-menu",MenuListProps:{"aria-labelledby":"settings-button"},anchorEl:c,open:n,onClose:x,sx:{".MuiMenuItem-root.Mui-disabled":{opacity:1}},keepMounted:!0,children:[(0,_.jsx)(V.Z,{disabled:!0,sx:{mb:"4px"},children:(0,_.jsx)(u.Z,{variant:"subheader2",color:"text.secondary",children:(0,_.jsx)(o.cC,{id:"Global settings"})})}),(0,_.jsx)(Q,{component:V.Z}),f.F3&&(0,_.jsx)(oe,{}),(0,_.jsx)(ne,{onClick:function(){t(!1),a(!0)},component:V.Z})]}),(0,_.jsx)(A.Z,{id:"settings-menu",MenuListProps:{"aria-labelledby":"settings-button"},anchorEl:c,open:i,onClose:x,keepMounted:!0,children:(0,_.jsx)(te,{onClick:function(){t(!0),a(!1)},component:V.Z})})]})}var xe=t(50029),ue=t(87794),pe=t.n(ue),he=t(52758),me=t(69977),fe=t(84563),je=t(74685),ge=t(13342),be=t(88078),Ze=t(84118),ve=t(11288),Fe=t.n(ve),ke=t(36920),we=t(96183),ye=t(38197),Ce=t(29251),Ee=(0,f.Zs)(),Se=function(e){var n=(0,s.useState)(void 0),t=n[0],r=n[1],i=(0,s.useState)(void 0),o=i[0],a=i[1],l=function(){var e=(0,xe.Z)(pe().mark((function e(n){var t;return pe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ee.lookupAddress(n);case 3:t=e.sent,r(t||void 0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("ENS name lookup error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),c=function(){var n=(0,xe.Z)(pe().mark((function n(t){var r,i;return pe().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=ye.keccak256(Ce.Y0(null===t||void 0===t?void 0:t.replace(".eth",""))),n.next=4,fetch("https://metadata.ens.domains/mainnet/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85/".concat(r,"/"));case 4:return n.next=6,n.sent.json();case 6:i=n.sent,a(i&&i.background_image?i.background_image:Fe()(e)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("ENS avatar lookup error",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){e?(a(Fe()(e)),l(e)):r(void 0)}),[e]),(0,s.useEffect)((function(){t&&c(t)}),[t]),{name:t,avatar:o}},Oe=t(72005),_e=function(e,n,t){return"".concat(e.substr(0,n),"...").concat(e.substr(e.length-t,e.length))};function Me(e){var n=e.open,t=e.setOpen,r=e.headerHeight,a=(0,Oe.Z)(),l=a.disconnectWallet,c=a.currentAccount,m=a.connected,g=a.chainId,v=a.loading,F=(0,we.qr)().setWalletModalOpen,k=(0,d.Z)().breakpoints,w=(0,x.Z)(k.down("xsm")),y=(0,x.Z)(k.down("md")),C=Se(c),E=C.name,S=C.avatar,O=E?E.length>18?_e(E,12,3):E:void 0,M=(0,s.useState)(!1),T=M[0],D=M[1],R=(0,s.useState)(null),I=R[0],W=R[1];(0,s.useEffect)((function(){S&&D(!1)}),[S]);var U=(0,f.Mo)(g),L="";L=null!==U&&void 0!==U&&U.isFork?"#ff4a8d":null!==U&&void 0!==U&&U.isTestnet?"#7157ff":"#65c970";var B=function(){t(!1)},H=function(){m&&(l(),B(),localStorage.removeItem("mockWalletAddress"))},G=function(){var e=(0,xe.Z)(pe().mark((function e(){return pe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.clipboard.writeText(c),B();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=w&&(f.p8||f.aV),q=(0,_.jsx)(i.Z,{sx:{width:22,height:22,borderRadius:"50%",border:"1px solid #FAFBFC1F",img:{width:"100%",height:"100%",borderRadius:"50%"}},children:(0,_.jsx)("img",{src:T?Fe()(""!==c?c:"default"):S,alt:"",onError:function(){return D(!0)}})}),K=(0,_.jsx)(_.Fragment,{});K=c?Q?(0,_.jsx)(i.Z,{sx:{margin:"1px 0"},children:q}):(0,_.jsx)(_.Fragment,{children:null!==O&&void 0!==O?O:_e(c,4,4)}):(0,_.jsx)(o.cC,{id:"Connect wallet"});var X=function(e){var n=e.component,t=void 0===n?Z.ZP:n;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u.Z,{variant:"subheader2",sx:{display:{xs:"block",md:"none"},color:"#A5A8B6",px:4,py:2},children:(0,_.jsx)(o.cC,{id:"Account"})}),(0,_.jsx)(i.Z,{component:t,disabled:!0,children:(0,_.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,_.jsx)(i.Z,{sx:{width:40,height:40,borderRadius:"50%",border:"1px solid #FAFBFC1F",mr:3,img:{width:"100%",height:"100%",borderRadius:"50%"}},children:(0,_.jsx)("img",{src:T?Fe()(""!==c?c:"default"):S,alt:"",onError:function(){return D(!0)}})}),(0,_.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:[O&&(0,_.jsx)(u.Z,{variant:"h4",color:{xs:"#F1F1F3",md:"text.primary"},children:O}),(0,_.jsx)(u.Z,{variant:O?"caption":"h4",color:O?{xs:"#A5A8B6",md:"text.secondary"}:{xs:"#F1F1F3",md:"text.primary"},children:_e(c,O?12:7,4)})]})]})}),(0,_.jsx)(z.Z,{sx:{my:{xs:7,md:0},borderColor:{xs:"#FFFFFF1F",md:"divider"}}}),(0,_.jsx)(i.Z,{component:t,disabled:!0,children:(0,_.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:[(0,_.jsx)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:1},children:(0,_.jsx)(u.Z,{variant:"caption",color:{xs:"#FFFFFFB2",md:"text.secondary"},children:(0,_.jsx)(o.cC,{id:"Network"})})}),(0,_.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,_.jsx)(i.Z,{sx:{bgcolor:L,width:6,height:6,mr:2,boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",borderRadius:"50%"}}),(0,_.jsx)(u.Z,{color:{xs:"#F1F1F3",md:"text.primary"},variant:"subheader1",children:U.name})]})]})}),(0,_.jsx)(z.Z,{sx:{my:{xs:7,md:0},borderColor:{xs:"#FFFFFF1F",md:"divider"}}}),(0,_.jsxs)(i.Z,{component:t,sx:{color:{xs:"#F1F1F3",md:"text.primary"}},onClick:G,children:[(0,_.jsx)(P.Z,{sx:{color:{xs:"#F1F1F3",md:"primary.light",minWidth:"unset",marginRight:12}},children:(0,_.jsx)(h.Z,{fontSize:"small",children:(0,_.jsx)(he.Z,{})})}),(0,_.jsx)(N.Z,{children:(0,_.jsx)(o.cC,{id:"Copy address"})})]}),(null===U||void 0===U?void 0:U.explorerLinkBuilder)&&(0,_.jsx)(j.rU,{href:U.explorerLinkBuilder({address:c}),children:(0,_.jsxs)(i.Z,{component:t,sx:{color:{xs:"#F1F1F3",md:"text.primary"}},onClick:B,children:[(0,_.jsx)(P.Z,{sx:{color:{xs:"#F1F1F3",md:"primary.light",minWidth:"unset",marginRight:12}},children:(0,_.jsx)(h.Z,{fontSize:"small",children:(0,_.jsx)(fe.Z,{})})}),(0,_.jsx)(N.Z,{children:(0,_.jsx)(o.cC,{id:"View on Explorer"})})]})}),(0,_.jsxs)(i.Z,{component:t,sx:{color:{xs:"#F1F1F3",md:"text.primary"}},onClick:H,children:[(0,_.jsx)(P.Z,{sx:{color:{xs:"#F1F1F3",md:"primary.light",minWidth:"unset",marginRight:12}},children:(0,_.jsx)(h.Z,{fontSize:"small",children:(0,_.jsx)(me.Z,{})})}),(0,_.jsx)(N.Z,{children:(0,_.jsx)(o.cC,{id:"Disconnect Wallet"})})]})]})};return(0,_.jsxs)(_.Fragment,{children:[y&&m&&n?(0,_.jsx)(se,{setOpen:t}):v?(0,_.jsx)(be.Z,{height:36,width:126,sx:{background:"#383D51"}}):(0,_.jsx)(p.Z,{variant:m?"surface":"gradient","aria-label":"wallet",id:"wallet-button","aria-controls":n?"wallet-button":void 0,"aria-expanded":n?"true":void 0,"aria-haspopup":"true",onClick:function(e){m?(t(!0),W(e.currentTarget)):F(!0)},sx:{p:m?"5px 8px":void 0,minWidth:Q?"unset":void 0},startIcon:m&&!Q&&q,endIcon:m&&!Q&&(0,_.jsx)(h.Z,{sx:{display:{xs:"none",md:"block"}},children:n?(0,_.jsx)(je.Z,{}):(0,_.jsx)(ge.Z,{})}),children:K}),y?(0,_.jsx)(J,{open:n,setOpen:t,headerHeight:r,children:(0,_.jsx)(b.Z,{sx:{px:2,".MuiListItem-root.Mui-disabled":{opacity:1}},children:(0,_.jsx)(X,{})})}):(0,_.jsx)(A.Z,{id:"wallet-menu",MenuListProps:{"aria-labelledby":"wallet-button"},anchorEl:I,open:n,onClose:B,keepMounted:!0,children:(0,_.jsx)(Ze.Z,{disablePadding:!0,sx:{".MuiMenuItem-root.Mui-disabled":{opacity:1}},children:(0,_.jsx)(X,{component:V.Z})})}),(0,_.jsx)(ke.x,{})]})}function Te(e){var n=e.children,t=(0,l.Z)();return(0,_.jsx)(c.Z,{appear:!1,direction:"down",in:!t,children:n})}function De(){var e=(0,d.Z)().breakpoints,n=(0,x.Z)(e.down("md")),t=(0,x.Z)(e.down("sm")),r=(0,s.useState)(!1),l=r[0],c=r[1],b=(0,s.useState)(!1),Z=b[0],v=b[1];(0,s.useEffect)((function(){l&&!n&&c(!1),Z&&v(!1)}),[n]);var F=(0,_.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"start",gap:1},children:[(0,_.jsx)(u.Z,{variant:"subheader1",children:(0,_.jsx)(o.cC,{id:"Testnet mode is ON"})}),(0,_.jsxs)(u.Z,{variant:"description",children:[(0,_.jsx)(o.cC,{id:"The app is running in testnet mode. Learn how it works in"})," ",(0,_.jsx)(j.rU,{href:"https://docs.aave.com/faq/testing-aave",style:{fontSize:"14px",fontWeight:400,textDecoration:"underline"},children:"FAQ."})]}),(0,_.jsx)(p.Z,{variant:"outlined",sx:{mt:"12px"},onClick:function(){localStorage.setItem("testnetsEnabled","false"),window.location.href="/"},children:(0,_.jsx)(o.cC,{id:"Disable testnet"})})]});return(0,_.jsx)(Te,{children:(0,_.jsxs)(i.Z,{component:"header",sx:function(e){return{height:48,position:"sticky",top:0,transition:e.transitions.create("top"),zIndex:e.zIndex.appBar,bgcolor:"background.header",padding:{xs:l||Z?"8px 20px":"8px 8px 8px 20px",xsm:"8px 20px"},display:"flex",alignItems:"center",flexDirection:"space-between",boxShadow:"inset 0px -1px 0px rgba(242, 243, 247, 0.16)"}},children:[(0,_.jsx)(i.Z,{component:j.rU,href:"/","aria-label":"Go to homepage",sx:{lineHeight:0,mr:3,transition:"0.3s ease all","&:hover":{opacity:.7}},onClick:function(){return c(!1)},children:(0,_.jsx)("img",{src:g,alt:"An SVG of an eye",height:20})}),(0,_.jsx)(i.Z,{sx:{mr:t?1:3},children:f.p8&&(0,_.jsx)(m.a,{tooltipContent:F,offset:[0,-4],withoutHover:!0,children:(0,_.jsxs)(p.Z,{variant:"surface",size:"small",color:"primary",sx:{backgroundColor:"#B6509E","&:hover, &.Mui-focusVisible":{backgroundColor:"rgba(182, 80, 158, 0.7)"}},children:["TESTNET",(0,_.jsx)(h.Z,{sx:{marginLeft:"2px",fontSize:"16px"},children:(0,_.jsx)(a.Z,{})})]})})}),(0,_.jsx)(i.Z,{sx:{display:{xs:"none",md:"block"}},children:(0,_.jsx)(U,{})}),(0,_.jsx)(i.Z,{sx:{flexGrow:1}}),!l&&(0,_.jsx)(Me,{open:Z,setOpen:v,headerHeight:48}),(0,_.jsx)(i.Z,{sx:{display:{xs:"none",md:"block"}},children:(0,_.jsx)(de,{})}),!Z&&(0,_.jsx)(i.Z,{sx:{display:{xs:"flex",md:"none"}},children:(0,_.jsx)(le,{open:l,setOpen:c,headerHeight:48})})]})})}function Re(e){var n=e.children;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(De,{}),(0,_.jsx)(i.Z,{component:"main",sx:{display:"flex",flexDirection:"column",flex:1},children:n})]})}}}]);