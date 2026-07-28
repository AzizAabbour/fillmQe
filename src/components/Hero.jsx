import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Star } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const orbRef1 = useRef(null)
  const orbRef2 = useRef(null)
  const orbRef3 = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orbRef1.current, {
        y: -30, x: 15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })
      gsap.to(orbRef2.current, {
        y: 20, x: -20, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut',
      })
      gsap.to(orbRef3.current, {
        y: -15, x: 10, rotation: 360, duration: 20, repeat: -1, ease: 'none',
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dots noise-overlay"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient orb */}
        <div
          ref={orbRef1}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)' }}
        />
        {/* Secondary orb */}
        <div
          ref={orbRef2}
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #d4622a 0%, transparent 70%)' }}
        />
        {/* Spinning ring */}
        <div
          ref={orbRef3}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.02] opacity-60"
        />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="section-tag">
              <Star className="w-3.5 h-3.5" />
              Award-Winning Creative Studio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          >
            <span className="block text-[#f0ede6]">We Craft</span>
            <span className="block gradient-text mt-1">Cinematic</span>
            <span className="block text-[#f0ede6] mt-1">Experiences<span className="text-[#e63946]">.</span></span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#9e9a93] max-w-xl leading-relaxed mb-10"
          >
            A premium digital studio specializing in immersive brand identities,
            cinematic web experiences, and visual storytelling that captivates audiences worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
              <Play className="w-4 h-4" />
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#about" className="btn-secondary inline-flex items-center gap-2">
              Learn More
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 md:gap-14">
            {[
              { value: '200+', label: 'Projects Delivered' },
              { value: '50+', label: 'Global Clients' },
              { value: '15+', label: 'Awards Won' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6b6760] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative side element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
        >
          <div className="relative w-72 h-72">
            {/* Rotating rings */}
            <div className="absolute inset-0 rounded-full border border-[#e63946]/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-[#d4622a]/15" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />
            <div className="absolute inset-8 rounded-full border border-[#d4972a]/10 animate-spin-slow" />
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#e63946] to-[#d4622a] animate-pulse-glow" />
            </div>
            {/* Orbit dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e63946]/60" />
            <div className="absolute bottom-8 right-0 w-2 h-2 rounded-full bg-[#d4622a]/50" />
            <div className="absolute top-16 left-0 w-1.5 h-1.5 rounded-full bg-[#d4972a]/40" />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10" />
    </section>
  )
}
