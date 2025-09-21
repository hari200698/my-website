import { Mail, Linkedin, Github } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/harisankar-kartha",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/hari200698",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:harisankar200698@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2024 Harisankar Kartha. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
