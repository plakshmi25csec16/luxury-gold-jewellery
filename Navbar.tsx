import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X, Heart } from "lucide-react";

const links = ["Home", "Shop", "Collections", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display font-bold shadow-gold">A</span>
          <span className="font-display text-xl lg:text-2xl tracking-wide">
            Aurum<span className="text-gradient-gold">&amp;Co</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l} href="#" className="relative text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-gold hover:after:w-full after:transition-all">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition" aria-label="Account"><User className="h-5 w-5" /></button>
          <button className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition" aria-label="Wishlist"><Heart className="h-5 w-5" /></button>
          <button className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-gold text-[10px] font-bold text-primary-foreground">3</span>
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border px-4 py-4 flex flex-col gap-1 animate-fade-up">
          {links.map((l) => (
            <a key={l} href="#" className="px-3 py-3 rounded-lg hover:bg-secondary text-foreground/90">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
