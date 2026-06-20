import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Sophia Laurent", role: "Verified Buyer", text: "The craftsmanship is breathtaking. My necklace feels like a heirloom — I'll treasure it forever.", rating: 5 },
  { name: "Amelia Chen", role: "Verified Buyer", text: "Packaging, quality, finish — every detail screams luxury. Worth every penny.", rating: 5 },
  { name: "Isabella Ross", role: "Verified Buyer", text: "Aurum&Co's customer service is as polished as their jewelry. Truly five-star.", rating: 5 },
];

export function Reviews() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Testimonials</p>
          <h2 className="font-display text-4xl lg:text-5xl">Loved by <span className="text-gradient-gold italic">connoisseurs</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={r.name} className="relative rounded-2xl border border-border bg-card p-7 shadow-card animate-fade-up hover:border-gold/40 transition" style={{ animationDelay: `${i * 100}ms` }}>
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/30" />
              <div className="flex gap-0.5 text-gold mb-4">
                {Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="font-display text-xl leading-snug">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-bold">{r.name[0]}</div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
