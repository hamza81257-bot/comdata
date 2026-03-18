import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format&q=80',
]

const highlights = [
  { title: 'Team Outings', desc: 'Regular team building activities and outings to foster stronger bonds.' },
  { title: 'Innovation Labs', desc: 'Dedicated spaces for experimentation and creative problem-solving.' },
  { title: 'Learning & Growth', desc: 'Continuous learning opportunities through workshops and conferences.' },
  { title: 'Celebrations', desc: 'We celebrate milestones, festivals, and achievements together.' },
]

export default function LifeAtComData() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Life@ComData
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            Where innovation meets culture. Discover what makes ComData a great place to work.
          </motion.p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#00A4EF] rounded-full" />
              <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">Our Culture</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-600 mb-4">Moments That Define Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  i === 0 || i === 5 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <img
                  src={photo}
                  alt={`Life at ComData ${i + 1}`}
                  className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl text-gray-600 mb-4">Why We Love Working Here</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
