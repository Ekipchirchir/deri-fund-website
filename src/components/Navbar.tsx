import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQs", href: "#faq" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] glass backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-elevated overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Derifund logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                DERI-FUND
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dericash.derifund&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Download App
                </a>
              </Button>

              <Button className="hero-gradient text-primary-foreground shadow-elevated hover:opacity-90 transition-opacity">
                <a
                  href="https://app.deri-fund.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Login
                </a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      
      {createPortal(
        isOpen && (
          <div className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-md md:hidden flex flex-col">
            
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 w-full px-8 mt-8">
                <Button variant="outline" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dericash.derifund&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download App
                  </a>
                </Button>

                <Button className="hero-gradient text-primary-foreground">
                  <a
                    href="https://app.deri-fund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ),
        document.body
      )}
    </>
  );
};

export default Navbar;
