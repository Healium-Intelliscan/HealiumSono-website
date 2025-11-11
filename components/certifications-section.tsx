import { Card } from "./ui/card";


export function CertificationsSection() {
  return (
    <section
    className="px-4 pb-12 relative container mx-auto liquid-glass"
    >
      <div className="container mx-auto space-y-10">
        <h2 className="text-3xl font-semibold text-center text-white">Trust factors</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center border py-4 shadow-0 border-[#687FE5]">
            <div className="w-16 h-16 rounded-lg mx-auto flex items-center justify-center">
              <img src='/compliance/award.svg'/>
            </div>
            <h3 className="font-semibold text-sm text-[#687FE5]">AWARD WINNING TECHNOLOGY</h3>
          </Card>

          <Card className="text-center border py-4 shadow-0 border-[#687FE5]">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
              <img src='/compliance/hipaa.svg'/>
            </div>
            <h3 className="font-semibold text-sm text-[#687FE5]">HIPAA COMPLIANT CERTIFIED</h3>
          </Card>

          <Card className="text-center border py-4 shadow-0 border-[#687FE5]">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
              <img src='/compliance/uptime.svg'/>
            </div>
            <h3 className="font-semibold text-sm text-[#687FE5]">LIFETIME GUARANTEE</h3>
          </Card>
        </div>
      </div>
    </section>
  )
}