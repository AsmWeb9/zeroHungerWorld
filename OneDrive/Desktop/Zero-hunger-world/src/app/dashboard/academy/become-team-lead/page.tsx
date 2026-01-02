'use client';

import React, { useState } from 'react';
import {
    ArrowLeft,
    CheckCircle2,
    XCircle,
    Trophy,
    ChevronRight,
    Brain,
    Lightbulb,
    Users,
    ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    '/academy/formations/become-team-lead/slide-1.jpg',
    '/academy/formations/become-team-lead/slide-2.jpg',
    '/academy/formations/become-team-lead/slide-3.jpg',
    '/academy/formations/become-team-lead/slide-4.jpg',
    '/academy/formations/become-team-lead/slide-5.jpg',
    '/academy/formations/become-team-lead/slide-6.jpg',
    '/academy/formations/become-team-lead/slide-7.jpg',
    '/academy/formations/become-team-lead/slide-8.jpg',
    '/academy/formations/become-team-lead/slide-9.jpg',
    '/academy/formations/become-team-lead/slide-10.jpg',
    '/academy/formations/become-team-lead/slide-11.jpg',
    '/academy/formations/become-team-lead/slide-12.jpg',
    '/academy/formations/become-team-lead/slide-13.jpg',
    '/academy/formations/become-team-lead/slide-14.jpg',
    '/academy/formations/become-team-lead/slide-15.jpg',
    '/academy/formations/become-team-lead/slide-16.jpg',
    '/academy/formations/become-team-lead/slide-17.jpg',
    '/academy/formations/become-team-lead/slide-18.jpg',
    '/academy/formations/become-team-lead/slide-19.jpg',
    '/academy/formations/become-team-lead/slide-20.jpg',
    '/academy/formations/become-team-lead/slide-21.jpg',
    '/academy/formations/become-team-lead/slide-22.jpg',
    '/academy/formations/become-team-lead/slide-23.jpg',
    '/academy/formations/become-team-lead/slide-24.jpg',
    '/academy/formations/become-team-lead/slide-25.jpg',
    '/academy/formations/become-team-lead/slide-26.jpg',
    '/academy/formations/become-team-lead/slide-27.jpg',
    '/academy/formations/become-team-lead/slide-28.jpg',
    '/academy/formations/become-team-lead/slide-29.jpg',
    '/academy/formations/become-team-lead/slide-30.jpg',
    '/academy/formations/become-team-lead/slide-31.jpg',
    '/academy/formations/become-team-lead/slide-32.jpg',
    '/academy/formations/become-team-lead/slide-33.jpg'
];

const quizQuestions = [
    {
        question: "Quel est le titre officiel de cette formation ?",
        options: [
            "Guide du bénévole",
            "Comment Devenir Chef d’équipe ?",
            "Processus Social Investment",
            "Gestion des stocks"
        ],
        correct: 1
    },
    {
        question: "Parmi ces initiatives, laquelle n'est pas mentionnée dans la slide des logos ?",
        options: [
            "Zero Hunger",
            "Ghayt Charity Association",
            "Athar",
            "Global Food Relief"
        ],
        correct: 3
    },
    {
        question: "Quel est 'le rôle ultime' du Chef d'équipe selon la formation ?",
        options: [
            "Distribuer le plus de repas possible",
            "Former des mini-chefs d'équipe autonomes",
            "Savoir utiliser Excel parfaitement",
            "Recruter 100 nouveaux bénévoles"
        ],
        correct: 1
    },
    {
        question: "Quelle est la durée moyenne de la phase de travail 'Cas Go' ?",
        options: [
            "1 semaine",
            "2-3 semaines",
            "7-8 semaines",
            "6 mois"
        ],
        correct: 2
    }
];

export default function BecomeTeamLeadPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
    const [answers, setAnswers] = useState<number[]>(new Array(quizQuestions.length).fill(-1));
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (qIdx: number, oIdx: number) => {
        if (submitted) return;
        const newAnswers = [...answers];
        newAnswers[qIdx] = oIdx;
        setAnswers(newAnswers);
    };

    const nextSlide = () => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
    const prevSlide = () => setCurrentSlide(prev => Math.max(0, prev - 1));

    const nextQuiz = () => setCurrentQuizIdx(prev => Math.min(quizQuestions.length - 1, prev + 1));
    const prevQuiz = () => setCurrentQuizIdx(prev => Math.max(0, prev - 1));

    const score = answers.reduce((acc, curr, idx) => curr === quizQuestions[idx].correct ? acc + 1 : acc, 0);

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            {/* Header */}
            <div className="flex items-center gap-6">
                <Link href="/dashboard/academy" className="p-4 bg-white rounded-2xl border border-gray-100 text-[#134B5F] hover:bg-[#F2C830] transition-all shadow-sm">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-[#F2C830]" />
                        <span className="text-[10px] font-black uppercase text-[#F2C830] tracking-widest">Leadership Module</span>
                    </div>
                    <h1 className="text-2xl font-black text-[#134B5F]">Comment Devenir Chef d’équipe ?</h1>
                </div>
            </div>

            {/* Slides Carousel */}
            <div className="space-y-6">
                <div className="flex items-center justify-between px-4">
                    <span className="text-[10px] font-black text-[#134B5F]/40 uppercase tracking-widest">Contenu de Formation</span>
                    <span className="text-[10px] font-black text-[#134B5F]/40 uppercase">Slide {currentSlide + 1} / {slides.length}</span>
                </div>

                <div className="relative group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white p-4 rounded-[2.5rem] border border-gray-100 shadow-2xl w-full aspect-[16/9] flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={slides[currentSlide]}
                                alt={`Slide ${currentSlide + 1}`}
                                className="w-full h-full object-contain rounded-2xl"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-y-0 -left-6 -right-6 flex items-center justify-between pointer-events-none">
                        <button
                            disabled={currentSlide === 0}
                            onClick={prevSlide}
                            className={`p-4 rounded-full bg-white shadow-xl border border-gray-100 text-[#134B5F] pointer-events-auto transition-all ${currentSlide === 0 ? 'opacity-0 scale-90' : 'hover:bg-[#F2C830] hover:scale-110'}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            disabled={currentSlide === slides.length - 1}
                            onClick={nextSlide}
                            className={`p-4 rounded-full bg-white shadow-xl border border-gray-100 text-[#134B5F] pointer-events-auto transition-all ${currentSlide === slides.length - 1 ? 'opacity-0 scale-90' : 'hover:bg-[#F2C830] hover:scale-110'}`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Continuous Progress Bar Slides */}
                <div className="px-4">
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={false}
                            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                            className="h-full bg-[#134B5F]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>
            </div>

            {/* Quiz Section (Carousel Style) */}
            {currentSlide === slides.length - 1 && (
                <div className="relative pt-12">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#F2C830] to-[#134B5F] rounded-[3rem] blur opacity-5"></div>
                    <div className="relative bg-white border border-gray-100 rounded-[3rem] p-10 shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-purple-50 rounded-2xl">
                                    <Brain className="w-6 h-6 text-purple-600" />
                                </div>
                                <h2 className="text-xl font-black text-[#134B5F]">Validation Leadership</h2>
                            </div>
                            {!submitted && (
                                <span className="text-xs font-black text-gray-300 uppercase">Question {currentQuizIdx + 1} / {quizQuestions.length}</span>
                            )}
                        </div>

                        {/* Continuous Progress Bar Quiz */}
                        {!submitted && (
                            <div className="px-10 mb-8">
                                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={false}
                                        animate={{ width: `${((currentQuizIdx + 1) / quizQuestions.length) * 100}%` }}
                                        className="h-full bg-[#F2C830]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                </div>
                            </div>
                        )}

                        {!submitted ? (
                            <div className="space-y-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentQuizIdx}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        className="space-y-8"
                                    >
                                        <h3 className="text-2xl font-bold text-[#134B5F] leading-snug">
                                            {quizQuestions[currentQuizIdx].question}
                                        </h3>

                                        <div className="grid grid-cols-1 gap-4">
                                            {quizQuestions[currentQuizIdx].options.map((option, oIdx) => {
                                                const isSelected = answers[currentQuizIdx] === oIdx;
                                                return (
                                                    <button
                                                        key={oIdx}
                                                        onClick={() => handleSelect(currentQuizIdx, oIdx)}
                                                        className={`p-6 rounded-[1.5rem] border-2 text-left transition-all duration-300 flex items-center justify-between group/btn ${isSelected
                                                            ? 'bg-[#134B5F] border-[#134B5F] text-white shadow-lg'
                                                            : 'bg-white border-gray-100 text-gray-600 hover:border-[#F2C830]/50 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        <span className="font-bold">{option}</span>
                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-[#F2C830] bg-[#F2C830]' : 'border-gray-200'}`}>
                                                            {isSelected && <div className="w-2 h-2 rounded-full bg-[#134B5F]"></div>}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                                    <button
                                        onClick={prevQuiz}
                                        disabled={currentQuizIdx === 0}
                                        className={`flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all ${currentQuizIdx === 0 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-[#134B5F]'}`}
                                    >
                                        <ChevronLeft className="w-4 h-4" /> Précédent
                                    </button>

                                    {currentQuizIdx < quizQuestions.length - 1 ? (
                                        <button
                                            onClick={nextQuiz}
                                            disabled={answers[currentQuizIdx] === -1}
                                            className={`flex items-center gap-2 px-8 py-4 bg-[#134B5F] text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all ${answers[currentQuizIdx] === -1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F2C830] hover:text-[#134B5F] hover:shadow-lg'}`}
                                        >
                                            Suivant <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setSubmitted(true)}
                                            disabled={answers.includes(-1)}
                                            className={`flex items-center gap-2 px-8 py-4 bg-[#F2C830] text-[#134B5F] rounded-xl font-black text-xs uppercase tracking-widest transition-all ${answers.includes(-1) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg scale-105'}`}
                                        >
                                            Terminer le Quiz <CheckCircle2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center space-y-8 py-4"
                            >
                                <div className="relative inline-block">
                                    <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                        <Trophy className="w-12 h-12 text-[#F2C830]" />
                                    </div>
                                    <div className="absolute inset-0 bg-[#F2C830]/20 blur-2xl rounded-full -z-10"></div>
                                </div>

                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Résultat Final</p>
                                    <h4 className="text-6xl font-black text-[#134B5F] mb-4">
                                        {score} <span className="text-2xl text-gray-300">/ {quizQuestions.length}</span>
                                    </h4>
                                    <p className="text-gray-500 font-medium italic">
                                        {score === quizQuestions.length
                                            ? "Expert ! Vous avez parfaitement assimilé les codes du leadership."
                                            : "Félicitations ! Vous êtes sur la bonne voie pour devenir un leader."}
                                    </p>
                                </div>

                                <div className="flex justify-center gap-4 pt-4">
                                    <button
                                        onClick={() => { setSubmitted(false); setAnswers(new Array(quizQuestions.length).fill(-1)); setCurrentQuizIdx(0); }}
                                        className="px-8 py-4 rounded-xl font-bold border-2 border-gray-100 text-gray-500 hover:bg-gray-50 transition-all"
                                    >
                                        Réessayer
                                    </button>
                                    <Link
                                        href="/dashboard/academy"
                                        className="px-8 py-4 rounded-xl font-bold bg-[#134B5F] text-white hover:bg-[#F2C830] hover:text-[#134B5F] transition-all"
                                    >
                                        Terminer
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            )}

            {/* Support Note */}
            <div className="flex items-center gap-6 p-8 bg-purple-50/30 rounded-[2rem] border border-purple-100/50">
                <Lightbulb className="w-8 h-8 text-purple-600" />
                <p className="text-purple-700 text-sm italic">
                    <strong>Conseil de leader :</strong> Un bon Chef d'équipe sait quand écouter et quand agir.
                </p>
            </div>
        </div>
    );
}
