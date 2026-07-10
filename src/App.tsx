import { useEffect, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import ConferenceBanner from "@/components/landing/ConferenceBanner";
import { Hero } from "@/components/landing/Hero";
import { FeatureStrip } from "@/components/landing/FeatureStrip";
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
import { HomeHighlights } from "@/components/landing/HomeHighlights";
import { PartnerSchools } from "@/components/landing/PartnerSchools";
import { PreparationResources } from "@/components/landing/PreparationResources";
import AwardCTA from "@/components/landing/AwardCTA";

function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <StudentJourney />
      <AwardCTA/>
      <PreparationResources />
      <HomeHighlights />
      {/* <About /> */}
      <WhyParticipate />
      <Eligibility />
      {/* <ExamStructure /> */}
      {/* <Syllabus /> */}
      {/* <Awards /> */}
      {/* <AdvisoryBoard /> */}
      <ImportantDates />

      
      {/* <Platform /> */}
      {/* <FAQ /> */}
      <FinalCTA />
    </>
  );
}

function PartnerSchoolsPage() {
  return <PartnerSchools />;
}

function SectionPage({ children }: { children: React.ReactNode }) {
  return <div className="py-8 lg:py-12">{children}</div>;
}

function Index() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname + window.location.hash);

  const navigateTo = (nextPath: string) => {
    const normalizedPath = nextPath.startsWith("/") ? nextPath : `/${nextPath}`;
    if (window.location.pathname + window.location.hash !== normalizedPath) {
      window.history.pushState({}, "", normalizedPath);
    }
    setCurrentPath(normalizedPath);
  };

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname + window.location.hash);
    window.addEventListener("popstate", syncPath);
    window.addEventListener("hashchange", syncPath);
    return () => {
      window.removeEventListener("popstate", syncPath);
      window.removeEventListener("hashchange", syncPath);
    };
  }, []);

  useEffect(() => {
    if (currentPath.includes("#")) {
      const id = currentPath.split("#")[1];
      const target = document.getElementById(id);
      if (target) {
        window.setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPath]);

  const route = currentPath.split("#")[0];
  const page = (() => {
    switch (route) {
      case "/about":
        return <SectionPage><About /></SectionPage>;
      case "/syllabus":
        return <SectionPage><Syllabus /></SectionPage>;
      case "/exam":
        return <SectionPage><ExamStructure /></SectionPage>;
      case "/awards":
        return <SectionPage><Awards /></SectionPage>;
      case "/faqs":
        return <SectionPage><FAQ /></SectionPage>;
      case "/contact":
        return <SectionPage><FinalCTA /></SectionPage>;
      case "/partner-schools":
        return <PartnerSchoolsPage />;
      case "/advisory-board":
        return <AdvisoryBoard />;
      default:
        return <HomePage />;
    }
  })();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <ConferenceBanner /> */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      <main>{page}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default Index;
