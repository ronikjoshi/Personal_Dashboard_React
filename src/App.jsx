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
      <Education />
      <About />
      <PricingSection />
      <Services />
      <WhyUs />
    </div>
  )
}

export default App