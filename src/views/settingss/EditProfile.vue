<template>
  <div class="edit-profile">
    <van-nav-bar title="编辑资料" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-field v-model="form.avatar" label="头像" readonly>
        <template #input>
          <van-uploader :after-read="afterRead" max-count="1">
            <van-image round width="60" height="60" :src="form.avatar" />
          </van-uploader>
        </template>
      </van-field>
      <van-field v-model="form.name" label="昵称" maxlength="20" show-word-limit />
      <van-field v-model="form.bio" label="签名" type="textarea" rows="2" maxlength="50" show-word-limit />
    </van-cell-group>
    <div class="save-btn">
      <van-button round block type="primary" @click="save">保存</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'EditProfile',
  data () {
    return {
      form: { avatar: '', name: '', bio: '' }
    }
  },
  created () {
    // 读取本地缓存
    const u = JSON.parse(localStorage.getItem('user') || '{}')
    this.form = { avatar: u.avatar || '', name: u.name || '', bio: u.bio || '' }
  },
  methods: {
    afterRead (file) {
      this.form.avatar = file.content
    },
    save () {
      if (!this.form.name.trim()) return Toast('昵称不能为空')
      // ① 写回 localStorage
      const user = { ...this.form, id: JSON.parse(localStorage.getItem('user') || '{}').id }
      localStorage.setItem('user', JSON.stringify(user))
      // ② 返回上一页
      Toast.success('已保存')
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.edit-profile { background: #f7f8fa; min-height: 100vh; }
.save-btn { margin: 20px 16px; }
:deep(.van-button--primary) {
  background-color: var(--color-primary);
  border: none;
}
</style>
