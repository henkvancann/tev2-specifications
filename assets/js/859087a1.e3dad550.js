"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var a=r(3117),n=r(7294),o=r(6010),s=r(2466),i=r(6775),l=r(1980),c=r(7392),u=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:r,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=l??d;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=r(2389);const y="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==i&&(d(t),l(a))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:p},s,{className:(0,o.Z)("tabs__item",g,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},7508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,mark:()=>d,metadata:()=>l,toc:()=>u});var a=r(3117),n=(r(7294),r(3905)),o=r(4996);r(4866),r(5162);const s={id:"termref-selector",sidebar_label:"TermRef Selector",date:20231031},i="TermRef Selector Tool",l={unversionedId:"specs/tools-envisaged/termref-selector",id:"specs/tools-envisaged/termref-selector",title:"TermRef Selector Tool",description:"<img",source:"@site/docs/specs/tools-envisaged/13-termref-selector.md",sourceDirName:"specs/tools-envisaged",slug:"/specs/tools-envisaged/termref-selector",permalink:"/tev2-specifications/docs/specs/tools-envisaged/termref-selector",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/tools-envisaged/13-termref-selector.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704988698,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:13,frontMatter:{id:"termref-selector",sidebar_label:"TermRef Selector",date:20231031},sidebar:"tev2SideBar",previous:{title:"Integrity Checker Tool (ICT)",permalink:"/tev2-specifications/docs/specs/tools-envisaged/ict"},next:{title:"MR Dictionary Generation",permalink:"/tev2-specifications/docs/specs/tools-envisaged/mrdt"}},c={},u=[],d=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},p={toc:u,mark:d};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"termref-selector-tool"},"TermRef Selector Tool"),(0,n.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"TermRef Selector")," tool is a tool that helps you as you create purpose-specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary (MRG): a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs"),", such as an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary (MRG): a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," that contains an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," for every ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," that you use in a particular (set of) document(s), which you can subsequently use to generate a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," for."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This idea needs to be thought through. One of the questions would be whether you would want the tool to create a set of term-selection instructions (to be inserted in an entry in the ",(0,n.kt)("inlineCode",{parentName:"p"},"termselection"),"-section of a SAF), or whether this tool is another kind of MRGT that simply creates such an MRG.")))}f.isMDXComponent=!0}}]);