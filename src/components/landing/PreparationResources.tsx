import { Download, CheckCircle2, Sparkles, Gift } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const resources = [
  { title: "Question Bank", icon: "📚", tint: "from-blue-500 to-blue-600" },
  { title: "Olympiad Prep Guide", subtitle: "Full study material", icon: "📖", tint: "from-violet-500 to-violet-600" },
  { title: "AI Basics e-Guide", icon: "🤖", tint: "from-emerald-500 to-emerald-600" },
  { title: "Parent's Handbook", icon: "👨‍👩‍👧", tint: "from-amber-500 to-amber-600" },
  { title: "School Ambassador Guide", subtitle: "For partner schools", icon: "🎓", tint: "from-pink-500 to-pink-600" },
];

export function PreparationResources() {
  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/NAILO Brochure.pdf";
    link.download = "NAILO Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resources"
      className="relative py-20 lg:py-28 px-5 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#eff6ff_0%,transparent_45%),radial-gradient(circle_at_80%_0%,#ecfdf5_0%,transparent_40%)] bg-white"
    >
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            {/* Left side - Content */}
            <div>
              {/* Attention-grabbing eyebrow badge */}
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-blue-200">
                <Gift className="w-3.5 h-3.5" />
                Included Free With Registration
              </div>

              <SectionHeader
                eyebrow=""
                title={
                  <>
                    Everything You Need to<br />
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Win, Handed to You</span>
                  </>
                }
                description="No hidden costs, no separate purchases — five expert-curated resources land in your personalized dashboard the moment you register."
              />

              {/* Bento-style resource grid instead of a flat list */}
              <div className="grid sm:grid-cols-2 gap-3 mt-8 mb-8">
                {resources.map((resource, index) => (
                  <Reveal key={resource.title} delay={index * 0.07}>
                    <div
                      className={`group relative h-full flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-transparent transition-all duration-300 ${
                        index === 4 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${resource.tint} flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                      >
                        {resource.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-[15px] leading-snug">{resource.title}</p>
                        {resource.subtitle && (
                          <p className="text-xs text-gray-500 mt-0.5">{resource.subtitle}</p>
                        )}
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.42}>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleDownloadBrochure}
                    className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 active:scale-95 transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 animate-[shine_2.5s_ease-in-out_infinite]" />
                    <Download className="w-6 h-6" />
                    Download Brochure (PDF)
                  </button>

                </div>
              </Reveal>
            </div>

            {/* Right side - Visual: stacked "kit" cards instead of a flat stat box */}
            <Reveal delay={0.2}>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-10 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200 rounded-3xl blur-3xl opacity-40" />

                {/* back card */}
                <div className="absolute inset-0 translate-x-4 translate-y-6 rotate-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl shadow-xl" />
                {/* mid card */}
                <div className="absolute inset-0 translate-x-2 translate-y-3 -rotate-2 bg-white border border-blue-100 rounded-3xl shadow-xl" />

                {/* front card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-100">
                  {/* corner ribbon */}
                  <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-lg border border-green-200 text-green-600 text-xs font-extrabold">
                    <Sparkles className="w-3.5 h-3.5" />
                    EXTRA COST
                  </div>

                  <div className="space-y-5">
                    <p className="text-xs font-bold tracking-widest text-blue-500 uppercase">Your Prep Kit</p>

                    <div className="space-y-3">
                      {resources.slice(0, 3).map((r) => (
                        <div key={r.title} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${r.tint} flex items-center justify-center text-sm shadow`}>
                            {r.icon}
                          </div>
                          <p className="text-sm font-semibold text-gray-800 truncate">{r.title}</p>
                        </div>
                      ))}
                      <p className="text-xs text-gray-400 font-medium pl-11">+ 2 more resources inside</p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-blue-200 via-green-200 to-transparent" />

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-extrabold text-blue-600">5+</p>
                        <p className="text-xs text-gray-600">Resources</p>
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold text-green-600">∞</p>
                        <p className="text-xs text-gray-600">Practice</p>
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold text-purple-600">₹0</p>
                        <p className="text-xs text-gray-600">Cost</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          50%, 100% { transform: translateX(150%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}