import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-0 rounded-xl border p-0 m-0 shadow-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-border",
        purple: "border-primary bg-gradient-to-br from-card to-primary/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
        "purple-outline": "border-primary/30 bg-transparent hover:border-primary/50 hover:bg-primary/5",
        "purple-gradient": "border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20",
        elevated: "border-border shadow-lg hover:shadow-xl transition-all duration-200",
      },
    },
    defaultVariants: {
      variant: "purple",
    },
  }
)

function Card({
  className,
  variant,
  ...props
}) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props} />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-0 p-0 m-0 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-0",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none text-primary font-semibold", className)}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("p-0 m-0", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-0 m-0 [.border-t]:pt-0", className)}
      {...props} />
  );
}

export {
  Card,
  cardVariants,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
