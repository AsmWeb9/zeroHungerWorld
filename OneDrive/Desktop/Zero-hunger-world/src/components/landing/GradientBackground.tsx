import React from 'react';

interface GradientBackgroundProps {
    variant?: 'light' | 'dark' | 'accent';
    className?: string;
    children?: React.ReactNode;
}

export default function GradientBackground({ variant = 'light', className = '', children }: GradientBackgroundProps) {
    const baseClasses = "absolute inset-0 pointer-events-none overflow-hidden -z-10";

    let gradientOverlay = "";

    if (variant === 'light') {
        // Subtle background for light sections
        gradientOverlay = (
            <>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-10)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent-20)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_15s_ease-in-out_infinite_reverse]"></div>
            </>
        ) as unknown as string; // Quick casting fix, ReactNode is correct actually but simplified
    } else if (variant === 'dark') {
        // Rich dark background
        gradientOverlay = (
            <>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[#092e3b] to-[var(--color-primary)]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[100px]"></div>
            </>
        ) as unknown as string;
    } else if (variant === 'accent') {
        // Golden glow
        gradientOverlay = (
            <>
                <div className="absolute inset-0 bg-[var(--color-muted)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(var(--color-accent-rgb),0.15),transparent_70%)]"></div>
            </>
        ) as unknown as string;
    }

    // Fixing the JSX return for real component
    return (
        <div className={`${baseClasses} ${className}`}>
            {variant === 'light' && (
                <>
                    <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-900/5 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-yellow-500/5 rounded-full blur-3xl opacity-60"></div>
                </>
            )}
            {variant === 'dark' && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[#083040]"></div>
                    <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[var(--color-accent)]/10 rounded-full blur-[120px]"></div>
                </>
            )}
            {variant === 'accent' && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,176,0,0.08),transparent_70%)]"></div>
            )}
            {children}
        </div>
    );
}
