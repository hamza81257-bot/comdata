import { motion } from 'framer-motion'
import HeroRightSide from './HeroRightSide'
import heroVideo from '../assets/HeroBackgroundVideo.mp4'

import { BrainCircuit, Users, Rocket } from 'lucide-react'

const stats = [
  { icon: BrainCircuit, text: '200+ Creative Minds' },
  { icon: Users, text: '200+ Clients Served' },
  { icon: Rocket, text: '20+ Start-ups supported' },
]

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-comdata-bg">
      {/* Top Ambient Glow matching reference */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-comdata-cyan/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 min-h-screen w-full flex items-center">
        <div className="w-full px-8 lg:px-16 max-w-[1400px] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4">

            {/* Left Text — matches original's ~50% width */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[52%] text-left space-y-8"
            >
              {/* Main Heading — original is ~56px Poppins light */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(36px, 4.5vw, 60px)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  color: 'white',
                }}
              >
                Begin this journey with
                <br className="hidden lg:block" /> us in the digital era of
                <br className="hidden lg:block" />
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  style={{ fontWeight: 500, color: '#00aeef' }}
                >
                  infinite possibilities
                </motion.span>
              </motion.h1>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{ paddingTop: '16px' }}
                className="space-y-6"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.15 }}
                    className="flex items-center gap-5"
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-comdata-cyan shadow-[0_0_15px_rgba(0,174,239,0.2)] animate-float"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <stat.icon size={24} strokeWidth={1.5} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '18px',
                        color: '#CBD5E1',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {stat.text.split(/(\d+\+)/).map((part, index) => 
                        /\d+\+/.test(part) ? 
                          <span key={index} className="text-white font-semibold text-xl">{part}</span> : 
                          part
                      )}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Tech Network */}
            <div className="w-full lg:w-[48%] flex items-center justify-center">
              <HeroRightSide />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
