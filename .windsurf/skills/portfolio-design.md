---
description: Design system and component patterns for Adhit's portfolio website
tools: []
---

# Adhit Portfolio Design System

## Color Palette
- **Background**: #0D0D0D (near-black)
- **Foreground**: #FFFFFF (white text)
- **Muted**: #A3A3A3 (secondary text)
- **Card**: #1A1A1A (card backgrounds)
- **Accent**: #C084FC (purple highlight)
- **Success**: #22C55E (green indicators)

## Typography
- **Font**: Inter, system-ui, sans-serif
- **Hero**: 56px-72px, weight 700-800
- **Subtitle**: 20px-24px, weight 600
- **Body**: 14px-18px, weight 300-400

## Component Patterns

### Navigation
- Sticky navbar with blur background (backdrop-blur-md)
- Rounded pill-shaped container (rounded-full)
- Links with hover opacity transition

### Hero Section
- Large headline with typing animation for dynamic roles
- Gradient text effect on accent elements
- CTA buttons with hover scale effect

### Project Cards
- Dark card background (#1A1A1A)
- Rounded corners (rounded-2xl, 16px)
- Hover: scale(1.02) with shadow lift
- Image with overflow hidden

### Filter Tabs
- Pill-shaped buttons
- Active state: accent background
- Inactive: transparent with border

### Scroll Animations
- Fade-in from bottom on scroll
- Staggered children animations
- Smooth scroll behavior

## Animation Specifications
- **Typing**: 3.5s steps(40, end)
- **Fade Up**: opacity 0→1, y: 30→0, duration 0.6s
- **Hover Scale**: scale 1→1.02, duration 0.3s
- **Stagger**: delay 0.1s between items
