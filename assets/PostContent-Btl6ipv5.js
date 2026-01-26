import{a as p,r as n,j as l,c as i}from"./index-5dVDhfMS.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=p("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=p("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);function c(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,50)}function u(e){return e.replace(/<h([23])([^>]*)>([^<]+)<\/h([23])>/gi,(r,o,s,t,d)=>{const a=c(t);return s.includes("id=")?r:`<h${o}${s} id="${a}">${t}</h${d}>`})}function x({html:e,className:r}){const o=n.useMemo(()=>u(e),[e]);return l.jsx("div",{className:i("prose prose-lg max-w-none","prose-headings:font-serif prose-headings:text-foreground","prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl","prose-h2:scroll-mt-24 prose-h3:scroll-mt-24","prose-p:text-foreground/90 prose-p:leading-relaxed","prose-a:text-primary prose-a:no-underline hover:prose-a:underline","prose-li:text-foreground/90","prose-ul:list-disc prose-ol:list-decimal","prose-blockquote:border-l-4 prose-blockquote:border-primary/50","prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground","prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded","prose-pre:bg-muted prose-pre:border prose-pre:border-border","prose-img:rounded-lg prose-img:shadow-md","prose-strong:text-foreground prose-strong:font-semibold","dark:prose-invert",r),dangerouslySetInnerHTML:{__html:o}})}export{g as L,x as P,m as a};
