# Atomic Design Structure

This project follows Brad Frost's Atomic Design methodology, organizing components into five distinct levels:

## Atoms

The basic building blocks of our interface. These are the smallest functional units.

**Location:** `src/components/atoms/`

-   **Button.tsx** - Reusable button component with variants (primary, secondary, outline)
-   **Logo.tsx** - Brand logo with glitch effect styling
-   **NavItem.tsx** - Navigation Menu items
-   **StarIcon.tsx** - Sparkle icon for benefit items

## Molecules

Simple groups of UI elements functioning together as a unit.

**Location:** `src/components/molecules/`

-   **SaleBanner.tsx** - Combines rocket icon and sale text
-   **BenefitItem.tsx** - Combines star icon and benefit text
-   **Navigation.tsx** - Navigation links group

## Organisms

Relatively complex UI components composed of groups of molecules and/or atoms.

**Location:** `src/components/organisms/`

-   **Header.tsx** - Combines logo and navigation
-   **BenefitsList.tsx** - List of benefit items
-   **PhoneMockup.tsx** - Complex phone interface with app preview

## Templates

Page-level objects that place components into a layout and articulate the design's underlying content structure.

**Location:** `src/components/templates/`

-   **LandingTemplate.tsx** - Complete landing page layout combining all organisms

## Pages

Specific instances of templates that show what a UI looks like with real representative content.

**Location:** `src/app/page.tsx`

-   **Home Page** - Uses LandingTemplate with actual content

## Usage

```tsx
// Import individual components
import { Button, Logo, Header } from '@/components';

// Or import specific components
import LandingTemplate from '@/components/templates/LandingTemplate';
```

## 📱 Responsive Breakpoints

-   **Mobile:** < 640px
-   **Tablet:** 640px - 1024px
-   **Desktop:** > 1024px

## 🎯 Key Features

-   ✅ Atomic Design methodology
-   ✅ Fully responsive design
-   ✅ TypeScript support
-   ✅ Tailwind CSS v4
-   ✅ Modern React patterns
-   ✅ Accessibility considerations
-   ✅ Performance optimized

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
