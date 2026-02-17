function createObserver(selector, activeClass) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(activeClass);
      } else {
        entry.target.classList.remove(activeClass);
      }
    });
  }, { threshold: 0 });

  elements.forEach(el => observer.observe(el));
}

createObserver(".text", "text-show");
createObserver("img", "show");