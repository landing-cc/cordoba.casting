const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.desktop-nav');
btn?.addEventListener('click',()=>{
  const open=btn.getAttribute('aria-expanded')==='true';
  btn.setAttribute('aria-expanded',String(!open));
  if(!open){nav.style.display='flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='0';nav.style.right='0';nav.style.padding='24px';nav.style.background='#050619';nav.style.flexDirection='column'}else{nav.removeAttribute('style')}
});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'none'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'});io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.section-heading,.course-card,.level-card,.service-row,.method-copy,.community-links,.video-placeholder,.faq-list').forEach(el=>io.observe(el));
