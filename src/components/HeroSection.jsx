import { motion } from 'framer-motion'
import HeroRightSide from './HeroRightSide'
import heroVideo from '../assets/HeroBackgroundVideo.mp4'

const stats = [
  { emoji: '🧠', text: '200+ Creative Minds' },
  { emoji: '👥', text: '200+ Clients Served' },
  { emoji: '🚀', text: '20+ Start-ups supported' },
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
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
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
                  style={{ fontWeight: 400, color: '#00aeef' }}
                >
                  infinite possibilities
                </motion.span>
              </motion.h1>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{ paddingTop: '8px' }}
                className="space-y-5"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.15 }}
                    className="flex items-center gap-4"
                  >
                    <span
                      className="animate-float"
                      style={{ fontSize: '22px', lineHeight: 1, animationDelay: `${i * 0.3}s` }}
                    >
                      {stat.emoji}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '17px',
                        color: 'white',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {stat.text}
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
