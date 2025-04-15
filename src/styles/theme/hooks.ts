'use client';

import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
    const { theme, setTheme, systemTheme } = useNextTheme();

    // Determine if the current theme is dark
    const isDark =
        theme === 'dark' ||
        (theme === 'system' && systemTheme === 'dark');

    // Toggle between light and dark
    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return {
        theme,
        setTheme,
        isDark,
        toggleTheme
    };
}