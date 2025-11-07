/* eslint-disable no-unused-vars */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Detail from '../../src/views/detail.vue'
// CommentItem 组件虽然未直接使用但需要导入以确保组件正确渲染
import CommentItem from '../../src/components/CommentItem.vue'
import articlteX from '../../src/store/modules/articlteX'
import collects from '../../src/store/modules/collects'
import likes from '../../src/store/modules/likes'
import articleltes from '../../src/store/modules/articleltes'
import history from '../../src/store/modules/history'
import follow from '../../src/store/modules/follow'
import { Toast } from 'vant'

// 创建本地Vue实例
const localVue = createLocalVue()

// 注册插件
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(Toast)

// 创建模拟路由
const router = new VueRouter()

// 模拟localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock

// 模拟document.querySelector
document.querySelector = jest.fn().mockReturnValue({
  addEventListener: jest.fn(),
  style: {}
})

describe('Detail.vue', () => {
  let wrapper
  let store
  let actions

  // 测试数据
  const mockArticle = {
    id: 1,
    title: '测试文章',
    time: '2023-01-01',
    likes: 10,
    views: 5,
    other: '测试作者',
    articleId: 100,
    cons: '<p>测试内容</p>'
  }

  const mockArticleListItem = {
    id: 1,
    otherId: 10
  }

  beforeEach(() => {
    // 创建模拟actions
    actions = {
      addHistory: jest.fn(),
      addLike: jest.fn(),
      removeLike: jest.fn(),
      addColl: jest.fn(),
      removeColl: jest.fn(),
      addFollow: jest.fn(),
      removeFollow: jest.fn()
    }

    // 创建Vuex store
    store = new Vuex.Store({
      modules: {
        articles: {
          state: {
            articleList: [mockArticle]
          },
          ...articles
        },
        collects: {
          state: {
            colls: []
          },
          mutations: {
            addColl: actions.addColl,
            removeColl: actions.removeColl
          },
          ...collects
        },
        likes: {
          state: {
            likes: []
          },
          mutations: {
            addLike: actions.addLike,
            removeLike: actions.removeLike
          },
          ...likes
        },
        articleList: {
          state: {
            artList: [mockArticleListItem]
          },
          ...articleList
        },
        history: {
          state: {},
          mutations: {
            addHistory: actions.addHistory
          },
          ...history
        },
        follow: {
          state: {
            follows: []
          },
          mutations: {
            addFollow: actions.addFollow,
            removeFollow: actions.removeFollow
          },
          ...follow
        }
      }
    })

    // 创建组件包装器
    wrapper = shallowMount(Detail, {
      localVue,
      store,
      router,
      mocks: {
        $route: {
          query: {
            id: 1,
            otherId: 10
          }
        }
      },
      stubs: {
        'van-nav-bar': true,
        'van-icon': true,
        'van-pull-refresh': true,
        'van-button': true
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('应该正确渲染组件', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('应该在挂载时获取文章详情', () => {
    expect(wrapper.vm.detail[0]).toEqual(mockArticle)
    expect(wrapper.vm.articleId).toBe(100)
  })

  it('应该正确处理点赞功能', async () => {
    // 模拟用户已登录
    localStorageMock.getItem.mockReturnValue('fake_token')

    // 初始状态
    expect(wrapper.vm.like).toBe(false)

    // 点击点赞
    await wrapper.vm.adtLike()
    expect(wrapper.vm.like).toBe(true)
    expect(actions.addLike).toHaveBeenCalled()

    // 再次点击取消点赞
    await wrapper.vm.adtLike()
    expect(wrapper.vm.like).toBe(false)
    expect(actions.removeLike).toHaveBeenCalled()
  })

  it('应该正确处理收藏功能', async () => {
    // 模拟用户已登录
    localStorageMock.getItem.mockReturnValue('fake_token')

    // 初始状态
    expect(wrapper.vm.star).toBe(false)

    // 点击收藏
    await wrapper.vm.adtCollect()
    expect(wrapper.vm.star).toBe(true)
    expect(actions.addColl).toHaveBeenCalled()

    // 再次点击取消收藏
    await wrapper.vm.adtCollect()
    expect(wrapper.vm.star).toBe(false)
    expect(actions.removeColl).toHaveBeenCalled()
  })

  it('应该正确处理关注功能', async () => {
    // 初始状态
    expect(wrapper.vm.follow).toBe(false)

    // 点击关注
    await wrapper.vm.adtFollow()
    expect(wrapper.vm.follow).toBe(true)
    expect(actions.addFollow).toHaveBeenCalled()

    // 再次点击取消关注
    await wrapper.vm.adtFollow()
    expect(wrapper.vm.follow).toBe(false)
    expect(actions.removeFollow).toHaveBeenCalled()
  })

  it('应该在未登录时提示用户登录', async () => {
    // 模拟用户未登录
    localStorageMock.getItem.mockReturnValue(null)

    // 尝试点赞
    await wrapper.vm.adtLike()
    expect(wrapper.vm.like).toBe(false)

    // 尝试收藏
    await wrapper.vm.adtCollect()
    expect(wrapper.vm.star).toBe(false)
  })

  it('应该正确处理搜索功能', async () => {
    wrapper.setData({ searchInput: '测试搜索' })

    const pushSpy = jest.spyOn(router, 'push')
    await wrapper.vm.toSearch()

    expect(pushSpy).toHaveBeenCalledWith({
      path: '/search',
      query: {
        keywords: '测试搜索'
      }
    })
  })

  it('应该正确刷新页面', (done) => {
    const reloadSpy = jest.spyOn(global.location, 'reload')
    wrapper.vm.onRefresh()

    setTimeout(() => {
      expect(wrapper.vm.isLoding).toBe(false)
      expect(reloadSpy).toHaveBeenCalled()
      done()
    }, 1200)
  })
})
