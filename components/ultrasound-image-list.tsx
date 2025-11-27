import Image from "next/image"

export default function UltrasoundImageList() {
  return (
    <section className="w-full bg-[#f8f8fb] py-12 md:py-20">
      <div className="w-full px-4 md:px-0">
        {/* Header Section */}
        <div className="mx-auto max-w-5xl md:text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[rgb(35,31,32)]">
                Healium Sono
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                Healium Sono combines real-time AI-guided ultrasound scanning with expert remote diagnostics to
                deliver fast, accurate, and accessible care. Our platform bridges the gap between limited
                on-site expertise and high-quality imaging, empowering clinicians to perform confident
                cardiac and OB/GYN assessments wherever care is needed.
            </p>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Large Clinic Image - Spans 2 rows on desktop, positioned on left */}
          <div className="relative">
            <div className="relative aspect-[1/1]">
              <Image
                src="/ultrasound-image/image-1.png"
                alt="Clinic ultrasound examination"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white/75 px-6 py-4">
              <p className="text-lg font-normal text-gray-800">Clinic</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Ambulances */}
            <div className="relative">
                <div className="relative aspect-[1/1]">
                <Image
                    src="/ultrasound-image/image-2.png"
                    alt="Ambulances emergency care"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/75 px-6 py-4">
                <p className="text-lg font-normal text-gray-800">Ambulances</p>
                </div>
            </div>

            {/* Clinicians on regular rounds */}
            <div className="relative">
                <div className="relative aspect-[1/1]">
                <Image
                    src="/ultrasound-image/image-3.png"
                    alt="Clinicians on regular rounds"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/75 px-6 py-4">
                <p className="text-lg font-normal text-gray-800">Clinicians on regular rounds</p>
                </div>
            </div>

            {/* Emergency-room */}
            <div className="relative">
                <div className="relative aspect-[1/1]">
                <Image
                    src="/ultrasound-image/image-4.png"
                    alt="Emergency room procedures"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/75 px-6 py-4">
                <p className="text-lg font-normal text-gray-800">Emergency-room</p>
                </div>
            </div>

            {/* Medical training */}
            <div className="relative">
                <div className="relative aspect-[1/1]">
                <Image
                    src="/ultrasound-image/image-5.png"
                    alt="Medical training with ultrasound"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/75 px-6 py-4">
                <p className="text-lg font-normal text-gray-800">Medical training</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
