<template>
  <div>这是一个自定义组件</div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const { isDark } = useData();

console.log(isDark.value);
</script>

<style scoped></style>
