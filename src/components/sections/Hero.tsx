import Link from 'next/link';
import { Button } from '../ui/Button';

/**
 * src/components/sections/Hero.tsx
 * Enhanced hero section with brand focus
 */
export function Hero() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-b from-rhino-800 to-rhino-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="block text-rhino-200">Professional</span>
            Garage Door Services
            <span className="block text-rhino-300 mt-2">
              With Military Precision
            </span>
          </h1>

          <p className="text-xl text-rhino-100 max-w-2xl mx-auto">
            From the United States Marine Corps to your garage door - bringing
            discipline, reliability, and excellence to every service call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rhino-500 hover:bg-rhino-600"
            >
              <Link href="#housecall">Schedule Service</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
