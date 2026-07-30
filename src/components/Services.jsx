import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play, ChevronLeft, ChevronRight, Award, ShieldAlert } from 'lucide-react'

const films = [
  {
    title: 'Squid Game 2',
    image: '/images/poster_squidgame.png',
    genre: 'Thriller · Action',
    desc: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.',
    episodes: '9 Episodes',
  },
  {
    title: 'Study Group',
    image: '/images/poster_studygroup.png',
    genre: 'Action · Drama',
    desc: 'Yoon Ga-min, a student at a school notorious for delinquents, wants to study well but finds himself in violent clashes as he tries to form a study group.',
    episodes: '4 Episodes',
  },
  {
    title: 'Moving',
    image: '/images/poster_moving.png',
    genre: 'Sci-Fi · Action',
    desc: 'Children who live with hidden superpowers and their parents who harbor painful secrets from the past face a major looming danger together.',
    episodes: '20 Episodes',
  },
  {
    title: 'Hellbound',
    image: '/images/poster_hellbound.png',
    genre: 'Supernatural · Thriller',
    desc: 'Unearthly beings deliver bloody condemnations, sending individuals to hell and giving rise to a religious group founded on the idea of divine justice.',
    episodes: '6 Episodes',
  },
  {
    title: 'Bloodhounds',
    image: '/images/poster_bloodhounds.png',
    genre: 'Action · Noir',
    desc: 'Two young boxers band together with a benevolent lender to take down a ruthless loan shark who preys on the financially desperate.',
    episodes: '8 Episodes',
  },
  {
    title: 'All of Us Are Dead',
    image: '/images/poster_allofusaredead.png',
    genre: 'Horror · Suspense',
    desc: 'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.',
    episodes: '12 Episodes',
  },
]

const cardVariants = {
  center: {
    x: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1.15,
    opacity: 1,
    zIndex: 20,
    borderColor: "#ff0055",
    boxShadow: "0px 0px 30px rgba(255, 0, 85, 0.45)",
  },
  left: (isMobile) => ({
    x: isMobile ? -95 : -230,
    rotateY: 28,
    rotateZ: -6,
    scale: 0.85,
    opacity: 0.55,
    zIndex: 10,
    borderColor: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
  }),
  right: (isMobile) => ({
    x: isMobile ? 95 : 230,
    rotateY: -28,
    rotateZ: 6,
    scale: 0.85,
    opacity: 0.55,
    zIndex: 10,
    borderColor: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
  }),
  hidden: {
    x: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 0.7,
    opacity: 0,
    zIndex: 0,
    borderColor: "rgba(255, 255, 255, 0)",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  }
}

const cardTransition = {
  type: "spring",
  stiffness: 260,
  damping: 28
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1) // Study Group as default active
  const [isMobile, setIsMobile] = useState(false)

  // Touch gesture state
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + films.length) % films.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % films.length)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext()
    }
    if (touchStart - touchEnd < -75) {
      handlePrev()
    }
    setTouchStart(0)
    setTouchEnd(0)
  }

  const getCardStyle = (index) => {
    let offset = index - activeIndex
    
    // Wrap around circular index
    if (offset < -films.length / 2) offset += films.length
    if (offset > films.length / 2) offset -= films.length

    const isActive = offset === 0
    const isLeft = offset === -1
    const isRight = offset === 1
    const isVisible = Math.abs(offset) <= 1

    return {
      offset,
      isActive,
      isLeft,
      isRight,
      isVisible
    }
  }

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-[#080709] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Central Selected Films Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <span className="px-8 py-3 rounded-full bg-[#ff0055] text-white font-extrabold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,0,85,0.5)] flex items-center gap-2">
            SELECTED FILMS
          </span>
          <ChevronDown className="w-5 h-5 text-gray-400 mt-2 animate-bounce" />
        </motion.div>

        {/* Emblems & Arch Dial Layout */}
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          {/* Top Emblem Circular Badges (Left & Right) */}
          <div className="w-full flex justify-between items-center px-4 md:px-16 mb-8 z-10">
            {/* Left Emblem */}
            <div className="w-16 h-16 rounded-full bg-[#d48806]/20 border-2 border-[#d48806] flex items-center justify-center text-[#d48806] shadow-[0_0_15px_rgba(212,136,6,0.4)]">
              <Award className="w-8 h-8" />
            </div>

            {/* Right Emblem */}
            <div className="w-16 h-16 rounded-full bg-[#d48806]/20 border-2 border-[#d48806] flex items-center justify-center text-[#d48806] shadow-[0_0_15px_rgba(212,136,6,0.4)]">
              <ShieldAlert className="w-8 h-8" />
            </div>
          </div>

          {/* Curved Arched Dial Container */}
          <div className="relative w-full overflow-hidden pt-8 pb-16 flex flex-col items-center justify-center">
            {/* Background Neon Arc Wheel */}
            <div className="absolute bottom-0 w-[700px] h-[350px] rounded-t-full border-t-8 border-[#ff0055] bg-gradient-to-t from-[#ff0055]/20 via-[#d48806]/10 to-transparent shadow-[0_0_50px_rgba(255,0,85,0.4)] pointer-events-none" />

            {/* Left & Right Navigation Arrows on the Arc */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#ff0055] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#ff0055] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Poster Cards Arc Layout */}
            <div 
              className="relative z-20 w-full max-w-xl md:max-w-3xl h-[280px] md:h-[400px] flex items-center justify-center select-none" 
              style={{ perspective: 1200 }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {films.map((film, index) => {
                const { isActive, isLeft, isRight, isVisible } = getCardStyle(index)
                
                let variant = "hidden"
                if (isActive) variant = "center"
                else if (isLeft) variant = "left"
                else if (isRight) variant = "right"

                return (
                  <motion.div
                    key={film.title}
                    custom={isMobile}
                    variants={cardVariants}
                    animate={variant}
                    transition={cardTransition}
                    onClick={() => {
                      if (isLeft) handlePrev()
                      if (isRight) handleNext()
                    }}
                    className="absolute w-40 md:w-56 h-60 md:h-[340px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer select-none origin-center border-2 border-transparent"
                  >
                    <img
                      src={film.image}
                      alt={film.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    
                    {/* Side card darkening overlay */}
                    {!isActive && isVisible && (
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 pointer-events-none" />
                    )}

                    {/* Play Button Overlay (fades in only for active card) */}
                    <motion.div 
                      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/25 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#ff0055] flex items-center justify-center shadow-2xl">
                        <Play className="w-6 h-6 md:w-7 md:h-7 fill-[#ff0055] translate-x-0.5" />
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Active Film Details */}
            <div className="mt-8 mb-4 text-center max-w-lg px-6 relative z-20 min-h-[110px] md:min-h-[130px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white tracking-tight">
                    {films[activeIndex].title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-[#ff0055] tracking-widest uppercase">
                      {films[activeIndex].genre}
                    </span>
                    <span className="text-gray-600">|</span>
                    <span className="text-xs font-semibold text-gray-400 tracking-wider">
                      {films[activeIndex].episodes}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mt-2 line-clamp-2 max-w-md">
                    {films[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arched Text Banner */}
            <div className="relative z-20 text-center mt-4">
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#ff0055] bg-[#121116] px-6 py-2 rounded-full border border-[#ff0055]/40 shadow-[0_0_10px_rgba(255,0,85,0.3)]">
                ASKAR AKMIL DESIGN · MONJHIE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
