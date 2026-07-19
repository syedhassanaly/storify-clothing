import { useState } from "react";
import SectionHeading from "./shared/SectionHeading";
import FAQAccordion from "./shared/FAQAccordion";

const quickContacts = [
  { icon: "✉️", title: "Email Us", value: "support@storifyclothes.com", href: "mailto:support@storifyclothes.com" },
  { icon: "📞", title: "Call Us", value: "+92 300 1234567", href: "tel:+923001234567" },
  { icon: "📍", title: "Visit Us", value: "123 Fashion Street, Karachi", href: "#" },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Orders within Karachi arrive in 1-2 business days; nationwide delivery typically takes 3-5 business days.",
  },
  {
    question: "What's your return policy?",
    answer: "Unworn items with tags can be returned within 14 days of delivery for a full refund or exchange.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes — orders over Rs. 5,000 ship free. Orders below that qualify for a flat Rs. 200 shipping fee.",
  },
  {
    question: "How can I track my order?",
    answer: "You'll receive a tracking link by email/SMS as soon as your order ships.",
  },
];

const initialForm = { name: "", email: "", phone: "", subject: "General Inquiry", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this is a UI-only stub, but it's now a real
    // <form> so it submits on Enter and is keyboard/accessible.
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="pt-28 xs:pt-32">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-dark to-[#241d1e] text-white py-16 xs:py-20 sm:py-24 px-4 text-center">
        <span className="inline-block text-xs xs:text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
          Get In Touch
        </span>
        <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 xs:mb-5">Contact Us</h1>
        <p className="text-white/80 max-w-xl mx-auto text-sm xs:text-base sm:text-lg px-2">
          Questions about an order, a product, or just want to say hi? We'd
          love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 xs:px-6 -mt-10 xs:-mt-12 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 mb-14 xs:mb-16 sm:mb-20">
          {quickContacts.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="!no-underline bg-gradient-to-br from-brand-orange-from to-brand-orange-to text-white rounded-2xl p-5 xs:p-6 shadow-lg transition-all duration-300 touch-manipulation hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-2xl xs:text-3xl mb-2 xs:mb-3">{c.icon}</div>
              <h3 className="font-semibold mb-1 text-sm xs:text-base">{c.title}</h3>
              <p className="text-white/90 text-xs xs:text-sm">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 xs:gap-10 mb-14 xs:mb-16 sm:mb-20">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl shadow-md p-5 xs:p-6 sm:p-8"
          >
            <h2 className="text-xl xs:text-2xl font-bold text-brand-dark mb-5 xs:mb-6">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-5 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3">
                Thanks! Your message has been noted — we'll get back to you soon.
              </div>
            )}

            <div className="grid xs:grid-cols-2 gap-4 xs:gap-5 mb-4 xs:mb-5">
              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid xs:grid-cols-2 gap-4 xs:gap-5 mb-4 xs:mb-5">
              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="+92 3XX XXXXXXX"
                />
              </div>
              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Returns & Exchanges</option>
                  <option>Partnership</option>
                </select>
              </div>
            </div>

            <div className="mb-5 xs:mb-6">
              <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full xs:w-auto bg-brand-gold active:bg-brand-dark text-white font-semibold px-6 xs:px-8 py-3 rounded-lg transition-colors duration-300 touch-manipulation hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5 xs:space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 xs:p-6 shadow-sm">
              <h3 className="font-semibold text-brand-dark mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm">
                {businessHours.map((b) => (
                  <li key={b.day} className="flex justify-between text-gray-600">
                    <span>{b.day}</span>
                    <span className="font-medium text-brand-dark">{b.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 xs:p-6 shadow-sm">
              <h3 className="font-semibold text-brand-dark mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "Twitter"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="flex-1 text-xs xs:text-sm font-medium border border-gray-300 rounded-lg py-2.5 transition-colors touch-manipulation hover:border-brand-gold hover:text-brand-gold"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-14 xs:pb-16 sm:pb-20">
          <SectionHeading eyebrow="Need Help?" title="Frequently Asked Questions" />
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </div>
  );
}
