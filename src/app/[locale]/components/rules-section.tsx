"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import tentImg from "@/assets/images/9455ac4be19e4f47438d969b468683ace8220744.png";
import binocularImg from "@/assets/images/92f96cb1649a6f17905e97c4fba5482de9ddd005.png";
import vanImg from "@/assets/images/8cc60c92343bb555a3d3168e32a48cc9e77b99be.png";
import iconContainer2 from "@/assets/icons/Icon Container (2).png";
import gridBg from "@/assets/images/bg-grid.png";
import { VectorIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const CARDS = [
  {
    src: tentImg,
    titleKey: 0,
    tilt: "rotate-[-15deg]",
  },
  {
    src: binocularImg,
    titleKey: 1,
    tilt: "rotate-[15deg]",
  },
  {
    src: vanImg,
    titleKey: 2,
    tilt: "rotate-[-15deg]",
  },
] as const;

const DOTS = [
  "top-[22%] left-[38%] size-1.5 rounded-full bg-[#ffc531]",
  "top-[18%] left-[52%] size-1.5 rounded-full bg-[#8fb0ff]",
  "top-[38%] left-[58%] size-2 rounded-[3px] bg-[#ffb3b8]",
  "top-[42%] right-[22%] size-1.5 rounded-full bg-[#8fb0ff]",
  "top-[30%] right-[12%] size-2 rounded-[3px] bg-[#c9b3ff]",
  "bottom-[28%] left-[12%] size-2 rounded-[3px] bg-[#c9b3ff]",
] as const;

export function RulesSection() {
  const t = useTranslations("Rules");

  return (
    <section
      aria-labelledby="rules-title"
      className="relative overflow-hidden bg-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90 contrast-125"
        style={{
          backgroundImage: `url(${gridBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top 10% center",
          backgroundSize: "min(1100px, 90vw) auto",
        }}
      />u
      {/* Scattered confetti dots */}
      {DOTS.map((pos) => (
        <span key={pos} aria-hidden className={cn("absolute", pos)} />
      ))}

      <div className="relative mx-auto flex w-[min(90rem,94%)] flex-col items-center py-14 md:py-20">
        {/* Top icon — Icon Container (2) 92×60 with teal glyph */}
        <span className="relative grid h-[60px] w-[92px] place-items-center">
          <Image
            src={iconContainer2}
            alt=""
            width={92}
            height={60}
            className="absolute inset-0 h-full w-full object-contain"
          />
          <VectorIcon alt="" width={16} height={20} className="relative" />
        </span>

        <h2 id="rules-title" className="rules-title mt-4 max-w-3xl">
          {t("title")}
        </h2>
        <p className="rules-subtitle mt-3 w-[min(46rem,100%)]">
          {t("subtitle")}
        </p>

        <div className="relative mt-10 w-full">
          {/* Dashed connector curve (desktop) */}
          <svg
            aria-hidden
            viewBox="0 0 900 120"
            fill="none"
            preserveAspectRatio="none"
            className="pointer-events-none absolute top-[48px] right-[12%] left-[12%] hidden h-[110px] w-[76%] lg:block"
          >
            <path
              d="M10 70 C 200 10, 320 10, 450 60 S 700 110, 890 50"
              stroke="#c9d4e2"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {[0, 1, 2].map((i) => (
              <article key={i} className="flex flex-col items-center px-4">
                <div className={cn("relative", CARDS[i].tilt)}>
                  <div className="relative h-[160px] w-[128px] overflow-hidden rounded-[24px] border border-[#f4f5f6] bg-[#fcfcfd] shadow-[0px_40px_32px_-24px_#0F0F0F1F,0px_64px_64px_-48px_#0F0F0F14]">
                    <Image
                      src={CARDS[i].src}
                      alt={t(`items.${i}.alt`)}
                      width={256}
                      height={256}
                      sizes="96px"
                      className="absolute top-[38px] left-1/2 h-[96px] w-[96px] -translate-x-1/2 object-contain"
                    />
                  </div>
                </div>
                <h3 className="rules-item-title mt-5">
                  {t(`items.${i}.title`)}
                </h3>
                <p className="rules-item-text mt-1 max-w-[19rem]">
                  {t(`items.${i}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RulesSection;
