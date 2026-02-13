import { ArrowRight, ChevronLeft, ChevronRight,ChromeIcon, Globe, GlobeIcon, Info, Play, Smartphone, Webcam } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const images = [
  "/image9.jpeg",
  "/image10.jpeg",
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpeg",
  "/image6.jpeg",
  //"/image7.jpeg",
  "/image8.jpeg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);


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
            
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Move Funds Easily Between{" "}
              <span className="text-gradient">Deriv & M-PESA</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Seamlessly deposit and withdraw funds from your Deriv trading account to M-PESA in seconds. Fast, secure, and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="default" className="hero-gradient text-primary-foreground shadow-elevated hover:opacity-90 transition-all text-base px-8 h-14 rounded-xl group">
                <Play className="w-5 h-5 mr-2 fill-current" />
                <a href="https://play.google.com/store/apps/details?id=com.dericash.derifund&hl=en" target="_blank" rel="noopener noreferrer">
                  Get on Play Store
                </a>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="default"  className="h-14 rounded-xl text-base px-8">
                <ChromeIcon className="w-5 h-5 mr-2" />
                Use Our Web App
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground"></div>
                <div className="text-sm text-muted-foreground"></div>
              </div>
            </div>

            
            
          </div>

          {/* Phone Mockup */}
          <div className="mt-16 relative flex justify-center lg:justify-end">
            <div className="relative animate-float">

              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[550px] sm:h-[650px] rounded-[3rem] bg-foreground p-2 shadow-elevated">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />

                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black relative">

                  {/* Image */}
                  <img
                    src={images[current]}
                    alt="App preview"
                    className="w-full h-70 object-cover transition-all duration-500 ease-in-out"
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                      current === index ? "bg-primary w-4" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>


           <div className="mt-4 lg:mb-10 px-4 py-4 bg-muted/10 border border-black/10 rounded-xl max-w-xl text-sm text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <h3 className="font-semibold mb-4"> Disclaimer</h3>
                <p>
                  Deriv is not affiliated with any payment agents. Customers deal with payment agents at their sole risk. Customers are advised to check the credentials of payment agents and the accuracy of any information about payment agents (on Deriv.com or elsewhere) before using their services.
                </p>
            </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
