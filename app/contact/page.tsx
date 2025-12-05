export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0055AD] to-blue-300 pt-32 pb-20">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
        <p className="text-xl md:text-2xl text-white">
            Get in touch with NitroLube
          </p>
        </div>

      {/* Main Content Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left Column - Visit Our Store */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Visit Our Store
                </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Stop by our store to explore our range of products and get expert advice from our team.
                </p>

              <div className="space-y-4">
                {/* Address Card */}
                <div className="flex items-start p-5 bg-white rounded-xl border border-gray-200 shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#0055AD]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-sm text-gray-600">
                      Shree Tirupati Motors and Tractors, Ranchi Patna Road Near Ashoka Hotel, Jhumri Telaiya, Jharkhand, 825409
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-start p-5 bg-white rounded-xl border border-gray-200 shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#0055AD]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-sm text-gray-600">
                      Call us for inquiries about our products and store information.
                    </p>
                  </div>
                </div>

                {/* Store Hours Card */}
                <div className="flex items-start p-5 bg-white rounded-xl border border-gray-200 shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#0055AD]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Store Hours
                    </h3>
                    <p className="text-sm text-gray-600">
                      Mon-Fri: 8:00 am - 5:00 pm
                      <br />
                      Saturday: 10:00 am - 4:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Send Us a Message */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055AD] focus:border-transparent transition-all bg-white"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055AD] focus:border-transparent transition-all bg-white"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055AD] focus:border-transparent transition-all bg-white"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055AD] focus:border-transparent transition-all bg-white resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                <a
                  href="mailto:support@nitrolube.com"
                  className="w-full py-3 px-6 bg-[#0055AD] text-white font-semibold rounded-lg transition-all duration-200 hover:bg-[#004a99] shadow-md text-center block"
                >
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}








