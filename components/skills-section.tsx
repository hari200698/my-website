import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, BarChart, Cpu, GitBranch, Settings } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "SQL", "R", "Scala", "Java"],
    },
    {
      title: "Big Data & Analytics",
      icon: BarChart,
      skills: ["Apache Spark", "Hive", "Hadoop", "Airflow", "Kafka", "Tableau", "Power BI", "Looker", "BigQuery"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra"],
    },
    {
      title: "ML & AI",
      icon: Cpu,
      skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "MLflow"],
    },
    {
      title: "Cloud & DevOps",
      icon: Settings,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: ["Git", "Jira", "Unix/Linux", "Jupyter", "VS Code", "Postman"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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
