import{I as a}from"./account.1b2c7561.js";import{l as e}from"./load.b9090f49.js";import{c as s}from"./codeforces.40fcb11d.js";import{C as t,a as l}from"./c-table.ae1d9ab1.js";import{g as r}from"./overview.11b03377.js";import{d as n,i as c,r as o,o as i,c as u,b as f,w as m,u as d,a as p,t as b,e as v,x as j,f as x}from"./index.af68f3a4.js";var _=JSON.parse('{"keyMaps":[],"stringMaps":[],"data":[]}');const h=[...e(s),...e(_)].sort(((a,e)=>e.startTime-a.startTime)),w=p("h2",{class:"mb-4"},"所有比赛",-1),g={class:"font-600"},k={class:"flex flex-1 items-center justify-center"},y=v(" "),T={class:"mt-4 flex justify-center"},C=v("↓ 浏览更多");var M=n({setup(e){const s=2*r,n=c(h.slice(0,s)),_=()=>{const a=n.value.length;n.value.push(...h.slice(a,a+s))};return(e,s)=>{const r=o("router-link"),c=o("c-button");return i(),u("div",null,[w,f(d(l),{data:n.value},{columns:m((({row:e,index:s})=>[f(d(t),{label:"#",center:""},{default:m((()=>[p("span",g,b(s+1),1)])),_:2},1024),f(d(t),{label:"比赛","mobile-header-class":["min-w-8"]},{default:m((()=>[f(r,{to:e.path},{default:m((()=>[v(b(e.name),1)])),_:2},1032,["to"])])),_:2},1024),f(d(t),{label:"类型",center:""},{default:m((()=>[p("span",null,b(d(j)(e)),1)])),_:2},1024),f(d(t),{label:"时间",align:"center",width:"10em"},{default:m((()=>[p("span",null,b(d(x)(e.startTime).value),1)])),_:2},1024),f(d(t),{label:"人数",align:"center",width:"5em"},{default:m((()=>[p("div",k,[f(d(a)),y,p("span",null,"x "+b(e.participantNumber),1)])])),_:2},1024)])),_:1},8,["data"]),p("div",T,[f(c,{onClick:_,success:""},{default:m((()=>[C])),_:1})])])}}});export{M as default};
