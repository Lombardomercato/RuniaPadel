const data = {
  stats: [
    { value: '+120', label: 'torneos generados' },
    { value: '+2.400', label: 'jugadores organizados' },
    { value: '+35', label: 'clubes en planificación activa' }
  ],
  problem: [
    { icon: '⏱️', title: 'Horarios que no coinciden', text: 'Coordinar disponibilidad manualmente te frena cada fecha.' },
    { icon: '🔄', title: 'Jugadores que cambian todo', text: 'Una baja de último momento rompe llaves y turnos.' },
    { icon: '🏟️', title: 'Canchas que no alcanzan', text: 'Sin simulación previa, la logística se vuelve caótica.' },
    { icon: '📲', title: 'WhatsApp explotado', text: 'Demasiados mensajes y poca trazabilidad operativa.' }
  ],
  steps: [
    { title: 'Paso 1', subtitle: 'Cargás jugadores', text: 'Subís ranking, categorías y disponibilidad horaria.' },
    { title: 'Paso 2', subtitle: 'RUNIA procesa', text: 'El motor optimiza zonas, cruces, canchas y tiempos.' },
    { title: 'Paso 3', subtitle: 'Torneo listo', text: 'Obtenés fixture completo, llaves y horarios para compartir.' }
  ],
  solution: [
    { icon: '⚡', title: 'Generación automática', text: 'Arma zonas y cruces en segundos.' },
    { icon: '🧠', title: 'Inteligencia de horarios', text: 'Respeta disponibilidad de cada jugador.' },
    { icon: '📊', title: 'Ranking inteligente', text: 'Balancea niveles para mejorar competencia.' },
    { icon: '🏢', title: 'Escalabilidad multi club', text: 'Gestioná sedes y torneos simultáneos sin fricción.' }
  ],
  wowInput: ['Jugadores + ranking', 'Disponibilidad horaria', 'Cantidad de canchas'],
  wowOutput: ['Fixture completo', 'Horarios listos', 'Zonas equilibradas', 'Llaves armadas'],
  benefits: [
    'Organizás más torneos',
    'Reducís errores operativos',
    'Mejor experiencia para jugadores',
    'Escalás sin sumar más personal'
  ],
  pricing: [
    { name: 'BÁSICO', subtitle: 'Ideal para empezar', items: ['1 club', 'Hasta X jugadores'] },
    { name: 'PRO', subtitle: 'Para clubes en crecimiento', items: ['Multi sede', 'Historial', 'Estadísticas'], featured: true },
    { name: 'ENTERPRISE', subtitle: 'Para operaciones complejas', items: ['Asociaciones', 'Múltiples torneos'] }
  ],
  gallery: [
    ['Jugadores en acción', 'professional padel players in action, dark court, cinematic lights', 71],
    ['Canchas modernas', 'premium modern padel courts with neon blue accents, realistic', 72],
    ['Torneo nocturno', 'night padel tournament with crowd and dramatic lighting, realistic', 73],
    ['Entrenamiento elite', 'high performance padel training session, futuristic sports center', 74],
    ['Club tecnológico', 'modern padel club with digital dashboards and glass design', 75],
    ['Final cerrada', 'intense final padel match point, slow shutter effect, realistic', 76],
    ['Vista aérea', 'aerial drone shot of padel complex at sunset, premium feel', 77],
    ['Celebración', 'padel champions celebrating trophy in neon atmosphere', 78]
  ]
};

const renderList = (targetId, items) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
};

const renderStats = () => {
  const target = document.getElementById('stats-grid');
  if (!target) return;

  target.innerHTML = data.stats
    .map(
      (stat) => `
      <article class="stat-card">
        <strong>${stat.value}</strong>
        <p>${stat.label}</p>
      </article>
    `
    )
    .join('');
};

const renderTechCards = (targetId, items) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = items
    .map(
      (item) => `
      <article class="tech-card">
        <div class="tech-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
    )
    .join('');
};

const renderSteps = () => {
  const target = document.getElementById('steps-grid');
  if (!target) return;

  target.innerHTML = data.steps
    .map(
      (step, idx) => `
      <article class="step-card">
        <div class="step-head">
          <span class="step-dot"></span>
          <h3>${step.title}</h3>
          ${idx < data.steps.length - 1 ? '<span class="step-line"></span>' : ''}
        </div>
        <p><strong>${step.subtitle}</strong></p>
        <p>${step.text}</p>
      </article>
    `
    )
    .join('');
};

const renderBenefits = () => {
  const target = document.getElementById('benefits-grid');
  if (!target) return;

  target.innerHTML = data.benefits
    .map(
      (benefit) => `
      <article class="benefit-card">
        <h3>${benefit}</h3>
        <p>Automatizá tareas repetitivas y enfocá tu tiempo en hacer crecer tu club.</p>
      </article>
    `
    )
    .join('');
};

const renderPricing = () => {
  const target = document.getElementById('pricing-grid');
  if (!target) return;

  target.innerHTML = data.pricing
    .map(
      (plan) => `
      <article class="price-card ${plan.featured ? 'price-card--featured' : ''}">
        <h3>${plan.name}</h3>
        <p>${plan.subtitle}</p>
        <ul>${plan.items.map((item) => `<li>${item}</li>`).join('')}</ul>
      </article>
    `
    )
    .join('');
};

const renderGallery = () => {
  const target = document.getElementById('gallery-grid');
  if (!target) return;

  target.innerHTML = data.gallery
    .map(([caption, prompt, seed]) => {
      const src = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=900&height=700&seed=${seed}`;
      return `
        <figure class="gallery-card">
          <img src="${src}" loading="lazy" alt="${caption} generado por IA" />
          <figcaption>${caption}</figcaption>
        </figure>
      `;
    })
    .join('');
};

const setupRevealAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal, .stat-card, .tech-card, .step-card, .benefit-card, .price-card, .gallery-card').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 40, 240)}ms`;
    observer.observe(el);
  });
};

renderStats();
renderTechCards('problem-grid', data.problem);
renderTechCards('solution-grid', data.solution);
renderSteps();
renderList('input-list', data.wowInput);
renderList('output-list', data.wowOutput);
renderBenefits();
renderPricing();
renderGallery();
setupRevealAnimations();
