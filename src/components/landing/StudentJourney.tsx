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
  const colors = [
    { bg: "bg-blue-50", border: "border-blue-300", icon: "from-blue-500 to-blue-600" },
    { bg: "bg-green-50", border: "border-green-300", icon: "from-green-500 to-green-600" },
    { bg: "bg-purple-50", border: "border-purple-300", icon: "from-purple-500 to-purple-600" },
    { bg: "bg-yellow-50", border: "border-yellow-300", icon: "from-yellow-500 to-yellow-600" },
    { bg: "bg-pink-50", border: "border-pink-300", icon: "from-pink-500 to-pink-600" },
    { bg: "bg-indigo-50", border: "border-indigo-300", icon: "from-indigo-500 to-indigo-600" },
    { bg: "bg-emerald-50", border: "border-emerald-300", icon: "from-emerald-500 to-emerald-600" },
    { bg: "bg-rose-50", border: "border-rose-300", icon: "from-rose-500 to-rose-600" },
  ];

  return (
    <section className="relative py-20 lg:py-32 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Student journey"
          title={
            <>
              From sign-up to <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">stage</span>, simply.
            </>
          }
          description="Eight friction-free steps designed around how students actually learn and compete."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((s, i) => {
            const col = colors[i];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group relative">
                  <div className={`relative h-full rounded-3xl border-2 p-6 lg:p-7 ${col.bg} ${col.border} hover:shadow-lg hover:-translate-y-2 transition-all`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <s.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-bold text-foreground/70">
                        Step {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{s.title}</div>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-blue-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
