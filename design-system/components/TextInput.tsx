import React from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { DesignTokens, getTypographyStyle } from '../tokens';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  helperText?: string;
}

export const TextInput: React.FC<CustomTextInputProps> = ({
  label,
  error,
  containerStyle,
  helperText,
  placeholderTextColor = DesignTokens.colors.neutral.light,
  ...props
}) => {
  const styles = getInputStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={[
          styles.input,
          error && styles.inputError,
          props.editable === false && styles.inputDisabled,
        ]}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

const getInputStyles = () => {
  const labelStyle = getTypographyStyle('labelSmall');
  const captionStyle = getTypographyStyle('caption');

  return StyleSheet.create({
    container: {
      width: '100%',
    },
    label: {
      fontSize: labelStyle.fontSize,
      letterSpacing: labelStyle.letterSpacing,
      fontWeight: '500' as const,
      color: DesignTokens.colors.neutral.medium,
      marginBottom: DesignTokens.spacing.sm,
    },
    input: {
      height: DesignTokens.sizing.input.height,
      borderWidth: 1,
      borderRadius: DesignTokens.borderRadius.lg,
      paddingHorizontal: DesignTokens.sizing.input.paddingHorizontal,
      fontSize: DesignTokens.typography.fontSize.bodyLarge,
      fontWeight: '400' as const,
      letterSpacing: DesignTokens.typography.letterSpacing.body,
      backgroundColor: DesignTokens.colors.neutral.white,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      color: DesignTokens.colors.neutral.dark,
    },
    inputError: {
      borderColor: DesignTokens.colors.status.error,
    },
    inputDisabled: {
      opacity: DesignTokens.opacity.disabled,
      backgroundColor: DesignTokens.colors.neutral.pale,
    },
    errorText: {
      fontSize: captionStyle.fontSize,
      letterSpacing: captionStyle.letterSpacing,
      fontWeight: '400' as const,
      color: DesignTokens.colors.status.error,
      marginTop: DesignTokens.spacing.xs,
    },
    helperText: {
      fontSize: captionStyle.fontSize,
      letterSpacing: captionStyle.letterSpacing,
      fontWeight: '400' as const,
      color: DesignTokens.colors.neutral.medium,
      marginTop: DesignTokens.spacing.xs,
    },
  });
};
