# 🛍️ TurboShop

A modern, high-performance e-commerce platform built with Next.js 16 and React 19. TurboShop delivers a seamless shopping experience with a beautiful UI, dark mode support, and a comprehensive component library.

## ✨ Features

### 🎨 **User Experience**

- **Modern Design System** - Built with shadcn/ui and Tailwind CSS v4
- **Dark/Light Mode** - Seamless theme switching with next-themes
- **Responsive Layout** - Optimized for all screen sizes
- **Smooth Animations** - Enhanced with tw-animate-css

### 🛒 **E-commerce Functionality**

- **Product Showcase** - Hero section with featured products
- **New Arrivals** - Latest products display
- **Category Browsing** - Organized product categories
- **Shopping Features** - Comprehensive shopping experience
- **Statistics Dashboard** - Business metrics and analytics
- **Newsletter Integration** - Email subscription functionality

### 🔧 **Developer Experience**

- **TypeScript** - Full type safety across the application
- **App Router** - Next.js 16 App Router for optimal performance
- **Route Groups** - Organized with (shop), (checkout), and (dashboard) groups
- **Component Library** - 48 reusable UI components from shadcn/ui
- **Form Handling** - React Hook Form integration
- **SEO Optimized** - Built-in sitemap and robots.txt

## 🚀 Tech Stack

### **Core**

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### **Styling**

- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives
- [Lucide Icons](https://lucide.dev/) - Icon library

### **Additional Libraries**

- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel functionality
- [Recharts](https://recharts.org/) - Data visualization
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- [Vaul](https://vaul.emilkowal.ski/) - Drawer component

## 📁 Project Structure

```
turbo-shop/
├── app/                      # Next.js App Router
│   ├── (shop)/              # Shop route group
│   │   ├── _components/     # Shop-specific components
│   │   │   ├── Hero.tsx
│   │   │   ├── NewArrivals.tsx
│   │   │   ├── Categories.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (checkout)/          # Checkout route group
│   ├── (dashboard)/         # Dashboard route group
│   ├── layout.tsx           # Root layout
│   ├── not-found.tsx        # 404 page
│   ├── robots.ts            # SEO robots configuration
│   └── sitemap.ts           # SEO sitemap configuration
├── components/              # Shared components
│   └── ui/                  # shadcn/ui components (48 components)
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Global styles
└── package.json            # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd turbo-shop
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 UI Components

TurboShop includes 48 pre-built UI components from shadcn/ui:

- **Layout**: Accordion, Card, Carousel, Separator, Sidebar, Tabs
- **Forms**: Button, Checkbox, Input, Label, Radio Group, Select, Slider, Switch, Textarea, Form
- **Feedback**: Alert, Alert Dialog, Dialog, Drawer, Toast (Sonner), Progress, Skeleton
- **Navigation**: Breadcrumb, Command, Dropdown Menu, Navigation Menu, Menubar, Pagination
- **Data Display**: Avatar, Badge, Calendar, Chart, Table, Tooltip, Hover Card
- **Utilities**: Aspect Ratio, Collapsible, Context Menu, Popover, Scroll Area, Sheet, Toggle

## 🌙 Dark Mode

TurboShop features automatic dark/light mode switching powered by `next-themes`. The theme preference is saved in local storage and persists across sessions.

## 📱 Responsive Design

All components and layouts are fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🔍 SEO

The project includes built-in SEO optimization:

- Dynamic sitemap generation (`app/sitemap.ts`)
- Robots.txt configuration (`app/robots.ts`)
- Optimized meta tags and Open Graph support
- Semantic HTML structure

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy TurboShop is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Other Platforms

TurboShop can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Google Cloud Run
- Railway
- DigitalOcean App Platform

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and component patterns when adding new features.

---

Built with ❤️ using Next.js and shadcn/ui
