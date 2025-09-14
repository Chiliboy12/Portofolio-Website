"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/professional-headshot-of-computer-science-graduate.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Halo, Saya <span className="text-primary">Andika Saputra, S.Kom.,MTCNA.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Sarjana Teknik Informatika yang bersemangat dalam pengembangan software dan teknologi inovatif
            <br />
            <span className="block mt-2">Lokasi: <span className="font-semibold">Makassar, Indonesia</span></span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-primary hover:bg-primary/90">
              Lihat Proyek Saya
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="/Andika S cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Chiliboy12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:Andika.saputra18072000@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a href="tel:0895365180006" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Telepon</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v.75a.75.75 0 01-.75.75h0a12.75 12.75 0 01-12.75-12.75v0a.75.75 0 01.75-.75h.75a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
