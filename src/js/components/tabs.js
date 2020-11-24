const tabs = document.querySelector('.tabs');
const segments = tabs.querySelectorAll('button[role="tab"]');

const resetSegment = () => {
  tabs.querySelector('button[role="tab"][aria-selected="true"]').removeAttribute('aria-selected');
};

const setActiveSegment = (segment) => {
  resetSegment();
  segment.setAttribute('aria-selected', true);
};

const resetTab = () => {
  tabs.querySelector('[role="tabpanel"][aria-hidden="false"]').setAttribute('aria-hidden', true);
};

const setActiveTab = (tabID) => {
  resetTab();

  const tab = tabs.querySelector(`[data-tab-id="${tabID}"]`);
  tab.setAttribute('aria-hidden', false);
};

segments.forEach((segment) => {
  segment.addEventListener('click', (e) => {
    e.preventDefault();

    setActiveSegment(e.target);
    setActiveTab(e.target.getAttribute('data-tab'));
  });
});
