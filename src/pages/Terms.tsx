import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const currentYear = new Date().getFullYear();

const Terms = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
             <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-elevated overflow-hidden">
              <img
                src="/logo.png"
                alt="Derifund logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            <span className="text-xl font-bold text-foreground">
              Derifund
            </span>
          </Link>
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
              <p className="text-muted-foreground">
                This document can be printed for reference using the print command in your browser settings.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="p-6 rounded-2xl bg-secondary/50 mb-8">
                <h3 className="text-lg font-semibold mb-2">Owner and Data Controller</h3>
                <p className="text-muted-foreground mb-1">Derifund - Eldoret, Kenya</p>
                <p className="text-muted-foreground">
                  Company contact email: <a href="mailto:derifund@gmail.com" className="text-primary">derifund@gmail.com</a>
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By downloading, accessing, or using Deri-Fund, you agree to abide by these Terms and Conditions. If you do not agree, please do not use the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Deri-Fund allows users to deposit and withdraw funds between Deriv and M-PESA accounts. Services may be updated, modified, or discontinued at any time without prior notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">3. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To use this App, you must be at least 18 years old and either a resident of Kenya or a registered M-PESA user. By registering, you confirm that all information provided is accurate and complete.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">4. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account information. You agree not to engage in fraudulent activities, tamper with the App's software, or violate any applicable laws while using Deri-Fund
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">5. Fees and Payments</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Deri-Fund does not charge any fees for registration. However, a margin of 4% is applied between the current market exchange rates when transferring between M-PESA and Deriv. Refunds are only issued after confirmation of an incomplete transaction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, branding, and intellectual property in the App belong to Deri-Cash. Unauthorized reproduction or misuse is strictly prohibited.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate access to the App without prior notice if you violate these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Deri-Fund  is not liable for any direct, indirect, or consequential damages resulting from your use of the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of Kenya and, in relation to platform integrations, also by Deriv's platform terms. Any disputes must be handled through official communication channels.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">10. Changes to the Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may modify these Terms at any time. Continued use of the App signifies your acceptance of any changes.
                </p>
              </section>

              <section className="mb-8 p-6 rounded-2xl bg-secondary/50">
                <h2 className="text-xl font-semibold mb-4">Additional Information for Users</h2>
                
                <h3 className="font-semibold mb-2">Legal Basis for Data Processing</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Deri-Fund  may process personal data when:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>You have given consent for specific purposes.</li>
                  <li>Data is required to fulfill a contract or pre-contractual obligation.</li>
                  <li>Compliance with legal requirements is necessary.</li>
                  <li>It serves the public interest or exercise of official authority.</li>
                  <li>It is necessary for legitimate business interests.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may contact us to understand which basis applies to your data processing.
                </p>

                <h3 className="font-semibold mb-2">System Logs and Maintenance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For performance and maintenance,Deri-Fund  and third-party services may collect logs or IP addresses to monitor usage and fix issues.
                </p>
              </section>

              <section className="p-6 rounded-2xl border border-border">
                <h2 className="text-xl font-semibold mb-4">Help & Contact</h2>
                <p className="text-muted-foreground mb-4">Contact us via:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Email: <a href="mailto:derifundc@gmail.com" className="text-primary">derifundc@gmail.com</a></li>
                  <li>Download: <a href="https://play.google.com/store/apps/details?id=com.dericash.derifund&hl=en" className="text-primary" target="_blank" rel="noopener noreferrer">Play Store</a></li>
                </ul>
                <p className="text-muted-foreground mt-4 pt-4 border-t border-border">
                  © {currentYear} Dericash Limited. All Rights Reserved.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
