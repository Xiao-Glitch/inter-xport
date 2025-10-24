<template>
  <div class="history-view">
    <van-nav-bar fixed title="历史浏览"></van-nav-bar>

    <van-list
      v-model="Loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="item in list" :key="item.id">
        <ArticleItem :item="item"></ArticleItem>
      </div>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import history from '@/store/modules/history'

export default {
  name: 'history-views',
  components: {
    ArticleItem
  },
  data () {
    return {
      list: [],
      Loading: false,
      finished: true
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        const srl = history.state.history
        const start = this.list.length
        const arList = srl.slice(start, start + 5)
        this.list.push(...arList)
        this.asLoading = false

        if (this.list.length >= srl.length) {
          this.isfinished = true
        }
      }, 1500)
    }
  },
  mounted () {
    this.list.push(...this.$store.getters.gethistory)
    console.log(this.list)
  }
}
</script>

<style lang="less" scoped>
.history-view {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
