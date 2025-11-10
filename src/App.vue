<template>
  <div id="app">
      <keep-alive :include="['Home-view']">
        <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // 移动端全局左右滑动手势切换页面
    let startX = 0
    let startY = 0
    let isTouching = false
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
        isTouching = (startX > 30 && startX < window.innerWidth - 30)
      }
    }, { passive: true })
    document.addEventListener('touchend', (e) => {
      if (!isTouching) return
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const dx = endX - startX
      const dy = endY - startY
      // 横向滑动且距离大于更高阈值，且纵向偏移较小
      if (Math.abs(dx) > 120 && Math.abs(dx) > Math.abs(dy) * 2) {
        if (dx > 0) {
          // 右滑，返回上一页
          if (this.$route.path !== '/login' || this.$route.path !== '/register') {
            if (window.history.length > 1) this.$router.back()
          }
        } else {
          // 左滑，前进（如有历史）
          // 可自定义：如切换到下一个 tab 或页面
        }
      }
      isTouching = false
    }, { passive: true })
  }
}
</script>

<style lang="less" scoped>
</style>
