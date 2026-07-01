import { Calendar } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const dates = [
  { label: "Registration Opens", value: "1 Aug 2026" },
  { label: "Practice Resources Access", value: "Oct - Nov 2026" },
  { label: "Registration Deadline", value: "Oct 2026" },
  { label: "Exam Date", value: "20 Dec 2026" },
  { label: "Results Announced", value: "Feb 2027" },
  { label: "Awards & Recognition", value: "Mar 2027" },
];

export function ImportantDates() {
  const dateColors = [
    { bg: "bg-blue-50", border: "border-blue-300", icon: "from-blue-500 to-blue-600" },
    { bg: "bg-green-50", border: "border-green-300", icon: "from-green-500 to-green-600" },
    { bg: "bg-purple-50", border: "border-purple-300", icon: "from-purple-500 to-purple-600" },
    { bg: "bg-yellow-50", border: "border-yellow-300", icon: "from-yellow-500 to-yellow-600" },
    { bg: "bg-pink-50", border: "border-pink-300", icon: "from-pink-500 to-pink-600" },
    { bg: "bg-indigo-50", border: "border-indigo-300", icon: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <section id="important-dates" className="relative py-20 lg:py-32 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Important dates"
          title={
            <>
              Mark your <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">calendar</span>
            </>
          }
          description="A clear, predictable schedule from registration to recognition."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dates.map((d, i) => {
            const col = dateColors[i % dateColors.length];
            return (
              <Reveal key={d.label} delay={i * 0.06}>
                <div className={`group h-full rounded-3xl border-2 p-8 ${col.bg} ${col.border} hover:shadow-xl hover:-translate-y-2 transition-all`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold tracking-widest text-foreground/70 uppercase mb-2">
                    Stage {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-lg text-foreground/80 font-bold mb-2">{d.label}</div>
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {d.value}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
