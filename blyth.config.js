const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
  colors: {
    primary: '#401505',
    'primary-light': '#9AABBC',
    'primary-mid': '#4d5e71',
    secondary: '#EC602D',
    'secondary-dark': '#401505',
    light: '#ffffff',
    dark: '#003D57',
    cream: '#E3D2C1',
    'cream-light': '#F5F2EE',
    'light-gray': '#F7F8FA',
    'regular-gray': '#F0F0F0',
    red: 'red',
  },
  fonts: {
    base: 'Inter, sans-serif',
  },
  sizeScale: {
    200: 'var(--step--2)',
    300: 'var(--step--1)',
    400: 'var(--step-0)',
    500: 'var(--step-1)',
    600: 'var(--step-2)',
    700: 'var(--step-4)',
    800: 'var(--step-6)',
    900: 'var(--step-8)',
  },
  spacingScale: {
    100: 'var(--step--3)',
    200: 'var(--step--2)',
    300: 'var(--step--1)',
    400: 'var(--step-0)',
    500: 'var(--step-2)',
    600: 'var(--step-4)',
    700: 'var(--step-6)',
    800: 'var(--step-8)',
    900: 'var(--step-10)',
  },
};

module.exports = {
  theme: theme,
  tokens: {
    bg: {
      items: theme.colors,
      property: 'background',
    },
    color: {
      items: theme.colors,
      property: 'color',
      variable: true,
    },
    display: {
      items: {
        none: 'none !important',
        block: 'block !important',
        'inline-block': 'inline-block !important',
      },
      property: 'display',
      responsive: true,
    },
    font: {
      items: theme.fonts,
      property: 'font-family',
      variable: true,
    },
    'gap-top': {
      items: theme.spacingScale,
      property: 'margin-top',
    },
    'gap-bottom': {
      items: theme.spacingScale,
      property: 'margin-bottom',
    },
    leading: {
      items: {
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      property: 'line-height',
    },
    'letter-spacing': {
      items: {
        normal: '0.1em',
      },
      property: 'letter-spacing',
      variable: true,
    },
    measure: {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '44ch',
        tiny: '30ch',
      },
      property: 'max-width',
    },
    pad: {
      items: theme.spacingScale,
      property: 'padding',
    },
    'pad-top': {
      items: theme.spacingScale,
      property: 'padding-top',
    },
    'pad-bottom': {
      items: theme.spacingScale,
      property: 'padding-bottom',
    },
    'pad-left': {
      items: theme.spacingScale,
      property: 'padding-left',
    },
    radius: {
      items: {
        regular: '8px',
      },
      property: 'border-radius',
      variable: true,
    },
    shadow: {
      items: {
        standard: '0px 4px 4px rgba(0, 0, 0, 0.05)',
      },
      property: 'box-shadow',
      variable: true,
    },
    size: {
      items: theme.spacingScale,
      variable: true,
    },
    text: {
      items: theme.sizeScale,
      responsive: true,
      property: 'font-size',
      variable: true,
    },
    'text-align': {
      items: {
        center: 'center',
      },
      responsive: true,
      property: 'text-align',
    },
    'text-decoration': {
      items: {
        none: 'none',
      },
      property: 'text-decoration',
    },
    transition: {
      items: {
        standard: '.4s ease-in-out',
      },
      variable: true,
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700',
      },
      property: 'font-weight',
      variable: true,
    },
    visibility: {
      items: {
        visible: 'visible',
        invisible: 'hidden',
      },
      property: 'visibility',
      responsive: true,
    },
    width: {
      items: {
        full: '100%',
      },
      property: 'width',
    },
  },
};
