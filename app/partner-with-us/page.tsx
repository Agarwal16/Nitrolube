export default function PartnerWithUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0055AD] to-blue-300 pt-32 pb-20">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Partner With Us
        </h1>
        <p className="text-xl md:text-2xl text-white">
          Grow Your Business with NitroLube
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Partner Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us</h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
            At NitroLube, we believe in building strong, mutually beneficial partnerships. 
            Join our growing network of distributors, retailers, and business partners 
            across India and be part of a brand that's committed to quality, innovation, 
            and customer satisfaction.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Products</h3>
              <p className="text-sm text-white/80">
                Access to our comprehensive range of high-quality lubricants and specialty products
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Pricing</h3>
              <p className="text-sm text-white/80">
                Attractive margins and pricing structures designed to maximize your profitability
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Marketing Support</h3>
              <p className="text-sm text-white/80">
                Comprehensive marketing materials and promotional support to help grow your business
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Training & Support</h3>
              <p className="text-sm text-white/80">
                Expert training programs and ongoing technical support for you and your team
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth Opportunities</h3>
              <p className="text-sm text-white/80">
                Be part of a rapidly expanding brand with nationwide presence and growth potential
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
              <p className="text-sm text-white/80">
                Personal account management and dedicated support team to assist you every step of the way
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Distributor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Distributor</h3>
              <p className="text-base text-white/90 leading-relaxed text-center">
                Become a regional distributor and help us expand our reach. 
                Enjoy exclusive territory rights, competitive margins, and comprehensive support.
              </p>
            </div>

            {/* Retailer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5V6a2.25 2.25 0 114.5 0v4.5m-4.5 0h9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Retailer</h3>
              <p className="text-base text-white/90 leading-relaxed text-center">
                Stock NitroLube products in your store. Benefit from attractive pricing, 
                marketing support, and a trusted brand that customers recognize and trust.
              </p>
            </div>
          </div>
        </section>

        {/* We Grow Together Partner Program Section */}
        <section className="mb-12">
          <div className="bg-[#003d7a] rounded-lg p-6 md:p-8 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
              NitroLube "We Grow Together" Partner Program.
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded ml-1"></span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            The NitroLube "We Grow Together" Partner Program is a support network of knowledge, programs, tools and resources specifically designed to help Channel Partners build competencies and support capabilities in order to give customers the right choice of partners to best serve their business needs. NitroLube would invest in building channel partners technical competencies and lubricant related product knowledge to help them grow with the organisation.
          </p>
          
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="text-center">
            <a
              href="mailto:info@nitrolube.co.in?subject=Partnership Inquiry"
              className="inline-block py-3 px-8 bg-white text-[#0055AD] font-semibold rounded-lg transition-all duration-200 hover:bg-white/90"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

