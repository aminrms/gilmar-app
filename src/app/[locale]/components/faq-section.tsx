"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import gridBg from "@/assets/images/bg-grid.png";
import iconContainer9 from "@/assets/icons/Icon Container (9).png";
import faqVisual from "@/assets/images/92f96cb1649a6f17905e97c4fba5482de9ddd005 (1).png";

const COUNT = 5;

/**
 * FaqSection — "سوالات متداول مهمانان گیلمار"
 *
 * Right (RTL start): badge (Icon Container 9), title, subtitle, bare
 * camera visual in a 620×576 box (no card, no shadow).
 *
 * Left (RTL end): accordion list, 620px wide. Active card: 20px radius,
 * 16px side / 24px vertical padding, 16px question↔answer gap,
 * #FCFDFD surface, 1px #EEF3F6 border, 6px white ring + soft drop shadow.
 * Collapsed rows: 64px pills (8000px radius), 16px padding, same border.
 */
export function FaqSection() {
  const t = useTranslations("Faq");
  const locale = useLocale();
  const dir = locale === "fa" ? "rtl" : "ltr";
  const [open, setOpen] = useState(0);

  return (
    <section
      aria-labelledby="faq-title"
      className="relative overflow-hidden"
      dir={dir}
    >
      {/* Soft glow wash — feathered so it blends with page, no separator edge */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[-140px] bottom-[-260px] size-[640px] rounded-full bg-glow-blue opacity-20 blur-[420px] [mask-image:radial-gradient(closest-side,black_40%,transparent_100%)]"
          style={{ backdropFilter: "blur(420px)" }}
        />
      </div>

      {/* Blueprint grid backdrop behind heading — same as rooms/magazine */}

      <div className="relative mx-auto grid w-[min(90rem,94%)] items-start gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,620px)_minmax(0,620px)] lg:justify-center lg:gap-12">
        {/* ——— Heading + visual side (start in RTL = right) ——— */}
        <div className="flex w-full flex-col items-start text-start">
          {/* Top badge — Icon Container (9) */}
          <span className="relative grid h-[50px] w-[76px] place-items-center">
            <Image
              src={iconContainer9}
              alt=""
              width={76}
              height={50}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </span>

          <h2 id="faq-title" className="amenities-title mt-4">
            {t("title")}
          </h2>
          <p className="amenities-body mt-3">{t("subtitle")}</p>

          {/* Visual — bare transparent render, 620×576 box, camera 420×382 @ (100,80) — lifted up */}
          <div className="relative -mt-[4rem] aspect-[620/576] w-full">
            {/* Soft radial halo behind camera — feathered, no hard edge */}
            <div
              aria-hidden
              className="absolute top-[35%] left-1/2 aspect-square w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[70px] lg:top-[31px] lg:left-[50px] lg:h-[480px] lg:w-[520px] lg:translate-x-0 lg:translate-y-0 lg:aspect-auto"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(2,173,247,0.35) 0%, rgba(38,224,90,0.22) 48%, rgba(197,216,255,0.18) 65%, transparent 78%)",
              }}
            />
            <Image
              src={faqVisual}
              alt={t("imageAlt")}
              width={420}
              height={382}
              sizes="(min-width: 1024px) 420px, 70vw"
              className="absolute top-[35%] left-1/2 w-[67.74%] -translate-x-1/2 -translate-y-1/2 rotate-0 object-contain lg:top-[80px] lg:left-[100px] lg:h-[382px] lg:w-[420px] lg:translate-x-0 lg:translate-y-0"
              style={{
                opacity: 1,
              }}
            />
          </div>
        </div>

        {/* ——— Accordion side (end in RTL = left) ——— */}
        <ul className="flex w-full flex-col gap-4">
          {Array.from({ length: COUNT }).map((_, i) => {
            const isOpen = open === i;
            return (
              <li
                key={i}
                className={cn(
                  "flex flex-col border border-[#EEF3F6] bg-[#FCFDFD] transition-all duration-300",
                  isOpen
                    ? "gap-4 rounded-[20px] px-4 py-6 shadow-[0_0_0_6px_#FFFFFF,0_24px_48px_0_#002E251F]"
                    : "rounded-full p-4",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  aria-label={
                    isOpen ? t("collapseLabel") : t("expandLabel")
                  }
                  className="flex w-full cursor-pointer items-center gap-4"
                >
                  <span className="faq-question flex-1 flex items-center justify-start">
                    {t(`items.${i}.question`)}
                  </span>
                  {/* Toggle — teal gradient circle, plus → minus */}
                  <span
                    aria-hidden
                    className="icon-badge !h-[28px] !w-[28px] shrink-0"
                  >
                    <span className="relative block size-[12px]">
                      <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rounded-full bg-white" />
                      <span
                        className={cn(
                          "absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 rounded-full bg-white transition-transform duration-300",
                          isOpen && "rotate-90 scale-0",
                        )}
                      />
                    </span>
                  </span>
                </button>

                {/* Answer — grid-rows animation */}
                <div
                  id={`faq-panel-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen
                      ? "[grid-template-rows:1fr]"
                      : "[grid-template-rows:0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="faq-answer">{t(`items.${i}.answer`)}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FaqSection;
