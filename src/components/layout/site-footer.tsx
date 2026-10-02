"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import logo from "@/assets/images/logo.png";
import mapImage from "@/assets/images/02746ef35d0c2893b78ec77313714617f72bc4fb.png";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 2.1h3.7l-8.1 9.3L24 23.9h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 2.1h7.7l5.3 7 5.9-7Zm-1.3 19.6h2L6.6 4.2H4.4l13.2 17.5Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.6 3.5 12 3.5 12 3.5s-4.6 0-7.8.4c-.4.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.4 7.6.4s4.6 0 7.8-.4c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8ZM9.8 15.1V8.4l6.2 3.4-6.2 3.3Z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.9 4.6 2.7 12.1c-.8.3-.8 1.4.1 1.6l4.7 1.5 1.8 5.6c.3.8 1.3.9 1.8.2l2.6-2.6 4.9 3.6c.6.4 1.5.1 1.7-.6l2.9-15c.2-.9-.6-1.6-1.3-1.4ZM8.4 13.4l9.5-6.5c.2-.1.4.1.2.3l-7.9 7.4-.3 3-1.5-4.2Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4v6.3ZM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1ZM7.1 20.4H3.6V9h3.5v11.4Z" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { href: "/suites", key: "suites" },
  { href: "/guide", key: "guide" },
  { href: "/about", key: "about" },
  { href: "/magazine", key: "magazine" },
] as const;

const SOCIALS = [
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "telegram", label: "Telegram", Icon: TelegramIcon },
  { key: "youtube", label: "YouTube", Icon: YoutubeIcon },
  { key: "x", label: "X", Icon: XIcon },
] as const;

const SOCIAL_BG =
  "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%), radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <div className="relative -mt-6 overflow-hidden md:-mt-10">
      {/* Soft radial fade glow wash (#C5D8FF) — pushed far bottom-right with maximum fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute -right-60 -bottom-80 h-[850px] w-[850px] rounded-full blur-[180px] sm:-right-72 sm:-bottom-96 sm:h-[1050px] sm:w-[1050px] sm:blur-[220px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(197, 216, 255, 0.75) 0%, rgba(197, 216, 255, 0.4) 35%, rgba(197, 216, 255, 0.12) 60%, rgba(197, 216, 255, 0) 80%)",
          }}
        />
      </div>

      <footer
        dir={dir}
        className="relative z-10 mx-auto max-w-[1280px] w-full pb-6"
      >
        {/* ——— Main card: 1280×276 — map flush full-height, no padding ——— */}
        <div className="overflow-hidden rounded-[20px] border border-[#EEF3F6] bg-[#FCFDFD] shadow-[0px_0px_0px_6px_#FFFFFF]">
          <div className="flex flex-col lg:h-[276px] lg:flex-row">
            {/* Padded content */}
            <div className="grid flex-1 gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.7fr)_minmax(0,1.05fr)] lg:items-start">
              {/* About */}
              <div className="flex flex-col items-start text-start">
                <Image
                  src={logo}
                  alt={t("logoAlt")}
                  width={180}
                  height={56}
                  className="h-auto w-[180px] object-contain"
                />
                <p className="intro-body mt-4 !text-justify">{t("about")}</p>
              </div>

              {/* Explore */}
              <nav aria-label={t("exploreTitle")}>
                <h3 className="rules-item-title !text-start">{t("exploreTitle")}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {EXPLORE_LINKS.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className="intro-body flex items-center gap-2 !leading-8 transition-colors hover:text-brand-teal"
                      >
                        <span
                          aria-hidden
                          className="size-1.5 shrink-0 rounded-full bg-current"
                        />
                        {t(`explore.${item.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact */}
              <div>
                <h3 className="rules-item-title !text-start">
                  {t("contactTitle")}
                </h3>
                <ul className="intro-body mt-4 flex flex-col gap-2 !leading-8">
                  <li>
                    <span className="font-extrabold text-ink">
                      {t("phoneLabel")}:
                    </span>{" "}
                    <span dir="ltr">۰۱۳۳۴۴۲۷۵۴۰ - ۰۱۳۳۴۴۲۷۵۴۱</span>
                  </li>
                  <li>
                    <span className="font-extrabold text-ink">
                      {t("emailLabel")}:
                    </span>{" "}
                    <a
                      href="mailto:Info@Gilmar-Gilan.Com"
                      dir="ltr"
                      className="transition-colors hover:text-brand-teal"
                    >
                      Info@Gilmar-Gilan.Com
                    </a>
                  </li>
                  <li>
                    <span className="font-extrabold text-ink">
                      {t("addressLabel")}:
                    </span>{" "}
                    {t("address")}
                  </li>
                </ul>
              </div>
            </div>

            {/* Map — flush, full card height */}
            <div className="relative min-h-[220px] w-full overflow-hidden lg:h-full lg:min-h-0 lg:w-[300px] lg:shrink-0">
              <Image
                src={mapImage}
                alt={t("mapAlt")}
                fill
                sizes="(min-width: 1024px) 300px, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* ——— Bottom bar: 1280×56 pill — copyright right, socials left ——— */}
        <div className="mt-5 flex h-[56px] items-center justify-between gap-4 rounded-[80000000px] border border-[#EEF3F6] bg-[#FCFDFD] px-6 py-2 shadow-[0px_0px_0px_6px_#FFFFFF]">
          <p className="intro-body flex-1 text-start !text-[12px] !leading-6">
            © {t("copyright")}
          </p>
          <ul className="flex items-center gap-2.5" aria-label={t("socialsLabel")}>
            {SOCIALS.map(({ key, label, Icon }) => (
              <li key={key}>
                <a
                  href="#"
                  aria-label={label}
                  style={{ background: SOCIAL_BG }}
                  className="grid size-10 shrink-0 place-items-center rounded-[80000000px] text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/16%),0_1px_2px_-1px_rgb(146_146_146/40%)] transition-transform hover:scale-105"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default SiteFooter;