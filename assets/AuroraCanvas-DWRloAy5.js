import{r as P,j as O}from"./index-CCuJcw6D.js";const F=.55,D=30,N=`
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,V=`
  precision mediump float;

  uniform float uTime;
  uniform float uAspect;
  uniform vec2  uMouse;
  uniform vec3  uAccent;
  uniform float uIntensity;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = rot * p * 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
    float t = uTime * 0.045;

    // Domain warping: dá o aspecto de véu/fumaça em vez de ruído cru.
    vec2 q = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 + vec2(3.1, 1.7) - t));
    vec2 r = vec2(
      fbm(p * 2.0 + 1.7 * q + vec2(1.7, 9.2) + t * 0.6),
      fbm(p * 2.0 + 1.7 * q + vec2(8.3, 2.8) - t * 0.4)
    );
    float f = fbm(p * 1.35 + 2.0 * r);

    float veil = smoothstep(0.34, 0.95, f);

    // Halo suave seguindo o ponteiro.
    vec2 m = (uMouse - 0.5) * vec2(uAspect, 1.0);
    float d = distance(p, m);
    float halo = exp(-d * d * 2.4);

    float glow = veil * 0.72 + halo * veil * 0.55 + halo * 0.14;

    // Vinheta: mantém as bordas limpas e o texto legível no centro.
    glow *= smoothstep(1.15, 0.18, length(p));

    vec3 col = uAccent * glow;
    col += uAccent * pow(glow, 3.0) * 0.55;

    // Alpha pre-multiplicado, casando com premultipliedAlpha do contexto.
    float alpha = clamp(glow * uIntensity, 0.0, 1.0);
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;function _(a,c,l){const t=a.createShader(c);return t?(a.shaderSource(t,l),a.compileShader(t),a.getShaderParameter(t,a.COMPILE_STATUS)?t:(a.deleteShader(t),null)):null}function q(a){const c=a.trim().match(/^([\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/);if(!c)return[.79,.64,.28];const l=Number(c[1])/360,t=Number(c[2])/100,e=Number(c[3])/100;if(t===0)return[e,e,e];const u=e<.5?e*(1+t):e+t-e*t,s=2*e-u,n=v=>{let i=l+v;return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(u-s)*6*i:i<1/2?u:i<2/3?s+(u-s)*(2/3-i)*6:s};return[n(1/3),n(0),n(-1/3)]}function k({className:a,intensity:c=1}){const l=P.useRef(null);return P.useEffect(()=>{const t=l.current;if(!t)return;const e=t.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"low-power"});if(!e)return;const u=_(e,e.VERTEX_SHADER,N),s=_(e,e.FRAGMENT_SHADER,V),n=e.createProgram();if(!u||!s||!n||(e.attachShader(n,u),e.attachShader(n,s),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)))return;e.useProgram(n);const v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const i=e.getAttribLocation(n,"aPosition");e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);const f={time:e.getUniformLocation(n,"uTime"),aspect:e.getUniformLocation(n,"uAspect"),mouse:e.getUniformLocation(n,"uMouse"),accent:e.getUniformLocation(n,"uAccent"),intensity:e.getUniformLocation(n,"uIntensity")};e.clearColor(0,0,0,0);const b=()=>{const o=getComputedStyle(document.documentElement),[r,M,I]=q(o.getPropertyValue("--accent"));e.uniform3f(f.accent,r,M,I);const B=document.documentElement.classList.contains("dark");e.uniform1f(f.intensity,(B?.5:.24)*c)};b();const E=new MutationObserver(b);E.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-theme"]});const x=()=>{const o=Math.max(1,Math.round(t.clientWidth*F)),r=Math.max(1,Math.round(t.clientHeight*F));t.width===o&&t.height===r||(t.width=o,t.height=r,e.viewport(0,0,o,r),e.uniform1f(f.aspect,o/r))};x();const R=new ResizeObserver(x);R.observe(t);const m={x:.5,y:.55},h={x:.5,y:.55},w=o=>{const r=t.getBoundingClientRect();!r.width||!r.height||(h.x=(o.clientX-r.left)/r.width,h.y=1-(o.clientY-r.top)/r.height)};window.addEventListener("pointermove",w,{passive:!0});let d=0,y=0,p=!0;const U=performance.now(),C=1e3/D,S=o=>{d=requestAnimationFrame(S),!(o-y<C)&&(y=o,m.x+=(h.x-m.x)*.045,m.y+=(h.y-m.y)*.045,e.uniform1f(f.time,(o-U)/1e3),e.uniform2f(f.mouse,m.x,m.y),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,3))},g=()=>{d||(d=requestAnimationFrame(S))},A=()=>{cancelAnimationFrame(d),d=0},T=new IntersectionObserver(([o])=>{p=o.isIntersecting,p&&!document.hidden?g():A()},{threshold:0});T.observe(t);const L=()=>{document.hidden?A():p&&g()};return document.addEventListener("visibilitychange",L),g(),()=>{var o;A(),window.removeEventListener("pointermove",w),document.removeEventListener("visibilitychange",L),T.disconnect(),R.disconnect(),E.disconnect(),e.deleteBuffer(v),e.deleteProgram(n),e.deleteShader(u),e.deleteShader(s),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext()}},[c]),O.jsx("canvas",{ref:l,className:a,"aria-hidden":"true",style:{display:"block",width:"100%",height:"100%"}})}export{k as default};
