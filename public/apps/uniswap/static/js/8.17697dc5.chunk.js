(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[8],{1671:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=new Set(["mp3","wav"]),a=function(e){if(!e)return!1;var t=e.substring(e.lastIndexOf(".")+1);return n.has(t)}},1672:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(1673),a=function(e){return void 0!==n.find((function(t){return null===e||void 0===e?void 0:e.endsWith(".".concat(t))}))}},1673:function(e){e.exports=JSON.parse('["3g2","3gp","aaf","asf","avchd","avi","drc","flv","m2v","m3u8","m4p","m4v","mkv","mng","mov","mp2","mp4","mpe","mpeg","mpg","mpv","mxf","nsv","ogg","ogv","qt","rm","rmvb","roq","svi","vob","webm","wmv","yuv"]')},1822:function(e,t,r){},1823:function(e,t,r){},1824:function(e,t,r){},1831:function(e,t,r){"use strict";r.r(t);var n,a=r(4),c=r.n(a),i=r(15),o=r(11),s=r(6),l=r(7),d=r(232),j=r(333),b=r(642),u=r.n(b),m=r(1),O=r(1665),h=r.n(O),g=r(357),f=r(98),p=r(58),x=r(233),w=r(75),v=r(81),y=r(294),k=r(112),z=r(141),N=r(0),S=["label","isVerified","name","avatarUrl"],C=function(e){var t=e.label,r=e.isVerified,n=e.name,a=e.avatarUrl,c=Object(v.a)(e,S);return Object(N.jsxs)(k.c,Object(s.a)(Object(s.a)({},c),{},{children:[a?Object(N.jsx)(w.b,{as:"img",src:a,height:"36",width:"36",marginRight:"12",borderRadius:"round"}):Object(N.jsx)(w.b,{role:"img",background:"fallbackGradient",height:"36",width:"36",marginRight:"12",borderRadius:"round"}),Object(N.jsxs)("div",{children:[Object(N.jsx)(w.b,{as:"span",color:"darkGray",style:{textTransform:"uppercase"},className:y.a,children:t}),Object(N.jsxs)(k.c,{marginTop:"4",className:y.l,color:"blackBlue",children:[n," ",r&&Object(N.jsx)(z.O,{})]})]})]}))},_=r(692),T=function(e){return Object(N.jsx)(w.b,Object(s.a)({as:"span",fontSize:"14",color:"darkGray"},e))},U=function(e){return Object(N.jsx)(w.b,Object(s.a)({as:"span",fontSize:"14",marginLeft:"4",color:"blackBlue"},e))},I=function(e){return Object(N.jsx)(k.c,Object(s.a)({justifyContent:"space-between",width:"full",style:{minWidth:"224px"}},e))},D=function(e){var t=e.contractAddress,r=e.tokenId,n=e.metadataUrl,a=e.tokenType,c=e.totalSupply,i=e.blockchain;return Object(N.jsxs)(k.c,{gap:{md:"32",sm:"16"},width:"full",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",children:[Object(N.jsxs)(k.b,{width:{sm:"full",md:"auto"},gap:"10",children:[Object(N.jsxs)(I,{children:[Object(N.jsx)(T,{children:"Contract Address: "}),Object(N.jsx)("a",{href:"https://etherscan.io/token/".concat(t),target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:Object(N.jsx)(U,{children:Object(_.a)(t)})})]}),Object(N.jsxs)(I,{children:[Object(N.jsx)(T,{children:"Token ID:"}),Object(N.jsx)(U,{className:y.c,children:r})]}),n?Object(N.jsxs)(I,{children:[Object(N.jsx)(T,{children:"Metadata:"}),Object(N.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:Object(N.jsxs)(U,{children:[n.slice(0,12),"..."]})})]}):null]}),Object(N.jsxs)(k.b,{width:{sm:"full",md:"auto"},gap:"10",children:[Object(N.jsxs)(I,{children:[Object(N.jsx)(T,{children:"Contract type:"}),Object(N.jsx)(U,{children:a})]}),Object(N.jsxs)(I,{children:[Object(N.jsx)(T,{children:"Total supply:"}),Object(N.jsx)(U,{children:c})]}),Object(N.jsxs)(I,{children:[Object(N.jsx)(T,{children:"Blockchain:"}),Object(N.jsx)(U,{children:i})]})]})]})},W=(r(327),r(1822),function(e){var t=e.label,r=e.value;return Object(N.jsxs)(k.b,{backgroundColor:"lightGray",padding:"16",gap:"4",borderRadius:"12",children:[Object(N.jsx)(w.b,{as:"span",className:y.a,color:"darkGray",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",style:{textTransform:"uppercase"},maxWidth:{sm:"120",md:"160"},children:t}),Object(N.jsx)(w.b,{as:"span",color:"blackBlue",fontSize:"16",fontWeight:"normal",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:{sm:"120",md:"160"},children:r})]})}),A=function(e){var t=e.traits,r=e.collectionAddress;return Object(N.jsx)("div",{className:"jlqf4v1 rgw6ez3ne rgw6ez3yq",children:0===t.length?"No traits":t.map((function(e){var t=u.a.stringify({traits:['("'.concat(e.trait_type,'","').concat(e.value,'")')]},{arrayFormat:"comma"});return Object(N.jsx)("a",{href:"#/nfts/collection/".concat(r,"?").concat(t),style:{textDecoration:"none"},children:Object(N.jsx)(W,{label:e.trait_type,value:e.value})},"".concat(e.trait_type,"-").concat(e.value))}))})},B=(r(1823),["children"]),G=function(e){return Object(N.jsx)(w.b,Object(s.a)({as:"button",display:"inline",fontWeight:"bold",border:"none",fontSize:"14",color:"darkGray",padding:"0",background:"transparent"},e))},V=function(e){var t=e.children,r=Object(v.a)(e,B),n=Object(m.useState)(!1),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(N.jsx)(w.b,Object(s.a)(Object(s.a)({display:"flex",flexDirection:c?"column":"row",alignItems:c?"flex-start":"flex-end",justifyContent:"flex-start",fontSize:"14",color:"darkGray",marginTop:"0",marginBottom:"20"},r),{},{children:Object(N.jsxs)("span",{className:Object(d.default)("_6nv3sp2",!c&&"_6nv3sp1 rgw6ez6km"),children:[t," ",c?Object(N.jsx)(G,{marginTop:c?"8":"unset",onClick:function(){return i(!c)},children:"Show less"}):Object(N.jsx)(G,{onClick:function(){return i(!c)},children:"Show more"})]})}))},R=r(78),q=r(222),E=r(601),M=r(1671),P=r(1672),J="/nft/logos/poprank.png",L={"Rarity Sniper":"/nft/svgs/gem.svg",Genie:J},F=(r(496),r(1824),"_1sld3o21 rgw6ez6bm rgw6ez1ae rgw6ez42"),H="_1sld3o25 rgw6ezc8 rgw6ezae rgw6ez462 rgw6ez6iq rgw6ez2mw rgw6ez4k8",Q="_1sld3o29",K=function(e){var t,r=e.imageUrl,n=e.animationUrl,a=e.name,c=e.collectionName,i=e.dominantColor;return Object(N.jsxs)(w.b,{position:"relative",display:"inline-block",alignSelf:"center",children:[Object(N.jsx)(w.b,{as:"audio",className:"_1sld3o2b",width:"292",controls:!0,src:n}),Object(N.jsx)("img",{className:F,src:r,alt:a||c,style:(t={},Object(l.a)(t,"--shadow","rgba(".concat(i.join(", "),", 0.5)")),Object(l.a)(t,"minWidth","300px"),Object(l.a)(t,"minHeight","300px"),t)})]})},X=function(e){var t=e.mediaType,r=e.asset,n=e.dominantColor,a=Object(l.a)({},"--shadow","rgba(".concat(n.join(", "),", 0.5)"));switch(t){case"video":return Object(N.jsx)("video",{src:r.animationUrl,className:F,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:a});case"image":return Object(N.jsx)("img",{className:F,src:r.imageUrl,alt:r.name||r.collectionName,style:a});case"audio":return Object(N.jsx)(K,Object(s.a)(Object(s.a)({},r),{},{dominantColor:n}))}};!function(e){e.Audio="audio",e.Video="video",e.Image="image"}(n||(n={}));t.default=function(){var e,t,r,a=Object(f.h)(),s=a.tokenId,b=void 0===s?"":s,O=a.contractAddress,v=void 0===O?"":O,S=Object(g.useQuery)(["assetDetail",v,b],(function(){return Object(E.f)({contractAddress:v,tokenId:b})})).data,T=Object(f.f)(),U=T.pathname,I=T.search,W=Object(f.g)(),B=Object(q.a)((function(e){return e.bagExpanded})),G=Object(m.useState)(""),J=Object(o.a)(G,2),K=J[0],Y=J[1],Z=Object(m.useState)(""),$=Object(o.a)(Z,2),ee=$[0],te=$[1],re=Object(m.useState)([0,0,0]),ne=Object(o.a)(re,1)[0],ae=Object(j.a)(K),ce=Object(j.a)(ee),ie=u.a.parse(I),oe=Object(m.useMemo)((function(){return S?S[0]:{}}),[S]),se=Object(m.useMemo)((function(){return S?S[1]:{}}),[S]),le=Object(x.b)({gridWidthOffset:B?324:0}).gridWidthOffset,de=Object(m.useState)(!0),je=Object(o.a)(de,2),be=je[0],ue=je[1];Object(m.useEffect)((function(){oe.creator&&Y(oe.creator.address),oe.owner&&te(oe.owner)}),[oe]);var me=Object(m.useMemo)((function(){return oe.rarity?{rarityProvider:oe.rarity.providers.find((function(e){var t;return e.provider===(null===(t=oe.rarity)||void 0===t?void 0:t.primaryProvider)})),rarityLogo:L[oe.rarity.primaryProvider]||""}:{}}),[oe.rarity]).rarityProvider,Oe=Object(m.useMemo)((function(){return Object(M.a)(oe.animationUrl)?n.Audio:Object(P.a)(oe.animationUrl)?n.Video:n.Image}),[oe]);return Object(N.jsx)(w.a,{style:{width:le.interpolate((function(e){return"calc(100% - ".concat(e,"px)")}))},className:"_1sld3o22 rgw6ez3y8 rgw6ez412 rgw6ez2w",children:Object(N.jsxs)("div",{className:"_1sld3o28 rgw6ez3y8 rgw6ez40e rgw6ez412 rgw6ez142 rgw6ez27w rgw6ez28g rgw6ez29n rgw6ez2de rgw6ez2dy rgw6ez2f5 rgw6ez22e rgw6ez22y rgw6ez245 rgw6ez2iw rgw6ez3o8 rgw6ez3o4 rgw6ez3p5",children:[Object(N.jsx)(k.b,{className:Q,children:Oe===n.Image?Object(N.jsx)("img",{className:F,src:oe.imageUrl,alt:oe.name||se.collectionName,style:Object(l.a)({},"--shadow","rgba(".concat(ne.join(", "),", 0.5)"))}):Object(N.jsx)(X,{asset:oe,mediaType:Oe,dominantColor:ne})}),Object(N.jsx)(k.b,{className:Object(d.default)(Q,"_1sld3o2a"),width:"full",children:Object(N.jsxs)(k.b,{children:[Object(N.jsx)(k.c,{marginBottom:"8",alignItems:"center",justifyContent:me?"space-between":"flex-end",children:Object(N.jsxs)(k.c,{gap:"12",children:[Object(N.jsx)(k.a,{as:"button",padding:"0",border:"none",background:"transparent",onClick:Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(window.location.hostname+U);case 2:case"end":return e.stop()}}),e)}))),children:Object(N.jsx)(z.F,{})}),Object(N.jsx)(k.a,{as:"button",border:"none",width:"32",height:"32",padding:"0",background:"transparent",cursor:"pointer",onClick:function(){ie.origin&&"collection"!==ie.origin?"sell"===ie.origin?W("/nft/sell",void 0):"explore"===ie.origin?W("/nft",void 0):"activity"===ie.origin&&W("/nft/collection/".concat(oe.address,"/activity"),void 0):W("/nft/collection/".concat(oe.address),void 0)},children:ie.origin?Object(N.jsx)(z.l,{width:"28",height:"28"}):Object(N.jsx)(z.k,{color:R.c.colors.darkGray})})]})}),Object(N.jsx)(k.c,{as:"h1",marginTop:"0",marginBottom:"12",gap:"2",className:y.h,children:oe.name||"".concat(se.collectionName," #").concat(oe.tokenId)}),se.collectionDescription?Object(N.jsx)(V,{children:Object(N.jsx)(h.a,{allowedTypes:["link","paragraph","strong","code","emphasis","text"],source:se.collectionDescription})}):null,Object(N.jsxs)(k.c,{justifyContent:{sm:"space-between"},gap:{sm:"unset"},marginBottom:"36",children:[ee.length>0&&Object(N.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://etherscan.io/address/".concat(oe.owner),style:{textDecoration:"none"},children:Object(N.jsx)(C,{label:"Owner",avatarUrl:"",name:null!==(e=ce.ENSName)&&void 0!==e?e:Object(_.a)(ee,0,4)})}),Object(N.jsx)(p.b,{to:"/collection/".concat(oe.address),style:{textDecoration:"none"},children:Object(N.jsx)(C,{label:"Collection",avatarUrl:se.collectionImageUrl,name:se.collectionName,isVerified:se.isVerified})}),K?Object(N.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://etherscan.io/address/".concat(K),style:{textDecoration:"none"},children:Object(N.jsx)(C,{label:"Creator",avatarUrl:oe.creator.profile_img_url,name:null!==(t=ae.ENSName)&&void 0!==t?t:Object(_.a)(K,0,4),isVerified:!0,className:"_1sld3o26"})}):null]}),Object(N.jsxs)(k.c,{gap:"32",marginBottom:"20",children:[Object(N.jsx)("button",{"data-active":be,onClick:function(){return ue(!0)},className:H,children:"Traits"}),Object(N.jsx)("button",{"data-active":!be,onClick:function(){return ue(!1)},className:H,children:"Details"})]}),be?Object(N.jsx)(A,{collectionAddress:oe.address,traits:null!==(r=oe.traits)&&void 0!==r?r:[]}):Object(N.jsx)(D,{contractAddress:v,tokenId:b,tokenType:oe.tokenType,blockchain:"Ethereum",metadataUrl:oe.externalLink,totalSupply:se.totalSupply})]})})]})})}}}]);
//# sourceMappingURL=8.17697dc5.chunk.js.map