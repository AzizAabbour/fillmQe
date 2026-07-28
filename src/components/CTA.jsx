import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#080709] relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 bg-gradient-to-r from-[#ff0055] via-[#e6004c] to-[#b3003b] relative overflow-hidden shadow-[0_0_50px_rgba(255,0,85,0.4)]">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tight leading-tight mb-4">
            Start Streaming Study Group Now
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8">
            Join millions of viewers worldwide. Watch 4K episodes with instant access on all your devices.
          </p>
          <button className="px-12 py-4 rounded-full bg-white text-[#ff0055] font-black text-sm uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-2xl inline-flex items-center gap-2">
            <Play className="w-5 h-5 fill-[#ff0055]" /> WATCH NOW
          </button>
        </div>
      </div>
    </section>
  )
}
