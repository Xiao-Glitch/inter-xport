<template>
  <div class="settings-page">
    <!-- 1. 用户信息卡片 -->
    <div class="user-card">
      <van-image
        round
        fit="cover"
        width="64"
        height="64"
        :src="user.avatar"
        class="avatar"
      />
      <div class="info">
        <div class="name">{{ user.name }}</div>
        <div class="id">ID: {{ user.id }} ・ {{ user.bio }}</div>
        <div class="email">email：{{ user.email }}</div>
        <div class="mobile">mobile：{{ user.mobile }}</div>
      </div>
      <van-button plain hairline round type="primary" size="small" @click="editProfile">
        编辑资料
      </van-button>
    </div>

    <!-- 2. 设置分组 -->
    <van-cell-group title="账号与安全" class="group">
      <van-cell title="修改密码" is-link @click="goPwd" />
      <van-cell title="绑定邮箱" is-link @click="goEmail" />
      <van-cell title="绑定手机号" is-link @click="goMobile" />
      <van-cell title="注销账号" value="危险" class="danger" @click="logoutAccount" />
    </van-cell-group>

    <van-cell-group title="外观" class="group">
      <van-cell center title="暗黑模式">
        <template #right-icon>
          <van-switch v-model="dark" size="20" active-color="#1e80ff" @change="toggleDark" />
        </template>
      </van-cell>
      <van-cell title="字体大小" :value="fontSizeText" is-link @click="showFontPicker = true" />
      <van-cell title="语言" :value="langText" is-link @click="showLangPicker = true" />
    </van-cell-group>

    <van-cell-group title="通知" class="group">
      <van-cell center title="评论通知">
        <template #right-icon>
          <van-switch v-model="notice.comment" size="20" active-color="#1e80ff" />
        </template>
      </van-cell>
      <van-cell center title="点赞通知">
        <template #right-icon>
          <van-switch v-model="notice.like" size="20" active-color="#1e80ff" />
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group title="关于" class="group">
      <van-cell title="当前版本" :value="version" />
      <van-cell title="用户协议" is-link @click="goOut('.')" />
      <van-cell title="隐私政策" is-link @click="goOut('.')" />
      <van-cell title="开源许可" is-link @click="goOut('.')" />
    </van-cell-group>

    <!-- 3. 退出 -->
    <div class="logout-box">
      <van-button round block plain hairline type="danger" @click="logout">
        退出登录
      </van-button>
    </div>

    <!-- 4. 字体大小弹窗 -->
    <van-action-sheet
      v-model="showFontPicker"
      :actions="fontActions"
      cancel-text="取消"
      close-on-click-action
      @select="onFontSelect"
    />

    <!-- 5. 语言弹窗 -->
    <van-action-sheet
      v-model="showLangPicker"
      :actions="langActions"
      cancel-text="取消"
      close-on-click-action
      @select="onLangSelect"
    />
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant'

export default {
  name: 'SettingsView',
  data () {
    return {
      user: {
        avatar: '...',
        name: '小卡拉蜜',
        id: '1024',
        bio: '冲！',
        email: 'user@example.com',
        mobile: '13800138000',
        pwdUpdatedAt: 1719999999999
      },
      dark: false,
      fontSize: 'normal',
      lang: 'zh-CN',
      version: '1.0.0',
      notice: { comment: true, like: true },
      showFontPicker: false,
      showLangPicker: false,
      fontActions: [
        { name: '小', value: 'small' },
        { name: '标准', value: 'normal' },
        { name: '大', value: 'large' },
        { name: '特大', value: 'xlarge' }
      ],
      langActions: [
        { name: '简体中文', value: 'zh-CN' },
        { name: '繁體中文', value: 'zh-TW' },
        { name: 'English', value: 'en-US' }
      ]
    }
  },
  computed: {
    fontSizeText () {
      const map = { small: '小', normal: '标准', large: '大', xlarge: '特大' }
      return map[this.fontSize]
    },
    langText () {
      const map = { 'zh-CN': '简体中文', 'zh-TW': '繁體中文', 'en-US': 'English' }
      return map[this.lang]
    }
  },
  methods: {
    editProfile () {
      this.$router.push('/settings/edit')
    },
    goPwd () {
      this.$router.push('/settings/pwd')
    },
    goEmail () {
      this.$router.push('/settings/email')
    },
    goMobile () {
      this.$router.push('/settings/mobile')
    },
    go (name) {
      this.$router.push({ name })
    },
    goOut (url) {
      window.open(url, '_blank')
    },
    toggleDark (val) {
      document.documentElement.classList.toggle('dark', val)
      localStorage.setItem('dark', val ? '1' : '0')
      Toast(val ? '已开启暗黑模式' : '已关闭暗黑模式')
    },
    onFontSelect (item) {
      this.fontSize = item.value
      this.applyFont(item.value)
      localStorage.setItem('font-size', item.value)
    },
    applyFont (size) {
      const map = { small: '12px', normal: '14px', large: '16px', xlarge: '18px' }
      document.documentElement.style.fontSize = map[size]
    },
    onLangSelect (item) {
      this.lang = item.value
      localStorage.setItem('lang', item.value)
      Toast('语言已切换（刷新后生效）')
    },
    logout () {
      Dialog.confirm({ title: '提示', message: '确定退出登录？' })
        .then(() => {
          Toast.loading({ message: '正在退出...', forbidClick: true, duration: 800 })
          setTimeout(() => {
            // ① 重置本页 data
            Object.assign(this.$data, this.$options.data())
            // ② 清 token
            localStorage.removeItem('token')
            // ③ 跳登录 + 成功提示
            this.$router.replace('/Login')
            Toast.success('退出成功')
          }, 800)
        })
        .catch(() => {})
    },
    logoutAccount () {
      Dialog.confirm({
        title: '危险操作',
        message: '注销后所有数据无法恢复，确定继续？'
      })
        .then(() => {
          Toast.loading({ message: '提交中...', forbidClick: true, duration: 600 })
          // 这里调接口：this.$api.user.delete()
          setTimeout(() => {
            Toast('已提交注销申请，1-3 个工作日内处理')
          }, 600)
        })
        .catch(() => {})
    }
  },
  mounted () {
    // 读缓存
    this.dark = localStorage.getItem('dark') === '1'
    this.fontSize = localStorage.getItem('font-size') || 'normal'
    this.lang = localStorage.getItem('lang') || 'zh-CN'
    this.applyFont(this.fontSize)
    document.documentElement.classList.toggle('dark', this.dark)
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
    this.user = {
      avatar: storedUser.avatar || this.user.avatar,
      name: storedUser.name || this.user.name,
      id: storedUser.id || this.user.id,
      bio: storedUser.bio || this.user.bio,
      email: storedUser.email || this.user.email,
      mobile: storedUser.mobile || this.user.mobile,
      pwdUpdatedAt: storedUser.pwdUpdatedAt || this.user.pwdUpdatedAt
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-button--primary) {
  color: var(--color-primary);
  border: none;
}
.settings-page {
  background: #f7f8fa;
  height: 1105px;
  padding-bottom: 20px;
}

.user-card {
  margin: 12px 16px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  .avatar {
    margin-right: 12px;
  }
  .info {
    flex: 1;
    .name {
      font-size: 18px;
      font-weight: 500;
      color: #323233;
    }
    .id {
      font-size: 12px;
      color: #969799;
      margin-top: 4px;
    }
    .email, .mobile {
      font-size: 12px;
      color: #969799;
      margin-top: 4px;
    }
  }
}

.group {
  margin: 12px 16px;
  border-radius: 12px;
  overflow: hidden;
  .danger {
    color: #ee0a24;
  }
}

.logout-box {
  margin: 24px 16px;
}
</style>
