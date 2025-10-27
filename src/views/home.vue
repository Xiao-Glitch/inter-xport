<template>
  <div class="layout-view">
    <keep-alive :include="['article-view']">
      <router-view></router-view>
    </keep-alive>

    <van-tabbar route>
      <van-tabbar-item replace to="/home/article" icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item replace to="/home/notify" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/home/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home-view'
}
</script>

<style lang="less" scoped>
:deep(.van-tabbar-item) {
  margin: 0 34px;
}
</style>
