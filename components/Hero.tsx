import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden mt-10">
  <Image
    src="/herosectionimage.png"
    alt="Hero Background"
    fill
    priority
    className="object-contain object-center"
  />
</section>
  )
}

