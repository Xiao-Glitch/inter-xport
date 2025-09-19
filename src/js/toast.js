import { Toast } from 'vant'

Toast({
  message: '成功',
  duration: 2000,
  icon: 'success'
})

Toast.fail({
  message: '失败',
  duration: 2000,
  icon: 'fail'
})

Toast.loading({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner'
})
