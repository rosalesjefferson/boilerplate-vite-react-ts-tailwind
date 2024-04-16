/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // TODO
        // boxShadow: {
        //   active: '0 0 12px 0 rgba(0, 0, 0, 0.1) inset',
        //   modal: '0 10px 24px rgba(0, 0, 0, 0.1)',
        //   tooltip: '0px 8px 16px rgba(0, 0, 0, 0.06)',
        //   dropdown: '0 4px 10px rgba(69, 76, 181, 0.15)', /* or dropdown */
        // },

        line: '#D5D9E0',
        placeholder: '#8491A7',
        disabled: {
          'slightly-dark': '#C3CAD4',
          base: '#EBEEF9',
        },

        // Brand 2 / Lime
        secondary: {
          50: '#F3FBEF',
          100: '#E5F6DA',
          200: '#CBEDB5',
          300: '#B0E490',
          400: '#96DB6B',
          500: '#7ED348',
          600: '#60B52C',
          700: '#488821',
          800: '#305A16',
          900: '#182D0B',
          950: '#0D1906',
        },
        // Brand 1 / Blue
        primary: {
          50: '#D7E8FF',
          100: '#B3D4FE',
          200: '#67A8FE',
          300: '#1B7DFD',
          400: '#0259CA',
          500: '#01377D',
          600: '#012C65',
          700: '#01214C',
          800: '#001633',
          900: '#000B19',
          950: '#00040A',
        },
        // Green
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          1000: '#052E16',
        },
  
        // Mix of blue and violet
        blue: {
          50: '#EBEEF9',
          100: '#D4DAF2',
          200: '#A9B5E5',
          300: '#8293D9',
          400: '#576ECB',
          500: '#3750B3',
          600: '#2C4090',
          700: '#22316D',
          800: '#161F46',
          900: '#0B1023',
          950: '#060914',
        },
        // Mix of yellow and orange
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        // Custom
        orange: {
          50: '#FFECDC',
          100: '#FFDAC9',
          200: '#FDBFA4',
          300: '#FF9E72',
          400: '#EB7C47',
          500: '#DE6728',
          600: '#D04900',
          700: '#AA4C1A',
          800: '#903A03',
          900: '#7F3100',
          950: '#722C00',
          1000: ' #6A2700',
        },
        danger: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        white: {
          50: '#FFFFFF',
          100: '#FDFDFE',
          200: '#F8F9FA',
          300: '#EFF1F4',
          400: '#E3E6EB',
          500: '#D5D9E0',
          600: '#C3CAD4',
          700: '#B0B8C6',
          800: '#9BA5B7',
          900: '#8491A7',
          950: '#6D7D96',
        },

        black: {
          50: '#EBEBEB',
          100: '#D6D6D6',
          200: '#ADADAD',
          300: '#858585',
          400: '#5C5C5C',
          500: '#333333',
          600: '#292929',
          700: '#1F1F1F',
          800: '#141414',
          900: '#0A0A0A',
          950: '#050505',
        },
      },
      fontSize: {
        display: ['2rem', '2.5rem'],
        'page-title': ['1.5rem', '2rem'],
        'sub-title': ['1.375rem', '1.75rem'],
        // "heading-lg": ["1.5rem", "1.5rem"], todo
        heading: ['1.25rem', '1.5rem'],
        'sub-heading': ['1rem', '1.125rem'],
        body: ['0.875rem', '1rem'],
        caption: ['0.75rem', '1rem'],
        // "custom-overline": ["0.75rem", "0.875rem"], todo
        tiny: ['0.625rem', '0.75rem'],
        overline: [
          '0.625rem',
          {
            lineHeight: '1rem',
            fontWeight: '700',
          },
        ],
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: "class", // only generate classes
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ]
};
