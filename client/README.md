# [IPTV Restream](https://www.iptv-restream.vip) - Modern Headless CMS Blog Platform

## 📖 Overview

**[IPTV Restream](https://www.iptv-restream.vip)** is a modern, performant, and SEO-friendly blogging platform built with cutting-edge web technologies. It features a headless CMS architecture powered by **Strapi** as the content management backend and **Next.js 16** as the frontend, delivering an exceptional user experience with optimized content delivery and search engine visibility.

This full-stack solution enables content creators and publishers to manage, organize, and publish blog articles, business information, and marketing content with ease while maintaining enterprise-grade performance and scalability.

## 🎯 Key Features

### Content Management

- **Headless CMS Integration**: Powered by Strapi for flexible content management
- **Multiple Content Types**: Articles, blog posts, authors, categories, and global settings
- **Rich Text Editing**: Support for complex content with embedded media and formatting
- **Media Management**: Built-in image optimization and asset management
- **Content Revalidation**: Real-time content updates with automatic ISR (Incremental Static Regeneration)

### Frontend Excellence

- **SEO Optimized**: Built with Next.js metadata API for superior search engine rankings
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Theme switching with next-themes
- **Performance Optimized**: Static generation, streaming, and caching strategies
- **Fast Page Loads**: Optimized images with next/image and lazy loading

### User Experience

- **Smooth Navigation**: Progress bar with nextjs-toploader
- **Pagination**: Efficient blog pagination for better content discovery
- **Blog Search**: Dynamic blog exploration by category and author
- **Sitemap & Robots**: Automated sitemap generation for search engines
- **Analytics**: Integrated with Vercel Analytics for performance monitoring

### Developer Experience

- **TypeScript**: Full type safety across the stack
- **Modern Components**: Radix UI components with Tailwind styling
- **REST API**: Well-structured API routes for extensibility
- **Admin Dashboard**: Strapi admin interface for content management
- **Code Quality**: ESLint configuration for consistent code standards

## 🏗️ Architecture

### Full-Stack Structure

```
mohsin-blog/
├── client/              # Next.js 16 frontend application
│   ├── app/             # Next.js app router (pages, API routes)
│   ├── components/      # Reusable React components
│   ├── lib/             # Utilities, types, and helpers
│   └── public/          # Static assets
│
└── server/              # Strapi CMS backend
    ├── config/          # Strapi configuration files
    ├── src/api/         # API endpoints for content
    ├── data/            # Content data and uploads
    └── scripts/         # Database seeding scripts
```

### Tech Stack

**Frontend:**

- **Next.js 16**: React framework for production
- **React 19**: Latest React library with improved performance
- **TypeScript 5**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **next-themes**: Dark/light mode support
- **React Markdown**: Blog content rendering

**Backend:**

- **Strapi 5.31**: Open-source headless CMS
- **Better SQLite3**: Lightweight database engine
- **Node.js 18+**: JavaScript runtime

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 6.0.0 or higher
- Git (for version control)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iptvstreamvip-max/Blog.git
   cd Blog
   ```

2. **Install dependencies for the frontend:**

   ```bash
   cd client
   npm install
   ```

3. **Install dependencies for the backend:**
   ```bash
   cd ../server
   npm install
   ```

### Development Setup

#### Start the Backend (Strapi CMS)

```bash
cd server
npm run develop
```

The admin panel will be available at `http://localhost:1337/admin`

#### Start the Frontend (Next.js)

In a new terminal:

```bash
cd client
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

**Build frontend:**

```bash
cd client
npm run build
npm run start
```

**Build and deploy backend:**

```bash
cd server
npm run build
npm run start
```

## 📝 Content Structure

### Article/Blog Post Model

- **Title**: SEO-optimized title
- **Slug**: URL-friendly identifier
- **Content**: Rich text with multiple blocks
- **Author**: Author reference
- **Category**: Content categorization
- **Media**: Featured images and galleries
- **Meta Description**: SEO meta content
- **Published At**: Publishing timestamp

### Supported Content Blocks

- **Rich Text**: Formatted paragraphs with typography
- **Media**: Images and galleries with captions
- **Quote**: Highlighted quotes and testimonials
- **Slider**: Image carousels and galleries

## 🔍 SEO Features

### On-Page SEO

- **Meta Tags**: Automatic meta title and description generation
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Schema.org markup for rich snippets
- **Canonical URLs**: Duplicate content prevention

### Technical SEO

- **Sitemap**: Auto-generated `sitemap.ts` for search engines
- **Robots.txt**: Search engine crawling guidelines
- **Next.js Metadata API**: Modern Next.js SEO approach
- **Image Optimization**: Automatic image optimization with next/image
- **Mobile Responsive**: Mobile-first design approach
- **Fast Load Times**: Core Web Vitals optimization
- **Vercel Analytics**: Performance monitoring and optimization

### Content SEO

- **Clean URLs**: Slug-based routing (`/blogpost/[slug]`)
- **Internal Linking**: Related posts and category navigation
- **Pagination**: Multi-page blog listing with SEO best practices
- **Category Pages**: Organized content discovery
- **Author Pages**: Topic authority building

## 🎨 Features Showcase

### Pages

- **Home Page**: Hero section with services, pricing, about, FAQs, and CTA
- **Blog Listing**: Paginated blog posts with filtering
- **Blog Details**: Full article view with metadata
- **Category Pages**: Content filtered by category
- **Admin Dashboard**: Strapi admin interface

### Components

- **Navbar**: Responsive navigation with theme toggle
- **Footer**: Site-wide footer with links
- **Pagination**: Blog post navigation
- **Cards**: Content display components
- **Media Viewer**: Responsive image rendering
- **Skeleton Loaders**: Loading state UI
- **Theme Provider**: Dark/light mode support

## 🔌 API Endpoints

### Content Endpoints

- `GET /api/articles` - Fetch all blog articles
- `GET /api/articles/:id` - Fetch single article
- `GET /api/categories` - Fetch content categories
- `GET /api/authors` - Fetch author information
- `GET /api/about` - Fetch about page content
- `GET /api/global` - Fetch global settings

### Admin Endpoints

- `POST /admin/revalidate` - Trigger ISR content revalidation

## 🛠️ Configuration

### Environment Variables

Create `.env.local` in the client directory:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Next.js Configuration

See `next.config.ts` for build optimization and custom configurations.

### Tailwind Configuration

See `tailwind.config.js` for custom theme, colors, and plugin setup.

## 📊 Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **First Contentful Paint**: < 2.5s
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting

## 🔐 Security Features

- **Content Validation**: Server-side validation of all inputs
- **CORS Configuration**: Configured for secure cross-origin requests
- **Role-Based Access**: Strapi permissions and user roles
- **Environment Variables**: Sensitive data protection
- **SQL Injection Prevention**: Parameterized queries through Strapi ORM

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile latest

## 🚢 Deployment

### Frontend Deployment (Vercel Recommended)

```bash
cd client
npm run build
vercel deploy
```

### Backend Deployment

Deploy the server folder to your hosting provider (Render, Railway, Heroku, etc.)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved to the original author.

## 👨‍💻 Developer

- **[Nawab Moazam](https://nawabwebfolio.vercel.app)** - Full-stack developer building modern web applications with Next.js and Strapi.

## 💬 Support

For support, issues, or feature requests, please open an issue in the GitHub repository.

---

**Last Updated**: December 2025  
**Version**: 0.1.0  
**Status**: Active Development

### Getting Help

- 📖 Check the documentation files
- 🐛 Report bugs via GitHub Issues
- 💡 Suggest features via GitHub Discussions
- 📧 Contact the development team

---

**Keywords**: Blog Platform, Next.js, Strapi, Headless CMS, React, TypeScript, Full-Stack, SEO-Optimized, Content Management, Modern Web Development
