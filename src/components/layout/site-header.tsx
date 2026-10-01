"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CircleUserRound, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import logo from "@/assets/images/logo.png";
import { GradientButton } from "@/components/ui/gradient-button";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/suites", key: "suites" },
  { href: "/about", key: "about" },
  { href: "/guide", key: "guide" },
  { href: "/magazine", key: "magazine" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-10">
      <div className="relative w-full max-w-[1430px]">
        <div
          className={cn(
            "flex h-[66px] w-full items-center justify-between gap-4",
            "rounded-full border border-header-border bg-header-surface",
            "px-2 py-[6.5px]",
            "shadow-[0px_0px_0px_6px_#FFFFFF]",
          )}
        >
          {/* Logo (start side in RTL = right) — 169×53 ratio, percentage width */}
          <Link
            href="/"
            className="w-[clamp(7.5rem,13.2%,10.5625rem)] shrink-0 ps-3"
            aria-label={t("homeAria")}
          >
            <Image
              src={logo}
              alt={t("homeAria")}
              width={169}
              height={53}
              priority
              className="h-auto w-full opacity-100"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label={t("mainNavAria")}
            className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-8"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="nav-item shrink-0 whitespace-nowrap text-slate-600 transition-colors hover:text-brand-teal"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {/* CTA */}
            <GradientButton
              asChild
              className="hidden h-[53px] px-5 whitespace-nowrap sm:inline-flex"
            >
              <Link href="/auth">
                <CircleUserRound className="size-5" strokeWidth={1.8} />
                {t("auth")}
              </Link>
            </GradientButton>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t("closeMenu") : t("openMenu")}
              className="inline-flex size-[53px] items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="absolute inset-x-0 top-[calc(100%+12px)] rounded-[28px] border border-header-border bg-header-surface p-4 shadow-[0px_0px_0px_6px_#FFFFFF] lg:hidden">
            <nav aria-label={t("mobileNavAria")} className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-item rounded-2xl px-4 py-2.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-teal"
                >
                  {t(item.key)}
                </Link>
              ))}
              <GradientButton
                asChild
                className="mt-2 h-[52px] w-full sm:hidden"
              >
                <Link href="/auth" onClick={() => setOpen(false)}>
                  <CircleUserRound className="size-5" strokeWidth={1.8} />
                  {t("auth")}
                </Link>
              </GradientButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default SiteHeader;
