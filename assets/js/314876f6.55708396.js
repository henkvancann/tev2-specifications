"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1584],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6775),s=n(1980),p=n(7392),m=n(12);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function u(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,c=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),k=f[0],g=f[1],N=h({queryString:s,groupId:p}),v=N[0],y=N[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,m.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=b[0],C=b[1],T=function(){var e=null!=v?v:w;return u({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!u({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),C(e)}),[y,C,c]),tabValues:c}}var k=n(2389),g="tabList__CuJ",N="tabItem_LNqP";function v(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,m=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=m.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=m.indexOf(e.currentTarget)+1;n=null!=(a=m[r])?a:m[0];break;case"ArrowLeft":var i,o=m.indexOf(e.currentTarget)-1;n=null!=(i=m[o])?i:m[m.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return m.push(e)},onKeyDown:u,onClick:d},o,{className:(0,i.Z)("tabs__item",N,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function b(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},5589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},mark:function(){return d},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(4996),n(4866),n(5162),["components"]),l={id:"mrg-importer",sidebar_label:"MRG Importer",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20230731},s="MRG Import Tool",p={unversionedId:"tev2/spec-tools/mrg-importer",id:"tev2/spec-tools/mrg-importer",title:"MRG Import Tool",description:"text to mark",source:"@site/docs/tev2/spec-tools/12-mrg-importer.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/mrg-importer",permalink:"/tev2-specifications/docs/tev2/spec-tools/mrg-importer",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/spec-tools/12-mrg-importer.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1689940756,formattedLastUpdatedAt:"Jul 21, 2023",sidebarPosition:12,frontMatter:{id:"mrg-importer",sidebar_label:"MRG Importer",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20230731},sidebar:"tev2SideBar",previous:{title:"Integrity Checking",permalink:"/tev2-specifications/docs/tev2/spec-tools/ict"},next:{title:"Term Ref Resolution",permalink:"/tev2-specifications/docs/tev2/spec-tools/trrt"}},m={},c=[{value:"Installing the Tool",id:"installing-the-tool",level:2},{value:"Calling the Tool",id:"calling-the-tool",level:2},{value:"Processing, Errors and Warnings",id:"processing-errors-and-warnings",level:2},{value:"Deploying the Tool",id:"deploying-the-tool",level:2}],d=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},u={toc:c,mark:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mrg-import-tool"},"MRG Import Tool"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("admonition",{title:"Editor's Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section is still under development. Issues that need to be addressed include how to deal with authentication of the tool in case getting an MRG from a non-public repository (or other service) requires that.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"MRG")," Import Tool (",(0,i.kt)("a",{parentName:"strong",href:"@"},"MRG importer"),")")," ensures that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," within which it is run, obtains a local copy of all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," that are available in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes")," that are mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/saf#scopes"},"scopes section")," of its ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),". This makes life easy for various tools, e.g., the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," and the ",(0,i.kt)("a",{parentName:"p",href:"@"},"TRRT"),", that can now assume that all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," that they may need to consult in order to do their job, are readily available. "),(0,i.kt)("p",null,"There will shortly be an implementation of the tool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the repo for the code of the tool is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tno-terminology-design/mrg-import"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"the documentation is ","[",(0,i.kt)("mark",null,"tbd"),"]",".")),(0,i.kt)("h2",{id:"installing-the-tool"},"Installing the Tool"),(0,i.kt)("p",null,"The tool can be installed from the command line and made globally available by executing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install tno-terminology-design/mrg-import -g\n")),(0,i.kt)("h2",{id:"calling-the-tool"},"Calling the Tool"),(0,i.kt)("p",null,"The behavior of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mrg-import [ <paramlist> ]\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<paramlist>")," (optional) is a list of key-value pairs")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("p",null,"The columns in the following table are defined as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Key"))," is the text to be used as a key."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Value"))," represents the kind of value to be used."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<path>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter MUST NOT appear in the configuration file itself.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<path>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope directory")," from which the tool is called. It MUST contain the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF")," for that ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),", which we will refer to as the 'current scope' for the ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG importer"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onNotExist")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<action>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"specifies the action to take in case an MRG file that was expected to exist, does not exist. Default is ",(0,i.kt)("inlineCode",{parentName:"td"},"'throw'"),".")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"th"},"<action>")),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"an error is thrown (an exception is raised), and processing will stop.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a message is displayed (and logged) and processing continues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'log'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a message is written to a log(file) and processing continues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"processing continues as if nothing happened.")))),(0,i.kt)("h2",{id:"processing-errors-and-warnings"},"Processing, Errors and Warnings"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Syntax"},"globpattern"),". Invalidities include non-existing directories or files, lack of write-permissions where needed, etc."),(0,i.kt)("p",null,"Then, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," reads the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," from which the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," is called. We will use the following names for values that are in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{my-own-scopetag}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopetag"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope"),"-section"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{my-own-scopedir}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopedir"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope"),"-section"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{my-own-glossarydir}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"glossarydir"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope"),"-section")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," also reads the ",(0,i.kt)("a",{parentName:"p",href:"/tev2-specifications/docs/tev2/spec-files/saf#scopes"},"scopes section")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),", which specifies the 'other' ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes")," from which the actively maintained ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," have to be imported. This ",(0,i.kt)("a",{parentName:"p",href:"/tev2-specifications/docs/tev2/spec-files/saf#scopes"},"scopes section")," contains elements that consist of two parts, whose values we will refer to by the following names:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{import-scopetag}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopetag"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopes"),"-section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{import-scopedir}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopedir"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopes"),"-section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"))),(0,i.kt)("p",null,"For every ",(0,i.kt)("inlineCode",{parentName:"p"},"{import-scopedir}"),", the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," will read its ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," to find out which ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminologies")," are being actively maintained (we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"{import-saf}")," to refer to the contents of this ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),")."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Reading a SAF may require authentication, e.g. when the scopedir of the other scope is in a private or enterprise repo. How the MRG importer will be dealing with this remains to be specified.")),(0,i.kt)("p",null,"We will use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-scopetag}")," = the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopetag"),"-field in the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-glossarydir}")," = the ",(0,i.kt)("inlineCode",{parentName:"li"},"glossarydir"),"-field in the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}"),";")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/tev2-specifications/docs/tev2/spec-files/saf#versions"},"versions-section")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"{import-saf}")," specifies which ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminologies")," are actively maintained within the other ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and hence have to be imported. Every such ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," is specified by an entry in this section, and must hence be processed to import the associated ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs"),". "),(0,i.kt)("p",null,"To specify one such process, we will use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-vsntag}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"vsntag"),"-field in the element of the ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-altvsntags}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"altvsntags"),"-field in an element of the ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}"))),(0,i.kt)("p",null,"To import the associated ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs"),", here is what we do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read the file ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-scopedir}/{import-glossarydir}/mrg.{other-scopetag}.{other-vsntag}.yaml"),", which is the file that contains the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," that needs to be imported. If that file doesn't exist, this results in the bahaviour as specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"<action>")," value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"onNotExist")," parameter. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"throw"),"."),(0,i.kt)("li",{parentName:"ul"},"write the contents to ",(0,i.kt)("inlineCode",{parentName:"li"},"{my-scopedir}/{my-glossarydir}/mrg.{import-scopetag}.{other-vsntag}.yaml"),", overwriting a file that has the same name if that were to exist."),(0,i.kt)("li",{parentName:"ul"},"for every ",(0,i.kt)("a",{parentName:"li",href:"@"},"versiontag")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"{other-altvsntags}")," (which we call ",(0,i.kt)("inlineCode",{parentName:"li"},"{other-altvsntag}"),"), a symbolic link ",(0,i.kt)("inlineCode",{parentName:"li"},"mrg.{import-scopetag}.{other-altvsntag}.yaml")," is created in the ",(0,i.kt)("inlineCode",{parentName:"li"},"{my-scopedir}/{my-glossarydir}/")," directory, that links to the ",(0,i.kt)("inlineCode",{parentName:"li"},"mrg.{import-scopetag}.{other-vsntag}.yaml")," file that was just created in that same directory.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"NOTE the change of the ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"scopetag")," part in the filename!"),(0,i.kt)("p",{parentName:"admonition"},"The name of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," from which it is imported may differ from the name of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," that is imported. The reason for this is that the names (",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags")," that are used in these ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes")," to refer to the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," from where ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," are imported, may differ.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document ",(0,i.kt)("a",{parentName:"p",href:"@"},"authors")," to identify and fix such conditions."),(0,i.kt)("h2",{id:"deploying-the-tool"},"Deploying the Tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."))}h.isMDXComponent=!0}}]);