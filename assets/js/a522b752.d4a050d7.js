"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2198],{6489:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var r=i(7462),a=i(3366),n=(i(7294),i(3905)),o=i(4345),s=["components"],d={id:"ssi-standards",title:"SSI Standards",date:20210601},l=void 0,c={unversionedId:"ssi-standards",id:"ssi-standards",title:"SSI Standards",description:"The purpose of this document is to provide an overview of standards activities for self-sovereign identity (SSI) and their relevance to eSSIF-Lab.",source:"@site/docs/ssi-standards.md",sourceDirName:".",slug:"/ssi-standards",permalink:"/framework/docs/ssi-standards",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/ssi-standards.md",tags:[],version:"current",frontMatter:{id:"ssi-standards",title:"SSI Standards",date:20210601}},p={},h=[{value:"1.  Introduction",id:"1--introduction",level:2},{value:"2.  W3C CCG: Credentials Community Group",id:"2--w3c-ccg-credentials-community-group",level:2},{value:"3.  W3C DID: Decentralized Identifier",id:"3--w3c-did-decentralized-identifier",level:2},{value:"4.  Hyperledger Indy: distributed ledger software",id:"4--hyperledger-indy-distributed-ledger-software",level:2},{value:"5.  Hyperledger Aries: protocols for communication of VC and DID",id:"5--hyperledger-aries-protocols-for-communication-of-vc-and-did",level:2},{value:"6.  Hyperledger Ursa: cryptographic library",id:"6--hyperledger-ursa-cryptographic-library",level:2},{value:"7.  DIF: Decentralized identity Foundation",id:"7--dif-decentralized-identity-foundation",level:2},{value:"7.  Sovrin: SSI blockchain",id:"7--sovrin-ssi-blockchain",level:2},{value:"8.  Trust-over-IP: full-stack governance",id:"8--trust-over-ip-full-stack-governance",level:2},{value:"9.  Relevance to eSSIF-Lab",id:"9--relevance-to-essif-lab",level:2}],u={toc:h};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The purpose of this document is to provide an overview of standards activities for self-sovereign identity (SSI) and their relevance to eSSIF-Lab."),(0,n.kt)("h2",{id:"1--introduction"},"1.  Introduction"),(0,n.kt)("p",null,"Self-sovereign identity (SSI) is work in progress, which includes the work on standards for SSI. Such standards include frameworks, schemas, data models, protocols, APIs, open-source code and more. The present document provides an overview on those standards and work-in-progress. Most pieces of text have been directly copied from the referenced websites."),(0,n.kt)("h2",{id:"2--w3c-ccg-credentials-community-group"},"2.  W3C CCG: Credentials Community Group"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/community/credentials/"},"W3C Credentials Community Group")," explores the creation, storage, presentation, verification, and user control of credentials. It focuses on a verifiable credential (a set of claims) created by an issuer about a ",(0,n.kt)(o.Z,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, Employment Contracts, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," \u2014 a person, group, or thing \u2014 and seek solutions inclusive of approaches such as: self-sovereign identity; presentation of proofs by the bearer; data minimization; and centralized, federated, and decentralized registry and identity systems. Its tasks include drafting and incubating Internet specifications for further standardization and prototyping and testing reference implementations."),(0,n.kt)("p",null,"W3C CCG has published a first version of ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/"},"Verifiable Claims Data Model and Representations 1.0")," in May 2017. That specification introduces verifiable claims as follows."),(0,n.kt)("p",null,"A self-sovereign architecture for verifiable claims is one where the holder of a verifiable claim is in complete control of their identifier, where their verifiable claims are stored, and how they are used. There is currently no widely used self-sovereign, privacy-enhancing standard for expressing and transacting verifiable claims (aka: credentials, attestations) via the Web.  This specification describes a data model for a digital ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-identity-profile"},"identity profile")," and a collection of digital ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-entity-credential"},"entity credentials")," that assert verifiable ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-claim"},"claims")," about that ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2017/05/vc-data-model/CGFR/2017-05-01/#dfn-identity-profile"},"identity profile"),". It also describes how to express that data model in JSON, JSON-LD, and WebIDL."),(0,n.kt)("h2",{id:"3--w3c-did-decentralized-identifier"},"3.  W3C DID: Decentralized Identifier"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"W3C DID Working Group")," standardizes the DID URI scheme, the data model and syntax of DID Documents, which contain information related to DIDs that enable the aforementioned initial use cases, and the requirements for DID Method specifications."),(0,n.kt)("p",null,"W3C DID is working on ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"Decentralized Identifiers (DIDs) v1.0"),". The June 2020 version of the working document introduces DIDs as follows."),(0,n.kt)("a",null,"Decentralized identifiers")," (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. A ",(0,n.kt)("a",null,"DID")," identifies any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) that the controller of the ",(0,n.kt)("a",null,"DID")," decides that it identifies. These new identifiers are designed to enable the controller of a ",(0,n.kt)("a",null,"DID")," to prove control over it and to be implemented independently of any centralized registry, identity provider, or certificate authority. ",(0,n.kt)("a",null,"DID"),"s are URLs that associate a ",(0,n.kt)("a",null,"DID subject")," with a ",(0,n.kt)("a",null,"DID document")," allowing trustable interactions associated with that subject. Each ",(0,n.kt)("a",null,"DID document")," can express cryptographic material, verification methods, or ",(0,n.kt)("a",null,"service endpoints"),", which provide a set of mechanisms enabling a ",(0,n.kt)("a",null,"DID controller")," to prove control of the ",(0,n.kt)("a",null,"DID"),". ",(0,n.kt)("a",null,"Service endpoints")," enable trusted interactions associated with the ",(0,n.kt)("a",null,"DID subject"),". A ",(0,n.kt)("a",null,"DID document")," might contain semantics about the subject that it identifies. A ",(0,n.kt)("a",null,"DID document")," might contain the ",(0,n.kt)("a",null,"DID subject")," itself (e.g. a data model).",(0,n.kt)("h2",{id:"4--hyperledger-indy-distributed-ledger-software"},"4.  Hyperledger Indy: distributed ledger software"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.hyperledger.org/use/hyperledger-indy"},"Hyperledger Indy")," provides tools, libraries, and reusable components for providing digital identities rooted on blockchains or other distributed ledgers so that they are interoperable across administrative domains, applications, and any other silo. Indy is interoperable with other blockchains or can be used standalone powering the decentralization of identity. The Indy repository can be found ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.hyperledger.org/display/indy/Hyperledger+Indy"},"here"),"."),(0,n.kt)("h2",{id:"5--hyperledger-aries-protocols-for-communication-of-vc-and-did"},"5.  Hyperledger Aries: protocols for communication of VC and DID"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.hyperledger.org/use/aries"},"Hyperledger Aries")," provides a shared, reusable, interoperable tool kit designed for initiatives and solutions focused on creating, transmitting and storing digital verifiable credentials (VCs). It is infrastructure for blockchain-rooted, peer-to-peer interactions. The project consumes the cryptographic support provided by Hyperledger Ursa, to provide secure secret management and decentralized key management functionality."),(0,n.kt)("p",null,"Hyperledger Aries allows trusted online peer-to-peer interactions based on decentralized identities and verifiable credentials. Aries includes a protocol definition, tools, and reference implementations. The Aries protocol supports identities rooted in a variety of distributed ledgers or blockchains. This approach to identity is often called Self Sovereign Identity (SSI)."),(0,n.kt)("p",null,"Key components of an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries"},"Aries solution")," are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0004-agents/README.md"},"agents"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0005-didcomm/README.md"},"DID communications"),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0003-protocols/README.md"},"protocols"),","),(0,n.kt)("li",{parentName:"ul"},"and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0051-dkms/README.md"},"key management"),".")),(0,n.kt)("p",null,"Moreover, Hyperledger Aries develops a set of Request for Comment (RFCs) that describe important topics standardize across the Aries ecosystem. There are 2 types of Aries RFCs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RFCs that describe individual features (in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/master/features"},"features")," folder)"),(0,n.kt)("li",{parentName:"ul"},"RFCs that explain concepts underpinning many features (in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/master/concepts"},"concepts")," folder)")),(0,n.kt)("p",null,"RFCs are for developers ",(0,n.kt)("em",{parentName:"p"},"building on"),' Aries. They don\'t provide guidance on how Aries components implement features internally; individual Aries repos have design docs for that. Each Aries RFC includes an "implementations" section and all RFCs with a status greater than Proposed should have at least one listed implementation.'),(0,n.kt)("h2",{id:"6--hyperledger-ursa-cryptographic-library"},"6.  Hyperledger Ursa: cryptographic library"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.hyperledger.org/use/ursa"},"Hyperledger Ursa")," is a shared cryptographic library, it enables implementations to avoid duplicating other cryptographic work and hopefully increase security in the process. The library is an opt-in repository (for Hyperledger and non Hyperledger projects) to place and use crypto. Hyperledger Ursa consists of sub-projects, which are cohesive implementations of cryptographic code or interfaces to cryptographic code. The Ursa repository can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/ursa"},"here"),"."),(0,n.kt)("h2",{id:"7--dif-decentralized-identity-foundation"},"7.  DIF: Decentralized identity Foundation"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://identity.foundation/"},"Decentralized Identity Foundation")," (DIF) is an engineering-driven organization focused on developing the foundational elements necessary to establish an open ecosystem for decentralized identity and ensure interop between all participants."),(0,n.kt)("p",null,"DIF builds on W3C and Hyperledger work referenced above. Some of its work originates from Hyperledger Aries and has been moved to DIF for more effective management of IPR. DIF has among others the following working groups."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/working-groups/identifiers-discovery.html"},"Identifiers and Discovery"),": A key piece of the decentralized identity equation is how people, organizations, and devices can be identified and located without centralized systems of identifiers (e.g. email addresses). DIF members are actively working on protocols and implementations that enable creation, resolution, and discovery of decentralized identifiers and names across decentralized systems, like blockchains and distributed ledgers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/working-groups/storage-compute.html"},"Storage and Compute"),": Secure, encrypted, privacy-preserving storage and computation of data is a critical component of decentralized identity systems. As with identifiers and names must be self-sovereign to the owning entity, a user's identity data must remain private, only accessible to the entities they allow. DIF members are actively developing specs and reference implementations for provider-agnostic, run-anywhere solutions that provides these features."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/working-groups/authentication.html"},"Authentication"),": Designing and implementing DID-based authentication specs, standards, and libraries used in authenticating DIDs across a wide variety of exchanges and use cases."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/working-groups/claims-credentials.html"},"Claims and Credentials"),": The ability to verify the claims and assertions of identities is key in establishing trust among entities on a decentralized system that lacks a centralized hierarchy. The DIF Foundation has recently begun work on defining the specs, protocols, and tools it can provide to the ecosystem to help ecosystem participants and their customers easily integrate DID-signed claims into their apps and services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/working-groups/did-comm.html"},"DID Communication"),": Produce one or more high-quality specs that embody a method (\u201cDIDComm\u201d) for secure, private and (where applicable) authenticated message-based communication, where trust is rooted in DIDs and depends on the messages themselves, not on the external properties of the transport(s) used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/working-groups/secure-data-storage.html"},"Secure Data Storage"),": Create one or more specifications to establish a foundational layer for secure data storage (including personal data), specifically data models for storage and transport, syntax, data at rest protection, CRUD API, access control, synchronization, and at least a minimum viable HTTP-based interface compatible with W3C DIDs/VCs.")),(0,n.kt)("h2",{id:"7--sovrin-ssi-blockchain"},"7.  Sovrin: SSI blockchain"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://sovrin.org/"},"Sovrin Foundation")," is a private-sector, international non-profit that was established to govern the world's first self-sovereign identity (SSI) network. The Sovrin blockchain network is based on Hyperledger Indy. Sovrin is governed by the ",(0,n.kt)("a",{parentName:"p",href:"https://sovrin.org/library/sovrin-governance-framework/"},"Sovrin Governance Framework"),", which is a set of official documents that include legal agreements between participants in Sovrin. The services of Sovrin are registrations on the Sovrin blockchain: DIDs and DID Documents, VC schemas (generic), VC definitions (issuer-specific) and VC revocations. From 2017-2020, Sovrin has been funded via donations (Sovrin Alliance) and sale of future SOV tokens. In 2020, Sovrin started a transition process, revising its financing and structure."),(0,n.kt)("h2",{id:"8--trust-over-ip-full-stack-governance"},"8.  Trust-over-IP: full-stack governance"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://trustoverip.org/"},"Trust-over-IP foundation")," was founded mid 2020. It is defining a complete architecture for Internet-scale digital trust that combines both cryptographic trust at the machine layer and human trust at the business, legal, and social layers. It is has the following working group, as well as a few more that are still being started."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trustoverip.org/working-groups/governance-stack/"},"Governance Stack"),": The scope of the Governance Stack Working Group is to define models and interoperability standards for governance frameworks that enable business, legal, and social trust between entities implementing the Trust over IP architecture stack as defined in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0289-toip-stack"},"Hyperledger Aries RFC 0289")," (or its successor as identified in the RFC document itself)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trustoverip.org/working-groups/technical-stack/"},"Technical Stack"),": The scope of the Technical Stack Working Group is to define (directly or by reference) the technical standards, test suites, and interoperability certification standards for the Trust over IP architecture stack as defined in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/master/concepts/0289-toip-stack"},"Hyperledger Aries RFC 0289")," (or its successor as identified in the RFC document itself)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trustoverip.org/working-groups/utility-foundry/"},"Utility Foundry"),": The scope of the Utility Foundry Working Group is to facilitate a community of practice among governance authorities, implementers, operators, and service providers for Trust over IP Layer One utilities. The WG will provide process guidance for the establishment and monitoring of new ToIP Layer One utility projects, whether hosted at the Linux Foundation or external to it. Other WG activities will include creating template RFPs for service providers, maintaining a list of affiliated Foundry Service Providers, identifying areas of collaboration and alignment between associated and/or disparate Utilities, and where possible serving as a center of competence for the education and promotion of the role of ToIP Layer One utilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trustoverip.org/working-groups/ecosystem-foundry/"},"Ecosystem Foundry"),": The scope of the Ecosystem Foundry Working Group is to facilitate a community of practice among governance authorities, implementers, operators, and service providers of Trust over IP Layer Four ecosystems. The WG will provide process guidance for the establishment and monitoring of new ToIP Layer Four ecosystem projects, whether hosted at the Linux Foundation or external to it. Other WG activities will include creating template RFPs for service providers, maintaining a list of affiliated Foundry Service Providers, identifying areas of collaboration and alignment between associated and/or disparate ecosystems, and where possible serving as a center of competence for the education and promotion of the role of ToIP Layer Four ecosystems.")),(0,n.kt)("h2",{id:"9--relevance-to-essif-lab"},"9.  Relevance to eSSIF-Lab"),(0,n.kt)("p",null,"The above-mentioned standards, open source and governance are relevant to eSSIF-Lab in multiple ways."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using: Subgrantees of eSSIF-Lab will implement some of these standards, and fork existing open-source code."),(0,n.kt)("li",{parentName:"ul"},"Testing: Subgrantees of eSSIF-Lab will perform interoperability tests of their implementations against other within eSSIF-Lab and outside, likely including the European ",(0,n.kt)("a",{parentName:"li",href:"https://www.eesc.europa.eu/sites/default/files/files/1._panel_-_daniel_du_seuil.pdf"},"EBSI-ESSIF"),", the American ",(0,n.kt)("a",{parentName:"li",href:"https://www.dhs.gov/science-and-technology/svip"},"DHS-SVIP"),"."),(0,n.kt)("li",{parentName:"ul"},"Contributing: Subgrantees of eSSIF-Lab will also be required to contribute to standards development where relevant.")))}m.isMDXComponent=!0}}]);