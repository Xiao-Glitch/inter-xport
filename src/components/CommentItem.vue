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
            <div class="input" contenteditable="true" spellcheck="false" placeholder="输入评论..."></div>
          </div>
          <div class="action-box">
            <div class="submit">
              <span @click="submitComment">发送</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="comment-list-box">
    <!-- 排序 -->
    <van-tabs v-model="sort" shrink color="#1e80ff" line-width="20px">
      <van-tab name="hot" title="最热" />
      <van-tab name="new" title="最新" />
    </van-tabs>

    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
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
              <div
                v-for="sub in item.children"
                :key="sub.id"
                class="sub-item"
                @click.stop="reply(sub, item)"
              >
                <span class="sub-name">{{ sub.name }}:</span>&nbsp;
                <span class="sub-con">{{ sub.content }}</span>
                <div class="tl">
                  <div class="comment" @click="onComment" contenteditable="true">
                    <van-icon name="comment-o">
                    </van-icon>
                  </div>
                  <span class="sub-time">{{fmtTime(sub.time) }}</span>
                </div>
              </div>
              <div
                v-if="item.childCount > 2"
                class="sub-more"
                @click.stop="showAllChild(item)"
              >
                共{{ item.childCount }}条回复 >
              </div>
            </div>

            <!-- 底部工具栏 -->
            <div class="tool">
              <div class="like" @click.stop="toggleLike(item)">
                <van-icon
                  :name="item.liked ? 'good-job' : 'good-job-o'"
                  :color="item.liked ? '#ee0a24' : '#969799'"
                />
                <span>{{ item.like }}</span>
              </div>
              <div class="comment"  @click="onComment" contenteditable="true">
                <van-icon name="comment-o">
                </van-icon>
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
  data () {
    return {
      commentInput: '',
      sort: 'hot',
      list: [],
      loading: false,
      finished: false,
      page: 1,
      delAction: [{ text: '删除', color: '#ee0a24' }]
    }
  },
  computed: {
    isEmpty () {
      return !this.loading && this.list.length === 0
    }
  },
  methods: {
    submitComment () {
      console.log(this.commentInput)
      this.commentInput = ''
      Toast.success('评论成功')
    },
    onLoad () {
      setTimeout(() => {
        const data = this.mockData()
        if (this.page === 1) this.list = []
        this.list.push(...data)
        this.loading = false
        if (this.page >= 3) this.finished = true
        this.page++
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
      console.log(1)
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
    },
    showAllChild (item) {
      Toast('展开全部回复（接口占位）')
    },
    fmtTime (t) {
      return dayjs(t).from(dayjs())
    },
    mockData () {
      const base = [
        {
          id: 9001,
          name: '小卡拉蜜',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          content: '艾马特拉斯',
          time: '2025-06-08 14:30:00',
          like: 0,
          liked: false,
          children: [
            {
              id: 90011,
              name: '安安',
              content: '收到，谢谢提醒',
              time: '2025-06-08 15:00:00'
            },
            {
              id: 90012,
              name: '安安',
              content: '收到，谢谢提醒',
              time: '2025-06-08 15:00:00'
            }
          ],
          childCount: 4
        },
        {
          id: 9002,
          name: '安安说前端',
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          content: 'WebStorm 激活教程已更新',
          time: '2024-06-07 10:00:00',
          like: 12,
          liked: true,
          children: [],
          childCount: 0
        }
      ]
      return base.map((v, i) => ({ ...v, id: v.id + this.page * 1000 + i }))
    }
  },
  mounted () {
    document.querySelector('.input').addEventListener('focus', (e) => {
      document.querySelector('.submit').style.top = '105px'
      document.querySelector('.submit').style.right = '6px'
    })

    document.querySelector('.input').addEventListener('blur', (e) => {
      document.querySelector('.submit').style.top = '7px'
      document.querySelector('.submit').style.right = '0'
      this.commentInput = e.target.textContent.trim()
      if (!this.commentInput) {
        e.target.textContent = ''
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .comment-container {
    // height: 100vh;
    margin-top: 40px;
    padding: 0 4vw;
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
        }
        .sub-time {
          color: var(--color-grey);
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
        transition: all .5s;
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
