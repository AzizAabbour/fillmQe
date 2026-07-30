import { motion } from 'framer-motion'
import { Play, Star, Sparkles } from 'lucide-react'

const trendingSeries = [
  {
    title: 'Squid Game 2',
    genre: 'Thriller · Action',
    rating: '4.9',
    episodes: '9 Episodes',
    image: '/images/poster_squidgame.png',
  },
  {
    title: 'Study Group',
    genre: 'Action · Drama',
    rating: '5.0',
    episodes: '4 Episodes',
    image: '/images/poster_studygroup.png',
  },
  {
    title: 'Moving',
    genre: 'Sci-Fi · Action',
    rating: '4.8',
    episodes: '20 Episodes',
    image: '/images/poster_moving.png',
  },
  {
    title: 'Hellbound',
    genre: 'Supernatural · Thriller',
    rating: '4.7',
    episodes: '6 Episodes',
    image: '/images/poster_hellbound.png',
  },
  {
    title: 'Bloodhounds',
    genre: 'Action · Noir',
    rating: '4.9',
    episodes: '8 Episodes',
    image: '/images/poster_bloodhounds.png',
  },
  {
    title: 'All of Us Are Dead',
    genre: 'Horror · Suspense',
    rating: '4.8',
    episodes: '12 Episodes',
    image: '/images/poster_allofusaredead.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-[#080709] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff0055] mb-2">
              <Sparkles className="w-4 h-4" /> Trending Now
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tight">
              Popular Releases
            </h2>
          </div>
          <button className="hidden sm:block px-6 py-2.5 rounded-full border border-[#ff0055]/50 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#ff0055] transition-all">
            Explore All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingSeries.map((series, index) => (
            <motion.div
              key={series.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-3xl overflow-hidden vidio-card border border-white/10 hover:border-[#ff0055]/60 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121116] via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-[#d48806] flex items-center gap-1 border border-[#d48806]/30">
                  <Star className="w-3.5 h-3.5 fill-[#d48806]" /> {series.rating}
                </div>
              </div>

              <div className="p-6 bg-[#121116] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl text-white group-hover:text-[#ff0055] transition-colors">
                    {series.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-400 mt-1">
                    {series.genre} • {series.episodes}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ff0055] text-white flex items-center justify-center shadow-[0_0_12px_#ff0055] group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
