/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "brown": "#78350F",
        "black": "#0F172A",
        "dark-blue": "#0F172A"
      },
      backgroundImage: {
        'bg-1': "url('/src/images/bg-1.svg')",
        'bg-2': "url('/src/images/waves.svg')",
        'bg-3': "url('/src/images/chart.svg')",
        'backlights-desktop': "url('/src/images/backlights-desktop.svg')",
        'backlights-mobile': "url('/src/images/backlights-mobile.svg')"
      }

    }, 
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
    },
    boxShadow: {
      'card': '0px 0px 15px 0px rgba(255, 255, 255, 0.07), 0px 25px 50px -12px rgba(255, 255, 255, 0.25)',
      'join': '0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)'
    }

  },
  plugins: [],
}

