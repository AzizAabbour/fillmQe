import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Phone, Send, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#0d0d10]" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e63946 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-tag mb-6 inline-flex">Get In Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#f0ede6] mt-6 mb-5 leading-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#9e9a93] text-lg">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: <Mail className="w-5 h-5" />, label: 'Email Us', value: 'hello@vidio.studio', href: 'mailto:hello@vidio.studio' },
              { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: '+1 (555) 234-5678', href: 'tel:+15552345678' },
              { icon: <MapPin className="w-5 h-5" />, label: 'Visit Us', value: '123 Creative Ave, San Francisco, CA', href: '#' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-[#2a2a30] bg-[#111115]/60 hover:border-[#e63946]/20 transition-all duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#e63946]/15 to-transparent border border-[#e63946]/20 flex items-center justify-center text-[#e63946] group-hover:from-[#e63946]/25 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#6b6760] mb-1">{item.label}</div>
                  <div className="text-sm font-medium text-[#f0ede6] group-hover:text-[#e63946] transition-colors duration-300 break-words">{item.value}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6b6760] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-7 md:p-9 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#9e9a93] mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#111115] border border-[#2a2a30] text-[#f0ede6] placeholder-[#4a4a50] focus:border-[#e63946]/50 focus:outline-none focus:ring-1 focus:ring-[#e63946]/30 transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#9e9a93] mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#111115] border border-[#2a2a30] text-[#f0ede6] placeholder-[#4a4a50] focus:border-[#e63946]/50 focus:outline-none focus:ring-1 focus:ring-[#e63946]/30 transition-all duration-300 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#9e9a93] mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-[#111115] border border-[#2a2a30] text-[#f0ede6] placeholder-[#4a4a50] focus:border-[#e63946]/50 focus:outline-none focus:ring-1 focus:ring-[#e63946]/30 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#9e9a93] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[#111115] border border-[#2a2a30] text-[#f0ede6] placeholder-[#4a4a50] focus:border-[#e63946]/50 focus:outline-none focus:ring-1 focus:ring-[#e63946]/30 transition-all duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
