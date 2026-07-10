import { ArrowRight, Download, Eye, Sparkles } from "lucide-react";
import { Reveal } from "./shared";

export function FinalCTA() {
  return (
    <section id="register" className="relative py-16 lg:py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-12 text-center shadow-sm sm:p-20">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />

            <div className="relative max-w-4xl mx-auto">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-base font-semibold text-slate-700">
                <Sparkles className="w-5 h-5" /> 🎉 Registrations LIVE for 2026
              </div>
              <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Ready to become India's next AI Explorer?
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
                Join thousands of students on a year-long journey to master computational thinking, 
                win national recognition and shape India's digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
                <a
                  href="https://rzp.io/rzp/sKBaz3gm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-10 py-5 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  🚀 Register Now ₹399
                </a>
                <a
                  href="#syllabus"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-10 py-5 text-lg font-semibold text-slate-700 transition hover:bg-white"
                >
                  <Eye className="w-6 h-6" /> View Syllabus
                </a>
              </div>
              <p className="mt-10 text-sm font-medium text-slate-500">
                ⏰ Exam Date: 20 December 2026 | 🏆 Total Prize Pool: 3+ Lakhs
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
