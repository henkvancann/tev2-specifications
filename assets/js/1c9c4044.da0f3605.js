"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5829],{4124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var i=a(7462),s=a(3366),n=(a(7294),a(3905)),r=a(4345),o=["components"],c={id:"issuer",title:"Issuer",scopeid:"essifLab",displayed_sidebar:"essifLabSideBar",type:"concept",typeid:"issuer",symphrase:"issuer{ss}",stage:"draft",hoverText:"Issuer (functional component): the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",glossaryText:"the capability to construct %%credentials^credential%% from data objects, according to the content of its %%principal^principal%%'s %%issuer^issuer%%-Policy (specifically regarding the way in which the %%credential^credential%% is to be digitally signed), and pass it to the %%wallet^wallet%%-component of its %%principal^principal%% allowing it to be issued.",date:20210601},l=void 0,d={unversionedId:"terms/issuer",id:"terms/issuer",title:"Issuer",description:"In other SSI contexts, this term has a different meaning. We intend to rework the famework in such a way that we can use this term in various ways (e.g. as a party, a role name, or an actor that performs the role associated with the role name",source:"@site/docs/terms/issuer.md",sourceDirName:"terms",slug:"/terms/issuer",permalink:"/framework/docs/terms/issuer",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/issuer.md",tags:[],version:"current",frontMatter:{id:"issuer",title:"Issuer",scopeid:"essifLab",displayed_sidebar:"essifLabSideBar",type:"concept",typeid:"issuer",symphrase:"issuer{ss}",stage:"draft",hoverText:"Issuer (functional component): the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",glossaryText:"the capability to construct %%credentials^credential%% from data objects, according to the content of its %%principal^principal%%'s %%issuer^issuer%%-Policy (specifically regarding the way in which the %%credential^credential%% is to be digitally signed), and pass it to the %%wallet^wallet%%-component of its %%principal^principal%% allowing it to be issued.",date:20210601},sidebar:"essifLabSideBar"},p={},h=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Functionality",id:"functionality",level:3}],u={toc:h};function m(e){var t=e.components,a=(0,s.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"In other SSI contexts, this term has a different meaning. We intend to rework the famework in such a way that we can use this term in various ways (e.g. as a ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", a ",(0,n.kt)(r.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"role name"),", or an ",(0,n.kt)(r.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that performs the ",(0,n.kt)(r.Z,{popup:"Role (of an Entity in some context): a defined set of characteristics that the Entity has in some context, such as responsibilities (Obligations) it may have, Actions (behaviours) it may execute, or pieces of Knowledge that it is expected to have in that context, which are referenced to by a specific (Role-)name.",reference:"/framework/docs/terms/role",mdxType:"Term"},"role")," associated with the ",(0,n.kt)(r.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"role name")))),(0,n.kt)("h3",{id:"short-description"},"Short Description"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"issuer")," is an (architectural) function (a functional component in the ",(0,n.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture"),") that structures sets of (related) statements/claims (e.g. as produced by the ",(0,n.kt)(r.Z,{popup:"Transaction Data Discloser: a functional component that is capable of disclosing data.",reference:"/framework/docs/terms/transaction-data-discloser",mdxType:"Term"},"Transaction Data Discloser"),") in a package, adds metadata which includes e.g. a timestamp at which this was done, ensures that it is digitally signed on behalf of its ",(0,n.kt)(r.Z,{popup:"Owner (of an Entity): the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner")," (so that third ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can prove its provenance and integrity). Another function of the issuer is to handle revocation (and (un)suspension) of credentials that it has issued. For such tasks, it relies on functions that are made available by the SSI Protocols and Crypto Layer."),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The purpose of the Issuer function is."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Issuer")," is a component in the ",(0,n.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture")," whose function is to ... (tbd)."),(0,n.kt)("h3",{id:"functionality"},"Functionality"),(0,n.kt)("p",null,"The purpose of the Issuer component is to issue 'credentials', i.e. digital constructs that contain"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sets of (related) statements or claims (e.g. as produced by the Transaction Data Discloser)"),(0,n.kt)("li",{parentName:"ul"},"metadata (e.g. type of credential, date of issuing and expiration, endpoints, e.g. for revocation checking, credential definition, credential advertisements, credential enforcement policy, etc.)"),(0,n.kt)("li",{parentName:"ul"},"proofs (e.g. a digital signature by which third ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can prove its provenance and integrity.")),(0,n.kt)("p",null,"Another purpose that an Issuer might serve is to provide a means that allows any other Agent that somehow has obtained a copy or presentation of a credential, to verify whether or not the data therein is conformant to the business administration of its Principal. We will use the term 'revocation service' to refer to such means. Whether or not an Issuer provides such a service, and what kind of revocation service is provided (e.g. a revocation list, an online revocation status protocol, etc.), is a decision that its Principal should make, and specify in the Issuer Policies/Preferences."),(0,n.kt)("p",null,"An Issuer component may issue credentials in various formats, e.g. as a Verifiable Credential (VC), an Attribute-Based Credential (ABC), an OpenID Connect/JWT token, etc. The issuing ",(0,n.kt)(r.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," must specify credential-types in such a way that if the same credential is issued in different formats, it is possible for an arbitrary ",(0,n.kt)(r.Z,{popup:"Verifier (functional component): the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"verifier")," to determine whether or not two credentials that have different formats, are in fact the same. One way of doing this is that the Issuer generates an identifier for every credential that it constructs (before expressing it in a specific format)."),(0,n.kt)("p",null,"After the issuer has created a credential (in one or more formats), it checks the wallet to see if it contains a credential of the same type for the same ",(0,n.kt)(r.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),". If (one or more formats) are there, and their contents are the same as the newly created credential, the existing ones are revoked, deleted and/or archived/tombstoned.",(0,n.kt)("sup",null,"[Issuer.1]")," Then, the newly created credential is added to the wallet (in one or more formats). Thus, at any point in time, the wallet will contain an actual set of all credentials that have been issued.",(0,n.kt)("sup",null,"[Issuer.2]")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"[Issuer.1]"," Tombstoning is a mechanism that is used e.g. in (distributed) ledgers that do not allow for actual deletion, such as blockchains, by marking entries in the ledger as 'being deleted' (i.e. adding a 'tombstone' to such entries)."),(0,n.kt)("p",null,"[Issuer.2]"," This allows e.g. individuals, that have an Issuer component in their SSI app, to issue self-signed credentials and provide them to verifiers that request them as usual for non-self-signed credentials."))}m.isMDXComponent=!0}}]);