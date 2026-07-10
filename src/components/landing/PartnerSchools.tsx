import { Mail, School, Users, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const points = [
  "Create a future-ready AI learning culture in your school.",
  "Bring national-level AI literacy exposure to students and educators.",
  "Enable participation in a structured, student-friendly olympiad experience.",
];

export function PartnerSchools() {
  return (
    <section className="relative py-16 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="School partnership"
          title={
            <>
              NAILO <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Partner Schools</span>
            </>
          }
          description="Schools can join the NAILO movement by connecting with our team and discovering how AI literacy can be introduced in a meaningful way."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-blue-200 bg-white/80 p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-md">
                <School className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Partner with NAILO</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                If your school would like to know more about becoming a NAILO partner school, please contact us at our email address and our team will be happy to assist you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:support@nailolympiad.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  support@nailolympiad.com
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">For schools</p>
                  <h3 className="text-xl font-bold text-foreground">Why partner with us</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm font-medium text-foreground/80">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
