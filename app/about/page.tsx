export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white via-blue-50 to-primary-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About NitroLube
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Your trusted partner in premium lubricants
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-gray-100">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Our Story
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

              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to provide superior quality lubricants that help
                  our customers achieve optimal performance from their equipment. We
                  strive to maintain the highest standards in product quality,
                  customer service, and industry innovation.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
                  Our Values
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      Quality First
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We never compromise on quality. Every product undergoes
                      rigorous testing to ensure it meets our high standards.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      Customer Focus
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Your satisfaction is our priority. We work closely with our
                      customers to understand their needs and provide solutions.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      Innovation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We continuously invest in research and development to bring
                      you the latest advancements in lubricant technology.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      Reliability
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can count on us for consistent quality and dependable
                      service, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}








