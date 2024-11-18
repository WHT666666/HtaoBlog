<template>
  <div class="fixed">
    <dl
      class="pt-3 pb-3 xl:pt-5 xl:border-b xl:border-gray-200 dark:xl:border-slate-200/5"
    >
      <dt class="sr-only">作者</dt>
      <dd>
        <ul
          class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"
        >
          <li class="flex items-center space-x-2">
            <dl class="text-sm font-medium leading-5 whitespace-nowrap">
              <dd class="dark:text-white">{{ date.string }}</dd>
              <dd class="dark:text-white">{{ frontmatter.author }}</dd>
            </dl>
          </li>
        </ul>
      </dd>
    </dl>
    <footer
      class="text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-slate-200/5 xl:col-start-1 xl:row-start-2"
    >
      <div v-if="nextPost" class="py-5">
        <!--"下一篇"上、下边距-->
        <h2 class="text-xs tracking-wide uppercase dark:text-white">
          下一篇文章
        </h2>
        <div class="link-link">
          <a :href="nextPost.url">{{ nextPost.title }}</a>
        </div>
      </div>
      <div v-if="prevPost" class="py-5">
        <!--"上一篇"上、下边距-->
        <h2 class="text-xs tracking-wide uppercase dark:text-white">
          上一篇文章
        </h2>
        <div class="link-link">
          <a :href="prevPost.url">{{ prevPost.title }}</a>
        </div>
      </div>
      <div class="pt-5">
        <!--"返回"上、下边距-->
        <a class="link-link" :href="articleHref">返回文章列表</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { data as posts } from "./postsData/index.mjs";

const { frontmatter } = useData();
console.log(frontmatter);

const articleHref = computed(() => {
  return `/htaoBlog/studySpace/${frontmatter.value.key}/${frontmatter.value.key}`;
});


const route = useRoute();

function findCurrentIndex() {
  return posts[frontmatter.value.key]?.findIndex((p) => p.url === route.path);
}

console.log(posts['AI']);


// use the customData date which contains pre-resolved date info
const date = computed(() => posts[frontmatter.value.key][findCurrentIndex()].date);
const nextPost = computed(() => posts[frontmatter.value.key][findCurrentIndex() - 1]);
const prevPost = computed(() => posts[frontmatter.value.key][findCurrentIndex() + 1]);
</script>

<style scoped></style>
