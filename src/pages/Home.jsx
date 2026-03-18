import HeroSection from '../components/HeroSection'
import Clients from '../components/Clients'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WhoWeServe from '../components/WhoWeServe'
import Testimonials from '../components/Testimonials'
import EngagementModel from '../components/EngagementModel'
import Impact from '../components/Impact'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Clients />
      <AboutUs />
      <Services />
      <WhoWeServe />
      <Testimonials />
      <EngagementModel />
      <Impact />
      <CTA />
    </>
  )
}
