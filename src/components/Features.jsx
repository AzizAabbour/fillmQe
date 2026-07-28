import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Zap, Users, Globe, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Quality Guaranteed',
    desc: 'We deliver pixel-perfect results with rigorous quality control at every stage.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    desc: 'Optimized workflows and agile methodology ensure rapid delivery without compromising quality.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Dedicated Team',
    desc: 'A passionate team of experts fully invested in your project success from day one.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Reach',
    desc: 'We serve clients worldwide with culturally aware designs that resonate across borders.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Support',
    desc: 'Round-the-clock availability with dedicated project managers for seamless communication.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Award Winning',
    desc: 'Recognized by industry leaders for innovative design and exceptional execution.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden bg-[#0d0d10]" ref={ref}>
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4972a 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-tag mb-6 inline-flex">Why Choose Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#f0ede6] mt-6 mb-5 leading-tight">
            Built for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-[#9e9a93] text-lg">
            We combine creative expertise with technical precision to deliver
            results that exceed expectations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group p-6 rounded-2xl border border-[#2a2a30] bg-[#111115]/60 hover:border-[#e63946]/20 hover:bg-[#16161a]/80 transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e63946]/10 to-transparent border border-[#e63946]/15 flex items-center justify-center text-[#e63946] mb-5 group-hover:from-[#e63946]/20 group-hover:border-[#e63946]/30 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#f0ede6] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#6b6760] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
