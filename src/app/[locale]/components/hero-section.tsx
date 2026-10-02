"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { GradientButton } from "@/components/ui/gradient-button";
import heroBanner from "@/assets/images/hero-banner.png";
import reviewer1 from "@/assets/images/Reviewer Image-1 2.png";
import reviewer2 from "@/assets/images/Reviewer Image 2.png";
import reviewer3 from "@/assets/images/Reviewer Image-2 3.png";

const REVIEWERS = [reviewer1, reviewer2, reviewer3];

export function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const ForwardIcon = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Top glow background — 1440×960 layer, ellipses top-left + top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[960px] w-[min(1440px,100%)]"
      >
        <div className="absolute top-[-140px] left-[-140px] size-[640px] rounded-full bg-glow-blue blur-[210px]" />
        <div className="absolute top-[-140px] right-[-140px] size-[640px] rounded-full bg-glow-blue blur-[210px]" />
      </div>

      <div className="relative flex  max-w-7xl mx-auto flex-col items-center pt-32 text-center md:pt-44">
        {/* Title — one line on md+, Abar Mid ExtraBold 40/100%, tracking -2.4 */}
        <h1
          id="hero-title"
          className="w-full text-center align-middle font-extrabold text-ink text-[clamp(1.375rem,3.4vw,2.5rem)] leading-[100%] tracking-[-2.4px] md:whitespace-nowrap"
        >
          {t("title")}
        </h1>

        {/* Sub — 732 max, Abar Mid SemiBold 14/32 */}
        <p className="nav-item mt-4 w-[min(45.75rem,100%)] text-ink">
          {t("subtitle")}
        </p>

        {/* Guest CTA — 191×52, gradient + inset shadows, 16px extrabold text */}
        <GradientButton
          asChild
          className="btn-guest mt-6 h-[52px] w-[min(191px,100%)] items-center justify-between gap-2 pe-1.5 ps-6 whitespace-nowrap"
        >
          <Link href="/booking">
            <span className="text-base leading-none font-extrabold">
              {t("cta")}
            </span>
            <span className="guest-icon-ring">
              <ForwardIcon className="size-5 text-brand-teal" />
            </span>
          </Link>
        </GradientButton>

        {/* Banner */}
        <div className="relative mt-10 w-full">
          {/* Brand glow behind the banner */}
          <div
            aria-hidden
            className="bg-brand-gradient absolute -inset-x-8 -top-8 bottom-1/3 -z-10 opacity-25 blur-3xl"
          />
          <figure className="relative overflow-hidden rounded-[24px]">
            <Image
              src={heroBanner}
              alt={t("bannerAlt")}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Bottom overlay row — space-between, p 18/50/18/20 */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:pt-[18px] sm:pr-[50px] sm:pb-[22px] sm:pl-[30px]">
              {/* Caption card (start side in RTL = right) */}
              <figcaption className="nav-item hidden w-[min(15.6875rem,45%)] rounded-2xl bg-transparent px-4 py-3 text-right text-ink sm:block">
                {t("caption")}
              </figcaption>

              {/* Reviewers pill — 166×48, gap 6, p 8/14/8/8, spec shadows */}
              <div
                className={cn(
                  "flex h-12 w-[166px] max-w-full items-center gap-1.5",
                  "rounded-full bg-white pt-2 pr-[14px] pb-2 pl-2",
                  "shadow-[0px_10px_41px_0px_#0000000A,0px_2px_2px_0px_#00000005]",
                )}
              >
                <div className="flex shrink-0 items-center [&>*+*]:-ms-3">
                  {REVIEWERS.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={t("reviewerAlt")}
                      width={26}
                      height={26}
                      className="size-[26px] rounded-full border border-white object-cover"
                    />
                  ))}
                </div>
                <span className="nav-item flex h-8 w-[82px] shrink-0 items-center justify-center text-ink">
                  {t("bookings")}
                </span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
