import{o as i,c as a,a as d,t as u,l as f,b as p}from"./vendor.dfd47794.js";const m=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};m();function g(r,t){return r+t}var h=(r,t)=>{const n=r.__vccOpts||r;for(const[s,e]of t)n[s]=e;return n};const y={name:"App",data(){return{message:"hello world"}}};function v(r,t,n,s,e,o){return i(),a("div",null,[d("h2",null,u(e.message),1)])}var _=h(y,[["render",v]]);function b(r,t){return r*t}console.log("hello");console.log(g(20,20));console.log(f.join(["abc","cba"],""));const c=document.createElement("div");c.className="title";c.innerHTML="\u4F60\u597D\u554A,\u674E\u94F6\u6CB3";document.body.appendChild(c);console.log(b(1,2));p(_).mount("#app");
