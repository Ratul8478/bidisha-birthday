import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Image as ImageIcon, Upload } from 'lucide-react'
import confetti from 'canvas-confetti'

const PhotoUpload = () => {
    const [preview, setPreview] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#F4C2C2', '#B76E79', '#FF66CC']
                })
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <section className="py-24 px-4 bg-soft-white overflow-hidden relative">
            <div className="max-w-2xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-serif text-rose-gold mb-8 italic">Share a Memory</h2>

                <div className="relative group">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="aspect-[4/5] md:aspect-video rounded-3xl bg-white border-2 border-dashed border-rose-gold/20 flex flex-col items-center justify-center p-8 transition-colors hover:border-rose-gold/40 relative overflow-hidden"
                    >
                        {preview ? (
                            <img src={preview} alt="Upload Preview" className="absolute inset-0 w-full h-full object-cover" />
                        ) : (
                            <>
                                <div className="w-20 h-20 rounded-full bg-baby-pink/20 flex items-center justify-center mb-4 group-hover:animate-bounce">
                                    <Camera className="w-8 h-8 text-rose-gold" />
                                </div>
                                <p className="text-gray-500 font-light mb-6">Upload a photo to join the celebration</p>
                                <label className="px-8 py-3 bg-white text-rose-gold border border-rose-gold/30 rounded-full cursor-pointer hover:bg-rose-gold hover:text-white transition-all duration-300 tracking-widest text-xs">
                                    SELECT PHOTO
                                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                </label>
                            </>
                        )}
                    </motion.div>

                    {preview && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => setPreview(null)}
                            className="mt-6 text-xs tracking-widest text-rose-gold/60 uppercase hover:text-rose-gold transition-colors"
                        >
                            Clear and try another
                        </motion.button>
                    )}
                </div>
            </div>

            <div className="absolute top-[20%] right-[-5%] w-64 h-64 bg-rose-pink/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-5%] w-64 h-64 bg-baby-pink/5 blur-[80px] rounded-full pointer-events-none" />
        </section>
    )
}

export default PhotoUpload
