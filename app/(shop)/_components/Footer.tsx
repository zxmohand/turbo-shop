import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";


export default function Footer() {
  const footerLinks = {
    shop: [
      { name: "All products", href: "#" },
      { name: "New arrivals", href: "#" },
      { name: "Best sellers", href: "#" },
      { name: "On sale", href: "#" },
    ],
    support: [
      { name: "Order status", href: "#" },
      { name: "Shipping info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Contact us", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
    speedshop: [
      { name: "About us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Store locator", href: "#" },
      { name: "Our Blog", href: "#" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-primary rounded-sm"></div>
              <span className="text-lg font-bold text-white">SpeedShop</span>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Experience the fastest and most secure online shopping, built for enthusiasts like you.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-card/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <SlSocialInstagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-card/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <SlSocialTwitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">SpeedShop</h3>
            <ul className="space-y-2.5">
              {footerLinks.speedshop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <p className="text-xs text-white/50 text-center">
            © 2024 SpeedShop Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}