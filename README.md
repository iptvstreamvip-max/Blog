# [IPTV Restream](https://www.iptv-restream.vip) - Modern Full-Stack Blogging Platform

> A high-performance, SEO-optimized blogging platform built with Next.js and Strapi CMS

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Strapi](https://img.shields.io/badge/Strapi-5.31-2F2E8B?style=flat-square&logo=strapi)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [SEO Optimization](#seo-optimization)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## Overview

[IPTV Restream](https://www.iptv-restream.vip) is a **modern, scalable blogging platform** designed for content creators, developers, and businesses who want a fast, maintainable, and SEO-friendly solution. Built on a **headless CMS architecture**, it separates content management from presentation, enabling maximum flexibility and performance.

The platform features:

- **Server-side rendering** with Next.js for optimal SEO
- **Headless CMS** powered by Strapi for flexible content management
- **Dark mode support** for better user experience
- **Fully typed** with TypeScript for reliability
- **Responsive design** with Tailwind CSS
- **Real-time content updates** with automatic revalidation
- **Multi-author support** with permission management
- **Category and tag organization** for better discoverability

## Key Features

### 🚀 Performance

- **Server-side rendering** for faster page loads and better SEO
- **Automatic image optimization** with Next.js Image component
- **Progressive Web App (PWA)** ready
- **Page revalidation** for dynamic content updates
- **Analytics integration** with Vercel Analytics

### 🎨 User Experience

- **Dark/Light mode toggle** for comfortable reading
- **Responsive design** optimized for all devices
- **Smooth navigation** with top loader indicator
- **Accessible components** built with Radix UI
- **Pagination** for organized content browsing
- **Search functionality** for easy article discovery

### 📝 Content Management

- **Multiple content types**: Articles, Authors, Categories, and Global settings
- **Rich text editor** for flexible content creation
- **Media management** with optimized image handling
- **SEO metadata** (title, description, keywords) for each post
- **Scheduled publishing** capabilities
- **Author profiles** and biographical information

### 🔒 Administration

- **User authentication and authorization** with Strapi's built-in system
- **Role-based access control** (RBAC)
- **Admin dashboard** for content management
- **Version control** for content changes
- **Backup and migration** tools

## Technology Stack

### Frontend (Client)

- **Next.js 16** - React framework for production
- **React 19.2** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **React Markdown** - Markdown rendering
- **Lucide React** - Icon library
- **Tabler Icons** - Additional icon set
- **Motion 12** - Animation library

### Backend (Server)

- **Strapi 5.31** - Headless CMS
- **Node.js (18.0 - 22.x)** - JavaScript runtime
- **TypeScript 5** - Type-safe backend development
- **SQLite (better-sqlite3)** - Lightweight database

### DevTools & Build Tools

- **ESLint 9** - Code quality
- **PostCSS 4** - CSS processing
- **Vite** - Fast build tool (for admin panel)

## Project Structure

```
mohsin-blog/
├── client/                    # Next.js frontend application
│   ├── app/                   # App router pages and API routes
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── blogs/[page]/      # Blog listing with pagination
│   │   ├── blogpost/[slug]/   # Individual blog post
│   │   ├── admin/             # Admin routes
│   │   └── api/               # API route handlers
│   ├── components/            # Reusable React components
│   │   ├── ui/                # Base UI components
│   │   ├── sections/          # Page sections (hero, CTA, etc.)
│   │   ├── blocks/            # Content blocks (media, quote, etc.)
│   │   └── theme-provider.tsx # Theme configuration
│   ├── lib/                   # Utilities and type definitions
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
│
├── server/                    # Strapi CMS backend
│   ├── config/                # Server configuration
│   │   ├── api.ts             # API settings
│   │   ├── database.ts        # Database configuration
│   │   └── middlewares.ts     # Custom middlewares
│   ├── src/
│   │   ├── api/               # API collection types
│   │   │   ├── article/       # Blog articles
│   │   │   ├── author/        # Author profiles
│   │   │   ├── category/      # Article categories
│   │   │   ├── about/         # About page content
│   │   │   └── global/        # Global site settings
│   │   └── components/        # Strapi components
│   ├── scripts/               # Database seeding
│   ├── database/              # Migrations
│   └── package.json           # Backend dependencies
│
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** v18.0.0 or higher (up to v22.x.x)
- **npm** v6.0.0 or higher (or **yarn**, **pnpm**)
- **Git** for version control

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/iptvstreamvip-max/Blog.git
cd Blog
```

**2. Install dependencies for both client and server:**

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd ../server
npm install
```

**3. Set up environment variables:**

Create a `.env.local` file in the `client` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Create a `.env` file in the `server` directory:

```env
NODE_ENV=development
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-secret-keys-here
API_TOKEN_SALT=your-api-token-salt
JWT_SECRET=your-jwt-secret
```

## Development

### Start the development servers

**Terminal 1 - Backend (Strapi):**

```bash
cd server
npm run dev
```

Backend will run at `http://localhost:1337`

**Terminal 2 - Frontend (Next.js):**

```bash
cd client
npm run dev
```

Frontend will run at `http://localhost:3000`

### Access the Admin Dashboard

Navigate to `http://localhost:1337/admin` to access the Strapi admin panel.

### Database Seeding

To populate the database with sample content:

```bash
cd server
npm run seed:example
```

## Building for Production

### Build the frontend

```bash
cd client
npm run build
npm run start
```

### Build the backend

```bash
cd server
npm run build
npm run start
```

### Deployment Options

**Frontend Deployment:**

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (static export)

**Backend Deployment:**

- **Railway**
- **Render**
- **AWS EC2**
- **DigitalOcean**
- **Heroku**

## Configuration

### Next.js Configuration

Edit `client/next.config.ts` to customize:

- Image optimization settings
- Redirect rules
- Environment variables

### Strapi Configuration

Key configuration files in `server/config/`:

- **api.ts** - API endpoint settings
- **database.ts** - Database connection
- **middlewares.ts** - Request middleware

### Tailwind CSS Customization

Modify `client/tailwind.config.js` to customize:

- Color palette
- Font family
- Spacing scale
- Custom utilities

## SEO Optimization

This platform is built with **SEO best practices** in mind:

### ✅ Technical SEO

- **Server-side rendering** for optimal crawlability
- **Automatic XML sitemaps** generated from dynamic content
- **Robots.txt** for search engine directives
- **Meta tags** on every page (title, description, keywords)
- **Open Graph** and Twitter Card support
- **Structured data** (JSON-LD) for rich snippets
- **Mobile-friendly** responsive design
- **Fast loading times** with image optimization

### ✅ On-Page SEO

- **Semantic HTML** markup
- **Proper heading hierarchy** (H1, H2, H3)
- **Image alt text** support
- **Internal linking** between related posts
- **Custom URL slugs** for articles
- **Canonical tags** to prevent duplicate content

### ✅ Content Features

- **Markdown support** for flexible content formatting
- **Rich text editor** in Strapi
- **Category and tag system** for topic organization
- **Author information** for E-A-T signals
- **Publication dates** and timestamps
- **Reading time estimates**

### Configuration Example

```typescript
// Example: Adding meta tags to a blog post
export const metadata = {
  title: "Article Title",
  description: "Meta description for search engines",
  keywords: "relevant, keywords, here",
  openGraph: {
    title: "Article Title",
    description: "Meta description",
    image: "image-url",
  },
};
```

## Performance

The platform is optimized for high performance:

- **Next.js Image Optimization** - Automatic format selection and lazy loading
- **Code Splitting** - Automatic page and component splitting
- **Caching Strategies** - ISR (Incremental Static Regeneration) for dynamic content
- **API Response Caching** - Reduced server load
- **CSS Optimization** - Tailwind CSS purging unused styles
- **JavaScript Minification** - Optimized bundle sizes

### Lighthouse Scores Target

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Ensure TypeScript types are properly defined
- Test your changes locally
- Update documentation as needed

## Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Change port for Next.js
PORT=3001 npm run dev

# Change port for Strapi
PORT=1338 npm run dev
```

**Database errors:**

```bash
# Reset database
cd server
rm database.db
npm run dev
```

**Dependencies issues:**

```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

## API Reference

### Blog Posts

- `GET /api/articles` - Get all published articles
- `GET /api/articles/:slug` - Get article by slug
- `POST /api/articles` - Create new article (admin only)

### Authors

- `GET /api/authors` - Get all authors
- `GET /api/authors/:id` - Get author details

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/articles?category=slug` - Get articles by category

For detailed API documentation, visit `http://localhost:1337/documentation`

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## Support & Contact

- **GitHub Issues** - Report bugs and request features
- **Email** - iptvrestream.vip@gmail.com
- **Twitter** - [@iptv_restream](https://x.com/iptv_restream)
- **Blog** - https://www.iptv-restream.vip

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)

---

**Made with ❤️ by [Nawab Moazam](https://nawabwebfolio.vercel.app)**

Last Updated: December 3, 2025
