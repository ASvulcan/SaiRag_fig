import aboutImg from "../../assets/aleksandrs-zeltisevs-O-vNkUIFgtA-unsplash.jpg";
import visionBg from "../../assets/declan-sun-ltpDzIWKYR8-unsplash.jpg";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImg}
            alt="Modern building architecture"
            className="w-full h-full object-cover scale-110 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl mb-4">About SaiRag Engineering LLP</h1>
          <p className="text-xl text-white/90">Building the future through engineering excellence</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                SaiRag Engineering LLP is a Pune-based engineering services company specialized in façade engineering and mechanical design solutions. We partner with global clients to deliver high-quality design, detailing, and CAD/BIM support with a strong focus on precision, efficiency, and international engineering standards.
              </p>
              <p className="text-muted-foreground mb-4">
                From concept to completion, we prioritize quality, safety, and client satisfaction, making us the preferred choice for mechanical engineering services.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden image-zoom animate-fade-in-up delay-200">
              <img
                src="https://images.unsplash.com/photo-1778050368592-ec4b8ab3546d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Modern glass building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={visionBg}
            alt="Glass facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl mb-6">Our Vision</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We aspire to become a trusted engineering partner for global clients, recognized for consistency, technical excellence, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-lg p-8 animate-fade-in-up">
              <h3 className="text-2xl mb-4">Our Vision Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Strengthen our position in façade engineering and mechanical design services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Continuously enhance our capabilities in CAD, BIM, and advanced engineering tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Expand our presence across European and international markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Build long-term partnerships based on trust, quality, and performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At SaiRag Engineering, we believe that quality engineering is defined by attention to detail, clarity in communication, and a deep understanding of real-world execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Precision and detailing",
              "Alignment with international standards and best practices",
              "Seamless integration with client standards and workflows",
              "Commitment to timely and consistent delivery",
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-lg p-8 text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working With Us */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776617130189-f56b5ac44534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in-up">
          <div className="glass-card-dark rounded-2xl p-12">
            <h2 className="text-4xl mb-6">Working with Us</h2>
            <p className="text-xl text-white/90 mb-8">
              We collaborate with façade consultants, contractors, fabricators, and engineering firms who value dependable support and high-quality outputs.
            </p>
            <p className="text-xl text-white/90 mb-8">
              By combining technical expertise with a structured and professional approach, we ensure that our clients receive engineering solutions they can rely on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}