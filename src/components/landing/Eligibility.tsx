import { GraduationCap, Users, BookOpenCheck } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const boards = ["CBSE", "ICSE", "State Boards", "International Boards"];

export function Eligibility() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-5 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Eligibility"
          title={
            <>
              Who can <span className="text-blue-700">participate</span>
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
              <div className={`relative h-full overflow-hidden rounded-[1.5rem] border bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${g.borderColor}`}>
                <div className="relative">
                  <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${g.color} text-white shadow-sm`}>
                    <g.icon className="w-8 h-8 text-black" />
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
          <div className="mt-12 rounded-[1.5rem] border border-slate-200 bg-white p-10 shadow-sm lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
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
                    className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-base font-semibold text-slate-700"
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
