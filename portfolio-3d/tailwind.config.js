/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#EDEAE5',
                cream2: '#E5E1DB',
                cream3: '#F5F2EF',
                crimson: {
                    DEFAULT: '#7B1A28',
                    dark: '#3E0A12',
                    light: '#A02234',
                    glow: 'rgba(123,26,40,0.18)',
                },
                text: {
                    DEFAULT: '#1A0A0C',
                    mid: '#4A2A2F',
                    muted: 'rgba(26,10,12,0.45)',
                },
                border: {
                    DEFAULT: 'rgba(26,10,12,0.12)',
                    crimson: 'rgba(123,26,40,0.3)',
                }
            },
            fontFamily: {
                display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
                mono: ['"Space Mono"', 'monospace'],
                body: ['"DM Sans"', 'sans-serif'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                orbPulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
                    '50%': { transform: 'scale(1.1)', opacity: '1' },
                },
                floatTag: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
                    '25%': { transform: 'translateY(-5px) rotate(1deg)' },
                    '75%': { transform: 'translateY(5px) rotate(-1deg)' },
                },
                dotPulse: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(123, 26, 40, 0.4)' },
                    '50%': { opacity: '0.7', transform: 'scale(1.1)', boxShadow: '0 0 10px 4px rgba(123, 26, 40, 0)' },
                }
            },
            animation: {
                marquee: 'marquee 18s linear infinite',
                orbPulse: 'orbPulse 3s ease-in-out infinite',
                floatTag: 'floatTag 4s ease-in-out infinite',
                dotPulse: 'dotPulse 2.5s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
