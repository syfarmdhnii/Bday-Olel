# 📖 File Guide - Where to Look First

## 🎯 Start Here (In This Order)

### 1. QUICK_START.md ⭐
**Purpose**: Get running in 3 steps
**Time**: 2 minutes
**Do this first**: Install dependencies and start dev server

### 2. Project Overview
- `src/App.tsx` - Main app with routes
- `src/pages/` - The 3 pages (Landing, Memory Book, Final)
- `tailwind.config.ts` - Design system colors and fonts

### 3. Create Your First Component
- `src/components/` - Copy an existing component as template
- `src/lib/designTokens.ts` - Use these tokens in your component

### 4. Production Build
```bash
npm run build
npm run preview
```

## 📂 Key Files by Purpose

### Getting Started
| File | Purpose | Action |
|------|---------|--------|
| `QUICK_START.md` | Quick reference | ⭐ Read first |
| `SETUP_GUIDE.md` | Full documentation | Read for details |
| `PROJECT_SUMMARY.md` | Complete overview | Reference |
| `package.json` | Dependencies | Run `npm install` |

### Development - Configuration
| File | Purpose | Edit to... |
|------|---------|-----------|
| `vite.config.ts` | Build configuration | Change port, plugins |
| `tsconfig.json` | TypeScript settings | Add path aliases |
| `tailwind.config.ts` | Design system | Add colors, fonts, sizes |
| `index.html` | HTML template | Change title, add fonts |

### React Components
| File | Purpose | Use for... |
|------|---------|-----------|
| `src/components/Header.tsx` | Navigation bar | Page headers |
| `src/components/Button.tsx` | Interactive button | CTAs, actions |
| `src/components/PolaroidCard.tsx` | Photo card | Memory photos |
| `src/components/QuoteCard.tsx` | Quote display | Quotes, messages |
| `src/components/WashiTape.tsx` | Decoration | Tape effects |
| `src/components/DecorativeIcon.tsx` | Icons | Material Symbols |

### Pages
| File | Purpose | Route |
|------|---------|-------|
| `src/pages/LandingPage.tsx` | Hero section | `/` |
| `src/pages/MemoryBookView.tsx` | Memory interface | `/memory-book` |
| `src/pages/FinalInteraction.tsx` | Thank you page | `/final` |

### Utilities & Constants
| File | Purpose | Contains |
|------|---------|----------|
| `src/lib/designTokens.ts` | Design constants | Colors, fonts, spacing |
| `src/lib/utils.ts` | Helper functions | cn(), getRandomRotation(), etc |
| `src/types/index.ts` | TypeScript types | IMemoryCard, IQuote, etc |
| `src/index.css` | Global styles | Tailwind directives |

### Other Important
| File | Purpose | Use |
|------|---------|-----|
| `.gitignore` | Git ignore rules | Don't commit node_modules |
| `.env.example` | Environment template | Copy to `.env` |
| `eslint.config.js` | Code quality | Run `npm run lint` |
| `postcss.config.cjs` | CSS processing | Auto-configured |

## 🔥 Common Tasks & Where to Find Them

### "I want to change the colors"
→ Edit: `src/lib/designTokens.ts` → `COLORS`
→ Update: `tailwind.config.ts` → colors section

### "I want to add a new page"
→ Create: `src/pages/MyPage.tsx`
→ Add route in: `src/App.tsx`
→ Export from: `src/pages/index.ts`

### "I want to create a new component"
→ Create: `src/components/MyComponent.tsx`
→ Export from: `src/components/index.ts`
→ Use import: `import { MyComponent } from '@/components'`

### "I want to add fonts"
→ Update: `index.html` → `<link>` tags
→ Update: `tailwind.config.ts` → fontFamily

### "I want to change button styles"
→ Edit: `src/components/Button.tsx`
→ Or create new variant in CSS/Tailwind

### "I want to add a new route"
→ Create page in: `src/pages/`
→ Add route in: `src/App.tsx`
→ Link from: Navigation components

### "I want to build for production"
→ Run: `npm run build`
→ Output: `dist/` folder
→ Deploy: Upload `dist/` to hosting

## 📱 Component Props Quick Reference

### Header
```tsx
<Header 
  title="Page Title"
  subtitle="Optional subtitle"
  showButtons={true}
  onFavorite={() => {}}
  onShare={() => {}}
/>
```

### Button
```tsx
<Button 
  variant="primary|secondary|outline"
  size="sm|md|lg"
  icon="material_icon_name"
  onClick={() => {}}
>
  Click Me
</Button>
```

### PolaroidCard
```tsx
<PolaroidCard
  image="image-url"
  imageAlt="alt text"
  title="Card Title"
  rotation={-2}
/>
```

### QuoteCard
```tsx
<QuoteCard
  quote="The quote text"
  author="Author Name"
  authorImage="author-image-url"
/>
```

### DecorativeIcon
```tsx
<DecorativeIcon
  icon="favorite"
  size="sm|md|lg|xl"
  color="text-primary"
  rotation={0}
  fill={false}
/>
```

## 🚀 Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
npm install      # Install dependencies (first time only)
```

## 💡 Pro Tips

1. **Path Aliases**: Use `@/components` instead of `../../../components`
2. **Hot Reload**: Changes appear instantly - no manual refresh needed
3. **TypeScript**: Hover over components to see their props
4. **Tailwind**: Type `text-` in JSX and get auto-complete suggestions
5. **Color Tokens**: Define colors once in `designTokens.ts`, use everywhere
6. **Icons**: Browse Material Symbols at fonts.google.com/icons
7. **Components**: Each component is about 50-100 lines - easy to understand
8. **Pages**: Copy existing page structure and modify

## 📚 Files by Importance

### Tier 1 (Critical - Read First)
1. `QUICK_START.md` - How to start
2. `package.json` - What's installed
3. `src/App.tsx` - Main app structure

### Tier 2 (Core - Study Second)
4. `src/pages/LandingPage.tsx` - Example page
5. `src/components/Button.tsx` - Example component
6. `src/lib/designTokens.ts` - Design values

### Tier 3 (Reference)
7. `tailwind.config.ts` - Styling setup
8. `tsconfig.json` - TypeScript config
9. Other utility files

## 🎓 Learning Path

1. **Day 1**: Read QUICK_START.md, run `npm run dev`, explore pages
2. **Day 2**: Modify content in existing components
3. **Day 3**: Create a new component following the pattern
4. **Day 4**: Create a new page and route
5. **Day 5**: Customize colors and fonts

---

**Need help?** Check the relevant file above or look at existing code for examples!
