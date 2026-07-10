import {
  ClipboardList,
  Laptop2,
  IdCard,
  MonitorCheck,
  BarChart3,
  PartyPopper,
  CreditCard,
  BookOpen,
  KeyRound,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";
const steps = [
  {
    icon: ClipboardList,
    title: "Student Registration",
    desc: "Register online through your school or as an individual participant.",
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    desc: "Complete the registration by paying the examination fee securely.",
  },
  {
    icon: IdCard,
    title: "NAILO Creates Your Account",
    desc: "Your student account is automatically created after successful registration.",
  },
  {
    icon: KeyRound,
    title: "Get Username & Password",
    desc: "Receive your login credentials to access the NAILO student portal.",
  },
  {
    icon: BookOpen,
    title: "Access Preparation Material",
    desc: "Explore study material, practice questions and AI learning resources.",
  },
  {
    icon: MonitorCheck,
    title: "National Online Examination",
    desc: "Appear for the secure online National AI Literacy Olympiad examination.",
  },
  {
    icon: BarChart3,
    title: "Result Declaration & Rankings",
    desc: "View your scores along with national and state-level rankings.",
  },
  {
    icon: ClipboardList,
    title: "School-wise Result Analysis",
    desc: "Schools receive comprehensive performance reports and analytics.",
  },
  {
    icon: PartyPopper,
    title: "Awards & Recognition",
    desc: "Winners receive prizes, medals, certificates and national recognition.",
  },
];

const colors = [
  {
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "from-blue-500 to-blue-600",
    stepText: "text-blue-600",
  },
  {
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "from-green-500 to-green-600",
    stepText: "text-green-600",
  },
  {
    bg: "bg-purple-50",
    border: "border-purple-200",
    iconBg: "from-purple-500 to-purple-600",
    stepText: "text-purple-600",
  },
  {
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "from-orange-500 to-orange-600",
    stepText: "text-orange-600",
  },
  {
    bg: "bg-pink-50",
    border: "border-pink-200",
    iconBg: "from-pink-500 to-pink-600",
    stepText: "text-pink-600",
  },
  {
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    iconBg: "from-cyan-500 to-cyan-600",
    stepText: "text-cyan-600",
  },
  {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    iconBg: "from-yellow-500 to-yellow-600",
    stepText: "text-yellow-600",
  },
  {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    iconBg: "from-indigo-500 to-indigo-600",
    stepText: "text-indigo-600",
  },
  {
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "from-rose-500 to-rose-600",
    stepText: "text-rose-600",
  },
];

export function StudentJourney() {
  return (
    <section id="exam" className="relative py-16 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Student Journey"
          title={
            <>
              Your Journey from{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Registration to Recognition
              </span>
            </>
          }
          description="A fun, transparent and engaging pathway that guides students from registration and preparation to examination, rankings and national recognition"
        />

        <div className="mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const color = colors[i];

              return (
                <Reveal key={step.title} delay={i * 0.05}>
                  <div
                    className={`group relative h-full rounded-3xl border-2 ${color.border} ${color.bg}
                    p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
                  >
                    {/* Decorative Background Circle */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/40 blur-xl"></div>

                    {/* Step Number */}
                    <div
                      className={`text-xs font-bold tracking-widest ${color.stepText} uppercase text-center mb-4`}
                    >
                      Step {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color.iconBg}
                      flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-center text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-700 text-center leading-relaxed">
                      {step.desc}
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

export default StudentJourney;