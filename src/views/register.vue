<template>
  <div class="login-page">
    <van-nav-bar title="面经注册" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{5,}$/, message: '密码必须在5位以上'}
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
          { pattern: /^\w{6,}$/, message: '密码必须在6位以上'}
          ]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
  </van-form>
  <router-link class="link" to="/login">登录账号</router-link>
  </div>
</template>

<script>
import { registerAPI } from '@/api/users'
import { Toast } from 'vant'
export default {
  name: 'register-view',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        await registerAPI(values)
        Toast.success('注册成功')
        this.username = this.password = ''
        console.log('submit!', values)
        this.$router.push('/login')
      } catch (err) {
        if (err.response) {
          Toast.fail(err.response.data.message)
        } else {
          Toast.fail('注册失败')
          console.log(err)
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
