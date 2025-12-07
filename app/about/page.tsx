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
          <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
            Established in 2023, NitroLube is a forward-thinking lubrication
            solutions company dedicated to delivering unmatched quality and
            performance across both automotive and industrial sectors. Built on
            innovation, engineering expertise, and a deep understanding of
            India’s evolving market, we are committed to redefining what modern
            lubrication stands for. At NitroLube, our team of innovators,
            engineers, and field specialists works tirelessly to develop
            technology-driven formulations that meet global standards while
            addressing real-world Indian conditions. Whether it’s two-wheelers,
            commercial fleets, industrial machinery, or specialized
            applications, our products are designed to enhance performance,
            extend engine and equipment life, and ensure reliability—every
            single time. Backed by a rapidly expanding national presence and
            driven by strong customer trust, NitroLube has positioned itself as
            a dependable partner for workshops, distributors, retailers, fleet
            owners, and industries across India. Our purpose is simple yet
            powerful: to deliver lubrication solutions that empower businesses,
            protect machinery, and keep India moving forward. NitroLube —
            engineered for performance, trusted for protection.
          </p>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            We understand that your equipment deserves the best care, which is
            why we offer a comprehensive range of lubricants designed to enhance
            performance, reduce wear, and extend the lifespan of your machinery.
            Whether you need engine oils, industrial lubricants, or specialty
            products, NitroLube has you covered.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            At NitroLube, our mission is to deliver high-performance lubrication
            solutions that enhance engine efficiency, protect machinery, and
            empower businesses across India. We are committed to engineering
            world-class, technology-driven products that meet the unique demands
            of Indian roads, industries, and operating conditions. Guided by
            innovation, reliability, and a deep focus on customer satisfaction, we
            strive to build long-term partnerships with workshops, distributors,
            fleet owners, and industrial clients. Our purpose goes beyond
            supplying lubricants—we aim to support progress, strengthen
            performance, and create value for every partner we work with. At
            NitroLube, <span className="font-bold">WE GROW TOGETHER.</span>
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
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">
                Quality
              </span>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">
                Trust
              </span>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">
                Customer Satisfaction
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
