"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6939],{6724:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return h},metadata:function(){return l},toc:function(){return c}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=a(4996),s=["components"],h={id:"tev2-overview",title:"Terminology Engine v2 - Overview",sidebar_label:"TEv2 Overview",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},p=void 0,l={unversionedId:"tev2/tev2-overview",id:"tev2/tev2-overview",title:"Terminology Engine v2 - Overview",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/tev2-overview.md",sourceDirName:"tev2",slug:"/tev2/tev2-overview",permalink:"/framework/docs/tev2/tev2-overview",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-overview.md",tags:[],version:"current",frontMatter:{id:"tev2-overview",title:"Terminology Engine v2 - Overview",sidebar_label:"TEv2 Overview",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",next:{title:"User Manual",permalink:"/framework/docs/tev2/man-users"}},m={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Terminology Curation",id:"terminology-curation",level:2}],f={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,o.kt)("p",null,"The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. ",(0,o.kt)("a",{parentName:"p",href:"@"},"curation"),") of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies"),", as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTex), as appropriate for different, individual ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"."),(0,o.kt)("p",null,"The objectives that TEv2 contributes to include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"assisting ",(0,o.kt)("a",{parentName:"li",href:"@"},"readers")," of such publications to understand the ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms")," that are used in the way that the authors have intended (rather than interpreting it in their own way);"),(0,o.kt)("li",{parentName:"ol"},"facilitating authors to write and publish texts where terms can be referenced to their intended meaning, within, and across ",(0,o.kt)("a",{parentName:"li",href:"@"},"scopes"),";"),(0,o.kt)("li",{parentName:"ol"},"supporting authors, ",(0,o.kt)("a",{parentName:"li",href:"@"},"readers")," and other stakeholders to such publications as they seek to create and further develop a ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology")," that they can commit to (within a specific ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope"),"), which we expect to also help develop insights in their subject matter of that ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope"),").")),(0,o.kt)("p",null,"These contributions are what so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," seek to deliver. They are the ones that make sure that there is a ",(0,o.kt)("a",{parentName:"p",href:"scopedir@"},"location")," where people can contribute to the development of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", and tools are installed and operational that enable authors to use them as they publish their documents. ",(0,o.kt)("a",{parentName:"p",href:"@"},"Curators")," have their own ",(0,o.kt)("a",{parentName:"p",href:"man-curators"},"manual"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/essifLab"},"eSSIF-Lab website")," already shows the first ideas of what that might look like (popups on ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," showing their ",(0,o.kt)("a",{parentName:"p",href:"@"},"definition"),")."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"TEv2 not only contributes to dealing with (authors/groups that have their) individual ",(0,o.kt)("a",{parentName:"p",href:"@"},"scoped")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies"),", it specifically also contributes to the re-use of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," (or other ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminological artifacts"),"). This means that ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," (or other ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminological artifacts"),") that are ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," in one ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," can also be used (re-used) within other ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),", while ensuring the autonomy of each such ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,o.kt)("p",null,"From the TEv2 perspective, we assume that any author/group will create and maintain texts that concern a particular topic and that, from a terminological perspective, belong together. We also assume that such texts are 'raw', i.e. in a very simple format such as plain ASCII text, markdown, LaTex, etc., and somehow require a rendering step that turns them into 'formatted' texts, such as PDF, ODT, DOCX, or Google doc format. The reason for that is that the more complex a text format is, the more difficult it is to process them."),(0,o.kt)("p",null,"This is illustrated in the figure below. The figure also shows the TEv2 'toolbox', which contains tools that can process raw texts prior to them being processed by the regular rendering tools that an author/group uses."),(0,o.kt)("img",{alt:"Converting raw texts into formatted texts",src:(0,i.Z)("images/tev2-overview-without-toolbox.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"One of the most useful tools in the toolbox is perhaps the Terminology Reference Resolver Tool (",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT"),"). This tool can process a raw text that contains so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"Term Refs"),", and resolve them to a syntax that one or more specific 3rd party rendering tools can pick up and use to create enhanced formatted texts. The left side of the figure below shows a raw (markdown) text (in markdown), and (at the right side) the corresponding formatted (web page, HTML) text that is the result of processing by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT")," and subsequently by the Docusaurus rendering tools."),(0,o.kt)("img",{alt:"The effect of the Terminology Reference Resolver Tool",src:(0,i.Z)("images/tev2-overview-enhanced-term.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you are familiar with ",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown"),", you will notice that the raw text contains syntax that resembles ",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),", but it's not quite conformant: it contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," character, which signals (within TEv2) that this is not an ordinary link, but a link that will be resolved by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT"),". The ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT")," will convert these links (which we call ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs"),") such that they are rendered as shown in the right of the figure: that is: in purple boldface, and when you hover your mouse over the term, it will show the definition of that term."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"TEv2 is designed to support an ever increasing variety of raw text formats, and its toolbox will - over time - be filled with an increasing number of tools that will support an increasing number of 3rd party rendering tools. This section shows the architecture that allows this to become reality."),(0,o.kt)("p",null,"The architecture is based on the ToIP/eSSIF-Lab ",(0,o.kt)("a",{parentName:"p",href:"/docs/terms/pattern-terminology"},"Terminology Model"),", which assumes that every author/group constitutes a so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms-community")," that ",(0,o.kt)("a",{parentName:"p",href:"@"},"curates")," one (or more) ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope(s)"),", that contains e.g. ",(0,o.kt)("a",{parentName:"p",href:"@"},"definitions"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"tags")," etc. that constitute the author/group's ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology"),". An overview is given in the figure below:"),(0,o.kt)("img",{alt:"TEv2 Overview",src:(0,i.Z)("images/tev2-overview.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The figure not only shows the raw texts, the their processing by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT")," tool and the subsequent rendering to produce formatted texts, but also other files that exist within the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", and that are being ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," by its ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms-community")," (the author/group). TEv2 expects all files that are under ",(0,o.kt)("a",{parentName:"p",href:"@"},"curation"),", and/or are generated to serve a purpose within a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", to live in a specific directory, which we call the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory"),". The rounded rectangles in the figure represent such directories and (parts of) their contents."),(0,o.kt)("p",null,"To the left of the figure, you can see that some raw texts are 'ingressed' into the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory"),", and thereby have become so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts"),". These texts typically contain descriptions of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"definitions"),", examples, etc., that help interested ",(0,o.kt)("a",{parentName:"p",href:"@"},"parties")," to formulate and understand the ",(0,o.kt)("a",{parentName:"p",href:"@"},"concepts")," that they need. The ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," are tasked to run the ingression process, and specify the details of what this means for that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,o.kt)("p",null,"These ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," also create and maintain the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," administration file (",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF"),"), which contains meta-data concerning the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," itself, the locations (URLs) of its directories (and glossary files), the locations (URLs) of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directories")," of (selected) other ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),", and a specification of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," that are part of the various versions of its ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," that are actively maintained."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," also organize when and how the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," Machine Readable Glossary (",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG"),") is created. This file is not a ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossary"),", but rather a (machine readable) inventory of all ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," that are part of (a specific version of) the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology"),". Ideally, tools would only need to inspect the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," if they want to use data that is ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," in that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," is created by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGT")," tool. This tool takes the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts")," as input, as well as ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs")," from other scopes, e.g. to 'import' ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," or other ",(0,o.kt)("a",{parentName:"p",href:"terminological-artifact"},"artifacts"),"(@) that are needed in, but not ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," by, the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),". The ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," tells the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGT")," where to find these (third party) ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs"),"."),(0,o.kt)("p",null,"The Human Readable Glossary or ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," is a (real) ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossary")," that humans are expected to read/use. It is a formatted text, which means that it might appear in one of a plethora of formats. Within a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", we assume a specific format is chosen that is appropriate for its users. The ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," is not a formatted/rendered version of the entire ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG"),": it typically only lists the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that are assocated with specific kinds of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminological artifacts"),", specifically the type ",(0,o.kt)("a",{parentName:"p",href:"concept@"},(0,o.kt)("inlineCode",{parentName:"a"},"concept")),"."),(0,o.kt)("p",null,"We will use the term ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGT")," to refer to the rendering tool that produces the ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," from a text that is extracted from the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," and where all ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," are resolved. We expect to see various flavours of this tool, or a single tool that can create ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGs")," in different formats, allowing ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to get the kind of ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG")," that is the most appropriate for their purposes."),(0,o.kt)("h2",{id:"terminology-curation"},"Terminology Curation"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section may need to be revised"))),(0,o.kt)("p",null,"TEv2 assumes that the ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," data resides in an existing ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory"),", and that ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated files")," are expected to be processable by other tools, including, but not limited to ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory")," must be ",(0,o.kt)("a",{parentName:"p",href:"tev2-installation"},"set up")," in advance."),(0,o.kt)("p",null,"Thus, whenever a ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms-community")," decided that some contribution is to be included in the part of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"corpus")," that is maintained by that ",(0,o.kt)("a",{parentName:"p",href:"terms-community@"},"community"),", the ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," of that ",(0,o.kt)("a",{parentName:"p",href:"terms-community@"},"community")," are tasked to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"create/maintain/update any ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope"),"-related administration in the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope directory")," that is needed for curation, as specified by a ",(0,o.kt)("a",{parentName:"li",href:"tev2-spec-saf"},"Scope Administration File (SAF)"),";"),(0,o.kt)("li",{parentName:"ol"},"convert that contribution to (a set of) ",(0,o.kt)("a",{parentName:"li",href:"@"},"curated files"),", that comply with the ",(0,o.kt)("a",{parentName:"li",href:"ctext"},"specifications")," for such files;"),(0,o.kt)("li",{parentName:"ol"},"store them at the location as designated in the ",(0,o.kt)("a",{parentName:"li",href:"tev2-spec-saf"},"SAF"),";"),(0,o.kt)("li",{parentName:"ol"},"generate/update any artifact that the ",(0,o.kt)("a",{parentName:"li",href:"terms-community@"},"community")," wants to automatically maintain, which in particular includes the ",(0,o.kt)("a",{parentName:"li",href:"@"},"MRG")," and associated ",(0,o.kt)("a",{parentName:"li",href:"@"},"HRG"),".")),(0,o.kt)("p",null,"This document provides an overview of the knowledge that ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," may need to perform this task, which can be broken up in the following parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"tev2-installation"},"Setup/installation")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory")," that is suitable for working with TEv2, and the creation of a ",(0,o.kt)("a",{parentName:"p",href:"tev2-spec-saf"},"SAF"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"@"},"Curation")," of terminological contributions. This requires knowledge about the ",(0,o.kt)("a",{parentName:"p",href:"ctext"},"file structure")," of ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated file"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"tev2-toolbox-use"},"generation")," of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminological artifacts"),". It is typical for a ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms community")," to want to have a ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossary")," of the terms they either have defined themselves, or are defined elsewhere but are to be used within that ",(0,o.kt)("a",{parentName:"p",href:"@"},"community"),". However, other artifacts may be generated as well (a ",(0,o.kt)("a",{parentName:"p",href:"@"},"dictionary"),", white papers, etc.) - this is all up to the ",(0,o.kt)("a",{parentName:"p",href:"@"},"community"),"."))))}d.isMDXComponent=!0}}]);