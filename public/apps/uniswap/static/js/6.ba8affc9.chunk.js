(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[6],{1667:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=new Set(["mp3","wav"]),c=function(e){if(!e)return!1;var t=e.substring(e.lastIndexOf(".")+1);return r.has(t)}},1668:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1669),c=function(e){return void 0!==r.find((function(t){return null===e||void 0===e?void 0:e.endsWith(".".concat(t))}))}},1669:function(e){e.exports=JSON.parse('["3g2","3gp","aaf","asf","avchd","avi","drc","flv","m2v","m3u8","m4p","m4v","mkv","mng","mov","mp2","mp4","mpe","mpeg","mpg","mpv","mxf","nsv","ogg","ogv","qt","rm","rmvb","roq","svi","vob","webm","wmv","yuv"]')},1805:function(e,t,n){},1807:function(e,t,n){},1808:function(e,t,n){},1810:function(e,t,n){},1811:function(e,t,n){},1812:function(e,t,n){},1825:function(e,t,n){"use strict";n.r(t);var r,c=n(11),i=n(75),s=n(4),a=n.n(s),l=n(15),o=n(232),d=n(69),u=n(19),j=(n(327),n(1805),"xstjgw2"),g="xstjgw5",b="xstjgwl rgw6ez422 rgw6ez112 rgw6ez17e rgw6ez3jw",h=n(112),f=n(140),w=n(294),O=n(77),x=n(221),m=n(494),p=n(1),v=n(0),z=Object(p.createContext)(void 0),y=function(){var e=Object(p.useContext)(z);if(!e)throw new Error("Must use context inside of provider");return e},k=function(e){return"/#/nfts/asset/".concat(e.address,"/").concat(e.tokenId,"?origin=collection")},C=function(e){var t=e.asset,n=e.children,r=Object(p.useReducer)((function(e){return!e}),!1),s=Object(c.a)(r,2),a=s[0],l=s[1],o=Object(p.useState)(k(t)),d=Object(c.a)(o,2),u=d[0],j=d[1],g=Object(p.useMemo)((function(){return{asset:t,selected:!1,hovered:a,toggleHovered:l,href:u,setHref:j}}),[t,a,u]),b=Object(p.useRef)(null);return Object(p.useLayoutEffect)((function(){var e;a&&!1===(null===(e=b.current)||void 0===e?void 0:e.matches(":hover"))&&l()}),[a]),Object(v.jsx)(z.Provider,{value:g,children:Object(v.jsx)(i.b,{as:"a",href:u||k(t),position:"relative",ref:b,borderRadius:"20",className:"xstjgw1 rgw6ez6km rgw6ez6ai rgw6ez6je rgw6ez5iq rgw6ez4tw",draggable:!1,onMouseEnter:function(){return l()},onMouseLeave:function(){return l()},transition:"250",children:n})})},N=function(e){var t=e.uniformHeight,n=e.setUniformHeight,r=y(),s=r.hovered,a=r.asset,l=Object(p.useState)(!a.smallImageUrl&&!a.imageUrl),d=Object(c.a)(l,2),u=d[0],b=d[1],h=Object(p.useState)(!1),f=Object(c.a)(h,2),w=f[0],O=f[1];return u?Object(v.jsx)(q,{uniformHeight:t}):Object(v.jsx)(i.b,{display:"flex",overflow:"hidden",children:Object(v.jsx)(i.b,{as:"img",alt:a.name||a.tokenId,width:"full",style:{aspectRatio:t===m.d.notUniform?"1":"auto",transition:"transform 0.4s ease 0s"},src:a.imageUrl||a.smallImageUrl,objectFit:"contain",draggable:!1,onError:function(){return b(!0)},onLoad:function(e){t===m.d.unset?n(e.currentTarget.clientHeight):t!==m.d.notUniform&&e.currentTarget.clientHeight!==t&&n(m.d.notUniform),O(!0)},className:Object(o.default)(s&&g,!w&&j)})})},S=function(e){var t,n,r=e.uniformHeight,s=e.setUniformHeight,a=e.shouldPlay,l=e.setCurrentTokenPlayingMedia,d=Object(p.useRef)(null),u=y(),h=u.hovered,w=u.asset,O=Object(p.useState)(!w.smallImageUrl&&!w.imageUrl),z=Object(c.a)(O,2),k=z[0],C=z[1],N=Object(p.useState)(!1),S=Object(c.a)(N,2),U=S[0],I=S[1],H=Object(x.d)();a?null===(t=d.current)||void 0===t||t.play():null===(n=d.current)||void 0===n||n.pause();return k?Object(v.jsx)(q,{uniformHeight:m.d.notUniform}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(i.b,{display:"flex",overflow:"hidden",children:Object(v.jsx)(i.b,{as:"img",alt:w.name||w.tokenId,width:"full",style:{aspectRatio:"1",transition:"transform 0.4s ease 0s",willChange:"transform"},src:w.imageUrl||w.smallImageUrl,objectFit:"contain",draggable:!1,onError:function(){return C(!0)},onLoad:function(){r!==m.d.notUniform&&s(m.d.notUniform),I(!0)},visibility:a?"hidden":"visible",className:Object(o.default)(h&&g,!U&&j)})}),a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(i.b,{className:b,children:Object(v.jsx)(f.B,{width:"100%",height:"100%",onClick:function(e){e.preventDefault(),e.stopPropagation(),l(void 0)},className:"playback-icon"})}),Object(v.jsx)(i.b,{position:"absolute",left:"0",top:"0",display:"flex",children:Object(v.jsx)(i.b,{as:"video",ref:d,width:"full",style:{aspectRatio:"1"},onEnded:function(e){e.preventDefault(),l(void 0)},loop:!0,playsInline:!0,children:Object(v.jsx)("source",{src:w.animationUrl})})})]}):Object(v.jsx)(i.b,{className:b,children:(!H&&h||H)&&Object(v.jsx)(f.C,{width:"100%",height:"100%",onClick:function(e){e.preventDefault(),e.stopPropagation(),l(w.tokenId)},className:"playback-icon"})})]})},U=function(e){var t,n,r=e.uniformHeight,s=e.setUniformHeight,a=e.shouldPlay,l=e.setCurrentTokenPlayingMedia,d=Object(p.useRef)(null),u=y(),h=u.hovered,w=u.asset,O=Object(p.useState)(!w.smallImageUrl&&!w.imageUrl),z=Object(c.a)(O,2),k=z[0],C=z[1],N=Object(p.useState)(!1),S=Object(c.a)(N,2),U=S[0],I=S[1],H=Object(x.d)();a?null===(t=d.current)||void 0===t||t.play():null===(n=d.current)||void 0===n||n.pause();return k?Object(v.jsx)(q,{uniformHeight:r}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(i.b,{display:"flex",overflow:"hidden",children:Object(v.jsx)(i.b,{as:"img",alt:w.name||w.tokenId,width:"full",style:{aspectRatio:r===m.d.notUniform?"1":"auto",transition:"transform 0.4s ease 0s"},src:w.imageUrl||w.smallImageUrl,objectFit:"contain",draggable:!1,onError:function(){return C(!0)},onLoad:function(e){r===m.d.unset?s(e.currentTarget.clientHeight):r!==m.d.notUniform&&e.currentTarget.clientHeight!==r&&s(m.d.notUniform),I(!0)},className:Object(o.default)(h&&g,!U&&j)})}),a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(i.b,{className:b,children:Object(v.jsx)(f.B,{width:"100%",height:"100%",onClick:function(e){e.preventDefault(),e.stopPropagation(),l(void 0)},className:"playback-icon"})}),Object(v.jsx)(i.b,{position:"absolute",left:"0",top:"0",display:"flex",children:Object(v.jsx)(i.b,{as:"audio",ref:d,width:"full",height:"full",onEnded:function(e){e.preventDefault(),l(void 0)},children:Object(v.jsx)("source",{src:w.animationUrl})})})]}):Object(v.jsx)(i.b,{className:b,children:(!H&&h||H)&&Object(v.jsx)(f.C,{width:"100%",height:"100%",onClick:function(e){e.preventDefault(),e.stopPropagation(),l(w.tokenId)},className:"playback-icon"})})]})},I=function(e){var t=e.children;return Object(v.jsx)(h.c,{position:"relative",paddingX:"12",paddingTop:"12",justifyContent:"space-between",flexDirection:"column",transition:"250",children:t})},H=function(e){var t=e.children;return Object(v.jsx)(i.b,{overflow:"hidden",width:"full",children:t})},M=function(e){var t=e.children;return Object(v.jsx)(h.c,{justifyContent:"space-between",children:t})},R=function(e){var t=e.children;return Object(v.jsx)(h.c,{overflow:"hidden",whiteSpace:"nowrap",children:t})},F=function(e){var t=e.children;return Object(v.jsx)(i.b,{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",color:"blackBlue",fontWeight:"medium",fontSize:"14",style:{lineHeight:"20px"},children:t})},T=function(e){var t=e.children;return Object(v.jsx)(h.c,{height:"20",justifyContent:"space-between",marginTop:"6",children:t})},P=function(e){var t=e.children;return Object(v.jsx)(h.c,{children:t})},E=function(e){var t=e.children;return Object(v.jsx)(i.b,{color:"blackBlue",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"16",fontWeight:"medium",style:{lineHeight:"20px"},children:t})},B=function(e){var t=e.children,n=e.selectedChildren,r=e.onClick,s=e.onSelectedClick,a=Object(p.useReducer)((function(e){return!e}),!1),l=Object(c.a)(a,2),d=l[0],j=l[1],g=y(),b=g.asset,m=g.selected,z=g.setHref,C=Object(p.useRef)(null),N=Object(x.d)();return Object(p.useLayoutEffect)((function(){var e;d&&!1===(null===(e=C.current)||void 0===e?void 0:e.matches(":hover"))&&j()}),[d]),Object(v.jsx)(v.Fragment,{children:m&&"ERC1155"===b.tokenType?Object(v.jsxs)(h.c,{className:"rgw6ez3re rgw6ez3n2 rgw6ezu8 rgw6ezuf rgw6eze2",children:[Object(v.jsx)(u.c,{as:"button",className:"xstjgwj rgw6ez3y8 rgw6ez412 rgw6ez5ke rgw6ez3zq rgw6ez4ke rgw6ez6iq rgw6ez6ca rgw6ez6a6 rgw6ez2mw rgw6ez6nq rgw6ez44q",onClick:function(e){return s(e)},children:Object(v.jsx)(f.x,{width:"32",height:"32"})}),Object(v.jsx)(i.b,{className:"".concat("xstjgwe rgw6ez45w"," ").concat(w.l)}),Object(v.jsx)(u.c,{as:"button",className:"xstjgwh rgw6ez3y8 rgw6ez412 rgw6ez5ke rgw6ez3zq rgw6ez4ke rgw6ez6iq rgw6ez6ca rgw6ez6a6 rgw6ez2mw rgw6ez6nq rgw6ez478",onClick:function(e){return r(e)},children:Object(v.jsx)(f.D,{width:"32",height:"32"})})]}):Object(v.jsx)(i.b,{as:"button",ref:C,color:d||N?"explicitWhite":m?"error":b.notForSale?"placeholder":"blue400",style:{background:"".concat(d||N?m?O.d.color.error:O.d.color.blue400:m?"#FA2B391F":"#4C82FB1F")},className:Object(o.default)("xstjgw9 rgw6ez2i8 rgw6ez21q rgw6ez3y8 rgw6ez142 rgw6ez42e rgw6ezu8 rgw6ezuf rgw6eze2 rgw6ez6ba rgw6ez6iq rgw6ez412 rgw6ez6nq rgw6ez6a6",w.l),onClick:function(e){return m?s(e):b.notForSale?function(){return!0}:r(e)},onMouseEnter:function(){!b.notForSale&&z(""),!d&&j()},onMouseLeave:function(){!b.notForSale&&z(k(b)),d&&j()},transition:"250",children:m?n:b.notForSale?d||N?"See details":"Not for sale":t})})},L=function(e){var t=e.marketplace;return Object(v.jsx)(i.b,{as:"img",alt:t,src:"/nft/svgs/marketplaces/".concat(t,".svg"),className:"xstjgwb rgw6ez3yk rgw6ezzq rgw6ez162 rgw6ez6ay rgw6ez3re rgw6ezj8"})},q=function(e){var t=e.uniformHeight;return Object(v.jsx)(v.Fragment,{children:t!==m.d.unset&&t!==m.d.notUniform?Object(v.jsxs)(i.b,{display:"flex",width:"full",style:{height:"".concat(t,"px"),background:"linear-gradient(270deg, ".concat(O.c.colors.medGray," 0%, ").concat(O.c.colors.lightGray," 100%)")},fontWeight:"normal",color:"grey500",className:w.b,justifyContent:"center",alignItems:"center",textAlign:"center",children:["Content not",Object(v.jsx)("br",{}),"available yet"]}):Object(v.jsx)(i.b,{position:"relative",width:"full",style:{paddingTop:"100%",background:"linear-gradient(270deg, ".concat(O.c.colors.medGray," 0%, ").concat(O.c.colors.lightGray," 100%)")},children:Object(v.jsxs)(i.b,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},fontWeight:"normal",color:"grey500",className:w.b,children:["Content not",Object(v.jsx)("br",{}),"available yet"]})})})},G=n(472),D=n(1667),A=n(1668);!function(e){e[e.Image=0]="Image",e[e.Video=1]="Video",e[e.Audio=2]="Audio"}(r||(r={}));var W=function(e){var t=e.asset,n=e.uniformHeight,c=e.setUniformHeight,i=e.mediaShouldBePlaying,s=e.setCurrentTokenPlayingMedia,a=Object(p.useMemo)((function(){var e,n=r.Image;return e=t.notForSale||d.a.from(t.currentEthPrice?t.currentEthPrice:0).lt(0),Object(D.a)(t.animationUrl)?n=r.Audio:Object(A.a)(t.animationUrl)&&(n=r.Video),{notForSale:e,assetMediaType:n}}),[t]),l=a.notForSale,o=a.assetMediaType;return Object(v.jsxs)(C,{asset:t,children:[o===r.Image?Object(v.jsx)(N,{uniformHeight:n,setUniformHeight:c}):o===r.Video?Object(v.jsx)(S,{uniformHeight:n,setUniformHeight:c,shouldPlay:i,setCurrentTokenPlayingMedia:s}):Object(v.jsx)(U,{uniformHeight:n,setUniformHeight:c,shouldPlay:i,setCurrentTokenPlayingMedia:s}),Object(v.jsxs)(I,{children:[Object(v.jsxs)(H,{children:[Object(v.jsx)(M,{children:Object(v.jsx)(R,{children:Object(v.jsx)(F,{children:t.name?t.name:"#".concat(t.tokenId)})})}),Object(v.jsxs)(T,{children:[Object(v.jsx)(P,{children:Object(v.jsx)(E,{children:l?"":"".concat(Object(G.c)(t.currentEthPrice)," ETH")})}),"ERC1155"!==t.tokenType&&t.marketplace&&Object(v.jsx)(L,{marketplace:t.marketplace})]})]}),Object(v.jsx)(B,{selectedChildren:"Remove",onClick:function(e){e.preventDefault()},onSelectedClick:function(e){e.preventDefault()},children:"Buy now"})]})]})},_=n(1686),V=n(600),X=n(1687),J=n(356),Q=function(e){var t=e.contractAddress,n=Object(x.b)((function(e){return e.buyNow})),r=Object(J.useInfiniteQuery)(["collectionNfts",{contractAddress:t,notForSale:!n}],function(){var e=Object(l.a)(a.a.mark((function e(r){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.pageParam,i=void 0===c?0:c,e.next=3,Object(V.a)({contractAddress:t,notForSale:!n,pageParam:i});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{getNextPageParam:function(e,t){return 25===(null===e||void 0===e?void 0:e.flat().length)?t.length:null},refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:5e3}),s=r.data,d=r.isSuccess,u=r.fetchNextPage,j=r.hasNextPage,g=Object(p.useState)(m.d.unset),b=Object(c.a)(g,2),f=b[0],O=b[1],z=Object(p.useState)(),y=Object(c.a)(z,2),k=y[0],C=y[1],N=Object(p.useMemo)((function(){if(s&&d)return s.pages.flat()}),[s,d]);return Object(p.useEffect)((function(){O(m.d.unset)}),[t]),N?Object(v.jsx)(X.a,{next:u,hasMore:null!==j&&void 0!==j&&j,loader:j?Object(v.jsx)("p",{children:"Loading from scroll..."}):null,dataLength:N.length,style:{overflow:"unset"},children:N.length>0?Object(v.jsx)("div",{className:_.a,children:N.map((function(e){return e?Object(v.jsx)(W,{asset:e,uniformHeight:f,setUniformHeight:O,mediaShouldBePlaying:e.tokenId===k,setCurrentTokenPlayingMedia:C},e.address+e.tokenId):null}))}):Object(v.jsx)(h.a,{width:"full",color:"darkGray",style:{height:"60vh"},children:Object(v.jsxs)("div",{style:{display:"block",textAlign:"center"},children:[Object(v.jsx)("p",{className:w.h,children:"No NFTS found"}),Object(v.jsx)(i.b,{className:Object(o.default)(w.c,w.e),color:"blue",cursor:"pointer",children:"View full collection"})]})})}):Object(v.jsx)("div",{children:"No CollectionAssets"})},K=n(6),Y=n(81),Z=n(7),$=(n(1807),"_2h6l0o1 rgw6ez1n2 rgw6ez3jw rgw6ez3y8 rgw6ez40e rgw6ez2w"),ee=function(e){var t=e.children,n=e.speed,r=void 0===n?20:n,s=Object(p.useState)(0),a=Object(c.a)(s,2),l=a[0],o=a[1],d=Object(p.useRef)(null),u=Object(p.useRef)(null),j=function(){var e=0,t=0;try{u.current&&d.current&&(e=d.current.getBoundingClientRect().width,t=u.current.getBoundingClientRect().width)}catch(n){}o(t<e?e/r:t/r)};return Object(p.useEffect)((function(){return j(),window.addEventListener("resize",j),function(){window.removeEventListener("resize",j)}})),Object(v.jsxs)(i.b,{ref:d,overflowX:"hidden",display:"flex",flexDirection:"row",position:"relative",width:"full",children:[Object(v.jsx)("div",{ref:u,style:Object(Z.a)({},"--duration","".concat(l,"s")),className:$,children:t}),Object(v.jsx)("div",{style:Object(Z.a)({},"--duration","".concat(l,"s")),className:$,children:t})]})},te=n(689),ne=n(1661),re=n.n(ne),ce=(n(495),n(1808),"rgw6ez3z2 rgw6ez6km rgw6ez3z8"),ie=["stats","isMobile"],se=function(e){var t=e.children,n=e.href;return Object(v.jsx)(i.b,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:n,height:"40",width:"40",borderRadius:"round",backgroundColor:"white",children:t})},ae=function(e){var t=e.collectionStats,n=e.collectionSocialsIsOpen,r=e.toggleCollectionSocials;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.c,{marginLeft:"4",onClick:function(){return r()},children:n?Object(v.jsx)(f.P,{width:"28",height:"28",fill:O.c.colors.darkGray}):Object(v.jsx)(f.p,{width:"28",height:"28",fill:O.c.colors.darkGray})}),n&&Object(v.jsxs)(h.c,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[t.discordUrl?Object(v.jsx)(se,{href:t.discordUrl,children:Object(v.jsx)(i.b,{margin:"auto",paddingTop:"4",children:Object(v.jsx)(f.n,{width:28,height:28,color:O.c.colors.darkGray})})}):null,t.twitter?Object(v.jsx)(se,{href:"https://twitter.com/"+t.twitter,children:Object(v.jsx)(i.b,{margin:"auto",paddingTop:"6",children:Object(v.jsx)(f.L,{fill:O.c.colors.darkGray,color:O.c.colors.darkGray,width:"28px",height:"28px"})})}):null,t.instagram?Object(v.jsx)(se,{href:"https://instagram.com/"+t.instagram,children:Object(v.jsx)(i.b,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:Object(v.jsx)(f.v,{fill:O.c.colors.darkGray,width:"28px",height:"28px"})})}):null,t.externalUrl?Object(v.jsx)(se,{href:t.externalUrl,children:Object(v.jsx)(i.b,{margin:"auto",paddingTop:"4",children:Object(v.jsx)(f.q,{fill:O.c.colors.darkGray,width:"28px",height:"28px"})})}):null]})]})},le=function(e){var t=e.children,n=e.href;return Object(v.jsx)(h.b,{as:"a",target:"_blank",rel:"noreferrer",href:n,height:"full",justifyContent:"center",children:t})},oe=function(e){var t=e.collectionStats,n=e.name,r=e.isVerified,c=e.isMobile,s=e.collectionSocialsIsOpen,a=e.toggleCollectionSocials;return Object(v.jsxs)(h.c,{justifyContent:"space-between",children:[Object(v.jsxs)(h.c,{minWidth:"0",children:[Object(v.jsx)(i.b,{marginRight:r?"0":"12",className:Object(o.default)(w.h,ce),style:{lineHeight:"32px"},children:n}),r&&Object(v.jsx)(f.O,{style:{width:"32px",height:"32px"}}),Object(v.jsxs)(h.c,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[t.discordUrl?Object(v.jsx)(le,{href:t.discordUrl,children:Object(v.jsx)(f.n,{fill:O.c.colors.darkGray,color:O.c.colors.darkGray,width:"26px",height:"26px"})}):null,t.twitter?Object(v.jsx)(le,{href:"https://twitter.com/"+t.twitter,children:Object(v.jsx)(f.L,{fill:O.c.colors.darkGray,color:O.c.colors.darkGray,width:"26px",height:"26px"})}):null,t.instagram?Object(v.jsx)(le,{href:"https://instagram.com/"+t.instagram,children:Object(v.jsx)(f.v,{fill:O.c.colors.darkGray,width:"26px",height:"26px"})}):null,t.externalUrl?Object(v.jsx)(le,{href:t.externalUrl,children:Object(v.jsx)(f.q,{fill:O.c.colors.darkGray,width:"26px",height:"26px"})}):null]})]}),c&&(t.discordUrl||t.twitter||t.instagram||t.externalUrl)&&Object(v.jsx)(ae,{collectionStats:t,collectionSocialsIsOpen:s,toggleCollectionSocials:a})]})},de=function(e){var t=e.description,n=Object(p.useState)(!1),r=Object(c.a)(n,2),s=r[0],a=r[1],l=Object(p.useReducer)((function(e){return!e}),!1),d=Object(c.a)(l,2),u=d[0],j=d[1],g=Object(p.useRef)(null),b=Object(p.useRef)(null);return Object(p.useEffect)((function(){var e;g&&b&&g.current&&b.current&&(b.current.getBoundingClientRect().width>=(null===(e=g.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||b.current.getBoundingClientRect().width>=590)&&a(!0)}),[b,g]),Object(v.jsxs)(i.b,{ref:g,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[Object(v.jsx)(i.b,{ref:b,className:Object(o.default)("jinxmn8 rgw6eza8 rgw6ez3yk",ce,u&&"jinxmna rgw6ez6ky rgw6ez3yw rgw6ez1gq"),children:Object(v.jsx)(re.a,{source:t,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),Object(v.jsxs)(i.b,{as:"span",display:s?"inline":"none",className:"jinxmnc rgw6ez4aw rgw6ez6a6 rgw6eziw rgw6eza8",onClick:j,children:["Show ",u?"less":"more"]})]})},ue=function(e){var t=e.children,n=e.label,r=e.isMobile;return Object(v.jsxs)(i.b,{display:"flex",flexDirection:r?"row":"column",alignItems:"baseline",gap:"2",height:"min",children:[Object(v.jsx)(i.b,{as:"span",className:"jinxmne rgw6eza8 rgw6ezc2 rgw6ez462 rgw6ez3z2",children:"".concat(n).concat(r?": ":"")}),Object(v.jsx)("span",{className:"jinxmng rgw6ezae rgw6ezc8",children:t})]})},je=function(e){var t,n,r,c=e.stats,i=e.isMobile,s=Object(Y.a)(e,ie),a=c.stats?Object(te.a)(c.stats.num_owners):0,l=c.stats?Object(te.a)(c.stats.total_supply):0,o=c.stats?Object(te.a)(c.stats.total_listings):0,d=Object(G.a)(null===(t=c.stats)||void 0===t?void 0:t.total_volume),u=Object(G.a)(c.floorPrice);return Object(v.jsxs)(h.c,Object(K.a)(Object(K.a)({gap:{sm:"20",md:"60"}},s),{},{children:[Object(v.jsx)(ue,{label:"Items",isMobile:null!==i&&void 0!==i&&i,children:l}),a?Object(v.jsx)(ue,{label:"Owners",isMobile:null!==i&&void 0!==i&&i,children:a}):null,c.floorPrice?Object(v.jsxs)(ue,{label:"Floor Price",isMobile:null!==i&&void 0!==i&&i,children:[u," ETH"]}):null,(null===(n=c.stats)||void 0===n?void 0:n.total_volume)?Object(v.jsxs)(ue,{label:"Total Volume",isMobile:null!==i&&void 0!==i&&i,children:[d," ETH"]}):null,(null===(r=c.stats)||void 0===r?void 0:r.total_listings)?Object(v.jsx)(ue,{label:"Listings",isMobile:null!==i&&void 0!==i&&i,children:o}):null]}))},ge=function(e){var t=e.stats,n=e.isMobile,r=Object(p.useReducer)((function(e){return!e}),!1),s=Object(c.a)(r,2),a=s[0],l=s[1];return t?Object(v.jsxs)(i.b,{display:"flex",marginTop:n&&!t.bannerImageUrl?a?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[Object(v.jsx)(i.b,{as:"img",borderRadius:"round",position:"absolute",className:"jinxmn5 rgw6ez2xw rgw6ez6ai rgw6ez6jq rgw6ez4pw",src:t.isFoundation&&!t.imageUrl?"/nft/svgs/marketplaces/foundation.svg":t.imageUrl}),Object(v.jsxs)(i.b,{className:"jinxmn1 rgw6ezu8 rgw6ezw3 rgw6ezcw rgw6ezf3",children:[Object(v.jsx)(oe,{collectionStats:t,name:t.name,isVerified:t.isVerified,isMobile:n,collectionSocialsIsOpen:a,toggleCollectionSocials:l}),!n&&Object(v.jsxs)(v.Fragment,{children:[t.description&&Object(v.jsx)(de,{description:t.description}),Object(v.jsx)(je,{stats:t,marginTop:"20"})]})]}),n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(i.b,{marginBottom:"12",children:t.description&&Object(v.jsx)(de,{description:t.description})}),Object(v.jsx)(ee,{children:Object(v.jsx)(je,{stats:t,marginLeft:"6",marginRight:"6",marginBottom:"28",isMobile:!0})})]})]}):Object(v.jsx)("div",{children:"Loading CollectionStats..."})},be=n(1670),he=(n(1810),n(1811),function(e){var t=e.hovered,n=e.checked,r=e.onClick;return Object(v.jsx)(i.b,{as:"label",className:n?"adysuu6 rgw6ez42e rgw6ez3yk rgw6ez16k rgw6ez108 rgw6ez6a6 rgw6ez4k8 rgw6ez6ca rgw6ez6cd rgw6ez6ai rgw6ez6jm rgw6ez38w rgw6ez2xw rgw6ez33e rgw6ez2se rgw6ez6nq rgw6ez6nt rgw6ez4u8":t?"rgw6ez42e rgw6ez3yk rgw6ez16k rgw6ez108 rgw6ez6a6 rgw6ez4k8 rgw6ez6ca rgw6ez6cd rgw6ez6ai rgw6ez6jm rgw6ez38w rgw6ez2xw rgw6ez33e rgw6ez2se rgw6ez6nq rgw6ez6nt rgw6ez4u8":"rgw6ez42e rgw6ez3yk rgw6ez16k rgw6ez108 rgw6ez6a6 rgw6ez4k8 rgw6ez6ca rgw6ez6cd rgw6ez6ai rgw6ez6jm rgw6ez38w rgw6ez2xw rgw6ez33e rgw6ez2se rgw6ez6nq rgw6ez6nt rgw6ez4w2",onClick:r})});he.displayName="Radio";var fe=function(){var e=Object(x.b)((function(e){return{buyNow:e.buyNow,setBuyNow:e.setBuyNow}})),t=e.buyNow,n=e.setBuyNow,r=Object(p.useReducer)((function(e){return!e}),!1),s=Object(c.a)(r,2),a=s[0],l=s[1],o=function(){n(!t)};return Object(v.jsxs)(i.b,{className:"_10b1b4v1 rgw6ez6l2 rgw6ez1aw rgw6ez2je",children:[Object(v.jsx)(h.c,{width:"full",justifyContent:"space-between",children:Object(v.jsx)(h.c,{as:"span",fontSize:"20",color:"blackBlue",children:"Filters"})}),Object(v.jsx)(h.b,{paddingTop:"8",children:Object(v.jsxs)(h.c,{justifyContent:"space-between",className:"_10b1b4v3 rgw6ez6ba",gap:"2",paddingTop:"12",paddingRight:"16",paddingBottom:"12",paddingLeft:"12",cursor:"pointer",onClick:function(e){e.preventDefault(),o()},onMouseEnter:l,onMouseLeave:l,children:[Object(v.jsx)(i.b,{fontSize:"14",fontWeight:"medium",as:"summary",children:"Buy now"}),Object(v.jsx)(he,{hovered:a,checked:t,onClick:o})]})})]})},we=(n(1812),n(97)),Oe=n(233);t.default=function(){var e=Object(we.h)().contractAddress,t=Object(x.d)(),n=Object(x.c)(),r=Object(c.a)(n,2),s=r[0],a=r[1],l=Object(J.useQuery)(["collectionStats",e],(function(){return Object(V.b)(e)})).data,o=Object(Oe.b)({gridX:s?332:0,gridWidthOffset:s?332:0}),d=o.gridX,u=o.gridWidthOffset;return Object(v.jsxs)(h.b,{width:"full",children:[Object(v.jsx)(i.b,{width:"full",height:"160",children:Object(v.jsx)(i.b,{as:"img",maxHeight:"full",width:"full",src:null===l||void 0===l?void 0:l.bannerImageUrl,className:"".concat("_1gskj8a1")})}),l&&Object(v.jsx)(h.c,{paddingLeft:"32",paddingRight:"32",children:Object(v.jsx)(ge,{stats:l,isMobile:t})}),Object(v.jsxs)(h.c,{alignItems:"flex-start",position:"relative",paddingX:"48",children:[Object(v.jsx)(i.b,{position:"sticky",top:"72",width:"0",children:s&&Object(v.jsx)(fe,{})}),Object(v.jsxs)(i.a,{style:{transform:d.interpolate((function(e){return"translate(".concat(e,"px)")})),width:u.interpolate((function(e){return"calc(100% - ".concat(e,"px)")}))},children:[Object(v.jsx)(i.a,{position:"sticky",top:"72",width:"full",zIndex:"3",children:Object(v.jsx)(i.b,{backgroundColor:"white08",width:"full",paddingBottom:"8",style:{backdropFilter:"blur(24px)"},children:Object(v.jsx)(h.c,{marginTop:"12",gap:"12",children:Object(v.jsx)(be.a,{isMobile:t,isFiltersExpanded:s,onClick:function(){return a(!s)}})})})}),e&&Object(v.jsx)(Q,{contractAddress:e})]})]})]})}}}]);
//# sourceMappingURL=6.ba8affc9.chunk.js.map