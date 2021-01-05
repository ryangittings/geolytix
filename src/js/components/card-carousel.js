var slider = tns({
  container: '.card-carousel',
  autoplay: true,
  gutter: 32,
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
  items: 1,
  edgePadding: 48,
  responsive: {
    768: {
      items: 2,
      edgePadding: 80,
    },
    1025: {
      items: 4,
      edgePadding: 80,
    },
  },
});
