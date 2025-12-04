export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#0055AD] to-white pt-32 pb-16 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white">
            The Story Behind NitroLube
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
          
          {/* Who We Are Section */}
          <section className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-md">
            <div>
                <h2 className="text-4xl font-bold text-[#0055AD] mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  NitroLube has been a leading provider of high-quality lubricants
                  for years. We specialize in manufacturing and distributing premium
                  lubricants that meet the highest industry standards. Our commitment
                  to excellence and customer satisfaction has made us a trusted name
                  in the lubricant industry.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We understand that your equipment deserves the best care, which is
                  why we offer a comprehensive range of lubricants designed to
                  enhance performance, reduce wear, and extend the lifespan of your
                  machinery. Whether you need engine oils, industrial lubricants, or
                  specialty products, NitroLube has you covered.
                </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-md">
            <h2 className="text-4xl font-bold text-[#0055AD] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide superior quality lubricants that help
              our customers achieve optimal performance from their equipment. We
              strive to maintain the highest standards in product quality,
              customer service, and industry innovation.
            </p>
          </section>

          {/* Why Choose NitroLube Section */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-[#0055AD] mb-8 text-center">
              Why Choose NitroLube
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Advanced Protection Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-[#0055AD] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Advanced Protection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Improves alloy protection and ensures cold protection for optimal engine performance.
                </p>
              </div>

              {/* Enhanced Performance Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-[#0055AD] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Enhanced Performance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Improves speed resilience and reduces performance degradation under extreme conditions.
                </p>
              </div>

              {/* Eco-Friendly Formula Card */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-[#0055AD] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8 2 5 5 5 9c0 4 3 7 7 7s7-3 7-7c0-4-3-7-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Eco-Friendly Formula
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Eco-friendly formula to meet environmental standards and natural flow requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section>
            <h2 className="text-4xl font-bold text-[#0055AD] mb-8 text-center">
              Our Values
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Quality */}
              <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
                <div className="w-10 h-10 bg-[#0055AD] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Quality</span>
              </div>

              {/* Trust */}
              <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
                <div className="w-10 h-10 bg-[#0055AD] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Trust</span>
              </div>

              {/* Customer Satisfaction */}
              <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
                <div className="w-10 h-10 bg-[#0055AD] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Customer Satisfaction</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}








