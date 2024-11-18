<script setup lang="ts">

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

const props = defineProps<{ date: Post['date'] }>()
function getDateTime() {
  return new Date(props.date.time).toISOString()
}
</script>

<template>
  <dl>
    <dt class="sr-only">发表于</dt>
    <dd class="text-base leading-6 font-medium dark:text-white">
      <time :datetime="getDateTime()">{{ date.string }}</time>
    </dd>
  </dl>
</template>
