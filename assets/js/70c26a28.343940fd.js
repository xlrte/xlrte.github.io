"use strict";(self.webpackChunkxlrte_dev=self.webpackChunkxlrte_dev||[]).push([[904],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},l="Initialize your first environment",u={unversionedId:"getting-started/initialize-your-environment",id:"getting-started/initialize-your-environment",isDocsHomePage:!1,title:"Initialize your first environment",description:"You should skip this if you have an existing GCP project you want to use",source:"@site/docs/getting-started/initialize-your-environment.md",sourceDirName:"getting-started",slug:"/getting-started/initialize-your-environment",permalink:"/docs/getting-started/initialize-your-environment",editUrl:"https://github.com/xlrte/website/edit/main/docs/getting-started/initialize-your-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install xlrte",permalink:"/docs/getting-started/install"},next:{title:"Anatomy of an environment",permalink:"/docs/getting-started/environment-anatomy"}},p=[{value:"Secrets: What are these questions I get asked?",id:"secrets-what-are-these-questions-i-get-asked",children:[],level:3},{value:"What if I want more environments?",id:"what-if-i-want-more-environments",children:[],level:3}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"initialize-your-first-environment"},"Initialize your first environment"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should skip this if you have an existing GCP project you want to use")),(0,o.kt)("p",null,"You will need to decide the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A name for your environment (for example ",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"staging")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"prod"),")"),(0,o.kt)("li",{parentName:"ul"},"The name of the new GCP project the environment will run in."),(0,o.kt)("li",{parentName:"ul"},"The GCP region you want to run it in (for instance ",(0,o.kt)("inlineCode",{parentName:"li"},"europe-west6")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"zurich"),", Switzerland)")),(0,o.kt)("p",null,"Now you can initialize your first deployment environment by simply running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xlrte -e [environment name] -p gcp -c [gcp project name] -r [gcp region]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," argument is required even though only GCP is supported. This is to select the cloud provider used, as we add support for more."),(0,o.kt)("h3",{id:"secrets-what-are-these-questions-i-get-asked"},"Secrets: What are these questions I get asked?"),(0,o.kt)("p",null,"The first time, we will also initialize the xlrte secrets sub-system for your user, creating a PGP keypair for you. You will be asked a few questions, please note your passphrase, as if you lose it, it is not recoverable."),(0,o.kt)("p",null,"The private key created lives outside your project in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.xlrte")," and is used to decrypt secrets in your git repository, which always PGP encrypted at rest (with RSA with 4096-bit length keys)."),(0,o.kt)("p",null,"And no, don't worry, we did not invent our own cryptography. We used a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ProtonMail/gopenpgp"},"tried and tested library")," and simple patterns of use."),(0,o.kt)("h3",{id:"what-if-i-want-more-environments"},"What if I want more environments?"),(0,o.kt)("p",null,"Just repeat the instructions on this page as many times as you want environments."),(0,o.kt)("p",null,"You can have more than one environment in the same GCP project, resources are always namespaced, even within a project, so it's ok to have more than one environment in a GCP project."))}m.isMDXComponent=!0}}]);