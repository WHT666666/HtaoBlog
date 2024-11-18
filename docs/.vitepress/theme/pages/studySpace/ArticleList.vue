<template>
  <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <!--标题和副标题部分，设置上内边距为 6，下内边距为 8-->
        <div class="flex items-center justify-between">
          <h1
            class="text-3xl leading-9 font-extrabold dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14"
          >
            {{ frontmatter.name }}
          </h1>
          <a
            class="link-link"
            aria-label="read more"
            href="/htaoBlog/studySpace/studySpace/"
            >返回学习空间</a
          >
        </div>

        <p class="text-lg leading-7 dark:text-white">
          {{ frontmatter.desc }}
        </p>
      </div>

      <ul class="divide-y divide-gray-200 dark:divide-slate-200/5">
        <li
          class="py-5"
          v-for="{ title, url, excerpt, date } of data[frontmatter.key]"
          :key="url"
        >
          <!--单个文章项，每个列表项上下设置 5 的内边距-->
          <article
            class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
          >
            <Date :date="date" />
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl leading-8 font-bold tracking-normal">
                  <!--设置标题的大小/行高/加粗/字间距-->
                  <a class="dark:text-white" :href="url">{{ title }}</a>
                </h2>
                <div
                  v-if="excerpt"
                  class="dark:prose-invert max-w-none dark:text-white"
                  v-html="excerpt"
                ></div>
                <!--设置摘要部分-->
              </div>
              <div class="text-base leading-6 font-medium">
                <a class="link-link" aria-label="read more" :href="url"
                  >阅读更多</a
                >
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { data } from "./postsData/index.mjs";
import Date from "./Date.vue";

const { frontmatter } = useData();
console.log(frontmatter);

console.log(data[frontmatter.value.key]);
</script>

<style scoped></style>
