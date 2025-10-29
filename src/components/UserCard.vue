<template>
  <van-card
    :title="item.name"
    :desc="`帖子 ${item.posts} · 粉丝 ${item.fans}`"
    :thumb="item.avatar"
  >
    <template #footer>
      <van-button plain hairline type="primary" size="mini">关注</van-button>
    </template>
  </van-card>
</template>
<script>
export default { props: { item: Object } }
</script>
