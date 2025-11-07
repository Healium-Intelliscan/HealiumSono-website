import { HelpCircle, Info, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "./ui/separator"

export function Footer() {
  const links = [
    { href: "#howitworks", label: "How it works", icon: Info },
    { href: "#faqs", label: "FAQs", icon: Info },
    { href: "#contact", label: "Contact Us", icon: HelpCircle },
  ]

  return (
    <footer className="bg-[white] flex flex-col">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-6">
        {/* Left Section */}
        <div className="space-y-4 w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <Link href='/'>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/logo/logo.svg" className="w-8 h-8" />
              </div>
            </Link>
            <div className="flex flex-col items-start">
              <Link href='/'><span className="font-semibold text-lg text-[#687FE5]">Healium Sono</span></Link>
              <Link href='https://www.healiumintelliscan.com' target="_blank" className="text-[#687FE5]">
                <span className="text-sm">by Healium Intelliscan</span>
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-5 w-5 text-gray-400 mt-1 shrink-0" />
            <p className="leading-relaxed text-[rgb(35,31,32)]">
              8 The Green, Ste R,<br />
              Dover,<br />
              Delaware, 19901<br />
              USA
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-3 md:gap-4 text-sm md:text-base">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[rgb(35,31,32)] hover:text-[#4981F8] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <Separator className="border opacity-10" />

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 text-sm">
        <p className="text-center md:text-left text-[rgb(35,31,32)]">
          &copy; {new Date().getFullYear()} Healium Intelliscan. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/company/healiumdigitalhealth/"
            className="flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/linkedin-white.png"
              alt="LinkedIn"
              width={28}
              height={28}
              className="h-6 w-6 md:h-7 md:w-7"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}