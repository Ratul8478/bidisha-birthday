import React from 'react'
import { motion } from 'framer-motion'

const ElegantFrame = ({ src, alt }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative group"
        >
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-rose-gold/20 blur-2xl rounded-lg group-hover:bg-rose-pink/30 transition-all duration-700" />

            {/* Decorative Corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-rose-gold rounded-tl-xl z-20" />
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-rose-gold rounded-tr-xl z-20" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-rose-gold rounded-bl-xl z-20" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-rose-gold rounded-br-xl z-20" />

            {/* Main Frame */}
            <div className="relative p-3 bg-white shadow-2xl rounded-sm border border-rose-gold/20">
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Inner Border Overlay */}
                    <div className="absolute inset-4 border border-white/30 pointer-events-none" />
                </div>
            </div>

            {/* Label */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-rose-gold text-white px-6 py-2 rounded-full text-sm tracking-widest uppercase shadow-lg whitespace-nowrap"
            >
                Birthday Queen
            </motion.div>
        </motion.div>
    )
}

export default ElegantFrame
