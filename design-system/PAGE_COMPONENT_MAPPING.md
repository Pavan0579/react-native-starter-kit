# Page to Component Mapping Guide

This document maps all the pages in the StoreScan app to the design system components and identifies which components are used on each page.

## 📑 Table of Contents

1. [Login Screen](#login-screen)
2. [Dashboard Screen](#dashboard-screen)
3. [Explore Screen](#explore-screen)
4. [Store Detail Screen](#store-detail-screen)
5. [Imaging Screen](#imaging-screen)
6. [Custom Components](#custom-components-needed)

---

## Login Screen

**File**: `app/login.tsx`

### Component Usage

| Component | Usage | Props |
|-----------|-------|-------|
| SafeAreaView | Container | `backgroundColor` |
| DisplayTitle | "Login" heading | `fontSize: 34, fontWeight: 500` |
| TextInput | Email field | `placeholder, keyboardType, secureTextEntry` |
| TextInput | Password field | `placeholder, secureTextEntry` |
| Button | "Login" button | `variant: primary, onPress` |
| LabelLarge | Sign-up prompt | `color: neutral.dark` |
| Button (as Text) | "Sign up" link | `variant: text, onPress` |

### Design System Integration

```jsx
import {
  DisplayTitle,
  TextInput,
  Button,
  LabelLarge,
  spacing,
  colors,
} from '@/design-system/components';

<SafeAreaView style={{ backgroundColor: colors.neutral.white }}>
  <DisplayTitle color={colors.neutral.dark}>Login</DisplayTitle>
  
  <TextInput
    label="Email"
    placeholder="Enter your email"
    keyboardType="email-address"
    containerStyle={{ marginBottom: spacing.lg }}
  />
  
  <TextInput
    label="Password"
    placeholder="Enter your password"
    secureTextEntry
    containerStyle={{ marginBottom: spacing['2xl'] }}
  />
  
  <Button 
    title="Login" 
    onPress={handleLogin}
  />
  
  <View style={{ flexDirection: 'row' }}>
    <LabelLarge color={colors.neutral.dark}>
      Don't have account? 
    </LabelLarge>
    <Button 
      title="Sign up" 
      variant="text"
      onPress={handleSignUp}
    />
  </View>
</SafeAreaView>
```

### Colors Used
- `colors.primary.blue` - Login button
- `colors.neutral.white` - Background
- `colors.neutral.dark` - Text
- `colors.neutral.light` - Input borders
- `colors.primary.lightBlue` - Sign up link

---

## Dashboard Screen

**File**: `app/dashboard.tsx`

### Component Usage

| Component | Usage | Props |
|-----------|-------|-------|
| Heading1 | "StoreScan" title | `fontSize: 24, fontWeight: 500` |
| NotificationBadge | Notification count | `count: 2` |
| Badge | Month selector | `variant: active/inactive` |
| Tab Navigation | Tab list | `activeIndicator, tabText` |
| Circular Progress | Progress chart | `progress: 60` |
| Heading2 | "Visits" section title | `fontSize: 20` |
| Card | Store card | `padding: 20` |
| Badge | Visit count badge | `variant: default, size: small` |
| StatusIcon | Completed/Pending status | `variant: success/warning` |

### Design System Integration

```jsx
import {
  Heading1,
  Heading2,
  Body,
  Card,
  Badge,
  NotificationBadge,
  Button,
  spacing,
  colors,
} from '@/design-system/components';

// Header with title and notification
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <Heading1>StoreScan</Heading1>
  <View style={{ position: 'relative' }}>
    <IconButton>
      <NotificationIcon />
    </IconButton>
    <NotificationBadge count={2} />
  </View>
</View>

// Month selector
<View style={{ flexDirection: 'row', gap: spacing.md }}>
  {months.map(month => (
    <Badge
      key={month.name}
      label={month.name}
      variant={month.active ? 'success' : 'default'}
    />
  ))}
</View>

// Store cards
{stores.map(store => (
  <Card key={store.id}>
    <View style={{ flexDirection: 'row', gap: spacing.md }}>
      {/* Status icon */}
      <View style={{ width: 24, height: 24 }}>
        {store.completed ? <CheckmarkIcon /> : <ClockIcon />}
      </View>
      
      {/* Store info */}
      <View style={{ flex: 1 }}>
        <BodyLargeSemibold>{store.name}</BodyLargeSemibold>
        <LabelMedium color={colors.neutral.medium}>
          {store.lastVisit}
        </LabelMedium>
      </View>
      
      {/* Visit badge */}
      <Badge 
        label={store.visits} 
        variant="default"
        size="small"
      />
    </View>
  </Card>
))}
```

### Colors Used
- `colors.primary.blue` - Active month badge, active tab
- `colors.status.warning` - Pending status icon
- `colors.neutral.light` - Card borders
- `colors.status.success` - Completed checkmark
- `colors.status.error` - Notification badge

---

## Explore Screen

**File**: `app/(tabs)/explore.tsx`

### Component Usage

| Component | Usage | Props |
|-----------|-------|-------|
| Heading1 | "Explore" title | `fontSize: 24` |
| Body | Descriptive text | `fontSize: 16` |
| Collapsible | Information sections | `expandable` |
| Link | External links | `href, color` |
| Image | Informational images | `source, style` |

### Design System Integration

```jsx
import {
  Heading1,
  Body,
  Caption,
  colors,
} from '@/design-system/components';

<View>
  <Heading1>Explore</Heading1>
  
  <Collapsible title="File-based routing">
    <Body>This app has two screens...</Body>
    <Body 
      color={colors.primary.lightBlue}
      onPress={() => openLink('https://docs.expo.dev')}
    >
      Learn more
    </Body>
  </Collapsible>
  
  <Collapsible title="Android, iOS, and web support">
    <Body>You can open this project on...</Body>
  </Collapsible>
</View>
```

---

## Store Detail Screen

**File**: `app/store/[id].tsx`

### Component Usage

| Component | Usage | Props |
|-----------|-------|-------|
| Heading2 | Store title | `fontSize: 20` |
| Card | Contact information | `padding: 20, border: 1px` |
| LabelSmall | "Contact" label | `color: medium` |
| BodyLargeSemibold | Contact name | `fontSize: 17, fontWeight: 500` |
| LabelLarge | Contact phone | `fontSize: 15` |
| Card | Activity card container | `padding: 0` |
| Button | "Check In" button | `variant: primary, fullWidth` |
| Badge | Activity name | (text only) |

### Design System Integration

```jsx
import {
  Heading2,
  Heading3,
  Body,
  Card,
  Badge,
  Button,
  LabelSmall,
  BodyLargeSemibold,
  spacing,
  colors,
} from '@/design-system/components';

<View>
  <Heading2>Store-{id}</Heading2>
  
  <Heading3 style={{ marginTop: spacing['2xl'] }}>Location</Heading3>
  {/* Map component */}
  
  <Heading3 style={{ marginTop: spacing['2xl'] }}>Contact</Heading3>
  <Card>
    <LabelSmall color={colors.neutral.medium}>Contact</LabelSmall>
    <BodyLargeSemibold>Thomas James</BodyLargeSemibold>
    <Body color={colors.primary.blue}>+1 (602) 218-3333</Body>
  </Card>
  
  <Heading3 style={{ marginTop: spacing['2xl'] }}>Activities</Heading3>
  <View style={{ flexDirection: 'row', gap: spacing.md }}>
    {activities.map(activity => (
      <Card key={activity.id} style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 109, height: 109 }}>
            {/* Activity icon */}
          </View>
          <Badge label={activity.name} variant="default" />
        </View>
      </Card>
    ))}
  </View>
  
  <Button 
    title="Check In" 
    onPress={handleCheckIn}
    style={{ marginTop: spacing['2xl'] }}
  />
</View>
```

### Colors Used
- `colors.primary.blue` - Contact phone, check-in button
- `colors.neutral.white` - Card backgrounds
- `colors.neutral.light` - Card borders
- `colors.neutral.medium` - Secondary text

---

## Imaging Screen

**File**: `app/store/[id]/activities.tsx`

### Component Usage

| Component | Usage | Props |
|-----------|-------|-------|
| Heading2 | Screen title | `fontSize: 20` |
| Body | Instruction text | `fontSize: 16, textAlign: center` |
| Button | "Start Imaging" button | `variant: primary, fullWidth` |
| SVG Icon | Illustration | `width: 280, height: 280` |

### Design System Integration

```jsx
import {
  Heading2,
  Body,
  Button,
  spacing,
  colors,
} from '@/design-system/components';

<SafeAreaView style={{ backgroundColor: colors.neutral.white }}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Heading2 style={{ marginBottom: spacing['2xl'] }}>
      Store-{id}
    </Heading2>
    
    <View style={{ marginBottom: spacing['3xl'] }}>
      <ImagePlaceholderIcon />
    </View>
    
    <Body color={colors.neutral.dark} style={{ textAlign: 'center' }}>
      Capture store images and add your inputs
    </Body>
  </View>
  
  <View style={{ padding: spacing.lg }}>
    <Button 
      title="Start Imaging" 
      onPress={handleStartImaging}
    />
  </View>
</SafeAreaView>
```

---

## Custom Components Needed

### Components Not Yet in Design System

These are custom components built specifically for the app that should be considered for the design system:

#### 1. StatusBar (Custom)
Located in multiple pages, shows time, signal, wifi, battery

```jsx
interface StatusBarProps {
  time?: string;
  showSignal?: boolean;
  showWifi?: boolean;
  showBattery?: boolean;
}
```

**Recommendation**: Create a wrapper component that can be reused.

#### 2. CircularProgress
Used in Dashboard for showing visit progress

```jsx
interface CircularProgressProps {
  progress: number; // 0-100
  completed: number;
  target: number;
  size?: number;
  colors?: { background: string; fill: string };
}
```

**Recommendation**: Extract to a dedicated component.

#### 3. ActivityCard
Used in Store Detail for showing activities

```jsx
interface ActivityCardProps {
  name: string;
  icon: 'star' | 'image' | 'device';
  backgroundColor?: string;
  onPress?: () => void;
}
```

**Recommendation**: Create as a component variant of Card.

#### 4. MapComponent
Used in Store Detail to show location

```jsx
interface MapComponentProps {
  latitude?: number;
  longitude?: number;
  height?: number;
}
```

**Recommendation**: Separate component as it's complex and app-specific.

#### 5. Collapsible
Used in Explore screen

```jsx
interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
```

**Recommendation**: Already exists in `components/ui/collapsible.tsx`, can be styled using design tokens.

---

## Migration Checklist

### Phase 1: Core Setup
- [ ] Import design system components into existing pages
- [ ] Replace hardcoded colors with `colors` tokens
- [ ] Replace hardcoded spacing with `spacing` tokens
- [ ] Replace hardcoded font sizes with typography components

### Phase 2: Component Refactoring
- [ ] Create custom StatusBar component
- [ ] Create CircularProgress component
- [ ] Create ActivityCard component
- [ ] Update Collapsible to use design tokens

### Phase 3: Design System Expansion
- [ ] Create MapComponent wrapper
- [ ] Add dark mode support
- [ ] Create additional component variants
- [ ] Add loading and error states

### Phase 4: Documentation & QA
- [ ] Update Figma design file
- [ ] Document all custom components
- [ ] Test on iOS and Android
- [ ] Verify accessibility compliance

---

## Implementation Priority

**High Priority** (Start with these)
1. Migrate existing pages to use design tokens
2. Use Typography components for all text
3. Create StatusBar component

**Medium Priority** (Next phase)
1. Extract CircularProgress
2. Create ActivityCard component
3. Standardize Card usage

**Low Priority** (Future enhancements)
1. Dark mode support
2. Additional animations
3. Advanced component variants

---

## Figma Mapping

### Create These Main Components in Figma

| Component | Variants | States |
|-----------|----------|--------|
| Button | Primary, Secondary, Text | Default, Disabled, Pressed |
| Input | Text, Email, Password | Default, Focused, Error, Disabled |
| Card | Default, Outlined, Elevated | Default |
| Badge | Success, Warning, Error, Info, Default | Small, Medium, Large |
| StatusBar | Default | - |
| CircularProgress | - | - |
| ActivityCard | - | - |

### Naming Convention for Figma

```
ComponentType/Variant[/State]
Examples:
- Button/Primary/Default
- Button/Primary/Disabled
- Input/Text/Focused
- Card/Store/Default
- Badge/Success/Medium
- StatusBar/Default
- CircularProgress/Default
- ActivityCard/Default
```

---

## Testing Checklist

Before considering a page complete, verify:

- [ ] All text uses design system typography
- [ ] All colors use design system colors
- [ ] All spacing uses design system spacing
- [ ] All buttons use Button component or component style
- [ ] All cards use Card component or component style
- [ ] Responsive on small (320px) and large (480px+) screens
- [ ] Touch targets are minimum 44px × 44px
- [ ] Text contrast meets WCAG AA standards
- [ ] No hardcoded color, font, or spacing values

---

## File References

- Login: `app/login.tsx`
- Dashboard: `app/dashboard.tsx`
- Explore: `app/(tabs)/explore.tsx`
- Store Detail: `app/store/[id].tsx`
- Imaging: `app/store/[id]/activities.tsx`
- Verification: `app/store/[id]/verification.tsx`

---

## Next Steps

1. Review this mapping document with your design team
2. Prioritize components based on implementation phase
3. Update Figma file with component specifications
4. Begin Phase 1 migration of existing pages
5. Create custom components as needed
6. Test thoroughly on real devices
