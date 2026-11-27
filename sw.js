/* Copiloto - service worker: abre offline (abas 1-3) e nunca guarda dados do Supabase */
const V = 'copiloto-v1';
const SHELL = ['./', './index.html', './privacidade.html', './manifest.json', './icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;            // Supabase, mapa, CDNs: sempre direto à rede
  e.respondWith(
    fetch(r).then(res => {                             // rede primeiro: o utilizador recebe sempre a versão nova
      if (res && res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
      return res;
    }).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
