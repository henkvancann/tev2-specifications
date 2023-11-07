"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(r),h=o,f=m["".concat(c,".").concat(h)]||m[h]||p[h]||n;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,mark:()=>p,metadata:()=>c,toc:()=>l});var a=r(3117),o=(r(7294),r(3905)),n=r(4996);const i={id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},s="Human Readable Dictionary Generation Tool",c={unversionedId:"spec-tools-envisaged/hrdt",id:"spec-tools-envisaged/hrdt",title:"Human Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/spec-tools-envisaged/32-hrdt.md",sourceDirName:"spec-tools-envisaged",slug:"/spec-tools-envisaged/hrdt",permalink:"/tev2-specifications/docs/spec-tools-envisaged/hrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools-envisaged/32-hrdt.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1699351461,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:32,frontMatter:{id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"MR Dictionary Generation",permalink:"/tev2-specifications/docs/spec-tools-envisaged/mrdt"},next:{title:"TEv2 - Glossary and Mental Models",permalink:"/tev2-specifications/docs/tev2-glossary"}},d={},l=[],p=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},m={toc:l,mark:p};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"human-readable-dictionary-generation-tool"},"Human Readable Dictionary Generation Tool"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrdt",hovertext:"Human Readable Dictionary Tool (HRDT): a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs)."},"HRDT"),")")," generates a Human Readable ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/dictionary",hovertext:"Dictionary: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"Dictionary")," (",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRD"),"), that renders the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," from a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. (see also: ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"Using the Tools"),")."),(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRDs")," can be created for different purposes, e.g. to - compare ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between different ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", which helps e.g. when aligning ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between them. - provide an overview of what various ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," utilize specific ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," for (education).",(0,o.kt)("p",null,"And there's certainly going to be more such purposes."),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before this tool can really be properly specified, it may help to do some experiments to see what is really needed in order to keep it as simple as possible, and only then start proper specifications.")))}h.isMDXComponent=!0}}]);