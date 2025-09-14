import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Sistem Manajemen Inventori",
      description:
        "Aplikasi web untuk mengelola inventori barang dengan fitur real-time tracking, laporan, dan notifikasi otomatis.",
      image: "/inventory-dashboard.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Aplikasi E-Learning Mobile",
      description:
        "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking untuk siswa.",
      image: "/mobile-e-learning-app-interface.jpg",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard untuk visualisasi data bisnis dengan grafik interaktif dan laporan real-time menggunakan chart libraries.",
      image: "/business-analytics-dashboard.png",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Sistem Booking Online",
      description:
        "Platform reservasi online dengan integrasi payment gateway, notifikasi email, dan manajemen jadwal otomatis.",
      image: "/online-booking-system-interface.jpg",
      technologies: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Proyek Terbaru</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
