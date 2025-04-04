// src/app/page.tsx
import { Navbar } from '@/components/layout/Navbar';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { HousecallIframe } from '@/components/common/housecall-iframe';
import { Hero } from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* About Section */}
      <About />

      {/* Housecall Pro Booking Iframe */}
      <HousecallIframe />

      {/* Footer */}
      <footer className="mt-auto py-6 bg-brand-800 text-white text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Rhino Garage Doors LLC. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
