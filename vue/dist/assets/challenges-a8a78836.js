import{d as h,o as t,c as a,F as i,r as b,u as o,a as e,t as c,b as k,w as f,e as d,n as y,R as C,f as $,p as x,g as N,h as p}from"./index-379c6d99.js";import{c as w,_ as S}from"./logo-bf9e3886.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const u=new Map([["arpansaha13",{name:"Arpan Saha",pic:"https://avatars.githubusercontent.com/u/82361490"}]]),I={class:"challenge-grid"},B={key:0,class:"challenge-card disabled",disabled:""},M={key:0,class:"new"},F={key:0,class:"developer"},G=["src"],R={class:"name"},V=h({__name:"ChallengeGrid",setup(n){return(r,v)=>(t(),a("div",I,[(t(!0),a(i,null,b(o(w).values(),s=>(t(),a(i,{key:s.title},[s.link==="#"?(t(),a("button",B,[e("div",null,[e("h3",null,c(s.title),1)])])):(t(),k(o(C),{key:1,class:y(["challenge-card",s.difficulty]),to:s.link},{default:f(()=>{var l,_;return[s.isNew?(t(),a("span",M,"New")):d("",!0),e("div",null,[e("h3",null,c(s.title),1),s.developer?(t(),a("div",F,[e("img",{src:(l=o(u).get(s.developer))==null?void 0:l.pic,alt:""},null,8,G),e("span",R,c((_=o(u).get(s.developer))==null?void 0:_.name),1)])):d("",!0)])]}),_:2},1032,["class","to"]))],64))),128))]))}});const L=m(V,[["__scopeId","data-v-f2b6416f"]]);const z={},g=n=>(x("data-v-49bdfdae"),n=n(),N(),n),A={class:"navbar"},D=g(()=>e("a",{class:"logo",href:"/frontend-mini-challenges/"},[e("img",{src:S,alt:"logo"}),e("span",null,"Frontend Mini Challenges")],-1)),E={class:"links"},J=g(()=>e("a",{href:"https://github.com/sadanandpai/frontend-mini-challenges/",target:"blank"},[e("img",{src:"https://cdn-icons-png.flaticon.com/512/25/25231.png",alt:"github repo",class:"github"})],-1));function j(n,r){return t(),a("nav",A,[D,e("div",E,[$(n.$slots,"default",{},void 0,!0)]),J])}const q=m(z,[["render",j],["__scopeId","data-v-49bdfdae"]]),H=e("a",{href:"/frontend-mini-challenges/native"},"JavaScript Mini Challenges",-1),K=e("a",{href:"/frontend-mini-challenges/react/dist/#/challenges"},"React Mini Challenges",-1),O={className:"container text-center"},U=h({__name:"challenges",setup(n){return(r,v)=>(t(),a(i,null,[p(q,null,{default:f(()=>[H,K]),_:1}),e("div",O,[p(L)])],64))}});export{U as default};