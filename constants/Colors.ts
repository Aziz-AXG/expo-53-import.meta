/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#b44592";
const tintColorDark = "#b44592";
const primaryColor = "#b44592";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    primary: primaryColor,
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#2c2c2c",
    primary: primaryColor,
    tint: tintColorDark,
    icon: "#b44592",
    tabIconDefault: "#b44592",
    tabIconSelected: tintColorDark,
  },
};
