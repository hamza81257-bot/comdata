import { motion } from 'framer-motion'

import healthcare from '../assets/industries/healthcare-l0GGYs9V.png'
import manufacturing from '../assets/industries/manufacturing-BZlEaZmf.png'
import retail from '../assets/industries/retail-CdNS4I2p.png'
import financial from '../assets/industries/financial-BBTh689m.png'
import iot from '../assets/industries/IOT-DYIhBvcQ.png'
import logistics from '../assets/industries/logistics-DuMVEAYY.png'
import hospitality from '../assets/industries/hospitality-D15bW3i-.png'
import energy from '../assets/industries/energy _ utility-DwCCqDe_.png'
import telecom from '../assets/industries/telecomunication-CGxiPfOk.png'
import supplyChain from '../assets/industries/supply chain-D2U3prxv.png'
import education from '../assets/industries/education-C8M2FobZ.png'

const industries = [
  { name: 'Healthcare', icon: healthcare },
  { name: 'Manufacturing', icon: manufacturing },
  { name: 'Retail', icon: retail },
  { name: 'Financial Services', icon: financial },
  { name: 'IoT & Smart Buildings', icon: iot },
  { name: 'Logistics', icon: logistics },
  { name: 'Hospitality', icon: hospitality },
  { name: 'Energy & Utilities', icon: energy },
  { name: 'Telecommunications', icon: telecom },
  { name: 'Supply Chain', icon: supplyChain },
  { name: 'Education', icon: education },
]

export default function WhoWeServe() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-7xl w-full mx-auto">
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
            <div className="w-2 h-2 bg-[#00A4EF] rounded-full" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">WHO WE SERVE</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl md:mx-0 mx-auto leading-relaxed"
          >
            Various Industries and Businesses Use Our Products, From large-scale manufacturers to small businesses, we're dedicated to helping a wide range of industries thrive.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-t border-gray-100 pt-4 sm:pt-5 md:pt-6 group"
            >
              <div className="flex items-center text-gray-800">
                <div className="mr-2 sm:mr-3 flex-shrink-0">
                  <img alt={industry.name} className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 object-contain" src={industry.icon} />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium leading-snug group-hover:text-[#00A4EF] transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
