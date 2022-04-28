"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7748],{5985:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=(a(4996),["components"]),o={id:"tev2-struct-ctext",title:"TEv2 - Structure of Curated Texts",sidebar_label:"Curated Text",scopetag:"tev2",date:20220303},d=void 0,l={unversionedId:"tev2/tev2-struct-ctext",id:"tev2/tev2-struct-ctext",title:"TEv2 - Structure of Curated Texts",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction",source:"@site/docs/tev2/tev2-struct-ctext.md",sourceDirName:"tev2",slug:"/tev2/tev2-struct-ctext",permalink:"/framework/docs/tev2/tev2-struct-ctext",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-struct-ctext.md",tags:[],version:"current",frontMatter:{id:"tev2-struct-ctext",title:"TEv2 - Structure of Curated Texts",sidebar_label:"Curated Text",scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Directory structure",permalink:"/framework/docs/tev2/tev2-struct-directory"},next:{title:"Header",permalink:"/framework/docs/tev2/tev2-struct-ctext-header"}},c={},u=[{value:"The Header of a Curated Text.",id:"the-header-of-a-curated-text",level:2},{value:"The Payload of a Curated Text.",id:"the-payload-of-a-curated-text",level:2}],p={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction"))),(0,i.kt)("p",null,"This document specifies the requirements that a file has to satisfy for it to be processed by Terminology Engine v2 (TEv2). We use the term"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[curated file]")," to refer to these files, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[curated text]")," to refer to the contents of such files.")),(0,i.kt)("p",null,"[curated file]"," are expected to live in a github repository, in directories as specified in the ",(0,i.kt)("a",{parentName:"p",href:"tev2-struct-directory"},"directory structure spec"),". This specification is written such that (compliant) ","[curated files|curated file]"," will be processeable by ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docusaurus v2"),", which basically means that the repo can be set up as a website that has facilities for hosting its own ","[curated][terminology]","."),(0,i.kt)("p",null,"A ","[curated text]"," consists of two parts: a ",(0,i.kt)("strong",{parentName:"p"},"[header]"),", and a ",(0,i.kt)("strong",{parentName:"p"},"[body]"),". The ","[header]"," is a set of key-value pairs that contain meta data about the ","[curated text]"," and/or data that could also have been part of the ","[body]",", but is so small that it doesn't warrant to have a dedicated section for it."),(0,i.kt)("h2",{id:"the-header-of-a-curated-text"},"The Header of a Curated Text."),(0,i.kt)("p",null,"The (",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.2/"},"yaml"),") header starts at the top of the ","[curated text]",' with three dashes ("',(0,i.kt)("inlineCode",{parentName:"p"},"---"),'") to signal it is followed by directives. This is followed by a collection of key-value mappings. The end of the header is again three dashes ("',(0,i.kt)("inlineCode",{parentName:"p"},"---"),'") to signal the change back to document content (the ',"[body]","). Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: <idtext>\ntitle: <Title Text>\nscopetag: <scopeid>\ntermtype: <type>\ntermid: <typeid>\nstatus: <stage>\ngrouptags:\nhoverText: "<hovertext>"\nglossaryText: "<glossarytext>"\ndate: yyyymmdd\nvsn: <major#>.<minor#>.<maintenance#>\n---\n\nThe/this text after the three dashes constitutes the [body] of the [curated text].\n')),(0,i.kt)("p",null,"Key-value pairs consist of a sequence of ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<value>")," on a single line. Sequence elements may be separated by whitespace. Keys consist of characters, digits, underscore or hyphen (regex: ",(0,i.kt)("inlineCode",{parentName:"p"},"[\\w\\d-]+"),"). Values consist of all text behind the ",(0,i.kt)("inlineCode",{parentName:"p"},":")," separator, which is stripped of leading and trailing spaces, and then (if present) also of a leading and trailing ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," (double quote) character (so that double quotes in the middle of the text do not need to be escaped, and providing authors with the possibility to specify a string that starts and/or ends with whitespace and or double quotes as a value)."),(0,i.kt)("p",null,"The following regex finds ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"<value>")," pairs in a header line: ",(0,i.kt)("inlineCode",{parentName:"p"},'^(?<key>[\\w\\d-]+)\\s*:\\s*("?)(?<value>.*?)(\\2)\\s*$')),(0,i.kt)("p",null,"Keys can be"),(0,i.kt)("h2",{id:"the-payload-of-a-curated-text"},"The Payload of a Curated Text."))}h.isMDXComponent=!0}}]);