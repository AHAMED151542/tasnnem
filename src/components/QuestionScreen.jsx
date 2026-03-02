import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Heart shape SVG component
const HeartSVG = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

// Floating hearts background component
const HeartsBackground = () => {
    // Generate random hearts
    const [hearts] = useState(() =>
        Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // random start horizontal position (%)
            y: 100 + Math.random() * 20, // start below the screen
            size: 10 + Math.random() * 30, // random size in px
            delay: Math.random() * 5, // random delay before starting
            duration: 10 + Math.random() * 10, // random float duration
            color: ['text-pink-400', 'text-pink-500', 'text-purple-400', 'text-rose-400'][Math.floor(Math.random() * 4)],
            opacity: 0.1 + Math.random() * 0.4
        }))
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className={`absolute ${heart.color}`}
                    initial={{
                        x: `${heart.x}vw`,
                        y: `${heart.y}vh`,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        y: "-10vh", // Float upwards off screen
                        opacity: [0, heart.opacity, heart.opacity, 0], // Fade in and out
                        scale: [0, 1, 1.2, 0.8],
                        x: [`${heart.x}vw`, `${heart.x + (Math.random() * 10 - 5)}vw`, `${heart.x}vw`] // Gentle sway
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear"
                    }}
                    style={{ width: heart.size, height: heart.size }}
                >
                    <HeartSVG className="w-full h-full" />
                </motion.div>
            ))}
        </div>
    );
};

export default function QuestionScreen({ onNext }) {
    return (
        <motion.div
            key="question-screen"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            <HeartsBackground />

            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center glass p-6 md:p-12 rounded-3xl max-w-lg w-full shadow-2xl border border-white/10 bg-black/20 backdrop-blur-xl">
                {/* Hello Kitty Image */}
                <motion.img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGQ1djZkeW5ibDlybDN0OWZ3cmRobjNmeHluZjQzOHI4ODlxM2JjbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JXnGKDyWUvAha/giphy.gif"
                    alt="Hello Kitty"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                />

                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    dir="rtl"
                >
                    هلوو هاي تسنيم
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-2xl text-slate-300 mb-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    dir="rtl"
                >
                    عندي لك سؤال..
                </motion.h2>

                <motion.button
                    onClick={onNext}
                    className="relative group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all overflow-hidden"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 2.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    dir="rtl"
                >
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        ايش هو ؟
                        <HeartSVG className="w-5 h-5 animate-pulse" />
                    </span>
                </motion.button>
            </div>
        </motion.div>
    );
}
