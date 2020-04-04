module.exports = {
    title: '袁愈谷', 
    description: '袁愈谷的博客',
    themeConfig: { //主题配置
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }] //引入favicon
        ],
        search: false, //不要搜索框
        sidebarDepth: 0,
        sidebar: [ //侧边栏
            {
              title: '介绍',
              collapsable: false,
              children: [
                '/'
              ]
            },
            {
              title: '前端',
              collapsable: false,
              children: [ 
                '/font-end/react学习.md',
                '/font-end/javascript高级之路.md',
                '/font-end/vue学习.md'
              ]
            },
            {
              title: 'GO语言',
              collapsable: false,
              children: [ 
                '/go/go语言基础知识.md',
              ]
            }
          ]
    }
}