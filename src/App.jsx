import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from "./components/HeroSection"

const App = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({ duration: 1000, once: false});
    }, 1500);
    return () => clearTimeout(timer)
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
    </div>
  )
}

export default App