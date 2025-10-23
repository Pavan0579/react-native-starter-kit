import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { DesignTokens, getTypographyStyle } from '../tokens';

type ButtonVariant = 'primary' | 'secondary' | 'text';
type ButtonSize = 'large' | 'small';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'large',
  disabled = false,
  fullWidth = true,
  style,
  textStyle,
  ...props
}) => {
  const styles = getButtonStyles();

  const buttonStyle = [
    styles.base,
    fullWidth && styles.fullWidth,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'text' && styles.text,
    size === 'small' && styles.small,
    disabled && styles.disabled,
    style,
  ].filter(Boolean) as ViewStyle[];

  const textColorStyle: TextStyle = {
    color:
      variant === 'primary'
        ? DesignTokens.colors.neutral.white
        : variant === 'secondary'
          ? DesignTokens.colors.neutral.dark
          : DesignTokens.colors.primary.lightBlue,
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled}
      activeOpacity={0.7}
      {...props}
    >
      <Text
        style={[
          getTypographyStyle('bodyLargeSemibold'),
          textColorStyle,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const getButtonStyles = () =>
  StyleSheet.create({
    base: {
      height: DesignTokens.sizing.button.primary.height,
      borderRadius: DesignTokens.borderRadius.lg,
      paddingVertical: DesignTokens.sizing.button.primary.paddingVertical,
      paddingHorizontal: DesignTokens.sizing.button.primary.paddingHorizontal,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    fullWidth: {
      width: '100%',
    },
    primary: {
      backgroundColor: DesignTokens.colors.primary.blue,
      borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    secondary: {
      backgroundColor: DesignTokens.colors.neutral.lighter,
      borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    text: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    small: {
      height: DesignTokens.sizing.button.secondary.height,
      paddingVertical: DesignTokens.sizing.button.secondary.paddingVertical,
      paddingHorizontal: DesignTokens.sizing.button.secondary.paddingHorizontal,
    },
    disabled: {
      opacity: DesignTokens.opacity.disabled,
    },
  });
