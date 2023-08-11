"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5102],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(a),f=r,c=h["".concat(p,".").concat(f)]||h[f]||d[f]||i;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1994:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(4996),l=["components"],p={id:"terminology-construction",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20220801},s="Terminology Construction",m={unversionedId:"tev2/spec-tools/terminology-construction",id:"tev2/spec-tools/terminology-construction",title:"Terminology Construction",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/spec-tools/20-terminology-construction.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/terminology-construction",permalink:"/tev2-specifications/docs/tev2/spec-tools/terminology-construction",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/spec-tools/20-terminology-construction.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1691746020,formattedLastUpdatedAt:"Aug 11, 2023",sidebarPosition:20,frontMatter:{id:"terminology-construction",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20220801},sidebar:"tev2SideBar",previous:{title:"Installation",permalink:"/tev2-specifications/docs/tev2/manuals/tev2-installation"},next:{title:"Authors",permalink:"/tev2-specifications/docs/tev2/manuals/author"}},d={},h=[{value:"Adding MRG Entries to the terminology under construction",id:"syntax-add",level:2},{value:"Removing MRG Entries from a terminology under construction",id:"syntax-remove",level:2},{value:"Rename/rewrite specific parts of an MRG entry",id:"syntax-rename",level:2}],f={toc:h};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"terminology-construction"},"Terminology Construction"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"Curators")," need the ability to construct (different versions of) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," for any ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," they ",(0,i.kt)("a",{parentName:"p",href:"@"},"curate"),"."),(0,i.kt)("p",null,"Constructing a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," consists of specifying the set of ",(0,i.kt)("a",{parentName:"p",href:"scoped-term@"},"terms")," that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," consists of, and making sure there is an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," that holds all associated (meta) data that other (e.g. third party) tools may need. In other words, it consists of constructing the set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," for the ",(0,i.kt)("a",{parentName:"p",href:"scoped-term@"},"terms")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," contains (meta) data about (the ",(0,i.kt)("a",{parentName:"p",href:"@"},"(scoped) term")," that represents/",(0,i.kt)("a",{parentName:"p",href:"@"},"identifies"),") a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," (an illustration can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/terms/patterns/pattern-terminology#formalized-model"},"terminology support pattern"),"). For constructing a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),", the following such data is relevant (as it enables one to ",(0,i.kt)("a",{parentName:"p",href:"@"},"identify")," (groups of) ",(0,i.kt)("a",{parentName:"p",href:"scoped-term@"},"terms")," that are to become part of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the (preferred) ",(0,i.kt)("a",{parentName:"li",href:"@"},"(scoped) term")," that represents the ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact"),", and its synonymous ",(0,i.kt)("a",{parentName:"li",href:"scoped-term@"},"terms"),";"),(0,i.kt)("li",{parentName:"ul"},"various ",(0,i.kt)("a",{parentName:"li",href:"@"},"tags"),", amongst which are the ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags")," that indicate the groups of ",(0,i.kt)("a",{parentName:"li",href:"scoped-term@"},"terms")," that the ",(0,i.kt)("a",{parentName:"li",href:"scoped-term@"},"term")," is a member of.")),(0,i.kt)("p",null,"The process for creating a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"start with an empty set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entries"),' - we use the term "',(0,i.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),'" to refer to this set.'),(0,i.kt)("li",{parentName:"ol"},"sequentially process a list of so-called '",(0,i.kt)("a",{parentName:"li",href:"@"},"term selection criteria"),"' (i.e. instructions), which allow for")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#syntax-add"},"adding")," ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entries")," to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),"; these can either be ",(0,i.kt)("a",{parentName:"li",href:"mrg-entry@"},"entries")," that have been created from ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated texts"),", or ",(0,i.kt)("a",{parentName:"li",href:"mrg-entry@"},"entries")," whose contents is obtained from an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," other than the one that is being created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#syntax-remove"},"removing")," ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entries")," from the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#syntax-rename"},"modifying attributes")," of a specific ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology under construction"),", e.g. for renaming a term that originated from another ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"Curators")," create and maintain the list of '",(0,i.kt)("a",{parentName:"p",href:"@"},"term selection criteria"),"', i.e. instructions for constructing a specific (version of a) ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". Each such (versioned) ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," has an entry in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/saf#versions"},(0,i.kt)("inlineCode",{parentName:"a"},"versions")," section")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," (of the designated ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"), and the ",(0,i.kt)("a",{parentName:"p",href:"@"},"term selection criteria")," reside in the ",(0,i.kt)("inlineCode",{parentName:"p"},"termselcrit")," field of that section."),(0,i.kt)("h2",{id:"syntax-add"},"Adding MRG Entries to the ",(0,i.kt)("a",{parentName:"h2",href:"@"},"terminology under construction")),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"curator")," can add ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," to the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology under construction")," from different sources, i.e."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," that are defined in a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," that exists in the current ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," that are defined by an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," in an existing ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," (from another ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", or another version of the current ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),").")),(0,i.kt)("p",null,"Note that any reference to (an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," in) (the specific version of) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," that is being constructed, MUST be interpreted as a reference to the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," from which the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," would have been constructed."),(0,i.kt)("p",null,"The following instructions can be used for adding ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," (whitespace in the syntax is disregarded):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction",(0,i.kt)("sup",null,"*)")),(0,i.kt)("th",{parentName:"tr",align:"left"},"The instruction creates, and subsequently adds an ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG entry")," for every ",(0,i.kt)("a",{parentName:"th",href:"@"},"curated text")," ..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"terms [ <termslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"that documents the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that is represented by a ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," that appears in the ",(0,i.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags [ <grouptagslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"that has an element in the list of ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptags")," that also appears in the ",(0,i.kt)("inlineCode",{parentName:"td"},"<grouptagslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"that exists within the current ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<termslist>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<grouptagslist>")," are comma-separated lists of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," and ",(0,i.kt)("a",{parentName:"p",href:"@"},"grouptags")," respectively."),(0,i.kt)("p",null,"*) It is allowed to add ",(0,i.kt)("inlineCode",{parentName:"p"},"@<scopetag>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@<scopetag>:<vsntag>")," to the instruction syntax, the effect of which is that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," are not created from ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts"),", but rather selected from the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," that holds (the specified version of) the ","[terminology]"," of the specified ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},":<vsntag>")," isn't used, the default ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," from the specified ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," will be used."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"terms[party]@essiflab:v3.1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"gets version ",(0,i.kt)("inlineCode",{parentName:"td"},"v3.1")," of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," from the scope ",(0,i.kt)("inlineCode",{parentName:"td"},"essiflab"),", finds the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entry")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," ",(0,i.kt)("inlineCode",{parentName:"td"},"party"),", and adds a copy to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags[management,governance]@toip")),(0,i.kt)("td",{parentName:"tr",align:"left"},"gets the default version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," from the scope ",(0,i.kt)("inlineCode",{parentName:"td"},"toip"),", finds the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have ",(0,i.kt)("inlineCode",{parentName:"td"},"management")," and/or ",(0,i.kt)("inlineCode",{parentName:"td"},"governance")," as one of their ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptags"),", and adds a copy for each of them to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"* @essif-lab")),(0,i.kt)("td",{parentName:"tr",align:"left"},"gets the default version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," from the scope ",(0,i.kt)("inlineCode",{parentName:"td"},"essif-lab"),", and adds a copy of all of its ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"* @")),(0,i.kt)("td",{parentName:"tr",align:"left"},"creates an ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entry")," for every ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," in the current ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),", and adds them to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology under construction"),"."))))),(0,i.kt)("h2",{id:"syntax-remove"},"Removing MRG Entries from a ",(0,i.kt)("a",{parentName:"h2",href:"@"},"terminology under construction")),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"curator")," can remove ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," from the tuple set, using the following syntax (whitespace in the syntax is disregarded):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-tags [ <grouptagslist> ]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-terms [ <termslist> ]"))),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"curator")," can remove ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," from the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology under construction")," in different ways, using the following instructions (whitespace is disregarded):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction",(0,i.kt)("sup",null,"*)")),(0,i.kt)("th",{parentName:"tr",align:"left"},"The instruction removes an ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG entry")," from the ",(0,i.kt)("a",{parentName:"th",href:"@"},"terminology under construction")," if ..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-tags [ <grouptagslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"one of its ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptags")," appears in the ",(0,i.kt)("inlineCode",{parentName:"td"},"<groutagslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-terms [ <termslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," that it specifies is an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<termslist>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<grouptagslist>")," are comma-separated lists of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms"),", and ",(0,i.kt)("a",{parentName:"p",href:"@"},"grouptags")," respectively."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-terms[party, actor]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"removes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that specifies ",(0,i.kt)("inlineCode",{parentName:"td"},"party")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"actor")," as its ",(0,i.kt)("a",{parentName:"td",href:"@"},"term"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-tags[management]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"removes all ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have a ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptag")," ",(0,i.kt)("inlineCode",{parentName:"td"},"management"),"."))))),(0,i.kt)("h2",{id:"syntax-rename"},"Rename/rewrite specific parts of an MRG entry"),(0,i.kt)("img",{alt:"From this point onward, texts are under construction",src:(0,o.Z)("images/wip/wip-under-construction-from-here-onward.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"In analogy with ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Namespace"},"namespaces"),", we accommodate for the renaming of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," as they are 'imported' from ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminologies")," other than the one that we are constructing. However, the analogy breaks down in the sense that it is not only a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," that should be renameable (which is sufficient for ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Namespace"},"namespaces"),"), but also certain attributes may need to be changed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rename <term> [ <fieldmodifierlist> ]"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Syntax examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"What it does when it is processed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rename party partij")),(0,i.kt)("td",{parentName:"tr",align:"left"},"renames the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," that is currently associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," ",(0,i.kt)("inlineCode",{parentName:"td"},"party")," into ",(0,i.kt)("inlineCode",{parentName:"td"},"partij"),"."))))),(0,i.kt)("p",null,"where:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"symbol"),(0,i.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<term>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," of the tuple that will be selected for renaming.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<fieldmodifierlist>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a (non-empty) comma-separated list of ",(0,i.kt)("inlineCode",{parentName:"td"},"<fieldmodifier>"),"s.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<fieldmodifier>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a ",(0,i.kt)("inlineCode",{parentName:"td"},"<key>: <value>")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"{ <key>: <value> }")," pair - to be decided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<key>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a text that identifies a field in an ","[MRG entry]",", the value of which is to be changed, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"formphrases"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"grouptags"),", etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a text that will replace the existing text of the field identified by ",(0,i.kt)("inlineCode",{parentName:"td"},"<key>"),".")))),(0,i.kt)("p",null,"This syntax is processed by first selecting the tuple (in the tuple set that is being constructed) that has the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"<term>")," as its ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),"-field, and then sequentially processing the ",(0,i.kt)("inlineCode",{parentName:"p"},"<fieldmodifier>"),"s in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<fieldmodifierlist>"),", which means that the existing text of the field that is identified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>")," element of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<fieldmodifier>")," is replaced by the text specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"<value>")," element of that ",(0,i.kt)("inlineCode",{parentName:"p"},"<fieldmodifier>"),"."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ability to rename terms as they are imported may introduce some issues related to other field-names, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"formphrases"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"synonyms"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"glossaryText"),"s and possibly some others. Perhaps this syntax should therefore be extended, enabling ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," to simultaneously change these (and other) fields in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry"),".")))}c.isMDXComponent=!0}}]);