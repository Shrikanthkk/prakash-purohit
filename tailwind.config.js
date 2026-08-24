/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#E86014',
          light: '#FF7A29',
          dark: '#B84503'
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          accent: '#E5C158',
          dark: '#996515',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FDFBF7',
          200: '#FAF6ED',
          300: '#F5EFE0',
          400: '#ECE2CC',
          DEFAULT: '#FDFBF7',
          warm: '#F7F1E5',
          darker: '#EFE7D5',
        },
        spiritual: {
          dark: '#24140E',
          brown: '#3A2016',
          medium: '#57382B',
          light: '#7A5240',
          text: '#2D1810',
          muted: '#6B574B',
          vermilion: '#B93826',
          maroon: '#6B1B19',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.5)',
        'saffron-glow': '0 0 25px -5px rgba(232, 96, 20, 0.3)',
        'divine-card': '0 10px 30px -10px rgba(74, 45, 23, 0.08), 0 2px 8px -2px rgba(212, 175, 55, 0.12)',
        'glass-card': '0 8px 32px 0 rgba(198, 140, 60, 0.12)',
      },
      backgroundImage: {
        'sacred-gradient': 'linear-gradient(135deg, #FFFDF9 0%, #FAF4E8 50%, #F5EBE1 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)',
        'saffron-gradient': 'linear-gradient(135deg, #FF7E29 0%, #D84315 100%)',
        'divine-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        'diya-flicker': {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '25%': { opacity: '1', transform: 'scale(1.06)' },
          '50%': { opacity: '0.75', transform: 'scale(0.97)' },
          '75%': { opacity: '0.95', transform: 'scale(1.03)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'diya-flicker': 'diya-flicker 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
