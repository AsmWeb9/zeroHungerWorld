import React from 'react';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary-dark)] text-white py-12 border-t border-white/5">
            <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                        <img
                            src="/logo.png"
                            alt="Zero Hunger Logo"
                            className="w-10 h-10 rounded-full bg-white object-cover"
                        />
                        <span className="font-bold text-xl tracking-tight text-white">Zero Hunger</span>
                    </div>
                    <p className="text-white/40 text-sm">© 2025 Zero Hunger Intelligence. Open Source Humanity.</p>
                </div>

                <div className="flex gap-8 text-sm text-white/60 items-center">
                    <a
                        href="https://www.instagram.com/zerohungerworld/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#E4405F] transition-all hover:scale-110"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms</a>
                    <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Transparency Report</a>
                </div>
            </div>
        </footer>
    );
}
