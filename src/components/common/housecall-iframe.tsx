// src/components/common/housecall-iframe.tsx
'use client';

export function HousecallIframe() {
  return (
    <section
      id="housecall"
      className="py-12 bg-background flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-6">
          Book Your Appointment
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          Use our online scheduling tool powered by Housecall Pro for a quick
          and easy booking experience.
        </p>

        {/* The actual iframe – replace src with your Housecall Pro URL/Embed */}
        <div className="w-full h-[1600px]" style={{ overflow: 'hidden' }}>
          <iframe
            src="https://hcp-consumer-web-production.netlify.app/book/RHINO-GARAGE-DOORS-LLC/1ecef8db8a3149f88ce5ce7e7cc30244?fbclid=PAZXh0bgNhZW0CMTEAAaael73nkd_-dcatvW3CiZTBhHvf1XwJNtaLOkp_u8Q8ryAyCGepIV0CiuA_aem_5KkmPXN9-UUMXfyO8jXJ_w"
            width="100%"
            height="1600"
            scrolling="no"
            className="border-0"
            style={{ overflow: 'hidden' }}
            title="Housecall Pro Booking"
          />
        </div>
      </div>
    </section>
  );
}
