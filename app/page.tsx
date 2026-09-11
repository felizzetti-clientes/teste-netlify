import { Hero } from "@/components/home/Hero";
import { AboutStrip } from "@/components/home/AboutStrip";
import { ProductLinesSection } from "@/components/home/ProductLinesSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <ProductLinesSection />
      <SolutionsSection />
      <BlogSection />
      <FinalCTA />
    </>
  );
}
