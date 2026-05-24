import {
  Activity,
  BarChart3,
  Brain,
  GraduationCap,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

export function MockPlatform() {
  return (
    <section id="mock" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="blob w-[420px] h-[420px] -top-10 -left-20 bg-blue-200/40" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <SectionHeader
          eyebrow="Preparation platform"
          title={
            <>
              An <span className="text-gradient">AI-powered</span> preparation engine
            </>
          }
          description="Mock tests, real-time analytics and expert sessions — all in one student dashboard."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-start">
          {/* Dashboard preview */}
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-soft blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl glass-strong shadow-glow p-5 sm:p-7">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs text-muted-foreground">Welcome back</div>
                    <div className="text-lg font-bold">Aarav · Class 9</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-semibold shadow-soft">
                    Senior Division
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { l: "Mock Tests", v: "18", s: "completed" },
                    { l: "Avg Score", v: "82%", s: "+6% this week" },
                    { l: "Percentile", v: "94.7", s: "All India" },
                  ].map((k) => (
                    <div
                      key={k.l}
                      className="rounded-2xl bg-white border border-border p-4"
                    >
                      <div className="text-[10px] text-muted-foreground">
                        {k.l}
                      </div>
                      <div className="text-2xl font-bold text-gradient">
                        {k.v}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1">
                        {k.s}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-white border border-border p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      <div className="text-sm font-semibold">
                        Topic mastery
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      Updated live
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { t: "Computational Thinking", v: 88 },
                      { t: "Applied AI Literacy", v: 74 },
                      { t: "Logical Reasoning", v: 92 },
                      { t: "Ethical AI", v: 68 },
                    ].map((p) => (
                      <div key={p.t}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-medium">{p.t}</span>
                          <span className="text-muted-foreground">{p.v}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-gradient-brand rounded-full"
                            style={{ width: `${p.v}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Side cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              {
                icon: Brain,
                title: "AI performance reports",
                desc: "Every mock comes with a personalised AI breakdown of strengths and gaps.",
              },
              {
                icon: Activity,
                title: "Percentile analytics",
                desc: "Track your standing against thousands of peers, updated in real time.",
              },
              {
                icon: GraduationCap,
                title: "Expert workshops",
                desc: "Live sessions with educators, AI practitioners and past toppers.",
              },
              {
                icon: PlayCircle,
                title: "Unlimited mock tests",
                desc: "Full-length and topic-wise tests across both divisions.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white border border-border p-5 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-soft mb-3">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-bold">{c.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="rounded-2xl p-5 bg-gradient-brand text-white shadow-glow">
                <Sparkles className="w-5 h-5" />
                <div className="mt-2 font-semibold">
                  Built for ambitious students, designed for confident parents.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
