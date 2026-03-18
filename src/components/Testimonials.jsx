import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonialSets = [
  [
    {
      text: '"ComData\'s infrastructure solutions transformed our entire IT operations. Their team\'s expertise in network design and implementation was exceptional."',
      name: 'Sarah Chen',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
    {
      text: '"The data analytics platform they built for us has been a game-changer. We can now make decisions based on real-time insights."',
      name: 'Michael Park',
      role: 'VP of Operations',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
  ],
  [
    {
      text: '"Their AI-powered solutions revolutionized our workflow. Highly recommend their services to any business."',
      name: 'Emily Rodriguez',
      role: 'Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
    {
      text: '"Outstanding partnership from start to finish. Their expertise and dedication made all the difference."',
      name: 'James Wilson',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
  ],
  [
    {
      text: '"The digital transformation roadmap they provided was comprehensive and perfectly aligned with our vision."',
      name: 'Lisa Thompson',
      role: 'Director of Innovation',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
    {
      text: '"Their cloud migration services saved us significant costs while improving our system performance by 40%."',
      name: 'David Kumar',
      role: 'IT Director',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
  ],
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-2 mb-6"
          >
            <div className="w-2 h-2 bg-[#00A4EF] rounded-full" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-gray-600 mb-4"
          >
            Success stories from our valued clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl md:mx-0 mx-auto leading-relaxed"
          >
            From large-scale manufacturers to small businesses, we're dedicated to helping a wide range of industries thrive.
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {testimonialSets[activeIndex].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.05 }}
                      className="text-yellow-400 text-lg"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{t.text}</p>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative">
                    <img alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" src={t.avatar} />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 gap-3"
          >
            {testimonialSets.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'bg-[#00A4EF] w-8' : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
