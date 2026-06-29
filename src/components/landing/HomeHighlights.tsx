import {
  Brain,
  BookOpenCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const highlights = [
  {
    icon: Brain,
    title: "AI Literacy Banner",
    description:
      "A visible, school-friendly banner that introduces AI literacy as a core 21st-century skill for every learner.",
  },
  {
    icon: BookOpenCheck,
    title: "NEP Alignment",
    description:
      "Designed in line with NEP 2020 priorities, encouraging creativity, critical thinking and digital confidence.",
  },
  {
    icon: Sparkles,
    title: "AI Literacy Gap Fulfillment",
    description:
      "Bridges the gap between awareness and real readiness by making AI learning accessible, practical and engaging.",
  },
  {
    icon: GraduationCap,
    title: "Student Benefits",
    description:
      "Students gain confidence, exposure and recognition while developing logical thinking and responsible AI awareness.",
  },
];

export function HomeHighlights() {
  return (
    <section className="relative py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why NAILO stands out"
          title={
            <>
              Building <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">AI-ready learners</span> with clarity and purpose
            </>
          }
          description="NAILO makes AI literacy meaningful for students, parents and schools by connecting learning with opportunity."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-blue-100 bg-white/80 p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-green-50 p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Learning that feels relevant</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                  A strong first step into ethical, practical and future-ready AI literacy.
                </h3>
              </div>
              <a
                href="/partner-schools"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Explore Partner Schools
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
