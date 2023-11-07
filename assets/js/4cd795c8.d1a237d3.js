"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2766],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>u});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=a.createContext({}),m=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(o),u=i,p=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return o?a.createElement(p,n(n({ref:t},l),{},{components:o})):a.createElement(p,n({ref:t},l))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,n=new Array(r);n[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var m=2;m<r;m++)n[m]=o[m];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3402:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=o(3117),i=(o(7294),o(3905));o(4996);const r={id:"tev2-terminology-curation",sidebar_label:"Terminology Curation",date:20220303},n="TEv2 - Terminology Curation",s={unversionedId:"overview/tev2-terminology-curation",id:"overview/tev2-terminology-curation",title:"TEv2 - Terminology Curation",description:"This section may need to be revised, and/or moved to the Curators Manual.",source:"@site/docs/overview/40-tev2-terminology-curation.md",sourceDirName:"overview",slug:"/overview/tev2-terminology-curation",permalink:"/tev2-specifications/docs/overview/tev2-terminology-curation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/overview/40-tev2-terminology-curation.md",tags:[],version:"current",lastUpdatedBy:"Kees",lastUpdatedAt:1699351461,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:40,frontMatter:{id:"tev2-terminology-curation",sidebar_label:"Terminology Curation",date:20220303},sidebar:"tev2SideBar",previous:{title:"Architecture",permalink:"/tev2-specifications/docs/overview/tev2-architecture"},next:{title:"Backgrounds",permalink:"/tev2-specifications/docs/overview/tev2-background"}},c={},m=[],l={toc:m};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tev2---terminology-curation"},"TEv2 - Terminology Curation"),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section may need to be revised, and/or moved to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/manuals/curator"},"Curators Manual"),".")),(0,i.kt)("p",null,"TEv2 assumes that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curated")," data resides in an existing ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory"),", and that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",hovertext:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated files")," are expected to be processable by other tools, including, but not limited to ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," must be ",(0,i.kt)("a",{parentName:"p",href:"/docs/manuals/tev2-installation"},"set up")," in advance."),(0,i.kt)("p",null,"Thus, whenever a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms-community")," decided that some contribution is to be included in the part of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",hovertext:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus")," that is maintained by that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community"),", the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," of that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community")," are tasked to"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"create/maintain/update any ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"-related administration in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," that is needed for curation, as specified by a ",(0,i.kt)("a",{parentName:"li",href:"docs/spec-files/saf"},"Scope Administration File (SAF)"),";"),(0,i.kt)("li",{parentName:"ol"},"convert that contribution to (a set of) ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",hovertext:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated files"),", that comply with the ",(0,i.kt)("a",{parentName:"li",href:"/docs/spec-files/ctext-file"},"specifications")," for such files;"),(0,i.kt)("li",{parentName:"ol"},"store them at the location as designated in the ",(0,i.kt)("a",{parentName:"li",href:"docs/spec-files/saf"},"SAF"),";"),(0,i.kt)("li",{parentName:"ol"},"generate/update any artifact that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community")," wants to automatically maintain, which in particular includes the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," and associated ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),".")),(0,i.kt)("p",null,"This document provides an overview of the knowledge that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," may need to perform this task, which can be broken up in the following parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/manuals/tev2-installation"},"Setup/installation")," of a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," that is suitable for working with TEv2, and the creation of a ",(0,i.kt)("a",{parentName:"p",href:"docs/spec-files/saf"},"SAF"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"Curation")," of terminological contributions. This requires knowledge about the [file structure](/docs/spec-files/ctext-file) of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",hovertext:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated file"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"generation")," of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units"),". It is typical for a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms community")," to want to have a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," of the terms they either have defined themselves, or are defined elsewhere but are to be used within that ",(0,i.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",hovertext:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"community"),". However, other artifacts may be generated as well (a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/dictionary",hovertext:"Dictionary: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"dictionary"),", white papers, etc.) - this is all up to the ",(0,i.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",hovertext:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"community"),"."))))}h.isMDXComponent=!0}}]);