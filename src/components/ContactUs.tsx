import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-1xl sm:text-4xl lg:text-3xl font-bold mb-4">
            Get in Touch with{" "}
            <span className="text-gradient">Derifund</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions, feedback, need assistance? We're here to help Kenyan traders 24/7.
          </p>
        </div>

        {/* Contact Details Card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 lg:p-12 rounded-2xl bg-card border border-border shadow-soft">
            <h4 className="text-2xl font-semibold mb-8 text-center">Contact Information</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a
                  href="mailto:derifundc@gmail.com"
                  className="text-lg hover:text-primary transition-colors"
                >
                  derifundc@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a
                  href="tel:+254729859861"
                  className="text-lg hover:text-primary transition-colors"
                >
                  +254 729 859 861
                </a>
              </li>
              <li className="flex items-center gap-4">
                {/* WhatsApp Icon (using MessageCircle as a close alternative since Lucide doesn't have an official WhatsApp icon) */}
                <svg
                  className="w-6 h-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1.001-3.638-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 5.573c-.003 5.45-4.437 9.884-9.88 9.884m8.413-18.297C11.416 2.004 4.744 8.68 4.744 16.693c0 1.734.352 3.427 1.045 5.031l-1.11 4.035a.75.75 0 00.945.945l4.035-1.11a10.83 10.83 0 002.88.407c5.958 0 10.802-4.844 10.802-10.802 0-2.89-1.146-5.642-3.188-7.695A10.825 10.825 0 0016.465 3.788z" />
                </svg>
                <a
                  href="https://wa.me/254729859861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-primary transition-colors"
                >
                  Chat on WhatsApp (+254 729 859 861)
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg">Eldoret, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;