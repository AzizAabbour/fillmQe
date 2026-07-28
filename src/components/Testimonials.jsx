import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Kim Min-seo',
    role: 'Kdrama Critic',
    text: 'Study Group on Vidio is an absolute masterpiece! The action scenes and character dynamics are peak entertainment.',
  },
  {
    name: 'Alexandre R.',
    role: 'Verified Subscriber',
    text: 'The 4K streaming quality and seamless UI make Vidio my favorite platform for watching Asian series.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#080709] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-6 py-2 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/40 text-[#ff0055] text-xs font-extrabold uppercase tracking-widest">
            Fan Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tight mt-4">
            Loved By Millions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl vidio-card border border-white/10 relative"
            >
              <Quote className="w-10 h-10 text-[#ff0055]/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-[#d48806] fill-[#d48806]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 italic">
                "{rev.text}"
              </p>
              <div>
                <h4 className="font-bold text-white text-base">{rev.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
