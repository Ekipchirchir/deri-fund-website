import { ArrowRight, Play, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary-foreground/10 blur-2xl" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of Kenyan traders who trust Derifund for seamless fund transfers between Deriv and M-PESA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 px-8 rounded-xl text-base font-semibold group"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              <a href="https://play.google.com/store/apps/details?id=com.dericash.derifund&hl=en" target="_blank" rel="noopener noreferrer">
                Download on Play Store
              </a>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 rounded-xl text-base"
            >
              <Globe className="w-5 h-5 mr-2" />
              Web App Coming Soon
            </Button>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-8">
            No registration fees • 24/7 availability • Secure transactions
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
