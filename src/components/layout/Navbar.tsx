'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/common/Container';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={120}
            height={120}
            priority
          />
          <span className="text-xl font-bold tracking-wide text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}

          <ThemeToggle />

          <Button
            asChild
            variant="default"
          >
            <Link href="#housecall">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <Container className="py-3">
            <nav className="flex flex-col space-y-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                asChild
                variant="default"
                className="w-full"
              >
                <Link href="#housecall" onClick={() => setIsMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
