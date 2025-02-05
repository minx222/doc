import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Case doc",
  description: "学习文档",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Javascript',
        items: [
          { text: '事件循环', link: '/src/javascript/event-loop' },
          { text: '浏览器', link: '/src/javascript/dom-bom' },
        ]
      },
      {
        text: '设计范式',
        items: [
          { text: '洋葱模型', link: '/src/design-paradigm/onion' }
        ]
      },
      {
        text: '项目介绍',
        items: [
          {
            text: 'ci/cd',
            link: '/src/project/ci-cd/ci-cd'
          }
        ]
      },
      {
        text: '框架',
        items: [
          {
            text: 'Vue',
            items: [
              {
                text: '编译过程',
                link: '/src/framework/vue/transform'
              },
            ]
          },
        ]
      },
      {
        text: '构建工具',
        items: [
          {
            text: 'Vite',
            items: [
              {
                text: 'Rollup',
                link: '/src/build/vite/rollup.md'
              },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
