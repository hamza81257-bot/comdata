import { motion } from 'framer-motion'

// Import all client logos
import hiranandani from '../assets/clients/Hiranandani-D0LXendz.png'
import iifl from '../assets/clients/IIFL-BGqTUpE2.png'
import lodha from '../assets/clients/Lodha-BmDiAbNE.png'
import maersk from '../assets/clients/Maersk-C7odT12p.png'
import magicbus from '../assets/clients/Magicbus-DA2k0b5R.png'
import manappuram from '../assets/clients/ManappuramFL-DvMs_IRW.png'
import marathon from '../assets/clients/Marathon-B6THSRsA.png'
import mazars from '../assets/clients/mazars-DpbaJ8Px.png'
import mukand from '../assets/clients/Mukand-DL0zuOx2.png'
import mumbaiMetro from '../assets/clients/MumbaiMetro-EjsrcPQL.png'
import oberoi from '../assets/clients/Oberoi-Bq8cSC_U.png'
import ocTanner from '../assets/clients/OCTanner-DK63si52.png'
import orchids from '../assets/clients/Orchids-Ce-It3xZ.png'
import rainbow from '../assets/clients/Rainbow-FSS-wBAd.png'
import rosa from '../assets/clients/Rosa-U7pyc7XB.png'
import rustomjee from '../assets/clients/Rustomjee-DQyjentv.png'
import saharaStar from '../assets/clients/SaharaStar-Bj1nyHlB.png'
import teeg from '../assets/clients/TEEG-CyAHw154.png'
import thakurTrust from '../assets/clients/ThakurTrust-CGrGACpc.png'
import theLalit from '../assets/clients/TheLalit-C6amwQ4B.png'
import timeZone from '../assets/clients/TimeZone-C59xFH71.png'

const clientLogos = [
  hiranandani, iifl, lodha, maersk, magicbus, manappuram, marathon,
  mazars, mukand, mumbaiMetro, oberoi, ocTanner, orchids, rainbow,
  rosa, rustomjee, saharaStar, teeg, thakurTrust, theLalit, timeZone,
]

export default function Clients() {
  // Triple the logos for seamless infinite scroll
  const tripled = [...clientLogos, ...clientLogos, ...clientLogos]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            <div className="w-2 h-2 bg-[#00A4EF] rounded-full" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">Clients</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-gray-600 mb-4"
          >
            Our collaborations include:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-md mx-auto md:mx-0"
          >
            A few companies we have provided solutions for
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 items-center py-8 animate-scroll" style={{ width: '300%' }}>
            {tripled.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[160px] h-28 flex items-center justify-center shadow-xl bg-white"
              >
                <img
                  alt={`Client ${i + 1}`}
                  className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  src={logo}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
