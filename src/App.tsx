import { useEffect, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import ConferenceBanner from "@/components/landing/ConferenceBanner";
import { Hero } from "@/components/landing/Hero";
import { FeatureStrip } from "@/components/landing/FeatureStrip";
import { HomeHighlights } from "@/components/landing/HomeHighlights";
import { VisionMission } from "@/components/landing/VisionMission";
import { About } from "@/components/landing/About";
import { WhyParticipate } from "@/components/landing/WhyParticipate";
import { Eligibility } from "@/components/landing/Eligibility";
import { ExamStructure } from "@/components/landing/ExamStructure";
import { Syllabus } from "@/components/landing/Syllabus";
import { Awards } from "@/components/landing/Awards";
import { ImportantDates } from "@/components/landing/ImportantDates";
import { StudentJourney } from "@/components/landing/StudentJourney";
import { Platform } from "@/components/landing/Platform";
import { AdvisoryBoard } from "@/components/landing/AdvisoryBoard";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { PartnerSchools } from "@/components/landing/PartnerSchools";

type Page = "home" | "partners";

function Index() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ConferenceBanner />
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === "home" ? (
        <main>
          <Hero />
          <FeatureStrip />
          <HomeHighlights />
          <VisionMission />
          <About />
          <WhyParticipate />
          <Eligibility />
          <ExamStructure />
          <Syllabus />
          <Awards />
          <AdvisoryBoard />
          <ImportantDates />
          <StudentJourney />
          <Platform />
          <FAQ />
          <FinalCTA />
        </main>
      ) : (
        <main>
          <PartnerSchools />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default Index;
