import React from 'react';

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function SectionContainer({ children, className = '', id }: SectionContainerProps) {
    return (
        <div id={id} className={`section-container py-20 ${className}`}>
            {children}
        </div>
    );
}
