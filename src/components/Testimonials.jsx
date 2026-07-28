import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, NovaTech',
    text: 'Vidio Studio transformed our entire brand presence. Their cinematic approach to web design was exactly what we needed to stand out in a crowded market. The results exceeded all our expectations.',
    rating: 5,
  },
  {
    name: 'Marcus Rivera',
    role: 'Creative Director, Pulse Media',
    text: 'Working with Vidio was an exceptional experience. Their attention to detail, creative vision, and technical expertise resulted in a website that truly represents our brand at the highest level.',
    rating: 5,
  },
  {
    name: 'Elena Kowalski',
    role: 'Founder, Drift Studios',
    text: 'The team at Vidio doesn\'t just design websites — they craft experiences. Our conversion rates jumped 40% after the redesign. They understand both aesthetics and business goals perfectly.',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding relative overflow-hidden bg-[#0d0d10]" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-tag mb-6 inline-flex">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#f0ede6] mt-6 mb-5 leading-tight">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card-strong p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <Quote className="w-10 h-10 text-[#e63946]/20" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#d4972a] fill-[#d4972a]" />
              ))}
            </div>

            {/* Text */}
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-[#9e9a93] leading-relaxed mb-8 italic"
            >
              "{testimonials[current].text}"
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e63946] to-[#d4622a] flex items-center justify-center text-white font-heading font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-[#f0ede6]">{testimonials[current].name}</div>
                  <div className="text-sm text-[#6b6760]">{testimonials[current].role}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl border border-[#2a2a30] flex items-center justify-center text-[#9e9a93] hover:border-[#e63946]/40 hover:text-[#e63946] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl border border-[#2a2a30] flex items-center justify-center text-[#9e9a93] hover:border-[#e63946]/40 hover:text-[#e63946] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-gradient-to-r from-[#e63946] to-[#d4622a]'
                      : 'bg-[#2a2a30] hover:bg-[#3a3a42]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
