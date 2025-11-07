"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#EFEAE0] border-b border-[#efeae0]">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href='/'>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/logo/logo.svg" className="w-8 h-8" />
              </div>
            </Link>
            <div className="flex flex-col items-start">
              <Link href='/'><span className="font-semibold text-lg text-[#687FE5]">Healium Sono</span></Link>
              {/* <Link href='https://www.healiumintelliscan.com' target="_blank" className="text-[#687FE5]">
                <span className="text-sm">by Healium Intelliscan</span>
              </Link> */}
            </div>
          </div>

          {/* const links = [
            { href: "/", label: "Home", icon: Briefcase },
            { href: "#features", label: "Features", icon: Info },
            { href: "#howitworks", label: "How it works", icon: Info },
            { href: "#faqs", label: "FAQs", icon: Info },
            { href: "#contact", label: "Contact Us", icon: HelpCircle },
          ] */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="flex items-center gap-1 text-[#2D2D2D] hover:text-[#F4A582] transition-colors">
              Home
            </Link>
            <Link href="#about" className="flex items-center gap-1 text-[#2D2D2D] hover:text-[#F4A582] transition-colors">
              About Us
            </Link>
            <Link href="#howitwork" className="flex items-center gap-1 text-[#2D2D2D] hover:text-[#F4A582] transition-colors">
              How it works
            </Link>
            <Link href="#faqs" className="text-[#2D2D2D] hover:text-[#F4A582] transition-colors">
              FAQs
            </Link>
            <Link href="#contact" className="text-[#2D2D2D] hover:text-[#F4A582] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              asChild
              className="border-2 border-[#F4A582] text-[#2D2D2D] bg-transparent hover:bg-[#F4A582]/10 rounded-full px-6"
            >
              <Link href='#contact'>
                Book a demo
              </Link>
            </Button>
            <Button asChild className="bg-[#C8B5E8] text-[#2D2D2D] hover:bg-[#B8A5D8] rounded-full px-6">
              <Link href='#contact'>
                Try for free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
