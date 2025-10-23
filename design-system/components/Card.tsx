import React from 'react';
import {
  View,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { DesignTokens } from '../tokens';

type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps extends ViewProps {
  variant?: CardVariant;
  padding?: number;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = DesignTokens.spacing.xl,
  style,
  children,
  ...props
}) => {
  const styles = getCardStyles();

  const cardStyle = [
    styles.base,
    styles[variant],
    { padding },
    style,
  ].filter(Boolean) as ViewStyle[];

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  );
};

const getCardStyles = () =>
  StyleSheet.create({
    base: {
      borderRadius: DesignTokens.borderRadius.lg,
      backgroundColor: DesignTokens.colors.neutral.white,
    },
    default: {
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    outlined: {
      borderWidth: 1,
      borderColor: DesignTokens.colors.neutral.light,
    },
    elevated: {
      shadowColor: DesignTokens.shadow.sm.shadowColor,
      shadowOffset: DesignTokens.shadow.sm.shadowOffset,
      shadowOpacity: DesignTokens.shadow.sm.shadowOpacity,
      shadowRadius: DesignTokens.shadow.sm.shadowRadius,
      elevation: DesignTokens.shadow.sm.elevation,
    },
  });
