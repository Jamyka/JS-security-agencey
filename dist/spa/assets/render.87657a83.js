import{c as t,a4 as u,d as f,h as s,m}from"./index.f0daff15.js";const r={xs:18,sm:24,md:32,lg:38,xl:46},h={size:String};function x(e,n=r){return t(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const S={size:{type:[Number,String],default:"1em"},color:String};function v(e){return{cSize:t(()=>e.size in r?`${r[e.size]}px`:e.size),classes:t(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const d=e=>u(f(e)),g=e=>u(e);var k=d({name:"QSpinner",props:{...S,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:i}=v(e);return()=>s("svg",{class:i.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[s("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function p(e,n){return e!==void 0&&e()||n}function w(e,n){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return n}function y(e,n){return e!==void 0?n.concat(e()):n}function D(e,n,i,a,c,l){n.key=a+c;const o=s(e,n,i);return c===!0?m(o,l()):o}export{k as Q,p as a,w as b,d as c,g as d,D as e,x as f,y as h,h as u};
