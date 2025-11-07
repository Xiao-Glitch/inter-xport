<template>
  <!-- 举报弹窗 -->
  <van-dialog
    :value="isShow"
    title="举报评论"
    show-cancel-button
    round
    @confirm="submitReport"
    @cancel="close"
  >
    <!-- 单选列表 -->
    <van-radio-group v-model="reportType" class="radio-group">
      <van-cell
        v-for="t in reportTypes"
        :key="t.value"
        :title="t.label"
        clickable
        @click="reportType = t.value"
      >
        <template #right-icon>
          <van-radio :name="t.value" />
        </template>
      </van-cell>
    </van-radio-group>

    <!-- 补充说明 -->
    <van-field
      v-model="reportDesc"
      rows="2"
      autosize
      label="补充说明"
      type="textarea"
      maxlength="200"
      placeholder="请描述问题（选填）"
      show-word-limit
      class="desc-field"
    />
  </van-dialog>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'ReportDialog',
  model: {
    prop: 'isShow',
    event: 'update:isShow'
  },
  props: {
    isShow: {
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
      reportType: 'spam',
      reportDesc: '',
      reportTypes: [
        { label: '垃圾广告', value: 'spam' },
        { label: '辱骂攻击', value: 'abuse' },
        { label: '色情低俗', value: 'porn' },
        { label: '侵权抄袭', value: 'infringement' },
        { label: '其他', value: 'other' }
      ]
    }
  },
  methods: {
    async submitReport () {
      if (!this.reportType) return Toast('请选择举报类型')

      // ① 调接口（留空）
      // await this.$api.comment.report({
      //   commentId: this.commentId,
      //   type: this.reportType,
      //   desc: this.reportDesc
      // })
      const report = {
        userId: this.currentId || '系统测试评论用户',
        commentId: this.commentId || [],
        type: this.reportType,
        desc: this.reportDesc
      }
      // ② 成功提示
      Toast.success('举报已提交，感谢反馈！')
      this.$emit('update:isShow', false)
      this.reportDesc = ''
      console.log(report)
    },
    close () {
      this.$emit('update:isShow', false)
    }
  }
}
</script>

<style scoped>
.radio-group { padding: 0 16px; }
.desc-field { padding: 16px; background: #f7f8fa; }
</style>
