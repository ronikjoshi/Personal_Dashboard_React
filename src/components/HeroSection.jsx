import { useState } from "react";
import heroImage from '../assets/hero.png';

const HeroSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {name: 'Home', link: '#home'},
        {name: 'About', link: '#about'},
        {name: 'Education', link: '#education'},
        {name: 'Pricing', link: '#pricing'},
        {name: 'Services', link: '#services'},
        {name: 'Why Us', link: '#whyus'},
    ];

  return (
    <div className="relative h-screen overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${heroImage})`}}>
        </div>

    </div>
  )
}

export default HeroSection