import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Episode')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = ['Home', 'About', 'Episode', 'Actors']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080709]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Logo + Navigation Links */}
        <div className="flex items-center gap-8 md:gap-12">
          {/* Vidio Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="text-2xl md:text-3xl font-black italic tracking-wider text-[#ff0055] drop-shadow-[0_0_12px_rgba(255,0,85,0.6)]">
              vidio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative text-sm font-medium transition-colors ${
                  activeTab === item ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item}
                {activeTab === item && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff0055] shadow-[0_0_8px_#ff0055]"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Search Bar & Filter Button */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative hidden sm:flex items-center">
            <input
              type="text"
              placeholder="Tugas ujian aad"
              className="w-48 lg:w-64 py-2 pl-4 pr-10 rounded-full bg-[#121116] border border-[#ff0055]/60 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0055] focus:ring-1 focus:ring-[#ff0055] transition-all shadow-[0_0_10px_rgba(255,0,85,0.2)]"
            />
            <Search className="absolute right-3.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Filter Button */}
          <button className="p-2 rounded-full bg-[#121116] border border-white/10 hover:border-[#ff0055]/50 text-gray-300 hover:text-white transition-all">
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#121116] border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 px-2"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item)
                setMobileMenuOpen(false)
              }}
              className={`text-left text-sm py-2 font-medium ${
                activeTab === item ? 'text-[#ff0055]' : 'text-gray-300'
              }`}
            >
              {item}
            </button>
          ))}
          <div className="relative flex items-center mt-2">
            <input
              type="text"
              placeholder="Tugas ujian aad"
              className="w-full py-2 pl-4 pr-10 rounded-full bg-[#121116] border border-[#ff0055]/60 text-xs text-white placeholder-gray-400 focus:outline-none"
            />
            <Search className="absolute right-3.5 w-4 h-4 text-gray-400" />
          </div>
        </motion.div>
      )}
    </header>
  )
}
