/**
 * Design System Tokens
 * Centralized configuration for colors, typography, spacing, and sizing
 * This file serves as the single source of truth for all design values
 */

export const DesignTokens = {
  // ============================================
  // COLOR TOKENS
  // ============================================
  colors: {
    // Primary Colors
    primary: {
      blue: '#2F80ED',
      darkBlue: '#125DCE',
      lightBlue: '#6E85E3',
    },

    // Neutral Colors
    neutral: {
      black: '#000000',
      dark: '#333333',
      medium: '#808080',
      light: '#BDBDBD',
      lighter: '#E3EBF8',
      pale: '#F1F1F1',
      white: '#FFFFFF',
    },

    // Semantic Colors
    status: {
      success: '#2F80ED',
      warning: '#F49B17',
      error: '#E7343E',
      highlight: '#FFCC2B',
      info: '#478FF7',
    },

    // Gradients
    gradients: {
      primary: ['#125DCE', '#2F80ED'],
    },
  },

  // ============================================
  // TYPOGRAPHY TOKENS
  // ============================================
  typography: {
    fontFamilies: {
      system: 'system-ui',
      serif: 'ui-serif',
      rounded: 'ui-rounded',
      mono: 'ui-monospace',
    },

    // Font sizes and weights
    fontSize: {
      display: 34, // Title
      h1: 24, // App title
      h2: 20, // Screen title
      h3: 18, // Section title
      bodyLarge: 17, // Primary body
      body: 16, // Standard body
      labelLarge: 15, // Secondary label
      labelMedium: 13, // Metadata
      labelSmall: 12, // Caption
      caption: 10, // Smallest
    },

    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    lineHeight: {
      tight: 24,
      normal: 30,
    },

    letterSpacing: {
      title: -0.34,
      heading: -0.24,
      body: -0.17,
      label: -0.15,
      small: -0.1,
      caption: -0.08,
      tinyCaption: -0.12,
    },

    // Predefined text styles
    styles: {
      displayTitle: {
        fontSize: 34,
        fontWeight: '500',
        letterSpacing: -0.34,
      },
      h1: {
        fontSize: 24,
        fontWeight: '500',
        letterSpacing: -0.24,
      },
      h2: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: -0.2,
      },
      h3: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: -0.18,
      },
      bodyLarge: {
        fontSize: 17,
        fontWeight: '400',
        letterSpacing: -0.17,
      },
      bodyLargeSemibold: {
        fontSize: 17,
        fontWeight: '500',
        letterSpacing: -0.17,
      },
      body: {
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: -0.15,
      },
      bodySemibold: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: -0.15,
      },
      labelLarge: {
        fontSize: 15,
        fontWeight: '400',
        letterSpacing: -0.15,
      },
      labelMedium: {
        fontSize: 13,
        fontWeight: '400',
        letterSpacing: -0.13,
      },
      labelSmall: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: -0.12,
      },
      caption: {
        fontSize: 10,
        fontWeight: '400',
        letterSpacing: -0.1,
      },
      captionSmall: {
        fontSize: 8,
        fontWeight: '700',
        letterSpacing: -0.08,
      },
    },
  },

  // ============================================
  // SPACING TOKENS
  // ============================================
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,

    // Common spacing combinations
    screenPadding: 16,
    sectionGap: 24,
    elementGap: 12,
    itemGap: 8,
  },

  // ============================================
  // SIZING TOKENS
  // ============================================
  sizing: {
    // Button sizes
    button: {
      primary: {
        height: 50,
        paddingVertical: 15,
        paddingHorizontal: 20,
      },
      secondary: {
        height: 44,
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
    },

    // Input sizes
    input: {
      height: 50,
      paddingHorizontal: 20,
    },

    // Icon sizes
    icon: {
      small: 12,
      default: 24,
      large: 28,
      display: 54,
    },

    // Card sizes
    card: {
      activity: 109,
      progressCircle: 144,
    },

    // Component heights
    statusBar: 44,
    tabBar: 56,
  },

  // ============================================
  // BORDER RADIUS TOKENS
  // ============================================
  borderRadius: {
    sm: 4,
    md: 7,
    lg: 10,
    xl: 12,
    full: 50,
  },

  // ============================================
  // OPACITY TOKENS
  // ============================================
  opacity: {
    disabled: 0.4,
    hover: 0.8,
    border: 0.15,
  },

  // ============================================
  // SHADOW TOKENS
  // ============================================
  shadow: {
    sm: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    md: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get color value by path
 * Usage: getColor('colors.primary.blue') => '#2F80ED'
 */
export function getColor(path: string): string {
  const parts = path.split('.');
  let value: any = DesignTokens;

  for (const part of parts) {
    value = value[part];
    if (value === undefined) {
      console.warn(`Color token not found: ${path}`);
      return '#000000';
    }
  }

  return value;
}

/**
 * Get typography style
 * Usage: getTypographyStyle('h1') => { fontSize: 24, fontWeight: '500', ... }
 */
export function getTypographyStyle(style: keyof typeof DesignTokens.typography.styles) {
  return DesignTokens.typography.styles[style];
}

/**
 * Get spacing value
 * Usage: getSpacing('lg') => 16
 */
export function getSpacing(size: keyof typeof DesignTokens.spacing): number {
  const value = DesignTokens.spacing[size];
  return typeof value === 'number' ? value : 0;
}

// Re-export for convenience
export const {
  colors,
  typography,
  spacing,
  sizing,
  borderRadius,
  opacity,
  shadow,
} = DesignTokens;
