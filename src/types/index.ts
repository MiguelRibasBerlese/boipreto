/** Navigation item for the main menu. */
export interface NavItem {
  name: string;
  path: string;
}

/** Consulting service card displayed on the Services page. */
export interface Service {
  id: string;
  /** Key of the icon in the ICON_MAP defined in Services.tsx. */
  iconName: string;
  title: string;
  description: string;
  cta: string;
  colSpan: string;
  bg: string;
  badge?: string;
  features?: string[];
}

/** State/region card — used in the About page map and sidebar. */
export interface StateInfo {
  state: string;
  code: string;
  desc: string;
  /** Tailwind top-[x] class for the floating dot position on the map image. */
  mapTop: string;
  /** Tailwind left-[x] class for the floating dot position on the map image. */
  mapLeft: string;
}

/** A key metric displayed with a large value and a label. */
export interface Metric {
  value: string;
  label: string;
}

/** Footer link entry. */
export interface FooterLink {
  label: string;
  path: string;
}

/** Option for a <select> input (e.g. state selector in the contact form). */
export interface SelectOption {
  value: string;
  label: string;
}

/** A single image asset with its URL and accessible alt text. */
export interface ImageAsset {
  src: string;
  alt: string;
}
