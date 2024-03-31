import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dean Dai - Personal Website",
  description: "My personal website",
  head: [
    // This is the fav icon. The favicon should be placed in public directory. If base is set, use /base/mylogo.png
    ['link', { rel: 'icon', type: 'image/png', href: '/mylogo.png' }], // Would render <link rel="icon" href="/mylogo.png">
  ],
  themeConfig: {
    siteTitle: 'Dean',
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
    ],

    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024-present Dean Dai'
    }
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
