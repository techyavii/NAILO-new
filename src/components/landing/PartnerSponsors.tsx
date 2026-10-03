import { Reveal, SectionHeader } from "./shared";

export function PartnerSponsors() {
  return (
    <section className="relative px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Partners"
          title="Partners & Sponsors"
          description="We are grateful to the organizations supporting AI literacy and future-ready learning."
        />

        <Reveal delay={0.12}>
          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center rounded-3xl border border-blue-900/10 bg-gradient-to-r from-slate-900 via-blue-950 to-emerald-950 px-8 py-10 shadow-xl sm:px-12">
            <img
              src="/partners-sponsers/AAVILabs.png"
              alt="AAVI Labs"
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
