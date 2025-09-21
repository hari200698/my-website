"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">
                Hi, I'm <span className="gradient-text">Harisankar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Data Engineer & Business Intelligence Specialist
              </h2>
            </div>

            <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
              I build scalable data pipelines, intuitive dashboards, and analytics solutions that turn raw data into
              business impact. With 5+ years of experience in software and data engineering, I'm passionate about
              creating systems that drive data-driven decision making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                <Mail className="mr-2 h-4 w-4" />
                Connect With Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src="/professional-headshot-of-a-data-engineer.jpg"
                    alt="Harisankar Kartha"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
