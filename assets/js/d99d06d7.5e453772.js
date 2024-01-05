"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4422],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=m(i),d=r,h=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return i?n.createElement(h,s(s({ref:t},p),{},{components:i})):n.createElement(h,s({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<a;m++)s[m]=i[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},1997:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var n=i(3117),r=(i(7294),i(3905));const a={term:"termid",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"a text of the form `<termType>:<term>` that serves as an unambiguous [identifier](@) for a specific [semantic unit](@) in some given [scope](@).",synonymOf:null,grouptags:null,formPhrases:["termid{ss}","term-id{ss}"],status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-08-09T00:00:00.000Z"),contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Term-ID",o={unversionedId:"terms/termid",id:"terms/termid",title:"Term-ID",description:"A Term-ID is a text of the form : that serves as an unambiguous identifier for a specific semantic unit in some given scope, where ` represents a term type, and ` is a term.",source:"@site/docs/terms/termid.md",sourceDirName:"terms",slug:"/terms/termid",permalink:"/tev2-specifications/docs/terms/termid",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/termid.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704458775,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{term:"termid",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"a text of the form `<termType>:<term>` that serves as an unambiguous [identifier](@) for a specific [semantic unit](@) in some given [scope](@).",synonymOf:null,grouptags:null,formPhrases:["termid{ss}","term-id{ss}"],status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-08-09T00:00:00.000Z",contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},m=[],p={toc:m};function l(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"term-id"},"Term-ID"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Term-ID")," is a text of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"<termType>:<term>")," that serves as an unambiguous ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifier")," for a specific ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," in some given ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<termType>")," represents a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-type",title:"Term Type: a Text that Identifies a particular *kind* of Semantic Unit within a particular Scope. Examples include `concept`, `relation`, `pattern` (or `mental-model`)."},"term type"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"<term>")," is a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),"."),(0,r.kt)("p",null,"The reason for having term-ids is that a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," may be ambiguous within (a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),") of some ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". For example, terms such as ",(0,r.kt)("inlineCode",{parentName:"p"},"jurisdiction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),", etc. could refer to a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept"),", but equally well to a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental model"),", or a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/relation",title:"Relation (between Concepts): a (significant) connection or association between two or more Concepts. These connections define the way these Concepts are interrelated, providing insights into how they interact and influence each other."},"relation")," that links some ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),"."),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," in an ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," has a field ",(0,r.kt)("inlineCode",{parentName:"p"},"termid")," that contains the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/termid",title:"Termid: a text of the form `<termType>:<term>` that serves as an unambiguous Identifier for a specific Semantic Unit in some given Scope."},"term-ID")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," is about. Its value is constructed by the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRGT")," - see"))}l.isMDXComponent=!0}}]);