<template>
    <div class="user-view">
      <div id="pops">
        <div><van-loading size="26" vertical>正在退出登录...</van-loading></div>
      </div>
      <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        <div class="user">
          <img :src="avatar" alt="" />
          <h3>{{ username }}</h3>
        </div>
        <van-grid clickable :column-num="3" :border="false">
          <van-grid-item icon="friends-o" text="我的关注" to="/home/like" />
          <van-grid-item icon="bookmark-o" text="我的收藏" to="/home/collect" />
          <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/home/like" />
          <van-grid-item icon="clock-o" text="历史记录" to="/home/history" />
          <van-grid-item icon="apps-o" text="其他" to="/home/other" />
          <van-grid-item icon="setting-o" text="设置" to="/home/settings" />
        </van-grid>

        <van-cell-group class="mt20">
          <van-cell title="推荐分享" is-link @click="showShare = true" />
            <van-share-sheet
              v-model="showShare"
              title="立即分享给好友"
              :options="options"
              @select="showShare = false"
            />
          <van-cell title="意见反馈" is-link />
          <van-cell title="关于我们" is-link />
          <van-cell v-show="!islogin" to='/login' title="去登录" is-link />
          <van-cell v-show="islogin" @click="logout" title="退出登录" is-link />
        </van-cell-group>
      </van-pull-refresh>
    </div>
</template>

<script>
import { Toast, Dialog } from 'vant'
import avatar from '@/assets/avatar.png'
export default {
  name: 'User-view',
  data () {
    return {
      username: JSON.parse(localStorage.getItem('user')).name || '',
      avatar: localStorage.getItem('user').avatar || avatar,
      isLoading: false,
      showShare: false,
      border: false,
      islogin: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' }
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序', icon: 'weapp-qrcode' }
        ]
      ]
    }
  },
  methods: {
    logout () {
      Dialog.confirm({
        title: '提示',
        message: '确定退出登录？'
      })
        .then(() => {
          // 先提示用户
          Toast.loading({
            message: '正在退出...',
            forbidClick: true,
            duration: 800
          })
          // 延时后再清理并跳转
          setTimeout(() => {
            this.$store.commit('user/CLEAR')
            localStorage.clear()
            this.$router.replace('/login')
          }, 800)
        })
        .catch(() => {})
    },
    onselect (options) {
      Toast(options.name)
      this.showShare = false
    },
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        // window.location.reload()
        this.islogin = JSON.parse(localStorage.getItem('islogin'))
      }, 2000)
    }
  },
  mounted () {
    this.islogin = JSON.parse(localStorage.getItem('islogin'))
  }
}
</script>

<style lang="less" scoped>
.user-view {
  padding: 0 10px;
  background: #f5f5f5;
  height: 100vh;
  .mt20 {
    margin-top: 20px;
  }
  .user {
    display: flex;
    padding: 20px 0;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    h3 {
      margin: 0;
      padding-left: 20px;
      font-size: 18px;
    }
  }
  #pops {
    position: fixed;
    z-index: 999;
    display: none;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    padding: 0%;
    width: 100%;
    height: 100%;
    div {
      position: fixed;
      top: 50%;
      left: 42%;
    }
  }
}
</style>
