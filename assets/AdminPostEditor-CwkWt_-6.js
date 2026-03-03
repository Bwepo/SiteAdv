import{c as M,r as i,j as e,e as G,u as ae,i as te,X as se,k as ie}from"./index-oUf6seke.js";import{e as oe,c as re,f as ne}from"./usePosts-PU-5oFiV.js";import{a as le,u as ce,b as de}from"./useCategories-DpqPHE0x.js";import{f as me}from"./useNewsletter-oXMft9F7.js";import{S as pe,b as ue,g as he}from"./newsletterTemplate-BsR4fwXx.js";import{B as T}from"./button-CEhxRctR.js";import{I as S}from"./input-Cr9rts63.js";import{L as C}from"./label-YdeQsD3r.js";import{T as K}from"./textarea-BhYKzC3y.js";import{S as R}from"./switch-BpyutKRr.js";import{C as ge}from"./checkbox-D9QVJVU0.js";import{P as _e,B as Ce}from"./badge--D-kXC5b.js";import{B as Ae,I as Te,U as fe,S as Ne,H as xe,a as Ee,L as ve,A as be,b as Se,c as Ie,d as je}from"./ImageUploader-OzM00VqF.js";import{L as Oe}from"./link-CuEFoPkS.js";import{L as Pe}from"./list-BVqNq4-h.js";import{D as ye,b as Le,a as Re,c as De,d as Me,e as ke}from"./dialog-DGSASet0.js";import{F as Q}from"./file-text-Ddgugt_F.js";import{C as we}from"./check-D4gJmi2a.js";import{S as Ue}from"./scale-BVE_1FNZ.js";import{E as He}from"./tabs-CWhDkoUr.js";import{S as Fe}from"./send-Dp2AoB-r.js";import{L as We}from"./loader-circle-B5IZLbRS.js";import{C as qe}from"./circle-check-big-BUF7gf9u.js";import{S as D}from"./skeleton-D-Tm44_E.js";import"./useQuery-D1nOgqDq.js";import"./useMutation-BHHAGjK8.js";import"./index-IF9OSuBU.js";import"./index-C0WXZKVw.js";import"./index-CAmaOKMm.js";import"./index-BXMvoR4p.js";import"./index-bBWlzwCz.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=M("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=M("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=M("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);function Qe({html:s,onChange:g}){const c=i.useRef(null),p=i.useRef(!1);i.useEffect(()=>{c.current&&!p.current&&c.current.innerHTML!==s&&(c.current.innerHTML=s),p.current=!1},[s]);const u=i.useCallback(()=>{c.current&&(p.current=!0,g(c.current.innerHTML))},[g]),r=i.useCallback((t,n)=>{var m;document.execCommand(t,!1,n),u(),(m=c.current)==null||m.focus()},[u]),N=i.useCallback(t=>{var n;document.execCommand("formatBlock",!1,t),u(),(n=c.current)==null||n.focus()},[u]),d=i.useCallback(()=>{const t=window.prompt("URL do link:");t&&r("createLink",t)},[r]),o=({onClick:t,title:n,children:m})=>e.jsx(T,{type:"button",variant:"ghost",size:"icon",className:"h-7 w-7 transition-colors hover:bg-accent/20 hover:text-accent",onMouseDown:I=>{I.preventDefault(),t()},title:n,children:m}),_=()=>e.jsx("div",{className:"w-px h-5 bg-border mx-0.5"});return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"sticky top-0 z-[60] flex items-center gap-0.5 flex-wrap bg-popover/95 backdrop-blur-sm border border-border rounded-xl shadow-sm px-2 py-1.5 mb-2",onMouseDown:t=>t.preventDefault(),children:[e.jsx(o,{onClick:()=>r("bold"),title:"Negrito (Ctrl+B)",children:e.jsx(Ae,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>r("italic"),title:"Itálico (Ctrl+I)",children:e.jsx(Te,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>r("underline"),title:"Sublinhado (Ctrl+U)",children:e.jsx(fe,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>r("strikeThrough"),title:"Tachado",children:e.jsx(Ne,{className:"w-3.5 h-3.5"})}),e.jsx(_,{}),e.jsx(o,{onClick:d,title:"Inserir link",children:e.jsx(Oe,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>r("unlink"),title:"Remover link",children:e.jsx(Ge,{className:"w-3.5 h-3.5"})}),e.jsx(_,{}),e.jsx(o,{onClick:()=>N("<h2>"),title:"Título H2",children:e.jsx(xe,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>N("<h3>"),title:"Título H3",children:e.jsx(Ee,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>N("<p>"),title:"Parágrafo",children:e.jsx("span",{className:"text-[10px] font-bold",children:"P"})}),e.jsx(_,{}),e.jsx(o,{onClick:()=>r("insertUnorderedList"),title:"Lista",children:e.jsx(Pe,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>r("insertOrderedList"),title:"Lista numerada",children:e.jsx(ve,{className:"w-3.5 h-3.5"})}),e.jsx(_,{}),e.jsx(o,{onClick:()=>r("justifyLeft"),title:"Alinhar esquerda",children:e.jsx(be,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>r("justifyCenter"),title:"Centralizar",children:e.jsx(Se,{className:"w-3.5 h-3.5"})}),e.jsx(o,{onClick:()=>r("justifyRight"),title:"Alinhar direita",children:e.jsx(Ie,{className:"w-3.5 h-3.5"})})]}),e.jsx("div",{ref:c,contentEditable:!0,suppressContentEditableWarning:!0,onInput:u,className:G("border border-border rounded-lg p-6 min-h-[400px] bg-card focus:outline-none focus:ring-2 focus:ring-accent/30","prose prose-lg max-w-none","reading-prose font-serif text-foreground","prose-headings:font-serif prose-headings:text-foreground prose-headings:tracking-tight","prose-h2:text-[1.4rem] sm:prose-h2:text-[1.6rem] prose-h2:leading-[1.25] prose-h2:mt-10 prose-h2:mb-4 prose-h2:pt-6 prose-h2:border-t prose-h2:border-border/60","prose-h3:text-[1.15rem] sm:prose-h3:text-[1.3rem] prose-h3:leading-[1.3] prose-h3:mt-8 prose-h3:mb-3","prose-p:text-[1.05rem] prose-p:leading-[1.85] prose-p:my-5 prose-p:text-foreground/85","prose-a:text-accent prose-a:underline prose-a:underline-offset-[3px] prose-a:decoration-accent/40","prose-li:text-foreground/85 prose-li:leading-[1.75] prose-li:my-1","prose-strong:text-foreground prose-strong:font-semibold","prose-img:rounded-xl prose-img:shadow-md prose-img:my-8","prose-hr:border-border prose-hr:my-10","dark:prose-invert")})]})}const Ve=[{id:"artigo_juridico",name:"Artigo Jurídico",icon:"Scale",description:"Estrutura completa para análises e artigos técnicos",defaultTags:["artigo","analise"],content_html:`<article class="post-template post-template--artigo-juridico" itemscope itemtype="https://schema.org/Article">
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
`}],ze={Scale:e.jsx(Ue,{className:"w-5 h-5"}),Newspaper:e.jsx(Ke,{className:"w-5 h-5"}),FileSearch:e.jsx(Be,{className:"w-5 h-5"}),FileText:e.jsx(Q,{className:"w-5 h-5"})};function Ye({onSelect:s,hasContent:g}){const[c,p]=i.useState(!1),[u,r]=i.useState(null),[N,d]=i.useState(!1),o=n=>{r(n),g?d(!0):(s(n),p(!1))},_=()=>{u&&(s(u),p(!1),d(!1),r(null))},t=()=>{d(!1),r(null)};return e.jsxs(ye,{open:c,onOpenChange:p,children:[e.jsx(Le,{asChild:!0,children:e.jsxs(T,{type:"button",variant:"outline",size:"sm",children:[e.jsx(Q,{className:"w-4 h-4 mr-2"}),"Usar template"]})}),e.jsxs(Re,{className:"max-w-2xl",children:[e.jsxs(De,{children:[e.jsx(Me,{children:"Escolher Template"}),e.jsx(ke,{children:"Selecione um modelo pré-formatado para começar seu artigo."})]}),N?e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg",children:[e.jsx("p",{className:"text-amber-600 dark:text-amber-400 font-medium mb-2",children:"⚠️ Atenção"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Você já tem conteúdo no editor. Usar este template irá substituir todo o conteúdo atual. Deseja continuar?"})]}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(T,{type:"button",variant:"outline",onClick:t,children:"Cancelar"}),e.jsx(T,{type:"button",onClick:_,children:"Substituir conteúdo"})]})]}):e.jsx("div",{className:"grid gap-3 py-4",children:Ve.map(n=>e.jsxs("button",{type:"button",onClick:()=>o(n),className:G("flex items-start gap-4 p-4 rounded-lg border border-border","bg-card hover:bg-accent/50 transition-colors text-left","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"),children:[e.jsx("div",{className:"p-2 rounded-md bg-primary/10 text-primary shrink-0",children:ze[n.icon]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-medium text-foreground",children:n.name}),e.jsx("p",{className:"text-sm text-muted-foreground mt-0.5",children:n.description}),e.jsx("div",{className:"flex gap-1.5 mt-2",children:n.defaultTags.map(m=>e.jsxs("span",{className:"px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",children:["#",m]},m))})]}),e.jsx(we,{className:"w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"})]},n.id))})]})]})}function Xe(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,100)}function Je({post:s,isEditing:g}){const c=ae(),p=oe(),u=re(),r=le(),N=me(),{toast:d}=te(),{data:o}=ce(),{data:_}=de((s==null?void 0:s.id)||""),[t,n]=i.useState({title:(s==null?void 0:s.title)||"",slug:(s==null?void 0:s.slug)||"",excerpt:(s==null?void 0:s.excerpt)||"",content_html:(s==null?void 0:s.content_html)||"",cover_image_url:(s==null?void 0:s.cover_image_url)||"",author_name:(s==null?void 0:s.author_name)||"Mariana Lima",published:(s==null?void 0:s.published)||!1,published_at:(s==null?void 0:s.published_at)||null,tags:(s==null?void 0:s.tags)||[],featured:(s==null?void 0:s.featured)||!1,send_newsletter_on_publish:(s==null?void 0:s.send_newsletter_on_publish)||!1,newsletter_subject:(s==null?void 0:s.newsletter_subject)||""}),[m,I]=i.useState([]),[P,k]=i.useState(""),[w,U]=i.useState(!1),[y,H]=i.useState("html"),[j,v]=i.useState("idle"),[F,V]=i.useState(null),b=i.useRef(null),[E,z]=i.useState((s==null?void 0:s.id)||null),L=i.useRef(!1);i.useEffect(()=>{_&&I(_.map(a=>a.id))},[_]),i.useEffect(()=>{!g&&t.title&&n(a=>({...a,slug:Xe(t.title)}))},[t.title,g]),i.useEffect(()=>{L.current=!0},[t,m]);const W=i.useCallback(async()=>{if(!(!t.title.trim()||!t.content_html.trim())&&!t.published&&L.current){v("saving");try{const a={...t,published:!1,published_at:t.published_at};if(E)await u.mutateAsync({id:E,...a});else{const l=await p.mutateAsync(a);z(l.id),m.length>0&&await r.mutateAsync({postId:l.id,categoryIds:m})}L.current=!1,v("saved"),V(new Date),setTimeout(()=>v("idle"),3e3)}catch(a){console.error("Auto-save failed:",a),v("error"),setTimeout(()=>v("idle"),3e3)}}},[t,E,m,p,u,r]);i.useEffect(()=>(b.current&&clearInterval(b.current),b.current=setInterval(()=>{W()},3e4),()=>{b.current&&clearInterval(b.current)}),[W]);const h=(a,l)=>{n(f=>({...f,[a]:l}))},Y=a=>{I(l=>l.includes(a)?l.filter(f=>f!==a):[...l,a])},q=()=>{const a=P.trim().toLowerCase().replace(/[^a-z0-9-]/g,"");a&&!t.tags.includes(a)&&(h("tags",[...t.tags,a]),k(""))},X=a=>{h("tags",t.tags.filter(l=>l!==a))},J=a=>{a.key==="Enter"&&(a.preventDefault(),q())},$=a=>{n(l=>({...l,content_html:a.content_html,tags:[...new Set([...l.tags,...a.defaultTags])]})),d({title:"Template aplicado!",description:`O template "${a.name}" foi carregado.`})},B=async(a=!1)=>{var l;if(!t.title.trim()){d({title:"Título obrigatório",description:"Por favor, insira um título para o post.",variant:"destructive"});return}if(!t.content_html.trim()){d({title:"Conteúdo obrigatório",description:"Por favor, insira o conteúdo do post.",variant:"destructive"});return}U(!0);try{const f={...t,published:a||t.published,published_at:a&&!t.published_at?new Date().toISOString():t.published_at};let x;if(g&&s?(await u.mutateAsync({id:s.id,...f}),x=s.id,d({title:"Post atualizado!",description:a?"O artigo foi publicado.":"Alterações salvas."})):E?(await u.mutateAsync({id:E,...f}),x=E,d({title:a?"Post publicado!":"Rascunho salvo!",description:a?"O artigo está disponível no blog.":"Você pode continuar editando depois."})):(x=(await p.mutateAsync(f)).id,d({title:a?"Post publicado!":"Rascunho salvo!",description:a?"O artigo está disponível no blog.":"Você pode continuar editando depois."})),(m.length>0||_&&_.length>0)&&await r.mutateAsync({postId:x,categoryIds:m}),a&&t.send_newsletter_on_publish)try{const A=((l=t.newsletter_subject)==null?void 0:l.trim())||t.title,O=`https://marianalima.adv.br/blog/${t.slug}`,ee=ue({title:t.title,content:t.content_html,coverImageUrl:t.cover_image_url,postUrl:O});await N.mutateAsync({subject:A,html:ee,post_id:x}),d({title:"Campanha de newsletter criada!",description:"Acesse Campanhas para disparar o envio."})}catch(A){const O=(A==null?void 0:A.message)||(A==null?void 0:A.details)||JSON.stringify(A);console.error("Failed to create newsletter campaign:",O,A),d({title:"Post publicado, mas erro na campanha",description:`Erro: ${O}. Tente criar manualmente.`,variant:"destructive"})}c("/admin")}catch(f){const x=he(f,"Não foi possível salvar o post.");d({title:"Erro ao salvar",description:x,variant:"destructive"})}finally{U(!1)}},Z=()=>t.published?null:e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[j==="saving"&&e.jsxs(e.Fragment,{children:[e.jsx(We,{className:"w-3 h-3 animate-spin"}),e.jsx("span",{children:"Salvando..."})]}),j==="saved"&&e.jsxs(e.Fragment,{children:[e.jsx(qe,{className:"w-3 h-3 text-green-500"}),e.jsx("span",{children:"Rascunho salvo"})]}),j==="error"&&e.jsx("span",{className:"text-destructive",children:"Erro ao salvar"}),j==="idle"&&F&&e.jsxs("span",{children:["Último salvamento: ",F.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})]})]});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(C,{htmlFor:"title",children:"Título *"}),e.jsx(Ye,{onSelect:$,hasContent:!!t.content_html.trim()})]}),e.jsx(S,{id:"title",value:t.title,onChange:a=>h("title",a.target.value),placeholder:"Título do artigo",className:"text-lg"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{htmlFor:"slug",children:"Slug (URL)"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"/blog/"}),e.jsx(S,{id:"slug",value:t.slug,onChange:a=>h("slug",a.target.value),placeholder:"url-do-artigo"})]})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{htmlFor:"excerpt",children:"Resumo (opcional)"}),e.jsx(K,{id:"excerpt",value:t.excerpt,onChange:a=>h("excerpt",a.target.value),placeholder:"Breve descrição do artigo...",rows:3,maxLength:300}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[t.excerpt.length,"/300 caracteres"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{children:"Imagem de Capa (opcional)"}),e.jsx(je,{value:t.cover_image_url,onChange:a=>h("cover_image_url",a),aspectRatio:"video"})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(C,{children:"Categorias"}),e.jsxs("div",{className:"flex flex-wrap gap-3 p-3 border border-border rounded-lg bg-muted/20",children:[o==null?void 0:o.map(a=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(ge,{id:`category-${a.id}`,checked:m.includes(a.id),onCheckedChange:()=>Y(a.id)}),e.jsx("label",{htmlFor:`category-${a.id}`,className:"text-sm font-medium leading-none cursor-pointer",style:{color:a.color},children:a.name})]},a.id)),(!o||o.length===0)&&e.jsx("p",{className:"text-sm text-muted-foreground",children:"Nenhuma categoria disponível"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(C,{children:"Tags"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(S,{value:P,onChange:a=>k(a.target.value),onKeyDown:J,placeholder:"Adicionar tag...",className:"flex-1"}),e.jsx(T,{type:"button",variant:"outline",size:"icon",onClick:q,disabled:!P.trim(),children:e.jsx(_e,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 min-h-[40px] p-2 border border-border rounded-lg bg-muted/20",children:[t.tags.map(a=>e.jsxs(Ce,{variant:"secondary",className:"flex items-center gap-1",children:["#",a,e.jsx("button",{type:"button",onClick:()=>X(a),className:"ml-1 hover:text-destructive",children:e.jsx(se,{className:"w-3 h-3"})})]},a)),t.tags.length===0&&e.jsx("span",{className:"text-sm text-muted-foreground",children:"Nenhuma tag"})]})]})]})]}),e.jsxs("div",{className:"max-w-xs",children:[e.jsx(C,{htmlFor:"author_name",children:"Autor"}),e.jsx(S,{id:"author_name",value:t.author_name,onChange:a=>h("author_name",a.target.value),placeholder:"Nome do autor"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(C,{children:"Conteúdo *"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{type:"button",variant:y==="html"?"default":"outline",size:"sm",onClick:()=>H("html"),className:"text-xs",children:"HTML"}),e.jsxs(T,{type:"button",variant:y==="preview"?"default":"outline",size:"sm",onClick:()=>H("preview"),children:[e.jsx(He,{className:"w-4 h-4 mr-1"}),"Preview Editável"]})]})]}),y==="preview"?e.jsx(Qe,{html:t.content_html,onChange:a=>h("content_html",a)}):e.jsx(K,{id:"content_html",value:t.content_html,onChange:a=>h("content_html",a.target.value),placeholder:"<p>Conteúdo do artigo em HTML...</p>",className:"min-h-[400px] font-mono text-sm"})]}),e.jsxs("div",{className:"space-y-4 border border-border rounded-lg p-4 bg-muted/10",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{id:"send_newsletter_on_publish",checked:t.send_newsletter_on_publish,onCheckedChange:a=>h("send_newsletter_on_publish",a)}),e.jsx(C,{htmlFor:"send_newsletter_on_publish",className:"cursor-pointer",children:"Enviar para newsletter ao publicar"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{htmlFor:"newsletter_subject",children:"Assunto do e-mail"}),e.jsx(S,{id:"newsletter_subject",value:t.newsletter_subject,onChange:a=>h("newsletter_subject",a.target.value),placeholder:t.title||"Assunto baseado no título do post",disabled:!t.send_newsletter_on_publish}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Se deixar vazio, o assunto será o título do post."})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-4 border-t border-border",children:[e.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{id:"published",checked:t.published,onCheckedChange:a=>h("published",a)}),e.jsx(C,{htmlFor:"published",className:"cursor-pointer",children:t.published?"Publicado":"Rascunho"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{id:"featured",checked:t.featured,onCheckedChange:a=>h("featured",a)}),e.jsx(C,{htmlFor:"featured",className:"cursor-pointer text-primary",children:"⭐ Destaque"})]}),Z()]}),e.jsxs("div",{className:"flex gap-3 sm:ml-auto",children:[e.jsx(T,{type:"button",variant:"outline",onClick:()=>c("/admin"),children:"Cancelar"}),e.jsxs(T,{type:"button",variant:"secondary",onClick:()=>B(!1),disabled:w,children:[e.jsx(pe,{className:"w-4 h-4 mr-2"}),"Salvar rascunho"]}),e.jsxs(T,{type:"button",onClick:()=>B(!0),disabled:w,children:[e.jsx(Fe,{className:"w-4 h-4 mr-2"}),g?"Atualizar":"Publicar"]})]})]})]})}const Oa=()=>{const{id:s}=ie(),g=!!s,{data:c,isLoading:p}=ne(s||"");return g&&p?e.jsxs("div",{className:"space-y-4",children:[e.jsx(D,{className:"h-10 w-full"}),e.jsx(D,{className:"h-10 w-full"}),e.jsx(D,{className:"h-40 w-full"})]}):e.jsx(Je,{post:c||void 0,isEditing:g})};export{Oa as default};
