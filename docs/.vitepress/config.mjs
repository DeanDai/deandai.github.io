import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dean Dai",
  description: "My personal website",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/mylogo.png' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }]
  ],
  themeConfig: {
    logo: { src: '/mylogo.png', width: 24, height: 24 }, 
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pages', link: '/markdown-pages' }
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'My Blog', link: '/markdown-pages' },
          { text: 'My Demos', link: '/my-demos' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeanDai' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/'
    }
  }
})
