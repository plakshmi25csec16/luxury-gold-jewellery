import  Navbar  from "./Navbar";
import  Hero from "./Hero";
import  Categories from "./Categories";
import  Products from "./Products";
import OfferBanner from "./OfferBanner";
import  Reviews from "./Reviews";
import  Brands  from "./Brands";
import  Footer  from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <OfferBanner />
        <Reviews />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
