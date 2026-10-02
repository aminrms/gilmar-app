"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowCircle } from "@/components/icons";

import gridBg from "@/assets/images/bg-grid.png";
import introLake from "@/assets/images/58e55ff5a67a21d0944484bf532fd685e430c5dd (1).png";
import introBridge from "@/assets/images/2639b9a210943894919a84dc31f50eab97d5d762.png";
import introBridgeTall from "@/assets/images/2639b9a210943894919a84dc31f50eab97d5d762 (1).png";
import frameTop from "@/assets/images/Frame 889.png";
import frameBottom from "@/assets/images/Frame 891.png";
import iconContainer1 from "@/assets/icons/Icon Container (1).png";

const IMAGE_OVERLAY =
  "/images/967a302692a258f62450110776f94f73713019b0.png";

export function IntroSection() {
  const t = useTranslations("Intro");
  const locale = useLocale();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <section
      aria-labelledby="intro-title"
      className="relative overflow-hidden bg-white"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 pt-[140px] pb-16 md:pb-24 lg:grid-cols-2 lg:gap-14">
        {/* Background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${gridBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 10% center",
            backgroundSize: "1000px auto",
          }}
        />

        {/* Content */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-[10px] rounded-full px-[30px] py-[14px]">
            <Image src={iconContainer1} alt="" width={84} height={52} />
          </span>

          <h2 id="intro-title" className="intro-title mt-4">
            {t("title")}
          </h2>

          <p className="intro-body mt-4">{t("body")}</p>

          <GradientButton
            asChild
            className="btn-guest mt-6 h-[46px] w-[164px] items-center justify-between gap-2 rounded-full pe-1.5 ps-5 whitespace-nowrap"
          >
            <Link href="/booking">
              <span className="text-sm leading-none font-extrabold">
                {t("cta")}
              </span>

              <ArrowCircle dir={dir} label={t("cta")} />
            </Link>
          </GradientButton>
        </div>

        {/* Images */}
        <div className="relative mx-auto w-full max-w-[650px]">
          {/* Floating Decorative Squares */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 left-[22%] z-0 h-3 w-3 rotate-12 rounded-[2px] bg-rose-300/80"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[14%] left-[16%] z-0 h-2.5 w-2.5 -rotate-12 rounded-[2px] bg-indigo-400/80"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[28%] -right-2 z-0 h-3 w-3 rotate-45 rounded-[2px] bg-purple-300/80"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[36%] right-8 z-0 h-2 w-2 rotate-12 rounded-[2px] bg-indigo-400/70"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[18%] left-[42%] z-0 h-2 w-2 rotate-45 rounded-full bg-amber-400/80"
          />

          <div className="relative aspect-[601/642] w-full">
            {/* Lake */}
            <figure className="absolute top-0 left-[25.46%] z-1 aspect-square w-[58.57%] overflow-hidden rounded-[20px] border-[4px] border-white shadow-[0px_18px_50px_-12px_rgb(0_0_0/0.25)]">
              <Image
                src={introLake}
                alt={t("lakeAlt")}
                fill
                sizes="(min-width: 1024px) 352px, 60vw"
                className="object-cover"
              />

              {/* Repeating low-opacity overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 opacity-20"
                style={{
                  backgroundImage: `url(${IMAGE_OVERLAY})`,
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center",
                  backgroundSize: "180px auto",
                }}
              />

              <Image
                src={introBridgeTall}
                alt=""
                fill
                sizes="(min-width: 1024px) 352px, 60vw"
                className="pointer-events-none z-20 object-cover"
              />
            </figure>

            {/* Bridge */}
            <figure className="absolute top-[38.79%] left-[9.48%] z-10 aspect-[256/298] w-[42.6%] overflow-hidden rounded-[20px] border-[4px] border-white shadow-[0px_18px_50px_-12px_rgb(0_0_0/0.25)]">
              <Image
                src={introBridge}
                alt={t("bridgeAlt")}
                fill
                className="object-cover"
              />

              {/* Repeating low-opacity overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 opacity-20"
                style={{
                  backgroundImage: `url(${IMAGE_OVERLAY})`,
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center",
                  backgroundSize: "180px auto",
                }}
              />

              <Image
                src={introBridgeTall}
                alt=""
                fill
                sizes="(min-width: 1024px) 256px, 45vw"
                className="pointer-events-none z-20 object-cover"
              />
            </figure>

            {/* Tall Bridge */}
            <figure className="absolute top-[43.93%] left-[57.4%] aspect-[256/360] w-[42.6%] overflow-hidden rounded-[20px] border-[4px] border-white shadow-[0px_18px_50px_-12px_rgb(0_0_0/0.25)]">
              <Image
                src={introBridgeTall}
                alt={t("bridgeAlt")}
                fill
                sizes="(min-width: 1024px) 256px, 45vw"
                className="object-cover"
              />

              {/* Repeating low-opacity overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 opacity-20"
                style={{
                  backgroundImage: `url(${IMAGE_OVERLAY})`,
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center",
                  backgroundSize: "180px auto",
                }}
              />
            </figure>

            {/* Top Frame */}
            <Image
              src={frameTop}
              alt={t("badgeTop")}
              width={312}
              height={156}
              sizes="(min-width: 1024px) 244px, 40vw"
              className="absolute top-[19.94%] left-[3.16%] z-20 h-auto w-[40.6%] lg:w-[244px]"
            />

            {/* Bottom Frame */}
            <Image
              src={frameBottom}
              alt={t("badgeBottom")}
              width={317}
              height={156}
              sizes="(min-width: 1024px) 249px, 41vw"
              className="absolute top-[63.86%] left-[41.43%] z-20 h-auto w-[41.43%] lg:w-[249px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;