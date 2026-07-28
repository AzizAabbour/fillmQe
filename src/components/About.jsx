import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Target, Lightbulb } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Creative Vision',
      desc: 'We blend artistic sensibility with strategic thinking to create visuals that resonate and inspire.',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Precision Craft',
      desc: 'Every pixel is intentional. We obsess over details that elevate ordinary experiences into extraordinary ones.',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Innovation First',
      desc: 'We push boundaries with emerging technologies and creative approaches that set new industry standards.',
    },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] glass-card-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-[#16161a] to-[#0a0a0c]" />
              {/* Abstract art composition */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border-2 border-[#e63946]/30 animate-spin-slow" />
                  <div className="absolute inset-6 rounded-full border border-[#d4622a]/20" style={{ animation: 'spin-slow 12s linear infinite reverse' }} />
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#e63946]/20 to-[#d4622a]/10 animate-pulse-glow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-6xl font-bold gradient-text">V.</span>
                  </div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#e63946]/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#d4622a]/30 rounded-br-lg" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-6 glass-card px-5 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e63946] to-[#d4622a] flex items-center justify-center">
                <span className="text-white font-bold text-sm">10+</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#f0ede6]">Years of</div>
                <div className="text-xs text-[#6b6760]">Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-tag mb-6 inline-flex">About Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#f0ede6] mt-6 mb-6 leading-tight">
              We Tell Stories Through{' '}
              <span className="gradient-text">Digital Art</span>
            </h2>
            <p className="text-[#9e9a93] text-lg leading-relaxed mb-10">
              Founded in 2015, Vidio Studio is a collective of designers, developers, and visual
              storytellers who transform bold ideas into captivating digital realities. We partner
              with brands that dare to stand out.
            </p>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                  className="flex gap-4 group"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#e63946]/15 to-[#d4622a]/10 border border-[#e63946]/20 flex items-center justify-center text-[#e63946] group-hover:from-[#e63946]/25 group-hover:border-[#e63946]/40 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[#f0ede6] mb-1">{pillar.title}</h3>
                    <p className="text-sm text-[#6b6760] leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
