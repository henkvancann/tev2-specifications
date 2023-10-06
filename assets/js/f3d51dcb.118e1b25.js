"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1352],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return m}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),h=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),d=h(i),m=o,p=d["".concat(c,".").concat(m)]||d[m]||f[m]||a;return i?n.createElement(p,s(s({ref:t},l),{},{components:i})):n.createElement(p,s({ref:t},l))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var h=2;h<a;h++)s[h]=i[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},263:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return h},toc:function(){return f}});var n=i(7462),o=i(3366),a=(i(7294),i(3905)),s=["components"],r={id:"terminology-identifier-syntax",sidebar_label:"Terminology Identifiers",date:20230929},c="Terminology Identifiers",h={unversionedId:"spec-syntax/terminology-identifier-syntax",id:"spec-syntax/terminology-identifier-syntax",title:"Terminology Identifiers",description:"A Terminology Identifier a text that identifies a terminology from within a particular scope, and can also be used to find the MRG file (in the glossarydir of that same scope) that contains entries for every term contained in that terminology.",source:"@site/docs/spec-syntax/13-terminology-identifier-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/terminology-identifier-syntax",permalink:"/tev2-specifications/docs/spec-syntax/terminology-identifier-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/13-terminology-identifier-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696567287,formattedLastUpdatedAt:"Oct 6, 2023",sidebarPosition:13,frontMatter:{id:"terminology-identifier-syntax",sidebar_label:"Terminology Identifiers",date:20230929},sidebar:"tev2SideBar",previous:{title:"Term Identifiers",permalink:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax"},next:{title:"Form Phrases",permalink:"/tev2-specifications/docs/spec-syntax/form-phrase-syntax"}},l={},f=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],d={toc:f};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminology-identifiers"},"Terminology Identifiers"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Terminology Identifier")," a ",(0,a.kt)("a",{parentName:"p",href:"identifier@"},"text")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," from within a particular ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),", and can also be used to find the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems.",target:"_self"},"MRG")," file (in the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained.",target:"_self"},"glossarydir")," of that same ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),") that contains ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.).",target:"_self"},"entries")," for every ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"term")," contained in that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology"),"."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntaxes that can be used for a ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminology identifier")," are as follows (note that such syntax is typically preceeded by the ",(0,a.kt)("inlineCode",{parentName:"p"},"@"),"-character): "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(empty string, null)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scopetag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scopetag"),":",(0,a.kt)("inlineCode",{parentName:"li"},"vsntag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":vsntag"))),(0,a.kt)("p",null,"where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the empty string (null) ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," that is being used by default in the context in which the ",(0,a.kt)("a",{parentName:"li",href:"@"},"terminology identifier")," is being used. Typically, that would be the default version of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," in the current ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),". ",(0,a.kt)("sup",{parentName:"li",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"scopetag"))," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope",target:"_self"},"scopetag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"scopetag")," is omitted, the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," defaults to the current ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"vsntag"))," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/versiontag",hovertext:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope.",target:"_self"},"versiontag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," the  version of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," to be used. If ",(0,a.kt)("inlineCode",{parentName:"p"},":vsntag")," (including the ",(0,a.kt)("inlineCode",{parentName:"p"},":"),") is omitted, the default version of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," is assumed, as specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultvsn")," field in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#terminology"},"scope section")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope.",target:"_self"},"SAF")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," in which the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," is maintained."))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In the following examples, we assume that "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tev2")," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope",target:"_self"},"scopetag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," in which the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",hovertext:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes.",target:"_self"},"TEv2")," ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," is being ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives.",target:"_self"},"curated"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"terms")," is a ",(0,a.kt)("a",{parentName:"li",href:"@"},"vsntag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," that consists of all ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms")," that are ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/define",hovertext:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Terminological Artifact), and the Term is used to refer to that Concept, or an arbitrary instance thereof.",target:"_self"},"defined")," within the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," identified by ",(0,a.kt)("inlineCode",{parentName:"li"},"tev2"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"myscope")," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope",target:"_self"},"scopetag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," the current ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"terminology-identifier"),(0,a.kt)("th",{parentName:"tr",align:"left"},"refers to"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the default terminology of the current scope (i.e., ",(0,a.kt)("inlineCode",{parentName:"td"},"myscope"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@tev2")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the default terminology of the scope ",(0,a.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@tev2:terms")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the terminology that contains all ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms")," that are defined within the scope ",(0,a.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@:terms")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the terminology that contains all ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms")," that are defined within the current scope (i.e.: ",(0,a.kt)("inlineCode",{parentName:"td"},"myscope"),").")))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"When a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," ",(0,a.kt)("a",{parentName:"li",href:"/tev2-specifications/docs/spec-tools/terminology-construction"},"is being constructed"),", the empty string ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identifies")," the ",(0,a.kt)("a",{parentName:"li",href:"terminology-under-construction"},"terminology that is under construction"),"(@).",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);