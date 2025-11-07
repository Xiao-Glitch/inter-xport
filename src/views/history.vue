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
        <van-swipe-cell>
          <ArticleItem :item="item"></ArticleItem>
          <template #right>
            <van-button
              type="danger"
              class="delete-button"
              @click="removeHistory(item)"
            >
              删除
            </van-button>

          </template>
        </van-swipe-cell>
      </div>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import history from '@/store/modules/history'
import { Toast } from 'vant'

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
        this.Loading = false

        if (this.list.length >= srl.length) {
          this.finished = true
        }
      }, 1500)
    },
    removeHistory (item) {
      this.$store.commit('history/removeHistory', item)
      this.list = this.$store.getters['history/gethistory']
      Toast.success('删除成功')
    }
  },
  mounted () {
    this.list = this.$store.getters['history/gethistory']
    console.log(this.list)
  }
}
</script>

<style lang="less" scoped>
.history-view {
  margin-bottom: 50px;
  margin-top: 44px;
}
.delete-button {
  height: 100%;
}
:deep(.van-swipe-cell__right) {
  right: -2px !important;
}
</style>
