<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { message } from "ant-design-vue";
import {
  ApiOutlined,
  BulbOutlined,
  CheckCircleFilled,
  CopyOutlined,
  RobotOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { getOptions, openLink, setOptions } from "@/chrome-storage";
import { Enabled } from "@/enums";
import { useTheme } from "@/use-theme";

const REPOSITORY_URL = "https://github.com/yize/xswitch";
const clearCacheEnabled = ref(false);
const corsEnabled = ref(false);
const mcpEnabled = ref(false);
const mcpUpdating = ref(false);
const extensionId = chrome.runtime.id;

const setupPrompt = computed(() => `请帮我在这台电脑上完整安装并配置 XSwitch MCP。请实际执行操作，不要只给我步骤，也不要让我手动 checkout 仓库。

扩展信息：
- Chrome 扩展 ID：${extensionId}
- 官方仓库：https://github.com/yize/xswitch

请完成以下工作：
1. 检查当前操作系统、浏览器以及 Node.js 20+ 和 npm 环境。
2. 优先执行：npx --yes xswitch-mcp@latest install --extension-id ${extensionId}
3. 如果 npm 包尚未发布或不可用，请将官方仓库 clone 到临时目录，安装依赖后运行 npm run mcp:install-host -- --extension-id ${extensionId}。安装器会把运行时复制到 ~/.xswitch，完成后删除临时目录。
4. 根据安装器输出的稳定 server.js 路径，把名为 xswitch 的 stdio MCP 添加到你当前所在的 AI 客户端。Codex 优先使用 codex mcp add xswitch -- <node路径> <server.js路径>；其他客户端请修改其对应 MCP 配置。若已存在 xswitch 配置，请安全更新，不要影响其他 MCP。
5. 验证 Native Host 的 allowed_origins 与上述扩展 ID 一致，并确认 MCP 暴露 get_xswitch_state、upsert_xswitch_rule_group、delete_xswitch_rule_group、set_xswitch_enabled、set_xswitch_options、list_xswitch_backups、restore_xswitch_backup 这 7 个工具。
6. 本次只完成安装与验证，不要修改任何 XSwitch 规则。

遇到可以自行修复的问题请直接处理。只有需要系统授权、覆盖不明配置，或 AI 客户端必须重启才能载入 MCP 时才询问我；若只需重启，请在最后仅告诉我这一个动作。`);
const examplePrompt =
  "读取我当前的 XSwitch 规则，新建一个 inactive 分组，把线上 app.js 转发到 http://127.0.0.1:3000/app.js。";

const { themeConfig, initTheme } = useTheme();

onMounted(async () => {
  await initTheme();
  const opts = await getOptions();
  clearCacheEnabled.value = opts.clearCacheEnabled !== Enabled.NO;
  corsEnabled.value = opts.corsEnabled !== Enabled.NO;
  mcpEnabled.value = opts.mcpEnabled !== Enabled.NO;
});

function persist() {
  return setOptions({
    clearCacheEnabled: clearCacheEnabled.value,
    corsEnabled: corsEnabled.value,
    mcpEnabled: mcpEnabled.value,
  });
}

function handleClearCacheChange(checked: boolean) {
  clearCacheEnabled.value = checked;
  void persist();
}

function handleCorsChange(checked: boolean) {
  corsEnabled.value = checked;
  void persist();
}

async function handleMcpChange(checked: boolean) {
  mcpUpdating.value = true;
  try {
    mcpEnabled.value = checked;
    await persist();
    message.success(checked ? "已允许本机 AI 连接" : "已断开本机 AI 连接");
  } finally {
    mcpUpdating.value = false;
  }
}

async function copyText(text: string, label: string) {
  try {
    await navigator.clipboard.writeText(text);
    message.success(`${label}已复制`);
  } catch {
    message.error("复制失败，请手动选择文本复制");
  }
}

function openMcpDocs() {
  openLink(REPOSITORY_URL);
}
</script>

<template>
  <a-config-provider :theme="themeConfig">
    <div class="min-h-screen bg-[#f5f7fa] px-6 py-10 text-[14px] dark:bg-[#0f0f0f]">
      <main class="mx-auto max-w-[1040px]">
        <header class="mb-7 flex items-center gap-4 px-1">
          <img
            src="/images/blue_128.png"
            alt="XSwitch"
            class="h-[52px] w-[52px] rounded-[14px] shadow-sm"
          >
          <div>
            <h1 class="m-0 text-[26px] font-semibold leading-8 text-black/90 dark:text-white/90">
              XSwitch 设置
            </h1>
            <p class="m-0 mt-1.5 text-[13px] text-black/55 dark:text-white/55">
              管理请求处理方式，并让本机 AI 安全地配置转发规则。
            </p>
          </div>
        </header>

        <div class="flex flex-col gap-6">
          <a-card
            :bordered="false"
            class="rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:ring-1 dark:ring-white/[0.06]"
          >
            <template #title>
              <div class="flex items-center gap-2.5">
                <setting-outlined class="text-[#1677ff]" />
                <span>基础设置</span>
              </div>
            </template>

            <div class="grid gap-4 md:grid-cols-2">
              <div class="flex min-h-[94px] items-center justify-between gap-6 rounded-xl border border-black/[0.06] bg-black/[0.015] px-5 py-4 dark:border-white/[0.08] dark:bg-white/[0.025]">
                <div class="min-w-0">
                  <div class="font-medium text-black/90 dark:text-white/90">
                    请求时清除缓存
                  </div>
                  <div class="mt-1.5 text-[13px] leading-5 text-black/50 dark:text-white/55">
                    调试资源时自动清理一周内的 HTTP 缓存，避免命中旧文件。
                  </div>
                </div>
                <a-switch
                  :checked="clearCacheEnabled"
                  aria-label="请求时清除缓存"
                  @change="handleClearCacheChange"
                />
              </div>

              <div class="flex min-h-[94px] items-center justify-between gap-6 rounded-xl border border-black/[0.06] bg-black/[0.015] px-5 py-4 dark:border-white/[0.08] dark:bg-white/[0.025]">
                <div class="min-w-0">
                  <div class="font-medium text-black/90 dark:text-white/90">
                    CORS 响应改写
                  </div>
                  <div class="mt-1.5 text-[13px] leading-5 text-black/50 dark:text-white/55">
                    对规则中命中的请求补充跨域响应头，便于本地联调。
                  </div>
                </div>
                <a-switch
                  :checked="corsEnabled"
                  aria-label="CORS 响应改写"
                  @change="handleCorsChange"
                />
              </div>
            </div>
          </a-card>

          <a-card
            :bordered="false"
            class="overflow-hidden rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.06)] ring-1 ring-[#1677ff]/15 dark:ring-[#1677ff]/20"
          >
            <template #title>
              <div class="flex items-center gap-2.5">
                <api-outlined class="text-[#1677ff]" />
                <span>MCP 与 AI</span>
              </div>
            </template>
            <template #extra>
              <div class="flex items-center gap-3">
                <a-tag
                  :color="mcpEnabled ? 'success' : 'default'"
                  class="m-0 font-normal"
                >
                  {{ mcpEnabled ? "已启用" : "未启用" }}
                </a-tag>
                <a-switch
                  :checked="mcpEnabled"
                  :loading="mcpUpdating"
                  aria-label="启用 MCP"
                  @change="handleMcpChange"
                />
              </div>
            </template>

            <div
              class="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border px-5 py-4"
              :class="mcpEnabled ? 'border-[#52c41a]/25 bg-[#f6ffed] dark:bg-[#52c41a]/[0.08]' : 'border-[#1677ff]/20 bg-[#e6f4ff]/60 dark:bg-[#1677ff]/[0.08]'"
            >
              <div class="flex items-center gap-3.5">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[18px]"
                  :class="mcpEnabled ? 'bg-[#52c41a]/12 text-[#52c41a]' : 'bg-[#1677ff]/12 text-[#1677ff]'"
                >
                  <check-circle-filled v-if="mcpEnabled" />
                  <robot-outlined v-else />
                </div>
                <div>
                  <div class="font-semibold text-black/90 dark:text-white/90">
                    {{ mcpEnabled ? "本机 AI 访问已授权" : "让 AI 直接管理 XSwitch 规则" }}
                  </div>
                  <p class="m-0 mt-1 text-[13px] leading-5 text-black/50 dark:text-white/55">
                    {{
                      mcpEnabled
                        ? "复制下方配置 Prompt 交给 AI，安装、配置和验证都由它完成。"
                        : "打开右上角开关后，再把下方配置 Prompt 发给 AI。"
                    }}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-[12px] text-black/45 dark:text-white/50">
                <safety-certificate-outlined class="text-[#52c41a]" />
                仅限当前扩展 · 数据保留在本机 · 写入自动备份
              </div>
            </div>

            <div class="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
              <section class="rounded-xl border border-[#1677ff]/20 bg-[#e6f4ff]/25 p-5 dark:border-[#1677ff]/25 dark:bg-[#1677ff]/[0.06]">
                <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div class="flex items-center gap-2 font-semibold text-black/90 dark:text-white/90">
                      <robot-outlined class="text-[#1677ff]" />
                      把这段话发给 AI
                    </div>
                    <p class="mb-0 mt-1.5 text-[13px] leading-5 text-black/50 dark:text-white/55">
                      AI 会自己安装本机桥接、写入客户端配置并验证连接。
                    </p>
                  </div>
                  <a-tag
                    color="blue"
                    class="m-0"
                  >
                    首次配置一次
                  </a-tag>
                </div>

                <div class="relative rounded-xl border border-black/[0.08] bg-white/90 p-4 pr-12 shadow-sm dark:border-white/10 dark:bg-black/20">
                  <pre class="m-0 max-h-[230px] overflow-y-auto whitespace-pre-wrap break-words font-mono text-[12px] leading-5 text-black/70 dark:text-white/70">{{ setupPrompt }}</pre>
                  <a-tooltip title="复制配置 Prompt">
                    <a-button
                      type="text"
                      size="small"
                      class="absolute right-3 top-3"
                      aria-label="复制配置 Prompt"
                      @click="copyText(setupPrompt, '配置 Prompt')"
                    >
                      <template #icon>
                        <copy-outlined />
                      </template>
                    </a-button>
                  </a-tooltip>
                </div>

                <a-button
                  type="primary"
                  size="large"
                  block
                  class="mt-4"
                  :disabled="!mcpEnabled"
                  @click="copyText(setupPrompt, '配置 Prompt')"
                >
                  <template #icon>
                    <copy-outlined />
                  </template>
                  {{ mcpEnabled ? "复制配置 Prompt" : "请先开启本机 AI 连接" }}
                </a-button>
                <p class="mb-0 mt-2 text-center text-[12px] leading-5 text-black/45 dark:text-white/50">
                  适用于具备本地终端和文件权限的 Codex、Claude Code 等 AI 客户端。
                </p>
              </section>

              <section class="flex flex-col rounded-xl border border-black/[0.06] p-5 dark:border-white/[0.08]">
                <div class="font-semibold text-black/90 dark:text-white/90">
                  AI 将自动完成
                </div>
                <div class="mt-4 flex flex-col gap-4">
                  <div
                    v-for="item in ['安装本机桥接', '注册当前扩展', '配置当前 AI 客户端', '验证 7 个 MCP 工具']"
                    :key="item"
                    class="flex items-center gap-3 text-[13px] text-black/70 dark:text-white/70"
                  >
                    <check-circle-filled class="text-[#52c41a]" />
                    {{ item }}
                  </div>
                </div>
                <div class="mt-5 rounded-lg bg-black/[0.025] px-3.5 py-3 text-[12px] leading-5 text-black/50 dark:bg-white/[0.04] dark:text-white/55">
                  如果客户端必须重启才能加载新 MCP，AI 会在全部配置完成后只提示这一个动作。
                </div>
                <button
                  type="button"
                  class="mt-auto flex cursor-pointer items-center justify-center gap-1.5 border-0 bg-transparent pt-5 text-[12px] text-black/45 hover:text-[#1677ff] dark:text-white/50"
                  @click="openMcpDocs"
                >
                  查看完整文档
                </button>
              </section>
            </div>

            <section class="mt-5 flex flex-col gap-4 rounded-xl border border-black/[0.06] p-5 dark:border-white/[0.08] md:flex-row md:items-center md:justify-between">
              <div class="min-w-0">
                <div class="mb-2 flex items-center gap-2.5 font-semibold text-black/90 dark:text-white/90">
                  <bulb-outlined class="text-[#faad14]" />
                  连接后直接描述你想要的规则
                </div>
                <p class="m-0 text-[13px] leading-6 text-black/60 dark:text-white/60">
                  “{{ examplePrompt }}”
                </p>
              </div>
              <a-button
                class="shrink-0"
                @click="copyText(examplePrompt, '示例提示词')"
              >
                <template #icon>
                  <copy-outlined />
                </template>
                复制使用示例
              </a-button>
            </section>

            <div class="mt-4 flex flex-col gap-3 rounded-xl border border-[#52c41a]/20 bg-[#f6ffed] px-4 py-3.5 dark:border-[#52c41a]/20 dark:bg-[#52c41a]/[0.07] sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-start gap-3">
                <safety-certificate-outlined class="mt-0.5 text-[18px] text-[#52c41a]" />
                <div>
                  <div class="text-[13px] font-medium text-black/80 dark:text-white/80">
                    每次 AI 写入前自动保存快照
                  </div>
                  <div class="mt-0.5 text-[12px] leading-5 text-black/50 dark:text-white/55">
                    写入失败会自动恢复；需要时直接告诉 AI“撤销刚才对 XSwitch 的修改”。
                  </div>
                </div>
              </div>
              <a-button
                size="small"
                class="shrink-0"
                @click="copyText('撤销刚才对 XSwitch 的修改，并在恢复后读取规则确认。', '撤销提示词')"
              >
                复制撤销提示词
              </a-button>
            </div>
          </a-card>
        </div>
      </main>
    </div>
  </a-config-provider>
</template>
