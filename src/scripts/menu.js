const debouncedAdjustMenu = debounce(adjustMenuOnResize, 10);

document.addEventListener('DOMContentLoaded', () => {
  adjustMenuOnResize();
  const burger = document.querySelector('.btn--hamburger');
  const nav = document.getElementById('navigation');

  burger.addEventListener('click', function() {
    console.log('this?', this);
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    console.log('expanded?', expanded);
    this.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-hidden', String(expanded));
    nav.classList.toggle('expanded');
  });
});

function adjustMenuOnResize() {
  const windowWidth = window.innerWidth;
  const navMenu = document.getElementById('navigation');
  const burgerIcon = document.querySelector('.btn--hamburger');

  const breakpoint = 960;

  if (windowWidth >= breakpoint) {
    navMenu.style.position = 'relative';
    navMenu.classList.remove('expanded');
    navMenu.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
    navMenu.removeAttribute('aria-expanded');
  } else {
    navMenu.style.position = 'absolute';
    navMenu.setAttribute('aria-hidden', 'true');
    burgerIcon.setAttribute('aria-expanded', 'false');
  }
  console.log('burger:', burgerIcon);
}

function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// const debouncedAdjustMenu = debounce(adjustMenuOnResize, 300);

// window.addEventListener('resize', debouncedAdjustMenu);

window.addEventListener('resize', adjustMenuOnResize);
