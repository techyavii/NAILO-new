import { GraduationCap, Users, BookOpenCheck } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const boards = ["CBSE", "ICSE", "State Boards", "International Boards"];

export function Eligibility() {
  return (
    <section className="relative py-20 lg:py-32 px-5 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Eligibility"
          title={
            <>
              Who can <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">participate</span>
            </>
          }
          description="NAILO is open to every school student in India, across two age-appropriate divisions."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-10">
          {[
            {
              icon: Users,
              tag: "Junior Group",
              classes: "Classes 6 – 8",
              desc: "Foundational logic, pattern recognition and an introduction to AI concepts through real-world scenarios.",
              color: "from-blue-500 to-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-300",
            },
            {
              icon: GraduationCap,
              tag: "Senior Group",
              classes: "Classes 9 – 12",
              desc: "Advanced computational thinking, applied AI literacy and ethical reasoning at competition-grade depth.",
              color: "from-green-500 to-green-600",
              bgColor: "bg-green-50",
              borderColor: "border-green-300",
            },
          ].map((g, i) => (
            <Reveal key={g.tag} delay={i * 0.1}>
              <div className={`relative h-full rounded-3xl border-2 p-10 ${g.bgColor} ${g.borderColor} hover:shadow-lg hover:-translate-y-2 transition-all overflow-hidden`}>
                <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br ${g.color} opacity-10 blur-2xl`} />
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${g.color} grid place-items-center shadow-lg mb-6`}>
                    <g.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-foreground/70 mb-2">
                    {g.tag}
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-4">{g.classes}</div>
                  <p className="text-lg text-foreground/80 leading-relaxed font-medium">{g.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 p-10 lg:p-12 hover:shadow-lg transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 grid place-items-center shadow-lg shrink-0">
                  <BookOpenCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">Accepted Boards</div>
                  <p className="text-lg text-foreground/75 font-medium">
                    NAILO welcomes students from every recognised education board.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-start sm:justify-end">
                {boards.map((b) => (
                  <span
                    key={b}
                    className="px-5 py-3 rounded-2xl bg-white border-2 border-blue-200 text-base font-bold text-blue-700 hover:bg-blue-50 transition-all"
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
