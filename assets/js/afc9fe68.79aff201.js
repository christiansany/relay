(self.webpackChunk=self.webpackChunk||[]).push([[90900],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var r=t(79973),a=t(67294),i=t(73727),o=t(52263),l=t(13919),s=t(10412),d=(0,a.createContext)({collectLink:function(){}}),c=t(44996),p=t(18780),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var n,t,m=e.isNavLink,h=e.to,f=e.href,g=e.activeClassName,y=e.isActive,v=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,b=void 0===x||x,w=(0,r.Z)(e,u),C=(0,o.default)().siteConfig,N=C.trailingSlash,O=C.baseUrl,_=(0,c.useBaseUrlUtils)().withBaseUrl,q=(0,a.useContext)(d),k=h||f,D=(0,l.Z)(k),j=null==k?void 0:k.replace("pathname://",""),E=void 0!==j?(t=j,b&&function(e){return e.startsWith("/")}(t)?_(t):t):void 0;E&&D&&(E=(0,p.applyTrailingSlash)(E,{trailingSlash:N,baseUrl:O}));var T=(0,a.useRef)(!1),R=m?i.OL:i.rU,F=s.default.canUseIntersectionObserver,P=(0,a.useRef)();(0,a.useEffect)((function(){return!F&&D&&null!=E&&window.docusaurus.prefetch(E),function(){F&&P.current&&P.current.disconnect()}}),[P,E,F,D]);var L=null!==(n=null==E?void 0:E.startsWith("#"))&&void 0!==n&&n,S=!E||!D||L;return E&&D&&!L&&!v&&q.collectLink(E),S?a.createElement("a",Object.assign({href:E},k&&!D&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(R,Object.assign({},w,{onMouseEnter:function(){T.current||null==E||(window.docusaurus.preload(E),T.current=!0)},innerRef:function(e){var n,t;F&&e&&D&&(n=e,t=function(){null!=E&&window.docusaurus.prefetch(E)},P.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.current.unobserve(n),P.current.disconnect(),t())}))})),P.current.observe(n))},to:E||""},m&&{isActive:y,activeClassName:g}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>a})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>o});var r=t(52263),a=t(13919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,d=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+c:c}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var a=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var r=t(36742),a=t(44256),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(s,null),i.createElement(c,null))},u=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(c,null))};const m=function(){return(0,a.fbContent)({internal:i.createElement(p,null),external:i.createElement(u,null)})}},7016:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>v});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o=t(68629),l=t(44256),s=["components"],d={id:"compiler",title:"Relay Compiler",slug:"/guides/compiler/",description:"Relay guide to the compiler",keywords:["compiler"]},c=void 0,p={unversionedId:"guides/compiler",id:"version-v12.0.0/guides/compiler",isDocsHomePage:!1,title:"Relay Compiler",description:"Relay guide to the compiler",source:"@site/versioned_docs/version-v12.0.0/guides/compiler.md",sourceDirName:"guides",slug:"/guides/compiler/",permalink:"/docs/v12.0.0/guides/compiler/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guides/compiler.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1657255960,formattedLastUpdatedAt:"7/8/2022",frontMatter:{id:"compiler",title:"Relay Compiler",slug:"/guides/compiler/",description:"Relay guide to the compiler",keywords:["compiler"]},sidebar:"version-v12.0.0/docs",previous:{title:"GraphQL Server Specification",permalink:"/docs/v12.0.0/guides/graphql-server-specification/"},next:{title:"Type Emission",permalink:"/docs/v12.0.0/guides/type-emission/"}},u=[{value:"<code>graphql</code>",id:"graphql",children:[],level:2},{value:"Compiler",id:"compiler",children:[{value:"GraphQL Schema",id:"graphql-schema",children:[],level:3},{value:"Running the Compiler",id:"running-the-compiler",children:[],level:3},{value:"Importing generated definitions",id:"importing-generated-definitions",children:[],level:3}],level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},h=m("FbGraphQLSchema"),f=m("FbRunningCompiler"),g=m("FbImportingGeneratedDefinitions"),y={toc:u};function v(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"graphql"},(0,i.mdx)("inlineCode",{parentName:"h2"},"graphql")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," template tag provided by Relay serves as the mechanism to write queries, fragments, mutations and subscriptions in the ",(0,i.mdx)("a",{parentName:"p",href:"http://graphql.org/learn/"},"GraphQL")," language. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {graphql} from 'react-relay';\n\ngraphql`\n  query MyQuery {\n    viewer {\n      id\n    }\n  }\n`;\n")),(0,i.mdx)("p",null,"The result of using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," template tag is a ",(0,i.mdx)("inlineCode",{parentName:"p"},"GraphQLTaggedNode"),"; a runtime representation of the GraphQL document."),(0,i.mdx)("p",null,"Note that ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," template tags are ",(0,i.mdx)("strong",{parentName:"p"},"never executed at runtime"),". Instead, they are compiled ahead of time by the Relay compiler into generated artifacts that live alongside your source code, and which Relay requires to operate at runtime."),(0,i.mdx)("h2",{id:"compiler"},"Compiler"),(0,i.mdx)("p",null,"Relay uses the Relay Compiler to convert ",(0,i.mdx)("a",{parentName:"p",href:"#graphql"},(0,i.mdx)("inlineCode",{parentName:"a"},"graphql"))," literals into generated files that live alongside your source files."),(0,i.mdx)("p",null,"A fragment like the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  fragment MyComponent on Type {\n    field\n  }\n`\n")),(0,i.mdx)("p",null,"Will cause a generated file to appear in ",(0,i.mdx)("inlineCode",{parentName:"p"},"./__generated__/MyComponent.graphql.js"),",\nwith both runtime artifacts (which help to read and write from the Relay Store)\nand ",(0,i.mdx)("a",{parentName:"p",href:"https://flow.org/"},"Flow types")," to help you write type-safe code."),(0,i.mdx)("p",null,"The Relay Compiler is responsible for generating code as part of a build step which can then be referenced at runtime. By building the query ahead of time, the Relay's runtime is not responsible for generating a query string, and various optimizations can be performed on the query that could be too expensive at runtime (for example, fields that are duplicated in the query can be merged during the build step, to improve efficiency of processing the GraphQL response)."),(0,i.mdx)("h3",{id:"graphql-schema"},"GraphQL Schema"),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(h,{mdxType:"FbGraphQLSchema"})),(0,i.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"To use the Relay Compiler, you need either a ",(0,i.mdx)("inlineCode",{parentName:"p"},".graphql")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},".json")," ",(0,i.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"GraphQL Schema")," file, describing your GraphQL server's API. Typically these files are local representations of a server source of truth and are not edited directly. For example, we might have a ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.graphql")," like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Root\n}\n\ntype Root {\n  dictionary: [Word]\n}\n\ntype Word {\n  id: String!\n  definition: WordDefinition\n}\n\ntype WordDefinition {\n  text: String\n  image: String\n}\n"))),(0,i.mdx)("h3",{id:"running-the-compiler"},"Running the Compiler"),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(f,{mdxType:"FbRunningCompiler"})),(0,i.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Additionally, you need a directory containing ",(0,i.mdx)("inlineCode",{parentName:"p"},".js")," files that use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," tag to describe GraphQL queries and fragments. Let's call this ",(0,i.mdx)("inlineCode",{parentName:"p"},"./src"),"."),(0,i.mdx)("p",null,"Then run ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn run relay")," as set up before."),(0,i.mdx)("p",null,"This will create a series of ",(0,i.mdx)("inlineCode",{parentName:"p"},"__generated__")," directories that are co-located with the corresponding files containing ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," tags."),(0,i.mdx)("p",null,"For example, given the two files:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Components/DictionaryComponent.js"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryWordFragment = graphql`\n  fragment DictionaryComponent_word on Word {\n    id\n    definition {\n      ...DictionaryComponent_definition\n    }\n  }\n`\n\nconst DictionaryDefinitionFragment = graphql`\n  fragment DictionaryComponent_definition on WordDefinition {\n    text\n    image\n  }\n`\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Queries/DictionaryQuery.js"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryQuery = graphql`\n  query DictionaryQuery {\n    dictionary {\n      ...DictionaryComponent_word\n    }\n  }\n`\n")),(0,i.mdx)("p",null,"This would produce three generated files, and two ",(0,i.mdx)("inlineCode",{parentName:"p"},"__generated__")," directories:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_word.graphql.js")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_definition.graphql.js")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"src/Queries/__generated__/DictionaryQuery.graphql.js")))),(0,i.mdx)("h3",{id:"importing-generated-definitions"},"Importing generated definitions"),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbImportingGeneratedDefinitions"})),(0,i.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Typically you will not need to import your generated definitions. The ",(0,i.mdx)("a",{parentName:"p",href:"../../getting-started/installation-and-setup#setup-babel-plugin-relay"},"Relay Babel plugin")," will then convert the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",(0,i.mdx)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),(0,i.mdx)("p",null,"However the Relay Compiler also automatically generates ",(0,i.mdx)("a",{parentName:"p",href:"https://flow.org"},"Flow")," types as ",(0,i.mdx)("a",{parentName:"p",href:"https://flow.org/en/docs/types/comments/"},"type comments"),". For example, you can import the generated Flow types like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import type {DictionaryComponent_word} from './__generated__/DictionaryComponent_word.graphql';\n")),(0,i.mdx)("p",null,"More rarely, you may need to access a query, mutation, fragment or subscription from multiple files. In these cases, you can also import it directly:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import DictionaryComponent_word from './__generated__/DictionaryComponent_word.graphql';\n"))),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0}}]);