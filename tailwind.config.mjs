/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'bg-main': 'var(--bg-color)',
                'text-main': 'var(--text-color)',
                'text-secondary': 'var(--text-secondary)',
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'accent': 'var(--accent)',
                'card-bg': 'var(--card-bg)',
                'card-border': 'var(--card-border)',
                'nav-bg': 'var(--nav-bg)',
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
