import pricing from '../assets/pricing.png';

const PricingSection = () => {
  return (
    <section
    id="pricing"
    className="min-h-screen flex bg-white items-center justify-center px-4 sm:px-6 py-8 sm:py-12"
    >
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-24">
            {/* Image Section */}
            <div 
            className="relative flex justify-center lg:justify-end"
            data-aos='fade-right'
            >
                <div className="absolute left-4 sm:left-7 -top-4 sm:-top-6 w-3/4 h-full max-w-xs sm:max-w-sm bg-blue-600">
                    <img 
                    src={pricing} 
                    alt="Pricing"
                    className='relative w-full max-w-xs sm:max-w-sm shadow-lg object-cover' 
                    />
                </div>
                <div 
                className='text-center lg:text-left px-2 sm:px-0'
                data-aos='fade-left'
                >
                    <p className='text-gray-400 mb-2 text-sm sm:text-base'>
                        Pricelist
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingSection