import{c as l,r as s,j as e,a as n}from"./index-CfdYOoHy.js";import{u as p}from"./SEOHead-BqCRRaVl.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=l("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);function w({src:a,alt:o,className:i,containerClassName:d,priority:t=!1}){const[u,f]=s.useState(!1),[m,g]=s.useState(!1),r=s.useRef(null),v=p();s.useEffect(()=>{const c=new IntersectionObserver(([h])=>{h.isIntersecting&&(g(!0),c.disconnect())},{rootMargin:"100px",threshold:.1});return r.current&&c.observe(r.current),()=>c.disconnect()},[]);const x=()=>{f(!0)};return v?e.jsx("div",{className:n("overflow-hidden",d),children:e.jsx("img",{src:a,alt:o,className:i,loading:t?"eager":"lazy"})}):e.jsxs("div",{className:n("overflow-hidden relative",d),children:[e.jsx("img",{ref:r,src:m||t?a:void 0,alt:o,className:n(i,"w-full h-full object-cover"),loading:t?"eager":"lazy",onLoad:x}),!u&&e.jsx("div",{className:"absolute inset-0 bg-muted/30 animate-pulse pointer-events-none"})]})}export{w as A,I as S,b as T};
