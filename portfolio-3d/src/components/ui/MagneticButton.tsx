import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: 'primary' | 'outline';
    href?: string;
    className?: string;
}

export const MagneticButton: React.FC<Props> = ({ children, variant = 'primary', href, className = '', ...props }) => {
    const ref = useRef<HTMLElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles = "inline-flex items-center justify-center font-mono text-[0.72rem] tracking-[0.1em] uppercase px-8 py-[0.8rem] transition-colors duration-200 no-underline";
    const variants = {
        primary: "bg-crimson text-white hover:bg-crimson-light clip-edges",
        outline: "bg-transparent text-crimson border-[1.5px] border-crimson hover:bg-crimson hover:text-white"
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref as any}
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            {...(props as any)}
        >
            {children}
        </Component>
    );
};
