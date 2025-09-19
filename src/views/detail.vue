<template>
  <div class="detail-view">
    <van-pull-refresh v-model="isLoding" success-text="刷新成功" @refresh="onRefresh">
        <van-nav-bar left-text="返回" @click-left="$router.go(-1)" fiexd title="面经详情"></van-nav-bar>
        <div v-for="item in detail" :key="item.id" class="detail-warp">
          <header class="header">
          <h1 @click="getDetail">{{ item.title }}</h1>
          <p>
            创建时间 {{ item.time }} <br>
            {{ item.likes }} 点赞数
            |
            {{ item.views }} 浏览量
          </p>
          <p>
            <img src="../assets/logo.png" alt="">
            <span>作者: {{ item.other }}</span>
          </p>
        </header>
        <main class="body" v-html="item.cons"></main>
        <div class="opt">
          <van-icon name="like-o" @click="adtLike()"></van-icon>
          <van-icon name="star-o" @click="adtCollect()"></van-icon>
        </div>
        </div>
</van-pull-refresh>
  </div>
</template>

<script>
import articlteX from '@/store/modules/articlteX'
export default {
  name: 'Detail-view',
  data () {
    return {
      detailID: '',
      detail: [],
      isLoding: false,
      isfinished: false
    }
  },
  methods: {
    getDetail () {
      this.detailID = Number(this.$route.query.id)
      const list = articlteX.state.arxLists
      // console.log(this.detailID)
      this.detail = list.filter(item => item.id === this.detailID)
      console.log(this.detail)
    },
    onLoad () {
      setTimeout(() => {
        this.isfinished = true
      }, 1500)
    },
    onRefresh () {
      setTimeout(() => {
        this.isLoding = false
        location.reload()
      }, 1200)
    },

    adtLike () {
      console.log(1)
    },

    adtCollect () {
      console.log(2)
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style lang="less" scoped>
.detail-view {
  height: 750px;
  margin-top: 44px;
  // overflow: hidden;
  padding: 0 15px;
  position: relative;
  .detail-warp {
    height: 705px;
    .header {
    h1 {
      font-size: 22px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  }
  .opt {
    // position: fixed;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    bottom: 36px;
    right: 52px;
    > .van-icon {
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
