<template>
  <div class="test-view">
    <div class="header">
      <h4 v-show="!showSpammer">看累了吧 点击开启禅模式</h4>
      <button @click="showSpammer = true" v-show="!showSpammer">显示</button>
    </div>
    <TipsSpammer v-show="showSpammer"/>
  </div>
</template>

<script>
import TipsSpammer from '@/components/TipsSpammer.vue'
export default {
  name: 'TestView',
  components: {
    TipsSpammer
  },
  data () {
    return {
      showSpammer: false
    }
  },
  activated () {
    this.showSpammer = false
  }
}
</script>

<style lang="less" scoped>
.header {
  margin: 0 auto;
  h4 {
    text-align: center;
    color:var(--color-grey)
  }
  button {
    display: block;
    margin: 0 auto;
    background-color: var(--color-primary);
    border: none;
    color: white;
  }
}
</style>
