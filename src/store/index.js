import Vue from 'vue'
import Vuex from 'vuex'
import articleltes from './modules/articleltes'
import articlteX from './modules/articlteX'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    articleltes,
    articlteX
  }
})
