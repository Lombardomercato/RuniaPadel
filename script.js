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
    'Mejor experiencia',
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
        <p>Automatizá tareas repetitivas y enfocate en hacer crecer tu club.</p>
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
setupRevealAnimations();
