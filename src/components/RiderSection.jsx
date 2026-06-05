import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bike, Shield, Zap } from 'lucide-react'
import riderImg from '../assets/photo_3.jpg'
import JourneyModal from './JourneyModal'

const RiderSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <motion.section
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white/40 glass rounded-[2rem] border border-rose-gold/10 shadow-xl overflow-hidden sticky top-10"
            >
                <div className="relative mb-8 rounded-2xl overflow-hidden aspect-square shadow-inner group">
                    <img
                        src={riderImg}
                        alt="Lady Rider"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-rose-gold/80 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full tracking-widest uppercase">
                        On the Road
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center">
                            <Bike className="w-5 h-5 text-rose-gold" />
                        </div>
                        <h3 className="text-xl font-serif text-rose-gold italic">Her Biker Spirit</h3>
                    </div>

                    <p className="text-gray-600 text-sm italic leading-relaxed">
                        The road is where she finds her peace, and the bike is her wings. To the lady rider who conquers every mile with a smile.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-rose-gold/10 rounded-2xl text-center border border-rose-gold/20 group hover:bg-rose-gold/20 transition-colors">
                            <Shield className="w-6 h-6 text-rose-gold mx-auto mb-2" />
                            <span className="text-[10px] uppercase tracking-wider text-rose-gold font-bold">Courage</span>
                        </div>
                        <div className="p-4 bg-rose-pink/10 rounded-2xl text-center border border-rose-pink/20 group hover:bg-rose-pink/20 transition-colors">
                            <Zap className="w-6 h-6 text-rose-pink mx-auto mb-2" />
                            <span className="text-[10px] uppercase tracking-wider text-rose-pink font-bold">Adventure</span>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-rose-gold/10">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full py-3 rounded-full bg-rose-gold text-white text-xs tracking-widest font-bold hover:bg-rose-pink transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-rose-pink/20"
                        >
                            SEE HER JOURNEY
                        </button>
                    </div>
                </div>
            </motion.section>

            <JourneyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default RiderSection
