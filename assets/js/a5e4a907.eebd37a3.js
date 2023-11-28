"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8979],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>f});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),d=l(o),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return o?i.createElement(m,r(r({ref:t},h),{},{components:o})):i.createElement(m,r({ref:t},h))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=o.length,r=new Array(s);r[0]=d;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:a,r[1]=n;for(var l=2;l<s;l++)r[l]=o[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6289:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var i=o(3117),a=(o(7294),o(3905));o(4996);const s={id:"overview-spec-tools",sidebar_label:"overview",date:20231031},r="Overview - TEv2 Terminology Tools (existing)",n={unversionedId:"spec-tools/overview-spec-tools",id:"spec-tools/overview-spec-tools",title:"Overview - TEv2 Terminology Tools (existing)",description:"As mentioned in the TEv2 overview, the toolbox contains a number of tools. The ones that exist (or are sufficiently mature to use) include:",source:"@site/docs/spec-tools/00-overview-spec-tools.md",sourceDirName:"spec-tools",slug:"/spec-tools/overview-spec-tools",permalink:"/tev2-specifications/docs/spec-tools/overview-spec-tools",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/00-overview-spec-tools.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1701175381,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:0,frontMatter:{id:"overview-spec-tools",sidebar_label:"overview",date:20231031},sidebar:"tev2SideBar",previous:{title:"MRG Term Selection",permalink:"/tev2-specifications/docs/spec-syntax/mrg-term-selection-syntax"},next:{title:"overview",permalink:"/tev2-specifications/docs/spec-tools/overview-spec-tools"}},c={},l=[],h={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview---tev2-terminology-tools-existing"},"Overview - TEv2 Terminology Tools (existing)"),(0,a.kt)("p",null,"As mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/overview-tev2"},"TEv2 overview"),", the toolbox contains a number of tools. The ones that exist (or are sufficiently mature to use) include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("strong",{parentName:"p"},"Term Ref(erence) Resolution Tool (",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),")"),". This tool takes files that contain so-called ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," and outputs a copy of these files in which these ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," are converted into so-called ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",hovertext:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),", i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/reader",hovertext:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," to quickly find more explanations of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that is being referenced.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("strong",{parentName:"p"},"MRG Importer (",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrg-import",hovertext:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG importer"),")"),". This tool serves to get any ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," that may be needed within a particular ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", and make it available in the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),". The idea behind this is that various tools that may need such ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs")," would not need to include such code. Further details are in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/spec-tools/mrg-import"},"MRG importer specs"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrgt",hovertext:"MRGT: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as [specified by TEv2](/docs/spec-tools/mrgt). MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT"),")"),". This tool reads the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," of a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to find the instructions by which it creates an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," for each of the versions of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that are maintained within that ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/spec-tools-envisaged/HRGT"},"Human Readable Glossary generation Tool"))," (or ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),"). This tool reads the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," of a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", resolves any ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," as necessary, and creates a rendering that results in a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),"."))),(0,a.kt)("p",null,"Other tools are ",(0,a.kt)("a",{parentName:"p",href:"/doc/tev2-toolbox-envisaged"},"envisaged"),"."),(0,a.kt)("admonition",{title:"Configuration files",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Every ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",hovertext:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," can be called using a (YAML) configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the commandline. Configuration files can also be combined. See the section on ",(0,a.kt)("a",{parentName:"p",href:"/docs/spec-files/configuration-file"},"Configuration Files")," for further details.")))}p.isMDXComponent=!0}}]);