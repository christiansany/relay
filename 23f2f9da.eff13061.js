(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1171)),o={id:"classic-api-reference-relay-store",title:"Relay.Store",original_id:"classic-api-reference-relay-store"},c={unversionedId:"classic-api-reference-relay-store",id:"version-classic/classic-api-reference-relay-store",isDocsHomePage:!1,title:"Relay.Store",description:"The Relay Store provides an API for dispatching mutations to the server.",source:"@site/versioned_docs/version-classic/Classic-APIReference-Store.md",slug:"/classic-api-reference-relay-store",permalink:"/docs/classic/classic-api-reference-relay-store",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-classic/Classic-APIReference-Store.md",version:"classic",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1615322132,sidebar:"version-classic/docs",previous:{title:"Relay.PropTypes",permalink:"/docs/classic/classic-api-reference-relay-proptypes"},next:{title:"RelayMutationRequest",permalink:"/docs/classic/classic-interfaces-relay-mutation-request"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Methods",id:"methods",children:[{value:"commitUpdate (static method)",id:"commitupdate-static-method",children:[]},{value:"applyUpdate (static method)",id:"applyupdate-static-method",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Relay ",Object(i.b)("inlineCode",{parentName:"p"},"Store")," provides an API for dispatching mutations to the server."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Methods")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#commitupdate-static-method"},Object(i.b)("pre",null,"static commitUpdate(mutation, callbacks)"),"Initiate processing of a mutation.")),Object(i.b)("li",null,Object(i.b)("a",{href:"#applyupdate-static-method"},Object(i.b)("pre",null,"static applyUpdate(mutation, callbacks)"),"Adds a MutationTransaction to the queue without committing it."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Equivalent ",Object(i.b)("inlineCode",{parentName:"p"},"applyUpdate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"commitUpdate")," methods are also\nprovided on the ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.relay")," prop that is passed to components by\n",Object(i.b)("inlineCode",{parentName:"p"},"Relay.Container"),". These dispatch mutations in the context of the currently\nactive ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.Environment"),"."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"commitupdate-static-method"},"commitUpdate (static method)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic commitUpdate(mutation: RelayMutation, callbacks: {\n  onFailure?: (transaction: RelayMutationTransaction) => void;\n  onSuccess?: (response: Object) => void;\n}): RelayMutationTransaction\n\n// Argument to `onFailure` callback\ntype Transaction = {\n  getError(): ?Error;\n}\n\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"commitUpdate")," method is analogous to dispatching an action in Flux. Relay processes\nthe mutation as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the mutation defines an optimistic payload - a set of data to apply locally while waiting for the server response - Relay applies this change and updates any affected React components (note that optimistic updates do not overwrite known server data in the cache)."),Object(i.b)("li",{parentName:"ul"},"If the mutation would not 'collide' (overlap) with other pending mutations - as specified by its ",Object(i.b)("inlineCode",{parentName:"li"},"getCollisionKey")," implementation - it is sent to the server. If it would conflict, it is enqueued until conflicting mutations have completed."),Object(i.b)("li",{parentName:"ul"},"When the server response is received, one of the callbacks is invoked:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onSuccess")," is called if the mutation succeeded."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onFailure")," is called if the mutation failed.")))),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nvar onSuccess = () => {\n  console.log('Mutation successful!');\n};\nvar onFailure = (transaction) => {\n  var error = transaction.getError() || new Error('Mutation failed.');\n  console.error(error);\n};\nvar mutation = new MyMutation({...});\n\nRelay.Store.commitUpdate(mutation, {onFailure, onSuccess});\n\n")),Object(i.b)("h3",{id:"applyupdate-static-method"},"applyUpdate (static method)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic applyUpdate(mutation: RelayMutation, callbacks: {\n  onFailure?: (transaction: RelayMutationTransaction) => void;\n  onSuccess?: (response: Object) => void;\n}): RelayMutationTransaction\n\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"applyUpdate")," adds a mutation just like ",Object(i.b)("inlineCode",{parentName:"p"},"update"),", but does not commit it. It returns a ",Object(i.b)("inlineCode",{parentName:"p"},"RelayMutationTransaction")," that can be committed or rollbacked."),Object(i.b)("p",null,"When the transaction is committed and the response is received from the server, one of the callbacks is invoked:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onSuccess")," is called if the mutation succeeded."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onFailure")," is called if the mutation failed.")),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nvar onSuccess = () => {\n  console.log('Mutation successful!');\n};\nvar onFailure = (transaction) => {\n  var error = transaction.getError() || new Error('Mutation failed.');\n  console.error(error);\n};\nvar mutation = new MyMutation({...});\n\nvar transaction = Relay.Store.applyUpdate(mutation, {onFailure, onSuccess});\n\ntransaction.commit();\n\n")))}p.isMDXComponent=!0}}]);