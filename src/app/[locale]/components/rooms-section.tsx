"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import gridBg from "@/assets/images/bg-grid.png";
import iconContainer4 from "@/assets/icons/Icon Container (4).png";
import roomAutumn from "@/assets/images/5862733d33f0937fa1536016113d045d4e0608c6.png";
import roomPond from "@/assets/images/d47e087f3621ebdea08d16e98774a688ba970760.png";
import roomGlass from "@/assets/images/048eb145ee1e27bd48c4d371d9c969785ad31845.png";
import roomBridge from "@/assets/images/68644bcdf63fedbe24de385e0cd809efb645982d.png";

const ROOMS = [roomAutumn, roomPond, roomGlass, roomBridge] as const;

export function RoomsSection() {
  const t = useTranslations("Rooms");

  return (
    <section aria-labelledby="rooms-title" className="relative overflow-hidden">
      {/* Blueprint grid backdrop behind heading */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${gridBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "820px auto",
        }}
      />

      <div className="relative mx-auto flex w-[min(90rem,94%)] flex-col items-center py-14 md:py-20">
        {/* Top icon — Icon Container (4) */}
        <span className="relative grid h-[50px] w-[76px] place-items-center">
          <Image
            src={iconContainer4}
            alt=""
            width={76}
            height={50}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </span>

        <h2 id="rooms-title" className="rules-title mt-4 max-w-3xl">
          {t("title")}
        </h2>
        <p className="rules-subtitle mt-3 w-[min(46rem,100%)]">
          {t("subtitle")}
        </p>

        {/* Cards — 302×302, radius 20, gap 10, p-4 (16px) */}
        <div className="mt-10 grid w-full grid-cols-1 place-items-center gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <figure
              key={i}
              className="relative h-[302px] w-full overflow-hidden rounded-[20px] p-4 shadow-[0px_24px_48px_0px_#002E251F]"
            >
              <Image
                src={ROOMS[i]}
                alt={t(`items.${i}.alt`)}
                fill
                sizes="302px"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Bottom scrim — linear-gradient(0deg, rgba(7,7,8,0.72) → transparent) */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,7,8,0.72)_0%,rgba(7,7,8,0)_100%)]"
              />
              {/* Inner top shadow */}
              <div
                aria-hidden
                className="absolute inset-0 shadow-[inset_0px_10px_30px_0px_#00000052]"
              />

              {/* Label + sublabel — bottom, right-aligned, p-4 (16px) */}
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col p-4 text-right">
                <span className="rooms-label">{t(`items.${i}.label`)}</span>
                <span className="rooms-sublabel">{t(`items.${i}.sublabel`)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSection;
