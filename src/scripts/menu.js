document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.btn--hamburger');
  const nav = document.getElementById('navigation');

  burger.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-hidden', String(expanded));
    nav.classList.toggle('is-visible');
  });
});
