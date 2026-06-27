import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Reveal } from "./shared";

export function FinalCTA() {
  return (
    <section id="register" className="relative py-20 lg:py-32 px-5 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 via-green-500 to-blue-600 text-white p-12 sm:p-20 shadow-2xl text-center">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />

            <div className="relative max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur text-base font-bold mb-8">
                <Sparkles className="w-5 h-5" /> 🎉 Registrations LIVE for 2026
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                Ready to become India's next AI Explorer?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                Join thousands of students on a year-long journey to master computational thinking, 
                win national recognition, and shape India's digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
                <a
                  href="https://rzp.io/rzp/sKBaz3gm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-white text-blue-600 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all"
                >
                  🚀 Register Now ₹399 <ArrowRight className="w-6 h-6" />
                </a>
                <a
                  href="#syllabus"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-white/20 backdrop-blur border-2 border-white text-white text-lg font-bold hover:bg-white/30 transition-all"
                >
                  <Download className="w-6 h-6" /> Download Syllabus
                </a>
              </div>
              <p className="mt-10 text-sm text-white/80 font-medium">
                ⏰ Exam Date: 20 December 2026 | 🏆 Total Prize Pool: 3+ Lakhs
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
