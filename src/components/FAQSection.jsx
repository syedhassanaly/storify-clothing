import SectionHeading from "./shared/SectionHeading";
import FAQAccordion from "./shared/FAQAccordion";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We currently support cash on delivery and are working on card payments. You'll always see accepted methods at checkout.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders within major cities typically arrive in 2-4 business days. Remote areas may take a little longer.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes — we offer 14-day easy returns on unworn items with tags attached. Just reach out via the Contact page.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Not yet — we're currently focused on serving customers within Pakistan, with international shipping on our roadmap.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 xs:py-20 sm:py-24 px-4 xs:px-6 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before you shop."
      />
      <FAQAccordion items={faqs} />
    </section>
  );
}
