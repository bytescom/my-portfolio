"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  const navItems = useMemo(() => [
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // 🌟 1) Background change
      setScrolled(scrollPosition > 10)

      // 🌟 2) Active section highlight
      let currentSection = navItems[0].id
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id)
        if (section && scrollPosition >= section.offsetTop - 100) {
          currentSection = navItems[i].id
          break
        }
      }
      setActiveSection(currentSection)
    }

    handleScroll() // Run once on mount
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-2 left-0 right-0 z-50 max-w-[71rem] mx-4 px-2 lg:mx-auto lg:px-4 rounded-[5px]
          ${isMenuOpen
            ? "bg-background/70" // ignore scroll if menu open
            : scrolled
              ? "bg-primary/10 shadow-md" // only apply scroll effect when menu is closed
              : "bg-background/70"
          }
        `}
      >
        <div className="flex justify-between items-center backdrop-blur-lg border-b border-primary/10 py-4">
          <div className="text-2xl font-bold text-primary cursor-pointer">
            Pankaj <span className="text-foreground">Kumar</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-colors duration-300 ${activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {item.name}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-primary transition-transform duration-300 origin-left ${activeSection === item.id
                    ? "scale-x-100"
                    : "scale-x-0"
                    }`}
                />
              </button>
            ))}

            {!isMenuOpen && (
            <a
              href="mailto:hello@pankajk.site"
              className="btn41-43 btn-43"
            >
              Get Started Now
            </a>
          )}
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-300 z-50"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>


      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-10 transition-transform duration-500 z-40 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Close button in mobile menu */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <X className="w-7 h-7" />
        </button>

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-3xl font-semibold transition-colors duration-300 ${activeSection === item.id
              ? "text-primary"
              : "text-foreground hover:text-primary"
              }`}
          >
            {item.name}
          </button>
        ))}

        <a href="mailto:hello@pankajk.site" className="btn41-43 btn-43 pt-10">
          Get Started Now
        </a>
      </div>
    </>
  );
}
