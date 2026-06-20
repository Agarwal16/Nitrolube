'use client'

import Link from 'next/link'

export default function About() {
  const basicInfo = [
    { label: 'Nature of Business', value: 'Manufacturer' },
    { label: 'Additional Business', value: 'Retail Business, Supplier' },
    { label: 'Company CEO', value: 'Abhishek Agrawal' },
    { label: 'Registered Address', value: 'Shree Tirupati Motors & Tractors, Ranchi Patna Road, Koderma, Jharkhand, 825409' },
    { label: 'Total Employees', value: 'Upto 10 People' },
    { label: 'GST No.', value: '20AFDPA8291D1Z1' },
    { label: 'GST Reg Date', value: '30-01-2023' },
    { label: 'Legal Status', value: 'Proprietorship' },
    { label: 'GST Partner Name', value: 'Sanjay Agrawal' },
  ]

  const statutoryProfile = [
    { label: 'Banking details', value: 'IDBI Bank' },
    { label: 'Payment Mode', value: 'Cash, Online, Card, Cheque, DD, Transfer' },
    { label: 'Shipment Mode', value: 'By Road' },
  ]

  const reportNames = [
    'Viscosity Index Analysis',
    'High-Temp Stability Report',
    'Wear & Friction Performance',
    'Shear Stability Assessment',
    'Radiator Coolant Test',
    'Flash & Fire Point Audit',
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'Strict adherence to ISO 9001:2015 specifications and rigorous batch-testing routines.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Absolute Trust',
      description: 'Building honest, long-term trade relations with distributors and retail counter networks.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6c0 4.7 3.01 8.7 7.244 10.156l.08.026a23.866 23.866 0 004.536-1.666m-1.12-12.43a2 2 0 01-2 2h-2m2-2h2a2 2 0 002-2V3a2 2 0 00-2-2h-3.75a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Customer Success',
      description: 'Going above and beyond to support mechanical efficiency and retail profitability.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="page-top-tight min-h-screen bg-[#0a0f1d] text-white pb-16 md:pb-24 relative bg-doodle animate-fade-in-up">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Learn About Our Heritage
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">NitroLube</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-center">
            Pioneering engineering expertise in high-performance lubrication products designed to extend machinery lifespan and optimize power.
          </p>
        </div>

        {/* Milestones Statistic Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Established', val: '2023' },
            { label: 'Quality Standard', val: 'ISO 9001:2015' },
            { label: 'Partner Network', val: '50+ Distributors' },
            { label: 'Reach', val: 'Pan-India Supply' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/20 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">{stat.val}</div>
              <div className="text-xs text-gray-400 mt-2 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Grid: Who We Are & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Who We Are */}
          <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-5 hover:border-blue-500/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">Who We Are</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Established in 2023, NitroLube is a forward-thinking lubrication solutions company dedicated to delivering unmatched quality and performance across both automotive and industrial sectors. Built on innovation, engineering expertise, and a deep understanding of India’s evolving market, we are committed to redefining what modern lubrication stands for.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Whether it’s two-wheelers, commercial fleets, industrial machinery, or specialized applications, our products are designed to enhance performance, extend engine and equipment life, and ensure reliability—every single time.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-5 hover:border-blue-500/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">Our Mission</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              At NitroLube, our mission is to deliver high-performance lubrication solutions that enhance engine efficiency, protect machinery, and empower businesses across India. We are committed to engineering world-class, technology-driven products tailored to the unique demands of Indian roads, industries, and operating conditions.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our journey forward is strengthened by the guidance, deep knowledge, and decades of experience of <span className="font-bold text-white">Mr. Sanjay Agarwal (MD)</span>. His strategic vision and understanding of the automotive and industrial landscape play a crucial role in shaping our innovations. At NitroLube, <span className="text-blue-400 font-bold">WE GROW TOGETHER</span>.
            </p>
          </div>
        </div>

        {/* Corporate Profile Data tables */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Basic Information */}
          <div className="lg:col-span-7 bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-500/20 transition-all duration-300">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414-5.414A1 1 0 0118.586 7V19a2 2 0 01-2 2z" />
              </svg>
              Corporate Specifications
            </h2>
            <div className="space-y-4">
              {basicInfo.map((info, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 border-b border-white/5 pb-3 last:border-b-0 last:pb-0 items-start">
                  <div className="sm:col-span-4 text-gray-400 font-semibold text-xs sm:text-sm">{info.label}</div>
                  <div className="sm:col-span-8 text-white font-medium text-xs sm:text-sm pl-0 sm:pl-4 border-l-0 sm:border-l border-white/5 break-words">{info.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Statutory Profile & Downloads */}
          <div className="lg:col-span-5 space-y-8">
            {/* Statutory Profile */}
            <div className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-500/20 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                Trading Guidelines
              </h2>
              <div className="space-y-4">
                {statutoryProfile.map((info, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 border-b border-white/5 pb-3 last:border-b-0 last:pb-0 items-start">
                    <div className="sm:col-span-5 text-gray-400 font-semibold text-xs sm:text-sm">{info.label}</div>
                    <div className="sm:col-span-7 text-white font-medium text-xs sm:text-sm pl-0 sm:pl-4 border-l-0 sm:border-l border-white/5">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads Catalog */}
            <div className="bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/30 rounded-3xl p-8 backdrop-blur-md text-center space-y-5 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Download Corporate Profile</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Access our offline catalog, product specifications sheets, and wholesale application brochure in one single package.
              </p>
              <div className="pt-2">
                <a
                  href="/brochure.pdf"
                  download
                  className="inline-flex py-3 px-8 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-all shadow-lg hover:shadow-blue-500/20 hover:scale-[1.01]"
                >
                  Download Brochure PDF
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Laboratory Certifications Downloads (About page grid) */}
        <section className="mb-16 bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-500/20 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Official Quality Certificates
          </h2>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed">
            We value full transparency. Below you can check and download the official independent laboratory reports confirming viscosity index parameters, flash & fire points, and wear metrics.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <a
                key={num}
                href={`/labtest${num}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0a0f1d] border border-white/5 hover:border-blue-500/30 rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                    {reportNames[num - 1]}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mt-1">PDF Certificate</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Corporate Values */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-extrabold text-white">Our Values</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white/5 to-[#0d1324] border border-white/10 rounded-3xl p-8 flex flex-col items-center gap-4 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
