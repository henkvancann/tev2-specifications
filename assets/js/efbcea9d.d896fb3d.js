"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,d=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return r?a.createElement(d,s(s({ref:t},h),{},{components:r})):a.createElement(d,s({ref:t},h))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(3117),n=(r(7294),r(3905));const o={id:"converter",term:"converter",termType:"concept",isa:null,glossaryTerm:"Converter",glossaryText:"a specification for constructing a text, for which it can use texts that are the values of [moustache variables](@).",synonymOf:null,grouptags:null,formPhrases:["converter{ss}"],status:"proposed",created:new Date("2023-07-31T00:00:00.000Z"),updated:new Date("2023-07-31T00:00:00.000Z"),contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Converter",i={unversionedId:"terms/converter",id:"terms/converter",title:"Converter",description:"A converter is a specification for constructing a text, for which it can use texts that are the values of moustache variables.",source:"@site/docs/terms/converter.md",sourceDirName:"terms",slug:"/terms/converter",permalink:"/tev2-specifications/docs/terms/converter",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/converter.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1704202634,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"converter",term:"converter",termType:"concept",isa:null,glossaryTerm:"Converter",glossaryText:"a specification for constructing a text, for which it can use texts that are the values of [moustache variables](@).",synonymOf:null,grouptags:null,formPhrases:["converter{ss}"],status:"proposed",created:"2023-07-31T00:00:00.000Z",updated:"2023-07-31T00:00:00.000Z",contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},l=[],h={toc:l};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"converter"},"Converter"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"converter")," is a specification for constructing a text, for which it can use texts that are the values of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/moustache-variable",title:"Moustache Variable: a placeholder in the form of a 'moustache' tag, e.g. ```, within some text. They are used, e.g., by the TRRT, where they get their values from an Interpreter, and where they are used in a selected Converter for the purpose of replacing TermRefs with Renderable Refs. See also https://mustache.github.io/mustache.5.html"},"moustache variables"),"."),(0,n.kt)("p",null,"Converters are used in different contexts, e.g., in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", where it converts ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," into ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),",  as specified in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/spec-tools/trrt#trrt-converters"},"TRRT documentation"),";"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),", where it converts ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/mrg-ref-syntax",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRefs")," into a sequence of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-entry",title:"HRG Entry: A specific kind of (human-readable) rendering of the combination of a Term and a means that helps Readers to understand the meaning of that Term when it is used in a sentence."},"hrg entries"),", as specified in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/spec-tools/hrgt#hrgt-converters"},"HRGT documentation"),";"),(0,n.kt)("li",{parentName:"ul"},"etc. (there may be more contexts).")),(0,n.kt)("p",null,"The context in which a converter is used specifies what ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/moustache-variable",title:"Moustache Variable: a placeholder in the form of a 'moustache' tag, e.g. ```, within some text. They are used, e.g., by the TRRT, where they get their values from an Interpreter, and where they are used in a selected Converter for the purpose of replacing TermRefs with Renderable Refs. See also https://mustache.github.io/mustache.5.html"},"moustache variables")," it can expect to be available. These specifications can be found in the documentation of the respective tools."),(0,n.kt)("p",null,"Converters are specified as mustache/handlebars templates (",(0,n.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"handlebar expressions"),")."))}f.isMDXComponent=!0}}]);