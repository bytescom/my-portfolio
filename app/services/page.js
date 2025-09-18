"use client"

import React from "react"
import { ArrowLeft, Wrench } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground md:text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            My Services
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
            How I can help bring your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 relative inline-block ml-2">
              digital vision
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-80"></div>
            </span>{" "}
            to life
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            From crafting seamless user experiences to building secure, scalable applications — I turn ideas into impactful digital products. 
            Here&apos;s what I can do for you.
          </p>
        </div>

        {/* Placeholder Services Section */}
        <div className="text-center py-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wrench className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Services Coming Soon</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            I&apos;m currently putting together a detailed list of services I offer. Check back soon to discover how I can help your business grow.
          </p>
        </div>
      </div>
    </div>
  )
}
