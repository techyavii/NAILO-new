import {
  GraduationCap,
  Trophy,
  BrainCircuit,
  FileCheck2,
  Award,
  Rocket,
} from "lucide-react";
import { Reveal } from "./shared";

const features = [
  { icon: GraduationCap, label: "Classes 6–12", desc: "Junior & Senior groups" },
  { icon: Trophy, label: "National Ranking", desc: "All-India percentile" },
  { icon: BrainCircuit, label: "AI Literacy", desc: "Future-ready curriculum" },
  { icon: FileCheck2, label: "Mock Tests", desc: "Unlimited practice" },
  { icon: Award, label: "Digital Certificates", desc: "For every participant" },
  { icon: Rocket, label: "Future Skills", desc: "Logic, ethics, thinking" },
];

export function FeatureStrip() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className="group h-full glass rounded-2xl p-4 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center mb-3 shadow-soft group-hover:scale-110 transition-transform">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold">{f.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {f.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
