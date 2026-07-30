import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Splash() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2.5 // fills up in roughly 2 seconds
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.85, 
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#080709] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff0055]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d48806]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Center content container */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Pulsing Glowing Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: 1, 
            scale: [0.95, 1.05, 0.95],
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { repeat: Infinity, duration: 1.6, ease: "easeInOut" }
          }}
          className="text-6xl md:text-8xl font-black italic tracking-widest text-[#ff0055] drop-shadow-[0_0_35px_rgba(255,0,85,0.7)] select-none"
        >
          vidio
        </motion.div>

        {/* Neon Gradient Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-white/5 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#ff0055] to-[#d48806] shadow-[0_0_8px_#ff0055]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Loading percentage text */}
        <motion.span 
          className="text-xs font-extrabold uppercase tracking-widest text-gray-500 font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          {Math.floor(progress)}%
        </motion.span>
      </div>
    </motion.div>
  )
}
