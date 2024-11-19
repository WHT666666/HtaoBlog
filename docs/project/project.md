# 这是项目模块



## 这是一个自定义的锚点
## 这是一个自定义的锚点{#my-anchor2}
## 这是一个自定义的锚点{#my-anchor3}
## 这是一个自定义的锚点{#my-anchor4}
## 这是一个自定义的锚点{#my-anchor5}
## 这是一个自定义的锚点{#my-anchor6}
## 这是一个自定义的锚点{#my-anchor7}




:tada: :100:

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |


[[toc]]


::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码
```js
console.log('Hello, VitePress!')
```
:::


> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。


---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>





<script setup>
import CustomComponent from '../.vitepress/theme/components/Custom.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />
<>

## More docs

...