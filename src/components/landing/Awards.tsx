import { Trophy, Medal, Star, Award } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

export function Awards() {
  return (
    <section id="awards" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-gradient-soft blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Awards & recognition"
          title={
            <>
              Rewards that <span className="text-gradient">match the ambition</span>
            </>
          }
          description="Cash prizes, medals, certificates and a moment of national recognition that stays for life."
        />

        {/* Grand prize hero */}
        <Reveal delay={0.1}>
          <div className="mt-14 relative rounded-3xl overflow-hidden bg-gradient-brand text-white p-8 sm:p-12 shadow-glow">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold">
                  <Trophy className="w-3.5 h-3.5" /> Grand Prize
                </div>
                <div className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  ₹1,00,000
                </div>
                <p className="mt-3 text-white/85 max-w-md">
                  Awarded to the National Topper across both divisions, along
                  with a featured profile and stage recognition at the NAILO
                  Awards Ceremony.
                </p>
              </div>
              <div className="relative h-64">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative w-56 h-56 animate-float">
                    <div className="absolute inset-0 rounded-full bg-white/15 blur-2xl" />
                    <div className="relative w-full h-full rounded-3xl glass-strong grid place-items-center">
                      <Trophy className="w-28 h-28 text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Medals */}
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {[
            { icon: Medal, name: "Gold Medal", tier: "Top 1%", color: "from-yellow-400 to-amber-500" },
            { icon: Medal, name: "Silver Medal", tier: "Top 3%", color: "from-slate-300 to-slate-500" },
            { icon: Medal, name: "Bronze Medal", tier: "Top 5%", color: "from-orange-400 to-amber-700" },
          ].map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="relative h-full rounded-3xl bg-white border border-border p-7 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all overflow-hidden text-center">
                <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-gradient-to-br ${m.color} opacity-20 blur-2xl`} />
                <div className="relative">
                  <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${m.color} grid place-items-center shadow-glow animate-float-slow`}>
                    <m.icon className="w-10 h-10 text-white drop-shadow" />
                  </div>
                  <div className="mt-5 text-xl font-bold">{m.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {m.tier} performers
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {[
            { icon: Star, t: "National Recognition", d: "Featured on the NAILO Wall of Fame with a verified digital profile." },
            { icon: Award, t: "Participation Certificate", d: "Every student receives a digital certificate of participation." },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="h-full rounded-2xl bg-white border border-border p-6 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-soft shrink-0">
                  <x.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">{x.t}</div>
                  <p className="text-sm text-muted-foreground mt-1">{x.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
