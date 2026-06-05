import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User } from 'lucide-react'

const Messages = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        { name: 'Ratul', text: 'Wishing you the happiest of birthdays, my rider queen! Keep shining.', date: 'Just now' },
        { name: 'Admin', text: 'To the most elegant rider we know, have a dreamy day!', date: 'An hour ago' }
    ])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !message) return
        setMessages([{ name, text: message, date: 'Just now' }, ...messages])
        setName('')
        setMessage('')
    }

    return (
        <section className="py-24 bg-baby-pink/10">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-rose-gold italic mb-4">Digital Guestbook</h2>
                    <p className="text-gray-500 font-light italic">Leave a dreamy message for the lady rider</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-white/80 p-8 rounded-3xl shadow-sm border border-rose-gold/5 backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-rose-gold mb-2 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-soft-white border-none focus:ring-1 focus:ring-rose-gold outline-none text-gray-700 placeholder-gray-400"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-rose-gold mb-2 ml-1">Your Message</label>
                                <textarea
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-soft-white border-none focus:ring-1 focus:ring-rose-gold outline-none text-gray-700 placeholder-gray-400 resize-none"
                                    placeholder="Write something special..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-rose-gold to-rose-pink text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 font-light tracking-widest"
                            >
                                SEND NOTE <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Messages List */}
                    <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                        <AnimatePresence initial={false}>
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-rose-gold"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-baby-pink/50 flex items-center justify-center">
                                            <User className="w-4 h-4 text-rose-gold" />
                                        </div>
                                        <span className="font-serif text-rose-gold">{m.name}</span>
                                        <span className="text-[10px] text-gray-400 uppercase ml-auto">{m.date}</span>
                                    </div>
                                    <p className="text-gray-600 font-light italic leading-relaxed">"{m.text}"</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Messages
