import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LogoLoop } from '../components/ui/LogoLoop';
import type { LogoItem } from '../components/ui/LogoLoop';

const skills = [
    { name: 'Python', pct: 92 },
    { name: 'Django & REST', pct: 85 },
    { name: 'C / C++', pct: 78 },
    { name: 'Prompt Engineering', pct: 88 },
    { name: 'SQL & Databases', pct: 80 },
    { name: 'AI & ML Concepts', pct: 75 }
];

const backendTags: LogoItem[] = [
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">DJANGO REST FRAMEWORK</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">POSTGRESQL</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">FASTAPI</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">GRAPHQL</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">DOCKER</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">REDIS</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">NGINX</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">AWS</span> },
    { node: <span className="font-mono text-[0.8rem] font-bold text-text tracking-widest px-4">MYSQL</span> }
];

export const Stats = () => {
    return (
        <section id="skills" className="bg-cream py-32 overflow-hidden">

            {/* Top Marquee */}
            <div className="overflow-hidden border-y border-border py-3 bg-cream2 mb-32">
                <div className="flex w-max whitespace-nowrap animate-marquee will-change-transform">
                    {[...Array(2)].map((_, idx) => (
                        <React.Fragment key={idx}>
                            <span className="font-display text-[1.8rem] tracking-[0.05em] text-text uppercase px-8 opacity-25">Raffath Hasna</span>
                            <span className="text-crimson opacity-50 px-2 font-display">✦</span>
                            <span className="font-display text-[1.8rem] tracking-[0.05em] text-crimson uppercase px-8 opacity-100">Backend Developer</span>
                            <span className="text-crimson opacity-50 px-2 font-display">✦</span>
                            <span className="font-display text-[1.8rem] tracking-[0.05em] text-text uppercase px-8 opacity-25">Django · REST APIs</span>
                            <span className="text-crimson opacity-50 px-2 font-display">✦</span>
                            <span className="font-display text-[1.8rem] tracking-[0.05em] text-text uppercase px-8 opacity-25">AI Enthusiast</span>
                            <span className="text-crimson opacity-50 px-2 font-display">✦</span>
                            <span className="font-display text-[1.8rem] tracking-[0.05em] text-crimson uppercase px-8 opacity-100">Python Architect</span>
                            <span className="text-crimson opacity-50 px-2 font-display">✦</span>
                            <span className="font-display text-[1.8rem] tracking-[0.05em] text-text uppercase px-8 opacity-25">CS Student</span>
                            <span className="text-crimson opacity-50 px-2 font-display">✦</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase font-bold bg-crimson text-white px-3 py-[0.3rem] mb-6">
                        Technical Skills <span className="text-white/50 ml-1">||</span>
                    </div>
                    <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] uppercase text-text">
                        Tools Of<br />
                        <span className="flex items-center gap-[0.2em]"><span className="text-crimson">—</span> The Trade.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-16 items-center">

                    {/* Visual Left */}
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                        className="relative h-[380px] w-full hidden md:block" // Hidden on mobile per HTML
                    >
                        {/* Perspective grid */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(123,26,40,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(123,26,40,0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                                transform: 'perspective(400px) rotateX(35deg)',
                                transformOrigin: 'bottom',
                                maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 80%)'
                            }}
                        />
                        {/* Center Orb */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                            <div className="font-display text-9xl text-text opacity-5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">5+</div>
                            <div className="w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(123,26,40,0.3)_0%,transparent_70%)] border border-border-crimson animate-orbPulse z-20 relative" />
                        </div>

                        {/* Floating Tags */}
                        <FloatingTag style={{ top: '15%', left: '10%', animationDelay: '0s' }}>Python</FloatingTag>
                        <FloatingTag style={{ top: '20%', right: '8%', animationDelay: '0.8s' }}>Django</FloatingTag>
                        <FloatingTag style={{ bottom: '25%', left: '5%', animationDelay: '1.6s' }}>REST APIs</FloatingTag>
                        <FloatingTag style={{ bottom: '18%', right: '10%', animationDelay: '2.4s' }}>Prompt Eng.</FloatingTag>
                        <FloatingTag style={{ top: '50%', left: '-2%', animationDelay: '0.4s' }}>C / C++</FloatingTag>
                        <FloatingTag style={{ top: '50%', right: '-2%', animationDelay: '1.2s' }}>SQL</FloatingTag>
                    </motion.div>

                    {/* Animated Stats Right */}
                    <div className="flex flex-col gap-7">
                        {skills.map((skill, index) => (
                            <SkillBar key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

                {/* Logo Loop Track */}
                <div className="mt-32 pt-16 border-t border-border w-[100vw] relative left-1/2 -ml-[50vw]">
                    <div className="mb-8 text-center font-mono text-[0.6rem] tracking-[0.2em] text-text-muted uppercase">
                        Technologies & Integrations
                    </div>
                    <LogoLoop
                        logos={backendTags}
                        speed={100}
                        direction="left"
                        fadeOut={true}
                        fadeOutColor="transparent"
                        pauseOnHover={true}
                    />
                </div>
            </div>
        </section>
    );
};

const SkillBar = ({ skill, index }: { skill: any, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref}>
            <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-text">{skill.name}</span>
                <span className="font-mono text-[0.68rem] text-crimson">{skill.pct}%</span>
            </div>
            <div className="h-[2px] bg-black/10 relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 bottom-0 bg-crimson"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.pct}%` } : {}}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                />
            </div>
        </div>
    );
}

const FloatingTag = ({ children, style }: { children: React.ReactNode, style: any }) => (
    <div
        className="absolute font-mono text-[0.62rem] tracking-[0.1em] uppercase bg-white border border-border-crimson text-crimson px-3 py-1 whitespace-nowrap animate-floatTag z-30"
        style={style}
    >
        {children}
    </div>
);
