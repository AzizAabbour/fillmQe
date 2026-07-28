import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Monitor, Film, Megaphone, Code2, Camera, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Brand Identity',
    desc: 'Crafting distinctive visual identities that capture your brand essence and leave a lasting impression.',
    color: '#e63946',
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Web Development',
    desc: 'Building performant, responsive websites with cutting-edge technologies and immersive interactions.',
    color: '#d4622a',
  },
  {
    icon: <Film className="w-6 h-6" />,
    title: 'Motion Design',
    desc: 'Creating cinematic animations and motion graphics that breathe life into every digital touchpoint.',
    color: '#d4972a',
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Digital Strategy',
    desc: 'Data-driven campaigns and growth strategies that amplify your reach and drive measurable results.',
    color: '#c9a84c',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'App Development',
    desc: 'Designing and developing mobile and web applications with seamless user experiences and scalable architecture.',
    color: '#e63946',
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Visual Production',
    desc: 'Professional photography, videography, and post-production that tells your story with cinematic quality.',
    color: '#d4622a',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#0d0d10]" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4622a 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-tag mb-6 inline-flex">Our Services</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#f0ede6] mt-6 mb-5 leading-tight">
            What We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-[#9e9a93] text-lg">
            From concept to delivery, we offer end-to-end creative solutions
            that transform your vision into reality.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative glass-card p-7 card-hover cursor-pointer"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
                  border: `1px solid ${service.color}25`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              <h3 className="font-heading text-xl font-semibold text-[#f0ede6] mb-3 flex items-center justify-between">
                {service.title}
                <ArrowUpRight
                  className="w-4 h-4 text-[#6b6760] opacity-0 group-hover:opacity-100 group-hover:text-[#e63946] transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                />
              </h3>
              <p className="text-sm text-[#6b6760] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
