<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          {pattenr: /^\w{5,}$/, message: '用户必须在5位以上'}
          ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattenr: /^\w{6,}$/, message: '密码必须在6位以上'}
          ]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" :loading="isLoading" loading-text="登录中...">登录</van-button>
      </div>
  </van-form>
  <router-link class="link" to="/register">注册账号</router-link>
  </div>
</template>

<script>
import { loginAPI } from '@/api/users'
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
    async onSubmit (values) {
      try {
        const { data: res } = await loginAPI(values)
        localStorage.setItem('mobile-token', res.data.token)
        Toast.success('登录成功')
        this.username = this.password = ''
        this.$route.push('/home/article')
      } catch (err) {
        if (err.response) {
          Toast.fail('登录失败')
        } else {
          Toast.fail(err.response.data.message)
        }
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
