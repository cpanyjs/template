import{o as d,e as b,f as w,v as I,h as e,x,y as Ce,d as q,z as G,A as i,c as j,g as S,w as C,k as J,B as R,F as L,C as H,j as A,l as O,_ as ke,s as _e,D as Pe,E as N}from"./index.37ee32ac.js";const Me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Se=w("path",{d:"M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4z",fill:"currentColor"},null,-1),$e=[Se];function Le(t,o){return d(),b("svg",Me,$e)}var ze={name:"mdi-arrow-down",render:Le};const je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ae=w("path",{d:"M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12z",fill:"currentColor"},null,-1),Be=[Ae];function Ne(t,o){return d(),b("svg",je,Be)}var Ve={name:"mdi-arrow-up",render:Ne};function Re(t){const o=I(window.innerWidth),v=I(o.value<=e(t)),g=()=>{o.value=window.innerWidth,v.value=o.value<=e(t)},a=()=>window.removeEventListener("resize",g);return window.addEventListener("resize",g,{passive:!0}),{width:o,isMobile:v,clean:a}}const pe=new Map;function De(t,o,v){var E;const g=x(()=>e(o).length),a=x(()=>{var M;return Math.max(1,(M=e(t))!=null?M:g.value)}),u=x(()=>Math.ceil(g.value/a.value)),s=I(v&&(E=pe.get(v))!=null?E:0),p=x(()=>s.value*a.value),k=x(()=>Math.min(g.value,p.value+a.value));Ce(s,M=>{v&&pe.set(v,M)});const _=x(()=>s.value+1<u.value&&k.value<g.value),h=()=>{_.value&&(s.value+=1)},c=x(()=>s.value>0&&p.value>0);return{current:s,pageLength:u,L:p,R:k,hasNextPage:_,nextPage:h,hasPrePage:c,prePage:()=>{c.value&&(s.value-=1)},goPage:M=>{const D=e(M);0<=D&&D<u.value&&(s.value=D)}}}var Te=q({name:"CTableColumn",props:{label:String,width:{type:[Number,String]},align:String,center:{type:Boolean,default:!1},sort:Function,mobileHeaderClass:{type:Array,default:[]}},setup(t,{slots:o}){const{align:v,center:g}=G(t),a=["px-3","py-2",v.value==="center"||g.value?"text-center":v.value==="right"?"text-right":"text-left"];return()=>i("td",{class:a},o.default&&o.default(t))}});const Fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ie=w("path",{d:"M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42z",fill:"currentColor"},null,-1),Ee=[Ie];function He(t,o){return d(),b("svg",Fe,Ee)}var ve={name:"mdi-chevron-left",render:He};const Oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ye=w("path",{d:"M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z",fill:"currentColor"},null,-1),Ue=[Ye];function We(t,o){return d(),b("svg",Oe,Ue)}var fe={name:"mdi-chevron-right",render:We};const qe={key:0,class:"mb-2 grid grid-cols-2 gap-2"},Ge={class:"flex justify-center"},Je=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),Ke=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),Qe=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),Xe=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),Ze=q({props:{isMobile:null,pageView:null,current:null,first:null,last:null,pageSize:null,nextPage:null,prePage:null,goPage:null},setup(t){const o=t,{isMobile:v,pageView:g,current:a,first:u,last:s}=G(o),p=x(()=>{var _;return(_=g==null?void 0:g.value)!=null?_:5}),k=x(()=>{var _;return(_=v==null?void 0:v.value)!=null?_:!1});return(_,h)=>{const c=j("c-button");return d(),b(L,null,[e(k)?(d(),b("div",qe,[S(c,{padding:"p-2",onClick:t.prePage,disable:e(a)<=e(u)},{default:C(()=>[S(e(ve))]),_:1},8,["onClick","disable"]),S(c,{padding:"p-2",onClick:t.nextPage,disable:e(a)+1>=e(s)},{default:C(()=>[S(e(fe))]),_:1},8,["onClick","disable"])])):J("v-if",!0),w("div",Ge,[e(k)?J("v-if",!0):(d(),R(c,{key:0,padding:"p-2",onClick:t.prePage,disable:e(a)<=e(u)},{default:C(()=>[S(e(ve))]),_:1},8,["onClick","disable"])),e(s)-e(u)<=e(p)?(d(!0),b(L,{key:1},H(e(s)-e(u),n=>(d(),R(c,{key:n,class:"ml-2",info:n+e(u)===e(a)+1,onClick:V=>t.goPage(n+e(u)-1)},{default:C(()=>[w("span",null,A(n+e(u)),1)]),_:2},1032,["info","onClick"]))),128)):e(a)-e(u)<e(p)?(d(),b(L,{key:2},[(d(!0),b(L,null,H(e(p),n=>(d(),R(c,{key:n,class:"ml-2",info:n+e(u)===e(a)+1,onClick:V=>t.goPage(n+e(u)-1)},{default:C(()=>[w("span",null,A(n+e(u)),1)]),_:2},1032,["info","onClick"]))),128)),Je,S(c,{class:"ml-2",onClick:h[0]||(h[0]=n=>t.goPage(e(s)-1))},{default:C(()=>[O(A(e(s)),1)]),_:1})],64)):e(s)-e(a)<=e(p)?(d(),b(L,{key:3},[S(c,{class:"ml-2",onClick:h[1]||(h[1]=n=>t.goPage(e(u)))},{default:C(()=>[O(A(e(u)+1),1)]),_:1}),Ke,(d(!0),b(L,null,H(e(p),n=>(d(),R(c,{key:n,class:"ml-2",info:e(s)-e(p)+n===e(a)+1,onClick:V=>t.goPage(e(s)-e(p)+n-1)},{default:C(()=>[w("span",null,A(e(s)-e(p)+n),1)]),_:2},1032,["info","onClick"]))),128))],64)):(d(),b(L,{key:4},[S(c,{class:"ml-2",onClick:h[2]||(h[2]=n=>t.goPage(e(u)))},{default:C(()=>[O(A(e(u)+1),1)]),_:1}),Qe,(d(!0),b(L,null,H(e(p),n=>(d(),R(c,{key:n,class:"ml-2",info:e(a)-Math.floor(e(p)/2)+n===e(a)+1,onClick:V=>t.goPage(e(a)-Math.floor(e(p)/2)+n-1)},{default:C(()=>[w("span",null,A(e(a)-Math.floor(e(p)/2)+n),1)]),_:2},1032,["info","onClick"]))),128)),Xe,S(c,{class:"ml-2",onClick:h[3]||(h[3]=n=>t.goPage(e(s)-1))},{default:C(()=>[O(A(e(s)),1)]),_:1})],64)),e(k)?J("v-if",!0):(d(),R(c,{key:5,padding:"p-2",class:"ml-2",onClick:t.nextPage,disable:e(a)+1>=e(s)},{default:C(()=>[S(e(fe))]),_:1},8,["onClick","disable"]))])],64)}}}),et={},tt={class:"select relative"},nt={class:"pl-2 pr-8 py-2 cursor-pointer block w-full outline-none rounded border border-1 border-[#dbdbdb] appearance-none"};function lt(t,o){return d(),b("div",tt,[w("select",nt,[_e(t.$slots,"default")])])}var at=ke(et,[["render",lt]]);const ge=new Map;var rt=q({name:"CTable",components:{IconDown:ze,IconUp:Ve,CTablePage:Ze,CSelect:at},props:{cache:{type:String},data:{type:Array,default:[]},mobile:{type:Number,default:768},defaultSort:{type:String},defaultSortOrder:{type:String,default:"asc"},pageSize:{type:Number},mobilePageSize:{type:Number}},setup(t,{slots:o}){var ee,te;const{data:v,defaultSort:g,defaultSortOrder:a,mobile:u,pageSize:s,mobilePageSize:p}=G(t),{isMobile:k,clean:_}=Re(u);Pe(()=>_());const h=x(()=>{var y;return k.value&&(y=p.value)!=null?y:s.value}),c=t.cache?ge.get(t.cache):void 0,n=x(()=>N(h.value)),{current:V,pageLength:E,L:M,R:D,nextPage:me,prePage:he,goPage:be}=De(h,v,t.cache),T=I((ee=c==null?void 0:c.field)!=null?ee:g.value),z=I((te=c==null?void 0:c.order)!=null?te:a.value),Y=()=>{t.cache&&ge.set(t.cache,{field:T.value,order:z.value})};Y();const K=y=>{T.value=y,z.value=a.value,Y()},Q=()=>{z.value==="desc"?z.value="asc":z.value="desc",Y()},U=y=>{if(!y)return[];const P=[];for(const l of y)if(l.type===L&&Array.isArray(l.children))for(const r of l.children)r!==null&&typeof r=="object"&&!Array.isArray(r)&&P.push(r);else P.push(l);return P.filter(l=>l.type===Te)},W=U(o.columns?o.columns({}):[]),we=x(()=>(P=>{var l,r,f;if(N(T.value)){for(const m of W)if(((r=(l=m.props)==null?void 0:l.label)!=null?r:"")===T.value){const $=P.sort((f=m.props)==null?void 0:f.sort);return z.value==="desc"?$.reverse():$}return P}else return P})(v.value)),X=x(()=>we.value.slice(M.value,D.value)),Z=()=>i(j("c-table-page"),{current:V.value,first:0,last:E.value,pageSize:h.value,nextPage:me,prePage:he,goPage:be,pageView:k.value?3:5,isMobile:k.value}),xe=()=>{const y=()=>W.map(l=>{var F,ne,le,ae,se,re,oe,ie,ce;const r=N((F=l.props)==null?void 0:F.sort),f=r&&((le=(ne=l.props)==null?void 0:ne.label)!=null?le:"")===T.value,m={width:(ae=l.props)==null?void 0:ae.width,borderWidth:"0 0 2px 0"},B=((se=l.props)==null?void 0:se.align)==="center"||N((re=l.props)==null?void 0:re.center)&&((oe=l.props)==null?void 0:oe.center)!==!1?"justify-center":((ie=l.props)==null?void 0:ie.align)==="right"?"justify-end":"justify-start";return i("th",{style:m,class:["select-none","font-600","px-3","py-2","border-solid",f?"border-[#7a7a7a]":"border-[#dbdbdb]",r?"cursor-pointer":null,r?"hover:border-[#7a7a7a]":null]},i("div",{class:["flex","items-center",B],onClick:r?()=>{var ue,de;f?Q():K((de=(ue=l.props)==null?void 0:ue.label)!=null?de:"")}:void 0},[r?i(z.value==="desc"?j("icon-down"):j("icon-up"),{class:[!f&&"text-transparent"]}):"",i("span",{},(ce=l.props)==null?void 0:ce.label)]))}),P=l=>l.map((r,f)=>i("tr",{},o.columns&&U(o.columns({row:r,index:f+M.value}))));return i("div",{},[i("table",{class:["table","w-full","border-separate","table-auto","rounded"]},[i("thead",{},i("tr",{},y())),i("tbody",{},P(X.value))]),n.value&&Z()])},ye=()=>{const y=()=>{const l=W.map(r=>{var f,m,B;if(N((f=r.props)==null?void 0:f.sort)){const $=(B=(m=r.props)==null?void 0:m.label)!=null?B:"";return i("option",{value:$},[$])}else return null}).filter(r=>N(r));return l.length>0&&i("div",{class:["my-4","flex","justify-between"]},[i(j("c-select"),{class:["w-full","mr-2"],onChange(r){var m;const f=(m=r.target)==null?void 0:m.value;N(f)&&K(f)}},l),i(j("c-button"),{info:!0,onClick:Q},[z.value==="desc"?i(j("icon-down"),{}):i(j("icon-up"),{})])])},P=()=>X.value.map((l,r)=>{const f=U(o.columns&&o.columns({row:l,index:r+M.value,mobile:!0}));return i("div",{class:["box","p-0","my-4"]},f.map(m=>{var $,F;const B=($=m.props&&m.props["mobile-header-class"])!=null?$:[];return i("div",{class:["pl-3","border","flex","flex-shrink","justify-between","justify-items-stretch"]},[i("div",{class:["py-2","font-600","text-left","flex","items-center",...B]},(F=m.props)==null?void 0:F.label),i(m,{class:["block"]})])}))});return i("div",{class:["mobile-table"]},[y(),P(),n.value&&Z()])};return()=>k.value?ye():xe()}});export{rt as C,Te as a,at as b};