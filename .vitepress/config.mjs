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
      { text: '目录', link: '/main-menu'},
      { text: '关于', link: '/about/about'}
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
            { text: '第五章 图书馆', link: '/少年阿宾/5'},
            { text: '第六章 逛街', link: '/少年阿宾/6'},
            { text: '第七章 打工', link: '/少年阿宾/7'},
            { text: '第八章 理发', link: '/少年阿宾/8'},
            { text: '第九章 莲莲', link: '/少年阿宾/9'},
            { text: '第十章 寒假开始', link: '/少年阿宾/10'},
            { text: '第十一章 表妹孟卉', link: '/少年阿宾/11'},
            { text: '第十二章 母女关系', link: '/少年阿宾/12'},
            { text: '第十三章 钥匙游戏', link: '/少年阿宾/13'},
            { text: '第十四章 通史课', link: '/少年阿宾/14'},
            { text: '第十五章 浴室春嬉', link: '/少年阿宾/15'},
            { text: '第十六章 美人计', link: '/少年阿宾/16'},
            { text: '第十七章 饯别', link: '/少年阿宾/17'},
            { text: '第十八章 南行夜快车', link: '/少年阿宾/18'},
            { text: '第十九章 垦丁之旅', link: '/少年阿宾/19'},
            { text: '第二十章 万里桐', link: '/少年阿宾/20'},
            { text: '第二十一章 仲夏夜之梦', link: '/少年阿宾/21'},
            { text: '第二十二章 同学会', link: '/少年阿宾/22'},
            { text: '第二十三章 房东太太', link: '/少年阿宾/23'},
            { text: '第二十四章 房东太太', link: '/少年阿宾/24'},
            { text: '第二十五章 房东太太', link: '/少年阿宾/25'},
            { text: '第二十六章 房东太太', link: '/少年阿宾/26'},
            { text: '第二十七章 房东太太', link: '/少年阿宾/27'},
            { text: '第二十八章 房东太太', link: '/少年阿宾/28'},
            { text: '第二十九章 房东太太', link: '/少年阿宾/29'},
            { text: '第三十章 房东太太', link: '/少年阿宾/30'},
            { text: '第三十一章 房东太太', link: '/少年阿宾/31'},
            { text: '第三十二章 房东太太', link: '/少年阿宾/32'},
            { text: '第三十三章 房东太太', link: '/少年阿宾/33'},
            { text: '第三十四章 房东太太', link: '/少年阿宾/34'},
            { text: '第三十五章 房东太太', link: '/少年阿宾/35'},
            { text: '第三十六章 房东太太', link: '/少年阿宾/36'},
            { text: '第三十七章 房东太太', link: '/少年阿宾/37'},
            { text: '第三十八章 房东太太', link: '/少年阿宾/38'},
            { text: '第三十九章 房东太太', link: '/少年阿宾/39'},
            { text: '第四十章 房东太太', link: '/少年阿宾/40'},
            { text: '第四十一章 房东太太', link: '/少年阿宾/41'},
            { text: '第四十二章 房东太太', link: '/少年阿宾/42'},
            { text: '第四十三章 房东太太', link: '/少年阿宾/43'},
            { text: '第四十四章 房东太太', link: '/少年阿宾/44'},
            { text: '第四十五章 房东太太', link: '/少年阿宾/45'},
            { text: '第四十六章 房东太太', link: '/少年阿宾/46'},
            { text: '第四十七章 房东太太', link: '/少年阿宾/47'},
            { text: '第四十八章 房东太太', link: '/少年阿宾/48'},
            { text: '第四十九章 房东太太', link: '/少年阿宾/49'},
            { text: '第五十章 房东太太', link: '/少年阿宾/50'},
            { text: '第五十一章 房东太太', link: '/少年阿宾/51'},
            { text: '第五十二章 房东太太', link: '/少年阿宾/52'},
            { text: '第五十三章 房东太太', link: '/少年阿宾/53'},
            { text: '第五十四章 房东太太', link: '/少年阿宾/54'},
            { text: '第五十五章 房东太太', link: '/少年阿宾/55'},
            { text: '第五十六章 房东太太', link: '/少年阿宾/56'},
            { text: '第五十七章 房东太太', link: '/少年阿宾/57'},
            { text: '第五十八章 房东太太', link: '/少年阿宾/58'},
            { text: '第五十九章 房东太太', link: '/少年阿宾/59'},
            { text: '第六十章 房东太太', link: '/少年阿宾/60'},
            { text: '第六十一章 房东太太', link: '/少年阿宾/61'},
            { text: '第六十二章 房东太太', link: '/少年阿宾/62'},
            { text: '第六十三章 房东太太', link: '/少年阿宾/63'},
            { text: '第六十四章 房东太太', link: '/少年阿宾/64'},
            { text: '第六十五章 房东太太', link: '/少年阿宾/65'},
            { text: '第六十六章 房东太太', link: '/少年阿宾/66'},
            { text: '第六十七章 房东太太', link: '/少年阿宾/67'},
          ]
        }
      ]
    }
    
    

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
