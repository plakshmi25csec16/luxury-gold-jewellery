import necklace from "@/assets/product-necklace.jpg";
import ring from "@/assets/product-ring.jpg";
import bracelet from "@/assets/product-bracelet.jpg";
import earrings from "@/assets/product-earrings.jpg";
import watch from "@/assets/product-watch.jpg";

const categories = [
  { name: "Necklaces", count: 48, img: necklace },
  { name: "Rings", count: 36, img: ring },
  { name: "Bracelets", count: 24, img: bracelet },
  { name: "Earrings", count: 52, img: earrings },
  { name: "Watches", count: 18, img: watch },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Browse</p>
            <h2 className="font-display text-4xl lg:text-5xl">Shop by <span className="text-gradient-gold italic">Category</span></h2>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-gold transition">View all categories →</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((c, i) => (
            <a key={c.name} href="#" className="group relative overflow-hidden rounded-2xl border border-border bg-card aspect-[3/4] animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <img src={c.img} alt={c.name} loading="lazy" width={800} height={800} className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                <h3 className="font-display text-xl lg:text-2xl">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{c.count} items</p>
              </div>
              <div className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full bg-background/60 backdrop-blur opacity-0 group-hover:opacity-100 transition">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
