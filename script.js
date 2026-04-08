const setupRevealAnimations = () => {
  const animatedNodes = document.querySelectorAll('.reveal, .system-shot-frame, .info-card, .step-card');

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

  animatedNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 40, 260)}ms`;
    observer.observe(node);
  });
};

setupRevealAnimations();

const setupSectionParallax = () => {
  const sections = document.querySelectorAll('main .section');

  const updateOffsets = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = Math.max(-18, Math.min(18, (progress - 0.5) * 36));
      section.style.setProperty('--float-offset', `${offset.toFixed(2)}px`);
    });
  };

  window.addEventListener('scroll', updateOffsets, { passive: true });
  window.addEventListener('resize', updateOffsets);
  updateOffsets();
};

setupSectionParallax();
