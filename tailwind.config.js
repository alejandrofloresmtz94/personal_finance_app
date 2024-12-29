/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-500': '#98908B',
        'beige-100': '#F8F4F0',
        'grey-900': '#201F24',
        'grey-500': '#696868',
        'grey-300': '#B3B3B3',
        'grey-100': '#F2F2F2',
        'secondary-green': '#277C78',
        'secondary-yellow': '#F2CDAC',
        'secondary-cyan': '#82C9D7',
        'secondary-navy': '#626070',
        'secondary-red': '#C94736',
        'secondary-purple': '#826CB0',
        'other-purple': '#AF81BA',
        'other-turquoise': '##597C7C',
        'other-brown': '#93674F',
        'other-magenta': '#934F6F',
        'other-blue': '#3F82B2',
        'other-navy-gray': '#97A0AC',
        'other-army-green': '#7F9161',
        'other-gold': '#CAB361',
        'other-orange': '#BE6C49' 
      },
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif'],
      },
      fontSize: {
        'preset-1': ['32px',{
          lineHeight: '120%',
          letterSpacing: '0px',
          fontWeight: 'bold'
        }],
        'preset-2': ['20px', {
          lineHeight: '120%',
          letterSpacing: '0px'
        }],
        'preset-3': ['16px', {
          lineHeight: '150%',
          letterSpacing: '0px'
        }],
        'preset-4': ['14px', {
          lineHeight: '150%',
          letterSpacing: '0px'
        }],
        'preset-5':['12px', {
            lineHeight: '150%',
            letterSpacing: '0px'
        }]
      },
      backgroundImage: {
        'login-sigin-img': "url('/src/assets/Login_Signup_img.png')",
      },
      spacing: {
        '500': '40px',
        '400': '32px',
        '300': '24px',
        '250': '20px',
        '200': '16px',
        '150': '12px',
        '100': '8px',
        '50': '4px',
      }
    },
  },
  plugins: [],
}