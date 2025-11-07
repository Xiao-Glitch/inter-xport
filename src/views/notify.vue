<template>
  <div class="msg-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="消息" fixed>
      <template #right>
        <van-button size="small" plain hairline type="primary" @click="allRead">
          全部已读
        </van-button>
      </template>
    </van-nav-bar>

    <!-- Tab -->
    <van-tabs
      v-model="activeTab"
      sticky
      offset-top="46"
      animated
      swipeable
      title-active-color="#222"
      color="#4169FF"
      line-width="18px"
    >
      <van-tab name="all" title="全部" :badge="unReadCount" />
      <van-tab name="at" title="@我" />
      <van-tab name="comment" title="评论" />
      <van-tab name="like" title="赞" />
    </van-tabs>

    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-swipe-cell
        v-for="item in currentList"
        :key="item.id"
        :right-action="actions"
        @open="onSwipeOpen(item)"
      >
        <van-cell
          center
          :title="item.title"
          :label="item.desc"
          :value="item.time"
          :icon="item.avatar"
          @click="goDetail(item)"
        >
          <template #icon>
            <img :src="item.avatar" class="avatar" />
          </template>
          <template #title>
            <span class="title">
              <span v-if="!item.read" class="dot"> {{ item.title }} </span>
            </span>
          </template>
        </van-cell>
      </van-swipe-cell>
    </van-list>

    <van-empty v-if="isEmpty" description="暂无消息" />
  </div>
</template>

<script>
export default {
  name: 'MessagePage',
  data () {
    return {
      activeTab: 'all',
      loading: false,
      finished: false,
      page: 1,
      list: [],
      actions: [{ text: '删除', style: { background: '#ee0a24' } }]
    }
  },
  computed: {
    currentList () {
      const map = {
        all: this.list,
        at: this.list.filter((v) => v.type === 'at'),
        comment: this.list.filter((v) => v.type === 'comment'),
        like: this.list.filter((v) => v.type === 'like')
      }
      return map[this.activeTab]
    },
    unReadCount () {
      const count = this.list.filter((v) => !v.read).length
      this.$emit('cont', count)
      return count
    },
    isEmpty () {
      return !this.loading && this.currentList.length === 0
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        const data = this.mockMsg()
        if (this.page === 1) this.list = []
        this.list.push(...data)
        this.loading = false
        this.finished = true
        // if (this.page >= 2) this.finished = true
        // this.page++
      }, 600)
    },
    allRead () {
      this.list.forEach((v) => (v.read = true))
      this.$toast('已标记全部已读')
    },
    onSwipeOpen (item) {
      const idx = this.list.findIndex((v) => v.id === item.id)
      if (idx > -1) this.list.splice(idx, 1)
    },
    goDetail (item) {
      item.read = true
      this.$router.push({ name: 'Chat', params: { id: item.id } })
    },
    mockMsg () {
      const base = [
        {
          id: 7001,
          type: 'comment',
          title: '小卡拉蜜',
          desc: '兄弟，这个激活码能行吗？',
          time: '刚刚',
          avatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          read: false
        },
        {
          id: 7002,
          type: 'like',
          title: '安安说前端',
          desc: '赞了你的评论',
          time: '2小时前',
          avatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          read: false
        },
        {
          id: 7003,
          type: 'at',
          title: '后端架构进阶',
          desc: '@你 来看看 Navicat 新教程',
          time: '昨天',
          avatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          read: false
        }
      ]
      return base.map((v, i) => ({ ...v, id: v.id + this.page * 100 + i }))
    }
  }
}
</script>

<style scoped lang="less">
:deep {
  .van-button--primary {
    background-color: var(--color-primary);
    color: #fff;
    border: 1px solid var(--color-primary);
  }
}
.msg-page {
  background: #f7f8fa;
  min-height: 100vh;
  padding-top: 46px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
}
.title {
  // display: flex;
  position: relative;
  padding-left: 8px;
}
.dot {
  font-size: 14px;
  &::before {
    content: "";
    position: absolute;
    left: -4px;
    top: 4px;
    width: 4px;
    height: 4px;
    background: #ee0a24;
    border-radius: 50%;
  }
}
</style>
