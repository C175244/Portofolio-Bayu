/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nvidia-green': '#76b900',
        'nvidia-green-dark': '#5a8d00',
        'nvidia-ink': '#000000',
        'nvidia-canvas': '#ffffff',
        'nvidia-surface-dark': '#000000',
        'nvidia-surface-soft': '#f7f7f7',
        'nvidia-surface-elevated': '#1a1a1a',
        'nvidia-hairline': '#cccccc',
        'nvidia-hairline-strong': '#5e5e5e',
        'nvidia-body': '#1a1a1a',
        'nvidia-mute': '#757575',
        'nvidia-stone': '#898989',
        'nvidia-ash': '#a7a7a7',
        'nvidia-on-dark': '#ffffff',
        'nvidia-link-blue': '#0046a4',
      },
      fontFamily: {
        'nvidia': ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        'nvidia': '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(118,185,0,0.3)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(118,185,0,0.15)' },
        },
      },
    },
  },
  plugins: [],
}
