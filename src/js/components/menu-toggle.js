const header = document.querySelector('.expanded-navigation');
const toggle = document.querySelector('[data-header-menu-toggle]');

toggle.addEventListener(
  'click',
  () => {
    const open = header.getAttribute('data-status') == 'open';

    if (open) {
      toggle.setAttribute('aria-expanded', false);
      header.setAttribute('data-status', 'closed');
    } else {
      toggle.setAttribute('aria-expanded', true);
      header.setAttribute('data-status', 'open');
    }
  },
  false
);
