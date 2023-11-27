"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9446],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=a.createContext({}),h=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),l=h(i),f=o,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||s;return i?a.createElement(d,n(n({ref:t},p),{},{components:i})):a.createElement(d,n({ref:t},p))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,n=new Array(s);n[0]=l;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,n[1]=r;for(var h=2;h<s;h++)n[h]=i[h];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}l.displayName="MDXCreateElement"},1334:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=i(3117),o=(i(7294),i(3905));const s={term:"tag",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).",synonymOf:null,grouptags:null,formPhrases:"tag{ss}",status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-06-06T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},n="Tag",r={unversionedId:"terms/tag",id:"terms/tag",title:"Tag",description:"Summary",source:"@site/docs/terms/tag.md",sourceDirName:"terms",slug:"/terms/tag",permalink:"/tev2-specifications/docs/terms/tag",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/tag.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701079847,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{term:"tag",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).",synonymOf:null,grouptags:null,formPhrases:"tag{ss}",status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-06-06T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar",previous:{title:"Synonym",permalink:"/tev2-specifications/docs/terms/synonym"},next:{title:"term-identifier",permalink:"/tev2-specifications/docs/terms/term-identifier"}},c={},h=[{value:"Summary",id:"summary",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3},{value:"Notes",id:"notes",level:3}],p={toc:h};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tag"},"Tag"),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Tag")," is an alphanumeric string that satisfies the regex ",(0,o.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),", and that is used to identify ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," (so called 'scopetags'), group ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," (so called 'grouptags'), or identify a specific version of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," (so called 'versiontags') from within a specific ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,o.kt)("p",null,"Scopetags ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identify")," a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," (from within a given ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"), and hence can be used (within that given ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),") to disambiguate ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"essiflab:term")," is an ",(0,o.kt)("a",{parentName:"p",href:"@"},"identifier")," for the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," that within the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identified")," by the scopetag ",(0,o.kt)("inlineCode",{parentName:"p"},"essiflab")," is referred to by the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," 'term'."),(0,o.kt)("p",null,"Grouptags may be used within a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to tag various sorts or ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units")," such as ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),", ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),", ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",hovertext:"Mental Model: A Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"patterns")," and the like. One can then say that this grouptag represents the group of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units")," that are associated with that tag. This may be used for different purposes. One example is to tag every term that is part of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",hovertext:"Mental Model: A Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"pattern")," with a pattern-specific tag."),(0,o.kt)("p",null,"Versiontags are used to identify a specific version of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," within which the versiontag lives. It may have various forms, and would typically be chosen such that it comes in handy with the tools that the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms community")," has decided to use to curate that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,o.kt)("h3",{id:"criteria"},"Criteria"),(0,o.kt)("p",null,"is an alphanumeric string that is used within a specific ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to identify ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," and/or group ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units"),", and/or identify a version of its ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),". The alphanumeric string satisfies the regex ",(0,o.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/patterns/pattern-terminology",hovertext:"Terminology Pattern: a Mental Model that describes the relations between a Community, its (intangible) Knowledge, and the artifacts we use to document that Knowledge, such as Terms, Definitions, Mental Models, Glossaries, etc."},"terminology pattern")," provides an overview of how this concept fits in with related concepts."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Examples of scopetags are ",(0,o.kt)("inlineCode",{parentName:"p"},"essif-lab"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"essiflab"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toip"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"ctwg")),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the ",(0,o.kt)("inlineCode",{parentName:"p"},".")," character for ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",hovertext:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontags")," might be beneficial. However, allowing a ",(0,o.kt)("inlineCode",{parentName:"p"},".")," character in a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," may cause problems with (the alternative syntax) of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),", as email address in square brackets might then qualify as a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," while that is very likely not the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"author"),"'s intention."))}m.isMDXComponent=!0}}]);