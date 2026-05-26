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
  { icon: GraduationCap, label: "Classes 6–12", desc: "Junior & Senior groups", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50" },
  { icon: Trophy, label: "National Ranking", desc: "All-India percentile", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50" },
  { icon: BrainCircuit, label: "AI Literacy", desc: "Future-ready curriculum", color: "from-green-500 to-green-600", bgColor: "bg-green-50" },
  { icon: FileCheck2, label: "Mock Tests", desc: "Unlimited practice", color: "from-yellow-500 to-yellow-600", bgColor: "bg-yellow-50" },
  { icon: Award, label: "Digital Certificates", desc: "For every participant", color: "from-pink-500 to-pink-600", bgColor: "bg-pink-50" },
  { icon: Rocket, label: "Future Skills", desc: "Logic, ethics, thinking", color: "from-blue-500 to-green-500", bgColor: "bg-gradient-to-br from-blue-50 to-green-50" },
];

export function FeatureStrip() {
  return (
    <section className="relative py-16 lg:py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className={`group h-full rounded-3xl p-6 sm:p-5 lg:p-6 border-2 border-current/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ${f.bgColor}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} grid place-items-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-base sm:text-sm lg:text-base font-bold text-foreground">{f.label}</div>
                <div className="text-xs sm:text-xs lg:text-sm text-foreground/70 mt-1.5 leading-snug">
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
