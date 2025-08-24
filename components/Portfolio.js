"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Monitor,
  Code,
  Palette,
  Database,
  ArrowRight,
  Download,
} from "lucide-react"

export default function Portfolio() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-foreground tracking-tight">Pankaj Kumar</div>
            <div className="hidden md:flex space-x-8">
              {["Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium hover:scale-105"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 pt-24">
        <header className="mb-32 text-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight tracking-tight">
              Crafting Digital
              <br />
              <span className="text-accent">Experiences</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer passionate about building exceptional web applications with modern technologies and
              thoughtful design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Let&apos;s Work Together
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-muted px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 bg-transparent hover:shadow-md"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Greater Noida, India
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              pankajk07414@gmail.com
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-muted-foreground hover:text-accent p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:shadow-md"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </header>

        <section id="skills" className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Languages", skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
              { category: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express", "TailwindCSS"] },
              { category: "Databases", skills: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "Prisma"] },
              { category: "Tools", skills: ["Git", "Docker", "Figma", "VS Code", "GitHub"] },
            ].map((group, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 rounded-2xl group hover-revolving-border"
              >
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-6 text-accent">{group.category}</h3>
                  <div className="space-y-3">
                    {group.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-muted-foreground text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              How I can help bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Monitor,
                title: "Frontend Development",
                description:
                  "Building responsive and dynamic user interfaces using React, Next.js, and TypeScript with focus on performance and accessibility.",
              },
              {
                icon: Code,
                title: "Full Stack Applications",
                description:
                  "Developing end-to-end web applications with modern tech stack ensuring scalable and maintainable solutions.",
              },
              {
                icon: Palette,
                title: "UI/UX Implementation",
                description:
                  "Transforming design mockups into pixel-perfect, responsive interfaces with smooth animations and transitions.",
              },
              {
                icon: Database,
                title: "API Development",
                description:
                  "Creating robust and efficient RESTful APIs with secure authentication, data validation, and proper error handling.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 rounded-2xl group hover-revolving-border"
              >
                <CardContent className="p-10">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SMS Stock Market Simulator",
                description: "Gamified stock market simulator with real-time data and portfolio tracking.",
                tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
                type: "Full Stack App",
              },
              {
                title: "Latch Publication Manager",
                description: "SaaS platform for publication tracking with automated workflows.",
                tags: ["Next.js", "AWS", "MongoDB", "Redis"],
                type: "SaaS Platform",
              },
              {
                title: "Quizzzy Platform",
                description: "Interactive quiz platform with 10,000+ active users and real-time competitions.",
                tags: ["React.js", "MongoDB", "Express"],
                type: "Interactive Platform",
              },
              {
                title: "Conference Manager",
                description: "Comprehensive system for scientific conference management and peer reviews.",
                tags: ["React Native", "PostgreSQL", "Node.js"],
                type: "Management System",
              },
              {
                title: "Hackathon Portal",
                description: "Platform connecting students with hackathons and team formation tools.",
                tags: ["React.js", "Node.js", "TypeScript"],
                type: "Web Platform",
              },
              {
                title: "Velvet Social App",
                description: "Modern social networking app for university students with real-time messaging.",
                tags: ["Next.js", "Supabase", "React.js"],
                type: "Social App",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 rounded-2xl group overflow-hidden relative hover-revolving-border"
              >
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.1}
                  movementDuration={1.5}
                  borderWidth={1}
                />
                <div className="relative">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=400&query=${project.title}`}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent/90 text-accent-foreground border-0 rounded-full px-3 py-1">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs rounded-full px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <Card className="border-border bg-card rounded-2xl hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 revolving-border">
            <CardContent className="p-16 text-center">
              <h2 className="text-3xl font-semibold mb-6 tracking-tight">Let&apos;s Create Something Amazing</h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I&apos;m available for freelance projects and collaborations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 bg-transparent hover:shadow-md"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">© 2024 Pankaj Kumar. All rights reserved.</p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 p-2 rounded-xl hover:bg-muted/50"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
