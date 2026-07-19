export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-8 xs:mb-10 sm:mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-xs xs:text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-2 xs:mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl font-bold text-brand-dark mb-3 xs:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm xs:text-base sm:text-lg text-gray-600 ${
            center ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
