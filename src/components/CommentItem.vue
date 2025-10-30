<template>
  <div class="comment-container">
    <div class="title">
      <p>共12条评论</p>
    </div>
    <div class="comment-form">
      <div class="content">
        <div class="avatar-box">
          <img src="../assets/avatar.png" alt="">
        </div>
        <div class="comment-input">
          <div class="rich-input">
            <div class="input"
              ref="input"
              contenteditable="true"
              spellcheck="false"
              @focus="onFocus"
              @blur="onBlur"
              placeholder="输入评论..." />
          </div>
          <div class="action-box">
            <div class="submit" ref="submit">
              <span @click="submitComment">发送</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-tabs v-model="sort" shrink color="#1e80ff" line-width="20px" @change="onTabChange">
      <van-tab name="hot" title="最热" />
      <van-tab name="new" title="最新" />
    </van-tabs>
  <div class="comment-list-box">
    <!-- 排序 -->
    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text=""
      @load="onLoad"
    >
      <van-swipe-cell
        v-for="item in list"
        :key="item.id"
        :right-action="delAction"
        @open="onDel(item)"
      >
        <div class="comment-item" @click="reply(item)">
          <van-image
            round
            fit="cover"
            width="39px"
            height="39px"
            :src="item.avatar"
            class="avatar"
          />
          <div class="right">
            <div class="head">
              <span class="name">{{ item.name }}</span>
              <span class="time">{{ fmtTime(item.time) }}</span>
            </div>
            <div class="contents">{{ item.content }}</div>

            <!-- 二级评论 -->
            <div v-if="item.children && item.children.length" class="sub-box">
              <div class="sub-list" :style="{ height: showComment ? '125px' : 'auto'}">
                  <div
                  v-for="sub in item.children"
                  :key="sub.id"
                  class="sub-item"
                  @click.stop="reply(sub, item)"
                >
                  <span class="sub-name">{{ sub.name }}:</span>&nbsp;
                  <span class="sub-con">{{ sub.content }}</span>
                  <div class="tl">
                    <div class="ttl">
                      <div class="like" @click.stop="toggleLike(sub)">
                        <van-icon
                          :name="sub.liked ? 'good-job' : 'good-job-o'"
                          :color="sub.liked ? '#ee0a24' : '#969799'"
                        />
                        <span>{{ sub.like }}</span>
                      </div>
                      <div class="comment" @click="onComment">
                        <van-icon name="comment-o">
                        </van-icon>
                      </div>
                    </div>
                    <span class="sub-time">{{fmtTime(sub.time) }}</span>
                  </div>
                </div>
              </div>
              <div
                v-if="item.childCount > 2"
                class="sub-more"
                @click.stop="showAllChild"
              >
                共{{ item.childCount }}条回复 >
              </div>
            </div>

            <div class="tool">
              <div class="like" @click.stop="toggleLike(item)">
                <van-icon
                  :name="item.liked ? 'good-job' : 'good-job-o'"
                  :color="item.liked ? '#ee0a24' : '#969799'"
                />
                <span>{{ item.like }}</span>
              </div>
              <div class="comment">
                <van-icon name="comment-o" @click="onComment">
                </van-icon>
                <input class="comipt" type="text" :style="{display:iscomipt ? 'block' : 'none' }">
              </div>
            </div>
          </div>
        </div>
      </van-swipe-cell>
    </van-list>

    <van-empty v-if="isEmpty" description="暂无评论" />
  </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')
export default {
  name: 'CommentItem',
  props: {
    arId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      commentInput: '',
      sort: 'hot',
      list: [],
      loading: false,
      finished: false,
      showComment: true,
      iscomipt: false,
      page: 1,
      delAction: [{ text: '删除', color: '#ee0a24' }]
    }
  },
  computed: {
    isEmpty () {
      return this.loading && this.list.length === 0
    }
  },
  methods: {
    onFocus () {
      this.$refs.submit.style.top = '105px'
      this.$refs.submit.style.right = '6px'
    },
    onBlur () {
      this.$refs.submit.style.top = '7px'
      this.$refs.submit.style.right = '0'
      this.commentInput = this.$refs.input.textContent.trim()
      if (!this.commentInput) {
        this.$refs.input.textContent = ''
      }
    },
    getComments () {
      this.sort = !this.sort ? 'hot' : 'new'
    },
    submitComment () {
      if (this.commentInput) {
        const newComment = {
          id: Date.now(),
          commentId: 'c' + Date.now(),
          articleId: this.arId,
          name: JSON.parse(localStorage.getItem('user')).username || '匿名用户',
          avatar: require('../assets/avatar.png'),
          content: this.commentInput,
          time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
          like: 0,
          liked: false,
          children: [],
          childCount: 0
        }
        // 提交到 Vuex 并自动同步 localStorage
        this.$store.commit('comment/addComment', newComment)
        this.list.unshift(newComment)
        this.$refs.input.textContent = ''
        this.commentInput = ''
        Toast.success('评论成功')
      }
    },
    onLoad () {
      setTimeout(() => {
        // 获取当前文章的评论
        let data = this.$store.getters['comment/getComments'](this.arId)
        if (this.sort === 'new') {
          // 最新：按时间倒序
          data = [...data].sort((a, b) => new Date(b.time) - new Date(a.time))
        } else {
          // 最热：按点赞数倒序
          data = [...data].sort((a, b) => b.like - a.like)
        }
        if (this.page === 1) this.list = []
        data.forEach(item => {
          this.list.push(item)
        })
        if (data.length === 0 || this.page >= 1) {
          this.finished = true
        } else {
          this.page++
        }
      }, 600)
    },
    onDel (item) {
      const idx = this.list.findIndex((v) => v.id === item.id)
      if (idx > -1) {
        this.list.splice(idx, 1)
        Toast('已删除')
      }
    },
    onComment () {
      this.iscomipt = !this.iscomipt
    },
    reply (item, parent) {
      this.$emit('reply', {
        id: item.id,
        name: item.name,
        parentId: parent ? parent.id : null
      })
    },
    toggleLike (item) {
      item.liked = !item.liked
      item.like += item.liked ? 1 : -1
      // 更新评论到 Vuex和localStorage
      const comments = this.$store.state.comment.comments
      const idx = comments.findIndex(v => v.id === item.id)
      if (idx > -1) {
        this.$store.commit('comment/setComments', comments)
      }
    },
    showAllChild () {
      this.showComment = !this.showComment
    },
    fmtTime (t) {
      return dayjs(t).from(dayjs())
    },
    mockData () {
      const base = []
      return base.map((v, i) => ({ ...v, id: v.id + this.page * 1000 + i }))
    },
    onTabChange (name) {
      setTimeout(() => {
        this.sort = name
        this.page = 1
        this.finished = false
        this.list = []
        this.onLoad()
      }, 300)
    }
  },
  mounted () {
    // 页面加载时，优先从 Vuex（已自动同步 localStorage）获取评论
    this.list = this.$store.getters['comment/getComments'](this.arId)
  },
  beforeDestroy () {
    localStorage.setItem('comments', JSON.stringify(this.$store.state.comment.comments))
  }
}
</script>
<style lang="less" scoped>
  .comment-container {
    // height: 100vh;
    margin:40px 0;
    padding: 0 14px;
  }
  .comment-form {
    height: 100%;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    // align-items: center;
    .avatar-box {
      margin-right: 10px;
    }
  }
.comment-list-box {
  padding: 0 15px;
  background: var(--color-white);
}

.comment-item {
  display: flex;
  padding: 12px 0;
  .avatar {
    flex-shrink: 0;
    margin-right: 10px;
  }
  .right {
    flex: 1;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin:6px;
      .name {
        font-size: 14px;
        color: var(--font-color);
        font-weight: 500;
      }
      .time {
        font-size: 12px;
        color: var(--color-grey);
      }
    }
    .contents {
      font-size: 14px;
      padding: 4px;
      color: var(--font-color);
      line-height: 20px;
      word-break: break-all;
    }
    .sub-box {
      margin-top: 8px;
      padding: 8px;
      background: #f7f8fa;
      border-radius: 6px;
      font-size: 13px;
      color: var(--font-color);
      .sub-list {
        height: 125px;
        overflow: hidden;
        .sub-item {
          height: 58px;
          line-height: 18px;
          margin-bottom: 4px;
          position: relative;
          .sub-name {
            color: #1e80ff;
            margin-right: 4px;
          }
          .sub-con {
            color: var(--font-color);
          }
          .tl {
            display: flex;
            justify-content: space-between;
            margin: 0 10px;
            margin-top: 14px;
            .ttl {
              display: flex;
              .like {
                display: flex;
                align-items: center;
                margin-right: 2px;
                width: 30px;
                gap: 4px;
                font-size: 10px;
                color: #969799;
              }
            }
          }
          .sub-time {
            color: var(--color-grey);
          }
        }
      }
      .sub-more {
        margin-top: 4px;
        color: #1e80ff;
        cursor: pointer;
      }
    }
    .tool {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      .like {
        display: flex;
        align-items: center;
        margin-right: 2px;
        width: 35px;
        gap: 4px;
        font-size: 12px;
        color: #969799;
      }
      .comment {
        display: flex;
        align-items: center;
        .comipt {
          border-radius: 6px;
          font-size: 16px;
          width: 80px;
          border: 1px solid var(--color-grey);
          transition: all 0.8s;
        }
      }
    }
  }
}
  .avatar-box {
    width: 39px;
    height: 39px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .comment-input {
    position: relative;
    box-sizing: border-box;
    .rich-input {
      margin: 6px auto;
      .input {
        padding: 4px;
        width: 246px;
        height: 18px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #999;
        transition: all .6s;
        &:empty::before {
          content: '请输入评论...';
          position: absolute;
          top: 12px;
          left: 8px;
          color: #999;
          font-size: 12px;
          // pointer-events: none;
        }
        &:focus {
          height: 120px;
          border: 1px solid #999;
          outline-color: #999;
        }
      }
    }
    .action-box {
      .submit {
        height: 16px;
        position: absolute;
        background-color: #1e80ff;
        transition: all .6s;
        border-radius: 8px;
        border-top-left-radius: 0.3px;
        border-bottom-left-radius: 0.3px;
        height: 27px;
        width: 60px;
        top: 6px;
        right: 0;
        span {
          display: inline-block;
          margin: 2px 0;
          width: 60px;
          color: #fff;
          text-align: center;
        }
      }
    }
  }

</style>
