import { Colors, ElevationShadows } from './types'

export const baseColors = {
  primary: '#78519C',
  secondary: "#B899C8",
  tertiary: '#9FBBE2'
}

export const lightColors: Colors = {
    ...baseColors,
    textPrimary: "#000000de",
    textSecondary: "#505363",
    textDisabled: "#393B3B",
    textHighlight: '#03b2cb',
    textInverted: "#fff",
    red: "#d32f2f",
    blue: "#00B4C9",
    green: "#388e3c",
    card: "#b73ed5",
    overlay: "#221C3E99",
    gradient: "linear-gradient(117deg, #eef2f3, #222832)",
    bg: "#eef2f3",
    buttonSurface: "#03b2cb",
    buttonText: "",
    border: "#00B4C9",
    disabled: "#eef2f3",
}

export const darkColors: Colors = {
    ...baseColors,
    textPrimary: "#F2F0FF",
    textSecondary: "#878a9b",
    textHighlight: '#14a1c1',
    textDisabled: "#393B3B",
    textInverted: "#000",
    red: "#d32f2f",
    blue: "#00B4C9",
    green: "#388e3c",
    card: "#221C3EE5",
    overlay: "#221C3E99",
    gradient: "linear-gradient(117deg, #111722, #222832)",
    bg: "#221C3E",
    buttonSurface: "linear-gradient(117deg, #0368FF, #5899FF)",
    buttonText: "#F2F0FF",
    border: "#00B4C9",
    disabled: "#eef2f3",
}

const _lightShadows: ElevationShadows = {
    default: "0px 0px 10px #adb1b000;",
    card: "0px 0px 10px #adb1b000;",
    hover: "0px 0px 10px #adb1b000;",
}

const _darkShadows: ElevationShadows = {
  default: "0px 0px 10px #adb1b000;",
  card: "0px 0px 10px #adb1b000;",
  hover: "inset -2px 2px 4px rgba(15, 16, 16, 0.2), inset 2px -2px 4px rgba(15, 16, 16, 0.2), inset -2px -2px 4px rgba(59, 62, 62, 0.9), inset 2px 2px 5px rgba(15, 16, 16, 0.9);",
}

export const lightShadows: ElevationShadows = {
  ..._lightShadows,
}

export const darkShadows: ElevationShadows = {
  ..._darkShadows,
}