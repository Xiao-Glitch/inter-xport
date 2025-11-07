<template>
  <van-cell :title="'#' + item.name" :value="item.count + '篇'" @click="goSearch(item)"/>
</template>
<script>
export default {
  props: { item: Object },
  methods: {
    goSearch (item) {
      // this.$router.push({ path: '/tag/' + item.id })
      // console.log(item)
      this.$router.push({
        path: '/search',
        query: {
          keywords: item.name

        }
      })
    }
  }
}
</script>
<style>
.van-cell:hover {
  background-color: #f5f5f5;
}
</style>
