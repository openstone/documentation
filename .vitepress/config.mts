import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "SaaS ERP",
  description: "SaaS ERP 文档",
  head: [
    ['link', { rel: 'icon', href: '/static/src/img/logo.png'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/static/src/img/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文档',
        items: [
          { text: '17.0', link: '/17.0' },
          { text: '16.0', link: '/16.0' }
        ]
      }
    ],

    sidebar: {
      '/16.0/': [
        {
          text: '',
          items: [
            {text: '整体介绍', link: '/16.0/saas-erp-overview'},
            {text: '系统实施', link: '/16.0/system-implementation'},
            {text: '实施全景', link: '/16.0/implementation-overview'},
            {text: '海外贸易、批发行业环境设置', link: '/16.0/oversea-trade-wholesale'},
            {text: '中小型生产制造行业环境设置', link: '/16.0/small-medium-manufacturing'},
            {text: '中小型商业零售行业环境设置', link: '/16.0/small-medium-retailer'},
            {text: '连锁机构、广告行业环境设置', link: '/16.0/agency-advertising'},
            {
              text: '系统设置', collapsed: true,
              items: [
                {text: '系统设置', link: '/16.0/system-settings'},
                {text: '模块安装', link: '/16.0/module-installation'},
                {text: '公司设置', link: '/16.0/company-settings'},
                {text: '会计设置', link: '/16.0/accounting-settings'},
                {text: '产品设置', link: '/16.0/product-settings'},
                {text: '库存设置', link: '/16.0/implementation-overview'},
                {text: '采购设置', link: '/16.0/implementation-overview'},
                {text: '销售设置', link: '/16.0/implementation-overview'},
                {text: '生产设置', link: '/16.0/implementation-overview'},
                {text: 'POS设置', link: '/16.0/implementation-overview'},
              ]
            },
            {text: '用户管理', link: '/16.0/oversea-trade-wholesale'},
            {text: '技术设置', link: '/16.0/oversea-trade-wholesale'},
            {
              text: '个人设置', link: '/16.0/oversea-trade-wholesale',
              items: [
                {text: '修改密码', link: '/16.0/oversea-trade-wholesale'},
              ]

            },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openstone/documentation' }
    ]
  }
})
