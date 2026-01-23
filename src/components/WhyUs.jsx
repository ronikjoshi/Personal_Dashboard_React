import { Clock, Gauge, Phone, RotateCcw } from "lucide-react"


const WhyUs = () => {
    const items = [
        {
            icon: <RotateCcw size={32} />,
            title: 'Vision School',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo veritatis a temporibus cumque`
        },
        {
            icon: <Clock size={32} />,
            title: 'Vision School',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo veritatis a temporibus cumque`
        },
        {
            icon: <Gauge size={32} />,
            title: 'Vision School',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo veritatis a temporibus cumque`
        },
        {
            icon: <Phone size={32} />,
            title: 'Vision School',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo veritatis a temporibus cumque`
        }
    ];

  return (
    <section id="whyus" className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
            <div>
                
            </div>
        </div>
    </section>
  )
}

export default WhyUs