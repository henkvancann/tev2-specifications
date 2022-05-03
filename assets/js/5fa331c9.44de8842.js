"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7221],{1233:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=(a(4996),["components"]),d={id:"tev2-spec-mrg",title:"Machine Readable Glossary (MRG)",sidebar_label:"MRG (Machine Readable Glossary)",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},o=void 0,s={unversionedId:"tev2/tev2-spec-mrg",id:"tev2/tev2-spec-mrg",title:"Machine Readable Glossary (MRG)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction",source:"@site/docs/tev2/tev2-spec-mrg.md",sourceDirName:"tev2",slug:"/tev2/tev2-spec-mrg",permalink:"/framework/docs/tev2/tev2-spec-mrg",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-spec-mrg.md",tags:[],version:"current",frontMatter:{id:"tev2-spec-mrg",title:"Machine Readable Glossary (MRG)",sidebar_label:"MRG (Machine Readable Glossary)",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"GDF (Glossary Definition File)",permalink:"/framework/docs/tev2/tev2-spec-gdf"},next:{title:"Curated Texts",permalink:"/framework/docs/tev2/tev2-spec-ctext"}},m={},p=[{value:"MRG structure",id:"mrg-structure",level:2},{value:"Machine Readable Glossary Entries",id:"machine-readable-glossary-entries",level:2}],c={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction"))),(0,i.kt)("p",null,"This document specifies the structure of a Machine Readable Glossary (MRG), and of entries therein."),(0,i.kt)("h2",{id:"mrg-structure"},"MRG structure"),(0,i.kt)("p",null,"A Machine Readable Glossary (MRG) is a JSON (or YAML) file that is structured as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "terminology": {\n    "scopetag": "tev2",\n    "scopedir": "https://github.com/essif-lab/framework/tree/master/docs/tev2"\n  },\n  "scopes": [\n   { "scopetag": "essiflab",\n     "scopedir": "https://github.com/essif-lab/framework/tree/master/docs"\n   },\n   { "scopetag": "ctwg",\n     "scopedir": "https://github.com/trustoverip/ctwg"\n   }\n  ],\n  "entries": [\n  ]\n}\n')),(0,i.kt)("p",null,"WHERE:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"terminology")," section specifies a ","[scopetag@]"," and the ","[scope directory@]"," for the ","[terminology@]"," that the MRG renders."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopes")," section specifies similar ","[scopetag@]"," - ","[scope directory@]"," mappings, but for other ","[terminologies@]",". This allows machines to trace any ","[term@]"," that is 'imported' from another ","[scope@]"," to its ","[curated@]"," source.")),(0,i.kt)("h2",{id:"machine-readable-glossary-entries"},"Machine Readable Glossary Entries"),(0,i.kt)("p",null,"MRG Entries consist of the following fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"[Scopetag@]"," of the ","[scope@]"," in which the ","[glossary@]"," is defined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"Tag")," of the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"scope")," in which the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," is defined. We need this because a ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"glossary")," not only contains ",(0,i.kt)("a",{parentName:"td",href:"term@ctwg"},"terms")," that are defined in the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"scope")," itself, but also ",(0,i.kt)("a",{parentName:"td",href:"term@ctwg"},"terms")," that are defined in other ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"scopes"),". The ",(0,i.kt)("inlineCode",{parentName:"td"},"scopes")," section in the MRG SHOULD contain a mapping between the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")," and its associated ","[scope directory@]",".",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"identify@essiflab"},"identifies")," the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," within the context of the ","[MRG@]",", and can also be used as an ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," in a ",(0,i.kt)("a",{parentName:"td",href:"term-ref@ctwg"},"term ref"),". For ",(0,i.kt)("a",{parentName:"td",href:"term@ctwg"},"terms")," of other types than 'concept', the ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," would typically be of the form ",(0,i.kt)("inlineCode",{parentName:"td"},"<type>-<termid>"),", e.g. as in ",(0,i.kt)("inlineCode",{parentName:"td"},"pattern-identify"),".",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"concept")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the kind of entity that the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," refers to. Typical values would be ",(0,i.kt)("inlineCode",{parentName:"td"},"concept"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"relation"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"pattern")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"mental-model"),"), ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"alias"),").",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"There is no default. Not specifying ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," is an error."),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the specific entity of the ",(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," field.",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Comma-separated list of ",(0,i.kt)("a",{parentName:"td",href:"tag@ctwg"},"grouptags"),", each of which identifies a group of ",(0,i.kt)("a",{parentName:"td",href:"term@ctwg"},"terms")," to which this ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," belongs.",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"([a-z0-9_-]+)(?:,\\s*([a-z0-9_-]+))*"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"date")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which the glossary was generated"),(0,i.kt)("td",{parentName:"tr",align:null},"Date of the last update of the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term"),"-related data, in the format ",(0,i.kt)("inlineCode",{parentName:"td"},"<YYYY><MM><DD>"),". Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"\\d{8}"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termvsn")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the version of the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," itself (not to be confused with the version of a ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"terminology")," that may contain that ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term"),").",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"commit")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"The latest (git) commit hash of the ",(0,i.kt)("a",{parentName:"td",href:"term@ctwg"},"term's")," ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"definition"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"symphrase")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Comma-separated list of texts that the ",(0,i.kt)("a",{parentName:"td",href:"#trrt"},"TRRT")," can use to convert the ",(0,i.kt)("inlineCode",{parentName:"td"},"show text")," parts of ","[term refs@]"," into ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).",(0,i.kt)("br",null),"Must satisfy PCRE regex ",(0,i.kt)("inlineCode",{parentName:"td"},"([a-z0-9_-{}]+)(?:,\\s*([a-z0-9_-{}]+))*"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"proposed")),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status of the term"),". Allowed values are: ",(0,i.kt)("inlineCode",{parentName:"td"},"proposed"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"approved")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"deprecated"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termname")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is used for rendering the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"synonyms")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"List of texts that that may alternatively be used for rendering the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," in a human readable document. It typically contains human readable characters. It may include uppercase and lowercase characters, spaces, etc. (which are not allowed in the ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"glossaryText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the (raw) contents for the entry of this ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," in a human readable ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"glossary"),". Note that this text SHOULD be allowed to contain ",(0,i.kt)("a",{parentName:"td",href:"term-ref@ctwg"},"term refs"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoverText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the contents of a popup that shows as the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," is rendered in a web browser and the user hovers over the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term")," with its mouse.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"url")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"(No default)"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of a web-page that contains human readable text that typically has further explanations of the ",(0,i.kt)("a",{parentName:"td",href:"@ctwg"},"term"),", and has sections that can be addressed by ",(0,i.kt)("inlineCode",{parentName:"td"},"url#heading-id")," where ",(0,i.kt)("inlineCode",{parentName:"td"},"heading-id")," is as specified for ",(0,i.kt)("a",{parentName:"td",href:"term-ref@ctwg"},"term refs"),".")))))}k.isMDXComponent=!0}}]);