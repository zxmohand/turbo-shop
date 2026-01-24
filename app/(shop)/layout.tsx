import { Metadata } from "next";
import Navbar from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | TurboShop",
    default: "TurboShop - Your Premium Shopping Destination",
  },
  description:
    "Discover amazing products at TurboShop. Browse our collection of high-quality items with fast shipping and excellent customer service.",
  keywords: ["e-commerce", "shopping", "online store", "TurboShop"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TurboShop",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Navbar wrapped in semantic header element */}
      <header>
        <Navbar />
      </header>

      {/* 2. Main content area: flex-grow pushes the footer down */}
      <main className="grow container mx-auto px-4 py-8">{children}</main>

      {/* 3. Footer wrapped in semantic footer element */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
