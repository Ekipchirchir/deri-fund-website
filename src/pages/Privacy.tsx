import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Effective: December 15, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-8">
                This Privacy Policy explains our practices regarding the collection, use, and disclosure of your personal information when you use the Service. It also outlines your privacy rights and the legal protections available to you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
               We use your personal data to deliver and enhance the Service. By continuing to use the Service, you agree to the collection and use of your information as described in this Privacy Policy.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Interpretation and Definitions</h2>
                
                <h3 className="text-xl font-semibold mb-3">Interpretation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Words with an initial capital letter have meanings defined under the following conditions. The definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="text-xl font-semibold mb-3">Definitions</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">For the purposes of this Privacy Policy:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Account</strong> means a unique account created for you to access our Service or parts of our Service.</li>
                  <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
                  <li><strong>Application</strong> refers to Deri-Fund, the software program provided by the Company.</li>
                  <li><strong>Company</strong> (referred to as "the Company", "We", "Us", or "Our") refers to Dericash Limited, Eldoret, Kenya.</li>
                  <li><strong>Service Provider</strong> means any natural or legal person who processes data on behalf of the Company.</li>
                  <li><strong>Usage Data</strong> refers to data collected automatically from use of the Service.</li>
                  <li><strong>You</strong> means the individual accessing or using the Service.</li>
                  <li><strong>Country</strong> refers to Kenya.</li>
                  <li><strong>Device</strong> means any device that can access the Service.</li>
                  <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                  <li><strong>Service</strong> refers to the Application.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Collecting and Using Your Personal Data</h2>
                
                <h3 className="text-xl font-semibold mb-3">Types of Data Collected</h3>
                
                <h4 className="font-semibold mb-2">Personal Data</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Usage Data</li>
                </ul>

                <h4 className="font-semibold mb-2">Usage Data</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Usage Data is collected automatically when using the Service. Usage Data may include information such as your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time spent on those pages, unique device identifiers, the time and date of your visit, the time spent on the Service,and other diagnostic data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Use of Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">The Company may use Personal Data for the following purposes:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
                  <li><strong>To manage Your Account</strong>: to manage your registration as a user of the Service.</li>
                  <li><strong>For the performance of a contract</strong>: the development and undertaking of contracts for services.</li>
                  <li><strong>To contact You</strong>: by email, telephone calls, SMS, or other electronic communication.</li>
                  <li><strong>To provide You</strong> with news, special offers, and general information about other goods and services.</li>
                  <li><strong>To manage Your requests</strong>: to attend and manage your requests to us.</li>
                  <li><strong>For business transfers</strong>: to evaluate or conduct a merger, divestiture, restructuring, or other sale.</li>
                  <li><strong>For other purposes</strong>: such as data analysis, identifying usage trends, and improving our Service.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Retention of Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Company will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Transfer of Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Delete Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to delete or request that we assist in deleting the Personal Data that we have collected about you. You may update, amend, or delete your information at any time by signing in to your Account and visiting the account settings section. You may also contact us to request access to, correct, or delete any personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Security of Your Personal Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your Personal Data is important to us, but no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service does not address anyone under the age of 18, as per our Terms of Use. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Links to Other Websites</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Changes to this Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective" date. You are advised to review this Privacy Policy from time to time for any changes.
                </p>
              </section>

              <section className="p-6 rounded-2xl border border-border">
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">If you have any questions, you can contact us:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Email: <a href="mailto:dericash@gmail.com" className="text-primary">dericash@gmail.com</a></li>
                  <li>Phone: <a href="tel:+254795190887" className="text-primary">+254 795 190887</a></li>
                  <li>WhatsApp: <a href="https://wa.me/254795190887" className="text-primary">+254 795 190887</a></li>
                </ul>
                <p className="text-muted-foreground mt-4 pt-4 border-t border-border">
                  © 2025 Derifund. All Rights Reserved.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
