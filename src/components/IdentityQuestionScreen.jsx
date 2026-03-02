import React from 'react';
import { motion } from 'framer-motion';

export default function IdentityQuestionScreen({ onNext }) {
    return (
        <motion.div
            key="identity-question-screen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center glass p-6 md:p-12 rounded-3xl max-w-lg w-full shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl">

                {/* Hello Kitty Wondering Image */}
                <motion.img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHV3aHRtdTkycmpqZmNxdDF5bGZqYnlrb3RkbjE4Z3dnNmhyNjJ2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DKvw9IJ57pn9K/giphy.gif"
                    alt="Thinking Hello Kitty"
                    className="w-32 h-32 md:w-36 md:h-36 object-contain mb-6 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                />

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 mb-10 text-center leading-relaxed"
                    dir="rtl"
                >
                    هل تعرفي مين انتي؟
                </motion.h1>

                <motion.button
                    onClick={onNext}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
                    className="px-12 py-4 bg-slate-800 border-2 border-slate-600 rounded-full text-white font-bold text-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-pink-500 hover:text-pink-300 transition-all z-20"
                    dir="rtl"
                >
                    مين؟؟؟
                </motion.button>
            </div>
        </motion.div>
    );
}
