import Vue from 'vue'
import Vuex from 'vuex'
import articleltes from './modules/articleltes'
import articlteX from './modules/articlteX'
import likes from './modules/likes'
import collects from './modules/collects'
import history from './modules/history.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    articleltes,
    articlteX,
    likes,
    collects,
    history
  }
})
