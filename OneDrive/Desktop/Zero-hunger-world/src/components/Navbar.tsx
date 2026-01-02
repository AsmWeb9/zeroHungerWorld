"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    if (pathname.startsWith('/dashboard')) return null;

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-primary">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-accent">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    ZeroHunger
                </Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-text">
                    <Link href="/about" className="hover:text-primary transition-colors">Mission</Link>
                    <Link href="/impact" className="hover:text-primary transition-colors">Impact</Link>
                    <Link href="/academy" className="hover:text-primary transition-colors">Academy</Link>
                </div>
                <Link href="/login" className="btn-accent">
                    Portal Access
                </Link>
            </div>
        </nav>
    );
}
