'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function Navbar() {
  return (
    <header className="w-full bg-brand-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={120}
            height={120}
            priority
          />
          <span className="text-xl font-bold tracking-wide">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-200 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            variant="default"
            className="bg-brand-500 hover:bg-brand-600 text-white"
          >
            <Link href="#housecall">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
