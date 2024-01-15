"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=i,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(3117),i=a(7294),r=a(6010),s=a(2466),o=a(6775),l=a(1980),c=a(7392),d=a(12);function m(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function u(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,c]=h({queryString:a,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=l??m;return p({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var g=a(2389);const y="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==o&&(m(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:u},s,{className:(0,r.Z)("tabs__item",v,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",y)},i.createElement(b,(0,n.Z)({},e,t)),i.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return i.createElement(w,(0,n.Z)({key:String(t)},e))}},2300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(3117),i=(a(7294),a(3905)),r=(a(4996),a(4866)),s=a(5162);const o={id:"tev2-glossaries-demo",toc_min_heading_level:6,toc_max_heading_level:6,date:20231205},l="Glossary Generation Demo",c={unversionedId:"tev2-glossaries-demo",id:"tev2-glossaries-demo",title:"Glossary Generation Demo",description:"This page is evidence that an HRG can be generated for every MRG that is available within the scope. It also shows that HRGs can be generated in different formats.",source:"@site/docs/tev2-glossaries-demo.md",sourceDirName:".",slug:"/tev2-glossaries-demo",permalink:"/tev2-specifications/docs/tev2-glossaries-demo",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-glossaries-demo.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705330615,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"tev2-glossaries-demo",toc_min_heading_level:6,toc_max_heading_level:6,date:20231205},sidebar:"tev2SideBar",previous:{title:"TEv2 Glossary",permalink:"/tev2-specifications/docs/tev2-glossary"},next:{title:"Miscellanous",permalink:"/tev2-specifications/docs/category/miscellanous"}},d={},m=[],u={toc:m};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary-generation-demo"},"Glossary Generation Demo"),(0,i.kt)("p",null,"This page is evidence that an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," can be generated for every ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," that is available within the scope. It also shows that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," can be generated in different formats."),(0,i.kt)(r.Z,{defaultValue:"default",values:[{label:"TEv2 glossary",value:"default"},{label:"Curated Terms glossary",value:"terms"},{label:"Recent changes glossary",value:"recent-changes"},{label:"Mental Model glossary",value:"patterns"},{label:"Latest eSSIF-Lab glossary",value:"latest"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"default",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," for the default ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," within this (TEv2) ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", in the format as defined in file ",(0,i.kt)("inlineCode",{parentName:"p"},"terminology-config.yaml"),", which holds the default configurations for the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tools")," within the this ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,i.kt)("p",null,'{% hrg="tev2" %}')),(0,i.kt)(s.Z,{value:"terms",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," contains the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are curated within this (TEv2) ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". It is formatted as a ",(0,i.kt)("inlineCode",{parentName:"p"},"markdowntable"),".")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Term"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition")))),(0,i.kt)("p",null,'{% hrg=":terms" converter="markdown-table-row" %}')),(0,i.kt)(s.Z,{value:"recent-changes",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," contains the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are curated within this (TEv2) ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". It has a custom format, and is sorted according to the date of last change, as it appears in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRGEntry"),".")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Term"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"),(0,i.kt)("th",{parentName:"tr",align:null},"Updated"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'{% hrg=":terms" converter="'),(0,i.kt)("td",{parentName:"tr",align:null},"[{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]","({{localize navurl}})"),(0,i.kt)("td",{parentName:"tr",align:null},"{{#if glossaryText}}{{glossaryText}}{{else}}no ",(0,i.kt)("inlineCode",{parentName:"td"},"glossaryText")," was specified for this entry.{{/if}}"))))),(0,i.kt)(s.Z,{value:"patterns",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," lists the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental models")," (or ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"patterns"),") that are known within this (TEv2) scope. It is formatted in a custom format (specified by a handlebars expression template).")),(0,i.kt)("p",null,'{% hrg=":patterns" converter="## ',"[{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}]","({{localize navurl}})\\n\n{{#if glossaryText}}{{glossaryText}}{{else}}no ",(0,i.kt)("inlineCode",{parentName:"p"},"glossaryText"),' was specified for this entry.{{/if}}\\n" %}')),(0,i.kt)(s.Z,{value:"latest",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," version of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," within ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," that we know as ",(0,i.kt)("inlineCode",{parentName:"p"},"essif-lab"),". It is formatted using ",(0,i.kt)("inlineCode",{parentName:"p"},"markdown-section-3"),"."),(0,i.kt)("p",{parentName:"admonition"},"NOTE that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-entry",title:"HRG Entry: A specific kind of (human-readable) rendering of the combination of a Term and a means that helps Readers to understand the meaning of that Term when it is used in a sentence."},"HRG entries")," are sorted by the value of their ",(0,i.kt)("inlineCode",{parentName:"p"},"glossaryText"),".")),(0,i.kt)("p",null,'{% hrg="essif-lab:latest" converter="markdown-section-3" sorter="{{glossaryText}}" %}'))))}p.isMDXComponent=!0}}]);