import { Link } from "react-router-dom";
import { Zap, Mail, Phone, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Derifund</span>
            </Link>
            <p className="text-background/60 mb-6 leading-relaxed">
              Instant transfers between Deriv and M-PESA. Fast, secure, and reliable fund management for Kenyan traders.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-background/60 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/60 hover:text-background transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/60 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-background/60 hover:text-background transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-background/60 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:dericash@gmail.com"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  dericash@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+254795190887"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  +254 795 190887
                </a>
              </li>
            </ul>
            <p className="text-background/40 text-sm mt-4">
              Eldoret, Kenya
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2025 Dericash Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/terms" className="text-background/40 hover:text-background transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-background/40 hover:text-background transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
