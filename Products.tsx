import { Heart, ShoppingBag, Star } from "lucide-react";
import necklace from "@/assets/product-necklace.jpg";
import ring from "@/assets/product-ring.jpg";
import bracelet from "@/assets/product-bracelet.jpg";
import earrings from "@/assets/product-earrings.jpg";
import watch from "@/assets/product-watch.jpg";
import pendant from "@/assets/product-pendant.jpg";

type Product = {
  name: string; price: number; oldPrice?: number; img: string; tag?: string; rating: number;
};

const products: Product[] = [
  { name: "Aurora Diamond Necklace", price: 1249, oldPrice: 1499, img: necklace, tag: "Bestseller", rating: 4.9 },
  { name: "Solitaire 18K Ring", price: 899, img: ring, tag: "New", rating: 4.8 },
  { name: "Classic Link Bracelet", price: 549, oldPrice: 699, img: bracelet, rating: 4.7 },
  { name: "Filigree Drop Earrings", price: 389, img: earrings, tag: "Limited", rating: 4.9 },
  { name: "Heritage Gold Watch", price: 2199, img: watch, rating: 5.0 },
  { name: "Mandala Pendant", price: 429, oldPrice: 499, img: pendant, rating: 4.8 },
];

function ProductCard({ p, i }: { p: Product; i: number }) {
  return (
    <article className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:border-gold/40 transition-all animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
        {p.tag && (
          <span className="absolute top-3 left-3 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">{p.tag}</span>
        )}
        <button aria-label="Wishlist" className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur hover:bg-gradient-gold hover:text-primary-foreground transition">
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold py-2.5 text-xs font-bold text-primary-foreground shadow-gold">
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4 lg:p-5">
        <div className="flex items-center gap-1 text-gold mb-1.5">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs text-muted-foreground">{p.rating}</span>
        </div>
        <h3 className="font-display text-lg leading-tight">{p.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-gradient-gold font-bold text-lg">${p.price}</span>
          {p.oldPrice && <span className="text-xs text-muted-foreground line-through">${p.oldPrice}</span>}
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Curated for you</p>
          <h2 className="font-display text-4xl lg:text-5xl">Featured <span className="text-gradient-gold italic">Pieces</span></h2>
          <p className="text-muted-foreground mt-4">Hand-picked treasures from our master artisans, blending heritage craftsmanship with modern silhouettes.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {products.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
