<template>
  <van-cell class="article-item">
    <template #title>
      <div class="head">
        <img :src="item.avg"
          alt
        />
        <div class="con">
          <p class="title van-ellipsis">{{ item.title }}</p>
          <p class="other">{{ item.other }} | {{ item.time }}</p>
        </div>
      </div>
    </template>
    <template #label>
      <div  class="body van-multi-ellipsis--l2" @click="goDetail(item.id)">
        {{ item.content }}
      </div>
      <div class="foot">点赞 {{ item.likes }} | 收藏 {{ item.views }}</div>
    </template>
  </van-cell>
</template>

<script>
import router from '@/router'
export default {
  name: 'ArticleItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },

  methods: {
    goDetail (id) {
      setTimeout(() => {
        router.push({
          path: '/detail',
          query: {
            id
          }
        })
      }, 200)
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
