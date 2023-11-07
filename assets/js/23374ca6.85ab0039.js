"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8421],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6527:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(3117),n=(o(7294),o(3905));const i={id:"tev2-readme",sidebar_label:"Contributing",date:20220402},a="Contributing to TEv2 Tools",s={unversionedId:"tev2-readme",id:"tev2-readme",title:"Contributing to TEv2 Tools",description:"This documentation is based on the ToIP TT-Tools Proposal memo, which we currently keep as a reference.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/tev2-specifications/docs/",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/README.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1699351461,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"tev2-readme",sidebar_label:"Contributing",date:20220402}},c={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contributing-to-tev2-tools"},"Contributing to TEv2 Tools"),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This documentation is based on the ",(0,n.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/toip-terminology-toolbox"},"ToIP TT-Tools Proposal")," memo, which we currently keep as a reference.")),(0,n.kt)("p",null,"The '",(0,n.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2"},"Terminology Engine v2 (TEv2)"),"' consists of two parts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/tev2-toolbox"},"Terminology Toolbox")," is a set of (extendable) command-line tools that can be used for generic purposes, such as resolving ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermReferences"),", and creating glossaries."),(0,n.kt)("li",{parentName:"ol"},"The use of these, and other tools (in our case: ",(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://resources.github.com/ci-cd/"},"github CI/CD"),"), for facilitating the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curation")," of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," by ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms communities"),".")),(0,n.kt)("p",null,"We are seeking parties that can contribute to the development of these (extendable) command-line tools, and do so in close collaboration with the eSSIF-Lab consortium. Please express your interest as an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/tev2-specifications/issues"},"issue in the eSSIF-Lab repo"),"."))}u.isMDXComponent=!0}}]);