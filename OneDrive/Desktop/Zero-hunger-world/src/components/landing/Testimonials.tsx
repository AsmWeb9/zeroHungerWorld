'use client';

import React, { useState, useEffect } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Pour moi, cette étape que j’ai fait le 13 Mars 2023, le jour où je me suis inscrite sur le site de l’association, le jour où j’ai pris mon courage de m’intégrer dans cette famille, le jour où j’ai décidée de consacrer mon temps au bien-être des autres personnes. Et sincèrement c’était la meilleure décision que j’ai prise et j'en suis fière. Être membre de cette association, n’est qu’un clé de plusieurs portes. En aidant les jeunes, les personnes âgées et surtout les enfants sans abri, c'est une raison pour remercier Dieu pour tout le bien que nous avons dans notre vie, et personnellement, cette association m’a permis d’améliorer beaucoup de choses dans ma vie Hamdullilah.",
        author: "Hiba EDDAHBI",
        role: "Membre depuis Mars 2023",
        location: "Casablanca",
        lang: "fr"
    },
    {
        quote: "هادي شهر و نصف تقريبا باش وليت كل يوم أحد كنمشي لجمعية صفر جائع، فالأول كان كايسحابلي بلي غانكونوا سبب من بعد الله أننا ندخلوا الفرحة على الناس لي بوحدهم فالشارع، أولا نحاولوا نبدلو ليهم الوضعية ديالهم. لكن في الأخير اكتشفت بلي دوك الناس هوما لي كايعطيونا القوة و كيدخلوا الفرحة لقلوبنا، هذا هو السبب لي كيخليني كل صباح يوم الأحد نفيق باش نتلاقا مع هاد الناس رغم عياء الأسبوع.",
        author: "زينب ابرادعي",
        role: "متطوعة منذ شتنبر 2023",
        location: "الدار البيضاء",
        lang: "ar"
    },
    {
        quote: "التحاقي بمبادرة zero hunger غيرت بزاف دلحوايج فيا. بدأ من نظرتي للأشخاص بدون مأوى وكيف أنهم ناس وراهم قصص و تجارب فقط الظروف لي كانت سبب في تعثرهم. هذ الظروف لي أي واحد ممكن اتحط فيها وهنا كنستشعروا نعم الله علينا. فأنني نكون فبلاستهم أمر وارد وأنهم إرجعوا لحالهم الاعتيادية ممكن. ممكن بتاعونا جميع و حماسنا ومثابرتنا نردوا كل متعثر لإستقرار من جديد.... شكرا zero hunger، عائلتي التانية، على جرعة السعادة و الشعور بالإنجاز لي كتقدموها لينا كل أحد.",
        author: "أسماء نشادي",
        role: "متطوعة منذ يوليوز 2024",
        location: "الدار البيضاء",
        lang: "ar"
    },
    {
        quote: "{ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلا تَعَاوَنُوا عَلَى الإثْمِ وَالْعُدْوَانِ..} هادي أحسن مقدمة نقدر نبدا بها الحديث ديالي على تجربتي فعائلة صفر جائع، وهاد الآية الكريمة هي لي كتعبر علينا حنا أعضاء هاد العائلة و كنقول عائلة حيت حنا عبارة عن إخوة لي كنجيو من مختلف البلايص على قبل هدف واحد، ألا و هو نعاونوا الناس لي بدون مأوى. هاد الأشخاص لي كنا كنشوفوهوم فزنقة و كنا نتجاهلهم و منا لي كيخاف منهم ما هم إلى أشخاص بحالنا بحالهم انقلبت أحوالهم، ومن خلال سماع القصص ديالهم كتاشفنا بالي فقط حاجة صغيرة يمكن لها تقلب حياتك رأسا على عقب. لهذا حنا أعضاء العائلة و المحسنين يد في يد كنحاولوا ما أمكن نردوهم لحياتهم السابقة لي كانوا فيها و آخر ما أختم قولي به قوله -تعالى : { وَلِكُلٍّ وِجْهَةٌ هُوَ مُوَلِّيهَا فَاسْتَبِقُوا الْخَيْرَاتِ }",
        author: "مهدي المودب",
        role: "متطوع منذ يونيو 2024",
        location: "الدار البيضاء",
        lang: "ar"
    }
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-scroll
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000); // Increased time for longer quotes
        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <Section id="testimonials" className="bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl opacity-60"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm mb-3">Voices of Change</h2>
                <h3 className="text-4xl font-bold text-[var(--color-primary)]">Community Stories</h3>
            </div>

            <div className="max-w-4xl mx-auto relative px-4 min-h-[500px] flex items-center justify-center">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 md:-left-12 z-20 p-3 rounded-full bg-white border border-gray-100 shadow-lg text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all transform hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:-right-12 z-20 p-3 rounded-full bg-white border border-gray-100 shadow-lg text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all transform hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full"
                        >
                            <div className="bg-white/50 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-14 text-center">
                                <div className="w-16 h-16 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Quote className="w-8 h-8 fill-current" />
                                </div>
                                <p
                                    dir={testimonials[current].lang === 'ar' ? 'rtl' : 'ltr'}
                                    className={`text-lg md:text-xl text-[var(--color-primary)] font-medium italic leading-relaxed mb-8 ${testimonials[current].lang === 'ar' ? 'text-right' : 'text-center'}`}
                                >
                                    "{testimonials[current].quote}"
                                </p>
                                <div dir={testimonials[current].lang === 'ar' ? 'rtl' : 'ltr'}>
                                    <div className="font-bold text-lg text-[var(--color-primary)]">{testimonials[current].author}</div>
                                    <div className="text-sm text-gray-500">{testimonials[current].role} • {testimonials[current].location}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > current ? 1 : -1);
                            setCurrent(idx);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-[var(--color-accent)] w-8' : 'bg-gray-200'}`}
                    />
                ))}
            </div>
        </Section>
    );
}
