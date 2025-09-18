"use client"

import React from "react"
import { Code, ArrowLeft} from "lucide-react"
import Link from "next/link"

export default function Skills() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-6 pt-16">
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
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        Skills & Expertise
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                        Just
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 relative inline-block ml-2">
                            skills
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-80"></div>
                        </span>
                        , but superpower.
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                        A comprehensive toolkit of creativity and logic that turns challenges into opportunities.
                        Each skill is a building block for creating exceptional digital experiences.
                    </p>
                </div>


                {/* Coming Soon */}
                <div className="text-center mt-20">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Code className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {`“The more you learn, the more you earn.” — Warren Buffett`}
                    </p>
                </div>
            </div>
        </div>
    )
}