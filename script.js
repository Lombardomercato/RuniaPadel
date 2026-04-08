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
