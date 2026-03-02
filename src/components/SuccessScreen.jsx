import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Heart shape SVG
const HeartSVG = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const FloatingHearts = () => {
    const [hearts] = useState(() =>
        Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage string later
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 4,
            size: 20 + Math.random() * 40,
            rotation: (Math.random() - 0.5) * 45
        }))
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0, rotate: 0 }}
                    animate={{
                        y: "-20vh",
                        x: `${heart.x + (Math.random() * 10 > 5 ? 5 : -5)}vw`,
                        opacity: [0, 1, 1, 0],
                        rotate: heart.rotation
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "easeOut"
                    }}
                    className="absolute text-pink-500/80 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                    style={{ width: heart.size, height: heart.size }}
                >
                    <HeartSVG className="w-full h-full" />
                </motion.div>
            ))}
        </div>
    );
};

export default function SuccessScreen() {
    return (
        <motion.div
            key="success-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-950 relative overflow-hidden"
        >
            <FloatingHearts />

            {/* Glowing background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-pink-500/10 to-purple-500/10"
                animate={{
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                    className="mb-8"
                >
                    <HeartSVG className="w-32 h-32 text-rose-500 drop-shadow-[0_0_30px_rgba(243,24,103,0.6)] animate-pulse" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 mb-6 drop-shadow-lg"
                    dir="rtl"
                >
                    وأنا كمان بحبك! 💖
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="text-xl md:text-2xl text-pink-200/80 max-w-md mx-auto leading-relaxed"
                    dir="rtl"
                >
                    كل عام وانتي بخير يا أحلى تسنيم بالدنيا
                </motion.p>
            </div>
        </motion.div>
    );
}
