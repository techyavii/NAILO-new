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
