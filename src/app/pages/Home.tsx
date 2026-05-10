import { ArrowRight, Building2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/logo1.png";
import heroBg from "../../assets/aleksandrs-zeltisevs-O-vNkUIFgtA-unsplash.jpg";
import officeImg from "../../assets/samuel-pagel-h7ABHB1X4s8-unsplash.jpg";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Modern glass building facade"
            className="w-full h-full object-cover scale-110 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up">
            <Building2 className="w-8 h-8 animate-float" />
            <span className="text-2xl font-semibold">SaiRag Engineering LLP</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 animate-fade-in-up delay-200">SaiRag Engineering LLP</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Advanced Façade Engineering & Mechanical Design Solutions — Delivering precision-driven façade design, detailing, CAD/BIM, and mechanical engineering support for global projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 btn-glass text-white px-8 py-3 rounded-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl mb-6">Engineering Precision, Delivered Globally</h2>
              <p className="text-muted-foreground mb-4">
                SaiRag Engineering LLP is a Pune-based engineering services company specialized in façade engineering and mechanical design solutions. We partner with global clients to deliver high-quality design, detailing, and CAD/BIM support with a strong focus on precision, efficiency, and international engineering standards.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: "2023", label: "Year Founded" },
                  { number: "26+", label: "Projects Delivered" },
                  { number: "49,000+", label: "Engineering Hours" },
                ].map((stat, i) => (
                  <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${400 + i * 150}ms` }}>
                    <div className="text-4xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden image-zoom animate-fade-in-up delay-300">
              <img
                src="https://images.unsplash.com/photo-1776617130019-361f70f3c703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Façade engineering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776617130019-361f70f3c703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Glass facade architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions for façade and mechanical design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                num: "01",
                title: "Façade Engineering",
                desc: "Comprehensive façade design and detailing aligned with project specifications and international standards."
              },
              {
                num: "02",
                title: "Structural Support & Interface Design",
                desc: "Design and detailing of critical support elements ensuring structural integrity and seamless integration."
              },
              {
                num: "03",
                title: "Mechanical Design Services",
                desc: "Engineering support for mechanical components and assemblies focused on functionality and manufacturability."
              },
              {
                num: "04",
                title: "CAD & BIM Services",
                desc: "Accurate drafting and modeling support to enhance coordination and project efficiency."
              }
            ].map((service, i) => (
              <div
                key={i}
                className="glass-card rounded-lg p-6 animate-fade-in-up"
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className="text-4xl text-primary/20 mb-4">{service.num}</div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:underline group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Get in touch with our team for your engineering needs
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", detail: "engineering@sairag.net" },
                  { icon: Phone, title: "Phone", detail: "+91-8668479379" },
                  { icon: MapPin, title: "Office Address", detail: "F102, Mahindra Royale Society,\nNehru Nagar, Pimpri,\nPune - 411018, India" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${200 + i * 150}ms` }}>
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden image-zoom animate-fade-in-up delay-300">
              <img
                src={officeImg}
                alt="Office location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776941251083-caddb016c90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern glass building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-dark inline-block px-12 py-10 rounded-2xl animate-fade-in-up">
            <h2 className="text-4xl mb-6 text-white">Follow Us</h2>
            <p className="text-xl text-white/80 mb-8">
              Coming soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}