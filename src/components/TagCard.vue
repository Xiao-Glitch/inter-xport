<template>
  <van-cell :title="'#' + item.name" :value="item.count + '篇'" />
</template>
<script>
export default { props: { item: Object } }
</script>
