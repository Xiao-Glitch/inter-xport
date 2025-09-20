<template>
  <div class="like-view">
    <van-nav-bar fixed title="我的点赞"> </van-nav-bar>

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
import likes from '@/store/modules/likes'
import ArticleItem from '@/components/ArticleItem.vue'
export default {
  name: 'like-view',
  components: {
    ArticleItem
  },
  data () {
    return {
      Loading: false,
      finished: true,
      list: []
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        const srl = likes.state.likes
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
    this.list.push(...this.$store.getters.getLikes)
    console.log(this.list)
  }

}
</script>

<style lang="less" scoped>
.like-view {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
