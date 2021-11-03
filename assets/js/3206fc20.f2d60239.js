"use strict";(self.webpackChunkxlrte_dev=self.webpackChunkxlrte_dev||[]).push([[261],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1743:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:8},u="Add a Cloud Storage bucket",c={unversionedId:"getting-started/add-a-storage-bucket",id:"getting-started/add-a-storage-bucket",isDocsHomePage:!1,title:"Add a Cloud Storage bucket",description:"We still assume you have followed the previous pages.",source:"@site/docs/getting-started/add-a-storage-bucket.md",sourceDirName:"getting-started",slug:"/getting-started/add-a-storage-bucket",permalink:"/docs/getting-started/add-a-storage-bucket",editUrl:"https://github.com/xlrte/website/edit/main/docs/getting-started/add-a-storage-bucket.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Add a Pub/Sub topic",permalink:"/docs/getting-started/add-a-pubsub-topic"},next:{title:"Congratulations!",permalink:"/docs/getting-started/congratulations"}},d=[],s={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-a-cloud-storage-bucket"},"Add a Cloud Storage bucket"),(0,o.kt)("p",null,"We still assume you have followed the previous pages."),(0,o.kt)("p",null,"To add a cloud storage bucket, you can add this to the ",(0,o.kt)("inlineCode",{parentName:"p"},"depends_on")," block of your service yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  cloudstorage:\n  - name: baz\n    public: true\n    access: readwrite\n")),(0,o.kt)("p",null,"The properties are worth noting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public"),": whether the bucket is publicly read-accessible on the internet. Can be omitted and will default to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," if omitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"readwrite")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"read"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"readonly"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"readonly")," doesn't really make sense if ",(0,o.kt)("inlineCode",{parentName:"li"},"public: true"),".")),(0,o.kt)("p",null,"Again, when you ",(0,o.kt)("inlineCode",{parentName:"p"},"apply"),", the correct IAM permissions will be added to your service."))}p.isMDXComponent=!0}}]);