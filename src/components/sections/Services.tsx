import { siteConfig } from '@/config/site';
import { ServiceCard } from './ServiceCard';

/**
 * src/components/sections/Services.tsx
 * Services section with enhanced cards
 */
export function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional garage door services delivered with military precision
            and civilian-friendly care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
