import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Neon Horizons',
    category: 'Brand Identity',
    year: '2025',
    desc: 'A futuristic rebrand for a leading tech startup, blending neon aesthetics with minimalist design.',
    gradient: 'from-[#e63946]/30 to-[#d4622a]/20',
    accent: '#e63946',
  },
  {
    title: 'Atlas Interactive',
    category: 'Web Experience',
    year: '2024',
    desc: 'An immersive 3D web experience for a global travel platform with scroll-driven storytelling.',
    gradient: 'from-[#d4622a]/30 to-[#d4972a]/20',
    accent: '#d4622a',
  },
  {
    title: 'Echoes Film Fest',
    category: 'Motion Design',
    year: '2024',
    desc: 'Complete visual identity and promotional campaign for an independent film festival.',
    gradient: 'from-[#d4972a]/30 to-[#c9a84c]/20',
    accent: '#d4972a',
  },
  {
    title: 'Velocity App',
    category: 'App Development',
    year: '2025',
    desc: 'A performance-focused fitness app with real-time tracking and cinematic UI transitions.',
    gradient: 'from-[#c9a84c]/30 to-[#e63946]/20',
    accent: '#c9a84c',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="section-tag mb-6 inline-flex">Selected Work</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#f0ede6] mt-6 leading-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <a href="#projects" className="btn-secondary inline-flex items-center gap-2 self-start md:self-auto text-sm">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative glass-card overflow-hidden card-hover cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className={`relative h-56 md:h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Abstract composition */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <div className="w-32 h-32 rounded-full border-2 border-white/20 group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute w-20 h-20 rounded-full border border-white/10 translate-x-10 group-hover:scale-110 transition-transform duration-700 delay-100" />
                </div>
                {/* Project initial */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-7xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 group-hover:scale-110 transform">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Year badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-medium text-white/70 border border-white/10">
                  {project.year}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: project.accent }}>
                  {project.category}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#f0ede6] mb-2 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6b6760] leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
