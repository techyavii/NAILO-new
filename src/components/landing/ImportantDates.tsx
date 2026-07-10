import { Calendar } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const dates = [
  { label: "Registration Opens", value: "1 Aug 2026" },
  { label: "Practice Resources Access", value: "Sept 2026" },
  { label: "Registration Deadline", value: "31 Oct 2026" },
  { label: "Exam Date", value: "20 Dec 2026" },
  { label: "Results Announced", value: "Feb 2027" },
  { label: "Awards & Recognition", value: "Mar 2027" },
];

export function ImportantDates() {
  const dateColors = [
    { bg: "bg-white", border: "border-slate-200", icon: "bg-blue-600" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-orange-500" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-slate-700" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-amber-500" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-blue-500" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-slate-600" },
  ];

  return (
    <section id="important-dates" className="relative py-16 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Important dates"
          title={
            <>
              Mark Your <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Calendar</span>
            </>
          }
          description="A clear, predictable schedule from registration to recognition."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dates.map((d, i) => {
            const col = dateColors[i % dateColors.length];
            return (
              <Reveal key={d.label} delay={i * 0.06}>
                <div className={`group h-full rounded-[1.5rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${col.bg} ${col.border}`}>
                  <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${col.icon} text-white shadow-sm transition group-hover:scale-105`}>
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-bold tracking-widest text-foreground/70 uppercase mb-2">
                    Stage {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-lg text-foreground/80 font-bold mb-2">{d.label}</div>
                  <div className="text-3xl lg:text-4xl font-semibold text-slate-900">
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
