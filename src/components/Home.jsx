import Hero from "./Hero";
import FeaturedCategories from "./FeaturedCategories";
import TrendingProducts from "./TrendingProducts";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedCollections from "./FeaturedCollections";
import AboutBrandTeaser from "./AboutBrandTeaser";
import StatsBanner from "./shared/StatsBanner";
import Testimonials from "./shared/Testimonials";
import FAQSection from "./FAQSection";
import ContactCTA from "./ContactCTA";
import { testimonials } from "../data/testimonials";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <TrendingProducts />
      <WhyChooseUs />
      <FeaturedCollections />
      <AboutBrandTeaser />
      <StatsBanner />
      <section className="py-16 xs:py-20 sm:py-24 px-4 xs:px-6 bg-white">
        <Testimonials testimonials={testimonials} />
      </section>
      <FAQSection />
      <ContactCTA />
    </>
  );
}

export default Home;
