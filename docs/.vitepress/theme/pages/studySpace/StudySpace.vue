<template>
  <main>
    <div class="flex items-center justify-center mb-4 mt-4">
      <h1 class="text-4xl font-w-8 mr-4">{{ frontmatter.name }}</h1>
      <em>{{ frontmatter.desc }}</em>
    </div>
    <List />
  </main>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import List from "./List.vue";

const { frontmatter } = useData();
console.log(frontmatter);

</script>

<style scoped></style>
