import styles from './ScaffledLogo.module.css';

import logoFullOriginal from '@/app/_assets/images/logos/full/logo-full-original.svg';
import logoFullFlat from '@/app/_assets/images/logos/full/logo-full-flat.svg';
import logoFullViolet from '@/app/_assets/images/logos/full/logo-full-violet.svg';
import logoFullTeal from '@/app/_assets/images/logos/full/logo-full-teal.svg';
import logoFullWhite from '@/app/_assets/images/logos/full/logo-full-white.svg';

import logoIconOriginal from '@/app/_assets/images/logos/icon/logo-icon-original.svg';
import logoIconFlat from '@/app/_assets/images/logos/icon/logo-icon-flat.svg';
import logoIconViolet from '@/app/_assets/images/logos/icon/logo-icon-violet.svg';
import logoIconTeal from '@/app/_assets/images/logos/icon/logo-icon-teal.svg';
import logoIconWhite from '@/app/_assets/images/logos/icon/logo-icon-white.svg';

import logoTextOriginal from '@/app/_assets/images/logos/text/logo-text-original.svg';
import logoTextViolet from '@/app/_assets/images/logos/text/logo-text-violet.svg';
import logoTextTeal from '@/app/_assets/images/logos/text/logo-text-teal.svg';
import logoTextWhite from '@/app/_assets/images/logos/text/logo-text-white.svg';

// Define valid variants and colors
type LogoVariant = 'full' | 'icon' | 'text';
type LogoColor = 'original' | 'flat' | 'violet' | 'teal' | 'white';

const getLogos = (): Record<LogoVariant, Record<LogoColor, string>> => ({
  full: {
    original: logoFullOriginal.src,
    flat: logoFullFlat.src,
    violet: logoFullViolet.src,
    teal: logoFullTeal.src,
    white: logoFullWhite.src,
  },
  icon: {
    original: logoIconOriginal.src,
    flat: logoIconFlat.src,
    violet: logoIconViolet.src,
    teal: logoIconTeal.src,
    white: logoIconWhite.src,
  },
  text: {
    original: logoTextOriginal.src,
    flat: logoTextOriginal.src, // No flat version, default to original
    violet: logoTextViolet.src,
    teal: logoTextTeal.src,
    white: logoTextWhite.src,
  },
});

export interface ScaffledLogoProps {
  variant: LogoVariant;
  color: LogoColor;
}

export default function ScaffledLogo({ variant, color, ...props }: ScaffledLogoProps) {
  const logos = getLogos();
  const src = logos[variant]?.[color] ?? logos.full.original; // Fallback to "full original" if invalid

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={src}
        alt={`${variant} logo in ${color}`}
        {...props}
      />
    </div>
  );
}
