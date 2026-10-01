"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import worldMapBg from "@/assets/images/ae2ce9bde05aac87e4e0bf3aab7b67184749e01e.png";
import iconContainer6 from "@/assets/icons/Icon Container (6).png";
import quoteTick from "@/assets/icons/Vector (3).png";
import reviewerA from "@/assets/images/Reviewer Image-1 2.png";
import reviewerB from "@/assets/images/Reviewer Image 2.png";
import reviewerC from "@/assets/images/Reviewer Image-2 3.png";
import reviewerD from "@/assets/images/Reviewer Image-2 4.png";
import reviewerE from "@/assets/images/Reviewer Image-3 2.png";
import gridBg from "@/assets/images/bg-grid.png";

const REVIEWER_IMAGES = [
  reviewerA,
  reviewerB,
  reviewerC,
  reviewerD,
  reviewerE,
] as const;

const COUNT = 5;

const ORBIT_SPOTS = [
  { top: "12%", left: "18%", size: 40 }, // top-left
  { top: "38%", left: "8%", size: 32 }, // mid-left upper
  { top: "62%", left: "10%", size: 36 }, // mid-left lower
  { top: "84%", left: "20%", size: 40 }, // bottom-left
  { top: "84%", left: "78%", size: 40 }, // bottom-right
  { top: "60%", left: "88%", size: 36 }, // mid-right lower
  { top: "32%", left: "84%", size: 40 }, // mid-right upper
] as const;

export function TestimonialsSection() {
  const t = useTranslations("Testimonials");
  const [active, setActive] = useState(0);

  const go = useCallback(
    (i: number) => setActive(((i % COUNT) + COUNT) % COUNT),
    [],
  );

  /* Auto-advance the comment slider */
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % COUNT);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const activeImage = REVIEWER_IMAGES[active % REVIEWER_IMAGES.length];

  return (
    <section aria-labelledby="testimonials-title" className="relative overflow-hidden">
      <div className="relative mx-auto flex w-[min(90rem,94%)] flex-col items-center py-14 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${gridBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 10% center",
            backgroundSize: "750px auto",
          }}
        />
        {/* Top badge — Icon Container (6) */}
        <span className="relative grid h-[50px] w-[76px] place-items-center">
          <Image
            src={iconContainer6}
            alt=""
            width={76}
            height={50}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </span>

        <h2 id="testimonials-title" className="rules-title mt-4 max-w-3xl">
          {t("title")}
        </h2>
        <p className="rules-subtitle mt-3 w-[min(46rem,100%)]">
          {t("subtitle")}
        </p>

        {/* Stage — dotted world-map background + floating reviewer avatars */}
        <div className="relative mt-6 h-[640px] w-full max-w-[1080px] sm:h-[600px] md:h-[560px]">
          {/* Background map — ae2ce9bd… dotted world map */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <Image
              src={worldMapBg}
              alt=""
              fill
              sizes="(min-width: 1024px) 1080px, 100vw"
              className="object-contain opacity-70"
              priority={false}
            />
          </div>

          {/* Featured avatar — large, top-center, reflects active slide */}
          <button
            type="button"
            onClick={() => go(active)}
            aria-label={t("avatarAlt")}
            aria-current="true"
            className="absolute top-[2%] left-1/2 z-[2] -translate-x-1/2 cursor-pointer rounded-full transition-transform hover:scale-105"
          >
            <span className="block size-[64px] overflow-hidden rounded-full ring-2 ring-white md:size-[72px]">
              <Image
                key={active}
                src={activeImage}
                alt={t("avatarAlt")}
                width={144}
                height={144}
                className="h-full w-full object-cover"
              />
            </span>
          </button>

          {/* Orbit avatars — reviewer images, click to switch comment */}
          {ORBIT_SPOTS.map((spot, i) => {
            const itemIndex = (active + 1 + i) % COUNT;
            const src = REVIEWER_IMAGES[itemIndex % REVIEWER_IMAGES.length];
            return (
              <button
                key={`${spot.top}-${spot.left}`}
                type="button"
                onClick={() => go(itemIndex)}
                aria-label={`${t("avatarAlt")} ${itemIndex + 1}`}
                className="absolute z-[2] cursor-pointer rounded-full transition-transform hover:scale-110"
                style={{ top: spot.top, left: spot.left }}
              >
                <span
                  className={cn(
                    "block overflow-hidden rounded-full ring-2 ring-white",
                  )}
                  style={{ width: spot.size, height: spot.size }}
                >
                  <Image
                    src={src}
                    alt={t("avatarAlt")}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </span>
              </button>
            );
          })}

          {/* Comment card — 500×264 Hug, centered */}
          <div className="absolute top-1/2 left-1/2 z-[1] w-[min(500px,92%)] -translate-x-1/2 -translate-y-1/2">
            <figure
              key={active}
              className="flex min-h-[264px] flex-col items-center justify-center rounded-[20px] bg-white px-6 py-6 text-center shadow-[0px_24px_48px_0px_#002E251F] md:px-10"
            >
              {/* Double quote — Vector (3) ×2 */}
              <div
                aria-hidden
                dir="ltr"
                className="flex items-start justify-center gap-[4px]"
              >
                <Image
                  src={quoteTick}
                  alt=""
                  width={14}
                  height={20}
                  className="h-[18px] w-[13px] object-contain"
                />
                <Image
                  src={quoteTick}
                  alt=""
                  width={14}
                  height={20}
                  className="h-[18px] w-[13px] object-contain"
                />
              </div>
              <span className="sr-only">{t("quoteAlt")}</span>

              <blockquote className="testimonials-quote mt-3 w-full">
                {t(`items.${active}.quote`)}
              </blockquote>

              <figcaption className="mt-4 flex flex-col items-center">
                <span className="testimonials-name">
                  {t(`items.${active}.name`)}
                </span>
                <span className="testimonials-role">
                  {t(`items.${active}.role`)}
                </span>
              </figcaption>
            </figure>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-center gap-2" dir="ltr">
              {Array.from({ length: COUNT }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active
                      ? "w-6 bg-[#02ADF7]"
                      : "w-1.5 bg-[#BAC8D1] hover:bg-[#02ADF7]/60",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
