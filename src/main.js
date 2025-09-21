import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less'
import ArticleItem from './components/ArticleItem.vue'

Vue.component('ArticleItem', ArticleItem)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
