'use client';

import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

// --- Reusable Components for Team Diagram ---

const TeamMember = ({ role, name = "Member Name", imageSrc, delay = 0, scale = 1.05, position = "center" }: { role: string, name?: string, imageSrc?: string, delay?: number, scale?: number, position?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center group"
    >
        {/* Avatar Circle */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-[var(--color-accent)] shadow-md flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,176,0,0.3)] relative overflow-hidden">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        transform: `scale(${scale})`,
                        objectPosition: position
                    }}
                />
            ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-bold uppercase opacity-30">Photo</span>
                </div>
            )}
        </div>

        {/* Info */}
        <div className="text-center">
            <h4 className="font-bold text-[var(--color-primary)] text-sm md:text-base leading-tight mb-1">{name}</h4>
            <span className="text-xs md:text-sm text-gray-500 font-medium px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 inline-block">
                {role}
            </span>
        </div>
    </motion.div>
);

const ConnectingLine = ({ height = "h-8" }) => (
    <div className={`w-px ${height} bg-gray-300 mx-auto`}></div>
);

const HorizontalLine = () => (
    <div className="w-full h-px bg-gray-300 relative top-[-1px]"></div>
);

export default function AboutUs() {
    return (
        <Section id="about" className="bg-white py-20 md:py-32">
            <div className="section-container">

                {/* ------------------------------------------------ */}
                {/* PART 1: OUR MISSION */}
                {/* ------------------------------------------------ */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Subtitle / Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-bold uppercase tracking-wider mb-6">
                            Zero Hunger Initiative
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-8 leading-tight">
                            Who We Are
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p className="font-medium text-[var(--color-primary)]/80 italic border-l-4 border-[var(--color-accent)] pl-4">
                                ZERO HUNGER–Casablanca is a non-profit initiative that aims to help homeless people escape their vulnerable conditions through entrepreneurship-based solutions.
                            </p>

                            <div>
                                <h3 className="text-[var(--color-primary)] font-bold text-xl mb-2">Introduction</h3>
                                <p>
                                    We are a non-profit initiative operating under the administration of Ghayt Charity Association.
                                    The concept was founded by Rachid Beggar, together with a group of creative and compassionate young people, with the goal of raising community awareness about the harsh realities faced by homeless individuals. This mission is carried out through multiple projects, with a particular focus on direct contact with homeless people during our field actions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[var(--color-primary)] font-bold text-xl mb-2">Vision</h3>
                                <p>
                                    The Zero Hunger Initiative envisions the development of innovative and promising strategies for the social reintegration of homeless individuals, as well as the training of volunteers to effectively implement these strategies in the field.
                                    Through a strong spirit of volunteerism and solidarity within our teams, and with the support of sponsors who possess a strong sense of humanity and civic responsibility, we move step by step toward the realization of this vision.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[var(--color-primary)] font-bold text-xl mb-2">Objectives</h3>
                                <p>The primary objective of Zero Hunger is to restore the culture of solidarity, compassion, and benevolence through:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                                    <li>The social reintegration of homeless individuals.</li>
                                    <li>Encouraging young people to take initiative and actively engage in social action.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-1 lg:order-2 bg-white rounded-[2rem] shadow-xl overflow-hidden relative group border-2 border-[var(--color-accent)]/10"
                    >
                        <img
                            src="/about/team-evolution.jpg"
                            alt="Zero Hunger Team Evolution 2023-2025"
                            className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-[var(--color-primary)]/5 transition-colors duration-700 pointer-events-none"></div>
                    </motion.div>

                </div>


                {/* ------------------------------------------------ */}
                {/* PART 2: TEAM ORGANIZATIONAL DIAGRAM */}
                {/* ------------------------------------------------ */}
                <div className="relative pt-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Our Structure</h2>
                        <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col items-center max-w-5xl mx-auto">

                        {/* LEVEL 1: President */}
                        <div className="flex flex-col items-center">
                            <TeamMember role="President" name="Marouane Zahid" imageSrc="/team-avatars/president.png" delay={0.1} />
                            <ConnectingLine height="h-10" />
                        </div>

                        {/* LEVEL 2: Supervisor */}
                        <div className="flex flex-col items-center w-full">
                            <TeamMember role="Supervisor" name="Hajar Er-raji" imageSrc="/team-avatars/supervisor.png" delay={0.2} />
                            <ConnectingLine height="h-10" />
                        </div>

                        {/* LEVEL 3: Bureau Roles */}
                        <div className="flex flex-col items-center w-full relative">
                            {/* Horizontal Line for Level 3 */}
                            <div className="w-3/4 border-t border-gray-300 relative mb-10">
                                <div className="absolute top-0 left-0 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                                <div className="absolute top-0 right-0 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                                <div className="absolute top-0 left-1/3 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                                <div className="absolute top-0 right-1/3 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full mb-4 justify-items-center">
                                <TeamMember role="Social Media Manager" name="Meriwm Raki" imageSrc="/team-avatars/social-media-manager.png" delay={0.3} />
                                <TeamMember role="Human Resources (RH)" name="Zineb Bradaai" imageSrc="/team-avatars/rh.png" delay={0.35} scale={1.3} />
                                <TeamMember role="Coordination Lead" name="Hanaa Hilal" imageSrc="/team-avatars/cordination-lead.png" delay={0.4} scale={1.3} position="50% 45%" />
                                <TeamMember role="Treasurer (Trésorière)" name="Hiba Eddahbi Idrissi" imageSrc="/team-avatars/trisorie.png" delay={0.45} scale={1.3} />
                            </div>

                            {/* Line connecting Level 3 to Level 4 */}
                            <ConnectingLine height="h-10" />
                        </div>

                        {/* LEVEL 4: Team Leads (4 Members) */}
                        <div className="flex flex-col items-center w-full relative">
                            {/* Horizontal Line for Level 4 */}
                            <div className="w-3/4 border-t border-gray-300 relative mb-10">
                                <div className="absolute top-0 left-0 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                                <div className="absolute top-0 right-0 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                                <div className="absolute top-0 left-1/3 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                                <div className="absolute top-0 right-1/3 w-px h-8 bg-gray-300 -translate-y-1/2"></div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 w-full justify-items-center">
                                <TeamMember role="Team Lead Harouchi" name="Hamada Al Amjad" imageSrc="/team-avatars/Team-lead-harouchi.png" delay={0.5} />
                                <TeamMember role="Team Lead Bhira" name="RQIA MBAIRIK" imageSrc="/team-avatars/team-lead-bhira.png" delay={0.55} scale={1.4} position="65% 50%" />
                                <TeamMember role="Team Lead Bourgone" name="Mehdi El Mouadab" imageSrc="/team-avatars/team-lead-bourgone.png" delay={0.6} scale={1.4} position="22% 50%" />
                                <TeamMember role="Team Lead Maarif" name="Zouheir Nejmi" imageSrc="/team-avatars/team-lead-maarif.jpg" delay={0.65} scale={1.3} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Section>
    );
}
