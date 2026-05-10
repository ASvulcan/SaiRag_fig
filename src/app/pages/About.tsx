import aboutImg from "../../assets/aleksandrs-zeltisevs-O-vNkUIFgtA-unsplash.jpg";
import visionBg from "../../assets/declan-sun-ltpDzIWKYR8-unsplash.jpg";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0">
          <img
            src={aboutImg}
            alt="Modern building architecture"
            className="w-full h-full object-cover scale-110 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center text-white animate-fade-in-up px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">About SaiRag Engineering LLP</h1>
          <p className="text-lg md:text-xl text-white/90">Building the future through engineering excellence</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                SaiRag Engineering LLP is a Pune-based engineering services company specialized in façade engineering and mechanical design solutions. We partner with global clients to deliver high-quality design, detailing, and CAD/BIM support with a strong focus on precision, efficiency, and international engineering standards.
              </p>
              <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                From concept to completion, we prioritize quality, safety, and client satisfaction, making us the preferred choice for mechanical engineering services.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden image-zoom animate-fade-in-up delay-200">
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
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={visionBg}
            alt="Glass facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl mb-6">Our Vision</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              We aspire to become a trusted engineering partner for global clients, recognized for consistency, technical excellence, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-lg p-6 md:p-8 animate-fade-in-up">
              <h3 className="text-xl md:text-2xl mb-6 font-semibold">Our Vision Goals</h3>
              <ul className="space-y-4">
                {[
                  "Strengthen our position in façade engineering and mechanical design services",
                  "Continuously enhance our capabilities in CAD, BIM, and advanced engineering tools",
                  "Expand our presence across European and international markets",
                  "Build long-term partnerships based on trust, quality, and performance"
                ].map((goal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm md:text-base">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              At SaiRag Engineering, we believe that quality engineering is defined by attention to detail, clarity in communication, and a deep understanding of real-world execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Precision and detailing",
              "Alignment with international standards and best practices",
              "Seamless integration with client standards and workflows",
              "Commitment to timely and consistent delivery",
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-lg p-6 md:p-8 text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass flex items-center justify-center mx-auto mb-4">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary"></div>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working With Us */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776617130189-f56b5ac44534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in-up">
          <div className="glass-card-dark rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl mb-6">Working with Us</h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              We collaborate with façade consultants, contractors, fabricators, and engineering firms who value dependable support and high-quality outputs.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-0 leading-relaxed">
              By combining technical expertise with a structured and professional approach, we ensure that our clients receive engineering solutions they can rely on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}