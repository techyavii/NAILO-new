// import {
//   UserPlus,
//   CreditCard,
//   LayoutDashboard,
//   BookOpen,
//   FileEdit,
//   GraduationCap,
//   Trophy,
//   BarChart3,
//   ArrowRight,
// } from "lucide-react";
// import { Reveal, SectionHeader } from "./shared";

// const steps = [
//   { icon: UserPlus, title: "Registration" },
//   { icon: CreditCard, title: "Fee Payment" },
//   { icon: LayoutDashboard, title: "Dashboard Access" },
//   { icon: BookOpen, title: "AI Resource Hub" },
//   { icon: FileEdit, title: "Mock Tests" },
//   { icon: GraduationCap, title: "NALO Exam (Online)" },
//   { icon: BarChart3, title: "Results" },
//   { icon: Trophy, title: "Awards & Recognition" },
// ];

// export function StudentJourney() {
//   const colors = [
//     { bg: "bg-blue-50", border: "border-blue-300", icon: "from-blue-500 to-blue-600" },
//     { bg: "bg-green-50", border: "border-green-300", icon: "from-green-500 to-green-600" },
//     { bg: "bg-purple-50", border: "border-purple-300", icon: "from-purple-500 to-purple-600" },
//     { bg: "bg-yellow-50", border: "border-yellow-300", icon: "from-yellow-500 to-yellow-600" },
//     { bg: "bg-pink-50", border: "border-pink-300", icon: "from-pink-500 to-pink-600" },
//     { bg: "bg-indigo-50", border: "border-indigo-300", icon: "from-indigo-500 to-indigo-600" },
//     { bg: "bg-emerald-50", border: "border-emerald-300", icon: "from-emerald-500 to-emerald-600" },
//     { bg: "bg-rose-50", border: "border-rose-300", icon: "from-rose-500 to-rose-600" },
//   ];

//   return (
//     <section className="relative py-20 lg:py-32 px-5 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <SectionHeader
//           eyebrow="Student journey"
//           title={
//             <>
//               From sign-up to <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">stages</span>, Simplified
//             </>
//           }
//           description="Eight friction-free steps designed around how students actually learn and compete."
//         />

//         <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
//           {steps.map((s, i) => {
//             const col = colors[i];
//             return (
//               <Reveal key={s.title} delay={i * 0.05}>
//                 <div className="group relative">
//                   <div className={`relative h-full rounded-3xl border-2 p-6 lg:p-7 ${col.bg} ${col.border} hover:shadow-lg hover:-translate-y-2 transition-all`}>
//                     <div className="flex items-start justify-between mb-4">
//                       <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg group-hover:scale-110 transition-transform`}>
//                         <s.icon className="w-7 h-7 text-white" />
//                       </div>
//                       <span className="text-sm font-bold text-foreground/70">
//                         Step {String(i + 1).padStart(2, '0')}
//                       </span>
//                     </div>
//                     <div className="text-lg font-bold text-foreground">{s.title}</div>
//                   </div>
//                   {/* {i < steps.length - 1 && (
//                     <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-blue-400 group-hover:text-blue-600 transition-colors" />
//                   )} */}
//                 </div>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  ClipboardList,
  Laptop2,
  IdCard,
  MonitorCheck,
  BarChart3,
  PartyPopper,
  CreditCard,
  FileText,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const steps = [
  {
    icon: ClipboardList,
    title: "Student Registration",
    desc: "Students register online through their school or individually.",
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    desc: "Complete the registration process by securely paying the examination fee.",
  },
  {
    icon: FileText,
    title: "Profile Creation",
    desc: "Create your NAILO profile and gain access to the student dashboard.",
  },
  {
    icon: Laptop2,
    title: "Study Material & Mock Tests",
    desc: "Prepare with AI literacy resources, practice tests and learning modules.",
  },
  {
    icon: IdCard,
    title: "Admit Card Release",
    desc: "Download the official admit card before the examination date.",
  },
  {
    icon: MonitorCheck,
    title: "Online Examination",
    desc: "Appear for the National AI Literacy Olympiad through a secure online platform.",
  },
  {
    icon: BarChart3,
    title: "Results & Rankings",
    desc: "View detailed scores along with national and state-level rankings.",
  },
  {
    icon: ClipboardList,
    title: "School-wise Analysis",
    desc: "Schools receive detailed performance reports and analytics.",
  },
  {
    icon: PartyPopper,
    title: "Awards & Recognition",
    desc: "Top performers receive certificates, awards and national recognition.",
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
    <section id="exam" className="relative py-20 lg:py-32 px-5 lg:px-8">
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
          description="A fun, transparent and engaging pathway that guides students from registration and preparation to examination, rankings and national recognition."
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