module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Noto Sans Display', 'sans-serif'],
      },
      fontSize: {
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.25rem', // 20px
        xl: '1.75rem', // 28px
        '2xl': '2rem', // 32px
        '3xl': '2.5rem', // 40px
      },
      lineHeight: {
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '2xl': '2rem', // 32px
        '3xl': '2.25rem', // 36px
        '4xl': '2.5rem', // 40px
      },
      borderRadius: {
        none: '0',
        DEFAULT: '10px',
        full: '9999px',
      },
      colors: {
        primary: {
          lightest: '#d3b0e8',
          lighter: '#c291de',
          light: '#ad6dd3',
          DEFAULT: '#8d46b8',
          dark: '#7c3ea3',
          darker: '#653285',
          darkest: '#4f2768',
        },
        gray: {
          lightest: '#f5f6f8',
          lighter: '#f1f2f5',
          light: '#eef0f2',
          DEFAULT: '#ebedf0',
          dark: '#d4d5d8',
          darker: '#c8c9cc',
          darkest: '#a4a6a8',
        },
        success: {
          lightest: '#80d280',
          lighter: '#4dbf4d',
          light: '#26b226',
          DEFAULT: '#00a400',
          dark: '#009400',
          darker: '#008b00',
          darkest: '#007300',
        },
        warning: {
          lightest: '#ffdd80',
          lighter: '#ffcf4d',
          light: '#ffc426',
          DEFAULT: '#ffba00',
          dark: '#e6a700',
          darker: '#d99e00',
          darkest: '#b38200',
        },
        danger: {
          lightest: '#fd9c9f',
          lighter: '#fb7478',
          light: '#fb565b',
          DEFAULT: '#fa383e',
          dark: '#e13238',
          darker: '#d53035',
          darkest: '#af272b',
        },
        white: '#fff',
        transparent: 'transparent',
        current: 'currentColor',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        120: '8.75rem',
        300: '18.75rem',
      },
      width: {
        fit: 'fit-content',
      },
      height: {
        fit: 'fit-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
