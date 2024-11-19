// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./styles/style.css";
import "./styles/tailwind.css";
import StudySpace from "./pages/studySpace/StudySpace.vue";
import ArticleList from "./pages/studySpace/ArticleList.vue";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component("studySpace", StudySpace);
    app.component("article", ArticleList);
  },
} satisfies Theme;
