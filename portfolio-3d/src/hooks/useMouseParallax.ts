import { useState, useEffect } from 'react';

export function useMouseParallax() {
    const [mouse, setMouse] = useState({ x: 0, y: 0, nx: 0, ny: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Standard pixel offset from center
            const px = (e.clientX / window.innerWidth) - 0.5;
            const py = (e.clientY / window.innerHeight) - 0.5;

            // Normalized coordinates [-1, 1] for WebGL (Y is up)
            const nx = (e.clientX / window.innerWidth) * 2 - 1;
            const ny = -(e.clientY / window.innerHeight) * 2 + 1;

            setMouse({ x: px, y: py, nx, ny });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return mouse;
}
