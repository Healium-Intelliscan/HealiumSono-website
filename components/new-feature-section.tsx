import { NewFeatureItem } from "./new-feature-item"

const features = [
  {
    title: "Real-Time Visual Guidance",
    description: "Dynamic, multi-planar probe positioning assistance overlaid directly on the ultrasound image",
  },
  {
    title: "Automatic Quality Assessment",
    description:
      "Real-time quality scoring with percentage indicators ensures every captured image meets diagnostic standards",
  },
  {
    title: "Smart Auto-Capture",
    description: "Hands-free recording automatically captures clips when optimal image quality is achieved",
  },
  {
    title: "View Recognition & Validation",
    description: "AI identifies and validates standard cardiac and OBG views, ensuring protocol compliance",
  },
  {
    title: "Reduced Cognitive Load",
    description: "Semi-transparent visual cues minimize eye movement and mental effort during scanning",
  },
  {
    title: "Dynamic Reference Examples",
    description: "Live example clips show target views in motion, accelerating learning and pattern recognition",
  },
]

{/* <div className="relative w-full max-w-[400px]">
  <Image
    src="https://cdn.prod.website-files.com/6634a89a6fab56ada55e9d51/68ac7600ae053fd167cf7ce6_Game-crop.gif"
    alt="HeartFocus Game Animation"
    width={400}
    height={400}
    className="w-full h-auto"
    unoptimized
  />
</div> */}

export function NewFeaturesSection() {
  return (
    <section className="bg-[#f9f8f7] py-16 lg:py-20 2xl:py-40">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          
          <div className="hidden md:flex flex-col">
            <div className="flex flex-col items-center gap-2">
              <svg width="200" height="200" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <g className="animate-tilt-left" style={{ transformOrigin: "200px 200px" }}>
                  <ellipse cx="200" cy="200" rx="60" ry="110" fill="none" stroke="#7B7FFF" strokeWidth="5" opacity="0.9" />
                  <line x1="200" y1="120" x2="200" y2="280" stroke="#E5E7EB" strokeWidth="4" />
                  <line x1="160" y1="200" x2="240" y2="200" stroke="#E5E7EB" strokeWidth="4" />
                </g>
                <path d="M 100 180 L 80 200 L 100 220" fill="none" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">Tilt Left</h4>
                <p className="text-sm text-gray-600">For lateral views</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <svg width="200" height="200" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <g className="animate-tilt-right" style={{ transformOrigin: "200px 200px" }}>
                  <ellipse cx="200" cy="200" rx="60" ry="110" fill="none" stroke="#7B7FFF" strokeWidth="5" opacity="0.9" />
                  <line x1="200" y1="120" x2="200" y2="280" stroke="#E5E7EB" strokeWidth="4" />
                  <line x1="160" y1="200" x2="240" y2="200" stroke="#E5E7EB" strokeWidth="4" />
                </g>
                <path d="M 300 180 L 320 200 L 300 220" fill="none" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">Tilt Right</h4>
                <p className="text-sm text-gray-600">For opposite angle</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <svg width="200" height="200" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <g className="animate-probe-rotate" style={{ transformOrigin: "200px 200px" }}>
                  <ellipse cx="200" cy="200" rx="60" ry="110" fill="none" stroke="#7B7FFF" strokeWidth="5" opacity="0.9" />
                  <line x1="200" y1="120" x2="200" y2="280" stroke="#E5E7EB" strokeWidth="4" />
                  <line x1="160" y1="200" x2="240" y2="200" stroke="#E5E7EB" strokeWidth="4" />
                </g>
                <path d="M 200 80 Q 250 80 270 120" fill="none" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
                <path d="M 270 120 L 260 105 L 255 125 Z" fill="#EF4444" />
              </svg>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">Rotate 90°</h4>
                <p className="text-sm text-gray-600">For transverse view</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[42px] font-semibold text-[#2D2D2D] leading-tight text-center lg:text-left">
                Intelligent Scanning Assistance
                <br />
                for Every Operator
              </h2>
              <p className="text-[#2D2D2D] text-xl leading-relaxed  text-center lg:text-left">
                Our AI-powered guidance system helps sonographers capture diagnostic-quality images with confidence
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <NewFeatureItem key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
