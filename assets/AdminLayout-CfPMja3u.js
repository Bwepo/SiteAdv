import{a,ab as m,a8 as u,j as e,L as o,c,m as y}from"./index-rGXuuAVG.js";import{B as p}from"./button-BlI5sIj8.js";import{H as f}from"./house-Dp1DU4jy.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=a("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=a("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=a("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=a("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),d=[{href:"/admin",label:"Dashboard",icon:b},{href:"/admin/posts/new",label:"Novo Post",icon:j}];function M({children:i,title:l}){const{user:t,signOut:h}=m(),n=u(),x=async()=>{await h()};return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("header",{className:"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm",children:e.jsxs("div",{className:"container mx-auto px-4 md:px-6 h-16 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{to:"/",className:"text-muted-foreground hover:text-foreground transition-colors",children:e.jsx(f,{className:"w-5 h-5"})}),e.jsx("span",{className:"text-muted-foreground",children:"/"}),e.jsx("span",{className:"font-semibold text-foreground",children:"Admin"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm text-muted-foreground hidden md:block",children:t==null?void 0:t.email}),e.jsxs(p,{variant:"outline",size:"sm",onClick:x,className:"text-destructive hover:text-destructive",children:[e.jsx(g,{className:"w-4 h-4 mr-2"}),"Sair"]})]})]})}),e.jsxs("div",{className:"flex",children:[e.jsx("aside",{className:"w-64 border-r border-border bg-card/50 min-h-[calc(100vh-4rem)] hidden md:block",children:e.jsx("nav",{className:"p-4 space-y-1",children:d.map(s=>{const r=n.pathname===s.href;return e.jsxs(o,{to:s.href,className:c("flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",r?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-muted/50"),children:[e.jsx(s.icon,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:s.label})]},s.href)})})}),e.jsx("main",{className:"flex-1 p-6 md:p-8",children:e.jsxs(y.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsx("div",{className:"mb-8",children:e.jsx("h1",{className:"text-2xl md:text-3xl font-serif font-bold text-foreground",children:l})}),i]})})]}),e.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-card border-t border-border p-2 md:hidden",children:e.jsx("div",{className:"flex justify-around",children:d.map(s=>{const r=n.pathname===s.href;return e.jsxs(o,{to:s.href,className:c("flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",r?"text-primary":"text-muted-foreground"),children:[e.jsx(s.icon,{className:"w-5 h-5"}),e.jsx("span",{className:"text-xs",children:s.label})]},s.href)})})})]})}export{M as A,w as E,j as P,L as a};
