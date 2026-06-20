import { ArrowRight } from "lucide-react";
import banner from "@/assets/offer-banner.jpg";

export function OfferBanner() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-gold">
          <img src={banner} alt="Special offer" loading="lazy" width={1600} height={700} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 animate-shimmer pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16 min-h-[360px] items-center">
            <div>
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs tracking-widest uppercase text-gold">Limited Time</span>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Up to <span className="text-gradient-gold italic">40% Off</span><br />
                Anniversary Sale
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">Celebrate ten years of craftsmanship with exclusive savings on our most beloved gold collections.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-gold hover:scale-[1.03] transition">
                  Shop Sale <ArrowRight className="h-4 w-4" />
                </a>
                <div className="flex gap-3">
                  {[["02","Days"],["18","Hrs"],["42","Min"]].map(([n,l]) => (
                    <div key={l} className="grid place-items-center rounded-xl bg-card/80 backdrop-blur border border-border px-4 py-2 min-w-[64px]">
                      <span className="font-display text-2xl text-gradient-gold">{n}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
