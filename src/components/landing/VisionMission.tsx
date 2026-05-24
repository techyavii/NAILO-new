import { Eye, Target, ListChecks, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const blocks = [
  {
    icon: Eye,
    eyebrow: "Vision",
    title: "An AI-literate generation, shaping India's digital future.",
    body: "To make every Indian student computationally fluent and ethically aware of how AI is reshaping the world — preparing them to lead, not just consume, the technologies of tomorrow.",
    points: [
      "Inclusive AI literacy from Class 6 to 12",
      "Reasoning before code, ethics before scale",
      "A nationwide culture of curiosity",
    ],
  },
  {
    icon: Target,
    eyebrow: "Mission",
    title: "Equip students with the thinking that builds intelligent systems.",
    body: "NAILO is built to evaluate and develop computational thinking, problem decomposition, pattern recognition and responsible AI awareness — skills proven to define the next generation of innovators.",
    points: [
      "Standardised national assessment",
      "Curriculum-aligned with NEP 2020",
      "Continuous practice through mock tests",
    ],
  },
  {
    icon: ListChecks,
    eyebrow: "Objectives",
    title: "Measure, mentor, and motivate — at national scale.",
    body: "From identifying young talent to providing structured pathways for growth, NAILO connects schools, students and educators in a single high-quality assessment ecosystem.",
    points: [
      "Benchmark AI readiness across India",
      "Reward merit with prizes & recognition",
      "Bridge schools, parents and the AI economy",
    ],
  },
];

export function VisionMission() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why NAILO exists"
          title={
            <>
              Vision, Mission & <span className="text-gradient">Objectives</span>
            </>
          }
          description="A national initiative built around a simple belief — every Indian student deserves a foundation in artificial intelligence literacy."
        />

        <div className="mt-16 space-y-20">
          {blocks.map((b, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={b.eyebrow}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-soft text-xs font-semibold text-primary mb-4">
                      <Sparkles className="w-3 h-3" /> {b.eyebrow}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                      {b.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                      {b.body}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {b.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-soft blur-2xl rounded-full opacity-60" />
                    <div className="relative aspect-[4/3] rounded-3xl glass shadow-glow overflow-hidden p-8 flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow">
                          <b.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                          {b.eyebrow}
                        </span>
                      </div>
                      <div className="flex-1 mt-6 grid grid-cols-3 gap-3">
                        {[...Array(9)].map((_, k) => (
                          <div
                            key={k}
                            className={`rounded-xl ${
                              [0, 4, 8, 2, 6].includes(k)
                                ? "bg-gradient-brand opacity-90"
                                : "bg-white border border-border"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Computational thinking</span>
                        <span className="font-semibold text-foreground">
                          0{i + 1} / 03
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
