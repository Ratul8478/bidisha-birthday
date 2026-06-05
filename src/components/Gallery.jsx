import React from 'react'
import { motion } from 'framer-motion'

// First batch of images
import img0 from '../assets/uploaded_image_0_1780689554677.jpg'
import img1 from '../assets/uploaded_image_1_1780689554677.jpg'
import img2 from '../assets/uploaded_image_2_1780689554677.jpg'
import img3 from '../assets/uploaded_image_3_1780689554677.jpg'
import img4 from '../assets/uploaded_image_4_1780689554677.jpg'

// Second batch of images
import photo0 from '../assets/photo_0.jpg'
import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo3 from '../assets/photo_3.jpg'
import photo4 from '../assets/photo_4.jpg'

const Gallery = () => {
    const images = [
        img0, photo0, img1, photo1,
        img2, photo2, img3, photo3,
        img4, photo4
    ]

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-rose-gold mb-4 italic">Captured Moments</h2>
                <div className="h-[1px] w-24 bg-rose-gold/30 mx-auto" />
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index % 3) * 0.1, duration: 0.8 }}
                        whileHover={{ y: -10 }}
                        className="relative overflow-hidden rounded-2xl shadow-xl border border-white/50 group bg-white/10"
                    >
                        <img
                            src={src}
                            alt={`Gallery moment ${index}`}
                            className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rose-pink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Interactive Sparkle Effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-[radial-gradient(circle,rgba(255,182,193,0.2)_0%,transparent_70%)]" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
