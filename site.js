// Effets du portfolio : apparition au défilement, halo qui suit la souris, compteurs, barre de navigation.
(() => {
  const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // barre de navigation plus opaque après le haut de page
  const nav = document.querySelector('.nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // menu sur téléphone
  const burger = document.querySelector('.burger');
  if (nav && burger) {
    const fermer = () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Ouvrir le menu'); };
    burger.addEventListener('click', () => {
      const ouvert = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(ouvert));
      burger.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    nav.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', fermer));
    addEventListener('keydown', (e) => { if (e.key === 'Escape') fermer(); });
  }

  // halo qui suit la souris sur les cartes
  document.querySelectorAll('.case-card, .mini, .facts li, .skills > div, .star-step, .meta div, .metrics li').forEach((el) => {
    el.classList.add('spot');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--x', `${e.clientX - r.left}px`);
      el.style.setProperty('--y', `${e.clientY - r.top}px`);
    });
  });

  if (calme || !('IntersectionObserver' in window)) return;

  // apparition douce, en cascade dans une même grille
  const cibles = document.querySelectorAll(
    'section h2, .section-lead, .sec-num, .facts li, .case-card, .mini, .skills > div, .timeline li, .contact .box,' +
    '.meta div, .metrics li, .video, .star-step, .diagram, .gallery figure, .pager'
  );
  cibles.forEach((el) => {
    const freres = [...el.parentElement.children];
    el.style.setProperty('--d', `${Math.min(freres.indexOf(el), 5) * 0.08}s`);
    el.classList.add('reveal');
  });
  const vu = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); vu.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  cibles.forEach((el) => vu.observe(el));

  // compteurs : « 1 798 » défile de 0 à 1 798 (les valeurs comme « 9 → 149 » restent telles quelles)
  const compte = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => {
      if (!e.isIntersecting) return;
      compte.unobserve(e.target);
      const el = e.target, texte = el.textContent.trim();
      if (!/^\d[\d\s  ]*$/.test(texte)) return;
      const fin = parseInt(texte.replace(/\D/g, ''), 10);
      if (fin < 10) return;
      const debut = performance.now(), duree = 1400;
      const fmt = (n) => n.toLocaleString('fr-FR').replace(/ /g, ' ');
      const pas = (t) => {
        const p = Math.min((t - debut) / duree, 1), ease = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(fin * ease));
        if (p < 1) requestAnimationFrame(pas); else el.textContent = texte;
      };
      requestAnimationFrame(pas);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.metrics strong').forEach((el) => compte.observe(el));
})();
