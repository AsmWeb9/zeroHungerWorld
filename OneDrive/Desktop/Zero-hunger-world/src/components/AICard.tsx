import React from 'react';

interface AICardProps {
    type: 'COURSE' | 'EVENT' | 'ROLE';
    title: string;
    subtitle: string;
    badge?: string;
    reason: string;
    score?: number;
}

export default function AICard({ type, title, subtitle, badge, reason, score }: AICardProps) {
    return (
        <div className="card hover:-translate-y-1 duration-300 border-l-4 border-l-transparent hover:border-l-accent group relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${type === 'COURSE' ? 'bg-primary/10 text-primary' :
                            type === 'EVENT' ? 'bg-accent/20 text-text' :
                                'bg-muted text-text'
                        }`}>
                        {type}
                    </span>
                    {score && score > 0.8 && (
                        <span className="flex items-center text-xs font-bold text-primary">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-1 animate-pulse"></span>
                            {(score * 100).toFixed(0)}% Match
                        </span>
                    )}
                </div>

                <h3 className="text-lg font-bold text-text mb-2">{title}</h3>
                <p className="text-sm text-text/70 mb-4">{subtitle}</p>

                <div className="bg-muted rounded-lg p-3 border border-gray-100 flex gap-2">
                    <span className="text-accent">✨</span>
                    <p className="text-xs text-text/80 italic">"{reason}"</p>
                </div>
            </div>
        </div>
    );
}
