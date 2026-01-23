import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from "./components/HeroSection"
import LoadingSpinner from "./components/LoadingSpinner"
import Education from "./components/Education"
import About from "./components/About"
import PricingSection from "./components/PricingSection"
import Services from "./components/Services"
import WhyUs from "./components/WhyUs"
import Footer from "./components/Footer"
import ScrollToTopButton from "./components/ScrollToTopButton"

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      AOS.init({ duration: 1000, once: false});
    }, 1500);
    return () => clearTimeout(timer)
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <About />
      <Education />
      <PricingSection />
      <Services />
      <WhyUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App