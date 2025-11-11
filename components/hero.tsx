import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export function Hero() {
  return (
      <section 
      className="h-screen relative flex overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6634a89a6fab56ada55e9d51/6634b22c992b5cd915fdce36_Gradient%20Final.webp')",
        }}
      >
        <div className="container mx-auto max-w-6xl flex items-center justify-center px-6 lg:pl-20">
          <div className="flex gap-0 items-center">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <h1 className="w-full text-3xl lg:text-3xl font-bold lg:font-semibold text-[#2D2D2D] leading-tight">
                {/* A new standard for cardiac imaging — anywhere */}
                AI-Powered Remote Ultrasound for Cardiology & OB/GYN

              </h1>

              <p className="text-2xl text-[#2D2D2D] font-medium lg:font-normal leading-relaxed">
                {/* Every heart deserves timely, accurate care. Yet millions of patients are still waiting — for access, for
                diagnosis, for answers. */}
                Bringing real-time AI scanning support and expert remote diagnostics together — closing the gap in access and accuracy of care.
              </p>

              <div className="flex flex-wrap flex-col md:flex-row gap-4">
                <Button asChild className="bg-black text-white hover:bg-white hover:text-white hover:text-black cursor-pointer rounded-full px-8 py-8 md:py-6 text-xl">
                  <Link href='#contact'>
                    Try for free
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-black text-[#2D2D2D] bg-transparent hover:bg-white hover:text-black hover:border-white cursor-pointer rounded-full px-8 p-8 md:py-6 text-xl"
                >
                  <Link href='#contact'>
                    Book a demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-2/5 hidden relative md:flex justify-end md:ml-auto">
              <div className="relative">
                <Image
                  src="/hero/hero.png"
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YpzEHr9rxvg1WycQHRXUfBUvvSI6d8.png"
                  alt="HeartFocus medical devices showing cardiac imaging"
                  width={400}
                  height={500}
                  className="h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
