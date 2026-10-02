"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowCircle } from "@/components/icons";
import gridBg from "@/assets/images/bg-grid.png";
import iconContainer2 from "@/assets/icons/Icon Container (2).png";
import patternMask from "@/assets/patterns/d14f913635d89304d0e9609822aed65631cb5593.png";

// Slides — Figma image d14f913635d89304d0e9609822aed65631cb5593
// (autumn cabin) is the main slide, followed by the other 3 cabins
import slideAutumn from "@/assets/images/5862733d33f0937fa1536016113d045d4e0608c6.png";
import slideGlass from "@/assets/images/048eb145ee1e27bd48c4d371d9c969785ad31845.png";
import slideBridge from "@/assets/images/68644bcdf63fedbe24de385e0cd809efb645982d.png";
import slidePond from "@/assets/images/d47e087f3621ebdea08d16e98774a688ba970760.png";

// Feature icons — Image-1..4
import iconKayak from "@/assets/icons/Image-1 1.png";
import iconDrink from "@/assets/icons/Image-2 1.png";
import iconCamp from "@/assets/icons/Image-3 1.png";
import iconForest from "@/assets/icons/Image-4 1.png";

const SLIDES = [slideAutumn, slideGlass, slideBridge, slidePond] as const;

// Order matches the design (right → left in RTL): camp, drink, kayak, forest
const FEATURES = [iconCamp, iconDrink, iconKayak, iconForest] as const;

/**
 * PackagesSection — "پکیج‌های ویژه اقامت در گیلمار"
 *
 * Right (RTL start): badge, title, subtitle, package name + includes line,
 * 4 feature cards, price + CTA.
 *
 * Left (RTL end): tall image slider. The Figma overlay pattern
 * d14f913635d89304d0e9609822aed65631cb5593 is applied as a CSS mask on
 * the slider images (same layering idea as the video-tour map vector).
 * The bg-grid blueprint backdrop stays pinned to the top right.
 */
export function PackagesSection() {
  const t = useTranslations("Packages");
  const locale = useLocale();
  const dir = locale === "fa" ? "rtl" : "ltr";
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const goTo = useCallback((i: number) => setActive(i), []);

  return (
    <section
      aria-labelledby="packages-title"
      className="relative overflow-hidden bg-white"
      dir={dir}
    >
      {/* Blueprint grid backdrop — top right, like video-tour-section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${gridBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "55% auto",
        }}
      />

      <div className="relative mx-auto grid w-[100%] max-w-[1280px] items-center gap-10 py-10 md:py-10 lg:gap-12 xl:h-[815px] xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] xl:gap-16 xl:py-0 2xl:gap-20">
        {/* ——— Text side (start in RTL = right) ——— */}
        <div className="flex flex-col items-start text-start xl:ps-[40px] 2xl:ps-[72px]">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2">
            <Image
              src={iconContainer2}
              alt=""
              width={76}
              height={50}
              className="h-[28px] w-auto object-contain"
            />
          </span>

          <h2 id="packages-title" className="intro-title mt-4">
            {t("title")}
          </h2>
          <p className="intro-body mt-3">{t("subtitle")}</p>

          <div className="mt-6 w-full border-t border-dashed border-slate-200 pt-5">
            <h3 className="text-base font-extrabold text-ink">
              {t("packageName")}
            </h3>
            <p className="mt-1 text-[13px] leading-7 text-[#64748B]">
              {t("includes")}
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* 4 feature cards — 116×116, radius 12, gap 52 (compact below xl) */}
            <ul className="mt-4 flex w-full flex-wrap gap-5 xl:gap-[52px]">
              {[0, 1, 2, 3].map((i) => (
                <li
                  key={i}
                  className="flex h-[100px] w-[100px] flex-col items-center justify-center gap-2 rounded-[12px] border border-header-border bg-header-surface p-4 shadow-[0px_0px_0px_6px_#FFFFFF,0px_24px_48px_0px_#002E251F] xl:h-[116px] xl:w-[116px]"
                >
                  <Image
                    src={FEATURES[i]}
                    alt={t(`features.${i}.alt`)}
                    width={44}
                    height={44}
                    className="size-9 object-contain xl:size-11"
                  />
                  <span className="text-center text-xs leading-5 font-bold text-ink">
                    {t(`features.${i}.label`)}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-extrabold text-emerald-600">
                {t("priceLabel")}: {t("price")}
              </p>
              <GradientButton
                asChild
                className="btn-guest h-[48px] w-auto min-w-[196px] items-center justify-between gap-3 rounded-full pe-2 ps-6 whitespace-nowrap"
              >
                <Link href="/booking">
                  <span className="text-sm leading-none font-extrabold">
                    {t("cta")}
                  </span>
                  <ArrowCircle dir={dir} label={t("cta")} />
                </Link>
              </GradientButton>
            </div>
          </div>
        </div>

        {/* ——— Slider side (end in RTL = left) ——— */}
        <div className="relative w-full max-w-[400px] justify-self-center sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] xl:justify-self-end">
          <div className="relative h-[540px] w-full sm:h-[600px] lg:h-[680px] xl:h-[735px]">
            {/* Main image — Figma overlay pattern d14f913635d89304d0e9609822aed65631cb5593
                applied as mask so every slide gets the puzzle silhouette */}
            <figure
              className="absolute inset-0 shadow-[0px_24px_48px_0px_#002E251F]"
              style={{
                WebkitMaskImage: `url(${patternMask.src})`,
                maskImage: `url(${patternMask.src})`,
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              {SLIDES.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={t(`slides.${i}.alt`)}
                  fill
                  sizes="(min-width: 1280px) 500px, (min-width: 1024px) 440px, 90vw"
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
              {/* Bottom scrim for dots legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,7,8,0.35)_0%,rgba(7,7,8,0)_30%)]"
              />
            </figure>

            {/* Floating badge card — pinned to the slider's top-left corner */}
            <div className="absolute top-[5rem] left-[-2.7rem] z-[2] w-[150px] rounded-2xl bg-white py-3 text-center">
              <p className="text-[11px] leading-5 font-extrabold text-ink">
                {t("badgeTop")}
              </p>
              <p className="mt-0.5 text-[10px] leading-4 text-[#64748B]">
                {t("badgeBottom")}
              </p>
            </div>

            {/* Progress bars */}
            <div className="absolute bottom-4 left-5 z-[2] flex items-center gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={t("goToSlide", { index: i + 1 })}
                  className={`h-[4px] rounded-full transition-all ${i === active
                      ? "w-[42px] bg-white"
                      : "w-[24px] bg-white/50 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
