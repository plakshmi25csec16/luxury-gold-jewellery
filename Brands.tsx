const brands = ["VOGUE", "ELLE", "HARPER'S", "GQ", "FORBES", "TATLER", "BAZAAR"];

export function Brands() {
  return (
    <section className="py-16 border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">As featured in</p>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee w-max">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display text-3xl lg:text-4xl text-muted-foreground hover:text-gradient-gold transition whitespace-nowrap tracking-widest">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
