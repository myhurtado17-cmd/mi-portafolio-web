/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'bg-dark': '#0a0a0a',
                'text-light': '#e0e0e0',
                'text-secondary': '#a0a0a0',
                'primary': '#646cff',
                'secondary': '#ff0080',
                'accent': '#00ffcc',
                'card-bg': 'rgba(255, 255, 255, 0.05)',
                'card-border': 'rgba(255, 255, 255, 0.1)',
                'nav-bg': 'rgba(10, 10, 10, 0.8)',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['Outfit', 'sans-serif'],
            },
            animation: {
                'float': 'float 10s infinite ease-in-out',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(30px, 50px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
