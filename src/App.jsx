import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Camera, Heart, MessageCircle, Music, Star, Bike } from 'lucide-react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Messages from './components/Messages'
import Countdown from './components/Countdown'
import PhotoUpload from './components/PhotoUpload'
import RiderSection from './components/RiderSection'

function App() {
    return (
        <div className="min-h-screen bg-[#FFF0F5] text-gray-800 selection:bg-rose-pink selection:text-white font-sans">
            {/* Background blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-baby-pink/40 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-pink/30 blur-[150px] rounded-full animate-pulse" />
            </div>

            <main className="relative z-10">
                <Hero />
                <Countdown />
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <Gallery />
                        </div>
                        <div className="md:col-span-1">
                            <RiderSection />
                        </div>
                    </div>
                </div>
                <Messages />
                <PhotoUpload />
            </main>

            <footer className="py-16 text-center bg-white/40 backdrop-blur-md border-t border-rose-gold/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-center"
                >
                    <Heart className="w-8 h-8 text-rose-pink mb-4 animate-bounce fill-rose-pink" />
                    <h3 className="text-2xl font-serif text-rose-gold italic mb-2">Happy Birthday, My Love</h3>
                    <p className="text-gray-400 text-sm tracking-widest uppercase">Everything is better with you</p>
                </motion.div>
            </footer>
        </div>
    )
}

export default App
