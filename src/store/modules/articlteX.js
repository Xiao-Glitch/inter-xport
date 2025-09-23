export default {
  namepaced: true,
  name: 'articlteX',
  state: {
    arxLists: [
      {
        id: 1,
        views: '533',
        likes: '96',
        other: '风里追风',
        time: '2023-04-21',
        title: '阿里淘天集团春招前端面经',
        cons: `<div class="detail-wrap">
          <h3>阿里淘天集团春招前端面经</h3>
          <p class="meta"><span>🎓 211 本非科班</span><span>⏰ 4 技术面 + 1 HR</span><span>❌ 挂于 Webpack 插件</span></p>
          <h4>一、Webpack 插件连环炮</h4>
          <ul>
            <li>tapable 钩子执行顺序</li>
            <li>如何统计各 chunk 的重复模块？</li>
            <li>手写：将未使用组件自动剔除的插件</li>
          </ul>
          <h4>二、四面深挖性能</h4>
          <ul>
            <li>首屏 6 s → 1.8 s 的 3 个关键指标</li>
            <li>如何不依赖 CDN 把 vendor 体积降 40%？</li>
          </ul>
          <h4>复盘金句</h4>
          <blockquote>「非科班不是短板，短板是简历里不敢写深度。」</blockquote>
          <p class="tips">⭐ 插件机制先画图再写码，钩子类型别背错。</p>
        </div>`
      },
      {
        id: 2,
        views: '618',
        likes: '112',
        title: '腾讯WXG前端实习三面记录',
        other: '橘子味的风',
        time: '2022-01-29',
        cons: `<div class="detail-wrap">
          <h3>腾讯 WXG 前端实习三面记录</h3>
          <p class="meta"><span>🌏 WXG 事业群</span><span>⏰ 90 min 视频面</span><span>✅ OC</span></p>
          <h4>一、手写 Promise.all 带限流</h4>
          <ul>
            <li>错误隔离 + 中断后续</li>
            <li>并发数控制为 5</li>
          </ul>
          <h4>二、微前端实战</h4>
          <ul>
            <li>single-spa 与 qiankun 差异 3 连</li>
            <li>子应用样式隔离失效如何排查？</li>
          </ul>
          <h4>三、业务亮点</h4>
          <p>微信「收藏」页 0.4 s 骨架屏优化过程。</p>
          <blockquote>「WXG 看重工程闭环，说清『为什么做』比『怎么做』更重要。」</blockquote>
          <p class="tips">⭐ 微前端准备 1 张架构图 + 1 个踩坑故事。</p>
        </div>`
      },
      {
        id: 3,
        views: '289',
        likes: '58',
        title: '字节抖音电商前端凉经',
        other: '半盏流年',
        time: '2022-06-23',
        cons: `<div class="detail-wrap">
          <h3>字节抖音电商前端凉经</h3>
          <p class="meta"><span>📦 抖音电商</span><span>⏰ 30 min 结束</span><span>❌ 一面挂</span></p>
          <h4>React 调度器盲区</h4>
          <ul>
            <li>时间切片原理</li>
            <li>lane 模型优先级反转场景</li>
            <li>为什么需要连续调度？</li>
          </ul>
          <h4>凉因总结</h4>
          <p>只答出“fiber”，未讲“饥饿防止”→ 直接终止。</p>
          <blockquote>「不会就说不会，别让面试官帮你挖坟。」</blockquote>
          <p class="tips">⭐ 调度器 = 3 张图 + 2 个生活化比喻。</p>
        </div>`
      },
      {
        id: 4,
        views: '476',
        likes: '88',
        title: '美团买菜前端暑期实习SP',
        other: '云深不知处',
        time: '2022-02-24',
        cons: `<div class="detail-wrap">
          <h3>美团买菜前端暑期实习 SP</h3>
          <p class="meta"><span>🛒 买菜事业部</span><span>⏰ 3 技术面</span><span>✅ SP</span></p>
          <h4>一、性能指标攻防</h4>
          <ul>
            <li>LCP 异常飙高，如何 10 min 定位图片？</li>
            <li>FMP 与 FCP 差值过大说明什么？</li>
          </ul>
          <h4>二、业务逻辑深坑</h4>
          <ul>
            <li>秒杀倒计时与客户端时间不一致？</li>
            <li>订单列表下拉刷新冲突解决。</li>
          </ul>
          <blockquote>「重业务 = 把指标翻译成钱。」</blockquote>
          <p class="tips">⭐ 简历里把“秒开率”写成“帮业务多卖 3% 菜”。</p>
        </div>`
      },
      {
        id: 5,
        views: '555',
        likes: '105',
        title: '快手主站前端四面复盘',
        other: '北海有鹿',
        time: '2023-02-25',
        cons: `<div class="detail-wrap">
          <h3>快手主站前端四面复盘</h3>
          <p class="meta"><span>🎞️ 主站 Feed</span><span>⏰ 4+1 轮</span><span>✅ Offer</span></p>
          <h4>一、手写虚拟列表</h4>
          <ul>
            <li>动态高度回收算法</li>
            <li>缓冲区域计算</li>
          </ul>
          <h4>二、聊人生套路</h4>
          <ul>
            <li>如何平衡技术深度与业务交付？</li>
            <li>被问“五年后你不在快手怎么办？”</li>
          </ul>
          <blockquote>「技术通过，聊人生不过 = 0。」</blockquote>
          <p class="tips">⭐ 准备 3 个“失败故事”体现成长。</p>
        </div>`
      },
      {
        id: 6,
        views: '398',
        likes: '74',
        title: '京东物流前端春招面经',
        other: '青衫故人',
        time: '2022-07-26',
        cons: `<div class="detail-wrap">
          <h3>京东物流前端春招面经</h3>
          <p class="meta"><span>🚚 物流赛道</span><span>⏰ 3 技术面</span><span>✅ Offer</span></p>
          <h4>GIS 地图优化</h4>
          <ul>
            <li>轨迹回放 10 万点卡顿，如何抽稀？</li>
            <li>WebWorker 解析 GeoJSON 实战。</li>
          </ul>
          <h4>三面手写</h4>
          <ul>
            <li>基于 canvas 的轨迹进度条</li>
            <li>支持拖拽定位到任意帧</li>
          </ul>
          <blockquote>「ToB 场景，性能 = 钱 + 油。」</blockquote>
          <p class="tips">⭐ 地图题必背“抽稀 + 索引 + 分层”三板斧。</p>
        </div>`
      },
      {
        id: 7,
        views: '412',
        likes: '79',
        title: '蚂蚁保险前端实习三面',
        other: '南风过境',
        time: '2022-07-27',
        cons: `<div class="detail-wrap">
          <h3>蚂蚁保险前端实习三面</h3>
          <p class="meta"><span>🛡️ 保险业务</span><span>⏰ 3 技术面</span><span>✅ OC</span></p>
          <h4>一、低代码搭建</h4>
          <ul>
            <li>表单 200+ 字段如何做差量渲染？</li>
            <li>JSON Schema 嵌套联动校验</li>
          </ul>
          <h4>二、表单校验深度</h4>
          <ul>
            <li>异步校验触发时机</li>
            <li>错误提示优先级策略</li>
          </ul>
          <blockquote>「保险最怕填错，前端兜底是最后一道防线。」</blockquote>
          <p class="tips">⭐ 把“字段”说成“风险因子”更对口味。</p>
        </div>`
      },
      {
        id: 8,
        views: '256',
        likes: '51',
        title: 'B站漫画前端一面凉经',
        other: '寄梦山海',
        time: '2022-09-28',
        cons: `<div class="detail-wrap">
          <h3>B 站漫画前端一面凉经</h3>
          <p class="meta"><span>📚 漫画阅读器</span><span>⏰ 30 min</span><span>❌ 挂</span></p>
          <h4>Canvas 翻页动画</h4>
          <ul>
            <li>矩阵变换实现卷曲</li>
            <li>手势速度如何映射到角度？</li>
          </ul>
          <h4>凉因</h4>
          <p>只做过 CSS 翻转，未研究过 3D 矩阵 → 答不出。</p>
          <blockquote>「二次元场景，不会矩阵别谈翻页。」</blockquote>
          <p class="tips">⭐ 提前写个 mini 翻页 Demo 带 GitHub 链接。</p>
        </div>`
      },
      {
        id: 9,
        views: '722',
        likes: '138',
        title: '拼多多买菜前端秋招SP',
        other: '星野旅客',
        time: '2025-01-29',
        cons: `<div class="detail-wrap">
          <h3>拼多多买菜前端秋招 SP</h3>
          <p class="meta"><span>🛒 买菜事业部</span><span>⏰ 秋招提前批</span><span>✅ SP</span></p>
          <h4>秒杀并发优化</h4>
          <ul>
            <li>库存接口 5 w QPS，如何防超卖？</li>
            <li>前端按钮 0.2 s 防抖 → 后端令牌桶</li>
          </ul>
          <h4>薪资爆表 Tips</h4>
          <ul>
            <li>量化：接口耗时降 30% → 多承载 2 k 单</li>
            <li>把“钱”写在简历最显眼位置</li>
          </ul>
          <blockquote>「能算钱，就能谈薪。」</blockquote>
          <p class="tips">⭐ 准备 1 份“我为公司多赚了 X 元”草稿。</p>
        </div>`
      },
      {
        id: 10,
        views: '465',
        likes: '85',
        title: '网易有道前端实习复盘',
        other: '月亮营业中',
        time: '2025-04-30',
        cons: `<div class="detail-wrap">
          <h3>网易有道前端实习复盘</h3>
          <p class="meta"><span>📟 教育硬件</span><span>⏰ 3 技术面</span><span>✅ OC</span></p>
          <h4>WebView 优化</h4>
          <ul>
            <li>首帧 1.2 s → 0.5 s 直降方案</li>
            <li>离线包 diff 增量 70%</li>
          </ul>
          <h4>JSBridge 手写</h4>
          <ul>
            <li>promise 化原生调用</li>
            <li>支持回调顺序乱序恢复</li>
          </ul>
          <blockquote>「硬件低频换芯片，前端高频换体验。」</blockquote>
          <p class="tips">⭐ 带个自家设备现场演示，好感 +50。</p>
        </div>`
      },
      {
        id: 11,
        views: '512',
        likes: '93',
        title: '小米汽车前端提前批面经',
        other: '落日飞车',
        time: '2025-06-21',
        cons: `<div class="detail-wrap">
          <h3>小米汽车前端提前批面经</h3>
          <p class="meta"><span>🚗 新能源车载大屏</span><span>⏰ 3 技术面</span><span>✅ OC</span></p>
          <h4>Flutter 混合开发</h4>
          <ul>
            <li>引擎多实例内存暴涨解决</li>
            <li>原生导航栈与 Flutter 路由同步</li>
          </ul>
          <h4>车载场景坑</h4>
          <ul>
            <li>700 nit 强光下配色如何保障？</li>
            <li>车规级 85° 高温白屏排查</li>
          </ul>
          <blockquote>「车规：-40 ~ 85 ℃，前端也要过高低温。」</blockquote>
          <p class="tips">⭐ 简历写“车规级”三个字，HR 秒筛。</p>
        </div>`
      },
      {
        id: 12,
        views: '428',
        likes: '77',
        title: '滴滴国际化前端三面',
        other: '雾里看花',
        time: '2022-02-12',
        cons: `<div class="detail-wrap">
          <h3>滴滴国际化前端三面</h3>
          <p class="meta"><span>🌍 国际化打车</span><span>⏰ 3 技术面</span><span>✅ Offer</span></p>
          <h4>多语言时区</h4>
          <ul>
            <li>moment 精简版手写</li>
            <li>如何 0 依赖算夏令时？</li>
          </ul>
          <h4>业务特色</h4>
          <ul>
            <li>号码国家码输入组件设计</li>
            <li>阿拉伯语 RTL 布局适配</li>
          </ul>
          <blockquote>「出国第一坑：时区 + 字体 + 阅读顺序。」</blockquote>
          <p class="tips">⭐ 把电脑时区切利雅得，现场演示。</p>
        </div>`
      },
      {
        id: 13,
        views: '298',
        likes: '55',
        title: '携程机票前端实习凉经',
        other: '风吹樱落',
        time: '2022-02-23',
        cons: `<div class="detail-wrap">
          <h3>携程机票前端实习凉经</h3>
          <p class="meta"><span>✈️ 机票搜索</span><span>⏰ 2 轮</span><span>❌ 二面挂</span></p>
          <h4>虚拟滚动翻车</h4>
          <ul>
            <li>回收机制答成“display:none”</li>
            <li>未考虑高度缓存 → 白屏</li>
          </ul>
          <h4>面试官提示</h4>
          <p>“用对象池，别用 DOM 当仓库。”</p>
          <blockquote>「10 w 条数据不回收，用户手机先回收你。」</blockquote>
          <p class="tips">⭐ 提前在 CodePen 写 1w 行 Demo。</p>
        </div>`
      },
      {
        id: 14,
        views: '389',
        likes: '72',
        title: '新浪微博前端社招复盘',
        other: '旧词新梦',
        time: '2022-02-04',
        cons: `<div class="detail-wrap">
          <h3>新浪微博前端社招复盘</h3>
          <p class="meta"><span>📱 3 年经验跳槽</span><span>⏰ 4 轮</span><span>✅ Offer</span></p>
          <h4>高可用架构</h4>
          <ul>
            <li>灰度发布前端 SDK 设计</li>
            <li>白屏 1 min 自动降级方案</li>
          </ul>
          <h4>绩效怎么谈？</h4>
          <ul>
            <li>把“绩效”翻译成“业务增量”</li>
            <li>STAR 法只写 3 条，不堆叠</li>
          </ul>
          <blockquote>「社招 = 证明你帮老公司挣过钱。」</blockquote>
          <p class="tips">⭐ 带一张老公司绩效截图（脱敏）。</p>
        </div>`
      },
      {
        id: 15,
        views: '456',
        likes: '86',
        title: '商汤科技前端实习三面',
        other: '清茶与酒',
        time: '2022-02-05',
        cons: `<div class="detail-wrap">
          <h3>商汤科技前端实习三面</h3>
          <p class="meta"><span>🤖 AI 独角兽</span><span>⏰ 3 技术面</span><span>✅ OC</span></p>
          <h4>WebGL 人脸识别</h4>
          <ul>
            <li>着色器实现灰度 + 边缘检测</li>
            <li>帧率 30 fps 优化到 60 fps</li>
          </ul>
          <h4>三面写着色器</h4>
          <ul>
            <li>sobel 算子手写</li>
            <li>纹理缓存复用</li>
          </ul>
          <blockquote>「AI 公司，不会 GLSL 等于前端半残。」</blockquote>
          <p class="tips">⭐ 把 shader 传 GitHub，面试官直接跑。</p>
        </div>`
      },
      {
        id: 16,
        views: '502',
        likes: '91',
        title: '知乎前端校招面经',
        other: '北巷南猫',
        time: '2022-02-06',
        cons: `<div class="detail-wrap">
          <h3>知乎前端校招面经</h3>
          <p class="meta"><span>💬 内容社区</span><span>⏰ 4 轮</span><span>✅ Offer</span></p>
          <h4>富文本编辑器</h4>
          <ul>
            <li>OT 算法解决协同冲突</li>
            <li>光标漂移 0.5 行修复</li>
          </ul>
          <h4>协同冲突案例</h4>
          <ul>
            <li>同一段落两人同时加粗</li>
            <li>本地撤销如何不覆盖远端？</li>
          </ul>
          <blockquote>「内容社区，最后拼的是协同体验。」</blockquote>
          <p class="tips">⭐ 现场开两个浏览器模拟协同，效果翻倍。</p>
        </div>`
      },
      {
        id: 17,
        views: '437',
        likes: '80',
        title: '贝壳找房前端暑期实习',
        other: '海芋清风',
        time: '2022-02-07',
        cons: `<div class="detail-wrap">
          <h3>贝壳找房前端暑期实习</h3>
          <p class="meta"><span>🏠 居住服务</span><span>⏰ 3 技术面</span><span>✅ OC</span></p>
          <h4>低代码搭建</h4>
          <ul>
            <li>房源详情 100+ 字段配置化</li>
            <li>渲染性能从 1.2 s → 0.4 s</li>
          </ul>
          <h4>性能指标</h4>
          <ul>
            <li>CLS 过高？图片占位算法</li>
            <li>TTI 与 SEO 如何双赢？</li>
          </ul>
          <blockquote>「找房看 3 秒，慢 0.1 秒少 1 个用户。」</blockquote>
          <p class="tips">⭐ 把“低代码”说成“低门槛”，HR 秒懂。</p>
        </div>`
      },
      {
        id: 18,
        views: '267',
        likes: '48',
        title: '讯飞前端实习一面凉经',
        other: '山川与海',
        time: '2022-02-08',
        cons: `<div class="detail-wrap">
          <h3>讯飞前端实习一面凉经</h3>
          <p class="meta"><span>🎤 语音识别</span><span>⏰ 2 轮</span><span>❌ 二面挂</span></p>
          <h4>WebAudio 盲区</h4>
          <ul>
            <li>频谱可视化未用 AnalyserNode</li>
            <li>采样率与解码器不匹配 → 噪声</li>
          </ul>
          <h4>手写题翻车</h4>
          <p>要求实时绘制频谱，答成“定时器 + DOM”→ 直接挂。</p>
          <blockquote>「音频前端，不会 Worklet 别开口。」</blockquote>
          <p class="tips">⭐ 提前写个实时麦克风频谱 Demo。</p>
        </div>`
      },
      {
        id: 19,
        views: '488',
        likes: '89',
        title: 'OPPO互联网前端SP',
        other: '南笙北梦',
        time: '2022-02-09',
        cons: `<div class="detail-wrap">
          <h3>OPPO 互联网前端 SP</h3>
          <p class="meta"><span>📱 系统应用</span><span>⏰ 3 轮</span><span>✅ SP</span></p>
          <h4>包体积优化</h4>
          <ul>
            <li>图标 0.8 MB → 80 KB 字体化</li>
            <li>webpack 拆包 + 动态 polyfill</li>
          </ul>
          <h4>面试技巧</h4>
          <ul>
            <li>把“KB”换算成“用户流量费”</li>
            <li>现场展示 bundle-analyzer 报告</li>
          </ul>
          <blockquote>「系统级 App，每 1 MB 都是用户钱包。」</blockquote>
          <p class="tips">⭐ 用“省流量”代替“减体积”，业务体感更强。</p>
        </div>`
      },
      {
        id: 20,
        views: '415',
        likes: '78',
        title: '深信服前端校招复盘',
        other: '墨染倾城',
        time: '2022-02-10',
        cons: `<div class="detail-wrap">
          <h3>深信服前端校招复盘</h3>
          <p class="meta"><span>🔒 安全赛道</span><span>⏰ 3 轮</span><span>✅ Offer</span></p>
          <h4>XSS 攻防</h4>
          <ul>
            <li>富文本 7 层过滤链路</li>
            <li>DOM 型 XSS 自动扫描脚本</li>
          </ul>
          <h4>沙箱隔离</h4>
          <ul>
            <li>with + iframe 双沙箱原理</li>
            <li>postMessage 数据污染校验</li>
          </ul>
          <blockquote>「安全前端，先把信任归零。」</blockquote>
          <p class="tips">⭐ 简历写“攻防”而非“防御”，亮点翻倍。</p>
        </div>`
      },
      {
        id: 21,
        views: '492',
        likes: '69',
        title: '宇宙头条校招前端面经',
        other: '不风流怎样倜傥',
        time: '2022-01-20',
        cons: `<div class="detail-wrap">
          <h3>宇宙头条校招前端面经</h3>
          <p class="meta"><span>🌱 大三小白</span><span>⏰ 30 天 5 轮面试</span><span>✅ 已 OC</span></p>
          <h4>一、笔试 AK 技巧</h4>
          <ul>
            <li>算法：K 大子序列和 → 堆维护 N*logN</li>
            <li>手写：深比较（支持 Date/RegExp/循环引用）</li>
          </ul>
          <h4>二、一面 65min 速记</h4>
          <ol>
            <li>事件循环输出顺序题</li>
            <li>Promise.all 带错误处理</li>
            <li>EventEmitter（含 once）</li>
          </ol>
          <h4>三、二面 80min 工程拷问</h4>
          <ul>
            <li>首屏 2.3 MB → 870 KB 拆分方案</li>
            <li>PerformanceObserver 上报长任务</li>
            <li>webpack 自动上传 source-map 插件</li>
          </ul>
          <h4>四、三面 90min 架构</h4>
          <ul>
            <li>一套代码三端输出（App/小程序/H5）</li>
            <li>手写最小 React-reconciler</li>
            <li>WebAssembly 落地路径</li>
          </ul>
          <h4>五、四面/HR 核心问答</h4>
          <p><b>Q:</b> 10 人团队 3 个月重构 200+ 老页面？<br/>
          <b>A:</b> 阶梯式迁移 + 双容器并行</p>
          <h4>六、复盘金句</h4>
          <blockquote>「死的是重复劳动，活的是工程能力 + 业务理解」</blockquote>
          <p class="tips">⭐ 简历写量化数据，反问聊成长，手写练白板。</p>
        </div>`
      }
    ]
  },
  getters: {
    getDetail: state => id => {
      const del = state.arxLists.filter(item => item.id === id)
      return del.length > 0 ? del : []
    }
  },
  mutations: {
  }
}
