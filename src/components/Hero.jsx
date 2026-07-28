import { motion } from 'framer-motion'
import { Crown, Play, ArrowRight, Pencil } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[#080709] bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#d48806]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#ff0055]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center relative z-10 my-auto">
        {/* Left Column: Title & Metadata & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 lg:col-span-7 flex flex-col items-start"
        >
          {/* Main Title: STUDY GROUP with pencil detail */}
          <div className="relative mb-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-white leading-none uppercase font-heading select-none">
              STUDY
              <br />
              <span className="relative inline-block">
                GROUP
                {/* Stylized Pencil Graphic on the title like in the image */}
                <motion.div
                  initial={{ rotate: -15, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -top-2 -right-10 md:-right-14 text-white"
                >
                  <Pencil className="w-10 h-10 md:w-14 md:h-14 stroke-[2.5] text-white -rotate-45 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </motion.div>
              </span>
            </h1>
          </div>

          {/* Metadata Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center flex-wrap gap-2 text-xs md:text-sm font-semibold text-gray-300 mb-10 bg-[#121116]/80 px-4 py-2 rounded-lg border border-white/5 backdrop-blur-sm"
          >
            <Crown className="w-4 h-4 text-[#d48806] fill-[#d48806]" />
            <span className="text-gray-500">|</span>
            <span>13+</span>
            <span className="text-gray-500">|</span>
            <span>2025</span>
            <span className="text-gray-500">|</span>
            <span>4 Episodes</span>
            <span className="text-gray-500">|</span>
            <span className="text-[#ff0055]">Action</span>
            <span className="text-gray-500">|</span>
            <span>Thriller</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Solid Pink WATCH NOW Pill Button */}
            <button className="px-10 py-4 rounded-full bg-[#ff0055] text-white font-extrabold text-sm uppercase tracking-wider glow-pink-btn hover:bg-[#ff1a68] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center">
              WATCH NOW
            </button>

            {/* Next Icon Button */}
            <button className="w-12 h-12 rounded-full bg-[#121116] border border-white/20 text-white flex items-center justify-center hover:border-[#ff0055] hover:text-[#ff0055] transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Character Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="md:col-span-6 lg:col-span-5 relative flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src="/images/hero_actor.png"
              alt="Study Group Yoon Ga-min"
              className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Ambient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080709] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>
      </div>

      {/* Neon Red Line Divider (separating Hero and Actor List) */}
      <div className="mt-12 w-full max-w-7xl mx-auto">
        <div className="neon-line-divider" />
      </div>
    </section>
  )
}
