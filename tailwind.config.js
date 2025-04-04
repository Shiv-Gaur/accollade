
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'audiowide': ['"Audiowide"', 'cursive'],
      },
      colors: {
        cyberblue: '#2E5BFF',
        cyberteal: '#00FFCC',
        cyberindigo: '#0A1128',
        cyberpurple: '#1A0B2E',
        cyberdark: '#0A0A0A',
        neonblue: '#00F0FF',
        cyberpink: '#FF2E8A',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        spotlight: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        glitchEffect1: {
          '0%, 100%': { transform: 'skew(-10deg)' },
          '48%': { transform: 'skew(-10deg)' },
          '50%': { transform: 'skew(-12deg) translateY(3px)' },
          '52%': { transform: 'skew(-10deg)' },
          '78%': { transform: 'skew(-10deg)' },
          '80%': { transform: 'skew(-8deg) translateY(-2px)' },
          '82%': { transform: 'skew(-10deg)' }
        },
        glitchEffect2: {
          '0%, 100%': { transform: 'skew(-10deg)' },
          '28%': { transform: 'skew(-10deg)' },
          '30%': { transform: 'skew(-12deg) translateY(-3px)' },
          '32%': { transform: 'skew(-10deg)' },
          '68%': { transform: 'skew(-10deg)' },
          '70%': { transform: 'skew(-8deg) translateY(2px)' },
          '72%': { transform: 'skew(-10deg)' }
        },
        dataFlicker: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 0.5 },
          '75%': { opacity: 0.8 },
          '77%': { opacity: 0.4 },
          '79%': { opacity: 0.7 }
        },
        loadProgress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        glitch: 'glitch 0.3s ease-in-out infinite',
        spotlight: 'spotlight 0.3s ease-out forwards',
        shimmer: 'shimmer 2s infinite',
        glitchEffect1: 'glitchEffect1 4s infinite',
        glitchEffect2: 'glitchEffect2 4s infinite',
        dataFlicker: 'dataFlicker 3s infinite',
        loadProgress: 'loadProgress 4s infinite'
      }
    },
  },
  plugins: [],
}
