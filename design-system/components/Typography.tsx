import React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { DesignTokens, getTypographyStyle } from '../tokens';

type TypographyVariant =
  | 'displayTitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'bodyLarge'
  | 'bodyLargeSemibold'
  | 'body'
  | 'bodySemibold'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall'
  | 'caption';

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  style?: TextStyle;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = DesignTokens.colors.neutral.dark,
  style,
  children,
  ...props
}) => {
  const styles = getTypographyStyles();
  const variantStyle = getTypographyStyle(variant);

  const textStyle: TextStyle[] = [
    variantStyle,
    { color },
    style,
  ];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

// Specialized typography components
export const DisplayTitle: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="displayTitle" {...props} />
);

export const Heading1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h1" {...props} />
);

export const Heading2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h2" {...props} />
);

export const Heading3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h3" {...props} />
);

export const BodyLarge: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="bodyLarge" {...props} />
);

export const BodyLargeSemibold: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="bodyLargeSemibold" {...props} />
);

export const Body: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body" {...props} />
);

export const BodySemibold: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="bodySemibold" {...props} />
);

export const LabelLarge: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="labelLarge" {...props} />
);

export const LabelMedium: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="labelMedium" {...props} />
);

export const LabelSmall: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="labelSmall" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
);

const getTypographyStyles = () =>
  StyleSheet.create({
    // Styles are applied dynamically via getTypographyStyle()
  });
