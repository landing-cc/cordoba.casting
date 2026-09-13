(function(){
  const defaults=window.CC_DEFAULT_CONTENT;
  const key='cc_site_content_v4';
  const stored=localStorage.getItem(key);
  let content=defaults;
  try{ if(stored) content=deepMerge(structuredClone(defaults), JSON.parse(stored)); }catch(e){}
  window.CC_CONTENT=content;

  function deepMerge(target, source){
    if(Array.isArray(source)) return source;
    if(source && typeof source==='object') Object.keys(source).forEach(k=>{
      if(source[k] && typeof source[k]==='object' && !Array.isArray(source[k])) target[k]=deepMerge(target[k]||{},source[k]); else target[k]=source[k];
    });
    return target;
  }
  const esc=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const q=s=>document.querySelector(s);
  const site=content.site;
  document.querySelectorAll('[data-site]').forEach(el=>{const k=el.dataset.site; if(site[k]!=null) el.textContent=site[k];});
  document.querySelectorAll('[data-href-site]').forEach(el=>{const k=el.dataset.hrefSite; if(site[k]) el.href=site[k];});
  const hero=q('#hero-title'); if(hero) hero.innerHTML=esc(site.heroTitle).replace(/\n/g,'<br>');

  const grid=q('#course-grid');
  if(grid){
    grid.innerHTML=content.courses.sort((a,b)=>a.order-b.order).map((c,i)=>`<a class="course-card accent-${esc(c.accent)} ${c.featured?'featured':''}" href="course.html?c=${encodeURIComponent(c.slug)}">
      <div class="course-visual"><span class="course-index">${String(i+1).padStart(2,'0')}</span><span class="course-status">${esc(c.status)}</span><div class="lens-ring"></div><div class="focus-mark">+</div></div>
      <div class="course-body"><p class="eyebrow">${esc(c.eyebrow)}</p><h3>${esc(c.title)}${c.subtitle?`<em>${esc(c.subtitle)}</em>`:''}</h3><p class="course-benefit">${esc(c.benefit)}</p><div class="course-meta"><span>${esc(c.duration)}</span><span>${esc(c.mode)}</span></div><div class="course-footer"><span>${esc(c.requirement)}</span><b>Conocer el curso ↗</b></div></div>
    </a>`).join('');
  }
  const tgrid=q('#testimonial-grid');
  if(tgrid){ tgrid.innerHTML=content.testimonials.map((t,i)=>`<article class="testimonial-card ${t.featured?'testimonial-featured':''}"><div class="testimonial-media"><span class="play">▶</span><span class="video-label">VIDEO TESTIMONIO</span></div><div class="testimonial-copy"><small>${esc(t.course)}</small><blockquote>“${esc(t.quote)}”</blockquote><p>${esc(t.name)}</p></div></article>`).join(''); }
  const ngrid=q('#news-grid');
  if(ngrid){ ngrid.innerHTML=content.news.map((n,i)=>`<a class="news-card ${i===0?'news-featured':''}" href="${esc(n.link)}"><div class="news-date">${esc(n.date)}</div><small>${esc(n.tag)}</small><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p><b>Leer más ↗</b></a>`).join(''); }
  const sgrid=q('#services-grid');
  if(sgrid){ sgrid.innerHTML=content.services.map((s,i)=>`<article class="service-card"><span class="service-no">0${i+1}</span><div><small>${esc(s.eyebrow)}</small><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p><a href="https://wa.me/54${esc(site.whatsapp)}" target="_blank" rel="noopener">${esc(s.cta)} ↗</a></div></article>`).join(''); }
  const cgrid=q('#community-grid');
  if(cgrid){ cgrid.innerHTML=content.community.map((c,i)=>`<a class="community-card community-${i+1}" href="${esc(c.link)}"><small>${esc(c.label)}</small><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p><b>Explorar ↗</b></a>`).join(''); }

  const menu=q('.menu-button'), nav=q('.nav');
  if(menu&&nav) menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);};
})();
