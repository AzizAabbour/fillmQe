import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const actors = [
  {
    name: 'Hwang Min Hyun',
    role: 'Yoon Ga-min',
    image: '/images/actor_hwang.png',
  },
  {
    name: 'Shin Soo Hyun',
    role: 'Lee Ji-woo',
    image: '/images/actor_shin.png',
  },
  {
    name: 'Hong Min-gi',
    role: 'Actor',
    image: '/images/actor_hong.png',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-[#080709] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Tag & Controls Bar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            {/* Pink Tag Label */}
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff0055] text-white font-extrabold text-sm tracking-wide shadow-[0_0_15px_rgba(255,0,85,0.4)]">
              Actor List : <ArrowDownRight className="w-4 h-4" />
            </span>
            <div className="hidden sm:block w-32 md:w-64 h-[1px] bg-white/10" />
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff0055] shadow-[0_0_8px_#ff0055]" />
            <span className="w-3 h-3 rounded-full bg-white/30" />
            <span className="w-3 h-3 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Actor Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {actors.map((actor, index) => (
            <motion.div
              key={actor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative rounded-[28px] overflow-hidden vidio-card glow-pink-border transition-all duration-500 hover:scale-[1.02] cursor-pointer"
            >
              {/* Photo Area */}
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c10] via-transparent to-transparent opacity-90" />
              </div>

              {/* Text Info Box at bottom of card */}
              <div className="p-6 bg-[#121116] border-t border-white/5">
                <h3 className="font-bold text-xl text-white tracking-tight group-hover:text-[#ff0055] transition-colors">
                  {actor.name}
                </h3>
                <p className="text-sm font-medium text-gray-400 mt-1">
                  {actor.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
