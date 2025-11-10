<template>
  <div class="feedback-page">
    <van-nav-bar title="意见反馈" left-arrow @click-left="$router.back()" />

    <div class="feedback-content">
      <van-cell-group>
        <van-field
          v-model="feedback.title"
          label="标题"
          placeholder="请输入反馈标题"
          clearable
        />
        <van-field
          v-model="feedback.content"
          label="内容"
          type="textarea"
          placeholder="请输入详细反馈内容"
          rows="4"
          autosize
          clearable
        />
        <van-field
          v-model="feedback.contact"
          label="联系方式"
          placeholder="选填：邮箱或电话，方便我们联系您"
          clearable
        />
      </van-cell-group>

      <div class="feedback-actions">
        <van-button type="primary" block @click="submitFeedback" color="#FA6D1D">提交反馈</van-button>
      </div>

      <div class="feedback-success" v-if="feedbackSuccess">
        <van-icon name="success" color="#1989fa" />
        <p>感谢您的反馈！我们会尽快处理。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'Feedback',
  data () {
    return {
      feedback: {
        title: '',
        content: '',
        contact: ''
      },
      feedbackSuccess: false
    }
  },
  methods: {
    submitFeedback () {
      // 表单验证
      if (!this.feedback.title || !this.feedback.content) {
        Toast('标题和内容为必填项')
        return
      }
      console.log(this.feedback)
      this.feedbackSuccess = true
      setTimeout(() => {
        this.feedbackSuccess = false
        this.$router.push('/')
      }, 2800)
      Toast('提交成功')
      this.feedback = {
        title: '',
        content: '',
        contact: ''
      }
    }
  }
}
</script>

<style scoped>
.feedback-content { max-width: 800px; margin: 0 auto; padding: 20px; }
.feedback-actions { margin: 20px 0; }
.feedback-success {
  text-align: center;
  padding: 20px;
  background-color: #f7f8fa;
  border-radius: 8px;
}
.feedback-success p { margin-top: 10px; color: #1989fa; }
</style>
