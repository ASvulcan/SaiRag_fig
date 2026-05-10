export function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1759860238002-92f42d4158f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern glass building"
            className="w-full h-full object-cover scale-110 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">Join SaiRag Engineering</h1>
          <p className="text-lg md:text-xl text-white/90">
            We are always interested in connecting with talented engineers and design professionals
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl mb-4 leading-tight">Who We're Looking For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We are always interested in connecting with talented engineers and design professionals who share our commitment to precision, quality, and reliable delivery.
            </p>
          </div>

          <div className="glass-card rounded-lg p-8 max-w-3xl mx-auto text-center animate-fade-in-up delay-200">
            <h3 className="text-xl md:text-2xl mb-4 font-semibold">Career Enquiries</h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              For career inquiries, please reach out to us at the email below.
            </p>
            <a
              href="mailto:engineering@sairag.net"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
            >
              engineering@sairag.net
            </a>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="relative py-16 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776941251083-caddb016c90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern glass building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-dark inline-block px-8 py-10 md:px-12 md:py-12 rounded-2xl animate-fade-in-up w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl mb-4 md:mb-6 text-white">Follow Us</h2>
            <p className="text-lg md:text-xl text-white/80 mb-0">
              Coming soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}