import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft, Quote } from 'lucide-react'

// Using the available bike photo and placeholders for now
import rider3 from '../assets/photo_3.jpg'
import rider0 from '../assets/rider_0.jpg' // Might be 0 bytes, but we'll try
import rider1 from '../assets/rider_1.jpg'

const journeySteps = [
    {
        image: rider3,
        quote: "Life is a journey, enjoy the ride.",
        title: "Starting the Engine"
    },
    {
        image: rider3, // fallback if others are missing
        quote: "Born to be free, destined to ride.",
        title: "Chasing Horizons"
    },
    {
        image: rider3,
        quote: "The road is her canvas, the bike is her brush.",
        title: "Art in Motion"
    },
    {
        image: rider3,
        quote: "Keep calm and ride on, Birthday Queen.",
        title: "Royal Ride"
    },
    {
        image: rider3,
        quote: "Adventure awaits, and she's ready to lead.",
        title: "Leading the Way"
    }
]

const JourneyModal = ({ isOpen, onClose }) => {
    const [current, setCurrent] = React.useState(0)

    const next = () => setCurrent((prev) => (prev + 1) % journeySteps.length)
    const prev = () => setCurrent((prev) => (prev - 1 + journeySteps.length) % journeySteps.length)

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        className="relative w-full max-w-4xl bg-rose-gold/40 glass rounded-[2.5rem] overflow-hidden border border-rose-gold/30 shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col md:flex-row h-full min-h-[500px]">
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={current}
                                        src={journeySteps[current].image}
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "anticipate" }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8">
                                    <motion.h4
                                        key={`title-${current}`}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-white text-2xl font-serif italic"
                                    >
                                        {journeySteps[current].title}
                                    </motion.h4>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-rose-gold/90">
                                <Quote className="w-12 h-12 text-rose-gold/30 mb-6" />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-6"
                                    >
                                        <p className="text-2xl md:text-3xl text-white font-serif leading-relaxed italic">
                                            "{journeySteps[current].quote}"
                                        </p>
                                        <div className="w-20 h-[1px] bg-rose-gold" />
                                        <p className="text-baby-pink tracking-widest text-sm uppercase font-bold">
                                            Bidisha's Journey • Step {current + 1}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <button
                                            onClick={prev}
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={next}
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="flex gap-2">
                                        {journeySteps.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-rose-gold w-6' : 'bg-white/20'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default JourneyModal
