"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import gridBg from "@/assets/images/bg-grid.png";
import iconContainer7 from "@/assets/icons/Icon Container (7).png";
import magazineCover from "@/assets/images/58e55ff5a67a21d0944484bf532fd685e430c5dd (2).png";

const COVERS = [magazineCover, magazineCover, magazineCover] as const;

export function MagazineSection() {
  const t = useTranslations("Magazine");

  return (
    <section aria-labelledby="magazine-title" className="relative overflow-hidden">
      {/* Blueprint grid backdrop behind heading — same as rooms-section */}
      {/* Blueprint grid backdrop — top right, like video-tour-section */}

      <div className="relative mx-auto flex w-[min(90rem,94%)] flex-col items-center py-14 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${gridBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "55% auto",
            opacity: 0.5,
          }}
        />
        {/* Top icon — Icon Container (7) */}
        <span className="relative grid h-[50px] w-[76px] place-items-center">
          <Image
            src={iconContainer7}
            alt=""
            width={76}
            height={50}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </span>

        <h2 id="magazine-title" className="rules-title mt-4 max-w-3xl">
          {t("title")}
        </h2>
        <p className="rules-subtitle mt-3 w-[min(46rem,100%)]">
          {t("subtitle")}
        </p>

        {/* Cards — 408×482, radius 20, gap like rooms-section */}
        <div className="mt-10 grid w-full grid-cols-1 place-items-center gap-[28px] sm:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <article
              key={i}
              className="relative aspect-[408/482] w-full overflow-hidden rounded-[20px] shadow-[0px_24px_48px_0px_#002E251F]"
            >
              <Image
                src={COVERS[i]}
                alt={t(`items.${i}.alt`)}
                fill
                sizes="(min-width: 1280px) 408px, (min-width: 640px) 50vw, 90vw"
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

              {/* Label + excerpt — bottom, right-aligned */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 text-right">
                <h3 className="rooms-label">{t(`items.${i}.title`)}</h3>
                <p className="rooms-sublabel line-clamp-2">
                  {t(`items.${i}.excerpt`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MagazineSection;
