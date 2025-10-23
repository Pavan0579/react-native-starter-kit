# Design System Quick Reference

A quick lookup guide for the most commonly used design system values.

## 🎨 Color Quick Reference

### Most Used Colors

```jsx
import { colors } from '@/design-system/components';

// Primary Actions
colors.primary.blue      // #2F80ED  - Main buttons, active states
colors.primary.lightBlue // #6E85E3  - Links, secondary actions

// Text
colors.neutral.dark      // #333333  - Primary text
colors.neutral.medium    // #808080  - Secondary text
colors.neutral.white     // #FFFFFF  - Light backgrounds

// Status
colors.status.error      // #E7343E  - Errors, alerts
colors.status.warning    // #F49B17  - Pending, warnings
colors.status.success    // #2F80ED  - Completed, checkmarks
```

## 📝 Typography Quick Reference

### Commonly Used Styles

```jsx
import { 
  DisplayTitle,    // 34px, 500 weight - Main page titles
  Heading1,        // 24px, 500 weight - Section headers
  Heading2,        // 20px, 500 weight - Subsection headers
  BodyLarge,       // 17px, 400 weight - Primary body text
  Body,            // 16px, 400 weight - Standard body text
  LabelSmall,      // 12px, 500 weight - Labels, captions
  Caption,         // 10px, 400 weight - Small text
} from '@/design-system/components';

// Usage
<DisplayTitle>Page Title</DisplayTitle>
<Heading1>Section Title</Heading1>
<Body>Regular text content</Body>
<LabelSmall>Label text</LabelSmall>
```

## 📏 Spacing Quick Reference

### Quick Access

```jsx
import { spacing } from '@/design-system/components';

spacing.lg       // 16px  - Default padding/margin
spacing.md       // 12px  - Element gap
spacing.sm       // 8px   - Small gap
spacing.xl       // 20px  - Section gap
spacing['2xl']   // 24px  - Large section gap

// Common combinations
{ padding: spacing.lg }                    // 16px all sides
{ gap: spacing.md }                        // 12px between items
{ marginBottom: spacing['2xl'] }           // 24px bottom
{ paddingVertical: spacing.lg }            // 16px vertical
```

## 🔘 Button Quick Reference

### Variants

```jsx
import { Button } from '@/design-system/components';

// Primary (default)
<Button title="Save" onPress={handleSave} />

// Secondary
<Button title="Cancel" variant="secondary" onPress={handleCancel} />

// Text Link
<Button title="Learn More" variant="text" onPress={handleLearn} />

// Disabled
<Button title="Login" disabled={loading} onPress={handleLogin} />

// Custom width
<Button title="OK" fullWidth={false} style={{ width: 100 }} />
```

## 📱 Input Quick Reference

### Common Patterns

```jsx
import { TextInput } from '@/design-system/components';

// Email
<TextInput
  label="Email"
  placeholder="user@example.com"
  keyboardType="email-address"
/>

// Password
<TextInput
  label="Password"
  placeholder="••••••••"
  secureTextEntry
/>

// With error
<TextInput
  label="Username"
  error="Username taken"
/>

// With helper text
<TextInput
  label="Phone"
  helperText="Format: (123) 456-7890"
/>
```

## 🏷️ Badge Quick Reference

### Status Badges

```jsx
import { Badge } from '@/design-system/components';

// Success (green)
<Badge label="Completed" variant="success" />

// Warning (orange)
<Badge label="Pending" variant="warning" />

// Error (red)
<Badge label="Failed" variant="error" />

// Info (blue)
<Badge label="New" variant="info" />

// Default (light)
<Badge label="Default" />

// Notification count
<NotificationBadge count={5} />
```

## 🎯 Common Layout Patterns

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
      <BodyLarge>{item.title}</BodyLarge>
    </Card>
  ))}
</ScrollView>
```

### Header with Action

```jsx
<View style={{ 
  flexDirection: 'row', 
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: spacing.lg
}}>
  <Heading1>Title</Heading1>
  <Button title="Action" size="small" />
</View>
```

### Two Column Layout

```jsx
<View style={{ flexDirection: 'row', gap: spacing.md }}>
  <View style={{ flex: 1 }}>
    <Body>Left column</Body>
  </View>
  <View style={{ flex: 1 }}>
    <Body>Right column</Body>
  </View>
</View>
```

## 🎨 Theme Colors by Use

### For Different UI Elements

```jsx
// Buttons
backgroundColor: colors.primary.blue

// Links & Interactive Text
color: colors.primary.lightBlue

// Primary Text
color: colors.neutral.dark

// Secondary Text
color: colors.neutral.medium

// Borders
borderColor: 'rgba(0, 0, 0, 0.15)'  // Use with opacity

// Backgrounds
backgroundColor: colors.neutral.white

// Disabled State
opacity: 0.4

// Success/Completed
color: colors.status.success

// Warning/Pending
color: colors.status.warning

// Error
color: colors.status.error
```

## 📦 Component Import Reference

### Single Import Statement

```jsx
import {
  // Components
  Button,
  TextInput,
  Card,
  Badge,
  NotificationBadge,
  
  // Typography
  DisplayTitle,
  Heading1,
  Heading2,
  BodyLarge,
  Body,
  LabelSmall,
  Caption,
  
  // Tokens
  colors,
  spacing,
  sizing,
  borderRadius,
  
  // Utilities
  getColor,
  getTypographyStyle,
  getSpacing,
} from '@/design-system/components';
```

## ⚡ Performance Tips

### Avoid These

```jsx
// ❌ Don't use inline object creation
<View style={{ padding: 16, gap: 12, backgroundColor: '#ffffff' }} />

// ❌ Don't hardcode values
<Text style={{ fontSize: 16, color: '#333333' }}>Text</Text>

// ❌ Don't create new colors/sizes
borderRadius: 10.5  // Should be 10 or 12
```

### Do This Instead

```jsx
// ✅ Use tokens
<View style={{ padding: spacing.lg, gap: spacing.md, backgroundColor: colors.neutral.white }} />

// ✅ Use components
<Body>Text</Body>

// ✅ Use defined values
borderRadius: borderRadius.lg
```

## 🔍 Debugging Tips

### Check Design Token Values

```jsx
import { DesignTokens } from '@/design-system/tokens';

// Log all colors
console.log(DesignTokens.colors);

// Log all spacing
console.log(DesignTokens.spacing);

// Log typography styles
console.log(DesignTokens.typography.styles);
```

### Verify Component Props

```jsx
// Button accepts
// title, variant, size, disabled, fullWidth, style, textStyle, onPress

// TextInput accepts
// label, error, helperText, containerStyle, + TextInputProps

// Card accepts
// variant, padding, style, children

// Badge accepts
// label, variant, size, style, textStyle
```

## 📋 Checklist for New Screens

```
Before submitting a new screen:

□ All text uses typography components
□ All colors use color tokens
□ All spacing uses spacing tokens
□ All buttons use Button component
□ All cards use Card component
□ No hardcoded hex colors
□ No hardcoded font sizes
□ Tested on 320px and 480px+ widths
□ Touch targets are 44px+ minimum
□ Text contrast meets WCAG AA
□ Components are properly named
□ Figma design updated
```

## 🚀 Most Used Component Combinations

### Login Form

```jsx
<View style={{ gap: spacing.lg }}>
  <DisplayTitle>Login</DisplayTitle>
  <TextInput label="Email" keyboardType="email-address" />
  <TextInput label="Password" secureTextEntry />
  <Button title="Sign In" onPress={handleLogin} />
  <Button title="Sign Up" variant="text" onPress={handleSignUp} />
</View>
```

### Settings Item

```jsx
<Card style={{ marginBottom: spacing.md }}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <BodyLarge>Setting Name</BodyLarge>
    <Body color={colors.primary.lightBlue}>Value</Body>
  </View>
</Card>
```

### Empty State

```jsx
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Heading2 style={{ marginBottom: spacing.lg }}>No Items</Heading2>
  <Body color={colors.neutral.medium} style={{ textAlign: 'center' }}>
    No items found
  </Body>
  <Button title="Create One" style={{ marginTop: spacing['2xl'] }} />
</View>
```

### Alert/Success Message

```jsx
<Card style={{ marginBottom: spacing.lg }}>
  <View style={{ flexDirection: 'row', gap: spacing.md, alignItems: 'center' }}>
    <Badge label="✓" variant="success" />
    <Body>Operation completed successfully</Body>
  </View>
</Card>
```

## 🔗 Design System Files

| File | Purpose |
|------|---------|
| `tokens.ts` | All design tokens and values |
| `components/Button.tsx` | Button component |
| `components/TextInput.tsx` | Input field component |
| `components/Card.tsx` | Card container component |
| `components/Badge.tsx` | Badge components |
| `components/Typography.tsx` | Typography components |
| `DESIGN_SYSTEM.md` | Complete specification |
| `FIGMA_INTEGRATION.md` | Figma setup guide |
| `COMPONENT_USAGE.md` | Detailed examples |
| `PAGE_COMPONENT_MAPPING.md` | Current page mappings |

## 💡 Quick Tips

1. **Always use `spacing`** instead of hardcoding padding/margin
2. **Use color tokens** for every color - never hardcode hex values
3. **Use typography components** instead of Text with manual styling
4. **Component size**: Start with default, customize only if needed
5. **Disabled state**: Use `disabled` prop, don't set opacity manually
6. **Full width buttons**: Default is `fullWidth={true}`, override for smaller buttons
7. **Form labels**: Use `label` prop on TextInput, not separate Text component
8. **Error handling**: Use `error` prop on TextInput, shows in red automatically
9. **Spacing between elements**: Use `gap` in flexbox, not margin on individual items
10. **Testing**: Always test on both iOS and Android real devices

---

**Need more details?** Check the full documentation in the design-system folder.
