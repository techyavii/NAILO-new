import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Reveal } from "./shared";

export function FinalCTA() {
  return (
    <section id="register" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand animate-gradient text-white p-10 sm:p-16 shadow-glow text-center">
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

            <div className="relative max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Registrations live for 2026-27
              </div>
              <h2 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Join India's growing movement toward AI literacy.
              </h2>
              <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">
                A national stage. A future-defining skill set. A few minutes to
                register and a year-long journey to remember.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground text-sm font-semibold shadow-soft hover:scale-[1.03] active:scale-[0.98] transition-transform"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#syllabus"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white text-sm font-semibold hover:bg-white/15 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Syllabus
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
