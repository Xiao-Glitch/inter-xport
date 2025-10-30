import Vue from 'vue'
import Vuex from 'vuex'
import articleltes from './modules/articleltes'
import articlteX from './modules/articlteX'
import likes from './modules/likes'
import collects from './modules/collects'
import history from './modules/history.js'
import comment from './modules/comment'
import follow from './modules/follow'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    articleltes,
    articlteX,
    likes,
    collects,
    history,
    comment,
    follow
  }
})

// 初始化评论数据
store.dispatch('comment/initComments')

export default store
