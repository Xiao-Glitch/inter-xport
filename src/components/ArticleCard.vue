<template>
  <van-card
    :title="item.title"
    :desc="`${item.author} · ${item.date} · ${item.tag}`"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  >
    <template #footer>⭐{{ item.star }}</template>
  </van-card>
</template>
<script>
export default { props: { item: Object } }
</script>
