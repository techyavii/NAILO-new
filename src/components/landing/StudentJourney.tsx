import {
  UserPlus,
  CreditCard,
  LayoutDashboard,
  BookOpen,
  FileEdit,
  GraduationCap,
  Trophy,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const steps = [
  { icon: UserPlus, title: "Registration" },
  { icon: CreditCard, title: "Fee Payment" },
  { icon: LayoutDashboard, title: "Dashboard Access" },
  { icon: BookOpen, title: "Study Material" },
  { icon: FileEdit, title: "Mock Tests" },
  { icon: GraduationCap, title: "Examination" },
  { icon: BarChart3, title: "Results" },
  { icon: Trophy, title: "Awards" },
];

export function StudentJourney() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Student journey"
          title={
            <>
              From sign-up to <span className="text-gradient">stage</span>, simply.
            </>
          }
          description="Eight friction-free steps designed around how students actually learn and compete."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative">
                <div className="relative h-full rounded-2xl gradient-border p-5 hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-brand grid place-items-center shadow-soft">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-4 font-semibold">{s.title}</div>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
