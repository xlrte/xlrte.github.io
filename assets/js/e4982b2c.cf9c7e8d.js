"use strict";(self.webpackChunkxlrte_dev=self.webpackChunkxlrte_dev||[]).push([[544],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l="Anatomy of an environment",c={unversionedId:"getting-started/environment-anatomy",id:"getting-started/environment-anatomy",isDocsHomePage:!1,title:"Anatomy of an environment",description:"If you initialized an environment in the previous step, you should now have a folder structure that looks something like this in your project folder:",source:"@site/docs/getting-started/environment-anatomy.md",sourceDirName:"getting-started",slug:"/getting-started/environment-anatomy",permalink:"/docs/getting-started/environment-anatomy",editUrl:"https://github.com/xlrte/website/edit/main/docs/getting-started/environment-anatomy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Initialize your first environment",permalink:"/docs/getting-started/initialize-your-environment"},next:{title:"Setup your first service",permalink:"/docs/getting-started/first-service"}},m=[],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anatomy-of-an-environment"},"Anatomy of an environment"),(0,a.kt)("p",null,"If you initialized an environment in the previous step, you should now have a folder structure that looks something like this in your project folder: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".xlrte\n\u2502\n\u2514\u2500\u2500\u2500config\n    \u2502\n    \u2514\u2500\u2500\u2500environments\n    \u2502   \u2502\n    \u2502   \u2514\u2500\u2500\u2500[environment name]\n    \u2502       \u2502   resources.yaml\n    \u2502       \u2502   versions.yaml\n    \u2502       \u2514\u2500\u2500\u2500pubkeys\n    \u2502       \u2502    \u2502   [name & email].asc\n    \u2502       \u2514\u2500\u2500\u2500secrets\n    \u2502   \n    \u2514\u2500\u2500\u2500services\n        \u2502   [service.yaml-files go here!]\n\n")),(0,a.kt)("p",null,"A minimal ",(0,a.kt)("inlineCode",{parentName:"p"},"resources.yaml")," should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"context: [gcp project you chose]\nregion: [gcp region]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"xlrte")," follows a folder convention, where:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Folder/File"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"config/environments")),(0,a.kt)("td",{parentName:"tr",align:"left"},"contains the separate environment specific configurations in sub-folders named after each environment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"config/environments/[env]/resources.yaml")),(0,a.kt)("td",{parentName:"tr",align:"left"},"contains basic environment information and customizations to the resources used (such as virtual CPUs, memory, storage etc). For now, you do not need to concern yourself with any configuration other than ",(0,a.kt)("inlineCode",{parentName:"td"},"context")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"region"),", as by default we provide sensible defaults for a low-traffic, cheap-to-run development environment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"config/environments/[env]/versions.yaml")),(0,a.kt)("td",{parentName:"tr",align:"left"},"contains service versions to deploy for this environment. This file is not mandatory, and the ",(0,a.kt)("inlineCode",{parentName:"td"},"-v")," cli argument can be used instead to define a version for services. ",(0,a.kt)("inlineCode",{parentName:"td"},"versions.yaml")," is however necessary if you want to have different versions of the numerous services you might deploy.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"config/environments/[env]/secrets")),(0,a.kt)("td",{parentName:"tr",align:"left"},"contains all secrets for an environment, encrypted at rest. Run ",(0,a.kt)("inlineCode",{parentName:"td"},"xlrte secret help")," to get more information on how to use secrets from the cli.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"config/services")),(0,a.kt)("td",{parentName:"tr",align:"left"},"is the folder that contains all services and their dependency definitions, independent of environment.")))))}d.isMDXComponent=!0}}]);