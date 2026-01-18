'use client'
import Header from '@/app/(shop)/_components/Header'
import Hero from '@/app/(shop)/_components/Hero'
import NewArrivals from '@/app/(shop)/_components/NewArrivals'
import Newsletter from '@/app/(shop)/_components/Newsletter'
import Stats from '@/app/(shop)/_components/Stats'
import Footer from '@/app/(shop)/_components/Footer'
import Features from '@/app/(shop)/_components/Features'
import Categories from '@/app/(shop)/_components/Categories'
export default function HomePage() {
  return (
    <>
    <Header />
    <Hero />
    <NewArrivals />
    <Newsletter />
    <Stats />
    <Categories />
    <Features />
    <Footer />
    </>
  )
}
