"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  earth,
  iconContainer,
  union,
  vector,
  type IconPackName,
} from "@/assets/icons";

/* ————————————————————————————————————————————————
 * Gilmar icon pack — root component.
 *
 * Wraps the PNG slices in `src/assets/icons` behind a single typed API
 * so sections (hero badges, intro collage, …) share sizing/alt handling:
 *
 *   import { EarthIcon, Icon, IconBadge } from "@/components/icons";
 *   <Icon name="earth" />
 *   <EarthIcon className="size-6" />
 *   <IconBadge><UnionIcon /></IconBadge>
 * ———————————————————————————————————————————————— */

const SOURCES: Record<IconPackName, StaticImageData> = {
  earth,
  union,
  vector,
  "icon-container": iconContainer,
};

const INTRINSIC_SIZE: Record<IconPackName, { width: number; height: number }> = {
  earth: { width: 24, height: 24 },
  union: { width: 16, height: 20 },
  vector: { width: 16, height: 20 },
  "icon-container": { width: 92, height: 60 },
};

export type { IconPackName };
export const iconNames = Object.keys(SOURCES) as IconPackName[];

type IconProps = {
  name: IconPackName;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

/** Generic icon — `<Icon name="earth" />`. Defaults to intrinsic PNG size. */
export function Icon({ name, alt, width, height, className, priority }: IconProps) {
  const intrinsic = INTRINSIC_SIZE[name];
  return (
    <Image
      src={SOURCES[name]}
      alt={alt ?? `${name} icon`}
      width={width ?? intrinsic.width}
      height={height ?? intrinsic.height}
      priority={priority}
      className={className}
    />
  );
}

type NamedIconProps = Omit<IconProps, "name">;

/** 24×24 teal globe (badge glyph / standalone mark). */
export function EarthIcon(props: NamedIconProps) {
  return <Icon name="earth" {...props} />;
}

/** 16×20 teal star-medal slice (white star cut-out). */
export function UnionIcon(props: NamedIconProps) {
  return <Icon name="union" {...props} />;
}

/** 16×20 teal spark slice. */
export function VectorIcon(props: NamedIconProps) {
  return <Icon name="vector" {...props} />;
}

/** 92×60 light-green outline decoration from the Figma collage. */
export function IconContainerImage(props: NamedIconProps) {
  return <Icon name="icon-container" {...props} />;
}

/* ——— Composed badges ——— */

type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
  label?: string;
};

/**
 * Teal gradient circle behind white badge glyphs
 * (matches the floating pills in Frame 889 / 891).
 */
export function IconBadge({ children, className, label }: BadgeProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn("icon-badge", className)}
    >
      {children}
    </span>
  );
}

type ArrowCircleProps = {
  dir?: "ltr" | "rtl";
  className?: string;
  label?: string;
};

/**
 * 34px arrow circle per the guest-button spec:
 * 1.2px white → steel-mist gradient border, inner steel-mist shadow
 * plus a soft drop shadow.
 */
export function ArrowCircle({ dir = "rtl", className, label }: ArrowCircleProps) {
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <span aria-hidden={label ? undefined : true} aria-label={label} className={cn("arrow-icon-ring", className)}>
      <Arrow className="size-4" strokeWidth={2.2} />
    </span>
  );
}

export default Icon;
