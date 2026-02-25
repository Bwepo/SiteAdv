import{c as ee,a as Te,r as i,a6 as ae,j as e,P as K,a7 as $,a8 as Ee,a9 as Ne,aa as ve,e as B,u as xe,i as be,X as Se,k as Ie}from"./index-BvZpt6_-.js";import{e as Oe,c as Pe,f as je}from"./usePosts-Hnau0zin.js";import{a as Re,u as ye,b as ke}from"./useCategories-BJ-7JCe-.js";import{f as Le}from"./useNewsletter-Clkogrqs.js";import{b as Me}from"./newsletterTemplate-BFjRI_R_.js";import{B as I}from"./button-BHZQesTD.js";import{I as D}from"./input-Ch28ePyu.js";import{L as T}from"./label-Cqqg89wQ.js";import{T as J}from"./textarea-BN4RKX2W.js";import{S as W}from"./switch-CSM11sWw.js";import{T as De,a as we,b as Z}from"./tabs-Btm4yiey.js";import{u as Ue}from"./index-BVUagNRN.js";import{C as te}from"./check-C3OwxVEn.js";import{B as He}from"./badge-BTeKtkMP.js";import{P as Fe}from"./PostContent-D0DfgwMl.js";import{I as We,T as qe}from"./TipTapEditor-CAvWvWWw.js";import{D as Be,b as Ke,a as Ge,c as Ve,d as Qe,e as ze}from"./dialog-0FpMd1rI.js";import{F as se}from"./file-text-Dlfg21cc.js";import{S as Ye}from"./scale-CAyV3dJv.js";import{g as Xe}from"./supabaseErrors-eYWJjREL.js";import{P as $e}from"./plus-BrCCLAJz.js";import{E as Je}from"./eye-off-CxL65A0J.js";import{E as Ze}from"./eye-BH_HF33L.js";import{S as ea}from"./save-DV3HvodN.js";import{S as aa}from"./send-B4u4PYiS.js";import{L as ta}from"./loader-circle-C3zyyxlp.js";import{C as sa}from"./circle-check-big-ox72xA8E.js";import{S as q}from"./skeleton-DnWA0KNU.js";import"./useMutation-DJuBpfrw.js";import"./index-DpIS7u9R.js";import"./index-C-mFwA4u.js";import"./index-C0r-sG3t.js";import"./dropdown-menu-BwNFrZKR.js";import"./index-CSY9kRV9.js";import"./chevron-right-BXs3i7q0.js";import"./link-B9Q5b1XY.js";import"./list-CsRPJUtj.js";import"./quote-BwPS8i_Q.js";import"./trash-2-BTUNUdsR.js";import"./index-AJeKEShh.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=ee("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=ee("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);var H="Checkbox",[ra,at]=Te(H),[na,G]=ra(H);function la(t){const{__scopeCheckbox:n,checked:c,children:p,defaultChecked:d,disabled:o,form:A,name:l,onCheckedChange:u,required:_,value:s="on",internal_do_not_use_render:r}=t,[m,S]=ve({prop:c,defaultProp:d??!1,onChange:u,caller:H}),[E,x]=i.useState(null),[v,g]=i.useState(null),C=i.useRef(!1),R=E?!!A||!!E.closest("form"):!0,y={checked:m,disabled:o,setChecked:S,control:E,setControl:x,name:l,form:A,value:s,hasConsumerStoppedPropagationRef:C,required:_,defaultChecked:O(d)?!1:d,isFormControl:R,bubbleInput:v,setBubbleInput:g};return e.jsx(na,{scope:n,...y,children:ca(r)?r(y):p})}var ie="CheckboxTrigger",oe=i.forwardRef(({__scopeCheckbox:t,onKeyDown:n,onClick:c,...p},d)=>{const{control:o,value:A,disabled:l,checked:u,required:_,setControl:s,setChecked:r,hasConsumerStoppedPropagationRef:m,isFormControl:S,bubbleInput:E}=G(ie,t),x=ae(d,s),v=i.useRef(u);return i.useEffect(()=>{const g=o==null?void 0:o.form;if(g){const C=()=>r(v.current);return g.addEventListener("reset",C),()=>g.removeEventListener("reset",C)}},[o,r]),e.jsx(K.button,{type:"button",role:"checkbox","aria-checked":O(u)?"mixed":u,"aria-required":_,"data-state":de(u),"data-disabled":l?"":void 0,disabled:l,value:A,...p,ref:x,onKeyDown:$(n,g=>{g.key==="Enter"&&g.preventDefault()}),onClick:$(c,g=>{r(C=>O(C)?!0:!C),E&&S&&(m.current=g.isPropagationStopped(),m.current||g.stopPropagation())})})});oe.displayName=ie;var V=i.forwardRef((t,n)=>{const{__scopeCheckbox:c,name:p,checked:d,defaultChecked:o,required:A,disabled:l,value:u,onCheckedChange:_,form:s,...r}=t;return e.jsx(la,{__scopeCheckbox:c,checked:d,defaultChecked:o,disabled:l,required:A,onCheckedChange:_,name:p,form:s,value:u,internal_do_not_use_render:({isFormControl:m})=>e.jsxs(e.Fragment,{children:[e.jsx(oe,{...r,ref:n,__scopeCheckbox:c}),m&&e.jsx(ce,{__scopeCheckbox:c})]})})});V.displayName=H;var re="CheckboxIndicator",ne=i.forwardRef((t,n)=>{const{__scopeCheckbox:c,forceMount:p,...d}=t,o=G(re,c);return e.jsx(Ee,{present:p||O(o.checked)||o.checked===!0,children:e.jsx(K.span,{"data-state":de(o.checked),"data-disabled":o.disabled?"":void 0,...d,ref:n,style:{pointerEvents:"none",...t.style}})})});ne.displayName=re;var le="CheckboxBubbleInput",ce=i.forwardRef(({__scopeCheckbox:t,...n},c)=>{const{control:p,hasConsumerStoppedPropagationRef:d,checked:o,defaultChecked:A,required:l,disabled:u,name:_,value:s,form:r,bubbleInput:m,setBubbleInput:S}=G(le,t),E=ae(c,S),x=Ue(o),v=Ne(p);i.useEffect(()=>{const C=m;if(!C)return;const R=window.HTMLInputElement.prototype,w=Object.getOwnPropertyDescriptor(R,"checked").set,k=!d.current;if(x!==o&&w){const P=new Event("click",{bubbles:k});C.indeterminate=O(o),w.call(C,O(o)?!1:o),C.dispatchEvent(P)}},[m,x,o,d]);const g=i.useRef(O(o)?!1:o);return e.jsx(K.input,{type:"checkbox","aria-hidden":!0,defaultChecked:A??g.current,required:l,disabled:u,name:_,value:s,form:r,...n,tabIndex:-1,ref:E,style:{...n.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});ce.displayName=le;function ca(t){return typeof t=="function"}function O(t){return t==="indeterminate"}function de(t){return O(t)?"indeterminate":t?"checked":"unchecked"}const me=i.forwardRef(({className:t,...n},c)=>e.jsx(V,{ref:c,className:B("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...n,children:e.jsx(ne,{className:B("flex items-center justify-center text-current"),children:e.jsx(te,{className:"h-4 w-4"})})}));me.displayName=V.displayName;const da=[{id:"artigo_juridico",name:"Artigo Jurídico",icon:"Scale",description:"Estrutura completa para análises e artigos técnicos",defaultTags:["artigo","analise"],content_html:`<article class="post-template post-template--artigo-juridico" itemscope itemtype="https://schema.org/Article">
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
`}],ma={Scale:e.jsx(Ye,{className:"w-5 h-5"}),Newspaper:e.jsx(oa,{className:"w-5 h-5"}),FileSearch:e.jsx(ia,{className:"w-5 h-5"}),FileText:e.jsx(se,{className:"w-5 h-5"})};function pa({onSelect:t,hasContent:n}){const[c,p]=i.useState(!1),[d,o]=i.useState(null),[A,l]=i.useState(!1),u=r=>{o(r),n?l(!0):(t(r),p(!1))},_=()=>{d&&(t(d),p(!1),l(!1),o(null))},s=()=>{l(!1),o(null)};return e.jsxs(Be,{open:c,onOpenChange:p,children:[e.jsx(Ke,{asChild:!0,children:e.jsxs(I,{type:"button",variant:"outline",size:"sm",children:[e.jsx(se,{className:"w-4 h-4 mr-2"}),"Usar template"]})}),e.jsxs(Ge,{className:"max-w-2xl",children:[e.jsxs(Ve,{children:[e.jsx(Qe,{children:"Escolher Template"}),e.jsx(ze,{children:"Selecione um modelo pré-formatado para começar seu artigo."})]}),A?e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg",children:[e.jsx("p",{className:"text-amber-600 dark:text-amber-400 font-medium mb-2",children:"⚠️ Atenção"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Você já tem conteúdo no editor. Usar este template irá substituir todo o conteúdo atual. Deseja continuar?"})]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(I,{type:"button",variant:"outline",onClick:s,children:"Cancelar"}),e.jsx(I,{type:"button",onClick:_,children:"Substituir conteúdo"})]})]}):e.jsx("div",{className:"grid gap-3 py-4",children:da.map(r=>e.jsxs("button",{type:"button",onClick:()=>u(r),className:B("flex items-start gap-4 p-4 rounded-lg border border-border","bg-card hover:bg-accent/50 transition-colors text-left","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"),children:[e.jsx("div",{className:"p-2 rounded-md bg-primary/10 text-primary shrink-0",children:ma[r.icon]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-medium text-foreground",children:r.name}),e.jsx("p",{className:"text-sm text-muted-foreground mt-0.5",children:r.description}),e.jsx("div",{className:"flex gap-1.5 mt-2",children:r.defaultTags.map(m=>e.jsxs("span",{className:"px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",children:["#",m]},m))})]}),e.jsx(te,{className:"w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]},r.id))})]})]})}function ua(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,100)}function ha({post:t,isEditing:n}){const c=xe(),p=Oe(),d=Pe(),o=Re(),A=Le(),{toast:l}=be(),{data:u}=ye(),{data:_}=ke((t==null?void 0:t.id)||""),[s,r]=i.useState({title:(t==null?void 0:t.title)||"",slug:(t==null?void 0:t.slug)||"",excerpt:(t==null?void 0:t.excerpt)||"",content_html:(t==null?void 0:t.content_html)||"",cover_image_url:(t==null?void 0:t.cover_image_url)||"",author_name:(t==null?void 0:t.author_name)||"Mariana Lima",published:(t==null?void 0:t.published)||!1,published_at:(t==null?void 0:t.published_at)||null,tags:(t==null?void 0:t.tags)||[],featured:(t==null?void 0:t.featured)||!1,send_newsletter_on_publish:(t==null?void 0:t.send_newsletter_on_publish)||!1,newsletter_subject:(t==null?void 0:t.newsletter_subject)||""}),[m,S]=i.useState([]),[E,x]=i.useState(""),[v,g]=i.useState(!1),[C,R]=i.useState(!1),[y,w]=i.useState("visual"),[k,P]=i.useState("idle"),[Q,pe]=i.useState(null),M=i.useRef(null),[L,ue]=i.useState((t==null?void 0:t.id)||null),F=i.useRef(!1);i.useEffect(()=>{_&&S(_.map(a=>a.id))},[_]),i.useEffect(()=>{!n&&s.title&&r(a=>({...a,slug:ua(s.title)}))},[s.title,n]),i.useEffect(()=>{F.current=!0},[s,m]);const z=i.useCallback(async()=>{if(!(!s.title.trim()||!s.content_html.trim())&&!s.published&&F.current){P("saving");try{const a={...s,published:!1,published_at:s.published_at};if(L)await d.mutateAsync({id:L,...a});else{const h=await p.mutateAsync(a);ue(h.id),m.length>0&&await o.mutateAsync({postId:h.id,categoryIds:m})}F.current=!1,P("saved"),pe(new Date),setTimeout(()=>P("idle"),3e3)}catch(a){console.error("Auto-save failed:",a),P("error"),setTimeout(()=>P("idle"),3e3)}}},[s,L,m,p,d,o]);i.useEffect(()=>(M.current&&clearInterval(M.current),M.current=setInterval(()=>{z()},3e4),()=>{M.current&&clearInterval(M.current)}),[z]);const f=(a,h)=>{r(b=>({...b,[a]:h}))},he=a=>{S(h=>h.includes(a)?h.filter(b=>b!==a):[...h,a])},Y=()=>{const a=E.trim().toLowerCase().replace(/[^a-z0-9-]/g,"");a&&!s.tags.includes(a)&&(f("tags",[...s.tags,a]),x(""))},_e=a=>{f("tags",s.tags.filter(h=>h!==a))},ge=a=>{a.key==="Enter"&&(a.preventDefault(),Y())},Ce=a=>{r(h=>({...h,content_html:a.content_html,tags:[...new Set([...h.tags,...a.defaultTags])]})),l({title:"Template aplicado!",description:`O template "${a.name}" foi carregado.`})},X=async(a=!1)=>{var h;if(!s.title.trim()){l({title:"Título obrigatório",description:"Por favor, insira um título para o post.",variant:"destructive"});return}if(!s.content_html.trim()){l({title:"Conteúdo obrigatório",description:"Por favor, insira o conteúdo do post.",variant:"destructive"});return}R(!0);try{const b={...s,published:a||s.published,published_at:a&&!s.published_at?new Date().toISOString():s.published_at};let j;if(n&&t?(await d.mutateAsync({id:t.id,...b}),j=t.id,l({title:"Post atualizado!",description:a?"O artigo foi publicado.":"Alterações salvas."})):L?(await d.mutateAsync({id:L,...b}),j=L,l({title:a?"Post publicado!":"Rascunho salvo!",description:a?"O artigo está disponível no blog.":"Você pode continuar editando depois."})):(j=(await p.mutateAsync(b)).id,l({title:a?"Post publicado!":"Rascunho salvo!",description:a?"O artigo está disponível no blog.":"Você pode continuar editando depois."})),(m.length>0||_&&_.length>0)&&await o.mutateAsync({postId:j,categoryIds:m}),a&&s.send_newsletter_on_publish)try{const N=((h=s.newsletter_subject)==null?void 0:h.trim())||s.title,U=`https://marianalima.adv.br/blog/${s.slug}`,Ae=Me({title:s.title,content:s.content_html,coverImageUrl:s.cover_image_url,postUrl:U});await A.mutateAsync({subject:N,html:Ae,post_id:j}),l({title:"Campanha de newsletter criada!",description:"Acesse Campanhas para disparar o envio."})}catch(N){const U=(N==null?void 0:N.message)||(N==null?void 0:N.details)||JSON.stringify(N);console.error("Failed to create newsletter campaign:",U,N),l({title:"Post publicado, mas erro na campanha",description:`Erro: ${U}. Tente criar manualmente.`,variant:"destructive"})}c("/admin")}catch(b){const j=Xe(b,"Não foi possível salvar o post.");l({title:"Erro ao salvar",description:j,variant:"destructive"})}finally{R(!1)}},fe=()=>s.published?null:e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[k==="saving"&&e.jsxs(e.Fragment,{children:[e.jsx(ta,{className:"w-3 h-3 animate-spin"}),e.jsx("span",{children:"Salvando..."})]}),k==="saved"&&e.jsxs(e.Fragment,{children:[e.jsx(sa,{className:"w-3 h-3 text-green-500"}),e.jsx("span",{children:"Rascunho salvo"})]}),k==="error"&&e.jsx("span",{className:"text-destructive",children:"Erro ao salvar"}),k==="idle"&&Q&&e.jsxs("span",{children:["Último salvamento: ",Q.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})]})]});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{htmlFor:"title",children:"Título *"}),e.jsx(pa,{onSelect:Ce,hasContent:!!s.content_html.trim()})]}),e.jsx(D,{id:"title",value:s.title,onChange:a=>f("title",a.target.value),placeholder:"Título do artigo",className:"text-lg"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{htmlFor:"slug",children:"Slug (URL)"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"/blog/"}),e.jsx(D,{id:"slug",value:s.slug,onChange:a=>f("slug",a.target.value),placeholder:"url-do-artigo"})]})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{htmlFor:"excerpt",children:"Resumo (opcional)"}),e.jsx(J,{id:"excerpt",value:s.excerpt,onChange:a=>f("excerpt",a.target.value),placeholder:"Breve descrição do artigo...",rows:3,maxLength:300}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[s.excerpt.length,"/300 caracteres"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"Imagem de Capa (opcional)"}),e.jsx(We,{value:s.cover_image_url,onChange:a=>f("cover_image_url",a),aspectRatio:"video"})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(T,{children:"Categorias"}),e.jsxs("div",{className:"flex flex-wrap gap-3 p-3 border border-border rounded-lg bg-muted/20",children:[u==null?void 0:u.map(a=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(me,{id:`category-${a.id}`,checked:m.includes(a.id),onCheckedChange:()=>he(a.id)}),e.jsx("label",{htmlFor:`category-${a.id}`,className:"text-sm font-medium leading-none cursor-pointer",style:{color:a.color},children:a.name})]},a.id)),(!u||u.length===0)&&e.jsx("p",{className:"text-sm text-muted-foreground",children:"Nenhuma categoria disponível"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(T,{children:"Tags"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(D,{value:E,onChange:a=>x(a.target.value),onKeyDown:ge,placeholder:"Adicionar tag...",className:"flex-1"}),e.jsx(I,{type:"button",variant:"outline",size:"icon",onClick:Y,disabled:!E.trim(),children:e.jsx($e,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 min-h-[40px] p-2 border border-border rounded-lg bg-muted/20",children:[s.tags.map(a=>e.jsxs(He,{variant:"secondary",className:"flex items-center gap-1",children:["#",a,e.jsx("button",{type:"button",onClick:()=>_e(a),className:"ml-1 hover:text-destructive",children:e.jsx(Se,{className:"w-3 h-3"})})]},a)),s.tags.length===0&&e.jsx("span",{className:"text-sm text-muted-foreground",children:"Nenhuma tag"})]})]})]})]}),e.jsxs("div",{className:"max-w-xs",children:[e.jsx(T,{htmlFor:"author_name",children:"Autor"}),e.jsx(D,{id:"author_name",value:s.author_name,onChange:a=>f("author_name",a.target.value),placeholder:"Nome do autor"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{children:"Conteúdo *"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(De,{value:y,onValueChange:a=>w(a),children:e.jsxs(we,{className:"h-8",children:[e.jsx(Z,{value:"visual",className:"text-xs px-3",children:"Visual"}),e.jsx(Z,{value:"html",className:"text-xs px-3",children:"HTML"})]})}),e.jsxs(I,{type:"button",variant:"outline",size:"sm",onClick:()=>g(!v),children:[v?e.jsx(Je,{className:"w-4 h-4 mr-1"}):e.jsx(Ze,{className:"w-4 h-4 mr-1"}),v?"Editar":"Preview"]})]})]}),v?e.jsx("div",{className:"border border-border rounded-lg p-6 min-h-[400px] bg-card",children:e.jsx(Fe,{html:s.content_html})}):y==="visual"?e.jsx(qe,{content:s.content_html,onChange:a=>f("content_html",a),placeholder:"Comece a escrever seu artigo..."}):e.jsx(J,{id:"content_html",value:s.content_html,onChange:a=>f("content_html",a.target.value),placeholder:"<p>Conteúdo do artigo em HTML...</p>",className:"min-h-[400px] font-mono text-sm"})]}),e.jsxs("div",{className:"space-y-4 border border-border rounded-lg p-4 bg-muted/10",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(W,{id:"send_newsletter_on_publish",checked:s.send_newsletter_on_publish,onCheckedChange:a=>f("send_newsletter_on_publish",a)}),e.jsx(T,{htmlFor:"send_newsletter_on_publish",className:"cursor-pointer",children:"Enviar para newsletter ao publicar"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{htmlFor:"newsletter_subject",children:"Assunto do e-mail"}),e.jsx(D,{id:"newsletter_subject",value:s.newsletter_subject,onChange:a=>f("newsletter_subject",a.target.value),placeholder:s.title||"Assunto baseado no título do post",disabled:!s.send_newsletter_on_publish}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Se deixar vazio, o assunto será o título do post."})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-4 border-t border-border",children:[e.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(W,{id:"published",checked:s.published,onCheckedChange:a=>f("published",a)}),e.jsx(T,{htmlFor:"published",className:"cursor-pointer",children:s.published?"Publicado":"Rascunho"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(W,{id:"featured",checked:s.featured,onCheckedChange:a=>f("featured",a)}),e.jsx(T,{htmlFor:"featured",className:"cursor-pointer text-primary",children:"⭐ Destaque"})]}),fe()]}),e.jsxs("div",{className:"flex gap-3 sm:ml-auto",children:[e.jsx(I,{type:"button",variant:"outline",onClick:()=>c("/admin"),children:"Cancelar"}),e.jsxs(I,{type:"button",variant:"secondary",onClick:()=>X(!1),disabled:C,children:[e.jsx(ea,{className:"w-4 h-4 mr-2"}),"Salvar rascunho"]}),e.jsxs(I,{type:"button",onClick:()=>X(!0),disabled:C,children:[e.jsx(aa,{className:"w-4 h-4 mr-2"}),n?"Atualizar":"Publicar"]})]})]})]})}const tt=()=>{const{id:t}=Ie(),n=!!t,{data:c,isLoading:p}=je(t||"");return n&&p?e.jsxs("div",{className:"space-y-4",children:[e.jsx(q,{className:"h-10 w-full"}),e.jsx(q,{className:"h-10 w-full"}),e.jsx(q,{className:"h-40 w-full"})]}):e.jsx(ha,{post:c||void 0,isEditing:n})};export{tt as default};
