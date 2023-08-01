"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2480],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,f=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},429:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=(a(4996),["components"]),s={id:"form-phrase-syntax",sidebar_label:"Form Phrases",hide_table_of_contents:!0,scopetag:"tev2",date:20220808},p="Form Phrases - Syntax",l={unversionedId:"tev2/spec-syntax/form-phrase-syntax",id:"tev2/spec-syntax/form-phrase-syntax",title:"Form Phrases - Syntax",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/spec-syntax/21-form-phrase-syntax.md",sourceDirName:"tev2/spec-syntax",slug:"/tev2/spec-syntax/form-phrase-syntax",permalink:"/tev2-specifications/docs/tev2/spec-syntax/form-phrase-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/spec-syntax/21-form-phrase-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1690867497,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:21,frontMatter:{id:"form-phrase-syntax",sidebar_label:"Form Phrases",hide_table_of_contents:!0,scopetag:"tev2",date:20220808},sidebar:"tev2SideBar",previous:{title:"Term References",permalink:"/tev2-specifications/docs/tev2/spec-syntax/term-ref-syntax"},next:{title:"HRG Selection Criteria",permalink:"/tev2-specifications/docs/tev2/spec-syntax/hrg-termselcrit"}},c={},m=[],d={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"form-phrases---syntax"},"Form Phrases - Syntax"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"This document specifies the syntax of ",(0,i.kt)("a",{parentName:"p",href:"@"},"form phrases"),", i.e. texts that are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"specified in the header field ",(0,i.kt)("inlineCode",{parentName:"li"},"formphrases")," in ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated texts"),";"),(0,i.kt)("li",{parentName:"ul"},"conformant to the (PCRE) regex ",(0,i.kt)("inlineCode",{parentName:"li"},"(?:\\s*(?:[a-z0-9_-{}]+)\\s*(?:,\\s*([a-z0-9_-{}]+))*)?")," (see ",(0,i.kt)("a",{parentName:"li",href:"https://www.debuggex.com/r/20MNb2zgNwLDD-dD"},"Debuggex")," for a visualization)."),(0,i.kt)("li",{parentName:"ul"},"present in ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entries"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/trrt#id"},"used to convert")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"show text")," parts of ",(0,i.kt)("a",{parentName:"li",href:"@"},"term refs")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"term"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-syntax/form-phrase-syntax"},"syntax of ",(0,i.kt)("inlineCode",{parentName:"a"},"formphrases"))," enables the use use of 'macro's, i.e. shorthand syntax that represent regexes that allow for extended matching."),(0,i.kt)("p",null,"A formphrase 'macro' is a set of characters between braces ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"}")," that are shorthand for a matcher regex, and can be used by ",(0,i.kt)("a",{parentName:"p",href:"@"},"authors")," to conventiently specify a set of phrases that, when matched, would refer to the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," in which they are specified."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example and explanation of how it works"),(0,i.kt)("p",null,"Suppose we have a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," for the term ",(0,i.kt)("inlineCode",{parentName:"p"},"actor"),", and in its front matter, we specify:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"formPhrases: actor{ss}\n")),(0,i.kt)("p",null,"The part ",(0,i.kt)("inlineCode",{parentName:"p"},"{ss}")," is a macro, that suppose it is associated with the regex ",(0,i.kt)("inlineCode",{parentName:"p"},"(?:'?s|\\(s\\))?"),"."),(0,i.kt)("p",null,"When the ",(0,i.kt)("a",{parentName:"p",href:"@"},"trrt")," converts a ",(0,i.kt)("a",{parentName:"p",href:"@"},"ref text"),", one of the things it needs to do is to ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/trrt#term"},"convert a so-called ",(0,i.kt)("inlineCode",{parentName:"a"},"show-text")," into a ",(0,i.kt)("inlineCode",{parentName:"a"},"term"))," that exists in some ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"show-text")," does not match the ",(0,i.kt)("inlineCode",{parentName:"p"},"term")," of any of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts"),", the ",(0,i.kt)("a",{parentName:"p",href:"@"},"trrt")," will try to match it against every form phrase in every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),", including the formphrase ",(0,i.kt)("inlineCode",{parentName:"p"},"actor{ss}"),"."),(0,i.kt)("p",null,"This is done as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"all macros in the formphrase are replaced with their respective regexes, thereby transforming the formphrase into a regex itself;"),(0,i.kt)("li",{parentName:"ol"},"a regex engine is called that determines whether or not ",(0,i.kt)("inlineCode",{parentName:"li"},"show-text")," satisfies that regex. If (and only if) it does, there is a match."))),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"term")," is said to match such an element if and only if the regex that consists of the list element (with the macro replaced with the regex that it is shorthand for) matches that ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),"."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As the ",(0,i.kt)("a",{parentName:"p",href:"@"},"trrt")," has not yet been fully specified, nor implemented, the table below must currently be seen as a set of macro's that we intend to implement, but may not yet be there. The workaround is to replace a formphrase that is an element in the list of formphrases in a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," with the set of words that it stands for. If you maintain ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," with a good editor, e.g. VSCode, that should not be an issue as these macros are easily found and replaced by their expansions.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"macro"),(0,i.kt)("th",{parentName:"tr",align:"center"},"regex"),(0,i.kt)("th",{parentName:"tr",align:"center"},"example"),(0,i.kt)("th",{parentName:"tr",align:"left"},"texts that the example matches"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ss}")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"('?s","|","(s",")",")?")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"actor{ss}")),(0,i.kt)("td",{parentName:"tr",align:"left"},'matches: "actor", "actors", "actor\'s", and "actor(s)"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{yies}")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"(y","|","y's","|","ies)")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"part{yies}")),(0,i.kt)("td",{parentName:"tr",align:"left"},'matches: "party", "party\'s", and "parties"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ying}")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"(y","|","ier","|","ying","|","ies","|","ied)")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"identif{ying}")),(0,i.kt)("td",{parentName:"tr",align:"left"},'matches: "identify", "identifier", "identifying", "identifies", and "identified"')))))}h.isMDXComponent=!0}}]);