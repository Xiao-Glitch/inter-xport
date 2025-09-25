<template>
    <div class="user-view">
      <div id="pops">
        <div><van-loading size="26" vertical>正在退出登录...</van-loading></div>
      </div>
      <!-- <div class="user">
        <img :src="avatar" alt="" />
      <h3>{{ username }}</h3>
      </div> -->
      <van-grid clickable :column-num="3" :border="false">
        <van-grid-item icon="clock-o" text="历史记录" to="/" />
        <van-grid-item icon="bookmark-o" text="我的收藏" to="/home/collect" />
        <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/home/like" />
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
        <van-cell v-show="islogin" @click="showPopup" title="退出登录" is-link />
        <van-popup v-model="show" round closeable :style="{ height: '30%' }">
          <div class="logout-warp">
            <p>确定退出登录吗</p>
            <div class="logout">
              <van-button type="primary" round block @click="show = false" :style="{ width: '30%' }">取消</van-button>
              <van-button type="danger" round block @click="logout" :style="{ width: '30%' }">退出登录</van-button>
            </div>
          </div>
        </van-popup>
      </van-cell-group>
    </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'User-view',
  data () {
    return {
      username: '',
      avatar: '../src/assets/logo.png',
      show: false,
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
      this.show = false
      const pops = document.getElementById('pops')
      pops.style.display = 'block'
      setTimeout(() => {
        pops.style.display = 'none'
        Toast.success('退出登录成功')
        this.islogin = false
        localStorage.removeItem('token')
        localStorage.setItem('islogin', false)
        setTimeout(() => {
          this.$router.push('/login')
        }, 500)
      }, 1400)
    },
    onselect (options) {
      Toast(options.name)
      this.showShare = false
    },
    showPopup () {
      this.show = true
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
  .logout-warp {
    width: 330px;
    height: 162px;
    p {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      color: #646566;
      margin-bottom: 20px;
    }
    .logout {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: flex-end;
    }
  }
}
</style>
