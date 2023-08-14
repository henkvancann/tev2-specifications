"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8366],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5440:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},mark:function(){return f},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(4996),["components"]),s={id:"tev2-syntax",date:20220819},c="TEv2 - Syntax (Specs)",l={unversionedId:"tev2-syntax",id:"tev2-syntax",title:"TEv2 - Syntax (Specs)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2-syntax.md",sourceDirName:".",slug:"/tev2-syntax",permalink:"/tev2-specifications/docs/tev2-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1692021704,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"tev2-syntax",date:20220819},sidebar:"tev2SideBar",previous:{title:"HRD (Human Readable Dictionary)",permalink:"/tev2-specifications/docs/spec-files/hrd"},next:{title:"Term References",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-syntax"}},p={},u=[],f=function(e){var t=e.children;return(0,o.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},m={toc:u,mark:f};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tev2---syntax-specs"},"TEv2 - Syntax (Specs)"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2")," uses specific syntaxes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/term-ref-syntax"},"TermReference Syntax"))," is the syntax allowed to author ",(0,o.kt)("a",{parentName:"li",href:"@"},"TermRefs")," (in source documents, see ",(0,o.kt)("mark",null,"reference needed"),");"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/form-phrase-syntax"},"Form Phrases Syntax")),", i.e. the syntax that ",(0,o.kt)("a",{parentName:"li",href:"@"},"authors")," need to specify ",(0,o.kt)("a",{parentName:"li",href:"@"},"form phrases")," (in the ",(0,o.kt)("inlineCode",{parentName:"li"},"formPhrases")," field of ",(0,o.kt)("a",{parentName:"li",href:"@"},"curated texts")," - see the ",(0,o.kt)("a",{parentName:"li",href:"/docs/spec-files/ctext"},"curated text file specs"),");"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/spec-tools/terminology-construction"},"Terminology Construction Syntax")),", i.e. the syntax for the ",(0,o.kt)("a",{parentName:"li",href:"@"},"term selection criteria")," that ",(0,o.kt)("a",{parentName:"li",href:"@"},"curators")," need to specify the contents of a ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology"),".")))}d.isMDXComponent=!0}}]);