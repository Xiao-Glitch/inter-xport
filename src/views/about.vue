<template>
  <div class="website-intro">
    <van-nav-bar title="网站介绍" left-arrow @click-left="$router.back()" />

    <div class="intro-content">
      <div class="mission-section">
        <h2>我们的使命</h2>
        <p>本网站致力于为用户提供了一个高质量的内容平台，旨在帮助用户获取知识、分享经验和交流想法。</p>
      </div>

      <div class="features-section">
        <h2>网站特色</h2>
        <van-cell-group>
          <van-cell title="简洁的界面设计" label="直观的操作界面，提升用户体验" />
          <van-cell title="丰富的文章分类" label="涵盖多个领域的精选内容" />
          <van-cell title="活跃的社区互动" label="用户可以评论、点赞和分享内容" />
        </van-cell-group>
      </div>

      <div class="stats-section">
        <h2>网站数据<span class="van-cell__label">(仅代表测试数据)</span></h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">文章</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">20+</div>
            <div class="stat-label">用户</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">评论</div>
          </div>
        </div>
      </div>

      <div class="tech-section">
        <h2>技术栈</h2>
        <div class="tech-tags">
          <van-tag plain type="primary">Vue2</van-tag>
          <van-tag plain type="primary">Vant2</van-tag>
          <van-tag plain type="primary">Vuex</van-tag>
          <!-- <van-tag plain type="primary">Node.js</van-tag>
          <van-tag plain type="primary">MongoDB</van-tag> -->
        </div>
      </div>

      <div class="contact-section">
        <h2>联系我们</h2>
        <van-cell-group>
          <van-cell title="GitHub" is-link :label="site.github" @click="visitGithub" />
          <van-cell title="Email" is-link :label="site.email" @click="mailtoSite" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-view',
  data () {
    return {
      site: {
        github: 'https://github.com/Xiao-Glitch',
        email: '1906147358@qq.com'
      }
    }
  },
  methods: {
    visitGithub () {
      window.open(this.site.github, '_blank')
    },
    mailtoSite () {
      window.location.href = `mailto:${this.site.email}`
    }
  }
}
</script>

<style scoped>
.website-intro { padding: 0 12px; background-color: #f7f8fa; }
.intro-content { max-width: 800px; margin: 0 auto; padding: 20px 0; }
.mission-section, .features-section, .stats-section, .tech-section, .contact-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}
h2 { font-size: 18px; margin-bottom: 15px; color: #323233; }
.stats-grid { display: flex; justify-content: space-around; text-align: center; }
.stat-item { flex: 1; padding: 10px; }
.stat-number { font-size: 24px; font-weight: bold; color: #1989fa; }
.stat-label { font-size: 14px; color: #969799; margin-top: 5px; }
.tech-tags { display: flex; flex-wrap: wrap; }
.van-tag { margin: 5px; }
</style>
