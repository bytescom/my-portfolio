# Purple Color Palette Guide

Your portfolio now features a comprehensive purple color palette based on your primary color `#8f5bbd`. Here's how to use all the new variants:

## 🎨 Color Variables

### Light Mode
- `--primary`: `oklch(0.65 0.15 300)` - Main purple (#8f5bbd)
- `--primary-light`: `oklch(0.75 0.12 300)` - Lighter purple variant
- `--primary-dark`: `oklch(0.55 0.18 300)` - Darker purple variant
- `--accent`: `oklch(0.95 0.05 300)` - Light purple accent
- `--accent-light`: `oklch(0.98 0.02 300)` - Very light purple accent
- `--accent-dark`: `oklch(0.85 0.08 300)` - Darker purple accent

### Dark Mode
- `--primary`: `oklch(0.75 0.15 300)` - Lighter purple for dark mode
- `--primary-light`: `oklch(0.8 0.12 300)` - Even lighter purple
- `--primary-dark`: `oklch(0.65 0.18 300)` - Darker purple
- `--accent`: `oklch(0.25 0.05 300)` - Dark purple accent
- `--accent-light`: `oklch(0.3 0.02 300)` - Very light purple accent
- `--accent-dark`: `oklch(0.2 0.08 300)` - Darker purple accent

## 🔘 Button Variants

### Purple is Now the Default!
```jsx
// Purple is now the default variant - no need to specify!
<Button>Purple Button</Button>

// Other purple variants available
<Button variant="purple-outline">Purple Outline</Button>
<Button variant="purple-ghost">Purple Ghost</Button>
<Button variant="purple-gradient">Purple Gradient</Button>
```

### All Variants
- `default` (purple): Your primary purple color - now the default!
- `purple`: Solid purple button with enhanced hover effects
- `purple-outline`: Purple outline button
- `purple-ghost`: Purple ghost button
- `purple-gradient`: Purple gradient button
- `outline`: Now has purple border and hover effects

## 🏷️ Badge Variants

### Purple is Now the Default!
```jsx
// Purple is now the default variant - no need to specify!
<Badge>Purple Badge</Badge>

// Other purple variants available
<Badge variant="purple-outline">Purple Outline</Badge>
<Badge variant="purple-light">Purple Light</Badge>
<Badge variant="purple-gradient">Purple Gradient</Badge>
```

### All Variants
- `default` (purple): Your primary purple color - now the default!
- `purple`: Solid purple badge
- `purple-outline`: Purple outline badge
- `purple-light`: Light purple background badge
- `purple-gradient`: Purple gradient badge

## 🃏 Card Variants

### Purple is Now the Default!
```jsx
// Purple is now the default variant - no need to specify!
<Card>Purple Card</Card>

// Other variants available
<Card variant="purple-outline">Purple Outline Card</Card>
<Card variant="purple-gradient">Purple Gradient Card</Card>
<Card variant="elevated">Elevated Card</Card>
```

### All Variants
- `default` (purple): Purple-themed card with subtle gradient - now the default!
- `purple`: Purple-themed card with subtle gradient
- `purple-outline`: Purple outline card
- `purple-gradient`: Purple gradient card
- `elevated`: Elevated card with enhanced shadows

## 🎨 Color Palette Component

Use the new `ColorPalette` component to showcase your color system:

```jsx
import { ColorPalette } from "@/components/ui/color-palette"

<ColorPalette />
```

## 🚀 Usage Examples

### In Your Portfolio
Your portfolio now uses purple as the default theme:

1. **Hero Section**: Purple gradient and outline buttons
2. **Project Cards**: Purple badges for project types (default)
3. **Skill Cards**: All purple cards (default)
4. **Service Cards**: All purple cards (default)
5. **Contact Section**: Purple and purple-outline buttons

### Custom Styling
You can also use the color variables directly in your CSS:

```css
.my-custom-element {
  background: oklch(var(--primary));
  border: 1px solid oklch(var(--primary-light));
  color: oklch(var(--primary-foreground));
}
```

## 🎯 Best Practices

1. **Primary Actions**: Use default (purple) or `purple-gradient` variants
2. **Secondary Actions**: Use `purple-outline` or `purple-ghost` variants
3. **Accents**: Use `purple-light` for subtle highlights
4. **Cards**: All cards are purple by default - use other variants for variety
5. **Badges**: All badges are purple by default - use `purple-gradient` for special emphasis

## 🌙 Dark Mode Support

All variants automatically adapt to dark mode with appropriate contrast adjustments. The purple colors become lighter in dark mode to maintain readability and visual hierarchy.

## ✨ Enhanced Features

- **Smooth Transitions**: All variants include smooth hover transitions
- **Shadow Effects**: Purple variants include subtle shadow effects
- **Gradient Support**: Beautiful gradient variants for premium feel
- **Accessibility**: All colors meet WCAG contrast requirements
- **Consistency**: Unified color system across all components

Your purple color palette is now fully integrated and ready to use throughout your portfolio!
