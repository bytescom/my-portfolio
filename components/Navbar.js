"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

  const navItems = [
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" }
  ];

  const navMenuItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" }
  ];

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the section that's currently in view
      let currentSection = navItems[0].id; // Default to first section
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && scrollPosition >= section.offsetTop - 100) {
          currentSection = navItems[i].id;
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial call to set active section
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // Immediately set active section
    } else {
      console.log(`Section with id "${sectionId}" not found`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary cursor-pointer">
          Pankaj <span className="text-foreground">Kumar</span>
        </div>

        {/* Desktop Nav */}
         <div className="hidden md:flex space-x-8">
           {navItems.map((item) => (
             <button
               key={item.id}
               onClick={() => scrollToSection(item.id)}
               className={`relative font-medium transition-colors duration-300 ${
                 activeSection === item.id
                   ? "text-primary"
                   : "text-muted-foreground hover:text-primary"
               }`}
             >
               {item.name}
               {/* Underline animation */}
               <span
                 className={`absolute left-0 -bottom-1 h-0.5 w-full bg-primary transition-transform duration-300 origin-left ${
                   activeSection === item.id
                     ? "scale-x-100"
                     : "scale-x-0"
                 }`}
               />
             </button>
           ))}
         </div>

       {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
    </div>

    {/* Mobile Menu */}
       <div
         className={`md:hidden fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-10 transition-transform duration-500 ${
           isMenuOpen ? "translate-y-0" : "-translate-y-full"
         }`}
       >
         {navMenuItems.map((item) => (
           <button
             key={item.id}
             onClick={() => scrollToSection(item.id)}
             className={`text-3xl font-semibold transition-colors duration-300 ${
               activeSection === item.id
                 ? "text-primary"
                 : "text-foreground hover:text-primary"
             }`}
           >
             {item.name}
           </button>
         ))}
       </div>
    </nav>
  );
}
