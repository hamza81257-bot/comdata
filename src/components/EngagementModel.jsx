import { motion } from 'framer-motion'

import turnkey from '../assets/engagement/turnkey-CW_CiW0a.png'
import offshore from '../assets/engagement/offshore-BbPVbtT8.png'
import onsite from '../assets/engagement/onsite-BL8qvh9V.png'
import hybrid from '../assets/engagement/hybrid-tjUbjW-4.png'
import partnership from '../assets/engagement/partnership-Dym5Cxil.png'

const topRow = [
  {
    title: 'Turnkey',
    desc: 'Tailored to specific SOW Custom solutions for your biz Control to reduce TCO',
    icon: turnkey,
    bg: 'bg-orange-50',
  },
  {
    title: 'Offshore',
    desc: 'Offshore resource Continuous communication Cost advantage',
    icon: offshore,
    bg: 'bg-blue-50',
  },
  {
    title: 'Team on-hire',
    desc: 'Virtual extension of team Agile + Scrum + Kanban + TDD Ideal for start-ups, MSMEs & Large enterprises',
    icon: offshore,
    bg: 'bg-blue-50',
  },
]

const bottomRow = [
  {
    title: 'Onsite',
    desc: 'Repetitive scope Direct integration Resource on-demand',
    icon: onsite,
    bg: 'bg-green-50',
  },
  {
    title: 'Hybrid',
    desc: 'Onsite + Offshore Optimized cost + efficiency Scalability + ops benefits',
    icon: hybrid,
    bg: 'bg-yellow-50',
  },
  {
    title: 'Partnership',
    desc: 'Captive/offsite agile team Blended adaptive model for CO-Development Global development centers',
    icon: partnership,
    bg: 'bg-pink-50',
  },
]

function Card({ item, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-100"
    >
      <div className="flex items-start space-x-4">
        <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
          <img alt={item.title} className="w-full h-full object-contain" src={item.icon} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function EngagementModel() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">ENGAGEMENT MODEL</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-600 mb-4">Our Engagement Model</h2>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRow.map((item, i) => (
              <Card key={item.title} item={item} delay={i * 0.1} />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomRow.map((item, i) => (
              <Card key={item.title} item={item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
