'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
// import { BookDemoDialog } from "./book-demo"

export function CTASection() {
  
  const [openBookDemo, setOpenBookDemo] = useState<boolean>(false)
  
  return (

    <section 
    className="py-20 2xl:py-32 w-full bg-cover bg-center bg-no-repeat"
    style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6634a89a6fab56ada55e9d51/68a3288cb609dcafe8d47147_Gradient%20Final%205%201.webp')",
        }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="p-8">
          <div className="p-0">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-[#2D2D2D] mb-4">Ready to Experience the Diagnostic Revolution?</h2>
                <p className="text-[rgb(35,31,32)] font-normal mb-6">
                  Join the elite circle of 500+ hospitals nationwide that have taken the leap over the past year. Your
                  first free Sonographer Consultation.
                </p>
                <Link href='#contact'>
                  <Button 
                  size="lg"
                  className="bg-[#C8B5E8] text-[#2D2D2D] hover:bg-[#B8A5D8] cursor-pointer"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/cta/cta.svg"
                  alt="Healthcare professional with diagnostic results"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {
        openBookDemo && (
          <BookDemoDialog
          open={openBookDemo}
          setOpen={() => setOpenBookDemo(false)}
          />
        )
      } */}
    </section>
  )
}