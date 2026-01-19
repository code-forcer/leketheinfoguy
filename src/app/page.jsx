"use client";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import FeaturedStories from "@/components/FeaturedStories";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Categories />
      <FeaturedStories />
      <Testimonials />
      <CTASection />
    </main>
  );
}