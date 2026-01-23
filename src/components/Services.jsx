import services from '../assets/services.png';

const Services = () => {
  return (
    <section id="services" className="bg-white w-full py-12 md:py-16">
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
            <img 
            src={services} 
            alt="Services"
            className='w-full h-full object-cover'
            data-aos='fade-up' 
            />
        </div>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
            <div 
            className='relative'
            data-aos='fade-right'
            >
                <div className='hidden md:flex absolute -left-8 sm:-left-12 lg:-left-36 top-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-600' />
                    <p className='text-gray-400 mb-3 text-sm sm:text-base'>
                        Our Service
                    </p>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight'>
                        Service Of <br className='hidden sm:block'/> School
                    </h2>
                </div>

                <div data-aos='fade-left'>
                    <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4'>
                        Special Service
                    </h3>
                    <p className='text-gray-500 leading-relaxed text-sm sm:text-base'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptates ducimus atque iure necessitatibus beatae ea illum labore ullam. Distinctio nostrum eius ab ipsum modi magnam vero beatae maxime dolor.
                    </p>
                </div>
            </div>
    </section>
  );
};

export default Services