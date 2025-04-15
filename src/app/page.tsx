// src/app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { HousecallIframe } from '@/components/common/housecall-iframe';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* About Section */}
      <About />

      {/* Housecall Pro Booking Iframe */}
      <HousecallIframe />
    </>
  );
}
