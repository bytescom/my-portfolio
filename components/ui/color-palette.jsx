import * as React from "react"
import { cn } from "@/lib/utils"

const ColorSwatch = ({ 
  name, 
  className, 
  description,
  ...props 
}) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-200">
      <div 
        className={cn("w-16 h-16 rounded-lg border border-border/20 shadow-sm", className)}
        {...props}
      />
      <div className="text-center">
        <p className="text-sm font-medium text-foreground">{name}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
}

export function ColorPalette({ className, ...props }) {
  const colorSwatches = [
    {
      name: "Primary",
      className: "bg-primary",
      description: "Main brand color"
    },
    {
      name: "Primary Light",
      className: "bg-primary-light",
      description: "Lighter variant"
    },
    {
      name: "Primary Dark",
      className: "bg-primary-dark",
      description: "Darker variant"
    },
    {
      name: "Accent",
      className: "bg-accent",
      description: "Subtle accent"
    },
    {
      name: "Accent Light",
      className: "bg-accent-light",
      description: "Very light accent"
    },
    {
      name: "Accent Dark",
      className: "bg-accent-dark",
      description: "Darker accent"
    },
  ]

  return (
    <div className={cn("space-y-6", className)} {...props}>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Purple Color Palette</h3>
        <p className="text-sm text-muted-foreground">
          Your custom purple color palette with various shades and tints
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {colorSwatches.map((swatch, index) => (
          <ColorSwatch
            key={index}
            name={swatch.name}
            className={swatch.className}
            description={swatch.description}
          />
        ))}
      </div>
    </div>
  )
}
