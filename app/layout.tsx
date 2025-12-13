import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NitroLube - Premium Lubricants | Built to Perform. Made to Last.',
  description: 'Premium lubricants for peak automotive power and protection. Experience the difference with NitroLube.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.jpeg" />
      </head>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        <main className="min-h-screen pb-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}








