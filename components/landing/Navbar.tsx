"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled
          ? "backdrop-blur-md bg-[hsl(var(--surface))/0.9] border-b border-[hsl(var(--border))] shadow-[var(--shadow-sm)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-2 py-1 text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]"
        >
          <span className="h-9 w-9 rounded-lg bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))] flex items-center justify-center font-bold">
            B
          </span>
          <span className="tracking-tight">bary</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {t.navbar.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[hsl(var(--text-muted))] transition-colors hover:text-[hsl(var(--text))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="px-3 text-sm">
                <Globe2 className="mr-2 h-4 w-4" />
                {language === "en" ? "EN" : "LT"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("lt")}>Lietuvių</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild size="sm">
            <Link href="/contact">{t.navbar.cta}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-2 text-[hsl(var(--text))] lg:hidden"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-[var(--shadow-md)]">
          <div className="container px-4 py-4 space-y-3">
            {t.navbar.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4" />
                      {language === "en" ? "English" : "Lietuvių"}
                    </span>
                    <ChevronIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("lt")}>Lietuvių</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  {t.navbar.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-4 w-4 text-[hsl(var(--text-muted))]"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
