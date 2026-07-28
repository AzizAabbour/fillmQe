import { motion } from 'framer-motion'
import { ChevronDown, Play, ChevronLeft, ChevronRight, Award, ShieldAlert } from 'lucide-react'

const films = [
  {
    title: 'Squid Game 2',
    image: '/images/poster_squidgame.png',
  },
  {
    title: 'Study Group',
    image: '/images/poster_studygroup.png',
    featured: true,
  },
  {
    title: 'Moving',
    image: '/images/poster_studygroup.png',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-[#080709] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Central Selected Films Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <span className="px-8 py-3 rounded-full bg-[#ff0055] text-white font-extrabold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,0,85,0.5)] flex items-center gap-2">
            SELECTED FILMS
          </span>
          <ChevronDown className="w-5 h-5 text-gray-400 mt-2 animate-bounce" />
        </motion.div>

        {/* Emblems & Arch Dial Layout */}
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          {/* Top Emblem Circular Badges (Left & Right) */}
          <div className="w-full flex justify-between items-center px-4 md:px-16 mb-8 z-10">
            {/* Left Emblem */}
            <div className="w-16 h-16 rounded-full bg-[#d48806]/20 border-2 border-[#d48806] flex items-center justify-center text-[#d48806] shadow-[0_0_15px_rgba(212,136,6,0.4)]">
              <Award className="w-8 h-8" />
            </div>

            {/* Right Emblem */}
            <div className="w-16 h-16 rounded-full bg-[#d48806]/20 border-2 border-[#d48806] flex items-center justify-center text-[#d48806] shadow-[0_0_15px_rgba(212,136,6,0.4)]">
              <ShieldAlert className="w-8 h-8" />
            </div>
          </div>

          {/* Curved Arched Dial Container */}
          <div className="relative w-full overflow-hidden pt-8 pb-16 flex flex-col items-center justify-center">
            {/* Background Neon Arc Wheel */}
            <div className="absolute bottom-0 w-[700px] h-[350px] rounded-t-full border-t-8 border-[#ff0055] bg-gradient-to-t from-[#ff0055]/20 via-[#d48806]/10 to-transparent shadow-[0_0_50px_rgba(255,0,85,0.4)] pointer-events-none" />

            {/* Left & Right Navigation Arrows on the Arc */}
            <button className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#ff0055] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#ff0055] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Poster Cards Arc Layout */}
            <div className="relative z-20 flex items-center justify-center gap-4 md:gap-8 max-w-4xl px-4">
              {/* Left Poster */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-36 md:w-52 h-52 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl -rotate-6 transform transition-transform"
              >
                <img
                  src="/images/poster_squidgame.png"
                  alt="Squid Game 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Featured Center Poster */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-48 md:w-64 h-72 md:h-96 rounded-3xl overflow-hidden border-2 border-[#ff0055] shadow-[0_0_30px_rgba(255,0,85,0.5)] relative group cursor-pointer z-10"
              >
                <img
                  src="/images/poster_studygroup.png"
                  alt="Study Group"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Central Play Button */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#ff0055] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-[#ff0055] translate-x-0.5" />
                  </div>
                </div>
              </motion.div>

              {/* Right Poster */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-36 md:w-52 h-52 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-6 transform transition-transform"
              >
                <img
                  src="/images/poster_studygroup.png"
                  alt="Moving"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Arched Text Banner */}
            <div className="mt-8 relative z-20 text-center">
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#ff0055] bg-[#121116] px-6 py-2 rounded-full border border-[#ff0055]/40 shadow-[0_0_10px_rgba(255,0,85,0.3)]">
                ASKAR AKMIL DESIGN · MONJHIE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
