import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import Script from "next/script"
import { Footer } from "@/components/footer"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import VideoPlayer from "@/components/VideoPlayer"
import DeviceCompatibilitySection from "@/components/device-compatability-section"
import { CertificationsSection } from "@/components/certifications-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { RequestDemoSection } from "@/components/contact-us"
import Image from "next/image"
import { ResponsiveImage } from "@/components/Image/ResponsiveImage"
import { ImageCarousel } from "@/components/Image/ImageCarousel"
import HeroVideo from "@/components/hero-video"
import { NewFeaturesSection } from "../components/new-feature-section"
import CareContinuum from "@/components/care-continum"
import ClinicalValidation from "@/components/clinical-validation"
import NewDeviceCompatability from "@/components/new-device-compatability"
import AsSeenIn from "@/components/as-seen-in"
import { AIDataSize } from "@/components/train_data"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://healiumsono.com/",
    name: "Healium Intelliscan - Ultrasound Imaging Platform",
    description: "Healium Sono is a comprehensive ultrasound imaging platform designed for radiologists and hospitals. It provides a streamlined workflow for ultrasound case management, interpretation, and reporting with AI-enhanced analysis capabilities.",
    url: "https://healiumsono.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Healium Sono",
      url: "https://healiumsono.com",
      sameAs: [
        "https://www.linkedin.com/company/healiumdigitalhealth"
      ],
    }
  }

  const sampleImages = [
    {
      src: "/images/Parasternal-short-axis-view-300x200.jpg",
      alt: "Parasternal short axis view",
      label: "Parasternal short axis view",
    },
    {
      src: "/images/Carotid-2-300x214.jpg",
      alt: "Carotid 2",
      label: "Carotid 2",
    },
    {
      src: "/images/Uncompromising-Image-Quality_Liver-300x169.gif",
      alt: "Uncompromising Image Quality_Liver",
      label: "Uncompromising Image Quality_Liver",
    },
    {
      src: "/images/Elbow.gif",
      alt: "Elbow",
      label: "Elbow",
    },
    {
      src: "/images/Kidney.gif",
      alt: "Kidney",
      label: "Kidney",
    },
    {
      src: "/images/Median-nerve.gif",
      alt: "Median nerve",
      label: "Median nerve",
    },
    {
      src: "/images/Thyroid-hypertrophic-follicle.gif",
      alt: "Thyroid hypertrophic follicle",
      label: "Thyroid hypertrophic follicle",
    },
    {
      src: "/images/Parasternal-long-axis-view.gif",
      alt: "Parasternal long axis view",
      label: "Parasternal long axis view",
    },
  ]

  return (
    <>
      <main className="text-white">
        <SiteHeader />
        <Hero />
        {/* <iframe className="w-full h-[500px]" src="https://www.youtube.com/embed/8lCZWnk_9qU?si=f9LGQjAOnnxGSY_Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        {/* <video autoPlay={true} className="w-full h-[500px]" src={'https://www.youtube.com/embed/8lCZWnk_9qU?si=f9LGQjAOnnxGSY_Q'}/> */}
        <HeroVideo/>
        <CareContinuum/>
        <NewFeaturesSection/>
        <AIDataSize/>
        <ClinicalValidation/>
        <NewDeviceCompatability/>
        <AsSeenIn/>
        <FAQSection/>
        <FeaturesSection/>
        {/* <div id="howitworks" className="bg-[#000000] py-12 mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-center text-white">How it works</h2>
          <VideoPlayer
            desktopSrc="/videos/howitworks.mp4"
            mobileSrc="/videos/howitworks_mobile.mp4"
            className="bg-black container rounded-md"
          />
        </div> */}
        {/* <AboutSection/> */}
        
        {/* <div className="mx-auto md:h-[500px] h-[400px] my-12">
          <ResponsiveImage
          desktop="/images/high_quality_image.png"
          mobile="/images/high_quality_image_mobile.png"
          alt=""
          />
        </div> */}
        {/* <div className="max-w-4xl mx-auto my-12">
          <h1 className="mb-8 text-2xl text-center font-bold text-white">Supreme Image Quality</h1>
          <ImageCarousel images={sampleImages} />
        </div> */}
        {/* <DeviceCompatibilitySection/>
        <CertificationsSection/> */}
        <CTASection/>
        <RequestDemoSection/>
        <Footer/>
      </main>

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}