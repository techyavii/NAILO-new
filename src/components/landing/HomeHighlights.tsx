import { ArrowRight, BrainCircuit, BookOpenCheck, GraduationCap, Sparkles, Users } from "lucide-react";
import { Reveal } from "./shared";

const highlights = [
  {
    title: "AI Literacy Banner",
    description:
      "A visible national movement that helps students understand how AI works, where it is used, and why responsible use matters.",
    icon: Sparkles,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "NEP Alignment",
    description:
      "Designed to support the spirit of NEP 2020 by building critical thinking, digital confidence, and future-ready learning habits.",
    icon: BookOpenCheck,
    accent: "from-emerald-500 to-green-500",
  },
  {
    title: "AI Literacy Gap Fulfillment",
    description:
      "Bridges the awareness gap by making AI concepts approachable, practical, and relevant for school learners across India.",
    icon: BrainCircuit,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Student Benefits",
    description:
      "Students gain confidence, recognition, and an early edge through a structured assessment that celebrates curiosity and excellence.",
    icon: GraduationCap,
    accent: "from-amber-500 to-orange-500",
  },
];

export function HomeHighlights() {
  return (
    <section className="relative py-20 lg:py-28 px-5 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-blue-50/60">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 md:p-10 lg:p-12 text-white shadow-2xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  AI Literacy for Every Learner
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  NAILO helps students build confidence in the language of tomorrow.
                </h2>
                <p className="mt-4 text-lg text-blue-50/90 leading-relaxed">
                  From foundational awareness to ethical understanding, the program creates a strong, inclusive entry point into AI learning for every school student.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <Users className="h-5 w-5" />
                  Built for schools, students, and teachers
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Explore more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
