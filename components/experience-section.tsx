import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Sr. Systems Engineer",
      company: "Infosys",
      period: "2021 – 2024",
      location: "India",
      achievements: [
        "Built Spark-based ETL pipelines processing 1TB+ daily data with 99.5% reliability",
        "Automated Tableau reporting workflows, reducing manual work by 25%",
        "Implemented AWS Athena solutions, reducing query SLAs from hours to minutes",
        "Mentored 7 new hires in data engineering best practices",
        "Earned 2× SPOT Awards for exceptional performance and innovation",
      ],
      skills: ["Apache Spark", "AWS", "Tableau", "ETL", "Python", "SQL"],
    },
    {
      title: "Engineer – Sales",
      company: "Flowserve",
      period: "2019 – 2021",
      location: "India",
      achievements: [
        "Boosted regional sales performance by 16% through data-driven strategies",
        "Improved delivery coordination processes achieving 90% on-time delivery rates",
        "Achieved high client satisfaction scores (70%+) through effective relationship management",
        "Developed sales analytics dashboards for performance tracking",
      ],
      skills: ["Sales Analytics", "CRM", "Data Analysis", "Project Management"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl gradient-text">{exp.title}</CardTitle>
                    <p className="text-xl text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
