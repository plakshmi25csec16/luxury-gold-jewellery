import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-gold.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,var(--color-gold)_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs tracking-widest uppercase text-gold">
            <Sparkles className="h-3.5 w-3.5" /> New 24K Collection
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Timeless <span className="text-gradient-gold italic">Gold</span><br />
            crafted for you
          </h1>
          <p className="mt-6 max-w-lg text-muted-foreground text-lg">
            Discover handcrafted fine jewelry — meticulously designed, ethically sourced, and finished with a brilliance that lasts generations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.03] transition">
              Shop the Collection
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#categories" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold hover:border-gold/50 transition">
              Explore Categories
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[["24K","Pure Gold"],["10K+","Happy Clients"],["Lifetime","Warranty"]].map(([n,l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-gradient-gold">{n}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold/20 shadow-gold">
            <img src={heroImg} alt="Luxury gold jewelry collection" width={1600} height={1200} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card border border-gold/20 p-4 shadow-card animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-bold">★</div>
              <div>
                <div className="text-sm font-semibold">4.9 / 5.0</div>
                <div className="text-xs text-muted-foreground">2,400+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
