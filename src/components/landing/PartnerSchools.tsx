import { Mail, School, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

export function PartnerSchools() {
  return (
    <section className="relative py-20 lg:py-28 px-5 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-8 md:p-10 lg:p-12 shadow-xl">
        <Reveal>
          <SectionHeader
            eyebrow="Partner Schools"
            title={
              <>
                Join the <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">NAILO school network</span>
              </>
            }
            description="We are building a growing community of schools that want to make AI literacy a meaningful part of student learning."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 p-3 text-white shadow-lg">
                <School className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">Partner with NAILO</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Schools can become part of the NAILO ecosystem to encourage AI awareness, national-level participation, and future-ready student development. We welcome institutions that believe in experiential learning and academic excellence.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  Curriculum-aligned opportunities
                </div>
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Student recognition & growth
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm">
              <div className="inline-flex rounded-2xl bg-white/10 p-3 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Contact us to know more</h3>
              <p className="mt-3 text-base leading-8 text-slate-300">
                If your school would like to become a NAILO partner, reach out to us at the email below and our team will help you with the next steps.
              </p>
              <a
                href="mailto:support@nailolympiad.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 px-5 py-3 font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <Sparkles className="h-4 w-4" />
                support@nailolympiad.com
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
