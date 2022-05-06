(self.webpackChunk=self.webpackChunk||[]).push([[6080,8710,97150,56435,78971],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){return function(t){var r=p(t.components);return n.createElement(e,a({},t,{components:r}))}},p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=i,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(79973),i=r(67294),a=r(73727),o=r(52263),s=r(13919),l=r(10412),c=(0,i.createContext)({collectLink:function(){}}),d=r(44996),p=r(18780),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,r,m=e.isNavLink,f=e.to,h=e.href,v=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,g=void 0===x||x,N=(0,n.Z)(e,u),C=(0,o.default)().siteConfig,w=C.trailingSlash,S=C.baseUrl,k=(0,d.useBaseUrlUtils)().withBaseUrl,U=(0,i.useContext)(c),D=f||h,T=(0,s.Z)(D),O=null==D?void 0:D.replace("pathname://",""),E=void 0!==O?(r=O,g&&function(e){return e.startsWith("/")}(r)?k(r):r):void 0;E&&T&&(E=(0,p.applyTrailingSlash)(E,{trailingSlash:w,baseUrl:S}));var A=(0,i.useRef)(!1),q=m?a.OL:a.rU,L=l.default.canUseIntersectionObserver,P=(0,i.useRef)();(0,i.useEffect)((function(){return!L&&T&&null!=E&&window.docusaurus.prefetch(E),function(){L&&P.current&&P.current.disconnect()}}),[P,E,L,T]);var M=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,j=!E||!T||M;return E&&T&&!M&&!y&&U.collectLink(E),j?i.createElement("a",Object.assign({href:E},D&&!T&&{target:"_blank",rel:"noopener noreferrer"},N)):i.createElement(q,Object.assign({},N,{onMouseEnter:function(){A.current||null==E||(window.docusaurus.preload(E),A.current=!0)},innerRef:function(e){var t,r;L&&e&&T&&(t=e,r=function(){null!=E&&window.docusaurus.prefetch(E)},P.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.current.unobserve(t),P.current.disconnect(),r())}))})),P.current.observe(t))},to:E||""},m&&{isActive:b,activeClassName:v}))}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>i})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var n=r(52263),i=r(13919);function a(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(s)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+d:d}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(36742),i=r(44256),a=r(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var l=function(){var e=a.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return a.createElement(s,null,a.createElement(c,null),a.createElement(l,null),a.createElement(d,null))},u=function(){return a.createElement(s,null,a.createElement(l,null),a.createElement(d,null))};const m=function(){return(0,i.fbContent)({internal:a.createElement(p,null),external:a.createElement(u,null)})}},85834:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>h});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o=r(68629),s=(r(44256),r(38085)),l=r(64070),c=["components"],d={id:"request-subscription",title:"requestSubscription",slug:"/api-reference/request-subscription/",description:"API reference for requestSubscription, which imperatively establishes a GraphQL subscription",keywords:["subscription"]},p=void 0,u={unversionedId:"api-reference/relay-runtime/request-subscription",id:"version-v13.0.0/api-reference/relay-runtime/request-subscription",isDocsHomePage:!1,title:"requestSubscription",description:"API reference for requestSubscription, which imperatively establishes a GraphQL subscription",source:"@site/versioned_docs/version-v13.0.0/api-reference/relay-runtime/request-subscription.md",sourceDirName:"api-reference/relay-runtime",slug:"/api-reference/request-subscription/",permalink:"/docs/api-reference/request-subscription/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/relay-runtime/request-subscription.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1651851511,formattedLastUpdatedAt:"5/6/2022",frontMatter:{id:"request-subscription",title:"requestSubscription",slug:"/api-reference/request-subscription/",description:"API reference for requestSubscription, which imperatively establishes a GraphQL subscription",keywords:["subscription"]},sidebar:"version-v13.0.0/docs",previous:{title:"commitMutation",permalink:"/docs/api-reference/commit-mutation/"},next:{title:"GraphQL Directives",permalink:"/docs/api-reference/graphql-and-directives/"}},m=[{value:"<code>requestSubscription</code>",id:"requestsubscription",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return Type",id:"return-type",children:[],level:3},{value:"Behavior",id:"behavior",children:[],level:3}],level:2}],f={toc:m};function h(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.mdx)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"requestsubscription"},(0,a.mdx)("inlineCode",{parentName:"h2"},"requestSubscription")),(0,a.mdx)("p",null,"Imperative API for establishing a GraphQL Subscription.\nSee also the ",(0,a.mdx)("a",{parentName:"p",href:"../use-subscription/"},(0,a.mdx)("inlineCode",{parentName:"a"},"useSubscription"))," API and the ",(0,a.mdx)("a",{parentName:"p",href:"../../guided-tour/updating-data/"},"Guide to Updating Data"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import {graphql, requestSubscription} from 'react-relay';\n\nconst subscription = graphql`\n  subscription UserDataSubscription($input: InputData!) {\n    # ...\n  }\n`;\n\nfunction createSubscription(environment: IEnvironment): Disposable {\n  return requestSubscription(environment, {\n    subscription,\n    variables: {input: {userId: '4'}},\n  });\n}\n")),(0,a.mdx)("h3",{id:"arguments"},"Arguments"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"environment"),": A Relay Environment"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"config"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"GraphQLSubscriptionConfig"))),(0,a.mdx)(s.default,{mdxType:"GraphQLSubscriptionConfig"}),(0,a.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"TSubscriptionPayload"),": The type of the payloads vended by the subscription. You should pass the flow type imported from the auto-generated ",(0,a.mdx)("inlineCode",{parentName:"li"},".graphql")," file corresponding to the subscription, e.g. use ",(0,a.mdx)("inlineCode",{parentName:"li"},"UserDataSubscription")," as the type parameter, from ",(0,a.mdx)("inlineCode",{parentName:"li"},"import type {UserDataSubscription} from './__generated__/UserDataSubscription.graphql'"),";")),(0,a.mdx)("h3",{id:"return-type"},"Return Type"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A ",(0,a.mdx)("a",{parentName:"li",href:"#interface-disposable"},(0,a.mdx)("inlineCode",{parentName:"a"},"Disposable"))," that clears the subscription.")),(0,a.mdx)(l.default,{mdxType:"Disposable"}),(0,a.mdx)("h3",{id:"behavior"},"Behavior"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Imperatively establish a subscription."),(0,a.mdx)("li",{parentName:"ul"},"See the ",(0,a.mdx)("a",{parentName:"li",href:"../../guided-tour/updating-data/graphql-subscriptions/"},"GraphQL Subscriptions Guide")," for a more detailed explanation of how to work with subscriptions.")),(0,a.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},55723:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o=["components"],s={},l=void 0,c={unversionedId:"api-reference/types/CacheConfig",id:"version-v13.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/api-reference/types/CacheConfig",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1651851511,formattedLastUpdatedAt:"5/6/2022",frontMatter:{}},d=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",children:[],level:4}],p={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,a.mdx)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}u.isMDXComponent=!0},64070:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o=["components"],s={},l=void 0,c={unversionedId:"api-reference/types/Disposable",id:"version-v13.0.0/api-reference/types/Disposable",isDocsHomePage:!1,title:"Disposable",description:"Interface Disposable",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/Disposable.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/Disposable",permalink:"/docs/api-reference/types/Disposable",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/Disposable.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1651851511,formattedLastUpdatedAt:"5/6/2022",frontMatter:{}},d=[{value:"Interface <code>Disposable</code>",id:"interface-disposable",children:[],level:4}],p={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"interface-disposable"},"Interface ",(0,a.mdx)("inlineCode",{parentName:"h4"},"Disposable")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An object with the following key:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"dispose"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"() => void"),". Disposes of the resource.")))))}u.isMDXComponent=!0},38085:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>f});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o=r(88842),s=r(55723),l=["components"],c={},d=void 0,p={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig",isDocsHomePage:!1,title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/docs/api-reference/types/GraphQLSubscriptionConfig",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1651851511,formattedLastUpdatedAt:"5/6/2022",frontMatter:{}},u=[{value:"Type <code>GraphQLSubscriptionConfig&lt;TSubscriptionPayload&gt;</code>",id:"type-graphqlsubscriptionconfigtsubscriptionpayload",children:[],level:4}],m={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,a.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"subscription"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",(0,a.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onNext"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,a.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),(0,a.mdx)(s.default,{mdxType:"CacheConfig"}),(0,a.mdx)(o.default,{mdxType:"SelectorStoreUpdater"}))}f.isMDXComponent=!0},88842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>m});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o=r(44996),s=["components"],l={},c=void 0,d={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v13.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1651851511,formattedLastUpdatedAt:"5/6/2022",frontMatter:{}},p=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",children:[],level:4}],u={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A function with signature ",(0,a.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,a.mdx)("li",{parentName:"ul"},"This interface allows you to ",(0,a.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,a.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,a.mdx)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,a.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}m.isMDXComponent=!0}}]);