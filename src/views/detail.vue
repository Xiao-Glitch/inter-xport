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
            {{ item.views }} 收藏数
          </p>
          <p>
            <img src="../assets/logo.png" alt="">
            <span>作者: {{ item.other }}</span>
          </p>
        </header>
        <main class="body" v-html="item.cons"></main>
        <div class="opt">
          <van-icon :name="like ? 'like' : 'like-o'" @click="adtLike()" color="#FF3333"></van-icon>
          <van-icon :name="star ? 'star' : 'star-o'" @click="adtCollect()" color="#fec635"></van-icon>
        </div>
        </div>
</van-pull-refresh>
  </div>
</template>

<script>
import articlteX from '@/store/modules/articlteX'
import collects from '@/store/modules/collects'
import likes from '@/store/modules/likes'
import articleltes from '@/store/modules/articleltes'
import { Toast } from 'vant'
export default {
  name: 'Detail-view',
  data () {
    return {
      detailID: '',
      detail: [],
      isLoding: false,
      isfinished: false,
      like: false,
      star: false
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
    likeSearch () {
      if (likes.state.likes.some(item => item.id === this.detailID)) {
        this.like = !this.like
      }
      console.log('likeSearch', likes.state.likes.some(item => item.id === this.detailID))
      console.log('likeSearch', this.like)
    },
    starSearch () {
      if (collects.state.colls.some(item => item.id === this.detailID)) {
        this.star = !this.star
      }
      console.log('starSearch', collects.state.colls.some(item => item.id === this.detailID))
      console.log('starSearch', this.star)
    },

    adtLike () {
      if (localStorage.getItem('token')) {
        if (!this.like) {
          this.like = !this.like
          this.detail[0].likes = Number(this.detail[0].likes) + 1
          // likes.state.likes.push(articleltes.state.artList.filter(item => item.id === this.detailID)[0])
          likes.mutations.addLike(likes.state, articleltes.state.artList.filter(item => item.id === this.detailID)[0])
          Toast('点赞成功')
        } else {
          this.like = !this.like
          this.detail[0].likes = Number(this.detail[0].likes) - 1
          // likes.state.likes = likes.state.likes.filter(item => item.id !== this.detailID)
          likes.mutations.removeLike(likes.state, articleltes.state.artList.filter(item => item.id === this.detailID)[0])
          Toast('已取消点赞')
          console.log(this.like)
        }
      } else {
        Toast('请先登录')
      }
    },

    adtCollect () {
      if (localStorage.getItem('token')) {
        if (!this.star) {
          this.star = !this.star
          this.detail[0].views = Number(this.detail[0].views) + 1
          collects.mutations.addColl(collects.state, articleltes.state.artList.filter(item => item.id === this.detailID)[0])
          Toast('收藏成功')
        } else {
          this.star = !this.star
          this.detail[0].views = Number(this.detail[0].views) - 1
          collects.mutations.removeColl(collects.state, articleltes.state.artList.filter(item => item.id === this.detailID)[0])
          Toast('已取消收藏')
          console.log(this.star)
        }
      } else {
        Toast('请先登录')
      }
    }
  },
  mounted () {
    this.getDetail()
    this.likeSearch()
    this.starSearch()
    console.log(this.detailID)
    console.log(this.like)
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
