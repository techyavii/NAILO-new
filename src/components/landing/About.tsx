import { Building2, Lightbulb, Network, Sparkles } from "lucide-react";
import { Counter, Reveal, SectionHeader } from "./shared";

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
  { label: "Schools targeted", value: 5000, suffix: "+" },
  { label: "Cities reached", value: 250, suffix: "+" },
  { label: "Students inspired", value: 100000, suffix: "+" },
  { label: "AI literacy modules", value: 24, suffix: "" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="blob w-[420px] h-[420px] -top-20 right-0 bg-indigo-200/40" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <SectionHeader
          eyebrow="About NAILO"
          title={
            <>
              A national movement for{" "}
              <span className="text-gradient">AI literacy</span>
            </>
          }
          description="NAILO is more than an exam. It's a structured pathway connecting Indian students to the language of tomorrow."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-transparent" />
            <ul className="space-y-6">
              {story.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <li className="relative pl-14">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="rounded-2xl bg-white border border-border p-5 shadow-soft hover:shadow-glow transition-shadow">
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative gradient-border p-6 hover:-translate-y-1 transition-transform"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
              <div className="col-span-2 rounded-3xl p-6 bg-gradient-brand text-white shadow-glow">
                <div className="text-xs uppercase tracking-widest opacity-80">
                  Our promise
                </div>
                <div className="mt-2 text-xl font-semibold">
                  Every student, regardless of school or city, gets the same
                  shot at national-level AI recognition.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
