  "use client";

  import Image from "next/image";
  import { useLocale, useTranslations } from "next-intl";

  import { Link } from "@/i18n/navigation";
  import { GradientButton } from "@/components/ui/gradient-button";
  import { ArrowCircle } from "@/components/icons";
  import stepPhoto from "@/assets/images/Step section.png";
  import mapVector from "@/assets/images/Vector (2).png";
  import compassIcon from "@/assets/icons/a8fc4b558ce84470303376b784ac2d0363c9e889.png";
  import iconContainer5 from "@/assets/icons/Icon Container (5).png";

  export function VideoTourSection() {
    const t = useTranslations("VideoTour");
    const locale = useLocale();
    const dir = locale === "fa" ? "rtl" : "ltr";

    return (
      <section
        aria-labelledby="video-tour-title"
        className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-[64px]"
      >
        <div
          className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[20px] lg:h-[690px]"
        >
          {/* Inner — inherits parent width × 690 */}
          <div
            className="relative aspect-[1360/690] w-full lg:aspect-auto lg:h-[inherit]"
          >
              {/* Base forest photo — full-bleed thumbnail with container radius, no shadow */}
              <figure className="absolute inset-0 overflow-hidden rounded-[20px]">
                <Image
                  src={stepPhoto}
                  alt={t("imageAlt")}
                  fill
                  sizes="(min-width: 1360px) 1360px, 100vw"
                  className="object-cover"
                  priority={false}
                />
            
              </figure>

              {/* Map vector — positioned relative to the 1360×690 photo */}
              <Image
                src={mapVector}
                alt={t("mapAlt")}
                aria-hidden={t("mapAlt") === ""}
                width={1062}
                height={895}
                className="pointer-events-none absolute z-[1] max-w-none select-none"
                sizes="74vw"
                style={{
                  top: "-13.623%",
                  left: "28.542%",
                  width: "73.75%",
                  height: "129.71%",
                  opacity: 1,
                  objectFit: "fill",
                }}
              />

            {/* Text overlay — sits on the white map area, physical right side, content aligned to start (right in FA) */}
            <div className="absolute top-1/2 right-4 z-[3] flex w-[min(480px,53%)] -translate-y-1/2 flex-col items-start text-start sm:right-6 lg:right-[64px] lg:w-[480px] xl:w-[520px]">
              <span className="relative grid h-[36px] w-[55px] place-items-center self-start lg:h-[50px] lg:w-[76px]">
                <Image
                  src={iconContainer5}
                  alt=""
                  width={76}
                  height={50}
                  className="absolute inset-0 h-full w-full object-contain start-0"
                />
              </span>

                <h2
                  id="video-tour-title"
                  className="intro-title mt-3 !text-[17px] !leading-[1.4] lg:mt-4 lg:!text-[32px] lg:!leading-[100%]"
                >
                  {t("title")}
                </h2>
                <p className="intro-body mt-2 line-clamp-3 !text-[11px] !leading-[20px] lg:mt-4 lg:line-clamp-2 lg:!text-[14px] lg:!leading-[32px] xl:line-clamp-2">
                  {t("body")}
                </p>

                <GradientButton
                  asChild
                  className="btn-guest mt-3 h-[38px] w-[140px] items-center justify-between gap-2 rounded-full pe-1.5 ps-4 whitespace-nowrap lg:mt-6 lg:h-[46px] lg:w-[164px] lg:ps-5"
                >
                  <Link href="/booking">
                    <span className="text-xs leading-none font-extrabold lg:text-sm">
                      {t("cta")}
                    </span>
                    <ArrowCircle dir={dir} label={t("cta")} />
                  </Link>
                </GradientButton>
              </div>

              {/* Play control — outer 120 @ top 285 / left 197 of the photo */}
              <button
                type="button"
                aria-label={t("playLabel")}
                className="group absolute z-[2] origin-center scale-[0.55] cursor-pointer sm:scale-75 lg:scale-100"
                style={{ top: "41.304%", left: "13.681%" }}
              >
                <span
                  aria-hidden
                  className="grid place-items-center rounded-full transition group-hover:scale-105 group-active:scale-95"
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    padding: 21,
                    background: "#FFFFFF4D",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  <span
                    aria-hidden
                    className="grid place-items-center"
                    style={{
                      width: 78.125,
                      height: 78.125,
                      borderRadius: "50%",
                      gap: 10,
                      paddingTop: 27,
                      paddingRight: 26,
                      paddingBottom: 26,
                      paddingLeft: 30,
                      background: "#FFFFFF",
                      opacity: 1,
                    }}
                  >
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient
                          id="video-tour-play"
                          x1="0"
                          y1="0"
                          x2="22"
                          y2="24"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#02ADF7" />
                          <stop offset="1" stopColor="#26E05A" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2.5 2.3C2.5 1 3.9 0.2 5 0.9L19.5 10.1C20.6 10.8 20.6 12.4 19.5 13.1L5 22.3C3.9 23 2.5 22.2 2.5 20.9V2.3Z"
                        fill="url(#video-tour-play)"
                      />
                    </svg>
                  </span>
                </span>
              </button>

              <Image
                src={compassIcon}
                alt={t("compassAlt")}
                width={134}
                height={139}
                className="pointer-events-none absolute z-[3] max-w-none select-none"
                style={{
                  top: "84.657%",
                  left: "45.354%",
                  width: "9.306%",
                  height: "20.145%",
                  transform: "rotate(20deg)",
                  opacity: 1,
                  objectFit: "contain",
                  zIndex:1000
                }}
              />
          </div>
        </div>
      </section>
    );
  }

  export default VideoTourSection;
