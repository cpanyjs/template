import{d as i,z as c,x as f,E as a,o as p,e as d,s as m,L as g,h as x}from"./index.81a3b8bf.js";const b=i({props:{rating:null,rank:null,disableLegendary:null},setup(l){const o=l,{rating:n,rank:s,disableLegendary:t}=c(o),u=f(()=>{const r=s==null?void 0:s.value;if(a(r))return r.replace(/ /g,"-");const e=n==null?void 0:n.value;return a(e)?e<1200?"newbie":e<1400?"pupil":e<1600?"specialist":e<1900?"expert":e<2100?"candidate-master":e<2400?"master":e<3e3||(t==null?void 0:t.value)?"grandmaster":"legendary-grandmaster":null});return(r,e)=>(p(),d("span",{class:g(["cf-handle",x(u)])},[m(r.$slots,"default")],2))}});export{b as _};
