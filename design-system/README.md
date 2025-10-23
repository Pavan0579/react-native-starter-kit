# StoreScan Design System

A comprehensive design system for the StoreScan React Native mobile application, providing reusable components, design tokens, and guidelines for consistent UI/UX across all screens.

## 📚 Documentation

This design system includes the following documentation:

1. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Complete design specification
   - Design tokens (colors, typography, spacing, sizing, borders)
   - Component library specifications
   - Page patterns and layouts
   - Accessibility guidelines
   - Developer handoff checklist

2. **[FIGMA_INTEGRATION.md](./FIGMA_INTEGRATION.md)** - Figma setup and integration
   - How to create design system in Figma
   - Color and typography styles setup
   - Component main components creation
   - Builder.io plugin integration
   - Design-to-code workflow
   - Best practices for keeping design and code in sync

3. **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** - Component implementation guide
   - Examples for each component
   - Component variants and states
   - Complete page examples
   - Best practices
   - Common patterns

## 🎨 Components

### Available Components

- **Button** - Primary, secondary, and text variants with multiple sizes
- **TextInput** - Text fields with labels, error states, and helper text
- **Card** - Default, outlined, and elevated variants
- **Badge** - Status badges with multiple variants and sizes
- **NotificationBadge** - Small circular badges for notifications
- **Typography** - Pre-configured text styles for all sizes and weights

### Component Structure

```
design-system/
├── components/
│   ├── Button.tsx
│   ├── TextInput.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Typography.tsx
│   └── index.ts
├── tokens.ts
├── DESIGN_SYSTEM.md
├── FIGMA_INTEGRATION.md
├── COMPONENT_USAGE.md
└── README.md
```

## 🎯 Design Tokens

### Colors

#### Primary Colors
- **Primary Blue**: `#2F80ED`
- **Dark Blue**: `#125DCE`
- **Light Blue**: `#6E85E3`

#### Neutral Colors
- **Black**: `#000000`
- **Dark Gray**: `#333333`
- **Medium Gray**: `#808080`
- **Light Gray**: `#BDBDBD`
- **Lighter Gray**: `#E3EBF8`
- **Pale Gray**: `#F1F1F1`
- **White**: `#FFFFFF`

#### Status Colors
- **Success**: `#2F80ED`
- **Warning**: `#F49B17`
- **Error**: `#E7343E`
- **Info**: `#478FF7`
- **Highlight**: `#FFCC2B`

### Typography

| Style | Size | Weight | Letter Spacing |
|-------|------|--------|-----------------|
| Display Title | 34px | 500 | -0.34 |
| Heading 1 | 24px | 500 | -0.24 |
| Heading 2 | 20px | 500 | -0.20 |
| Heading 3 | 18px | 500 | -0.18 |
| Body Large | 17px | 400 | -0.17 |
| Body Large Semibold | 17px | 500 | -0.17 |
| Body | 16px | 400 | -0.15 |
| Body Semibold | 16px | 600 | -0.15 |
| Label Large | 15px | 400 | -0.15 |
| Label Medium | 13px | 400 | -0.13 |
| Label Small | 12px | 500 | -0.12 |
| Caption | 10px | 400 | -0.10 |

### Spacing Scale (4px base unit)

- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `lg`: 16px (default padding)
- `xl`: 20px
- `2xl`: 24px
- `3xl`: 32px

### Sizing

- **Button Height**: 50px (primary), 44px (secondary)
- **Input Height**: 50px
- **Icon Size**: 24px (default), 28px (navigation)
- **Border Radius**: 4px-50px (varying by context)

## 🚀 Quick Start

### Import Components

```jsx
import {
  Button,
  TextInput,
  Card,
  Badge,
  Typography,
  colors,
  spacing,
} from '@/design-system/components';
```

### Use Components

```jsx
import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import {
  Button,
  TextInput,
  Heading1,
  Body,
  spacing,
  colors,
} from '@/design-system/components';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.white }}>
      <View style={{ padding: spacing.lg }}>
        <Heading1>Login</Heading1>
        <Body style={{ marginVertical: spacing.md }}>
          Enter your details below
        </Body>

        <TextInput
          label="Email"
          placeholder="user@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          containerStyle={{ marginBottom: spacing.lg }}
        />

        <TextInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={{ marginBottom: spacing.xl }}
        />

        <Button
          title="Sign In"
          onPress={() => console.log('Login')}
        />
      </View>
    </SafeAreaView>
  );
}
```

## 📱 Pages Implemented

### Current Pages Using Design System

1. **Login Screen**
   - TextInput with email and password
   - Primary button
   - Sign-up link

2. **Dashboard Screen**
   - Month selector cards
   - Tab navigation
   - Circular progress chart
   - Store cards with status badges
   - Notification badge

3. **Store Detail Screen**
   - Header with back button
   - Map/image section
   - Contact card
   - Activity cards in grid
   - Check-in button

4. **Imaging Screen**
   - Header with back button
   - Illustration placeholder
   - Start imaging button

5. **Explore Screen**
   - Information sections
   - Collapsible components

## 🎨 Figma Integration

### Setup Steps

1. **Create Design System in Figma**
   - Create color styles for all colors
   - Create typography styles for all text sizes
   - Create main components for Button, Input, Card, Badge

2. **Create Page Mockups**
   - Design each screen using component instances
   - Follow the layout patterns from DESIGN_SYSTEM.md

3. **Use Builder.io Plugin**
   - Install the Builder.io Figma plugin
   - Convert components to React Native code
   - Map to your design system components

4. **Keep in Sync**
   - Update design tokens in both Figma and code
   - Use consistent naming conventions
   - Document changes in both places

See [FIGMA_INTEGRATION.md](./FIGMA_INTEGRATION.md) for detailed instructions.

## 📐 Design Principles

### 1. Consistency
- Use design tokens for all values
- Follow established patterns
- Maintain visual hierarchy

### 2. Accessibility
- Minimum 4.5:1 contrast ratio for text
- Minimum 44px touch targets
- Support text scaling up to 200%

### 3. Responsive Design
- Design for multiple screen sizes
- Use flexible layouts
- Test on actual devices

### 4. Component Modularity
- Single responsibility per component
- Composable and reusable
- Clear prop interfaces

### 5. Performance
- Minimize re-renders
- Optimize images and SVGs
- Use appropriate navigation patterns

## 🔧 Customization

### Creating Custom Components

If you need to create custom components that fit the design system:

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DesignTokens } from './tokens';

export const CustomComponent = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: DesignTokens.spacing.lg,
    borderRadius: DesignTokens.borderRadius.md,
    backgroundColor: DesignTokens.colors.neutral.white,
  },
});
```

### Extending Components

To extend existing components with custom props:

```jsx
import { Button as BaseButton } from './Button';

export const LargeButton = (props) => (
  <BaseButton {...props} size="large" style={{ fontSize: 20 }} />
);
```

## 📋 Checklist for New Pages

When creating a new page, use this checklist:

- [ ] Use typography components for all text
- [ ] Use spacing tokens for all margins and padding
- [ ] Use color tokens for all colors
- [ ] Use existing components (Button, Card, etc.)
- [ ] Test on multiple screen sizes
- [ ] Verify accessibility (contrast, touch targets)
- [ ] Document any custom components
- [ ] Update Figma design file
- [ ] Get design review

## 🤝 Contributing

When contributing to the design system:

1. **Update documentation** if adding new tokens or components
2. **Follow naming conventions** (PascalCase for components, kebab-case for variants)
3. **Test on actual devices** (iOS and Android)
4. **Update Figma design file** to match code changes
5. **Keep components focused** on a single responsibility
6. **Document props** and usage examples

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev)
- [Figma Design Documentation](https://www.figma.com/design/)
- [Builder.io Documentation](https://www.builder.io)
- [Design Tokens Format Specification](https://design-tokens.github.io/community-group/format/)

## 🐛 Known Issues & Limitations

- Platform-specific differences may require adjustments for iOS vs Android
- Some SVG components may need optimization for performance
- Text scaling beyond 150% may affect layout on small screens

## 📞 Support

For questions or issues with the design system:

1. Check the relevant documentation file
2. Review component examples in COMPONENT_USAGE.md
3. Check Figma design file for visual reference
4. Create an issue in the project repository

## 🎯 Future Enhancements

Planned improvements to the design system:

- [ ] Dark mode color variations
- [ ] Animation and transition guidelines
- [ ] Loading states and skeleton screens
- [ ] Empty states and error boundaries
- [ ] Haptic feedback patterns
- [ ] Voice accessibility guidelines
- [ ] Additional component variants
- [ ] Storybook integration for component documentation

## 📄 Version History

### v1.0.0 (Initial Release)
- Complete design tokens documentation
- Core components (Button, Input, Card, Badge, Typography)
- Figma integration guide
- Component usage guide
- Support for current screens (Login, Dashboard, Store Detail, Imaging, Explore)

---

## Quick Links

- [View Design Tokens](./tokens.ts)
- [View Components](./components/)
- [Read Design System Spec](./DESIGN_SYSTEM.md)
- [Figma Integration Guide](./FIGMA_INTEGRATION.md)
- [Component Usage Examples](./COMPONENT_USAGE.md)

---

**Last Updated**: 2024
**Design System Version**: 1.0.0
**React Native Version**: 0.81.4+
