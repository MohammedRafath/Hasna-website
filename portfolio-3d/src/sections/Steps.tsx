import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const education = [
    {
        year: '2024 — Present',
        degree: 'B.Sc Computer Science',
        school: 'Thassim Beevi Abdul Kader College for Women · First Year'
    },
    {
        year: 'Completed 2022',
        degree: '12th Standard',
        school: 'Hameediah Matriculation Higher Secondary School'
    }
];

export const Steps = () => {
    const container = useRef(null);

    return (
        <section id="education" ref={container} className="relative bg-cream2 py-32 overflow-hidden min-h-[100vh]">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                {/* Left Side: Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase font-bold bg-crimson text-white px-3 py-[0.3rem] mb-6 shadow-sm">
                            Education <span className="text-white/50 ml-1">||</span>
                        </div>
                        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] uppercase text-text">
                            The Foundations<br />
                            <span className="flex items-center gap-[0.2em]"><span className="text-crimson">—</span> Of Craft.</span>
                        </h2>
                    </motion.div>

                    <div className="mt-16 flex flex-col max-w-2xl">
                        {education.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="grid grid-cols-[100px_1px_1fr] md:grid-cols-[120px_1px_1fr] gap-x-6 gap-y-0 py-10 border-b border-border first:border-t relative"
                            >
                                <div className="font-mono text-[0.7rem] tracking-[0.1em] text-crimson uppercase pt-1">
                                    {item.year.split(/ — | /).map((part, p) => <React.Fragment key={p}>{part}<br /></React.Fragment>)}
                                </div>

                                <div className="flex flex-col items-center relative">
                                    <div className="w-[10px] h-[10px] bg-crimson shrink-0 mt-1 animate-dotPulse" />
                                    <div className="flex-1 w-[1px] bg-border mt-2" />
                                </div>

                                <div>
                                    <div className="font-display text-[2rem] tracking-[0.04em] uppercase leading-none mb-2 text-text">
                                        {item.degree}
                                    </div>
                                    <div className="font-mono text-[0.72rem] text-text-muted tracking-[0.06em]">
                                        {item.school}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Spline 3D Scene */}
                <div className="w-full lg:w-1/2 h-[500px] lg:h-[800px] relative mt-12 lg:mt-0 flex items-center justify-center pointer-events-auto">
                    <Spline scene="https://prod.spline.design/FRqconsjv6NCjF19/scene.splinecode" />
                </div>
            </div>

        </section>
    );
};
