import Image from "next/image"

export default function AsSeenIn() {
  const logos = [
    {
      src: "/compliance/ai.png",
      label: "AI-Powered Technology",
      width: 300,
      height: 64,
    },
    {
      src: "/compliance/check.png",
      label: "Clinically Validated",
      width: 200,
      height: 64,
    },
    {
      src: "/compliance/award.svg",
      label: "Award Winning Technology",
      width: 300,
      height: 64,
    },
    {
      src: "/compliance/hipaa-logo.svg",
      label: "HIPAA Compliant Certified",
      width: 300,
      height: 64,
    },
    {
      src: "/compliance/shield.png",
      label: "Lifetime Guarantee",
      width: 200,
      height: 64,
    }
  ]

  return (
    <section className="w-full bg-white py-20">
      <div className="container w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-12">
            {/* Heading */}
            <div className="text-center opacity-100">
                <h2 className="text-4xl font-semibold tracking-[0] leading-tight text-[rgb(35,31,32)] mb-2">
                Trusted by Healthcare Professionals
                </h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                    <p className="text-xl leading-relaxed text-[rgb(35,31,32)]">
                    Industry-leading technology backed by certifications and guarantees
                    </p>
                </div>
            </div>

            {/* Logo Grid */}
            <div
            className="flex gap-8 justify-items-center items-center w-full"
            
            >
            {logos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-4">
                <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.label}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto object-contain rounded"
                />
                <p className="text-[rgb(35,31,32)]">
                    {logo.label}
                </p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}
