import { Activity, CheckCircle, User, FileText } from "lucide-react"

export default function CareContinuum() {
  const careCards = [
    {
      title: "AI-Guided Scanning",
      description: "AI provides real-time positioning guidance and quality feedback",
      icon: Activity,
      iconBgColor: "rgb(243, 204, 181)",
      iconColor: "#AA3524",
    },
    {
      title: "Quality Validation",
      description: "Diagnostic-quality images captured automatically",
      icon: CheckCircle,
      iconBgColor: "rgb(234, 210, 229)",
      iconColor: "#973F7C",
    },
    {
      title: "Expert Interpretation",
      description: "Board-certified radiologist reviews and reports",
      icon: User,
      iconBgColor: "rgb(220, 220, 220)",
      iconColor: "rgb(80, 80, 80)",
    },
    {
      title: "Fast Report Delivery",
      description: "Comprehensive report ready for clinical decision-making",
      icon: FileText,
      iconBgColor: "rgb(210, 215, 235)",
      iconColor: "rgb(80, 90, 150)",
    },
  ]

  return (
    <section id="howitwork" className="py-20 bg-white">
      <div className="mx-auto px-10 max-w-[1240px]">
        <div className="">
          <h2 className="text-center font-semibold leading-[1.44] tracking-[0] text-2xl text-[rgb(35,31,32)]">
            How It Works
          </h2>
          <p className="text-center mt-2 leading-[1.4] text-xl text-[rgb(35,31,32)]">
            From AI-guided scanning to expert diagnosis in four seamless steps
          </p>
        </div>

        <div className="mt-16 grid mx-auto grid-cols-2 gap-x-10 gap-y-10 max-w-4xl">
          {careCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="flex flex-col transition-all duration-200 p-[30px] rounded gap-[30px]"
                style={{ padding: "30px", borderRadius:"4px", boxShadow:"rgb(239, 239, 244) 0px 4px 4px 0px, rgb(239, 239, 244) 4px 4px 4px 0px",gap:"30px",}}
              >
                <div className="relative flex items-center justify-center w-[76px] h-[76px]">
                  <div
                    className="absolute inset-0 rounded-2xl blur-[5px]"
                    style={{ backgroundColor: card.iconBgColor }}
                  />
                  <Icon className="relative z-10 w-10 h-10" style={{ color: card.iconColor, strokeWidth: 2 }} />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-bold leading-[1.35] text-xl text-[rgb(35,31,32)]">{card.title}</h3>
                  <p className="leading-[1.4] text-xl text-[rgb(35,31,32)]">{card.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
