const V='kora-v23',SHELL=['./','./app.js','./app.css','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET')return;
  const u=new URL(r.url), same=u.origin===location.origin;
  // app files and images: cache first, refresh in background
  if(same||r.destination==='image'){
    e.respondWith(caches.open(V).then(async c=>{const m=await c.match(r,{ignoreSearch:false});
      const f=fetch(r).then(x=>{if(x.ok||x.type==='opaque')c.put(r,x.clone());return x}).catch(()=>m);
      return m||f}));return}
  // data APIs: network first, last good copy when offline
  e.respondWith(fetch(r).then(x=>{if(x.ok){const y=x.clone();caches.open(V).then(c=>c.put(r,y))}return x})
    .catch(()=>caches.match(r).then(m=>m||new Response('{}',{status:503,headers:{'content-type':'application/json'}}))))});
