# Design System Documentation Index

Complete navigation guide for the StoreScan React Native Design System.

## 📑 Quick Navigation

### 🚀 Getting Started
- **[README.md](./README.md)** - Start here! Overview and quick start guide
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Fast lookup for common values and components

### 📖 Complete Documentation

| Document | Purpose | Best For |
|----------|---------|----------|
| **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** | Complete design specification | Understanding all design tokens, components, and guidelines |
| **[FIGMA_INTEGRATION.md](./FIGMA_INTEGRATION.md)** | Figma setup and integration | Setting up Figma and using Builder.io plugin |
| **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** | Detailed component examples | Learning how to use each component with code examples |
| **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)** | Current pages and their components | Understanding which components are used on each page |
| **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)** | Implementation roadmap | Planning and executing design system rollout |

### 💻 Code Files

| File | Purpose |
|------|---------|
| **[tokens.ts](./tokens.ts)** | Design tokens (colors, typography, spacing, sizing) |
| **[components/Button.tsx](./components/Button.tsx)** | Button component implementation |
| **[components/TextInput.tsx](./components/TextInput.tsx)** | Text input component implementation |
| **[components/Card.tsx](./components/Card.tsx)** | Card component implementation |
| **[components/Badge.tsx](./components/Badge.tsx)** | Badge components implementation |
| **[components/Typography.tsx](./components/Typography.tsx)** | Typography components implementation |
| **[components/index.ts](./components/index.ts)** | Components and tokens export |

---

## 🎯 Find What You Need

### I want to...

#### Use a Component
1. Read **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** for examples
2. Check **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** for quick lookup
3. View component file in `components/` folder
4. Review examples in **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)**

#### Set Up Figma
1. Read **[FIGMA_INTEGRATION.md](./FIGMA_INTEGRATION.md)** from start to finish
2. Follow the step-by-step setup guide
3. Reference component naming conventions
4. Connect with Builder.io plugin

#### Understand Color System
1. Check **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** Color Palette section
2. View `tokens.ts` for color values
3. Use **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** Color section

#### Understand Typography
1. Review **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** Typography System section
2. Use **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** Typography section
3. See examples in **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** Typography section

#### Learn Spacing System
1. Check **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** Spacing System section
2. View `tokens.ts` spacing values
3. Review examples in **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** Spacing section

#### Migrate an Existing Page
1. Read **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)** to see current state
2. Review **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** for component examples
3. Check **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)** Phase 3 for process

#### Plan System Rollout
1. Read **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)** completely
2. Review timeline and phases
3. Assign team roles and responsibilities

#### Create a New Component
1. Review existing components in `components/` folder
2. Check **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** for specifications
3. Use `tokens.ts` for all design values
4. Document in **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)**

#### Find a Design Value
1. Use **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** for fast lookup
2. Review `tokens.ts` for complete list
3. Check **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** for specifications

#### Review Current Implementation
1. Check **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)**
2. Review which pages use design system
3. See which components each page uses
4. Identify components that need creation

---

## 📚 Documentation Structure

```
design-system/
├── README.md                          # Overview & quick start
├── QUICK_REFERENCE.md                 # Fast lookup guide
├── DESIGN_SYSTEM.md                   # Complete specification
├── FIGMA_INTEGRATION.md               # Figma setup guide
├── COMPONENT_USAGE.md                 # Component examples
├── PAGE_COMPONENT_MAPPING.md          # Current pages mapping
├── IMPLEMENTATION_PLAN.md             # Rollout roadmap
├── INDEX.md                           # This file
├── tokens.ts                          # Design tokens
└── components/
    ├── Button.tsx                     # Button component
    ├── TextInput.tsx                  # Input component
    ├── Card.tsx                       # Card component
    ├── Badge.tsx                      # Badge components
    ├── Typography.tsx                 # Typography components
    └── index.ts                       # Exports
```

---

## 🔍 Key Concepts

### Design Tokens
**Location**: `tokens.ts` and **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**

Design tokens are the fundamental building blocks:
- **Colors** (26 total: primaries, neutrals, status colors)
- **Typography** (15 styles with size, weight, spacing)
- **Spacing** (7 scale: xs to 3xl)
- **Sizing** (buttons, inputs, icons, cards)
- **Border Radius** (4 sizes: sm to full)

### Reusable Components
**Location**: `components/` folder and **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)**

Pre-built components:
- **Button** - Multiple variants and sizes
- **TextInput** - With labels, error states
- **Card** - Multiple variants with padding
- **Badge** - Status badges in multiple variants
- **Typography** - Pre-configured text styles

### Design Patterns
**Location**: **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** and **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)**

Common patterns across pages:
- Form layouts
- Card lists
- Header patterns
- Empty states
- Error states

---

## 🎨 Design System Values

### Color Palette (26 colors)
- **Primary**: Blue, Dark Blue, Light Blue
- **Neutral**: Black, Dark, Medium, Light, Lighter, Pale, White
- **Status**: Success, Warning, Error, Info, Highlight

### Typography System (15 styles)
- **Display**: 34px, 500 weight
- **Headings**: 24px, 20px, 18px (all 500 weight)
- **Body**: 17px and 16px (various weights)
- **Labels**: 15px, 13px, 12px
- **Captions**: 10px and 8px

### Spacing Scale (7 values)
- xs (4px), sm (8px), md (12px), lg (16px), xl (20px), 2xl (24px), 3xl (32px)

### Sizing Standards
- Button: 50px (primary), 44px (secondary)
- Input: 50px height
- Icons: 12px (small), 24px (default), 28px (large)
- Border Radius: 4px, 7px, 10px, 12px, 50px

---

## 🚀 Common Tasks

### Task: Update All Text to Use Typography Components
1. Read **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** Typography section
2. Replace `<Text>` with appropriate component (Heading1, Body, etc.)
3. Use `color` prop instead of styling
4. Verify in **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)**

### Task: Create a New Page
1. Review **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)** for similar pages
2. Use **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** for examples
3. Check **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** for quick lookups
4. Use `spacing` for padding/margins
5. Use `colors` for all colors
6. Document in **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)**

### Task: Add New Color Token
1. Review **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** color section
2. Add to appropriate category in `tokens.ts`
3. Update **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** documentation
4. Create color style in Figma (if using)
5. Update **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)**

### Task: Create New Component
1. Review existing components in `components/` folder
2. Check **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** for specs
3. Implement using tokens from `tokens.ts`
4. Add to `components/index.ts` exports
5. Document in **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)**
6. Add to Figma design file

---

## 📋 Checklists

### Page Migration Checklist
- [ ] All text uses typography components
- [ ] All colors use `colors` tokens
- [ ] All spacing uses `spacing` tokens
- [ ] All buttons use Button component
- [ ] All cards use Card component
- [ ] No hardcoded values
- [ ] Tested on 320px and 480px+ widths
- [ ] Touch targets ≥ 44px
- [ ] Text contrast ≥ 4.5:1

### Component Creation Checklist
- [ ] Uses design tokens for all values
- [ ] Properly typed with TypeScript
- [ ] Supports all variants
- [ ] Accessible (44px touch targets)
- [ ] Properly documented
- [ ] Added to exports (`components/index.ts`)
- [ ] Examples in **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)**
- [ ] Added to Figma

### Figma Setup Checklist
- [ ] Color styles created (26 total)
- [ ] Typography styles created (15 total)
- [ ] Component main components created
- [ ] Page mockups created using components
- [ ] Naming conventions followed
- [ ] Shared with team
- [ ] Documentation complete

---

## 🔗 External Resources

### Official Documentation
- [React Native Docs](https://reactnative.dev)
- [Expo Router Docs](https://docs.expo.dev/router)
- [Figma Design Documentation](https://www.figma.com/design)
- [Builder.io Documentation](https://www.builder.io)

### Design System References
- [Design Tokens Format](https://design-tokens.github.io)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Material Design System](https://material.io)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

## 🆘 Getting Help

### Issue: Component not working as expected
1. Check **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** for examples
2. Review component code in `components/` folder
3. Check **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** for tips
4. Review **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)** for similar usage

### Issue: Design-code mismatch
1. Review **[FIGMA_INTEGRATION.md](./FIGMA_INTEGRATION.md)**
2. Check design tokens match between Figma and code
3. Verify color hex values in `tokens.ts`
4. Review **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** for specifications

### Issue: Spacing/sizing incorrect
1. Use **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** spacing section
2. Review `tokens.ts` spacing values
3. Check **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** spacing system
4. Verify using design tokens, not hardcoded values

### Issue: Color not matching
1. Check **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** colors section
2. Review color hex values in `tokens.ts`
3. Verify using `colors` token, not hardcoded hex
4. Check Figma color styles match code values

---

## 📈 Version History

### Version 1.0.0 (Current)
- ✅ Complete design tokens system
- ✅ Core components (Button, Input, Card, Badge, Typography)
- ✅ Comprehensive documentation
- ✅ Figma integration guide
- ✅ Implementation plan
- ✅ Page component mapping
- ✅ Component usage guide
- ✅ Quick reference guide

### Future Versions
- [ ] Dark mode support
- [ ] Animation guidelines
- [ ] Loading states and skeletons
- [ ] Additional component variants
- [ ] Storybook integration
- [ ] Component library website

---

## 📞 Contact & Support

### Questions About Design System
- Check relevant documentation file
- Review **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)**
- Check component code and comments

### Design Changes
- Update Figma design file
- Update corresponding code
- Update affected documentation
- Notify team of changes

### New Features or Components
- Document in **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)**
- Create component if needed
- Update **[PAGE_COMPONENT_MAPPING.md](./PAGE_COMPONENT_MAPPING.md)**
- Update Figma design file
- Add to this index if major change

---

## 🎯 Quick Start (TL;DR)

1. **Import components**: `import { Button, Card } from '@/design-system/components'`
2. **Use design tokens**: `color: colors.primary.blue`, `padding: spacing.lg`
3. **Read COMPONENT_USAGE.md** for detailed examples
4. **Check QUICK_REFERENCE.md** for fast lookups
5. **Review FIGMA_INTEGRATION.md** to set up Figma

---

**Last Updated**: 2024
**Design System Version**: 1.0.0
**Status**: ✅ Ready for Implementation

For questions or feedback, contact your design system team.
