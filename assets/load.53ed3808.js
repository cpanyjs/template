function n(n){var e,t;const u=n,i=new Map((null!=(e=u.keyMaps)?e:[]).map((n=>n.reverse()))),f=new Map((null!=(t=u.stringMaps)?t:[]).map((n=>n.reverse())));return r(u.data,i,f)}function r(n,e,t){var u,i;if(null==n)return n;const f=typeof n;if("undefined"===f)return n;if("function"===f)return n;if("boolean"===f)return n;if("symbol"===f)return n;if("bigint"===f)return n;if("number"===f)return n;if("string"===f)return null!=(u=t.get(n))?u:n;if(Array.isArray(n)){const u=[];for(const i in n)u.push(r(n[i],e,t));return u}{const u={};for(const f of Object.keys(n)){u[null!=(i=e.get(f))?i:f]=r(n[f],e,t)}return u}}export{n as l};