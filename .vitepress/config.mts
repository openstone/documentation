import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "SaaS ERP",
  description: "SaaS ERP 文档",
  head: [
    ['link', { rel: 'icon', href: '/static/src/img/logo.png'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/static/src/img/logo.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: 'metaoss.com', link: 'https://www.metaoss.com' },
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
                {text: '库存设置', link: '/16.0/warehouse-settings'},
                {text: '采购设置', link: '/16.0/purchase-settings'},
                {text: '销售设置', link: '/16.0/sales-settings'},
                {text: '生产设置', link: '/16.0/production-settings'},
                {text: 'POS设置', link: '/16.0/pos-settings'},
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
    ],
    outline:{
      level: [2,3,4,5,6,7,8,9],
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: '版权 ©2023-2024 <a href="https://www.openstone.cn">上海开石信息技术有限公司</a> <small><a href="https://beian.miit.gov.cn">沪ICP备15046805号-1</a></small>'
    }
  }
})
