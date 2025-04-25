import { Button, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "@/store/themeStore";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function TabTwoScreen() {
  const { theme, setTheme } = useThemeStore();
  const { t } = useTranslation();
  const color = useThemeColor();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"> {t("color-theme")}</ThemedText>
      </ThemedView>
      <ThemedView>
        <Button
          title="Dark"
          onPress={() => setTheme("dark")}
          color={theme === "dark" ? color.primary : "gray"}
        />
        <Button
          title="Light"
          onPress={() => setTheme("light")}
          color={theme === "light" ? color.primary : "gray"}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
