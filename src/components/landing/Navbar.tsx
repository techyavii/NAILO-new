import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Awards", href: "/awards" },
  { label: "Partner Schools", href: "/partner-schools" },
  { label: "Advisory Board", href: "/advisory-board" },
  { label: "FAQs", href: "/faqs" },
];

const syllabusLinks = [
  { label: "Syllabus", href: "/syllabus" },
  { label: "Exam Structure", href: "/exam" },
];

// Replace this with your actual exam portal URL
const EXAM_PORTAL_URL = "https://dashboard.nailolympiad.com/";

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavigate = (href: string) => {
    onNavigate?.(href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-white"
      }`}
    >
      {/* =========================================================
          MAIN NAVBAR
      ========================================================== */}
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* LOGO */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/");
          }}
          className="flex shrink-0 items-center"
        >
          <img
            src="/NAILO_LOGO.png"
            alt="NAILO"
            className="h-16 w-auto object-contain lg:h-[68px]"
          />
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <ul className="hidden lg:flex items-center gap-1">
          {/* Main Links */}
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.href);
                }}
                className="relative inline-flex items-center px-3 py-2 text-[16px] font-semibold text-slate-900 transition-colors duration-200 hover:text-blue-600"
              >
                {link.label}

                <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-transform duration-300 hover:scale-x-100" />
              </a>
            </li>
          ))}

          {/* ===================================================
              SYLLABUS DROPDOWN
          ==================================================== */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[16px] font-semibold text-slate-900 transition-colors duration-200 hover:text-blue-600"
                >
                  Syllabus
                  <span className="text-xs text-slate-400">▾</span>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-52 rounded-xl border border-slate-200 bg-white p-1 shadow-xl"
              >
                {syllabusLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(link.href);
                      }}
                      className="block w-full cursor-pointer rounded-lg px-3 py-2.5 font-medium"
                    >
                      {link.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* ===================================================
              EXAM PORTAL
          ==================================================== */}
          <li>
            <a
              href={EXAM_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative ml-2 inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-blue-600 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
            >
              {/* Subtle shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              {/* Status dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>

              <span className="relative">Student Login</span>
            </a>
          </li>
        </ul>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden rounded-lg p-2 text-slate-900 transition-colors hover:bg-slate-100"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* =========================================================
          DESKTOP REGISTRATION RIBBON
      ========================================================== */}
      <div className="hidden border-t border-slate-200 bg-gradient-to-r from-blue-50 via-white to-orange-50 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-6 py-3">
          {/* Partner Schools */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              For Partner Schools
            </span>

            <a
              href="https://forms.gle/9HxrA5zhMAnMp7oE6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-2.5 font-semibold text-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              🏫 Register Your School
            </a>
          </div>

          {/* Divider */}
          <div className="h-12 w-px bg-slate-300" />

          {/* Individual Students */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              For Individual Students
            </span>

            <a
              href="https://rzp.io/rzp/sKBaz3gm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl"
            >
              🚀 Register Now ₹399
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
              <ul className="space-y-1 p-4">
                {/* Main Links */}
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(link.href);
                      }}
                      className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

                {/* =================================================
                    SYLLABUS
                ================================================== */}
                <li className="pt-3">
                  <div className="px-3 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Syllabus
                  </div>
                </li>

                {syllabusLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(link.href);
                      }}
                      className="block rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

                {/* =================================================
                    EXAM PORTAL
                ================================================== */}
                <li className="pt-4">
                  <a
                    href={EXAM_PORTAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-800 bg-slate-700 px-4 py-3.5 text-center font-bold text-white shadow-md transition-all duration-200 hover:border-blue-700 hover:bg-blue-700"
                  >
                    <span>Student Login</span>
                  </a>
                </li>

                {/* =================================================
                    PARTNER SCHOOL REGISTRATION
                ================================================== */}
                <li className="pt-5">
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    For Partner Schools
                  </div>

                  <a
                    href="https://forms.gle/9HxrA5zhMAnMp7oE6"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-full border border-blue-200 bg-white px-4 py-3 text-center font-semibold text-blue-700 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                  >
                    🏫 Register Your School
                  </a>
                </li>

                {/* =================================================
                    INDIVIDUAL STUDENT REGISTRATION
                ================================================== */}
                <li className="pt-3 pb-2">
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    For Individual Students
                  </div>

                  <a
                    href="https://rzp.io/rzp/sKBaz3gm"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-center font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  >
                    🚀 Register Now ₹399
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}