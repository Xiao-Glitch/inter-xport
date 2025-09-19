<template>
  <div class="detail-view">
    <van-nav-bar left-text="返回" @click-left="$router.go(-1)" fiexd title="面经详情"></van-nav-bar>
    <header class="header">
      <h1>标题</h1>
      <p>
        创建时间 | 432 浏览量 |
        45 点赞数
      </p>
      <p>
        <img src="../assets/logo.png" alt="">
        <span>作者</span>
      </p>
    </header>
    <main class="body">内容</main>
    <div class="opt">
      <van-icon name="like-o"></van-icon>
      <van-icon name="star-o"></van-icon>
    </div>
  </div>
</template>

<script>
import articlteX from '@/store/modules/articlteX'
export default {
  name: 'Detail-view',
  data () {
    return {
      detailID: '',
      detail: []
    }
  },
  methods: {
  },
  beforeCreate () {
  },
  mounted () {
    this.detailID = Number(this.$route.query.id)
    console.log(this.detailID)
    this.detail = articlteX.getters.getDetail(this.detailID)()
    console.log(this.articlteX)
    console.log(this.detail)
    // console.log(articlteX.getters.getDetail(this.detailID))
  }
}
</script>

<style lang="less" scoped>
.detail-view {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
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
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
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
