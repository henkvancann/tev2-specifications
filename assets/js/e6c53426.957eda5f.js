"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7589],{956:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return h}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),s=(a(4996),["components"]),o={id:"tev2-backlog",sidebar_label:"Work-In-Progress",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},l="TEv2 - Backlog",c={unversionedId:"tev2/miscellaneous/tev2-backlog",id:"tev2/miscellaneous/tev2-backlog",title:"TEv2 - Backlog",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/miscellaneous/tev2-backlog.md",sourceDirName:"tev2/miscellaneous",slug:"/tev2/miscellaneous/tev2-backlog",permalink:"/framework/docs/tev2/miscellaneous/tev2-backlog",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/miscellaneous/tev2-backlog.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1660917017,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"tev2-backlog",sidebar_label:"Work-In-Progress",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Vocabulary",permalink:"/framework/docs/tev2/terms/vocabulary"},next:{title:"Student Assignment",permalink:"/framework/docs/tev2/miscellaneous/tev2-student-assignment"}},p={},h=[],m={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tev2---backlog"},"TEv2 - Backlog"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"This backlog of the Terminology Engine v2 (TEv2) is a list of issues (concerns, topics) that still need to be addressed in the specifications of TEv2. Typically such issues are listed as editor's notes in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"TEv2")," specification files. This file will list any issues for which that would not be an appropriate solution."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated file")," that contains the specification of a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," must allow for a ",(0,i.kt)("a",{parentName:"li",href:"@"},"header")," entry that specifies")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"word forms, such as plurals, that, when encountered while processing a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text"),", will be treated as if the defined term itself were encountered. For example, a term ",(0,i.kt)("inlineCode",{parentName:"li"},"actor")," could have word-forms added such as ",(0,i.kt)("inlineCode",{parentName:"li"},"actors"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"actor's"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"actor(s)"),", etc., that would allow ",(0,i.kt)("a",{parentName:"li",href:"@"},"authors")," to write ",(0,i.kt)("a",{parentName:"li",href:"@"},"actors"),", ",(0,i.kt)("a",{parentName:"li",href:"@"},"actor's"),", ",(0,i.kt)("a",{parentName:"li",href:"@"},"actors'")," or ",(0,i.kt)("a",{parentName:"li",href:"@"},"actor(s)")," without the need of having to add the link part (as in ",(0,i.kt)("a",{parentName:"li",href:"actor@"},"actors"),")."),(0,i.kt)("li",{parentName:"ul"},"regexps, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"actor(['']?s|\\(s\\))?"),", or in the case of ",(0,i.kt)("inlineCode",{parentName:"li"},"party"),", a regex such as ",(0,i.kt)("inlineCode",{parentName:"li"},"part(y|y['']s|ies)")),(0,i.kt)("li",{parentName:"ul"},"combinations thereof, where the regex-part can be specified is ",(0,i.kt)("inlineCode",{parentName:"li"},"\\{\\w+\\}"),"in a configuration file is substituted by a macro-form, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"actor{ss}")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"part{yies}")," (where ",(0,i.kt)("inlineCode",{parentName:"li"},"{ss}")," is interpreted as a regex, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"(['']?s|\\(s\\))?"),", and {yies} as ",(0,i.kt)("inlineCode",{parentName:"li"},"(y|y['']s|ies)"),")")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Currently, every MRG/HRG is to be accompanied by a specific GDF that specifies their contents. Is seems more practical to say that one such specification - i.e. for the default MRG/HRG, would be part of the SAF, and any other such specifications (which we might then perhaps limit to just HRG-specifications) might then require their specific GDF.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A Machine Readable Glossary is not really a ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary"),", as it also contains entries for other ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),", such as ",(0,i.kt)("a",{parentName:"p",href:"@"},"patterns"),", and it is likely that other kinds of such artifacts will need to be referred to in future, e.g. ",(0,i.kt)("a",{parentName:"p",href:"@"},"use-cases"),". What we currently call an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," is really a machine readable inventory of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," within a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),".  We need to consider whether we continue using ",(0,i.kt)("inlineCode",{parentName:"p"},"MRG")," as the ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," for this inventory, or introduce another one. Also, we need to revise all texts and where necessary clarify this point, or make texts congruent with this vision.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We use the ",(0,i.kt)("a",{parentName:"p",href:"@"},"header"),"-field ",(0,i.kt)("inlineCode",{parentName:"p"},"synonym")," (see: ",(0,i.kt)("a",{parentName:"p",href:"@"},"synonym"),") to specify human readable texts that have the same meaning as another term. They differ from ",(0,i.kt)("a",{parentName:"p",href:"@"},"formphrases")," in the sense that we would like to have them become part of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," - specifically: a ",(0,i.kt)("a",{parentName:"p",href:"@"},"hrg"),". Similarly, we may want to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"hrg-phrase")," header-item, that we can use to refer readers to some other resource for further reading.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if we can also make this work for ","[scopes]"," such as 'Merriam-Webster', or 'OED', such that we could resolve ",(0,i.kt)("a",{parentName:"p",href:"@"},"term refs")," such as ",(0,i.kt)("inlineCode",{parentName:"p"},"[Organization](@OED)")))))}d.isMDXComponent=!0}}]);