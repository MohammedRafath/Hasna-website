import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Radio from '../components/ui/Radio';
import './MagicCard.css';

const projects = [
    {
        id: '01',
        title: 'Django E-Commerce Platform',
        desc: "Full-featured e-commerce solution with cart management, product catalog, order processing, and secure payment integration. Built on Django's robust ORM and REST framework with a focus on scalable architecture.",
        tags: ['Django', 'Python', 'REST API', 'PostgreSQL']
    },
    {
        id: '02',
        title: 'AI Chat Interface',
        desc: 'Intelligent conversational interface powered by modern LLM APIs. Features real-time streaming, conversation history, context management, and a clean UX that makes AI feel human and accessible.',
        tags: ['Python', 'LLM APIs', 'WebSocket', 'AI']
    },
    {
        id: '03',
        title: 'Bank Management System',
        desc: 'Secure core-banking application handling accounts, transactions, and user verification. Encrypted data handling with role-based access control and audit logging for compliance-grade security.',
        tags: ['Python', 'Security', 'MySQL', 'OOP']
    },
    {
        id: '04',
        title: 'Job Portal API',
        desc: 'RESTful job portal backend supporting employer listings, candidate profiles, advanced search/filtering, and application tracking. JWT authentication with fully documented OpenAPI spec for seamless integration.',
        tags: ['Python', 'Django REST', 'JWT', 'OpenAPI']
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="relative bg-crimson-dark py-32 overflow-hidden text-white">
            {/* Dark section glow */}
            <div className="absolute -left-[300px] -top-[300px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(123,26,40,0.8)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* About Info & Section Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center" id="about">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase font-bold bg-white/10 text-white px-3 py-[0.3rem] mb-6">
                            About Me <span className="text-white/50 ml-1">||</span>
                        </div>
                        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] uppercase">
                            Understanding<br />
                            <span className="flex items-center gap-[0.2em]"><span className="text-white/30">—</span> Who I Am.</span>
                        </h2>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="font-body text-[0.95rem] leading-[1.9] text-white/70 space-y-4">
                        <p>I'm Raffath Hasna, a first-year B.Sc Computer Science student with a deep focus on backend architecture and AI-driven interfaces. I build systems that are clean, reliable, and built to scale.</p>
                        <p>My work centers on Django-powered REST APIs, database modeling, and integrating intelligent AI interfaces that transform complex technology into human-readable experiences.</p>
                        <p>Currently exploring the intersection of software engineering and machine learning — where structured logic meets creative intelligence, and where every endpoint tells a story.</p>
                    </motion.div>
                </div>

                {/* Projects Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 flex justify-between items-center flex-wrap gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase font-bold bg-white/10 text-white px-3 py-[0.3rem] mb-6">
                            Projects <span className="text-white/50 ml-1">||</span>
                        </div>
                        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] uppercase">
                            Things I've<br />
                            <span className="flex items-center gap-[0.2em]"><span className="text-white/30">—</span> <em className="not-italic text-white/40">Built.</em></span>
                        </h2>
                        <p className="font-mono text-[0.75rem] text-white/40 mt-4 max-w-[400px] leading-[1.8]">Selected work — backend systems, APIs, and AI interfaces built with precision and purpose.</p>
                    </div>

                    {/* Fun Interactive Element */}
                    <div className="hidden lg:block relative z-20 md:pr-12 lg:pr-24">
                        <Radio />
                    </div>
                </motion.div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((proj, i) => (
                        <ProjectCard key={proj.id} project={proj} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
            className="magic-card group"
        >
            <div className="magic-card-info p-10 flex flex-col items-start w-full">
                <div className="flex justify-between items-center font-mono text-[0.6rem] tracking-[0.15em] text-white/40 mb-8 uppercase w-full">
                    <span>Project</span>
                    <div className="font-display text-[2rem] text-white/5 leading-none">{project.id}</div>
                </div>

                <h3 className="font-display text-[2rem] tracking-[0.03em] uppercase leading-none mb-4 group-hover:text-[#f7ba2b] transition-colors duration-700">{project.title}</h3>
                <p className="text-[0.85rem] text-white/70 leading-[1.75] mb-6 relative z-10">{project.desc}</p>

                <div className="flex flex-wrap gap-[0.4rem] mb-6 relative z-10">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="font-mono text-[0.58rem] tracking-[0.1em] uppercase border border-white/20 text-[#f7ba2b] px-[0.6rem] py-[0.25rem] rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6 mt-auto pt-6 border-t border-white/10 relative z-10 w-full">
                    <a href="#" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#ea5358] flex items-center gap-[0.4rem] transition-all hover:gap-[0.7rem] hover:text-[#f7ba2b]">
                        GitHub <span className="text-[0.8rem]">→</span>
                    </a>
                    <a href="#" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#ea5358] flex items-center gap-[0.4rem] transition-all hover:gap-[0.7rem] hover:text-[#f7ba2b]">
                        Live Demo <span className="text-[0.8rem]">→</span>
                    </a>
                </div>
            </div>
        </motion.article>
    );
};
