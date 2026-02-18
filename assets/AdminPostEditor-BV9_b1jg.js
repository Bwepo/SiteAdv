import{c as se,a as oe,r as o,k as W,p as ie,j as e,P as U,n as Q,a9 as re,e as D,w as ye,u as ke,y as we,X as Le,z as Me}from"./index-vCODd6cZ.js";import{P as De,A as ee}from"./AdminLayout-tzgMfyCN.js";import{e as Ue,c as He,f as Fe}from"./usePosts-CyEVQd4L.js";import{a as Be,u as We,b as qe}from"./useCategories-DUgGG7iV.js";import{g as Ke}from"./useNewsletter-CGKzs4Zm.js";import{I as Ge,T as Ve,b as Qe}from"./newsletterTemplate-CxT2vaSl.js";import{B as O}from"./button-BgdGh_OQ.js";import{I as M}from"./input-CBkhb3D-.js";import{L as b}from"./label-xC7JUmMv.js";import{T as te}from"./textarea-DXzS4JiT.js";import{u as ne}from"./index-fN5Motwz.js";import{T as ze,a as Ye,b as ae}from"./tabs-Bl8SmeHP.js";import{C as le}from"./check-BOISAMvO.js";import{B as Xe}from"./badge-D06R4lOQ.js";import{P as $e}from"./PostContent-0Cq1dsMs.js";import{D as Je,b as Ze,a as et,c as tt,d as at,e as st}from"./dialog-CQrO_uvr.js";import{F as ce}from"./file-text-zyY-oAx6.js";import{S as ot}from"./scale-CqFp3QuU.js";import{g as it}from"./supabaseErrors-eYWJjREL.js";import{E as rt,a as nt}from"./eye-wVf1q-5t.js";import{S as lt}from"./save-VhntBmUj.js";import{S as ct}from"./send-B7q1X1Bl.js";import{L as dt}from"./loader-circle-B7MM6yNJ.js";import{C as pt}from"./circle-check-big-CZ2EXG-E.js";import{S as V}from"./skeleton-BWjc2DN7.js";import"./index-BwATmtLK.js";import"./index-CuiVLMcg.js";import"./house-DpmNVokt.js";import"./menu-CB-TW3vy.js";import"./useMutation-C2KEAeJz.js";import"./index-DMFlvfV8.js";import"./dropdown-menu-DnzF0pp2.js";import"./index-B_mVX3Ti.js";import"./index-CMA57yFH.js";import"./chevron-right-DKzykmCI.js";import"./link-84YagIfV.js";import"./list-BJHDRsKj.js";import"./quote-FHgTnZ1V.js";import"./trash-2-DQmNlPDd.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=se("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=se("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);var q="Switch",[ht,ua]=oe(q),[_t,gt]=ht(q),de=o.forwardRef((t,n)=>{const{__scopeSwitch:r,name:p,checked:c,defaultChecked:i,required:g,disabled:l,value:u="on",onCheckedChange:_,form:s,...d}=t,[m,T]=o.useState(null),A=W(n,x=>T(x)),E=o.useRef(!1),N=m?s||!!m.closest("form"):!0,[h,C]=ie({prop:c,defaultProp:i??!1,onChange:_,caller:q});return e.jsxs(_t,{scope:r,checked:h,disabled:l,children:[e.jsx(U.button,{type:"button",role:"switch","aria-checked":h,"aria-required":g,"data-state":he(h),"data-disabled":l?"":void 0,disabled:l,value:u,...d,ref:A,onClick:Q(t.onClick,x=>{C(P=>!P),N&&(E.current=x.isPropagationStopped(),E.current||x.stopPropagation())})}),N&&e.jsx(ue,{control:m,bubbles:!E.current,name:p,value:u,checked:h,required:g,disabled:l,form:s,style:{transform:"translateX(-100%)"}})]})});de.displayName=q;var pe="SwitchThumb",me=o.forwardRef((t,n)=>{const{__scopeSwitch:r,...p}=t,c=gt(pe,r);return e.jsx(U.span,{"data-state":he(c.checked),"data-disabled":c.disabled?"":void 0,...p,ref:n})});me.displayName=pe;var Ct="SwitchBubbleInput",ue=o.forwardRef(({__scopeSwitch:t,control:n,checked:r,bubbles:p=!0,...c},i)=>{const g=o.useRef(null),l=W(g,i),u=ne(r),_=re(n);return o.useEffect(()=>{const s=g.current;if(!s)return;const d=window.HTMLInputElement.prototype,T=Object.getOwnPropertyDescriptor(d,"checked").set;if(u!==r&&T){const A=new Event("click",{bubbles:p});T.call(s,r),s.dispatchEvent(A)}},[u,r,p]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...c,tabIndex:-1,ref:l,style:{...c.style,..._,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});ue.displayName=Ct;function he(t){return t?"checked":"unchecked"}var _e=de,ft=me;const B=o.forwardRef(({className:t,...n},r)=>e.jsx(_e,{className:D("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",t),...n,ref:r,children:e.jsx(ft,{className:D("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));B.displayName=_e.displayName;var K="Checkbox",[At,ha]=oe(K),[Tt,z]=At(K);function Et(t){const{__scopeCheckbox:n,checked:r,children:p,defaultChecked:c,disabled:i,form:g,name:l,onCheckedChange:u,required:_,value:s="on",internal_do_not_use_render:d}=t,[m,T]=ie({prop:r,defaultProp:c??!1,onChange:u,caller:K}),[A,E]=o.useState(null),[N,h]=o.useState(null),C=o.useRef(!1),x=A?!!g||!!A.closest("form"):!0,P={checked:m,disabled:i,setChecked:T,control:A,setControl:E,name:l,form:g,value:s,hasConsumerStoppedPropagationRef:C,required:_,defaultChecked:j(c)?!1:c,isFormControl:x,bubbleInput:N,setBubbleInput:h};return e.jsx(Tt,{scope:n,...P,children:Nt(d)?d(P):p})}var ge="CheckboxTrigger",Ce=o.forwardRef(({__scopeCheckbox:t,onKeyDown:n,onClick:r,...p},c)=>{const{control:i,value:g,disabled:l,checked:u,required:_,setControl:s,setChecked:d,hasConsumerStoppedPropagationRef:m,isFormControl:T,bubbleInput:A}=z(ge,t),E=W(c,s),N=o.useRef(u);return o.useEffect(()=>{const h=i==null?void 0:i.form;if(h){const C=()=>d(N.current);return h.addEventListener("reset",C),()=>h.removeEventListener("reset",C)}},[i,d]),e.jsx(U.button,{type:"button",role:"checkbox","aria-checked":j(u)?"mixed":u,"aria-required":_,"data-state":Ne(u),"data-disabled":l?"":void 0,disabled:l,value:g,...p,ref:E,onKeyDown:Q(n,h=>{h.key==="Enter"&&h.preventDefault()}),onClick:Q(r,h=>{d(C=>j(C)?!0:!C),A&&T&&(m.current=h.isPropagationStopped(),m.current||h.stopPropagation())})})});Ce.displayName=ge;var Y=o.forwardRef((t,n)=>{const{__scopeCheckbox:r,name:p,checked:c,defaultChecked:i,required:g,disabled:l,value:u,onCheckedChange:_,form:s,...d}=t;return e.jsx(Et,{__scopeCheckbox:r,checked:c,defaultChecked:i,disabled:l,required:g,onCheckedChange:_,name:p,form:s,value:u,internal_do_not_use_render:({isFormControl:m})=>e.jsxs(e.Fragment,{children:[e.jsx(Ce,{...d,ref:n,__scopeCheckbox:r}),m&&e.jsx(Ee,{__scopeCheckbox:r})]})})});Y.displayName=K;var fe="CheckboxIndicator",Ae=o.forwardRef((t,n)=>{const{__scopeCheckbox:r,forceMount:p,...c}=t,i=z(fe,r);return e.jsx(ye,{present:p||j(i.checked)||i.checked===!0,children:e.jsx(U.span,{"data-state":Ne(i.checked),"data-disabled":i.disabled?"":void 0,...c,ref:n,style:{pointerEvents:"none",...t.style}})})});Ae.displayName=fe;var Te="CheckboxBubbleInput",Ee=o.forwardRef(({__scopeCheckbox:t,...n},r)=>{const{control:p,hasConsumerStoppedPropagationRef:c,checked:i,defaultChecked:g,required:l,disabled:u,name:_,value:s,form:d,bubbleInput:m,setBubbleInput:T}=z(Te,t),A=W(r,T),E=ne(i),N=re(p);o.useEffect(()=>{const C=m;if(!C)return;const x=window.HTMLInputElement.prototype,H=Object.getOwnPropertyDescriptor(x,"checked").set,k=!c.current;if(E!==i&&H){const R=new Event("click",{bubbles:k});C.indeterminate=j(i),H.call(C,j(i)?!1:i),C.dispatchEvent(R)}},[m,E,i,c]);const h=o.useRef(j(i)?!1:i);return e.jsx(U.input,{type:"checkbox","aria-hidden":!0,defaultChecked:g??h.current,required:l,disabled:u,name:_,value:s,form:d,...n,tabIndex:-1,ref:A,style:{...n.style,...N,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});Ee.displayName=Te;function Nt(t){return typeof t=="function"}function j(t){return t==="indeterminate"}function Ne(t){return j(t)?"indeterminate":t?"checked":"unchecked"}const ve=o.forwardRef(({className:t,...n},r)=>e.jsx(Y,{ref:r,className:D("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...n,children:e.jsx(Ae,{className:D("flex items-center justify-center text-current"),children:e.jsx(le,{className:"h-4 w-4"})})}));ve.displayName=Y.displayName;const vt=[{id:"artigo_juridico",name:"Artigo Jurídico",icon:"Scale",description:"Estrutura completa para análises e artigos técnicos",defaultTags:["artigo","analise"],content_html:`<article class="post-template post-template--artigo-juridico" itemscope itemtype="https://schema.org/Article">
  <header class="post-header">
    <h1 itemprop="headline">{{POST_TITLE}}</h1>

    <p class="post-meta">
      <span class="post-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
        Por <strong itemprop="name">{{AUTHOR_NAME}}</strong>
      </span>
      <span aria-hidden="true">•</span>
      <time datetime="{{PUBLISHED_AT_ISO}}" itemprop="datePublished">{{PUBLISHED_AT_HUMAN}}</time>
      <span aria-hidden="true">•</span>
      <span class="post-reading-time">{{READING_TIME}}</span>
      <meta itemprop="dateModified" content="{{UPDATED_AT_ISO}}" />
    </p>

    <figure class="post-featured" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
      <img src="{{FEATURED_IMAGE_URL}}" alt="{{FEATURED_IMAGE_ALT}}" loading="lazy" />
      <figcaption>{{FEATURED_IMAGE_CAPTION}}</figcaption>
    </figure>

    <p class="post-summary" itemprop="description">
      <em>{{SUMMARY_LEAD}}</em>
    </p>

    <nav class="post-toc" aria-label="Sumário">
      <h2>Sumário</h2>
      <ol>
        <li><a href="#introducao">Introdução</a></li>
        <li><a href="#fundamentacao-legal">Fundamentação legal</a></li>
        <li><a href="#doutrina-jurisprudencia">Doutrina e jurisprudência</a></li>
        <li><a href="#analise-critica">Análise crítica</a></li>
        <li><a href="#impactos-praticos">Impactos práticos</a></li>
        <li><a href="#conclusao">Conclusão</a></li>
        <li><a href="#referencias">Referências</a></li>
        <li><a href="#comentarios">Comentários</a></li>
      </ol>
    </nav>
  </header>

  <section id="introducao">
    <h2>1. Introdução</h2>
    <p>
      {{INTRO_PARAGRAPH_1}}
    </p>
    <p>
      {{INTRO_PARAGRAPH_2}}
    </p>

    <blockquote>
      <p><strong>Ponto-chave:</strong> {{KEY_TAKEAWAY}}</p>
    </blockquote>
  </section>

  <section id="fundamentacao-legal">
    <h2>2. Fundamentação legal</h2>
    <p>Base normativa que sustenta a análise:</p>

    <h3>2.1 Constituição Federal</h3>
    <ul>
      <li>{{CF_ITEM_1}}</li>
      <li>{{CF_ITEM_2}}</li>
      <li>{{CF_ITEM_3}}</li>
    </ul>

    <h3>2.2 Legislação infraconstitucional</h3>
    <ul>
      <li>{{LAW_ITEM_1}}</li>
      <li>{{LAW_ITEM_2}}</li>
      <li>{{LAW_ITEM_3}}</li>
    </ul>

    <h3>2.3 Normas regulatórias e atos administrativos</h3>
    <ul>
      <li>{{REG_ITEM_1}}</li>
      <li>{{REG_ITEM_2}}</li>
    </ul>

    <details>
      <summary><strong>Checklist de enquadramento (opcional)</strong></summary>
      <ul>
        <li>{{CHECK_1}}</li>
        <li>{{CHECK_2}}</li>
        <li>{{CHECK_3}}</li>
      </ul>
    </details>
  </section>

  <section id="doutrina-jurisprudencia">
    <h2>3. Doutrina e jurisprudência</h2>

    <h3>3.1 Panorama doutrinário</h3>
    <p>{{DOCTRINE_PARAGRAPH}}</p>

    <h3>3.2 Entendimento dos tribunais</h3>
    <p>{{COURTS_OVERVIEW}}</p>

    <div class="case-law">
      <h4>Decisões relevantes</h4>
      <ul>
        <li><strong>{{CASE_1_COURT}}</strong> — {{CASE_1_SUMMARY}} <em>({{CASE_1_CITATION}})</em></li>
        <li><strong>{{CASE_2_COURT}}</strong> — {{CASE_2_SUMMARY}} <em>({{CASE_2_CITATION}})</em></li>
        <li><strong>{{CASE_3_COURT}}</strong> — {{CASE_3_SUMMARY}} <em>({{CASE_3_CITATION}})</em></li>
      </ul>
    </div>
  </section>

  <section id="analise-critica">
    <h2>4. Análise crítica</h2>
    <p>{{ANALYSIS_P1}}</p>
    <p>{{ANALYSIS_P2}}</p>

    <h3>4.1 Riscos e controvérsias</h3>
    <ul>
      <li>{{RISK_1}}</li>
      <li>{{RISK_2}}</li>
      <li>{{RISK_3}}</li>
    </ul>

    <h3>4.2 Boas práticas e recomendações</h3>
    <ol>
      <li>{{REC_1}}</li>
      <li>{{REC_2}}</li>
      <li>{{REC_3}}</li>
    </ol>
  </section>

  <section id="impactos-praticos">
    <h2>5. Impactos práticos</h2>
    <p>{{IMPACTS_OVERVIEW}}</p>

    <table class="impact-table">
      <thead>
        <tr>
          <th>Quem é afetado</th>
          <th>O que muda</th>
          <th>Ação recomendada</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{IMPACT_ROW_1_AUDIENCE}}</td>
          <td>{{IMPACT_ROW_1_CHANGE}}</td>
          <td>{{IMPACT_ROW_1_ACTION}}</td>
        </tr>
        <tr>
          <td>{{IMPACT_ROW_2_AUDIENCE}}</td>
          <td>{{IMPACT_ROW_2_CHANGE}}</td>
          <td>{{IMPACT_ROW_2_ACTION}}</td>
        </tr>
        <tr>
          <td>{{IMPACT_ROW_3_AUDIENCE}}</td>
          <td>{{IMPACT_ROW_3_CHANGE}}</td>
          <td>{{IMPACT_ROW_3_ACTION}}</td>
        </tr>
      </tbody>
    </table>

    <details>
      <summary><strong>Perguntas frequentes</strong></summary>
      <p><strong>{{FAQ_Q1}}</strong><br />{{FAQ_A1}}</p>
      <p><strong>{{FAQ_Q2}}</strong><br />{{FAQ_A2}}</p>
      <p><strong>{{FAQ_Q3}}</strong><br />{{FAQ_A3}}</p>
    </details>
  </section>

  <section id="conclusao">
    <h2>6. Conclusão</h2>
    <p>{{CONCLUSION_P1}}</p>
    <p>{{CONCLUSION_P2}}</p>
  </section>

  <section id="referencias">
    <h2>7. Referências</h2>
    <ul>
      <li>{{REF_1}}</li>
      <li>{{REF_2}}</li>
      <li>{{REF_3}}</li>
      <li>{{REF_4}}</li>
    </ul>
  </section>

  <section class="post-engagement" aria-label="Curtidas e compartilhamento">
    <hr />
    <h2>Interaja</h2>

    <div class="like-area">
      <button
        type="button"
        class="like-button"
        data-like-button="true"
        data-post-id="{{POST_ID}}"
        aria-pressed="false"
      >
        👍 Curtir
        <span class="like-count" data-like-count="true">{{LIKE_COUNT}}</span>
      </button>

      <p class="like-hint">
        Gostou do conteúdo? A sua curtida ajuda este artigo a chegar a mais pessoas.
      </p>
    </div>

    <p class="share-area">
      <a href="{{SHARE_LINK}}" rel="nofollow">Compartilhar</a>
      <span aria-hidden="true">•</span>
      <a href="#comentarios">Ir para comentários</a>
    </p>
  </section>

  <section id="comentarios" class="post-comments" aria-label="Comentários">
    <h2>Comentários</h2>
    <p class="comments-lead">
      Deixe sua dúvida ou contribuição abaixo. Para um direcionamento específico, use o canal de atendimento.
    </p>

    <!--
      COMMENTS CONTAINER:
      - Se o seu projeto injeta um widget/HTML de comentários, mantenha este container como alvo.
      - Caso use algo como "renderComments(postId)", este é o lugar.
    -->
    <div class="comments-container" data-comments="true" data-post-id="{{POST_ID}}">
      {{COMMENTS_HTML}}
    </div>
  </section>

  <footer class="post-author-box" aria-label="Sobre a autora">
    <hr />
    <div class="author-box">
      <img class="author-avatar" src="{{AUTHOR_AVATAR_URL}}" alt="" loading="lazy" />
      <div class="author-bio">
        <h2>Sobre {{AUTHOR_NAME}}</h2>
        <p>{{AUTHOR_BIO}}</p>
        <p><a href="{{AUTHOR_PROFILE_LINK}}">Ver perfil</a></p>
      </div>
    </div>
  </footer>

  <!-- Bloco de contato padrão (duplicado aqui para funcionar mesmo sem partial) -->
  <section class="post-contact" aria-label="Fale com a gente">
    <hr />
    <h2>Fale com a gente</h2>
    <p>
      Se você quer entender como este tema se aplica ao seu caso (com segurança e estratégia),
      podemos avaliar o cenário e indicar os próximos passos.
    </p>

    <div class="contact-grid">
      <div class="contact-card">
        <h3>Atendimento</h3>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="{{CONTACT_WHATSAPP_LINK}}">{{CONTACT_WHATSAPP_DISPLAY}}</a></li>
          <li><strong>E-mail:</strong> <a href="mailto:{{CONTACT_EMAIL}}">{{CONTACT_EMAIL}}</a></li>
          <li><strong>Telefone:</strong> <a href="tel:{{CONTACT_PHONE_E164}}">{{CONTACT_PHONE_DISPLAY}}</a></li>
        </ul>
      </div>

      <div class="contact-card">
        <h3>Endereço</h3>
        <p>
          {{CONTACT_ADDRESS_LINE1}}<br />
          {{CONTACT_ADDRESS_LINE2}}
        </p>
        <p>
          <a href="{{CONTACT_MAPS_LINK}}" target="_blank" rel="noopener">Ver no mapa</a>
        </p>
      </div>

      <div class="contact-card">
        <h3>Horário</h3>
        <p>{{CONTACT_HOURS}}</p>
        <p><a class="btn" href="{{CONTACT_CTA_LINK}}">Agendar conversa</a></p>
      </div>
    </div>

    <details class="post-disclaimer">
      <summary><strong>Aviso importante (leia antes)</strong></summary>
      <p>
        Este conteúdo tem caráter informativo e não substitui a análise individual do caso por profissional habilitado.
        Leis, interpretações e entendimentos jurisprudenciais podem mudar.
      </p>
    </details>
  </section>
</article>
`},{id:"noticia",name:"Notícia",icon:"Newspaper",description:"Formato para atualizações e novidades do setor jurídico",defaultTags:["noticia","atualidade"],content_html:`<article class="post-template post-template--noticia" itemscope itemtype="https://schema.org/NewsArticle">
  <header class="post-header">
    <h1 itemprop="headline">{{POST_TITLE}}</h1>

    <p class="post-meta">
      <span class="post-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
        Por <strong itemprop="name">{{AUTHOR_NAME}}</strong>
      </span>
      <span aria-hidden="true">•</span>
      <time datetime="{{PUBLISHED_AT_ISO}}" itemprop="datePublished">{{PUBLISHED_AT_HUMAN}}</time>
      <span aria-hidden="true">•</span>
      <span class="post-reading-time">{{READING_TIME}}</span>
      <meta itemprop="dateModified" content="{{UPDATED_AT_ISO}}" />
    </p>

    <figure class="post-featured" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
      <img src="{{FEATURED_IMAGE_URL}}" alt="{{FEATURED_IMAGE_ALT}}" loading="lazy" />
      <figcaption>{{FEATURED_IMAGE_CAPTION}}</figcaption>
    </figure>

    <p class="post-lead" itemprop="description">
      <strong>{{NEWS_LEAD}}</strong>
    </p>

    <div class="quick-facts" aria-label="Em resumo">
      <h2>Em resumo</h2>
      <ul>
        <li><strong>O que aconteceu:</strong> {{FACT_WHAT}}</li>
        <li><strong>Quem é afetado:</strong> {{FACT_WHO}}</li>
        <li><strong>Desde quando:</strong> {{FACT_WHEN}}</li>
        <li><strong>Por que importa:</strong> {{FACT_WHY}}</li>
      </ul>
    </div>
  </header>

  <section id="o-que-aconteceu">
    <h2>1. O que aconteceu</h2>
    <p>{{WHAT_HAPPENED_P1}}</p>
    <p>{{WHAT_HAPPENED_P2}}</p>
  </section>

  <section id="contexto">
    <h2>2. Contexto</h2>
    <p>{{CONTEXT_P1}}</p>
    <p>{{CONTEXT_P2}}</p>

    <blockquote>
      <p><strong>Contexto rápido:</strong> {{CONTEXT_QUOTE}}</p>
    </blockquote>
  </section>

  <section id="o-que-muda">
    <h2>3. O que muda na prática</h2>
    <ul>
      <li>{{CHANGE_1}}</li>
      <li>{{CHANGE_2}}</li>
      <li>{{CHANGE_3}}</li>
    </ul>

    <details>
      <summary><strong>Para quem isso é mais relevante?</strong></summary>
      <p>{{RELEVANCE_DETAILS}}</p>
    </details>
  </section>

  <section id="impactos-e-proximos-passos">
    <h2>4. Impactos e próximos passos</h2>
    <table class="impact-table">
      <thead>
        <tr>
          <th>Cenário</th>
          <th>Impacto</th>
          <th>Próximo passo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{SCENARIO_1}}</td>
          <td>{{IMPACT_1}}</td>
          <td>{{NEXT_1}}</td>
        </tr>
        <tr>
          <td>{{SCENARIO_2}}</td>
          <td>{{IMPACT_2}}</td>
          <td>{{NEXT_2}}</td>
        </tr>
        <tr>
          <td>{{SCENARIO_3}}</td>
          <td>{{IMPACT_3}}</td>
          <td>{{NEXT_3}}</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="fontes">
    <h2>5. Fontes</h2>
    <ul>
      <li>{{SOURCE_1}}</li>
      <li>{{SOURCE_2}}</li>
      <li>{{SOURCE_3}}</li>
    </ul>
  </section>

  <section class="post-engagement" aria-label="Curtidas e comentários">
    <hr />
    <h2>Interaja</h2>

    <div class="like-area">
      <button
        type="button"
        class="like-button"
        data-like-button="true"
        data-post-id="{{POST_ID}}"
        aria-pressed="false"
      >
        👍 Curtir
        <span class="like-count" data-like-count="true">{{LIKE_COUNT}}</span>
      </button>
      <p class="like-hint">Acompanhar as atualizações fica mais fácil quando você curte e salva.</p>
    </div>

    <p class="share-area">
      <a href="{{SHARE_LINK}}" rel="nofollow">Compartilhar</a>
      <span aria-hidden="true">•</span>
      <a href="#comentarios">Comentar</a>
    </p>
  </section>

  <section id="comentarios" class="post-comments" aria-label="Comentários">
    <h2>Comentários</h2>
    <div class="comments-container" data-comments="true" data-post-id="{{POST_ID}}">
      {{COMMENTS_HTML}}
    </div>
  </section>

  <!-- Contato padrão -->
  <section class="post-contact" aria-label="Fale com a gente">
    <hr />
    <h2>Fale com a gente</h2>
    <p>
      Quer avaliar o impacto desta atualização no seu caso? Entre em contato e a gente te orienta sobre o caminho mais seguro.
    </p>

    <div class="contact-grid">
      <div class="contact-card">
        <h3>Atendimento</h3>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="{{CONTACT_WHATSAPP_LINK}}">{{CONTACT_WHATSAPP_DISPLAY}}</a></li>
          <li><strong>E-mail:</strong> <a href="mailto:{{CONTACT_EMAIL}}">{{CONTACT_EMAIL}}</a></li>
          <li><strong>Telefone:</strong> <a href="tel:{{CONTACT_PHONE_E164}}">{{CONTACT_PHONE_DISPLAY}}</a></li>
        </ul>
      </div>

      <div class="contact-card">
        <h3>Endereço</h3>
        <p>
          {{CONTACT_ADDRESS_LINE1}}<br />
          {{CONTACT_ADDRESS_LINE2}}
        </p>
        <p>
          <a href="{{CONTACT_MAPS_LINK}}" target="_blank" rel="noopener">Ver no mapa</a>
        </p>
      </div>

      <div class="contact-card">
        <h3>Horário</h3>
        <p>{{CONTACT_HOURS}}</p>
        <p><a class="btn" href="{{CONTACT_CTA_LINK}}">Agendar conversa</a></p>
      </div>
    </div>

    <details class="post-disclaimer">
      <summary><strong>Aviso importante</strong></summary>
      <p>
        Conteúdo informativo. A aplicação ao caso concreto depende de análise específica e pode variar conforme fatos e documentos.
      </p>
    </details>
  </section>
</article>
`},{id:"analise_caso",name:"Análise de Caso",icon:"FileSearch",description:"Estudo detalhado de casos práticos relevantes",defaultTags:["caso","pratico","jurisprudencia"],content_html:`<article class="post-template post-template--analise-de-caso" itemscope itemtype="https://schema.org/Article">
  <header class="post-header">
    <h1 itemprop="headline">{{POST_TITLE}}</h1>

    <p class="post-meta">
      <span class="post-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
        Por <strong itemprop="name">{{AUTHOR_NAME}}</strong>
      </span>
      <span aria-hidden="true">•</span>
      <time datetime="{{PUBLISHED_AT_ISO}}" itemprop="datePublished">{{PUBLISHED_AT_HUMAN}}</time>
      <span aria-hidden="true">•</span>
      <span class="post-reading-time">{{READING_TIME}}</span>
      <meta itemprop="dateModified" content="{{UPDATED_AT_ISO}}" />
    </p>

    <p class="post-summary" itemprop="description">
      <em>{{SUMMARY_LEAD}}</em>
    </p>

    <div class="case-card" aria-label="Ficha do caso">
      <h2>Ficha do caso</h2>
      <ul>
        <li><strong>Área:</strong> {{CASE_AREA}}</li>
        <li><strong>Órgão/Tribunal:</strong> {{CASE_COURT}}</li>
        <li><strong>Processo/Referência:</strong> {{CASE_REFERENCE}}</li>
        <li><strong>Status:</strong> {{CASE_STATUS}}</li>
        <li><strong>Tema central:</strong> {{CASE_TOPIC}}</li>
      </ul>
      <p><small>Observação: dados sensíveis devem ser anonimizados.</small></p>
    </div>
  </header>

  <section id="fatos">
    <h2>1. Fatos relevantes</h2>
    <p>{{FACTS_P1}}</p>
    <p>{{FACTS_P2}}</p>

    <h3>1.1 Linha do tempo</h3>
    <ol>
      <li><strong>{{DATE_1}}</strong> — {{EVENT_1}}</li>
      <li><strong>{{DATE_2}}</strong> — {{EVENT_2}}</li>
      <li><strong>{{DATE_3}}</strong> — {{EVENT_3}}</li>
    </ol>
  </section>

  <section id="questao-juridica">
    <h2>2. Questão jurídica</h2>
    <p><strong>Pergunta central:</strong> {{LEGAL_QUESTION}}</p>
    <ul>
      <li>{{SUBQUESTION_1}}</li>
      <li>{{SUBQUESTION_2}}</li>
      <li>{{SUBQUESTION_3}}</li>
    </ul>
  </section>

  <section id="fundamentos">
    <h2>3. Fundamentos e argumentos</h2>

    <h3>3.1 Tese A</h3>
    <p>{{THESIS_A}}</p>

    <h3>3.2 Tese B</h3>
    <p>{{THESIS_B}}</p>

    <h3>3.3 Provas/documentos (quando aplicável)</h3>
    <ul>
      <li>{{EVIDENCE_1}}</li>
      <li>{{EVIDENCE_2}}</li>
      <li>{{EVIDENCE_3}}</li>
    </ul>
  </section>

  <section id="decisao">
    <h2>4. Decisão / resultado</h2>
    <p>{{DECISION_P1}}</p>
    <blockquote>
      <p><strong>Trecho/ratio decidendi (resumo):</strong> {{DECISION_HIGHLIGHT}}</p>
    </blockquote>

    <h3>4.1 Consequências imediatas</h3>
    <ul>
      <li>{{CONSEQUENCE_1}}</li>
      <li>{{CONSEQUENCE_2}}</li>
      <li>{{CONSEQUENCE_3}}</li>
    </ul>
  </section>

  <section id="licoes">
    <h2>5. Lições e recomendações</h2>
    <ol>
      <li>{{LESSON_1}}</li>
      <li>{{LESSON_2}}</li>
      <li>{{LESSON_3}}</li>
    </ol>

    <details>
      <summary><strong>Como aplicar no seu caso?</strong></summary>
      <p>{{APPLY_GUIDE}}</p>
    </details>
  </section>

  <section class="post-engagement" aria-label="Curtidas e comentários">
    <hr />
    <h2>Interaja</h2>

    <div class="like-area">
      <button
        type="button"
        class="like-button"
        data-like-button="true"
        data-post-id="{{POST_ID}}"
        aria-pressed="false"
      >
        👍 Curtir
        <span class="like-count" data-like-count="true">{{LIKE_COUNT}}</span>
      </button>
      <p class="like-hint">Se esse tipo de análise ajuda você, deixe uma curtida para eu trazer mais casos.</p>
    </div>

    <p class="share-area">
      <a href="{{SHARE_LINK}}" rel="nofollow">Compartilhar</a>
      <span aria-hidden="true">•</span>
      <a href="#comentarios">Comentários</a>
    </p>
  </section>

  <section id="comentarios" class="post-comments" aria-label="Comentários">
    <h2>Comentários</h2>
    <div class="comments-container" data-comments="true" data-post-id="{{POST_ID}}">
      {{COMMENTS_HTML}}
    </div>
  </section>

  <!-- Contato padrão -->
  <section class="post-contact" aria-label="Fale com a gente">
    <hr />
    <h2>Fale com a gente</h2>
    <p>
      Quer mapear riscos e estratégias para o seu cenário? Chame no WhatsApp ou envie os dados do caso para uma análise inicial.
    </p>

    <div class="contact-grid">
      <div class="contact-card">
        <h3>Atendimento</h3>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="{{CONTACT_WHATSAPP_LINK}}">{{CONTACT_WHATSAPP_DISPLAY}}</a></li>
          <li><strong>E-mail:</strong> <a href="mailto:{{CONTACT_EMAIL}}">{{CONTACT_EMAIL}}</a></li>
          <li><strong>Telefone:</strong> <a href="tel:{{CONTACT_PHONE_E164}}">{{CONTACT_PHONE_DISPLAY}}</a></li>
        </ul>
      </div>

      <div class="contact-card">
        <h3>Endereço</h3>
        <p>
          {{CONTACT_ADDRESS_LINE1}}<br />
          {{CONTACT_ADDRESS_LINE2}}
        </p>
        <p>
          <a href="{{CONTACT_MAPS_LINK}}" target="_blank" rel="noopener">Ver no mapa</a>
        </p>
      </div>

      <div class="contact-card">
        <h3>Horário</h3>
        <p>{{CONTACT_HOURS}}</p>
        <p><a class="btn" href="{{CONTACT_CTA_LINK}}">Agendar conversa</a></p>
      </div>
    </div>

    <details class="post-disclaimer">
      <summary><strong>Aviso importante</strong></summary>
      <p>
        Caso concreto exige análise individual. Esta publicação é uma síntese didática e não substitui consulta jurídica.
      </p>
    </details>
  </section>
</article>
`},{id:"parecer",name:"Parecer Jurídico",icon:"FileText",description:"Modelo para pareceres e consultas jurídicas",defaultTags:["parecer","consulta"],content_html:`<article class="post-template post-template--parecer-juridico" itemscope itemtype="https://schema.org/Article">
  <header class="post-header">
    <h1 itemprop="headline">{{POST_TITLE}}</h1>

    <p class="post-meta">
      <span class="post-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
        Por <strong itemprop="name">{{AUTHOR_NAME}}</strong>
      </span>
      <span aria-hidden="true">•</span>
      <time datetime="{{PUBLISHED_AT_ISO}}" itemprop="datePublished">{{PUBLISHED_AT_HUMAN}}</time>
      <span aria-hidden="true">•</span>
      <span class="post-reading-time">{{READING_TIME}}</span>
      <meta itemprop="dateModified" content="{{UPDATED_AT_ISO}}" />
    </p>

    <p class="post-summary" itemprop="description">
      <em>{{SUMMARY_LEAD}}</em>
    </p>

    <div class="opinion-scope" aria-label="Escopo do parecer">
      <h2>Escopo</h2>
      <ul>
        <li><strong>Cliente/Interessado:</strong> {{CLIENT_PROFILE}}</li>
        <li><strong>Objeto:</strong> {{OBJECT}}</li>
        <li><strong>Premissas:</strong> {{PREMISES}}</li>
        <li><strong>Limitações:</strong> {{LIMITATIONS}}</li>
      </ul>
      <p><small>Observação: informações sensíveis devem ser anonimizadas.</small></p>
    </div>
  </header>

  <section id="consulta">
    <h2>1. Consulta</h2>
    <p>{{CONSULT_P1}}</p>
    <p>{{CONSULT_P2}}</p>
  </section>

  <section id="quesitos">
    <h2>2. Quesitos</h2>
    <ol>
      <li>{{QUESTION_1}}</li>
      <li>{{QUESTION_2}}</li>
      <li>{{QUESTION_3}}</li>
    </ol>
  </section>

  <section id="premissas-e-fatos">
    <h2>3. Premissas e fatos considerados</h2>
    <ul>
      <li>{{ASSUMPTION_1}}</li>
      <li>{{ASSUMPTION_2}}</li>
      <li>{{ASSUMPTION_3}}</li>
    </ul>

    <details>
      <summary><strong>Documentos analisados</strong></summary>
      <ul>
        <li>{{DOC_1}}</li>
        <li>{{DOC_2}}</li>
        <li>{{DOC_3}}</li>
      </ul>
    </details>
  </section>

  <section id="fundamentacao">
    <h2>4. Fundamentação</h2>

    <h3>4.1 Enquadramento normativo</h3>
    <ul>
      <li>{{NORM_1}}</li>
      <li>{{NORM_2}}</li>
      <li>{{NORM_3}}</li>
    </ul>

    <h3>4.2 Jurisprudência e precedentes</h3>
    <ul>
      <li>{{PREC_1}} <em>({{PREC_CIT_1}})</em></li>
      <li>{{PREC_2}} <em>({{PREC_CIT_2}})</em></li>
    </ul>

    <h3>4.3 Aplicação ao caso</h3>
    <p>{{APPLICATION_P1}}</p>
    <p>{{APPLICATION_P2}}</p>
  </section>

  <section id="conclusao">
    <h2>5. Conclusão</h2>
    <p><strong>Resposta objetiva:</strong> {{OBJECTIVE_ANSWER}}</p>

    <h3>5.1 Recomendações</h3>
    <ol>
      <li>{{RECOMMENDATION_1}}</li>
      <li>{{RECOMMENDATION_2}}</li>
      <li>{{RECOMMENDATION_3}}</li>
    </ol>

    <h3>5.2 Ressalvas</h3>
    <ul>
      <li>{{CAVEAT_1}}</li>
      <li>{{CAVEAT_2}}</li>
    </ul>
  </section>

  <section class="post-engagement" aria-label="Curtidas e comentários">
    <hr />
    <h2>Interaja</h2>

    <div class="like-area">
      <button
        type="button"
        class="like-button"
        data-like-button="true"
        data-post-id="{{POST_ID}}"
        aria-pressed="false"
      >
        👍 Curtir
        <span class="like-count" data-like-count="true">{{LIKE_COUNT}}</span>
      </button>
      <p class="like-hint">Se esse formato de parecer te ajuda, deixe uma curtida.</p>
    </div>

    <p class="share-area">
      <a href="{{SHARE_LINK}}" rel="nofollow">Compartilhar</a>
      <span aria-hidden="true">•</span>
      <a href="#comentarios">Comentários</a>
    </p>
  </section>

  <section id="comentarios" class="post-comments" aria-label="Comentários">
    <h2>Comentários</h2>
    <div class="comments-container" data-comments="true" data-post-id="{{POST_ID}}">
      {{COMMENTS_HTML}}
    </div>
  </section>

  <!-- Contato padrão -->
  <section class="post-contact" aria-label="Fale com a gente">
    <hr />
    <h2>Fale com a gente</h2>
    <p>
      Precisa de um parecer para o seu caso, com análise de documentos e estratégia? Entre em contato.
    </p>

    <div class="contact-grid">
      <div class="contact-card">
        <h3>Atendimento</h3>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="{{CONTACT_WHATSAPP_LINK}}">{{CONTACT_WHATSAPP_DISPLAY}}</a></li>
          <li><strong>E-mail:</strong> <a href="mailto:{{CONTACT_EMAIL}}">{{CONTACT_EMAIL}}</a></li>
          <li><strong>Telefone:</strong> <a href="tel:{{CONTACT_PHONE_E164}}">{{CONTACT_PHONE_DISPLAY}}</a></li>
        </ul>
      </div>

      <div class="contact-card">
        <h3>Endereço</h3>
        <p>
          {{CONTACT_ADDRESS_LINE1}}<br />
          {{CONTACT_ADDRESS_LINE2}}
        </p>
        <p>
          <a href="{{CONTACT_MAPS_LINK}}" target="_blank" rel="noopener">Ver no mapa</a>
        </p>
      </div>

      <div class="contact-card">
        <h3>Horário</h3>
        <p>{{CONTACT_HOURS}}</p>
        <p><a class="btn" href="{{CONTACT_CTA_LINK}}">Agendar conversa</a></p>
      </div>
    </div>

    <details class="post-disclaimer">
      <summary><strong>Aviso importante</strong></summary>
      <p>
        Conteúdo informativo. A aplicação ao caso concreto depende de análise específica e pode variar conforme fatos e documentos.
      </p>
    </details>
  </section>
</article>
`}],bt={Scale:e.jsx(ot,{className:"w-5 h-5"}),Newspaper:e.jsx(ut,{className:"w-5 h-5"}),FileSearch:e.jsx(mt,{className:"w-5 h-5"}),FileText:e.jsx(ce,{className:"w-5 h-5"})};function xt({onSelect:t,hasContent:n}){const[r,p]=o.useState(!1),[c,i]=o.useState(null),[g,l]=o.useState(!1),u=d=>{i(d),n?l(!0):(t(d),p(!1))},_=()=>{c&&(t(c),p(!1),l(!1),i(null))},s=()=>{l(!1),i(null)};return e.jsxs(Je,{open:r,onOpenChange:p,children:[e.jsx(Ze,{asChild:!0,children:e.jsxs(O,{type:"button",variant:"outline",size:"sm",children:[e.jsx(ce,{className:"w-4 h-4 mr-2"}),"Usar template"]})}),e.jsxs(et,{className:"max-w-2xl",children:[e.jsxs(tt,{children:[e.jsx(at,{children:"Escolher Template"}),e.jsx(st,{children:"Selecione um modelo pré-formatado para começar seu artigo."})]}),g?e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg",children:[e.jsx("p",{className:"text-amber-600 dark:text-amber-400 font-medium mb-2",children:"⚠️ Atenção"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Você já tem conteúdo no editor. Usar este template irá substituir todo o conteúdo atual. Deseja continuar?"})]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(O,{type:"button",variant:"outline",onClick:s,children:"Cancelar"}),e.jsx(O,{type:"button",onClick:_,children:"Substituir conteúdo"})]})]}):e.jsx("div",{className:"grid gap-3 py-4",children:vt.map(d=>e.jsxs("button",{type:"button",onClick:()=>u(d),className:D("flex items-start gap-4 p-4 rounded-lg border border-border","bg-card hover:bg-accent/50 transition-colors text-left","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"),children:[e.jsx("div",{className:"p-2 rounded-md bg-primary/10 text-primary shrink-0",children:bt[d.icon]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-medium text-foreground",children:d.name}),e.jsx("p",{className:"text-sm text-muted-foreground mt-0.5",children:d.description}),e.jsx("div",{className:"flex gap-1.5 mt-2",children:d.defaultTags.map(m=>e.jsxs("span",{className:"px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",children:["#",m]},m))})]}),e.jsx(le,{className:"w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]},d.id))})]})]})}function St(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,100)}function It({post:t,isEditing:n}){const r=ke(),p=Ue(),c=He(),i=Be(),g=Ke(),{toast:l}=we(),{data:u}=We(),{data:_}=qe((t==null?void 0:t.id)||""),[s,d]=o.useState({title:(t==null?void 0:t.title)||"",slug:(t==null?void 0:t.slug)||"",excerpt:(t==null?void 0:t.excerpt)||"",content_html:(t==null?void 0:t.content_html)||"",cover_image_url:(t==null?void 0:t.cover_image_url)||"",author_name:(t==null?void 0:t.author_name)||"Mariana Lima",published:(t==null?void 0:t.published)||!1,published_at:(t==null?void 0:t.published_at)||null,tags:(t==null?void 0:t.tags)||[],featured:(t==null?void 0:t.featured)||!1,send_newsletter_on_publish:(t==null?void 0:t.send_newsletter_on_publish)||!1,newsletter_subject:(t==null?void 0:t.newsletter_subject)||""}),[m,T]=o.useState([]),[A,E]=o.useState(""),[N,h]=o.useState(!1),[C,x]=o.useState(!1),[P,H]=o.useState("visual"),[k,R]=o.useState("idle"),[X,be]=o.useState(null),L=o.useRef(null),[w,xe]=o.useState((t==null?void 0:t.id)||null),G=o.useRef(!1);o.useEffect(()=>{_&&T(_.map(a=>a.id))},[_]),o.useEffect(()=>{!n&&s.title&&d(a=>({...a,slug:St(s.title)}))},[s.title,n]),o.useEffect(()=>{G.current=!0},[s,m]);const $=o.useCallback(async()=>{if(!(!s.title.trim()||!s.content_html.trim())&&!s.published&&G.current){R("saving");try{const a={...s,published:!1,published_at:s.published_at};if(w)await c.mutateAsync({id:w,...a});else{const f=await p.mutateAsync(a);xe(f.id),m.length>0&&await i.mutateAsync({postId:f.id,categoryIds:m})}G.current=!1,R("saved"),be(new Date),setTimeout(()=>R("idle"),3e3)}catch(a){console.error("Auto-save failed:",a),R("error"),setTimeout(()=>R("idle"),3e3)}}},[s,w,m,p,c,i]);o.useEffect(()=>(L.current&&clearInterval(L.current),L.current=setInterval(()=>{$()},3e4),()=>{L.current&&clearInterval(L.current)}),[$]);const v=(a,f)=>{d(I=>({...I,[a]:f}))},Se=a=>{T(f=>f.includes(a)?f.filter(I=>I!==a):[...f,a])},J=()=>{const a=A.trim().toLowerCase().replace(/[^a-z0-9-]/g,"");a&&!s.tags.includes(a)&&(v("tags",[...s.tags,a]),E(""))},Ie=a=>{v("tags",s.tags.filter(f=>f!==a))},Pe=a=>{a.key==="Enter"&&(a.preventDefault(),J())},Oe=a=>{d(f=>({...f,content_html:a.content_html,tags:[...new Set([...f.tags,...a.defaultTags])]})),l({title:"Template aplicado!",description:`O template "${a.name}" foi carregado.`})},Z=async(a=!1)=>{var f;if(!s.title.trim()){l({title:"Título obrigatório",description:"Por favor, insira um título para o post.",variant:"destructive"});return}if(!s.content_html.trim()){l({title:"Conteúdo obrigatório",description:"Por favor, insira o conteúdo do post.",variant:"destructive"});return}x(!0);try{const I={...s,published:a||s.published,published_at:a&&!s.published_at?new Date().toISOString():s.published_at};let y;if(n&&t?(await c.mutateAsync({id:t.id,...I}),y=t.id,l({title:"Post atualizado!",description:a?"O artigo foi publicado.":"Alterações salvas."})):w?(await c.mutateAsync({id:w,...I}),y=w,l({title:a?"Post publicado!":"Rascunho salvo!",description:a?"O artigo está disponível no blog.":"Você pode continuar editando depois."})):(y=(await p.mutateAsync(I)).id,l({title:a?"Post publicado!":"Rascunho salvo!",description:a?"O artigo está disponível no blog.":"Você pode continuar editando depois."})),(m.length>0||_&&_.length>0)&&await i.mutateAsync({postId:y,categoryIds:m}),a&&s.send_newsletter_on_publish)try{const S=((f=s.newsletter_subject)==null?void 0:f.trim())||s.title,F=`https://marianalima.adv.br/blog/${s.slug}`,Re=Qe({title:s.title,content:s.content_html,coverImageUrl:s.cover_image_url,postUrl:F});await g.mutateAsync({subject:S,html:Re,post_id:y}),l({title:"Campanha de newsletter criada!",description:"Acesse Campanhas para disparar o envio."})}catch(S){const F=(S==null?void 0:S.message)||(S==null?void 0:S.details)||JSON.stringify(S);console.error("Failed to create newsletter campaign:",F,S),l({title:"Post publicado, mas erro na campanha",description:`Erro: ${F}. Tente criar manualmente.`,variant:"destructive"})}r("/admin")}catch(I){const y=it(I,"Não foi possível salvar o post.");l({title:"Erro ao salvar",description:y,variant:"destructive"})}finally{x(!1)}},je=()=>s.published?null:e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[k==="saving"&&e.jsxs(e.Fragment,{children:[e.jsx(dt,{className:"w-3 h-3 animate-spin"}),e.jsx("span",{children:"Salvando..."})]}),k==="saved"&&e.jsxs(e.Fragment,{children:[e.jsx(pt,{className:"w-3 h-3 text-green-500"}),e.jsx("span",{children:"Rascunho salvo"})]}),k==="error"&&e.jsx("span",{className:"text-destructive",children:"Erro ao salvar"}),k==="idle"&&X&&e.jsxs("span",{children:["Último salvamento: ",X.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})]})]});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{htmlFor:"title",children:"Título *"}),e.jsx(xt,{onSelect:Oe,hasContent:!!s.content_html.trim()})]}),e.jsx(M,{id:"title",value:s.title,onChange:a=>v("title",a.target.value),placeholder:"Título do artigo",className:"text-lg"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(b,{htmlFor:"slug",children:"Slug (URL)"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"/blog/"}),e.jsx(M,{id:"slug",value:s.slug,onChange:a=>v("slug",a.target.value),placeholder:"url-do-artigo"})]})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(b,{htmlFor:"excerpt",children:"Resumo (opcional)"}),e.jsx(te,{id:"excerpt",value:s.excerpt,onChange:a=>v("excerpt",a.target.value),placeholder:"Breve descrição do artigo...",rows:3,maxLength:300}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[s.excerpt.length,"/300 caracteres"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(b,{children:"Imagem de Capa (opcional)"}),e.jsx(Ge,{value:s.cover_image_url,onChange:a=>v("cover_image_url",a),aspectRatio:"video"})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(b,{children:"Categorias"}),e.jsxs("div",{className:"flex flex-wrap gap-3 p-3 border border-border rounded-lg bg-muted/20",children:[u==null?void 0:u.map(a=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(ve,{id:`category-${a.id}`,checked:m.includes(a.id),onCheckedChange:()=>Se(a.id)}),e.jsx("label",{htmlFor:`category-${a.id}`,className:"text-sm font-medium leading-none cursor-pointer",style:{color:a.color},children:a.name})]},a.id)),(!u||u.length===0)&&e.jsx("p",{className:"text-sm text-muted-foreground",children:"Nenhuma categoria disponível"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(b,{children:"Tags"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(M,{value:A,onChange:a=>E(a.target.value),onKeyDown:Pe,placeholder:"Adicionar tag...",className:"flex-1"}),e.jsx(O,{type:"button",variant:"outline",size:"icon",onClick:J,disabled:!A.trim(),children:e.jsx(De,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 min-h-[40px] p-2 border border-border rounded-lg bg-muted/20",children:[s.tags.map(a=>e.jsxs(Xe,{variant:"secondary",className:"flex items-center gap-1",children:["#",a,e.jsx("button",{type:"button",onClick:()=>Ie(a),className:"ml-1 hover:text-destructive",children:e.jsx(Le,{className:"w-3 h-3"})})]},a)),s.tags.length===0&&e.jsx("span",{className:"text-sm text-muted-foreground",children:"Nenhuma tag"})]})]})]})]}),e.jsxs("div",{className:"max-w-xs",children:[e.jsx(b,{htmlFor:"author_name",children:"Autor"}),e.jsx(M,{id:"author_name",value:s.author_name,onChange:a=>v("author_name",a.target.value),placeholder:"Nome do autor"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{children:"Conteúdo *"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ze,{value:P,onValueChange:a=>H(a),children:e.jsxs(Ye,{className:"h-8",children:[e.jsx(ae,{value:"visual",className:"text-xs px-3",children:"Visual"}),e.jsx(ae,{value:"html",className:"text-xs px-3",children:"HTML"})]})}),e.jsxs(O,{type:"button",variant:"outline",size:"sm",onClick:()=>h(!N),children:[N?e.jsx(rt,{className:"w-4 h-4 mr-1"}):e.jsx(nt,{className:"w-4 h-4 mr-1"}),N?"Editar":"Preview"]})]})]}),N?e.jsx("div",{className:"border border-border rounded-lg p-6 min-h-[400px] bg-card",children:e.jsx($e,{html:s.content_html})}):P==="visual"?e.jsx(Ve,{content:s.content_html,onChange:a=>v("content_html",a),placeholder:"Comece a escrever seu artigo..."}):e.jsx(te,{id:"content_html",value:s.content_html,onChange:a=>v("content_html",a.target.value),placeholder:"<p>Conteúdo do artigo em HTML...</p>",className:"min-h-[400px] font-mono text-sm"})]}),e.jsxs("div",{className:"space-y-4 border border-border rounded-lg p-4 bg-muted/10",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(B,{id:"send_newsletter_on_publish",checked:s.send_newsletter_on_publish,onCheckedChange:a=>v("send_newsletter_on_publish",a)}),e.jsx(b,{htmlFor:"send_newsletter_on_publish",className:"cursor-pointer",children:"Enviar para newsletter ao publicar"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(b,{htmlFor:"newsletter_subject",children:"Assunto do e-mail"}),e.jsx(M,{id:"newsletter_subject",value:s.newsletter_subject,onChange:a=>v("newsletter_subject",a.target.value),placeholder:s.title||"Assunto baseado no título do post",disabled:!s.send_newsletter_on_publish}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Se deixar vazio, o assunto será o título do post."})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-4 border-t border-border",children:[e.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(B,{id:"published",checked:s.published,onCheckedChange:a=>v("published",a)}),e.jsx(b,{htmlFor:"published",className:"cursor-pointer",children:s.published?"Publicado":"Rascunho"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(B,{id:"featured",checked:s.featured,onCheckedChange:a=>v("featured",a)}),e.jsx(b,{htmlFor:"featured",className:"cursor-pointer text-primary",children:"⭐ Destaque"})]}),je()]}),e.jsxs("div",{className:"flex gap-3 sm:ml-auto",children:[e.jsx(O,{type:"button",variant:"outline",onClick:()=>r("/admin"),children:"Cancelar"}),e.jsxs(O,{type:"button",variant:"secondary",onClick:()=>Z(!1),disabled:C,children:[e.jsx(lt,{className:"w-4 h-4 mr-2"}),"Salvar rascunho"]}),e.jsxs(O,{type:"button",onClick:()=>Z(!0),disabled:C,children:[e.jsx(ct,{className:"w-4 h-4 mr-2"}),n?"Atualizar":"Publicar"]})]})]})]})}const _a=()=>{const{id:t}=Me(),n=!!t,{data:r,isLoading:p}=Fe(t||"");return n&&p?e.jsx(ee,{title:"Carregando...",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(V,{className:"h-10 w-full"}),e.jsx(V,{className:"h-10 w-full"}),e.jsx(V,{className:"h-40 w-full"})]})}):e.jsx(ee,{title:n?"Editar Post":"Novo Post",children:e.jsx(It,{post:r||void 0,isEditing:n})})};export{_a as default};
