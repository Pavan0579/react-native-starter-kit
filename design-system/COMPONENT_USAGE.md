# Design System Component Usage Guide

This guide shows practical examples of how to use each design system component in your React Native application.

## Table of Contents

1. [Button Component](#button-component)
2. [Text Input Component](#text-input-component)
3. [Card Component](#card-component)
4. [Badge Components](#badge-components)
5. [Typography Components](#typography-components)
6. [Color Tokens](#color-tokens)
7. [Spacing & Sizing](#spacing--sizing)
8. [Complete Page Example](#complete-page-example)

---

## Button Component

### Basic Usage

```jsx
import { Button } from '@/design-system/components';

export function MyScreen() {
  return (
    <Button 
      title="Click Me" 
      onPress={() => console.log('Pressed!')}
    />
  );
}
```

### Variants

```jsx
// Primary Button (default)
<Button 
  title="Save" 
  variant="primary"
  onPress={handleSave}
/>

// Secondary Button
<Button 
  title="Cancel" 
  variant="secondary"
  onPress={handleCancel}
/>

// Text Button
<Button 
  title="Learn More" 
  variant="text"
  onPress={handleLearnMore}
/>
```

### Sizes

```jsx
// Large Button (default)
<Button 
  title="Continue" 
  size="large"
/>

// Small Button
<Button 
  title="OK" 
  size="small"
/>
```

### States

```jsx
// Disabled Button
<Button 
  title="Disabled" 
  disabled={true}
/>

// Custom styling
<Button 
  title="Custom" 
  style={{ marginHorizontal: 10 }}
/>
```

### Full Width

```jsx
// Full width (default)
<Button 
  title="Full Width Button" 
  fullWidth={true}
/>

// Fixed width
<Button 
  title="Fixed Width" 
  fullWidth={false}
  style={{ width: 100 }}
/>
```

---

## Text Input Component

### Basic Usage

```jsx
import { TextInput } from '@/design-system/components';
import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  
  return (
    <TextInput
      placeholder="Enter your email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
    />
  );
}
```

### With Label and Helper Text

```jsx
<TextInput
  label="Email Address"
  placeholder="user@example.com"
  value={email}
  onChangeText={setEmail}
  helperText="We'll never share your email"
  keyboardType="email-address"
/>

<TextInput
  label="Password"
  placeholder="••••••••"
  value={password}
  onChangeText={setPassword}
  secureTextEntry={true}
/>
```

### Error State

```jsx
<TextInput
  label="Username"
  placeholder="Enter username"
  value={username}
  onChangeText={setUsername}
  error="Username already taken"
/>
```

### Disabled State

```jsx
<TextInput
  label="Read Only"
  value="Cannot edit this"
  editable={false}
/>
```

### Custom Styling

```jsx
<TextInput
  placeholder="Custom styled input"
  value={value}
  onChangeText={setValue}
  containerStyle={{ marginBottom: 20 }}
/>
```

---

## Card Component

### Basic Card

```jsx
import { Card, Body } from '@/design-system/components';

<Card>
  <Body>Card content goes here</Body>
</Card>
```

### Card Variants

```jsx
// Default Card (with border)
<Card variant="default">
  <Body>Default bordered card</Body>
</Card>

// Outlined Card
<Card variant="outlined">
  <Body>Outlined card</Body>
</Card>

// Elevated Card (with shadow)
<Card variant="elevated">
  <Body>Elevated card with shadow</Body>
</Card>
```

### Custom Padding

```jsx
<Card padding={20}>
  <Body>Custom padding card</Body>
</Card>
```

### Store Card Example

```jsx
import { Card, Badge, LabelMedium } from '@/design-system/components';
import { View } from 'react-native';

<Card>
  <View style={{ flexDirection: 'row', gap: 12 }}>
    {/* Icon */}
    <View style={{ width: 24, height: 24, backgroundColor: '#2F80ED', borderRadius: 12 }} />
    
    {/* Content */}
    <View style={{ flex: 1 }}>
      <BodyLargeSemibold>Store Name</BodyLargeSemibold>
      <LabelMedium color="#828282">Last visit on April 1, 2024</LabelMedium>
    </View>
    
    {/* Badge */}
    <Badge label="2/2 Visits" variant="success" size="small" />
  </View>
</Card>
```

---

## Badge Components

### Status Badge

```jsx
import { Badge } from '@/design-system/components';

// Success Badge
<Badge 
  label="Completed" 
  variant="success" 
  size="medium"
/>

// Warning Badge
<Badge 
  label="Pending" 
  variant="warning"
  size="medium"
/>

// Error Badge
<Badge 
  label="Failed" 
  variant="error"
  size="medium"
/>

// Info Badge
<Badge 
  label="New" 
  variant="info"
  size="medium"
/>

// Default Badge
<Badge 
  label="Default" 
  variant="default"
  size="medium"
/>
```

### Badge Sizes

```jsx
// Small
<Badge label="Small" size="small" />

// Medium (default)
<Badge label="Medium" size="medium" />

// Large
<Badge label="Large" size="large" />
```

### Notification Badge

```jsx
import { NotificationBadge } from '@/design-system/components';

<NotificationBadge 
  count={5} 
  style={{ position: 'absolute', top: -8, right: -8 }}
/>
```

---

## Typography Components

### Basic Typography

```jsx
import { 
  Typography, 
  DisplayTitle, 
  Heading1, 
  Heading2, 
  Body 
} from '@/design-system/components';

// Using generic Typography component
<Typography variant="displayTitle">Login</Typography>

// Or use specialized components
<DisplayTitle>Login</DisplayTitle>
<Heading1>Welcome Back</Heading1>
<Heading2>Enter Your Details</Heading2>
<Body>Enter your email and password below</Body>
```

### All Typography Variants

```jsx
// Display & Headings
<DisplayTitle>Display Title (34px)</DisplayTitle>
<Heading1>Heading 1 (24px)</Heading1>
<Heading2>Heading 2 (20px)</Heading2>
<Heading3>Heading 3 (18px)</Heading3>

// Body Text
<BodyLarge>Body Large (17px)</BodyLarge>
<BodyLargeSemibold>Body Large Semibold (17px, 500)</BodyLargeSemibold>
<Body>Body Regular (16px)</Body>
<BodySemibold>Body Semibold (16px, 600)</BodySemibold>

// Labels
<LabelLarge>Label Large (15px)</LabelLarge>
<LabelMedium>Label Medium (13px)</LabelMedium>
<LabelSmall>Label Small (12px)</LabelSmall>

// Captions
<Caption>Caption (10px)</Caption>
```

### Custom Colors

```jsx
import { colors } from '@/design-system/components';

<Heading1 color={colors.primary.blue}>Blue Heading</Heading1>
<Body color={colors.status.error}>Error message</Body>
<Caption color={colors.neutral.medium}>Subtle text</Caption>
```

---

## Color Tokens

### Using Colors in Your Components

```jsx
import { colors, getColor } from '@/design-system/components';

// Direct access
const containerColor = colors.neutral.white;
const primaryColor = colors.primary.blue;

// Using helper function
const errorColor = getColor('colors.status.error');

// In StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral.white,
    borderColor: colors.neutral.light,
  },
  errorText: {
    color: colors.status.error,
  },
  successText: {
    color: colors.status.success,
  },
});
```

### Color Palette Reference

```jsx
// Primary Colors
colors.primary.blue        // #2F80ED
colors.primary.darkBlue    // #125DCE
colors.primary.lightBlue   // #6E85E3

// Neutral Colors
colors.neutral.black       // #000000
colors.neutral.dark        // #333333
colors.neutral.medium      // #808080
colors.neutral.light       // #BDBDBD
colors.neutral.lighter     // #E3EBF8
colors.neutral.pale        // #F1F1F1
colors.neutral.white       // #FFFFFF

// Status Colors
colors.status.success      // #2F80ED
colors.status.warning      // #F49B17
colors.status.error        // #E7343E
colors.status.info         // #478FF7
colors.status.highlight    // #FFCC2B
```

---

## Spacing & Sizing

### Using Spacing Tokens

```jsx
import { spacing, sizing, borderRadius } from '@/design-system/components';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,           // 16px
    gap: spacing.md,               // 12px
    marginBottom: spacing.xl,       // 20px
  },
  section: {
    marginVertical: spacing['2xl'], // 24px
  },
  smallGap: {
    gap: spacing.sm,               // 8px
  },
});

// Or use directly
<View style={{ padding: spacing.lg, gap: spacing.md }}>
  <Text>Content</Text>
</View>
```

### Using Sizing Tokens

```jsx
import { sizing } from '@/design-system/components';

const styles = StyleSheet.create({
  button: {
    height: sizing.button.primary.height, // 50px
  },
  input: {
    height: sizing.input.height,         // 50px
  },
  icon: {
    width: sizing.icon.default,          // 24px
    height: sizing.icon.default,         // 24px
  },
  circleProgress: {
    width: sizing.card.progressCircle,   // 144px
    height: sizing.card.progressCircle,  // 144px
  },
});
```

### Using Border Radius Tokens

```jsx
import { borderRadius } from '@/design-system/components';

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.lg,       // 10px
  },
  card: {
    borderRadius: borderRadius.xl,       // 12px
  },
  smallElement: {
    borderRadius: borderRadius.sm,       // 4px
  },
  roundedPill: {
    borderRadius: borderRadius.full,     // 50px
  },
});
```

---

## Complete Page Example

Here's a complete login page using the design system:

```jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {
  Button,
  TextInput,
  DisplayTitle,
  BodyLarge,
  Caption,
  spacing,
  colors,
} from '@/design-system/components';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // API call here
      console.log('Logging in with:', { email, password });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    // Navigate to sign up
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <DisplayTitle color={colors.neutral.dark}>
            Login
          </DisplayTitle>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            containerStyle={{ marginBottom: spacing.lg }}
          />

          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            containerStyle={{ marginBottom: spacing['2xl'] }}
          />
        </View>

        {/* Button Section */}
        <View style={styles.buttonSection}>
          <Button
            title="Login"
            onPress={handleLogin}
            disabled={loading || !email || !password}
          />
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpSection}>
          <BodyLarge color={colors.neutral.dark}>
            Don't have an account?{' '}
            <BodyLarge
              color={colors.primary.lightBlue}
              onPress={handleSignUp}
            >
              Sign up
            </BodyLarge>
          </BodyLarge>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingTop: spacing['2xl'],
  },
  header: {
    marginBottom: spacing['3xl'],
  },
  formSection: {
    marginBottom: spacing['2xl'],
  },
  buttonSection: {
    marginBottom: spacing['2xl'],
  },
  signUpSection: {
    alignItems: 'center',
  },
});
```

---

## Best Practices

1. **Always use design tokens** instead of hardcoding values
2. **Use specialized typography components** instead of generic ones when possible
3. **Leverage component variants** for different states and sizes
4. **Keep spacing consistent** using the spacing scale
5. **Use color tokens** for all colors - never hardcode hex values
6. **Create reusable sections** by combining design system components
7. **Document custom modifications** if you extend components
8. **Test on multiple screen sizes** to ensure responsive behavior

## Common Patterns

### Form Layout
```jsx
<View style={{ gap: spacing.lg }}>
  <TextInput label="Field 1" />
  <TextInput label="Field 2" />
  <Button title="Submit" />
</View>
```

### Card List
```jsx
<ScrollView style={{ padding: spacing.lg }}>
  {items.map(item => (
    <Card key={item.id} style={{ marginBottom: spacing.md }}>
      {/* Card content */}
    </Card>
  ))}
</ScrollView>
```

### Header with Action
```jsx
<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <Heading1>Title</Heading1>
  <Button title="Action" size="small" />
</View>
```

## Next Steps

- Review the DESIGN_SYSTEM.md for complete token specifications
- Check FIGMA_INTEGRATION.md for design file setup
- Explore component source files for advanced customization
- Create custom components using the design system as a foundation
