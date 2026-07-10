import {
  Medal,
  BrainCircuit,
  Puzzle,
  ShieldCheck,
  Compass,
  Award,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const items = [
  {
    icon: Medal,
    title: "National Recognition",
    desc: "Top performers earn All-India ranks, certificates and media-worthy honours.",
    span: "lg:col-span-2",
  },
  {
    icon: BrainCircuit,
    title: "AI Skills",
    desc: "Build intuition for how intelligent systems learn, reason and decide.",
  },
  {
    icon: Puzzle,
    title: "Logical Thinking",
    desc: "Sharpen decomposition, pattern recognition and abstraction.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical AI Awareness",
    desc: "Understand bias, privacy and the human side of automation.",
    span: "lg:col-span-2",
  },
  {
    icon: Compass,
    title: "Future Readiness",
    desc: "Skills universities and employers actively look for.",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    desc: "Verified digital certificates, medals and a grand cash pool prize of  ₹ 3,00,000+ .",
  },
];

export function WhyParticipate() {
  const colors = [
    { bg: "bg-white", border: "border-slate-200", icon: "bg-blue-600" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-orange-500" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-slate-700" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-blue-500" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-amber-500" },
    { bg: "bg-white", border: "border-slate-200", icon: "bg-slate-600" },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why participate"
          title={
            <>
              Six reasons NAILO is{" "}
              <span className="text-blue-700">UNMISSABLE</span>
            </>
          }
          description="A single Olympiad that recognises talent, builds skill and shapes the way young Indians think about AI."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((it, i) => {
            const col = colors[i];
            return (
              <Reveal key={it.title} delay={i * 0.05}>
                <div className={`group relative h-full rounded-[1.5rem] border p-8 lg:p-9 ${col.bg} ${col.border} shadow-sm transition hover:-translate-y-1 hover:shadow-md ${it.span ?? ""}`}>
                  <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${col.icon} text-white shadow-sm transition group-hover:scale-105`}>
                    <it.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">{it.title}</h3>
                  <p className="text-base text-foreground/80 leading-relaxed font-medium">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
