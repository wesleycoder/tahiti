import { createWind, type Tailwindest } from "tailwindest";

import type { Colors } from "../config/tailwind/index";

type CustomTWConfig = {
  color: keyof Colors;
};

/**
 * Custom type definition of `tailwindest`
 * @see {@link https://tailwindest.vercel.app/5_apis/Tailwindest api reference}
 */
type TailwindCustom = Tailwindest<CustomTWConfig, object>;
/**
 * Full type definition of `tailwindcss`
 */
type Tailwind = Required<TailwindCustom>;

const { wind, wind$, mergeProps, toggle } = createWind<TailwindCustom>();

export { wind, wind$, mergeProps, toggle, type Tailwind };
