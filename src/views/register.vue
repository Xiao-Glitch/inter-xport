<template>
  <div class="login-page">
    <van-nav-bar title="注册" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名必须在5位以上'}
        ]"
      />
      <van-field
        v-model="user.password"
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
        <van-button  round block type="info" native-type="submit" :loading="isLoading" loading-text="注册中...">注册</van-button>
      </div>
  </van-form>
  <router-link class="link" to="/login">登录账号</router-link>
  </div>
</template>

<script>
import { Toast } from 'vant'
import avatar from '@/assets/avatar.png'
export default {
  name: 'register-view',
  data () {
    return {
      user: {
        avatar: avatar,
        userId: null,
        username: '',
        password: '',
        bio: '冲！',
        email: '',
        mobile: '',
        pwdUpdatedAt: 1719999999999
      },
      isLoading: false
    }
  },
  methods: {
    onSubmit (values) {
      if (localStorage.getItem('user')) {
        if (localStorage.getItem('user').username === values.username) {
          Toast.fail('用户已存在')
        }
      } else {
        this.user.userId = Date.now()
        // const userList = JSON.parse(localStorage.getItem('user')) || []
        // userList.push(this.user)
        // localStorage.setItem('user', JSON.stringify(userList))
        localStorage.setItem('user', JSON.stringify(this.user))
        // console.log(JSON.parse(localStorage.getItem('user')))
        this.username = this.password = ''
        this.isLoading = true
        setTimeout(() => {
          Toast.success('注册成功...')
          this.isLoading = false
          setTimeout(() => {
            Toast.clear()
            this.$router.push('/login')
          }, 1000)
        }, 2500)
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
