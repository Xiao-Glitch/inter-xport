export default {
  name: 'collects',
  state: {
    colls: JSON.parse(localStorage.getItem('colls')) || []
  },
  getters: {
    getColls: state => state.colls
  },
  mutations: {
    addColl (state, pd) {
      state.colls.push(pd)
      localStorage.setItem('colls', JSON.stringify(state.colls))
      // console.log('colls', JSON.parse(localStorage.getItem('colls')))
    },
    removeColl (state, pd) {
      state.colls = state.colls.filter(item => item.id !== pd.id)
      localStorage.setItem('colls', JSON.stringify(state.colls))
      // console.log('removecoll', JSON.parse(localStorage.getItem('colls')))
    }
  }
}
