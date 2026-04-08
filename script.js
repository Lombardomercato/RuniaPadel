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
    'Reducís errores operativos',
    'Mejor experiencia para jugadores',
    'Escalás sin sumar más personal'
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
    ['Neón azul y lima', 'dark padel court neon cyan and lime lights, realistic, cinematic', 41],
    ['Club premium nocturno', 'luxury padel center at night with futuristic lights, realistic', 42],
    ['Partido competitivo', 'professional padel tournament rally, dramatic lights, ultra realistic', 43],
    ['Gestión desde app', 'sports manager tablet dashboard for padel tournament, dark ui, realistic', 44],
    ['Final del torneo', 'padel final match crowd cheering in night arena, cinematic realism', 45],
    ['Canchas múltiples', 'multiple padel courts from aerial view, dark ambience neon accents', 46],
    ['Entrenamiento técnico', 'padel training drill in modern indoor court, realistic sports photo', 47],
    ['Celebración del club', 'winning padel team celebrating with trophy, neon blue and lime atmosphere', 48]
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
        <p>Automatizá tareas repetitivas y enfocá tu tiempo en hacer crecer tu club.</p>
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
        <ul>${plan.items.map((item) => `<li>${item}</li>`).join('')}</ul>
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
