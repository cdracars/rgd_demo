/**
 * src/components/layout/Layout.tsx
 * Root layout component with theme provider
 */
import { ThemeProvider } from '@/styles/theme/provider';
import { Navbar } from './Navbar';
import { Footer } from '../sections/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
