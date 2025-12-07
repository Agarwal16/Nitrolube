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
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Who We Are</h2>
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
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <div className="text-base md:text-lg text-white/90 leading-relaxed space-y-4">
            <p>
              At NitroLube, our mission is to deliver high-performance lubrication solutions that enhance engine efficiency, protect machinery, and empower businesses across India. We are committed to engineering world-class, technology-driven products tailored to the unique demands of Indian roads, industries, and operating conditions.
            </p>
            <p>
              Our journey forward is strengthened by the guidance, deep knowledge, and decades of experience of Mr. Sanjay Agarwal (MD). His strategic vision and understanding of the automotive and industrial landscape play a crucial role in shaping our innovations, ensuring that every product we create truly meets the needs of our customers and the market we serve.
            </p>
            <p>
              Driven by innovation, reliability, and a strong focus on customer satisfaction, we strive to build long-term partnerships with workshops, distributors, fleet owners, and industrial clients. Our mission goes beyond supplying lubricants—we aim to support progress, improve performance, and create lasting value for every partner who chooses NitroLube.
            </p>
            <p>
              At NitroLube, <span className="font-bold">WE GROW TOGETHER.</span>
            </p>
          </div>
        </section>

        {/* Basic Information Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Basic Information</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 max-w-3xl mx-auto">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Nature of Business</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Manufacturer</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Additional Business</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Retail Business, Supplier of Services</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Company CEO</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Abhishek Agrawal</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Registered Address</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Shree Tirupati Motors and Tractors, Ranchi Patna Road, Koderma, Jharkhand, 825409</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Total Number of Employees</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Upto 10 People</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">GST No.</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">20AFDPA8291D1Z1</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">GST Registration Date</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">30-01-2023</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Legal Status of Firm</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Proprietorship</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">GST Partner Name</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Sanjay Agrawal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Statutory Profile Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Statutory Profile</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 max-w-3xl mx-auto">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Banking details</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">IDBI Bank</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Payment Mode</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">Cash, Online, Credit Card, Cheque, DD, Bank Transfer</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-base text-white/70 font-medium sm:min-w-[200px]">Shipment Mode</span>
                <span className="text-base text-white font-medium hidden sm:inline">-</span>
                <span className="text-base text-white font-medium">By Road</span>
              </div>
            </div>
          </div>
        </section>

        {/* Download Brochure and Test Reports Section */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Download Brochure */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Download Brochure</h3>
                <p className="text-sm text-white/80 mb-4">Get our complete product catalog and company information</p>
                <a
                  href="/brochure.pdf"
                  download
                  className="inline-block py-2 px-6 bg-white text-[#0055AD] font-semibold rounded-lg transition-all duration-200 hover:bg-white/90"
                >
                  Download PDF
                </a>
              </div>

              {/* View Test Reports */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">View Test Reports</h3>
                <p className="text-sm text-white/80 mb-4">Access our laboratory test reports and certifications</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <a
                      key={num}
                      href={`/labtest${num}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 px-4 bg-white/20 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/30 text-sm"
                    >
                      Report {num}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
