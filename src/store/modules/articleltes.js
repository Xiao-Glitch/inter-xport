export default {
  name: 'articleltes',
  namespaced: true,
  state: {
    artList: [
      // 前端相关 (8篇)
      {
        id: 1,
        otherId: 1001,
        views: '533',
        likes: '96',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '阿里淘天集团春招前端面经',
        other: '风里追风',
        time: '2023-04-21',
        content: '211本，非科班，春招第一次投阿里，淘天四面技术+一轮HR，被问懵Webpack插件机制，含泪复盘。',
        category: 'frontend',
        pw: '前端'
      },
      {
        id: 2,
        otherId: 1002,
        views: '618',
        likes: '112',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '腾讯WXG前端实习三面记录',
        other: '橘子味的风',
        time: '2022-01-29',
        content: 'WXG事业群，三轮视频面，全程90分钟，手写Promise.all+聊微前端，已OC。',
        category: 'frontend',
        pw: '前端'
      },
      {
        id: 3,
        otherId: 1003,
        views: '289',
        likes: '58',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '字节抖音电商前端凉经',
        other: '半盏流年',
        time: '2022-06-23',
        content: '投抖音电商，一面问React调度器，答不出来，30分钟结束，凉得彻底。',
        category: 'frontend',
        pw: '前端'
      },
      {
        id: 4,
        otherId: 1004,
        views: '476',
        likes: '88',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '美团买菜前端暑期实习SP',
        other: '云深不知处',
        time: '2022-02-24',
        content: '买菜事业部，重业务逻辑，三轮技术面深挖性能指标，已拿SP。',
        category: 'frontend',
        pw: '前端'
      },
      {
        id: 5,
        otherId: 1005,
        views: '555',
        likes: '105',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '快手主站前端四面复盘',
        other: '北海有鹿',
        time: '2023-02-25',
        content: '四轮技术+一轮HR，聊项目聊人生，手写虚拟列表，offer已到账。',
        category: 'frontend',
        pw: '前端'
      },
      {
        id: 6,
        otherId: 1006,
        views: '398',
        likes: '74',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Vue 3组合式API实战技巧',
        other: 'Vue爱好者',
        time: '2024-03-14',
        content: '从Options API到Composition API的平滑迁移，响应式原理深度剖析，性能优化实战经验分享。',
        category: 'frontend',
        pw: '前端'
      },
      {
        id: 7,
        otherId: 1007,
        views: '412',
        likes: '79',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'React 18并发特性详解',
        other: 'React实践者',
        time: '2024-03-09',
        content: 'useTransition、useDeferredValue实战应用，Suspense数据获取新模式，打造更流畅的用户体验。',
        category: 'frontend',
        pw: '前端'
      },
      {
        id: 8,
        otherId: 1008,
        views: '256',
        likes: '51',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'TypeScript高级类型编程',
        other: 'TS专家',
        time: '2024-03-18',
        content: '条件类型、映射类型、模板字面量类型，打造类型安全的极致开发体验。',
        category: 'frontend',
        pw: '前端'
      },

      // 后端相关 (6篇)
      {
        id: 9,
        otherId: 1009,
        views: '722',
        likes: '138',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Spring Boot 3.0新特性深度解析',
        other: 'Java架构师',
        time: '2024-03-12',
        content: '从Spring Boot 2.x升级到3.0的完整指南，新特性实战演示，性能优化技巧全分享。',
        category: 'backend',
        pw: '后端'
      },
      {
        id: 10,
        otherId: 1010,
        views: '465',
        likes: '85',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '微服务架构设计最佳实践',
        other: '云原生专家',
        time: '2024-03-08',
        content: '基于Spring Cloud Alibaba的微服务实战，服务发现、配置管理、流量控制一站式解决方案。',
        category: 'backend',
        pw: '后端'
      },
      {
        id: 11,
        otherId: 1011,
        views: '512',
        likes: '93',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '高并发系统设计实战',
        other: '系统架构师',
        time: '2024-03-20',
        content: '从零到一设计百万QPS系统，缓存、消息队列、分库分表全方位解析。',
        category: 'backend',
        pw: '后端'
      },
      {
        id: 12,
        otherId: 1012,
        views: '428',
        likes: '77',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'MySQL性能优化全攻略',
        other: 'DBA专家',
        time: '2024-03-15',
        content: '索引优化、SQL调优、分库分表，让你的数据库性能提升10倍。',
        category: 'backend',
        pw: '后端'
      },
      {
        id: 13,
        otherId: 1013,
        views: '298',
        likes: '55',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Redis深度应用实践',
        other: '缓存大师',
        time: '2024-03-22',
        content: '从基础数据结构到高级特性，分布式锁、延时队列、布隆过滤器实战详解。',
        category: 'backend',
        pw: '后端'
      },
      {
        id: 14,
        otherId: 1014,
        views: '389',
        likes: '72',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '分布式事务解决方案',
        other: '架构思考者',
        time: '2024-03-25',
        content: 'Seata、TCC、Saga模式对比，在微服务架构中如何保证数据一致性。',
        category: 'backend',
        pw: '后端'
      },

      // Android相关 (5篇)
      {
        id: 15,
        otherId: 1015,
        views: '456',
        likes: '86',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Jetpack Compose进阶指南',
        other: '移动端架构师',
        time: '2024-03-11',
        content: '告别XML布局，拥抱声明式UI。Compose状态管理、主题定制、动画效果全方位解析。',
        category: 'android',
        pw: 'Android'
      },
      {
        id: 16,
        otherId: 1016,
        views: '502',
        likes: '91',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Android性能优化实战',
        other: '性能调优专家',
        time: '2024-03-07',
        content: '内存泄漏检测与修复，启动速度优化，电量消耗控制，让你的App飞起来。',
        category: 'android',
        pw: 'Android'
      },
      {
        id: 17,
        otherId: 1017,
        views: '437',
        likes: '80',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Kotlin协程深度解析',
        other: 'Kotlin布道师',
        time: '2024-03-19',
        content: '从基础概念到高级应用，掌握协程在Android开发中的最佳实践。',
        category: 'android',
        pw: 'Android'
      },
      {
        id: 18,
        otherId: 1018,
        views: '267',
        likes: '48',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Flutter混合开发实践',
        other: '跨端开发者',
        time: '2024-03-23',
        content: '在现有Android项目中集成Flutter，实现原生与跨端的完美融合。',
        category: 'android',
        pw: 'Android'
      },
      {
        id: 19,
        otherId: 1019,
        views: '488',
        likes: '89',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Android安全加固指南',
        other: '安全研究员',
        time: '2024-03-26',
        content: '代码混淆、反调试、数据加密，全方位保护你的App安全。',
        category: 'android',
        pw: 'Android'
      },

      // iOS相关 (5篇)
      {
        id: 20,
        otherId: 1020,
        views: '415',
        likes: '78',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'SwiftUI从入门到精通',
        other: 'iOS开发者',
        time: '2024-03-13',
        content: '声明式语法彻底改变iOS开发方式，结合Combine框架构建响应式应用。',
        category: 'ios',
        pw: 'iOS'
      },
      {
        id: 21,
        otherId: 1021,
        views: '492',
        likes: '69',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'iOS内存管理深度优化',
        other: '底层探索者',
        time: '2024-03-06',
        content: 'ARC原理剖析，循环引用排查技巧，内存峰值控制策略，打造稳定流畅的iOS应用。',
        category: 'ios',
        pw: 'iOS'
      },
      {
        id: 22,
        otherId: 1022,
        views: '356',
        likes: '64',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Swift并发编程实践',
        other: 'Swift专家',
        time: '2024-03-21',
        content: 'async/await、Actor模型，现代Swift并发编程的最佳实践。',
        category: 'ios',
        pw: 'iOS'
      },
      {
        id: 23,
        otherId: 1023,
        views: '423',
        likes: '81',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'iOS架构模式对比',
        other: '架构师之路',
        time: '2024-03-24',
        content: 'MVC、MVVM、VIPER、Clean Architecture，选择适合你项目的架构模式。',
        category: 'ios',
        pw: 'iOS'
      },
      {
        id: 24,
        otherId: 1024,
        views: '378',
        likes: '70',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Core ML模型集成指南',
        other: 'AI移动开发者',
        time: '2024-03-27',
        content: '在iOS应用中集成机器学习模型，实现智能图像识别、自然语言处理等功能。',
        category: 'ios',
        pw: 'iOS'
      },

      // 人工智能相关 (6篇)
      {
        id: 25,
        otherId: 1025,
        views: '689',
        likes: '156',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '大语言模型实战应用指南',
        other: 'AI研究员',
        time: '2024-03-16',
        content: '从Prompt工程到Fine-tuning，从ChatGPT到Claude，全面掌握大模型在业务中的应用。',
        category: 'ai',
        pw: '人工智能'
      },
      {
        id: 26,
        otherId: 1026,
        views: '534',
        likes: '123',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '机器学习模型部署实战',
        other: '算法工程师',
        time: '2024-03-05',
        content: 'TensorFlow Serving、ONNX Runtime、Triton Inference Server，生产环境模型服务化最佳实践。',
        category: 'ai',
        pw: '人工智能'
      },
      {
        id: 27,
        otherId: 1027,
        views: '612',
        likes: '142',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '计算机视觉项目实战',
        other: 'CV工程师',
        time: '2024-03-28',
        content: '从图像分类到目标检测，从语义分割到实例分割，完整项目开发流程。',
        category: 'ai',
        pw: '人工智能'
      },
      {
        id: 28,
        otherId: 1028,
        views: '478',
        likes: '98',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '强化学习入门指南',
        other: 'RL爱好者',
        time: '2024-03-29',
        content: '从Q-learning到深度强化学习，从游戏AI到机器人控制，开启智能决策之旅。',
        category: 'ai',
        pw: '人工智能'
      },
      {
        id: 29,
        otherId: 1029,
        views: '523',
        likes: '115',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '自然语言处理实战',
        other: 'NLP专家',
        time: '2024-03-30',
        content: '文本分类、情感分析、命名实体识别，构建智能文本处理系统。',
        category: 'ai',
        pw: '人工智能'
      },
      {
        id: 30,
        otherId: 1030,
        views: '445',
        likes: '87',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'AI绘画工具使用指南',
        other: '数字艺术家',
        time: '2024-04-01',
        content: 'Midjourney、Stable Diffusion、DALL-E，AI绘画工具全面对比与实战技巧。',
        category: 'ai',
        pw: '人工智能'
      },

      // 开发工具相关 (5篇)
      {
        id: 31,
        otherId: 1031,
        views: '389',
        likes: '72',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'VS Code插件开发全攻略',
        other: '工具爱好者',
        time: '2024-03-04',
        content: '从零开始开发你的第一个VS Code插件，提升开发效率的必备技能。',
        category: 'tools',
        pw: '开发工具'
      },
      {
        id: 32,
        otherId: 1032,
        views: '456',
        likes: '86',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Docker容器化部署指南',
        other: '运维工程师',
        time: '2024-03-03',
        content: '多阶段构建优化镜像大小，Docker Compose编排微服务，生产环境最佳实践。',
        category: 'tools',
        pw: '开发工具'
      },
      {
        id: 33,
        otherId: 1033,
        views: '512',
        likes: '94',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Git高级技巧与团队协作',
        other: '版本控制专家',
        time: '2024-04-02',
        content: '分支策略、rebase、cherry-pick，提升团队协作效率的Git实践。',
        category: 'tools',
        pw: '开发工具'
      },
      {
        id: 34,
        otherId: 1034,
        views: '367',
        likes: '68',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'CI/CD流水线搭建实战',
        other: 'DevOps工程师',
        time: '2024-04-03',
        content: 'Jenkins、GitLab CI、GitHub Actions，自动化构建部署的最佳实践。',
        category: 'tools',
        pw: '开发工具'
      },
      {
        id: 35,
        otherId: 1035,
        views: '421',
        likes: '79',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: 'Linux服务器运维指南',
        other: '系统管理员',
        time: '2024-04-04',
        content: '系统监控、性能调优、安全加固，Linux服务器运维全攻略。',
        category: 'tools',
        pw: '开发工具'
      },

      // 代码人生相关 (5篇)
      {
        id: 36,
        otherId: 1036,
        views: '756',
        likes: '189',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '从实习生到技术总监的十年',
        other: '风里追风',
        time: '2024-03-02',
        content: '分享我在一线互联网公司的成长经历，技术路线选择、团队管理心得、职业发展思考。',
        category: 'career',
        pw: '代码人生'
      },
      {
        id: 37,
        otherId: 1037,
        views: '689',
        likes: '167',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '35岁程序员的突围之路',
        other: '中年码农',
        time: '2024-03-01',
        content: '面对职业瓶颈，我是如何通过技术深度、业务理解、个人品牌实现突破的。',
        category: 'career',
        pw: '代码人生'
      },
      {
        id: 38,
        otherId: 1038,
        views: '523',
        likes: '124',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '技术管理者的成长之路',
        other: '团队领导者',
        time: '2024-04-05',
        content: '从技术专家到管理者的角色转变，团队建设、项目规划、人才培养经验分享。',
        category: 'career',
        pw: '代码人生'
      },
      {
        id: 39,
        otherId: 1039,
        views: '478',
        likes: '112',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '远程工作的利与弊',
        other: '数字游民',
        time: '2024-04-06',
        content: '三年远程工作经验分享，时间管理、沟通协作、工作生活平衡的实践心得。',
        category: 'career',
        pw: '代码人生'
      },
      {
        id: 40,
        otherId: 1040,
        views: '612',
        likes: '145',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '程序员副业创收指南',
        other: '斜杠青年',
        time: '2024-04-07',
        content: '技术博客、开源项目、独立开发，程序员实现额外收入的多种途径。',
        category: 'career',
        pw: '代码人生'
      },

      // 阅读相关 (5篇)
      {
        id: 41,
        otherId: 1041,
        views: '445',
        likes: '98',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '程序员必读的技术书籍推荐',
        other: '书虫程序员',
        time: '2024-02-28',
        content: '从《代码大全》到《设计模式》，从《深入理解计算机系统》到《领域驱动设计》，经典书籍深度解析。',
        category: 'reading',
        pw: '阅读'
      },
      {
        id: 42,
        otherId: 1042,
        views: '389',
        likes: '87',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '高效阅读技术文档的技巧',
        other: '文档达人',
        time: '2024-02-27',
        content: '如何快速理解复杂的技术文档，提取关键信息，应用到实际项目中。',
        category: 'reading',
        pw: '阅读'
      },
      {
        id: 43,
        otherId: 1043,
        views: '512',
        likes: '116',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '技术博客写作指南',
        other: '内容创作者',
        time: '2024-04-08',
        content: '从选题到排版，从推广到变现，打造个人技术品牌的全流程指南。',
        category: 'reading',
        pw: '阅读'
      },
      {
        id: 44,
        otherId: 1044,
        views: '467',
        likes: '103',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '开源项目参与指南',
        other: '开源贡献者',
        time: '2024-04-09',
        content: '如何找到合适的开源项目，贡献代码，建立技术影响力。',
        category: 'reading',
        pw: '阅读'
      },
      {
        id: 45,
        otherId: 1045,
        views: '534',
        likes: '121',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '技术会议参与心得',
        other: '会议达人',
        time: '2024-04-10',
        content: '如何从技术会议中获得最大价值，建立人脉，拓展技术视野。',
        category: 'reading',
        pw: '阅读'
      },

      // 排行榜相关 (5篇)
      {
        id: 46,
        otherId: 1046,
        views: '689',
        likes: '156',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '2024年前端开发趋势排行榜',
        other: '前端观察者',
        time: '2024-03-15',
        content: 'React、Vue、Angular三大框架最新对比，Next.js、Nuxt.js全栈框架强势崛起，看看你的技术栈排第几？',
        category: 'rank',
        pw: '前端'
      },
      {
        id: 47,
        otherId: 1047,
        views: '612',
        likes: '142',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '编程语言热度月榜TOP10',
        other: '技术风向标',
        time: '2024-03-10',
        content: 'TypeScript持续领跑，Rust异军突起，Python稳坐AI领域头把交椅，Java在企业级开发中依然坚挺。',
        category: 'rank',
        pw: '前端'
      },
      {
        id: 48,
        otherId: 1048,
        views: '578',
        likes: '134',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '开发者薪资调查报告',
        other: '职场分析师',
        time: '2024-04-11',
        content: '2024年各技术岗位薪资水平、城市差异、企业类型对比，为你的职业规划提供参考。',
        category: 'rank'
      },
      {
        id: 49,
        otherId: 1049,
        views: '523',
        likes: '118',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '开源项目Star排行榜',
        other: '开源观察家',
        time: '2024-04-12',
        content: '2024年最受欢迎的开源项目TOP20，技术趋势、社区活跃度、商业价值分析。',
        category: 'rank'
      },
      {
        id: 50,
        otherId: 1050,
        views: '667',
        likes: '152',
        avg: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
        title: '技术博客影响力榜单',
        other: '内容分析师',
        time: '2024-04-13',
        content: '全网技术博客影响力TOP50，内容质量、读者互动、商业价值综合评估。',
        category: 'rank'
      }
    ],
    fetched: false
  },
  getters: {
    getArticleList: state => state.artList,

    searchList: state => keywords => {
      if (!keywords) return state.artList
      const kw = keywords.toLowerCase()
      return state.artList.filter(item =>
        item.title.toLowerCase().includes(kw) ||
        item.content.toLowerCase().includes(kw)
      ).slice(0, 10)
    },
    getCategoryList: state => categoryName => {
      return state.artList.filter(item => {
        if (!item.category) return false
        return item.category === categoryName
      })
    },
    hasMore (state) {
      return !state.fetched || state.artList.length === 0
    },
    getCategoryCounts: state => name => {
      return state.artList.filter(item => item.pw === name).length
    }
  },

  mutations: {

  },

  actions: {
  }
}
