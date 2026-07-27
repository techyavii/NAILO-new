// Navbar.tsx
// NOTE:
// This is a template showing the requested structural changes.
// Replace your existing Navbar.tsx with this version and
// copy over any project-specific imports/components as needed.

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

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (href: string) => {
    onNavigate?.(href);
    setOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-white"
      }`}>
      <nav className="mx-auto max-w-7xl h-20 px-5 lg:px-8 flex items-center justify-between">
        <a href="/" onClick={(e)=>{e.preventDefault();handleNavigate("/")}}>
          <img src="/NAILO_LOGO.png"
            alt="NAILO"
            className="h-18 lg:h-24 w-auto object-contain" />
        </a>

        <ul className="hidden text-l lg:flex items-center gap-2">
          {links.map(l=>(
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e)=>{e.preventDefault();handleNavigate(l.href)}}
                className="px-4 py-2 font-semibold hover:text-blue-600"
              >
                {l.label}
              </a>
            </li>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 font-semibold">
                Syllabus ▾
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {syllabusLinks.map(l=>(
                <DropdownMenuItem key={l.href} asChild>
                  <a
                    href={l.href}
                    onClick={(e)=>{e.preventDefault();handleNavigate(l.href)}}
                  >
                    {l.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>

        <button
          className="lg:hidden"
          onClick={()=>setOpen(v=>!v)}
        >
          {open ? <X/> : <Menu/>}
        </button>
      </nav>

      {/* Registration Ribbon */}
      <div className="hidden lg:block border-t border-slate-200 bg-gradient-to-r from-blue-50 via-white to-orange-50">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-12 px-6 py-3">

          <div className="flex flex-col items-center">
            <span className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              For Partner Schools
            </span>

            <a
              href="https://forms.gle/9HxrA5zhMAnMp7oE6"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-blue-200 bg-white px-5 py-2.5 font-semibold text-blue-700 shadow-sm hover:shadow-md"
            >
              🏫 Register Your School
            </a>
          </div>

          <div className="h-12 w-px bg-slate-300" />

          <div className="flex flex-col items-center">
            <span className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              For Individual Students
            </span>

            <a
              href="https://rzp.io/rzp/sKBaz3gm"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 font-bold text-white shadow-lg hover:scale-105 transition"
            >
              🚀 Register Now ₹399
            </a>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity:0,y:-10}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-10}}
            className="lg:hidden border-t bg-white"
          >
            <ul className="space-y-1 p-4">
              {[...links,...syllabusLinks].map(l=>(
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e)=>{e.preventDefault();handleNavigate(l.href)}}
                    className="block rounded-lg px-3 py-3"
                  >
                    {l.label}
                  </a>
                </li>
              ))}

              <li className="pt-4">
                <div className="mb-2 text-xs uppercase text-slate-500">
                  For Partner Schools
                </div>

                <a
                  href="https://forms.gle/9HxrA5zhMAnMp7oE6"
                  className="block rounded-full border px-4 py-3 text-center"
                >
                  Register Your School
                </a>
              </li>

              <li className="pt-3">
                <div className="mb-2 text-xs uppercase text-slate-500">
                  For Individual Students
                </div>

                <a
                  href="https://rzp.io/rzp/sKBaz3gm"
                  className="block rounded-full bg-blue-600 px-4 py-3 text-center text-white"
                >
                  Register Now ₹399
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
