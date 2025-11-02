export default {
  namespaced: true,
  name: 'articlteX',
  state: {
    arxLists: [
      {
        id: 1,
        otherId: 1001,
        articleId: '20230421001',
        views: '533',
        likes: '96',
        other: '风里追风',
        time: '2023-04-21',
        category: '前端',
        title: '阿里淘天集团春招前端面经',
        cons: `<div class="detail-wrap">
          <h3>阿里淘天集团春招前端面经</h3>
          <p class="meta"><span>🎓 211 本非科班</span><span>⏰ 4 技术面 + 1 HR</span><span>❌ 挂于 Webpack 插件</span></p>
          <h4>一、Webpack 插件连环炮</h4>
          <ul>
            <li>tapable 钩子执行顺序：面试官详细询问了 tapable 钩子的同步和异步执行机制，以及如何通过插件来修改钩子的执行流程[^32^]。</li>
            <li>如何统计各 chunk 的重复模块？：我尝试从代码分割的角度解释，但面试官追问了更细节的实现方式，包括如何通过 AST 分析代码依赖[^32^]。</li>
            <li>手写：将未使用组件自动剔除的插件：我展示了基本的插件框架，但在实现细节上卡住了，面试官提示了可以结合模块的依赖关系和使用情况来实现[^32^]。</li>
          </ul>
          <h4>二、四面深挖性能</h4>
          <ul>
            <li>首屏 6 s → 1.8 s 的 3 个关键指标：我提到了 LCP、FID 和 TTI，面试官追问了如何通过代码优化和资源管理来提升这些指标[^32^]。</li>
            <li>如何不依赖 CDN 把 vendor 体积降 40%？：我提出了代码分割、Tree-shaking 和动态导入等方法，面试官对如何实现高效的代码分割特别感兴趣[^32^]。</li>
          </ul>
          <h4>复盘金句</h4>
          <blockquote>「非科班不是短板，短板是简历里不敢写深度。」</blockquote>
          <p class="tips">⭐ 插件机制先画图再写码，钩子类型别背错。</p>
        </div>`
      },
      {
        id: 2,
        otherId: 1002,
        articleId: '20220129001',
        views: '618',
        likes: '112',
        title: '腾讯WXG前端实习三面记录',
        other: '橘子味的风',
        time: '2022-01-29',
        category: '前端',
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
        otherId: 1003,
        articleId: '20220623001',
        views: '289',
        likes: '58',
        title: '字节抖音电商前端凉经',
        other: '半盏流年',
        time: '2022-06-23',
        category: '前端',
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
        otherId: 1004,
        articleId: '20220224001',
        views: '476',
        likes: '88',
        title: '美团买菜前端暑期实习SP',
        other: '云深不知处',
        time: '2022-02-24',
        category: '前端',
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
        otherId: 1005,
        articleId: '20230225001',
        views: '555',
        likes: '105',
        title: '快手主站前端四面复盘',
        other: '北海有鹿',
        time: '2023-02-25',
        category: '前端',
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
        otherId: 1006,
        articleId: '20220726001',
        views: '398',
        likes: '74',
        title: '京东物流前端春招面经',
        other: '青衫故人',
        time: '2022-07-26',
        category: '前端',
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
        otherId: 1007,
        articleId: '20220727001',
        views: '412',
        likes: '79',
        title: '蚂蚁保险前端实习三面',
        other: '南风过境',
        time: '2022-07-27',
        category: '前端',
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
        otherId: 1008,
        articleId: '20220928001',
        views: '256',
        likes: '51',
        title: 'B站漫画前端一面凉经',
        other: '寄梦山海',
        time: '2022-09-28',
        category: '前端',
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
        otherId: 1009,
        articleId: '20250129001',
        views: '722',
        likes: '138',
        title: '拼多多买菜前端秋招SP',
        other: '星野旅客',
        time: '2025-01-29',
        category: '前端',
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
        otherId: 1010,
        articleId: '20250430001',
        views: '465',
        likes: '85',
        title: '网易有道前端实习复盘',
        other: '月亮营业中',
        time: '2025-04-30',
        category: '前端',
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
        otherId: 1011,
        articleId: '20250621001',
        views: '512',
        likes: '93',
        title: '小米汽车前端提前批面经',
        other: '落日飞车',
        time: '2025-06-21',
        category: '前端',
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
        otherId: 1012,
        articleId: '20220212001',
        views: '428',
        likes: '77',
        title: '滴滴国际化前端三面',
        other: '雾里看花',
        time: '2022-02-12',
        category: '前端',
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
        otherId: 1013,
        articleId: '20220223001',
        views: '298',
        likes: '55',
        title: '携程机票前端实习凉经',
        other: '风吹樱落',
        time: '2022-02-23',
        category: '前端',
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
        otherId: 1014,
        articleId: '20220204001',
        views: '389',
        likes: '72',
        title: '新浪微博前端社招复盘',
        other: '旧词新梦',
        time: '2022-02-04',
        category: '前端',
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
        otherId: 1015,
        articleId: '20220205001',
        views: '456',
        likes: '86',
        title: '商汤科技前端实习三面',
        other: '清茶与酒',
        time: '2022-02-05',
        category: '前端',
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
        otherId: 1016,
        articleId: '20220206001',
        views: '502',
        likes: '91',
        title: '知乎前端校招面经',
        other: '北巷南猫',
        time: '2022-02-06',
        category: '前端',
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
        otherId: 1017,
        articleId: '20220207001',
        views: '437',
        likes: '80',
        title: '贝壳找房前端暑期实习',
        other: '海芋清风',
        time: '2022-02-07',
        category: '前端',
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
        otherId: 1018,
        articleId: '20220208001',
        views: '267',
        likes: '48',
        title: '讯飞前端实习一面凉经',
        other: '山川与海',
        time: '2022-02-08',
        category: '前端',
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
        otherId: 1019,
        articleId: '20220209001',
        views: '488',
        likes: '89',
        title: 'OPPO互联网前端SP',
        other: '南笙北梦',
        time: '2022-02-09',
        category: '前端',
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
        otherId: 1020,
        articleId: '20220210001',
        views: '415',
        likes: '78',
        title: '深信服前端校招复盘',
        other: '墨染倾城',
        time: '2022-02-10',
        category: '前端',
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
        otherId: 1021,
        articleId: '20220120001',
        views: '492',
        likes: '69',
        title: '宇宙头条校招前端面经',
        other: '不风流怎样倜傥',
        time: '2022-01-20',
        category: '前端',
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
      },
      {
        id: 22,
        otherId: 1022,
        articleId: '20220321001',
        views: '356',
        likes: '64',
        title: 'Swift并发编程实践',
        other: 'Swift专家',
        time: '2024-03-21',
        category: 'ios',
        cons: `<div class="detail-wrap">
          <h3>Swift 并发编程实践</h3>
          <p class="meta"><span>🚀 并发特性</span><span>⏰ 3 轮</span><span>✅ Offer</span></p>
          <h4>一、async/await 与 Actor</h4>
          <ul>
            <li>任务取消与优先级传播</li>
            <li>Actor 解决共享可变状态</li>
          </ul>
          <h4>二、性能调优</h4>
          <ul>
            <li>避免主线程阻塞的实战技巧</li>
            <li>内存开销分析与优化</li>
          </ul>
          <blockquote>「讲透协程比背 API 更重要。」</blockquote>
          <p class="tips">⭐ 带一个小 demo 展示竞态和解决方案。</p>
        </div>`
      },
      {
        id: 23,
        otherId: 1023,
        articleId: '20240324001',
        views: '423',
        likes: '81',
        title: 'iOS架构模式对比',
        other: '架构师之路',
        time: '2024-03-24',
        category: 'ios',
        cons: `<div class="detail-wrap">
          <h3>iOS 架构模式对比</h3>
          <p class="meta"><span>📱 架构设计</span><span>⏰ 2 轮</span><span>✅ Offer</span></p>
          <h4>MVC / MVVM / VIPER / Clean</h4>
          <ul>
            <li>分层负责边界与依赖倒置</li>
            <li>测试驱动开发下的架构选型</li>
          </ul>
          <blockquote>「架构是为了团队速度，不是个人炫技。」</blockquote>
          <p class="tips">⭐ 用图表对比职责和测试成本。</p>
        </div>`
      },
      {
        id: 24,
        otherId: 1024,
        articleId: '20240427001',
        views: '378',
        likes: '70',
        title: 'Core ML模型集成指南',
        other: 'AI移动开发者',
        time: '2024-03-27',
        category: 'ios',
        cons: `<div class="detail-wrap">
          <h3>Core ML 模型集成指南</h3>
          <p class="meta"><span>🤖 移动 AI</span><span>⏰ 实战篇</span><span>✅ 工程化</span></p>
          <h4>模型转换与量化</h4>
          <ul>
            <li>ONNX → CoreML 转换注意事项</li>
            <li>INT8 量化带来的性能与精度折中</li>
          </ul>
          <blockquote>「把模型做成组件，封装好版本兼容策略。」</blockquote>
          <p class="tips">⭐ 在真机上做对比 Bench 而不是模拟器。</p>
        </div>`
      },
      {
        id: 25,
        otherId: 1025,
        articleId: '20240316001',
        views: '689',
        likes: '156',
        title: '大语言模型实战应用指南',
        other: 'AI研究员',
        time: '2024-03-16',
        category: '人工智能',
        cons: `<div class="detail-wrap">
          <h3>大语言模型实战应用指南</h3>
          <p class="meta"><span>🧠 LLM 应用</span><span>⏰ 实战</span><span>✅ 技术沉淀</span></p>
          <h4>Prompt 工程到微调</h4>
          <ul>
            <li>Few-shot 与 Chain-of-Thought 案例</li>
            <li>微调样本构造与过拟合风险</li>
          </ul>
          <blockquote>「应用不是堆模型，而是把模型变成产品能力。」</blockquote>
          <p class="tips">⭐ 写好评估指标，别只看人类主观感受。</p>
        </div>`
      },
      {
        id: 26,
        otherId: 1026,
        articleId: '20240305001',
        views: '534',
        likes: '123',
        title: '机器学习模型部署实战',
        other: '算法工程师',
        time: '2024-03-05',
        category: '人工智能',
        cons: `<div class="detail-wrap">
          <h3>机器学习模型部署实战</h3>
          <p class="meta"><span>☁️ 服务化</span><span>⏰ 实战</span><span>✅ 上线</span></p>
          <h4>Serving 选型</h4>
          <ul>
            <li>Triton / TensorFlow Serving / ONNX Runtime 比较</li>
            <li>延迟与吞吐的工程取舍</li>
          </ul>
          <blockquote>「模型上线后，监控比训练更重要。」</blockquote>
          <p class="tips">⭐ 加入 A/B 实验验证模型价值。</p>
        </div>`
      },
      {
        id: 27,
        otherId: 1027,
        articleId: '20240328001',
        views: '612',
        likes: '142',
        title: '计算机视觉项目实战',
        other: 'CV工程师',
        time: '2024-03-28',
        category: '人工智能',
        cons: `<div class="detail-wrap">
          <h3>计算机视觉项目实战</h3>
          <p class="meta"><span>📷 CV 工程</span><span>⏰ 项目级</span><span>✅ 实战</span></p>
          <h4>从数据到部署</h4>
          <ul>
            <li>数据增强策略与标签质量控制</li>
            <li>模型蒸馏与边缘部署实践</li>
          </ul>
          <blockquote>「工程化的关键在于数据质量控制。」</blockquote>
          <p class="tips">⭐ 写出数据流水线的监控指标。</p>
        </div>`
      },
      {
        id: 28,
        otherId: 1028,
        articleId: '20240329001',
        views: '478',
        likes: '98',
        title: '强化学习入门指南',
        other: 'RL爱好者',
        time: '2024-03-29',
        category: '人工智能',
        cons: `<div class="detail-wrap">
          <h3>强化学习入门指南</h3>
          <p class="meta"><span>🎮 RL 基础</span><span>⏰ 教程</span><span>✅ 示例</span></p>
          <h4>基本概念</h4>
          <ul>
            <li>策略梯度与价值方法对比</li>
            <li>探索策略与样本效率</li>
          </ul>
          <blockquote>「从小环境学起，debug 比算法重要。」</blockquote>
          <p class="tips">⭐ 把训练曲线画出来说明改进点。</p>
        </div>`
      },
      {
        id: 29,
        otherId: 1029,
        articleId: '20240330001',
        views: '523',
        likes: '115',
        title: '自然语言处理实战',
        other: 'NLP专家',
        time: '2024-03-30',
        category: '人工智能',
        cons: `<div class="detail-wrap">
          <h3>自然语言处理实战</h3>
          <p class="meta"><span>📝 NLP 工程</span><span>⏰ 实战</span><span>✅ 工程化</span></p>
          <h4>任务与评估</h4>
          <ul>
            <li>数据冷启动与微调策略</li>
            <li>指标稳定性的置信区间估计</li>
          </ul>
          <blockquote>「评价才是产品级 NLP 的门槛。」</blockquote>
          <p class="tips">⭐ 先把数据/标注问题解决再谈模型。」</p>
        </div>`
      },
      {
        id: 30,
        otherId: 1030,
        articleId: '20240401001',
        views: '445',
        likes: '87',
        title: 'AI绘画工具使用指南',
        other: '数字艺术家',
        time: '2024-04-01',
        category: '人工智能',
        cons: `<div class="detail-wrap">
          <h3>AI 绘画工具使用指南</h3>
          <p class="meta"><span>🎨 生成艺术</span><span>⏰ 教程</span><span>✅ 实践</span></p>
          <h4>提示词与风格控制</h4>
          <ul>
            <li>多模态提示与约束技巧</li>
            <li>后处理与高分辨率放大策略</li>
          </ul>
          <blockquote>「工具多，但创意才是稀缺资源。」</blockquote>
          <p class="tips">⭐ 保留原始 prompt 便于迭代。</p>
        </div>`
      },
      {
        id: 31,
        otherId: 1031,
        articleId: '20240304001',
        views: '389',
        likes: '72',
        title: 'VS Code插件开发全攻略',
        other: '工具爱好者',
        time: '2024-03-04',
        category: '开发工具',
        cons: `<div class="detail-wrap">
          <h3>VS Code 插件开发全攻略</h3>
          <p class="meta"><span>🧩 插件开发</span><span>⏰ 教程</span><span>✅ 上线</span></p>
          <h4>骨架与 API</h4>
          <ul>
            <li>ActivationEvents 与性能</li>
            <li>Webview 与消息通信模式</li>
          </ul>
          <blockquote>「插件简洁，配置少即是王道。」</blockquote>
          <p class="tips">⭐ 发布前跑 3 个平台兼容性测试。</p>
        </div>`
      },
      {
        id: 32,
        otherId: 1032,
        articleId: '20240303001',
        views: '456',
        likes: '86',
        title: 'Docker容器化部署指南',
        other: '运维工程师',
        time: '2024-03-03',
        category: '开发工具',
        cons: `<div class="detail-wrap">
          <h3>Docker 容器化部署指南</h3>
          <p class="meta"><span>🐳 容器化</span><span>⏰ 实战</span><span>✅ 可复现</span></p>
          <h4>多阶段构建与镜像瘦身</h4>
          <ul>
            <li>按层缓存优化构建速度</li>
            <li>安全扫描与镜像签名</li>
          </ul>
          <blockquote>「小镜像，快拉取，少漏洞。」</blockquote>
          <p class="tips">⭐ 写一个 reproducible build 的 CI Job。</p>
        </div>`
      },
      {
        id: 33,
        otherId: 1033,
        articleId: '20240402001',
        views: '512',
        likes: '94',
        title: 'Git高级技巧与团队协作',
        other: '版本控制专家',
        time: '2024-04-02',
        category: '开发工具',
        cons: `<div class="detail-wrap">
          <h3>Git 高级技巧与团队协作</h3>
          <p class="meta"><span>🔧 版本控制</span><span>⏰ 实战</span><span>✅ 团队经</span></p>
          <h4>策略与冲突处理</h4>
          <ul>
            <li>rebase 与 merge 的语义选择</li>
            <li>大型 PR 的拆分方法</li>
          </ul>
          <blockquote>「好的分支策略是团队的效率基金。」</blockquote>
          <p class="tips">⭐ 写好 PR 模板并强制执行代码审查。</p>
        </div>`
      },
      {
        id: 34,
        otherId: 1034,
        articleId: '20240403001',
        views: '367',
        likes: '68',
        title: 'CI/CD流水线搭建实战',
        other: 'DevOps工程师',
        time: '2024-04-03',
        category: '开发工具',
        cons: `<div class="detail-wrap">
          <h3>CI/CD 流水线搭建实战</h3>
          <p class="meta"><span>⚙️ 自动化</span><span>⏰ 工程</span><span>✅ 持续交付</span></p>
          <h4>可观察与回滚</h4>
          <ul>
            <li>蓝绿/金丝雀发布实践</li>
            <li>自动回滚触发条件</li>
          </ul>
          <blockquote>「流水线不仅是编译，也是质量门槛。」</blockquote>
          <p class="tips">⭐ 把不可变部署写成团队约定。</p>
        </div>`
      },
      {
        id: 35,
        otherId: 1035,
        articleId: '20240404001',
        views: '421',
        likes: '79',
        title: 'Linux服务器运维指南',
        other: '系统管理员',
        time: '2024-04-04',
        category: '开发工具',
        cons: `<div class="detail-wrap">
          <h3>Linux 服务器运维指南</h3>
          <p class="meta"><span>🖥️ 运维</span><span>⏰ 实践</span><span>✅ 稳定</span></p>
          <h4>监控与备份</h4>
          <ul>
            <li>Prometheus + AlertManager 使用策略</li>
            <li>备份与恢复演练频率</li>
          </ul>
          <blockquote>「能恢复比能报警更重要。」</blockquote>
          <p class="tips">⭐ 做一次全链路恢复演练并记录结果。</p>
        </div>`
      },
      {
        id: 36,
        otherId: 1036,
        articleId: '20240302001',
        views: '756',
        likes: '189',
        title: '从实习生到技术总监的十年',
        other: '风里追风',
        time: '2024-03-02',
        category: '代码人生',
        cons: `<div class="detail-wrap">
          <h3>从实习生到技术总监的十年</h3>
          <p class="meta"><span>🏆 成长路径</span><span>⏰ 经验分享</span><span>✅ 职业</span></p>
          <h4>关键节点</h4>
          <ul>
            <li>从 IC 到 Manager 的能力跃迁</li>
            <li>如何在团队里做决策与授权</li>
          </ul>
          <blockquote>「专业+影响力 = 职业上限。」</blockquote>
          <p class="tips">⭐ 用数据说明你带来的影响。</p>
        </div>`
      },
      {
        id: 37,
        otherId: 1037,
        articleId: '20240301001',
        views: '689',
        likes: '167',
        title: '35岁程序员的突围之路',
        other: '中年码农',
        time: '2024-03-01',
        category: '代码人生',
        cons: `<div class="detail-wrap">
          <h3>35 岁程序员的突围之路</h3>
          <p class="meta"><span>📈 职业规划</span><span>⏰ 观点</span><span>✅ 可行</span></p>
          <h4>技能与心态</h4>
          <ul>
            <li>如何维持技术深度与管理能力</li>
            <li>副业与时间管理策略</li>
          </ul>
          <blockquote>「你永远不会晚于愿意开始的那天。」</blockquote>
          <p class="tips">⭐ 把经验写成可复制的步骤。</p>
        </div>`
      },
      {
        id: 38,
        otherId: 1038,
        articleId: '20240405001',
        views: '523',
        likes: '124',
        title: '技术管理者的成长之路',
        other: '团队领导者',
        time: '2024-04-05',
        category: '代码人生',
        cons: `<div class="detail-wrap">
          <h3>技术管理者的成长之路</h3>
          <p class="meta"><span>🧭 管理</span><span>⏰ 实战</span><span>✅ 经验</span></p>
          <h4>组织与人</h4>
          <ul>
            <li>目标分解与 OKR 对齐</li>
            <li>高绩效团队的培养方法</li>
          </ul>
          <blockquote>「管理就是把复杂问题拆成可执行的小事。」</blockquote>
          <p class="tips">⭐ 记录一套例会与汇报模板。</p>
        </div>`
      },
      {
        id: 39,
        otherId: 1039,
        articleId: '20240406001',
        views: '478',
        likes: '112',
        title: '远程工作的利与弊',
        other: '数字游民',
        time: '2024-04-06',
        category: '代码人生',
        cons: `<div class="detail-wrap">
          <h3>远程工作的利与弊</h3>
          <p class="meta"><span>🌍 远程</span><span>⏰ 经验</span><span>✅ 实操</span></p>
          <h4>协作与边界</h4>
          <ul>
            <li>异步沟通规范</li>
            <li>心理健康与工作边界维护</li>
          </ul>
          <blockquote>「远程不是放任，要有清晰的交付节奏。」</blockquote>
          <p class="tips">⭐ 建立周例会与可视化看板。</p>
        </div>`
      },
      {
        id: 40,
        otherId: 1040,
        articleId: '20240407001',
        views: '612',
        likes: '145',
        title: '程序员副业创收指南',
        other: '斜杠青年',
        time: '2024-04-07',
        category: '代码人生',
        cons: `<div class="detail-wrap">
          <h3>程序员副业创收指南</h3>
          <p class="meta"><span>💼 副业</span><span>⏰ 指南</span><span>✅ 实操</span></p>
          <h4>路径与模式</h4>
          <ul>
            <li>内容创作、咨询与产品化服务</li>
            <li>时间切片与任务打包技巧</li>
          </ul>
          <blockquote>「把你的知识变成可售卖的产品。」</blockquote>
          <p class="tips">⭐ 先做小规模验证再放大。</p>
        </div>`
      },
      {
        id: 41,
        otherId: 1041,
        articleId: '20240228001',
        views: '445',
        likes: '98',
        title: '程序员必读的技术书籍推荐',
        other: '书虫程序员',
        time: '2024-02-28',
        category: '阅读',
        cons: `<div class="detail-wrap">
          <h3>程序员必读的技术书籍推荐</h3>
          <p class="meta"><span>📚 书单</span><span>⏰ 推荐</span><span>✅ 深读</span></p>
          <h4>分类与推荐</h4>
          <ul>
            <li>入门必读：结构化学习路线</li>
            <li>进阶必读：设计模式与系统设计</li>
          </ul>
          <blockquote>「读书不是积累，而是把知识转化为思维工具。」</blockquote>
          <p class="tips">⭐ 写读书笔记并形成自己的知识卡片。</p>
        </div>`
      },
      {
        id: 42,
        otherId: 1042,
        articleId: '20240227001',
        views: '389',
        likes: '87',
        title: '高效阅读技术文档的技巧',
        other: '文档达人',
        time: '2024-02-27',
        category: '阅读',
        cons: `<div class="detail-wrap">
          <h3>高效阅读技术文档的技巧</h3>
          <p class="meta"><span>📘 文档</span><span>⏰ 技巧</span><span>✅ 速学</span></p>
          <h4>速读与摘录</h4>
          <ul>
            <li>目录先行，关键点标注</li>
            <li>实践驱动理解而非死记硬背</li>
          </ul>
          <blockquote>「读懂文档的速度决定你的学习效率。」</blockquote>
          <p class="tips">⭐ 把关键命令和示例演练一遍。</p>
        </div>`
      },
      {
        id: 43,
        otherId: 1043,
        articleId: '20240408001',
        views: '512',
        likes: '116',
        title: '技术博客写作指南',
        other: '内容创作者',
        time: '2024-04-08',
        category: '阅读',
        cons: `<div class="detail-wrap">
          <h3>技术博客写作指南</h3>
          <p class="meta"><span>✍️ 写作</span><span>⏰ 指南</span><span>✅ 传播</span></p>
          <h4>结构与传播</h4>
          <ul>
            <li>标题与封面决定点击率</li>
            <li>技术细节与复现步骤并重</li>
          </ul>
          <blockquote>「好的文章像好 demo，一看就能跑。」</blockquote>
          <p class="tips">⭐ 把代码片段做成可复制的 Gist。</p>
        </div>`
      },
      {
        id: 44,
        otherId: 1044,
        articleId: '20240409001',
        views: '467',
        likes: '103',
        title: '开源项目参与指南',
        other: '开源贡献者',
        time: '2024-04-09',
        category: '阅读',
        cons: `<div class="detail-wrap">
          <h3>开源项目参与指南</h3>
          <p class="meta"><span>🌐 开源</span><span>⏰ 入门</span><span>✅ 参与</span></p>
          <h4>如何选项目与贡献</h4>
          <ul>
            <li>如何定位适合自己的 issue</li>
            <li>PR 写作规范与测试要求</li>
          </ul>
          <blockquote>「贡献不是刷星，是解决真实问题。」</blockquote>
          <p class="tips">⭐ 写好 PR 模板并跟进 Review 反馈。</p>
        </div>`
      },
      {
        id: 45,
        otherId: 1045,
        articleId: '20240410001',
        views: '534',
        likes: '121',
        title: '技术会议参与心得',
        other: '会议达人',
        time: '2024-04-10',
        category: '阅读',
        cons: `<div class="detail-wrap">
          <h3>技术会议参与心得</h3>
          <p class="meta"><span>🎤 会议</span><span>⏰ 经验</span><span>✅ 学习</span></p>
          <h4>如何高效参加会议</h4>
          <ul>
            <li>事先设定学习目标</li>
            <li>把会议内容转化为行动项</li>
          </ul>
          <blockquote>「听讲不如做笔记并复现。」</blockquote>
          <p class="tips">⭐ 把好看的幻灯片截图并归档。</p>
        </div>`
      },
      {
        id: 46,
        otherId: 1046,
        articleId: '20240315001',
        views: '689',
        likes: '156',
        title: '2024年前端开发趋势排行榜',
        other: '前端观察者',
        time: '2024-03-15',
        category: '排行榜',
        cons: `<div class="detail-wrap">
          <h3>2024 年前端开发趋势排行榜</h3>
          <p class="meta"><span>📊 趋势</span><span>⏰ 报告</span><span>✅ 洞察</span></p>
          <h4>框架与工具排行</h4>
          <ul>
            <li>React / Vue / Angular 最新对比</li>
            <li>Server Components 与 SSR 的实践差异</li>
          </ul>
          <blockquote>「趋势会变，但解决真实问题的工具永远有市场。」</blockquote>
          <p class="tips">⭐ 用数据支持你的结论而非主观臆断。</p>
        </div>`
      },
      {
        id: 47,
        otherId: 1047,
        articleId: '20240310001',
        views: '612',
        likes: '142',
        title: '编程语言热度月榜TOP10',
        other: '技术风向标',
        time: '2024-03-10',
        category: '排行榜',
        cons: `<div class="detail-wrap">
          <h3>编程语言热度月榜 TOP10</h3>
          <p class="meta"><span>💻 语言</span><span>⏰ 月榜</span><span>✅ 分析</span></p>
          <h4>语言趋势观察</h4>
          <ul>
            <li>TypeScript 持续走高</li>
            <li>Rust 在系统级与性能场景受欢迎</li>
          </ul>
          <blockquote>「选语言前先看你要解决的问题。」</blockquote>
          <p class="tips">⭐ 根据行业岗位需求选择重点学习方向。</p>
        </div>`
      },
      {
        id: 48,
        otherId: 1048,
        articleId: '20240411001',
        views: '578',
        likes: '134',
        title: '开发者薪资调查报告',
        other: '职场分析师',
        time: '2024-04-11',
        category: '排行榜',
        cons: `<div class="detail-wrap">
          <h3>开发者薪资调查报告</h3>
          <p class="meta"><span>💰 薪资</span><span>⏰ 报告</span><span>✅ 数据</span></p>
          <h4>行业与地域差异</h4>
          <ul>
            <li>一线城市与二三线的岗位差异</li>
            <li>行业（AI/FinTech/ToB）对薪资溢价的影响</li>
          </ul>
          <blockquote>「谈薪前先做数据准备，别只靠 HR 的口头承诺。」</blockquote>
          <p class="tips">⭐ 准备好你的市场对比和成就清单。</p>
        </div>`
      },
      {
        id: 49,
        otherId: 1049,
        articleId: '20240412001',
        views: '523',
        likes: '118',
        title: '开源项目Star排行榜',
        other: '开源观察家',
        time: '2024-04-12',
        category: '排行榜',
        cons: `<div class="detail-wrap">
          <h3>开源项目 Star 排行榜</h3>
          <p class="meta"><span>⭐ 开源</span><span>⏰ 排行</span><span>✅ 参考</span></p>
          <h4>项目成长观察</h4>
          <ul>
            <li>社区活跃度与贡献者质量</li>
            <li>如何判断一个项目是否值得长期依赖</li>
          </ul>
          <blockquote>「Star 只是表象，社区和维护才是长期价值。」</blockquote>
          <p class="tips">⭐ 看 Issue 关闭率与 PR 合并速度。</p>
        </div>`
      },
      {
        id: 50,
        otherId: 1050,
        articleId: '20240413001',
        views: '667',
        likes: '152',
        title: '技术博客影响力榜单',
        other: '内容分析师',
        time: '2024-04-13',
        category: '排行榜',
        cons: `<div class="detail-wrap">
          <h3>技术博客影响力榜单</h3>
          <p class="meta"><span>📣 影响力</span><span>⏰ 排行</span><span>✅ 分析</span></p>
          <h4>评估维度</h4>
          <ul>
            <li>内容深度与可复现性</li>
            <li>传播渠道与被引用次数</li>
          </ul>
          <blockquote>「有价值的内容比刷量更能建立个人品牌。」</blockquote>
          <p class="tips">⭐ 把案例和数据放在文章显眼位置。</p>
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
