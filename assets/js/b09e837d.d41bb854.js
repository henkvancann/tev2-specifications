"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5418],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return f}});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),h=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=h(i),f=n,u=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return i?o.createElement(u,s(s({ref:t},l),{},{components:i})):o.createElement(u,s({ref:t},l))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var h=2;h<r;h++)s[h]=i[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9401:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=i(7462),n=i(3366),r=(i(7294),i(3905)),s=i(4996),a=["components"],c={id:"tev2-design-principles",sidebar_label:"Design Principles",date:20220303},h="TEv2 - Design Principles",l={unversionedId:"overview/tev2-design-principles",id:"overview/tev2-design-principles",title:"TEv2 - Design Principles",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/overview/20-tev2-design-principles.md",sourceDirName:"overview",slug:"/overview/tev2-design-principles",permalink:"/tev2-specifications/docs/overview/tev2-design-principles",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/overview/20-tev2-design-principles.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1694782810,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:20,frontMatter:{id:"tev2-design-principles",sidebar_label:"Design Principles",date:20220303},sidebar:"tev2SideBar",previous:{title:"Purpose of TEv2",permalink:"/tev2-specifications/docs/overview/tev2-purpose"},next:{title:"Architecture",permalink:"/tev2-specifications/docs/overview/tev2-architecture"}},d={},p=[{value:"Text Conversion",id:"text-conversion",level:2},{value:"Text Conversion Steps",id:"text-conversion-steps",level:2}],f={toc:p};function u(e){var t=e.components,i=(0,n.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tev2---design-principles"},"TEv2 - Design Principles"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,r.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",title:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," not only contributes to dealing with (",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors"),"/groups that have their) individual ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",title:"Terminologies: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies"),", it specifically also contributes to the re-use of ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," across ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", and the production of (documentary) artifacts in which such ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," are used. All this is done while respecting the autonomy of the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/@",title:"Error - the reference cannot be resolved."},"communities")," that [own](@essif-lab) these ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),". This is what we call a Self-Sovereign Terminology.",(0,r.kt)("h2",{id:"text-conversion"},"Text Conversion"),(0,r.kt)("p",null,"The (documentary) artifacts we envisage are typically in the form of e.g. a (static) website, or documents in formats such as PDF, ODT, DOCX, etc., that is: in an arbitrary form that is readable for humans. However, they are typically (but not always) authored in much simpler, raw formats, such as plain ASCII text, markdown, LaTeX, etc., and one or more conversion steps are required to turn these 'raw texts' into nicely 'rendered texts'. ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",title:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," specifies a set of tools (a '",(0,r.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox"),"') that can be used in the conversion process, as illustrated (in a simplified way) in the figure below:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"Converting raw texts into formatted texts",src:(0,s.Z)("images/tev2-overview-without-toolbox.png")}),(0,r.kt)("i",null,"Figure 1: Converting raw texts into formatted texts and curated texts")),(0,r.kt)("p",null,"Many things that can be done with tools in the ",(0,r.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox"),", such as the generation of ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossary",title:"Glossaries: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries")," or ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/dictionary",title:"Dictionaries: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"dictionaries"),", the contents of which can be tailored, and they can be rendered in various formats. The toolbox has been designed to be extensible, which means that if at one point in time some tailoring or rendering features are missing, they can be added later, as needed."),(0,r.kt)("p",null,"A particularly nice feature of the ",(0,r.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox")," is its capability of working with so-called ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Knowledge Artifact), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),", which are pieces of text that are ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-syntax/term-ref-syntax"},"annotated")," to refer to a particular ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"term"),", the effect of which in the rendered version of the text can help ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," understand the meaning in which the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"term")," was used. The figure below shows an example of this: at the left you see a raw (markdown) text, where the terms ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"community")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"own"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"terminology"))," have been annotated to refer to ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curated")," ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," (from specific ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),"). At the right side you see the effect that tools from the ",(0,r.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox")," and other third party tools had as they rendered this text into an (HTML) web page: the texts are highlighted, and when the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"reader")," hovers its mouse over that text, a popup-balloon shows that contains the definition of the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"term")," that was referenced."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"The effect of annotating texts with a Term Reference",src:(0,s.Z)("images/tev2-overview-enhanced-term.png")}),(0,r.kt)("i",null,"Figure 2: The effect of annotating texts with a Term Reference")),(0,r.kt)("p",null,"If you are familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown"),", you will notice that the raw text contains syntax that resembles ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),", but it's not quite conformant: it contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," character, which signals (within TEv2) that this is not an ordinary link, but a link that will be resolved by the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/trrt",title:"TRRT (TermRef Rendering Tool): a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),". The ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/trrt",title:"TRRT (TermRef Rendering Tool): a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," will convert these links (which we call ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Knowledge Artifact), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),") such that they are rendered as shown in the right of the figure: that is: in purple boldface, and when you hover your mouse over the term, it will show the definition of that term."),(0,r.kt)("h2",{id:"text-conversion-steps"},"Text Conversion Steps"),(0,r.kt)("p",null,"Figure 1 shows how (raw) texts are converted into other formats, and that this is a sequence of conversion steps, part of which can be accommodated by using tools from the ",(0,r.kt)("a",{parentName:"p",href:"/docs-toolbox"},"TEv2 toolbox"),", while other conversions are performed by other tools. The tools in the ",(0,r.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox")," that contribute to a conversion step are typically constructed following the pattern as shown in the figure below:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"The generic text conversion pattern on which the toolbox is based",src:(0,s.Z)("images/tev2-text-conversion-pattern.png")}),(0,r.kt)("i",null,"Figure 3: The generic text conversion pattern on which the toolbox is based")),(0,r.kt)("p",null,"This pattern shows that conversion consists of two generic parts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"an interpreter, that is capable of interpreting a (source) file of a particular format (e.g. a wiki-page), and that then produces a set of so-called ",(0,r.kt)("a",{parentName:"li",href:"https://mustache.github.io/mustache.5.html"},'"moustache"-variables'),', that are specified by a ("moustache") profile.'),(0,r.kt)("li",{parentName:"ol"},'a convertor, that is capable of converting the source text into another (converted) text, thereby using the values that the interpreter has assigned to the "moustache"-variables.')),(0,r.kt)("p",null,"Using this pattern is beneficial e.g.,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in cases where source texts of different formats or layouts are being used that must be converted to a particular and well structured file, as is the case when ingesting texts that are contributions e.g. to a ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),". Different interpreters can be used for different layouts, and after using a particular converter, they can all be said to result in a converted text of a specific layout and contents."),(0,r.kt)("li",{parentName:"ul"},"in cases where a specific kind of source needs to be converted into various different kinds of rendered texts. For example, creating a ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/@",title:"Error - the reference cannot be resolved."},"human readable glossary")," from a ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/@",title:"Error - the reference cannot be resolved."},"machine readable glossary")," can be done in many ways, e.g. as a webpage, or as a piece of LaTeX that can be included (as an appendix) in a paper; also, the contents of such a glossary may differ: you could have simple lists of ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," and explanations, but you could also opt to add meta-data, e.g. list the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/grouptag",title:"Grouptags: a Tag that is used to group Terms within a specific Scope."},"grouptags")," of each ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"term"),", (references to) attributions and/or licensing data, people that contributed to the documentation of the ",(0,r.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"term"),", etc.")))}u.isMDXComponent=!0}}]);