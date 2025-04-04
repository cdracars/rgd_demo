/**
 * src/styles/theme/tokens.ts
 * Theme tokens that map raw colors to semantic uses
 */
import { colors } from './colors';

export const tokens = {
    light: {
        background: colors.rhino[50],
        foreground: colors.rhino[900],
        primary: {
            DEFAULT: colors.rhino[500],
            hover: colors.rhino[600],
            muted: colors.rhino[200],
        },
        secondary: {
            DEFAULT: colors.rhino[400],
            hover: colors.rhino[500],
            muted: colors.rhino[100],
        },
        accent: {
            DEFAULT: colors.info.DEFAULT,
            hover: colors.info.dark,
            muted: colors.info.light,
        },
        error: {
            DEFAULT: colors.error.DEFAULT,
            hover: colors.error.dark,
            muted: colors.error.light,
        },
        warning: {
            DEFAULT: colors.warning.DEFAULT,
            hover: colors.warning.dark,
            muted: colors.warning.light,
        },
        success: {
            DEFAULT: colors.success.DEFAULT,
            hover: colors.success.dark,
            muted: colors.success.light,
        },
        info: {
            DEFAULT: colors.info.DEFAULT,
            hover: colors.info.dark,
            muted: colors.info.light,
        },
        border: colors.rhino[200],
        divider: colors.rhino[100],
        surface: {
            DEFAULT: colors.rhino[50],
            hover: colors.rhino[100],
            selected: colors.rhino[200],
            disabled: colors.rhino[100],
        },
    },
    dark: {
        background: colors.rhino[900],
        foreground: colors.rhino[50],
        primary: {
            DEFAULT: colors.rhino[400],
            hover: colors.rhino[300],
            muted: colors.rhino[700],
        },
        secondary: {
            DEFAULT: colors.rhino[500],
            hover: colors.rhino[400],
            muted: colors.rhino[800],
        },
        accent: {
            DEFAULT: colors.info.DEFAULT,
            hover: colors.info.light,
            muted: colors.info.dark,
        },
        error: {
            DEFAULT: colors.error.DEFAULT,
            hover: colors.error.light,
            muted: colors.error.dark,
        },
        warning: {
            DEFAULT: colors.warning.DEFAULT,
            hover: colors.warning.light,
            muted: colors.warning.dark,
        },
        success: {
            DEFAULT: colors.success.DEFAULT,
            hover: colors.success.light,
            muted: colors.success.dark,
        },
        info: {
            DEFAULT: colors.info.DEFAULT,
            hover: colors.info.light,
            muted: colors.info.dark,
        },
        border: colors.rhino[700],
        divider: colors.rhino[800],
        surface: {
            DEFAULT: colors.rhino[800],
            hover: colors.rhino[700],
            selected: colors.rhino[600],
            disabled: colors.rhino[800],
        },
    },
};