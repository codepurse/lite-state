import{useState as t,useEffect as n}from"react";import{jsx as e,Fragment as r}from"react/jsx-runtime";var o=function(t){var n=null;return function(e){(n=new BroadcastChannel(t)).onmessage=function(t){var n=t.data,r=n.payload;"STATE_UPDATE"===n.type&&r&&"object"==typeof r&&e.setState(r)};var r=e.subscribe(function(t){!function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return"function"!=typeof t[1]}));n&&n.postMessage({type:"STATE_UPDATE",payload:e})}(t)});return function(){n&&n.close(),r()}}},i=function(o){var i=o.children,c=t(!1),u=c[0],a=c[1];return n(function(){a(!0)},[]),/*#__PURE__*/e(r,{children:u?/*#__PURE__*/e("div",{children:i}):null})},c=function(){return function(t){var n=t.getState(),e=t.subscribe(function(t){console.log("Previous State:",n),console.log("New State:",t)});return function(){e()}}},u=function(t,n,e){return function(r){var o=function(){try{if("undefined"!=typeof window){var e=window[t].getItem(n);if(e)return JSON.parse(e)}}catch(t){console.error("Error while loading persisted state:",t)}}();if(r.setState(o||r.getState()),"undefined"!=typeof window)try{return r.subscribe(function(r){!function(r){try{if("undefined"!=typeof window&&window[t]){var o={};e.forEach(function(t){o[t]=r[t]});var i=JSON.stringify(o);window[t].setItem(n,i)}}catch(t){console.error("Error while persisting state:",t)}}(r)})}catch(t){}}};export{i as HydrateState,o as broadcast,c as logging,u as preserve};
//# sourceMappingURL=index.esm.js.map
