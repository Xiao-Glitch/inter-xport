<template>
  <div class="tips-container">
    <transition-group name="tip">
      <div
        v-for="tip in tips"
        :key="tip.id"
        class="tip-window"
        :style="{
          backgroundColor: tip.color,
          left: tip.x + 'px',
          top: tip.y + 'px'
        }"
      >
        <div class="tip-content">{{ tip.text }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'TipsSpammer',

  data () {
    return {
      tips: [],
      tipTexts: [
        '要记得喝水哦(～￣▽￣)～', '要多吃水果', '天冷了多穿衣服',
        '祝每天都有开心快乐', '记得早睡(✿◠‿◠)', '要好好吃饭 {°•̀ω•́°}',
        '一个人也要好好的(｡･ω･｡)', '期待每一次见面 /// - ^ - ///',
        '要多喝水啦～', '要好好爱自己~>ω<)', '要加油哦~', '万事如意',
        '记得每天笑一笑^▽^', '愿你每天都能发现生活中的小确幸～(๑・̀ㅂ・́)و✧',
        '记得照顾好自己哟(๑•̀ㅂ•́)و✧', '记得给心灵也洒点光~(✿◠‿◠)'
      ],
      colors: [
        '#00BFFF', '#FF69B4', '#32CD32', '#87CEFA', '#FFD700',
        '#FFB6C1', '#98FB98', '#BA55D3', '#FF6347', '#00CED1'
      ],
      nextId: 0,
      timer: null
    }
  },

  mounted () {
    this.startSpawning()
  },

  unmounted () {
    this.stopSpawning()
    // 清除所有提示框
    this.tips = []
  },

  activated () {
    this.startSpawning()
  },

  methods: {
    startSpawning () {
      const createTip = () => {
        // 随机生成提示框数据
        // console.log(this.tips.length)
        const tip = {
          id: this.nextId++,
          text: this.tipTexts[Math.floor(Math.random() * this.tipTexts.length)],
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          x: Math.floor(Math.random() * (window.innerWidth - 300)),
          y: Math.floor(Math.random() * (window.innerHeight - 100))
        }

        this.tips.push(tip)

        // 5秒后自动消失
        // setTimeout(() => {
        //   this.tips = this.tips.filter(t => t.id !== tip.id)
        // }, 2000)
        setTimeout(() => {
          this.tips = this.tips.filter(t => t.id !== tip.id)
        }, 2000)

        // 随机间隔0.5-2秒创建下一个
        const delay = Math.floor((Math.random() * 2000) + 1000)
        this.timer = setTimeout(createTip, delay)
      }
      createTip()
    },

    stopSpawning () {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style scoped>
.tips-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.tip-window {
  position: fixed;
  width: 220px;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: "微软雅黑", sans-serif;
  font-size: 13px;
  font-weight: bold;
  pointer-events: none; /* 允许点击穿透 */
}

.tip-content {
  text-align: center;
  padding: 10px;
  line-height: 1.4;
}

/* 动画效果 */
.tip-enter-active, .tip-leave-active {
  transition: opacity 0.3s ease;
}

.tip-enter-from, .tip-leave-to {
  opacity: 0;
}
</style>
