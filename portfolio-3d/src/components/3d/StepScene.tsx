import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';
import { useLerp } from '../../hooks/useLerp';

interface StepSceneProps {
    progress?: number; // 0 to 1 linked to scroll
}

export function StepScene({ progress = 0 }: StepSceneProps) {
    const group = useRef<THREE.Group>(null);
    const lerp = useLerp();

    const steps = 6;
    const stepHeight = 0.5;
    const stepDepth = 1.5;
    const stepWidth = 4;

    useFrame(() => {
        if (!group.current) return;
        // Camera or group moves along steps based on progress
        const targetZ = progress * (steps * stepDepth) - 2;
        const targetY = -(progress * (steps * stepHeight)) + 1;

        group.current.position.z = lerp(group.current.position.z, targetZ, 0.1);
        group.current.position.y = lerp(group.current.position.y, targetY, 0.1);
        group.current.rotation.x = 0.2; // slight downward perspective
        group.current.rotation.y = -0.4; // slight angle
    });

    return (
        <group ref={group} dispose={null}>
            {Array.from({ length: steps }).map((_, i) => {
                const isActive = progress * steps >= i && progress * steps < i + 1;

                return (
                    <Box
                        key={i}
                        args={[stepWidth, stepHeight, stepDepth]}
                        position={[0, i * stepHeight, -i * stepDepth]}
                        castShadow
                        receiveShadow
                    >
                        <meshStandardMaterial
                            color={isActive ? "#F5F2EF" : "#EDEAE5"}
                            roughness={0.8}
                            emissive={isActive ? "#A02234" : "#000000"}
                            emissiveIntensity={isActive ? 0.2 : 0}
                        />
                    </Box>
                );
            })}
        </group>
    );
}
