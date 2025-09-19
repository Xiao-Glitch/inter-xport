<template>
  <div class="article-view">
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;">推荐</a>
      <a href="javascript:;">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt></div>
    </nav>
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">

      <van-list
        v-model="asLoading"
        :finished="isfinished"
        finished-text="没有更多了"
        @load="onLoad"
      >

        <div v-for="item in list" :key="item.id">
          <ArticleItem :item="item"></ArticleItem>
        </div>
      </van-list>

    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import articleltes from '@/store/modules/articleltes'
export default {
  name: 'article-view',
  components: {
    ArticleItem
  },
  data () {
    return {
      isLoading: false,
      isfinished: false,
      finished: false,
      asLoading: false,
      list: []
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        location.reload()
      }, 1200)
    },
    onLoad () {
      setTimeout(() => {
        const srl = articleltes.state.artList
        const start = this.list.length
        const arList = srl.slice(start, start + 5)
        this.list.push(...arList)
        this.asLoading = false

        if (this.list.length >= srl.length) {
          this.isfinished = true
        }
      }, 1500)
    }

  }
}
</script>

<style lang="less" scoped>
.article-view {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 41px;
        height: 43px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
