import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1778050368592-ec4b8ab3546d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern building facade"
            className="w-full h-full object-cover scale-110 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">
            Let's discuss how we can help with your engineering needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Our team is ready to assist you with any inquiries about our services, projects, or
                partnership opportunities. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fade-in-up">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-muted-foreground">engineering@sairag.net</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up delay-100">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91-8668479379</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up delay-200">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      F102, Mahindra Royale Society,<br />
                      Nehru Nagar, Pimpri,<br />
                      Pune - 411018, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden image-zoom animate-fade-in-up delay-300">
              <img
                src="https://images.unsplash.com/photo-1776617130019-361f70f3c703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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