"use client";

const testimonials = [
  {
    name: "Placeholder Client",
    role: "Ops Lead, professional services",
    quote: "BARY translated our messy offer into a site that finally resonated with decision makers.",
  },
  {
    name: "Sample Reference",
    role: "Founder, tech services",
    quote: "They were direct about what to drop and what to double down on. The launch plan was immediately usable.",
  },
  {
    name: "TODO: Approved quote",
    role: "Marketing Lead, logistics",
    quote: "Awaiting approval — placeholder for upcoming published testimonial.",
  },
];

export function TestimonialsRow() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 max-w-xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonials</span>
            <h3 id="testimonials-title" className="font-heading text-2xl sm:text-3xl font-bold">
              Honest feedback from B2B teams
            </h3>
            <p className="text-muted-foreground text-sm">Real names published once clients approve; until then, we share context transparently.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 flex-1">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4 shadow-[var(--shadow-sm)]">
                <p className="text-sm text-[hsl(var(--text))]">“{item.quote}”</p>
                <p className="mt-3 text-xs font-semibold text-[hsl(var(--text))]">{item.name}</p>
                <p className="text-xs text-[hsl(var(--text-muted))]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
