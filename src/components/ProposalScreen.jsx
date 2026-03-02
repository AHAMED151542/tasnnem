import React from 'react';
import { motion } from 'framer-motion';

export default function ProposalScreen({ onYes }) {
    return (
        <motion.div
            key="proposal-screen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            {/* Background glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-rose-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center glass p-6 md:p-12 rounded-3xl max-w-lg w-full shadow-2xl border border-white/10 bg-black/30 backdrop-blur-xl">

                {/* Hello Kitty Image */}
                <motion.img
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnJnZTlkc2djZzF1NGoxY2VldDMwOTN0dWxhMHl6Z2loaWVsc2hpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/92YG8KKSjYhMc/giphy.gif"
                    alt="Shy Hello Kitty"
                    className="w-32 h-32 md:w-36 md:h-36 object-contain mb-2 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.05 }}
                />

                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-10 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300 mb-4" dir="rtl">
                        هل تحبيني؟
                    </h1>
                    <p className="text-slate-300 text-lg" dir="rtl">
                        جاوبي بصراحة..
                    </p>
                </motion.div>

                <div className="flex flex-row-reverse w-full justify-center items-center h-40 relative">
                    <motion.button
                        onClick={onYes}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-bold text-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-shadow z-20"
                        dir="rtl"
                    >
                        هااا؟؟
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
