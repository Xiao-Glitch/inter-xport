<template>
  <div class="comment-list">
    <!-- 合并面板：删除 + 举报 -->
    <van-action-sheet
      :value="show"
      :actions="sheetActions"
      cancel-text="取消"
      close-on-click-action
      @click-overlay="close"
      @select="onActionSelect"
      @cancel="close"
    />

    <!-- 举报弹窗 -->
    <ReportDialog v-model="isshowSheet" :current-id="currentId" :comment-id="commentId" />
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant'
import ReportDialog from '@/components/ReportDialog.vue'

export default {
  name: 'DialogSheet',
  components: { ReportDialog },
  model: {
    prop: 'show',
    event: 'update:show'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    currentId: {
      type: [String, Number],
      default: ''
    },
    commentId: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      isshowSheet: false,
      actions: [{ text: '更多', color: '#969799' }]
    }
  },
  computed: {
    currentUserId () {
      return JSON.parse(localStorage.getItem('user') || '{}').userId
    },
    sheetActions () {
      const base = [{ name: '举报', color: '#ff9800' }, { name: '分享', color: '#1989fa' }, { name: '更多', color: '#969799' }]
      if (this.currentId === this.currentUserId) {
        base.unshift({ name: '删除', color: '#ee0a24' })
      }
      return base
    }
  },
  methods: {
    noop () {}, // 防止 click 冒泡
    showSheet (item) {
      console.log('[长按/左滑] 触发', item.id)
      this.isshowSheet = true
    },
    onSwipeOpen (item) {
      // 左滑也触发同一块面板
      this.showSheet(item)
    },
    onActionSelect (action) {
      if (action.name === '删除') {
        if (this.currentId !== this.currentUserId) {
          Toast.fail('只能删除自己的评论')
          return
        }
        Dialog.confirm({ message: '确定删除这条评论？' })
          .then(() => {
            Toast('已删除')
          })
          .catch(() => {})
      } else if (action.name === '举报') {
        if (this.currentId === this.currentUserId) {
          Toast.fail('不能举报自己的评论')
          return
        }
        this.isshowSheet = true
      } else if (action.name === '更多') {
        Toast('更多功能敬请期待')
      } else {
        this.$emit('update:show', false)
      }
    },
    close () {
      this.$emit('update:show', false)
      this.$emit('show', false) // 关闭时通知父组件
    }
  }
}
</script>

<style scoped>
/* .comment-list { padding: 12px; background: #f7f8fa; } */
</style>
