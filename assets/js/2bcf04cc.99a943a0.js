"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[88],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4165:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},mark:function(){return m},metadata:function(){return c},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=a(4996),s=["components"],l={id:"hrgt-old",sidebar_label:"HR Glossary Generation (previous version)",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220421},p="Human Readable Glossary Generation Tool",c={unversionedId:"tev2/spec-tools/hrgt-old",id:"tev2/spec-tools/hrgt-old",title:"Human Readable Glossary Generation Tool",description:"<img",source:"@site/docs/tev2/spec-tools/22-hrgt-old.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/hrgt-old",permalink:"/tev2-specifications/docs/tev2/spec-tools/hrgt-old",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/spec-tools/22-hrgt-old.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689142331,formattedLastUpdatedAt:"Jul 12, 2023",sidebarPosition:22,frontMatter:{id:"hrgt-old",sidebar_label:"HR Glossary Generation (previous version)",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220421},sidebar:"tev2SideBar",previous:{title:"MR Glossary Generation",permalink:"/tev2-specifications/docs/tev2/spec-tools/mrgt"},next:{title:"HR Glossary Generation",permalink:"/tev2-specifications/docs/tev2/spec-tools/hrgt"}},d={},u=[],m=function(e){var t=e.children;return(0,o.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},h={toc:u,mark:m};function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"human-readable-glossary-generation-tool"},"Human Readable Glossary Generation Tool"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Glossary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"HRGT"),")")," generates a Human Readable ",(0,o.kt)("a",{parentName:"p",href:"@"},"Glossary")," (",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG"),"), that renders (a selection of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," of) the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," of a specific ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. (see also: ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"Using the Tools"),")."),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The envisaged versatility of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," is likely to imply requirements regarding, e.g.:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"the kinds of ",(0,o.kt)("a",{parentName:"li",href:"@"},"knowledge artifacts")," that should be listed;"),(0,o.kt)("li",{parentName:"ul"},"whether or not to include/exclude specific (groups of) ",(0,o.kt)("a",{parentName:"li",href:"knowledge-artifact@"},"artifacts"),";"),(0,o.kt)("li",{parentName:"ul"},"the format (e.g. HTML, PDF, LaTeX) to generate towards, and the structure of each ",(0,o.kt)("a",{parentName:"li",href:"@"},"HRG entry"),";"),(0,o.kt)("li",{parentName:"ul"},"the beginning (header) and ending (footer) of the ",(0,o.kt)("a",{parentName:"li",href:"@"},"HRG")," file\nand possibly some other stuff.")),(0,o.kt)("p",{parentName:"admonition"},"Before this can really be properly specified, we seek to do some experiments to see what is really needed in order to keep it as simple as possible. Therefore, the text that follows must be interpreted as Work in Progress.")),(0,o.kt)("p",null,"There is currently one implementation of the tool:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the repo in which the tool is being developed is ","[",(0,o.kt)("mark",null,"tbd"),"]","."),(0,o.kt)("li",{parentName:"ul"},"the documentation is ","[",(0,o.kt)("mark",null,"tbd"),"]",".")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," operates on a single ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", which contains (data and/or pointers to) ",(0,o.kt)("em",{parentName:"p"},"all")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," of that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,o.kt)("p",null,"The construction of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," can be envisaged as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"selecting the ",(0,o.kt)("a",{parentName:"li",href:"@"},"mrg entries")," that must appear in the ",(0,o.kt)("a",{parentName:"li",href:"@"},"HRG"),". Selection may depend on the specification of the kinds of ",(0,o.kt)("a",{parentName:"li",href:"@"},"knowledge artifacts")," that should be included, and/or specifying ",(0,o.kt)("a",{parentName:"li",href:"@"},"tags")," for the (groups of) ",(0,o.kt)("a",{parentName:"li",href:"knowledge-artifact@"},"artifacts"),", or specific ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms"),";"),(0,o.kt)("li",{parentName:"ul"},"alphabetically sorting these entries;"),(0,o.kt)("li",{parentName:"ul"},"converting each entry into its 'rendered' format, thereby resolving any ",(0,o.kt)("a",{parentName:"li",href:"@"},"term refs")," (by appropriately calling the ",(0,o.kt)("a",{parentName:"li",href:"@"},"TRRT"),"), adding hyperlinks to the ",(0,o.kt)("a",{parentName:"li",href:"@"},"curated text")," that the entry relates to, 'meta-data' (e.g. the associated ",(0,o.kt)("a",{parentName:"li",href:"@"},"grouptags"),", contributors, etc.), and anything else, as required for the particular kind of ",(0,o.kt)("a",{parentName:"li",href:"@"},"HRG")," that is being generated;"),(0,o.kt)("li",{parentName:"ul"},"concatenating these rendered entries, optionally including/inserting some navigation bars (e.g. before a new letter starts);"),(0,o.kt)("li",{parentName:"ul"},"constructing the ",(0,o.kt)("a",{parentName:"li",href:"@"},"HRG")," by adding (rendered) header- and footer-material and (optionally) licensing information.")),(0,o.kt)("p",null,"When a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," is generated that should become the default one for that scope, the ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," must be updated accordingly. Note though that this is not always necessary. For example, a user may want to create a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," for a selected subset of the terminology, e.g. to include as an annex in a paper."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," logs conditions that prevent it from properly"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"parsing a source document (e.g. because it is not in the expected format);"),(0,o.kt)("li",{parentName:"ul"},"resolving ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms"),", ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope tags"),", ",(0,o.kt)("a",{parentName:"li",href:"@"},"group tags"),", or ",(0,o.kt)("a",{parentName:"li",href:"@"},"version tags"),";"),(0,o.kt)("li",{parentName:"ul"},"writing the output (e.g. because it has no write-permission for the designated location);"),(0,o.kt)("li",{parentName:"ul"},"etc.;")),(0,o.kt)("p",null,"Also, the ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," provides suggestions that help tool-operators (",(0,o.kt)("a",{parentName:"p",href:"@"},"curators"),") to identify and fix any problems."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A specification is needed for the creation of a (simple) ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," (from an existing ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG"),").\nAny ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," need to be properly resolved.\nTitles of term entries may want to link to the original resource from which it was derived.\nChoice bars (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"[ A B C D .... Z ]")," may need to be inserted here and there).\nMeta-data (group tags, the scopetag of the scope where it was defined, contributors, versions, dates, etc.) may need to be included.\nThere must be some license notification.")))}f.isMDXComponent=!0}}]);