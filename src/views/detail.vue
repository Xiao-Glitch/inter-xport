<template>
  <div class="detail-view">
    <van-nav-bar left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
      fiexd
      safe-area-inset-top
      title="面经详情">
      <template #right>
        <van-icon name="search" size="18" @click="toSearch">
        </van-icon>
        <input class="search-input" type="search" placeholder="搜索" @keyup.enter="toSearch" v-model="searchInput"/>
      </template>
    </van-nav-bar>
    <van-pull-refresh v-model="isLoding" success-text="刷新成功" @refresh="onRefresh">
      <div v-for="item in detail" :key="item.id" class="detail-warp">
        <header class="header">
          <h1 @click="getDetail">{{ item.title }}</h1>
          <p>
            创建时间 {{ item.time }} <br>
            {{ item.likes }} 点赞数
            |
            {{ item.views }} 收藏数
          </p>
          <div class="author">
            <p>
              <img src="../assets/logo.png" alt="">
              <span>作者: {{ item.other }}</span>
            </p>
            <van-button :icon="follow ? 'success' : 'plus'" size="mini" type="info" @click="adtFollow">
              <span v-if="!follow"> 关注 </span>
              <span v-else> 已关注 </span>
            </van-button>
          </div>
      </header>
      <hr />
      <main class="body" v-html="item.cons"></main>
      </div>
      <div v-show="!onShow" class="opt">
        <van-icon :name="like ? 'like' : 'like-o'" @click="adtLike()" color="#FF3333"></van-icon>
        <van-icon :name="star ? 'star' : 'star-o'" @click="adtCollect()" color="#fec635"></van-icon>
      </div>
      <CommentItem :arId="articleId" @show="showReport"></CommentItem>
    </van-pull-refresh>
  </div>
</template>

<script>
import router from '@/router'
import articlteX from '@/store/modules/articlteX'
import collects from '@/store/modules/collects'
import likes from '@/store/modules/likes'
import articleltes from '@/store/modules/articleltes'
import history from '@/store/modules/history'
import CommentItem from '@/components/CommentItem'
import follow from '@/store/modules/follow'
import { Toast } from 'vant'
export default {
  name: 'Detail-view',
  components: {
    CommentItem
  },
  data () {
    return {
      detailID: '',
      detail: [],
      isLoding: false,
      isfinished: false,
      like: false,
      star: false,
      follow: false,
      otherId: '',
      articleId: '',
      searchInput: '',
      onShow: false
    }
  },

  methods: {
    getDetail () {
      this.detailID = Number(this.$route.query.id)
      this.otherId = Number(this.$route.query.otherId)
      const list = articlteX.state.arxLists
      this.detail = list.filter(item => item.id === this.detailID)
      this.articleId = this.detail[0].articleId
      console.log(this.detailID, this.otherId, this.articleId)
      // console.log(this.detail)
      const tar = articleltes.state.artList.filter(item => item.id === this.detail[0].id)
      // console.log(tar)
      this.otherId = tar[0].otherId
      history.mutations.addHistory(history.state, tar[0])
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
    toSearch () {
      const vl = this.searchInput.trim()
      if (vl) {
        setTimeout(() => {
          router.push({
            path: '/search',
            query: {
              keywords: vl
            }
          })
        }, 200)
        this.searchInput = ''
      }
    },
    likeSearch () {
      if (likes.state.likes.some(item => item.id === this.detailID)) {
        this.like = !this.like
      }
      // console.log('likeSearch', likes.state.likes.some(item => item.id === this.detailID))
      // console.log('likeSearch', this.like)
    },
    starSearch () {
      if (collects.state.colls.some(item => item.id === this.detailID)) {
        this.star = !this.star
      }
      // console.log('starSearch', collects.state.colls.some(item => item.id === this.detailID))
      // console.log('starSearch', this.star)
    },
    followSearch () {
      if (follow.state.follows.some(item => item.otherId === this.otherId)) {
        this.follow = !this.follow
      }
      // console.log('followSearch', follow.state.follows.some(item => item.otherId === this.detailID))
      // console.log('followSearch', this.follow)
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
          // console.log(this.like)
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
          // console.log(this.star)
        }
      } else {
        Toast('请先登录')
      }
    },
    adtFollow () {
      if (!this.follow) {
        follow.mutations.addFollow(follow.state, articleltes.state.artList.filter(item => item.id === this.detailID)[0])
        this.follow = !this.follow
        Toast('关注成功')
      } else if (this.follow) {
        // document.querySelector('.van-button__content span').style.display = 'none'
        follow.mutations.removeFollow(follow.state, articleltes.state.artList.filter(item => item.id === this.detailID)[0])
        this.follow = !this.follow
        alert('已取消关注')
      }
    },
    showReport (val) {
      this.onShow = val
      // console.log('detail接收', val)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.getDetail()
    this.likeSearch()
    this.starSearch()
    this.followSearch()
    const searchInput = document.querySelector('.search-input')
    searchInput.addEventListener('focus', function () {
      searchInput.style.width = '128px'
    })
    searchInput.addEventListener('blur', function () {
      searchInput.style.width = '78px'
    })
  }
}
</script>

<style lang="less" scoped>
input[type="search"]::-webkit-search-cancel-button {
  display: none !important;
}
.detail-view {
  // height: 750px;
  height: 100%;
  margin-top: 8px;
  // overflow: hidden;
  padding: 0 15px;
  position: relative;
  .detail-warp {
    // height: 705px;
    .header {
      h1 {
        font-size: 22px;
      }
      h3 {
        font-size: 20px;
      }
      p {
        color: var(--color-grey);
        font-size: 12px;
        display: flex;
        align-items: center;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 5px;
      }
      .author {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  :deep(code) {
    overflow: visible;
    font-size: 8px;
  }
  :deep(.van-nav-bar__content) {
    justify-content: space-between;
  }
  :deep(.van-nav-bar__title) {
    margin: 0;
  }
  :deep(.van-nav-bar__left, .van-nav-bar__right) {
    padding: 0 1.26667vw !important;
  }
  :deep(.van-nav-bar__left) {
    position: inherit;
  }
  :deep(.van-nav-bar__right) {
    width: 100px;
    position: relative;
    justify-content: end;
  }
  :deep(.van-nav-bar__right i) {
    position: absolute;
    top: 6px;
    left: 96px;
  }
  .search-input {
    font-size: 12px;
    width: 78px;
    border-radius: 8px;
    border: 1px solid var(--color-grey);
    transition: all 0.8s;
  }
  hr {
    border: none;
    border-top: 1px solid var(--color-greyWhite);
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .opt {
    position: fixed;
    // position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99999;
    width: 130px;
    bottom: 36px;
    right: 52px;
    > .van-icon {
      background: var(--color-white);
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px var(--color-greyWhite);
      font-size: 18px;
      &.active {
        background: #fec635;
        color: var(--color-white);
      }
    }
  }
}
</style>
