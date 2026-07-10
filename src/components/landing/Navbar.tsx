import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
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

];
const SyllabusLinks = [
  { label: "Syllabus", href: "/syllabus" },
  { label: "Exam Structure", href: "/exam" },
];

const moreLinks = [
  { label: "Advisory Board", href: "/advisory-board" },
  { label: "FAQs", href: "/faqs" },
];

export function Navbar({ currentPath = "/", onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 lg:py-12 h-20 flex items-center justify-between">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            handleNavigate("/");
          }}
          className="flex items-center gap-3 group"
        >
          <img
            src="/NAILO_LOGO.png"
            alt="NAILO"
            className="h-32 w-auto"
          />
          {/* <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-foreground">NAILO</span>
          </div> */}
        </a>

        <ul className="hidden lg:flex items-center gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(l.href);
                }}
                className="relative px-4 py-2 text-base font-semibold text-foreground hover:text-blue-600 transition-colors group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-1 bg-gradient-to-r from-blue-500 to-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              </a>
            </li>
          ))}

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-semibold text-foreground hover:text-blue-600 transition-colors"
                >
                  Syllabus
                  <span className="text-sm text-slate-400">▾</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {SyllabusLinks.map((l) => (
                  <DropdownMenuItem key={l.href} asChild>
                    <a
                      href={l.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigate(l.href);
                      }}
                      className="block w-full"
                    >
                      {l.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-semibold text-foreground hover:text-blue-600 transition-colors"
                >
                  More
                  <span className="text-sm text-slate-400">▾</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {moreLinks.map((l) => (
                  <DropdownMenuItem key={l.href} asChild>
                    <a
                      href={l.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigate(l.href);
                      }}
                      className="block w-full"
                    >
                      {l.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://forms.gle/9HxrA5zhMAnMp7oE6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-white"
          >
            Register Your School
          </a>
          <a
            href="https://rzp.io/rzp/sKBaz3gm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Register Now ₹399
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl"
          >
            <ul className="px-5 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(l.href);
                    }}
                    className="block px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-1">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500 px-3 pb-2">Syllabus</div>
              </li>
              {SyllabusLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(l.href);
                    }}
                    className="block px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-1">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500 px-3 pb-2">More</div>
              </li>
              {moreLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(l.href);
                    }}
                    className="block px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://forms.gle/9HxrA5zhMAnMp7oE6"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-glow"
                >
                  Register Your School
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}