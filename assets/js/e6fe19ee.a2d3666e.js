"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||s;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(3117),o=(r(7294),r(3905));const s={id:"term-selection-instruction",term:"term-selection-instruction",termType:"concept",isa:null,glossaryTerm:"Term Selection Instruction",glossaryText:"an instruction that is used to select one or more [terms](scoped-term@) for the purpose of processing their documentation, e.g., to create an [MRG](@).",synonymOf:null,grouptags:"glossary-entries, terminology-management",formPhrases:"term-selection-instruction{ss}, selection-instruction{ss}",status:"proposed",created:new Date("2023-07-31T00:00:00.000Z"),updated:new Date("2023-07-31T00:00:00.000Z"),contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},i="Term Selection Instruction",a={unversionedId:"terms/term-selection-instruction",id:"terms/term-selection-instruction",title:"Term Selection Instruction",description:"A Term Selection Instruction is an instruction that is used to select one or more terms for the purpose of processing their documentation, e.g., to create an MRG. Term selection instructions have a well defined syntax.",source:"@site/docs/terms/term-selection-instruction.md",sourceDirName:"terms",slug:"/terms/term-selection-instruction",permalink:"/tev2-specifications/docs/terms/term-selection-instruction",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/term-selection-instruction.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702160223,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{id:"term-selection-instruction",term:"term-selection-instruction",termType:"concept",isa:null,glossaryTerm:"Term Selection Instruction",glossaryText:"an instruction that is used to select one or more [terms](scoped-term@) for the purpose of processing their documentation, e.g., to create an [MRG](@).",synonymOf:null,grouptags:"glossary-entries, terminology-management",formPhrases:"term-selection-instruction{ss}, selection-instruction{ss}",status:"proposed",created:"2023-07-31T00:00:00.000Z",updated:"2023-07-31T00:00:00.000Z",contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},l=[{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}],m={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"term-selection-instruction"},"Term Selection Instruction"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Term Selection Instruction")," is an instruction that is used to select one or more ",(0,o.kt)("a",{parentName:"p",href:"scoped-term@"},"terms")," for the purpose of processing their documentation, e.g., to create an ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG"),". Term selection instructions have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec-syntax/mrg-term-selection-syntax"},"well defined syntax"),"."),(0,o.kt)("p",null,"Term selection instructions enable ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to construct a ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology"),", by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"selecting ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/spec-syntax/mrg-term-selection-syntax#syntax-add"},"that are to be added")," to the ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology underconstruction"),". These ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms")," can be specified by ",(0,o.kt)("a",{parentName:"li",href:"@"},"curated texts")," from the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope")," itself, or specified within ",(0,o.kt)("a",{parentName:"li",href:"@"},"MRGs")," that are curated in) other ",(0,o.kt)("a",{parentName:"li",href:"@"},"scopes"),"."),(0,o.kt)("li",{parentName:"ul"},"selecting ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/spec-syntax/mrg-term-selection-syntax#syntax-remove"},"that need to be removed")," from the ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology underconstruction"),"."),(0,o.kt)("li",{parentName:"ul"},"selecting ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/spec-syntax/mrg-term-selection-syntax#syntax-rename"},"that need to be renamed (or have attributes modified)")," in the ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology underconstruction"),".")),(0,o.kt)("p",null,"These instructions are essential for determining which terms should be included in an ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," (and ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGs"),") that are maintained within the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,o.kt)("p",null,"Term selection instructions serve as guidelines for curators and stakeholders to identify and select relevant terms based on predefined rules or filters."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There are ",(0,o.kt)("a",{parentName:"li",href:"/docs/spec-tools/mrg-terminology-construction#syntax-add"},"examples for adding terms ")," to a ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology underconstruction"),"."),(0,o.kt)("li",{parentName:"ol"},"There are also ",(0,o.kt)("a",{parentName:"li",href:"/docs/spec-tools/mrg-terminology-construction#syntax-remove"},"examples for removing terms")," from a ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology underconstruction"),". ")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Term selection instructions are essential for ensuring that the terminological assets in a scope are relevant, accurate, and comprehensive."),(0,o.kt)("li",{parentName:"ul"},"Curators use term selection instructions to tailor the terminology to the specific needs and objectives of the community or project.")))}p.isMDXComponent=!0}}]);