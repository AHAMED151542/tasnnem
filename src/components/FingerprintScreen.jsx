import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint } from 'lucide-react';

export default function FingerprintScreen({ onUnlock }) {
    return (
        <motion.div
            key="fingerprint-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col items-center z-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight text-center" dir="rtl">
                    هل انتي تسنيم ؟
                </h1>
                <p className="text-slate-400 text-sm md:text-base mb-16 opacity-80" dir="rtl">
                    الرجاء تأكيد الهوية
                </p>

                <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onUnlock}
                >
                    {/* Animated rings around the fingerprint */}
                    <motion.div
                        className="absolute -inset-4 border-2 border-pink-500/30 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -inset-8 border border-purple-500/20 rounded-full"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    />

                    <div className="w-24 h-24 rounded-full glass flex items-center justify-center bg-slate-900/50 relative overflow-hidden">
                        {/* Glow behind the icon inside the glass */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <Fingerprint className="w-12 h-12 text-pink-400 group-hover:text-pink-300 transition-colors duration-300 z-10 drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]" strokeWidth={1.5} />
                    </div>
                </motion.div>

                <motion.p
                    className="mt-8 text-pink-400/80 text-sm animate-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    dir="rtl"
                >
                    اضغطي هنا للتأكيد
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
