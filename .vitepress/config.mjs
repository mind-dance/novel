import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hearse novel",
  description: "a novel site maybe disappear at any moment.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: '少年阿宾', link: '/少年阿宾/第1章-房东太太'}
    ],

    sidebar: [
      {
        text: '少年阿宾',
        items: [
          { text: '第一章', link: '/少年阿宾/第1章-房东太太'}
        ]
      }
    ]

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
