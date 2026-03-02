import React from 'react';
import { motion } from 'framer-motion';

export default function SecondQuestionScreen({ onNext }) {
    return (
        <motion.div
            key="second-question-screen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center glass p-6 md:p-12 rounded-3xl max-w-lg w-full shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl">

                {/* Hello Kitty Image */}
                <motion.img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajdoYjJhcW92MGlteHVtc2IzZ2hhM2MwY2d2enl5djc1Ym56dmlxMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/shGE728PcD7zsMWKwe/giphy.gif"
                    alt="Shocked Hello Kitty"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 12 }}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-6 leading-relaxed" dir="rtl">
                        شنووو ها؟؟
                        <br />
                        تحبين ليث ولا لا؟؟
                    </h1>
                </motion.div>

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
                    مدري 🤷‍♀️
                </motion.button>
            </div>
        </motion.div>
    );
}
