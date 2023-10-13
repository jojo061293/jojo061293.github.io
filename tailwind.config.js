/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        DEFAULT: "1100px",
        desktop: "1100px",
      },
      center: true
    },
    fontFamily: {
      sans: [
        "Inter",
      ],
    },
    extend: {
      colors: {
        'grey-900': '#18191F',
        "purple-button": "#8C30F5"
      },
      fontSize: {
        'banner-header': ['72px',{
          lineHeight: '98px',
          fontWeight: '800',
        }],
        'header': ['48px',{
          lineHeight: '64px',
          fontWeight: '800',
        }],
        'sub-header': ['40px',{
          lineHeight: '54px',
          fontWeight: '800',
        }],
        'title': ['24px',{
          lineHeight: '32px',
          fontWeight: '600',
        }],
        'sub-title': ['18px',{
          lineHeight: '28px',
          fontWeight: '700',
        }],
        'description': ['18px',{
          lineHeight: '32px',
          fontWeight: '400',
        }],
        'content': ['14px',{
          lineHeight: '24px',
          fontWeight: '400',
        }],
        'title-content': ['16px',{
          lineHeight: '26px',
          fontWeight: '400',
        }],
        'our-achieve-title': ['28px',{
          lineHeight: '40px',
          fontWeight: '700',
        }],
      },
    }
  },
  variants: {},
  plugins: [],
}