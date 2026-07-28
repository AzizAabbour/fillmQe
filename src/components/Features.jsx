import { motion } from 'framer-motion'
import { Tv, Sparkles, Zap, Shield, Globe, Award } from 'lucide-react'

const features = [
  {
    icon: <Tv className="w-6 h-6 text-[#ff0055]" />,
    title: 'Ultra HD 4K Streaming',
    desc: 'Experience pristine video quality with high dynamic range audio and crystal clear visual clarity.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#ff0055]" />,
    title: 'Exclusive Premieres',
    desc: 'Watch original dramas, action series, and blockbuster movies first on Vidio.',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#ff0055]" />,
    title: 'Zero Buffering Speed',
    desc: 'Powered by lightning-fast CDN edge servers ensuring seamless instant playback.',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#ff0055]" />,
    title: 'Multi-Device Support',
    desc: 'Stream across Smart TVs, phones, tablets, and desktops with synchronized progress.',
  },
  {
    icon: <Globe className="w-6 h-6 text-[#ff0055]" />,
    title: 'Global Subtitles',
    desc: 'Multi-language subtitles and professional voice dubbed audio options.',
  },
  {
    icon: <Award className="w-6 h-6 text-[#ff0055]" />,
    title: 'Award Winning Originals',
    desc: 'Home to critically acclaimed series like Study Group, Squid Game, and Moving.',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#080709] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-6 py-2 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/40 text-[#ff0055] text-xs font-extrabold uppercase tracking-widest">
            Premium Features
          </span>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tight mt-4">
            Why Watch On Vidio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl vidio-card border border-white/5 hover:border-[#ff0055]/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ff0055]/10 border border-[#ff0055]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#ff0055] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
