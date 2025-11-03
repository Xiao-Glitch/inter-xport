<template>
  <div class="change-pwd">
    <van-nav-bar title="修改密码" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-field v-model="oldPwd" type="password" label="旧密码" placeholder="请输入旧密码" />
      <van-field v-model="newPwd" type="password" label="新密码" placeholder="6-20位字符" />
      <van-field v-model="confirmPwd" type="password" label="确认密码" placeholder="再次输入新密码" />
    </van-cell-group>
    <div class="save-btn">
      <van-button round block type="primary" @click="save">保存</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'ChangePwd',
  data () {
    return { oldPwd: '', newPwd: '', confirmPwd: '' }
  },
  methods: {
    async save () {
      if (!this.oldPwd || !this.newPwd || !this.confirmPwd) return Toast('请填写完整')
      if (this.newPwd !== this.confirmPwd) return Toast('两次密码不一致')
      if (this.newPwd.length < 6) return Toast('密码至少6位')

      // ① 调接口（留空）
      // await this.$api.user.changePwd({ oldPwd: this.oldPwd, newPwd: this.newPwd })

      // ② 成功后把「密码更新时间」写回 localStorage.user
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      user.pwdUpdatedAt = Date.now()
      localStorage.setItem('user', JSON.stringify(user))

      Toast.success('密码已修改')
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
.change-pwd { background: #f7f8fa; min-height: 100vh; }
.save-btn { margin: 20px 16px; }
</style>
