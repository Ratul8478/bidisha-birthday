import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import ElegantFrame from './ElegantFrame'
import revealPhoto from '../assets/reveal_photo.jpg'

const Countdown = () => {
    const [count, setCount] = useState(5)
    const [isTriggered, setIsTriggered] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.5 })

    useEffect(() => {
        if (isInView && !isTriggered) {
            setIsTriggered(true)
        }
    }, [isInView, isTriggered])

    useEffect(() => {
        if (isTriggered && count > 0) {
            const timer = setTimeout(() => {
                setCount(prev => prev - 1)
            }, 1000)
            return () => clearTimeout(timer)
        } else if (isTriggered && count === 0 && !isFinished) {
            setIsFinished(true)
            triggerConfetti()
        }
    }, [isTriggered, count, isFinished])

    const triggerConfetti = () => {
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        const randomInRange = (min, max) => Math.random() * (max - min) + min

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
        }, 250)
    }

    return (
        <section ref={containerRef} className="py-24 bg-[#FFF0F5] relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                <AnimatePresence mode="wait">
                    {!isFinished ? (
                        <motion.div
                            key="countdown"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-rose-gold mb-12 tracking-[0.3em] uppercase">
                                The Countdown to Elegance
                            </h2>
                            <div className="relative">
                                <motion.div
                                    key={count}
                                    initial={{ scale: 1.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-[12rem] md:text-[16rem] font-serif leading-none text-rose-gold/80"
                                >
                                    {count}
                                </motion.div>
                                <div className="absolute inset-0 blur-3xl bg-rose-pink/10 -z-10 rounded-full" />
                            </div>
                            <p className="mt-8 text-rose-gold/60 tracking-widest uppercase text-xs">
                                {isTriggered ? "Witness the beauty..." : "Scroll to begin the journey"}
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="reveal"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-4xl md:text-6xl font-serif text-rose-gold mb-12">
                                Happy Birthday, <span className="text-rose-pink italic">Bidisha</span>
                            </h2>
                            <div className="max-w-md w-full">
                                <ElegantFrame src={revealPhoto} alt="Birthday Reveal" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background elements for finished state */}
            {isFinished && (
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-rose-pink/5 via-transparent to-rose-pink/5"
                    />
                </div>
            )}
        </section>
    )
}

export default Countdown
