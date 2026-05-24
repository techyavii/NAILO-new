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
  { icon: Laptop2, title: "Mock Tests", desc: "Unlimited practice on the NAILO platform." },
  { icon: IdCard, title: "Admit Card", desc: "Auto-generated 7 days before the exam." },
  { icon: MonitorCheck, title: "Online Examination", desc: "Secure, proctored, AI-assisted." },
  { icon: BarChart3, title: "Results", desc: "Detailed AI-powered performance report." },
  { icon: PartyPopper, title: "Awards Ceremony", desc: "National recognition for top performers." },
];

export function ExamStructure() {
  return (
    <section id="exam" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Examination structure"
          title={
            <>
              From sign-up to <span className="text-gradient">stage</span> — every step.
            </>
          }
          description="A transparent six-stage journey designed for clarity, fairness and a memorable finale."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl bg-white border border-border p-5 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow mb-4 mx-auto">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-[10px] font-semibold tracking-widest text-primary text-center">
                    STEP 0{i + 1}
                  </div>
                  <div className="mt-1 text-base font-bold text-center">
                    {s.title}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground text-center leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
