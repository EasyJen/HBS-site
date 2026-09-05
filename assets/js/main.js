const toggle=document.querySelector('.menu'),nav=document.querySelector('#nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{toggle?.setAttribute('aria-expanded','false');nav?.classList.remove('open')}));
// Content stays visible when JavaScript or motion support is unavailable.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const groups=document.querySelectorAll('.hero-copy, .platform-head, .intro-copy, .experience-copy, .outcomes-copy, .contact-copy');
  groups.forEach(group=>{group.classList.remove('reveal');Array.from(group.children).forEach((el,index)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${Math.min(index,3)*70}ms`);});});
  document.querySelectorAll('.journey article, .control-points article, .proof-strip > div, .experience-copy li').forEach((el,index)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${index%3*80}ms`);});
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{entry.target.classList.toggle('shown',entry.isIntersecting);});},{threshold:0.08,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  document.documentElement.classList.add('motion-ready');
  reducedMotion.addEventListener('change',event=>{if(event.matches){document.documentElement.classList.remove('motion-ready');observer.disconnect();}});
}


// Restrict the gentle paper distortion to the upper portion of the box.
const paperMap=document.querySelector('#packing-drift feDisplacementMap');
let paperFrame;
function driftPaper(time){if(reducedMotion.matches){paperMap?.setAttribute('scale','0');return;}paperMap?.setAttribute('scale',String(1.5+1.5*Math.sin(time/1600)));paperFrame=requestAnimationFrame(driftPaper);}
if(paperMap&&!reducedMotion.matches)paperFrame=requestAnimationFrame(driftPaper);
reducedMotion.addEventListener('change',()=>{cancelAnimationFrame(paperFrame);if(reducedMotion.matches)paperMap?.setAttribute('scale','0');else if(paperMap)paperFrame=requestAnimationFrame(driftPaper);});
