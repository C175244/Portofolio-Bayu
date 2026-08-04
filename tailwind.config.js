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
    },
  },
  plugins: [],
}
