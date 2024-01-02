"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8675],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||s;return r?a.createElement(d,o(o({ref:t},l),{},{components:r})):a.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=u;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:i,o[1]=n;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>p});var a=r(3117),i=(r(7294),r(3905));const s={term:"grouptag",termType:"concept",isa:"tag",glossaryTerm:null,glossaryText:"a [tag](@) that is used to group [terms](@) within a specific [scope](@).",synonymOf:null,grouptags:null,formPhrases:["grouptag{ss}","group-tag{ss}"],status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-07-28T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},o="Grouptag",n={unversionedId:"terms/grouptag",id:"terms/grouptag",title:"Grouptag",description:"Summary",source:"@site/docs/terms/grouptag.md",sourceDirName:"terms",slug:"/terms/grouptag",permalink:"/tev2-specifications/docs/terms/grouptag",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/grouptag.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1704202634,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{term:"grouptag",termType:"concept",isa:"tag",glossaryTerm:null,glossaryText:"a [tag](@) that is used to group [terms](@) within a specific [scope](@).",synonymOf:null,grouptags:null,formPhrases:["grouptag{ss}","group-tag{ss}"],status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-07-28T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},p=[{value:"Summary",id:"summary",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grouptag"},"Grouptag"),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Grouptag")," is a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tag",title:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."},"tag")," that is used to group ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," within a specific ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,i.kt)("p",null,"Grouptags may be used within a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to tag various sorts or ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),", thus representing the set of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are associated with that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tag",title:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."},"tag"),". This may be used for different purposes. One example is to tag every ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that is part of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"pattern")," with a pattern-specific tag."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this concept fits in with related concepts."),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Grouptag")," (of/within a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),") is a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tag",title:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."},"tag")," that is used within that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to group ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),". It satisfies the regex ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Examples of grouptags are ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-terms"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"governance-terms"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"paa-pattern-terms"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"essiflab"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"ctwg")))}m.isMDXComponent=!0}}]);