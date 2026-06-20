import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold">A</span>
              <span className="font-display text-2xl">Aurum<span className="text-gradient-gold">&amp;Co</span></span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">Crafting exquisite gold jewelry since 2014. Ethically sourced, expertly designed, made to last.</p>
            <form className="mt-6 flex max-w-sm rounded-full border border-border bg-card overflow-hidden focus-within:border-gold/50 transition">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-5 py-3 text-sm outline-none" />
              <button className="px-5 bg-gradient-gold text-primary-foreground" aria-label="Subscribe"><Mail className="h-4 w-4" /></button>
            </form>
          </div>

          {[
            { title: "Shop", items: ["Necklaces", "Rings", "Bracelets", "Earrings", "Watches"] },
            { title: "Company", items: ["About", "Stores", "Sustainability", "Press", "Careers"] },
            { title: "Help", items: ["Contact", "Shipping", "Returns", "Care Guide", "Size Guide"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-lg mb-4">{col.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {col.items.map((i) => (
                  <li key={i}><a href="#" className="text-muted-foreground hover:text-gold transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Aurum&amp;Co. All rights reserved.</p>
          <div className="flex gap-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-gold/50 hover:bg-gold/10 hover:text-gold transition" aria-label="Social"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
