import { ArrowRight, Play, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Now available in Kenya
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Move Funds Easily Between{" "}
              <span className="text-gradient">Deriv & M-PESA</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Seamlessly deposit and withdraw funds from your Deriv trading account to M-PESA in seconds. Fast, secure, and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="hero-gradient text-primary-foreground shadow-elevated hover:opacity-90 transition-all text-base px-8 h-14 rounded-xl group">
                <Play className="w-5 h-5 mr-2 fill-current" />
                <a href="https://play.google.com/store/apps/details?id=com.dericash.derifund&hl=en" target="_blank" rel="noopener noreferrer">
                  Get on Play Store
                </a>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-xl text-base px-8">
                <Smartphone className="w-5 h-5 mr-2" />
                Web App Coming Soon
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">$2M+</div>
                <div className="text-sm text-muted-foreground">Transacted</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground"></div>
                <div className="text-sm text-muted-foreground"></div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] rounded-[3rem] bg-foreground p-3 shadow-elevated">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
                  <img
                    src="/images/image.png"
                    alt="Deriv to M-PESA app"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
              
              {/* Floating Cards */}
              <div className="absolute -left-10 top-10 glass rounded-2xl p-4 shadow-soft animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div >
                    <div className="text-sm font-medium">Deposit Complete</div>
                    <div className="text-xs text-muted-foreground">KES 4,930.02 → $37.04</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-12 bottom-32 glass rounded-2xl p-4 shadow-soft animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                    <span className="text-primary-foreground text-lg">₿</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Real-time Rates</div>
                    <div className="text-xs text-muted-foreground">USD/KES: 133.10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
