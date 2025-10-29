<template>
  <van-card
    :title="item.title"
    :desc="`讲师：${item.author} · ${item.buyers}人已购`"
    :price="item.price"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  />
</template>
<script>
export default { props: { item: Object } }
</script>
