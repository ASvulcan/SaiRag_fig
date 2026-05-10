import { Outlet, Link, useLocation } from "react-router";
import { Building2, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "../../assets/logo1.png";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 navbar-glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="SaiRag Engineering LLP" className="h-10 w-auto" />
              <span className="font-semibold text-lg">SaiRag Engineering LLP</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-8">
              {[
                { path: "/", label: "HOME" },
                { path: "/about", label: "ABOUT US" },
                { path: "/services", label: "SERVICES" },
                { path: "/careers", label: "CAREER" },
                { path: "/contact", label: "CONTACT" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6" />
                <span className="font-semibold">SaiRag Engineering LLP</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Advanced Façade Engineering & Mechanical Design Solutions — Delivering precision-driven façade design, detailing, CAD/BIM, and mechanical engineering support for global projects.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About Us" },
                  { path: "/services", label: "Services" },
                  { path: "/careers", label: "Careers" },
                  { path: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4">Contact</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>F102, Mahindra Royale Society, Nehru Nagar, Pimpri, Pune - 411018, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91-8668479379</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>engineering@sairag.net</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} SaiRag Engineering LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
