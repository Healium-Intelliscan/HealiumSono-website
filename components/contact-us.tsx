"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"

const demoSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
})

type DemoFormValues = z.infer<typeof demoSchema>

export function RequestDemoSection() {
  const [loading, setLoading] = useState(false)
  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: DemoFormValues) {
    try {
      setLoading(true)
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!res.ok) throw new Error("Something went wrong, please try again.")
      toast.success("Thank you! We’ll be in touch soon.")
      form.reset()
    } catch (err: any) {
      toast.error(err.message || "Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#f9f8f7] py-20 2xl:py-32 px-8 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-2 space-y-6 flex-1">
          <button className="border border-[#C8B5E8] text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-medium">
            Get Started Today
          </button>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2D2D2D]">
            Ready to Experience the <br /> Diagnostic Revolution?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Join healthcare facilities worldwide that trust Healiumsono for
            AI-powered remote ultrasound diagnostics.
          </p>

          <ul className="space-y-2 text-gray-700">
            {[
              "Free demo and consultation",
              "No long-term contracts required",
              "Seamless integration with existing workflows",
              "Dedicated support team",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black" /> {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-10 pt-6 text-gray-900 font-semibold">
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-gray-600">Expert Coverage</p>
            </div>
            <div>
              <p className="text-2xl font-bold">&lt;70%</p>
              <p className="text-sm text-gray-600">Cost Reduction</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-gray-600">HIPAA Compliant</p>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-white rounded-lg p-8 shadow-xl shadow-[#F2EFEE]">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Request a Demo
          </h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#2D2D2D]">Full Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Dr. John Smith"
                        {...field}
                        className="border-gray-300 focus-visible:ring-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#2D2D2D]">Email Address *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john.smith@hospital.com"
                        {...field}
                        className="border-gray-300 focus-visible:ring-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#2D2D2D]">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={8}
                        placeholder="Tell us about your facility and needs..."
                        {...field}
                        className="text-[#2D2D2D] border-gray-300 focus-visible:ring-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C8B5E8] text-[#2D2D2D] hover:bg-[#B8A5D8] rounded-md py-2"
              >
                {loading ? "Submitting..." : "Request Demo"}
              </Button>
            </form>
          </Form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our privacy policy. We’ll never
            share your information.
          </p>
        </div>
      </div>
    </section>
  )
}
