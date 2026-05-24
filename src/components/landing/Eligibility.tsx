import { GraduationCap, Users, BookOpenCheck } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const boards = ["CBSE", "ICSE", "State Boards", "International Boards"];

export function Eligibility() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Eligibility"
          title={
            <>
              Who can <span className="text-gradient">participate</span>
            </>
          }
          description="NAILO is open to every school student in India, across two age-appropriate divisions."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {[
            {
              icon: Users,
              tag: "Junior Group",
              classes: "Classes 6 – 8",
              desc: "Foundational logic, pattern recognition and an introduction to AI concepts through real-world scenarios.",
              color: "from-blue-500 to-indigo-500",
            },
            {
              icon: GraduationCap,
              tag: "Senior Group",
              classes: "Classes 9 – 12",
              desc: "Advanced computational thinking, applied AI literacy and ethical reasoning at competition-grade depth.",
              color: "from-indigo-500 to-violet-500",
            },
          ].map((g, i) => (
            <Reveal key={g.tag} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl bg-white border border-border shadow-card p-8 overflow-hidden">
                <div className={`absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br ${g.color} opacity-15 blur-2xl`} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow">
                    <g.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                    {g.tag}
                  </div>
                  <div className="mt-1 text-3xl font-bold">{g.classes}</div>
                  <p className="mt-3 text-muted-foreground">{g.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-3xl bg-white border border-border p-8 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-soft">
                  <BookOpenCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold">Accepted Boards</div>
                  <p className="text-sm text-muted-foreground">
                    NAILO welcomes students from every recognised education board.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {boards.map((b) => (
                  <span
                    key={b}
                    className="px-4 py-2 rounded-full bg-gradient-soft border border-primary/10 text-sm font-semibold text-foreground/80"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
