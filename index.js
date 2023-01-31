function toggleButton() {
  const cards = document.querySelectorAll('[data-js="card"]');

  cards.forEach(cards => {
    const button = cards.querySelector('[data-js="button"]');
    const link = cards.querySelector('[data-js="link"]');
    const arrow = cards.querySelector('[data-js="arrow"]');
    button.addEventListener('click', () => {
      link.classList.toggle('hidden');
      arrow.classList.toggle('rotate');
    });
  });
}
toggleButton();
