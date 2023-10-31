"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5797],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),h=n,f=m["".concat(c,".").concat(h)]||m[h]||l[h]||r;return a?o.createElement(f,i(i({ref:t},p),{},{components:a})):o.createElement(f,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4863:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=a(4996),s=["components"],c={id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},d="Machine Readable Dictionary Generation Tool",p={unversionedId:"spec-tools-envisaged/mrdt",id:"spec-tools-envisaged/mrdt",title:"Machine Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/spec-tools-envisaged/31-mrdt.md",sourceDirName:"spec-tools-envisaged",slug:"/spec-tools-envisaged/mrdt",permalink:"/tev2-specifications/docs/spec-tools-envisaged/mrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools-envisaged/31-mrdt.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1698762855,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:31,frontMatter:{id:"mrdt",sidebar_label:"MR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"Previous HRGT spec",permalink:"/tev2-specifications/docs/spec-tools-envisaged/hrgt-deprecated"},next:{title:"HR Dictionary Generation",permalink:"/tev2-specifications/docs/spec-tools-envisaged/hrdt"}},l={},m=[],h={toc:m};function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"machine-readable-dictionary-generation-tool"},"Machine Readable Dictionary Generation Tool"),(0,r.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrdt",hovertext:"Machine Readable Dictionary Tool (MRDT): a software tool designed to create, manage, and process Machine Readable Dictionaries (MRDs)."},"MRDT"),")")," generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"MRD"),") of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that originate from different (versions of) ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies"),", from various ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),". The inventory has a specific, well-defined ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-files/mrd"},"format"),". Like ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs"),", the contents of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"MRDs")," is determined by a list of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-selection-instruction",hovertext:"Term Selection Instruction: an instruction that is used to select one or more Terms for the purpose of processing their documentation, e.g., to create an MRG."},"term selection instructions"),", which specify the (sets of) terms that are to be included."),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"MRDs")," are meant to be processed by the other tools in the [toolbox](/docs/tev2-toolbox), specifically by one of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/hrdt",hovertext:"Human Readable Dictionary Tool (HRDT): a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs)."},"HRDTs"),", which would then create a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"Human Readable Dictionary")," (or ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRD"),").",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"MRDs")," can typically used to enable the creation of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRDs")," that are fit for specific purposes, e.g. for comparing ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between different ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", which helps e.g. when aligning ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between them. Also they can be used to provide an overview of what various ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," utilize specific terms for (education). And there's certainly going to be more such purposes.",(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The specifications of this tool need to be authored.\nIt is suggested to look at the MRGT-specs, and adapt that text.")))}f.isMDXComponent=!0}}]);