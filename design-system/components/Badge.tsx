import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { DesignTokens, getTypographyStyle } from '../tokens';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  size = 'medium',
  style,
  textStyle,
}) => {
  const styles = getBadgeStyles();

  const badgeBackgroundColor = {
    success: DesignTokens.colors.status.success,
    warning: DesignTokens.colors.status.warning,
    error: DesignTokens.colors.status.error,
    info: DesignTokens.colors.status.info,
    default: DesignTokens.colors.neutral.lighter,
  }[variant];

  const badgeTextColor = {
    success: DesignTokens.colors.neutral.white,
    warning: DesignTokens.colors.neutral.white,
    error: DesignTokens.colors.neutral.white,
    info: DesignTokens.colors.neutral.white,
    default: DesignTokens.colors.neutral.dark,
  }[variant];

  const textStyleMap: Record<BadgeSize, TextStyle> = {
    small: styles.text.small,
    medium: styles.text.medium,
    large: styles.text.large,
  };

  const badgeStyle = [
    styles.badge.base,
    styles.badge[size as BadgeSize],
    { backgroundColor: badgeBackgroundColor },
    style,
  ].filter(Boolean) as ViewStyle[];

  const textStyle_ = [
    styles.text.base,
    textStyleMap[size],
    { color: badgeTextColor },
    textStyle,
  ].filter(Boolean) as TextStyle[];

  return (
    <View style={badgeStyle}>
      <Text style={textStyle_}>{label}</Text>
    </View>
  );
};

interface NotificationBadgeProps {
  count: number;
  style?: ViewStyle;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  style,
}) => {
  const styles = getNotificationBadgeStyles();

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const getBadgeStyles = () => ({
  badge: StyleSheet.create({
    base: {
      borderRadius: DesignTokens.borderRadius.full,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: DesignTokens.spacing.md,
    } as ViewStyle,
    small: {
      paddingVertical: DesignTokens.spacing.xs,
      minHeight: 20,
    } as ViewStyle,
    medium: {
      paddingVertical: DesignTokens.spacing.sm,
      minHeight: 28,
    } as ViewStyle,
    large: {
      paddingVertical: DesignTokens.spacing.md,
      minHeight: 36,
    } as ViewStyle,
  }),
  text: StyleSheet.create({
    base: {
      fontWeight: DesignTokens.typography.fontWeight.semibold,
    } as TextStyle,
    small: {
      fontSize: DesignTokens.typography.fontSize.caption,
    } as TextStyle,
    medium: {
      fontSize: DesignTokens.typography.fontSize.labelSmall,
    } as TextStyle,
    large: {
      fontSize: DesignTokens.typography.fontSize.labelMedium,
    } as TextStyle,
  }),
});

const getNotificationBadgeStyles = () =>
  StyleSheet.create({
    container: {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      backgroundColor: DesignTokens.colors.status.error,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...getTypographyStyle('captionSmall'),
      color: DesignTokens.colors.neutral.white,
    },
  });
