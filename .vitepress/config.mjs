import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/novel/',
  title: "hearse novel",
  description: "a novel site maybe disappear at any moment.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: '少年阿宾', link: '/少年阿宾/toc'}
    ],

    sidebar: {
      '/少年阿宾/': [
        {
          text: '少年阿宾',
          items: [
            { text: '目录', link:'/少年阿宾/toc'},
            { text: '第一章 房东太太', link: '/少年阿宾/1'},
            { text: '第二章 学姐', link: '/少年阿宾/2'},
            { text: '第三章 初识钰慧', link: '/少年阿宾/3'},
            { text: '第四章 迷乱舞会', link: '/少年阿宾/4'},
            { text: '第五章 房东太太', link: '/少年阿宾/5'},
            { text: '第六章 房东太太', link: '/少年阿宾/6'},
            { text: '第七章 房东太太', link: '/少年阿宾/7'},
            { text: '第八章 房东太太', link: '/少年阿宾/8'},
            { text: '第九章 房东太太', link: '/少年阿宾/9'},
            { text: '第十章 房东太太', link: '/少年阿宾/10'},
            { text: '第十一章 房东太太', link: '/少年阿宾/11'},
            { text: '第十二章 房东太太', link: '/少年阿宾/12'},
            { text: '第十三章 房东太太', link: '/少年阿宾/13'},
          ]
        }
      ]
    }
    
    

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
