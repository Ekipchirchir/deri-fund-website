import { MapPin, Users, TrendingUp, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    description: "Traders trust Derifund daily",
  },
  {
    icon: MapPin,
    value: "47",
    label: "Counties",
    description: "Across Kenya",
  },
  {
    icon: Globe,
    value: "24/7",
    label: "Availability",
    description: "Always online service",
  },
];

const cities = [
  { name: "Nairobi", users: "4,200+" },
  { name: "Mombasa", users: "1,800+" },
  { name: "Kisumu", users: "1,200+" },
  { name: "Nakuru", users: "900+" },
  { name: "Eldoret", users: "850+" },
  { name: "Other Cities", users: "1,050+" },
];

const MarketReachSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Reach
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-3xl font-bold mb-4">
            Empowering Traders{" "}
            <span className="text-gradient">Across Kenya</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From Nairobi to Mombasa, traders across Kenya trust Derifund for their Deriv transactions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-card border border-border  transition-all"
            >
              <div className="w-12 h-12 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-2xl font-semibold mb-1">{stat.value}</div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Cities Distribution */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">User Distribution by City</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <div
                key={city.name}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">{city.name}</span>
                </div>
                <span className="text-muted-foreground">{city.users}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketReachSection;
