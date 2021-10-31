import{o as s,e as a,f as r,d as F,z as D,x as B,h as e,E as C,L as T,j as i,F as v,C as O,B as M,g as d,w as k,l as I,V as w,k as $,M as j,P as S,N as W,m as H,O as q}from"./index.81a3b8bf.js";import{a as U,C as G}from"./c-table.6c04b8b1.js";import{_ as L}from"./user-link.065f9333.js";import{_ as P}from"./cf-rating-color.9c14f6dc.js";import{l as V}from"./load.b9090f49.js";import{_ as Y}from"./at-rating-color.4a16e54f.js";var Q=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["Petr","b"],["Benq","c"],["ksun48","d"],["jiangly","e"]],"data":[{"n":"a","h":"a","r":3804},{"n":"b","h":"b","r":3315},{"n":"c","h":"c","r":3618},{"n":"d","h":"d","r":3401},{"n":"e","h":"e","r":3326}]}');const K=V(Q),X=new Map(K.map(t=>[t.h,t.n])),Z=new Map(K.map(t=>[t.h,t.r]));function zt(t){var m;return(m=X.get(t))!=null?m:t}function z(t){return Z.get(t)}const tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},et=r("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z",fill:"currentColor"},null,-1),st=[et];function nt(t,m){return s(),a("svg",tt,st)}var at={name:"mdi-star",render:nt};const rt={class:"space-left"},ot={key:1},lt=F({props:{author:null},setup(t){const m=t,{author:n}=D(m),o=B(()=>{var x,u;return(u=(x=n==null?void 0:n.value)==null?void 0:x.teamUrl)!=null?u:""}),f=()=>{o.value!==""&&window.open(o.value,"_blank")};return(x,u)=>e(C)(e(n).teamName)?(s(),a(v,{key:0},[r("div",null,[r("span",{class:T(e(o)!==""&&"cursor-pointer"),onClick:f},i(e(n).teamName),3)]),r("div",rt,[(s(!0),a(v,null,O(e(n).members,(p,A)=>(s(),M(L,{class:T(A>0&&"ml-2"),key:p,name:p},null,8,["class","name"]))),128))])],64)):(s(),a("span",ot,i(e(n).members[0]),1))}}),ct={class:"space-left"},it=["href"],ut={class:"space-left"},dt=["href"],mt={key:2},ft=F({props:{author:null},setup(t){return(m,n)=>e(C)(t.author.teamName)&&t.author.members.length<=1?(s(),a(v,{key:0},[d(L,{name:t.author.teamName},null,8,["name"]),r("span",ct,[(s(!0),a(v,null,O(t.author.members,(o,f)=>(s(),a("a",{key:f,class:"ml-2",href:`https://codeforces.com/profile/${o}`,target:"_blank"},[d(e(P),{rating:e(z)(o)},{default:k(()=>[I(i(o),1)]),_:2},1032,["rating"])],8,it))),128))])],64)):e(C)(t.author.teamName)?(s(),a(v,{key:1},[r("div",null,[d(L,{name:t.author.teamName},null,8,["name"])]),r("div",ut,[(s(!0),a(v,null,O(t.author.members,(o,f)=>(s(),a("a",{key:f,class:T(f>0&&"ml-2"),href:`https://codeforces.com/profile/${o}`,target:"_blank"},[d(e(P),{rating:e(z)(o)},{default:k(()=>[I(i(o),1)]),_:2},1032,["rating"])],10,dt))),128))])],64)):(s(),a("span",mt,i(t.author.members[0]),1))}});var ht=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["jiangly","b"]],"data":[{"n":"a","h":"a","r":4023},{"n":"b","h":"b","r":3320}]}');const J=V(ht);new Map(J.map(t=>[t.h,t.n]));const pt=new Map(J.map(t=>[t.h,t.r]));function _t(t){return pt.get(t)}const bt={class:"space-left"},vt=["href"],gt={key:1},kt=F({props:{author:null},setup(t){return(m,n)=>e(C)(t.author.teamName)?(s(),a(v,{key:0},[d(L,{name:t.author.teamName},null,8,["name"]),r("span",bt,[(s(!0),a(v,null,O(t.author.members,(o,f)=>(s(),a("a",{key:f,class:"ml-2 font-bold",href:`https://atcoder.jp/users/${o}`,target:"_blank"},[d(e(Y),{rating:e(_t)(o)},{default:k(()=>[I(i(o),1)]),_:2},1032,["rating"])],8,vt))),128))])],64)):(s(),a("span",gt,i(t.author.members[0]),1))}}),yt=r("span",null,"+",-1),$t={key:0},xt={key:0,class:"text-sm text-gray-400"},Ct={key:1},Nt={class:"text-center font-bold text-red-500"},Ft=r("span",null,"-",-1),Bt=F({props:{result:null,practice:null},setup(t){const m=t,{result:n}=D(m),o=B(()=>{var u,p;return(p=(u=n==null?void 0:n.value)==null?void 0:u.submissionUrl)!=null?p:""}),f=()=>{o.value!==""&&window.open(o.value,"_blank")};function x(u){function p(c){return(c<10?"0":"")+c}const A=Math.floor(u/3600),E=Math.floor(u%3600/60);return`${A}:${p(E)}`}return(u,p)=>e(n)?(s(),a(v,{key:0},[e(n).verdict===e(w).OK?(s(),a("div",{key:0,class:T(e(o)!==""&&"cursor-pointer"),onClick:f},[r("div",{class:T(["text-center","font-bold",t.practice?"text-blue-500":"text-green-500"])},[yt,e(n).dirty?(s(),a("span",$t,i(e(n).dirty),1)):$("v-if",!0)],2),t.practice?$("v-if",!0):(s(),a("div",xt,[r("span",null,i(x(e(n).relativeTime)),1)]))],2)):e(n).dirty?(s(),a("div",Ct,[r("div",Nt,[Ft,r("span",null,i(e(n).dirty),1)])])):$("v-if",!0)],2112)):$("v-if",!0)}}),Tt={key:0,class:"mt-4 box"},Mt={key:0,class:"font-600"},At={key:1,class:"font-600"},Et={class:"flex items-center"},Ot={key:0},wt=F({props:{contest:null},setup(t){const m=t,{contest:n}=D(m),o=B(()=>n.value.type.startsWith("codeforces")),f=B(()=>n.value.type.startsWith("atcoder")),x=c=>c.author.participantType===S.OUT_OF_COMPETITION,u=c=>c.author.participantType===S.PRACTICE,p=c=>typeof c=="string"?c:String.fromCharCode(65+c),A=B(()=>{var c,N;return(N=(c=n.value.problems)==null?void 0:c.sort((l,g)=>{const h=typeof l.index=="string"?l.index.charCodeAt(0)-65:l.index,_=typeof g.index=="string"?g.index.charCodeAt(0)-65:g.index;return h-_}))!=null?N:[]}),E=B(()=>{var N,l,g;if(j(n.value.problems))return{standings:[],firstBlood:[]};if(j(n.value.standings))return{standings:[],firstBlood:[]};const c=Array((N=n.value.problems)==null?void 0:N.length);for(const h of n.value.standings){const _=Array((l=n.value.problems)==null?void 0:l.length);for(const b of h.submissions){const y=b.problemIndex;if(b.verdict===w.OK&&!u(h)&&(j(c[y])||c[y].relativeTime>b.relativeTime)&&(c[y]=b),j(_[y]))_[y]=b;else{const R=_[y];((g=R==null?void 0:R.verdict)!=null?g:w.FAILED)!==w.OK&&(_[y]=b)}}Reflect.set(h,"result",_)}return{standings:n.value.standings,firstBlood:c}});return(c,N)=>e(n).standings?(s(),a("div",Tt,[d(e(G),{data:e(E).standings,mobile:1080},{columns:k(({row:l})=>[d(e(U),{label:"#",align:"center",width:"4em"},{default:k(()=>[u(l)?(s(),a("span",At,"-")):(s(),a("span",Mt,i(l.rank),1))]),_:2},1024),d(e(U),{label:e(o)?"Handle":""},{default:k(()=>[r("div",Et,[x(l)?(s(),M(e(at),{key:0,class:"mr-1 text-sm text-yellow-300 inline-block"})):$("v-if",!0),r("div",null,[e(o)?(s(),M(ft,{key:0,author:l.author},null,8,["author"])):e(f)?(s(),M(kt,{key:1,author:l.author},null,8,["author"])):(s(),M(lt,{key:2,author:l.author},null,8,["author"]))])])]),_:2},1032,["label"]),d(e(U),{label:"\u89E3\u51B3",align:"center",width:"4em"},{default:k(()=>[r("span",null,i(l.solved),1)]),_:2},1024),d(e(U),{label:"\u7F5A\u65F6",align:"center",width:"4em"},{default:k(()=>[u(l)?$("v-if",!0):(s(),a("span",Ot,i(e(W)(l.penalty).value),1))]),_:2},1024),(s(!0),a(v,null,O(e(A),(g,h)=>{var _,b;return s(),M(e(U),{key:g.index,label:p(g.index),center:"",class:T(e(C)(l)&&e(C)(e(E).firstBlood[h])&&e(C)(l.result[h])&&l.result[h].verdict===e(w).OK&&l.result[h].relativeTime<=((b=(_=e(E).firstBlood[h])==null?void 0:_.relativeTime)!=null?b:Number.MIN_SAFE_INTEGER)&&"bg-[#E0FFE4]")},{default:k(()=>[d(Bt,{result:l.result[h],practice:u(l)},null,8,["result","practice"])]),_:2},1032,["label","class"])}),128))]),_:1},8,["data"])])):$("v-if",!0)}}),Ut={class:"mb-4"},Rt={class:"info-box border-left"},jt={key:0},Lt=["href"],Dt=["href"],Jt=F({props:{contest:null},setup(t){return(m,n)=>(s(),a("div",null,[r("h2",Ut,i(t.contest.name),1),r("div",Rt,[r("p",null," \u65F6\u95F4\uFF1A"+i(e(H)(t.contest.startTime).value)+" \u81F3 "+i(e(H)(t.contest.startTime+t.contest.duration).value),1),r("p",null,"\u65F6\u957F\uFF1A"+i(e(q)(t.contest.duration).value),1),r("p",null,"\u4EBA\u6570\uFF1A"+i(t.contest.participantNumber)+" \u4EBA",1),t.contest.contestUrl||t.contest.standingsUrl?(s(),a("p",jt,[r("a",{href:t.contest.contestUrl,target:"_blank"},"\u6BD4\u8D5B\u4E3B\u9875",8,Lt),r("a",{href:t.contest.standingsUrl,target:"_blank",class:"ml-2"},"\u5B8C\u6574\u699C\u5355",8,Dt)])):$("v-if",!0)]),d(wt,{contest:t.contest},null,8,["contest"])]))}});export{Jt as _,zt as f,K as h};
