import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function About() {
  const interests = [
    {
      icon: Code,
      title: "Pengembangan Web",
      description: "Membangun aplikasi web modern dengan teknologi terkini",
    },
    {
      icon: Smartphone,
      title: "Aplikasi Mobile",
      description: "Mengembangkan aplikasi mobile yang user-friendly",
    },
    {
      icon: Database,
      title: "Manajemen Data",
      description: "Merancang dan mengelola sistem database yang efisien",
    },
    {
      icon: Globe,
      title: "Teknologi Cloud",
      description: "Implementasi solusi berbasis cloud dan DevOps",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Tentang Saya</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fresh graduate S.Kom dengan pemahaman dalam pengembangan perangkat lunak, analisis data, dan manajemen basis data. Memiliki pengalaman melalui proyek kuliah, magang, serta organisasi kampus. Terbiasa bekerja dalam tim, cepat beradaptasi, dan bersemangat untuk berkontribusi di industri teknologi.
              </p>
            </div>
            <div>
              <img src="/computer-science-student-working-on-laptop-with-co.jpg" alt="Working on projects" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <interest.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
