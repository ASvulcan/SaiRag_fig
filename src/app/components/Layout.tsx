import { Outlet, Link, useLocation } from "react-router";
import { Building2, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo1.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Layout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/services", label: "SERVICES" },
    { path: "/careers", label: "CAREER" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 navbar-glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="SaiRag Engineering LLP" className="h-8 sm:h-10 w-auto" />
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">SaiRag Engineering LLP</span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors text-sm font-medium ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-black/5 rounded-md transition-colors">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <img src={logo} alt="Logo" className="h-8 w-auto" />
                      <span className="text-left">SaiRag Engineering</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium px-2 py-1 rounded-md transition-colors ${
                          isActive(link.path)
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-6 h-6" />
                <span className="font-semibold text-lg">SaiRag Engineering LLP</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                Advanced Façade Engineering & Mechanical Design Solutions — Delivering precision-driven façade design, detailing, CAD/BIM, and mechanical engineering support for global projects.
              </p>
              <div className="flex gap-5">
                {[
                  { Icon: Linkedin, href: "#", label: "LinkedIn" },
                  { Icon: Facebook, href: "#", label: "Facebook" },
                  { Icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-primary-foreground/40">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-primary-foreground/40">
                Contact
              </h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary-foreground/90" />
                  <span className="text-sm leading-relaxed">F102, Mahindra Royale Society, Nehru Nagar, Pimpri, Pune - 411018, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary-foreground/90" />
                  <span className="text-sm">+91-8668479379</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-primary-foreground/90" />
                  <span className="text-sm">engineering@sairag.net</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} SaiRag Engineering LLP. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
