/**
 * src/components/layout/Layout.tsx
 * Root layout component
 */
import { Navbar } from './Navbar';
import { Footer } from '../sections/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
