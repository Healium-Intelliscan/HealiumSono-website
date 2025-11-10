"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Briefcase, HelpCircle, Info, Menu } from "lucide-react"

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

const links = [
  { href: "/", label: "Home", icon: Briefcase },
  { href: "#about", label: "About Us", icon: Info },
  { href: "#howitwork", label: "How it works", icon: Info },
  { href: "#faqs", label: "FAQs", icon: Info },
  { href: "#contact", label: "Contact Us", icon: HelpCircle },
]

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
              Contact Us
            </Link>
            <Link href="https://app.healiumsono.com" className="text-[#2D2D2D] hover:text-[#F4A582] transition-colors">
              Login
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

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="h-8 w-8 text-black" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-gray-800 p-0 w-full flex flex-col"
              >

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-8 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-[#2D2D2D] flex tems-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                    >
                      <span className="text-xl">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                  <div className="flex flex-col gap-4 px-4 mt-8">
                    <Link
                      href='https://app.healiumsono.com'
                      className="text-[#2D2D2D] text-center flex items-center justify-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                    >
                      <span className="text-xl">Login</span>
                    </Link>
                    <Button 
                    asChild 
                    className="cursor-pointer rounded-full px-8 py-8 lg:py-6 text-xl"
                    style={{
                      // backgroundImage:"linear-gradient(135deg, rgb(175, 175, 231), rgb(233, 195, 226) 50%, rgb(235, 170, 136))",
                      borderRadius:"30px",
                      boxSizing: "border-box"
                    }}
                    >
                      <Link href='#contact'>
                        Try for free
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="text-[#2D2D2D] cursor-pointer rounded-full px-8 p-8 lg:py-6 text-xl"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #afafe7, #e9c3e2 50%, #ebaa88)"
                      }}
                    >
                      <Link href='#contact'>
                        Book a demo
                      </Link>
                    </Button>
                  </div>
                  
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
