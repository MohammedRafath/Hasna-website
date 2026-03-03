import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Box, Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useLerp } from '../../hooks/useLerp';

export function FloatingCluster() {
    const group = useRef<THREE.Group>(null);
    const mouse = useMouseParallax();
    const lerp = useLerp();

    // Materials
    const matteWhite = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.8, metalness: 0.1 });
    const glossyCrimson = new THREE.MeshStandardMaterial({ color: '#A02234', roughness: 0.1, metalness: 0.8 });
    const darkCrimson = new THREE.MeshStandardMaterial({ color: '#3E0A12', roughness: 0.5, metalness: 0.5 });

    useFrame((state) => {
        if (!group.current) return;

        // Idle float & rotation
        const t = state.clock.getElapsedTime();
        group.current.position.y = Math.sin(t * 0.5) * 0.2;
        group.current.rotation.y = t * 0.05;

        // Mouse tilt (max 8 degrees ~ 0.14 rad)
        const targetRotX = mouse.ny * 0.14;
        const targetRotZ = -mouse.nx * 0.14;

        group.current.rotation.x = lerp(group.current.rotation.x, targetRotX, 0.08);
        group.current.rotation.z = lerp(group.current.rotation.z, targetRotZ, 0.08);
    });

    return (
        <group ref={group} dispose={null}>
            {/* Central stack */}
            <RoundedBox args={[2, 0.4, 2]} radius={0.05} position={[0, -0.6, 0]} material={matteWhite} castShadow receiveShadow />
            <RoundedBox args={[1.5, 0.3, 1.5]} radius={0.05} position={[0.2, -0.2, -0.2]} material={glossyCrimson} castShadow />
            <Box args={[1, 0.8, 1]} position={[-0.2, 0.4, 0.2]} material={darkCrimson} castShadow />
            <RoundedBox args={[0.5, 1.2, 0.5]} radius={0.02} position={[0.8, 0.6, -0.5]} material={matteWhite} castShadow />

            {/* Thin plates */}
            <Box args={[3, 0.05, 1]} position={[0, -1, 0.5]} material={matteWhite} castShadow receiveShadow />
            <Box args={[1, 0.05, 3]} position={[-0.8, -1.2, -0.5]} material={glossyCrimson} castShadow receiveShadow />

            {/* Floating particles (Instanced) */}
            <Instances limit={20} material={matteWhite} castShadow>
                <boxGeometry args={[0.1, 0.1, 0.1]} />
                {Array.from({ length: 20 }).map((_, i) => {
                    const x = (Math.random() - 0.5) * 4;
                    const y = (Math.random() - 0.5) * 4;
                    const z = (Math.random() - 0.5) * 4;
                    return <Instance key={i} position={[x, y, z]} rotation={[Math.random(), Math.random(), 0]} />
                })}
            </Instances>
        </group>
    );
}
