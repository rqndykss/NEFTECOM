document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".item__under, .virtual__card__item",
  );

  elements.forEach((el, index) => {
    const row = Math.floor(index / 3);
    el.style.transitionDelay = `${row * 0.4}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  elements.forEach((el) => observer.observe(el));
});
