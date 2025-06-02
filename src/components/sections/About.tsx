/**
 * src/components/sections/About.tsx
 * Updated about section with military emphasis
 */
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl" />
            <Image
              src="/rhino_van.jpg"
              alt="Rhino Garage Doors Service Van"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl relative z-10"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              About Rhino Garage Doors
            </h2>

            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">
                From military precision to garage perfection - our USMC
                veteran-owned business brings the same dedication, discipline,
                and attention to detail to your garage door needs.
              </p>

              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="flex items-center text-card-foreground">
                  <span className="font-semibold mr-2">USMC Veteran Owned</span>{' '}
                  - Bringing military excellence to civilian service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
