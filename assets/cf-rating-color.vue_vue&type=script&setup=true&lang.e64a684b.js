import{d as e,k as a,j as r,q as s,o as t,c as n,h as l,y as i,u}from"./index.b1e74543.js";var d=e({props:{rating:{type:Number,required:!1},rank:{type:String,required:!1}},setup(e){const d=e,{rating:p,rank:o}=a(d),c=r((()=>{const e=null==o?void 0:o.value;if(s(e))return e.replace(/ /g,"-");const a=null==p?void 0:p.value;return s(a)?a<1200?"newbie":a<1400?"pupil":a<1600?"specialist":a<1900?"expert":a<2100?"candidate-master":a<2400?"master":a<3e3?"grandmaster":"legendary-grandmaster":null}));return(e,a)=>(t(),n("span",{class:i(["cf-handle",u(c)])},[l(e.$slots,"default")],2))}});export{d as _};