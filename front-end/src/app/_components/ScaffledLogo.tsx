import { ReactSVG } from 'react-svg';
import { rem } from '@mantine/core';

import logoFullOriginal from "@/app/_assets/images/logos/full/logo-full-original.svg";
import logoFullFlat from "@/app/_assets/images/logos/full/logo-full-flat.svg";
import logoFullViolet from "@/app/_assets/images/logos/full/logo-full-violet.svg";
import logoFullTeal from "@/app/_assets/images/logos/full/logo-full-teal.svg";
import logoFullWhite from "@/app/_assets/images/logos/full/logo-full-white.svg";

import logoIconOriginal from "@/app/_assets/images/logos/icon/logo-icon-original.svg";
import logoIconFlat from "@/app/_assets/images/logos/icon/logo-icon-flat.svg";
import logoIconViolet from "@/app/_assets/images/logos/icon/logo-icon-violet.svg";
import logoIconTeal from "@/app/_assets/images/logos/icon/logo-icon-teal.svg";
import logoIconWhite from "@/app/_assets/images/logos/icon/logo-icon-white.svg";

import logoTextOriginal from "@/app/_assets/images/logos/text/logo-text-original.svg";
import logoTextViolet from "@/app/_assets/images/logos/text/logo-text-violet.svg";
import logoTextTeal from "@/app/_assets/images/logos/text/logo-text-teal.svg";
import logoTextWhite from "@/app/_assets/images/logos/text/logo-text-white.svg";

// Define valid variants and colors
type LogoVariant = "full" | "icon" | "text";
type LogoColor = "original" | "flat" | "violet" | "teal" | "white";

const getLogos = () => ({
  full: {
    original: logoFullOriginal,
    flat: logoFullFlat,
    violet: logoFullViolet,
    teal: logoFullTeal,
    white: logoFullWhite,
  },
  icon: {
    original: logoIconOriginal,
    flat: logoIconFlat,
    violet: logoIconViolet,
    teal: logoIconTeal,
    white: logoIconWhite,
  },
  text: {
    original: logoTextOriginal,
    flat: logoTextOriginal, // No flat version, default to original
    violet: logoTextViolet,
    teal: logoTextTeal,
    white: logoTextWhite,
  },
});

export interface ScaffledLogoProps {
  size: number;
  variant: LogoVariant;
  color: LogoColor;
}

export default function ScaffledLogo({ size, variant, color, ...props }: ScaffledLogoProps) {
  const logos = getLogos();
  const image = logos[variant]?.[color] ?? logos.full.original; // Fallback to "full original" if invalid

  return (
    <ReactSVG
      style={{ height: "auto", width: rem(size) }}
      src={image.src}
      {...props}
    />

    // <ReactSVG
    //   className={styles.image}
    //   src={image.src}
    //   {...props}
    // />
  );
}
