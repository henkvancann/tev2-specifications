"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6063],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6911:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=(r(4996),["components"]),s={id:"tev2-spec-files",date:20220819},c="TEv2 - Files (Structure, Specs)",l={unversionedId:"tev2-spec-files",id:"tev2-spec-files",title:"TEv2 - Files (Structure, Specs)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2-spec-files.md",sourceDirName:".",slug:"/tev2-spec-files",permalink:"/tev2-specifications/docs/tev2-spec-files",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-spec-files.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1692021704,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"tev2-spec-files",date:20220819},sidebar:"tev2SideBar",previous:{title:"Using LaTeX",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-LaTeX"},next:{title:"Curated Texts",permalink:"/tev2-specifications/docs/spec-files/ctext"}},p={},f=[],u={toc:f};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tev2---files-structure-specs"},"TEv2 - Files (Structure, Specs)"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2")," expects ",(0,o.kt)("a",{parentName:"p",href:"@"},"communities")," to have directory that is easily accessible by IT tools, and in which - apart from other stuff it may keep there - is designated to contain all sorts of curated documentation. Thus, this directory (or one or more of its subdirectories) can be designated as ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directories")," for the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes")," that the ",(0,o.kt)("a",{parentName:"p",href:"@"},"community")," owns."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopedir")," may contain may contain lots of directories and files that are of no relevance for ",(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2"),", but it also contains files that are, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-files/ctext"},"Curated Texts")),", which contain documentation on ",(0,o.kt)("a",{parentName:"li",href:"@"},"knowledge artifacts")," (",(0,o.kt)("a",{parentName:"li",href:"@"},"concepts"),", ",(0,o.kt)("a",{parentName:"li",href:"@"},"mental models"),", etc.);"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-files/saf"},"Scope Administration File (SAF)")),", which contains data about the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope")," itself, pointers to (the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scopedirs")," of) other ",(0,o.kt)("a",{parentName:"li",href:"@"},"scopes")," that it relates to, and specifications of various versions of managed ",(0,o.kt)("a",{parentName:"li",href:"@"},"glossaries"),";"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-files/profile-templates"},"Profile Templates")),", i.e. templates that play a role in ",(0,o.kt)("a",{parentName:"li",href:"/docs/overview/tev2-design-principles#text-conversion-steps"},"text conversion steps"),";"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-files/mrg"},"Machine Readable Glossary (MRG)")),", which contains (machine readable) ",(0,o.kt)("a",{parentName:"li",href:"@"},"MRG entries")," that contain the various ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms")," of a ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope")," and pointers to the documentation of the ",(0,o.kt)("a",{parentName:"li",href:"@"},"knowledge artifacts")," that they refer to;"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-files/hrg"},"Human Readable Glossary (HRG)")),", i.e. human readable equivalents of the ",(0,o.kt)("a",{parentName:"li",href:"@"},"MRGs"),";")))}m.isMDXComponent=!0}}]);