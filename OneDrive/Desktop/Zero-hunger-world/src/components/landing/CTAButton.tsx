import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    className?: string;
    fullWidth?: boolean;
}

export default function CTAButton({ href, children, variant = 'primary', className = '', fullWidth = false }: CTAButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 active:scale-95 rounded-full";
    const sizeStyles = "px-8 py-3.5 text-base md:text-lg";

    let variantStyles = "";

    if (variant === 'primary') {
        // Yellow Gradient
        variantStyles = "bg-gradient-to-r from-[var(--color-accent)] to-[#ffca4d] text-[var(--color-primary)] shadow-[0_10px_30px_-10px_rgba(255,176,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(255,176,0,0.6)]";
    } else if (variant === 'outline') {
        variantStyles = "border-2 border-[var(--color-background)]/30 text-[var(--color-background)] hover:bg-[var(--color-background)]/10 backdrop-blur-sm";
    } else if (variant === 'ghost') {
        variantStyles = "text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5";
    }

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <Link
            href={href}
            className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthClass} ${className}`}
        >
            {children}
        </Link>
    );
}
