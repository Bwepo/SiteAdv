import{c as n}from"./index-BYSmSza6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=n("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),s=[/permission denied/i,/not authorized/i,/not allowed/i,/row-level security/i,/requires authentication/i,/insufficient privilege/i],r=new Set(["42501","PGRST301","PGRST302","PGRST401","PGRST403"]);function d(t){if(!t)return!1;const e=typeof t=="string"?t:t instanceof Error||typeof t.message=="string"?t.message:"",a=typeof t.code=="string"?t.code:void 0,i=typeof t.status=="number"?t.status:void 0;return a&&r.has(a)||i&&[401,403].includes(i)?!0:s.some(o=>o.test(e))}function c(t,e){return d(t)?"Sem permissão.":t instanceof Error&&t.message?t.message:typeof t=="string"&&t.trim()?t:e}function g({title:t,content:e,coverImageUrl:a,postUrl:i}){const o=a?`<tr>
        <td style="padding:0;">
          <img src="${a}" alt="${t}" width="600"
               style="width:100%;max-width:600px;height:auto;display:block;">
        </td>
      </tr>`:"";return`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t}</title>
  <style>
    body { margin:0; padding:0; -webkit-text-size-adjust:100%; }
    img { border:0; outline:none; text-decoration:none; }
    a { color:#8b6f47; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f1ec;font-family:Georgia,'Times New Roman',Times,serif;color:#1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background-color:#f4f1ec;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">

          <!-- Logo -->
          <tr>
            <td style="padding:28px 32px 20px;text-align:center;">
              <img src="https://marianalima.adv.br/logo-horizontal.png"
                   alt="Mariana Lima Advocacia" width="180"
                   style="max-width:180px;height:auto;">
            </td>
          </tr>

          ${o}

          <!-- Title -->
          <tr>
            <td style="padding:28px 32px 12px;">
              <h1 style="margin:0;font-size:24px;line-height:1.3;color:#1a1a1a;font-weight:700;">
                ${t}
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:0 32px 24px;font-size:16px;line-height:1.7;color:#333;">
              ${e}
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 32px;text-align:center;">
              <a href="${i}"
                 style="display:inline-block;padding:12px 28px;background-color:#8b6f47;color:#ffffff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:600;letter-spacing:0.5px;">
                Ler artigo completo
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background-color:#faf8f5;border-top:1px solid #e8e2d9;">
              <p style="margin:0 0 8px;font-size:13px;color:#64748b;line-height:1.5;">
                <strong>Mariana Lima Advocacia</strong><br>
                contato@marianalima.adv.br &middot;
                <a href="https://marianalima.adv.br" style="color:#8b6f47;text-decoration:none;">
                  marianalima.adv.br
                </a>
              </p>
              <hr style="border:none;border-top:1px solid #e8e2d9;margin:12px 0;">
              <p style="font-size:11px;color:#94a3b8;margin:0;">
                Se não quiser mais receber nossos e-mails,
                <a href="{{unsubscribe_url}}" style="color:#94a3b8;">
                  clique aqui para se descadastrar
                </a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`}export{p as S,g as b,c as g};
