import { Eye, Target, ListChecks, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const blocks = [
  {
    icon: Eye,
    eyebrow: "Vision",
    title: "An AI-literate generation, shaping India's digital future",
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
    title: "Equip students with the thinking that builds intelligent systems",
    body: "NAILO is built to evaluate and develop computational thinking, problem decomposition, pattern recognition and responsible AI awareness — skills proven to define the next generation of innovators.",
    points: [
      "Standardised national assessment",
      "Curriculum-aligned with NEP 2020",
      "Continuous practice through guided resources",
    ],
  },
  {
    icon: ListChecks,
    eyebrow: "Objectives",
    title: "Measure, mentor, and motivate — at national scale",
    body: "From identifying young talent to providing structured pathways for growth, NAILO connects schools, students and educators in a single high-quality assessment ecosystem.",
    points: [
      "Benchmark AI readiness across India",
      "Reward merit with prizes & recognition",
      "Bridge schools, parents and the AI economy",
    ],
  },
];

export function VisionMission() {
  const colors = [
  {
    bg: "bg-blue-50",
    border: "border-blue-300",
    icon: "from-blue-500 to-blue-600",
    accent: "text-blue-700",
    dot: "bg-blue-600",
  },
  {
    bg: "bg-green-50",
    border: "border-green-300",
    icon: "from-green-500 to-green-600",
    accent: "text-green-700",
    dot: "bg-green-600",
  },
  {
    bg: "bg-purple-50",
    border: "border-purple-300",
    icon: "from-purple-500 to-purple-600",
    accent: "text-purple-700",
    dot: "bg-purple-600",
  },
];

  return (
    <section className="relative py-20 lg:py-32 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why NAILO exists"
          title={
            <>
              Vision, Mission & <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Objectives</span>
            </>
          }
          description="A national initiative built around a simple belief — every Indian student deserves a foundation in artificial intelligence literacy."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {blocks.map((b, i) => {
            const col = colors[i];
            return (
              <Reveal key={b.eyebrow} delay={i * 0.1}>
                <div className={`h-full rounded-3xl border-2 p-8 lg:p-10 ${col.bg} ${col.border} hover:shadow-xl hover:-translate-y-2 transition-all`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg mb-6`}>
                    <b.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold ${col.accent} mb-4`}>
                    {b.eyebrow}
                  </h3>
                  <h4 className="text-lg font-bold text-foreground mb-4 leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-foreground/75 text-base mb-6 leading-relaxed">
                    {b.body}
                  </p>
                  <ul className="space-y-3">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full ${col.dot} mt-1.5 shrink-0`} />
                        <span className="text-sm font-medium text-foreground/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
