<template>
  <div class="collect-view">
    <van-nav-bar fixed title="我的收藏" ></van-nav-bar>

    <van-list
      v-model="loading"
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
import collects from '@/store/modules/collects'
import ArticleItem from '@/components/ArticleItem'
export default {
  name: 'collect-view',
  components: {
    ArticleItem
  },
  data () {
    return {
      loading: false,
      finished: true,
      list: []
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        const srl = collects.state.colls
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
    this.list.push(...this.$store.getters.getColls)
    console.log(this.list)
  }

}
</script>

<style lang="less" scoped>
.collect-view {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
