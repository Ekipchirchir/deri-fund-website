import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with Derifund?",
    answer: "Simply download the app from Play Store, create an account, and connect your Deriv account using OAuth. Once connected, you can start depositing and withdrawing funds immediately.",
  },
  {
    question: "What are the fees for using Derifund?",
    answer: "Derifund charges no registration fees. We apply a 4% margin on the current market exchange rate when transferring between M-PESA and Deriv. This is transparently shown before every transaction.",
  },
  {
    question: "How long do transfers take?",
    answer: "Most transfers are completed within seconds. Deposits to your Deriv account are instant once M-PESA payment is confirmed. Withdrawals to M-PESA typically take 1-5 minutes.",
  },
  {
    question: "Is my money safe with Derifund?",
    answer: "Absolutely. We use bank-grade encryption and never store your Deriv credentials. All transactions are processed securely through official M-PESA and Deriv APIs.",
  },
  {
    question: "What is the minimum and maximum transfer amount?",
    answer: "The minimum deposit is $1 (approximately KES 135) and the minimum withdrawal is $5. Maximum limits vary based on your M-PESA account tier and Deriv account status.",
  },
  {
    question: "Can I use Derifund for MT5 accounts?",
    answer: "Yes! Derifund supports both standard Deriv accounts and MT5 trading accounts. You can fund your MT5 account directly from M-PESA.",
  },
  {
    question: "What happens if a transaction fails?",
    answer: "In the rare case of a failed transaction, your funds are automatically reversed. If not, contact our support team with your transaction details for immediate assistance.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach us via email at help.derifund@gmail.com, or through our in-app chat. We're also available on WhatsApp at +254 769652512.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-secondary/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Derifund. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
