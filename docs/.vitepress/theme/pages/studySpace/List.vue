<template>
  <ul class="list">
    <li class="item" v-for="item in list" :key="item.url">
      <a :href="item.url">
        <div class="desc">
          <em>{{ item.excerpt }}</em>
        </div>
        <div class="title">
          <em>{{ item.title }}</em>
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { data } from "./postsData/index.mjs";
const { list } = data;
console.log(list);
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 30px;
}
.list .item {
  height: 250px;
  /* outline: 1px solid red; */
  text-align: center;
}
.item .desc {
  padding-top: 40px;
  width: 400px;
  height: 200px;
}
.item .title {
  margin-top: 15px;
}
.item:nth-child(1) .desc {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
.item:nth-child(2) .desc {
  background: linear-gradient(120deg, #bd44fe 35%, #42d1ff);
}
.item:nth-child(3) .desc {
  background: linear-gradient(120deg, #86b91a 30%, #edd532);
}
</style>
