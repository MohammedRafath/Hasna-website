import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

export const Contact = () => {
    const [btnText, setBtnText] = useState('Send Message →');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBtnText('Sending...');

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                setBtnText('Sent! ✓');
                (e.target as HTMLFormElement).reset();
            } else {
                console.error("Error submitting form", data);
                setBtnText('Error ✗');
            }
        } catch (error) {
            console.error("Network error submitting form", error);
            setBtnText('Error ✗');
        }

        setTimeout(() => setBtnText('Send Message →'), 2800);
    };

    return (
        <section id="contact" className="relative bg-crimson-dark overflow-hidden">
            {/* Dark section glow */}
            <div className="absolute -right-[300px] -bottom-[300px] w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(160,34,52,0.6)_0%,transparent_65%)] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase font-bold bg-white/10 text-white px-3 py-[0.3rem] mb-6">
                        Get In Touch <span className="text-white/50 ml-1">||</span>
                    </div>
                    <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] uppercase text-white">
                        Take Control<br />
                        <span className="flex items-center gap-[0.2em]"><span className="text-white/30">—</span> Of The Conversation.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <p className="font-mono text-[0.78rem] leading-[1.9] text-white/50 mb-8 max-w-md">
                            I'm open to interesting projects, collaborations, and conversations about backend systems, AI applications, or anything at the intersection of technology and craft.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="mailto:raffathhasna@gmail.com" className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 text-white no-underline font-mono text-[0.72rem] tracking-[0.06em] clip-edges transition-all hover:bg-white/10 hover:translate-x-1">
                                <div className="w-8 h-8 bg-crimson/50 border border-white/10 flex items-center justify-center shrink-0">
                                    <Mail size={14} className="group-hover:text-white" />
                                </div>
                                raffathhasna@gmail.com
                            </a>
                            <a href="tel:+916385656273" className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 text-white no-underline font-mono text-[0.72rem] tracking-[0.06em] clip-edges transition-all hover:bg-white/10 hover:translate-x-1">
                                <div className="w-8 h-8 bg-crimson/50 border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone size={14} className="group-hover:text-white" />
                                </div>
                                +91 63856 56273
                            </a>
                        </div>

                        <div className="flex gap-3 mt-8">
                            <SocialLink icon={<Linkedin size={14} />} href="#" />
                            <SocialLink icon={<Github size={14} />} href="#" />
                            <SocialLink icon={<Instagram size={14} />} href="#" />
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Full Name</label>
                            <input type="text" id="name" name="name" required placeholder="Your full name" className="bg-white/5 border border-white/10 text-white font-mono text-[0.78rem] p-4 outline-none transition-colors focus:border-white/25 placeholder:text-white/20 clip-edges" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Email</label>
                            <input type="email" id="email" name="email" required placeholder="your@email.com" className="bg-white/5 border border-white/10 text-white font-mono text-[0.78rem] p-4 outline-none transition-colors focus:border-white/25 placeholder:text-white/20 clip-edges" />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="message" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Message</label>
                            <textarea id="message" name="message" required placeholder="Tell me about your project..." className="bg-white/5 border border-white/10 text-white font-mono text-[0.78rem] p-4 outline-none transition-colors focus:border-white/25 placeholder:text-white/20 clip-edges min-h-[110px] resize-none" />
                        </div>

                        <button
                            type="submit"
                            className={`self-start font-mono text-[0.72rem] tracking-[0.12em] uppercase border-none px-8 py-[1rem] font-bold clip-edges transition-all ${btnText === 'Sent! ✓' ? 'bg-[#1a3a1a] text-[#aaffaa]' : btnText === 'Error ✗' ? 'bg-red-900 text-red-200' : 'bg-white text-crimson-dark hover:bg-cream2 hover:-translate-y-0.5'}`}
                        >
                            {btnText}
                        </button>
                    </motion.form>
                </div>
            </div>

            {/* Big marquee */}
            <div className="overflow-hidden border-t border-white/5 py-4 bg-crimson-dark">
                <div className="flex whitespace-nowrap animate-[marquee_12s_linear_infinite]">
                    {[...Array(2)].map((_, idx) => (
                        <React.Fragment key={idx}>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.04] uppercase tracking-[0.04em] px-8 leading-none">Raffath Hasna</span>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.12] px-0 leading-none">✦</span>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.04] uppercase tracking-[0.04em] px-8 leading-none">Backend</span>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.12] px-0 leading-none">✦</span>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.04] uppercase tracking-[0.04em] px-8 leading-none">Developer</span>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.12] px-0 leading-none">✦</span>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.04] uppercase tracking-[0.04em] px-8 leading-none">Python</span>
                            <span className="font-display text-[clamp(4rem,10vw,8rem)] text-white/[0.12] px-0 leading-none">✦</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-cream px-12 py-10 flex flex-col md:flex-row items-center justify-between border-t border-border gap-4 text-center md:text-left">
                <div className="font-mono text-[0.65rem] tracking-[0.08em] text-text-muted">© Raffath Hasna. All rights reserved.</div>
                <div className="font-mono text-[0.65rem] text-text-muted">Chennai, Tamil Nadu, India</div>
            </footer>
        </section>
    );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a
        href={href}
        className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white/50 transition-all hover:bg-crimson hover:text-white hover:scale-110 hover:-rotate-6"
    >
        {icon}
    </a>
);
