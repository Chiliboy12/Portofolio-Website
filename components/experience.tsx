import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Pengembang Visualisasi Data Untuk Management Kinerja Para Guru",
      company: "SMA 7 Muhammadiyah Makassar",
      location: "Makassar, Indonesia",
      period: "2024 - 2025",
      type: "Anggota",
      description: "Membantu mengembangkan visualisasi data untuk memonitor dan meningkatkan kinerja para guru.",
      achievements: [],
    },
    {
      title: "Proyek Skripsi Universitas Muhammadiyah Makassar",
      company: "J&T Express Kecamatan Mariso",
      location: "Makassar, Indonesia",
      period: "2025",
      type: "Proyek Skripsi",
      description: "Mengimplementasikan algoritma Simulated Annealing untuk optimasi waktu pengiriman J&T Express di Kecamatan Mariso dan berhasil menemukan urutan rute pengantaran tercepat dengan waktu tempuh 6 menit.",
      achievements: [],
    },
    {
      title: "Associate Data Scientist Kominfo",
      company: "Kementerian Komunikasi dan Informatika",
      location: "Indonesia",
      period: "2024",
      type: "Sertifikasi",
      description: "Mengumpulkan, menelaah, membersihkan data, dan mengevaluasi hasil pemodelan menggunakan algoritma Decision Tree.",
      achievements: [
        "Mengumpulkan Data",
        "Menelaah Data",
        "Membersihkan Data",
        "Mengevaluasi Hasil Pemodelan Menggunakan Algoritma Decision Tree"
      ],
    },
    {
      title: "Komcad (Komponen Cadangan)",
      company: "Kementerian Pertahanan RI",
      location: "Indonesia",
      period: "2022",
      type: "Pelatihan Militer",
      description: "Pelatihan militer dasar sebagai komponen cadangan negara.",
      achievements: [
        "Menembak",
        "Berbivak",
        "Beladiri Militer",
        "PBB"
      ],
    },
  ]

  const education = [
    {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Muhammadiyah Makassar",
      location: "Makassar, Indonesia",
      period: "2021 - 2025",
      gpa: "3.64/4.00",
      description: "Fokus pada pengembangan perangkat lunak, analisis data, dan manajemen basis data.",
      achievements: [],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Pengalaman & Pendidikan</h2>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Pengalaman Kerja</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Pencapaian:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Pendidikan</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">IPK: {edu.gpa}</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Pencapaian:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
