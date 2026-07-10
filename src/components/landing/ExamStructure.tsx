import {
  ClipboardList,
  Laptop2,
  IdCard,
  MonitorCheck,
  BarChart3,
  PartyPopper,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const steps = [
  { icon: ClipboardList, title: "Registration", desc: "Students sign up online with school details." },
  { icon: Laptop2, title: "Practice Resources", desc: "Dedicated Study Material, Question Banks and AI Basics Guide on the NAILO platform." },
  { icon: MonitorCheck, title: "Online Examination", desc: "Secure, proctored, AI-assisted." },
  { icon: BarChart3, title: "Results", desc: "Detailed AI-powered performance report." },
  { icon: PartyPopper, title: "Awards & Recognition", desc: "National recognition for top performers." },
];

export function ExamStructure() {
  const stepColors = [
    { bg: "bg-blue-50", border: "border-blue-300", icon: "from-blue-500 to-blue-600" },
    { bg: "bg-green-50", border: "border-green-300", icon: "from-green-500 to-green-600" },
    { bg: "bg-purple-50", border: "border-purple-300", icon: "from-purple-500 to-purple-600" },
    { bg: "bg-yellow-50", border: "border-yellow-300", icon: "from-yellow-500 to-yellow-600" },
    { bg: "bg-pink-50", border: "border-pink-300", icon: "from-pink-500 to-pink-600" },
    { bg: "bg-indigo-50", border: "border-indigo-300", icon: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <section id="exam" className="relative py-16 lg:py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Examination structure"
          title={
            <>
              From sign-up to <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Stagewise</span> steps
            </>
          }
          description="A transparent six-stage journey designed for clarity, fairness and a memorable finale."
        />

        <div className="mt-16 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {steps.map((s, i) => {
              const col = stepColors[i % stepColors.length];
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className={`relative h-full rounded-3xl border-2 p-7 ${col.bg} ${col.border} hover:shadow-lg hover:-translate-y-2 transition-all`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg mb-5 mx-auto`}>
                      <s.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold tracking-widest text-foreground/70 text-center uppercase mb-2">
                      Step {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-xl font-bold text-center text-foreground mb-3">
                      {s.title}
                    </div>
                    <p className="text-sm text-foreground/80 text-center leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
