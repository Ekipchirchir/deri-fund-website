
const SupportedPlatforms = () => {
  const platforms = [
    { name: "M-Pesa", logo: "/mpesa.png" },
    { name: "Deriv", logo: "/deriv.png" },
    { name: "MT5", logo: "/mt5.png" },
    { name: "Banks", logo: "/bank.png" },
  ];

  return (
    <section id="platforms" className="py-20 lg:py-22 relative">
      <div className="absolute inset-0 bg-secondary" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Fund and Withdraw
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-3xl font-bold mb-4">
            Supported Platforms
          </h2>
          <p className="text-lg text-muted-foreground">
            We support multiple platforms to make deposits and withdrawals
            seamless and fast.
          </p>
        </div>

        {/* Platform Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center text-center">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-2xl flex flex-col items-center gap-2">
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-20 w-20 object-contain"
              />
              <span className="text-base font-semibold text-foreground mb-3">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedPlatforms;
