# StoreScan Design System

## Overview
This design system provides a comprehensive set of design tokens, components, and guidelines for the StoreScan React Native application. It ensures consistency, maintainability, and scalability across all screens and features.

## 1. Design Tokens

### Color Palette

#### Primary Colors
- **Primary Blue**: `#2F80ED` - Primary action color (buttons, active states, key UI elements)
- **Primary Dark Blue**: `#125DCE` - Darker shade for gradients and hover states
- **Light Blue**: `#6E85E3` - Secondary blue for links and secondary actions

#### Neutral Colors
- **Black**: `#000000` - Headings and strong contrast text
- **Dark Gray**: `#333333` - Primary text color
- **Medium Gray**: `#808080` - Secondary text, labels
- **Light Gray**: `#BDBDBD` - Borders and dividers
- **Lighter Gray**: `#E3EBF8` - Light backgrounds, inactive states
- **Pale Gray**: `#F1F1F1` - Component backgrounds
- **White**: `#FFFFFF` - Primary background

#### Status & Semantic Colors
- **Success Green**: `#2F80ED` - Completed/checkmark states
- **Warning/Pending Orange**: `#F49B17` - Pending activities, warnings
- **Error Red**: `#E7343E` - Errors, alerts, notifications
- **Highlight Yellow**: `#FFCC2B` - Highlights, badges
- **Info Blue**: `#478FF7` - Informational elements

#### Gradient Colors
- **Primary Gradient**: `#125DCE` to `#2F80ED` - Used in progress circles and key visual elements

### Typography System

#### Font Families
- **iOS System**: `system-ui`, `ui-serif`, `ui-rounded`, `ui-monospace`
- **Android/Default**: System fonts with fallbacks
- **Web**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`

#### Font Sizes & Weights
- **Display/Title**: 34px, weight 500 (Login titles, main headings)
- **Heading 1**: 24px, weight 500 (App title, section headers)
- **Heading 2**: 20px, weight 500 (Screen titles, card titles)
- **Heading 3**: 18px, weight 500 (Section titles, subsection headers)
- **Body Large**: 17px, weight 400 (Primary body text, inputs)
- **Body Medium**: 16px, weight 400 (Standard body text)
- **Body Semibold**: 16px, weight 600 (Highlighted text, labels)
- **Label Large**: 15px, weight 400 (Secondary labels, small text)
- **Label Medium**: 13px, weight 400 (Metadata, subtitles)
- **Label Small**: 12px, weight 500 (Captions, badge text)
- **Caption**: 10px, weight 400 (Smallest text, hints)

#### Letter Spacing
- Standard: `-0.15px` to `-0.2px` (for 16-17px sizes)
- Headlines: `-0.24px` to `-0.34px` (for 24-34px sizes)
- Small text: `-0.1px` to `-0.12px` (for 10-12px sizes)

### Spacing System

#### Base Unit: 4px grid

- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px (primary horizontal padding)
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 32px

### Sizing System

#### Component Sizes
- **Button Height**: 50px (primary), 44px (secondary)
- **Input Height**: 50px
- **Icon Size**: 24px (standard), 28px (navigation), 12px (small indicators)
- **Avatar/Badge**: 13px-24px (varies by context)

#### Screen Spacing
- **Horizontal Padding**: 16px (default screen padding)
- **Vertical Gaps**: 8px-24px (depends on context)

### Border Radius

- **sm**: 4px (small UI elements)
- **md**: 7px-8px (cards, inputs, activity cards)
- **lg**: 10px-12px (buttons, large cards, modals)
- **full**: 50px-100px (rounded pills, full circles)

### Opacity & States

- **Disabled**: 0.4 - 0.6 opacity
- **Hover/Pressed**: Slightly darker or with slight opacity change
- **Border Opacity**: 0.15 (subtle borders)

## 2. Component Library

### Button
**Primary Button**
- Background: `#2F80ED`
- Text: White, 17px, weight 500
- Height: 50px
- Padding: 15px vertical, 20px horizontal
- Border Radius: 10px
- Border: 1px `rgba(0, 0, 0, 0.15)`

**Variant**: Secondary button (text only, blue text `#6E85E3`)

### TextInput / Input Field
- Height: 50px
- Border: 1px `rgba(0, 0, 0, 0.15)`
- Border Radius: 10px
- Padding: 20px horizontal
- Font: 17px, weight 400
- Placeholder Color: `#BDBDBD`
- Background: `#FFFFFF`

### Card Components

**StoreCard**
- Padding: 20px
- Border: 1px `#BDBDBD`
- Border Radius: 12px
- Layout: Horizontal flexbox with icon, content, and visit badge
- Status Icon: Checkmark (completed) or Clock (pending)

**ContactCard**
- Padding: 20px
- Border: 1px `#B0B0B0`
- Border Radius: 10px
- Contains: Label, name, phone number

**ActivityCard**
- Container: 109px × 109px
- Background: `#F1F1F1`
- Border Radius: 8px
- Icon centered in container
- Label below: 12px, weight 500

### Badge Components

**Status Badge** (Visit count)
- Width: 36px, Height: 39px
- Text: `10px weight 500` (count) + `8px weight 400` (label)
- Centered alignment

**Notification Badge**
- Size: 13px × 13px
- Background: `#E7343E`
- Border Radius: 6.5px
- Text: `8px weight 700` white

**Month Badge**
- Inactive: `#E3EBF8` background, `#294FB8` text
- Active: `#2F80ED` background, white text
- Width: 54px, Height: 50px
- Border Radius: 7px

### Progress Component

**Circular Progress**
- Size: 144px × 144px
- Background Circle: `#E9E9FF`, 12px stroke
- Progress Circle: Gradient `#125DCE` to `#2F80ED`, 12px stroke
- Inner Text: "Completed", large number, "Target: X"

### Tab Component

**Tabs**
- Inactive: `#828282`, 17px, weight 400
- Active: `#333333`, 17px, weight 700
- Underline: 2px `#333333` (varies by content width)
- Bottom Border: 1px `#BDBDBD`

### List & Navigation

**Status Bar** (Custom)
- Height: 44px
- Time: 17px, weight 600, `#333333`
- Status Icons: Signal bars, WiFi, battery
- All centered and spaced appropriately

## 3. Page Patterns

### Login Screen
- Full screen, centered content
- Hero image at top (optional)
- Form inputs stacked vertically
- Primary button at bottom
- Sign-up link below button

### Dashboard/Home
- Status bar at top
- Header with title and icons (notification, menu)
- Scrollable content area with:
  - Month selector (horizontal scroll)
  - Tab navigation
  - Circular progress chart
  - List of store cards

### Store Detail
- Custom header with back button and title
- Map/image section
- Contact information card
- Activities grid (3 columns)
- CTA button (Check In, Start Imaging)

### Explore/Info Screens
- ParallaxScrollView with header image
- Collapsible sections
- Text and links

## 4. Spacing Rules

### Screen Level
- Horizontal: 16px padding on all sides
- Content area: Gap of 8-24px between sections
- Bottom spacing: 20-30px (buttons and content)

### Component Level
- Card padding: 20px
- Input gap: 20px (between multiple inputs)
- List gap: 12px (between list items)
- Icon-text gap: 8-12px

### Typography Spacing
- Title + Subtitle: 2px gap
- Heading + Body: 8px gap
- Body text line height: 24px (for 16px text)

## 5. Component Accessibility

- Minimum touch target: 44px × 44px
- Color contrast: Minimum 4.5:1 for text
- Text scaling: Supports up to 200% text scaling
- Navigation: Clear back buttons and navigation hierarchy

## 6. Figma Mapping Guide

### How to Create Design System in Figma

1. **Create Main Components**
   - Create a "Components" frame
   - Create sub-frames for: Colors, Typography, Buttons, Inputs, Cards, Badges, Progress, Tabs

2. **Colors**
   - Create color swatches using Figma's native color system
   - Name them: `Color/Primary`, `Color/Neutral/Dark Gray`, `Color/Status/Success`, etc.
   - Set them as shared color styles

3. **Typography**
   - Create text styles for each size and weight
   - Name: `Typography/Display`, `Typography/Body Large`, `Typography/Label Small`, etc.
   - Use Figma's typography system

4. **Components**
   - Create main components for each UI element
   - Use Auto Layout for responsive design
   - Set component properties for variants (size, state, etc.)

5. **Export Variants**
   - Button: Primary, Secondary, Disabled
   - Input: Default, Focused, Error, Disabled
   - Badge: Success, Warning, Error
   - Card: Default, Active, Completed

6. **Connect with Builder.io**
   - Use the Builder.io Figma plugin to convert designs to code
   - Map Figma components to React Native components
   - Ensure design tokens in Figma match constants in React Native code

### Component Naming Convention for Figma

```
ComponentType/Variant/State
Example:
- Button/Primary/Default
- Button/Primary/Pressed
- Button/Secondary/Default
- Input/Text/Default
- Input/Text/Focused
- Card/Store/Completed
- Card/Store/Pending
- Badge/Status/Success
```

## 7. Developer Handoff Checklist

- [ ] All colors mapped to `constants/theme.ts`
- [ ] All typography defined in component styles
- [ ] All spacing values documented
- [ ] Component props and variants defined
- [ ] Responsive breakpoints tested
- [ ] Dark mode support (if applicable)
- [ ] Accessibility compliance verified
- [ ] Figma design file shared with team
- [ ] Builder.io integration configured

## 8. Future Enhancements

- Dark mode color variations
- Additional animation guidelines
- Micro-interaction patterns
- Loading states and skeletons
- Empty states and error boundaries
- Onboarding flow components
