<template>
  <div class="login-page">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        autocomplete="username"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名必须在5位以上'}
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        autocomplete="current-password"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码必须在6位以上'}
        ]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          :loading="isLoading"
          loading-text="登录中..."
          >
          登录</van-button>
      </div>
  </van-form>
  <router-link class="link" to="/register">注册账号</router-link>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'Login-view',
  data () {
    return {
      username: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    getToken (value) {
      const { username, password } = value
      if (JSON.parse(localStorage.getItem('user')).username === username && JSON.parse(localStorage.getItem('user')).password === password) {
        const rendomID = Math.random().toString(16).slice(2)
        localStorage.setItem('token', rendomID)
        console.log(localStorage.getItem('token'))
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          setTimeout(() => {
            Toast.success('登录成功')
            localStorage.setItem('islogin', true)
          }, 300)
          this.$router.push('/home')
        }, 2300)
      } else {
        Toast.fail('用户名或密码错误')
      }
    },
    onSubmit (values) {
      if (localStorage.getItem('user')) {
        this.getToken(values)
      } else {
        Toast.fail('请先注册')
      }
    }
  }
}

</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
