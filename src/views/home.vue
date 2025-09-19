<template>
  <div class="layout-view">
    <router-view></router-view>

    <van-tabbar route>
      <van-tabbar-item replace to="/home/article" icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item replace to="/home/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item replace to="/home/like" icon="like-o">喜欢</van-tabbar-item>
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

</style>
