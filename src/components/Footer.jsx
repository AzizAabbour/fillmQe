import { Zap, ArrowUp, Globe, Share2, MessageSquare, Send } from 'lucide-react'

const footerLinks = {
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Services: ['Brand Identity', 'Web Development', 'Motion Design', 'Digital Strategy'],
  Resources: ['Case Studies', 'Documentation', 'Help Center', 'Privacy Policy'],
}

const socials = [
  { icon: <Globe className="w-4 h-4" />, href: '#', label: 'Website' },
  { icon: <Share2 className="w-4 h-4" />, href: '#', label: 'Share' },
  { icon: <MessageSquare className="w-4 h-4" />, href: '#', label: 'Chat' },
  { icon: <Send className="w-4 h-4" />, href: '#', label: 'Telegram' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-[#08080a] border-t border-[#1a1a1e]">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#e63946] to-[#d4622a] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-[#f0ede6]">
                Vidio<span className="text-[#e63946]">.</span>
              </span>
            </a>
            <p className="text-sm text-[#6b6760] leading-relaxed max-w-xs mb-6">
              A premium digital studio crafting cinematic web experiences
              and brand identities that captivate audiences worldwide.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl border border-[#2a2a30] flex items-center justify-center text-[#6b6760] hover:border-[#e63946]/40 hover:text-[#e63946] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-[#f0ede6] mb-4 text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#6b6760] hover:text-[#e63946] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1e]">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4a4a50]">
            © 2025 Vidio Studio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl border border-[#2a2a30] flex items-center justify-center text-[#6b6760] hover:border-[#e63946]/40 hover:text-[#e63946] transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
