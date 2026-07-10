import { Building2, Lightbulb, Network, Sparkles } from "lucide-react";
import { Counter, Reveal, SectionHeader } from "./shared";
import { VisionMission } from "./VisionMission";

const story = [
  {
    icon: Building2,
    title: "AFI EduTech",
    text: "Organising body of NAILO. AFI EduTech designs national-scale academic programmes focused on future-ready skills, computational thinking and ethical AI literacy.",
  },
  {
    icon: Sparkles,
    title: "AI for India",
    text: "NAILO is the flagship assessment under the AI for India initiative — a long-term effort to make AI literacy as common as digital literacy in every school.",
  },
  {
    icon: Network,
    title: "Innovation Ecosystem",
    text: "Schools, educators, mentors and partner organisations form the NAILO ecosystem — built to surface talent and deliver opportunity, regardless of geography.",
  },
  {
    icon: Lightbulb,
    title: "Future-Ready Education",
    text: "From foundational logic to ethical reasoning around AI, NAILO trains the underlying skills employers, universities and innovators value most.",
  },
];

const stats = [
  { label: "Schools targeted", value: 2000, suffix: "+" },
  { label: "Cities reached", value: 250, suffix: "+" },
  { label: "Students inspired", value: 100000, suffix: "+" },
  { label: "AI literacy modules", value: 24, suffix: "" },
];

export function About() {
  const colors = [
    { bg: "bg-blue-50", border: "border-blue-300", icon: "from-blue-500 to-blue-600" },
    { bg: "bg-green-50", border: "border-green-300", icon: "from-green-500 to-green-600" },
    { bg: "bg-purple-50", border: "border-purple-300", icon: "from-purple-500 to-purple-600" },
    { bg: "bg-yellow-50", border: "border-yellow-300", icon: "from-yellow-500 to-yellow-600" },
  ];

  return (
    <section id="about" className="relative py-16 lg:py-24 px-5 lg:px-8 overflow-hidden">
      <div className="blob w-[420px] h-[420px] -top-20 right-0 bg-blue-200/40" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeader
          eyebrow="About NAILO"
          title={
            <>
              A National Movement for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">AI-Literacy</span>
            </>
          }
          description="NAILO is more than an exam. It's a structured pathway connecting Indian students to the language of tomorrow."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline */}
          <div className="space-y-4 lg:space-y-5">
            {story.map((s, i) => {
              const col = colors[i];
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className={`rounded-3xl border-2 p-7 lg:p-8 ${col.bg} ${col.border} hover:shadow-lg hover:-translate-y-1 transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg shrink-0`}>
                        <s.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-foreground">{s.title}</h3>
                        <p className="mt-3 text-base text-foreground/80 leading-relaxed font-medium">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Stats */}
          <Reveal delay={0.15}>
            <div className="space-y-4 lg:space-y-5">
              <div className="grid grid-cols-2 gap-4 lg:gap-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 p-7 hover:shadow-lg transition-all"
                  >
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-3 text-sm lg:text-base font-bold text-foreground/80">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="rounded-3xl p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-xl hover:shadow-2xl transition-all">
                <div className="text-xs uppercase tracking-widest font-bold opacity-90 mb-2">
                  ✨ Our Promise
                </div>
                <div className="text-xl lg:text-2xl font-bold leading-tight">
                  Every student, regardless of school or city, gets the same shot at national-level AI recognition.
                </div>
              </div> */}
            </div>
          </Reveal>
        </div>
      </div>
      <VisionMission />
    </section>
  );
}
