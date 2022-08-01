import { Theme } from "@emotion/react";
import { darkColors, darkShadows, lightColors, lightShadows } from "./colors";
import layouts from "./layouts";

export const light: Theme = {
  ...layouts,
  isDark: false,
  colors: lightColors,
  shadows: lightShadows
}
export const dark: Theme = {
  ...layouts,
  isDark: true,
  colors: darkColors,
  shadows: darkShadows,
};