import { useState } from 'react'
import { motion } from 'framer-motion'

// Service images
import itHardware from '../assets/services/ourservices1_1-BAfFNRVq.jpg'
import webMobile from '../assets/services/web and mobile-B-hmCmV3.jpg'
import dataLakes from '../assets/services/data lakes-BdYT-gxT.png'
import digitalTransformation from '../assets/services/digital transformation roadmap-CExlfrq-.jpg'

// Cloud logos
import aws from '../assets/services/aws_logo-CqWYlZXW.webp'
import azure from '../assets/services/azure-DIg34422.jpg'
import gcp from '../assets/services/gcp-BF0Wi5Vq.webp'
import dataServer from '../assets/services/dataServer-tlDW1wPj.png'

const cloudLogos = [aws, azure, gcp]

const serviceSections = [
  {
    heading: 'Laying The Foundation',
    subtitle: 'Modern infrastructure for a connected world',
    tabs: [
      { name: 'IT Hardware & Network Infrastructure', color: 'bg-card-green' },
      { name: 'HSIA- Managed Services', color: 'bg-card-yellow' },
      { name: 'AV (Audio Video) Solutions', color: 'bg-card-pink' },
      { name: 'Low Voltage (L.V.) Systems', color: 'bg-card-blue' },
    ],
    cards: [
      {
        title: 'IT Hardware & Network Infrastructure',
        desc: 'Efficiently manage, track, and optimize your IT assets.',
        img: itHardware,
        tech: 'Servers, laptops, desktops, edge devices, storages',
        logos: [...cloudLogos],
      },
      {
        title: 'HSIA- Managed Services',
        desc: 'Enterprise-grade internet solutions with managed services and support.',
        img: itHardware,
        tech: 'High Speed Internet Access, Wi-Fi management, monitoring',
        logos: [...cloudLogos],
      },
      {
        title: 'AV (Audio Video) Solutions',
        desc: 'State-of-the-art audio-visual solutions for modern workspaces.',
        img: itHardware,
        tech: 'Video conferencing, digital signage, immersive experiences',
        logos: [...cloudLogos],
      },
      {
        title: 'Low Voltage (L.V.) Systems',
        desc: 'Comprehensive low voltage system design and installation.',
        img: itHardware,
        tech: 'Structured cabling, security systems, fire alarm systems',
        logos: [...cloudLogos],
      },
    ],
    reverse: false,
  },
  {
    heading: 'Powering Innovation',
    subtitle: 'Platforms that run your business',
    tabs: [
      { name: 'Web & Mobile App Development', color: 'bg-card-green' },
      { name: 'Custom Integration (CRM, ERP, RMS, etc.)', color: 'bg-card-yellow' },
      { name: 'DevOps, CI/CD, Containerization', color: 'bg-card-pink' },
      { name: 'Microservices & API Management', color: 'bg-card-blue' },
    ],
    cards: [
      {
        title: 'Web & Mobile App Development',
        desc: 'Build powerful web and mobile applications that scale with your business.',
        img: webMobile,
        tech: 'React, Angular, Vue.js, React Native, Flutter, iOS, Android',
        logos: [...cloudLogos],
      },
      {
        title: 'Custom Integration (CRM, ERP, RMS, etc.)',
        desc: 'Seamlessly integrate your business systems for unified operations.',
        img: webMobile,
        tech: 'Salesforce, SAP, Oracle, Microsoft Dynamics',
        logos: [...cloudLogos],
      },
      {
        title: 'DevOps, CI/CD, Containerization',
        desc: 'Accelerate your development lifecycle with modern DevOps practices.',
        img: webMobile,
        tech: 'Docker, Kubernetes, Jenkins, GitLab CI, Terraform',
        logos: [...cloudLogos],
      },
      {
        title: 'Microservices & API Management',
        desc: 'Design scalable microservices architectures with robust API management.',
        img: webMobile,
        tech: 'API Gateway, Service Mesh, gRPC, REST, GraphQL',
        logos: [...cloudLogos],
      },
    ],
    reverse: true,
  },
  {
    heading: 'Unlocking Intelligence',
    subtitle: 'Transform data into actionable insights',
    tabs: [
      { name: 'Data Lakes & Warehouses', color: 'bg-card-green' },
      { name: 'Visualization (Power BI, Tableau)', color: 'bg-card-yellow' },
      { name: 'Advanced Analytics & Forecasting', color: 'bg-card-pink' },
      { name: 'AI/ML & Generative AI Solutions', color: 'bg-card-blue' },
    ],
    cards: [
      {
        title: 'Data Lakes & Warehouses',
        desc: 'Build scalable data lakes and warehouses to store, process, and analyze vast amounts of structured and unstructured data.',
        img: dataLakes,
        tech: 'Data lakes, ETL pipelines, data warehouses, cloud storage',
        logos: [aws, azure, gcp, dataServer],
      },
      {
        title: 'Visualization (Power BI, Tableau)',
        desc: 'Create interactive dashboards and reports for better decision making.',
        img: dataLakes,
        tech: 'Power BI, Tableau, Looker, custom dashboards',
        logos: [aws, azure, gcp, dataServer],
      },
      {
        title: 'Advanced Analytics & Forecasting',
        desc: 'Leverage advanced analytics to predict trends and optimize outcomes.',
        img: dataLakes,
        tech: 'Predictive modeling, time series analysis, statistical analysis',
        logos: [aws, azure, gcp, dataServer],
      },
      {
        title: 'AI/ML & Generative AI Solutions',
        desc: 'Harness the power of artificial intelligence and machine learning.',
        img: dataLakes,
        tech: 'NLP, Computer Vision, LLMs, neural networks',
        logos: [aws, azure, gcp, dataServer],
      },
    ],
    reverse: false,
  },
  {
    heading: 'Strategic Excellence',
    subtitle: 'Strategy. Alignment. Growth.',
    tabs: [
      { name: 'Digital Transformation Roadmap', color: 'bg-card-green' },
      { name: 'Process Optimization & Automation', color: 'bg-card-yellow' },
      { name: 'Governance & Compliance', color: 'bg-card-pink' },
      { name: 'Business Intelligence & Change Management', color: 'bg-card-blue' },
    ],
    cards: [
      {
        title: 'Digital Transformation Roadmap',
        desc: 'Strategic planning and execution roadmap to guide your organization through successful digital transformation initiatives.',
        img: digitalTransformation,
        tech: 'Strategic planning, roadmap development, digital maturity assessment',
        logos: [aws, azure, gcp, dataServer],
      },
      {
        title: 'Process Optimization & Automation',
        desc: 'Streamline and automate your business processes for maximum efficiency.',
        img: digitalTransformation,
        tech: 'RPA, workflow automation, process mining',
        logos: [aws, azure, gcp, dataServer],
      },
      {
        title: 'Governance & Compliance',
        desc: 'Ensure your organization meets regulatory standards and best practices.',
        img: digitalTransformation,
        tech: 'Data governance, regulatory compliance, risk management',
        logos: [aws, azure, gcp, dataServer],
      },
      {
        title: 'Business Intelligence & Change Management',
        desc: 'Drive organizational change with data-driven insights and strategies.',
        img: digitalTransformation,
        tech: 'BI dashboards, change management, stakeholder alignment',
        logos: [aws, azure, gcp, dataServer],
      },
    ],
    reverse: true,
  },
]

function ServiceBlock({ section }) {
  const [activeTab, setActiveTab] = useState(0)
  const card = section.cards[activeTab]

  const contentSide = (
    <motion.div
      initial={{ opacity: 0, x: section.reverse ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2"
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 bg-card-green/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,174,239,0.15)] group hover:border-[#00aeef]/30">
        <h3 className="text-xl font-semibold text-[#545454] mb-3 text-center">{card.title}</h3>
        <p className="text-[#545454] mb-6 text-sm opacity-90 text-center">{card.desc}</p>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center mb-4"
        >
          <img alt={`${card.title} Illustration`} className="w-40 md:w-72 object-contain" src={card.img} />
        </motion.div>
      </div>
      <p className="text-[#545454] text-center mt-6 text-xs md:text-sm opacity-80">{card.tech}</p>
      <div className="flex justify-center items-center gap-4 md:gap-6 mt-6 flex-wrap">
        {card.logos.map((logo, i) => (
          <img key={i} alt="Service Logo" className="h-6 md:h-8 object-contain" src={logo} />
        ))}
      </div>
    </motion.div>
  )

  const tabsSide = (
    <motion.div
      initial={{ opacity: 0, x: section.reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2 mt-6 lg:mt-0"
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-bold text-[#545454] mb-3 text-center md:text-left relative inline-block"
      >
        {section.heading}
        <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full w-full" />
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#545454] text-sm mb-6 opacity-90 text-center md:text-left"
      >
        {section.subtitle}
      </motion.p>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-3 md:space-y-4">
        {section.tabs.map((tab, i) => (
          <motion.button
            key={tab.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setActiveTab(i)}
            className={`w-full text-left py-3 px-5 md:py-4 md:px-6 font-medium text-[#545454] text-sm md:text-base transition-all ${tab.color} ${
              activeTab === i
                ? 'ring-2 ring-opacity-50 ring-gray-400 shadow-inner'
                : 'bg-opacity-50 hover:bg-opacity-70'
            }`}
          >
            {tab.name}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )

  return (
    <section className="w-full min-h-fit bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className={`flex flex-col-reverse ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between gap-8 max-w-7xl mx-auto pb-6 border-b border-gray-300`}>
        {contentSide}
        {tabsSide}
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <div id="services">
      {/* Section Header */}
      <section className="w-full min-h-fit bg-white px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-10 text-center"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="w-2 h-2 bg-[#00aeef] rounded-full" />
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">OUR SERVICES</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-start text-4xl md:text-5xl text-gray-600 mb-4"
          >
            Solutions we provide
          </motion.h2>
        </motion.div>
      </section>

      {serviceSections.map((section, i) => (
        <ServiceBlock key={i} section={section} />
      ))}
    </div>
  )
}
