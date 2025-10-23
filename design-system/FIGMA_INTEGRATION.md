# Figma to React Native Design System Integration

This guide explains how to set up your Figma design file to work seamlessly with your React Native design system and how to use the Builder.io plugin to convert designs to code.

## Overview

The StoreScan design system is built with a clear separation between:
- **Design tokens** (colors, typography, spacing, sizing)
- **Reusable components** (Button, Input, Card, Badge, Typography)
- **Page templates** (Login, Dashboard, Store Detail)

This document shows how to mirror this structure in Figma and leverage it for efficient design-to-code workflows.

## Part 1: Setting Up Figma Design System

### 1.1 Create a Design System File Structure

In your Figma workspace, create a main file called "StoreScan Design System" with the following structure:

```
StoreScan Design System (File)
├── Styles (Page)
│   ├── Colors
│   ├── Typography
│   ├── Effects & Shadows
│   └── Grids & Guides
├── Components (Page)
│   ├── Buttons
│   ├── Inputs
│   ├── Cards
│   ├── Badges
│   ├── Progress
│   ├── Navigation
│   └── Typography
├── Pages (Page)
│   ├── Login
│   ├── Dashboard
│   ├── Store Detail
│   ├── Explore
│   └── Imaging
└── Assets (Page)
    ├── Icons
    ├── Illustrations
    └── Images
```

### 1.2 Create Color Styles

#### Steps:
1. Go to the "Styles" page
2. Create a frame called "Colors"
3. Create color swatches using rectangles or the color picker

#### Color Organization:

**Primary Colors**
```
Color/Primary/Blue → #2F80ED
Color/Primary/Dark Blue → #125DCE
Color/Primary/Light Blue → #6E85E3
```

**Neutral Colors**
```
Color/Neutral/Black → #000000
Color/Neutral/Dark → #333333
Color/Neutral/Medium → #808080
Color/Neutral/Light → #BDBDBD
Color/Neutral/Lighter → #E3EBF8
Color/Neutral/Pale → #F1F1F1
Color/Neutral/White → #FFFFFF
```

**Status Colors**
```
Color/Status/Success → #2F80ED
Color/Status/Warning → #F49B17
Color/Status/Error → #E7343E
Color/Status/Info → #478FF7
Color/Status/Highlight → #FFCC2B
```

#### How to Create Color Styles in Figma:
1. Select a shape with the color you want to save
2. Right-click and select "Create color style"
3. Name it following the pattern above (e.g., "Color/Primary/Blue")
4. The style will automatically appear in your library

### 1.3 Create Typography Styles

#### Steps:
1. Create text layers with each typography variant
2. Right-click on the text layer → "Create typography style"
3. Name following the pattern: `Typography/{Size}/{Weight}`

#### Typography Variants to Create:

**Display & Headings**
```
Typography/Display/Title → 34px, weight 500, letter-spacing -0.34
Typography/Heading/H1 → 24px, weight 500, letter-spacing -0.24
Typography/Heading/H2 → 20px, weight 500, letter-spacing -0.2
Typography/Heading/H3 → 18px, weight 500, letter-spacing -0.18
```

**Body Text**
```
Typography/Body/Large → 17px, weight 400, letter-spacing -0.17
Typography/Body/Large Semibold → 17px, weight 500, letter-spacing -0.17
Typography/Body/Regular → 16px, weight 400, letter-spacing -0.15
Typography/Body/Semibold → 16px, weight 600, letter-spacing -0.15
```

**Labels & Captions**
```
Typography/Label/Large → 15px, weight 400, letter-spacing -0.15
Typography/Label/Medium → 13px, weight 400, letter-spacing -0.13
Typography/Label/Small → 12px, weight 500, letter-spacing -0.12
Typography/Caption/Small → 10px, weight 400, letter-spacing -0.1
Typography/Caption/Tiny → 8px, weight 700, letter-spacing -0.08
```

### 1.4 Create Component Main Components

#### Button Components

Create a "Buttons" component frame with these variants:

**Primary Button**
- Size: 50px height
- Padding: 15px (vertical), 20px (horizontal)
- Border radius: 10px
- Fill: Color/Primary/Blue
- Text: "Button Text" with Typography/Body/Large Semibold, White

**Secondary Button**
- Size: 50px height
- Fill: Color/Neutral/Lighter
- Border: 1px Color/Neutral/Light
- Text: Dark color

**Text Button**
- No background
- Text: Color/Primary/Light Blue

**Disabled State**
- Opacity: 40%
- All variants

#### Steps in Figma:
1. Design each button variant
2. Create a component for each (Right-click → "Create component")
3. Name: `Button/Primary` `Button/Secondary` `Button/Text`
4. For variants, use Figma's "Edit main component" → "Variants" tab
5. Add property: `Type` with values: `Primary`, `Secondary`, `Text`
6. Add property: `State` with values: `Default`, `Disabled`, `Pressed`

#### Input Components

**Text Input**
- Height: 50px
- Border: 1px rgba(0,0,0,0.15)
- Border radius: 10px
- Padding: 20px horizontal
- Placeholder text in Color/Neutral/Light

**Variants:**
- State: Default, Focused, Error, Disabled

#### Card Components

**Store Card**
- Padding: 20px
- Border: 1px Color/Neutral/Light
- Border radius: 12px
- Layout: Row with icon, content, badge

**Contact Card**
- Padding: 20px
- Border: 1px Color/Neutral/Medium
- Border radius: 10px

**Activity Card**
- Size: 109px × 109px
- Border radius: 8px
- Background: Color/Neutral/Pale

#### Badge Components

**Status Badge**
- Multiple variants: Success, Warning, Error, Info, Default
- Border radius: 50px
- Padding: 8px (horizontal), 4px (vertical)

**Notification Badge**
- Size: 13px × 13px
- Background: Color/Status/Error
- Border radius: 6.5px

### 1.5 Create Page Design Mockups

Now create pages for each screen in your app:

#### Login Page
- Status bar (custom height indicator)
- Hero image
- Title
- Input fields
- Primary button
- Secondary text link

#### Dashboard Page
- Status bar
- Header with notification icon and menu
- Month selector (horizontal scroll)
- Tab navigation
- Circular progress chart
- Store cards list

#### Store Detail Page
- Header with back button
- Map/image section
- Contact card
- Activity cards grid
- Check-in button

#### Imaging Page
- Header with back button
- Illustration/placeholder
- Start imaging button

## Part 2: Using Builder.io Plugin for Code Generation

### 2.1 Install Builder.io Figma Plugin

1. Go to https://www.figma.com/community/plugin/747985167520967365/builder-io-ai-powered-figma-to-code-react-vue-tailwind-more
2. Click "Open in Figma"
3. Click "Install"
4. In your Figma file, go to Plugins → "Builder.io AI Powered Figma to Code"

### 2.2 Prepare Frames for Export

Before using the plugin:
1. Select the component or page frame you want to convert
2. Make sure all layers are properly named
3. Ensure all text uses your typography styles
4. Ensure all fills use your color styles
5. Group related elements logically

### 2.3 Export and Convert

1. Select your component or page frame
2. Open the Builder.io plugin
3. Click "Convert to Code"
4. Choose "React Native" as the output framework
5. The plugin will generate React Native code using your design tokens

### 2.4 Map Generated Code to Your Design System

The exported code will need adjustments:

**Before:**
```jsx
<View style={{ backgroundColor: '#2F80ED', height: 50 }}>
  <Text style={{ fontSize: 17, fontWeight: '500' }}>Button</Text>
</View>
```

**After:**
```jsx
import { Button } from '@/design-system/components';

<Button title="Button" />
```

## Part 3: Component Mapping Reference

### How to Use Design System Components in Figma Designs

When designing in Figma, name your component instances to match your React Native components:

#### Naming Convention:
```
ComponentType[Variant][State]
Examples:
- Button[Primary][Default]
- Button[Primary][Disabled]
- Input[Text][Focused]
- Card[Store][Default]
- Badge[Success][Medium]
```

#### Developer Handoff Checklist:

- [ ] All components are properly named
- [ ] All colors use color styles
- [ ] All typography uses text styles
- [ ] All spacing follows the 4px grid
- [ ] Component instances are properly organized
- [ ] Responsive behavior is documented
- [ ] Interactive states are defined
- [ ] Accessibility considerations noted

## Part 4: Keeping Design and Code in Sync

### 4.1 Update Workflow

1. **Designer updates Figma design**
   - Updates components in design system page
   - Updates page mockups
   - Uses component instances

2. **Developer converts updates**
   - Uses Builder.io plugin to export updated components
   - Maps to corresponding React Native components
   - Updates design tokens if colors/typography changed

3. **Code review**
   - Verify design tokens match Figma
   - Ensure responsive behavior is correct
   - Test on actual devices

### 4.2 When to Use Builder.io Plugin vs Manual Coding

**Use the plugin for:**
- Quick prototyping
- Simple UI conversions
- Getting started with a new component

**Code manually for:**
- Complex interactions
- Conditional rendering
- Custom animations
- Performance-critical components

## Part 5: Best Practices

### Design System Principles

1. **Single Source of Truth**
   - Keep design tokens in both Figma and code synchronized
   - Update both when changing a value

2. **Component Variants**
   - Always use Figma's component variants feature
   - Match React component prop interfaces

3. **Naming Consistency**
   - Use PascalCase for component names
   - Use kebab-case for variant names
   - Follow the pattern: `ComponentName/Variant`

4. **Documentation**
   - Add annotations in Figma frames
   - Document special behaviors or interactions
   - Keep this guide updated

### Developer Handoff Best Practices

1. **Create a shared Figma link** to the design system file
2. **Document component usage** with examples
3. **Version your components** (v1, v2, etc.)
4. **Have regular design-dev sync meetings** to align on new components

## Part 6: Troubleshooting

### Common Issues with Builder.io Plugin

**Issue: Generated code doesn't match design**
- Solution: Ensure all colors and typography are using styles, not overridden values
- Solution: Check that all layers are properly named

**Issue: Responsive behavior not working**
- Solution: Use Figma's responsive design features (constraints, responsive sizing)
- Solution: Manually adjust flexbox properties after export

**Issue: Code uses inline styles instead of component system**
- Solution: Manually refactor to use your design system components
- Solution: Use the exported code as a starting point, then convert to components

## Resources

- [Figma Documentation](https://www.figma.com/design/)
- [Builder.io Documentation](https://www.builder.io)
- [React Native Documentation](https://reactnative.dev)
- [Design Tokens Format](https://design-tokens.github.io/community-group/format/)

## Next Steps

1. Create your Figma design system file following this guide
2. Set up all colors, typography, and component main components
3. Design your app pages using component instances
4. Test the Builder.io plugin on a few components
5. Establish a workflow between design and development teams
6. Keep this guide updated as your design system evolves
