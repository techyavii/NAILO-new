import { Calendar } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const dates = [
  { label: "Registration Opens", value: "15 Aug 2026" },
  { label: "Mock Test Access", value: "01 Sep 2026" },
  { label: "Registration Deadline", value: "30 Nov 2026" },
  { label: "Exam Date", value: "10 Jan 2027" },
  { label: "Results Announced", value: "15 Feb 2027" },
  { label: "Awards Ceremony", value: "20 Mar 2027" },
];

export function ImportantDates() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Important dates"
          title={
            <>
              Mark your <span className="text-gradient">calendar</span>
            </>
          }
          description="A clear, predictable schedule from registration to recognition."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dates.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.06}>
              <div className="group h-full rounded-2xl bg-white border border-border p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-brand grid place-items-center shadow-soft group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs font-semibold tracking-widest text-primary uppercase">
                    Stage 0{i + 1}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{d.label}</div>
                <div className="mt-1 text-2xl font-bold">{d.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
