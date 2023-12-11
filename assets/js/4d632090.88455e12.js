"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4609],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),h=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=h(i),f=n,m=l["".concat(c,".").concat(f)]||l[f]||p[f]||o;return i?a.createElement(m,r(r({ref:t},d),{},{components:i})):a.createElement(m,r({ref:t},d))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var h=2;h<o;h++)r[h]=i[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}l.displayName="MDXCreateElement"},4077:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=i(3117),n=(i(7294),i(3905));i(4996);const o={id:"term-ref-default-syntax",sidebar_label:"TermRefs - Default Syntax",date:20231123},r="Term References - Default Syntax",s={unversionedId:"spec-syntax/term-ref-default-syntax",id:"spec-syntax/term-ref-default-syntax",title:"Term References - Default Syntax",description:"As an author or curator, you want to be able to mark words or phrases, and have them refer to (the documentation of) a particular concept or other semantic unit. Such marked-up words or phrases are called TermRefs.",source:"@site/docs/spec-syntax/11-term-ref-basic-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/term-ref-default-syntax",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-default-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/11-term-ref-basic-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702300924,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:11,frontMatter:{id:"term-ref-default-syntax",sidebar_label:"TermRefs - Default Syntax",date:20231123},sidebar:"tev2SideBar",previous:{title:"TermRefs - Introduction",permalink:"/tev2-specifications/docs/spec-syntax/term-refs-introduction"},next:{title:"TermRefs - Alt Syntax",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-alt-syntax"}},c={},h=[{value:"<code>showtext</code>",id:"showtext",level:3},{value:"<code>term</code>",id:"term",level:3},{value:"<code>trait</code>",id:"trait",level:3},{value:"<code>scopetag</code>",id:"scopetag",level:3},{value:"<code>vsntag</code>",id:"vsntag",level:3},{value:"Motivation for the chosen syntax",id:"motivation-for-the-chosen-syntax",level:2}],d={toc:h};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"term-references---default-syntax"},"Term References - Default Syntax"),(0,n.kt)("p",null,"As an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"author")," or ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curator"),", you want to be able to mark words or phrases, and have them refer to (the documentation of) a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),". Such marked-up words or phrases are called ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),"."),(0,n.kt)("p",null,"The syntax for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," isn't fixed. This file specifies one of the different ways in which this can be done, and call it the ",(0,n.kt)("strong",{parentName:"p"},"'default syntax' for ","[TermRefs][@]"),"."),(0,n.kt)("p",null,"In the default syntax,a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," can be thought of as a ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),", but rather than linking to some URL or fragment, it refers to (a specific trait of) a specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),", as defined in a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"."),(0,n.kt)("p",null,"The most general form of the default syntax is:"),(0,n.kt)("p",null,"["," ",(0,n.kt)("inlineCode",{parentName:"p"},"show text")," ","]","( ",(0,n.kt)("inlineCode",{parentName:"p"},"termtype")," : ",(0,n.kt)("inlineCode",{parentName:"p"},"term")," # ",(0,n.kt)("inlineCode",{parentName:"p"},"trait")," @ ",(0,n.kt)("inlineCode",{parentName:"p"},"scopetag")," : ",(0,n.kt)("inlineCode",{parentName:"p"},"vsntag")," )"),(0,n.kt)("p",null,"where: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"show text")," is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters ",(0,n.kt)("inlineCode",{parentName:"li"},"@")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"]")," (this is needed to distinguish ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," from regular ",(0,n.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),")."),(0,n.kt)("li",{parentName:"ul"}),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"termtype")," is a word that identifies the type of the term, e.g. 'concept', 'relation', or 'pattern'."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"termtype")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"term")," # ",(0,n.kt)("inlineCode",{parentName:"li"},"trait")," @ ",(0,n.kt)("inlineCode",{parentName:"li"},"scopetag")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"vsntag")," is the  ")),(0,n.kt)("p",null,"Here is an example of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"[definitions](definition@)"),". When this text is rendered into a human readable form, it will show the text ",(0,n.kt)("inlineCode",{parentName:"p"},"definitions")," (plural) enhanced, and it will link to the text that describes (or defines) the term ",(0,n.kt)("inlineCode",{parentName:"p"},"definition")," (singular). If you would want to use this term as it is defined in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," called ",(0,n.kt)("inlineCode",{parentName:"p"},"essif-lab"),", you could do that by wrinting ",(0,n.kt)("inlineCode",{parentName:"p"},"[definitions](definition@essif-lab)")," (provided that ",(0,n.kt)("inlineCode",{parentName:"p"},"essif-lab")," is a defined ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," within the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," that you operate in)."),(0,n.kt)("p",null,"The complete, generic structure of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," is: ",(0,n.kt)("strong",{parentName:"p"},"[",(0,n.kt)("inlineCode",{parentName:"strong"},"show text"),"]","(",(0,n.kt)("inlineCode",{parentName:"strong"},"term"),"#",(0,n.kt)("inlineCode",{parentName:"strong"},"trait"),"@",(0,n.kt)("inlineCode",{parentName:"strong"},"scopetag"),":",(0,n.kt)("inlineCode",{parentName:"strong"},"vsntag"),")"),". However, all of its elements (except for ",(0,n.kt)("inlineCode",{parentName:"p"},"show text"),") are optional, so as to limit the 'extra work' that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," need to do to a minimum."),(0,n.kt)("h3",{id:"showtext"},(0,n.kt)("inlineCode",{parentName:"h3"},"showtext")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"showtext"))," is the text that will be highlighted/emphasized to indicate it is linked.\nIt must not contain the characters ",(0,n.kt)("inlineCode",{parentName:"p"},"@")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"]")," (this is needed to distinguish ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," from regular ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),")."),(0,n.kt)("h3",{id:"term"},(0,n.kt)("inlineCode",{parentName:"h3"},"term")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"term"))," is the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"(scoped) term")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that is to be referred to.",(0,n.kt)("br",null),"It must satisfy the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,n.kt)("p",null,"If omitted, its value is assumed to be ",(0,n.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt#id"},"derivable from ",(0,n.kt)("inlineCode",{parentName:"a"},"showtext")),".\nAt a minimum, this is the case if the ",(0,n.kt)("inlineCode",{parentName:"p"},"term")," equals the result of processing ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," by first converting every character in the range ",(0,n.kt)("inlineCode",{parentName:"p"},"[A-Z]")," to lower-case, and then replacing every sequence of characters specified by regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[^A-Za-z_-]+")," with (a single) ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," character."),(0,n.kt)("h3",{id:"trait"},(0,n.kt)("inlineCode",{parentName:"h3"},"trait")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"trait"))," is a text that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," a particular (kind of) characteristic (feature, attribute, particularity) that is associated with the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),", and to a description of which is to be referred.",(0,n.kt)("br",null),"It must satisfy the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,n.kt)("p",null,"If omitted (in which case the preceding ",(0,n.kt)("inlineCode",{parentName:"p"},"#"),"-character may also be omitted), the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," will by default resolve to the text of its ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," entry. While it is envisaged that ",(0,n.kt)("inlineCode",{parentName:"p"},"trait")," must be a text from a predefined set of allowed/supported texts (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"purpose"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"criteria"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"example-3"),"), the precise semantics remain to be specified."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The semantics of ",(0,n.kt)("inlineCode",{parentName:"p"},"trait")," need to be better specified.")),(0,n.kt)("h3",{id:"scopetag"},(0,n.kt)("inlineCode",{parentName:"h3"},"scopetag")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"scopetag"))," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tag",title:"Tag: an alphanumeric string that is used to identify Scopes (so called 'scopetags'), group Terms (so called 'grouptags'), or identify a specific version of a Terminology (so called 'versiontags') from within a specific Scope."},"tag")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that contains the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"(scoped) term")," that is being referenced.",(0,n.kt)("br",null),"It must satisfy the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),". Also, it must appear as such in the ",(0,n.kt)("inlineCode",{parentName:"p"},"scopes")," section of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," within which the document containing the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," is being maintained, or it must be the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," itself."),(0,n.kt)("p",null,"If omitted, a default ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," will be used, which is the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," from which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," is being called, which SHOULD be the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," within which the document containing the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," is being maintained. Note that the preceding ",(0,n.kt)("inlineCode",{parentName:"p"},"@")," sign MUST NOT be omitted because as it serves the purpose to distinguish ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," from other ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),"."),(0,n.kt)("h3",{id:"vsntag"},(0,n.kt)("inlineCode",{parentName:"h3"},"vsntag")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"vsntag"))," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontag")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the specific version of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," that contains the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"(scoped) term")," that is being referenced.",(0,n.kt)("br",null),"It must satisfy the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-\\.]+"),"."),(0,n.kt)("p",null,"If omitted (in which case the preceding ",(0,n.kt)("inlineCode",{parentName:"p"},":"),"-character may also be omitted), its value will be the default, which is determined by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," of that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," (the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," that has the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that contains the (scoped) term](scoped-term@) that is being referenced, is specified in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," of that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", in the appropriate ",(0,n.kt)("inlineCode",{parentName:"p"},"scopes.mrgfile"),"-field). A ",(0,n.kt)("inlineCode",{parentName:"p"},"vsntag")," is only valid if it appears as the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"vsntag")," field or an element of the ",(0,n.kt)("inlineCode",{parentName:"p"},"altvsntags")," field in one of the list-elements of the ",(0,n.kt)("inlineCode",{parentName:"p"},"versions")," field in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It has been suggested to provide ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," syntax that allows one to refer to a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," from a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that was 'current'/'latest'/... at a particular date. The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#versions"},"versioning specifications")," already cater for ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," dates, but everything else needs to be worked out.")),(0,n.kt)("h2",{id:"motivation-for-the-chosen-syntax"},"Motivation for the chosen syntax"),(0,n.kt)("p",null,"We want to enable ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to use ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown links")," are of the form ","[",(0,n.kt)("inlineCode",{parentName:"p"},"show text"),"]","(",(0,n.kt)("inlineCode",{parentName:"p"},"ref-text"),"), where ",(0,n.kt)("inlineCode",{parentName:"p"},"show text")," is the text that is rendered and emphasized so that a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended."},"reader")," knows it can be clicked, and ",(0,n.kt)("inlineCode",{parentName:"p"},"ref-text")," is a (relative or absolute) URL, or a ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ID"),", that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," that is",(0,n.kt)("br",null),"- sufficiently similar to a ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),",",(0,n.kt)("br",null),"- 'humanly interpretable' when it isn't processed by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),",",(0,n.kt)("br",null),"- easy to use for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors"),", and",(0,n.kt)("br",null),"- sufficiently distinct from a Markdown link so that the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," will not process Markdown links yet will process the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),"."))}p.isMDXComponent=!0}}]);