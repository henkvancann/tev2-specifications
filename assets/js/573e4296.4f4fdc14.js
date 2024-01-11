"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),h=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),f=h(r),m=i,p=f["".concat(c,".").concat(m)]||f[m]||l[m]||s;return r?a.createElement(p,o(o({ref:t},d),{},{components:r})):a.createElement(p,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=f;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:i,o[1]=n;for(var h=2;h<s;h++)o[h]=r[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>h});var a=r(3117),i=(r(7294),r(3905));const s={id:"regularized-form-phrase",term:"regularized-form-phrase",termType:"concept",isa:null,glossaryTerm:"Regularized Form Phrase",glossaryText:"a [regularized text](@) that is derived from, and represents a [form phrase](@). They typically appear in the `formPhrases` field of an [MRG entry](@).",formPhrases:["regularized-formphrase{ss}","regularized-form-phrase{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},o="Regularized Form Phrase",n={unversionedId:"terms/regularized-form-phrase",id:"terms/regularized-form-phrase",title:"Regularized Form Phrase",description:"A Regularized Form Phrase is a regularized text that is derived from, and represents a form phrase. They typically appear in the formPhrases field of an MRG entry.",source:"@site/docs/terms/regularized-form-phrase.md",sourceDirName:"terms",slug:"/terms/regularized-form-phrase",permalink:"/tev2-specifications/docs/terms/regularized-form-phrase",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/regularized-form-phrase.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704988698,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{id:"regularized-form-phrase",term:"regularized-form-phrase",termType:"concept",isa:null,glossaryTerm:"Regularized Form Phrase",glossaryText:"a [regularized text](@) that is derived from, and represents a [form phrase](@). They typically appear in the `formPhrases` field of an [MRG entry](@).",formPhrases:["regularized-formphrase{ss}","regularized-form-phrase{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Need for Regularizing Form Phrases",id:"need-for-regularizing-form-phrases",level:2},{value:"Regularizing Form Phrases",id:"regularization-process",level:2}],d={toc:h};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"regularized-form-phrase"},"Regularized Form Phrase"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Regularized Form Phrase")," is a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^A-z*(?<=[^-])$` is a regularized text."},"regularized text")," that is derived from, and represents a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase"),". They typically appear in the ",(0,i.kt)("inlineCode",{parentName:"p"},"formPhrases")," field of an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),"."),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"The purpose of having ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-form-phrase",title:"Regularized Form Phrase: a Regularized Text that is derived from, and represents a Form Phrase. They typically appear in the `formPhrases` field of an MRG Entry."},"regularized form phrases")," is that they"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"facilitate machine lookups of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," in an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary (MRG): a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG"),", and"),(0,i.kt)("li",{parentName:"ol"},"can be used as part of a ",(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown link"),", particularly as a part of a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/term-identifier-syntax",title:"Term Identifier: a Text, of the form `<termid>@<terminology-identifier>`, that is used for Identifying a Semantic Unit within a designated Terminology. If `@<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifier")," that is used in ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs"),".")),(0,i.kt)("h2",{id:"need-for-regularizing-form-phrases"},"Need for Regularizing Form Phrases"),(0,i.kt)("p",null,"There are two situation in which a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase")," needs to be converted into a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^A-z*(?<=[^-])$` is a regularized text."},"regularized text")," (i.e., a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-form-phrase",title:"Regularized Form Phrase: a Regularized Text that is derived from, and represents a Form Phrase. They typically appear in the `formPhrases` field of an MRG Entry."},"regularized form phrase"),"):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When constructing an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," from a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". In this case, the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," thjat are the elements of the ",(0,i.kt)("inlineCode",{parentName:"li"},"formPhrases")," field of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line. Headers live in Curated Text Files."},"header")," of a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," must be converted into ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-form-phrase",title:"Regularized Form Phrase: a Regularized Text that is derived from, and represents a Form Phrase. They typically appear in the `formPhrases` field of an MRG Entry."},"regularized form phrases")," that before putting them into the ",(0,i.kt)("inlineCode",{parentName:"li"},"formPhrases")," field of the corresponding ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),". Details are given in ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt#constructing-provisional-mrg",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"Constructing a Provisional MRG"),"."),(0,i.kt)("li",{parentName:"ol"},"When resolving a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),". In this case, the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing group")," ",(0,i.kt)("inlineCode",{parentName:"li"},"term")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"showtext")," of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," are expected to be ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," that need to be converted into ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-form-phrase",title:"Regularized Form Phrase: a Regularized Text that is derived from, and represents a Form Phrase. They typically appear in the `formPhrases` field of an MRG Entry."},"regularized form phrases")," so that they can be used as search key to find the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," to which the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," refers.")),(0,i.kt)("h2",{id:"regularization-process"},"Regularizing Form Phrases"),(0,i.kt)("p",null,"The process of regularizing ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," is capable of handling both ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases"),", and texts that contain ",(0,i.kt)("a",{parentName:"p",href:"@"},"form phrase macros")," (that can be considered 'shorthand' for a set of related ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases"),"):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"any ",(0,i.kt)("a",{parentName:"li",href:"@"},"form phrase macros")," that are present are processed, thereby expanding the set of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases"),";"),(0,i.kt)("li",{parentName:"ol"},"the resulting texts are ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text#regularization-process",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^A-z*(?<=[^-])$` is a regularized text."},"converted")," into a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^A-z*(?<=[^-])$` is a regularized text."},"regularized text"))),(0,i.kt)("p",null,"The result is a (expanded) set of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^A-z*(?<=[^-])$` is a regularized text."},"regularized texts")," that represent the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," as specified in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"formPhrases")," field in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," is then made as an array of these ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-text",title:"Regularized Text: a character string that starts with a lowercase character (`[a-z]`), and has subsequent characters that match Regex `[a-z]_[0-9]-`, and doesn't end with a `-` character. In other words, every text that matches the Regex `^A-z*(?<=[^-])$` is a regularized text."},"regularized texts"),"."))}l.isMDXComponent=!0}}]);