"use client"

import React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
  ChevronDown,
} from "lucide-react"
import Navbar from "./Navbar"

export default function Portfolio() {
  const [openIndex, setOpenIndex] = React.useState(null)
  const [servicesOpenIndex, setServicesOpenIndex] = React.useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleServicesAccordion = (index) => {
    setServicesOpenIndex(servicesOpenIndex === index ? null : index)
  }

  const skills = [
    { category: "Languages", skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
    { category: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express", "TailwindCSS"] },
    { category: "Databases", skills: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "Prisma"] },
    { category: "Tools", skills: ["Git", "Docker", "Figma", "VS Code", "GitHub"] },
  ]

  const projects = [
    {
      title: "Linkbee - Url Shortener",
      description: "Gamified stock market simulator with real-time data and portfolio tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      type: "Full Stack App",
      url: "https://github.com/pankajk07414/sms-stock-market-simulator",
      demoUrl: "https://sms-simulator.vercel.app",
      img: "/linkbee.png"
    },
    {
      title: "EkChupChai - buy me a coffee clone",
      description: "Interactive quiz platform with 10,000+ active users and real-time competitions.",
      tags: ["React.js", "MongoDB", "Express"],
      type: "Interactive Platform",
      url: "https://github.com/pankajk07414/quizzzy-platform",
      demoUrl: "https://quizzzy-app.vercel.app",
      img: "/ekchupchai.png"
    },
    {
      title: "Saasly - Inventory Management System",
      description: "A SaaS landing page with a responsive UI and a form for user to get in touch with the team.",
      tags: ["Next.js", "AWS", "MongoDB", "Redis"],
      type: "SaaS Platform",
      url: "https://github.com/pankajk07414/latch-publication-manager",
      demoUrl: "https://latch-publications.vercel.app",
      img: "/saasly.png"
    },
    {
      title: "Thirtysixstudio - Agency Landing Page",
      description: "Comprehensive system for scientific conference management and peer reviews.",
      tags: ["React Native", "PostgreSQL", "Node.js"],
      type: "Management System",
      url: "https://github.com/pankajk07414/conference-manager",
      demoUrl: "https://conference-manager.vercel.app",
      img: "/thirtysixstudio-1.png"
    },
    {
      title: "WellFlow - Wellflow Landing Page",
      description: "Platform connecting students with hackathons and team formation tools.",
      tags: ["React.js", "Node.js", "TypeScript"],
      type: "Web Platform",
      url: "https://github.com/pankajk07414/hackathon-portal",
      demoUrl: "https://hackathon-portal.vercel.app",
      img: "/wellflow.png"
    },
    {
      title: "KoinX - Crypto Landing Page",
      description: "Modern social networking app for university students with real-time messaging.",
      tags: ["Next.js", "Supabase", "React.js"],
      type: "Social App",
      url: "https://github.com/pankajk07414/velvet-social-app",
      demoUrl: "https://velvet-social.vercel.app",
      img: "/koinX-dashobard-preview.png"
    },
  ]

  const services = [
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
  ]

  const socials = [Github, Linkedin, Twitter]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 pt-24">
        <header id="home" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Available for work
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Hello, I'm
                  <br />
                  <span className="text-primary relative">
                    Pankaj Kumar
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60"></div>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Full Stack Developer passionate about building exceptional web applications with modern technologies and thoughtful design.
                </p>
              </div>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="purple-gradient"
                  onClick={() => scrollToSection("contact")}
                  className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Work Together
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>

                <Button
                  variant="purple-outline"
                  className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border-2 hover:border-primary/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Download CV
                  </span>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  Delhi, India
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  hello@pankajk.site
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 lg:hidden">
                {socials.map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group text-muted-foreground hover:text-primary p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative hidden lg:block">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex gap-4">
                  {socials.map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group/social flex flex-col items-center gap-3 p-3 text-primary hover:text-white bg-primary/10 rounded-xl hover:border-primary hover:bg-primary transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="projects" className="mb-32">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Portfolio
            </div>
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">
              Featured
              <span className="text-primary relative">
                Projects
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60"></div>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary border-primary/20 bg-gradient-to-br from-background to-primary/5 hover:from-primary/5 hover:to-primary/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 rounded-3xl"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary rounded-full blur-2xl"></div>
                  </div>

                  <div className="relative">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute top-4 left-4">
                      <Badge className="rounded-full px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground font-medium">
                        {project.type}
                      </Badge>
                    </div>

                    <div className="absolute top-4 right-4 flex gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-110 opacity-0 group-hover:opacity-100"
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-110 opacity-0 group-hover:opacity-100">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                    </div>
                  </div>

                  <CardContent className="relative p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary-foreground rounded opacity-80"></div>
                      </div>
                      <h3 className="text-xl font-semibold text-primary group-hover:text-primary-dark transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs rounded-full px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-32">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Skills & Expertise
            </div>
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">
              Technical
              <span className="text-primary relative">
                Mastery
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60"></div>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((group, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary border-primary/20 bg-gradient-to-br from-background to-primary/5 hover:from-primary/5 hover:to-primary/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 rounded-3xl"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary rounded-full blur-xl"></div>
                </div>

                <CardContent className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-foreground rounded-lg opacity-80"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{group.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group/skill"
                      >
                        <div className="w-2 h-2 bg-primary/60 rounded-full group-hover/skill:bg-primary transition-colors duration-300"></div>
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="mb-32">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Services
            </div>
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">
              How I can help bring your
              <span className="text-primary relative">
                digital vision
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60"></div>
              </span>
              {" "}to life
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional development services tailored to your needs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`
                    group relative border rounded-3xl transition-all duration-500 overflow-hidden
                    ${servicesOpenIndex === index
                      ? 'border-border bg-gradient-to-br from-primary/5 to-primary/10 shadow-2xl shadow-primary/20 scale-105'
                      : 'border-primary hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:scale-102'
                    }
                  `}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
                  </div>

                  {/* Header */}
                  <button
                    onClick={() => toggleServicesAccordion(index)}
                    className="relative w-full p-8 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-transparent hover:to-primary/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`
                        relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                        ${servicesOpenIndex === index
                          ? 'bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                          : 'bg-gradient-to-br from-primary/10 to-primary/20 text-primary hover:from-primary/20 hover:to-primary/30 group-hover:scale-105'
                        }
                      `}>
                        <service.icon className="w-8 h-8" />
                        {servicesOpenIndex === index && (
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                        )}
                      </div>
                      <div className="text-left">
                        <span className="text-xl font-semibold text-foreground block mb-1">
                          {service.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {servicesOpenIndex === index ? 'Tap to close' : 'Tap to explore'}
                          </span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                      ${servicesOpenIndex === index
                        ? 'bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-lg shadow-primary/25'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary group-hover:scale-110'
                      }
                    `}>
                      <ChevronDown className={`
                        w-6 h-6 transition-all duration-500
                        ${servicesOpenIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'}
                      `} />
                    </div>
                  </button>

                  {/* Content */}
                  <div className={`
                    overflow-hidden transition-all duration-700 ease-in-out
                    ${servicesOpenIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="px-8 pb-8">
                      <div className="border-t border-gradient-to-r from-transparent via-primary/20 to-transparent pt-8">
                        <div className="flex items-start gap-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <service.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-muted-foreground leading-relaxed text-base mb-6">
                              {service.description}
                            </p>

                            {/* Enhanced Features */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm text-foreground font-medium">Custom Solutions</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm text-foreground font-medium">Modern Technologies</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm text-foreground font-medium">24/7 Support</span>
                              </div>
                            </div>

                            <div className="mt-6 flex items-center gap-4">
                              <Badge variant="purple-gradient" className="text-xs px-4 py-2">
                                Available for hire
                              </Badge>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Ready to start</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              <Card className="border-primary border-primary/20 bg-gradient-to-br from-background to-primary/5 hover:from-primary/5 hover:to-primary/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-[1.02]">

                <CardContent className="relative p-6 sm:p-12 lg:p-16 text-center">
                  <div className="max-w-3xl mx-auto">
                    {/* Animated Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-ping"></div>
                        Available for work
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 tracking-tight group-hover:scale-105 transition-transform duration-500">
                        Let&apos;s Build Something
                        <span className="text-primary relative inline-block">
                          {" "}Amazing
                          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60 group-hover:scale-x-110 transition-transform duration-500"></div>
                        </span>
                      </h3>

                      <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                        Whether you have a project in mind or just want to chat about possibilities, I&apos;d love to hear from you.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
                      {/* Primary CTA Button */}
                      <a href="mailto:hello@pankajk.site" className="group/btn relative cursor-pointer inline-flex items-center justify-center px-[5vw] py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 border-2 border-transparent hover:border-primary/30 overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-3xl blur-lg opacity-75 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover/btn:bg-white/40 group-hover/btn:rotate-12 transition-all duration-300">
                            <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                          </div>
                          <span className="group-hover/btn:scale-105 transition-transform duration-300">Send Message</span>
                          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse group-hover/btn:animate-bounce"></div>
                        </div>
                      </a>

                      {/* Secondary CTA Button */}
                      <a href="#" className="group/btn2 relative cursor-pointer inline-flex items-center justify-center px-[5vw] py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 border-2 border-primary/30 hover:border-primary/80 bg-background/50 backdrop-blur-sm hover:bg-primary/10 overflow-hidden text-foreground">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl blur-lg opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover/btn2:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover/btn2:bg-primary group-hover/btn2:text-primary-foreground group-hover/btn2:rotate-12 transition-all duration-300">
                            <Github className="w-4 h-4 text-primary group-hover/btn2:text-primary-foreground group-hover/btn2:scale-110 transition-all duration-300" />
                          </div>
                          <span className="group-hover/btn2:scale-105 transition-transform duration-300">View Portfolio</span>
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse group-hover/btn2:animate-bounce"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="border-t border-border max-w-6xl mx-auto pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">© 2024 Pankaj Kumar. All rights reserved.</p>
            <div className="flex gap-4">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group/social flex flex-col items-center gap-3 p-3 text-primary hover:text-white bg-primary/10 rounded-xl hover:border-primary hover:bg-primary transition-all duration-300 hover:scale-105"
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
