"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9825],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return p}});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),c=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(a),p=n,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return a?i.createElement(h,o(o({ref:e},d),{},{components:a})):i.createElement(h,o({ref:e},d))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:function(t,e,a){a.d(e,{Z:function(){return o}});var i=a(7294),n=a(6010),r="tabItem_Ymn6";function o(t){var e=t.children,a=t.hidden,o=t.className;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},e)}},4866:function(t,e,a){a.d(e,{Z:function(){return T}});var i=a(7462),n=a(7294),r=a(6010),o=a(2466),s=a(6775),l=a(1980),c=a(7392),d=a(12);function m(t){return function(t){var e,a;return null!=(e=null==(a=n.Children.map(t,(function(t){if(!t||(0,n.isValidElement)(t)&&(e=t.props)&&"object"==typeof e&&"value"in e)return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?e:[]}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function u(t){var e=t.values,a=t.children;return(0,n.useMemo)((function(){var t=null!=e?e:m(a);return function(t){var e=(0,c.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,a])}function p(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function h(t){var e=t.queryString,a=void 0!==e&&e,i=t.groupId,r=(0,s.k6)(),o=function(t){var e=t.queryString,a=void 0!==e&&e,i=t.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:a,groupId:i});return[(0,l._X)(o),(0,n.useCallback)((function(t){if(o){var e=new URLSearchParams(r.location.search);e.set(o,t),r.replace(Object.assign({},r.location,{search:e.toString()}))}}),[o,r])]}function f(t){var e,a,i,r,o=t.defaultValue,s=t.queryString,l=void 0!==s&&s,c=t.groupId,m=u(t),f=(0,n.useState)((function(){return function(t){var e,a=t.defaultValue,i=t.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+i.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(e=i.find((function(t){return t.default})))?e:i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:m})})),g=f[0],y=f[1],b=h({queryString:l,groupId:c}),k=b[0],v=b[1],w=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:c}.groupId),a=(0,d.Nk)(e),i=a[0],r=a[1],[i,(0,n.useCallback)((function(t){e&&r.set(t)}),[e,r])]),T=w[0],N=w[1],G=function(){var t=null!=k?k:T;return p({value:t,tabValues:m})?t:null}();return(0,n.useLayoutEffect)((function(){G&&y(G)}),[G]),{selectedValue:g,selectValue:(0,n.useCallback)((function(t){if(!p({value:t,tabValues:m}))throw new Error("Can't select invalid tab value="+t);y(t),v(t),N(t)}),[v,N,m]),tabValues:m}}var g=a(2389),y="tabList__CuJ",b="tabItem_LNqP";function k(t){var e=t.className,a=t.block,s=t.selectedValue,l=t.selectValue,c=t.tabValues,d=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(t){var e=t.currentTarget,a=d.indexOf(e),i=c[a].value;i!==s&&(m(e),l(i))},p=function(t){var e,a=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":var i,n=d.indexOf(t.currentTarget)+1;a=null!=(i=d[n])?i:d[0];break;case"ArrowLeft":var r,o=d.indexOf(t.currentTarget)-1;a=null!=(r=d[o])?r:d[d.length-1]}null==(e=a)||e.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},c.map((function(t){var e=t.value,a=t.label,o=t.attributes;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:function(t){return d.push(t)},onKeyDown:p,onClick:u},o,{className:(0,r.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":s===e})}),null!=a?a:e)})))}function v(t){var e=t.lazy,a=t.children,i=t.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){var o=r.find((function(t){return t.props.value===i}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==i})})))}function w(t){var e=f(t);return n.createElement("div",{className:(0,r.Z)("tabs-container",y)},n.createElement(k,(0,i.Z)({},t,e)),n.createElement(v,(0,i.Z)({},t,e)))}function T(t){var e=(0,g.Z)();return n.createElement(w,(0,i.Z)({key:String(e)},t))}},1056:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},mark:function(){return u},metadata:function(){return c},toc:function(){return m}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),o=(a(4996),a(4866),a(5162),["components"]),s={id:"hrg-termselcrit",date:20230103},l="HRG Selection Criteria",c={unversionedId:"spec-syntax/hrg-termselcrit",id:"spec-syntax/hrg-termselcrit",title:"HRG Selection Criteria",description:"text to mark",source:"@site/docs/spec-syntax/31-hrg-termselcrit.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/hrg-termselcrit",permalink:"/tev2-specifications/docs/spec-syntax/hrg-termselcrit",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/31-hrg-termselcrit.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1694172332,formattedLastUpdatedAt:"Sep 8, 2023",sidebarPosition:31,frontMatter:{id:"hrg-termselcrit",date:20230103},sidebar:"tev2SideBar",previous:{title:"Form Phrases",permalink:"/tev2-specifications/docs/spec-syntax/form-phrase-syntax"},next:{title:"Terminology Construction",permalink:"/tev2-specifications/docs/spec-tools/terminology-construction"}},d={},m=[{value:"Adding terms",id:"syntax-add",level:2},{value:"Removing terms",id:"syntax-remove",level:2}],u=function(t){var e=t.children;return(0,r.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},e)},p={toc:m,mark:u};function h(t){var e=t.components,a=(0,n.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hrg-selection-criteria"},"HRG Selection Criteria"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,r.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",title:"Curator: {(noRefs glossaryText)}"},"curators")," generate an ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," from a particular ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", they may want to specify the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," to be included in the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," (or preventing specific ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entries: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," from being included)."),(0,r.kt)("p",null,"This can be done by using the same mechanism for ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/terminology-construction"},"terminology construction")," as is used for generating ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs"),". The differences are that there is only one source, i.e. the particular ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," from which the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," is generated. Thus, references to ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," that have no corresponding ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," in that ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," are invalid. Also, there is no need for renaming syntax."),(0,r.kt)("p",null,"If generating an ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," requires the selection of terms, the instructions are to be specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"termselcrit")," field of the configuration file specified as an argument on the command-line when calling the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/hrgt",title:"Human Readable Glossary Tool (HRGT): a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),"."),(0,r.kt)("h2",{id:"syntax-add"},"Adding terms"),(0,r.kt)("p",null,"The following instructions can be used for adding ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," (whitespace in the syntax is disregarded):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"The instruction adds every ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," from the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," to the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology-under-construction",title:"Terminology Under Construction: a set of Terms (that is initially empty), to which Terms can be added or removed as specified by Term Selection Criteria, so as to ultimately result in a proper Terminology."},"terminology under construction")," ..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"terms [ <termslist> ]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,r.kt)("inlineCode",{parentName:"td"},"term"),"-field is an element of ",(0,r.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tags  [ <grouptagslist> ]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,r.kt)("inlineCode",{parentName:"td"},"grouptags")," field contains an element that is also an element of ",(0,r.kt)("inlineCode",{parentName:"td"},"<grouptagslist>"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"that exists within the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," from which the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," is generated.")))),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<termslist>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," are comma-separated lists of ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," and ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/grouptag",title:"Grouptags: a Tag that is used to group Terms within a specific Scope."},"grouptags")," respectively."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," will only be added to the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology-under-construction",title:"Terminology Under Construction: a set of Terms (that is initially empty), to which Terms can be added or removed as specified by Term Selection Criteria, so as to ultimately result in a proper Terminology."},"terminology under construction")," if it does not already exist.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"terms[party]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"finds the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," associated with the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"term")," ",(0,r.kt)("inlineCode",{parentName:"td"},"party"),", and adds it to the selected set of ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tags[management,governance]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"finds the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entries: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," associated with the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," ",(0,r.kt)("inlineCode",{parentName:"td"},"management")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"governance"),", and adds them to the selected set of ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:"left"},"selects all ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," from the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", and adds them to the selected set of ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms"),"."))))),(0,r.kt)("h2",{id:"syntax-remove"},"Removing terms"),(0,r.kt)("p",null,"The following instructions can be used for removing ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," from the set of selected ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms")," (whitespace in the syntax is disregarded):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"The instruction removes every ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," from the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology-under-construction",title:"Terminology Under Construction: a set of Terms (that is initially empty), to which Terms can be added or removed as specified by Term Selection Criteria, so as to ultimately result in a proper Terminology."},"terminology under construction")," ..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-terms [ <termslist> ]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,r.kt)("inlineCode",{parentName:"td"},"term"),"-field is an element of ",(0,r.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-tags  [ <grouptagslist> ]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,r.kt)("inlineCode",{parentName:"td"},"grouptags")," field contains an element that is also an element of ",(0,r.kt)("inlineCode",{parentName:"td"},"<groutagslist>"),".")))),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<termslist>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," are comma-separated lists of ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/term",title:"Terms: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Knowledge Artifact (in some Scope)."},"terms"),", and ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/grouptag",title:"Grouptags: a Tag that is used to group Terms within a specific Scope."},"grouptags")," respectively."),(0,r.kt)("li",{parentName:"ul"},"Elements of the ",(0,r.kt)("inlineCode",{parentName:"li"},"<termslist>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," that do not lead to the removal of an ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," may be logged.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-terms[party, actor]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"removes the ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entries: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," that have either ",(0,r.kt)("inlineCode",{parentName:"td"},"party")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"actor")," in its ",(0,r.kt)("inlineCode",{parentName:"td"},"term")," field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-tags[management]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"removes all ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",title:"Mrg-entries: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Knowledge Artifact, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," that have a ",(0,r.kt)("a",{href:"https:/tno-terminology-design.github.io/tev2-specifications/docs/terms/grouptag",title:"Grouptag: a Tag that is used to group Terms within a specific Scope."},"grouptag")," ",(0,r.kt)("inlineCode",{parentName:"td"},"management"),"."))))))}h.isMDXComponent=!0}}]);