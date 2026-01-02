import React from 'react';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

export default function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
    return (
        <section id={id} className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
            <div className={`section-container relative z-10 ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
}
