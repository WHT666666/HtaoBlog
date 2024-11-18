import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Htao Blog System",
  base: "/htaoBlog/",
  description: "A personal Blog system",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "学习空间", link: "/studySpace/studySpace" },
      { text: "项目", link: "/project/project" },
      { text: "个人简介", link: "/personalProfile/personalProfile" },
    ],

    sidebar: {
      // "/frontend/": [
      //   {
      //     text: "前端基础",
      //     items: [
      //       { text: "html", link: "/frontend/frontbase/html/html" },
      //       { text: "css", link: "/frontend/frontbase/css/css" },
      //       { text: "js", link: "/frontend/frontbase/js/js" },
      //     ],
      //   },
      //   {
      //     text: "前端框架",
      //     items: [
      //       { text: "react", link: "/frontend/frontFrame/react/react" },
      //       { text: "vue", link: "/frontend/frontFrame/vue/vue" },
      //     ],
      //   },
      // ],
    },
    outlineTitle: "文章目录",
    outline: [2, 6],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
