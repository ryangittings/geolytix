const expandedNav = document.querySelector('.expanded-navigation');
const toggle = document.querySelector('[data-header-menu-toggle]');
const items = expandedNav.querySelectorAll('.nav li a');

const toggleMenu = () => {
  const open = expandedNav.getAttribute('data-status') == 'open';

  if (open) {
    toggle.setAttribute('aria-expanded', false);
    expandedNav.setAttribute('data-status', 'closed');
  } else {
    toggle.setAttribute('aria-expanded', true);
    expandedNav.setAttribute('data-status', 'open');
  }
};

toggle.addEventListener('click', toggleMenu, false);

items.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});
