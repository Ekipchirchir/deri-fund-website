import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Day Trader",
    location: "Nairobi",
    content: "Derifund has completely changed how I manage my trading funds. Deposits hit my Deriv account within seconds. The app is incredibly reliable!",
    rating: 5,
  },
  {
    name: "Sarah Wanjiru",
    role: "Forex Enthusiast",
    location: "Eldoret",
    content: "I was skeptical at first, but after using Derifund for 6 months, I can't imagine trading without it. The M-PESA integration is flawless.",
    rating: 5,
  },
  {
    name: "Peter Ochieng",
    role: "Professional Trader",
    location: "Kisumu",
    content: "The exchange rates are competitive and the withdrawals are super fast. Best app for Kenyan Deriv traders. Highly recommended!",
    rating: 5,
  },
  {
    name: "Lucy Akinyi",
    role: "Part-time Trader",
    location: "Mombasa",
    content: "What I love most is the transparency. I always know exactly what I'm getting. No hidden fees, just honest service.",
    rating: 5,
  },
  {
    name: "Michael Kiprop",
    role: "MT5 Trader",
    location: "Nakuru",
    content: "The MT5 integration is amazing! I can fund my MT5 account directly from M-PESA. This is exactly what Kenyan traders needed.",
    rating: 5,
  },
  {
    name: "Grace Njeri",
    role: "Binary Options Trader",
    location: "Thika",
    content: "Customer support is excellent. They resolved my issue within minutes. The app is user-friendly and works perfectly every time.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="text-gradient">10,000+ Traders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our users have to say about their experience with Derifund.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
