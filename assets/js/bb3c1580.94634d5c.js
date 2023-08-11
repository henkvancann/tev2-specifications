"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8881],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2130:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=(o(4996),["components"]),s={id:"tool-development","// hide_table_of_contents":!0,scopetag:"tev2",date:20221111},l="Tool Development",p={unversionedId:"tev2/miscellaneous/tool-development",id:"tev2/miscellaneous/tool-development",title:"Tool Development",description:"This page intends to provide (lots of pointers to) information that people may need in order to decide whether or not to contribute to the construction of the Terminology Engine v2 (TEv2) toolbox, and if so, determine where to help out.",source:"@site/docs/tev2/miscellaneous/tool-development.md",sourceDirName:"tev2/miscellaneous",slug:"/tev2/miscellaneous/tool-development",permalink:"/tev2-specifications/docs/tev2/miscellaneous/tool-development",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/miscellaneous/tool-development.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1691746020,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{id:"tool-development","// hide_table_of_contents":!0,scopetag:"tev2",date:20221111},sidebar:"tev2SideBar",previous:{title:"Vocabulary",permalink:"/tev2-specifications/docs/tev2/terms/vocabulary"}},c={},u=[{value:"What it is about",id:"what-it-is-about",level:2},{value:"Pointers to what you need to know",id:"pointers-to-what-you-need-to-know",level:3},{value:"Tooling status as of ...",id:"tooling-status-as-of-",level:2},{value:"Under development",id:"under-development",level:3},{value:"High priority",id:"high-priority",level:3},{value:"Medium priority:",id:"medium-priority",level:3},{value:"Lower priority:",id:"lower-priority",level:3},{value:"Starting to contribute",id:"starting-to-contribute",level:2}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tool-development"},"Tool Development"),(0,i.kt)("p",null,"This page intends to provide (lots of pointers to) information that people may need in order to decide whether or not to contribute to the construction of the Terminology Engine v2 (",(0,i.kt)("a",{parentName:"p",href:"@"},"TEv2"),") toolbox, and if so, determine where to help out."),(0,i.kt)("h2",{id:"what-it-is-about"},"What it is about"),(0,i.kt)("p",null,"At the core of ",(0,i.kt)("a",{parentName:"p",href:"@"},"TEv2")," is ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/overview/tev2-design-principles"},"text conversion"),": every ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"tool in the toolbox")," takes one or more input files, does some textual processing, and produces outputs. The basic ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/overview/tev2-design-principles#text-conversion-steps"},"conversion pattern")," that individual ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"tools")," are expected to follow ensures that they can be easily extended, e.g., to operate on different input formats, or to produce alternative output formats."),(0,i.kt)("p",null,"There are various things that make the further development of ",(0,i.kt)("a",{parentName:"p",href:"@"},"TEv2")," challenging:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the interop between individual tools: outputs of one tool must be fit for processing by another tool (which may include existing third party tools, such as static website generators), as described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/overview/tev2-architecture"},"TEv2 Architecture"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"designing actual tools such that they can be easily extended (also by others) to accept different input formats, and/or produce different output formats, as described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/overview/tev2-design-principles#text-conversion-steps"},"text conversion steps pattern"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"designing tools such that they can be easily used in different contexts (e.g. whether or not to dockerize a tool)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"collaborating with other people that work on the tools such that the coherence and consistent working of tools that different people develop is guaranteed. We may need to better organize this.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"making the tools automatically testable, e.g. by running test suites as part of the CI/CD street we envisage that tools would have.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"making the tools easy to integrate in CI/CD streets or other strategies that projects or working groups use to publish their documentation and whitepapers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"for certain tools: making them easy to use in authoring processes, e.g. by enabling them to be used in real-time authoring processes (authors that type texts can immediately see, e.g. in a browser, what the effects are of what they have typed).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Specifications may not exist, or need modification, which may impact other tools as well.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tools should not use unnecessary resources (processing time, memory).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"... (there are likely to be other challenges)"))),(0,i.kt)("h3",{id:"pointers-to-what-you-need-to-know"},"Pointers to what you need to know"),(0,i.kt)("admonition",{title:"In order to appreciate and come to grips with these challenges, it will definitely help if you read up on some more backgrounds of what we try to do. Here are some pointers:",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/tev2-overview"},"TEv2 Overview")," (and its sub-documents) will provide you with with such backgrounds."),(0,i.kt)("li",{parentName:"ul"},"Other documented topics include:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/tev2-spec-files"},"file structure spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/tev2-syntax"},"syntax specifications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/tev2-toolbox"},"specifications of individual tools")," - not all specifications hare already been drafted/checked."))))),(0,i.kt)("h2",{id:"tooling-status-as-of-"},"Tooling status as of ..."),(0,i.kt)("p",null,'For the date of the tooling status, see the "',(0,i.kt)("i",null,"last updated on"),'" text at the bottom right on this page'),(0,i.kt)("h3",{id:"under-development"},"Under development"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/mrgt"},"MRGT"),", which is in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/ctwg-toolkit-mrg"},"this toip repo"),". The tool works, but still has some ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/ctwg-toolkit-mrg/issues"},"bugs/issues")," that need to be fixed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/trrt"},"TRRT"),", which is currently actively developed by TNO in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tno-terminology-design/trrt"},"this repo"),".")),(0,i.kt)("h3",{id:"high-priority"},"High priority"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ingress tools that convert wiki-files (and perhaps some other formats) into ",(0,i.kt)("a",{parentName:"li",href:"/tev2-specifications/docs/tev2/spec-files/ctext"},"curated texts"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/hrgt"},"HRGT"),", so that we can actually generate human-readable glossaries. For this tool, specifications need to be further drafted (and agreed on).")),(0,i.kt)("h3",{id:"medium-priority"},"Medium priority:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/ict"},"ICT"),", which allows for integrity checking. The current specifications are outdated and first need to be revised.")),(0,i.kt)("h3",{id:"lower-priority"},"Lower priority:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"extensions for the ",(0,i.kt)("a",{parentName:"li",href:"@"},"TRRT"),", and perhaps other tools, so that they can be used in ",(0,i.kt)("a",{parentName:"li",href:"https://dev.w3.org/2008/video/mediaann/ReSpec.js/documentation.html"},"ReSpec")," environments, such as often used for W3C standards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/mrdt"},"MRDT")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/hrdt"},"HRDT"))),(0,i.kt)("h2",{id:"starting-to-contribute"},"Starting to contribute"),(0,i.kt)("p",null,"If you are eager to contribute, then ping ",(0,i.kt)("inlineCode",{parentName:"p"},"rieks")," ",(0,i.kt)("inlineCode",{parentName:"p"},".")," ",(0,i.kt)("inlineCode",{parentName:"p"},"joosten")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<at>")," ",(0,i.kt)("inlineCode",{parentName:"p"},"tno")," ",(0,i.kt)("inlineCode",{parentName:"p"},".")," ",(0,i.kt)("inlineCode",{parentName:"p"},"nl"),", or attend a ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.trustoverip.org/display/HOME/CTWG+Meeting+Pages"},"ToIP CTWG meeting"),", where you express your interest and/or questions, and we'll take it from there."))}h.isMDXComponent=!0}}]);