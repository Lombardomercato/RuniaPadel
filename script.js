const sections = {
  problem: [
    'Horarios que no coinciden',
    'Jugadores que cambian todo',
    'Canchas que no alcanzan',
    'WhatsApp explotado'
  ],
  solution: [
    'Genera zonas automáticamente',
    'Arma llaves según ranking',
    'Respeta horarios de cada jugador',
    'Detecta si faltan canchas',
    'Maneja múltiples clubes'
  ],
  wowInput: ['Jugadores + ranking', 'Disponibilidad horaria', 'Cantidad de canchas'],
  wowOutput: ['Fixture completo', 'Horarios listos', 'Zonas equilibradas', 'Llaves armadas'],
  benefits: [
    'Organizás más torneos',
    'Reducís errores',
    'Mejor experiencia para jugadores',
    'Escalás sin más personal'
  ],
  pricing: [
    {
      name: 'BÁSICO',
      subtitle: 'Ideal para empezar',
      items: ['1 club', 'Hasta X jugadores']
    },
    {
      name: 'PRO',
      subtitle: 'Para clubes en crecimiento',
      items: ['Multi sede', 'Historial', 'Estadísticas'],
      featured: true
    },
    {
      name: 'ENTERPRISE',
      subtitle: 'Para operaciones complejas',
      items: ['Asociaciones', 'Múltiples torneos']
    }
  ],
  gallery: [
    ['Cancha profesional nocturna', 'futuristic padel stadium at night, hyper realistic, dramatic lights', 21],
    ['Partido en club premium', 'professional padel match in modern club, high detail, natural light', 22],
    ['Entrenamiento técnico', 'padel training session with coach, realistic photography, dynamic action', 23],
    ['Vista aérea de torneos', 'aerial view of multiple padel courts and tournament crowd, cinematic', 24],
    ['Equipo celebrando', 'padel team celebrating victory, confetti, realistic, vibrant', 25],
    ['Club con branding RUNIA', 'modern padel club lobby with digital screens and branding, photo realistic', 26],
    ['Partido mixto', 'mixed doubles padel rally, realistic sports photography, crisp detail', 27],
    ['Atardecer en la cancha', 'sunset padel court in argentina, realistic, warm colors', 28]
  ]
};

const renderList = (targetId, items) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
};

const renderBenefits = () => {
  const target = document.getElementById('benefits-grid');
  if (!target) return;

  target.innerHTML = sections.benefits
    .map(
      (benefit) => `
      <article class="benefit-card">
        <h3>${benefit}</h3>
        <p>Automatizá tareas repetitivas y enfocá tu tiempo en crecer tu operación.</p>
      </article>
    `
    )
    .join('');
};

const renderPricing = () => {
  const target = document.getElementById('pricing-grid');
  if (!target) return;

  target.innerHTML = sections.pricing
    .map(
      (plan) => `
      <article class="price-card ${plan.featured ? 'price-card--featured' : ''}">
        <h3>${plan.name}</h3>
        <p>${plan.subtitle}</p>
        <ul>
          ${plan.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
};

const renderGallery = () => {
  const target = document.getElementById('gallery-grid');
  if (!target) return;

  target.innerHTML = sections.gallery
    .map(([caption, prompt, seed]) => {
      const encodedPrompt = encodeURIComponent(prompt);
      const src = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=900&height=700&seed=${seed}`;
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
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
};

renderList('problem-list', sections.problem);
renderList('solution-list', sections.solution);
renderList('input-list', sections.wowInput);
renderList('output-list', sections.wowOutput);
renderBenefits();
renderPricing();
renderGallery();
setupRevealAnimations();
