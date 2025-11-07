<template>
  <div class="layout-view">
    <keep-alive>
      <router-view :key="$route.fullPath" @cont="getnum"></router-view>
    </keep-alive>

    <van-tabbar v-if="showTabbar" route>
      <van-tabbar-item replace to="/home/article" icon="notes-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/home/notify" icon="chat-o" :badge="msgnum">消息</van-tabbar-item>
      <van-tabbar-item replace to="/home/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home-view',
  data () {
    return {
      msgnum: 0,
      showTabbar: true,
      originHeight: 0
    }
  },
  mounted () {
    window.addEventListener('focusin', this.onFocusIn)
    window.addEventListener('focusout', this.onFocusOut)
    if (window.visualViewport) {
      this.originHeight = window.visualViewport.height
      window.visualViewport.addEventListener('resize', this.onViewportResize)
    }
  },
  beforeDestroy () {
    window.removeEventListener('focusin', this.onFocusIn)
    window.removeEventListener('focusout', this.onFocusOut)
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('resize', this.onViewportResize)
    }
  },
  methods: {
    getnum (num) {
      this.msgnum = num
    },
    onFocusIn (e) {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        this.showTabbar = false
      }
    },
    onFocusOut () {
      setTimeout(() => {
        if (window.visualViewport && window.visualViewport.height >= this.originHeight - 10) {
          this.showTabbar = true
        }
      }, 100)
    },
    onViewportResize () {
      if (window.visualViewport.height >= this.originHeight - 10) {
        this.showTabbar = true
      } else {
        this.showTabbar = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-tabbar-item) {
  margin: 0 34px;
}
</style>
