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
      <div class="foot">
        <div class="like">
          <svg t="1761290292228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3700" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
            <path d="M515.2 224c-307.2 0-492.8 313.6-492.8 313.6s214.4 304 492.8 304 492.8-304 492.8-304S822.4 224 515.2 224zM832 652.8c-102.4 86.4-211.2 140.8-320 140.8s-217.6-51.2-320-140.8c-35.2-32-70.4-64-99.2-99.2-6.4-6.4-9.6-12.8-16-19.2 3.2-6.4 9.6-12.8 12.8-19.2 25.6-35.2 57.6-70.4 92.8-102.4 99.2-89.6 208-144 329.6-144s230.4 54.4 329.6 144c35.2 32 64 67.2 92.8 102.4 3.2 6.4 9.6 12.8 12.8 19.2-3.2 6.4-9.6 12.8-16 19.2C902.4 585.6 870.4 620.8 832 652.8z" p-id="3701" fill="#bfbfbf"></path>
            <path d="M512 345.6c-96 0-169.6 76.8-169.6 169.6 0 96 76.8 169.6 169.6 169.6 96 0 169.6-76.8 169.6-169.6C681.6 422.4 604.8 345.6 512 345.6zM512 640c-67.2 0-121.6-54.4-121.6-121.6 0-67.2 54.4-121.6 121.6-121.6 67.2 0 121.6 54.4 121.6 121.6C633.6 582.4 579.2 640 512 640z" p-id="3702" fill="#bfbfbf"></path>
          </svg>
          <span>{{ item.likes }}</span>
        </div>
        <div class="collect">
          <svg t="1761289929686" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3698" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
            <path d="M812.2 370.3l-124.5-0.6c5.6-18.1 13.2-45.7 17.2-73.7 4.6-32.1 5.7-58.9 3-77.6-4.4-31-17.5-57.9-37.8-78-22.1-21.9-50.7-33.4-82.6-33.4h-1.6c-2 0.1-19.7 1.2-39 8.4-30.2 11.3-49.6 32.4-54.7 59.3l-0.6 3.1 0.1 3.2c0.9 34.2-8.9 95.1-15.7 117.9-1.6 5.5-13.6 24.1-33.9 42.4-20 18-40.5 28.8-55 28.8h-15.8c-6.4-14.2-20.8-24.2-37.4-24.2H147.4c-22.6 0-41 18.4-41 41v478.2c0 22.6 18.4 41 41 41H334c13.8 0 26-6.8 33.4-17.3h359.4c64.8 0 116-49.2 130.4-125.3 10.2-53.9 59.3-279.3 59.8-281.6l0.7-3.2v-3.2c-0.1-57.9-47.3-105.2-105.5-105.2z m-647.3 34.3h151.4c-0.5 2.5-0.7 5-0.7 7.6v435.5H164.9V404.6z m633.3 348c-7 37-29.5 76.5-71.5 76.5H375.6V430.2h11.5c38.1 0 72.8-24.1 95.2-44.3 25.3-22.8 45.4-50.2 51.2-69.7 7.9-26.4 18.5-89.8 18.2-132.3 4.7-11.8 29.2-16.2 36.8-16.9 38 0.5 55.9 31.2 60.1 59.8 0.9 6 2.3 24-3 60.5-5.9 40.6-21 82.3-21.1 82.7-4.9 13.5-3 28.5 5.1 40.3 8.1 11.8 21.5 19 35.9 19.1l146.6 0.7h0.2c24.1 0 44 18.9 45.4 42.6C851 503 808 700.9 798.2 752.6z" fill="#B3B3B3" p-id="3699"></path>
          </svg>
          <span>{{ item.views }}</span>
        </div>
      </div>
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
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 12px;
    color: #999;
    margin-top: 4px;
    .like, .collect {
      display: flex;
      align-items: center;
      padding:0 8px;
      > span {
        margin: 0 4px;
      }
    }
    .like {
      border-right: 1px solid #999;
    }

  }
}
</style>
