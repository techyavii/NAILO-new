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
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why participate"
          title={
            <>
              Six reasons NAILO is{" "}
              <span className="text-gradient">unmissable</span>
            </>
          }
          description="A single Olympiad that recognises talent, builds skill and shapes the way young Indians think about AI."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05} className={it.span ?? ""}>
              <div className="group relative h-full gradient-border p-6 lg:p-7 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-px -right-px w-28 h-28 bg-gradient-soft rounded-bl-[80px] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-soft group-hover:shadow-glow transition-shadow">
                    <it.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
