import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const num = parseInt(target)
    const step = Math.ceil(num / (duration / 16))
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= num) {
        current = num
        clearInterval(timer)
      }
      setCount(current)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: '200', suffix: '+', label: 'Projects Completed', desc: 'Across 15+ industries' },
  { value: '50', suffix: '+', label: 'Global Clients', desc: 'In 20+ countries' },
  { value: '98', suffix: '%', label: 'Client Satisfaction', desc: 'Based on project reviews' },
  { value: '15', suffix: '+', label: 'Awards Won', desc: 'Industry recognition' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Gradient bar at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e63946]/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="glass-card-strong p-10 md:p-14">
          {/* Inner gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-[0.08] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)' }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-[#f0ede6] mb-1">{stat.label}</div>
                <div className="text-xs text-[#6b6760]">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4622a]/20 to-transparent" />
    </section>
  )
}
