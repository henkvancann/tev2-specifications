"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4117],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var r=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),h=p(o),d=s,f=h["".concat(c,".").concat(d)]||h[d]||m[d]||i;return o?r.createElement(f,a(a({ref:t},l),{},{components:o})):r.createElement(f,a({ref:t},l))}));function d(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=o.length,a=new Array(i);a[0]=h;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:s,a[1]=n;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8089:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var r=o(3117),s=(o(7294),o(3905));const i={id:"mrg-import",term:"mrg-import",termType:"concept",isa:null,bodyFile:"/spec-tools/13-mrg-import.md",glossaryTerm:"MRG Import (Tool)",glossaryText:"is a tool in the [TEv2](@) toolbox that is run within a particular [scope](@) for the purpose of obtaining [MRGs](@) from other [scopes](@), as specified in the [scope's](@) [SAF](@), and putting them in the [scope's](@) [glossarydir](@).",synonymOf:null,grouptags:"glossary-entries, terminology-management-tools",formPhrases:"mrg-import, mrg-importer, mrg-import-tool",status:"proposed",created:new Date("2023-07-31T00:00:00.000Z"),updated:new Date("2023-07-31T00:00:00.000Z"),contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},a="MRG Importer",n={unversionedId:"terms/mrg-import",id:"terms/mrg-import",title:"MRG Importer",description:"The MRG Importer is a tool in the TEv2 toolbox that is run within a particular scope for the purpose of obtaining MRGs from other scopes, as specified in the scope's SAF, and putting them in the scope's glossarydir.",source:"@site/docs/terms/mrg-importer.md",sourceDirName:"terms",slug:"/terms/mrg-import",permalink:"/tev2-specifications/docs/terms/mrg-import",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/mrg-importer.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702012545,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"mrg-import",term:"mrg-import",termType:"concept",isa:null,bodyFile:"/spec-tools/13-mrg-import.md",glossaryTerm:"MRG Import (Tool)",glossaryText:"is a tool in the [TEv2](@) toolbox that is run within a particular [scope](@) for the purpose of obtaining [MRGs](@) from other [scopes](@), as specified in the [scope's](@) [SAF](@), and putting them in the [scope's](@) [glossarydir](@).",synonymOf:null,grouptags:"glossary-entries, terminology-management-tools",formPhrases:"mrg-import, mrg-importer, mrg-import-tool",status:"proposed",created:"2023-07-31T00:00:00.000Z",updated:"2023-07-31T00:00:00.000Z",contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},p=[{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}],l={toc:p};function m(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"mrg-importer"},"MRG Importer"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"MRG Importer")," is a tool in the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",hovertext:"TEv2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," toolbox that is run within a particular ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," for the purpose of obtaining ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs")," from other ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", as specified in the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF"),", and putting them in the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),". "),(0,s.kt)("p",null,"The MRG importer ensures that within the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", all ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs")," are available that other tools (such as the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", ",(0,s.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrgt",hovertext:"MRGT: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as [specified by TEv2](/docs/spec-tools/mrgt). MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT"),", ",(0,s.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",hovertext:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),", etc.) may need to accomplish their tasks."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In a collaborative terminology project with multiple scopes, the MRG importer retrieves and consolidates MRGs from individual scopes, making them available for querying and use."),(0,s.kt)("li",{parentName:"ol"},"The MRG importer is used to synchronize MRGs across multiple collaborating organizations, ensuring consistent terminology usage and interpretation.")),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The MRG importer simplifies the process of obtaining necessary MRGs, and ensures that any problems that might arise in that context, e.g. the need for providing credentials for obtaining MRGs from private repos, are handled in one place. Also, it reduces the need for manual data collection and copying."),(0,s.kt)("li",{parentName:"ul"},"The availability of local copies of MRGs enhances the efficiency and reliability of terminology management activities.")))}m.isMDXComponent=!0}}]);