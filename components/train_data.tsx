'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
// import { BookDemoDialog } from "./book-demo"

export function AIDataSize() {
  
  const [openBookDemo, setOpenBookDemo] = useState<boolean>(false)
  
  return (

    <section 
    className="py-8 w-full"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="p-8">
          <div className="p-0">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="relative w-full flex-1">
                <img
                  src="/data/train_data.gif"
                  alt="AI data size"
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-[#2D2D2D] mb-4">Trained on 100,000+ Cardiac & OBGyn Ultrasound Images</h2>
                <p className="text-[rgb(35,31,32)] font-normal">
                  Built from a dataset of over 100,000 de-identified ultrasound images, our AI models cover Obstetrics, Cardiology, and Gynecology. 
      They analyze key anatomical structures in real time, providing accurate biometric measurements and insights that help clinicians assess fetal growth, cardiac function, and organ health with greater speed and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}