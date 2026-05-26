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
    title: "Certificates & Awards",
    desc: "Verified digital certificates, medals and a ₹1,00,000 grand prize pool.",
  },
];

export function WhyParticipate() {
  const colors = [
    { bg: "bg-blue-50", border: "border-blue-300", icon: "from-blue-500 to-blue-600" },
    { bg: "bg-green-50", border: "border-green-300", icon: "from-green-500 to-green-600" },
    { bg: "bg-purple-50", border: "border-purple-300", icon: "from-purple-500 to-purple-600" },
    { bg: "bg-yellow-50", border: "border-yellow-300", icon: "from-yellow-500 to-yellow-600" },
    { bg: "bg-pink-50", border: "border-pink-300", icon: "from-pink-500 to-pink-600" },
    { bg: "bg-indigo-50", border: "border-indigo-300", icon: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <section className="relative py-20 lg:py-32 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why participate"
          title={
            <>
              Six reasons NAILO is{" "}
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">unmissable</span>
            </>
          }
          description="A single Olympiad that recognises talent, builds skill and shapes the way young Indians think about AI."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((it, i) => {
            const col = colors[i];
            return (
              <Reveal key={it.title} delay={i * 0.05}>
                <div className={`group relative h-full rounded-3xl border-2 p-8 lg:p-9 ${col.bg} ${col.border} hover:shadow-lg hover:-translate-y-2 transition-all ${it.span ?? ""}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg mb-5 group-hover:scale-110 transition-transform`}>
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
