export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0055AD] to-blue-300 pt-32 pb-20">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-white">
          The Story Behind NitroLube
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
            NitroLube has been a leading provider of high-quality lubricants
            for years. We specialize in manufacturing and distributing premium
            lubricants that meet the highest industry standards. Our commitment
            to excellence and customer satisfaction has made us a trusted name
            in the lubricant industry.
          </p>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            We understand that your equipment deserves the best care, which is
            why we offer a comprehensive range of lubricants designed to
            enhance performance, reduce wear, and extend the lifespan of your
            machinery. Whether you need engine oils, industrial lubricants, or
            specialty products, NitroLube has you covered.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Our mission is to provide superior quality lubricants that help
            our customers achieve optimal performance from their equipment. We
            strive to maintain the highest standards in product quality,
            customer service, and industry innovation.
          </p>
        </section>

        {/* Our Values Section */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="flex flex-nowrap md:flex-wrap justify-center gap-3 md:gap-6 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            {/* Quality */}
            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">Quality</span>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">Trust</span>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">Customer Satisfaction</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}








