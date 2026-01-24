"use client";
import Hero from "@/app/(shop)/_components/Hero";
import NewArrivals from "@/app/(shop)/_components/NewArrivals";
import Newsletter from "@/app/(shop)/_components/Newsletter";
import Stats from "@/app/(shop)/_components/Stats";
import Features from "@/app/(shop)/_components/Features";
import Categories from "@/app/(shop)/_components/Categories";
export default function HomePage() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Newsletter />
      <Stats />
      <Categories />
      <Features />
    </>
  );
}
