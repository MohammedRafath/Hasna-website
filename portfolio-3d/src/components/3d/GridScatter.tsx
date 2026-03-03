import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useLerp } from '../../hooks/useLerp';

export function GridScatter({ count = 100 }) {
    const group = useRef<THREE.Group>(null);
    const mouse = useMouseParallax();
    const lerp = useLerp();

    const particles = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10 - 5
            ] as [number, number, number],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            scale: 0.1 + Math.random() * 0.2
        }));
    }, [count]);

    useFrame(() => {
        if (!group.current) return;

        // Subtle mouse parallax
        const targetX = mouse.nx * 0.5;
        const targetY = mouse.ny * 0.5;

        group.current.position.x = lerp(group.current.position.x, targetX, 0.05);
        group.current.position.y = lerp(group.current.position.y, targetY, 0.05);

        // Slow rotation
        group.current.rotation.y += 0.001;
        group.current.rotation.z += 0.0005;
    });

    return (
        <group ref={group} dispose={null}>
            <Instances limit={count} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#E5E1DB" roughness={0.9} />
                {particles.map((data, i) => (
                    <Instance key={i} position={data.position} rotation={data.rotation} scale={data.scale} />
                ))}
            </Instances>
        </group>
    );
}
