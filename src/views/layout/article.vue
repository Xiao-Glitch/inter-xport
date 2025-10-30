<template>
  <div class="article-view">
    <nav class="my-nav van-hairline--bottom">
      <div class="home-select">
        <a href="JavaScript:">
          <img src="@/assets/logo.png" alt="" />
        </a>
        <div class="logo" @click.stop="showSelect">
          <span>首页</span>
          <svg t="1761272730517" class="icon" :class="{active:selectShow}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3683" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><path d="M192 384l320 384 320-384H192z" fill="#303133" p-id="3684"></path></svg>
        </div>
      </div>
      <a  :class="{active:isActive}" :style="{ '--x': xoffset}"  href="javascript:;" @click="toggleRecom">推荐</a>
      <a :class="{active:!isActive}" :style="{ '--x': '11vw'}"  href="javascript:;" @click="toggleNew">最新</a>
      <ul v-show="selectShow" class="select">
        <li v-for="item in urList" :key="item.id" >
          <a :class="{ active: item.id === liId}" @click="getId(item.id)" href="JavaScript:"> {{ item.title }} </a>
        </li>
      </ul>
      <div class="logo">
        <div class="search">
          <input class="search-input" type="search" placeholder="搜索" @keyup.enter="toSearch" v-model="searchInput"/>
          <van-icon name="search" size="18" @click="toSearch">
          </van-icon>
        </div>
        <img src="@/assets/avatar.png" alt>
      </div>
    </nav>
    <div class="nav-before">
      <div class="nav-list">
        <a v-for="value in selectList" :key="value.id" href="JavaScript:" class="nav-item" :class="{ active: value.id === 2 }">
          <div class="nav-span">
            <span>{{ value.name }}</span>
          </div>
        </a>
      </div>
    </div>
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">

      <van-list
        v-model="asLoading"
        :finished="isfinished"
        finished-text="没有更多了"
        @load="onLoad"
      >

        <div v-for="item in list" :key="item.id">
          <ArticleItem :item="item"></ArticleItem>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import router from '@/router'
import ArticleItem from '@/components/ArticleItem.vue'
import articleltes from '@/store/modules/articleltes'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
export default {
  name: 'article-view',
  components: {
    ArticleItem
  },
  data () {
    return {
      isLoading: false,
      isfinished: false,
      asLoading: false,
      isActive: false,
      list: [],
      srl: [],
      temp: 0,
      scrollTop: 0,
      selectShow: false,
      searchInput: '',
      liId: 0,
      urList: [
        { id: 1, title: '首页' },
        { id: 2, title: 'AI Coding' },
        { id: 3, title: '沸点' },
        { id: 4, title: '课程' },
        { id: 5, title: '直播' },
        { id: 6, title: '活动' },
        { id: 7, title: 'AI 刷题' }
      ],
      selectList: [
        { id: 1, name: '关注' },
        { id: 2, name: '综合' },
        { id: 3, name: '排行榜' },
        { id: 4, name: '后端' },
        { id: 5, name: '前端' },
        { id: 6, name: 'Android' },
        { id: 7, name: 'ios' },
        { id: 8, name: '人工智能' },
        { id: 9, name: '开发工具' },
        { id: 10, name: '代码人生' },
        { id: 11, name: '阅读' }
      ],
      currentType: 'recom'
    }
  },
  created () {
    this.toggleRecom = debounce(this.getRecom, 500)
    this.toggleNew = debounce(this.getNew, 500)
  },

  methods: {
    showSelect () {
      this.selectShow = !this.selectShow
      this.$nextTick(() => {
        document.addEventListener('click', this.closeSelect)
      })
    },
    toSearch () {
      const vl = this.searchInput.trim()
      if (vl) {
        setTimeout(() => {
          router.push({
            path: '/search',
            query: {
              keywords: vl
            }
          })
        }, 200)
        this.searchInput = ''
      }
    },
    closeSelect (e) {
      const select = document.querySelector('.select')
      if (select && select.contains(e.target)) return
      this.selectShow = false
      document.removeEventListener('click', this.closeSelect)
    },
    onRefresh () {
      // 刷新时根据当前类型重新加载数据
      if (this.currentType === 'recom') {
        this.getRecom()
      } else {
        this.getNew()
      }

      // 重置列表状态
      this.isfinished = false
      this.asLoading = false

      setTimeout(() => {
        this.isLoading = false
      }, 1200)
    },
    onLoad () {
      setTimeout(() => {
        const start = this.list.length
        const arList = this.srl.slice(start, start + 5)
        this.list.push(...arList)
        this.asLoading = false
        // console.log('srl长度=', this.srl.length, 'start=', start)
        // console.log(this.srl)
        if (this.list.length >= this.srl.length) {
          this.isfinished = true
        }
      }, 1200)
    },
    getRecom () {
      this.list = []
      this.currentType = 'recom'
      this.srl = this.$store.state.articleltes.artList
      this.isfinished = false
      this.isActive = true
      // 2. 关键：让 van-list 以为“需要立即加载第一屏”
      this.$nextTick(() => {
        this.asLoading = true
        this.onLoad()
      })
    },
    getNew () {
      this.list = []
      this.currentType = 'new'
      this.srl = articleltes.state.artList
        .slice()
        .sort((a, b) => new Date(b.time) - new Date(a.time))
      this.isfinished = false
      this.isActive = false
      this.$nextTick(() => {
        this.asLoading = true
        this.onLoad()
      })
    },
    handleScroll: throttle(function () {
      this.temp = document.documentElement.scrollTop
    }, 200),
    getId (id) {
      this.liId = id
    }
  },
  computed: {
    xoffset () {
      return this.currentType === 'recom' ? '-2vw' : '11vw'
    }
  },
  mounted () {
    this.getRecom()
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    document.documentElement.scrollTop = this.scrollTop
  },
  deactivated () {
    this.scrollTop = this.temp
    window.removeEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeSelect)
  }
}
</script>

<style lang="less" scoped>
input[type="search"]::-webkit-search-cancel-button {
  display: none !important;
}
.article-view {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    padding-bottom: 1px;
    width: 100%;
    z-index: 99999;
    background: var(--color-white);
    display: flex;
    align-items: center;
    a:nth-child(2)::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(var(--x, -2vw));
        bottom: 0;
        width: 14px;
        height: 2px;
        background: #222;
        transition: all 0.5s;
      }
    > a {
      color: var(--color-grey);
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.5s;
      &.active {
        color: #222;
        // &::after {
        //   width: 14px;
        // }
      }
    }
    .select {
      width: 125px;
      position: fixed;
      top: 44px;
      left: 1px;
      background-color: var(--color-white);
      padding: 4px;
      box-shadow: 0 8px 24px rgba(81, 87, 103, .16);
      border: 1px solid var(--color-greyWhite);
      border-radius: 4px;
      > li {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        > a {
          color: #515767;
          &.active {
            color: var(--color-primary);
          }
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: all .3s;
      .search {
        position: relative;
        margin: 0 10px;
        height: 100%;
       .search-input {
          font-size: 12px;
          width: 104px;
          height: 26px;
          border-radius: 8px;
          border: 1px solid var(--color-grey);
        }
        i {
          position: absolute;
          color: var(--color-primary);
          right: 5px;
          top: 6px;
        }
      }
      > img {
        width: 34px;
        height: 34px;
        display: block;
        margin: 0 10px;
        border-radius: 50%;
      }
    }
  }
}
.home-select {
  display: flex;
  > a {
    width: 38px;
    height: 43px;
    display: block;
    > img {
      width: 100%;
      height: 43px;
      display: block;
    }
  }
  .logo {
    height: 47px;
    > span {
      line-height: 47px;
      margin-left: 8px;
      margin-right: 3px;
      text-align: center;
      color: var(--color-primary);
    }
    >  svg {
      &.active {
        transform: rotate(-180deg);
      }
    }
  }
}
.nav-before {
  position: sticky;
  top: 45px;
  overflow-x: auto;
  z-index: 999;
  .nav-list {
    width: 644px;
    display: flex;
    border-top: 1px solid #e4e6eb;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    > a {
      display: flex;
      text-align: center;
      color: #515767;
      height: 30px;
      font-size: 12px;
      align-items: center;
      justify-content: center;
      &.active {
        color: var(--color-primary);
      }
      .nav-span {
        padding: 0 5px;
      }
    }
  }
}
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
          color: var(--color-grey);
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
    color: var(--color-grey);
    margin-top: 10px;
  }
}
</style>
