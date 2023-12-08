"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7775],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var h=r.createContext({}),c=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,h=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),f=c(a),d=o,l=f["".concat(h,".").concat(d)]||f[d]||p[d]||s;return a?r.createElement(l,i(i({ref:t},m),{},{components:a})):r.createElement(l,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=f;var n={};for(var h in t)hasOwnProperty.call(t,h)&&(n[h]=t[h]);n.originalType=e,n.mdxType="string"==typeof e?e:o,i[1]=n;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var r=a(3117),o=(a(7294),a(3905));a(4996);const s={id:"form-phrase-syntax",sidebar_label:"Form Phrases",date:20220808},i="Form Phrases - Syntax",n={unversionedId:"spec-syntax/form-phrase-syntax",id:"spec-syntax/form-phrase-syntax",title:"Form Phrases - Syntax",description:"This document specifies the syntax of form phrases, i.e. texts that are specified in the header of curated texts, in the field formPhrases.",source:"@site/docs/spec-syntax/51-form-phrase-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/form-phrase-syntax",permalink:"/tev2-specifications/docs/spec-syntax/form-phrase-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/51-form-phrase-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702012545,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:51,frontMatter:{id:"form-phrase-syntax",sidebar_label:"Form Phrases",date:20220808},sidebar:"tev2SideBar",previous:{title:"MRG References",permalink:"/tev2-specifications/docs/spec-syntax/mrg-ref-syntax"},next:{title:"MRG Term Selection",permalink:"/tev2-specifications/docs/spec-syntax/mrg-term-selection-syntax"}},h={},c=[{value:"Simple Form Phrases",id:"simple-form-phrases",level:2},{value:"Form phrase macros",id:"form-phrase-macros",level:2},{value:"Notes",id:"notes",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"form-phrases---syntax"},"Form Phrases - Syntax"),(0,o.kt)("p",null,"This document specifies the syntax of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases"),", i.e. texts that are specified in the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"header")," of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),", in the field ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases"),".",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"Form phrases")," are [used to automatically convert](/docs/spec-tools/trrt#id) the `show text` parts of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs")," into `[termid](@)`s, for the purpose of accommodating, e.g., plural forms (for nouns) or conjugate forms (for verbs). This facilitates the work for ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors"),", as this no longer requires them to explicitly mention the `term` part in a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," when the `showtext` they use matches one of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases"),".",(0,o.kt)("h2",{id:"simple-form-phrases"},"Simple Form Phrases"),(0,o.kt)("p",null,"In the simple form, a single ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase")," is a sequence of characters ",(0,o.kt)("a",{parentName:"p",href:"https://www.debuggex.com/r/w7mm0fzpON23yuZQ"},(0,o.kt)("inlineCode",{parentName:"a"},"[a-z0-9_-]+")),". The contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases")," field (in the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"header")," of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),") is a comma-separated list of such ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases"),", matching the (PCRE) regex ",(0,o.kt)("a",{parentName:"p",href:"https://www.debuggex.com/r/20MNb2zgNwLDD-dD"},(0,o.kt)("inlineCode",{parentName:"a"},"(?:\\s*(?:[a-z0-9_-{}]+)\\s*(?:,\\s*([a-z0-9_-{}]+))*)?")),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases"),"-field is used by the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," in its attempts to ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt#showtext"},"convert the ",(0,o.kt)("inlineCode",{parentName:"a"},"showtext"))," part of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," into a string that can serve as the ",(0,o.kt)("inlineCode",{parentName:"p"},"term")," of that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," does so by looping over the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," of the designated ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),", and checking whether or not such a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," is a match, as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," simplifies the ",(0,o.kt)("inlineCode",{parentName:"li"},"showtext"),", by converting uppercase characters to lowercase, and replacing (sequences of) special characters and spaces with a single ",(0,o.kt)("inlineCode",{parentName:"li"},"-")," character. Thus a ",(0,o.kt)("inlineCode",{parentName:"li"},"showtext")," with value ",(0,o.kt)("inlineCode",{parentName:"li"},"Form - Phrase")," would be converted into ",(0,o.kt)("inlineCode",{parentName:"li"},"form-phrase"),"."),(0,o.kt)("li",{parentName:"ul"},"Then, the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," checks whether the result matches the contents of the ",(0,o.kt)("inlineCode",{parentName:"li"},"term"),"-field, and is done when that's the case. "),(0,o.kt)("li",{parentName:"ul"},"If there is no match, the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," checks whether the result matches any of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"formPhrases")," field. If that is the case, there is a match, and the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," of which the ",(0,o.kt)("inlineCode",{parentName:"li"},"showtext")," is a part will be referring to the matching ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),".")),(0,o.kt)("p",null,"Thus, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"showtext")," of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"actor's"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases")," field of some ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," contains ",(0,o.kt)("inlineCode",{parentName:"p"},"actors, actor's, actor(s)"),", there would be a match, and the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," would refer to that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),"). "),(0,o.kt)("p",null,"Similarly, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"showtext")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Term Refs"),", and some (other) ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"term")," field containing ",(0,o.kt)("inlineCode",{parentName:"p"},"termref")," and its ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases")," field contains ",(0,o.kt)("inlineCode",{parentName:"p"},"termrefs, term-ref, term-refs"),", then there would be a match. Note that other ",(0,o.kt)("inlineCode",{parentName:"p"},"showtexts"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"TermRef"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"termref"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"term-ref"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"term%refs"),", etc., would also result in a match."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Detailed example"),(0,o.kt)("p",null,"Consider a text with a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),", e.g., "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'...\nThis is a text that is about <a href="https://essif-lab.github.io/framework/docs/terms/actor" hovertext="Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations." >actors</a>, and the <a href="https://essif-lab.github.io/framework/docs/terms/actor" hovertext="Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations." >actor\'s</a> capabilities.\nThis text also says what the <a href="https://essif-lab.github.io/framework/docs/terms/actor" hovertext="Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations." >actor(s)</a> might be doing.\n...\n')),(0,o.kt)("p",null,"As you can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"showtexts")," are plurals or conjugate forms of the term ",(0,o.kt)("inlineCode",{parentName:"p"},"actor"),".\nIt would help ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," if they could write this text as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'...\nThis is a text that is about <a href="https://essif-lab.github.io/framework/docs/terms/actor" hovertext="Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations." >actors</a>, and the <a href="https://essif-lab.github.io/framework/docs/terms/actor" hovertext="Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations." >actor\'s</a> capabilities.\nThis text also says what the <a href="https://essif-lab.github.io/framework/docs/terms/actor" hovertext="Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations." >actor(s)</a> might be doing.\n...\n')),(0,o.kt)("p",null,"which would require the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," to automatically convert such plurals or conjugate forms into the corresponding base term. That's where ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases")," come in."),(0,o.kt)("p",null,"This can be done by specifying such plurals, conjugate forms, or any other texts as a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase")," and adding it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases")," field (in the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"header"),") of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that documents the base term (",(0,o.kt)("inlineCode",{parentName:"p"},"actor")," in our example), as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"formPhrases: actors, actor's, actor(s)\n"))),(0,o.kt)("h2",{id:"form-phrase-macros"},"Form phrase macros"),(0,o.kt)("p",null,"When you have worked some time with ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases"),", you will have noticed some patterns. For example, there many nouns (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"actor"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"term"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"form phrase"),") have a plural form that can be constructing by adding an ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),", and it is conventient to specify such a plural form as a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase"),". These nouns also have other often recurring forms, that are constructed by adding, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"'s"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"(s)"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase")," macro is a syntax that allows you to specify such a pattern as a single ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase"),". For example, the constructions mentioned in the previous paragraph can be specified by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"{ss}")," to the noun, as in ",(0,o.kt)("inlineCode",{parentName:"p"},"actor{ss}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"term{ss}"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"form-phrase{ss}"),". The text ",(0,o.kt)("inlineCode",{parentName:"p"},"{ss}")," is a form phrase macro; it is a shorthand syntax that, when used in a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase"),", specifies a list of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases")," that are derived from its non-macro part."),(0,o.kt)("p",null,"The following table specifies the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase")," macros that have currently being defined. The table shows "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the macro text,"),(0,o.kt)("li",{parentName:"ol"},"the regex that is used for checking whether a (simplified) ",(0,o.kt)("inlineCode",{parentName:"li"},"showtext")," matches the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase"),","),(0,o.kt)("li",{parentName:"ol"},"an example that could appear as a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase")," in a ",(0,o.kt)("inlineCode",{parentName:"li"},"formPhrases"),"-field of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),","),(0,o.kt)("li",{parentName:"ol"},"the set of (simplified) ",(0,o.kt)("inlineCode",{parentName:"li"},"showtext"),"s that would match that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase"),":")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"macro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"regex"),(0,o.kt)("th",{parentName:"tr",align:"center"},"example"),(0,o.kt)("th",{parentName:"tr",align:"left"},"texts that the example matches"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ss}")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"(","|","s","|","'s","|","(s",")",")")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"actor{ss}")),(0,o.kt)("td",{parentName:"tr",align:"left"},'matches: "actor", "actors", "actor\'s", and "actor(s)"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{yies}")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"(y","|","y's","|","ies)")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"part{yies}")),(0,o.kt)("td",{parentName:"tr",align:"left"},'matches: "party", "party\'s", and "parties"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ying}")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"(y","|","ier","|","ying","|","ies","|","ied)")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"identif{ying}")),(0,o.kt)("td",{parentName:"tr",align:"left"},'matches: "identify", "identifier", "identifying", "identifies", and "identified"')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example of a form phrase macro and its use"),(0,o.kt)("p",null,"Suppose we have a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," for the term ",(0,o.kt)("inlineCode",{parentName:"p"},"actor"),", and in its front matter, we specify:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"formPhrases: identif{yies}\n")),(0,o.kt)("p",null,"The part ",(0,o.kt)("inlineCode",{parentName:"p"},"{yies}")," is a (predefined) macro, that is associated with the regex ",(0,o.kt)("inlineCode",{parentName:"p"},"(y|y's|ies)"),"."),(0,o.kt)("p",null,"When the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," converts a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),", one of the things it needs to do is to ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt#showtext"},"convert a so-called ",(0,o.kt)("inlineCode",{parentName:"a"},"show-text")," into a ",(0,o.kt)("inlineCode",{parentName:"a"},"term"))," that exists in some ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"show-text")," does not match the ",(0,o.kt)("inlineCode",{parentName:"p"},"term")," of any of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),", the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," will try to match it against every form phrase in every ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),", including the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"formphrase")," ",(0,o.kt)("inlineCode",{parentName:"p"},"actor{ss}"),"."),(0,o.kt)("p",null,"You can think of how this work as follows",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". When the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"trrt")," encounters a ",(0,o.kt)("inlineCode",{parentName:"p"},"showtext"),", it will loop over ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts")," (or ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries"),") to find a match. If it can't find one (in case ",(0,o.kt)("inlineCode",{parentName:"p"},"showtext")," is not the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"term")," field), it will the take the list of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases")," specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases")," field, and replace every of its ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrase")," that contains a macro, with all possible ","[form phrases]"," that do not contain a macro. For example, if the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"formPhrases")," field would be ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier{ss}, identif(ying)"),", the replacement result would be the list ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identifiers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier's"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier(s)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identify"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identifying"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"identifies")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"identified"),". So there would be a match if the ",(0,o.kt)("inlineCode",{parentName:"p"},"showtext")," would equal any of these ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs"),".")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Since ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," include the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"header")," of such ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),", the ",(0,o.kt)("inlineCode",{parentName:"li"},"formPhrases")," field can also be found therein.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Actual implementations are expected to do this in a more efficient way.",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);