import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Star SVG for background
const StarSVG = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const FloatingStars = () => {
    const [stars] = useState(() =>
        Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 2 + Math.random() * 4,
            size: 10 + Math.random() * 15,
        }))
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute text-yellow-300/60 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]"
                    style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size }}
                    animate={{
                        opacity: [0.1, 1, 0.1],
                        scale: [0.8, 1.2, 0.8],
                        rotate: [0, 90, 180]
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                >
                    <StarSVG className="w-full h-full" />
                </motion.div>
            ))}
        </div>
    );
};

export default function ComplimentsScreen() {
    return (
        <motion.div
            key="compliments-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            <FloatingStars />

            {/* Glowing background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-rose-500/10 to-purple-500/20"
                animate={{
                    opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="z-10 flex flex-col items-center text-center">

                {/* Hello Kitty Happy Image */}
                <motion.img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNhOTR2NGYybmh6ZW56YXd0YnAxM2MxaDRjbGxhdWJ2aXVxZnB1ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/92YG8KKSjYhMc/giphy.gif"
                    alt="Happy Hello Kitty"
                    className="w-40 h-40 md:w-56 md:h-56 object-contain mb-8 drop-shadow-[0_0_25px_rgba(236,72,153,0.7)]"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                />

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="glass p-6 md:p-12 rounded-3xl border border-pink-500/20 bg-black/40 backdrop-blur-md max-w-2xl w-full"
                    dir="rtl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 mb-8 drop-shadow-md leading-relaxed">
                        انتي احلى بنوتة شفتها..
                    </h1>

                    <p className="text-2xl md:text-3xl text-slate-200 mb-6 leading-relaxed">
                        وانتي من أطيب القلوب الي تعاملت معها..
                    </p>

                    <p className="text-xl md:text-2xl text-pink-300/90 leading-relaxed font-medium">
                        وجودكِ في حياتي هو أجمل هدية، وضحكتكِ هي النور الذي يضيء كل أيامي.
                        أنتِ قطعة من قلبي وجزء من ✨💖
                    </p>
                    <p className="text-xl md:text-2xl text-pink-300/90 leading-relaxed font-medium">
                        .....
                    </p>


                    <p className="text-xl md:text-2xl text-pink-300/90 leading-relaxed font-medium">
                        الله يحفضك من كل شر ويحفضك لأهلك ولي 💞💞
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
