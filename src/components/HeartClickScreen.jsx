import React from 'react';
import { motion } from 'framer-motion';

// Heart shape SVG
const HeartSVG = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

export default function HeartClickScreen({ onNext }) {
    return (
        <motion.div
            key="heart-click-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1)_0%,transparent_70%)]" />
            {/* Glowing background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-pink-500/10 to-purple-500/10"
                animate={{
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="z-10 flex flex-col items-center text-center mt-[-10vh]">

                {/* Hello Kitty Image */}
                <motion.img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGQ1djZkeW5ibDlybDN0OWZ3cmRobjNmeHluZjQzOHI4ODlxM2JjbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kZqbBT64ECtjy/giphy.gif"
                    alt="Dancing Hello Kitty"
                    className="w-36 h-36 md:w-48 md:h-48 object-contain mb-6 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10 }}
                    whileHover={{ scale: 1.1 }}
                />

                <motion.h2
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-bold text-slate-200 mb-16 max-w-md leading-relaxed drop-shadow-md"
                    dir="rtl"
                >
                    اذا تحبين ليث..
                    <br />
                    اضغطي على القلب 💖
                </motion.h2>

                <motion.button
                    onClick={onNext}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 150, damping: 10 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group focus:outline-none"
                >
                    {/* Pulsing rings around the heart */}
                    <motion.div
                        className="absolute inset-0 bg-pink-500 rounded-full blur-xl"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-rose-500 rounded-full blur-2xl"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    />

                    <HeartSVG className="w-48 h-48 md:w-64 md:h-64 text-rose-500 drop-shadow-[0_0_30px_rgba(243,24,103,0.8)] relative z-10 group-hover:text-pink-400 transition-colors duration-300" />
                </motion.button>
            </div>
        </motion.div>
    );
}
