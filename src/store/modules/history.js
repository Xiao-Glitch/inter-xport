export default {
  name: 'history',
  state: {
    history: JSON.parse(localStorage.getItem('history')) || []
  },
  getters: {
    gethistory: state => state.history
  },
  mutations: {
    addHistory (state, pd) {
      const isEmpty = state.history.length === 0
      const exists = !isEmpty && state.history.some(item => item.id === pd.id)
      if (isEmpty || !exists) {
        state.history.push(pd)
        localStorage.setItem('history', JSON.stringify(state.history))
        console.log('addHistory', JSON.parse(localStorage.getItem('history')))
      }
    },
    removeHistory (state, pd) {
      state.history = state.history.filter(item => item.id !== pd.id)
      localStorage.setItem('history', JSON.stringify(state.history))
      console.log('removeHistory', JSON.parse(localStorage.getItem('history')))
    }
  }
}
