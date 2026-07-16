import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import App from "./App.vue";
import "./style.less";

createApp(App).use(Antd).mount("#app");
