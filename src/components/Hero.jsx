import React from 'react'
import { motion } from 'framer-motion'
import loveImg from '../assets/uploaded_image_0_1780689554677.jpg' // Couple image

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={loveImg}
                    alt="Happy Couple"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5] via-transparent to-[#FFF0F5]" />
            </motion.div>

            <div className="relative z-10 text-center px-4 max-w-4xl">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mb-8 inline-flex items-center justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-rose-pink blur-2xl opacity-20 rounded-full" />
                        <div className="w-24 h-24 rounded-full border-2 border-rose-gold/20 p-1">
                            <img src={loveImg} className="w-full h-full object-cover rounded-full" alt="Heart" />
                        </div>
                    </div>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="block mb-6 text-sm tracking-[0.4em] text-rose-gold uppercase font-light"
                >
                    My World, My Heart, My Forever
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="text-7xl md:text-9xl font-serif text-rose-gold mb-8 leading-none"
                >
                    Happy <br />
                    <span className="text-rose-pink italic">Birthday</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="relative inline-block"
                >
                    <div className="text-xl md:text-2xl text-gray-700 italic font-light max-w-xl mx-auto border-y border-rose-gold/10 py-6">
                        "To the one who makes my world spin, may your year be as beautiful as your heart."
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-gold/40"
            >
                <div className="text-[10px] tracking-widest uppercase mb-2">Scroll with Love</div>
                <div className="w-[1px] h-12 bg-gradient-to-b from-rose-gold/40 to-transparent mx-auto" />
            </motion.div>
        </section>
    )
}

export default Hero
