import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faqs" className="bg-[#f8f8fb] px-4 py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center opacity-100">
          <h2 className="text-4xl font-semibold tracking-[0] leading-tight text-[rgb(35,31,32)] mb-2">
          Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-[rgb(35,31,32)]">
            Everything you need to know about Healiumsono
            </p>
          </div>
        </div>
        <div className="pb-2">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="outline outline-1 outline-gray-200 rounded-lg px-6 text-[rgb(35,31,32)]">
              <AccordionTrigger className="text-left">How does the AI guidance system work?</AccordionTrigger>
              <AccordionContent>
                Our AI-powered guidance system provides real-time visual cues overlaid on the ultrasound image, helping sonographers position the probe correctly and capture diagnostic-quality views. The system automatically assesses image quality and captures clips when optimal quality is achieved, ensuring consistent results regardless of operator experience level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="outline outline-1 outline-gray-200 rounded-lg px-6 text-[rgb(35,31,32)]">
              <AccordionTrigger className="text-left">Does the AI replace the need for expert radiologists?</AccordionTrigger>
              <AccordionContent>
                No. Our AI guidance assists during the scanning process to ensure high-quality image acquisition. Every scan is still reviewed and interpreted by board-certified radiologists who provide comprehensive diagnostic reports. The AI enhances efficiency and quality, while human expertise ensures accurate clinical interpretation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="outline outline-1 outline-gray-200 rounded-lg px-6 text-[rgb(35,31,32)]">
              <AccordionTrigger className="text-left">What training is required to use the AI guided system?</AccordionTrigger>
              <AccordionContent>
                The AI guidance system is designed to be intuitive and easy to use. Sonographers can achieve diagnostic-quality scans with minimal additional training. The system provides real-time feedback and guidance, accelerating the learning curve and building operator confidence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="outline outline-1 outline-gray-200 rounded-lg px-6 text-[rgb(35,31,32)]">
              <AccordionTrigger className="text-left">
                What types of ultrasound studies does Healiumsono support?
              </AccordionTrigger>
              <AccordionContent>
                Healiumsono specializes in Cardiology and OB/GYN ultrasound studies. Our AI guidance system is trained on comprehensive datasets for cardiac views (including Apical 4-Chamber, Parasternal Long Axis, and more) and obstetric views (fetal biometry, anatomy scans, etc.).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="outline outline-1 outline-gray-200 rounded-lg px-6 text-[rgb(35,31,32)]">
              <AccordionTrigger className="text-left">How quickly can I get a diagnostic report?</AccordionTrigger>
              <AccordionContent>
                Most reports are delivered within minutes to a few hours, depending on the complexity of the study and current demand. Our 24/7 expert network ensures rapid turnaround times without compromising diagnostic quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="outline outline-1 outline-gray-200 rounded-lg px-6 text-[rgb(35,31,32)]">
              <AccordionTrigger className="text-left">Is the platform HIPAA compliant?</AccordionTrigger>
              <AccordionContent>
                Yes, Healiumsono is fully HIPAA compliant. We employ enterprise-grade encryption, secure data transmission, and strict access controls to protect patient information at every step of the diagnostic process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-center max-w-4xl mx-auto opacity-100">
          <p className="text-xl font-medium text-[rgb(35,31,32)]">
            Still have a questions? Contact our support team
          </p>
        </div>
      </div>
    </section>
  )
}