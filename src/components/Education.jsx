import educationImage from '../assets/education.png';

const Education = () => {
  return (
    <section id="education" className="w-full min-h-screen bg-white flex items-center justify-center py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div 
                className="max-w-xl text-center lg:text-left"
                data-aos='fade-right'
                >
                    <p className="text-gray-500 mb-4 text-sm sm:text-base">
                        University School Presentation
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1A44] leading-tight mb-4 lg:mb-6">
                        Welcome to <br  className="hidden sm:block"/> Education
                    </h1>
                    <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iste voluptas beatae unde placeat eos asperiores facilis perferendis dignissimos repellendus sit at maiores sed aliquam ipsa quidem veniam molestias animi!
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 sm:px-8 py-2 rounded-full font-medium text-sm sm:text-base">
                            Click Here
                        </button>
                    </div>
                </div>
                {/* Image Section */}
                <div 
                className="relative flex items-center justify-center"
                data-aos='fade-left'
                >
                    <div className="absolute left-1/2 lg:left-72 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-96 h-32 sm:h-40 lg:h-60 bg-blue-600 hidden md:block -translate-x-1/2 lg:translate-x-0">
                    </div>
                    <div className="relative">
                        <img 
                        src={educationImage} 
                        alt="Education" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education