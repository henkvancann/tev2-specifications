"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9975],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,v=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(v,a(a({ref:t},p),{},{components:n})):i.createElement(v,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=(n(4996),["components"]),s={id:"tev2-overview",sidebar_label:"TEv2 Overview",date:20220303},c="Terminology Engine v2 - Overview",l={unversionedId:"tev2-overview",id:"tev2-overview",title:"Terminology Engine v2 - Overview",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2-overview.md",sourceDirName:".",slug:"/tev2-overview",permalink:"/tev2-specifications/docs/tev2-overview",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-overview.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1694782810,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{id:"tev2-overview",sidebar_label:"TEv2 Overview",date:20220303},sidebar:"tev2SideBar",next:{title:"Understanding One Another",permalink:"/tev2-specifications/docs/overview/tev2-common-understanding"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terminology-engine-v2---overview"},"Terminology Engine v2 - Overview"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curation"),") of ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",title:"Terminologies: a set of Terms that are used within a single Scope to refer to Concepts and other Knowledge Artifacts of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies"),", as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",title:"Scopes: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),"."),(0,o.kt)("p",null,"The following perspectives are meant to help you get an overview of ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",title:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," and its intended impact:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/overview/tev2-common-understanding"},"Understanding One Another"))," is what it ultimately is all about. This perspective describes our take on this."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/overview/tev2-purpose"},"Purpose")),". This perspective states the objectives that we seek to realize with ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",title:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/overview/tev2-design-principles"},"Design Principles")),". This perspective describes the main ideas behind the ways in which ",(0,o.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",title:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," has been designed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/overview/tev2-architecture"},"Architecture")),". This perspective provides an overview of the files, tools and how they interrelate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/terms/patterns/pattern-terminology"},"Terminology Support")),". This perspective describes the mental model we use to think about what we're doing.")))}f.isMDXComponent=!0}}]);