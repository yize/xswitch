<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getOptions, setOptions } from "@/chrome-storage";
import { Enabled } from "@/enums";
import { useTheme } from "@/use-theme";

const clearCacheEnabled = ref(false);
const corsEnabled = ref(false);

// options 页面跟随用户在 popup 里选择的主题（无选择器，仅应用）
const { themeConfig, initTheme } = useTheme();

onMounted(async () => {
  await initTheme();
  const opts = await getOptions();
  clearCacheEnabled.value = opts.clearCacheEnabled !== Enabled.NO;
  corsEnabled.value = opts.corsEnabled !== Enabled.NO;
});

function persist() {
  setOptions({
    clearCacheEnabled: clearCacheEnabled.value,
    corsEnabled: corsEnabled.value,
  });
}

function handleClearCacheChange() {
  clearCacheEnabled.value = !clearCacheEnabled.value;
  persist();
}

function handleCorsChange() {
  corsEnabled.value = !corsEnabled.value;
  persist();
}
</script>

<template>
  <a-config-provider :theme="themeConfig">
    <div class="options-container">
      <a-checkbox
        :checked="clearCacheEnabled"
        @change="handleClearCacheChange"
      >
        启用清除缓存
      </a-checkbox>
      <br>
      <a-checkbox
        :checked="corsEnabled"
        @change="handleCorsChange"
      >
        启用 CORS
      </a-checkbox>
    </div>
  </a-config-provider>
</template>
