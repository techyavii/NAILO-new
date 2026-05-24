import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeatureStrip } from "@/components/landing/FeatureStrip";
import { VisionMission } from "@/components/landing/VisionMission";
import { About } from "@/components/landing/About";
import { WhyParticipate } from "@/components/landing/WhyParticipate";
import { Eligibility } from "@/components/landing/Eligibility";
import { ExamStructure } from "@/components/landing/ExamStructure";
import { Syllabus } from "@/components/landing/Syllabus";
import { MockPlatform } from "@/components/landing/MockPlatform";
import { Awards } from "@/components/landing/Awards";
import { ImportantDates } from "@/components/landing/ImportantDates";
import { StudentJourney } from "@/components/landing/StudentJourney";
import { Platform } from "@/components/landing/Platform";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "NAILO 2026-27 · National AI Literacy Olympiad for Indian Students",
      },
      {
        name: "description",
        content:
          "Register for NAILO 2026-27 — India's National AI Literacy Olympiad for Classes 6–12. Computational thinking, AI literacy, ₹1,00,000 prize and national recognition. No coding required.",
      },
      { property: "og:title", content: "NAILO 2026-27 · National AI Literacy Olympiad" },
      {
        property: "og:description",
        content:
          "India's national-level Olympiad for computational thinking and AI literacy. Classes 6–12. NEP 2020 aligned.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          name: "National AI Literacy Olympiad (NAILO) 2026-27",
          description:
            "India's national assessment for computational thinking and AI literacy for school students from Classes 6 to 12.",
          eventAttendanceMode:
            "https://schema.org/OnlineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          organizer: {
            "@type": "Organization",
            name: "AFI EduTech",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <VisionMission />
        <About />
        <WhyParticipate />
        <Eligibility />
        <ExamStructure />
        <Syllabus />
        <MockPlatform />
        <Awards />
        <ImportantDates />
        <StudentJourney />
        <Platform />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
