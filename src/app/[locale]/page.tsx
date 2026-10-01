import { setRequestLocale } from "next-intl/server";

import { HeroSection } from "./components/hero-section";
import { IntroSection } from "./components/intro-section";
import { PackagesSection } from "./components/packages-section";
import { VideoTourSection } from "./components/video-tour-section";
import { RoomsSection } from "./components/rooms-section";
import { AmenitiesSection } from "./components/amenities-section";
import { RulesSection } from "./components/rules-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { MagazineSection } from "./components/magazine-section";
import { FaqSection } from "./components/faq-section";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col gap-[140px]">
      <HeroSection />
      <IntroSection />
      <RulesSection />
      <AmenitiesSection />
      <RoomsSection />
      <VideoTourSection />
      <TestimonialsSection />
      <PackagesSection />
      <MagazineSection />
      <FaqSection />
    </main>
  );
}
