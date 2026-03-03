import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { FloatingCluster } from '../components/3d/FloatingCluster';
import { MagneticButton } from '../components/ui/MagneticButton';

export const Hero = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    const textVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        })
    };

    return (
        <section id="hero" ref={container} className="relative min-h-screen flex items-center pt-32 pb-16 px-6 md:px-12 overflow-hidden mx-auto max-w-[1400px]">
            {/* Red gradient bleed */}
            <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(123,26,40,0.15)_0%,transparent_65%)] pointer-events-none" />

            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(26,10,12,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,10,12,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse 80% 80% at 60% 50%, black 40%, transparent 100%)'
                }}
            />

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div style={{ y }} className="flex flex-col items-start pr-0 md:pr-12">
                    <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[0.02em] uppercase text-text">
                        <motion.span custom={1} initial="hidden" animate="visible" variants={textVariants} className="block">Hello,</motion.span>
                        <motion.span custom={2} initial="hidden" animate="visible" variants={textVariants} className="block">I'm Raffath</motion.span>
                        <motion.span custom={3} initial="hidden" animate="visible" variants={textVariants} className="flex items-center gap-[0.2em]">
                            <span className="text-crimson">—</span> <em className="not-italic text-crimson">Hasna.</em>
                        </motion.span>
                    </h1>

                    <motion.p
                        custom={4} initial="hidden" animate="visible" variants={textVariants}
                        className="font-mono text-[0.78rem] text-text-muted mt-6 leading-[1.8] max-w-[400px]"
                    >
                        B.Sc Computer Science Student &nbsp;/&nbsp; Backend Developer<br />
                        AI Enthusiast &nbsp;/&nbsp; Django &amp; REST API Architect
                    </motion.p>

                    <motion.div
                        custom={5} initial="hidden" animate="visible" variants={textVariants}
                        className="flex flex-wrap gap-4 mt-10"
                    >
                        <MagneticButton href="#projects" variant="primary">View Projects</MagneticButton>
                        <MagneticButton href="#contact" variant="outline">Get In Touch</MagneticButton>
                    </motion.div>
                </motion.div>

                {/* Right 3D Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-[400px] md:h-[500px] w-full relative"
                >
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        dpr={[1, 1.5]}
                        frameloop="demand"
                        shadows
                        className="pointer-events-none"
                    >
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
                        <pointLight position={[-5, -5, -5]} intensity={0.5} />
                        <React.Suspense fallback={null}>
                            <FloatingCluster />
                            <Environment preset="city" />
                        </React.Suspense>
                    </Canvas>

                    {/* HUD Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}
                        className="absolute top-[20%] -left-8 bg-white border border-border px-4 py-3 font-mono text-[0.62rem] tracking-[0.08em] uppercase text-text flex items-center gap-2 shadow-[0_4px_20px_rgba(26,10,12,0.08)] whitespace-nowrap"
                    >
                        <div className="w-2 h-2 bg-crimson shrink-0" /> Backend Systems
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.6 }}
                        className="absolute top-[50%] -right-8 bg-white border border-border px-4 py-3 font-mono text-[0.62rem] tracking-[0.08em] uppercase text-text flex items-center gap-2 shadow-[0_4px_20px_rgba(26,10,12,0.08)] whitespace-nowrap"
                    >
                        <div className="w-2 h-2 bg-crimson shrink-0" /> REST APIs
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
