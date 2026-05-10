export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776617130189-f56b5ac44534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern facade architecture"
            className="w-full h-full object-cover scale-110 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90">
            Comprehensive mechanical engineering solutions tailored to your industry needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Façade Engineering */}
            <div className="glass-card rounded-lg p-6 md:p-8 animate-fade-in-up">
              <div className="text-4xl text-primary/20 mb-4 font-bold">01</div>
              <h3 className="text-xl md:text-2xl mb-3 font-semibold">Façade Engineering</h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                We provide comprehensive façade design and detailing solutions aligned with project specifications and international standards.
              </p>
              <ul className="space-y-3">
                {[
                  "Curtain Wall Systems (Unitized, Semi-unitized (Stick systems), Structural Glazing Systems)",
                  "Skylights and Canopies",
                  "Dry Cladding Systems",
                  "Façade Design Development & Detailing",
                  "Shop Drawings and Technical Documentation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structural Support & Interface Design */}
            <div className="glass-card rounded-lg p-6 md:p-8 animate-fade-in-up delay-100">
              <div className="text-4xl text-primary/20 mb-4 font-bold">02</div>
              <h3 className="text-xl md:text-2xl mb-3 font-semibold">Structural Support & Interface Design</h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                Design and detailing of critical support elements to ensure structural integrity and seamless integration.
              </p>
              <ul className="space-y-3">
                {[
                  "Mullions and Transoms",
                  "Brackets and Anchoring Systems",
                  "Embed and Connection Details",
                  "Interface Coordination with Primary Structure",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mechanical Design Services */}
            <div className="glass-card rounded-lg p-6 md:p-8 animate-fade-in-up delay-200">
              <div className="text-4xl text-primary/20 mb-4 font-bold">03</div>
              <h3 className="text-xl md:text-2xl mb-3 font-semibold">Mechanical Design Services</h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                Engineering support for mechanical components and assemblies with a focus on functionality and manufacturability.
              </p>
              <ul className="space-y-3">
                {[
                  "3D Modeling and Design Development",
                  "Mechanical Component Design",
                  "Assembly Design and Detailing",
                  "Manufacturing and Fabrication Drawings",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CAD & BIM Services */}
            <div className="glass-card rounded-lg p-6 md:p-8 animate-fade-in-up delay-300">
              <div className="text-4xl text-primary/20 mb-4 font-bold">04</div>
              <h3 className="text-xl md:text-2xl mb-3 font-semibold">CAD & BIM Services</h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                Accurate drafting and modeling support to enhance coordination and project efficiency.
              </p>
              <ul className="space-y-3">
                {[
                  "2D Drafting and Documentation",
                  "3D Modeling and BIM Support",
                  "Design Coordination and Clash Detection",
                  "Drawing Standardization and Quality Control",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Deliverables */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1773665435643-f0448735ea2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Glass skyscraper"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl mb-4 leading-tight">Our Deliverables</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              We provide structured, project-ready engineering outputs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              "Shop Drawings",
              "Fabrication Drawings",
              "General Arrangement (GA) Drawings",
              "Installation Drawings",
              "3D Models and Assemblies",
              "Bills of Quantities (BOQs) and Material Take-offs",
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-lg p-5 md:p-6 text-center animate-fade-in-up flex items-center justify-center min-h-[100px] md:min-h-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-muted-foreground text-sm md:text-base font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}