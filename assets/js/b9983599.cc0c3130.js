"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[530],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,u=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(u,r(r({ref:t},h),{},{components:n})):a.createElement(u,r({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(4996),s=["components"],l={id:"notations-and-conventions",date:20220803},p="Notations and Conventions",h={unversionedId:"tev2/notations-and-conventions",id:"tev2/notations-and-conventions",title:"Notations and Conventions",description:"This document provides an overview of the notations and conventions being used within this scope.",source:"@site/docs/tev2/notations-and-conventions.md",sourceDirName:"tev2",slug:"/tev2/notations-and-conventions",permalink:"/tev2-specifications/docs/tev2/notations-and-conventions",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/notations-and-conventions.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1690867497,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"notations-and-conventions",date:20220803}},c={},m=[{value:"RFC 2119",id:"rfc-2119",level:3},{value:"Capitalization of words in mid-sentence",id:"capitalization-of-words-in-mid-sentence",level:3},{value:"Pattern diagram notations",id:"pattern-diagram-notations",level:3},{value:"Notational Exceptions",id:"notational-exceptions",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notations-and-conventions"},"Notations and Conventions"),(0,i.kt)("p",null,"This document provides an overview of the notations and conventions being used within this ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("h3",{id:"rfc-2119"},"RFC 2119"),(0,i.kt)("p",null,"We use keywords such as \u201cshall\u201d, \u201cshould\u201d, \u201cmay\u201d etc. as defined by ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2119.txt"},"RFC 2119"),"."),(0,i.kt)("h3",{id:"capitalization-of-words-in-mid-sentence"},"Capitalization of words in mid-sentence"),(0,i.kt)("p",null,"A word in mid-sentence that is capitalized is a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," that has a ",(0,i.kt)("a",{parentName:"p",href:"@"},"definition")," in the ",(0,i.kt)("a",{parentName:"p",href:"corpus@"},"Corpus of Terminology"),". This allows readers to distinguish between the more colloquial meanings of words (by not capitalizing them) and those that are actually defined. We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We are working towards deprecating this convention, as we now have better ways of referring to words that are defined in the eSSIF-Lab Corpus.")),(0,i.kt)("h3",{id:"pattern-diagram-notations"},"Pattern diagram notations"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"pattern@"},"Pattern")," diagrams will be visualized in this document using a notation that is very similar to that used by ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/"},"UML"),". The following diagram shows the various notations that we will be using that are basically taken from ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/"},"UML"),". There are a few exceptions, that are not shown in the figure; they are explained at the end."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("img",{alt:"Notations and conventions",src:(0,r.Z)("images/essif-lab-notations-and-conventions.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"rectangle"),", e.g. 'Person', represents a (named) ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/class.html"},"entity-class"),". The (operational) extension of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," is the sets of its instances (for 'Person', the extension consists of the set of actual people of flesh and blood tha are in the scope of the model). The extensions of different concepts are disjunct (do not overlap), unless there is an 'ISA' relation between them (see below). When a rectangle is in a ",(0,i.kt)("strong",{parentName:"p"},"coloured area that has a name"),", it is a child (or part) of the concept with that name (see below)"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"solid line with a closed arrowhead"),", e.g. 'owns', represents a (named) relation/",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/association.html"},"association")," between the two ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," it connects. The concept at the arrowhead ('House') is called the 'target ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept"),"' (TGT) for that relation; the other ('Person') is called the 'source ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept"),"' (SRC). The relation is labeled such that ",(0,i.kt)("inlineCode",{parentName:"p"},"<SRC> <relation label> <TGT>")," (Person owns House) suggests the phrase that describes the intension(al definition) of that relation. The (operational) extension of a relation embraces all pairs (SRC,TGT) for which the relation holds. In the example, it consists of all pairs (P,H), where P is a Person and H is a House, such that the phrase 'P owns H' is true."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"green name")," at either ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/association.html#association-end"},"end of a relation/association")," is what UML calls 'role'; this name may be used to refer to (an instance of) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," at which the name is placed as it performs its/this role in this relation. In the figure, ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," is the role that a Person fulfills in the relation 'owns'. If we assert that a Person (P) is the owner of a specific House (H), or that House H is owned by Person P, this means that (P,H) is an element of the extension of the relation 'owns'."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"solid line with an open arrowhead"),", represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/generalization.html"},"generalization relation"),". It can be read as ",(0,i.kt)("inlineCode",{parentName:"p"},"<SRC> is a <TGT>"),", and is therefore also referred to as an ISA-relation. The SRC of the relation is the specialization (subclass) of the TGT (which in turn is a generalization of SRC). This means that SRC satisfies all constraints that TGT satisfies, and also that SRC has all attributes (properties, characteristics) that TGT has. The figure shows 'Self Employed Retailer is a Person' as an example."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"line with a solid diamond")," at one end represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/composition.html"},"composition")," relation. The element at the 'diamond-end' is called the 'parent', or the 'whole'. The other element is called the 'child' or the 'part'. A 'part' in a composition relation cannot be part of more than one 'whole'. Normally, if a 'whole' in a composition relation ceases to exist, then so do all of its composite parts. In the figure, at least one Bedroom and precisely one Living Room are parts of a (every) House. Obviously, if a House ceases to exist, then so do these rooms."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"line with a hollow diamond")," at one end represents an ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/aggregation.html"},"aggregation")," relation. The element at the 'diamond-end' is called the 'parent', or the 'whole'. The other element is called the 'child' or the 'part'. A 'part' can be a part in multiple aggregation relations, and hence be part of multiple 'wholes'. If a 'whole' in an aggregation relation ceases to exist, the parts typically continue their existence. In the figure, 'Documentation' (about a Building Type) is an aggregation of a 'User Manual' and at least one 'Technical Document'. Obviously, if the Documentation ceases to exist, then the 'User Manual' and 'Technical Documents' typically continue to exist."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"dashed line")," with a pointed arrow (",(0,i.kt)("inlineCode",{parentName:"p"},">"),") represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/dependency.html"},"dependency"),", where  the SRC concept somehow depends on the TGT concept. The kind of dependency is specified by a ",(0,i.kt)("inlineCode",{parentName:"p"},"<<text>>"),". In the figure, we see a dependency relation relation ",(0,i.kt)("inlineCode",{parentName:"p"},"<<instance>>"),", indicating that 'House' is a specific instance of 'Building Type'.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"[n..m]")," structure represents a ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/multiplicity.html"},"multiplicity"),". When it appears"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"at the TGT end of a relation"),", it means that for every SRC element there must be at least ",(0,i.kt)("em",{parentName:"li"},"n")," and at most ",(0,i.kt)("em",{parentName:"li"},"m")," TGT elements in the relation. For example, the ","[0..n]"," multiplicity in the 'owns' relation in the figure means that for every 'Person' element, there must be at least 0 and at most ",(0,i.kt)("em",{parentName:"li"},"n")," (i.e. any number) 'House' elements. Effectively, this says that every Person can own any number of Houses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"at the SRC end of a relation"),", it means that for every TGT element there must be at least ",(0,i.kt)("em",{parentName:"li"},"n")," and at most ",(0,i.kt)("em",{parentName:"li"},"m")," SRC elements in the relation. For example, the ","[0..1]"," multiplicity in the 'owns' relation in the figure means that for every 'House' element, there must be at least 0 and at most 1 'Person' elements. Effectively, this means that every House can be owned by at most 1 Person."),(0,i.kt)("li",{parentName:"ul"},"is typically of any of the following forms (although there may be others, e.g. ","[1..2]","):\n","[0..1]",": at most one;\n","[1..1]",": precisely one;\n","[0..n]",": any number - as this is not a constraint, this is the default multiplicity and may be omitted;\n","[1..n]",": at least one.\nNote that the term ",(0,i.kt)("em",{parentName:"li"},"multiplicity")," is distinct from ",(0,i.kt)("em",{parentName:"li"},"cardinality"),", the difference being that a cardinality states the ",(0,i.kt)("em",{parentName:"li"},"actual")," number of SRC/TGT elements that a specific TGT/SRC element has in a relation, whereas a multiplicity states the ",(0,i.kt)("em",{parentName:"li"},"possible")," number of such elements. In short, the multiplicity is the set of all possible cardinalities in a relation. We note this becaus it is common practice for people to use the term 'cardinality' where 'multiplicity' is intended."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a ",(0,i.kt)("strong",{parentName:"p"},"named and coloured area"),", e.g. the green area named ",(0,i.kt)("inlineCode",{parentName:"p"},"House Ownership")," is the aggregate (Parent/Whole) of all concepts (rectangular elements) therein, which are its children/parts. This aggregate can be linked/associated with any other concept, including its children/parts."))),(0,i.kt)("h3",{id:"notational-exceptions"},"Notational Exceptions"),(0,i.kt)("p",null,"The following notational conventions are not used by ",(0,i.kt)("a",{parentName:"p",href:"https://www.uml-diagrams.org/"},"UML"),", but are specific to our use."),(0,i.kt)("p",null,"We use a ",(0,i.kt)("strong",{parentName:"p"},"coloring convention")," to distinguish between what is 'officially' part of the eSSIF-Lab models, and parts that are not."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"blue")," is used to color the lines and other symbols that are part of the 'official' models. Typically, they are explicitly defined or otherwise explained, e.g. in a ",(0,i.kt)("a",{parentName:"li",href:"@"},"mental model"),". Their definitions/meanings may differ from 'common knowledge'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"red")," is used to color the lines and other symbols that are part of our 'common knowledge', and hence need not be explicitly defined. They appear to explain where eSSIF-Lab models link to these commonly known/used concepts. We think of them as necessary in order to bridge possible gaps between 'common understanding' and the eSSIF-Lab ways of thinking. Whenever a 'red concept' is nevertheless defined, this is for the purpose of conveying what we conceive the 'common knowledge' to be.")),(0,i.kt)("p",null,"We use a ",(0,i.kt)("strong",{parentName:"p"},"line typing convention")," within a diagram, as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solid lines")," are used for lines and other symbols that are part of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"mental model")," that is represented by the diagram;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dashed lines")," are used for lines and other symbols that are (authoritatively) defined elsewhere.\nFor example, the concept ",(0,i.kt)("a",{parentName:"li",href:"@"},"party")," is authoritatively defined in the ",(0,i.kt)("a",{parentName:"li",href:"pattern-party-actor-action@essif-lab"},"party, actor and action pattern"),", so the diagram there shows a solid (blue) line for that concept. It also appears in other diagrams, e.g. in the ",(0,i.kt)("a",{parentName:"li",href:"pattern-jurisdiction@essif-lab"},"jurisdiction pattern"),", where the concept is represented with a (blue) dashed line.")))}u.isMDXComponent=!0}}]);