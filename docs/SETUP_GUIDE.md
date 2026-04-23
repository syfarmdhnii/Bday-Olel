# Stitch Retro Memory Scrapbook - React Application

A beautiful, production-ready React application inspired by the nostalgic romance of vintage scrapbooks. This project converts intricate design HTML files into fully functional React components with TypeScript support, Tailwind CSS styling, and a complete design system.

## 🎨 Project Overview

This is a modern React application built with:
- **React 18** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Material Symbols** - Beautiful icon library

### Design System: Nostalgic Romance

The application is built on a cohesive design system featuring:
- **Color Palette**: Rich, warm colors inspired by vintage letters and memories
- **Typography**: Three distinct font families (Noto Serif, Epilogue, Be Vietnam Pro)
- **Tactile Design**: Skeuomorphic elements mimicking physical scrapbook materials
- **Organic Imperfections**: Subtle rotations and hand-drawn flourishes

## 📁 Project Structure

```
stitch_retro_memory_scrapbook/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Button.tsx
│   │   ├── PolaroidCard.tsx
│   │   ├── WashiTape.tsx
│   │   ├── QuoteCard.tsx
│   │   ├── DecorativeIcon.tsx
│   │   ├── ContentSection.tsx
│   │   └── index.ts
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx
│   │   ├── MemoryBookView.tsx
│   │   ├── FinalInteraction.tsx
│   │   └── index.ts
│   ├── lib/                # Utilities and constants
│   │   ├── designTokens.ts
│   │   └── utils.ts
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
├── postcss.config.cjs      # PostCSS configuration
└── .gitignore
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone/Extract the project**
   ```bash
   cd stitch_retro_memory_scrapbook
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Key Features

### 1. **Reusable Components**
- `Header` - Sticky navigation with action buttons
- `Button` - Versatile button with multiple variants
- `PolaroidCard` - Scrapbook-style photo cards
- `WashiTape` - Decorative washi tape elements
- `QuoteCard` - Quote/message display cards
- `DecorativeIcon` - Icon elements with customization
- `ContentSection` - Container for page sections

### 2. **Pages**
- **Landing Page** - Hero section with memory cards and quotes
- **Memory Book View** - Flipbook-style interface
- **Final Interaction** - Closing/thank you page

### 3. **Design System Integration**
- Complete color palette from design specifications
- Typography system with 5 predefined styles
- Spacing and border radius tokens
- Custom Tailwind utilities

## 🎯 Usage Examples

### Using Components in a Page

```tsx
import React from 'react';
import { Header, Button, PolaroidCard } from '@/components';

export const MyPage: React.FC = () => {
  return (
    <>
      <Header title="My Page" />
      <main>
        <PolaroidCard
          image="path/to/image.jpg"
          title="Memory Title"
          rotation={-2}
        />
        <Button variant="primary" size="lg">
          Click Me
        </Button>
      </main>
    </>
  );
};
```

### Accessing Design Tokens

```tsx
import { COLORS, TYPOGRAPHY, SPACING } from '@/lib/designTokens';

const brandColor = COLORS.primary; // '#610000'
const headlineFont = TYPOGRAPHY.headlineLg;
const pageMargin = SPACING.margin_page; // '24px'
```

### Using Utility Functions

```tsx
import { cn, getRandomRotation, generateScrapbookRotation } from '@/lib/utils';

const classes = cn('base-class', condition && 'conditional-class');
const rotation = getRandomRotation(-2, 2);
const scrapbookStyle = generateScrapbookRotation();
```

## 🧭 Navigation

The application uses React Router v6 for client-side navigation:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | LandingPage | Main landing page with hero and cards |
| `/memory-book` | MemoryBookView | Interactive memory book interface |
| `/final` | FinalInteraction | Thank you/closing page |

## 🎨 Customization

### Modifying Colors

Edit `src/lib/designTokens.ts` to change the color palette:

```tsx
export const COLORS = {
  primary: '#NEW_COLOR',
  // ... other colors
};
```

Update `tailwind.config.ts` to match.

### Adjusting Typography

Modify the typography scales in `tailwind.config.ts`:

```tsx
fontSize: {
  "headline-lg": ["48px", { lineHeight: "1.2", ... }],
  // ... other sizes
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Export it from `src/pages/index.ts`
3. Add a new route in `src/App.tsx`

Example:
```tsx
import { NewPage } from '@/pages';

<Route path="/new-page" element={<NewPage />} />
```

## 📱 Responsive Design

The application is fully responsive with mobile-first design:
- **Mobile**: 1 column layouts
- **Tablet (md)**: 2-column grid layouts
- **Desktop**: Full multi-column grids

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive components
- Keyboard navigation support
- Material Symbols Outlined for consistent iconography

## 🧪 Best Practices Implemented

✅ TypeScript for type safety
✅ Component composition and reusability
✅ Design system tokens for consistency
✅ CSS-in-JS with Tailwind utilities
✅ Path aliases for clean imports
✅ ESM modules
✅ Hot Module Replacement (HMR) during development

## 🔧 Configuration

### Vite (`vite.config.ts`)
- React plugin for JSX/TSX support
- Development server on port 3000

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured (`@/`, `@components/`, etc.)
- ES2020 target

### Tailwind (`tailwind.config.ts`)
- Design system colors extended
- Custom typography utilities
- Spacing scale configured

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [React Router Documentation](https://reactrouter.com)

## 📄 License

This project is open source. Use it freely for your projects!

## 🤝 Support

For questions or issues, please check the component documentation within the source files. Each component has JSDoc comments explaining props and usage.

---

**Happy coding! Create beautiful scrapbook memories with React! 💖**
