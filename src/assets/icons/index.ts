import type { StaticImageData } from "next/image";

import earth from "./Earth.png";
import iconContainer from "./Icon Container.png";
import union from "./Union.png";
import vector from "./Vector.png";

/**
 * Raw PNG sources for the Gilmar icon pack.
 * Files keep their original Figma export names (incl. the space in
 * `Icon Container.png`) so re-exported slices stay in sync.
 */
export const iconSources = {
  earth,
  union,
  vector,
  "icon-container": iconContainer,
} satisfies Record<string, StaticImageData>;

export type IconPackName = keyof typeof iconSources;

export { earth, iconContainer, union, vector };
export default iconSources;
