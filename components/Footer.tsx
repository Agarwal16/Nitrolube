import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {/* Link Groups - Flex Container */}
          <div className="w-full flex justify-around items-start flex-nowrap gap-4 md:gap-4">
            {/* Quick Links */}
            <div className="flex flex-col items-center text-xs md:text-sm flex-1 min-w-0">
              <h3 className="text-sm md:text-base font-semibold mb-2 text-white whitespace-nowrap">
                Quick Links
              </h3>
              <div className="flex flex-row items-center gap-2 md:gap-3 flex-nowrap justify-center">
                <a
                  href="https://www.facebook.com/people/NitroLube/61584391217683/?sfnsn=wa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/NitroLube_?t=x_-XUQjhX0gWnff-1q5ahA&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                  aria-label="X (formerly Twitter)"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nitrolube_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center text-xs md:text-sm flex-1 min-w-0">
              <h3 className="text-sm md:text-base font-semibold mb-2 text-white whitespace-nowrap">
                Contact
              </h3>
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <a
                  href="mailto:info@nitrolube.co.in"
                  className="text-blue-100 hover:text-white transition-colors whitespace-nowrap text-xs md:text-sm"
                >
                  info@nitrolube.co.in
                </a>
                <a
                  href="tel:8709735654"
                  className="text-blue-100 hover:text-white transition-colors whitespace-nowrap text-xs md:text-sm"
                >
                  +918709735654
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col items-center text-xs md:text-sm flex-1 min-w-0">
              <h3 className="text-sm md:text-base font-semibold mb-2 text-white whitespace-nowrap">
                Company
              </h3>
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <Link
                  href="/about"
                  className="text-blue-100 hover:text-white transition-colors whitespace-nowrap text-xs md:text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="text-blue-100 hover:text-white transition-colors whitespace-nowrap text-xs md:text-sm"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-100 hover:text-white transition-colors whitespace-nowrap text-xs md:text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full border-t border-white/20 pt-4" />

          {/* Copyright */}
          <p className="text-xs text-blue-100 text-center">
            © {new Date().getFullYear()} NitroLube. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
