import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const poemLines = [
    "يا أجمل من سكن قلبي،",
    "يا ضحكة الأيام في عيني.",
    "كل لحظة معك هي عمر بحد ذاته،",
    "وكل نبضة في غيابك تسأل عنك.",
    "أنتِ لستِ فقط تسنيم..",
    "أنتِ الحياة التي لطالما تمنيتها.",
    "بحبك يا تسنيم ❤️"
];

// Helper to animate text typing
const TypingText = ({ text, delay, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let isMounted = true;
        let timeout;

        setDisplayedText(""); // Clear once on start

        timeout = setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (isMounted) {
                    setDisplayedText((prev) => {
                        // Safe check to avoid duplicate additions if React triggers fast
                        if (prev === text.slice(0, i + 1)) return prev;
                        return text.slice(0, i + 1);
                    });
                    i++;

                    if (i === text.length) {
                        clearInterval(typingInterval);
                        if (onComplete) {
                            setTimeout(onComplete, 500);
                        }
                    }
                }
            }, 80);

            return () => clearInterval(typingInterval);
        }, delay);

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [text, delay]); // Important: Removed onComplete from dependencies, only depend on text and delay

    return (
        <span className="inline-block relative">
            {displayedText}
            {displayedText.length < text.length && displayedText.length > 0 && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-[2px] h-[1em] bg-pink-400 ml-1 translate-y-1"
                />
            )}
        </span>
    );
};

// Background floating hearts (reused logic)
const HeartSVG = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const FloatingHearts = () => {
    const [hearts] = useState(() =>
        Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 5,
            size: 10 + Math.random() * 20,
        }))
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0 }}
                    animate={{
                        y: "-20vh",
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear"
                    }}
                    className="absolute text-pink-500/30"
                    style={{ width: heart.size, height: heart.size }}
                >
                    <HeartSVG className="w-full h-full" />
                </motion.div>
            ))}
        </div>
    );
};


export default function PoemScreen({ onNext }) {
    const [visibleLines, setVisibleLines] = useState(0);

    const handleLineComplete = () => {
        setVisibleLines((prev) => prev + 1);
    };

    const isPoemFinished = visibleLines >= poemLines.length;

    return (
        <motion.div
            key="poem-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 2 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
        >
            <FloatingHearts />

            <div className="z-10 w-full max-w-2xl flex flex-col items-center">
                {/* Decorative border/glass container for the poem */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="w-full glass p-6 md:p-12 rounded-3xl border border-pink-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(236,72,153,0.1)] relative"
                >
                    {/* Corner decorations */}
                    <div className="absolute top-4 right-4 text-pink-500/40 font-serif text-4xl">"</div>
                    <div className="absolute bottom-4 left-4 text-pink-500/40 font-serif text-4xl">"</div>

                    <div className="flex flex-col gap-6 text-center" dir="rtl">
                        {poemLines.map((line, index) => (
                            <div
                                key={index}
                                className={`text-xl md:text-2xl lg:text-3xl font-medium ${index === poemLines.length - 1
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 font-bold mt-4 drop-shadow-md"
                                    : "text-slate-200"
                                    } min-h-[2em]`}
                            >
                                {index <= visibleLines ? (
                                    <TypingText
                                        text={line}
                                        delay={index === 0 ? 1500 : 0} // Delay only the first line
                                        onComplete={handleLineComplete}
                                    />
                                ) : (
                                    <span className="opacity-0">{line}</span> // Preserves space so it doesn't jump
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Blush Emoji Button - shown only when poem is fully typed */}
                {isPoemFinished && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onNext}
                        className="mt-12 text-6xl md:text-7xl filter drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] cursor-pointer"
                    >
                        🥺
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
