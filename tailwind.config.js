/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'baby-pink': '#F4C2C2',
                'rose-gold': '#B76E79',
                'rose-pink': '#FF66CC',
                'soft-white': '#F8F8FF',
            },
        },
    },
    plugins: [],
}
