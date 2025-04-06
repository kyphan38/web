"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[722],{6136:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"study/aws/fundamentals - tech/networking","title":"networking","description":"OSI Model","source":"@site/assets/docs/study/aws/fundamentals - tech/4_networking.md","sourceDirName":"study/aws/fundamentals - tech","slug":"/study/aws/fundamentals - tech/networking","permalink":"/study/aws/fundamentals - tech/networking","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1743946255000,"sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"encryption and security","permalink":"/study/aws/fundamentals - tech/cryptography and security"},"next":{"title":"disaster recovery","permalink":"/study/aws/fundamentals - tech/disaster recovery"}}');var t=i(4848),l=i(8453);const a={},r="networking",c={},d=[{value:"OSI Model",id:"osi-model",level:2},{value:"Layer 1 - Physical - Bit",id:"layer-1---physical---bit",level:3},{value:"Layer 2 - Data Link - Frame",id:"layer-2---data-link---frame",level:3}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"networking",children:"networking"})}),"\n",(0,t.jsx)(n.h2,{id:"osi-model",children:"OSI Model"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(8226).A+"",width:"1578",height:"734"})}),"\n",(0,t.jsx)(n.p,{children:"Components"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local networking - Ethernet"}),"\n",(0,t.jsx)(n.li,{children:"Routing"}),"\n",(0,t.jsx)(n.li,{children:"Segmenting, ports and sessions"}),"\n",(0,t.jsx)(n.li,{children:"Applications"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Key features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Higher layer built on lower layer, adding features and capabilities"}),"\n",(0,t.jsx)(n.li,{children:".. to be encapsulated ,... will be decapsulated"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"layer-1---physical---bit",children:"Layer 1 - Physical - Bit"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(9093).A+"",width:"1486",height:"379"})}),"\n",(0,t.jsx)(n.p,{children:"Key features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Layer 1 (Physical) specifications define the transmission and reception of raw bit streams between a device and a shared physical medium"}),"\n",(0,t.jsx)(n.li,{children:"It defines things like voltage levels, timing, rates, distances, modulation, and connectors"}),"\n",(0,t.jsx)(n.li,{children:"Physical medium can be copper (electrical), fibre (light), or wifi (RF)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Physical HUB"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(1580).A+"",width:"1573",height:"702"})}),"\n",(0,t.jsx)(n.p,{children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Physical shared medium"}),"\n",(0,t.jsx)(n.li,{children:"Standards for transmitting onto the medium"}),"\n",(0,t.jsx)(n.li,{children:"Standards for receiving from the medium"}),"\n",(0,t.jsx)(n.li,{children:"No access control"}),"\n",(0,t.jsx)(n.li,{children:"No uniquely identified devices"}),"\n",(0,t.jsx)(n.li,{children:"No devices \u2192 Device communications"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"layer-2---data-link---frame",children:"Layer 2 - Data Link - Frame"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(6168).A+"",width:"1592",height:"766"})}),"\n",(0,t.jsx)(n.p,{children:"Components on frame"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Preamble and SFD: Define the start of the frame"}),"\n",(0,t.jsx)(n.li,{children:"MAC header: Contains the destination and source MAC addresses and the EtherType field (layer 3 protocol)"}),"\n",(0,t.jsx)(n.li,{children:"Payload: The data encapsulated within the frame"}),"\n",(0,t.jsx)(n.li,{children:"FCS: Check to detect any transmission errors"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"CSMA/CD - Carrier-sense Multiple Access / Collision Detection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Challenge"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(7297).A+"",width:"1671",height:"757"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(3066).A+"",width:"1692",height:"784"})}),"\n",(0,t.jsx)(n.p,{children:"Switch"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Problem"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(1923).A+"",width:"1591",height:"784"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:i(7052).A+"",width:"1634",height:"772"})}),"\n",(0,t.jsx)(n.p,{children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Identifiable devices"}),"\n",(0,t.jsx)(n.li,{children:"Media access control (sharing)"}),"\n",(0,t.jsx)(n.li,{children:"Collision detection"}),"\n",(0,t.jsx)(n.li,{children:"Unicast 1:1"}),"\n",(0,t.jsxs)(n.li,{children:["Broadcast 1",":ALL"]}),"\n",(0,t.jsx)(n.li,{children:"Switches - Like Hubs with Super powers (Layer 2)"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8226:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/17-72ae6352a765c784b2d759eff4e0708e.png"},9093:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/18-f99c917936675ef123c808786a9e5b70.png"},1580:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/19-1d77fd8c7b8b21e9a95a459e6c5f6a31.png"},6168:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/20-7dfe39ba077d7b6c9960dfefc9c09bcd.png"},7297:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/21-7cb1466d8356f4af52ded2a6c456c6f0.png"},3066:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/22-c58258e5c97a005d0e45cc200bc47027.png"},1923:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/23-f798221b6b7e028b34a138e249d246ce.png"},7052:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/24-46249602f45a809900cf4bf465eafaf0.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);