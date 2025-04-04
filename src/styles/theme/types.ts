/**
 * src/styles/theme/types.ts
 * Defines the structure of our theme system
 */
export interface ThemeColors {
    // Core brand colors from the Rhino logo
    rhino: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };

    // Semantic color mappings
    background: string;
    foreground: string;
    primary: {
        DEFAULT: string;
        hover: string;
        muted: string;
    };
    secondary: {
        DEFAULT: string;
        hover: string;
        muted: string;
    };
    accent: {
        DEFAULT: string;
        hover: string;
        muted: string;
    };
    error: {
        DEFAULT: string;
        hover: string;
        muted: string;
    };
    warning: {
        DEFAULT: string;
        hover: string;
        muted: string;
    };
    success: {
        DEFAULT: string;
        hover: string;
        muted: string;
    };
    info: {
        DEFAULT: string;
        hover: string;
        muted: string;
    };
    border: string;
    divider: string;
    surface: {
        DEFAULT: string;
        hover: string;
        selected: string;
        disabled: string;
    };
}

export interface ThemeConfig {
    colors: ThemeColors;
    borderRadius: string;
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    typography: {
        fontFamily: string;
        fontSize: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        fontWeight: {
            normal: number;
            medium: number;
            bold: number;
        };
        lineHeight: {
            tight: string;
            normal: string;
            relaxed: string;
        };
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
    };
    transitions: {
        fast: string;
        normal: string;
        slow: string;
    };
}