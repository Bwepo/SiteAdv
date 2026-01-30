import{a as t,ad as f,G as b,j as e,L as r,c as o,m as y}from"./index-5uJrY_2o.js";import{B as l}from"./button-CQpJ96y6.js";import{C as g}from"./chevron-left-Dw4ABrh3.js";import{H as j,F as N,M as v}from"./mail-AxYyUXl0.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=t("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),c=[{title:"Visão geral",items:[{href:"/admin",label:"Dashboard",icon:k}]},{title:"Conteúdo",items:[{href:"/admin/posts",label:"Posts",icon:N},{href:"/admin/newsletter",label:"Newsletter",icon:v},{href:"/admin/newsletter/campaigns",label:"Campanhas",icon:M},{href:"/admin/comments",label:"Comentários",icon:L}]},{title:"Conta",items:[{href:"/admin/security",label:"Segurança",icon:C}]}];function V({children:m,title:h}){const{user:n,signOut:x}=f(),i=b(),p=async()=>{await x()};return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("header",{className:"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm",children:e.jsxs("div",{className:"container mx-auto px-4 md:px-6 h-16 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(r,{to:"/",className:"flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",children:[e.jsx(g,{className:"w-4 h-4"}),e.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"}),e.jsx(j,{className:"w-4 h-4 sm:hidden"})]}),e.jsx("span",{className:"text-muted-foreground hidden sm:inline",children:"/"}),e.jsx("span",{className:"font-semibold text-foreground hidden sm:inline",children:"Admin"})]}),e.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[e.jsx("span",{className:"text-sm text-muted-foreground hidden md:block",children:n==null?void 0:n.email}),e.jsxs(l,{variant:"outline",size:"sm",onClick:p,className:"text-destructive hover:text-destructive flex items-center gap-2",children:[e.jsx(w,{className:"w-4 h-4"}),"Sair"]})]})]})}),e.jsxs("div",{className:"flex",children:[e.jsxs("aside",{className:"w-64 border-r border-border bg-card/50 min-h-[calc(100vh-4rem)] hidden md:flex md:flex-col",children:[e.jsx("nav",{className:"p-4 space-y-4",children:c.map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80",children:s.title}),e.jsx("div",{className:"mt-2 space-y-1",children:s.items.map(a=>{const u=i.pathname===a.href;return e.jsxs(r,{to:a.href,className:o("flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",u?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted/50"),children:[e.jsx(a.icon,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:a.label})]},a.href)})})]},s.title))}),e.jsx("div",{className:"mt-auto p-4 border-t border-border",children:e.jsx(r,{to:"/admin/posts/new",className:"block",children:e.jsxs(l,{className:"w-full justify-center",size:"sm",children:[e.jsx(d,{className:"w-4 h-4 mr-2"}),"Novo Post"]})})})]}),e.jsx("main",{className:"flex-1 p-4 sm:p-6 md:p-8 pb-24 md:pb-8",children:e.jsxs(y.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsx("div",{className:"mb-6 sm:mb-8",children:e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground",children:h})}),m]})})]}),e.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-card border-t border-border p-2 md:hidden",children:e.jsx("div",{className:"flex justify-around",children:[...c.flatMap(s=>s.items),{href:"/admin/posts/new",label:"Novo Post",icon:d}].map(s=>{const a=i.pathname===s.href;return e.jsxs(r,{to:s.href,className:o("flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",a?"text-primary":"text-muted-foreground"),children:[e.jsx(s.icon,{className:"w-5 h-5"}),e.jsx("span",{className:"text-xs",children:s.label})]},s.href)})})})]})}export{V as A,L as M,d as P,C as S,M as a};
