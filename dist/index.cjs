var e=require("react"),t=require("react/jsx-runtime");exports.HydrateState=function(n){var r=n.children,o=e.useState(!1),i=o[0],c=o[1];return e.useEffect(function(){c(!0)},[]),/*#__PURE__*/t.jsx(t.Fragment,{children:i?/*#__PURE__*/t.jsx("div",{children:r}):null})},exports.broadcast=function(e){var t=null;return function(n){(t=new BroadcastChannel(e)).onmessage=function(e){var t=e.data,r=t.payload;"STATE_UPDATE"===t.type&&r&&"object"==typeof r&&n.setState(r)};var r=n.subscribe(function(e){!function(e){var n=Object.fromEntries(Object.entries(e).filter(function(e){return"function"!=typeof e[1]}));t&&t.postMessage({type:"STATE_UPDATE",payload:n})}(e)});return function(){t&&t.close(),r()}}},exports.logging=function(){return function(e){var t=e.getState(),n=e.subscribe(function(e){console.log("Previous State:",t),console.log("New State:",e)});return function(){n()}}},exports.preserve=function(e,t,n){return function(r){var o=function(){try{if("undefined"!=typeof window){var n=window[e].getItem(t);if(n)return JSON.parse(n)}}catch(e){console.error("Error while loading persisted state:",e)}}();if(r.setState(o||r.getState()),"undefined"!=typeof window)try{return r.subscribe(function(r){!function(r){try{if("undefined"!=typeof window&&window[e]){var o={};n.forEach(function(e){o[e]=r[e]});var i=JSON.stringify(o);window[e].setItem(t,i)}}catch(e){console.error("Error while persisting state:",e)}}(r)})}catch(e){}}};
//# sourceMappingURL=index.cjs.map
