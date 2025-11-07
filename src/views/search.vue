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
    <van-tabs
      v-model="activeTab"
      animated
      swipeable
      color="#4169FF"
      line-width="18px"
      title-active-color="#222"
      style="position: sticky; top: 54px; z-index: 9999;"
    >
      <van-tab name="all" title="综合" />
      <van-tab name="article" title="文章" />
      <van-tab name="course" title="课程" />
      <van-tab name="tag" title="标签" />
      <van-tab name="user" title="用户" />
    </van-tabs>

    <!-- 3. 排序/时间下拉 -->
    <van-dropdown-menu active-color="#4169FF" style="border-bottom: 1px solid var(--color-greyWhite);">
      <van-dropdown-item v-model="sort" :options="sortOptions" @change="onSortChange"/>
      <van-dropdown-item v-model="time" :options="timeOptions" @change="onTimeChange"/>
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
        <ArticleItem
          v-for="item in articleList"
          :key="item.id"
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
// import ArticleCard from '@/components/ArticleCard.vue'
import ArticleItem from '@/components/ArticleItem.vue'
import CourseCard from '@/components/CourseCard.vue'
import TagCard from '@/components/TagCard.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'SearchPage',
  components: { ArticleItem, CourseCard, TagCard, UserCard },
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
      userList: [],
      newTags: []
    }
  },
  created () {
    this.keywords = this.$route.query.keywords
    const newTags = [
      { id: 30003, name: '后端', ename: 'backend', count: this.getCount('后端') },
      { id: 30004, name: '前端', ename: 'frontend', count: this.getCount('前端') },
      { id: 30005, name: 'Android', ename: 'android', count: this.getCount('Android') },
      { id: 30006, name: 'ios', ename: 'ios', count: this.getCount('iOS') },
      { id: 30007, name: '人工智能', ename: 'ai', count: this.getCount('人工智能') },
      { id: 30008, name: '开发工具', ename: 'tools', count: this.getCount('开发工具') },
      { id: 30009, name: '代码人生', ename: 'career', count: this.getCount('代码人生') },
      { id: 30010, name: '阅读', ename: 'reading', count: this.getCount('阅读') }
    ]
    this.newTags = newTags // 新增：将 newTags 挂载到 data 便于后续合并
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
      this.articleList = []
      this.courseList = []
      this.tagList = []
      this.userList = []
      this.finished = false
      if (this.keywords.trim() !== '') {
        this.$router.replace({
          path: '/search',
          query: { keywords: this.keywords }
        })
      }
      this.onLoad()
    },
    onCancel () {
      this.keywords = ''
      this.articleList = []
      this.courseList = []
      this.tagList = []
      this.userList = []
      this.finished = false
      this.onLoad()
    },
    onLoad () {
      setTimeout(() => {
        const {
          articles = [],
          courses = [],
          tags = [],
          users = []
        } = this.mockFetch()
        const pageSize = 5
        // 计算当前已加载的条数
        const loadedArticles = this.articleList.length
        const loadedCourses = this.courseList.length
        const loadedTags = this.tagList.length
        const loadedUsers = this.userList.length
        // 每次追加5条
        this.articleList.push(...articles.slice(loadedArticles, loadedArticles + pageSize))
        this.courseList.push(...courses.slice(loadedCourses, loadedCourses + pageSize))
        this.tagList.push(...tags.slice(loadedTags, loadedTags + pageSize))
        this.userList.push(...users.slice(loadedUsers, loadedUsers + pageSize))
        this.loading = false
        // 判断是否全部加载完
        if (
          this.articleList.length >= articles.length &&
          this.courseList.length >= courses.length &&
          this.tagList.length >= tags.length &&
          this.userList.length >= users.length
        ) {
          this.finished = true
        }
      }, 800)
    },
    onSortChange (vl) {
      this.sort = vl
      this.articleList = []
      this.courseList = []
      this.tagList = []
      this.userList = []
      this.finished = false
      this.onLoad()
    },
    onTimeChange (vl) {
      this.time = vl
      this.articleList = []
      this.courseList = []
      this.tagList = []
      this.userList = []
      this.finished = false
      this.onLoad()
    },
    getCount (name) {
      return this.$store.getters['articleltes/getCategoryCounts'](name)
    },
    mockFetch () {
      let articles = this.$store.getters['articleltes/getArticleList']
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
      let tags = [
        { id: 30001, name: 'webpack', count: 218 },
        { id: 30002, name: 'pycharm', count: 99 }
      ]
      // 合并 newTags 并去重
      if (this.newTags) {
        const tagMap = {}
        ;[...tags, ...this.newTags].forEach(t => {
          if (!tagMap[t.ename || t.name]) {
            tagMap[t.ename || t.name] = { ...t }
          } else {
            // 合并 count
            tagMap[t.ename || t.name].count += t.count || 0
          }
        })
        tags = Object.values(tagMap)
      }
      const users = [
        {
          id: 40001,
          name: '小卡拉蜜',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          posts: 18,
          fans: 312
        }
      ]
      // 排序处理
      if (this.sort === 'new') {
        articles = [...articles].sort((a, b) => new Date(b.time) - new Date(a.time))
      } else if (this.sort === 'hot') {
        articles = [...articles].sort((a, b) => b.likes - a.likes)
      }
      // 时间筛选（示例，需根据实际数据结构调整）
      if (this.time === 'week') {
        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
        articles = articles.filter(a => new Date(a.time).getTime() >= weekAgo)
      } else if (this.time === 'month') {
        const monthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000
        articles = articles.filter(a => new Date(a.time).getTime() >= monthAgo)
      }
      // 关键词过滤
      const kw = this.keywords
      return {
        articles: kw
          ? articles.filter(v =>
            (v.title && v.title.includes(kw)) ||
            (v.category && v.category.includes && v.category.includes(kw)) ||
            (v.content && v.content.includes && v.content.includes(kw)) ||
            (v.pw && v.pw.includes && v.pw.includes(kw))
          )
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
  // background: #f7f8fa;
  min-height: 100vh;
}
.card-group {
  margin: 0 16px;
}
:deep(.van-tabs .van-tabs--line) {
  top: 44px;
}
</style>
