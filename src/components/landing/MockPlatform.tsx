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
    <section id="mock" className="relative py-16 lg:py-24 px-5 lg:px-8 overflow-hidden">
      <div className="blob w-[420px] h-[420px] -top-10 -left-20 bg-blue-200/40" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeader
          eyebrow="Preparation platform"
          title={
            <>
              An <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">AI-powered</span> preparation engine
            </>
          }
          description="Real-time analytics and AI resource hub — all in one student dashboard."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
          {/* Dashboard preview */}
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 blur-3xl rounded-3xl opacity-40" />
              <div className="relative rounded-3xl bg-white border-2 border-blue-200 shadow-lg p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-foreground/70 font-medium">Welcome back</div>
                    <div className="text-2xl font-bold text-foreground">Aarav · Class 9</div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm font-bold shadow-lg">
                    Senior Division
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { l: "Practice Modules", v: "18", s: "completed" },
                    { l: "Avg Score", v: "82%", s: "+6% this week" },
                    { l: "Percentile", v: "94.7", s: "All India" },
                  ].map((k) => (
                    <div
                      key={k.l}
                      className="rounded-3xl bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 p-5"
                    >
                      <div className="text-xs text-foreground/70 font-bold">
                        {k.l}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mt-1">
                        {k.v}
                      </div>
                      <div className="text-xs text-foreground/70 font-medium mt-2">
                        {k.s}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 grid place-items-center text-white">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        Topic mastery
                      </div>
                    </div>
                    <span className="text-xs text-foreground/70 font-semibold">
                      Updated live
                    </span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { t: "Computational Thinking", v: 88 },
                      { t: "Applied AI Literacy", v: 74 },
                      { t: "Logical Reasoning", v: 92 },
                      { t: "Ethical AI", v: 68 },
                    ].map((p) => (
                      <div key={p.t}>
                        <div className="flex justify-between text-sm font-bold mb-2">
                          <span className="text-foreground">{p.t}</span>
                          <span className="text-foreground/80">{p.v}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-white border border-yellow-200 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
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
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {[
              {
                icon: Brain,
                title: "AI performance reports",
                desc: "Every practice module comes with a personalised AI breakdown of strengths and gaps.",
                color: "from-blue-500 to-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Activity,
                title: "Percentile analytics",
                desc: "Track your standing against thousands of peers, updated in real time.",
                color: "from-green-500 to-green-600",
                bg: "bg-green-50"
              },
              {
                icon: GraduationCap,
                title: "AI Resource Hub",
                desc: "Explore curated AI tools, beginner-friendly guides, practice material, and learning resources designed for students.",
                color: "from-purple-500 to-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: PlayCircle,
                title: "Practice Modules",
                desc: "Full-length and topic-wise learning paths across both divisions.",
                color: "from-pink-500 to-pink-600",
                bg: "bg-pink-50"
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className={`h-full rounded-3xl border-2 p-6 ${c.bg} border-current/20 hover:shadow-lg hover:-translate-y-1 transition-all`}>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center shadow-lg mb-4 text-white`}>
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-lg text-foreground mb-2">{c.title}</div>
                  <p className="text-base text-foreground/75 font-medium leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="rounded-3xl p-7 bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 shrink-0 mt-1" />
                  <div className="font-bold text-lg leading-tight">
                    Built for ambitious students, designed for confident parents.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
