<template>
  <div class="collect-page">
    <van-nav-bar fixed title="我的收藏" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem v-for="item in list" :key="item.item" :item="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'collect-view',
  data () {
    return {
      loading: false,
      finished: false
    }
  },
  methods: {
    onload () {
      return console.log('load')
    }
  }

}
</script>

<style lang="less" scoped>
.collect-view {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
