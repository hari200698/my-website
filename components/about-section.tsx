import { Coffee, Camera, Plane, Code } from "lucide-react"

export function AboutSection() {
  const interests = [
    { icon: Coffee, label: "Coffee", description: "Fueling late-night coding sessions" },
    { icon: Camera, label: "Photography", description: "Capturing moments and perspectives" },
    { icon: Plane, label: "Travel", description: "Exploring new cultures and places" },
    { icon: Code, label: "Coding", description: "Building solutions that matter" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently pursuing my Master's degree in Information Management at the University of Illinois
              Urbana-Champaign, building on my 5+ years of experience in software and data engineering.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in creating scalable analytics solutions and machine learning systems that transform raw
              data into actionable business insights. I thrive on solving complex data challenges and building systems
              that can handle massive scale while maintaining reliability and performance.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not working with data pipelines or building dashboards, I enjoy mentoring junior engineers and
              staying up-to-date with the latest developments in data engineering and machine learning technologies.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Personal Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">{interest.label}</h4>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
