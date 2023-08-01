"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9226],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(4996),s=["components"],l={id:"tev2-installation",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},c="Installation",p={unversionedId:"tev2/manuals/tev2-installation",id:"tev2/manuals/tev2-installation",title:"Installation",description:"<img",source:"@site/docs/tev2/manuals/tev2-installation.md",sourceDirName:"tev2/manuals",slug:"/tev2/manuals/tev2-installation",permalink:"/tev2-specifications/docs/tev2/manuals/tev2-installation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/manuals/tev2-installation.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1690867497,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"tev2-installation",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curators",permalink:"/tev2-specifications/docs/tev2/manuals/curator"},next:{title:"Terminology Construction",permalink:"/tev2-specifications/docs/tev2/spec-tools/terminology-construction"}},u={},d=[{value:"Structure of Scope Directories",id:"structure-of-scope-directories",level:3},{value:"Integrating Scope Directories and the ToIP Terminology Toolbox",id:"integrating-scope-directories-and-the-toip-terminology-toolbox",level:3},{value:"Integrating Scope Directories and Third Party Rendering Tools",id:"integrating-scope-directories-and-third-party-rendering-tools",level:3}],h={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,a.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section on 'Installation' can really be written only after the rest is complete. The contents of this page is just a set of ideas that may well have been deprecated already.")),(0,a.kt)("admonition",{title:"Editor's note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page should only document the generic stuff. Any installation details that are specific to a tool SHOULD be documented in the page(s) that document the particular tool. Obviously, this page could mention the tools for which that is the case, and link to the associated sections.")),(0,a.kt)("p",null,"TEv2 is a tool for ",(0,a.kt)("a",{parentName:"p",href:"@"},"curating")," ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminology"),"-related data from the perspective of a single ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope"),". Installation comprises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"setting up, or appointing an (online) directory that will serve as a ",(0,a.kt)("a",{parentName:"li",href:"@"},"scope directory"),";"),(0,a.kt)("li",{parentName:"ul"},"creating a ","[Scope Administration File (SAF)]","/tev2/spec-files/saf, and providing the configuration of the ",(0,a.kt)("a",{parentName:"li",href:"@"},"scope")," and its ",(0,a.kt)("a",{parentName:"li",href:"@"},"terminology"),";"),(0,a.kt)("li",{parentName:"ul"},"installing the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tev2/tev2-toolbox"},"tev2-toolbox"),";"),(0,a.kt)("li",{parentName:"ul"},"integrating the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tev2/tev2-toolbox"},"tools")," with other tools, such as a CI/CD pipeline on github or gitlab, static site generators such as ",(0,a.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. See also: ",(0,a.kt)("a",{parentName:"li",href:"/docs/tev2/tev2-toolbox"},"Using the Tools"),".")),(0,a.kt)("h3",{id:"structure-of-scope-directories"},"Structure of Scope Directories"),(0,a.kt)("p",null,"Depending on the other tooling that is going to be used, a ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope directory")," has to be specified that is part of the (online) directory in which the ",(0,a.kt)("a",{parentName:"p",href:"@"},"terminology")," has to be used. The ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,a.kt)("a",{parentName:"p",href:"saf@"},"scope administration file (SAF)")," specifies whatever needs to be administered for that ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope"),"; this file is maintained by the ",(0,a.kt)("a",{parentName:"p",href:"@"},"curators")," of the scope (using a regular text editor)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"@"},"Curators")," must also specify a location (directory) within the ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope directory")," where ",(0,a.kt)("a",{parentName:"p",href:"@"},"glossaries")," will be located. This directory, which is called the ",(0,a.kt)("a",{parentName:"p",href:"@"},"glossary directory")," or ",(0,a.kt)("a",{parentName:"p",href:"@"},"glossarydir")," is located within the ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopedir"),", and contains all ",(0,a.kt)("a",{parentName:"p",href:"@"},"glossaries")," that are generated by and/or needed within the ",(0,a.kt)("a",{parentName:"p",href:"@"},"scope")," - as well as perhaps some other stuff."),(0,a.kt)("h3",{id:"integrating-scope-directories-and-the-toip-terminology-toolbox"},"Integrating Scope Directories and the ToIP Terminology Toolbox"),(0,a.kt)("admonition",{title:"Editor's Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Content to be produced")),(0,a.kt)("h3",{id:"integrating-scope-directories-and-third-party-rendering-tools"},"Integrating Scope Directories and Third Party Rendering Tools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"@"},"Knowledge artifacts")," are intended to also be used by/within third party rendering tools, such as ",(0,a.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", or LaTeX"),(0,a.kt)("admonition",{title:"Editor's Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Content to be produced")))}f.isMDXComponent=!0}}]);