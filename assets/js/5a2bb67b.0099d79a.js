"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>l});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),h=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=h(a),l=o,p=u["".concat(c,".").concat(l)]||u[l]||d[l]||i;return a?r.createElement(p,n(n({ref:t},m),{},{components:a})):r.createElement(p,n({ref:t},m))}));function l(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var h=2;h<i;h++)n[h]=a[h];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>m});var r=a(3117),o=(a(7294),a(3905)),i=a(4996);const n={id:"overview-curator",sidebar_label:"Curators",date:20220513},s="Curators Manual - Overview",c={unversionedId:"manuals/curator/overview-curator",id:"manuals/curator/overview-curator",title:"Curators Manual - Overview",description:"<img",source:"@site/docs/manuals/curator/00-curator-overview.md",sourceDirName:"manuals/curator",slug:"/manuals/curator/overview-curator",permalink:"/tev2-specifications/docs/manuals/curator/overview-curator",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/curator/00-curator-overview.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1701175381,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:0,frontMatter:{id:"overview-curator",sidebar_label:"Curators",date:20220513},sidebar:"tev2SideBar",previous:{title:"Authors",permalink:"/tev2-specifications/docs/manuals/author/overview-author"},next:{title:"Curators",permalink:"/tev2-specifications/docs/manuals/curator/overview-curator"}},h={},m=[],d={toc:m};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"curators-manual---overview"},"Curators Manual - Overview"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curation"),") of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies"),", as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),"."),(0,o.kt)("p",null,"The task of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," is to create/maintain the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," that they are tasked to ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curate"),". This Curators Manual is intended to help them do this."),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This section needs to be revised from here onward")),(0,o.kt)("p",null,"TEv2 assumes that the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curated")," data resides in an existing ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory"),", and that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",hovertext:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated files")," are expected to be processable by other tools, including, but not limited to ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," must be ",(0,o.kt)("a",{parentName:"p",href:"/docs/manuals/tev2-installation"},"set up")," in advance."),(0,o.kt)("p",null,"Thus, whenever a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms-community")," decided that some contribution is to be included in the part of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",hovertext:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus")," that is maintained by that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community"),", the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," of that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community")," are tasked to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"create/maintain/update any ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"-related administration in the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," that is needed for curation, as specified by a ",(0,o.kt)("a",{parentName:"li",href:"docs/spec-files/saf"},"Scope Administration File (SAF)"),";"),(0,o.kt)("li",{parentName:"ol"},"convert that contribution to (a set of) ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",hovertext:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated files"),", that comply with the ",(0,o.kt)("a",{parentName:"li",href:"/docs/spec-files/ctext-file"},"specifications")," for such files;"),(0,o.kt)("li",{parentName:"ol"},"store them at the location as designated in the ",(0,o.kt)("a",{parentName:"li",href:"docs/spec-files/saf"},"SAF"),";"),(0,o.kt)("li",{parentName:"ol"},"generate/update any artifact that the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community")," wants to automatically maintain, which in particular includes the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," and associated ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),".")),(0,o.kt)("p",null,"This document provides an overview of the knowledge that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," may need to perform this task, which can be broken up in the following parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/manuals/tev2-installation"},"Setup/installation")," of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," that is suitable for working with TEv2, and the creation of a ",(0,o.kt)("a",{parentName:"p",href:"docs/spec-files/saf"},"SAF"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"Curation")," of terminological contributions. This requires knowledge about the [file structure](/docs/spec-files/ctext-file) of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",hovertext:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated file"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"generation")," of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),". It is typical for a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms community")," to want to have a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," they either have ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/define",hovertext:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Semantic Unit), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"defined")," themselves, or are ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/define",hovertext:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Semantic Unit), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"defined")," elsewhere but are to be used within that ",(0,o.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",hovertext:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"community"),". However, other artifacts may be generated as well (a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/dictionary",hovertext:"Dictionary: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"dictionary"),", white papers, etc.) - this is all up to the ",(0,o.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",hovertext:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"community"),"."))))}u.isMDXComponent=!0}}]);