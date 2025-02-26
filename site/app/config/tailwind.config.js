/* eslint-disable node/no-extraneous-require */
const defaultTheme = require('tailwindcss/defaultTheme');
const { teal } = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{html,js,ts,hbs}',
    './lib/docfy-theme/addon/**/*.hbs',
    '../**/*.md',
    './node_modules/**/*.hbs',
    '../node_modules/**/*.hbs'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: {
          1000: '#12161f'
        },
        teal,
        primary: teal,
        brand: '#034166'
      },
      zIndex: {
        1: '1'
      },
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.500'),
            fontFamily: ['Inter', ...defaultTheme.fontFamily.sans].join(', '),
            a: {
              color: theme('colors.primary.700'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none'
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit'
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium')
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit'
            },
            code: {
              fontWeight: theme('fontWeight.normal'),
              padding: theme('padding.1'),
              backgroundColor: theme('colors.gray.100'),
              borderRadius: theme('borderRadius.sm')
            },
            'code::before': null,
            'code::after': null
          }
        },
        light: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.200')
              },
              a: {
                color: theme('colors.white')
              },
              strong: {
                color: theme('colors.white')
              },
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600')
              },
              hr: {
                borderColor: theme('colors.gray.200')
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600')
              },
              h1: {
                color: theme('colors.white')
              },
              h2: {
                color: theme('colors.white')
              },
              h3: {
                color: theme('colors.white')
              },
              h4: {
                color: theme('colors.white')
              },
              'figure figcaption': {
                color: theme('colors.gray.400')
              },
              code: {
                backgroundColor: theme('colors.gray.900'),
                color: theme('colors.white')
              },
              'a code': {
                color: theme('colors.white')
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.900')
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600')
              }
            }
          ]
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [
    require('@frontile/core/tailwind'),
    require('@frontile/forms/tailwind'),
    require('@frontile/buttons/tailwind'),
    require('@frontile/notifications/tailwind'),
    require('@frontile/overlays/tailwind'),
    require('@tailwindcss/typography')
  ],
  safelist: [
    { pattern: /^close-button/ },
    { pattern: /^js-focus-visible/ },
    { pattern: /^sr-only/ },

    // Frontile Forms
    { pattern: /^form-field-checkbox/ },
    { pattern: /^form-field-feedback/ },
    { pattern: /^form-field-hint/ },
    { pattern: /^form-field-input/ },
    { pattern: /^form-field-label/ },
    { pattern: /^form-field-radio/ },
    { pattern: /^form-field-textarea/ },
    { pattern: /^form-input/ },
    { pattern: /^form-textarea/ },
    { pattern: /^form-select/ },
    { pattern: /^form-checkbox/ },
    { pattern: /^form-radio/ },
    { pattern: /^form-checkbox-group/ },
    { pattern: /^form-radio-group/ },

    // Frontile Notifications
    { pattern: /^notifications-container/ },
    { pattern: /^notification-card/ },
    { pattern: /^notification-transition/ },

    // Frontile Overlays
    { pattern: /^overlay/ },
    { pattern: /^modal/ },
    { pattern: /^drawer/ },

    // Frontile Buttons
    { pattern: /^btn/ },

    // Power Select
    { pattern: /^ember-power-select/ }
  ]
};
