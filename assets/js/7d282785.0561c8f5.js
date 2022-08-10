"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2480],{429:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(3117),r=a(102),s=(a(7294),a(3905)),i=(a(4996),["components"]),o={id:"form-phrase-syntax",title:"Form Phrases - Syntax",sidebar_label:"Form Phrases",hide_table_of_contents:!0,scopetag:"tev2",date:20220808},l=void 0,p={unversionedId:"tev2/spec-syntax/form-phrase-syntax",id:"tev2/spec-syntax/form-phrase-syntax",title:"Form Phrases - Syntax",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/spec-syntax/21-form-phrase-syntax.md",sourceDirName:"tev2/spec-syntax",slug:"/tev2/spec-syntax/form-phrase-syntax",permalink:"/framework/docs/tev2/spec-syntax/form-phrase-syntax",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-syntax/21-form-phrase-syntax.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1660028426,formattedLastUpdatedAt:"Aug 9, 2022",sidebarPosition:21,frontMatter:{id:"form-phrase-syntax",title:"Form Phrases - Syntax",sidebar_label:"Form Phrases",hide_table_of_contents:!0,scopetag:"tev2",date:20220808},sidebar:"tev2SideBar",previous:{title:"Term References",permalink:"/framework/docs/tev2/spec-syntax/term-ref-syntax"},next:{title:"Calling tools",permalink:"/framework/docs/tev2/spec-tools/using-toolbox-tools"}},m={},d=[],h={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,s.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,s.kt)("br",null),(0,s.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,s.kt)("p",null,"This document specifies the syntax of ",(0,s.kt)("a",{parentName:"p",href:"@"},"form phrases"),", i.e. texts that are"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"specified in the header field ",(0,s.kt)("inlineCode",{parentName:"li"},"formphrases")," in ",(0,s.kt)("a",{parentName:"li",href:"@"},"curated texts"),";"),(0,s.kt)("li",{parentName:"ul"},"conformant to the (PCRE) regex ",(0,s.kt)("inlineCode",{parentName:"li"},"(?:\\[\\s*([a-z0-9_-{}]+)\\s*(?:,\\s*([a-z0-9_-{}]+))*\\s*\\])?")," (see ",(0,s.kt)("a",{parentName:"li",href:"https://www.debuggex.com/r/C0IZ2ZN-qnQzGB2B"},"Debuggex")," for a visualization)."),(0,s.kt)("li",{parentName:"ul"},"present in ",(0,s.kt)("a",{parentName:"li",href:"@"},"MRG entries"),";"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/trrt#id"},"used to convert")," the ",(0,s.kt)("inlineCode",{parentName:"li"},"show text")," parts of ",(0,s.kt)("a",{parentName:"li",href:"@"},"term refs")," into ",(0,s.kt)("inlineCode",{parentName:"li"},"id"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).")),(0,s.kt)("p",null,"Note that the ",(0,s.kt)("a",{parentName:"p",href:"/docs/tev2/spec-syntax/form-phrase-syntax"},"syntax of ",(0,s.kt)("inlineCode",{parentName:"a"},"formphrases"))," enables the use use of 'macro's, i.e. shorthand syntax that represent regexes that allow for extended matching."),(0,s.kt)("p",null,"A formphrase 'macro' is a set of characters between braces ",(0,s.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"}")," that are shorthand for a matcher regex, and can be used by authors to conventiently specify a set of phrases that, when matched, would refer to the ",(0,s.kt)("a",{parentName:"p",href:"@"},"curated text")," in which they are specified."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Example and explanation of how it works"),(0,s.kt)("p",null,"Suppose we have a ",(0,s.kt)("a",{parentName:"p",href:"@"},"curated text")," for the term ",(0,s.kt)("inlineCode",{parentName:"p"},"actor"),", and in its front matter, we specify:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"formphrases: actor{ss}\n")),(0,s.kt)("p",null,"The part ",(0,s.kt)("inlineCode",{parentName:"p"},"{ss}")," is a macro, that suppose it is associated with the regex ",(0,s.kt)("inlineCode",{parentName:"p"},"(?:'?s|\\(s\\))?"),"."),(0,s.kt)("p",null,"When the ",(0,s.kt)("a",{parentName:"p",href:"@"},"trrt")," converts a ",(0,s.kt)("a",{parentName:"p",href:"@"},"ref text"),", one of the things it needs to do is to ",(0,s.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/trrt#id"},"convert a so-called ",(0,s.kt)("inlineCode",{parentName:"a"},"show-text")," into an ",(0,s.kt)("inlineCode",{parentName:"a"},"id"))," that exists in some ",(0,s.kt)("a",{parentName:"p",href:"@"},"curated text"),". If the ",(0,s.kt)("inlineCode",{parentName:"p"},"show-text")," does not match the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," of any of the ",(0,s.kt)("a",{parentName:"p",href:"@"},"curated texts"),", the ",(0,s.kt)("a",{parentName:"p",href:"@"},"trrt")," will try to match it against every form phrase in every ",(0,s.kt)("a",{parentName:"p",href:"@"},"curated text"),", including the formphrase ",(0,s.kt)("inlineCode",{parentName:"p"},"actor{ss}"),"."),(0,s.kt)("p",null,"This is done as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"all macros in the formphrase are replaced with their respective regexes, thereby transforming the formphrase into a regex itself;"),(0,s.kt)("li",{parentName:"ol"},"a regex engine is called that determines whether or not ",(0,s.kt)("inlineCode",{parentName:"li"},"show-text")," satisfies that regex. If (and only if) it does, there is a match."))),(0,s.kt)("p",null,"An ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," is said to match such an element if and only if the regex that consists of the list element (with the macro replaced with the regex that it is shorthand for) matches that ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,s.kt)("admonition",{title:"Editor's note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"As the ",(0,s.kt)("a",{parentName:"p",href:"@"},"trrt")," has not yet been fully specified, nor implemented, the table below must currently be seen as a set of macro's that we intend to implement, but may not yet be there. The workaround is to replace a formphrase that is an element in the list of formphrases in a ",(0,s.kt)("a",{parentName:"p",href:"@"},"curated text")," with the set of words that it stands for. If you maintain ",(0,s.kt)("a",{parentName:"p",href:"@"},"curated texts")," with a good editor, e.g. VSCode, that should not be an issue as these macros are easily found and replaced by their expansions.")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"macro"),(0,s.kt)("th",{parentName:"tr",align:"center"},"regex"),(0,s.kt)("th",{parentName:"tr",align:"center"},"example"),(0,s.kt)("th",{parentName:"tr",align:"left"},"texts that the example matches"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"{ss}")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("code",null,"('?s","|","(s",")",")?")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"actor{ss}")),(0,s.kt)("td",{parentName:"tr",align:"left"},'matches: "actor", "actors", "actor\'s", and "actor(s)"')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"{yies}")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("code",null,"(y","|","y's","|","ies)")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"part{yies}")),(0,s.kt)("td",{parentName:"tr",align:"left"},'matches: "party", "party\'s", and "parties"')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"{ying}")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("code",null,"(y","|","ier","|","ying","|","ies","|","ied)")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"identif{ying}")),(0,s.kt)("td",{parentName:"tr",align:"left"},'matches: "identify", "identifier", "identifying", "identifies", and "identified"')))))}c.isMDXComponent=!0}}]);