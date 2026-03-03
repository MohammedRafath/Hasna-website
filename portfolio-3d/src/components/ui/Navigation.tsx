import { useState, useEffect } from 'react';

export const Navigation = () => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-cream/85 backdrop-blur-[20px] border-b border-border">
            <a href="#hero" className="flex items-center gap-2 font-mono text-[0.72rem] font-bold tracking-[0.06em] text-text no-underline">
                <div className="w-[28px] h-[28px] grid grid-cols-2 gap-[2px]">
                    <span className="block bg-crimson rounded-[1px] h-[12px]" />
                    <span className="block bg-crimson rounded-[1px] h-[8px] mt-[4px]" />
                    <span className="block bg-crimson rounded-[1px] h-[8px]" />
                    <span className="block bg-crimson rounded-[1px] h-[12px]" />
                </div>
                Raffath Hasna
            </a>

            <ul className="hidden md:flex items-center gap-0 list-none m-0 p-0">
                <NavItem href="#about" label="About" isActive={activeId === 'about'} />
                <NavItem href="#education" label="Education" isActive={activeId === 'education'} />
                <NavItem href="#projects" label="Projects" isActive={activeId === 'projects'} />
                <NavItem href="#skills" label="Skills" isActive={activeId === 'skills'} />
                <NavItem href="#contact" label="Contact" isActive={activeId === 'contact'} isLast />
            </ul>

            <a href="#contact" className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-white bg-crimson border-none px-6 py-[0.6rem] no-underline transition-colors hover:bg-crimson-light clip-edges">
                Hire Me
            </a>
        </nav>
    );
};

const NavItem = ({ href, label, isActive, isLast = false }: { href: string, label: string, isActive: boolean, isLast?: boolean }) => (
    <li className="flex items-center">
        <a href={href} className={`font-mono text-[0.68rem] tracking-[0.1em] uppercase no-underline transition-colors ${isActive ? 'text-crimson' : 'text-text-mid hover:text-crimson'}`}>
            {label}
        </a>
        {!isLast && <span className="text-text-muted mx-[0.8rem] font-mono text-[0.7rem]">/</span>}
    </li>
);
