import SectionHeading from "./shared/SectionHeading";
import StatsBanner from "./shared/StatsBanner";
import ScrollReveal from "./shared/ScrollReveal";

const coreValues = [
  { icon: "🤝", title: "Integrity", desc: "We do what's right, even when no one's watching." },
  { icon: "🌱", title: "Sustainability", desc: "Responsible sourcing for a better tomorrow." },
  { icon: "💡", title: "Innovation", desc: "Constantly evolving to bring you fresh style." },
  { icon: "❤️", title: "Community", desc: "Building lasting relationships with every customer." },
];

const timeline = [
  { year: "2020", text: "Storify Clothes launched from a small studio in Karachi." },
  { year: "2021", text: "Expanded into shoes and accessories, crossing 5,000 happy customers." },
  { year: "2023", text: "Opened partnerships with 50+ ethical and sustainable brands." },
  { year: "2025", text: "Reached 10,000+ customers and 500+ curated products online." },
];

const team = [
  { name: "Alex Johnson", role: "Founder & CEO", emoji: "👔" },
  { name: "Sarah Mitchell", role: "Creative Director", emoji: "🎨" },
  { name: "Marcus Chen", role: "Operations Manager", emoji: "📦" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 xs:pt-32">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-dark to-[#241d1e] text-white py-16 xs:py-20 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">✂️</div>
        <div
          className="absolute bottom-10 left-10 text-6xl opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        >
          👗
        </div>
        <span className="inline-block text-xs xs:text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
          Our Story
        </span>
        <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 xs:mb-5">
          About Storify Clothes
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg px-2">
          A Karachi-born fashion label built on quality, care, and a genuine
          love for helping people express themselves through what they wear.
        </p>
      </div>

      {/* Story + value cards */}
      <div className="max-w-6xl mx-auto px-4 xs:px-6 py-14 xs:py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 xs:gap-10 items-center mb-14 xs:mb-16 sm:mb-20">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="Since 2020"
              title="Fashion With Purpose"
              center={false}
            />
            <p className="text-gray-600 text-sm xs:text-base leading-relaxed mb-4">
              Storify Clothes started as a small idea: fashion should feel
              personal, accessible, and honest. From our first collection to
              today, we've stayed true to sourcing quality fabrics and
              designing pieces that fit real, everyday life across Pakistan.
            </p>
            <p className="text-gray-600 text-sm xs:text-base leading-relaxed">
              Every product on our shelves is chosen with the same question in
              mind — would we wear this ourselves? If the answer is yes, it
              earns a place in the Storify collection.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Thoughtful Design", desc: "Every piece is considered, not mass produced on a whim." },
              { title: "Local Roots", desc: "Proudly based in Karachi, serving fashion lovers across Pakistan." },
              { title: "Real Support", desc: "A team that actually answers your questions." },
            ].map((c, i) => (
              <ScrollReveal key={c.title} direction="right" delay={i * 100}>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-gold hover:-translate-y-1">
                  <h3 className="font-semibold text-brand-dark mb-1">{c.title}</h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-14 xs:mb-16 sm:mb-20">
          <ScrollReveal>
            <SectionHeading eyebrow="What Drives Us" title="Core Values" />
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
            {coreValues.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="group text-center bg-white border border-gray-200 rounded-xl p-5 xs:p-6 transition-all duration-300 hover:border-brand-gold hover:-translate-y-2 hover:shadow-xl">
                  <div className="text-3xl xs:text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">{v.icon}</div>
                  <h3 className="font-semibold text-brand-dark mb-1 text-sm xs:text-base">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-xs xs:text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Journey timeline */}
        <div className="mb-14 xs:mb-16 sm:mb-20">
          <ScrollReveal>
            <SectionHeading eyebrow="Our Journey" title="Milestones" />
          </ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 xs:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/30 xs:-translate-x-1/2" />
            <div className="space-y-8 xs:space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal
                  key={item.year}
                  direction={i % 2 === 0 ? "left" : "right"}
                  className="relative"
                >
                  <div
                    className={`relative flex items-start xs:items-center gap-4 xs:gap-0 ${
                      i % 2 === 0 ? "xs:flex-row" : "xs:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`hidden xs:block xs:w-1/2 ${
                        i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                    <div className="absolute left-4 xs:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow z-10" />
                    <div
                      className={`pl-10 xs:pl-0 xs:w-1/2 ${
                        i % 2 === 0 ? "xs:pl-8" : "xs:pr-8 xs:text-right"
                      }`}
                    >
                      <p className="font-bold text-brand-dark text-lg xs:text-xl">{item.year}</p>
                      <p className="text-gray-600 text-sm xs:hidden">{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <ScrollReveal>
            <SectionHeading eyebrow="Meet The Team" title="The People Behind Storify" />
          </ScrollReveal>
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-5 xs:gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="text-center bg-white border border-gray-200 rounded-xl p-6 xs:p-7 transition-all duration-300 hover:border-brand-gold hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-3xl xs:text-4xl mb-4">
                    {member.emoji}
                  </div>
                  <h3 className="font-semibold text-brand-dark">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <StatsBanner />
    </div>
  );
}
