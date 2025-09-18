"use client"

import React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
  ChevronDown,
  Calendar,
  MessageCircle,
} from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "./Navbar"
import Link from "next/link"
import { socials } from "./data/socials";
import { projects } from "./data/projects";
import { skills, getCategoryColors } from "./data/skills";
import { services } from "./data/services";



export default function Portfolio() {
  const [openIndex, setOpenIndex] = React.useState(null)
  const [servicesOpenIndex, setServicesOpenIndex] = React.useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleServicesAccordion = (index) => {
    setServicesOpenIndex(servicesOpenIndex === index ? null : index)
  }

  // Define gradient colors for each social platform
  const getGradientClasses = (socialName) => {
    switch (socialName) {
      case 'Github':
        return {
          mobile: 'bg-gradient-to-r from-gray-800 to-black',
          desktop: 'md:bg-gradient-to-r md:from-gray-800/10 md:to-black/10',
          hover: 'md:hover:bg-gradient-to-r md:hover:from-gray-800 md:hover:to-black',
          text: 'md:text-gray-800 dark:md:text-gray-200',
          border: 'border-gray-800 md:hover:border-gray-800/20 dark:border-gray-600 dark:md:hover:border-gray-500/20'
        }
      case 'LinkedIn':
        return {
          mobile: 'bg-gradient-to-r from-blue-600 to-blue-700',
          desktop: 'md:bg-gradient-to-r md:from-blue-600/10 md:to-blue-700/10',
          hover: 'md:hover:bg-gradient-to-r md:hover:from-blue-600 md:hover:to-blue-700',
          text: 'md:text-blue-600',
          border: 'border-blue-600 md:hover:border-blue-600/20'
        }
      case 'Twitter':
        return {
          mobile: 'bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-500 dark:to-gray-600',
          desktop: 'md:bg-gradient-to-r md:from-gray-800/10 md:to-gray-900/10 dark:md:from-gray-500/10 dark:md:to-gray-600/10',
          hover: 'md:hover:bg-gradient-to-r md:hover:from-gray-800 md:hover:to-gray-900 dark:md:hover:from-gray-500 dark:md:hover:to-gray-600',
          text: 'md:text-gray-800 dark:md:text-gray-200',
          border: 'border-gray-700 md:hover:border-gray-800/20 dark:border-gray-500 dark:md:hover:border-gray-600/20'
        }
      default:
        return {
          mobile: 'bg-gradient-to-r from-primary/60 to-primary-dark',
          desktop: 'md:bg-gradient-to-r md:from-primary/10 md:to-primary-dark/10',
          hover: 'md:hover:bg-gradient-to-r md:hover:from-primary md:hover:to-primary-dark',
          text: 'md:text-primary',
          border: 'border-primary md:hover:border-primary/20'
        }
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 pt-28 text-sm sm:text-base md:text-lg lg:text-xl">
        <header id="home" className="mb-32">
          <div className="flex justify-start items-center gap-10">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="space-y-4 pl-1 sm:pl-0">
                <div className="inline-flex items-center gap-2 md:bg-green-500/10 text-green-600 md:px-4 md:py-1 rounded-full text-xs sm:text-sm md:text-base font-medium mb-4 md:mb-3 animate-pulse">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-ping"></div>
                  Available for work
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black sm:leading-[0.9] sm:tracking-tight">
                  <span className="block text-foreground">Hello, I&apos;m</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 relative inline-block leading-[0.9] tracking-tight">
                    Pankaj Kumar
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-80"></div>
                    {/* <div className="hidden sm:block absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-80"></div> */}
                  </span>
                </h1>

                <div className="space-y-2 pt-6">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground lg:pt-2">
                    Developer · Freelancer
                  </p>
                </div>

                <div className="flex flex-col justify-start gap-4 pt-1 pb-4">
                  <div className="flex items-center gap-3 text-base sm:text-lg">
                    <div className="hidden sm:block w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">
                      Freelance developer building{" "}
                      <span className="text-primary font-semibold">MVP products</span>,{" "}
                      <span className="text-pink-400 font-semibold">scalable web apps</span> &{" "}
                      <span className="text-blue-400 font-semibold">automation tools</span>.
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-base sm:text-lg">
                    <div className="hidden sm:block w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-muted-foreground">
                      Passionate about turning{" "}
                      <span className="text-yellow-400 font-semibold">ideas into impact</span>{" "}
                      using 
                      <span className="text-foreground/55">{" "}Next.js, React, Tailwind CSS & Node.js</span>
                      .
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base lg:text-lg text-white pl-1 sm:pl-0 lg:pt-3">
                  <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-primary transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    <span>Delhi, India</span>
                  </div>

                  <a href="mailto:hello@pankajk.site" className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-primary transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    <span>hello@pankajk.site</span>
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-6 pt-12 sm:px-0">
                <a
                  href="https://calendly.com/hellopankajk/30min?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-4 xl:px-16 rounded-2xl font-semibold sm:font-bold text-base md:text-lg lg:text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-primary-dark text-primary-foreground border-2 border-transparent hover:border-primary/30"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-2xl sm:rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white/40 group-hover:rotate-12 transition-all duration-300">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="group-hover:scale-105 transition-transform duration-300">Book a Call</span>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-white/60 rounded-full animate-pulse group-hover:animate-bounce"></div>
                  </span>
                </a>

                <a
                  href="https://wa.me/918929025869?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-4 xl:px-16 rounded-2xl font-semibold sm:font-bold text-base md:text-lg lg:text-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/30 border-2 border-sky-500/30 hover:border-sky-500/80 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-600/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-sky-500 hover:via-blue-500 hover:to-sky-600 overflow-hidden text-sky-600 hover:text-white"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-sky-600/20 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-sky-500/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-sky-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <span className="group-hover:scale-105 transition-transform duration-300">Drop a DM</span>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-sky-500/60 rounded-full animate-pulse group-hover:animate-bounce"></div>
                  </span>
                </a>
              </div>


              {/* Social Links */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 pt-20">
                {socials.map((social, index) => {
                  const gradientClasses = getGradientClasses(social.name)
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-[31%] sm:w-fit text-white ${gradientClasses.mobile} border ${gradientClasses.border} ${gradientClasses.text} md:hover:text-white ${gradientClasses.desktop} rounded-xl ${gradientClasses.hover} transition-all duration-300 hover:scale-105 md:backdrop-blur-sm md:shadow-lg`}
                      title={social.name}
                    >
                      <div className="flex justify-center items-center gap-1 px-[4vw] sm:px-6 py-3">
                        <social.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                        <span className="text-base lg:text-lg font-medium group-hover:text-white transition-colors duration-300">
                          {social.name}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right Content - Visual Element */}
            {/* <div className="relative hidden lg:block">
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
            </div> */}
          </div>
        </header>

        <section id="projects" className="mb-32">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm sm:text-base font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Projects
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-6 tracking-tight">
              Not just
              <span className="text-primary relative inline-block">
                <Link href="/projects" className="flex items-center">
                  projects
                  <ExternalLink className="w-6 h-6 ml-1" />
                </Link>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60"></div>
              </span>
              , but experiments in impact
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Showcasing ideas transformed into experiences that inspire curiosity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-primary bg-gradient-to-br from-background to-background/50 hover:border-primary/20 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-primary-dark to-primary backdrop-blur-sm text-white font-medium px-3 py-1 rounded-full text-xs sm:text-sm">
                      {project.type}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-gradient-to-r from-primary-dark to-primary backdrop-blur-sm p-2.5 rounded-lg hover:from-primary hover:to-primary-dark hover:scale-110 transition-all duration-300"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-gradient-to-r from-primary-dark to-primary backdrop-blur-sm p-2.5 rounded-lg hover:from-primary hover:to-primary-dark hover:scale-110 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>

                </div>

                <CardContent className="p-4">
                  <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs sm:text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-20 sm:mb-24 lg:mb-32">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Skills
            </div>
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">
              Not just
              <span className="text-primary relative inline-block">
                <Link href="/skills" className="flex items-center">
                  skills
                  <ExternalLink className="w-6 h-6 ml-1" />
                </Link>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60"></div>
              </span>
              , but superpowers in motion
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A toolkit of creativity and logic that turns challenges into opportunities.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-primary bg-gradient-to-br from-background to-background/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 rounded-2xl"
              >
                {/* Background accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColors(group.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <CardContent className="relative p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`
                        relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                        ${servicesOpenIndex === index
                        ? 'bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                        : 'bg-gradient-to-br from-primary/10 to-primary/20 text-primary hover:from-primary/20 hover:to-primary/30 group-hover:scale-105'
                      }
                      `}>
                      <div className="w-6 h-6 bg-white/90 rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {group.category}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {group.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${getCategoryColors(group.category)} rounded-full`}></div>
                        <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
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
              <span className="text-primary relative inline-block">
                <Link href="/services" className="flex items-center">
                  digital vision
                  <ExternalLink className="w-6 h-6 ml-1" />
                </Link>
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
              <Card className="border-primary border-primary bg-gradient-to-br from-background to-primary/5 hover:from-primary/5 hover:to-primary/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-[1.02]">

                <CardContent className="relative p-6 sm:p-12 lg:p-16 text-center">
                  <div className="max-w-3xl mx-auto">
                    {/* Animated Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium mb-6 animate-pulse">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-ping"></div>
                        Available for work
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 tracking-tight group-hover:scale-105 transition-transform duration-500">
                        Let&apos;s Build Something
                        <span className="text-primary relative inline-block">
                          {" "}Amazing
                          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-60 group-hover:scale-x-110 transition-transform duration-500"></div>
                        </span>
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                        Whether you have a project in mind or just want to chat about possibilities, I&apos;d love to hear from you.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
                      {/* Primary CTA Button */}
                      <a href="mailto:hello@pankajk.site" className="group/btn relative cursor-pointer inline-flex items-center justify-center px-[5vw] py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 border-2 border-transparent hover:border-primary/30 overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
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
                      <a href="https://calendly.com/hellopankajk/30min" className="group/btn2 relative cursor-pointer inline-flex items-center justify-center px-[5vw] py-3 sm:px-10 sm:py-4 rounded-xl font-semibol text-base md:text-lg transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 border-2 border-primary/30 hover:border-primary/80 bg-background/50 backdrop-blur-sm hover:bg-primary/10 overflow-hidden text-foreground">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl blur-lg opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover/btn2:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover/btn2:bg-primary group-hover/btn2:text-primary-foreground group-hover/btn2:rotate-12 transition-all duration-300">
                            <Calendar className="w-4 h-4 text-primary group-hover/btn2:text-primary-foreground group-hover/btn2:scale-110 transition-all duration-300" />
                          </div>
                          <span className="group-hover/btn2:scale-105 transition-transform duration-300">Talk To Us</span>
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
            <p className="text-muted-foreground text-sm md:text-base">© 2024 Pankaj Kumar. All rights reserved.</p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social flex flex-col items-center gap-3 p-3 text-white sm:text-primary hover:text-white bg-primary sm:bg-primary/10 rounded-xl hover:border-primary hover:bg-primary transition-all duration-300 hover:scale-105"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
