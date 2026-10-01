"use client";

import { useCallback } from "react";
import Image, { type StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";

import gridBg from "@/assets/images/bg-grid.png";
import birdWatching from "@/assets/images/032928cec2f19f3b47d06bf3af9af786b6dd34fa.jpg";
import boating from "@/assets/images/fc92d93668ac10ea7d850e194c96b029567d8833.jpg";
import cycling from "@/assets/images/a644bc951b6c107049aea7c0061ccfeeec036760.jpg";
import iconContainer3 from "@/assets/icons/Icon Container (3).png";

interface AmenitySlide {
  key: string;
  src: StaticImageData;
  featured?: boolean;
}

const SLIDES: readonly AmenitySlide[] = [
  {
    key: "birdWatching",
    src: birdWatching,
  },
  {
    key: "boating",
    src: boating,
    featured: true,
  },
  {
    key: "cycling",
    src: cycling,
  },
] as const;

const SLIDE_SIZES = {
  featured:
    "h-[275px] w-[210px] sm:h-[305px] sm:w-[235px] lg:h-[346px] lg:w-[288px]",
  regular:
    "h-[240px] w-[185px] sm:h-[265px] sm:w-[205px] lg:h-[304px] lg:w-[254px]",
} as const;

function AmenityCard({
  slide,
  index,
  t,
}: {
  slide: AmenitySlide;
  index: number;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <figure
      className={[
        "relative shrink-0 overflow-hidden rounded-[20px]",
        "shadow-[0px_24px_48px_0px_#002E251F]",
        "transition-transform duration-300",
        SLIDE_SIZES[slide.featured ? "featured" : "regular"],
      ].join(" ")}
    >
      <Image
        src={slide.src}
        alt={t(`items.${slide.key}.alt`)}
        fill
        priority={index === 0}
        sizes="
          (min-width: 1024px) 288px,
          (min-width: 640px) 235px,
          210px
        "
        className="object-cover"
      />

      {/* Bottom gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,7,8,0.64)_0%,rgba(7,7,8,0)_100%)]"
      />

      {/* Inner top shadow */}
      <div
        aria-hidden
        className="absolute inset-0 shadow-[inset_0px_10px_30px_0px_#00000052]"
      />

      <figcaption className="absolute inset-x-0 bottom-0 p-4">
        <span className="whitespace-nowrap text-[15px] font-bold text-white drop-shadow-md sm:text-base">
          {t(`items.${slide.key}.label`)}
        </span>
      </figcaption>
    </figure>
  );
}

function CarouselButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="
        absolute -start-4 top-1/2 z-10 hidden
        -translate-y-1/2 items-center justify-center
        rounded-full bg-[#18C4B8] p-2.5 text-white
        shadow-[0_4px_14px_rgba(24,196,184,0.45)]
        ring-4 ring-white
        transition-transform
        hover:scale-105
        active:scale-95
        lg:flex
      "
    >
      <svg
        aria-hidden
        className="h-4 w-4 rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  );
}

export function AmenitiesSection() {
  const t = useTranslations("Amenities");
  const locale = useLocale();

  const isRtl = locale === "fa";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: isRtl ? "rtl" : "ltr",
    align: "start",
    containScroll: false,
    dragFree: true,
  });

  const handleNavigation = useCallback(() => {
    if (!emblaApi) return;

    if (isRtl) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, isRtl]);

  return (
    <section
      aria-labelledby="amenities-title"
      className="relative w-full overflow-clip"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${gridBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: isRtl
            ? "right 10% center"
            : "left 10% center",
          backgroundSize: "1000px auto",
        }}
      />

      <div
        className="
          relative flex flex-col justify-center gap-8
          px-6 py-10
          sm:px-10
          lg:flex-row lg:items-center lg:gap-10 lg:py-14
          lg:pe-0
          lg:ps-[max(2rem,calc((100vw-80rem)/2+2rem))]
        "
      >
        {/* Carousel */}
        <div className="relative order-2 min-w-0 flex-1">
          <div
            ref={emblaRef}
            className="overflow-visible"
            aria-label={t("title")}
          >
            <div className="flex items-center gap-4 lg:gap-6">
              {SLIDES.map((slide, index) => (
                <AmenityCard
                  key={slide.key}
                  slide={slide}
                  index={index}
                  t={t}
                />
              ))}
            </div>
          </div>

          <CarouselButton
            onClick={handleNavigation}
            label={isRtl ? "Previous slide" : "Next slide"}
          />
        </div>

        {/* Content */}
        <div
          className="
            order-1 flex min-w-0 flex-1 flex-col
            items-start justify-center gap-5
            text-start
            lg:-mr-[6rem]
          "
        >
          <Image
            src={iconContainer3}
            alt=""
            width={76}
            height={50}
            className="h-[48px] w-auto object-contain"
          />

          <h2
            id="amenities-title"
            className="
              text-[22px] font-black leading-[1.4] text-[#1E293B]
              sm:text-[26px]
              lg:text-[28px]
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              text-[13px] leading-[1.9] text-[#64748B]
              sm:text-[14px]
            "
          >
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
