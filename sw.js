/* Service worker mínimo — instalável + fallback offline da navegação.
   Network-first: nunca serve assets desatualizados (build com hash). */
const SHELL = "mladv-shell-v2";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(SHELL).then((c) => c.add("/admin")).catch(() => {}));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== SHELL).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  // Só intercepta navegação: tenta a rede; se offline, usa o shell cacheado.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(() => caches.match("/admin").then((r) => r || caches.match("/"))),
    );
  }
});
