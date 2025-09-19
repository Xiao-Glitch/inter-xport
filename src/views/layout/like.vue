<template>
  <div class="like-view">
    <van-nav-bar fixed title="我的点赞">
      <!-- <van-list
        v-model="Loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <ArticleItem v-for="item in list" :key="item.id" :item="item" />
      </van-list> -->
    </van-nav-bar>
  </div>
</template>

<script>

export default {
  name: 'like-view'

}
</script>

<style lang="less" scoped>
.like-view {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
