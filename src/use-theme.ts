import { computed, onBeforeUnmount, ref, watch } from "vue";
import { theme as antdTheme } from "ant-design-vue";
import { ThemeMode } from "./enums";
import { DARK_MODE_MEDIA } from "./constants";
import { getThemeMode, setThemeMode } from "./chrome-storage";

/**
 * 主题（自动 / 白天 / 暗夜）组合式逻辑，popup 与 options 共用：
 * - 从存储读取用户选择的模式并持久化
 * - auto 模式跟随系统 prefers-color-scheme，并监听其变化
 * - 计算出 isDark，同步到 <html data-theme> 与 Ant Design Vue 主题算法
 */
export function useTheme() {
  const mediaQuery = window.matchMedia(DARK_MODE_MEDIA);
  const themeMode = ref<ThemeMode>(ThemeMode.AUTO);
  const systemDark = ref(mediaQuery.matches);

  const isDark = computed(() => {
    if (themeMode.value === ThemeMode.DARK) return true;
    if (themeMode.value === ThemeMode.LIGHT) return false;
    return systemDark.value;
  });

  const themeConfig = computed(() => ({
    algorithm: isDark.value
      ? antdTheme.darkAlgorithm
      : antdTheme.defaultAlgorithm,
  }));

  function onSystemChange(e: MediaQueryListEvent) {
    systemDark.value = e.matches;
  }

  watch(
    isDark,
    (dark) => {
      document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light"
      );
    },
    { immediate: true }
  );

  async function initTheme() {
    themeMode.value = await getThemeMode();
    mediaQuery.addEventListener("change", onSystemChange);
  }

  function setMode(mode: ThemeMode) {
    themeMode.value = mode;
    setThemeMode(mode);
  }

  onBeforeUnmount(() => {
    mediaQuery.removeEventListener("change", onSystemChange);
  });

  return { themeMode, isDark, themeConfig, initTheme, setMode };
}
