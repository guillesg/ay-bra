import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedProperties from "./components/properties/FeaturedProperties";
import Reviews from "./components/home/reviews/Reviews";
import Footer from "../app/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <Reviews />
      <Footer />
    </>
  );
}