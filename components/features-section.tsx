"use client"

import { Zap, PiggyBank, CloudCog, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Lightning Fast",
      desc: "From scan to report in minutes, not hours",
      icon: <Zap className="w-8 h-8 text-[#882C24]" />,
      iconBgColor: "rgb(243, 204, 181)",
    },
    {
      title: "Massive Savings",
      desc: "Cut diagnostic costs by up to 70%",
      icon: <PiggyBank className="w-8 h-8 text-[#882C24]" />,
      iconBgColor: "rgb(243, 204, 181)",
    },
    {
      title: "Future-Ready",
      desc: "Advanced AI-powered cloud technology",
      icon: <CloudCog className="w-8 h-8 text-[#882C24]" />,
      iconBgColor: "rgb(243, 204, 181)",
    },
    {
      title: "Always Available",
      desc: "24/7/365 expert coverage",
      icon: <Clock className="w-8 h-8 text-[#882C24]" />,
      iconBgColor: "rgb(243, 204, 181)",
    },
  ]

  return (
    <section id="features" className="px-8 liquid-glass py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center opacity-100">
          <h2 className="text-3xl font-semibold tracking-[0] leading-tight text-[rgb(35,31,32)] mb-4">
            Powerful Features for Smarter Diagnostics
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-[rgb(35,31,32)]">
              Designed for speed, accuracy, and reliability, Healium Sono delivers the tools
              hospitals and clinicians need to work smarter and faster.
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8 w-full mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-8 shadow-3xl shadow-[#F2EFEE] border w-full text-center text-white rounded-xl flex flex-col gap-2 items-center"
            >
              <div className="relative flex items-center justify-center w-[76px] h-[76px]">
                <div
                  className="absolute inset-0 rounded-2xl blur-[5px]"
                  style={{ backgroundColor: f.iconBgColor }}
                />
                <div className="relative flex items-center justify-center rounded-2xl w-[76px] h-[76px]">
                  {f.icon}
                </div>
              </div>
              <h3 className="text-[#2D2D2D] font-semibold text-lg mt-2">{f.title}</h3>
              <p className="text-gray-700 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
