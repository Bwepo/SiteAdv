import{r as x,j as M}from"./index-CAeoqLVm.js";const N=`
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,B=`
  precision mediump float;

  uniform sampler2D uTexture;
  uniform vec2  uCanvasSize;
  uniform vec2  uImageSize;
  uniform vec2  uPointer;   // -1..1, suavizado
  uniform float uTime;
  uniform float uReveal;    // 0 -> 1 na entrada
  uniform vec3  uAccent;

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

  /* Equivalente a object-fit: cover com object-position: top. */
  vec2 coverUv(vec2 uv) {
    float canvasAspect = uCanvasSize.x / uCanvasSize.y;
    float imageAspect  = uImageSize.x / uImageSize.y;

    if (canvasAspect > imageAspect) {
      float k = imageAspect / canvasAspect;
      uv.y = uv.y * k + (1.0 - k); // ancora no topo: o rosto nunca é cortado
    } else {
      float k = canvasAspect / imageAspect;
      uv.x = (uv.x - 0.5) * k + 0.5;
    }
    return uv;
  }

  void main() {
    vec2 uv = coverUv(vUv);

    // Sobra de escala para o parallax não expor a borda da textura.
    uv = (uv - 0.5) * 0.965 + 0.5;

    // (2) Parallax: a foto anda ao contrário da moldura.
    uv += uPointer * vec2(-0.011, 0.008);

    // (1) Revelação: deslocamento por ruído que se dissolve.
    float entrance = 1.0 - uReveal;
    if (entrance > 0.001) {
      float n = noise(vUv * 4.0 + uTime * 0.1);
      uv += (n - 0.5) * 0.10 * entrance;
    }

    vec3 col = texture2D(uTexture, clamp(uv, 0.001, 0.999)).rgb;

    float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));

    // (3) Luz rasante dourada seguindo o ponteiro.
    vec2 light = 0.5 + uPointer * 0.45;
    float d = distance(vUv, light);
    float sheen = exp(-d * d * 3.2);
    // Modulada pela luminância: acende o que já é claro na foto.
    sheen *= 0.30 + lum * 0.95;
    col += uAccent * sheen * 0.15;

    // (4) Grão de filme.
    float grain = hash(vUv * uCanvasSize + fract(uTime) * 91.7) - 0.5;
    col += grain * 0.022;

    // Vinheta discreta, para a moldura respirar.
    float vignette = smoothstep(1.15, 0.35, length((vUv - 0.5) * vec2(1.0, 1.25)));
    col *= 0.93 + 0.07 * vignette;

    gl_FragColor = vec4(col, uReveal);
  }
`;function D(o,u,v){const r=o.createShader(u);return r?(o.shaderSource(r,v),o.compileShader(r),o.getShaderParameter(r,o.COMPILE_STATUS)?r:(o.deleteShader(r),null)):null}function O(o){const u=o.trim().match(/^([\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/);if(!u)return[.79,.64,.28];const v=Number(u[1])/360,r=Number(u[2])/100,c=Number(u[3])/100;if(r===0)return[c,c,c];const d=c<.5?c*(1+r):c+r-c*r,t=2*c-d,e=g=>{let n=v+g;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(d-t)*6*n:n<1/2?d:n<2/3?t+(d-t)*(2/3-n)*6:t};return[e(1/3),e(0),e(-1/3)]}function X({src:o,className:u,pointerRef:v}){const r=x.useRef(null),[c,d]=x.useState(!1);return x.useEffect(()=>{const t=r.current;if(!t)return;const e=t.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"low-power"});if(!e)return;const g=D(e,e.VERTEX_SHADER,N),n=D(e,e.FRAGMENT_SHADER,B),a=e.createProgram();if(!g||!n||!a||(e.attachShader(a,g),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)))return;e.useProgram(a);const S=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,S),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const _=e.getAttribLocation(a,"aPosition");e.enableVertexAttribArray(_),e.vertexAttribPointer(_,2,e.FLOAT,!1,0,0);const m={texture:e.getUniformLocation(a,"uTexture"),canvasSize:e.getUniformLocation(a,"uCanvasSize"),imageSize:e.getUniformLocation(a,"uImageSize"),pointer:e.getUniformLocation(a,"uPointer"),time:e.getUniformLocation(a,"uTime"),reveal:e.getUniformLocation(a,"uReveal"),accent:e.getUniformLocation(a,"uAccent")};e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.clearColor(0,0,0,0);const b=()=>{const i=getComputedStyle(document.documentElement).getPropertyValue("--accent"),[s,l,z]=O(i);e.uniform3f(m.accent,s,l,z)};b();const P=new MutationObserver(b);P.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-color-theme"]});const U=()=>{const i=Math.min(window.devicePixelRatio||1,2),s=Math.max(1,Math.round(t.clientWidth*i)),l=Math.max(1,Math.round(t.clientHeight*i));t.width===s&&t.height===l||(t.width=s,t.height=l,e.viewport(0,0,s,l),e.uniform2f(m.canvasSize,s,l))},L=new ResizeObserver(U);L.observe(t);let h=null,p=0,E=!0,A=!1,y=0;const f=new Image;f.decoding="async";const F=()=>{A||(h=e.createTexture(),e.bindTexture(e.TEXTURE_2D,h),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,f),e.uniform1i(m.texture,0),e.uniform2f(m.imageSize,f.naturalWidth,f.naturalHeight),U(),y=performance.now(),d(!0),T())};f.onload=F,f.src=o;const I=i=>{p=requestAnimationFrame(I);const s=(i-y)/1e3,l=Math.min(1,s/1.1);e.uniform1f(m.reveal,1-Math.pow(1-l,3)),e.uniform1f(m.time,s),e.uniform2f(m.pointer,v.current.x,v.current.y),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,3)},T=()=>{!p&&!A&&(p=requestAnimationFrame(I))},R=()=>{cancelAnimationFrame(p),p=0},w=new IntersectionObserver(([i])=>{E=i.isIntersecting,E&&!document.hidden&&h?T():R()},{threshold:0});w.observe(t);const C=()=>{document.hidden?R():E&&h&&T()};return document.addEventListener("visibilitychange",C),()=>{var i;A=!0,R(),f.onload=null,document.removeEventListener("visibilitychange",C),w.disconnect(),L.disconnect(),P.disconnect(),h&&e.deleteTexture(h),e.deleteBuffer(S),e.deleteProgram(a),e.deleteShader(g),e.deleteShader(n),(i=e.getExtension("WEBGL_lose_context"))==null||i.loseContext()}},[o,v]),M.jsx("canvas",{ref:r,"aria-hidden":"true",className:u,style:{display:"block",width:"100%",height:"100%",opacity:c?1:0,transition:"opacity 600ms ease-out"}})}export{X as default};
