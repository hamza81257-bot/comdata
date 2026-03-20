import { motion } from 'framer-motion'
import companyLogo from '../assets/logos/logo-C0gqY2mt.png'

export default function AboutUs() {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <div className="w-2 h-2 bg-[#00aeef] rounded-full" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">About US</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-gray-600 mb-4"
          >
            Who we are: Our story
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex flex-col items-center lg:items-start w-full lg:w-auto"
          >
            <div className="relative">
              <img
                alt="ComData Innovation Logo"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain"
                src={companyLogo}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-3xl space-y-4 sm:space-y-6 w-full"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-xl text-[#545454] leading-relaxed text-center lg:text-left"
            >
              ComData Innovation Pvt. Ltd. – Empowering the Future of Digital Transformation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-[#545454] leading-relaxed text-center lg:text-left"
            >
              At ComData Innovation Pvt. Ltd., we help companies transform their businesses by leveraging the latest advancements in AI, ML, and cutting-edge technologies. Our mission is to be your trusted partner on your digital transformation journey, enabling you to embrace innovation, enhance operational efficiency, and unlock new growth opportunities.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-[#545454] leading-relaxed text-center lg:text-left"
            >
              We specialize in IT and software services that are powered by intelligent, data-driven solutions. By integrating AI and ML, we help businesses streamline their operations, improve decision-making, and stay ahead of the competition. Our focus is on delivering customized solutions that align with your unique needs and objectives, ensuring a smooth and effective transition into the digital future.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
