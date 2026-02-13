import { Zap, Shield, Clock, Smartphone, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Seamless Transfers",
    description: "Deposit and withdraw funds in seconds with real-time M-PESA integration.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your transactions are protected with industry-leading encryption and security protocols.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your funds anytime, anywhere. Our service runs around the clock.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed for mobile users with an intuitive interface that makes trading easy.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Rates",
    description: "Get competitive exchange rates with only 4% margin on all transactions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our support team is always ready to help you with any questions or issues.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-secondary/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-3xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Trade Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience seamless fund transfers with our powerful features designed for Kenyan traders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50  transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-2xl hero-gradient flex items-center justify-center mb-6  transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
