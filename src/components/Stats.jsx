import { motion } from 'framer-motion'

const stats = [
  { value: '50M+', label: 'Active Viewers' },
  { value: '4K Ultra', label: 'Video Quality' },
  { value: '1,000+', label: 'Exclusive Titles' },
  { value: '4.9/5', label: 'User Rating' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-[#0c0b0e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black italic tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,0,85,0.4)]">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-400 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
