import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BarChart3, Brain, Database } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "A/B Testing Analysis Platform",
      description:
        "Large-scale experiment analysis system processing 70K+ users and 750K+ interactions. Built comprehensive Python data pipeline to evaluate UI design impact and user behavior patterns.",
      icon: BarChart3,
      technologies: ["Python", "Pandas", "Matplotlib", "Statistical Analysis", "A/B Testing"],
      metrics: ["70K+ Users", "750K+ Interactions", "Statistical Significance Testing"],
      link: "#",
    },
    {
      title: "Mental Health Disparities Analysis",
      description:
        "Comprehensive analysis of mental health trends using 3M+ CDC & BRFSS records. Created interactive Tableau and Power BI dashboards providing state-level insights for healthcare policy decisions.",
      icon: Brain,
      technologies: ["Python", "Tableau", "Power BI", "CDC Data", "BRFSS", "Statistical Modeling"],
      metrics: ["3M+ Records", "State-level Insights", "Interactive Dashboards"],
      link: "#",
    },
    {
      title: "Spark ETL Pipeline",
      description:
        "High-performance big data processing system handling 1TB+ daily data volume. Implemented fault-tolerant architecture with automated monitoring and alerting for production environments.",
      icon: Database,
      technologies: ["Apache Spark", "Scala", "AWS", "Kafka", "Airflow", "Monitoring"],
      metrics: ["1TB+ Daily", "99.5% Uptime", "Real-time Processing"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
