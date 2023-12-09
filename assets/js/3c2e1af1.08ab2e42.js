"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||f[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(3117),r=(a(7294),a(3905));const i={id:"terminology-identifier-syntax",sidebar_label:"Terminology Identifiers",date:20230929},o="Terminology Identifiers",l={unversionedId:"spec-syntax/terminology-identifier-syntax",id:"spec-syntax/terminology-identifier-syntax",title:"Terminology Identifiers",description:"A Terminology Identifier a text that identifies a terminology from within a particular scope, and can also be used to find the MRG file (in the glossarydir of that same scope) that contains entries for every term contained in that terminology.",source:"@site/docs/spec-syntax/31-terminology-identifier-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/terminology-identifier-syntax",permalink:"/tev2-specifications/docs/spec-syntax/terminology-identifier-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/31-terminology-identifier-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702160223,formattedLastUpdatedAt:"Dec 9, 2023",sidebarPosition:31,frontMatter:{id:"terminology-identifier-syntax",sidebar_label:"Terminology Identifiers",date:20230929},sidebar:"tev2SideBar",previous:{title:"Term Identifiers",permalink:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax"},next:{title:"MRG References",permalink:"/tev2-specifications/docs/spec-syntax/mrg-ref-syntax"}},p={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],m={toc:s};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terminology-identifiers"},"Terminology Identifiers"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Terminology Identifier")," a ",(0,r.kt)("a",{parentName:"p",href:"identifier@"},"text")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," from within a particular ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),", and can also be used to find the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," file (in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossarydir")," of that same ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),") that contains ",(0,r.kt)("a",{parentName:"p",href:"mrg-entry@"},"entries")," for every ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," contained in that ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"The syntaxes that can be used for a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology identifier")," are as follows (note that such syntax is typically preceeded by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),"-character): "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(empty string, null)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopetag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"li"},"vsntag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":vsntag"))),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the empty string (null) ",(0,r.kt)("a",{parentName:"li",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," that is being used by default in the context in which the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology identifier")," is being used. Typically, that would be the default version of the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," in the current ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope"),". ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"scopetag"))," is a ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopetag")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"scopetag")," is omitted, the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," defaults to the current ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"vsntag"))," is a ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontag")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the  version of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," to be used. If ",(0,r.kt)("inlineCode",{parentName:"p"},":vsntag")," (including the ",(0,r.kt)("inlineCode",{parentName:"p"},":"),") is omitted, the default version of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," is assumed, as specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultvsn")," field in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#scope-section"},(0,r.kt)("inlineCode",{parentName:"a"},"scope"),"-section")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," in which the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," is maintained."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"In the following examples, we assume that "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tev2")," is a ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopetag")," that ",(0,r.kt)("a",{parentName:"li",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope")," in which the ",(0,r.kt)("a",{parentName:"li",href:"@"},"TEv2")," ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," is being ",(0,r.kt)("a",{parentName:"li",href:"@"},"curated"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"terms")," is a ",(0,r.kt)("a",{parentName:"li",href:"@"},"vsntag")," that ",(0,r.kt)("a",{parentName:"li",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," that consists of all ",(0,r.kt)("a",{parentName:"li",href:"@"},"terms")," that are ",(0,r.kt)("a",{parentName:"li",href:"@"},"defined")," within the ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope")," identified by ",(0,r.kt)("inlineCode",{parentName:"li"},"tev2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"myscope")," is a ",(0,r.kt)("a",{parentName:"li",href:"@"},"scopetag")," that ",(0,r.kt)("a",{parentName:"li",href:"@"},"identifies")," the current ",(0,r.kt)("a",{parentName:"li",href:"@"},"scope"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"terminology-identifier"),(0,r.kt)("th",{parentName:"tr",align:"left"},"refers to"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the default terminology of the ",(0,r.kt)("a",{parentName:"td",href:"@"},"current scope")," (i.e., ",(0,r.kt)("inlineCode",{parentName:"td"},"myscope"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@tev2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the default terminology of the scope ",(0,r.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@tev2:terms")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the terminology that contains all ",(0,r.kt)("a",{parentName:"td",href:"@"},"terms")," that are defined within the scope ",(0,r.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@:terms")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the terminology that contains all ",(0,r.kt)("a",{parentName:"td",href:"@"},"terms")," that are defined within the ",(0,r.kt)("a",{parentName:"td",href:"@"},"current scope")," (i.e.: ",(0,r.kt)("inlineCode",{parentName:"td"},"myscope"),").")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"When a ",(0,r.kt)("a",{parentName:"li",href:"@"},"terminology")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/spec-tools/mrg-terminology-construction"},"is being constructed"),", the empty string ",(0,r.kt)("a",{parentName:"li",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"li",href:"terminology-under-construction"},"terminology that is under construction"),"(@).",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);