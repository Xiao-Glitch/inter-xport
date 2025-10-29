<template>
  <div class="search-page">
    <!-- 1. 搜索栏 -->
    <van-sticky>
      <van-search
        v-model="keywords"
        placeholder="搜索文章、课程、标签、用户"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </van-sticky>

    <!-- 2. 分类 tabs -->
    <van-tabs v-model="activeTab" sticky animated swipeable>
      <van-tab name="all" title="综合" />
      <van-tab name="article" title="文章" />
      <van-tab name="course" title="课程" />
      <van-tab name="tag" title="标签" />
      <van-tab name="user" title="用户" />
    </van-tabs>

    <!-- 3. 排序/时间下拉 -->
    <van-dropdown-menu active-color="#4169FF">
      <van-dropdown-item v-model="sort" :options="sortOptions" />
      <van-dropdown-item v-model="time" :options="timeOptions" />
    </van-dropdown-menu>

    <!-- 4. 结果列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- 文章 -->
      <div
        v-if="activeTab === 'all' || activeTab === 'article'"
        class="card-group"
      >
        <article-card
          v-for="item in articleList"
          :key="'a' + item.id"
          :item="item"
        />
      </div>

      <!-- 课程 -->
      <div
        v-if="activeTab === 'all' || activeTab === 'course'"
        class="card-group"
      >
        <course-card
          v-for="item in courseList"
          :key="'c' + item.id"
          :item="item"
        />
      </div>

      <!-- 标签 -->
      <div
        v-if="activeTab === 'all' || activeTab === 'tag'"
        class="card-group"
      >
        <tag-card v-for="item in tagList" :key="'i' + item.id" :item="item" />
      </div>

      <!-- 用户 -->
      <div
        v-if="activeTab === 'all' || activeTab === 'user'"
        class="card-group"
      >
        <user-card v-for="item in userList" :key="'u' + item.id" :item="item" />
      </div>
    </van-list>

    <van-empty v-if="isEmpty" description="暂无相关内容" />
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import CourseCard from '@/components/CourseCard.vue'
import TagCard from '@/components/TagCard.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'SearchPage',
  components: { ArticleCard, CourseCard, TagCard, UserCard },
  data () {
    return {
      keywords: '',
      activeTab: 'all',
      sort: 'default',
      time: 'all',
      sortOptions: [
        { text: '综合排序', value: 'default' },
        { text: '最新优先', value: 'new' },
        { text: '最热优先', value: 'hot' }
      ],
      timeOptions: [
        { text: '时间不限', value: 'all' },
        { text: '最近一周', value: 'week' },
        { text: '最近一月', value: 'month' }
      ],
      loading: false,
      finished: false,
      page: 1,
      articleList: [],
      courseList: [],
      tagList: [],
      userList: []
    }
  },
  created () {
    this.keywords = this.$route.query.keywords
  },
  computed: {
    isEmpty () {
      return (
        !this.loading &&
        !this.articleList.length &&
        !this.courseList.length &&
        !this.tagList.length &&
        !this.userList.length
      )
    }
  },
  methods: {
    onSearch () {
      this.page = 1
      this.articleList = []
      this.courseList = []
      this.tagList = []
      this.userList = []
      this.finished = false
      this.onLoad()
    },
    onCancel () {
      this.keywords = ''
      this.onSearch()
    },
    onLoad () {
      setTimeout(() => {
        const {
          articles = [],
          courses = [],
          tags = [],
          users = []
        } = this.mockFetch()
        if (this.page === 1) {
          this.articleList = []
          this.courseList = []
          this.tagList = []
          this.userList = []
        }
        this.articleList.push(...articles)
        this.courseList.push(...courses)
        this.tagList.push(...tags)
        this.userList.push(...users)
        this.loading = false
        // if (this.page >= 3) this.finished = true
        // this.page++
      }, 600)
    },
    mockFetch () {
      const articles = [
        {
          id: 10001,
          title: 'Ubuntu Pycharm永久激活方法，附补丁链接',
          author: '小卡拉蜜',
          date: '5年前',
          tag: 'Linux',
          star: 202
        },
        {
          id: 10002,
          title: '【2023最新】webstorm激活码安装激活永久教程',
          author: '安安说前端',
          date: '2年前',
          tag: '网络风暴',
          star: 118
        }
      ]
      const courses = [
        {
          id: 20001,
          title: 'Vue3 企业级项目实战',
          author: '讲师A',
          date: '1月前',
          price: '¥99',
          buyers: 1234
        }
      ]
      const tags = [
        { id: 30001, name: 'webpack', count: 218 },
        { id: 30002, name: 'pycharm', count: 99 }
      ]
      const users = [
        {
          id: 40001,
          name: '小卡拉蜜',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          posts: 18,
          fans: 312
        }
      ]

      const kw = this.keywords
      return {
        articles: kw
          ? articles.filter((v) => v.title.includes(kw))
          : articles,
        courses: kw ? courses.filter((v) => v.title.includes(kw)) : courses,
        tags: kw ? tags.filter((v) => v.name.includes(kw)) : tags,
        users: kw ? users.filter((v) => v.name.includes(kw)) : users
      }
    }
  }
}
</script>

<style scoped lang="less">
.search-page {
  background: #f7f8fa;
  min-height: 100vh;
}
.card-group {
  margin: 0 16px;
}
</style>
