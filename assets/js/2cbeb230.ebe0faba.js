"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2960],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(6010),i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(7462),n=a(7294),i=a(6010),l=a(2466),o=a(6775),s=a(1980),u=a(7392),d=a(12);function m(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function h(e){var t,a,r,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,m=p(e),h=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:m})})),k=h[0],g=h[1],N=f({queryString:s,groupId:u}),v=N[0],y=N[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,d.Nk)(t),r=a[0],i=a[1],[r,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=b[0],C=b[1],x=function(){var e=null!=v?v:w;return c({value:e,tabValues:m})?e:null}();return(0,n.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:k,selectValue:(0,n.useCallback)((function(e){if(!c({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),C(e)}),[y,C,m]),tabValues:m}}var k=a(2389),g="tabList__CuJ",N="tabItem_LNqP";function v(e){var t=e.className,a=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==o&&(m(t),s(r))},c=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,n=d.indexOf(e.currentTarget)+1;a=null!=(r=d[n])?r:d[0];break;case"ArrowLeft":var i,l=d.indexOf(e.currentTarget)-1;a=null!=(i=d[l])?i:d[d.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return d.push(e)},onKeyDown:c,onClick:p},l,{className:(0,i.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,r=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===r}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function b(e){var t=h(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",g)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return n.createElement(b,(0,r.Z)({key:String(t)},e))}},9016:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},mark:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=(a(4996),a(4866),a(5162),["components"]),o={id:"hrg-termselcrit",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20230103},s="HRG Selection Criteria",u={unversionedId:"tev2/spec-syntax/hrg-termselcrit",id:"tev2/spec-syntax/hrg-termselcrit",title:"HRG Selection Criteria",description:"text to mark",source:"@site/docs/tev2/spec-syntax/31-hrg-termselcrit.md",sourceDirName:"tev2/spec-syntax",slug:"/tev2/spec-syntax/hrg-termselcrit",permalink:"/tev2-specifications/docs/tev2/spec-syntax/hrg-termselcrit",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/spec-syntax/31-hrg-termselcrit.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1690867497,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:31,frontMatter:{id:"hrg-termselcrit",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20230103},sidebar:"tev2SideBar",previous:{title:"Form Phrases",permalink:"/tev2-specifications/docs/tev2/spec-syntax/form-phrase-syntax"},next:{title:"Terminology Construction",permalink:"/tev2-specifications/docs/tev2/spec-tools/terminology-construction"}},d={},m=[{value:"Adding terms",id:"syntax-add",level:2},{value:"Removing terms",id:"syntax-remove",level:2}],p=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},c={toc:m,mark:p};function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hrg-selection-criteria"},"HRG Selection Criteria"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," generate an ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," from a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),", they may want to specify the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," to be included in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," (or preventing specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," from being included)."),(0,i.kt)("p",null,"This can be done by using the same mechanism for ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/terminology-construction"},"terminology construction")," as is used for generating ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs"),". The differences are that there is only one source, i.e. the particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," from which the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," is generated. Thus, references to ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," that have no corresponding ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," in that ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," are invalid. Also, there is no need for renaming syntax."),(0,i.kt)("p",null,"If generating an ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," requires the selection of terms, the instructions are to be specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"termselcrit")," field of the configuration file specified as an argument on the command-line when calling the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT"),"."),(0,i.kt)("h2",{id:"syntax-add"},"Adding terms"),(0,i.kt)("p",null,"The following instructions can be used for adding ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," (whitespace in the syntax is disregarded):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"The instruction adds every ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG entry")," from the ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG")," to the ",(0,i.kt)("a",{parentName:"th",href:"@"},"terminology under construction")," ..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"terms [ <termslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"term"),"-field is an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags  [ <grouptagslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")," field contains an element that is also an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<grouptagslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"that exists within the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," from which the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG")," is generated.")))),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<termslist>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," are comma-separated lists of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," and ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags")," respectively."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," will only be added to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terminology under construction")," if it does not already exist.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"terms[party]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"finds the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entry")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," ",(0,i.kt)("inlineCode",{parentName:"td"},"party"),", and adds it to the selected set of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags[management,governance]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"finds the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," associated with the ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms")," ",(0,i.kt)("inlineCode",{parentName:"td"},"management")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"governance"),", and adds them to the selected set of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"left"},"selects all ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms")," from the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG"),", and adds them to the selected set of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms"),"."))))),(0,i.kt)("h2",{id:"syntax-remove"},"Removing terms"),(0,i.kt)("p",null,"The following instructions can be used for removing ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," from the set of selected ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," (whitespace in the syntax is disregarded):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"The instruction removes every ",(0,i.kt)("a",{parentName:"th",href:"@"},"MRG entry")," from the ",(0,i.kt)("a",{parentName:"th",href:"@"},"terminology under construction")," ..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-terms [ <termslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"term"),"-field is an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<termslist>"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-tags  [ <grouptagslist> ]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whose ",(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")," field contains an element that is also an element of ",(0,i.kt)("inlineCode",{parentName:"td"},"<groutagslist>"),".")))),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<termslist>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," are comma-separated lists of ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms"),", and ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags")," respectively."),(0,i.kt)("li",{parentName:"ul"},"Elements of the ",(0,i.kt)("inlineCode",{parentName:"li"},"<termslist>")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"<grouptagslist>")," that do not lead to the removal of an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," may be logged.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Instruction"),(0,i.kt)("th",{parentName:"tr",align:"left"},"What it does when processed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-terms[party, actor]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"removes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have either ",(0,i.kt)("inlineCode",{parentName:"td"},"party")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"actor")," in its ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," field.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-tags[management]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"removes all ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," that have a ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptag")," ",(0,i.kt)("inlineCode",{parentName:"td"},"management"),"."))))))}f.isMDXComponent=!0}}]);