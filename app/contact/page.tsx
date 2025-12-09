'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Contact() {
  const router = useRouter()

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    let isScrolling = false

    const handleScroll = () => {
      if (isScrolling) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const isAtTop = scrollTop <= 10
      const isScrollingUp = scrollTop < lastScrollTop

      if (isAtTop && isScrollingUp && lastScrollTop > 50) {
        isScrolling = true
        router.push('/products')
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0055AD] to-blue-300 pt-32 pb-20">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6">
          Get in touch with NitroLube
        </p>
        
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Contact Information Card */}
          <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
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
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Contact</h3>
                <p className="text-base text-white/90 leading-relaxed">
                  Abhishek Agarwal, Shree Tirupati Motors and Tractors, +918709735654
                </p>
              </div>
            </div>
          </div>

          {/* Send Us Your Requirement Button */}
          <div className="w-full flex justify-center">
            <a
              href="mailto:info@nitrolube.co.in"
              className="w-full sm:w-auto py-4 px-10 bg-white text-[#0055AD] font-semibold rounded-lg transition-all duration-200 hover:bg-white/90 text-center text-lg shadow-lg"
            >
              Send us your requirement
            </a>
          </div>
        </div>

        {/* Partner With Us Section */}
        <section className="mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 border border-white/20 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Interested in Partnering With Us?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Join our growing network of distributors and retailers. Explore partnership opportunities and grow your business with NitroLube.
              </p>
              <div className="pt-2">
                <Link
                  href="/partner-with-us"
                  className="inline-block py-3 px-8 bg-white text-[#0055AD] font-semibold rounded-lg transition-all duration-200 hover:bg-white/90 shadow-lg"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
