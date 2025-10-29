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
      color="#4169FF"
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
      return this.list.filter((v) => !v.read).length
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
        if (this.page >= 3) this.finished = true
        this.page++
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
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          read: false
        },
        {
          id: 7002,
          type: 'like',
          title: '安安说前端',
          desc: '赞了你的文章《WebStorm 永久激活教程》',
          time: '2小时前',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          read: false
        },
        {
          id: 7003,
          type: 'at',
          title: '后端架构进阶',
          desc: '@你 来看看 Navicat 新教程',
          time: '昨天',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          read: true
        }
      ]
      return base.map((v, i) => ({ ...v, id: v.id + this.page * 100 + i }))
    }
  }
}
</script>

<style scoped lang="less">
:deep {
  .vsn-button--primary {
    background-color: #FA6D1D;
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
  position: relative;
  padding-left: 8px;
}
.dot {
  position: absolute;
  left: -8px;
  top: 4px;
  width: 8px;
  height: 8px;
  background: #ee0a24;
  border-radius: 50%;
}
</style>
