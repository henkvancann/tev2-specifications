"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(o),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5577:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(3117),r=(o(7294),o(3905));o(4996);const a={id:"tool-development",date:20221111},i="Tool Development",s={unversionedId:"miscellaneous/tool-development",id:"miscellaneous/tool-development",title:"Tool Development",description:"This page intends to provide (lots of pointers to) information that people may need in order to decide whether or not to contribute to the construction of the Terminology Engine v2 (TEv2) toolbox, and if so, determine where to help out.",source:"@site/docs/miscellaneous/tool-development.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/tool-development",permalink:"/tev2-specifications/docs/miscellaneous/tool-development",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/miscellaneous/tool-development.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702160223,formattedLastUpdatedAt:"Dec 9, 2023",frontMatter:{id:"tool-development",date:20221111},sidebar:"tev2SideBar",previous:{title:"Notations and Conventions",permalink:"/tev2-specifications/docs/miscellaneous/notations-and-conventions"}},l={},p=[{value:"What it is about",id:"what-it-is-about",level:2},{value:"Pointers to what you need to know",id:"pointers-to-what-you-need-to-know",level:3},{value:"Tooling status as of ...",id:"tooling-status-as-of-",level:2},{value:"Under development",id:"under-development",level:3},{value:"High priority",id:"high-priority",level:3},{value:"Medium priority:",id:"medium-priority",level:3},{value:"Lower priority:",id:"lower-priority",level:3},{value:"Starting to contribute",id:"starting-to-contribute",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tool-development"},"Tool Development"),(0,r.kt)("p",null,"This page intends to provide (lots of pointers to) information that people may need in order to decide whether or not to contribute to the construction of the Terminology Engine v2 (",(0,r.kt)("a",{parentName:"p",href:"@"},"TEv2"),") toolbox, and if so, determine where to help out."),(0,r.kt)("h2",{id:"what-it-is-about"},"What it is about"),(0,r.kt)("p",null,"At the core of ",(0,r.kt)("a",{parentName:"p",href:"@"},"TEv2")," is ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/tev2-design-principles"},"text conversion"),": every ",(0,r.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"tool in the toolbox")," takes one or more input files, does some textual processing, and produces outputs. The basic ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/tev2-design-principles#text-conversion-steps"},"conversion pattern")," that individual ",(0,r.kt)("a",{parentName:"p",href:"/docs/tev2-toolbox"},"tools")," are expected to follow ensures that they can be easily extended, e.g., to operate on different input formats, or to produce alternative output formats."),(0,r.kt)("p",null,"There are various things that make the further development of ",(0,r.kt)("a",{parentName:"p",href:"@"},"TEv2")," challenging:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"the interop between individual tools: outputs of one tool must be fit for processing by another tool (which may include existing third party tools, such as static website generators), as described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/tev2-architecture"},"TEv2 Architecture"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"designing actual tools such that they can be easily extended (also by others) to accept different input formats, and/or produce different output formats, as described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/tev2-design-principles#text-conversion-steps"},"text conversion steps pattern"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"designing tools such that they can be easily used in different contexts (e.g. whether or not to dockerize a tool)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"collaborating with other people that work on the tools such that the coherence and consistent working of tools that different people develop is guaranteed. We may need to better organize this.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"making the tools automatically testable, e.g. by running test suites as part of the CI/CD street we envisage that tools would have.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"making the tools easy to integrate in CI/CD streets or other strategies that projects or working groups use to publish their documentation and whitepapers.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"for certain tools: making them easy to use in authoring processes, e.g. by enabling them to be used in real-time authoring processes (authors that type texts can immediately see, e.g. in a browser, what the effects are of what they have typed).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specifications may not exist, or need modification, which may impact other tools as well.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tools should not use unnecessary resources (processing time, memory).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"... (there are likely to be other challenges)"))),(0,r.kt)("h3",{id:"pointers-to-what-you-need-to-know"},"Pointers to what you need to know"),(0,r.kt)("admonition",{title:"Reading Materials",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In order to appreciate and come to grips with these challenges, it will definitely help if you read up on some more backgrounds of what we try to do. Here are some pointers:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/overview/overview-tev2"},"TEv2 Overview")," (and its sub-documents) will provide you with with such backgrounds."),(0,r.kt)("li",{parentName:"ul"},"Other documented topics include:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tev2-spec-files"},"file structure spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tev2-syntax"},"syntax specifications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tev2-toolbox"},"specifications of individual tools")," - not all specifications hare already been drafted/checked."))))),(0,r.kt)("h2",{id:"tooling-status-as-of-"},"Tooling status as of ..."),(0,r.kt)("p",null,'For the date of the tooling status, see the "',(0,r.kt)("i",null,"last updated on"),'" text at the bottom right on this page'),(0,r.kt)("h3",{id:"under-development"},"Under development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools/mrgt"},"MRGT"),", which is in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/ctwg-toolkit-mrg"},"this toip repo"),". The tool works, but still has some ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/ctwg-toolkit-mrg/issues"},"bugs/issues")," that need to be fixed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools/trrt"},"TRRT"),", which is currently actively developed by TNO in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tno-terminology-design/trrt"},"this repo"),".")),(0,r.kt)("h3",{id:"high-priority"},"High priority"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ingress tools that convert wiki-files (and perhaps some other formats) into ",(0,r.kt)("a",{parentName:"li",href:"/docs/spec-files/curated-text-file"},"curated texts"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools-envisaged/hrgt"},"HRGT"),", so that we can actually generate human-readable glossaries. For this tool, specifications need to be further drafted (and agreed on).")),(0,r.kt)("h3",{id:"medium-priority"},"Medium priority:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools-envisaged/ict"},"ICT"),", which allows for integrity checking. The current specifications are outdated and first need to be revised.")),(0,r.kt)("h3",{id:"lower-priority"},"Lower priority:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"extensions for the ",(0,r.kt)("a",{parentName:"li",href:"@"},"TRRT"),", and perhaps other tools, so that they can be used in ",(0,r.kt)("a",{parentName:"li",href:"https://dev.w3.org/2008/video/mediaann/ReSpec.js/documentation.html"},"ReSpec")," environments, such as often used for W3C standards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools-envisaged/mrdt"},"MRDT")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools-envisaged/hrdt"},"HRDT"))),(0,r.kt)("h2",{id:"starting-to-contribute"},"Starting to contribute"),(0,r.kt)("p",null,"If you are eager to contribute, then ping ",(0,r.kt)("inlineCode",{parentName:"p"},"rieks")," ",(0,r.kt)("inlineCode",{parentName:"p"},".")," ",(0,r.kt)("inlineCode",{parentName:"p"},"joosten")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<at>")," ",(0,r.kt)("inlineCode",{parentName:"p"},"tno")," ",(0,r.kt)("inlineCode",{parentName:"p"},".")," ",(0,r.kt)("inlineCode",{parentName:"p"},"nl"),", or attend a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.trustoverip.org/display/HOME/CTWG+Meeting+Pages"},"ToIP CTWG meeting"),", where you express your interest and/or questions, and we'll take it from there."))}c.isMDXComponent=!0}}]);