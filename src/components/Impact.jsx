import { motion } from 'framer-motion'

import frame109 from '../assets/impact/Frame 109-C7-SZqj0.png'
import frame110 from '../assets/impact/Frame 110-DvpWV1L-.png'
import frame111 from '../assets/impact/Frame 111-CBQdwPgT.png'
import frame112 from '../assets/impact/Frame 112-DxLz1OPg.png'
import frame114 from '../assets/impact/Frame 114-BBEebiU3.png'
import frame115 from '../assets/impact/Frame 115-BXhHQCPD.png'

const impacts = [
  { title: 'Empowering Data-Driven Decisions', img: frame112 },
  { title: 'Revolutionizing Operational Efficiency', img: frame115 },
  { title: 'Enhancing Security & Compliance', img: frame114 },
  { title: 'Driving Innovation Across Industries', img: frame111 },
  { title: 'Scaling Businesses with Custom Solutions', img: frame109 },
  { title: 'Future-Proofing Businesses for Long-Term Success', img: frame110 },
]

export default function Impact() {
  return (
    <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <div className="w-2 h-2 bg-[#00aeef] rounded-full" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">Impact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-gray-600 mb-4"
          >
            Expertise you can count on<br />to achieve your most
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto md:mx-0"
          >
            At ComData Innovation, we empower businesses with innovative, AI-powered digital solutions that improve efficiency, enhance user experience, reduce costs, and drive growth across industries.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="text-center">
                <div className="w-56 h-56 lg:w-52 lg:h-48 mx-auto -mb-1 flex items-center justify-center overflow-hidden">
                  <img alt={item.title} className="w-full h-full object-contain p-4" src={item.img} />
                </div>
                <h3 className="md:text-base text-xl font-semibold text-gray-500 leading-tight px-2">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
