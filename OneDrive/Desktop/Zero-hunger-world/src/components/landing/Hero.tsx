'use client';

import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Carousel images - ALL 15 images included
const carouselImages = [
    '/hero-carousel/image1.jpeg',
    '/hero-carousel/image2.jpeg',
    '/hero-carousel/image3.jpeg',
    '/hero-carousel/image4.jpeg',
    '/hero-carousel/image5.jpeg',
    '/hero-carousel/image6.jpeg',
    '/hero-carousel/image7.jpeg',
    '/hero-carousel/image8.jpeg',
    '/hero-carousel/image9.jpeg',
    '/hero-carousel/image10.jpeg',
    '/hero-carousel/image11.jpeg'
];

// Adjustable opacity for text readability (0.0 to 1.0)
const OVERLAY_OPACITY = 0.65;

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate carousel
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
        }, 1500); // 1.5 seconds interval between images

        return () => clearInterval(timer);
    }, [isPaused]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Layer (prevents white flashes) - z-0 */}
            <div className="absolute inset-0 z-0 bg-black" />

            {/* Image Carousel - z-10 */}
            <div className="absolute inset-0 z-10">
                {carouselImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                aria-label="Next image"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Carousel Indicators (z-30) */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full shadow-lg ${index === currentIndex
                            ? 'w-8 h-2 bg-[var(--color-accent)]'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="section-container relative z-20 text-center max-w-5xl pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >


                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] mb-8 mt-20 drop-shadow-2xl">
                        <span className="text-white">ZERO HUNGER</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C830] to-[#FF8C00]">
                            WORLD
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        ALL FOR BETTER LIVES <br /> معاً لمستقبل أفضل
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <CTAButton href="#join-us" className="text-lg px-10 py-4 shadow-[0_0_40px_rgba(255,176,0,0.4)]">
                            Join the Movement
                        </CTAButton>
                        <CTAButton href="#realisations" variant="outline" className="text-lg px-10 py-4 border-white/40 hover:bg-white/10 text-white">
                            See Our Impact
                        </CTAButton>
                    </div>
                </motion.div>

                {/* Bottom Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70"
                >
                    <span className="text-xs uppercase tracking-widest text-white/60">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Wave Effect at Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[60px] md:h-[90px]"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-white"
                    />
                </svg>
            </div>
        </section>
    );
}
