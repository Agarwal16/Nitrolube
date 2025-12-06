import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden mt-10">
      {/* Mobile Image */}
      <Image
        src="/herosectionMobile.png"
        alt="Hero Background"
        fill
        sizes="100vw"
        priority
        className="object-contain object-center md:hidden -translate-y-8"
      />
      {/* Desktop Image */}
      <Image
        src="/herosectionimage.png"
        alt="Hero Background"
        fill
        sizes="100vw"
        priority
        className="hidden md:block object-contain object-center"
      />
    </section>
  )
}

