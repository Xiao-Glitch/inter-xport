<template>
  <div class="bind-mobile">
    <van-nav-bar title="绑定手机" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-field
        v-model="mobile"
        label="手机号"
        placeholder="请输入手机号"
        :error-message="mobileError"
        @blur="checkMobile"
      />
      <van-field
        v-model="code"
        label="验证码"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
            :disabled="counting"
            @click="sendCode"
          >
            {{ counting ? `${count}s` : '发送' }}
          </van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="save-btn">
      <van-button round block type="primary" @click="save">绑定</van-button>
    </div>
  </div>
</template>

<script>
import { Toast, Notify } from 'vant'
export default {
  name: 'BindMobile',
  data () {
    return {
      mobile: '',
      code: '',
      mobileError: '',
      count: 0,
      codeNum: null,
      counting: false
    }
  },
  methods: {
    checkMobile () {
      const reg = /^1[3-9]\d{9}$/
      this.mobileError = reg.test(this.mobile) ? '' : '手机号格式不正确'
    },
    async sendCode () {
      this.checkMobile()
      if (this.mobileError) return
      // 调接口发验证码
      // await this.$api.user.sendSmsCode({ mobile: this.mobile })
      this.countDown()
      Toast('验证码已发送')
      this.getCode()
      setTimeout(() => {
        Notify({
          type: 'success',
          message: '验证码为' + this.codeNum,
          duration: 3400,
          color: 'white'
        })
      }, 2800)
    },

    async getCode () {
      this.codeNum = Math.floor(Math.random() * 10000)
      return this.codeNum
    },
    countDown () {
      this.count = 60
      this.counting = true
      const timer = setInterval(() => {
        this.count--
        if (this.count <= 0) {
          clearInterval(timer)
          this.counting = false
        }
      }, 1000)
    },
    async save () {
      if (!this.mobile || !this.code) return Toast('请填写完整')
      this.checkMobile()
      if (this.mobileError) return

      // ① 调接口验证
      // await this.$api.user.bindMobile({ mobile: this.mobile, code: this.code })
      if (this.codeNum !== Number(this.code)) return Toast('验证码错误')
      // ② 成功 → 写回 localStorage.user
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      user.mobile = this.mobile
      localStorage.setItem('user', JSON.stringify(user))

      Toast.success('手机已绑定')
      this.$router.back()
    }
  }
}
</script>

<style scoped>
:deep(.van-button--primary) {
  background-color: var(--color-primary);
  border: none;
}
.bind-mobile { background: #f7f8fa; min-height: 100vh; }
.save-btn { margin: 20px 16px; }
</style>
