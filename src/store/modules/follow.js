export default {
  name: 'follow',
  state: {
    follows: JSON.parse(localStorage.getItem('follows')) || []
  },
  getters: {
    getFollows: state => state.follows
  },
  mutations: {
    addFollow (state, pd) {
      const { otherId, other } = pd
      state.follows.push({ otherId, other })
      localStorage.setItem('follows', JSON.stringify(state.follows))
    },
    removeFollow (state, pd) {
      state.follows = state.follows.filter(item => item.otherId !== pd.otherId)
      localStorage.setItem('follows', JSON.stringify(state.follows))
    }
  }
}
