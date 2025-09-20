export default {
  name: 'likes',
  state: {
    likes: JSON.parse(localStorage.getItem('likes')) || []
  },
  getters: {
    getLikes: state => state.likes
  },
  mutations: {
    addLike (state, pd) {
      state.likes.push(pd)
      localStorage.setItem('likes', JSON.stringify(state.likes))
      console.log('addLike', JSON.parse(localStorage.getItem('likes')))
    },
    removeLike (state, pd) {
      state.likes = state.likes.filter(item => item.id !== pd.id)
      localStorage.setItem('likes', JSON.stringify(state.likes))
      console.log('removeLike', JSON.parse(localStorage.getItem('likes')))
    }
  }
}
