import { Check, CheckCheck, Cpu, Shield, Users } from "lucide-react"

export default function ClinicalValidation() {
  return (
    <section 
    className="py-24"
    style={
        {
        backgroundImage:
        "url('https://cdn.prod.website-files.com/6634a89a6fab56ada55e9d51/688b670bf59b1147601f6d7a_2%20Desktop%20-%2011-p-2000.webp')",
    }}
    >
      <div className="container mx-auto px-4 lg:px-10 max-w-6xl">
        <div className="mb-10 text-center opacity-100">
          <h2 className="text-4xl font-semibold tracking-[0] leading-tight text-[rgb(35,31,32)] mb-4">
            Healium Sono Advantage
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-[rgb(35,31,32)]">
              The perfect combination of AI-powered acquisition and expert human interpretation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Published Evidence Card */}
          <div className="bg-white rounded-lg p-8 shadow-3xl shadow-[#F2EFEE]">
            <div className="flex items-center gap-2 mb-6 text-sm text-[rgb(84,75,72)]">
              <Cpu className="w-6 h-6 " />
              <h3 className="text-2xl font-medium text-[#C084B8]">AI Powered Acquisition</h3>
            </div>

            <div className="mb-6">
                <ul className="space-y-3">
                    <li className="flex items-center gap-4">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-[#9B7FB8]" />
                        </div>
                        <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                            Real-time guidance during scanning
                        </span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-[#9B7FB8]" />
                        </div>
                        <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                            Automatic quality assessment
                        </span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-[#9B7FB8]" />
                        </div>
                        <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                            Reduced operator variability
                        </span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-[#9B7FB8]" />
                        </div>
                        <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                            Faster scan completion
                        </span>
                    </li>
              </ul>
            </div>
          </div>

          {/* Clinical Trial Results Card */}
          <div className="bg-white rounded-lg p-8 shadow-xl shadow-[#F2EFEE]">
            <div className="flex items-center gap-2 mb-6 text-sm text-[rgb(84,75,72)]">
              <Users className="w-6 h-6" />
              <h3 className="text-2xl font-medium text-[#9B7FB8]">Expert Human Interpretation</h3>
            </div>

            <div className="mb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        Board-certified radiologists
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        Comprehensive diagnostic reports
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        Clinical context integration
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#9B7FB8]" />
                    </div>
                    <span className="text-[18px] leading-[1.55] text-[rgb(84,75,72)]">
                        24/7 availability
                    </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto opacity-100">
          <p className="text-2xl font-medium text-[rgb(35,31,32)]">
            Unlike solutions that offer only AI guidance or only remote interpretation, Healiumsono delivers both, ensuring consistent image quality and expert diagnostic accuracy.
          </p>
        </div>
      </div>
    </section>
  )
}
