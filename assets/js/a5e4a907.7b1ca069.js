"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8979],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=r.createContext({}),h=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),d=h(o),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return o?r.createElement(m,a(a({ref:t},l),{},{components:o})):r.createElement(m,a({ref:t},l))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,a=new Array(s);a[0]=d;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:i,a[1]=n;for(var h=2;h<s;h++)a[h]=o[h];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6289:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>h});var r=o(3117),i=(o(7294),o(3905));o(4996);const s={id:"overview-spec-tools",sidebar_label:"overview",date:20231031},a="Overview - TEv2 Terminology Tools (existing)",n={unversionedId:"spec-tools/overview-spec-tools",id:"spec-tools/overview-spec-tools",title:"Overview - TEv2 Terminology Tools (existing)",description:"As mentioned in the TEv2 overview, the toolbox contains a number of tools. The ones that exist (or are sufficiently mature to use) include:",source:"@site/docs/spec-tools/00-overview-spec-tools.md",sourceDirName:"spec-tools",slug:"/spec-tools/overview-spec-tools",permalink:"/tev2-specifications/docs/spec-tools/overview-spec-tools",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/00-overview-spec-tools.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701079847,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:0,frontMatter:{id:"overview-spec-tools",sidebar_label:"overview",date:20231031},sidebar:"tev2SideBar",previous:{title:"MRG Term Selection",permalink:"/tev2-specifications/docs/spec-syntax/mrg-term-selection-syntax"},next:{title:"overview",permalink:"/tev2-specifications/docs/spec-tools/overview-spec-tools"}},c={},h=[],l={toc:h};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview---tev2-terminology-tools-existing"},"Overview - TEv2 Terminology Tools (existing)"),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/overview-tev2"},"TEv2 overview"),", the toolbox contains a number of tools. The ones that exist (or are sufficiently mature to use) include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("strong",{parentName:"p"},"Term Ref(erence) Resolution Tool (",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),")"),". This tool takes files that contain so-called ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," and outputs a copy of these files in which these ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," are converted into so-called ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",hovertext:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),", i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/reader",hovertext:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," to quickly find more explanations of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that is being referenced.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("strong",{parentName:"p"},"MRG Importer (",(0,i.kt)("a",{parentName:"strong",href:"@"},"MRG importer"),")"),". This tool serves to get any ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," that may be needed within a particular ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", and make it available in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),". The idea behind this is that various tools that may need such ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs")," would not need to include such code. Further details are in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/spec-tools/mrg-import"},"MRG importer specs"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrgt",hovertext:"MRGT: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as [specified by TEv2](/docs/spec-tools/mrgt). MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT"),")"),". This tool reads the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," of a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to find the instructions by which it creates an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," for each of the versions of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that are maintained within that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."))),(0,i.kt)("p",null,"Other tools are ",(0,i.kt)("a",{parentName:"p",href:"/doc/tev2-toolbox-envisaged"},"envisaged"),"."))}p.isMDXComponent=!0}}]);