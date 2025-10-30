export default {
  name: 'comment',
  namespaced: true,
  state: {
    comments: [
      {
        id: 9001,
        commentId: 'a20250608001',
        articleId: '20230421001',
        name: '小卡拉蜜',
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        content: '艾马特拉斯',
        time: '2025-06-08 14:30:00',
        like: 0,
        liked: false,
        children: [
          {
            id: 90011,
            name: '安安',
            content: '收到，谢谢提醒',
            time: '2025-06-08 15:00:10',
            like: 2,
            liked: false
          },
          {
            id: 90012,
            name: '安安',
            content: '收到，艾马特拉斯',
            time: '2025-06-08 15:00:14',
            like: 3,
            liked: false
          },
          {
            id: 90014,
            name: '安安',
            content: '收到，谢谢提醒',
            time: '2025-06-08 15:00:18',
            like: 1,
            liked: false
          },
          {
            id: 90015,
            name: '安安',
            content: '收到，艾马特拉斯',
            time: '2025-06-08 15:00:29',
            like: 3,
            liked: false
          }
        ],
        childCount: 4
      },
      {
        id: 9002,
        commentId: 'a20240607001',
        articleId: '20230421001',
        name: '安安说前端',
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        content: 'WebStorm 激活教程已更新',
        time: '2024-06-07 10:00:00',
        like: 12,
        liked: true,
        children: [],
        childCount: 0
      }
    ]
  },
  getters: {
    getComments: state => id => state.comments.filter(item => item.articleId === id)
  },
  mutations: {
    addComment (state, comment) {
      state.comments.unshift(comment)
      // 同步到 localStorage
      localStorage.setItem('comments', JSON.stringify(state.comments))
    },
    setComments (state, comments) {
      state.comments = comments
    }
  },
  actions: {
    initComments ({ commit, state }) {
      const local = localStorage.getItem('comments')
      if (local) {
        commit('setComments', JSON.parse(local))
      } else {
        // 首次加载时也同步一次默认数据到 localStorage
        localStorage.setItem('comments', JSON.stringify(state.comments))
      }
    }
  }
}
