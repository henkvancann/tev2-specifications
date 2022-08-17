"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4188],{1106:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return d}});var a=r(3117),i=r(102),o=(r(7294),r(3905)),s=["components"],n={term:"scope-directory",termType:"concept",groupTags:null,synonyms:null,formPhrases:"scope-director{yies}, scopedir{ss}",status:"proposed",created:new Date("2022-07-29T00:00:00.000Z"),updated:new Date("2022-07-29T00:00:00.000Z"),contributors:"RieksJ",isa:"scopedir",glossaryText:"a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@)."},p="Scope-directory",l={unversionedId:"tev2/terms/scope-directory",id:"tev2/terms/scope-directory",title:"Scope-directory",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/terms/scope-directory.md",sourceDirName:"tev2/terms",slug:"/tev2/terms/scope-directory",permalink:"/framework/docs/tev2/terms/scope-directory",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/terms/scope-directory.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1660739186,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{term:"scope-directory",termType:"concept",groupTags:null,synonyms:null,formPhrases:"scope-director{yies}, scopedir{ss}",status:"proposed",created:"2022-07-29T00:00:00.000Z",updated:"2022-07-29T00:00:00.000Z",contributors:"RieksJ",isa:"scopedir",glossaryText:"a directory in a computer file system that contains all files that are either being [curated](@) within a particular [scope](@), or generated to serve some purpose within that [scope](@)."},sidebar:"tev2SideBar",previous:{title:"Renderable-ref",permalink:"/framework/docs/tev2/terms/renderable-ref"},next:{title:"Scope",permalink:"/framework/docs/tev2/terms/scope"}},c={},d=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3}],m={toc:d};function h(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scope-directory"},"Scope-directory"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"scope directory")," is a directory in a computer file system that contains all files that are either being ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," within a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", or generated to serve some purpose within that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,o.kt)("p",null,"Specifically, every ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope directory")," contains at least:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("a",{parentName:"li",href:"saf@"},"Scope Administration File")," or ",(0,o.kt)("a",{parentName:"li",href:"@"},"SAF"),", that specifies details about the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope")," itself, identifies other ",(0,o.kt)("a",{parentName:"li",href:"@"},"scopes")," that it will be using, and the various ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminologies")," that are maintained within the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope"),";"),(0,o.kt)("li",{parentName:"ul"},"a so-called ",(0,o.kt)("a",{parentName:"li",href:"@"},"curatedir"),", i.e. some subdirectory within the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scopedir")," where all ",(0,o.kt)("a",{parentName:"li",href:"@"},"curated texts")," live;"),(0,o.kt)("li",{parentName:"ul"},"a so-called ",(0,o.kt)("a",{parentName:"li",href:"@"},"glossarydir"),", i.e. some subdirectory within the ",(0,o.kt)("a",{parentName:"li",href:"@"},"scopedir")," where all (",(0,o.kt)("a",{parentName:"li",href:"mrg@"},"machine-readable")," and ",(0,o.kt)("a",{parentName:"li",href:"hrg@"},"human readable"),") ",(0,o.kt)("a",{parentName:"li",href:"@"},"glossaries")," live.")),(0,o.kt)("p",null,"Typically, a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopedir")," might also contain other files, e.g. for generating e.g. a statical website, whitepapers, and other kinds of documentation."),(0,o.kt)("p",null,"From the perspective of a group of people that want to do something together, and that have agreed to put their files in one place, e.g. a github or gitlab repository, it may be convenient to add documentation for their ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies")," in (a subdirectory of) that directory, and organize it as a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopedir"),", by adding a ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF"),", a ",(0,o.kt)("a",{parentName:"p",href:"@"},"curatedir")," and a ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossarydir")," in it."),(0,o.kt)("h3",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"The purpose of ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopedirs")," is to have all artifacts related to a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," in a single location, so that they can be easily used by ",(0,o.kt)("a",{parentName:"p",href:"@"},"tools"),", and there is a basis for sharing terminological work between ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes")),(0,o.kt)("h3",{id:"criteria"},"Criteria"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"scope directory")," is a directory in a computer file system that contains all files that are either being ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," within a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", or generated to serve some purpose within that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),"."))}h.isMDXComponent=!0}}]);